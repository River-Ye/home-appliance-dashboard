const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");
const {
  exactModelMatch,
  isExcludedListing,
  isExplicitlyDiscontinued,
  isReviewedPchomeBinding,
} = require("./catalog-maintenance-policy");
const {
  matchesPchomeProductId,
  selectPchomeCurrentPrice,
} = require("./pchome-product-api");
const { normalizeExchangeDate } = require("./update-maintenance-metadata");

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

function loadCatalogFromGit(reference, fileNames) {
  const products = [];
  for (const fileName of fileNames) {
    const source = execFileSync("git", ["show", `${reference}:products/${fileName}`], {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 10 * 1024 * 1024,
    });
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
    const exact = exactModelMatch(title, product.model);
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

    if (status === "verified_available" && product.price.currency === "TWD" && Number(product.price.amount) !== amount) {
      updatePrice(product, amount);
    }
    if (status === "verified_available") {
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
    exact = exactModelMatch(`${page.title}\n${page.text}`, product.model);
    excluded = isExcludedListing(page.title);
    status = exact && !excluded ? "verified_available" : excluded ? "excluded_listing" : "model_unverified";
  }
  const priceCandidates = page.ok && exact && !excluded ? structuredPriceCandidates(page.text) : [];
  const trustedPrice = status === "verified_available"
    ? trustedStructuredPrice(product.buyUrl, priceCandidates, product.price.currency)
    : null;
  if (trustedPrice !== null && Number(product.price.amount) !== trustedPrice) {
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
  if (page.ok && exact && isExplicitlyDiscontinued(page.text)) {
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
    exact = exactModelMatch(`${page.title}\n${page.text}`, product.model);
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

async function fetchExchangeRates() {
  const response = await fetchWithTimeout("https://open.er-api.com/v6/latest/USD", { headers: { accept: "application/json" } });
  if (!response.ok) throw new Error(`Exchange rate request failed: ${response.status}`);
  const payload = await response.json();
  if (payload.result !== "success" || !payload.rates?.TWD) throw new Error("Exchange rate payload is incomplete");
  const rates = payload.rates;
  return {
    source: "ExchangeRate-API",
    date: normalizeExchangeDate(payload.time_last_update_utc),
    timeLastUpdateUnix: payload.time_last_update_unix,
    USD_TWD: Number(rates.TWD),
    GBP_TWD: Number(rates.TWD) / Number(rates.GBP),
    EUR_TWD: Number(rates.TWD) / Number(rates.EUR),
    JPY_TWD: Number(rates.TWD) / Number(rates.JPY),
    CNY_TWD: Number(rates.TWD) / Number(rates.CNY),
  };
}

function applyExchangeRates(products, exchange, raw) {
  const rates = {
    USD: exchange.USD_TWD,
    GBP: exchange.GBP_TWD,
    EUR: exchange.EUR_TWD,
    JPY: exchange.JPY_TWD,
    CNY: exchange.CNY_TWD,
  };
  for (const product of products) {
    const currency = product.price?.currency;
    if (currency && currency !== "TWD") {
      const rate = rates[currency];
      if (!Number.isFinite(rate)) throw new Error(`Unsupported product currency: ${currency} (${product.id})`);
      const before = Number(product.price.converted);
      const after = Math.round(Number(product.price.amount) * rate);
      product.price.converted = after;
      raw.foreignPriceChanges.push({ id: product.id, currency, amount: product.price.amount, before, after, rate });
    }
    const low = product.historicalLow;
    if (low?.status === "found" && low.currency && low.currency !== "TWD") {
      const rate = rates[low.currency];
      if (!Number.isFinite(rate)) throw new Error(`Unsupported historical currency: ${low.currency} (${product.id})`);
      low.converted = Math.round(Number(low.amount) * rate);
    }
  }
}

function updateConfig(exchange, productCount, categoryCount) {
  const filePath = path.join(ROOT, "assets/js/config.js");
  const cacheVersion = `${MAINTENANCE_DATE.replaceAll("-", "")}-maintenance-refactor`;
  const source = fs.readFileSync(filePath, "utf8")
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
    .replace(/CNY_TWD: [^,]+,/, `CNY_TWD: ${exchange.CNY_TWD},`);
  fs.writeFileSync(filePath, source);
}

function updateDashboardContractSource(source, productCount, categoryCount) {
  return source
    .replace(/const EXPECTED_CATEGORY_COUNT = \d+;/, `const EXPECTED_CATEGORY_COUNT = ${categoryCount};`)
    .replace(/const EXPECTED_PRODUCT_COUNT = \d+;/, `const EXPECTED_PRODUCT_COUNT = ${productCount};`);
}

function updateDimensionCategoryCounts(source, categoryCounts) {
  let next = source;
  for (const categoryId of ["washer", "dryer", "washerdryer", "refrigerator"]) {
    const count = categoryCounts.get(categoryId);
    if (Number.isInteger(count)) {
      next = next.replace(new RegExp(`(\\["${categoryId}",\\s*)\\d+(\\])`), `$1${count}$2`);
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

function syncHistoricalResearch(products, exchange) {
  const filePath = path.join(ROOT, "historical_price_research.json");
  const research = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const productById = new Map(products.map((product) => [product.id, product]));
  for (const row of research.results || []) {
    const product = productById.get(row.id);
    if (!product) continue;
    row.category = product.category;
    row.brand = product.brand;
    row.model = product.model;
    row.name = product.name;
    row.currentPrice = product.price.converted;
    row.currentCurrency = product.price.currency;
    row.currentBuyUrl = product.buyUrl;
    row.currentBuyLabel = product.buyLabel;
    row.historicalLow = product.historicalLow;
  }
  const found = products.filter((product) => product.historicalLow?.status === "found").length;
  research.summary = {
    ...(research.summary || {}),
    checkedAt: `${MAINTENANCE_DATE}T00:00:00.000+08:00`,
    total: products.length,
    found,
    missing: products.length - found,
    exchange: {
      ...(research.summary?.exchange || {}),
      USD_TWD: exchange.USD_TWD,
      GBP_TWD: exchange.GBP_TWD,
      EUR_TWD: exchange.EUR_TWD,
      JPY_TWD: exchange.JPY_TWD,
      CNY_TWD: exchange.CNY_TWD,
    },
  };
  fs.writeFileSync(filePath, `${JSON.stringify(research, null, 2)}\n`);
}

function readPreviousCategoryScan() {
  const candidates = [
    DRAFT_REPORT_PATH,
    COMPACT_REPORT_PATH,
    path.join(ROOT, `catalog_maintenance_${MAINTENANCE_DATE}.json`),
  ];
  for (const file of candidates) {
    if (!fs.existsSync(file)) continue;
    const report = JSON.parse(fs.readFileSync(file, "utf8"));
    const reportDate = report.dataDate || path.basename(file).match(/\d{4}-\d{2}-\d{2}/)?.[0];
    if (reportDate === MAINTENANCE_DATE && Array.isArray(report.categoryScan)) return report.categoryScan;
  }
  return [];
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

function maintenanceReviewReady(report, maintenanceDate) {
  return report?.dataDate === maintenanceDate
    && Array.isArray(report.categoryScan)
    && report.categoryScan.length > 0
    && report.categoryScan.every((row) => row.status === "manually_reviewed");
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
        reviewedAt: null,
        finalProductCount: category.items.length,
        minimumSatisfied: category.items.length >= 20,
      };
    }
    return {
      ...previous,
      cutoff: MAINTENANCE_DATE,
      reviewedAt: checkedAt,
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

function buildCompactReport({ catalog, baselineById, raw, exchange, checkedAt, categoryScan, previousDiscontinuationReviews = new Map() }) {
  const finalIds = catalog.products.map((product) => product.id).sort();
  const baselineIds = [...baselineById.keys()].sort();
  const finalById = new Map(catalog.products.map((product) => [product.id, product]));
  const priceChanges = [];
  const linkChanges = [];
  const imageChanges = [];
  for (const id of finalIds.filter((candidate) => baselineById.has(candidate))) {
    const before = baselineById.get(id);
    const after = finalById.get(id);
    if (Number(before.price?.amount) !== Number(after.price?.amount)) {
      priceChanges.push({ id, before: before.price.amount, after: after.price.amount, currency: after.price.currency, source: after.buyUrl });
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
  const discontinuedCandidates = mergeDiscontinuationReviews(raw.discontinuedCandidates, previousDiscontinuationReviews);
  const pendingDiscontinuationCandidates = discontinuedCandidates.filter(
    (candidate) => candidate.disposition === "manual_official_evidence_required",
  );

  return {
    schemaVersion: 2,
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
      newProductsAdded: finalIds.filter((id) => !baselineById.has(id)),
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
      discontinuedRemoved: baselineIds.filter((id) => !finalById.has(id)),
    },
    exchange,
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
  const baselineById = loadCatalogFromGit(BASELINE_REF, catalog.categories.map((category) => category.fileName));
  const checkedAt = new Date().toISOString();
  const raw = {
    schemaVersion: 2,
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
  applyExchangeRates(catalog.products, exchange, raw);
  await mapLimit(catalog.products, CONCURRENCY, (product) => auditHistoricalSource(product, raw));

  const categoryScan = currentCategoryScan(catalog.categories, readPreviousCategoryScan(), checkedAt);
  const compact = buildCompactReport({
    catalog,
    baselineById,
    raw,
    exchange,
    checkedAt,
    categoryScan,
    previousDiscontinuationReviews: readPreviousDiscontinuationReviews(),
  });
  if (WRITE && categoryScan.some((row) => row.status !== "manually_reviewed")) {
    throw new Error("Refusing to finalize: every category requires an explicit manually_reviewed new-product decision");
  }
  if (WRITE && compact.summary.pchomeInvalidPrices + compact.summary.pchomeRequestFailures > 0) {
    throw new Error("Refusing to write with unsafe PChome audit results");
  }
  if (WRITE && compact.summary.officialDiscontinuedPendingReview > 0) {
    throw new Error("Refusing to finalize: official discontinuation candidates require manual source review");
  }

  if (WRITE) {
    writeChangedCategories(catalog.categories);
    updateConfig(exchange, catalog.products.length, catalog.categories.length);
    updateDashboardContract(
      catalog.products.length,
      catalog.categories.length,
      new Map(catalog.categories.map((category) => [category.categoryId, category.items.length])),
    );
    syncHistoricalResearch(catalog.products, exchange);
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
  buildCompactReport,
  maintenanceReviewReady,
  mergeDiscontinuationReviews,
  pchomeProductId,
  structuredPriceCandidates,
  trustedStructuredPrice,
  updateDashboardContractSource,
  updateDimensionCategoryCounts,
};
