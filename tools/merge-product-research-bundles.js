const fs = require("fs");
const path = require("path");
const { readDashboardProducts } = require("./read-dashboard-products");

const ROOT = path.resolve(__dirname, "..");
const CHECKED_AT = "2026-08-20";
const bundlePaths = process.argv.slice(2).map((file) => path.resolve(file));

if (bundlePaths.length === 0) {
  throw new Error("Usage: node tools/merge-product-research-bundles.js <bundle.json> [...]");
}

const TARGETS = [
  {
    file: "release_date_research.json",
    keys: ["release_date_research", "releaseDateResearch"],
    collection: "results",
    rowKey: (row) => row.id,
  },
  {
    file: "historical_price_research.json",
    keys: ["historical_price_research", "historicalPriceResearch"],
    collection: "results",
    rowKey: (row) => row.id,
  },
  {
    file: "dimension_research.json",
    keys: ["dimension_research", "dimensionResearch"],
    collection: "results",
    rowKey: (row) => row.id,
  },
  {
    file: "product_issue_research.json",
    keys: ["product_issue_research", "productIssueResearch"],
    collection: "results",
    rowKey: (row) => row.id,
  },
  {
    file: "product_issue_report_evidence.json",
    keys: ["product_issue_report_evidence", "productIssueReportEvidence"],
    collection: "reports",
    rowKey: (row) => [row.productId, row.platform, row.author, row.permalink].join("\u0000"),
  },
  {
    file: "product_issue_review_manifest.json",
    keys: ["product_issue_review_manifest", "productIssueReviewManifest"],
    collection: "results",
    rowKey: (row) => row.id,
  },
];

function rowsFromBundle(bundle, keys, collection) {
  for (const key of keys) {
    const value = bundle[key];
    if (Array.isArray(value)) return value;
    if (value && Array.isArray(value[collection])) return value[collection];
  }
  return [];
}

function assertUniqueRows(rows, rowKey, label) {
  const seen = new Set();
  for (const row of rows) {
    const key = rowKey(row);
    if (!key) throw new Error(`${label} contains a row without an identity key`);
    if (seen.has(key)) throw new Error(`${label} contains duplicate row ${key}`);
    seen.add(key);
  }
}

function countsBy(rows, valueFor) {
  return rows.reduce((counts, row) => {
    const value = valueFor(row);
    counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {});
}

function refreshMetadata(file, document, products) {
  if (file === "release_date_research.json") {
    const found = document.results.filter((row) => row.releaseDate !== "找不到").length;
    document.summary = {
      checkedAt: `${CHECKED_AT}T00:00:00+08:00`,
      total: products.length,
      found,
      missing: products.length - found,
      byConfidence: countsBy(document.results, (row) => row.confidence || "not_found"),
    };
  }

  if (file === "historical_price_research.json") {
    const found = document.results.filter((row) => row.historicalLow?.status === "found").length;
    document.summary = {
      ...document.summary,
      checkedAt: `${CHECKED_AT}T00:00:00.000+08:00`,
      sourcePolicy: `${CHECKED_AT} 合併新增 exact-model 研究；每筆明確區分通路現價與官方建議售價，官方建議售價不得被當成通路現價或史低。史低只接受具日期、同型號且可公開重現的可信新品來源；會員個人化折扣、點數、二手、福利品、展示機、拆封、整新、配件與耗材均排除。`,
      total: products.length,
      researchedThisRun: products.length,
      found,
      missing: products.length - found,
      byConfidence: countsBy(document.results, (row) => row.historicalLow?.confidence || "not_found"),
    };
  }

  if (file === "dimension_research.json") {
    document.generatedAt = CHECKED_AT;
    document.sourcePolicy = "電視、Soundbar、洗衣機、烘衣機、洗烘衣機、電子衣櫥、冰箱、咖啡機、多功能氣炸烤箱／微波爐、洗碗機、免治馬桶、冷氣與熱水器共 13 類尺寸，以及電視、Soundbar、咖啡機、多功能氣炸烤箱／微波爐、冷氣與熱水器共 6 類重量研究，皆優先採 exact-model 官方產品頁、官方規格表或官方 PDF，其次為可信新品通路。只採本體／機身／明確組件的尺寸與淨重，排除包裝、外箱尺寸與毛重；來源沒有明示寬／深／高順序時不自行推定。冷氣分列室內機與室外機，熱泵複合熱水器必須分列主機與儲槽；既有各類研究列仍沿用相同 exact-model 邊界。";
  }

  if (file === "product_issue_research.json") {
    const common = document.results.filter((row) => row.issueResearch?.status === "common_issue").length;
    document.summary = {
      ...document.summary,
      checkedAt: `${CHECKED_AT}T00:00:00+08:00`,
      total: products.length,
      commonIssueProducts: common,
      noCommonIssueProducts: products.length - common,
      pendingManualReview: document.results.filter((row) => row.workflowStatus !== "completed").length,
      commonIssues: document.results.reduce((sum, row) => sum + (row.issueResearch?.issues?.length || 0), 0),
    };
  }

  if (file === "product_issue_report_evidence.json") document.checkedAt = CHECKED_AT;
  if (file === "product_issue_review_manifest.json") document.checkedAt = CHECKED_AT;
}

const bundles = bundlePaths.map((bundlePath) => {
  if (!fs.existsSync(bundlePath)) throw new Error(`Missing bundle: ${bundlePath}`);
  return JSON.parse(fs.readFileSync(bundlePath, "utf8"));
});
const { products } = readDashboardProducts(ROOT);
const productIds = new Set(products.map((product) => product.id));
const catalogOrder = new Map(products.map((product, index) => [product.id, index]));
const mergedCounts = {};

for (const target of TARGETS) {
  const filePath = path.join(ROOT, target.file);
  const document = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const existing = document[target.collection] || [];
  const incoming = bundles.flatMap((bundle) => rowsFromBundle(bundle, target.keys, target.collection));
  assertUniqueRows(incoming, target.rowKey, `${target.file} incoming bundles`);
  for (const row of incoming) {
    const id = row.id || row.productId;
    if (!productIds.has(id)) throw new Error(`${target.file} contains unknown product ${id}`);
  }

  const byKey = new Map(existing.map((row) => [target.rowKey(row), row]));
  for (const row of incoming) byKey.set(target.rowKey(row), row);
  let rows = [...byKey.values()];
  if (target.collection === "results") {
    rows = rows
      .filter((row) => productIds.has(row.id))
      .sort((left, right) => catalogOrder.get(left.id) - catalogOrder.get(right.id));
  } else {
    rows = rows
      .filter((row) => productIds.has(row.productId))
      .sort((left, right) => (
        catalogOrder.get(left.productId) - catalogOrder.get(right.productId)
        || target.rowKey(left).localeCompare(target.rowKey(right))
      ));
  }
  document[target.collection] = rows;
  refreshMetadata(target.file, document, products);
  fs.writeFileSync(filePath, `${JSON.stringify(document, null, 2)}\n`);
  mergedCounts[target.file] = { incoming: incoming.length, final: rows.length };
}

for (const file of [
  "release_date_research.json",
  "historical_price_research.json",
  "product_issue_research.json",
  "product_issue_review_manifest.json",
]) {
  const rows = JSON.parse(fs.readFileSync(path.join(ROOT, file), "utf8")).results;
  if (rows.length !== products.length || new Set(rows.map((row) => row.id)).size !== products.length) {
    throw new Error(`${file} must cover all ${products.length} products exactly once`);
  }
}

console.log(JSON.stringify({ checkedAt: CHECKED_AT, products: products.length, mergedCounts }, null, 2));
