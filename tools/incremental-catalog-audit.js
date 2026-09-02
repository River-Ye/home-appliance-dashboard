const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");
const { isDeepStrictEqual } = require("util");

const ADDED_PRODUCTS_SCOPE = "added_products_only";
const EVIDENCE_TARGETS = [
  ["release_date_research", "releaseDateResearch", "results"],
  ["historical_price_research", "historicalPriceResearch", "results"],
  ["dimension_research", "dimensionResearch", "results"],
  ["product_issue_research", "productIssueResearch", "results"],
  ["product_issue_report_evidence", "productIssueReportEvidence", "reports"],
  ["product_issue_review_manifest", "productIssueReviewManifest", "results"],
].map(([name, alias, collection]) => ({
  file: `${name}.json`, keys: [name, alias], collection,
  rowKey: collection === "reports"
    ? (row) => [row.productId, row.issueTitle, row.platform, row.sourceUrl, row.author, row.permalink].join("\u0000")
    : (row) => row.id,
}));

function requireCondition(condition, message) {
  if (!condition) throw new Error(`Incremental audit: ${message}`);
}

function sameValue(left, right) {
  const plain = (value) => value === undefined ? value : JSON.parse(JSON.stringify(value));
  return isDeepStrictEqual(plain(left), plain(right));
}

function loadIncrementalBaseline(root, reference, options = {}) {
  requireCondition(/^[a-f0-9]{40}$/.test(String(reference || "")), "baselineRef must be an immutable full commit SHA");
  const execGit = options.execGit || ((args) => execFileSync("git", args, {
    cwd: root, encoding: "utf8", maxBuffer: 128 * 1024 * 1024,
  }));
  requireCondition(execGit(["rev-parse", "--verify", `${reference}^{commit}`]).trim() === reference, "baseline commit cannot be resolved exactly");
  try {
    execGit(["merge-base", "--is-ancestor", reference, "HEAD"]);
  } catch {
    throw new Error("Incremental audit: baseline commit must be an ancestor of HEAD");
  }
  const read = (file) => execGit(["show", `${reference}:${file}`]);
  const context = vm.createContext({});
  vm.runInContext(read("assets/js/config.js"), context, { timeout: 1000 });
  for (const category of context.applianceDashboard.categories) {
    requireCondition(/^[a-z0-9-]+$/.test(category.id), "baseline contains an invalid category ID");
    vm.runInContext(read(`products/${category.id}.js`), context, { timeout: 1000 });
  }
  const { categories, products, exchange, meta } = context.applianceDashboard;
  const report = JSON.parse(read("catalog_maintenance_latest.json"));
  requireCondition(report.schemaVersion === 3 && [undefined, ADDED_PRODUCTS_SCOPE].includes(report.auditScope), "baseline must be a recognized schema-3 audit");
  requireCondition(report.dataDate === meta.dataDate && report.summary?.finalProducts === products.length && report.summary?.categories === categories.length, "baseline report must match its committed catalog");
  requireCondition(Object.entries(exchange).every(([key, value]) => sameValue(report.exchange?.[key], value)), "baseline report exchange rates must match its committed config");
  return {
    ref: reference, report,
    ...JSON.parse(JSON.stringify({ categories, products, exchange, meta })),
    documents: Object.fromEntries(EVIDENCE_TARGETS.map(({ file }) => [file, JSON.parse(read(file))])),
  };
}

function addedProductIds(catalog, baseline) {
  const byId = new Map(catalog.products.map((product) => [product.id, product]));
  requireCondition(byId.size === catalog.products.length, "catalog contains duplicate product IDs");
  const baselineIds = new Set(baseline.products.map((product) => product.id));
  for (const product of baseline.products) {
    requireCondition(byId.has(product.id) && sameValue(byId.get(product.id), product), `baseline product ${product.id} was removed or changed`);
  }
  for (const category of baseline.categories) {
    requireCondition(catalog.categories.some((current) => sameValue(current, category)), `baseline category ${category.id} was removed or changed`);
  }
  requireCondition(sameValue(catalog.exchange, baseline.exchange), "baseline exchange rates or date changed");
  const ids = catalog.products.filter((product) => !baselineIds.has(product.id)).map((product) => product.id).sort();
  requireCondition(ids.length > 0, "added-products scope requires at least one new product");
  return ids;
}

function assertResearchRowsPreserved(documents, baseline) {
  const baselineIds = new Set(baseline.products.map((product) => product.id));
  for (const target of EVIDENCE_TARGETS) {
    const previous = baseline.documents[target.file][target.collection] || [];
    const current = documents[target.file]?.[target.collection] || [];
    const retained = current.filter((row) => baselineIds.has(row.id || row.productId));
    requireCondition(retained.length === previous.length, `${target.file} baseline evidence rows were removed or duplicated`);
    const byKey = new Map(retained.map((row) => [target.rowKey(row), row]));
    requireCondition(byKey.size === retained.length, `${target.file} contains duplicate baseline evidence`);
    for (const row of previous) {
      const next = byKey.get(target.rowKey(row));
      requireCondition(next && sameValue(next, row), `${target.file} baseline evidence changed for ${row.id || row.productId}`);
    }
  }
}

function assertIncrementalBaselinePreserved({ report, catalog, baseline, documents }) {
  requireCondition(report.auditScope === ADDED_PRODUCTS_SCOPE, "unsupported auditScope");
  requireCondition(report.schemaVersion === 3, "incremental reports must retain schemaVersion 3");
  requireCondition(/^[a-f0-9]{40}$/.test(report.baselineRef) && report.baselineRef === baseline.ref, "baselineRef must identify the loaded immutable commit");
  requireCondition(baseline.report.schemaVersion === 3 && [undefined, ADDED_PRODUCTS_SCOPE].includes(baseline.report.auditScope), "baseline must be a recognized schema-3 audit");
  requireCondition(/^\d{4}-\d{2}-\d{2}$/.test(report.dataDate) && report.dataDate >= baseline.report.dataDate, "data date precedes the baseline");
  requireCondition(Number.isFinite(Date.parse(report.checkedAt)) && Date.parse(report.checkedAt) >= Date.parse(baseline.report.checkedAt), "checkpoint precedes the baseline");
  const addedIds = addedProductIds(catalog, baseline);
  requireCondition(sameValue([...(report.summary?.newProductsAdded || [])].sort(), addedIds), "newProductsAdded must match the exact catalog difference");
  requireCondition(report.summary?.baselineProducts === baseline.products.length, "baseline product count is stale");
  requireCondition(report.summary?.finalProducts === catalog.products.length, "final product count is stale");
  requireCondition(report.summary?.categories === catalog.categories.length, "category count is stale");
  requireCondition(sameValue(report.exchange, baseline.report.exchange), "report exchange rates or date changed");
  requireCondition((report.summary?.discontinuedRemoved || []).length === 0 && (report.summary?.catalogEntriesReplaced || []).length === 0, "incremental additions cannot remove or replace products");
  requireCondition(report.summary?.foreignPricesRecomputed === 0, "incremental additions cannot recompute existing foreign prices");
  for (const key of ["priceChanges", "priceDrops", "priceRises", "linkChanges", "imageChanges", "historicalLowChanges", "historicalLowPriceChanges"]) {
    requireCondition((report.summary?.[key] ?? 0) === 0, `incremental additions cannot claim ${key}`);
  }
  requireCondition(sameValue(report.officialDiscontinuedCandidates, baseline.report.officialDiscontinuedCandidates), "baseline discontinuation evidence changed");
  requireCondition(sameValue(report.policy, baseline.report.policy), "baseline audit policy changed");
  for (const name of ["prices", "links", "images", "historicalLows", "foreignConversions"]) {
    requireCondition(Array.isArray(report.changes?.[name]) && report.changes[name].length === 0, `incremental additions cannot claim existing ${name} changes`);
  }
  for (const row of baseline.report.categoryScan) {
    const next = report.categoryScan?.find((current) => current.category === row.category);
    requireCondition(next && sameValue(next, row), `baseline category review ${row.category} changed`);
  }
  const baselineIds = new Set(baseline.products.map((product) => product.id));
  for (const [name, verifiedKey] of [["sourceAudit", "verifiedAvailableIds"], ["imageAudit", "verifiedIds"], ["historicalSourceAudit", "verifiedIds"]]) {
    for (const key of ["checkedProductIds", verifiedKey, "exceptions"]) {
      const previous = baseline.report[name]?.[key] || [];
      const retained = (report[name]?.[key] || []).filter((row) => baselineIds.has(typeof row === "string" ? row : row.id));
      requireCondition(sameValue(retained, previous), `${name}.${key} baseline coverage or exceptions changed`);
    }
  }
  if (documents) assertResearchRowsPreserved(documents, baseline);
  return { report, baseline, addedIds };
}

function readEvidenceDocuments(root) {
  return Object.fromEntries(EVIDENCE_TARGETS.map(({ file }) => [file, JSON.parse(fs.readFileSync(path.join(root, file), "utf8"))]));
}

function assertCarriedIssueEvidence({ report, products, documents, baseline }) {
  requireCondition(report.auditScope === undefined, "issue evidence carry is only for full maintenance");
  requireCondition(/^[a-f0-9]{40}$/.test(report.baselineRef) && report.baselineRef === baseline.ref, "issue evidence carry requires the loaded immutable baseline");
  const checkedAt = baseline.documents["product_issue_research.json"].summary?.checkedAt?.slice(0, 10);
  requireCondition(/^\d{4}-\d{2}-\d{2}$/.test(checkedAt)
    && /^\d{4}-\d{2}-\d{2}$/.test(baseline.report.dataDate)
    && /^\d{4}-\d{2}-\d{2}$/.test(report.dataDate)
    && checkedAt <= baseline.report.dataDate && baseline.report.dataDate <= report.dataDate,
  "carried issue evidence dates must not exceed their baseline or current data date");
  for (const file of ["product_issue_research.json", "product_issue_report_evidence.json", "product_issue_review_manifest.json"]) {
    const previous = baseline.documents[file];
    requireCondition((previous.summary?.checkedAt?.slice(0, 10) || previous.checkedAt) === checkedAt, `${file} baseline aggregate dates disagree`);
    requireCondition(sameValue(documents[file], previous), `${file} cannot change while claiming carried issue evidence`);
  }
  const currentById = new Map(products.map((product) => [product.id, product]));
  requireCondition(currentById.size === products.length && products.length === baseline.products.length, "carried issue evidence requires the same product IDs");
  for (const product of baseline.products) {
    requireCondition(currentById.has(product.id) && sameValue(currentById.get(product.id).issueResearch, product.issueResearch), `carried issueResearch changed for ${product.id}`);
  }
  return checkedAt;
}

function resolveIssueEvidenceDate(root, report, products, documents, legacyDate) {
  if (documents["product_issue_research.json"]?.summary?.checkedAt?.slice(0, 10) === legacyDate) return legacyDate;
  const baseline = loadIncrementalBaseline(root, report?.baselineRef);
  return assertCarriedIssueEvidence({ report, products, documents, baseline });
}

module.exports = {
  ADDED_PRODUCTS_SCOPE, EVIDENCE_TARGETS, addedProductIds, assertIncrementalBaselinePreserved,
  assertResearchRowsPreserved, assertCarriedIssueEvidence, loadIncrementalBaseline, readEvidenceDocuments,
  resolveIssueEvidenceDate,
};
