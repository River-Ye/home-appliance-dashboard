const fs = require("fs");
const path = require("path");
const { readDashboardProducts } = require("./read-dashboard-products");
const {
  ADDED_PRODUCTS_SCOPE, assertIncrementalBaselinePreserved, loadIncrementalBaseline, readEvidenceDocuments,
} = require("./incremental-catalog-audit");

const ROOT = path.resolve(__dirname, "..");
const SUMMARY_MARKER = "catalog-maintenance-summary";

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceMarkerBlock(source, marker, body) {
  const escapedMarker = escapeRegExp(marker);
  const pattern = new RegExp(
    `(<!-- ${escapedMarker}:start -->)\\n[\\s\\S]*?\\n(<!-- ${escapedMarker}:end -->)`,
  );
  if (!pattern.test(source)) {
    throw new Error(`Missing ${marker} markers`);
  }
  return source.replace(pattern, `$1\n${String(body).trim()}\n$2`);
}

function normalizeExchangeDate(value) {
  const match = String(value || "").match(
    /^(?:\w{3},\s*)?(\d{1,2})\s+(\w{3})\s+(\d{4})\s+(\d{2}):(\d{2})(?::\d{2})?\s+(?:\+0000|UTC)$/,
  );
  if (!match) throw new Error(`Unsupported exchange timestamp: ${value}`);
  const months = {
    Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
    Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
  };
  const [, day, month, year, hour, minute] = match;
  if (!months[month]) throw new Error(`Unsupported exchange month: ${month}`);
  return `${year}-${months[month]}-${day.padStart(2, "0")} ${hour}:${minute} UTC`;
}

function taipeiTimestamp(value) {
  const parts = new Intl.DateTimeFormat("zh-TW", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date(value));
  const fields = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${fields.year}-${fields.month}-${fields.day} ${fields.hour}:${fields.minute}`;
}

function renderMaintenanceSummary(report, baselineReport = null) {
  const summary = report.summary || {};
  const exchange = report.exchange || {};
  if (report.auditScope === ADDED_PRODUCTS_SCOPE) {
    const added = summary.newProductsAdded || [];
    const baselineDate = baselineReport?.dataDate || "不可變 Git 基準所記錄的日期";
    return [
      `- ${taipeiTimestamp(report.checkedAt)}（台灣時間）完成 ${added.length} 款新增商品查核；目前共 ${summary.categories} 類、${summary.finalProducts} 筆商品，原 ${summary.baselineProducts} 筆沿用 ${baselineDate} 的證據，沒有重新查價或修改舊商品。`,
      `- 本次增量新增 ${added.join("、")}；沒有移除或替換商品。既有逐類與日系品牌覆核保留原內容及日期，只補查新增分類；所有分類至少 ${summary.minimumProductsPerCategory} 筆。`,
      `- 本輪來源與圖片查核限新增 ${added.length} 款；累積來源／圖片覆蓋 ${summary.sourcesAudited}／${summary.imagesAudited} 筆，包含沿用的舊查核與例外。史低累積 ${summary.historicalFound} 筆 \`found\`、${summary.historicalMissing} 筆 \`not_found\`；既有逐筆證據與查核日期保留，累積覆蓋不代表本輪重新查核。`,
      `- 匯率沿用 ExchangeRate-API ${exchange.date}，USD/TWD ${exchange.USD_TWD}；本輪未重抓匯率，既有外幣價格未重算，新增海外款使用同一保留匯率換算。完整摘要、不可變基準與例外保存在 \`catalog_maintenance_latest.json\`。`,
    ].join("\n");
  }
  if (report.auditScope !== undefined) throw new Error(`Unsupported maintenance auditScope: ${report.auditScope}`);
  const added = summary.newProductsAdded?.length
    ? `本次增量新增 ${summary.newProductsAdded.join("、")}`
    : "本次增量沒有納入新產品";
  const removed = summary.discontinuedRemoved?.length
    ? `本次增量移除 ${summary.discontinuedRemoved.join("、")}`
    : "本次增量沒有移除停產產品";
  const replacements = summary.catalogEntriesReplaced?.length
    ? `；品質替換 ${summary.catalogEntriesReplaced.map((entry) => `${entry.beforeId} → ${entry.afterId}`).join("、")}`
    : "";
  const timestamp = taipeiTimestamp(report.checkedAt);
  const categoryReviewSummary = {
    same_date_carried_forward: "沿用本資料日已完成的逐類人工新品覆核（原覆核時間保留）",
    mixed_current_and_carried_forward: "沿用本資料日既有逐類人工新品覆核，並補查部分分類（原覆核時間保留）",
  }[report.categoryReviewProvenance] || "逐類人工新品覆核已完成";
  const historicalRows = report.changes?.historicalLows || [];
  const historicalChanges = summary.historicalLowPriceChanges ?? summary.historicalLowChanges ?? 0;
  const historicalDrops = historicalRows.filter(
    ({ before, after }) => Number.isFinite(before) && Number.isFinite(after) && after < before,
  ).length;
  const historicalInvalidations = historicalRows.filter(
    ({ before, after }) => Number.isFinite(before) && !Number.isFinite(after),
  ).length;
  const historicalOtherChanges = historicalRows.length - historicalDrops - historicalInvalidations;
  const historicalChangeSummary = historicalRows.length
    ? [
      historicalDrops ? `下修 ${historicalDrops} 筆` : "",
      historicalInvalidations ? `撤銷 ${historicalInvalidations} 筆不適用史低` : "",
      historicalOtherChanges ? `其他更正 ${historicalOtherChanges} 筆` : "",
    ].filter(Boolean).join("、")
    : `異動 ${historicalChanges} 筆`;
  return [
    `- ${timestamp}（台灣時間）完成 ${summary.finalProducts} 筆商品、${summary.categories} 類全量查核；${summary.pchomeAudited} 筆 PChome SKU API 已完成（${summary.pchomeExactModelVerified} 筆 exact model、${summary.pchomeReviewedBindingVerified} 筆人工 SKU 綁定可寫入，${summary.pchomeModelUnverified} 筆型號未自動確認），更新 ${summary.priceChanges} 筆公開價格（${summary.priceDrops} 筆下修、${summary.priceRises} 筆上修），${summary.pchomeOutOfStockTracked} 筆 Qty 0 只列追蹤。`,
    `- ${added}；${removed}${replacements}。${categoryReviewSummary}，所有分類至少 ${summary.minimumProductsPerCategory} 筆；停產只採品牌官方明確證據，缺貨、反爬或單次連線錯誤不作為刪除依據。`,
    `- 圖片查核覆蓋 ${summary.imagesAudited} 筆；${summary.sourcesVerifiedAvailable} 筆來源可由 exact model 或人工 SKU 綁定確認，${summary.sourceExceptions} 筆來源例外與 ${summary.imageExceptions} 筆圖片例外保留原資料。史低為 ${summary.historicalFound} 筆 \`found\`、${summary.historicalMissing} 筆 \`not_found\`，本輪${historicalChangeSummary}；${summary.historicalSourcesVerified} 筆來源可自動重現，其餘保留原逐筆證據且未臆測失效。`,
    `- ExchangeRate-API 最新批次為 ${exchange.date}，USD/TWD ${exchange.USD_TWD}；${summary.foreignPricesRecomputed} 筆外幣商品已重算。完整摘要與例外保存在 \`catalog_maintenance_latest.json\`。`,
  ].join("\n");
}

function updateIndexMetadata(source, meta, report = null) {
  if (report) {
    if (![undefined, ADDED_PRODUCTS_SCOPE].includes(report.auditScope)) throw new Error(`Unsupported maintenance auditScope: ${report.auditScope}`);
    const scope = report.auditScope === ADDED_PRODUCTS_SCOPE
      ? `新增查核 ${report.summary.newProductsAdded.length} 款，其餘 ${report.summary.baselineProducts} 款沿用；匯率沿用 ${report.exchange.date}`
      : "價格與購買連結已全量查核";
    source = source.replace(/<small>[^<]+；<span id="exchangeSummary">/, `<small>${scope}；<span id="exchangeSummary">`);
  }
  return source
    .replace(/"dateModified": "\d{4}-\d{2}-\d{2}"/, `"dateModified": "${meta.dataDate}"`)
    .replace(/id="dataDate">\d{4}-\d{2}-\d{2}<\/strong>/, `id="dataDate">${meta.dataDate}</strong>`)
    .replace(/資料更新日為 \d{4}-\d{2}-\d{2}。/, `資料更新日為 ${meta.dataDate}。`)
    .replace(/id="exchangeSummary">[^<]+<\/span>/, `id="exchangeSummary">${meta.exchangeSummary}</span>`)
    .replace(/\?v=[^"']+/g, `?v=${meta.cacheVersion}`);
}

function updateReadmeMetadata(source, meta) {
  return source
    .replace(
      /整理 \d{4}-\d{2}-\d{2} 查核的家電推薦清單/,
      `整理 ${meta.dataDate} 查核的家電推薦清單`,
    )
    .replace(/共 \d+ 類商品，每種商品至少 20 個，共 \d+ 筆。/, `共 ${meta.expectedCategoryCount} 類商品，每種商品至少 20 個，共 ${meta.expectedProductCount} 筆。`)
    .replace(/不為 \d+ 筆商品建立重複、薄內容的獨立頁面。/, `不為 ${meta.expectedProductCount} 筆商品建立重複、薄內容的獨立頁面。`)
    .replace(/全部 \d+ 款的品牌、型號、名稱、參考價、上市日期與摘要。/, `全部 ${meta.expectedProductCount} 款的品牌、型號、名稱、參考價、上市日期與摘要。`)
    .replace(/檢查 \d+ 類、\d+ 筆、必要欄位/, `檢查 ${meta.expectedCategoryCount} 類、${meta.expectedProductCount} 筆、必要欄位`)
    .replace(/(`npm run check:geo`：(?:檢查 )?)\d+ 個分類頁、\d+ 款/, `$1${meta.expectedCategoryCount} 個分類頁、${meta.expectedProductCount} 款`)
    .replace(/不建立 \d+ 個重複商品事實的薄內容頁。/, `不建立 ${meta.expectedProductCount} 個重複商品事實的薄內容頁。`)
    .replace(/- 共 \d+ 類、\d+ 筆商品。/, `- 共 ${meta.expectedCategoryCount} 類、${meta.expectedProductCount} 筆商品。`);
}

function main() {
  const reportPath = path.join(ROOT, "catalog_maintenance_latest.json");
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  const catalog = readDashboardProducts(ROOT);
  const { meta } = catalog;
  if (report.dataDate !== meta.dataDate) {
    throw new Error(`Maintenance report date ${report.dataDate} does not match config ${meta.dataDate}`);
  }

  const baseline = report.auditScope === ADDED_PRODUCTS_SCOPE
    ? loadIncrementalBaseline(ROOT, report.baselineRef)
    : null;
  if (baseline) assertIncrementalBaselinePreserved({ report, catalog, baseline, documents: readEvidenceDocuments(ROOT) });
  const summary = renderMaintenanceSummary(report, baseline?.report);
  for (const file of ["README.md", "AGENTS.md"]) {
    const filePath = path.join(ROOT, file);
    const source = fs.readFileSync(filePath, "utf8");
    const withSummary = replaceMarkerBlock(source, SUMMARY_MARKER, summary);
    fs.writeFileSync(filePath, updateReadmeMetadata(withSummary, meta));
  }

  const indexPath = path.join(ROOT, "index.html");
  fs.writeFileSync(indexPath, updateIndexMetadata(fs.readFileSync(indexPath, "utf8"), meta, report));
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = {
  normalizeExchangeDate,
  replaceMarkerBlock,
  renderMaintenanceSummary,
  updateIndexMetadata,
  updateReadmeMetadata,
};
