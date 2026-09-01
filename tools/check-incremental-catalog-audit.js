const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const vm = require("node:vm");
const { spawnSync } = require("node:child_process");
const {
  EVIDENCE_TARGETS,
  assertIncrementalBaselinePreserved,
  assertCarriedIssueEvidence,
  loadIncrementalBaseline,
  readEvidenceDocuments,
  resolveIssueEvidenceDate,
} = require("./incremental-catalog-audit");
const { prepareResearchMerge, mergeResearchBundles } = require("./merge-product-research-bundles");
const { CHECKED_AT } = require("./verified-product-issues");
const { reviewedDecision } = require("./research-product-issues");
const { hasTaiwanCompatiblePower } = require("./japanese-brand-audit");
const { maintenanceReviewReady, selectPreviousCategoryReview } = require("./run-daily-catalog-maintenance");
const { renderMaintenanceSummary } = require("./update-maintenance-metadata");
const { validateMonitorLightProduct } = require("./verify-data");
const { MONITOR_LIGHT_SPEC_PREFIXES } = require("./dashboard-contract");

const clone = (value) => JSON.parse(JSON.stringify(value));

function fixture() {
  const old = { id: "old", category: "tv", price: { currency: "USD", amount: 10, converted: 300 }, historicalLow: { status: "not_found", checkedAt: "2026-08-31" } };
  const added = { id: "added", category: "monitor-light", price: { currency: "USD", amount: 20, converted: 600 }, historicalLow: { status: "not_found", checkedAt: "2026-09-01" } };
  const oldScan = { category: "tv", reviewedAt: "2026-08-31T00:00:00.000Z", japaneseBrandReview: [{ brand: "Sony", checkedAt: "2026-08-31" }] };
  const exchange = { date: "2026-08-31 00:02 UTC", USD_TWD: 30 };
  const baseline = {
    ref: "a".repeat(40), categories: [{ id: "tv", label: "Old" }], products: [old], exchange,
    documents: Object.fromEntries(EVIDENCE_TARGETS.map(({ file, collection }) => [file, {
      [collection]: [{ ...(collection === "reports" ? { productId: "old", platform: "forum", author: "writer", permalink: "https://example.test/post" } : { id: "old" }), checkedAt: "2026-08-31", evidence: "preserve this exact manual evidence" }],
    }])),
    report: {
      schemaVersion: 3, dataDate: "2026-08-31", checkedAt: "2026-08-31T01:00:00.000Z", categoryScan: [oldScan], exchange: { ...exchange, timeLastUpdateUnix: 1788134551 },
      summary: { finalProducts: 1 },
      sourceAudit: { checkedProductIds: ["old"], verifiedAvailableIds: [], exceptions: [{ id: "old", status: "blocked", note: "retained" }] },
      imageAudit: { checkedProductIds: ["old"], verifiedIds: ["old"], exceptions: [] },
      historicalSourceAudit: { checkedProductIds: [], verifiedIds: [], exceptions: [] },
    },
  };
  const report = {
    ...clone(baseline.report), auditScope: "added_products_only", baselineRef: baseline.ref,
    dataDate: "2026-09-01", checkedAt: "2026-09-01T01:00:00.000Z",
    categoryScan: [...clone(baseline.report.categoryScan), { category: "monitor-light", reviewedAt: "2026-09-01T00:00:00.000Z" }],
    summary: { baselineProducts: 1, finalProducts: 2, categories: 2, newProductsAdded: ["added"], discontinuedRemoved: [], catalogEntriesReplaced: [], foreignPricesRecomputed: 0 },
    changes: { prices: [], links: [], images: [], historicalLows: [], foreignConversions: [] },
    sourceAudit: { checkedProductIds: ["old", "added"], verifiedAvailableIds: ["added"], exceptions: clone(baseline.report.sourceAudit.exceptions) },
    imageAudit: { checkedProductIds: ["old", "added"], verifiedIds: ["old", "added"], exceptions: [] },
  };
  const catalog = { products: [clone(old), added], categories: [...clone(baseline.categories), { id: "monitor-light", label: "螢幕燈" }], exchange: clone(exchange) };
  const documents = clone(baseline.documents);
  for (const { file, collection } of EVIDENCE_TARGETS) {
    if (collection === "reports") continue;
    documents[file][collection].push({ id: "added", checkedAt: "2026-09-01" });
  }
  return { report, catalog, baseline, documents };
}

function researchMergeFixture({ newCommonIssue = false } = {}) {
  // Reuse two real, complete research records; only their test identity/category changes.
  const root = path.resolve(__dirname, "..");
  const products = [];
  for (const category of ["soundbar", "tv"]) {
    vm.runInNewContext(fs.readFileSync(path.join(root, "products", `${category}.js`), "utf8"), {
      globalThis: { applianceDashboard: { registerProducts(_category, rows) { products.push(...rows); } } },
    }, { timeout: 1000 });
  }
  const oldSource = products.find((product) => product.issueResearch.status === "common_issue");
  const newSource = newCommonIssue ? oldSource : products.find((product) => product.category === "tv" && product.issueResearch.status === "no_common_issue");
  assert(oldSource && newSource, "merge fixture requires complete common/no-common examples");
  const value = JSON.parse(JSON.stringify(fixture(), (_key, item) => item === "old" ? oldSource.id : item));
  const oldProduct = clone(oldSource);
  const addedProduct = { ...clone(newSource), id: "added", category: "mouse" };
  addedProduct.specs = addedProduct.specs.map((spec) => spec.startsWith("尺寸：") ? "尺寸：高 120 x 寬 70 x 深 40 mm" : spec.startsWith("重量：") ? "重量：淨重 80 g" : spec);
  value.baseline.products = [oldProduct];
  value.baseline.categories = [{ id: oldProduct.category, label: oldProduct.category === "soundbar" ? "Soundbar" : "電視" }];
  value.baseline.report.categoryScan[0].category = oldProduct.category;
  value.report.categoryScan[0].category = oldProduct.category;
  value.report.categoryScan[1].category = addedProduct.category;
  value.catalog.products = [clone(oldProduct), addedProduct];
  value.catalog.categories = [...clone(value.baseline.categories), { id: "mouse", label: "滑鼠" }];
  value.bundle = {};
  const documents = readEvidenceDocuments(root);
  for (const { file, keys, collection } of EVIDENCE_TARGETS) {
    const document = documents[file];
    const copyRows = (source, replacement) => document[collection]
      .filter((row) => (row.id || row.productId) === source.id)
      .map((row) => ({ ...clone(row), [collection === "reports" ? "productId" : "id"]: replacement.id,
        ...(collection === "results" ? { category: replacement.category } : {}),
        ...(file === "product_issue_review_manifest.json" ? { reviewBatch: replacement.category } : {}),
      }));
    value.baseline.documents[file] = { ...clone(document), [collection]: copyRows(oldSource, oldProduct) };
    value.bundle[keys[0]] = copyRows(newSource, addedProduct);
    if (file === "dimension_research.json") Object.assign(value.bundle[keys[0]][0], {
      brand: addedProduct.brand, model: addedProduct.model, name: addedProduct.name,
      dimension: addedProduct.specs.find((spec) => spec.startsWith("尺寸：")),
      weight: addedProduct.specs.find((spec) => spec.startsWith("重量：")),
    });
  }
  return value;
}

function checkIncrementalCatalogAudit() {
  assert.deepEqual(assertIncrementalBaselinePreserved(fixture()).addedIds, ["added"]);
  const mutations = [
    (x) => { x.report.baselineRef = "main"; },
    (x) => { x.baseline.report.auditScope = "unrecognized"; },
    (x) => { x.catalog.products[0].price.converted = 301; },
    (x) => { x.catalog.products.shift(); },
    (x) => { x.report.summary.newProductsAdded = ["old"]; },
    (x) => { x.report.summary.newProductsAdded.push("added"); },
    (x) => { x.catalog.exchange.USD_TWD = 31; },
    (x) => { x.report.exchange.date = "2026-09-01 00:02 UTC"; },
    (x) => { x.report.changes.prices.push({ id: "old", before: 10, after: 11 }); },
    (x) => { x.report.summary.foreignPricesRecomputed = 1; },
    (x) => { x.report.summary.priceDrops = 1; },
    (x) => { x.report.categoryScan[0].japaneseBrandReview[0].checkedAt = "2026-09-01"; },
    (x) => { x.report.sourceAudit.exceptions[0].note = "rewritten"; },
    (x) => { x.report.imageAudit.verifiedIds = ["added"]; },
    (x) => { x.documents["historical_price_research.json"].results[0].checkedAt = "2026-09-01"; },
    (x) => { x.documents["product_issue_report_evidence.json"].reports[0].evidence = "rewritten"; },
  ];
  for (const mutate of mutations) {
    const value = fixture();
    mutate(value);
    assert.throws(() => assertIncrementalBaselinePreserved(value), "incremental mode must reject baseline mutation");
  }
  const previousIncremental = fixture();
  previousIncremental.baseline.report.auditScope = "added_products_only";
  assert.deepEqual(assertIncrementalBaselinePreserved(previousIncremental).addedIds, ["added"], "another immutable incremental snapshot remains an eligible baseline");
  for (const ref of ["main", "origin/main", "a".repeat(7), "--help"]) {
    let calls = 0;
    assert.throws(() => loadIncrementalBaseline("unused", ref, { execGit() { calls++; } }));
    assert.equal(calls, 0, "non-immutable refs must fail before invoking git");
  }
  const ancestryCalls = [];
  assert.throws(() => loadIncrementalBaseline("unused", "a".repeat(40), {
    execGit(args) {
      ancestryCalls.push(args[0]);
      if (args[0] === "rev-parse") return "a".repeat(40);
      throw new Error("not an ancestor");
    },
  }), /ancestor of HEAD/);
  assert.deepEqual(ancestryCalls, ["rev-parse", "merge-base"], "unrelated commits must fail before their files are evaluated");
  assert.equal(maintenanceReviewReady({ ...fixture().report, categoryScan: [] }, "2026-09-01"), false);
  assert.deepEqual(selectPreviousCategoryReview([fixture().report], "2026-09-01").rows, [], "full maintenance must not reuse incremental review timestamps");
  const tempDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "incremental-audit-check-"));
  try {
    const reportPath = path.join(tempDirectory, "report.json");
    const reportSource = JSON.stringify(fixture().report);
    fs.writeFileSync(reportPath, reportSource);
    const japaneseReview = spawnSync(process.execPath, [path.join(__dirname, "apply-japanese-brand-review.js"), "--date=2026-09-01", `--report=${reportPath}`], { encoding: "utf8" });
    assert.notEqual(japaneseReview.status, 0);
    assert.match(japaneseReview.stderr, /cannot relabel an incremental audit/);
    assert.equal(fs.readFileSync(reportPath, "utf8"), reportSource, "full Japanese writer must leave incremental reports unchanged");
    const fullMaintenance = spawnSync(process.execPath, [path.join(__dirname, "run-daily-catalog-maintenance.js"), "--write", "--date=2026-09-01", "--audit-scope=added_products_only"], { encoding: "utf8" });
    assert.notEqual(fullMaintenance.status, 0);
    assert.match(fullMaintenance.stderr, /does not accept an incremental scope/);
  } finally {
    fs.rmSync(tempDirectory, { recursive: true, force: true });
  }
  for (const voltage of ["USB-C DC 5V／1A", "USB DC 5 V，額定功率 5W", "不需供電。"]) assert.equal(hasTaiwanCompatiblePower({ voltage }), true);
  for (const voltage of ["USB-C", "USB DC 5V", "USB DC 5V 0A 0W", "USB DC 12V 1A"]) assert.equal(hasTaiwanCompatiblePower({ voltage }), false);
  const monitorLight = {
    id: "light-fixture", category: "monitor-light", channel: "tw", topPick: false,
    voltage: "USB-C DC 5V／1A", warranty: "台灣公司貨保固一年",
    specs: MONITOR_LIGHT_SPEC_PREFIXES.map((prefix) => `${prefix}查不到`),
  };
  const compatibilityIndex = MONITOR_LIGHT_SPEC_PREFIXES.indexOf("安裝相容性：");
  monitorLight.specs[compatibilityIndex] = "安裝相容性：夾具厚度未標示；曲面相容性未確認";
  const unknownFailures = [];
  validateMonitorLightProduct(monitorLight, unknownFailures);
  assert.deepEqual(unknownFailures, [], "unknown compatibility remains eligible outside Top Pick");
  const topPickFailures = [];
  validateMonitorLightProduct({ ...monitorLight, topPick: true }, topPickFailures);
  assert(topPickFailures.length >= 2, "Top Pick requires confirmed clamp and curve compatibility");
  monitorLight.specs[compatibilityIndex] = "安裝相容性：夾具厚度 0.8–6 cm；曲面不支援";
  const confirmedFailures = [];
  validateMonitorLightProduct({ ...monitorLight, topPick: true }, confirmedFailures);
  assert.deepEqual(confirmedFailures, [], "confirmed flat-only compatibility is allowed for general-desktop Top Pick");
  const summary = renderMaintenanceSummary(fixture().report);
  assert.match(summary, /新增.*1.*查核|查核.*1.*新增/);
  assert.match(summary, /沿用/);
  assert.doesNotMatch(summary, /全量查核|外幣商品已重算/);

  const mergeFixture = researchMergeFixture();
  const commonFixture = researchMergeFixture({ newCommonIssue: true });
  const commonResearch = commonFixture.bundle.product_issue_research[0];
  const acceptedSource = commonResearch.evidence[0];
  const knownProduct = commonFixture.baseline.products[0];
  const knownReview = commonFixture.baseline.documents["product_issue_review_manifest.json"].results[0];
  assert(reviewedDecision(knownProduct, new Map([[knownProduct.id, knownReview]]), {
    candidates: [{ url: acceptedSource.url, title: acceptedSource.title }],
  }), "the research apply gate also accepts a verified source without inventing an exclusion");
  assert.equal(reviewedDecision(knownProduct, new Map([[knownProduct.id, knownReview]]), {
    candidates: [{ url: "https://reddit.com/r/test/comments/unreviewed/", title: "Unreviewed original" }],
  }), null, "the research apply gate still blocks an unreviewed original page");
  commonResearch.searchChecks[0].candidates.push({ url: acceptedSource.url, title: acceptedSource.title });
  commonResearch.searchChecks[0].candidateUrls.push(acceptedSource.url);
  commonResearch.searchChecks[0].resultCount++;
  commonResearch.searchChecks[0].result = "candidates_unverified_by_search_only";
  const commonOptions = {
    catalog: commonFixture.catalog, documents: clone(commonFixture.baseline.documents),
    bundles: [commonFixture.bundle], checkedAt: CHECKED_AT,
  };
  assert.doesNotThrow(() => prepareResearchMerge(commonOptions), "a new common issue uses its pending six-document evidence, including accepted original-page candidates");
  for (const mutate of [
    (x) => { x.bundles[0].product_issue_research[0].searchChecks[0].candidates[0] = { title: "Unreviewed original", url: "https://reddit.com/r/test/comments/unreviewed/" }; x.bundles[0].product_issue_research[0].searchChecks[0].candidateUrls[0] = "https://reddit.com/r/test/comments/unreviewed/"; },
    (x) => { x.bundles[0].product_issue_report_evidence.pop(); },
    (x) => { x.catalog.products[1].issueResearch.issues[0].reportCount = 5; },
    (x) => { x.catalog.products[1].issueResearch.issues[0].sources.forEach((source) => { source.url = "https://old.reddit.com/r/test/"; }); },
  ]) {
    const invalid = clone(commonOptions);
    mutate(invalid);
    const attemptedWrites = [];
    assert.throws(() => mergeResearchBundles(invalid, (file) => attemptedWrites.push(file)));
    assert.deepEqual(attemptedWrites, [], "accepted candidates cannot bypass source coverage, reporter counts, independent websites or the ledger");
  }
  const { bundle } = mergeFixture;
  const options = {
    catalog: mergeFixture.catalog, documents: clone(mergeFixture.baseline.documents), bundles: [bundle],
    checkedAt: "2026-09-01", baseline: mergeFixture.baseline, report: mergeFixture.report,
  };
  const writes = [];
  const merged = mergeResearchBundles(options, (file) => writes.push(file));
  assert.match(merged["dimension_research.json"].sourcePolicy, /共 2 類尺寸、2 類重量/);
  assert.deepEqual(writes.sort(), EVIDENCE_TARGETS.map(({ file }) => file).sort(), "a complete valid batch writes all six targets");
  const carried = {
    report: { dataDate: "2026-09-02", baselineRef: "b".repeat(40) },
    products: clone(mergeFixture.catalog.products), documents: clone(merged),
    baseline: { ref: "b".repeat(40), report: clone(mergeFixture.report), products: clone(mergeFixture.catalog.products), documents: clone(merged) },
  };
  assert.equal(assertCarriedIssueEvidence(carried), "2026-09-01", "full maintenance retains the prior incremental evidence date");
  const nextFull = clone(carried);
  nextFull.baseline.ref = "c".repeat(40);
  nextFull.baseline.report = clone(carried.report);
  nextFull.report = { dataDate: "2026-09-03", baselineRef: nextFull.baseline.ref };
  assert.equal(assertCarriedIssueEvidence(nextFull), "2026-09-01", "another full run may retain the same proven evidence without rewriting old dates");
  for (const mutate of [
    (x) => { x.documents["product_issue_research.json"].results[0].manualReview.reviewerNote += " changed"; },
    (x) => { x.documents["product_issue_report_evidence.json"].checkedAt = "2026-09-02"; },
    (x) => { x.documents["product_issue_review_manifest.json"].checkedAt = "2026-09-02"; },
    (x) => {
      x.documents["product_issue_research.json"].summary.checkedAt = "2026-09-02T00:00:00+08:00";
      x.documents["product_issue_report_evidence.json"].checkedAt = "2026-09-02";
      x.documents["product_issue_review_manifest.json"].checkedAt = "2026-09-02";
    },
    (x) => { x.products[0].issueResearch.checkedAt = "2026-09-02"; },
    (x) => { x.products.pop(); },
    (x) => { x.report.baselineRef = "HEAD"; },
    (x) => { x.report.baselineRef = "d".repeat(40); },
    (x) => { x.report.dataDate = "2026-08-31"; },
  ]) {
    const invalid = clone(carried);
    mutate(invalid);
    assert.throws(() => assertCarriedIssueEvidence(invalid), /Incremental audit:/);
  }
  assert.throws(() => resolveIssueEvidenceDate("unused", { ...carried.report, baselineRef: "HEAD" }, carried.products, carried.documents, "2026-08-29"), /immutable full commit SHA/);
  const researchSummaryFiles = ["release_date_research.json", "historical_price_research.json", "product_issue_research.json"];
  for (const file of researchSummaryFiles) {
    assert.equal(merged[file].summary.researchedThisRun, 1, `${file} counts only the added product as researched this run`);
    assert.equal(merged[file].summary.total, 2, `${file} keeps the cumulative catalog total`);
  }
  const fullMerged = prepareResearchMerge({ catalog: mergeFixture.catalog, documents: clone(mergeFixture.baseline.documents), bundles: [bundle], checkedAt: CHECKED_AT });
  for (const file of researchSummaryFiles) {
    assert.equal(fullMerged[file].summary.researchedThisRun, 2, `${file} retains full-mode coverage`);
  }
  const addedOnlyDocuments = clone(fullMerged);
  for (const { file, collection } of EVIDENCE_TARGETS) {
    addedOnlyDocuments[file][collection] = addedOnlyDocuments[file][collection].filter((row) => (row.id || row.productId) === "added");
  }
  const addedOnlyCatalog = { products: [mergeFixture.catalog.products[1]], categories: [mergeFixture.catalog.categories[1]] };
  const addedOnlyMerged = prepareResearchMerge({ catalog: addedOnlyCatalog, documents: addedOnlyDocuments, bundles: [], checkedAt: CHECKED_AT });
  assert.deepEqual(addedOnlyMerged["product_issue_report_evidence.json"].reports, [], "a no-common-issue-only batch has an explicit empty report ledger");
  for (const { file, collection } of EVIDENCE_TARGETS.filter((target) => target.collection === "results")) {
    const differentVersion = clone(addedOnlyDocuments);
    differentVersion[file][collection][0].model = "DIFFERENT-VARIANT-SKU";
    assert.throws(() => prepareResearchMerge({ catalog: addedOnlyCatalog, documents: differentVersion, bundles: [], checkedAt: CHECKED_AT }), /mismatch/, `${file} must reject cross-version evidence`);
  }
  assert.deepEqual(merged["historical_price_research.json"].results[0], mergeFixture.baseline.documents["historical_price_research.json"].results[0]);
  for (const brokenBundle of [
    ...EVIDENCE_TARGETS.map(({ keys, collection }) => ({
      ...bundle, [keys[0]]: [collection === "reports" ? { productId: "added" } : { id: "added" }],
    })),
    { ...bundle, dimension_research: [] },
    { ...bundle, release_date_research: [{ id: "missing" }] },
    { ...bundle, historical_price_research: [bundle.historical_price_research[0], bundle.historical_price_research[0]] },
  ]) {
    const original = clone(mergeFixture.baseline.documents);
    const attemptedWrites = [];
    assert.throws(() => mergeResearchBundles({ ...options, documents: original, bundles: [brokenBundle] }, (file) => attemptedWrites.push(file)));
    assert.deepEqual(attemptedWrites, [], "each malformed research target must fail before any writer call");
    assert.deepEqual(original, mergeFixture.baseline.documents, "preflight failures cannot change any original document");
  }
  for (const mutate of [
    (x) => { x.report.baselineRef = "b".repeat(40); },
    (x) => { x.report.summary.newProductsAdded = ["different"]; },
    (x) => { x.catalog.products[0].price.converted += 1; },
  ]) {
    const invalid = clone(options);
    mutate(invalid);
    const attemptedWrites = [];
    assert.throws(() => mergeResearchBundles(invalid, (file) => attemptedWrites.push(file)), /Incremental audit:/);
    assert.deepEqual(attemptedWrites, [], "baseline and exact added-ID mismatches must fail before writing");
  }
  const untouched = clone(mergeFixture.baseline.documents);
  assert.throws(() => prepareResearchMerge({ ...options, documents: untouched, bundles: [{ ...bundle, product_issue_review_manifest: [{ id: mergeFixture.baseline.products[0].id }] }] }));
  assert.deepEqual(untouched, mergeFixture.baseline.documents, "late-target failure must leave every source document untouched");
}

if (require.main === module) {
  checkIncrementalCatalogAudit();
  console.log("incremental catalog audit check passed");
}

module.exports = { checkIncrementalCatalogAudit };
