const fs = require("fs");
const path = require("path");
const { readDashboardProducts } = require("./read-dashboard-products");

const CHECKED_AT = "2026-07-09";
const USD_TWD = 32.127508;

const verifiedHistoricalLows = new Map([
  ["tv-lg-c5-65", {
    status: "found",
    amount: 1096,
    currency: "USD",
    converted: 35212,
    sourceUrl: "https://www.tomsguide.com/tvs/oled-tvs/not-a-typo-the-65-inch-lg-c5-oled-tv-just-crashed-to-usd1-099-on-the-last-day-of-prime-day",
    sourceTitle: "Not a typo! The 65-inch LG C5 OLED TV just crashed to $1,099 on the last day of Prime Day | Tom's Guide",
    evidenceSnippet: "Tom's Guide reported the 65-inch LG C5 at Amazon for $1,099 and its deal card showed now US$1,096, calling it the cheapest the 65-inch C5 had ever been.",
    sourceKind: "retailer_promo",
    confidence: "medium",
    checkedAt: CHECKED_AT,
    note: "Overseas Amazon US 65-inch LG C5 equivalent. Converted using USD_TWD 32.127508; excludes shipping, import tax, plug/voltage differences, and Taiwan warranty risk.",
  }],
  ["tv-samsung-s90f-65", {
    status: "found",
    amount: 1197.99,
    currency: "USD",
    converted: 38488,
    sourceUrl: "https://www.androidcentral.com/streaming-tv/samsung-s90f-oled-tv-deal-prime-day-2026-gta6-preorders",
    sourceTitle: "This 'best gaming TV' has crashed to a record low price during Prime Day - just in time for your GTA 6 preorder | Android Central",
    evidenceSnippet: "Android Central reported the 65-inch Samsung Class OLED S90F at $1,197.99 during Prime Day and described it as a record-low price.",
    sourceKind: "retailer_promo",
    confidence: "medium",
    checkedAt: CHECKED_AT,
    note: "Overseas US equivalent 65-inch S90F; regional SKU may differ from Taiwan QA65S90FAEXZW. Converted using USD_TWD 32.127508; excludes shipping, import tax, and Taiwan warranty risk.",
  }],
  ["robot-roborock-qrevo-curv-2-flow", {
    status: "found",
    amount: 715,
    currency: "USD",
    converted: 22971,
    sourceUrl: "https://www.wired.com/story/amazon-prime-day-roborock-deals-2026/",
    sourceTitle: "This Is the Roborock Vacuum to Buy During Prime Day | WIRED",
    evidenceSnippet: "WIRED listed Roborock Qrevo Curv 2 Flow at $1,000 reduced to $715 (28% off) during Prime Day.",
    sourceKind: "retailer_promo",
    confidence: "medium",
    checkedAt: CHECKED_AT,
    note: "Converted using USD_TWD 32.127508. Repo current PChome price is lower, but the current retailer page is not used as historical-low evidence because it does not explicitly claim a historical low.",
  }],
  ["monitor-samsung-s57cg952nc", {
    status: "found",
    amount: 1499,
    currency: "USD",
    converted: 48159,
    sourceUrl: "https://www.tomsguide.com/gaming/gaming-peripherals/act-fast-this-57-inch-samsung-gaming-monitor-is-now-usd800-off-at-amazon",
    sourceTitle: "Act fast! This 57-inch Samsung gaming monitor is now $800 off at Amazon | Tom's Guide",
    evidenceSnippet: "Tom's Guide reported Amazon selling the 57-inch Samsung Odyssey Neo G9 for $1,499, $800 off $2,299.",
    sourceKind: "retailer_promo",
    confidence: "medium",
    checkedAt: CHECKED_AT,
    note: "Overseas historical promo for the same 57-inch Odyssey Neo G9/G95NC class. Converted using USD_TWD 32.127508; excludes shipping, import tax, and Taiwan warranty risk. Source does not explicitly call it all-time low.",
  }],
]);

function defaultHistoricalLow(product) {
  return {
    status: "not_found",
    amount: null,
    currency: product.price.currency,
    converted: null,
    sourceUrl: "",
    sourceTitle: "",
    evidenceSnippet: "",
    sourceKind: "not_found",
    confidence: "not_found",
    checkedAt: CHECKED_AT,
    note: "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。",
  };
}

function historicalLowFor(product) {
  return verifiedHistoricalLows.get(product.id) || defaultHistoricalLow(product);
}

function productWithHistoricalLow(product) {
  const { historicalLow: _historicalLow, ...rest } = product;
  return {
    ...rest,
    historicalLow: historicalLowFor(product),
  };
}

function productFileMarkup(categoryId, products) {
  return `(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts(${JSON.stringify(categoryId)}, ${JSON.stringify(products, null, 2)});
})();
`;
}

function researchRow(product) {
  return {
    id: product.id,
    category: product.category,
    brand: product.brand,
    model: product.model,
    name: product.name,
    currentPrice: product.price.converted,
    currentCurrency: product.price.currency,
    currentBuyUrl: product.buyUrl,
    currentBuyLabel: product.buyLabel,
    historicalLow: product.historicalLow,
  };
}

function main() {
  const root = path.resolve(__dirname, "..");
  const { categories, products } = readDashboardProducts(root);
  const productsByCategory = new Map(categories.map((category) => [category.id, []]));
  const updatedProducts = products.map(productWithHistoricalLow);

  for (const product of updatedProducts) {
    productsByCategory.get(product.category).push(product);
  }

  for (const category of categories) {
    const file = path.join(root, "products", `${category.id}.js`);
    fs.writeFileSync(file, productFileMarkup(category.id, productsByCategory.get(category.id)), "utf8");
  }

  const results = updatedProducts.map(researchRow);
  const found = results.filter((row) => row.historicalLow.status === "found");
  const missing = results.filter((row) => row.historicalLow.status === "not_found");
  const byConfidence = results.reduce((counts, row) => {
    const confidence = row.historicalLow.confidence;
    counts[confidence] = (counts[confidence] || 0) + 1;
    return counts;
  }, {});

  const research = {
    summary: {
      checkedAt: `${CHECKED_AT}T00:00:00.000+08:00`,
      sourcePolicy: "同型號、同尺寸/容量/規格的可信新品通路；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、拆封與整新品。當前通路頁未明確標示史低時，不可推定為歷史最低價。",
      total: results.length,
      found: found.length,
      missing: missing.length,
      byConfidence,
      exchange: {
        USD_TWD,
      },
    },
    results,
  };

  fs.writeFileSync(path.join(root, "historical_price_research.json"), `${JSON.stringify(research, null, 2)}\n`, "utf8");

  console.log(JSON.stringify({
    status: "updated",
    products: updatedProducts.length,
    found: found.length,
    missing: missing.length,
  }, null, 2));
}

main();
