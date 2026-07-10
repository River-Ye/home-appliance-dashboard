const fs = require("fs");
const path = require("path");
const { readDashboardProducts } = require("./read-dashboard-products");
const {
  CHECKED_AT,
  evidenceById,
  verifiedIssueById,
} = require("./verified-product-issues");
const {
  canonicalWebsite,
  queryTargetsProduct,
  queryTargetsWebsite,
  queryUrlMatchesRecord,
} = require("./product-issue-validation");

const SEARCH_CONCURRENCY = 3;
const ALLOWED_COMMUNITY_HOSTS = [
  "52asus.com",
  "asus.com",
  "community.samsung.com",
  "dcard.tw",
  "mobile01.com",
  "ptt.cc",
  "reddit.com",
  "snbforums.com",
];
const NO_COMMON_ISSUE_SUMMARY = "截至查核日，查無達門檻的集中負評／災情";

function parseArgs() {
  const args = process.argv.slice(2);
  const valueOf = (name) => args.find((arg) => arg.startsWith(`${name}=`))?.slice(name.length + 1);
  const ids = valueOf("--ids");
  const limit = valueOf("--limit");
  return {
    apply: args.includes("--apply"),
    category: valueOf("--category") || null,
    force: args.includes("--force"),
    ids: ids ? new Set(ids.split(",").map((id) => id.trim()).filter(Boolean)) : null,
    limit: limit ? Number(limit) : null,
    rebuildDecisions: args.includes("--rebuild-decisions"),
    resume: args.includes("--resume"),
    quiet: args.includes("--quiet"),
    write: args.includes("--write") || args.includes("--apply"),
  };
}

function decodeEntities(value) {
  return String(value || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function yahooResultRows(html) {
  const matches = html.matchAll(
    /<a[^>]+href="https:\/\/r\.search\.yahoo\.com\/[^"]*\/RU=([^/\"]+)\/RK=[^"]+"[^>]*>[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>/gi,
  );
  const rows = [];
  const seen = new Set();
  for (const match of matches) {
    let url;
    try {
      url = decodeURIComponent(match[1]);
      const parsed = new URL(url);
      const hostname = parsed.hostname.toLowerCase().replace(/^www\./, "");
      if (!ALLOWED_COMMUNITY_HOSTS.some((host) => hostname === host || hostname.endsWith(`.${host}`))) continue;
    } catch (_error) {
      continue;
    }
    if (seen.has(url)) continue;
    seen.add(url);
    rows.push({ url, title: decodeEntities(match[2]) });
  }
  return rows.slice(0, 10);
}

function canonicalModel(product) {
  return String(product.model || "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\s+(?:\d+\s*)?(?:入組|入|pack|pcs?)$/i, "")
    .trim();
}

function modelAliases(product) {
  const normalizedModel = String(product.model || "").replace(/\s+/g, " ").trim();
  const withoutPack = canonicalModel(product);
  const skuTokens = (normalizedModel.match(/[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+|[A-Z]{1,}[A-Z0-9]{2,}/gi) || [])
    .filter((token) => /\d/.test(token));
  return [...new Set([
    `${product.brand} ${normalizedModel}`,
    `${product.brand} ${withoutPack}`,
    ...skuTokens.map((token) => `${product.brand} ${token}`),
  ].map((value) => value.replace(/\s+/g, " ").trim()).filter(Boolean))];
}

function exactModelQuery(product) {
  const identities = modelAliases(product).map((identity) => `"${identity}"`).join(" OR ");
  return `(${identities}) (problem OR issue OR defect OR failure OR 災情 OR 故障 OR 負評) (site:mobile01.com OR site:dcard.tw OR site:ptt.cc OR site:reddit.com OR site:snbforums.com OR site:52asus.com)`;
}

async function searchProduct(product) {
  const query = exactModelQuery(product);
  const searchUrl = `https://search.yahoo.com/search?p=${encodeURIComponent(query)}`;
  const inspectedAt = `${CHECKED_AT}T00:00:00+08:00`;
  try {
    const response = await fetch(searchUrl, {
      headers: {
        "accept-language": "zh-TW,zh;q=0.9,en;q=0.8",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126 Safari/537.36",
      },
      signal: AbortSignal.timeout(20000),
    });
    const html = await response.text();
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const candidates = yahooResultRows(html);
    return {
      platform: "Yahoo Search",
      query,
      searchUrl,
      result: candidates.length ? "candidates_unverified_by_search_only" : "no_exact_model_result",
      resultCount: candidates.length,
      candidateUrls: candidates.map((candidate) => candidate.url),
      candidates,
      inspectedAt,
    };
  } catch (error) {
    return {
      platform: "Yahoo Search",
      query,
      searchUrl,
      result: "search_unavailable",
      resultCount: 0,
      candidateUrls: [],
      candidates: [],
      inspectedAt,
      error: error.message,
    };
  }
}

function normalizeCandidateIdentity(value) {
  return String(value || "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "");
}

function candidateMatchesExactModel(product, candidate) {
  let decodedUrl = candidate.url || "";
  try {
    decodedUrl = decodeURIComponent(decodedUrl);
  } catch (_error) {
    // Keep the original URL when it contains malformed escapes.
  }
  const rawCandidate = `${candidate.title || ""} ${decodedUrl}`;
  const canonical = canonicalModel(product);
  const escapedCanonical = canonical
    .split(/[\s_-]+/)
    .map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("[\\s_-]*");
  const longerVariant = new RegExp(`${escapedCanonical}[\\s_-]*(?:pro|max|plus|lite|ultra|v\\d+|x)\\b`, "i");
  if (canonical.length >= 4 && longerVariant.test(rawCandidate)) return false;

  const requiresFullVariant = /(?:^|\s)(?:v\d+|pro|max|plus|lite|ultra|x)$/i.test(canonical);
  const escapedBrand = String(product.brand || "")
    .split(/[\s_-]+/)
    .map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("[\\s_-]*");
  if (escapedBrand) {
    const brandAndModel = new RegExp(
      `(^|[^A-Za-z0-9])${escapedBrand}[\\s_-]*${escapedCanonical}(?=$|[^A-Za-z0-9])`,
      "i",
    );
    if (brandAndModel.test(rawCandidate)) return true;
  }
  const modelTokens = [canonical];
  if (!requiresFullVariant) {
    modelTokens.push(...(String(product.model || "").match(/[A-Z]*\d+[A-Z0-9-]*/gi) || [])
      .filter((token) => /[A-Z]/i.test(token) && /\d/.test(token)));
  }
  return [...new Set(modelTokens)]
    .filter((token) => normalizeCandidateIdentity(token).length >= 4)
    .some((token) => {
      const pattern = token
        .split(/[\s_-]+/)
        .map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("[\\s_-]*");
      return new RegExp(`(^|[^A-Za-z0-9])${pattern}(?=$|[^A-Za-z0-9])`, "i").test(rawCandidate);
    });
}

function sanitizeSearchCheck(product, searchCheck) {
  if (searchCheck.result === "search_unavailable") {
    return { ...searchCheck, resultCount: 0, candidateUrls: [], candidates: [] };
  }
  const candidates = (searchCheck.candidates || [])
    .filter((candidate) => candidateMatchesExactModel(product, candidate));
  return {
    ...searchCheck,
    result: candidates.length ? "candidates_unverified_by_search_only" : "no_exact_model_result",
    resultCount: candidates.length,
    candidateUrls: candidates.map((candidate) => candidate.url),
    candidates,
  };
}

function noCommonIssueResearch(review) {
  return {
    status: "no_common_issue",
    checkedAt: CHECKED_AT,
    summary: NO_COMMON_ISSUE_SUMMARY,
    issues: [],
    checkedSources: review.queries.map(({ platform, query, queryUrl, targetHost }) => ({ platform, query, queryUrl, targetHost })),
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

function writeJsonAtomic(file, value) {
  const temporary = `${file}.tmp`;
  fs.writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  fs.renameSync(temporary, file);
}

function buildResearchDocument(products, rowById) {
  const results = products.map((product) => rowById.get(product.id)).filter(Boolean);
  const commonIssues = results.filter((row) => row.issueResearch?.status === "common_issue");
  const noCommonIssues = results.filter((row) => row.issueResearch?.status === "no_common_issue");
  const pendingManualReview = results.filter((row) => row.workflowStatus !== "completed");
  const searchUnavailable = results.filter((row) => row.searchChecks.some((check) => check.result === "search_unavailable"));
  return {
    summary: {
      checkedAt: `${CHECKED_AT}T00:00:00+08:00`,
      total: results.length,
      commonIssueProducts: commonIssues.length,
      noCommonIssueProducts: noCommonIssues.length,
      pendingManualReview: pendingManualReview.length,
      commonIssues: commonIssues.reduce((sum, row) => sum + row.issueResearch.issues.length, 0),
      searchUnavailable: searchUnavailable.length,
      threshold: {
        minimumDistinctUsers: 6,
        minimumPlatforms: 2,
        exactModelOnly: true,
      },
      sourcePolicy: "搜尋引擎只用於發現候選；只有原始論壇、社群或零售評價頁中可辨識的第一人稱同型號回報才計入人數。同帳號、跨站轉貼、按讚、媒體轉述與搜尋摘要不重複計算。",
      noIssueWording: NO_COMMON_ISSUE_SUMMARY,
    },
    results,
  };
}

function candidateReviewKey(candidate) {
  return `${candidate.url}\n${candidate.title}`;
}

function candidateReviewsMatchSearch(review, searchCheck) {
  if (!Array.isArray(review.candidateReviews)) return false;
  const candidates = searchCheck.candidates || [];
  const expectedKeys = candidates.map(candidateReviewKey).sort();
  const reviewKeys = review.candidateReviews.map(candidateReviewKey).sort();
  if (new Set(reviewKeys).size !== reviewKeys.length) return false;
  if (JSON.stringify(expectedKeys) !== JSON.stringify(reviewKeys)) return false;
  return review.candidateReviews.every((candidate) => (
    candidate.outcome === "excluded"
    && candidate.reviewedAt === CHECKED_AT
    && candidate.exactModel === true
    && typeof candidate.sourceExcerpt === "string"
    && candidate.sourceExcerpt.trim().length >= 12
    && Number.isInteger(candidate.independentAuthors)
    && candidate.independentAuthors >= 0
    && typeof candidate.specificReason === "string"
    && candidate.specificReason.trim().length >= 20
  ));
}

function representativeSourcesMatchReview(review, product) {
  if (!Array.isArray(review.representativeSources)) return false;
  if (!review.representativeSources.every((source) => (
    source
    && typeof source.platform === "string"
    && source.platform.trim()
    && typeof source.title === "string"
    && source.title.trim()
    && /^https?:\/\//.test(source.url)
  ))) return false;
  if (review.decision === "common_issue") {
    const expected = verifiedIssueById.get(product.id)?.issues.flatMap((issue) => issue.sources) || [];
    return JSON.stringify(review.representativeSources) === JSON.stringify(expected);
  }
  const representativeKeys = review.representativeSources
    .map((source) => candidateReviewKey(source))
    .sort();
  const candidateKeys = review.candidateReviews
    .map(candidateReviewKey)
    .sort();
  return JSON.stringify(representativeKeys) === JSON.stringify(candidateKeys);
}

function reviewedDecision(product, reviewById, searchCheck = { candidates: [] }) {
  const review = reviewById.get(product.id);
  if (!review) return null;
  const identityMatches = review.category === product.category
    && review.brand === product.brand
    && review.model === product.model;
  const platforms = new Set((review.checkedPlatforms || []).map((platform) => String(platform).trim().toLowerCase()).filter(Boolean));
  const queryPlatforms = new Set((review.queries || []).map((query) => String(query.platform || "").trim().toLowerCase()).filter(Boolean));
  const queriesAreExplicit = Array.isArray(review.queries)
    && review.queries.length >= 2
    && review.queries.every((query) => (
      query.platform
      && query.query
      && /^https?:\/\//.test(query.queryUrl)
      && canonicalWebsite(query.targetHost)
      && queryTargetsProduct(query, product)
      && queryTargetsWebsite(query)
      && queryUrlMatchesRecord(query)
    ));
  const queryWebsites = new Set((review.queries || [])
    .map((query) => canonicalWebsite(query.targetHost))
    .filter(Boolean));
  const platformsCoverQueries = [...queryPlatforms].every((platform) => platforms.has(platform));
  const representativePlatforms = new Set((review.representativeSources || [])
    .map((source) => String(source.platform || "").trim().toLowerCase())
    .filter(Boolean));
  const platformsCoverSources = [...representativePlatforms].every((platform) => platforms.has(platform));
  const decisionMatchesEvidence = review.decision === (verifiedIssueById.has(product.id) ? "common_issue" : "no_common_issue");
  const expectedAttestation = review.decision === "common_issue" || review.candidateReviews?.length
    ? "manual_original_pages_reviewed"
    : "manual_cross_site_search_reviewed_no_candidate";
  if (
    !identityMatches
    || review.reviewBatch !== product.category
    || review.reviewedAt !== CHECKED_AT
    || platforms.size < 2
    || queryPlatforms.size < 2
    || queryWebsites.size < 2
    || !queriesAreExplicit
    || !platformsCoverQueries
    || !platformsCoverSources
    || review.attestation !== expectedAttestation
    || typeof review.reviewerNote !== "string"
    || !review.reviewerNote.includes(product.model)
    || typeof review.candidateDisposition !== "string"
    || !review.candidateDisposition.includes(product.model)
    || !Array.isArray(review.representativeSources)
    || !candidateReviewsMatchSearch(review, searchCheck)
    || !representativeSourcesMatchReview(review, product)
    || !decisionMatchesEvidence
  ) return null;
  return review;
}

function researchRow(product, searchCheck, reviewById) {
  const sanitizedSearchCheck = sanitizeSearchCheck(product, searchCheck);
  const review = reviewedDecision(product, reviewById, sanitizedSearchCheck);
  const verifiedIssue = review?.decision === "common_issue" ? verifiedIssueById.get(product.id) : null;
  const issueResearch = verifiedIssue
    || (review?.decision === "no_common_issue" ? noCommonIssueResearch(review) : null);
  return {
    id: product.id,
    category: product.category,
    brand: product.brand,
    model: product.model,
    name: product.name,
    identity: {
      canonicalModel: canonicalModel(product),
      lookupLabel: `${product.brand} ${product.model}`,
      aliases: modelAliases(product),
      evidenceUrl: product.buyUrl,
    },
    workflowStatus: review && issueResearch ? "completed" : "pending_manual_review",
    manualReview: review ? {
      status: "completed",
      decision: review.decision,
      reviewedAt: review.reviewedAt,
      checkedPlatforms: review.checkedPlatforms,
      queries: review.queries,
      candidateDisposition: review.candidateDisposition,
      representativeSources: review.representativeSources,
      candidateReviews: review.candidateReviews,
      reviewerNote: review.reviewerNote,
      attestation: review.attestation,
    } : null,
    issueResearch,
    searchChecks: [sanitizedSearchCheck],
    evidence: evidenceById.get(product.id) || [],
    rejectedCandidates: (review?.candidateReviews || []).map((candidate) => ({
      ...candidate,
      reason: candidate.specificReason,
    })),
  };
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

async function main() {
  const root = path.resolve(__dirname, "..");
  const researchFile = path.join(root, "product_issue_research.json");
  const reviewManifestFile = path.join(root, "product_issue_review_manifest.json");
  const args = parseArgs();
  const { categories, products } = readDashboardProducts(root);
  const reviewManifest = fs.existsSync(reviewManifestFile)
    ? JSON.parse(fs.readFileSync(reviewManifestFile, "utf8"))
    : { results: [] };
  if (reviewManifest.results?.length && reviewManifest.checkedAt !== CHECKED_AT) {
    throw new Error(`Review manifest date ${reviewManifest.checkedAt} does not match ${CHECKED_AT}`);
  }
  if (reviewManifest.methodVersion !== 3) {
    throw new Error("Review manifest must use explicit manual-audit methodVersion 3");
  }
  const reviewById = new Map((reviewManifest.results || []).map((row) => [row.id, row]));
  const reuseExisting = fs.existsSync(researchFile)
    && (args.resume || args.ids || args.category || args.limit || args.rebuildDecisions);
  const existing = reuseExisting
    ? JSON.parse(fs.readFileSync(researchFile, "utf8"))
    : { results: [] };
  const rowById = new Map((existing.results || []).map((row) => [row.id, row]));
  const selected = products
    .filter((product) => !args.category || product.category === args.category)
    .filter((product) => !args.ids || args.ids.has(product.id))
    .filter((product) => args.force || args.ids || args.category || args.rebuildDecisions || !rowById.has(product.id))
    .slice(0, args.limit || products.length);

  if (!args.quiet) {
    console.error(JSON.stringify({ status: "research-start", selected: selected.length, total: products.length }));
  }
  await mapLimit(selected, SEARCH_CONCURRENCY, async (product, index, workerIndex) => {
    const previousSearchCheck = rowById.get(product.id)?.searchChecks?.[0];
    const searchCheck = args.rebuildDecisions && previousSearchCheck
      ? previousSearchCheck
      : await searchProduct(product);
    rowById.set(product.id, researchRow(product, searchCheck, reviewById));
    if (args.write && !args.rebuildDecisions) {
      writeJsonAtomic(researchFile, buildResearchDocument(products, rowById));
    }
    if (!args.quiet) {
      console.error(JSON.stringify({
        worker: workerIndex + 1,
        index: index + 1,
        total: selected.length,
        id: product.id,
        result: searchCheck.result,
        candidates: searchCheck.resultCount,
      }));
    }
  });

  const missing = products.filter((product) => !rowById.has(product.id));
  if (missing.length) {
    throw new Error(`Research incomplete: ${missing.length} products remain (${missing.slice(0, 5).map((product) => product.id).join(", ")})`);
  }

  const research = buildResearchDocument(products, rowById);
  if (args.write) writeJsonAtomic(researchFile, research);

  if (args.apply) {
    const pending = products.filter((product) => rowById.get(product.id)?.workflowStatus !== "completed");
    if (pending.length) {
      throw new Error(`Cannot apply: ${pending.length} products still need manual review (${pending.slice(0, 5).map((product) => product.id).join(", ")})`);
    }
    const productsByCategory = new Map(categories.map((category) => [category.id, []]));
    for (const product of products) {
      const row = rowById.get(product.id);
      productsByCategory.get(product.category).push({ ...product, issueResearch: row.issueResearch });
    }
    for (const category of categories) {
      fs.writeFileSync(
        path.join(root, "products", `${category.id}.js`),
        productFileMarkup(category.id, productsByCategory.get(category.id)),
        "utf8",
      );
    }
  }

  console.log(JSON.stringify({
    status: args.write ? "updated" : "dry-run",
    selected: selected.length,
    total: research.summary.total,
    commonIssueProducts: research.summary.commonIssueProducts,
    commonIssues: research.summary.commonIssues,
    searchUnavailable: research.summary.searchUnavailable,
    pendingManualReview: research.summary.pendingManualReview,
  }, null, 2));
}

module.exports = {
  candidateMatchesExactModel,
  researchRow,
  reviewedDecision,
  sanitizeSearchCheck,
};

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
