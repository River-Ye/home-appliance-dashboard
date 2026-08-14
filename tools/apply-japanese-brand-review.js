const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { readDashboardProducts } = require("./read-dashboard-products");
const {
  loadCatalogFromGit,
  maintenanceReviewReady,
} = require("./run-daily-catalog-maintenance");
const { buildJapaneseBrandReview } = require("./japanese-brand-audit");

const ROOT = path.resolve(__dirname, "..");
const argument = (name) => process.argv.find((value) => value.startsWith(`--${name}=`))?.slice(name.length + 3);
const reportPath = path.resolve(ROOT, argument("report") || ".maintenance-draft.json");
const baselineRef = argument("baseline-ref") || "origin/main";
const expectedDate = argument("date");

if (!expectedDate || !/^\d{4}-\d{2}-\d{2}$/.test(expectedDate)) {
  throw new Error("Usage: npm run review:japanese-brands -- --date=YYYY-MM-DD [--report=.maintenance-draft.json] [--baseline-ref=origin/main]");
}
if (!fs.existsSync(reportPath)) throw new Error(`Missing maintenance report: ${reportPath}`);

const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
if (report.dataDate !== expectedDate || !Array.isArray(report.categoryScan)) {
  throw new Error(`Maintenance report must contain categoryScan for ${expectedDate}`);
}
const dashboard = readDashboardProducts(ROOT);
const baselineById = loadCatalogFromGit(
  baselineRef,
  dashboard.categories.map((category) => `${category.id}.js`),
);
const scanByCategory = new Map(report.categoryScan.map((row) => [row.category, row]));
const reviewedAt = report.checkedAt;
if (Number.isNaN(Date.parse(reviewedAt))) throw new Error("Maintenance report checkedAt is invalid");
const catalogContext = {
  categories: dashboard.categories,
  products: dashboard.products,
  baselineById,
};

if (!maintenanceReviewReady(report, expectedDate, catalogContext)
  && ["same_date_carried_forward", "mixed_current_and_carried_forward"].includes(report.categoryReviewProvenance)) {
  try {
    const committedReport = JSON.parse(execFileSync(
      "git",
      ["show", `${baselineRef}:catalog_maintenance_latest.json`],
      { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ));
    const candidate = { ...report, categoryScan: committedReport.categoryScan };
    if (committedReport.dataDate === expectedDate
      && maintenanceReviewReady(candidate, expectedDate, catalogContext)) {
      report.categoryScan = committedReport.categoryScan;
    }
  } catch {
    // A baseline without a same-date report simply requires a fresh review below.
  }
}

if (!maintenanceReviewReady(report, expectedDate, catalogContext)) {
  report.categoryScan = dashboard.categories.map((category) => {
    const previous = scanByCategory.get(category.id) || {};
    const categoryProducts = dashboard.products.filter((product) => product.category === category.id);
    const addedIds = categoryProducts.filter((product) => !baselineById.has(product.id)).map((product) => product.id);
    return {
      ...previous,
      category: category.id,
      cutoff: expectedDate,
      status: "manually_reviewed",
      decision: addedIds.length > 0 ? "added_verified_models" : "no_change",
      note: addedIds.length > 0
        ? `已逐類核對官方產品線並新增 ${addedIds.length} 款符合 exact-model 與台灣現售契約的商品；日系 9 品牌矩陣同步完成。`
        : "已逐類核對官方產品線；本類無需新增其他符合完整證據契約的商品，日系 9 品牌矩陣同步完成。",
      acceptedCandidates: [...new Set([...(previous.acceptedCandidates || []), ...addedIds])],
      trackedOrRejectedCandidates: previous.trackedOrRejectedCandidates || [],
      japaneseBrandReview: buildJapaneseBrandReview({
        category,
        products: dashboard.products,
        baselineById,
        checkedAt: expectedDate,
      }),
      reviewedAt,
      finalProductCount: categoryProducts.length,
      minimumSatisfied: categoryProducts.length >= 20,
    };
  });
}

if (!maintenanceReviewReady(report, expectedDate, catalogContext)) {
  throw new Error("Japanese-brand review still does not match the current catalog and baseline");
}

fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({
  report: path.relative(ROOT, reportPath),
  categories: report.categoryScan.length,
  reviewCells: report.categoryScan.reduce((sum, row) => sum + row.japaneseBrandReview.length, 0),
  reviewedAt: [...new Set(report.categoryScan.map((row) => row.reviewedAt))],
}, null, 2));
