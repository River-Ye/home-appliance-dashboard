const fs = require("fs");
const path = require("path");
const {
  EXPECTED_CATEGORY_COUNT,
  EXPECTED_PRODUCT_COUNT,
  MIN_PRODUCTS_PER_CATEGORY,
  DATE_PATTERN,
  WASHER_DRYER_CAPACITY_PATTERN,
  DIMENSION_CATEGORY_COUNTS,
  DIMENSION_CATEGORIES,
  EXPECTED_DIMENSION_PRODUCT_COUNT,
  DIMENSION_PATTERN,
  DIMENSION_CONFIDENCE_VALUES,
  HISTORICAL_LOW_STATUSES,
  HISTORICAL_LOW_SOURCE_KINDS,
  HISTORICAL_LOW_CONFIDENCE_VALUES,
  REQUIRED_CATEGORY_TERMS,
  CATEGORY_TEXT_MATCH_COUNTS,
  REQUIRED_FIELDS,
} = require("./dashboard-contract");
const { readDashboardProducts } = require("./read-dashboard-products");
const { validateExplicitReview } = require("./mark-product-issue-review");
const {
  canonicalWebsite,
  queryTargetsProduct,
  queryTargetsWebsite,
  queryUrlMatchesRecord,
} = require("./product-issue-validation");
const { canonicalModel } = require("./research-product-issues");
const { CHECKED_AT } = require("./verified-product-issues");

const ISSUE_RESEARCH_STATUSES = new Set(["common_issue", "no_common_issue"]);
const ISSUE_RESEARCH_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const NO_COMMON_ISSUE_SUMMARY = "截至查核日，查無達門檻的集中負評／災情";

function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function compactIdentity(value) {
  return String(value || "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "");
}

function productText(product) {
  return [
    product.brand,
    product.model,
    product.name,
    product.description,
    product.bestFor,
    product.recommendation,
    product.releaseDate,
    product.historicalLow?.status,
    product.historicalLow?.sourceTitle,
    product.historicalLow?.note,
    (product.specs || []).join(" "),
    (product.tags || []).join(" "),
  ].join(" ").toLowerCase();
}

function categoryProducts(products, categoryId) {
  return products.filter((product) => product.category === categoryId);
}

function textMatches(product, term) {
  return productText(product).includes(normalize(term));
}

function assert(condition, message, failures) {
  if (!condition) failures.push(message);
}

function isHttpUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch (_error) {
    return false;
  }
}

function uniqueNormalized(values) {
  return new Set(values.map(normalize).filter(Boolean));
}

function candidateReviewKey(candidate) {
  return `${candidate?.url || ""}\n${candidate?.title || ""}`;
}

function validateCandidateReview(candidate, prefix, checkedAt, failures) {
  assert(candidate && typeof candidate === "object" && !Array.isArray(candidate), `${prefix} must be an object`, failures);
  if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) return;
  assert(isHttpUrl(candidate.url), `${prefix} url must be http(s)`, failures);
  assert(typeof candidate.title === "string" && candidate.title.trim(), `${prefix} requires title`, failures);
  assert(candidate.outcome === "excluded", `${prefix} outcome must be excluded`, failures);
  assert(candidate.reviewedAt === checkedAt, `${prefix} reviewedAt mismatch`, failures);
  assert(candidate.exactModel === true, `${prefix} must confirm the exact model`, failures);
  assert(typeof candidate.sourceExcerpt === "string" && candidate.sourceExcerpt.trim().length >= 12, `${prefix} requires a specific original-page excerpt`, failures);
  assert(Number.isInteger(candidate.independentAuthors) && candidate.independentAuthors >= 0, `${prefix} requires an independent author count`, failures);
  assert(typeof candidate.specificReason === "string" && candidate.specificReason.trim().length >= 20, `${prefix} requires a specific exclusion reason`, failures);
  assert(
    candidate.specificReason !== "候選標題或 URL 含完全相同型號，但人工回看原始頁後未形成 6 位獨立使用者且跨 2 個網站的同一問題；搜尋結果本身不計人數。",
    `${prefix} must not use the former generated rejection reason`,
    failures,
  );
}

function validateCheckedSources(product, checkedSources, failures) {
  const productId = product.id;
  assert(Array.isArray(checkedSources) && checkedSources.length >= 2, `${productId} no_common_issue requires at least two checkedSources`, failures);
  if (!Array.isArray(checkedSources)) return;

  for (const [index, source] of checkedSources.entries()) {
    const prefix = `${productId} checkedSources[${index}]`;
    assert(source && typeof source === "object" && !Array.isArray(source), `${prefix} must be an object`, failures);
    if (!source || typeof source !== "object" || Array.isArray(source)) continue;
    assert(typeof source.platform === "string" && source.platform.trim(), `${prefix} requires platform`, failures);
    assert(typeof source.query === "string" && source.query.trim(), `${prefix} requires the exact query`, failures);
    assert(isHttpUrl(source.queryUrl), `${prefix} queryUrl must be http(s)`, failures);
    assert(canonicalWebsite(source.targetHost), `${prefix} requires a targetHost`, failures);
    assert(queryTargetsProduct(source, product), `${prefix} query must contain the canonical model`, failures);
    assert(queryTargetsWebsite(source), `${prefix} platform and targetHost must identify the same website`, failures);
    assert(queryUrlMatchesRecord(source), `${prefix} queryUrl must reproduce the recorded query`, failures);
  }

  const platforms = uniqueNormalized(checkedSources.map((source) => source?.platform));
  const hostnames = uniqueNormalized(checkedSources.map((source) => canonicalWebsite(source?.targetHost)));
  assert(platforms.size >= 2, `${productId} no_common_issue must be checked on at least two platforms`, failures);
  assert(hostnames.size >= 2, `${productId} no_common_issue must be checked on at least two websites`, failures);
}

function validateIssueResearch(product, failures) {
  const research = product.issueResearch;
  if (!research || typeof research !== "object" || Array.isArray(research)) return;

  assert(ISSUE_RESEARCH_STATUSES.has(research.status), `${product.id} issueResearch has invalid status: ${research.status}`, failures);
  assert(ISSUE_RESEARCH_DATE_PATTERN.test(String(research.checkedAt || "")), `${product.id} issueResearch checkedAt must use YYYY-MM-DD`, failures);
  assert(typeof research.summary === "string" && research.summary.trim(), `${product.id} issueResearch requires summary`, failures);
  assert(Array.isArray(research.issues), `${product.id} issueResearch issues must be an array`, failures);

  if (research.status === "no_common_issue") {
    assert(research.summary === NO_COMMON_ISSUE_SUMMARY, `${product.id} no_common_issue must use the agreed summary`, failures);
    assert(Array.isArray(research.issues) && research.issues.length === 0, `${product.id} no_common_issue must not list threshold issues`, failures);
    validateCheckedSources(product, research.checkedSources, failures);
    return;
  }

  if (research.status !== "common_issue") return;
  assert(Array.isArray(research.issues) && research.issues.length > 0, `${product.id} common_issue requires at least one issue`, failures);
  if (!Array.isArray(research.issues)) return;

  for (const [issueIndex, issue] of research.issues.entries()) {
    const prefix = `${product.id} issueResearch issues[${issueIndex}]`;
    assert(issue && typeof issue === "object" && !Array.isArray(issue), `${prefix} must be an object`, failures);
    if (!issue || typeof issue !== "object" || Array.isArray(issue)) continue;
    assert(typeof issue.title === "string" && issue.title.trim(), `${prefix} requires title`, failures);
    assert(typeof issue.detail === "string" && issue.detail.trim(), `${prefix} requires detail`, failures);
    assert(Number.isInteger(issue.reportCount) && issue.reportCount >= 6, `${prefix} reportCount must be at least 6`, failures);
    assert(Array.isArray(issue.sources) && issue.sources.length >= 2, `${prefix} requires at least two sources`, failures);
    if (!Array.isArray(issue.sources)) continue;

    for (const [sourceIndex, source] of issue.sources.entries()) {
      const sourcePrefix = `${prefix} sources[${sourceIndex}]`;
      assert(source && typeof source === "object" && !Array.isArray(source), `${sourcePrefix} must be an object`, failures);
      if (!source || typeof source !== "object" || Array.isArray(source)) continue;
      assert(typeof source.platform === "string" && source.platform.trim(), `${sourcePrefix} requires platform`, failures);
      assert(typeof source.title === "string" && source.title.trim(), `${sourcePrefix} requires title`, failures);
      assert(isHttpUrl(source.url), `${sourcePrefix} url must be http(s)`, failures);
    }

    const platforms = uniqueNormalized(issue.sources.map((source) => source?.platform));
    const hostnames = uniqueNormalized(issue.sources.map((source) => canonicalWebsite(source?.url)));
    assert(platforms.size >= 2, `${prefix} must cite at least two platforms`, failures);
    assert(hostnames.size >= 2, `${prefix} must cite at least two websites`, failures);
  }
}

function validateHistoricalLow(product, failures) {
  const low = product.historicalLow;
  assert(low && typeof low === "object" && !Array.isArray(low), `${product.id} historicalLow must be an object`, failures);
  if (!low || typeof low !== "object" || Array.isArray(low)) return;

  assert(HISTORICAL_LOW_STATUSES.has(low.status), `${product.id} historicalLow has invalid status: ${low.status}`, failures);
  assert(HISTORICAL_LOW_SOURCE_KINDS.has(low.sourceKind), `${product.id} historicalLow has invalid sourceKind: ${low.sourceKind}`, failures);
  assert(HISTORICAL_LOW_CONFIDENCE_VALUES.has(low.confidence), `${product.id} historicalLow has invalid confidence: ${low.confidence}`, failures);
  assert(low.checkedAt, `${product.id} historicalLow requires checkedAt`, failures);
  assert(low.currency, `${product.id} historicalLow requires currency`, failures);
  assert(typeof low.note === "string" && low.note.trim(), `${product.id} historicalLow requires note`, failures);

  if (low.status === "found") {
    assert(typeof low.amount === "number" && low.amount > 0, `${product.id} found historicalLow requires positive amount`, failures);
    assert(typeof low.converted === "number" && low.converted > 0, `${product.id} found historicalLow requires positive converted`, failures);
    assert(low.sourceUrl && /^https?:\/\//.test(low.sourceUrl), `${product.id} found historicalLow requires sourceUrl`, failures);
    assert(low.sourceTitle, `${product.id} found historicalLow requires sourceTitle`, failures);
    assert(low.evidenceSnippet, `${product.id} found historicalLow requires evidenceSnippet`, failures);
    assert(low.sourceKind !== "not_found", `${product.id} found historicalLow cannot use not_found sourceKind`, failures);
    assert(low.confidence !== "not_found", `${product.id} found historicalLow cannot use not_found confidence`, failures);
  } else if (low.status === "not_found") {
    assert(low.amount === null, `${product.id} not_found historicalLow amount must be null`, failures);
    assert(low.converted === null, `${product.id} not_found historicalLow converted must be null`, failures);
    assert(low.sourceUrl === "", `${product.id} not_found historicalLow sourceUrl must be empty`, failures);
    assert(low.sourceTitle === "", `${product.id} not_found historicalLow sourceTitle must be empty`, failures);
    assert(low.evidenceSnippet === "", `${product.id} not_found historicalLow evidenceSnippet must be empty`, failures);
    assert(low.sourceKind === "not_found", `${product.id} not_found historicalLow sourceKind must be not_found`, failures);
    assert(low.confidence === "not_found", `${product.id} not_found historicalLow confidence must be not_found`, failures);
  }
}

function validateProduct(product, categoryIds, failures) {
  for (const field of REQUIRED_FIELDS) {
    assert(product[field] !== undefined && product[field] !== null && product[field] !== "", `${product.id || "(missing id)"} missing ${field}`, failures);
  }

  assert(categoryIds.has(product.category), `${product.id} has unknown category ${product.category}`, failures);
  assert(Array.isArray(product.specs) && product.specs.length > 0, `${product.id} must have specs`, failures);
  assert(Array.isArray(product.pros) && product.pros.length > 0, `${product.id} must have pros`, failures);
  assert(Array.isArray(product.cons) && product.cons.length > 0, `${product.id} must have cons`, failures);
  assert(Array.isArray(product.tags), `${product.id} tags must be an array`, failures);
  assert(product.price && typeof product.price.converted === "number" && product.price.converted > 0, `${product.id} must have positive TWD price`, failures);
  assert(product.buyUrl && /^https?:\/\//.test(product.buyUrl), `${product.id} buyUrl must be http(s)`, failures);
  assert(DATE_PATTERN.test(String(product.releaseDate || "")), `${product.id} releaseDate has invalid format: ${product.releaseDate}`, failures);
  validateHistoricalLow(product, failures);
  validateIssueResearch(product, failures);

  if (product.category === "washerdryer") {
    const capacitySpecs = product.specs.filter((spec) => WASHER_DRYER_CAPACITY_PATTERN.test(String(spec).trim()));
    assert(
      capacitySpecs.length === 1,
      `${product.id} must include exactly one washer/dryer capacity like 洗/乾容量：17kg / 10kg`,
      failures,
    );
  }

  if (DIMENSION_CATEGORIES.has(product.category)) {
    const dimensionSpecs = product.specs.filter((spec) => String(spec).trim().startsWith("尺寸："));
    assert(dimensionSpecs.length === 1, `${product.id} must include exactly one dimension spec`, failures);
    if (dimensionSpecs.length === 1) {
      assert(DIMENSION_PATTERN.test(String(dimensionSpecs[0]).trim()), `${product.id} has invalid dimension spec: ${dimensionSpecs[0]}`, failures);
    }
  }
}

function validateIssueEvidence(row, evidence, evidenceIndex, issueTitles, failures) {
  const prefix = `${row.id} issue evidence[${evidenceIndex}]`;
  assert(evidence && typeof evidence === "object" && !Array.isArray(evidence), `${prefix} must be an object`, failures);
  if (!evidence || typeof evidence !== "object" || Array.isArray(evidence)) return;

  assert(typeof evidence.issueTitle === "string" && evidence.issueTitle.trim(), `${prefix} requires issueTitle`, failures);
  if (issueTitles.size) {
    assert(issueTitles.has(evidence.issueTitle), `${prefix} issueTitle does not match issueResearch`, failures);
  }
  assert(typeof evidence.platform === "string" && evidence.platform.trim(), `${prefix} requires platform`, failures);
  assert(typeof evidence.title === "string" && evidence.title.trim(), `${prefix} requires title`, failures);
  assert(isHttpUrl(evidence.url), `${prefix} url must be http(s)`, failures);
  assert(typeof evidence.evidenceSnippet === "string" && evidence.evidenceSnippet.trim(), `${prefix} requires evidenceSnippet`, failures);
  assert(ISSUE_RESEARCH_DATE_PATTERN.test(String(evidence.checkedAt || "")), `${prefix} checkedAt must use YYYY-MM-DD`, failures);
  assert(Array.isArray(evidence.authors) && evidence.authors.length > 0, `${prefix} requires identifiable authors`, failures);
  assert(Array.isArray(evidence.reports) && evidence.reports.length > 0, `${prefix} requires per-person reports`, failures);
  const validReportKeys = new Set();
  if (Array.isArray(evidence.reports)) {
    for (const [reportIndex, report] of evidence.reports.entries()) {
      const reportPrefix = `${prefix} reports[${reportIndex}]`;
      assert(report && typeof report === "object" && !Array.isArray(report), `${reportPrefix} must be an object`, failures);
      if (!report || typeof report !== "object" || Array.isArray(report)) continue;
      assert(typeof report.author === "string" && report.author.trim(), `${reportPrefix} requires author`, failures);
      assert(isHttpUrl(report.permalink), `${reportPrefix} permalink must be http(s)`, failures);
      assert(typeof report.locator === "string" && report.locator.trim().length >= 8, `${reportPrefix} requires a reproducible page locator`, failures);
      assert(typeof report.evidenceExcerpt === "string" && report.evidenceExcerpt.trim().length >= 16, `${reportPrefix} requires per-person evidence`, failures);
      assert(typeof report.auditNote === "string" && report.auditNote.includes(report.evidenceExcerpt), `${reportPrefix} auditNote must retain per-person evidence`, failures);
      assert(
        !/^人工回看原始頁，作者「.*」以第一人稱明確回報同型號的同一問題/.test(String(report.auditNote || "").trim()),
        `${reportPrefix} auditNote must not be a generic attestation`,
        failures,
      );
      assert(report.exactModel === true, `${reportPrefix} must confirm the exact model`, failures);
      assert(report.firstPerson === true, `${reportPrefix} must confirm a first-person report`, failures);
      assert(report.reviewBasis === "manual_original_page", `${reportPrefix} must be reviewed from the original page`, failures);
      assert(report.reviewedAt === row.issueResearch.checkedAt, `${reportPrefix} review date mismatch`, failures);
      assert(
        report.crossPostKey === null || (typeof report.crossPostKey === "string" && report.crossPostKey.trim()),
        `${reportPrefix} crossPostKey must be null or a non-empty string`,
        failures,
      );
      if (report.author && report.exactModel === true && report.firstPerson === true) {
        validReportKeys.add(report.crossPostKey
          ? `cross-post:${normalize(report.crossPostKey)}`
          : `${normalize(evidence.platform)}:${normalize(report.author)}`);
      }
    }
    const evidenceExcerpts = evidence.reports.map((report) => normalize(report?.evidenceExcerpt));
    assert(
      uniqueNormalized(evidenceExcerpts).size === evidence.reports.length,
      `${prefix} requires a distinct per-person evidence excerpt for every author`,
      failures,
    );
  }
  if (Array.isArray(evidence.authors)) {
    const distinctAuthors = uniqueNormalized(evidence.authors);
    const reportAuthors = uniqueNormalized((evidence.reports || []).map((report) => report?.author));
    assert(distinctAuthors.size === evidence.authors.length, `${prefix} authors must be unique`, failures);
    assert(
      JSON.stringify([...distinctAuthors].sort()) === JSON.stringify([...reportAuthors].sort()),
      `${prefix} authors must match per-person reports`,
      failures,
    );
    assert(
      Number.isInteger(evidence.distinctReportCount) && evidence.distinctReportCount === validReportKeys.size,
      `${prefix} distinctReportCount must match valid per-person reports`,
      failures,
    );
  }
}

function validateIssueResearchFile(root, products, failures) {
  const researchFile = path.join(root, "product_issue_research.json");
  const reportLedgerFile = path.join(root, "product_issue_report_evidence.json");
  assert(fs.existsSync(researchFile), "product_issue_research.json is missing", failures);
  assert(fs.existsSync(reportLedgerFile), "product_issue_report_evidence.json is missing", failures);
  if (!fs.existsSync(researchFile) || !fs.existsSync(reportLedgerFile)) return;

  const research = JSON.parse(fs.readFileSync(researchFile, "utf8"));
  const reportLedger = JSON.parse(fs.readFileSync(reportLedgerFile, "utf8"));
  const ledgerReports = Array.isArray(reportLedger.reports) ? reportLedger.reports : [];
  const researchReports = [];
  const aggregateCheckedAt = research.summary?.checkedAt?.slice(0, 10);
  assert(aggregateCheckedAt === CHECKED_AT, "product issue research aggregate date mismatch", failures);
  assert(reportLedger.checkedAt === research.summary?.checkedAt?.slice(0, 10), "product issue report ledger date mismatch", failures);
  assert(reportLedger.checkedAt === CHECKED_AT, "product issue report ledger aggregate date mismatch", failures);
  assert(typeof reportLedger.policy === "string" && reportLedger.policy.trim(), "product issue report ledger requires policy", failures);
  assert(ledgerReports.length > 0, "product issue report ledger requires explicit reports", failures);
  const ledgerReportKeys = new Set(ledgerReports.map((report) => [
    report.productId,
    report.issueTitle,
    report.platform,
    report.sourceUrl,
    report.author,
    report.permalink,
  ].join("\n")));
  assert(ledgerReportKeys.size === ledgerReports.length, "product issue report ledger contains duplicate rows", failures);
  for (const report of ledgerReports) {
    assert(ISSUE_RESEARCH_DATE_PATTERN.test(String(report.reviewedAt || "")), `${report.productId || "unknown"} report ledger reviewedAt must use YYYY-MM-DD`, failures);
    assert(report.reviewedAt <= reportLedger.checkedAt, `${report.productId || "unknown"} report ledger reviewedAt exceeds aggregate date`, failures);
  }
  const researchRows = Array.isArray(research.results) ? research.results : [];
  const researchById = new Map(researchRows.map((row) => [row.id, row]));
  assert(researchRows.length === products.length, `issue research rows ${researchRows.length} does not match products ${products.length}`, failures);
  assert(researchById.size === products.length, `issue research count ${researchById.size} does not match products ${products.length}`, failures);
  assert(research.summary && research.summary.total === products.length, "issue research summary total mismatch", failures);
  assert(research.summary && research.summary.pendingManualReview === 0, "issue research still has pending manual review", failures);

  for (const product of products) {
    const row = researchById.get(product.id);
    assert(row, `${product.id} missing issue research row`, failures);
    if (!row) continue;

    assert(row.category === product.category, `${product.id} issue research category mismatch`, failures);
    assert(row.brand === product.brand, `${product.id} issue research brand mismatch`, failures);
    assert(row.model === product.model, `${product.id} issue research model mismatch`, failures);
    assert(row.name === product.name, `${product.id} issue research name mismatch`, failures);
    assert(row.identity && typeof row.identity === "object" && !Array.isArray(row.identity), `${product.id} issue research requires identity`, failures);
    assert(typeof row.identity?.canonicalModel === "string" && row.identity.canonicalModel.trim(), `${product.id} issue research requires canonicalModel`, failures);
    assert(row.identity?.canonicalModel === canonicalModel(product), `${product.id} issue research canonicalModel must match the complete product model`, failures);
    assert(Array.isArray(row.identity?.aliases) && row.identity.aliases.length > 0, `${product.id} issue research requires identity aliases`, failures);
    assert(isHttpUrl(row.identity?.evidenceUrl), `${product.id} issue research identity evidenceUrl must be http(s)`, failures);
    assert(row.workflowStatus === "completed", `${product.id} issue research workflow must be completed`, failures);
    assert(row.manualReview?.status === "completed", `${product.id} issue research requires completed manualReview`, failures);
    assert(row.manualReview?.decision === product.issueResearch?.status, `${product.id} manual review decision mismatch`, failures);
    assert(row.manualReview?.reviewedAt === product.issueResearch?.checkedAt, `${product.id} manual review date mismatch`, failures);
    assert(product.issueResearch?.checkedAt <= aggregateCheckedAt, `${product.id} issue research date exceeds aggregate date`, failures);
    const checkedPlatformSet = uniqueNormalized(row.manualReview?.checkedPlatforms || []);
    assert(checkedPlatformSet.size >= 2, `${product.id} manual review requires two checked platforms`, failures);
    const expectedManualAttestation = row.manualReview?.decision === "common_issue" || row.manualReview?.candidateReviews?.length
      ? "manual_original_pages_reviewed"
      : "manual_cross_site_search_reviewed_no_candidate";
    assert(row.manualReview?.attestation === expectedManualAttestation, `${product.id} manual review attestation must match the available original pages`, failures);
    assert(typeof row.manualReview?.reviewerNote === "string" && row.manualReview.reviewerNote.includes(product.model), `${product.id} manual review requires a model-specific reviewerNote`, failures);
    assert(typeof row.manualReview?.candidateDisposition === "string" && row.manualReview.candidateDisposition.includes(product.model), `${product.id} manual review requires a model-specific candidateDisposition`, failures);
    assert(Array.isArray(row.manualReview?.representativeSources), `${product.id} manual review representativeSources must be an array`, failures);
    assert(Array.isArray(row.manualReview?.candidateReviews), `${product.id} manual review candidateReviews must be an array`, failures);
    assert(Array.isArray(row.manualReview?.queries) && row.manualReview.queries.length >= 2, `${product.id} manual review requires two explicit queries`, failures);
    assert(uniqueNormalized((row.manualReview?.queries || []).map((query) => query?.platform)).size >= 2, `${product.id} manual review queries must span two platforms`, failures);
    const manualTargetWebsites = new Set();
    for (const [queryIndex, query] of (row.manualReview?.queries || []).entries()) {
      const prefix = `${product.id} manualReview queries[${queryIndex}]`;
      assert(typeof query.platform === "string" && query.platform.trim(), `${prefix} requires platform`, failures);
      assert(typeof query.query === "string" && query.query.trim(), `${prefix} requires exact query`, failures);
      assert(isHttpUrl(query.queryUrl), `${prefix} queryUrl must be http(s)`, failures);
      assert(checkedPlatformSet.has(normalize(query.platform)), `${prefix} platform must be declared in checkedPlatforms`, failures);
      assert(canonicalWebsite(query.targetHost), `${prefix} requires targetHost`, failures);
      assert(queryTargetsProduct(query, product), `${prefix} must contain the canonical model`, failures);
      assert(queryTargetsWebsite(query), `${prefix} platform and targetHost must identify the same website`, failures);
      assert(queryUrlMatchesRecord(query), `${prefix} queryUrl must reproduce the recorded query`, failures);
      manualTargetWebsites.add(canonicalWebsite(query.targetHost));
    }
    assert(manualTargetWebsites.size >= 2, `${product.id} manual review queries must target two independent websites`, failures);
    for (const [sourceIndex, source] of (row.manualReview?.representativeSources || []).entries()) {
      const prefix = `${product.id} manualReview representativeSources[${sourceIndex}]`;
      assert(typeof source.platform === "string" && source.platform.trim(), `${prefix} requires platform`, failures);
      assert(typeof source.title === "string" && source.title.trim(), `${prefix} requires title`, failures);
      assert(isHttpUrl(source.url), `${prefix} url must be http(s)`, failures);
      assert(checkedPlatformSet.has(normalize(source.platform)), `${prefix} platform must be declared in checkedPlatforms`, failures);
    }
    assert(JSON.stringify(row.issueResearch) === JSON.stringify(product.issueResearch), `${product.id} issueResearch research mismatch`, failures);

    assert(Array.isArray(row.searchChecks) && row.searchChecks.length > 0, `${product.id} issue research requires searchChecks`, failures);
    for (const [searchIndex, searchCheck] of (row.searchChecks || []).entries()) {
      const prefix = `${product.id} searchChecks[${searchIndex}]`;
      assert(typeof searchCheck.platform === "string" && searchCheck.platform.trim(), `${prefix} requires platform`, failures);
      assert(typeof searchCheck.query === "string" && searchCheck.query.trim(), `${prefix} requires exact query`, failures);
      assert(isHttpUrl(searchCheck.searchUrl), `${prefix} searchUrl must be http(s)`, failures);
      assert(
        new Set(["candidates_unverified_by_search_only", "no_exact_model_result", "search_unavailable"]).has(searchCheck.result),
        `${prefix} has invalid result ${searchCheck.result}`,
        failures,
      );
      assert(Number.isInteger(searchCheck.resultCount) && searchCheck.resultCount >= 0, `${prefix} requires non-negative resultCount`, failures);
      assert(Array.isArray(searchCheck.candidateUrls), `${prefix} candidateUrls must be an array`, failures);
      assert((searchCheck.candidateUrls || []).every(isHttpUrl), `${prefix} candidateUrls must use http(s)`, failures);
      assert(Array.isArray(searchCheck.candidates), `${prefix} candidates must be an array`, failures);
      assert(searchCheck.resultCount === (searchCheck.candidates || []).length, `${prefix} resultCount must match exact-model candidates`, failures);
      assert(
        JSON.stringify(searchCheck.candidateUrls || []) === JSON.stringify((searchCheck.candidates || []).map((candidate) => candidate.url)),
        `${prefix} candidateUrls must match exact-model candidates`,
        failures,
      );
      assert(typeof searchCheck.inspectedAt === "string" && searchCheck.inspectedAt.startsWith(product.issueResearch.checkedAt), `${prefix} inspectedAt date mismatch`, failures);
    }

    const searchCandidates = (row.searchChecks || []).flatMap((searchCheck) => searchCheck.candidates || []);
    const manualCandidateReviews = row.manualReview?.candidateReviews || [];
    manualCandidateReviews.forEach((candidate, index) => {
      validateCandidateReview(candidate, `${product.id} manualReview candidateReviews[${index}]`, product.issueResearch.checkedAt, failures);
    });
    const searchCandidateKeys = searchCandidates.map(candidateReviewKey).sort();
    const manualCandidateKeys = manualCandidateReviews.map(candidateReviewKey).sort();
    assert(new Set(manualCandidateKeys).size === manualCandidateKeys.length, `${product.id} manual candidate reviews must be unique`, failures);
    assert(
      JSON.stringify(searchCandidateKeys) === JSON.stringify(manualCandidateKeys),
      `${product.id} every exact-model search candidate requires one explicit manual review`,
      failures,
    );
    if (product.issueResearch.status === "no_common_issue") {
      const representativeKeys = (row.manualReview.representativeSources || [])
        .map((source) => `${source.url || ""}\n${source.title || ""}`)
        .sort();
      assert(
        JSON.stringify(representativeKeys) === JSON.stringify(manualCandidateKeys),
        `${product.id} no-common representativeSources must identify every reviewed candidate page`,
        failures,
      );
    }

    assert(Array.isArray(row.rejectedCandidates), `${product.id} rejectedCandidates must be an array`, failures);
    assert(
      JSON.stringify(row.rejectedCandidates || []) === JSON.stringify(manualCandidateReviews.map((candidate) => ({ ...candidate, reason: candidate.specificReason }))),
      `${product.id} rejectedCandidates must derive only from explicit candidateReviews`,
      failures,
    );
    for (const [candidateIndex, candidate] of (row.rejectedCandidates || []).entries()) {
      const prefix = `${product.id} rejectedCandidates[${candidateIndex}]`;
      validateCandidateReview(candidate, prefix, product.issueResearch.checkedAt, failures);
      assert(candidate.reason === candidate.specificReason, `${prefix} reason must match the explicit specificReason`, failures);
      const canonicalModel = compactIdentity(row.identity.canonicalModel);
      const candidateIdentity = compactIdentity(`${candidate.title} ${candidate.url}`);
      if (canonicalModel.length >= 4) {
        assert(candidateIdentity.includes(canonicalModel), `${prefix} does not contain the canonical model`, failures);
      }
    }

    const evidenceRows = Array.isArray(row.evidence) ? row.evidence : [];
    assert(Array.isArray(row.evidence), `${product.id} issue research evidence must be an array`, failures);
    const issueTitles = new Set((product.issueResearch?.issues || []).map((issue) => issue.title));
    evidenceRows.forEach((evidence, index) => {
      validateIssueEvidence(row, evidence, index, issueTitles, failures);
      for (const report of evidence.reports || []) {
        researchReports.push({
          productId: row.id,
          issueTitle: evidence.issueTitle,
          platform: evidence.platform,
          sourceTitle: evidence.title,
          sourceUrl: evidence.url,
          author: report.author,
          permalink: report.permalink,
          locator: report.locator,
          evidenceExcerpt: report.evidenceExcerpt,
          auditNote: report.auditNote,
          exactModel: report.exactModel,
          firstPerson: report.firstPerson,
          crossPostKey: report.crossPostKey,
          reviewBasis: report.reviewBasis,
          reviewedAt: report.reviewedAt,
        });
      }
    });

    if (product.issueResearch?.status !== "common_issue") continue;
    assert(evidenceRows.length > 0, `${product.id} common_issue requires detailed evidence`, failures);
    for (const issue of product.issueResearch.issues) {
      const issueEvidence = evidenceRows.filter((evidence) => evidence.issueTitle === issue.title);
      const compactSourceKeys = new Set(issue.sources.map((source) => `${source.platform}\n${source.title}\n${source.url}`));
      const evidenceSourceKeys = new Set(issueEvidence.map((evidence) => `${evidence.platform}\n${evidence.title}\n${evidence.url}`));
      assert(
        JSON.stringify([...evidenceSourceKeys].sort()) === JSON.stringify([...compactSourceKeys].sort()),
        `${product.id} ${issue.title} compact sources do not match detailed evidence`,
        failures,
      );

      const reportKeys = new Set();
      const reportsByAuthor = new Map();
      const reportRecords = [];
      for (const evidence of issueEvidence) {
        for (const report of evidence.reports || []) {
          if (report.exactModel !== true || report.firstPerson !== true) continue;
          const authorKey = normalize(report.author);
          const authorReports = reportsByAuthor.get(authorKey) || [];
          const record = {
            accountKey: `${normalize(evidence.platform)}:${authorKey}`,
            platform: normalize(evidence.platform),
            crossPostKey: normalize(report.crossPostKey),
          };
          authorReports.push(record);
          reportsByAuthor.set(authorKey, authorReports);
          reportRecords.push(record);
        }
      }
      for (const [author, authorReports] of reportsByAuthor) {
        const platforms = new Set(authorReports.map((report) => report.platform));
        if (platforms.size < 2) continue;
        const crossPostKeys = new Set(authorReports.map((report) => normalize(report.crossPostKey)).filter(Boolean));
        assert(
          crossPostKeys.size === 1 && authorReports.every((report) => report.crossPostKey),
          `${product.id} ${issue.title} repeated cross-platform author ${author} requires one shared crossPostKey`,
          failures,
        );
      }
      const crossPostByAccount = new Map();
      const crossPostUse = new Map();
      for (const report of reportRecords) {
        if (!report.crossPostKey) continue;
        const existing = crossPostByAccount.get(report.accountKey);
        assert(
          !existing || existing === report.crossPostKey,
          `${product.id} ${issue.title} account ${report.accountKey} has conflicting crossPostKeys`,
          failures,
        );
        if (!existing) crossPostByAccount.set(report.accountKey, report.crossPostKey);
        const accounts = crossPostUse.get(report.crossPostKey) || new Set();
        accounts.add(report.accountKey);
        crossPostUse.set(report.crossPostKey, accounts);
      }
      for (const [crossPostKey, accounts] of crossPostUse) {
        assert(accounts.size >= 2, `${product.id} ${issue.title} crossPostKey ${crossPostKey} must join at least two accounts`, failures);
      }
      for (const report of reportRecords) {
        const crossPostKey = crossPostByAccount.get(report.accountKey);
        reportKeys.add(crossPostKey ? `cross-post:${crossPostKey}` : report.accountKey);
      }
      assert(
        reportKeys.size === issue.reportCount,
        `${product.id} ${issue.title} reportCount ${issue.reportCount} must be derived from ${reportKeys.size} valid per-person reports`,
        failures,
      );
      assert(
        uniqueNormalized(issueEvidence.map((evidence) => evidence.platform)).size >= 2,
        `${product.id} ${issue.title} detailed evidence must span at least two platforms`,
        failures,
      );
    }
  }

  const reportSortKey = (report) => [
    report.productId,
    report.issueTitle,
    report.platform,
    report.sourceUrl,
    report.author,
    report.permalink,
  ].join("\n");
  const canonicalReport = (report) => ({
    productId: report.productId,
    issueTitle: report.issueTitle,
    platform: report.platform,
    sourceTitle: report.sourceTitle,
    sourceUrl: report.sourceUrl,
    author: report.author,
    permalink: report.permalink,
    locator: report.locator,
    evidenceExcerpt: report.evidenceExcerpt,
    auditNote: report.auditNote,
    exactModel: report.exactModel,
    firstPerson: report.firstPerson,
    crossPostKey: report.crossPostKey,
    reviewBasis: report.reviewBasis,
    reviewedAt: report.reviewedAt,
  });
  const sortedLedgerReports = ledgerReports.map(canonicalReport).sort((left, right) => reportSortKey(left).localeCompare(reportSortKey(right)));
  const sortedResearchReports = researchReports.map(canonicalReport).sort((left, right) => reportSortKey(left).localeCompare(reportSortKey(right)));
  assert(
    JSON.stringify(sortedResearchReports) === JSON.stringify(sortedLedgerReports),
    "product issue report ledger does not exactly match research evidence",
    failures,
  );
}

function validateIssueReviewManifest(root, products, failures) {
  const manifestFile = path.join(root, "product_issue_review_manifest.json");
  assert(fs.existsSync(manifestFile), "product_issue_review_manifest.json is missing", failures);
  if (!fs.existsSync(manifestFile)) return;

  const manifest = JSON.parse(fs.readFileSync(manifestFile, "utf8"));
  const research = JSON.parse(fs.readFileSync(path.join(root, "product_issue_research.json"), "utf8"));
  const researchById = new Map((research.results || []).map((row) => [row.id, row]));
  const rows = Array.isArray(manifest.results) ? manifest.results : [];
  const byId = new Map(rows.map((row) => [row.id, row]));
  assert(ISSUE_RESEARCH_DATE_PATTERN.test(String(manifest.checkedAt || "")), "issue review manifest requires checkedAt", failures);
  assert(manifest.checkedAt === CHECKED_AT, "issue review manifest aggregate date mismatch", failures);
  assert(manifest.checkedAt === research.summary?.checkedAt?.slice(0, 10), "issue review manifest and research aggregate dates must match", failures);
  assert(manifest.methodVersion === 3, "issue review manifest must use explicit methodVersion 3", failures);
  assert(typeof manifest.policy === "string" && manifest.policy.trim(), "issue review manifest requires policy", failures);
  assert(rows.length === products.length, `issue review manifest rows ${rows.length} does not match products ${products.length}`, failures);
  assert(byId.size === products.length, `issue review manifest count ${byId.size} does not match products ${products.length}`, failures);

  for (const product of products) {
    const row = byId.get(product.id);
    assert(row, `${product.id} missing issue review manifest row`, failures);
    if (!row) continue;
    assert(row.category === product.category, `${product.id} issue review manifest category mismatch`, failures);
    assert(row.brand === product.brand, `${product.id} issue review manifest brand mismatch`, failures);
    assert(row.model === product.model, `${product.id} issue review manifest model mismatch`, failures);
    assert(row.reviewBatch === product.category, `${product.id} issue review manifest reviewBatch mismatch`, failures);
    assert(ISSUE_RESEARCH_DATE_PATTERN.test(String(row.reviewedAt || "")), `${product.id} issue review manifest reviewedAt must use YYYY-MM-DD`, failures);
    assert(row.reviewedAt <= manifest.checkedAt, `${product.id} issue review manifest reviewedAt exceeds aggregate date`, failures);
    assert(row.reviewedAt === product.issueResearch?.checkedAt, `${product.id} issue review manifest date mismatch`, failures);
    assert(row.decision === product.issueResearch?.status, `${product.id} issue review manifest decision mismatch`, failures);
    const checkedPlatforms = uniqueNormalized(row.checkedPlatforms || []);
    assert(checkedPlatforms.size >= 2, `${product.id} issue review manifest requires two checked platforms`, failures);
    const expectedAttestation = row.decision === "common_issue" || row.candidateReviews?.length
      ? "manual_original_pages_reviewed"
      : "manual_cross_site_search_reviewed_no_candidate";
    assert(row.attestation === expectedAttestation, `${product.id} issue review manifest attestation must match the available original pages`, failures);
    assert(typeof row.reviewerNote === "string" && row.reviewerNote.includes(product.model), `${product.id} issue review manifest requires a model-specific reviewerNote`, failures);
    assert(typeof row.candidateDisposition === "string" && row.candidateDisposition.includes(product.model), `${product.id} issue review manifest requires a model-specific candidateDisposition`, failures);
    assert(Array.isArray(row.representativeSources), `${product.id} issue review manifest representativeSources must be an array`, failures);
    assert(Array.isArray(row.candidateReviews), `${product.id} issue review manifest candidateReviews must be an array`, failures);
    assert(Array.isArray(row.queries) && row.queries.length >= 2, `${product.id} issue review manifest requires explicit queries`, failures);
    try {
      validateExplicitReview(row, product);
    } catch (error) {
      failures.push(`${product.id} issue review manifest explicit validation failed: ${error.message}`);
    }
    const queryPlatforms = uniqueNormalized((row.queries || []).map((query) => query?.platform));
    assert(queryPlatforms.size >= 2, `${product.id} issue review manifest queries must span two platforms`, failures);
    const manifestTargetWebsites = new Set();
    for (const [queryIndex, query] of (row.queries || []).entries()) {
      const prefix = `${product.id} issue review manifest queries[${queryIndex}]`;
      assert(typeof query.platform === "string" && query.platform.trim(), `${prefix} requires platform`, failures);
      assert(typeof query.query === "string" && query.query.trim(), `${prefix} requires exact query`, failures);
      assert(isHttpUrl(query.queryUrl), `${prefix} queryUrl must be http(s)`, failures);
      assert(checkedPlatforms.has(normalize(query.platform)), `${prefix} platform must be declared in checkedPlatforms`, failures);
      assert(canonicalWebsite(query.targetHost), `${prefix} requires targetHost`, failures);
      assert(queryTargetsProduct(query, product), `${prefix} must contain the canonical model`, failures);
      assert(queryTargetsWebsite(query), `${prefix} platform and targetHost must identify the same website`, failures);
      assert(queryUrlMatchesRecord(query), `${prefix} queryUrl must reproduce the recorded query`, failures);
      manifestTargetWebsites.add(canonicalWebsite(query.targetHost));
    }
    assert(manifestTargetWebsites.size >= 2, `${product.id} manifest queries must target two independent websites`, failures);
    for (const [sourceIndex, source] of (row.representativeSources || []).entries()) {
      const prefix = `${product.id} issue review manifest representativeSources[${sourceIndex}]`;
      assert(typeof source.platform === "string" && source.platform.trim(), `${prefix} requires platform`, failures);
      assert(typeof source.title === "string" && source.title.trim(), `${prefix} requires title`, failures);
      assert(isHttpUrl(source.url), `${prefix} url must be http(s)`, failures);
      assert(checkedPlatforms.has(normalize(source.platform)), `${prefix} platform must be declared in checkedPlatforms`, failures);
    }
    const researchRow = researchById.get(product.id);
    const expectedCandidateKeys = (researchRow?.searchChecks || [])
      .flatMap((searchCheck) => searchCheck.candidates || [])
      .map(candidateReviewKey)
      .sort();
    const manifestCandidateKeys = (row.candidateReviews || []).map(candidateReviewKey).sort();
    assert(new Set(manifestCandidateKeys).size === manifestCandidateKeys.length, `${product.id} manifest candidate reviews must be unique`, failures);
    assert(
      JSON.stringify(expectedCandidateKeys) === JSON.stringify(manifestCandidateKeys),
      `${product.id} manifest must explicitly review every exact-model search candidate`,
      failures,
    );
    (row.candidateReviews || []).forEach((candidate, index) => {
      validateCandidateReview(candidate, `${product.id} manifest candidateReviews[${index}]`, product.issueResearch.checkedAt, failures);
    });
    if (product.issueResearch?.status === "common_issue") {
      const compactSources = product.issueResearch.issues.flatMap((issue) => issue.sources);
      assert(
        JSON.stringify(row.representativeSources) === JSON.stringify(compactSources),
        `${product.id} issue review manifest representativeSources mismatch`,
        failures,
      );
    } else {
      const representativeKeys = (row.representativeSources || [])
        .map((source) => `${source.url || ""}\n${source.title || ""}`)
        .sort();
      assert(
        JSON.stringify(representativeKeys) === JSON.stringify(manifestCandidateKeys),
        `${product.id} no-common manifest representativeSources must match candidateReviews`,
        failures,
      );
    }
  }
}

function validateHistoricalPriceResearch(root, products, failures) {
  const researchFile = path.join(root, "historical_price_research.json");
  assert(fs.existsSync(researchFile), "historical_price_research.json is missing", failures);
  if (!fs.existsSync(researchFile)) return;

  const research = JSON.parse(fs.readFileSync(researchFile, "utf8"));
  const researchRows = Array.isArray(research.results) ? research.results : [];
  const researchById = new Map(researchRows.map((row) => [row.id, row]));
  const foundRows = researchRows.filter((row) => row.historicalLow?.status === "found");
  const missingRows = researchRows.filter((row) => row.historicalLow?.status === "not_found");

  assert(researchRows.length === products.length, `historical price research rows ${researchRows.length} does not match products ${products.length}`, failures);
  assert(researchById.size === products.length, `historical price research count ${researchById.size} does not match products ${products.length}`, failures);
  assert(research.summary && research.summary.total === products.length, "historical price research summary total mismatch", failures);
  assert(research.summary && research.summary.found === foundRows.length, "historical price research summary found mismatch", failures);
  assert(research.summary && research.summary.missing === missingRows.length, "historical price research summary missing mismatch", failures);

  for (const product of products) {
    const row = researchById.get(product.id);
    assert(row, `${product.id} missing historical price research row`, failures);
    if (!row) continue;

    assert(row.category === product.category, `${product.id} historical price research category mismatch`, failures);
    assert(row.brand === product.brand, `${product.id} historical price research brand mismatch`, failures);
    assert(row.model === product.model, `${product.id} historical price research model mismatch`, failures);
    assert(row.name === product.name, `${product.id} historical price research name mismatch`, failures);
    assert(row.currentPrice === product.price.converted, `${product.id} historical price research current price mismatch`, failures);
    assert(row.currentCurrency === product.price.currency, `${product.id} historical price research current currency mismatch`, failures);
    assert(row.currentBuyUrl === product.buyUrl, `${product.id} historical price research buyUrl mismatch`, failures);
    assert(row.currentBuyLabel === product.buyLabel, `${product.id} historical price research buyLabel mismatch`, failures);
    assert(JSON.stringify(row.historicalLow) === JSON.stringify(product.historicalLow), `${product.id} historicalLow research mismatch`, failures);
  }
}

function validateReleaseResearch(root, products, failures) {
  const researchFile = path.join(root, "release_date_research.json");
  assert(fs.existsSync(researchFile), "release_date_research.json is missing", failures);
  if (!fs.existsSync(researchFile)) return;

  const research = JSON.parse(fs.readFileSync(researchFile, "utf8"));
  const researchById = new Map((research.results || []).map((row) => [row.id, row]));
  assert(researchById.size === products.length, `release research count ${researchById.size} does not match products ${products.length}`, failures);

  for (const product of products) {
    const row = researchById.get(product.id);
    assert(row, `${product.id} missing release research row`, failures);
    if (!row) continue;
    assert(row.releaseDate === product.releaseDate, `${product.id} release research date mismatch`, failures);
    if (product.releaseDate !== "找不到") {
      assert(row.sourceUrl, `${product.id} non-empty releaseDate requires sourceUrl`, failures);
      assert(row.sourceTitle, `${product.id} non-empty releaseDate requires sourceTitle`, failures);
      assert(row.evidenceSnippet, `${product.id} non-empty releaseDate requires evidenceSnippet`, failures);
    }
  }
}

function validateDimensionResearch(root, products, failures) {
  const dimensionProducts = products.filter((product) => DIMENSION_CATEGORIES.has(product.category));
  assert(dimensionProducts.length === EXPECTED_DIMENSION_PRODUCT_COUNT, `expected ${EXPECTED_DIMENSION_PRODUCT_COUNT} dimension products, got ${dimensionProducts.length}`, failures);
  for (const [categoryId, expectedCount] of DIMENSION_CATEGORY_COUNTS) {
    const count = dimensionProducts.filter((product) => product.category === categoryId).length;
    assert(count === expectedCount, `${categoryId} must have ${expectedCount} dimension products, got ${count}`, failures);
  }

  const researchFile = path.join(root, "dimension_research.json");
  assert(fs.existsSync(researchFile), "dimension_research.json is missing", failures);
  if (!fs.existsSync(researchFile)) return;

  const research = JSON.parse(fs.readFileSync(researchFile, "utf8"));
  const researchRows = Array.isArray(research.results) ? research.results : [];
  const researchById = new Map(researchRows.map((row) => [row.id, row]));
  assert(researchRows.length === dimensionProducts.length, `dimension research rows ${researchRows.length} does not match dimension products ${dimensionProducts.length}`, failures);
  assert(researchById.size === dimensionProducts.length, `dimension research count ${researchById.size} does not match dimension products ${dimensionProducts.length}`, failures);

  for (const product of dimensionProducts) {
    const row = researchById.get(product.id);
    assert(row, `${product.id} missing dimension research row`, failures);
    if (!row) continue;

    const dimensionSpecs = product.specs.filter((spec) => String(spec).trim().startsWith("尺寸："));
    const dimensionSpec = dimensionSpecs[0];
    assert(row.dimension === dimensionSpec, `${product.id} dimension research mismatch`, failures);
    assert(DIMENSION_PATTERN.test(String(row.dimension || "").trim()), `${product.id} dimension research has invalid dimension: ${row.dimension}`, failures);
    assert(row.sourceUrl && /^https?:\/\//.test(row.sourceUrl), `${product.id} dimension research requires sourceUrl`, failures);
    assert(row.sourceTitle, `${product.id} dimension research requires sourceTitle`, failures);
    assert(row.evidenceSnippet, `${product.id} dimension research requires evidenceSnippet`, failures);
    assert(DIMENSION_CONFIDENCE_VALUES.has(row.confidence), `${product.id} dimension research has invalid confidence: ${row.confidence}`, failures);
    assert(typeof row.isOfficialSource === "boolean", `${product.id} dimension research requires boolean isOfficialSource`, failures);
    assert(row.checkedAt, `${product.id} dimension research requires checkedAt`, failures);
  }
}

function validateCategoryContent(products, failures) {
  for (const [categoryId, requiredTerms] of REQUIRED_CATEGORY_TERMS) {
    const productsInCategory = categoryProducts(products, categoryId);
    for (const term of requiredTerms) {
      const found = productsInCategory.some((product) => textMatches(product, term));
      assert(found, `${categoryId} missing required term ${term}`, failures);
    }
  }

  for (const rule of CATEGORY_TEXT_MATCH_COUNTS) {
    const count = categoryProducts(products, rule.category)
      .filter((product) => textMatches(product, rule.term))
      .length;
    if (rule.exact !== undefined) {
      assert(count === rule.exact, `${rule.category} expected exactly ${rule.exact} matches for ${rule.term}, got ${count}`, failures);
    } else {
      assert(count >= rule.min, `${rule.category} expected at least ${rule.min} matches for ${rule.term}, got ${count}`, failures);
    }
  }

  for (const product of categoryProducts(products, "wifi")) {
    assert(/wi-fi (6|6e|7)/.test(productText(product)), `${product.id} router missing Wi-Fi 6+ standard`, failures);
  }

  for (const product of categoryProducts(products, "tv")) {
    assert(productText(product).includes("手機投影："), `${product.id} TV missing mobile casting spec`, failures);
  }

  for (const product of categoryProducts(products, "monitor")) {
    assert(productText(product).includes("重量："), `${product.id} monitor missing weight spec`, failures);
  }

  for (const product of categoryProducts(products, "standingdesk")) {
    assert(productText(product).includes("桌板厚度："), `${product.id} standing desk missing desktop thickness spec`, failures);
  }
}

function main() {
  const root = path.resolve(__dirname, "..");
  const failures = [];
  const { categories, products } = readDashboardProducts(root);
  const categoryIds = new Set(categories.map((category) => category.id));

  assert(categories.length === EXPECTED_CATEGORY_COUNT, `expected ${EXPECTED_CATEGORY_COUNT} categories, got ${categories.length}`, failures);
  assert(products.length === EXPECTED_PRODUCT_COUNT, `expected ${EXPECTED_PRODUCT_COUNT} products, got ${products.length}`, failures);
  const missingIssueResearchIds = products
    .filter((product) => !product.issueResearch || typeof product.issueResearch !== "object" || Array.isArray(product.issueResearch))
    .map((product) => product.id);
  assert(
    missingIssueResearchIds.length === 0,
    `issueResearch missing for ${missingIssueResearchIds.length} products: ${missingIssueResearchIds.slice(0, 10).join(", ")}`,
    failures,
  );

  for (const category of categories) {
    const count = products.filter((product) => product.category === category.id).length;
    assert(count >= MIN_PRODUCTS_PER_CATEGORY, `${category.label} has only ${count} products`, failures);
  }

  const seenIds = new Set();
  const seenUrls = new Map();
  const seenCategoryBrandModels = new Map();

  for (const product of products) {
    validateProduct(product, categoryIds, failures);

    assert(!seenIds.has(product.id), `duplicate product id ${product.id}`, failures);
    seenIds.add(product.id);

    if (seenUrls.has(product.buyUrl)) {
      failures.push(`duplicate buyUrl: ${seenUrls.get(product.buyUrl)} and ${product.id}`);
    } else {
      seenUrls.set(product.buyUrl, product.id);
    }

    const duplicateKey = [
      normalize(product.category),
      normalize(product.brand),
      normalize(product.model),
    ].join("||");
    if (seenCategoryBrandModels.has(duplicateKey)) {
      failures.push(`duplicate category/brand/model: ${seenCategoryBrandModels.get(duplicateKey)} and ${product.id}`);
    } else {
      seenCategoryBrandModels.set(duplicateKey, product.id);
    }
  }

  validateReleaseResearch(root, products, failures);
  validateDimensionResearch(root, products, failures);
  validateHistoricalPriceResearch(root, products, failures);
  validateIssueReviewManifest(root, products, failures);
  validateIssueResearchFile(root, products, failures);
  validateCategoryContent(products, failures);

  if (failures.length) {
    console.error(failures.map((failure) => `- ${failure}`).join("\n"));
    process.exit(1);
  }

  console.log(JSON.stringify({
    status: "passed",
    categories: categories.length,
    products: products.length,
    minProductsPerCategory: MIN_PRODUCTS_PER_CATEGORY,
    duplicateBuyUrls: 0,
    duplicateCategoryBrandModels: 0,
  }, null, 2));
}

main();
