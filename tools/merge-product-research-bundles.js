const fs = require("fs");
const path = require("path");
const { readDashboardProducts } = require("./read-dashboard-products");
const { DIMENSION_CATEGORIES, WEIGHT_CATEGORIES } = require("./dashboard-contract");
const { validateResearchDocuments } = require("./verify-data");
const {
  ADDED_PRODUCTS_SCOPE, EVIDENCE_TARGETS, assertIncrementalBaselinePreserved, assertResearchRowsPreserved,
  loadIncrementalBaseline, readEvidenceDocuments,
} = require("./incremental-catalog-audit");

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
    if (!(row.id || row.productId) || !key) throw new Error(`${label} contains a row without an identity key`);
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

function refreshMetadata(file, document, catalog, checkedAt, researchedIds, report) {
  const { products, categories } = catalog;
  if (file === "release_date_research.json") {
    const found = document.results.filter((row) => row.releaseDate !== "找不到").length;
    document.summary = {
      checkedAt: `${checkedAt}T00:00:00+08:00`, total: products.length, researchedThisRun: researchedIds.length, found,
      missing: products.length - found,
      byConfidence: countsBy(document.results, (row) => row.confidence || "not_found"),
    };
  }
  if (file === "historical_price_research.json") {
    const found = document.results.filter((row) => row.historicalLow?.status === "found").length;
    document.summary = {
      ...document.summary,
      checkedAt: `${checkedAt}T00:00:00.000+08:00`,
      sourcePolicy: `${checkedAt} 合併 ${researchedIds.length} 款新增 exact-model 研究，既有逐筆證據及查核日期沿用、不表示重新查核。每筆明確區分通路現價與官方建議售價，官方建議售價不得被當成通路現價或史低。史低只接受具日期、同型號且可公開重現的可信新品來源；會員個人化折扣、點數、二手、福利品、展示機、拆封、整新、配件與耗材均排除。`,
      total: products.length, researchedThisRun: researchedIds.length, found,
      missing: products.length - found,
      byConfidence: countsBy(document.results, (row) => row.historicalLow?.confidence || "not_found"),
    };
    if (report?.auditScope === ADDED_PRODUCTS_SCOPE) {
      if (report.dataDate !== checkedAt) throw new Error("Research date must match the incremental maintenance report");
      const summary = report.summary;
      Object.assign(document.summary, {
        lastMaintenanceCheckAt: report.checkedAt,
        currentPriceChanged: summary.priceChanges, currentBuyLinkChanged: summary.linkChanges,
        currentPriceDrops: summary.priceDrops, currentPriceRises: summary.priceRises,
        historicalLowUpdated: summary.historicalLowPriceChanges, historicalLowInvalidated: 0,
        currentImageChanged: summary.imageChanges, discontinuedRemoved: 0, catalogEntriesRemoved: 0,
        newProductsAdded: summary.newProductsAdded.length,
        catalogEntriesReplaced: 0, catalogReplacementNotes: [], currentPriceFallbacks: 0,
        exchange: { ...report.exchange, currentUSD_TWD: report.exchange.USD_TWD },
      });
      delete document.summary.sameRunCorrections;
    }
  }
  if (file === "dimension_research.json") {
    document.generatedAt = checkedAt;
    const dimensionCategoryCount = new Set(products.filter((product) => DIMENSION_CATEGORIES.has(product.category)).map((product) => product.category)).size;
    const weightCategoryCount = new Set(products.filter((product) => WEIGHT_CATEGORIES.has(product.category)).map((product) => product.category)).size;
    const labels = categories.filter((category) => DIMENSION_CATEGORIES.has(category.id)).map((category) => category.label.replaceAll("/", "／")).join("、");
    document.sourcePolicy = `本站共 ${dimensionCategoryCount} 類尺寸、${weightCategoryCount} 類重量研究，尺寸涵蓋 ${labels}。優先採 exact-model／相同版本的官方產品頁、官方規格表或官方 PDF，其次為可信新品通路。只採本體／機身／明確組件的尺寸與淨重，排除包裝、外箱尺寸與毛重；來源沒有明示軸序時不自行推定。既有家電與床包、棉被、枕頭維持 cm／kg，滑鼠、鍵盤與滑鼠墊使用 mm／g 並保留來源軸序。滑鼠墊厚度、床包可包覆高度另列；棉被的填充重量與整件淨重分開記錄。冷氣分列室內機與室外機，熱泵複合熱水器分列主機與儲槽。generatedAt 為最新證據批次日期，既有逐筆 checkedAt 與 weightCheckedAt 保留原查核日期，不表示重新查核。`;
  }
  if (file === "product_issue_research.json") {
    const common = document.results.filter((row) => row.issueResearch?.status === "common_issue").length;
    document.summary = {
      ...document.summary, checkedAt: `${checkedAt}T00:00:00+08:00`, total: products.length, researchedThisRun: researchedIds.length,
      commonIssueProducts: common, noCommonIssueProducts: products.length - common,
      pendingManualReview: document.results.filter((row) => row.workflowStatus !== "completed").length,
      commonIssues: document.results.reduce((sum, row) => sum + (row.issueResearch?.issues?.length || 0), 0),
    };
  }
  if (["product_issue_report_evidence.json", "product_issue_review_manifest.json"].includes(file)) document.checkedAt = checkedAt;
}

function prepareResearchMerge({ catalog, documents, bundles, checkedAt, baseline = null, report = null }) {
  const { products } = catalog;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(checkedAt || ""))) throw new Error("Research date requires YYYY-MM-DD");
  if (report?.auditScope !== undefined && (report.auditScope !== ADDED_PRODUCTS_SCOPE || !baseline)) throw new Error("Incremental research merge requires its immutable baseline");
  if (baseline && report?.auditScope !== ADDED_PRODUCTS_SCOPE) throw new Error("A baseline requires an added-products maintenance report");
  const incremental = baseline ? assertIncrementalBaselinePreserved({ report, catalog, baseline }) : null;
  const productIds = new Set(products.map((product) => product.id));
  if (productIds.size !== products.length) throw new Error("Research catalog contains duplicate product IDs");
  const baselineIds = new Set((baseline?.products || []).map((product) => product.id));
  const researchedIds = products.filter((product) => !baseline || !baselineIds.has(product.id)).map((product) => product.id);
  const result = JSON.parse(JSON.stringify(documents));
  for (const target of EVIDENCE_TARGETS) {
    const document = result[target.file];
    if (!document) throw new Error(`Missing research document: ${target.file}`);
    const existing = document[target.collection] || [];
    const incoming = bundles.flatMap((bundle) => rowsFromBundle(bundle, target.keys, target.collection));
    assertUniqueRows(existing, target.rowKey, `${target.file} existing rows`);
    assertUniqueRows(incoming, target.rowKey, `${target.file} incoming bundles`);
    for (const row of incoming) {
      const id = row.id || row.productId;
      if (!productIds.has(id)) throw new Error(`${target.file} contains unknown product ${id}`);
      if (baselineIds.has(id)) throw new Error(`${target.file} cannot replace baseline evidence for ${id}`);
    }
    const byKey = new Map(existing.map((row) => [target.rowKey(row), row]));
    for (const row of incoming) byKey.set(target.rowKey(row), row);
    document[target.collection] = [...byKey.values()].filter((row) => productIds.has(row.id || row.productId));
    refreshMetadata(target.file, document, catalog, checkedAt, researchedIds, report);
    if (target.collection === "results") {
      const rows = document.results;
      const expectedIds = products.filter((product) => target.file !== "dimension_research.json" || DIMENSION_CATEGORIES.has(product.category)).map((product) => product.id).sort();
      if (JSON.stringify(rows.map((row) => row.id).sort()) !== JSON.stringify(expectedIds)) {
        throw new Error(`${target.file} must cover all ${expectedIds.length} eligible products exactly once`);
      }
    }
  }
  if (baseline) assertResearchRowsPreserved(result, baseline);
  const failures = [];
  validateResearchDocuments(products, { ...result, "catalog_maintenance_latest.json": report }, failures, incremental);
  if (failures.length) throw new Error(`Research merge preflight failed:\n${failures.join("\n")}`);
  return result;
}

function mergeResearchBundles(options, writeDocument) {
  const merged = prepareResearchMerge(options);
  // Preflight every target before the first write so an invalid later target cannot partially replace evidence.
  for (const [file, document] of Object.entries(merged)) writeDocument(file, document);
  return merged;
}

function main() {
  const root = path.resolve(__dirname, "..");
  const args = process.argv.slice(2);
  const checkedAt = args.find((argument) => argument.startsWith("--date="))?.slice(7);
  const baselineArgument = args.find((argument) => argument.startsWith("--baseline-ref="))?.slice(15);
  if (args.some((argument) => argument.startsWith("--") && !/^--(?:date|baseline-ref)=/.test(argument))) throw new Error("Unknown research merge option");
  const paths = args.filter((argument) => !argument.startsWith("--"));
  if (!paths.length) throw new Error("Usage: node tools/merge-product-research-bundles.js --date=YYYY-MM-DD [--baseline-ref=<fullSHA>] <bundle.json> [...]");
  const report = JSON.parse(fs.readFileSync(path.join(root, "catalog_maintenance_latest.json"), "utf8"));
  const reference = baselineArgument || (report.auditScope === ADDED_PRODUCTS_SCOPE ? report.baselineRef : null);
  const baseline = reference ? loadIncrementalBaseline(root, reference) : null;
  const catalog = readDashboardProducts(root);
  mergeResearchBundles({
    catalog, documents: readEvidenceDocuments(root),
    bundles: paths.map((file) => JSON.parse(fs.readFileSync(path.resolve(file), "utf8"))),
    checkedAt, baseline, report,
  }, (file, document) => fs.writeFileSync(path.join(root, file), `${JSON.stringify(document, null, 2)}\n`));
  console.log(JSON.stringify({ checkedAt, products: catalog.products.length, researchedThisRun: baseline ? catalog.products.length - baseline.products.length : catalog.products.length }, null, 2));
}

if (require.main === module) main();

module.exports = { prepareResearchMerge, mergeResearchBundles };
