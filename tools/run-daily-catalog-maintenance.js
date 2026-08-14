const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");
const {
  exactProductModelMatch,
  isExcludedListing,
  isExplicitlyDiscontinued,
  isReviewedPchomeBinding,
} = require("./catalog-maintenance-policy");
const {
  matchesPchomeProductId,
  selectPchomeCurrentPrice,
} = require("./pchome-product-api");
const { normalizeExchangeDate } = require("./update-maintenance-metadata");
const { readDashboardProducts } = require("./read-dashboard-products");
const {
  buildJapaneseBrandReview,
  sameCatalogIdentity,
} = require("./japanese-brand-audit");
const {
  JAPANESE_BRAND_ROSTER,
  JAPANESE_BRAND_REVIEW_STATUSES,
} = require("./dashboard-contract");

const ROOT = path.resolve(__dirname, "..");
const PRODUCT_DIR = path.join(ROOT, "products");
const WRITE = process.argv.includes("--write");
const DRAFT = process.argv.includes("--draft");
const DATE_ARGUMENT = process.argv.find((argument) => argument.startsWith("--date="));
const BASELINE_ARGUMENT = process.argv.find((argument) => argument.startsWith("--baseline-ref="));
const MAINTENANCE_DATE = DATE_ARGUMENT?.slice("--date=".length)
  || process.env.MAINTENANCE_DATE
  || new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Taipei" }).format(new Date());
const BASELINE_REF = BASELINE_ARGUMENT?.slice("--baseline-ref=".length) || "HEAD";
const CONCURRENCY = Number(process.env.MAINTENANCE_CONCURRENCY || 16);
const FETCH_TIMEOUT_MS = Number(process.env.MAINTENANCE_FETCH_TIMEOUT_MS || 15000);
const TEXT_LIMIT_BYTES = Number(process.env.MAINTENANCE_TEXT_LIMIT_BYTES || 1_500_000);
const USER_AGENT = "Mozilla/5.0 (compatible; home-appliance-dashboard-maintenance/2.0; +https://github.com/River-Ye/home-appliance-dashboard)";
const RAW_REPORT_PATH = path.join(ROOT, ".maintenance-audit.json");
const DRAFT_REPORT_PATH = path.join(ROOT, ".maintenance-draft.json");
const COMPACT_REPORT_PATH = path.join(ROOT, "catalog_maintenance_latest.json");

if (WRITE && !/^\d{4}-\d{2}-\d{2}$/.test(MAINTENANCE_DATE)) {
  throw new Error("--write requires --date=YYYY-MM-DD");
}
if (WRITE && DRAFT) throw new Error("Choose either --write or --draft");

function readProductSource(source, filename) {
  let categoryId = null;
  let items = null;
  const sandbox = {
    globalThis: {
      applianceDashboard: {
        registerProducts(category, products) {
          categoryId = category;
          items = products;
        },
      },
    },
  };
  vm.runInNewContext(source, sandbox, { filename });
  if (!categoryId || !Array.isArray(items)) {
    throw new Error(`Unable to read product file: ${filename}`);
  }
  return { categoryId, items };
}

function loadCatalogFromDisk() {
  const categories = fs.readdirSync(PRODUCT_DIR)
    .filter((name) => name.endsWith(".js"))
    .sort()
    .map((fileName) => {
      const filePath = path.join(PRODUCT_DIR, fileName);
      const source = fs.readFileSync(filePath, "utf8");
      return { fileName, filePath, source, ...readProductSource(source, filePath) };
    });
  const products = categories.flatMap((category) => category.items);
  return { categories, products, productById: new Map(products.map((product) => [product.id, product])) };
}

function loadCatalogFromGit(reference, fileNames, options = {}) {
  const root = options.root || ROOT;
  const execGit = options.execGit || ((args) => execFileSync("git", args, {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 10 * 1024 * 1024,
  }));
  const baselinePaths = new Set(execGit([
    "ls-tree",
    "-r",
    "--name-only",
    reference,
    "--",
    "products",
  ]).split(/\r?\n/).filter(Boolean));
  const products = [];
  for (const fileName of fileNames) {
    const productPath = `products/${fileName}`;
    if (!baselinePaths.has(productPath)) continue;
    const source = execGit(["show", `${reference}:${productPath}`]);
    products.push(...readProductSource(source, `${reference}:products/${fileName}`).items);
  }
  return new Map(products.map((product) => [product.id, product]));
}

function productFileMarkup(categoryId, products) {
  return `(() => {\n  const dashboard = globalThis.applianceDashboard;\n  if (!dashboard || typeof dashboard.registerProducts !== "function") {\n    throw new Error("appliance dashboard registry is not ready");\n  }\n\n  dashboard.registerProducts(${JSON.stringify(categoryId)}, ${JSON.stringify(products, null, 2)});\n})();\n`;
}

function writeChangedCategories(categories) {
  for (const category of categories) {
    const next = productFileMarkup(category.categoryId, category.items);
    if (next !== category.source) fs.writeFileSync(category.filePath, next);
  }
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    return await fetch(url, {
      redirect: "follow",
      ...options,
      headers: {
        "user-agent": USER_AGENT,
        "accept-language": "zh-TW,zh;q=0.9,en;q=0.7",
        ...(options.headers || {}),
      },
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

async function readTextLimit(response, limit = TEXT_LIMIT_BYTES) {
  if (!response.body) return "";
  const reader = response.body.getReader();
  const chunks = [];
  let length = 0;
  try {
    while (length < limit) {
      const { done, value } = await reader.read();
      if (done) break;
      const remaining = limit - length;
      chunks.push(value.byteLength > remaining ? value.slice(0, remaining) : value);
      length += Math.min(value.byteLength, remaining);
    }
  } finally {
    await reader.cancel().catch(() => {});
  }
  const buffer = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    buffer.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(buffer);
}

function blockedStatus(status) {
  return [401, 403, 406, 418, 429].includes(status);
}

function visiblePageText(html) {
  return String(html || "")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<head\b[^>]*>[\s\S]*?<\/head>/gi, " ")
    .replace(/<(?:script|style|template|noscript)\b[^>]*>[\s\S]*?<\/(?:script|style|template|noscript)>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, "\"")
    .replace(/&#0?39;|&apos;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchPage(url) {
  try {
    const response = await fetchWithTimeout(url, {
      headers: {
        accept: "text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.5",
        range: `bytes=0-${TEXT_LIMIT_BYTES - 1}`,
      },
    });
    const contentType = response.headers.get("content-type") || "";
    const text = response.ok ? await readTextLimit(response) : "";
    return {
      ok: response.ok,
      blocked: blockedStatus(response.status),
      status: response.status,
      finalUrl: response.url || url,
      contentType,
      text,
      title: text.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() || "",
    };
  } catch (error) {
    return {
      ok: false,
      blocked: false,
      status: null,
      finalUrl: url,
      contentType: "",
      text: "",
      title: "",
      error: error?.name === "AbortError" ? "timeout" : String(error?.message || error),
    };
  }
}

async function checkImage(url) {
  try {
    const response = await fetchWithTimeout(url, {
      headers: {
        accept: "image/avif,image/webp,image/png,image/jpeg,image/*,*/*;q=0.5",
        range: "bytes=0-2047",
      },
    });
    const contentType = response.headers.get("content-type") || "";
    const ok = response.ok && (!contentType || contentType.startsWith("image/") || contentType.includes("octet-stream"));
    if (response.body) await response.body.cancel().catch(() => {});
    return {
      ok,
      blocked: blockedStatus(response.status),
      status: response.status,
      contentType,
      finalUrl: response.url || url,
      error: ok ? null : "http_or_content_type",
    };
  } catch (error) {
    return {
      ok: false,
      blocked: false,
      status: null,
      contentType: "",
      finalUrl: url,
      error: error?.name === "AbortError" ? "timeout" : String(error?.message || error),
    };
  }
}

async function mapLimit(items, limit, mapper) {
  const results = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await mapper(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

function pchomeProductId(url) {
  try {
    const parsed = new URL(url);
    if (!/(^|\.)pchome\.com\.tw$/i.test(parsed.hostname)) return null;
    return parsed.pathname.match(/^\/prod\/([^/]+)$/)?.[1] || null;
  } catch (_error) {
    return null;
  }
}

function pchomeRecord(payload, expectedId) {
  return Object.values(payload || {}).find((item) => matchesPchomeProductId(expectedId, item)) || null;
}

function pchomeQuantity(record) {
  const quantity = Number(record?.Qty);
  return Number.isFinite(quantity) ? quantity : null;
}

function updatePrice(product, amount) {
  const previous = Number(product.price.amount);
  product.price.amount = amount;
  product.price.converted = amount;
  product.price.confidence = `PChome ${MAINTENANCE_DATE} exact-model 公開價；有正值 Price.Low 時優先於 Price.P`;
  return previous;
}

function promoteCurrentHistoricalLow(product, amount, sourceUrl, title, sourceLabel = "PChome 24h 購物") {
  const low = product.historicalLow;
  if (low?.status !== "found" || low.currency !== "TWD" || !(amount < Number(low.amount))) return null;
  const previous = Number(low.amount);
  product.historicalLow = {
    status: "found",
    amount,
    currency: "TWD",
    converted: amount,
    sourceUrl,
    sourceTitle: `${sourceLabel}：${title}`,
    evidenceSnippet: `${sourceLabel}於 ${MAINTENANCE_DATE} 顯示同型號可信新品公開價 NT$${amount.toLocaleString("en-US")}，低於既有史低 NT$${previous.toLocaleString("en-US")}。`,
    sourceKind: "retailer_page",
    confidence: "medium",
    checkedAt: MAINTENANCE_DATE,
    note: `採用 ${sourceLabel}當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。`,
  };
  return { id: product.id, before: previous, after: amount, sourceUrl };
}

async function auditPchome(product, raw) {
  const productId = pchomeProductId(product.buyUrl);
  if (!productId) return false;
  const apiUrl = `https://ecapi-cdn.pchome.com.tw/ecshop/prodapi/v2/prod?id=${encodeURIComponent(productId)}&fields=Id,Name,Nick,Pic,Price,Qty`;
  try {
    const response = await fetchWithTimeout(apiUrl, { headers: { accept: "application/json" } });
    if (!response.ok) {
      if (response.body) await response.body.cancel().catch(() => {});
      raw.sourceRows.push({ id: product.id, sourceKind: "pchome_api", status: blockedStatus(response.status) ? "blocked" : "request_failed", httpStatus: response.status });
      return true;
    }
    const record = pchomeRecord(await response.json(), productId);
    if (!record) {
      raw.sourceRows.push({ id: product.id, sourceKind: "pchome_api", status: "product_id_mismatch", httpStatus: response.status });
      return true;
    }
    const title = [record.Name, record.Nick].filter(Boolean).join(" ").replace(/<[^>]+>/g, " ");
    const exact = exactProductModelMatch(title, product);
    const manualBindingApproved = isReviewedPchomeBinding(product.id, productId);
    const sourceIdentityApproved = exact || manualBindingApproved;
    const excluded = isExcludedListing(title);
    const quantity = pchomeQuantity(record);
    const amount = selectPchomeCurrentPrice(record.Price);
    let status = "verified_available";
    if (excluded) status = "excluded_listing";
    else if (quantity !== null && quantity <= 0) status = "tracking_out_of_stock";
    else if (!sourceIdentityApproved) status = "model_unverified";
    else if (amount === null) status = "invalid_price";

    raw.sourceRows.push({
      id: product.id,
      sourceKind: "pchome_api",
      status,
      httpStatus: response.status,
      productId,
      productIdMatched: true,
      exactModel: exact,
      manualBindingApproved,
      excluded,
      quantity,
      catalogPrice: product.price.amount,
      observedPrice: amount,
      networkPrice: record.Price?.P ?? null,
      discountPrice: record.Price?.Low ?? null,
      title,
      apiUrl,
    });

    if (status === "verified_available"
      && product.price?.basis !== "official_suggested"
      && product.price.currency === "TWD"
      && Number(product.price.amount) !== amount) {
      updatePrice(product, amount);
    }
    if (status === "verified_available" && product.price?.basis !== "official_suggested") {
      const historicalChange = promoteCurrentHistoricalLow(product, amount, product.buyUrl, String(record.Name || product.name));
      if (historicalChange) raw.historicalLowChanges.push(historicalChange);
    }
    return true;
  } catch (error) {
    raw.sourceRows.push({ id: product.id, sourceKind: "pchome_api", status: "request_failed", error: error?.name === "AbortError" ? "timeout" : String(error?.message || error) });
    return true;
  }
}

function structuredPriceCandidates(text) {
  const candidates = [];
  const add = (amount, currency, source) => {
    const numeric = Number(String(amount || "").replace(/[,\s]/g, ""));
    if (Number.isFinite(numeric) && numeric > 0) candidates.push({ amount: numeric, currency: currency || null, source });
  };
  for (const match of text.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const queue = [JSON.parse(match[1])];
      while (queue.length) {
        const value = queue.shift();
        if (Array.isArray(value)) queue.push(...value);
        else if (value && typeof value === "object") {
          if (value.price !== undefined) add(value.price, value.priceCurrency, "json_ld");
          queue.push(...Object.values(value).filter((item) => item && typeof item === "object"));
        }
      }
    } catch (_error) {
      // Invalid third-party JSON-LD is ignored and never written automatically.
    }
  }
  for (const match of text.matchAll(/<(?:meta|input)[^>]+(?:property|itemprop|name)=["'](?:product:price:amount|price)["'][^>]+content=["']([^"']+)["'][^>]*>/gi)) {
    add(match[1], null, "meta");
  }
  const unique = new Map(candidates.map((candidate) => [`${candidate.currency}:${candidate.amount}`, candidate]));
  return [...unique.values()];
}

function trustedStructuredPrice(url, candidates, currency) {
  let hostname;
  try {
    hostname = new URL(url).hostname.toLowerCase();
  } catch (_error) {
    return null;
  }
  const trustedHosts = new Set(["tw.buy.yahoo.com", "www.costco.com.tw"]);
  if (!trustedHosts.has(hostname)) return null;
  const matching = candidates.filter((candidate) => candidate.currency === currency);
  const uniqueAmounts = [...new Set(matching.map((candidate) => candidate.amount))];
  return uniqueAmounts.length === 1 ? uniqueAmounts[0] : null;
}

async function auditNonPchome(product, raw) {
  const page = await fetchPage(product.buyUrl);
  let status;
  let exact = false;
  let excluded = false;
  if (!page.ok) status = page.blocked ? "blocked" : "request_failed";
  else {
    exact = exactProductModelMatch(`${page.title}\n${page.text}`, product);
    excluded = isExcludedListing(page.title);
    status = exact && !excluded ? "verified_available" : excluded ? "excluded_listing" : "model_unverified";
  }
  const priceCandidates = page.ok && exact && !excluded ? structuredPriceCandidates(page.text) : [];
  const trustedPrice = status === "verified_available"
    ? trustedStructuredPrice(product.buyUrl, priceCandidates, product.price.currency)
    : null;
  if (trustedPrice !== null
    && product.price?.basis !== "official_suggested"
    && Number(product.price.amount) !== trustedPrice) {
    const previous = Number(product.price.amount);
    product.price.amount = trustedPrice;
    product.price.converted = trustedPrice;
    const hostname = new URL(product.buyUrl).hostname;
    product.price.confidence = `${hostname === "tw.buy.yahoo.com" ? "Yahoo購物中心" : "Costco 好市多"} ${MAINTENANCE_DATE} exact-model 公開結構化價格`;
    raw.structuredPriceChanges.push({ id: product.id, before: previous, after: trustedPrice, sourceUrl: product.buyUrl });
    const sourceLabel = hostname === "tw.buy.yahoo.com" ? "Yahoo購物中心" : "Costco 好市多";
    const historicalChange = promoteCurrentHistoricalLow(product, trustedPrice, product.buyUrl, page.title || product.name, sourceLabel);
    if (historicalChange) raw.historicalLowChanges.push(historicalChange);
  }
  raw.sourceRows.push({
    id: product.id,
    sourceKind: "web_page",
    status,
    httpStatus: page.status,
    finalUrl: page.finalUrl,
    title: page.title,
    exactModel: exact,
    excluded,
    priceCandidates,
    error: page.error || null,
  });
  if (page.ok && exact && isExplicitlyDiscontinued(visiblePageText(page.text))) {
    raw.discontinuedCandidates.push({
      id: product.id,
      brand: product.brand,
      model: product.model,
      url: product.buyUrl,
      disposition: "manual_official_evidence_required",
    });
  }
}

async function auditImage(product, raw) {
  const result = await checkImage(product.image);
  raw.imageRows.push({
    id: product.id,
    status: result.ok ? "verified" : result.blocked ? "blocked" : "failed",
    httpStatus: result.status,
    contentType: result.contentType,
    finalUrl: result.finalUrl,
    error: result.error,
  });
}

async function auditHistoricalSource(product, raw) {
  if (product.historicalLow?.status !== "found" || !product.historicalLow.sourceUrl) return;
  const page = await fetchPage(product.historicalLow.sourceUrl);
  let status;
  let exact = false;
  if (!page.ok) status = page.blocked ? "blocked" : "failed";
  else {
    exact = exactProductModelMatch(`${page.title}\n${page.text}`, product);
    status = exact ? "verified" : "model_unverified";
  }
  raw.historicalRows.push({
    id: product.id,
    status,
    httpStatus: page.status,
    exactModel: exact,
    title: page.title,
    finalUrl: page.finalUrl,
    error: page.error || null,
  });
}

function exchangeRatesFromPayload(payload) {
  if (payload.result !== "success") throw new Error("Exchange rate payload is incomplete");
  const rates = payload.rates;
  for (const currency of ["TWD", "GBP", "EUR", "JPY", "CNY", "KRW"]) {
    if (!Number.isFinite(Number(rates?.[currency])) || Number(rates[currency]) <= 0) {
      throw new Error(`Exchange rate payload is missing a positive ${currency} rate`);
    }
  }
  return {
    source: "ExchangeRate-API",
    date: normalizeExchangeDate(payload.time_last_update_utc),
    timeLastUpdateUnix: payload.time_last_update_unix,
    USD_TWD: Number(rates.TWD),
    GBP_TWD: Number(rates.TWD) / Number(rates.GBP),
    EUR_TWD: Number(rates.TWD) / Number(rates.EUR),
    JPY_TWD: Number(rates.TWD) / Number(rates.JPY),
    CNY_TWD: Number(rates.TWD) / Number(rates.CNY),
    KRW_TWD: Number(rates.TWD) / Number(rates.KRW),
  };
}

function exchangeRateRequestUrl(maintenanceDate = MAINTENANCE_DATE, cacheNonce = Date.now()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(maintenanceDate)) {
    throw new Error(`Invalid exchange-rate cache date: ${maintenanceDate}`);
  }
  if (!Number.isSafeInteger(cacheNonce) || cacheNonce <= 0) {
    throw new Error(`Invalid exchange-rate cache nonce: ${cacheNonce}`);
  }
  const url = new URL("https://open.er-api.com/v6/latest/USD");
  url.searchParams.set("v", `${maintenanceDate}-${cacheNonce}`);
  return url.toString();
}

function updateHistoricalExchangeNote(note, currency, exchangeDate) {
  const current = String(note || "").trim();
  const provenance = `依 ${exchangeDate} ${currency}/TWD 匯率換算`;
  const staleProvenance = /依 \d{4}-\d{2}-\d{2} [A-Z]{3}\/TWD 匯率換算/u;
  if (staleProvenance.test(current)) {
    return current.replace(staleProvenance, provenance);
  }
  const base = current.replace(/[。；\s]+$/u, "");
  return `${base ? `${base}；` : ""}${provenance}。`;
}

async function fetchExchangeRates() {
  const response = await fetchWithTimeout(exchangeRateRequestUrl(), { headers: { accept: "application/json" } });
  if (!response.ok) throw new Error(`Exchange rate request failed: ${response.status}`);
  return exchangeRatesFromPayload(await response.json());
}

function applyExchangeRates(products, exchange, raw, baselineById = new Map()) {
  const exchangeDate = String(exchange.date || "").match(/^\d{4}-\d{2}-\d{2}/)?.[0];
  if (!exchangeDate) throw new Error("Exchange rate date is incomplete");
  const exchangeProvenance = `ExchangeRate-API ${exchangeDate} 匯率換算`;
  const rates = {
    USD: exchange.USD_TWD,
    GBP: exchange.GBP_TWD,
    EUR: exchange.EUR_TWD,
    JPY: exchange.JPY_TWD,
    CNY: exchange.CNY_TWD,
    KRW: exchange.KRW_TWD,
  };
  for (const product of products) {
    const currency = product.price?.currency;
    if (currency && currency !== "TWD") {
      const rate = rates[currency];
      if (!Number.isFinite(rate)) throw new Error(`Unsupported product currency: ${currency} (${product.id})`);
      const currentBefore = Number(product.price.converted);
      const baselinePrice = baselineById.get(product.id)?.price;
      const baselineBefore = baselinePrice?.currency === currency
        ? Number(baselinePrice.converted)
        : Number.NaN;
      const before = Number.isFinite(baselineBefore) ? baselineBefore : currentBefore;
      const after = Math.round(Number(product.price.amount) * rate);
      product.price.converted = after;
      const confidence = String(product.price.confidence || "").trim();
      product.price.confidence = /ExchangeRate-API \d{4}-\d{2}-\d{2} 匯率換算/u.test(confidence)
        ? confidence.replace(/ExchangeRate-API \d{4}-\d{2}-\d{2} 匯率換算/u, exchangeProvenance)
        : [confidence, exchangeProvenance].filter(Boolean).join("；");
      raw.foreignPriceChanges.push({ id: product.id, currency, amount: product.price.amount, before, after, rate });
    }
    const low = product.historicalLow;
    if (low?.status === "found" && low.currency && low.currency !== "TWD") {
      const rate = rates[low.currency];
      if (!Number.isFinite(rate)) throw new Error(`Unsupported historical currency: ${low.currency} (${product.id})`);
      low.converted = Math.round(Number(low.amount) * rate);
      low.note = updateHistoricalExchangeNote(low.note, low.currency, exchangeDate);
    }
  }
}

function maintenanceCacheVersion(source, maintenanceDate = MAINTENANCE_DATE, checkedAt = "") {
  const datePrefix = `${maintenanceDate.replaceAll("-", "")}-`;
  const checkedAtTime = String(checkedAt).match(/T(\d{2}):(\d{2}):(\d{2})/);
  if (checkedAtTime) {
    return `${datePrefix}${checkedAtTime.slice(1).join("")}-catalog`;
  }
  const currentVersion = source.match(/cacheVersion: "([^"]+)"/)?.[1];
  return currentVersion?.startsWith(datePrefix)
    ? currentVersion
    : `${datePrefix}maintenance-refactor`;
}

function updateConfig(exchange, productCount, categoryCount, checkedAt) {
  const filePath = path.join(ROOT, "assets/js/config.js");
  const originalSource = fs.readFileSync(filePath, "utf8");
  const cacheVersion = maintenanceCacheVersion(originalSource, MAINTENANCE_DATE, checkedAt);
  const source = originalSource
    .replace(/dataDate: "\d{4}-\d{2}-\d{2}"/, `dataDate: "${MAINTENANCE_DATE}"`)
    .replace(/costcoDate: "\d{4}-\d{2}-\d{2}"/, `costcoDate: "${MAINTENANCE_DATE}"`)
    .replace(/expectedCategoryCount: \d+/, `expectedCategoryCount: ${categoryCount}`)
    .replace(/expectedProductCount: \d+/, `expectedProductCount: ${productCount}`)
    .replace(/cacheVersion: "[^"]+"/, `cacheVersion: "${cacheVersion}"`)
    .replace(/exchangeSummary: "USD 1 = TWD [^"]+"/, `exchangeSummary: "USD 1 = TWD ${exchange.USD_TWD.toFixed(3)}"`)
    .replace(/date: "[^"]+"/, `date: "${exchange.date}"`)
    .replace(/USD_TWD: [^,]+,/, `USD_TWD: ${exchange.USD_TWD},`)
    .replace(/GBP_TWD: [^,]+,/, `GBP_TWD: ${exchange.GBP_TWD},`)
    .replace(/EUR_TWD: [^,]+,/, `EUR_TWD: ${exchange.EUR_TWD},`)
    .replace(/JPY_TWD: [^,]+,/, `JPY_TWD: ${exchange.JPY_TWD},`)
    .replace(/CNY_TWD: [^,]+,/, `CNY_TWD: ${exchange.CNY_TWD},`)
    .replace(/KRW_TWD: [^,]+,/, `KRW_TWD: ${exchange.KRW_TWD},`);
  fs.writeFileSync(filePath, source);
}

function updateDashboardContractSource(source, productCount, categoryCount) {
  return source
    .replace(/const EXPECTED_CATEGORY_COUNT = \d+;/, `const EXPECTED_CATEGORY_COUNT = ${categoryCount};`)
    .replace(/const EXPECTED_PRODUCT_COUNT = \d+;/, `const EXPECTED_PRODUCT_COUNT = ${productCount};`);
}

function updateDimensionCategoryCounts(source, categoryCounts) {
  let next = source;
  for (const [categoryId, count] of categoryCounts) {
    if (Number.isInteger(count)) {
      next = next.replace(new RegExp(`(\\["${categoryId}",\\s*)\\d+(\\])`, "g"), `$1${count}$2`);
    }
  }
  return next;
}

function updateDashboardContract(productCount, categoryCount, categoryCounts) {
  const filePath = path.join(ROOT, "tools/dashboard-contract.js");
  const countSource = updateDashboardContractSource(fs.readFileSync(filePath, "utf8"), productCount, categoryCount);
  const source = updateDimensionCategoryCounts(countSource, categoryCounts);
  fs.writeFileSync(filePath, source);
}

function syncAcceptedHistoricalPriceCheck(previous, historicalLow) {
  const priceChecks = previous?.priceChecks;
  const previousLow = previous?.historicalLow;
  if (!Array.isArray(priceChecks) || historicalLow?.status !== "found") return priceChecks;

  const adoptedIndex = priceChecks.findIndex((check) => check?.url === historicalLow.sourceUrl);
  if (adoptedIndex < 0) return priceChecks;
  const adoptedCheck = priceChecks[adoptedIndex];
  const adoptedOutcome = String(adoptedCheck?.outcome || "").trim();
  const adoptedDigits = adoptedOutcome.replace(/\D/g, "");
  const acceptedCheckAligned = /^(採用|accepted)[：:]/i.test(adoptedOutcome)
    && adoptedDigits.includes(String(historicalLow.amount));
  const foundLowChanged = (
    previousLow?.status !== historicalLow.status
    || previousLow?.sourceUrl !== historicalLow.sourceUrl
    || Number(previousLow?.amount) !== Number(historicalLow.amount)
  );
  if (!foundLowChanged && acceptedCheckAligned) return priceChecks;
  const adoptedAmount = Number(historicalLow.amount).toLocaleString("en-US");
  return priceChecks.map((check, index) => {
    if (index === adoptedIndex) {
      return {
        ...check,
        outcome: `採用：exact-model 公開新品促銷價 TWD ${adoptedAmount}，於 ${historicalLow.checkedAt || MAINTENANCE_DATE} 覆核。`,
      };
    }
    if (/^(採用|accepted)[：:]/i.test(String(check?.outcome || "").trim())) {
      return {
        ...check,
        outcome: `覆核：先前採用來源已由較低的 exact-model 新品價 TWD ${adoptedAmount} 取代。`,
      };
    }
    return check;
  });
}

function syncHistoricalResearchRows(research, products) {
  const previousRows = research.results || [];
  const previousById = new Map(previousRows.map((row) => [row.id, row]));
  const productsById = new Map(products.map((product) => [product.id, product]));
  const syncRow = (product, previous) => {
    const hasExplicitCheckedSources = Array.isArray(previous?.checkedSources) && previous.checkedSources.length > 0;
    if (product.historicalLow?.status === "not_found" && !hasExplicitCheckedSources) {
      throw new Error(`Missing explicit historical-price research evidence for product: ${product.id}`);
    }
    const checkedSources = previous?.checkedSources || [...new Set([
      product.historicalLow?.sourceUrl,
      product.buyUrl,
    ].filter(Boolean))];
    const rejectedCandidates = previous?.rejectedCandidates || [];
    const priceChecks = syncAcceptedHistoricalPriceCheck(previous, product.historicalLow);
    return {
      ...(previous || {}),
      id: product.id,
      category: product.category,
      brand: product.brand,
      model: product.model,
      name: product.name,
      currentPrice: product.price.converted,
      currentCurrency: product.price.currency,
      priceBasis: product.price.basis || "not_stated",
      priceLabel: product.price.basis === "official_suggested"
        ? "官方建議售價"
        : product.price.basis === "retailer_current"
          ? "通路現價"
          : "價格基準未標示",
      currentBuyUrl: product.buyUrl,
      currentBuyLabel: product.buyLabel,
      historicalLow: product.historicalLow,
      checkedSources,
      rejectedCandidates,
      ...(Array.isArray(priceChecks) ? { priceChecks } : {}),
    };
  };
  const retainedRows = previousRows
    .filter((row) => productsById.has(row.id))
    .map((row) => syncRow(productsById.get(row.id), row));
  const appendedRows = products
    .filter((product) => !previousById.has(product.id))
    .map((product) => syncRow(product));
  research.results = [...retainedRows, ...appendedRows];
  return research.results;
}

function syncHistoricalResearch(products, exchange, compact) {
  const filePath = path.join(ROOT, "historical_price_research.json");
  const research = JSON.parse(fs.readFileSync(filePath, "utf8"));
  syncHistoricalResearchRows(research, products);
  const found = products.filter((product) => product.historicalLow?.status === "found").length;
  const byConfidence = products.reduce((counts, product) => {
    const confidence = product.historicalLow?.confidence || product.historicalLow?.status || "not_found";
    counts[confidence] = (counts[confidence] || 0) + 1;
    return counts;
  }, {});
  const removedIds = compact.summary.discontinuedRemoved || [];
  const addedIds = compact.summary.newProductsAdded || [];
  const replacements = compact.summary.catalogEntriesReplaced || [];
  const invalidatedHistoricalLows = (compact.changes?.historicalLows || [])
    .filter((change) => change.before !== null && change.after === null).length;
  research.summary = {
    checkedAt: `${MAINTENANCE_DATE}T00:00:00.000+08:00`,
    sourcePolicy: `${MAINTENANCE_DATE} 以 ${compact.summary.baselineProducts} 筆基準清單全量查核公開價格基準（通路現價或明示官方建議售價）、購買連結與可信新品狀態，並複核最終 ${compact.summary.finalProducts} 筆商品圖片、全部 ${compact.summary.historicalFound} 筆 found 史低來源、原廠停產訊號與同批次匯率。官方建議售價不自動寫成通路現價或史低；PChome exact-model 現貨頁有正值 Price.Low 時採公開折扣價，否則採 Price.P；Qty 0、福利品、展示機與配件不寫回。其他頁面的結構化價格差異列入人工覆核候選，阻擋、暫時錯誤與單次頁面失效只列稽核，不臆測停產或史低失效。`,
    total: products.length,
    researchedThisRun: products.length,
    found,
    missing: products.length - found,
    byConfidence,
    exchange: {
      USD_TWD: exchange.USD_TWD,
      currentUSD_TWD: exchange.USD_TWD,
      GBP_TWD: exchange.GBP_TWD,
      EUR_TWD: exchange.EUR_TWD,
      JPY_TWD: exchange.JPY_TWD,
      CNY_TWD: exchange.CNY_TWD,
      KRW_TWD: exchange.KRW_TWD,
    },
    lastMaintenanceCheckAt: compact.checkedAt,
    currentPriceChanged: compact.summary.priceChanges,
    currentBuyLinkChanged: compact.summary.linkChanges,
    currentPriceDrops: compact.summary.priceDrops,
    currentPriceRises: compact.summary.priceRises,
    currentPriceFallbacks: 0,
    historicalLowUpdated: compact.summary.historicalLowPriceChanges,
    historicalLowInvalidated: invalidatedHistoricalLows,
    catalogEntriesReplaced: replacements.length,
    catalogReplacementNotes: replacements,
    currentImageChanged: compact.summary.imageChanges,
    discontinuedRemoved: removedIds.length,
    newProductsAdded: addedIds.length,
    discontinuedRemovalNotes: removedIds,
    catalogEntriesRemoved: removedIds.length,
    catalogRemovalNotes: removedIds,
  };
  fs.writeFileSync(filePath, `${JSON.stringify(research, null, 2)}\n`);
}

function selectPreviousCategoryReview(reports, maintenanceDate) {
  const candidates = reports.filter((report) => {
    const reportDate = report.dataDate;
    return reportDate === maintenanceDate && Array.isArray(report.categoryScan);
  });
  if (candidates.length === 0) return { rows: [], sourceCheckedAt: null };

  const reportCheckedAt = (report) => {
    const parsed = Date.parse(report.checkedAt);
    return Number.isNaN(parsed) ? Number.NEGATIVE_INFINITY : parsed;
  };
  const latestReport = candidates.reduce((latest, report) => (
    reportCheckedAt(report) > reportCheckedAt(latest) ? report : latest
  ));
  const selectedByCategory = new Map(latestReport.categoryScan.map((row) => [row.category, row]));
  for (const report of candidates) {
    for (const row of report.categoryScan) {
      const selected = selectedByCategory.get(row.category);
      const reviewedAt = Date.parse(row.reviewedAt);
      const selectedReviewedAt = Date.parse(selected?.reviewedAt);
      if (!selected || (!Number.isNaN(reviewedAt)
        && (Number.isNaN(selectedReviewedAt) || reviewedAt > selectedReviewedAt))) {
        selectedByCategory.set(row.category, row);
      }
    }
  }
  const latestCategories = new Set(latestReport.categoryScan.map((row) => row.category));
  const rows = [
    ...latestReport.categoryScan.map((row) => selectedByCategory.get(row.category)),
    ...[...selectedByCategory.entries()]
      .filter(([category]) => !latestCategories.has(category))
      .map(([, row]) => row),
  ];
  return { rows, sourceCheckedAt: latestReport.checkedAt || null };
}

function readPreviousCategoryReview() {
  const paths = [
    DRAFT_REPORT_PATH,
    COMPACT_REPORT_PATH,
    path.join(ROOT, `catalog_maintenance_${MAINTENANCE_DATE}.json`),
  ];
  const reports = [];
  for (const file of paths) {
    if (!fs.existsSync(file)) continue;
    const report = JSON.parse(fs.readFileSync(file, "utf8"));
    const reportDate = report.dataDate || path.basename(file).match(/\d{4}-\d{2}-\d{2}/)?.[0];
    reports.push({ ...report, dataDate: reportDate });
  }
  return selectPreviousCategoryReview(reports, MAINTENANCE_DATE);
}

function readPreviousDiscontinuationReviews() {
  for (const filePath of [DRAFT_REPORT_PATH, COMPACT_REPORT_PATH]) {
    if (!fs.existsSync(filePath)) continue;
    const report = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (report.dataDate === MAINTENANCE_DATE) {
      return new Map((report.officialDiscontinuedCandidates || []).map((row) => [row.id, row]));
    }
  }
  return new Map();
}

function maintenanceReviewReady(report, maintenanceDate, catalogContext = null) {
  const structurallyReady = report?.dataDate === maintenanceDate
    && Array.isArray(report.categoryScan)
    && report.categoryScan.length > 0
    && report.categoryScan.every((row) => categoryReviewReady(row, report.checkedAt, maintenanceDate));
  if (!structurallyReady || !catalogContext) return structurallyReady;

  const { categories, products, baselineById } = catalogContext;
  if (!Array.isArray(categories) || !Array.isArray(products) || !(baselineById instanceof Map)) return false;
  if (products.some((product) => baselineById.has(product.id) && !sameCatalogIdentity(product, baselineById.get(product.id)))) return false;
  if (report.categoryScan.length !== categories.length) return false;
  const scanByCategory = new Map(report.categoryScan.map((row) => [row.category, row]));
  if (scanByCategory.size !== categories.length) return false;
  return categories.every((category) => {
    const row = scanByCategory.get(category.id);
    if (!row) return false;
    const expected = buildJapaneseBrandReview({
      category,
      products,
      baselineById,
      checkedAt: maintenanceDate,
    });
    return JSON.stringify(row.japaneseBrandReview) === JSON.stringify(expected);
  });
}

function japaneseBrandReviewReady(row, maintenanceDate = null) {
  const reviews = Array.isArray(row?.japaneseBrandReview) ? row.japaneseBrandReview : [];
  if (reviews.length !== JAPANESE_BRAND_ROSTER.length) return false;
  const byBrand = new Map(reviews.map((review) => [review.brand, review]));
  return JAPANESE_BRAND_ROSTER.every((brand) => {
    const review = byBrand.get(brand);
    return review
      && JAPANESE_BRAND_REVIEW_STATUSES.has(review.status)
      && /^\d{4}-\d{2}-\d{2}$/.test(review.checkedAt)
      && (maintenanceDate === null || review.checkedAt === maintenanceDate)
      && Array.isArray(review.officialSources)
      && review.officialSources.length > 0
      && Array.isArray(review.existingProductIds)
      && Array.isArray(review.addedProductIds)
      && typeof review.reason === "string"
      && review.reason.trim();
  });
}

function categoryReviewReady(row, maximumReviewedAt = null, maintenanceDate = null) {
  const ready = row?.status === "manually_reviewed"
    && typeof row.reviewedAt === "string"
    && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(row.reviewedAt)
    && !Number.isNaN(Date.parse(row.reviewedAt))
    && japaneseBrandReviewReady(row, maintenanceDate);
  if (!ready || maximumReviewedAt === null || maximumReviewedAt === undefined) return ready;
  const maximumTimestamp = Date.parse(maximumReviewedAt);
  return !Number.isNaN(maximumTimestamp) && Date.parse(row.reviewedAt) <= maximumTimestamp;
}

function categoryReviewProvenance(categoryScan, sourceCheckedAt) {
  if (!Array.isArray(categoryScan) || categoryScan.length === 0 || categoryScan.some((row) => !categoryReviewReady(row))) {
    return "pending";
  }
  const sourceTimestamp = Date.parse(sourceCheckedAt);
  if (Number.isNaN(sourceTimestamp)) return "current_run";
  const currentReviewCount = categoryScan.filter((row) => Date.parse(row.reviewedAt) > sourceTimestamp).length;
  if (currentReviewCount === categoryScan.length) return "current_run";
  if (currentReviewCount === 0) return "same_date_carried_forward";
  return "mixed_current_and_carried_forward";
}

function currentCategoryScan(categories, previousRows, checkedAt) {
  const previousById = new Map(previousRows.map((row) => [row.category, row]));
  return categories.map((category) => {
    const previous = previousById.get(category.categoryId);
    if (!previous) {
      return {
        category: category.categoryId,
        cutoff: MAINTENANCE_DATE,
        status: "pending_review",
        decision: "pending",
        note: "需由 AI 逐類完成官方新品與供貨證據覆核。",
        acceptedCandidates: [],
        trackedOrRejectedCandidates: [],
        japaneseBrandReview: [],
        reviewedAt: null,
        finalProductCount: category.items.length,
        minimumSatisfied: category.items.length >= 20,
      };
    }
    return {
      ...previous,
      cutoff: MAINTENANCE_DATE,
      reviewedAt: previous.reviewedAt ?? null,
      finalProductCount: category.items.length,
      minimumSatisfied: category.items.length >= 20,
    };
  });
}

function partition(rows, status) {
  return rows.filter((row) => row.status === status).map((row) => row.id).sort();
}

function compactException(row) {
  return Object.fromEntries(Object.entries(row).filter(([key, value]) =>
    !["title", "apiUrl", "finalUrl", "priceCandidates"].includes(key) && value !== null && value !== undefined,
  ));
}

function mergeDiscontinuationReviews(candidates, previousReviews = new Map()) {
  return candidates.map((candidate) => {
    const previous = previousReviews.get(candidate.id);
    if (previous && previous.disposition !== "manual_official_evidence_required") {
      return { ...candidate, ...previous, url: candidate.url };
    }
    return candidate;
  });
}

function hasConfirmedOfficialDiscontinuationEvidence(candidate, maximumReviewedAt) {
  const evidence = candidate?.reviewEvidence;
  let sourceUrl;
  try {
    sourceUrl = new URL(candidate?.url);
  } catch (_error) {
    return false;
  }
  const reviewedAt = String(candidate?.reviewedAt || "");
  const reviewedTimestamp = Date.parse(reviewedAt);
  const maximumTimestamp = Date.parse(maximumReviewedAt);
  return candidate?.disposition === "confirmed_official_discontinued_remove"
    && sourceUrl.protocol === "https:"
    && sourceUrl.hostname.length > 0
    && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(reviewedAt)
    && !Number.isNaN(reviewedTimestamp)
    && !Number.isNaN(maximumTimestamp)
    && reviewedTimestamp <= maximumTimestamp
    && evidence?.sourceKind === "official"
    && evidence?.exactModelConfirmed === true
    && typeof evidence?.sourceTitle === "string"
    && evidence.sourceTitle.trim().length > 0
    && typeof evidence?.evidenceSnippet === "string"
    && evidence.evidenceSnippet.trim().length > 0;
}

function buildCompactReport({ catalog, baselineById, raw, exchange, checkedAt, categoryScan, categoryReviewProvenance: reviewProvenance = "pending", previousDiscontinuationReviews = new Map() }) {
  const finalIds = catalog.products.map((product) => product.id).sort();
  const baselineIds = [...baselineById.keys()].sort();
  const finalById = new Map(catalog.products.map((product) => [product.id, product]));
  const reusedIdentityIds = finalIds.filter((id) => (
    baselineById.has(id) && !sameCatalogIdentity(finalById.get(id), baselineById.get(id))
  ));
  if (reusedIdentityIds.length > 0) {
    throw new Error(`Catalog product IDs cannot be reused for a different exact model: ${reusedIdentityIds.join(", ")}`);
  }
  const priceChanges = [];
  const linkChanges = [];
  const imageChanges = [];
  for (const id of finalIds.filter((candidate) => baselineById.has(candidate))) {
    const before = baselineById.get(id);
    const after = finalById.get(id);
    if (Number(before.price?.amount) !== Number(after.price?.amount)) {
      priceChanges.push({ id, before: before.price.amount, after: after.price.amount, currency: after.price.currency, basis: after.price.basis || "not_stated", source: after.buyUrl });
    }
    if (before.buyUrl !== after.buyUrl || before.buyLabel !== after.buyLabel) {
      linkChanges.push({ id, beforeUrl: before.buyUrl, afterUrl: after.buyUrl, beforeLabel: before.buyLabel, afterLabel: after.buyLabel });
    }
    if (before.image !== after.image) imageChanges.push({ id, before: before.image, after: after.image });
  }
  const historicalChanges = [];
  for (const id of finalIds.filter((candidate) => baselineById.has(candidate))) {
    const before = baselineById.get(id).historicalLow;
    const after = finalById.get(id).historicalLow;
    if (JSON.stringify(before) !== JSON.stringify(after)) {
      historicalChanges.push({ id, before: before?.amount ?? null, after: after?.amount ?? null, status: after?.status, source: after?.sourceUrl || null });
    }
  }
  const sourceExceptions = raw.sourceRows.filter((row) => row.status !== "verified_available");
  const imageExceptions = raw.imageRows.filter((row) => row.status !== "verified");
  const historicalExceptions = raw.historicalRows.filter((row) => row.status !== "verified");
  const categoryCounts = catalog.categories.map((category) => category.items.length);
  const foreignProducts = catalog.products.filter((product) => product.price.currency !== "TWD");
  const removedBaselineIds = baselineIds.filter((id) => !finalById.has(id));
  const addedFinalIds = finalIds.filter((id) => !baselineById.has(id));
  const catalogEntriesReplaced = categoryScan.flatMap((row) => row.catalogReplacements || []);
  const replacedBeforeIds = new Set();
  const replacedAfterIds = new Set();
  for (const replacement of catalogEntriesReplaced) {
    const before = baselineById.get(replacement.beforeId);
    const after = finalById.get(replacement.afterId);
    if (!before || finalById.has(replacement.beforeId) || baselineById.has(replacement.afterId) || !after) {
      throw new Error(`Invalid catalog replacement ${replacement.beforeId || "missing"} -> ${replacement.afterId || "missing"}`);
    }
    if (before.category !== after.category || before.category !== replacement.category) {
      throw new Error(`Catalog replacement category mismatch ${replacement.beforeId} -> ${replacement.afterId}`);
    }
    if (typeof replacement.reason !== "string" || !replacement.reason.trim()) {
      throw new Error(`Catalog replacement requires a reason ${replacement.beforeId} -> ${replacement.afterId}`);
    }
    if (replacedBeforeIds.has(replacement.beforeId) || replacedAfterIds.has(replacement.afterId)) {
      throw new Error(`Duplicate catalog replacement ${replacement.beforeId} -> ${replacement.afterId}`);
    }
    replacedBeforeIds.add(replacement.beforeId);
    replacedAfterIds.add(replacement.afterId);
  }
  const discontinuedRemovedIds = removedBaselineIds.filter((id) => !replacedBeforeIds.has(id));
  const newProductIds = addedFinalIds.filter((id) => !replacedAfterIds.has(id));
  const unconfirmedRemovedIds = discontinuedRemovedIds.filter(
    (id) => !hasConfirmedOfficialDiscontinuationEvidence(previousDiscontinuationReviews.get(id), checkedAt),
  );
  if (unconfirmedRemovedIds.length > 0) {
    throw new Error(`Removed catalog entries require confirmed official discontinuation evidence: ${unconfirmedRemovedIds.join(", ")}`);
  }
  const confirmedRemovedCandidates = discontinuedRemovedIds
    .map((id) => previousDiscontinuationReviews.get(id))
    .filter((candidate) => hasConfirmedOfficialDiscontinuationEvidence(candidate, checkedAt));
  const discontinuedCandidates = [
    ...mergeDiscontinuationReviews(raw.discontinuedCandidates, previousDiscontinuationReviews),
    ...confirmedRemovedCandidates,
  ];
  const pendingDiscontinuationCandidates = discontinuedCandidates.filter(
    (candidate) => candidate.disposition === "manual_official_evidence_required",
  );

  return {
    schemaVersion: 3,
    dataDate: MAINTENANCE_DATE,
    checkedAt,
    baselineRef: BASELINE_REF,
    policy: {
      exactModelOrReviewedSourceBindingOnly: true,
      trustedNewProductsOnly: true,
      pchomePrice: "positive Price.Low first, otherwise Price.P",
      pchomeQtyZeroIsTrackingOnly: true,
      discontinuedRequiresPositiveOfficialEvidence: true,
      automaticDeletion: false,
      historicalLowExclusions: ["member_discount", "card_rebate", "points", "used", "refurbished", "display", "open_box", "accessory", "consumable"],
    },
    summary: {
      baselineProducts: baselineIds.length,
      finalProducts: finalIds.length,
      categories: catalog.categories.length,
      minimumProductsPerCategory: Math.min(...categoryCounts),
      newProductsAdded: newProductIds,
      catalogEntriesReplaced,
      priceChanges: priceChanges.length,
      priceDrops: priceChanges.filter((change) => change.after < change.before).length,
      priceRises: priceChanges.filter((change) => change.after > change.before).length,
      linkChanges: linkChanges.length,
      imageChanges: imageChanges.length,
      historicalLowChanges: historicalChanges.length,
      historicalLowPriceChanges: historicalChanges.filter((change) => change.before !== change.after).length,
      historicalFound: catalog.products.filter((product) => product.historicalLow?.status === "found").length,
      historicalMissing: catalog.products.filter((product) => product.historicalLow?.status !== "found").length,
      pchomeAudited: raw.sourceRows.filter((row) => row.sourceKind === "pchome_api").length,
      pchomeExactModelVerified: raw.sourceRows.filter((row) => row.sourceKind === "pchome_api" && row.status === "verified_available" && row.exactModel).length,
      pchomeReviewedBindingVerified: raw.sourceRows.filter((row) => row.sourceKind === "pchome_api" && row.status === "verified_available" && row.manualBindingApproved && !row.exactModel).length,
      pchomeModelUnverified: raw.sourceRows.filter((row) => row.sourceKind === "pchome_api" && row.status === "model_unverified").length,
      pchomeOutOfStockTracked: partition(raw.sourceRows, "tracking_out_of_stock").length,
      pchomeInvalidPrices: partition(raw.sourceRows, "invalid_price").length,
      pchomeRequestFailures: raw.sourceRows.filter((row) => row.sourceKind === "pchome_api" && row.status === "request_failed").length,
      pchomeOtherExceptions: raw.sourceRows.filter((row) => row.sourceKind === "pchome_api" && ![
        "verified_available", "model_unverified", "tracking_out_of_stock", "invalid_price", "request_failed",
      ].includes(row.status)).length,
      sourcesAudited: raw.sourceRows.length,
      sourcesVerifiedAvailable: partition(raw.sourceRows, "verified_available").length,
      sourcesModelUnverified: partition(raw.sourceRows, "model_unverified").length,
      sourceExceptions: sourceExceptions.length,
      imagesAudited: raw.imageRows.length,
      imageExceptions: imageExceptions.length,
      historicalSourcesAudited: raw.historicalRows.length,
      historicalSourcesVerified: partition(raw.historicalRows, "verified").length,
      historicalSourcesBlocked: partition(raw.historicalRows, "blocked").length,
      historicalSourcesModelUnverified: partition(raw.historicalRows, "model_unverified").length,
      historicalSourceExceptions: historicalExceptions.length,
      foreignPricesRecomputed: foreignProducts.length,
      officialDiscontinuedCandidates: discontinuedCandidates.length,
      officialDiscontinuedPendingReview: pendingDiscontinuationCandidates.length,
      officialDiscontinuedFalsePositives: discontinuedCandidates.filter((candidate) => candidate.disposition === "false_positive_retained").length,
      discontinuedRemoved: discontinuedRemovedIds,
    },
    exchange,
    categoryReviewProvenance: reviewProvenance,
    categoryScan,
    changes: {
      prices: priceChanges,
      links: linkChanges,
      images: imageChanges,
      historicalLows: historicalChanges,
      foreignConversions: raw.foreignPriceChanges,
    },
    sourceAudit: {
      checkedProductIds: raw.sourceRows.map((row) => row.id).sort(),
      verifiedAvailableIds: partition(raw.sourceRows, "verified_available"),
      exceptions: sourceExceptions.map(compactException),
    },
    imageAudit: {
      checkedProductIds: raw.imageRows.map((row) => row.id).sort(),
      verifiedIds: partition(raw.imageRows, "verified"),
      exceptions: imageExceptions.map(compactException),
    },
    historicalSourceAudit: {
      checkedProductIds: raw.historicalRows.map((row) => row.id).sort(),
      verifiedIds: partition(raw.historicalRows, "verified"),
      exceptions: historicalExceptions.map(compactException),
    },
    officialDiscontinuedCandidates: discontinuedCandidates,
  };
}

async function main() {
  const catalog = loadCatalogFromDisk();
  if (catalog.products.length === 0 || catalog.categories.length === 0) throw new Error("Catalog is empty");
  const categoryDefinitions = readDashboardProducts(ROOT).categories;
  const baselineById = loadCatalogFromGit(BASELINE_REF, catalog.categories.map((category) => category.fileName));
  const checkedAt = new Date().toISOString();
  const raw = {
    schemaVersion: 3,
    dataDate: MAINTENANCE_DATE,
    checkedAt,
    baselineRef: BASELINE_REF,
    sourceRows: [],
    imageRows: [],
    historicalRows: [],
    historicalLowChanges: [],
    foreignPriceChanges: [],
    structuredPriceChanges: [],
    discontinuedCandidates: [],
  };

  await mapLimit(catalog.products, CONCURRENCY, async (product) => {
    const handled = await auditPchome(product, raw);
    if (!handled) await auditNonPchome(product, raw);
  });
  await mapLimit(catalog.products, CONCURRENCY, (product) => auditImage(product, raw));

  const exchange = await fetchExchangeRates();
  applyExchangeRates(catalog.products, exchange, raw, baselineById);
  await mapLimit(catalog.products, CONCURRENCY, (product) => auditHistoricalSource(product, raw));

  const previousCategoryReview = readPreviousCategoryReview();
  const categoryScan = currentCategoryScan(catalog.categories, previousCategoryReview.rows, checkedAt);
  const compact = buildCompactReport({
    catalog,
    baselineById,
    raw,
    exchange,
    checkedAt,
    categoryScan,
    categoryReviewProvenance: categoryReviewProvenance(categoryScan, previousCategoryReview.sourceCheckedAt),
    previousDiscontinuationReviews: readPreviousDiscontinuationReviews(),
  });
  if (WRITE && !maintenanceReviewReady(compact, MAINTENANCE_DATE, {
    categories: categoryDefinitions,
    products: catalog.products,
    baselineById,
  })) {
    throw new Error("Refusing to finalize: every category requires a current manually reviewed Japanese-brand matrix that matches the catalog and maintenance baseline");
  }
  if (WRITE && compact.summary.pchomeInvalidPrices + compact.summary.pchomeRequestFailures > 0) {
    throw new Error("Refusing to write with unsafe PChome audit results");
  }
  if (WRITE && compact.summary.officialDiscontinuedPendingReview > 0) {
    throw new Error("Refusing to finalize: official discontinuation candidates require manual source review");
  }

  if (WRITE) {
    writeChangedCategories(catalog.categories);
    updateConfig(exchange, catalog.products.length, catalog.categories.length, checkedAt);
    updateDashboardContract(
      catalog.products.length,
      catalog.categories.length,
      new Map(catalog.categories.map((category) => [category.categoryId, category.items.length])),
    );
    syncHistoricalResearch(catalog.products, exchange, compact);
    fs.writeFileSync(COMPACT_REPORT_PATH, `${JSON.stringify(compact, null, 2)}\n`);
  }
  if (DRAFT) fs.writeFileSync(DRAFT_REPORT_PATH, `${JSON.stringify(compact, null, 2)}\n`);
  fs.writeFileSync(RAW_REPORT_PATH, `${JSON.stringify(raw, null, 2)}\n`);

  console.log(JSON.stringify({
    status: WRITE ? "updated" : DRAFT ? "drafted" : "audited",
    report: path.basename(WRITE ? COMPACT_REPORT_PATH : DRAFT ? DRAFT_REPORT_PATH : RAW_REPORT_PATH),
    rawReport: path.basename(RAW_REPORT_PATH),
    ...compact.summary,
    exchangeDate: exchange.date,
  }, null, 2));
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = {
  applyExchangeRates,
  buildCompactReport,
  categoryReviewProvenance,
  currentCategoryScan,
  exchangeRateRequestUrl,
  exchangeRatesFromPayload,
  loadCatalogFromGit,
  maintenanceCacheVersion,
  maintenanceReviewReady,
  mergeDiscontinuationReviews,
  pchomeProductId,
  selectPreviousCategoryReview,
  structuredPriceCandidates,
  syncHistoricalResearchRows,
  trustedStructuredPrice,
  updateDashboardContractSource,
  updateDimensionCategoryCounts,
  visiblePageText,
};
