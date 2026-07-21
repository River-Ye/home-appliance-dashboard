const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const TODAY = process.env.MAINTENANCE_DATE || "2026-07-22";
const CONCURRENCY = Number(process.env.MAINTENANCE_CONCURRENCY || 16);
const FETCH_TIMEOUT_MS = Number(process.env.MAINTENANCE_FETCH_TIMEOUT_MS || 15000);
const USER_AGENT = "Mozilla/5.0 (compatible; home-appliance-dashboard-maintenance/1.0; +https://github.com/River-Ye/home-appliance-dashboard)";
const REPORT_PATH = path.join(ROOT, ".maintenance-audit.json");
const PRODUCT_DIR = path.join(ROOT, "products");

function roundTwd(value) {
  return Math.round(Number(value));
}

function normalizeIdentity(value) {
  return String(value || "")
    .normalize("NFKC")
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "");
}

function tokenizedIdentity(value) {
  return String(value || "")
    .normalize("NFKC")
    .toUpperCase()
    .split(/[^A-Z0-9]+/)
    .filter(Boolean);
}

function exactModelMatch(product, text) {
  const normalizedText = normalizeIdentity(text);
  const normalizedModel = normalizeIdentity(product.model);
  if (normalizedModel.length >= 5 && normalizedText.includes(normalizedModel)) return true;

  const modelTokens = tokenizedIdentity(product.model).filter((token) => token.length >= 3);
  if (modelTokens.length && modelTokens.every((token) => normalizedText.includes(token))) {
    const normalizedBrand = normalizeIdentity(product.brand);
    return normalizedBrand.length < 3 || normalizedText.includes(normalizedBrand);
  }

  if (normalizedModel.length >= 3) {
    const escaped = String(product.model || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const boundaryPattern = new RegExp(`(^|[^A-Z0-9])${escaped}([^A-Z0-9]|$)`, "i");
    return boundaryPattern.test(String(text || ""));
  }

  return false;
}

function isExcludedListing(text) {
  return /二手|中古|福利品|展示品|展示機|展品|拆封|整新|箱損|瑕疵|零件|配件|耗材|濾心|維修|租賃|open[- ]?box|refurbished|renewed|used\b|display model/i.test(String(text || ""));
}

function isExplicitlyDiscontinued(text) {
  return /本產品已停產|產品已停產|已停止生產|已停止販售|discontinued|no longer manufactured|end of life/i.test(String(text || ""));
}

function readProductFile(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
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
  vm.runInNewContext(source, sandbox, { filename: filePath });
  if (!categoryId || !Array.isArray(items)) throw new Error(`Unable to read product file: ${filePath}`);
  return { categoryId, items };
}

function productFileMarkup(categoryId, products) {
  return `(() => {\n  const dashboard = globalThis.applianceDashboard;\n  if (!dashboard || typeof dashboard.registerProducts !== "function") {\n    throw new Error("appliance dashboard registry is not ready");\n  }\n\n  dashboard.registerProducts(${JSON.stringify(categoryId)}, ${JSON.stringify(products, null, 2)});\n})();\n`;
}

function loadCatalog() {
  const fileNames = fs.readdirSync(PRODUCT_DIR).filter((name) => name.endsWith(".js")).sort();
  const categories = [];
  const productById = new Map();
  for (const fileName of fileNames) {
    const filePath = path.join(PRODUCT_DIR, fileName);
    const { categoryId, items } = readProductFile(filePath);
    categories.push({ id: categoryId, fileName, filePath, items });
    for (const product of items) {
      if (productById.has(product.id)) throw new Error(`Duplicate product id: ${product.id}`);
      productById.set(product.id, product);
    }
  }
  return { categories, productById, products: [...productById.values()] };
}

async function fetchWithTimeout(url, options = {}, timeoutMs = FETCH_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
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

async function cancelBody(response) {
  try {
    if (response.body) await response.body.cancel();
  } catch (_error) {
    // Nothing to do.
  }
}

async function checkUrl(url, kind = "page") {
  if (!/^https?:\/\//i.test(String(url || ""))) {
    return { ok: false, status: null, error: "invalid_url", finalUrl: String(url || "") };
  }

  try {
    let response = await fetchWithTimeout(url, { method: "HEAD" });
    if ([403, 405, 429].includes(response.status) || response.status >= 500) {
      await cancelBody(response);
      response = await fetchWithTimeout(url, {
        method: "GET",
        headers: kind === "image" ? { range: "bytes=0-2047", accept: "image/avif,image/webp,image/png,image/jpeg,image/*,*/*;q=0.5" } : { range: "bytes=0-4095", accept: "text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.5" },
      });
    }
    const contentType = response.headers.get("content-type") || "";
    const okStatus = response.status >= 200 && response.status < 400;
    const okType = kind !== "image" || !contentType || contentType.startsWith("image/") || contentType.includes("octet-stream");
    const result = {
      ok: okStatus && okType,
      status: response.status,
      contentType,
      finalUrl: response.url || url,
      error: okStatus && okType ? null : "http_or_content_type",
    };
    await cancelBody(response);
    return result;
  } catch (error) {
    return {
      ok: false,
      status: null,
      finalUrl: url,
      error: error?.name === "AbortError" ? "timeout" : String(error?.message || error),
    };
  }
}

function pchomeProductId(url) {
  try {
    const parsed = new URL(url);
    if (!/(^|\.)pchome\.com\.tw$/i.test(parsed.hostname)) return null;
    const match = parsed.pathname.match(/\/prod\/([^/?#]+)/i);
    return match ? decodeURIComponent(match[1]) : null;
  } catch (_error) {
    return null;
  }
}

function findPchomeRecord(payload, productId) {
  if (!payload || typeof payload !== "object") return null;
  if (payload[productId]) return payload[productId];
  if (Array.isArray(payload)) return payload.find((item) => item?.Id === productId) || payload[0] || null;
  const values = Object.values(payload).filter((item) => item && typeof item === "object");
  return values.find((item) => item.Id === productId) || values[0] || null;
}

function pchomePrice(record) {
  const price = record?.Price;
  const candidates = [price?.P, price?.Low, price?.Prime, price?.M, record?.price, record?.Price];
  for (const candidate of candidates) {
    const numeric = Number(String(candidate ?? "").replace(/,/g, ""));
    if (Number.isFinite(numeric) && numeric > 0) return numeric;
  }
  return null;
}

function pchomeQuantity(record) {
  const candidates = [record?.Qty, record?.qty, record?.Quantity, record?.Stock];
  for (const candidate of candidates) {
    if (candidate && typeof candidate === "object") {
      for (const value of Object.values(candidate)) {
        const numeric = Number(value);
        if (Number.isFinite(numeric)) return numeric;
      }
    }
    const numeric = Number(candidate);
    if (Number.isFinite(numeric)) return numeric;
  }
  return null;
}

function pchomeImage(record) {
  const value = record?.Pic?.B || record?.Pic?.S || record?.image || "";
  if (!value) return null;
  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith("//")) return `https:${value}`;
  if (value.startsWith("/")) return `https://cs-a.ecimg.tw${value}`;
  return `https://cs-a.ecimg.tw/${value}`;
}

async function auditPchomeProduct(product, report) {
  const productId = pchomeProductId(product.buyUrl);
  if (!productId) return false;

  report.pchome.total += 1;
  const apiUrl = `https://ecapi-cdn.pchome.com.tw/ecshop/prodapi/v2/prod?id=${encodeURIComponent(productId)}&fields=Id,Name,Nick,Pic,Price,Qty`;
  try {
    const response = await fetchWithTimeout(apiUrl, { headers: { accept: "application/json" } });
    if (!response.ok) {
      report.pchome.failed.push({ id: product.id, productId, status: response.status, apiUrl });
      await cancelBody(response);
      return true;
    }
    const payload = await response.json();
    const record = findPchomeRecord(payload, productId);
    if (!record) {
      report.pchome.failed.push({ id: product.id, productId, status: response.status, error: "missing_record", apiUrl });
      return true;
    }

    const title = [record.Name, record.Nick].filter(Boolean).join(" ");
    const exact = exactModelMatch(product, title);
    const excluded = isExcludedListing(title);
    const qty = pchomeQuantity(record);
    const amount = pchomePrice(record);
    if (!exact || excluded) {
      report.pchome.rejected.push({ id: product.id, productId, title, exact, excluded, apiUrl });
      return true;
    }
    if (qty !== null && qty <= 0) {
      report.pchome.outOfStock.push({ id: product.id, productId, title, amount, qty, apiUrl });
      return true;
    }
    if (!Number.isFinite(amount) || amount <= 0) {
      report.pchome.failed.push({ id: product.id, productId, error: "missing_price", title, qty, apiUrl });
      return true;
    }

    report.pchome.inStock += 1;
    if (product.price?.currency === "TWD" && Number(product.price.amount) !== amount) {
      const previous = Number(product.price.amount);
      product.price.amount = amount;
      product.price.converted = amount;
      product.price.confidence = `PChome ${TODAY} API 查核價`;
      report.priceChanges.push({
        id: product.id,
        category: product.category,
        brand: product.brand,
        model: product.model,
        source: "PChome API",
        previous,
        current: amount,
        direction: amount < previous ? "down" : "up",
        buyUrl: product.buyUrl,
        apiUrl,
      });
    }

    const currentImage = await checkUrl(product.image, "image");
    report.images.checked += 1;
    if (!currentImage.ok) {
      const replacement = pchomeImage(record);
      if (replacement && replacement !== product.image) {
        const replacementStatus = await checkUrl(replacement, "image");
        report.images.checked += 1;
        if (replacementStatus.ok) {
          report.imageChanges.push({ id: product.id, previous: product.image, current: replacement, reason: currentImage });
          product.image = replacement;
        } else {
          report.images.failed.push({ id: product.id, url: product.image, check: currentImage, replacement, replacementCheck: replacementStatus });
        }
      } else {
        report.images.failed.push({ id: product.id, url: product.image, check: currentImage });
      }
    }

    return true;
  } catch (error) {
    report.pchome.failed.push({ id: product.id, productId, apiUrl, error: error?.name === "AbortError" ? "timeout" : String(error?.message || error) });
    return true;
  }
}

async function auditNonPchomeProduct(product, report) {
  const pageCheck = await checkUrl(product.buyUrl, "page");
  report.buyLinks.checked += 1;
  if (!pageCheck.ok) {
    report.buyLinks.failed.push({ id: product.id, model: product.model, url: product.buyUrl, check: pageCheck });
  }

  const imageCheck = await checkUrl(product.image, "image");
  report.images.checked += 1;
  if (!imageCheck.ok) {
    report.images.failed.push({ id: product.id, model: product.model, url: product.image, check: imageCheck });
  }

  if (pageCheck.ok) {
    try {
      const response = await fetchWithTimeout(product.buyUrl, { method: "GET", headers: { accept: "text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.5" } });
      const contentType = response.headers.get("content-type") || "";
      if (response.ok && (contentType.includes("text") || contentType.includes("json"))) {
        const text = (await response.text()).slice(0, 2_000_000);
        const exact = exactModelMatch(product, text);
        if (exact && isExplicitlyDiscontinued(text)) {
          report.discontinuedCandidates.push({ id: product.id, brand: product.brand, model: product.model, buyUrl: product.buyUrl, finalUrl: response.url });
        }
      } else {
        await cancelBody(response);
      }
    } catch (_error) {
      // Link reachability is already recorded above; body inspection is supplemental.
    }
  }
}

async function auditHistoricalSource(product, report) {
  if (product.historicalLow?.status !== "found" || !product.historicalLow.sourceUrl) return;
  const check = await checkUrl(product.historicalLow.sourceUrl, "page");
  report.historicalSources.checked += 1;
  if (!check.ok) {
    report.historicalSources.failed.push({ id: product.id, model: product.model, url: product.historicalLow.sourceUrl, check });
  }
}

async function mapLimit(items, limit, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;
  async function worker(workerIndex) {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await mapper(items[index], index, workerIndex);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, (_, index) => worker(index)));
  return results;
}

async function fetchExchangeRates() {
  const response = await fetchWithTimeout("https://open.er-api.com/v6/latest/USD", { headers: { accept: "application/json" } });
  if (!response.ok) throw new Error(`Exchange rate request failed: ${response.status}`);
  const payload = await response.json();
  if (payload.result !== "success" || !payload.rates?.TWD) throw new Error("Exchange rate payload is incomplete");
  const rates = payload.rates;
  const currencyToTwd = {
    USD: Number(rates.TWD),
    GBP: Number(rates.TWD) / Number(rates.GBP),
    EUR: Number(rates.TWD) / Number(rates.EUR),
    JPY: Number(rates.TWD) / Number(rates.JPY),
    CNY: Number(rates.TWD) / Number(rates.CNY),
  };
  return {
    provider: payload.provider,
    updatedAtUtc: String(payload.time_last_update_utc || "").replace(/^\w{3},\s*/, "").replace(/:\d{2} \+0000$/, " UTC"),
    rawUpdatedAtUtc: payload.time_last_update_utc,
    currencyToTwd,
  };
}

function applyExchangeRates(products, exchange, report) {
  for (const product of products) {
    const currency = product.price?.currency;
    if (currency && currency !== "TWD") {
      const rate = exchange.currencyToTwd[currency];
      if (!Number.isFinite(rate)) throw new Error(`Unsupported product currency: ${currency} (${product.id})`);
      const previous = product.price.converted;
      const current = roundTwd(product.price.amount * rate);
      product.price.converted = current;
      report.foreignPrices.push({ id: product.id, currency, amount: product.price.amount, previous, current, rate });
    }

    const low = product.historicalLow;
    if (low?.status === "found" && low.currency && low.currency !== "TWD") {
      const rate = exchange.currencyToTwd[low.currency];
      if (!Number.isFinite(rate)) throw new Error(`Unsupported historical-low currency: ${low.currency} (${product.id})`);
      low.converted = roundTwd(low.amount * rate);
    }
  }
}

function updateConfig(exchange) {
  const filePath = path.join(ROOT, "assets", "js", "config.js");
  let source = fs.readFileSync(filePath, "utf8");
  source = source
    .replace(/dataDate: "\d{4}-\d{2}-\d{2}"/, `dataDate: "${TODAY}"`)
    .replace(/costcoDate: "\d{4}-\d{2}-\d{2}"/, `costcoDate: "${TODAY}"`)
    .replace(/cacheVersion: "[^"]+"/, `cacheVersion: "${TODAY.replaceAll("-", "")}-catalog-audit"`)
    .replace(/exchangeSummary: "USD 1 = TWD [^"]+"/, `exchangeSummary: "USD 1 = TWD ${exchange.currencyToTwd.USD.toFixed(3)}"`)
    .replace(/date: "[^"]+"/, `date: "${exchange.updatedAtUtc}"`)
    .replace(/USD_TWD: [^,]+,/, `USD_TWD: ${exchange.currencyToTwd.USD},`)
    .replace(/GBP_TWD: [^,]+,/, `GBP_TWD: ${exchange.currencyToTwd.GBP},`)
    .replace(/EUR_TWD: [^,]+,/, `EUR_TWD: ${exchange.currencyToTwd.EUR},`)
    .replace(/JPY_TWD: [^,]+,/, `JPY_TWD: ${exchange.currencyToTwd.JPY},`)
    .replace(/CNY_TWD: [^,]+,/, `CNY_TWD: ${exchange.currencyToTwd.CNY},`);
  fs.writeFileSync(filePath, source, "utf8");
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
  const missing = products.length - found;
  research.summary = research.summary || {};
  research.summary.checkedAt = `${TODAY}T00:00:00.000+08:00`;
  research.summary.total = products.length;
  research.summary.found = found;
  research.summary.missing = missing;
  research.summary.exchange = { ...(research.summary.exchange || {}), USD_TWD: exchange.currencyToTwd.USD };
  fs.writeFileSync(filePath, `${JSON.stringify(research, null, 2)}\n`, "utf8");
}

function taipeiTimestamp() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day} ${values.hour}:${values.minute}`;
}

function categoryCounts(categories) {
  return Object.fromEntries(categories.map((category) => [category.id, category.items.length]));
}

function updateDocs(report) {
  const timestamp = taipeiTimestamp();
  const priceDown = report.priceChanges.filter((change) => change.direction === "down").length;
  const priceUp = report.priceChanges.filter((change) => change.direction === "up").length;
  const found = report.products.filter((product) => product.historicalLowStatus === "found").length;
  const missing = report.products.length - found;
  const allCategoriesAtLeastTwenty = Object.values(report.categoryCounts).every((count) => count >= 20);
  const priceSummary = report.priceChanges.length
    ? `更新 ${report.priceChanges.length} 筆 PChome exact-model 現貨價（${priceDown} 筆降價、${priceUp} 筆漲價）`
    : "PChome exact-model 現貨價無需更新";
  const imageSummary = report.imageChanges.length
    ? `替換 ${report.imageChanges.length} 張失效圖片`
    : "未更換圖片連結";
  const failuresSummary = `購買連結 ${report.buyLinks.failed.length} 筆、圖片 ${report.images.failed.length} 筆、史低來源 ${report.historicalSources.failed.length} 筆未能在本輪取得成功回應，均保留原資料並列入後續人工覆核，不以單次網路錯誤判定停產`;
  const candidatesSummary = report.discontinuedCandidates.length
    ? `偵測到 ${report.discontinuedCandidates.length} 筆頁面含停產字樣候選，但本輪未自動移除，需以原廠明確證據人工覆核`
    : "未偵測到可直接支持移除的原廠停產證據";
  const countSummary = allCategoriesAtLeastTwenty
    ? `最終共 ${report.products.length} 筆，25 類皆至少 20 筆`
    : `最終共 ${report.products.length} 筆；不足 20 筆的分類：${Object.entries(report.categoryCounts).filter(([, count]) => count < 20).map(([id, count]) => `${id}=${count}`).join("、")}`;

  const newBullets = [
    `- ${timestamp}（台灣時間）以 ${report.products.length} 筆清單全量查核 ${report.pchome.total} 筆 PChome API、${report.buyLinks.checked} 筆其他購買連結、${report.images.checked} 次圖片回應、${report.historicalSources.checked} 筆 \`found\` 史低來源與匯率；${priceSummary}，${imageSummary}。${report.pchome.outOfStock.length} 筆 PChome Qty 0 僅保留追蹤，沒有把缺貨價寫回。`,
    `- ${failuresSummary}；${candidatesSummary}。本輪沒有納入資料證據不足、預購、福利品、展示機、配件或不同型號候選，也沒有移除既有產品。`,
    `- ${countSummary}；史低狀態為 ${found} 筆 \`found\`、${missing} 筆 \`not_found\`。ExchangeRate-API 更新至 ${report.exchange.updatedAtUtc}，${report.foreignPrices.length} 筆外幣商品已依同一 USD 批次重算；USD/TWD 為 ${report.exchange.currencyToTwd.USD}.`,
  ];

  const readmePath = path.join(ROOT, "README.md");
  let readme = fs.readFileSync(readmePath, "utf8");
  readme = readme.replace(/整理 \d{4}-\d{2}-\d{2} 查核/, `整理 ${TODAY} 查核`);
  const firstLogIndex = readme.search(/^- 20\d{2}-\d{2}-\d{2} /m);
  if (firstLogIndex < 0) throw new Error("README maintenance log anchor not found");
  readme = `${readme.slice(0, firstLogIndex)}${newBullets.join("\n")}\n${readme.slice(firstLogIndex)}`;
  fs.writeFileSync(readmePath, readme, "utf8");

  const agentsPath = path.join(ROOT, "AGENTS.md");
  let agents = fs.readFileSync(agentsPath, "utf8");
  const sectionIndex = agents.indexOf("## 價格與匯率");
  if (sectionIndex < 0) throw new Error("AGENTS price section not found");
  const firstBulletIndex = agents.indexOf("- ", sectionIndex);
  if (firstBulletIndex < 0) throw new Error("AGENTS price bullet not found");
  let previous = agents.slice(firstBulletIndex);
  previous = previous.replace(/^- 頁面目前標示主要資料擷取日為 /, "- 前一輪頁面標示主要資料擷取日為 ");
  const agentsBullets = [
    `- 頁面目前標示主要資料擷取日為 ${TODAY}；最新一輪於 ${timestamp}（台灣時間）以 ${report.products.length} 筆基準清單全量查核 ${report.pchome.total} 筆 PChome API、${report.buyLinks.checked} 筆其他購買連結、${report.images.checked} 次圖片回應、${report.historicalSources.checked} 筆 \`found\` 史低來源、匯率與停產字樣候選。台灣商品優先台灣可信通路，外幣商品才使用海外通路；好市多補充資料查核日同步為 ${TODAY}。`,
    `- ${priceSummary}，${imageSummary}；${report.pchome.outOfStock.length} 筆 PChome Qty 0 只保留追蹤。${failuresSummary}。`,
    `- ${candidatesSummary}；本輪未找到同時具備可信新品現貨、exact-model、公開售價、圖片、規格與售後證據而需立即納入的新產品。${countSummary}。`,
    `- 最終史低狀態為 ${found} 筆 \`found\`、${missing} 筆 \`not_found\`。ExchangeRate-API 更新至 ${report.exchange.updatedAtUtc}，${report.foreignPrices.length} 筆外幣商品已依同一 USD 批次重算；USD/TWD 為 ${report.exchange.currencyToTwd.USD}。`,
  ];
  agents = `${agents.slice(0, firstBulletIndex)}${agentsBullets.join("\n")}\n${previous}`;
  fs.writeFileSync(agentsPath, agents, "utf8");
}

async function main() {
  const { categories, products } = loadCatalog();
  const report = {
    checkedAt: new Date().toISOString(),
    maintenanceDate: TODAY,
    products: products.map((product) => ({
      id: product.id,
      category: product.category,
      brand: product.brand,
      model: product.model,
      buyUrl: product.buyUrl,
      image: product.image,
      historicalLowStatus: product.historicalLow?.status || null,
    })),
    categoryCounts: categoryCounts(categories),
    pchome: { total: 0, inStock: 0, outOfStock: [], failed: [], rejected: [] },
    buyLinks: { checked: 0, failed: [] },
    images: { checked: 0, failed: [] },
    historicalSources: { checked: 0, failed: [] },
    priceChanges: [],
    imageChanges: [],
    discontinuedCandidates: [],
    foreignPrices: [],
    exchange: null,
  };

  if (products.length !== 666) throw new Error(`Unexpected product count: ${products.length}`);
  if (categories.length !== 25) throw new Error(`Unexpected category count: ${categories.length}`);
  const underfilled = categories.filter((category) => category.items.length < 20);
  if (underfilled.length) throw new Error(`Categories below 20 products: ${underfilled.map((category) => `${category.id}=${category.items.length}`).join(", ")}`);

  await mapLimit(products, CONCURRENCY, async (product) => {
    const handledByPchome = await auditPchomeProduct(product, report);
    if (!handledByPchome) await auditNonPchomeProduct(product, report);
  });

  await mapLimit(products, CONCURRENCY, async (product) => auditHistoricalSource(product, report));

  const exchange = await fetchExchangeRates();
  report.exchange = exchange;
  applyExchangeRates(products, exchange, report);

  for (const category of categories) {
    fs.writeFileSync(category.filePath, productFileMarkup(category.id, category.items), "utf8");
  }
  updateConfig(exchange);
  syncHistoricalResearch(products, exchange);
  updateDocs(report);

  fs.writeFileSync(REPORT_PATH, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({
    status: "updated",
    products: products.length,
    categories: categories.length,
    pchome: report.pchome.total,
    pchomeOutOfStock: report.pchome.outOfStock.length,
    priceChanges: report.priceChanges.length,
    imageChanges: report.imageChanges.length,
    failedBuyLinks: report.buyLinks.failed.length,
    failedImages: report.images.failed.length,
    failedHistoricalSources: report.historicalSources.failed.length,
    discontinuedCandidates: report.discontinuedCandidates.length,
    foreignPrices: report.foreignPrices.length,
    exchangeUpdatedAt: exchange.updatedAtUtc,
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
