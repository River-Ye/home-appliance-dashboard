const fs = require("fs");
const path = require("path");
const { readDashboardProducts } = require("./read-dashboard-products");

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

function renderMaintenanceSummary(report) {
  const summary = report.summary || {};
  const exchange = report.exchange || {};
  const added = summary.newProductsAdded?.length
    ? `新增 ${summary.newProductsAdded.join("、")}`
    : "沒有納入新產品";
  const removed = summary.discontinuedRemoved?.length
    ? `移除 ${summary.discontinuedRemoved.join("、")}`
    : "沒有移除產品";
  const timestamp = taipeiTimestamp(report.checkedAt);
  const historicalChanges = summary.historicalLowPriceChanges ?? summary.historicalLowChanges ?? 0;
  const exceptionCount = (summary.sourceExceptions || 0) + (summary.imageExceptions || 0);

  return [
    `- ${timestamp}（台灣時間）完成 ${summary.finalProducts} 筆商品、${summary.categories} 類全量查核；${summary.pchomeAudited} 筆 PChome SKU API 已完成（${summary.pchomeExactModelVerified} 筆 exact model、${summary.pchomeReviewedBindingVerified} 筆人工 SKU 綁定可寫入，${summary.pchomeModelUnverified} 筆型號未自動確認），更新 ${summary.priceChanges} 筆現價（${summary.priceDrops} 筆降價、${summary.priceRises} 筆漲價），${summary.pchomeOutOfStockTracked} 筆 Qty 0 只列追蹤。`,
    `- ${added}；${removed}。逐類人工新品覆核已完成，所有分類至少 ${summary.minimumProductsPerCategory} 筆；停產只採品牌官方明確證據，缺貨、反爬或單次連線錯誤不作為刪除依據。`,
    `- 圖片查核覆蓋 ${summary.imagesAudited} 筆；${summary.sourcesVerifiedAvailable} 筆來源可由 exact model 或人工 SKU 綁定確認，${exceptionCount} 筆來源／圖片例外保留原資料。史低為 ${summary.historicalFound} 筆 \`found\`、${summary.historicalMissing} 筆 \`not_found\`，本輪下修 ${historicalChanges} 筆；${summary.historicalSourcesVerified} 筆來源可自動重現，其餘保留原逐筆證據且未臆測失效。`,
    `- ExchangeRate-API 最新批次為 ${exchange.date}，USD/TWD ${exchange.USD_TWD}；${summary.foreignPricesRecomputed} 筆外幣商品已重算。完整摘要與例外保存在 \`catalog_maintenance_latest.json\`。`,
  ].join("\n");
}

function updateIndexMetadata(source, meta) {
  return source
    .replace(/"dateModified": "\d{4}-\d{2}-\d{2}"/, `"dateModified": "${meta.dataDate}"`)
    .replace(/id="dataDate">\d{4}-\d{2}-\d{2}<\/strong>/, `id="dataDate">${meta.dataDate}</strong>`)
    .replace(/資料更新日為 \d{4}-\d{2}-\d{2}。/, `資料更新日為 ${meta.dataDate}。`)
    .replace(/id="exchangeSummary">[^<]+<\/span>/, `id="exchangeSummary">${meta.exchangeSummary}</span>`)
    .replace(/\?v=[^"']+/g, `?v=${meta.cacheVersion}`);
}

function updateReadmeMetadata(source, meta) {
  return source.replace(
    /整理 \d{4}-\d{2}-\d{2} 查核的家電推薦清單/,
    `整理 ${meta.dataDate} 查核的家電推薦清單`,
  );
}

function main() {
  const reportPath = path.join(ROOT, "catalog_maintenance_latest.json");
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  const { meta } = readDashboardProducts(ROOT);
  if (report.dataDate !== meta.dataDate) {
    throw new Error(`Maintenance report date ${report.dataDate} does not match config ${meta.dataDate}`);
  }

  const summary = renderMaintenanceSummary(report);
  for (const file of ["README.md", "AGENTS.md"]) {
    const filePath = path.join(ROOT, file);
    const source = fs.readFileSync(filePath, "utf8");
    const withSummary = replaceMarkerBlock(source, SUMMARY_MARKER, summary);
    fs.writeFileSync(
      filePath,
      file === "README.md" ? updateReadmeMetadata(withSummary, meta) : withSummary,
    );
  }

  const indexPath = path.join(ROOT, "index.html");
  fs.writeFileSync(indexPath, updateIndexMetadata(fs.readFileSync(indexPath, "utf8"), meta));
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
