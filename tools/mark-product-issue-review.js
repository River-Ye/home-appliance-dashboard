const fs = require("fs");
const path = require("path");
const { readDashboardProducts } = require("./read-dashboard-products");
const { CHECKED_AT, verifiedIssueById } = require("./verified-product-issues");
const {
  canonicalWebsite,
  queryTargetsProduct,
  queryTargetsWebsite,
  queryUrlMatchesRecord,
} = require("./product-issue-validation");

function parseArgs() {
  const args = process.argv.slice(2);
  const inputArg = args.find((arg) => arg.startsWith("--input="));
  return {
    input: inputArg ? inputArg.slice("--input=".length) : null,
    write: args.includes("--write"),
  };
}

function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (_error) {
    return false;
  }
}

function normalizedSet(values) {
  return new Set((values || []).map((value) => String(value).trim().toLowerCase()).filter(Boolean));
}

function validateCandidateReview(candidate, productId) {
  if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) {
    throw new Error(`Invalid candidate review: ${productId}`);
  }
  if (!isHttpUrl(candidate.url) || typeof candidate.title !== "string" || !candidate.title.trim()) {
    throw new Error(`Candidate review requires URL and title: ${productId}`);
  }
  if (candidate.outcome !== "excluded" || candidate.exactModel !== true || candidate.reviewedAt !== CHECKED_AT) {
    throw new Error(`Candidate review requires explicit exclusion, exact model, and review date: ${productId}`);
  }
  if (typeof candidate.sourceExcerpt !== "string" || candidate.sourceExcerpt.trim().length < 12) {
    throw new Error(`Candidate review requires an original-page excerpt: ${productId}`);
  }
  if (!Number.isInteger(candidate.independentAuthors) || candidate.independentAuthors < 0) {
    throw new Error(`Candidate review requires an independent author count: ${productId}`);
  }
  if (typeof candidate.specificReason !== "string" || candidate.specificReason.trim().length < 20) {
    throw new Error(`Candidate review requires a specific exclusion reason: ${productId}`);
  }
}

function validateExplicitReview(review, product) {
  if (!product) throw new Error(`Unknown product in audit batch: ${review.id}`);
  if (review.category !== product.category || review.brand !== product.brand || review.model !== product.model) {
    throw new Error(`Product identity mismatch in audit batch: ${review.id}`);
  }
  if (review.reviewBatch !== product.category) throw new Error(`Review batch mismatch: ${review.id}`);
  if (review.reviewedAt !== CHECKED_AT) throw new Error(`Review date mismatch: ${review.id}`);
  if (!new Set(["common_issue", "no_common_issue"]).has(review.decision)) {
    throw new Error(`Invalid explicit decision: ${review.id}`);
  }
  if (typeof review.reviewerNote !== "string" || !review.reviewerNote.includes(product.model)) {
    throw new Error(`Missing reviewer note: ${review.id}`);
  }
  if (typeof review.candidateDisposition !== "string" || !review.candidateDisposition.includes(product.model)) {
    throw new Error(`Missing candidate disposition: ${review.id}`);
  }
  if (!Array.isArray(review.representativeSources)) {
    throw new Error(`representativeSources must be an array: ${review.id}`);
  }
  if (!Array.isArray(review.candidateReviews)) {
    throw new Error(`candidateReviews must be an array: ${review.id}`);
  }
  review.candidateReviews.forEach((candidate) => validateCandidateReview(candidate, review.id));
  const candidateUrls = new Set(review.candidateReviews.map((candidate) => candidate.url));
  if (candidateUrls.size !== review.candidateReviews.length) {
    throw new Error(`Duplicate candidate review URL: ${review.id}`);
  }
  const expectedAttestation = review.decision === "common_issue" || review.candidateReviews.length
    ? "manual_original_pages_reviewed"
    : "manual_cross_site_search_reviewed_no_candidate";
  if (review.attestation !== expectedAttestation) {
    throw new Error(`Manual review attestation does not match the available original pages: ${review.id}`);
  }

  const platforms = normalizedSet(review.checkedPlatforms);
  if (platforms.size < 2) throw new Error(`At least two explicit checked platforms are required: ${review.id}`);
  if (!Array.isArray(review.queries) || review.queries.length < 2) {
    throw new Error(`At least two explicit exact-model queries are required: ${review.id}`);
  }
  const targetWebsites = new Set();
  for (const query of review.queries) {
    if (!query.platform || !query.query || !isHttpUrl(query.queryUrl) || !canonicalWebsite(query.targetHost)) {
      throw new Error(`Invalid explicit query record: ${review.id}`);
    }
    if (!queryTargetsProduct(query, product) || !queryTargetsWebsite(query) || !queryUrlMatchesRecord(query)) {
      throw new Error(`Query record does not reproduce the exact product query: ${review.id}`);
    }
    targetWebsites.add(canonicalWebsite(query.targetHost));
    if (!platforms.has(String(query.platform).trim().toLowerCase())) {
      throw new Error(`Query platform was not declared as checked: ${review.id}`);
    }
  }
  if (targetWebsites.size < 2) throw new Error(`Exact-model queries must target two independent websites: ${review.id}`);

  for (const source of review.representativeSources) {
    if (!source.platform || !source.title || !isHttpUrl(source.url)) {
      throw new Error(`Invalid representative source: ${review.id}`);
    }
    if (!platforms.has(String(source.platform).trim().toLowerCase())) {
      throw new Error(`Representative source platform was not declared as checked: ${review.id}`);
    }
  }

  const verified = verifiedIssueById.has(review.id);
  if ((review.decision === "common_issue") !== verified) {
    throw new Error(`Explicit decision does not match verified threshold evidence: ${review.id}`);
  }
  if (verified) {
    const expectedSources = verifiedIssueById.get(review.id).issues.flatMap((issue) => issue.sources);
    if (JSON.stringify(review.representativeSources) !== JSON.stringify(expectedSources)) {
      throw new Error(`Representative sources do not match verified threshold evidence: ${review.id}`);
    }
  } else {
    const sourceKeys = review.representativeSources.map((source) => `${source.url}\n${source.title}`).sort();
    const candidateKeys = review.candidateReviews.map((candidate) => `${candidate.url}\n${candidate.title}`).sort();
    if (JSON.stringify(sourceKeys) !== JSON.stringify(candidateKeys)) {
      throw new Error(`No-common representative sources must match candidate reviews: ${review.id}`);
    }
  }
}

function main() {
  const root = path.resolve(__dirname, "..");
  const manifestFile = path.join(root, "product_issue_review_manifest.json");
  const args = parseArgs();
  if (!args.input) {
    throw new Error("Provide --input=<explicit-audit-batch.json>; category/id auto-attestation is not supported");
  }

  const inputFile = path.resolve(process.cwd(), args.input);
  const batch = JSON.parse(fs.readFileSync(inputFile, "utf8"));
  const reviews = batch.reviews || batch.results;
  if (batch.checkedAt !== CHECKED_AT || !Array.isArray(reviews) || !reviews.length) {
    throw new Error("Audit batch requires checkedAt and explicit reviews/results");
  }

  const { products } = readDashboardProducts(root);
  const productById = new Map(products.map((product) => [product.id, product]));
  const batchIds = new Set();
  for (const review of reviews) {
    if (batchIds.has(review.id)) throw new Error(`Duplicate product in audit batch: ${review.id}`);
    batchIds.add(review.id);
    validateExplicitReview(review, productById.get(review.id));
  }

  const existing = fs.existsSync(manifestFile)
    ? JSON.parse(fs.readFileSync(manifestFile, "utf8"))
    : { checkedAt: CHECKED_AT, methodVersion: 3, results: [] };
  if (existing.checkedAt !== CHECKED_AT) {
    throw new Error(`Review manifest date ${existing.checkedAt} does not match ${CHECKED_AT}`);
  }

  const byId = new Map((existing.results || []).map((row) => [row.id, row]));
  for (const review of reviews) byId.set(review.id, review);
  const productOrder = new Map(products.map((product, index) => [product.id, index]));
  const manifest = {
    checkedAt: CHECKED_AT,
    methodVersion: 3,
    policy: "每筆決策須保存 exact-model 跨站查詢與人工 attestation；每個搜尋候選須逐頁保存摘要、獨立作者數與具體排除理由，研究工具不得自行生成拒絕結論。",
    results: [...byId.values()].sort((left, right) => productOrder.get(left.id) - productOrder.get(right.id)),
  };

  if (args.write) fs.writeFileSync(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({
    status: args.write ? "updated" : "dry-run",
    explicitReviews: reviews.length,
    reviewed: manifest.results.length,
    total: products.length,
  }, null, 2));
}

module.exports = {
  validateExplicitReview,
};

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
