const fs = require("fs");
const path = require("path");
const {
  EXPECTED_CATEGORY_COUNT,
  EXPECTED_PRODUCT_COUNT,
  MIN_PRODUCTS_PER_CATEGORY,
  EXPECTED_CATEGORY_PRODUCT_COUNTS,
  DATE_PATTERN,
  WASHER_DRYER_CAPACITY_PATTERN,
  DIMENSION_CATEGORY_COUNTS,
  DIMENSION_CATEGORIES,
  EXPECTED_DIMENSION_PRODUCT_COUNT,
  NEW_DIMENSION_CATEGORIES,
  dimensionPatternForCategory,
  DIMENSION_CONFIDENCE_VALUES,
  WEIGHT_CATEGORY_COUNTS,
  WEIGHT_CATEGORIES,
  EXPECTED_WEIGHT_PRODUCT_COUNT,
  weightPatternForCategory,
  PERIPHERAL_TYPES,
  PERIPHERAL_BUDGET_COUNTS,
  PERIPHERAL_SPEC_PREFIXES,
  BEDDING_TYPES,
  BEDDING_BUDGET_COUNTS,
  BEDDING_SPEC_PREFIXES,
  POSITIVE_MEASUREMENT_VALUE_PATTERN,
  WEIGHT_CONFIDENCE_VALUES,
  HISTORICAL_LOW_STATUSES,
  HISTORICAL_LOW_SOURCE_KINDS,
  HISTORICAL_LOW_CONFIDENCE_VALUES,
  PRICE_BASIS_VALUES,
  INSTALLATION_STATUS_VALUES,
  AIRCON_TYPE_COUNTS,
  AIRCON_CAPACITY_BAND_COUNTS,
  AIRCON_CAPACITY_BAND_LIMITS,
  WATERHEATER_TYPE_COUNTS,
  WATERHEATER_ELECTRIC_SUBTYPE_COUNTS,
  NETWORK_SWITCH_TYPE_MIN_COUNTS,
  NETWORK_SWITCH_MANAGEMENT_VALUES,
  NETWORK_SWITCH_COOLING_VALUES,
  NETWORK_SWITCH_TOP_PICK_MODEL,
  NETWORK_SWITCH_SPEC_PREFIXES,
  MONITOR_LIGHT_SPEC_PREFIXES,
  AIRCON_SPEC_PREFIXES,
  WATERHEATER_SPEC_PREFIXES,
  JAPANESE_BRAND_ROSTER,
  JAPANESE_BRAND_REVIEW_STATUSES,
  REQUIRED_CATEGORY_TERMS,
  CATEGORY_TEXT_MATCH_COUNTS,
  REQUIRED_FIELDS,
  GARMENTCARE_MODELS,
  GARMENTCARE_BRAND_COUNTS,
  GARMENTCARE_CHANNEL_COUNTS,
  GARMENTCARE_SPEC_PREFIXES,
  GARMENTCARE_TOP_PICK_MODEL,
  COFFEE_TYPE_COUNTS,
  COFFEE_BUDGET_COUNTS,
  COFFEE_TYPE_BUDGET_COUNT,
  COFFEE_SEMI_AUTO_GRINDER_COUNTS,
  COFFEE_MIN_BRAND_COUNT,
  COFFEE_MAX_PRODUCTS_PER_BRAND,
  COFFEE_SPEC_PREFIXES,
  COFFEE_RECOMMENDATION_TAGS,
  COFFEE_EXCLUDED_NAME_TERMS,
} = require("./dashboard-contract");
const { readDashboardProducts } = require("./read-dashboard-products");
const {
  hasCompleteCompositeSystemIdentityAndPrice,
  hasOfficialSuggestedPriceSource,
  isExcludedListing,
  normalizeIdentity,
} = require("./catalog-maintenance-policy");
const {
  buildJapaneseBrandReview,
  hasTaiwanCompatiblePower,
} = require("./japanese-brand-audit");
const { carriedCategoryReviewMatchesCatalog } = require("./run-daily-catalog-maintenance");
const { validateExplicitReview } = require("./mark-product-issue-review");
const {
  canonicalWebsite,
  queryTargetsProduct,
  queryTargetsWebsite,
  queryUrlMatchesRecord,
  reviewedCandidateKeySet,
} = require("./product-issue-validation");
const { canonicalModel } = require("./research-product-issues");
const { CHECKED_AT, verifiedIssueById } = require("./verified-product-issues");
const {
  ADDED_PRODUCTS_SCOPE, assertIncrementalBaselinePreserved, loadIncrementalBaseline, readEvidenceDocuments, resolveIssueEvidenceDate,
} = require("./incremental-catalog-audit");

const ISSUE_RESEARCH_STATUSES = new Set(["common_issue", "no_common_issue"]);
const ISSUE_RESEARCH_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const NO_COMMON_ISSUE_SUMMARY = "截至查核日，查無達門檻的集中負評／災情";
const BEDDING_TYPE_PATTERNS = {
  bedsheet: {
    cotton: /棉/u,
    lyocell: /萊賽爾|天絲/iu,
    linen: /亞麻|linen/iu,
    synthetic: /化纖|聚酯|尼龍|聚乙烯|synthetic/iu,
    other_natural: /竹纖維|莫代爾|modal|bamboo|hemp/iu,
  },
  comforter: {
    cotton: /棉/u,
    down: /羽絨|羽毛|鴨絨|鴨毛|鵝絨|鵝毛|down|feather/iu,
    synthetic: /化纖|聚酯|科技蠶絲|超細纖維|樹脂纖維|synthetic/iu,
    wool: /羊毛|wool/iu,
    silk: /(?<!科技)蠶絲|silk/iu,
  },
  pillow: {
    latex: /乳膠|latex/iu,
    memory_foam: /記憶|感溫|泡棉|黑鑽石棉|支撐棉|hypergel|memory foam/iu,
    down: /羽絨|羽毛|鴨絨|鴨毛|鵝絨|鵝毛|down|feather/iu,
    fiber: /纖維|聚酯|fiber/iu,
    hybrid: /混合|複合|airgrid|網格/iu,
  },
};
const NETWORK_SWITCH_OFFICIAL_DOMAINS = new Map([
  ["D-Link", ["dlink.com"]],
  ["TP-Link", ["tp-link.com"]],
  ["Mercusys", ["mercusys.com"]],
  ["Zyxel", ["zyxel.com"]],
  ["NETGEAR", ["netgear.com"]],
  ["QNAP", ["qnap.com"]],
]);
const REQUESTED_MODELS = new Set(["R-HW620YJ", "LEGEE-Q10 PRO", "LEGEE-Q10PRO", "NA-V170RPH-K", "AQ928"]);
const JAPANESE_GAP_MODELS = new Set([
  "SDM-27U9M2",
  "TS-27GF40CTK",
  "SC-HTB334GTK",
  "F-P60PH",
  "MX-HG4401",
  "PV-XH4P",
  "SF-170ZHV",
  "MR-WX53C",
  "R12A-DA",
  "JP33ASCT-W",
  "MC655ASCT",
  "RDT-90-TR-W",
  "RBO-MN22(WH)",
  "RWP-H300",
  "RKW-601C-SV-TR",
]);

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

function beddingFamilyIdentity(value) {
  return compactIdentity(String(value || "")
    .replace(/\b(?:series|collection|fitted sheet|sheet|comforter|duvet|pillow|white|black|gray|grey|blue|pink|red|green|yellow|beige|brown|purple|orange)\b/giu, " ")
    .replace(/天絲|萊賽爾|涼感|床包|棉被|枕頭|系列|花色|圖案|白色|黑色|灰色|藍色|粉色|紅色|綠色|黃色|米色|棕色|紫色|橘色|卡其色/gu, " "));
}

function measurementEvidenceSupportsSpec(spec, evidenceSnippet) {
  const [field = "", ...valueParts] = String(spec || "").split("：");
  const recorded = valueParts.join("：").trim();
  const evidence = String(evidenceSnippet || "");
  const fieldPattern = {
    尺寸: /尺寸|長\s*\d.*寬\s*\d|寬\s*\d.*(?:長|深)\s*\d/u,
    可包覆高度: /包覆.*高度|床墊.*(?:厚度|高度)/u,
    填充重量: /填充(?:物)?.{0,4}(?:重量|重)/u,
    重量: /淨重|本體重量|產品總重|商品重量|整件重量|(?:^|[，,\s])重量[：:]/u,
  }[field];
  if (!fieldPattern || !recorded) return false;
  const missingPattern = /查不到|未標示|未找到|未提供|未列|未明示|無法確認|沒有/u;
  const segments = evidence.split(/[；;。!?]/u);
  if (/^(?:查不到|未標示)$/u.test(recorded)) {
    return segments.some((segment) => fieldPattern.test(segment) && missingPattern.test(segment));
  }
  const evidenceKey = compactIdentity(evidence);
  const valueKey = compactIdentity(recorded);
  if (field === "尺寸") return evidenceKey.includes(valueKey);
  if (field === "可包覆高度" || field === "填充重量") {
    return evidenceKey.includes(compactIdentity(spec));
  }
  const specKey = compactIdentity(spec);
  for (let index = evidenceKey.indexOf(specKey); index >= 0; index = evidenceKey.indexOf(specKey, index + 1)) {
    if (!/填充(?:物)?$/u.test(evidenceKey.slice(Math.max(0, index - 4), index))) return true;
  }
  return segments.some((segment) => {
    if (!fieldPattern.test(segment)) return false;
    if (/填充(?:物)?.{0,4}(?:重量|重)/u.test(segment) && !/淨重|本體重量|產品總重|商品重量|整件重量/u.test(segment)) return false;
    return !missingPattern.test(segment) && compactIdentity(segment).includes(valueKey);
  });
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

function readResearchDocument(root, file, failures, documents) {
  const document = documents
    ? documents[file]
    : fs.existsSync(path.join(root, file)) ? JSON.parse(fs.readFileSync(path.join(root, file), "utf8")) : null;
  assert(document && typeof document === "object" && !Array.isArray(document), `${file} is missing or invalid`, failures);
  return document;
}

function isHttpUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch (_error) {
    return false;
  }
}

function isOfficialNetworkSwitchSpecSource(product) {
  try {
    const parsed = new URL(product.switchProfile?.specSourceUrl);
    const domains = NETWORK_SWITCH_OFFICIAL_DOMAINS.get(product.brand) || [];
    return parsed.protocol === "https:"
      && domains.some((domain) => parsed.hostname === domain || parsed.hostname.endsWith(`.${domain}`));
  } catch (_error) {
    return false;
  }
}

function isSearchDiscoveryUrl(value) {
  try {
    const parsed = new URL(value);
    const hostname = parsed.hostname.replace(/^www\./, "");
    return /(^|\.)google\.[a-z.]+$/i.test(hostname)
      || hostname === "bing.com"
      || hostname.endsWith(".bing.com")
      || hostname === "search.yahoo.com"
      || hostname.endsWith(".search.yahoo.com")
      || hostname === "duckduckgo.com"
      || hostname.endsWith(".duckduckgo.com");
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
  assert(typeof candidate.platform === "string" && candidate.platform.trim(), `${prefix} requires platform`, failures);
  assert(candidate.outcome === "excluded", `${prefix} outcome must be excluded`, failures);
  assert(
    ISSUE_RESEARCH_DATE_PATTERN.test(String(candidate.reviewedAt || "")) && candidate.reviewedAt <= checkedAt,
    `${prefix} reviewedAt must not exceed the product review date`,
    failures,
  );
  assert(typeof candidate.exactModel === "boolean", `${prefix} must explicitly record whether the model matches`, failures);
  assert(typeof candidate.sourceExcerpt === "string" && candidate.sourceExcerpt.trim().length >= 12, `${prefix} requires a specific original-page excerpt`, failures);
  assert(Number.isInteger(candidate.independentAuthors) && candidate.independentAuthors >= 0, `${prefix} requires an independent author count`, failures);
  assert(typeof candidate.specificReason === "string" && candidate.specificReason.trim().length >= 20, `${prefix} requires a specific exclusion reason`, failures);
  assert(
    !String(candidate.sourceExcerpt || "").includes("討論群組 小惡魔市集"),
    `${prefix} sourceExcerpt must be a reviewer-written trace, not a copied page header/navigation block`,
    failures,
  );
  assert(
    candidate.specificReason !== "候選標題或 URL 含完全相同型號，但人工回看原始頁後未形成 6 位獨立使用者且跨 2 個網站的同一問題；搜尋結果本身不計人數。",
    `${prefix} must not use the former generated rejection reason`,
    failures,
  );
  assert(
    !/^Original page review for .* did not establish six deduplicated first-person reporters for one same problem across two independent original websites\.$/.test(candidate.specificReason),
    `${prefix} must not use the generic English threshold template`,
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
  const excludedConditionPattern = /B品|福利品|展示品|展示機|展品出清|拆封|整新|箱損|瑕疵|二手/i;
  const uncertainIdentityPattern = /\bequivalent\b|regional SKU may differ|\bclass\b|does not explicitly call it (?:an? )?all-time low/i;
  assert(low && typeof low === "object" && !Array.isArray(low), `${product.id} historicalLow must be an object`, failures);
  if (!low || typeof low !== "object" || Array.isArray(low)) return;

  assert(HISTORICAL_LOW_STATUSES.has(low.status), `${product.id} historicalLow has invalid status: ${low.status}`, failures);
  assert(HISTORICAL_LOW_SOURCE_KINDS.has(low.sourceKind), `${product.id} historicalLow has invalid sourceKind: ${low.sourceKind}`, failures);
  assert(HISTORICAL_LOW_CONFIDENCE_VALUES.has(low.confidence), `${product.id} historicalLow has invalid confidence: ${low.confidence}`, failures);
  assert(low.checkedAt, `${product.id} historicalLow requires checkedAt`, failures);
  assert(low.currency, `${product.id} historicalLow requires currency`, failures);
  assert(typeof low.note === "string" && low.note.trim(), `${product.id} historicalLow requires note`, failures);

  if (low.status === "found") {
    const productVariantText = [product.name, ...(product.specs || [])].join(" ");
    assert(typeof low.amount === "number" && low.amount > 0, `${product.id} found historicalLow requires positive amount`, failures);
    assert(typeof low.converted === "number" && low.converted > 0, `${product.id} found historicalLow requires positive converted`, failures);
    assert(low.sourceUrl && /^https?:\/\//.test(low.sourceUrl), `${product.id} found historicalLow requires sourceUrl`, failures);
    assert(low.sourceTitle, `${product.id} found historicalLow requires sourceTitle`, failures);
    assert(low.evidenceSnippet, `${product.id} found historicalLow requires evidenceSnippet`, failures);
    assert(low.sourceKind !== "not_found", `${product.id} found historicalLow cannot use not_found sourceKind`, failures);
    assert(low.confidence !== "not_found", `${product.id} found historicalLow cannot use not_found confidence`, failures);
    assert(
      !excludedConditionPattern.test(low.sourceTitle),
      `${product.id} found historicalLow sourceTitle contains an excluded product condition`,
      failures,
    );
    assert(
      !uncertainIdentityPattern.test(low.note),
      `${product.id} found historicalLow note admits an inexact identity or unverified historical-low claim`,
      failures,
    );
    if (product.category === "tv" && [product.name, ...(product.specs || [])].join(" ").includes("聲霸")) {
      assert(
        low.sourceTitle.includes("聲霸") || low.evidenceSnippet.includes("聲霸"),
        `${product.id} found historicalLow does not match the catalog soundbar bundle`,
        failures,
      );
    }
    for (const marker of ["單柄單耳", "雙耳", "低身"]) {
      if (productVariantText.includes(marker)) {
        assert(
          low.sourceTitle.includes(marker) || low.evidenceSnippet.includes(marker),
          `${product.id} found historicalLow does not preserve the ${marker} variant`,
          failures,
        );
      }
    }
    if (low.sourceTitle.includes("蒸鮮鍋") && !productVariantText.includes("蒸鮮鍋")) {
      failures.push(`${product.id} found historicalLow adds a cookware bundle absent from the catalog product`);
    }
    if (product.brand === "Panasonic") {
      assert(
        /Panasonic|國際牌/i.test(`${low.sourceTitle} ${low.evidenceSnippet}`),
        `${product.id} found historicalLow does not prove the Panasonic brand identity`,
        failures,
      );
    }
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

function validateHistoricalPriceChecks(product, row, failures) {
  const checks = Array.isArray(row.priceChecks) ? row.priceChecks : [];
  const allowedKinds = new Set([
    "official_price",
    "retailer_price",
    "price_comparison",
    "price_history",
    "search_query",
  ]);
  const discoveryKinds = new Set(["price_comparison", "price_history", "search_query"]);
  const productModel = compactIdentity(product.model);

  assert(checks.length >= 2, `${product.id} historical price research requires at least two structured price checks`, failures);
  const urls = [];
  for (const [index, check] of checks.entries()) {
    const prefix = `${product.id} historical priceChecks[${index}]`;
    assert(check && typeof check === "object" && !Array.isArray(check), `${prefix} must be an object`, failures);
    if (!check || typeof check !== "object" || Array.isArray(check)) continue;

    assert(allowedKinds.has(check.kind), `${prefix} has invalid kind: ${check.kind}`, failures);
    assert(isHttpUrl(check.url), `${prefix} requires a valid http(s) URL`, failures);
    assert(
      productModel && compactIdentity(check.query).includes(productModel),
      `${prefix} query must preserve exact model ${product.model}`,
      failures,
    );
    assert(typeof check.outcome === "string" && check.outcome.trim(), `${prefix} requires an explicit outcome`, failures);
    urls.push(check.url);
  }

  assert(new Set(urls).size === urls.length, `${product.id} historical price check URLs must be unique`, failures);
  assert(
    new Set(urls.map((url) => canonicalWebsite(url))).size >= 2,
    `${product.id} historical price checks must cover at least two websites`,
    failures,
  );
  assert(
    checks.some((check) => discoveryKinds.has(check?.kind)),
    `${product.id} historical price checks require a price-comparison, price-history, or exact-model search record`,
    failures,
  );

  const checkedSources = Array.isArray(row.checkedSources) ? row.checkedSources : [];
  assert(
    JSON.stringify(checkedSources) === JSON.stringify(urls),
    `${product.id} historical checkedSources must mirror structured priceChecks URLs`,
    failures,
  );

  if (product.historicalLow.status === "found") {
    const acceptedCheck = checks.find((check) => (
      check?.url === product.historicalLow.sourceUrl
      && /^(採用|accepted)[：:]/i.test(String(check.outcome || "").trim())
    ));
    assert(acceptedCheck, `${product.id} found historical low requires an accepted structured source check`, failures);
    const outcomeDigits = String(acceptedCheck?.outcome || "").replace(/\D/g, "");
    assert(
      outcomeDigits.includes(String(product.historicalLow.amount)),
      `${product.id} accepted historical price check must retain the adopted amount`,
      failures,
    );
  } else {
    assert(
      checks.every((check) => !/^(採用|accepted)[：:]/i.test(String(check?.outcome || "").trim())),
      `${product.id} not_found historical price checks cannot contain an accepted source`,
      failures,
    );
  }
}

function validateOrderedSpecPrefixes(product, prefixes, failures) {
  let previousIndex = -1;
  for (const prefix of prefixes) {
    const indexes = product.specs
      .map((spec, index) => String(spec).startsWith(prefix) ? index : -1)
      .filter((index) => index >= 0);
    assert(indexes.length === 1, `${product.id} must include exactly one ${prefix} spec`, failures);
    if (indexes.length !== 1) continue;
    assert(indexes[0] > previousIndex, `${product.id} specs must keep ${prefix} in the required order`, failures);
    previousIndex = indexes[0];
  }
}

function validateMonitorLightProduct(product, failures) {
  if (product.category !== "monitor-light") return;
  validateOrderedSpecPrefixes(product, MONITOR_LIGHT_SPEC_PREFIXES, failures);
  const compatibility = product.specs.find((spec) => spec.startsWith("安裝相容性：")) || "";
  assert(/夾具厚度/.test(compatibility) && /曲面/.test(compatibility), `${product.id} monitor-light must disclose clamp thickness and curved-screen compatibility`, failures);
  if (!product.topPick) return;
  assert(product.channel === "tw", `${product.id} monitor-light Top Pick requires a Taiwan channel`, failures);
  assert(/夾具厚度[^；]*\d+(?:\.\d+)?\s*(?:[-–—~～]|至)\s*\d+(?:\.\d+)?\s*(?:mm|cm)/iu.test(compatibility), `${product.id} monitor-light Top Pick requires an explicit clamp-thickness range`, failures);
  assert(/曲面[^；]*(?:支援|不支援|適用|不適用)/u.test(compatibility) && !/未標示|未確認|查不到|未知|待確認/u.test(compatibility), `${product.id} monitor-light Top Pick requires confirmed curved-screen compatibility`, failures);
  assert(hasTaiwanCompatiblePower(product), `${product.id} monitor-light Top Pick requires rated Taiwan-compatible power`, failures);
  assert(/台灣|公司貨/u.test(product.warranty || ""), `${product.id} monitor-light Top Pick requires Taiwan after-sales warranty`, failures);
}

function validatePeripheralProduct(product, failures) {
  const types = PERIPHERAL_TYPES[product.category];
  if (!types) return;
  assert(types.includes(product.type), `${product.id} has invalid peripheral type: ${product.type}`, failures);
  const listing = `${product.model || ""} ${product.name || ""}`;
  assert(!isExcludedListing(listing), `${product.id} must be a new complete peripheral, not an excluded listing`, failures);
  assert(!/裸(?:套|軸|板)|\bbare[ -]?bones?\b|\b(?:touchpad|trackpad|numpad)\b|獨立數字鍵盤|單(?:獨|售)(?:鍵帽|軸體)|替換(?:腳貼|鍵帽|軸體)|(?:鍵帽|軸體)(?:組|套裝)$/iu.test(listing), `${product.id} must be a complete mouse, keyboard or mousepad, not a kit or separate input accessory`, failures);
  validateOrderedSpecPrefixes(product, PERIPHERAL_SPEC_PREFIXES[product.category], failures);
  if (["keyboard", "mousepad"].includes(product.category)) {
    assert(typeof product.variantFamily === "string" && product.variantFamily.trim(), `${product.id} requires variantFamily`, failures);
  }
  if (product.category === "mousepad") {
    const thickness = product.specs.find((spec) => spec.startsWith("厚度：")) || "";
    assert(/^厚度：(查不到|(?:約 )?\d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? mm)$/u.test(thickness), `${product.id} requires explicit thickness in mm or 查不到`, failures);
  }
  if (product.topPick) {
    assert(product.channel === "tw", `${product.id} peripheral Top Pick requires a Taiwan channel`, failures);
    assert(/台灣|公司貨/u.test(product.warranty || ""), `${product.id} peripheral Top Pick requires Taiwan after-sales warranty`, failures);
    assert(!/無(?:台灣)?保固|不提供保固|no warranty/iu.test(product.warranty || ""), `${product.id} peripheral Top Pick cannot have no warranty`, failures);
    assert(hasTaiwanCompatiblePower(product), `${product.id} peripheral Top Pick requires confirmed power or a non-electric product`, failures);
  }
}

function validatePeripheralCatalog(products, failures) {
  for (const [category, types] of Object.entries(PERIPHERAL_TYPES)) {
    const items = products.filter((product) => product.category === category);
    if (!items.length) continue;
    assert(items.length === 30, `${category} must contain 30 products`, failures);
    for (const [budget, count] of PERIPHERAL_BUDGET_COUNTS) {
      assert(items.filter((product) => product.budget === budget).length === count, `${category} budget ${budget} must contain ${count} products`, failures);
    }
    for (const type of types) {
      assert(items.some((product) => product.type === type), `${category} must cover type ${type}`, failures);
    }
    assert(items.filter((product) => product.topPick).length === 1, `${category} must have exactly one Top Pick`, failures);
    for (const tag of ["辦公推薦", "電競推薦"]) {
      assert(items.some((product) => product.tags?.includes(tag)), `${category} must include ${tag}`, failures);
    }
    if (category === "mouse") continue;
    const families = new Map();
    for (const product of items) {
      const key = `${normalize(product.brand)}||${normalize(product.variantFamily)}`;
      const family = families.get(key) || [];
      family.push(product);
      families.set(key, family);
    }
    for (const [family, variants] of families) {
      assert(variants.length <= 3, `${category} ${family} must have at most 3 variants`, failures);
      const prefix = category === "keyboard" ? "軸體：" : "尺寸：";
      const identities = variants.map((product) => {
        const spec = product.specs.find((value) => value.startsWith(prefix)) || "";
        // The first segment is the full switch identity; extra specifications do not create a variant.
        if (category === "keyboard") return normalize(spec.slice(prefix.length).split(/[；;]/u)[0]);
        if (variants.length === 1) return normalize(spec);
        // Separate thickness cannot make another size variant; orientation cannot either.
        const planar = /^尺寸：[長寬深高] (\d+(?:\.\d+)?) x [長寬深高] (\d+(?:\.\d+)?) mm$/u.exec(spec);
        assert(planar, `${product.id} size variants require two explicit planar dimensions; record thickness separately`, failures);
        return planar ? planar.slice(1).map(Number).sort((a, b) => a - b).join("x") : normalize(spec);
      });
      assert(new Set(identities).size === identities.length, `${category} ${family} contains a duplicate variant (${prefix})`, failures);
      if (variants.length > 1) assert(identities.every((identity) => identity && !/查不到|未標示/u.test(identity)), `${category} ${family} variants require explicit ${prefix}`, failures);
    }
  }
}

function validateBeddingProduct(product, failures) {
  const types = BEDDING_TYPES[product.category];
  if (!types) return;
  assert(types.includes(product.type), `${product.id} has invalid bedding type: ${product.type}`, failures);
  assert(typeof product.variantFamily === "string" && product.variantFamily.trim(), `${product.id} requires variantFamily`, failures);
  validateOrderedSpecPrefixes(product, BEDDING_SPEC_PREFIXES[product.category], failures);
  const visibleTypeSpec = product.specs.find((spec) => spec.startsWith("類型：")) || "";
  const materialSpecPrefix = {
    bedsheet: "材質：",
    comforter: "填充材質：",
    pillow: "填充／核心材質：",
  }[product.category];
  const materialSpec = product.specs.find((spec) => spec.startsWith(materialSpecPrefix)) || "";
  const typePatterns = BEDDING_TYPE_PATTERNS[product.category];
  const detectedVisibleTypes = Object.entries(typePatterns)
    .filter(([, pattern]) => pattern.test(visibleTypeSpec))
    .map(([type]) => type);
  assert(
    (!detectedVisibleTypes.length || detectedVisibleTypes.includes(product.type))
      && typePatterns[product.type].test(materialSpec),
    `${product.id} type spec contradicts bedding type ${product.type}`,
    failures,
  );
  const listing = `${product.model || ""} ${product.name || ""}`;
  const excluded = {
    bedsheet: /被套|床罩|保潔墊|四件套|寢具(?:大)?套組|\b(?:duvet cover|mattress (?:protector|pad|topper)|bedspread|bed cover|flat sheet|sheet set)\b/iu,
    comforter: /被套|毛毯|電熱毯|涼感薄毯|涼被|\b(?:duvet cover|blanket|throw|electric blanket|heated blanket|cooling blanket)\b/iu,
    pillow: /抱枕|長枕|長版|旅行(?:頸|脖)枕|嬰幼兒枕|嬰兒枕|兒童枕|枕套|替換填充|\b(?:travel (?:neck|cervical) pillow|(?:neck|cervical) travel pillow|u[- ]?shaped (?:neck )?pillow|body pillow|bolster pillow|baby pillow|infant pillow|toddler pillow|kids? pillow|pillow ?case)\b/iu,
  }[product.category];
  assert(!isExcludedListing(listing) && !excluded.test(listing), `${product.id} is outside the approved bedding scope`, failures);
  const combination = (product.specs.find((spec) => spec.startsWith("組合內容：")) || "")
    .replace(/不含[^；。]*/gu, "")
    .replace(/[；;。]+$/u, "")
    .trim();
  const bedsheetContents = combination.replace(/^組合內容：/u, "");
  const excludedCombination = product.category === "bedsheet"
    ? !/^(?:伸縮)?床包(?:\s*\d+\s*件)?(?:\s*[＋+、，,]\s*枕套(?:\s*\d+\s*件)?)*$/u.test(bedsheetContents)
    : product.category === "comforter"
      ? /被套|毛毯|電熱毯|涼感薄毯/iu.test(combination)
        || (/涼被/u.test(combination) && !/暖被|冬被|四季/u.test(combination))
      : false;
  assert(!excludedCombination, `${product.id} is outside the approved bedding scope`, failures);

  if (product.category === "bedsheet") {
    const height = product.specs.find((spec) => spec.startsWith("可包覆高度：")) || "";
    assert(new RegExp(`^可包覆高度：(查不到|(?:約 )?${POSITIVE_MEASUREMENT_VALUE_PATTERN} cm)$`, "u").test(height), `${product.id} requires mattress pocket height in cm or 查不到`, failures);
  }
  if (product.category === "comforter") {
    const fillWeight = product.specs.find((spec) => spec.startsWith("填充重量：")) || "";
    const fillWeightSegment = `(?:[^；]+ )?(?:約 )?${POSITIVE_MEASUREMENT_VALUE_PATTERN} (?:g|kg)`;
    assert(new RegExp(`^填充重量：(查不到|${fillWeightSegment}(?:；${fillWeightSegment})*)$`, "u").test(fillWeight), `${product.id} requires fill weight or 查不到`, failures);
    assert(!/包裝|外箱|毛重|shipping|gross/iu.test(fillWeight), `${product.id} fill weight cannot use packaging or gross weight`, failures);
  }
  if (product.topPick) {
    const warranty = String(product.warranty || "");
    assert(product.channel === "tw", `${product.id} bedding Top Pick requires a Taiwan channel`, failures);
    assert(/台灣官方[^；。]*(?:\d+\s*年保固|售後|客服|門市|退換)|台灣(?:客服|門市|售後)|公司貨[^；。]*(?:保固|售後|客服)/u.test(warranty), `${product.id} bedding Top Pick requires a concrete Taiwan after-sales channel`, failures);
    assert(!/無(?:台灣)?保固|不提供保固|no warranty|(?:保固|售後)[^；。]{0,10}未標示/iu.test(warranty), `${product.id} bedding Top Pick cannot have no warranty`, failures);
    assert(hasTaiwanCompatiblePower(product), `${product.id} bedding Top Pick requires a non-electric or Taiwan-compatible power statement`, failures);
  }
}

function beddingPlanarVariantIdentity(product) {
  const dimension = product.specs.find((value) => value.startsWith("尺寸：")) || "";
  const axes = new Map([...dimension.matchAll(/([長寬深高]) (\d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)?)/gu)]
    .map(([, axis, value]) => [axis, value]));
  const planar = [axes.get("寬"), axes.get("長") || axes.get("深")];
  return planar.every(Boolean)
    ? planar.map((value) => normalize(value)).sort((left, right) => Number.parseFloat(left) - Number.parseFloat(right)).join("x")
    : "";
}

function pillowVariantIdentity(product) {
  const heightSpec = product.specs.find((value) => value.startsWith("高度／軟硬度：")) || "";
  const primary = heightSpec.slice("高度／軟硬度：".length).split(/[；;]/u)[0];
  const measurements = [...primary.matchAll(/\d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)?\s*cm/giu)]
    .map(([value]) => normalize(value));
  const descriptors = primary.match(/\b(?:extra small|small|medium|large|queen [smlx]+|xs|s|m|l|low|high|soft|firm)\b|低枕|高枕|偏軟|偏硬|適中|中等|柔軟|硬度可調|軟硬可調|可調支撐/giu) || [];
  return [...measurements, ...descriptors.map(normalize)].join("|");
}

function validateBeddingCatalog(products, failures) {
  const recommendationTags = {
    bedsheet: ["涼爽推薦", "親膚推薦"],
    comforter: ["四季推薦", "冬季保暖推薦"],
    pillow: ["仰睡推薦", "側睡推薦"],
  };
  for (const [category, types] of Object.entries(BEDDING_TYPES)) {
    const items = products.filter((product) => product.category === category);
    if (!items.length) continue;
    assert(items.length === 30, `${category} must contain 30 products`, failures);
    for (const [budget, count] of BEDDING_BUDGET_COUNTS) {
      assert(items.filter((product) => product.budget === budget).length === count, `${category} budget ${budget} must contain ${count} products`, failures);
    }
    for (const type of types) {
      assert(items.some((product) => product.type === type), `${category} must cover type ${type}`, failures);
    }
    assert(items.filter((product) => product.topPick).length === 1, `${category} must have exactly one Top Pick`, failures);
    for (const tag of recommendationTags[category]) {
      assert(items.some((product) => product.tags?.includes(tag)), `${category} must include ${tag}`, failures);
    }

    const families = new Map();
    for (const product of items) {
      const key = `${compactIdentity(product.brand)}||${beddingFamilyIdentity(product.variantFamily)}`;
      const variants = families.get(key) || [];
      variants.push(product);
      families.set(key, variants);
    }
    for (const [family, variants] of families) {
      assert(variants.length <= 3, `${category} ${family} must have at most 3 variants`, failures);
      const prefix = category === "pillow" ? "高度／軟硬度：" : "尺寸：";
      const identities = variants.map((product) => (
        category === "pillow" ? pillowVariantIdentity(product) : beddingPlanarVariantIdentity(product)
      ));
      assert(new Set(identities).size === identities.length, `${category} ${family} contains a duplicate ${prefix} variant`, failures);
      if (variants.length > 1) assert(identities.every((identity) => identity && !/查不到|未標示/u.test(identity)), `${category} ${family} variants require explicit ${prefix}`, failures);
    }
  }
}

function measurementSegments(value) {
  return String(value || "")
    .split("；")
    .map((segment) => segment.trim())
    .filter(Boolean);
}

function hasDistinctLabeledMeasurements(value, labels, valuePattern) {
  const segments = measurementSegments(value);
  const indexes = labels.map((label) => segments
    .map((segment, index) => (segment.includes(label) && valuePattern.test(segment) ? index : -1))
    .filter((index) => index >= 0));
  return indexes.every((matches) => matches.length === 1)
    && new Set(indexes.map(([index]) => index)).size === labels.length;
}

function visibleRoomSizeUpperBound(value) {
  const text = String(value || "").trim();
  const bounded = text.match(/^(\d+(?:\.\d+)?)\s*坪(?:內|以下|以內)/u);
  if (bounded) return Number(bounded[1]);
  const range = text.match(/^\d+(?:\.\d+)?\s*(?:[-–—~～]|至)\s*(\d+(?:\.\d+)?)\s*坪/u);
  return range ? Number(range[1]) : null;
}

function validatePriceAndInstallationContract(product, failures, forceRequired = false, exchange = {}) {
  const taiwanRequired = ["aircon", "waterheater", "network-switch"].includes(product.category)
    || REQUESTED_MODELS.has(product.model)
    || JAPANESE_GAP_MODELS.has(product.model);
  const contractRequired = forceRequired || taiwanRequired;
  const globalCatalogEntry = forceRequired && !taiwanRequired && product.channel === "global";
  if (contractRequired) {
    assert(Number.isFinite(product.price?.amount) && product.price.amount > 0, `${product.id} requires a positive public numeric price amount`, failures);
    if (globalCatalogEntry && product.price?.currency !== "TWD") {
      assert(product.price?.currency, `${product.id} global entry requires its source currency`, failures);
      const rate = exchange[`${product.price?.currency}_TWD`];
      assert(Number.isFinite(rate) && rate > 0, `${product.id} global entry requires a supported exchange rate`, failures);
      assert(
        Number.isFinite(product.price?.converted)
          && product.price.converted === Math.round(product.price.amount * rate),
        `${product.id} global entry TWD conversion must match the source amount and exchange rate`,
        failures,
      );
    } else {
      assert(product.price?.currency === "TWD", `${product.id} requires a TWD Taiwan price`, failures);
      assert(product.price?.converted === product.price?.amount, `${product.id} TWD amount and converted price must match`, failures);
    }
  }
  if (contractRequired || product.price?.basis !== undefined) {
    assert(PRICE_BASIS_VALUES.has(product.price?.basis), `${product.id} has invalid price basis: ${product.price?.basis}`, failures);
  }
  if (contractRequired || product.installation !== undefined) {
    assert(product.installation && typeof product.installation === "object" && !Array.isArray(product.installation), `${product.id} installation must be an object`, failures);
    assert(INSTALLATION_STATUS_VALUES.has(product.installation?.status), `${product.id} has invalid installation status: ${product.installation?.status}`, failures);
    assert(typeof product.installation?.note === "string" && product.installation.note.trim(), `${product.id} installation requires a source-faithful note`, failures);
    assert(
      JSON.stringify(Object.keys(product.installation || {}).sort()) === JSON.stringify(["note", "status"]),
      `${product.id} installation must contain exactly status and note`,
      failures,
    );
  }
  if (contractRequired) {
    const marketRisk = `${product.voltage || ""} ${product.warranty || ""}`;
    if (globalCatalogEntry) {
      const disclosure = `${product.description || ""} ${(product.cons || []).join(" ")} ${product.installation?.note || ""} ${marketRisk}`;
      for (const term of ["國際運費", "進口稅", "台灣保固", "電壓", "插頭"]) {
        assert(disclosure.includes(term), `${product.id} global entry must disclose ${term} risk`, failures);
      }
    } else {
      assert(product.channel === "tw", `${product.id} new catalog entry requires a Taiwan sales channel`, failures);
      // Peripheral specs disclose USB/battery/non-electric power, including unknown
      // ratings; only their Top Pick must meet the stricter confirmed-power rule.
      if (!PERIPHERAL_TYPES[product.category]) {
        assert(hasTaiwanCompatiblePower(product), `${product.id} requires a Taiwan-compatible power specification`, failures);
      }
      assert(/(?:台灣|公司貨)/u.test(String(product.warranty || "")), `${product.id} requires an explicit Taiwan warranty`, failures);
      assert(!/(?:50\s*Hz(?![^；,，]*60\s*Hz)|日本地區保固|無台灣保固|不提供台灣|海外通路|跨境)/iu.test(marketRisk), `${product.id} cannot use a 50Hz-only or non-Taiwan warranty product`, failures);
    }
    assert(/^https?:\/\//u.test(String(product.image || "")), `${product.id} requires a trusted http(s) product image`, failures);
  }
  if (product.price?.basis === "official_suggested") {
    assert(hasOfficialSuggestedPriceSource(product), `${product.id} official suggested price must link to an allowlisted Taiwan official host`, failures);
    assert(/官方/.test(`${product.buyLabel} ${product.price.confidence}`), `${product.id} official suggested price requires an official source label`, failures);
    assert(/建議售價|定價/.test(String(product.price.confidence || "")), `${product.id} official suggested price must be described as 建議售價 or 定價`, failures);
  }
}

function validateAirconProduct(product, failures) {
  if (product.category !== "aircon") return;
  assert(AIRCON_TYPE_COUNTS.has(product.type), `${product.id} has invalid aircon type: ${product.type}`, failures);
  assert(product.modelPair && typeof product.modelPair === "object" && !Array.isArray(product.modelPair), `${product.id} requires modelPair`, failures);
  assert(typeof product.modelPair?.indoor === "string" && product.modelPair.indoor.trim(), `${product.id} requires an indoor model`, failures);
  assert(typeof product.modelPair?.outdoor === "string" && product.modelPair.outdoor.trim(), `${product.id} requires an outdoor model`, failures);
  assert(
    normalizeIdentity(product.modelPair?.indoor) !== normalizeIdentity(product.modelPair?.outdoor),
    `${product.id} indoor and outdoor models must differ after normalization`,
    failures,
  );
  assert(String(product.model).includes(product.modelPair?.indoor || ""), `${product.id} display model must retain the indoor model`, failures);
  assert(String(product.model).includes(product.modelPair?.outdoor || ""), `${product.id} display model must retain the outdoor model`, failures);
  assert(product.price?.scope === "complete_system", `${product.id} aircon price must cover the complete indoor and outdoor system`, failures);
  assert(Number.isFinite(product.roomSizeUpperPing) && product.roomSizeUpperPing > 0, `${product.id} requires a finite positive roomSizeUpperPing`, failures);
  const limits = AIRCON_CAPACITY_BAND_LIMITS.get(product.capacityBand);
  assert(limits, `${product.id} has invalid capacityBand: ${product.capacityBand}`, failures);
  if (limits && typeof product.roomSizeUpperPing === "number") {
    assert(
      product.roomSizeUpperPing > limits.minExclusive && product.roomSizeUpperPing <= limits.maxInclusive,
      `${product.id} roomSizeUpperPing does not match ${product.capacityBand}`,
      failures,
    );
  }
  assert(product.channel === "tw", `${product.id} aircon must use a Taiwan channel`, failures);
  validateOrderedSpecPrefixes(product, AIRCON_SPEC_PREFIXES, failures);
  const specByPrefix = (prefix) => {
    const spec = product.specs.find((candidate) => String(candidate).startsWith(prefix));
    return spec ? String(spec).slice(prefix.length).trim() : "";
  };
  const typeSpec = specByPrefix("型式：");
  const heatSpec = specByPrefix("暖房能力：");
  assert(/一對一/u.test(typeSpec) && /分離式/u.test(typeSpec), `${product.id} must be a residential one-to-one split system`, failures);
  assert(!/(?:窗型|移動式|多聯式|商用)/u.test(typeSpec), `${product.id} cannot be a window, portable, multi-split, or commercial system`, failures);
  if (product.type === "cooling_only") {
    assert(typeSpec.includes("冷專"), `${product.id} cooling_only type must match its 型式 spec`, failures);
    assert(/(?:無暖房|不適用|冷專)/u.test(heatSpec), `${product.id} cooling_only type must not advertise heating capacity`, failures);
  }
  if (product.type === "heat_cool") {
    assert(typeSpec.includes("冷暖"), `${product.id} heat_cool type must match its 型式 spec`, failures);
    assert(/^\d+(?:\.\d+)?\s*kW\b/iu.test(heatSpec), `${product.id} heat_cool type requires a numeric heating capacity`, failures);
  }
  const visibleUpperPing = visibleRoomSizeUpperBound(specByPrefix("適用坪數："));
  assert(Number.isFinite(visibleUpperPing), `${product.id} requires a numeric visible room-size upper bound`, failures);
  if (Number.isFinite(visibleUpperPing)) {
    assert(visibleUpperPing === product.roomSizeUpperPing, `${product.id} roomSizeUpperPing must match its 適用坪數 spec`, failures);
  }
  const dimensionSpec = specByPrefix("尺寸：");
  const weightSpec = specByPrefix("重量：");
  assert(
    hasDistinctLabeledMeasurements(dimensionSpec, ["室內機", "室外機"], /寬 \d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? x 深 \d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? x 高 \d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? cm/iu),
    `${product.id} requires separate indoor and outdoor dimensions`,
    failures,
  );
  assert(
    hasDistinctLabeledMeasurements(weightSpec, ["室內機", "室外機"], /(?:約 )?\d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? kg/iu),
    `${product.id} requires separate indoor and outdoor net weights`,
    failures,
  );
}

function validateWaterheaterProduct(product, failures) {
  if (product.category !== "waterheater") return;
  assert(WATERHEATER_TYPE_COUNTS.has(product.type), `${product.id} has invalid waterheater type: ${product.type}`, failures);
  const specByPrefix = (prefix) => {
    const spec = product.specs.find((candidate) => String(candidate).startsWith(prefix));
    return spec ? String(spec).slice(prefix.length).trim() : "";
  };
  const typeSpec = specByPrefix("類型：");
  if (product.type === "electric") {
    assert(WATERHEATER_ELECTRIC_SUBTYPE_COUNTS.has(product.electricSubtype), `${product.id} electric water heater requires storage or instant subtype`, failures);
    assert(typeSpec.includes("電熱"), `${product.id} electric structured type must match its 類型 spec`, failures);
    const subtypeLabel = product.electricSubtype === "storage" ? "儲熱" : /(?:即熱|瞬熱)/u;
    assert(
      typeof subtypeLabel === "string" ? typeSpec.includes(subtypeLabel) : subtypeLabel.test(typeSpec),
      `${product.id} electricSubtype must match its 類型 spec`,
      failures,
    );
  } else {
    assert(product.electricSubtype === undefined, `${product.id} non-electric water heater must not set electricSubtype`, failures);
  }
  if (product.type === "gas") {
    assert(typeSpec.includes("瓦斯"), `${product.id} gas structured type must match its 類型 spec`, failures);
    assert(/(?:LPG|NG\d?|液化瓦斯|天然瓦斯|桶裝瓦斯)/iu.test(specByPrefix("能源／氣源：")), `${product.id} gas product must identify LPG or natural-gas compatibility`, failures);
    assert(/(?:屋內|屋外|室內|室外)/u.test(specByPrefix("安裝位置：")), `${product.id} gas product must identify indoor or outdoor placement`, failures);
    assert(/排氣/u.test(specByPrefix("排氣／給排水：")), `${product.id} gas product must state its exhaust condition`, failures);
  }
  if (product.type === "heat_pump") {
    assert(typeSpec.includes("熱泵"), `${product.id} heat-pump structured type must match its 類型 spec`, failures);
  }
  if (Array.isArray(product.componentModels) && product.componentModels.length > 1) {
    assert(hasCompleteCompositeSystemIdentityAndPrice(product), `${product.id} composite heat-pump system requires every exact component model and a complete-system price`, failures);
    assert(
      hasDistinctLabeledMeasurements(specByPrefix("尺寸："), product.componentModels, /寬 \d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? x 深 \d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? x 高 \d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? cm/iu),
      `${product.id} composite heat-pump dimensions require one measurement segment per component`,
      failures,
    );
    assert(
      hasDistinctLabeledMeasurements(specByPrefix("重量："), product.componentModels, /(?:約 )?\d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? kg/iu),
      `${product.id} composite heat-pump weights require one measurement segment per component`,
      failures,
    );
  } else if (product.price?.scope !== undefined) {
    assert(["single_unit", "complete_system"].includes(product.price.scope), `${product.id} has invalid waterheater price scope`, failures);
  }
  if (product.type === "heat_pump" && /[+＋]/u.test(String(product.model || ""))) {
    assert(hasCompleteCompositeSystemIdentityAndPrice(product), `${product.id} composite model text requires structured componentModels and a complete-system price`, failures);
  }
  assert(product.channel === "tw", `${product.id} waterheater must use a Taiwan channel`, failures);
  validateOrderedSpecPrefixes(product, WATERHEATER_SPEC_PREFIXES, failures);
}

function validateNetworkSwitchProduct(product, failures) {
  if (product.category !== "network-switch") return;

  validatePriceAndInstallationContract(product, failures, true);
  assert(NETWORK_SWITCH_TYPE_MIN_COUNTS.has(product.type), `${product.id} has invalid network-switch type: ${product.type}`, failures);
  const profile = product.switchProfile;
  assert(profile && typeof profile === "object" && !Array.isArray(profile), `${product.id} requires switchProfile`, failures);
  if (!profile || typeof profile !== "object" || Array.isArray(profile)) return;

  const expectedKeys = [
    "cooling",
    "dimensionsCm",
    "enclosure",
    "extraUplinks",
    "management",
    "maxPowerW",
    "mounting",
    "operatingTemperatureC",
    "poe",
    "primaryPortSpeedsGbps",
    "rj45PortCount",
    "specSourceUrl",
    "speedTier",
  ];
  assert(
    JSON.stringify(Object.keys(profile).sort()) === JSON.stringify(expectedKeys),
    `${product.id} switchProfile keys do not match the contract`,
    failures,
  );
  assert(profile.rj45PortCount === 8, `${product.id} must have exactly 8 primary RJ45 ports`, failures);
  assert(profile.speedTier === product.type, `${product.id} speedTier must match type`, failures);
  assert(
    Array.isArray(profile.primaryPortSpeedsGbps)
      && profile.primaryPortSpeedsGbps.length > 0
      && profile.primaryPortSpeedsGbps.every((speed) => Number.isFinite(speed) && speed > 0),
    `${product.id} requires numeric primary port speeds`,
    failures,
  );
  const requiredTierSpeed = { "1g": 1, "2_5g": 2.5, "10g": 10 }[product.type];
  assert(profile.primaryPortSpeedsGbps?.includes(requiredTierSpeed), `${product.id} primary ports do not support ${requiredTierSpeed}G`, failures);
  if (product.type === "10g") {
    for (const speed of [1, 2.5, 10]) {
      assert(profile.primaryPortSpeedsGbps.includes(speed), `${product.id} 10G primary ports must also support ${speed}G`, failures);
    }
  }
  assert(Array.isArray(profile.extraUplinks), `${product.id} extraUplinks must be an array`, failures);
  for (const uplink of profile.extraUplinks || []) {
    assert(Number.isInteger(uplink?.count) && uplink.count > 0, `${product.id} uplink count must be positive`, failures);
    assert(typeof uplink?.media === "string" && uplink.media.trim(), `${product.id} uplink media is required`, failures);
    assert(Array.isArray(uplink?.speedsGbps) && uplink.speedsGbps.length > 0, `${product.id} uplink speeds are required`, failures);
  }
  assert(NETWORK_SWITCH_MANAGEMENT_VALUES.has(profile.management), `${product.id} has invalid management type`, failures);
  assert(profile.poe === false, `${product.id} must not support PoE`, failures);
  assert(profile.enclosure === "metal", `${product.id} must use a metal enclosure`, failures);
  assert(NETWORK_SWITCH_COOLING_VALUES.has(profile.cooling), `${product.id} has invalid cooling type`, failures);
  assert(Number.isFinite(profile.maxPowerW) && profile.maxPowerW > 0, `${product.id} requires positive max power`, failures);
  assert(
    Number.isFinite(profile.operatingTemperatureC?.min)
      && Number.isFinite(profile.operatingTemperatureC?.max)
      && profile.operatingTemperatureC.max >= 40,
    `${product.id} requires an official operating-temperature maximum of at least 40C`,
    failures,
  );
  assert(
    ["width", "depth", "height"].every((key) => Number.isFinite(profile.dimensionsCm?.[key]) && profile.dimensionsCm[key] > 0),
    `${product.id} requires positive width/depth/height dimensions`,
    failures,
  );
  assert(Array.isArray(profile.mounting) && profile.mounting.length > 0, `${product.id} mounting options are required`, failures);
  assert(isOfficialNetworkSwitchSpecSource(product), `${product.id} requires an official brand specSourceUrl`, failures);
  validateOrderedSpecPrefixes(product, NETWORK_SWITCH_SPEC_PREFIXES, failures);
  assert(product.specs.includes("PoE：不支援"), `${product.id} must disclose that PoE is unsupported`, failures);
  assert(product.specs.includes("外殼：金屬"), `${product.id} must disclose its metal enclosure`, failures);
  assert(/台灣|公司貨/u.test(String(product.warranty || "")) && /保固/u.test(String(product.warranty || "")), `${product.id} must state Taiwan warranty`, failures);
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
  validatePriceAndInstallationContract(product, failures);
  validateAirconProduct(product, failures);
  validateWaterheaterProduct(product, failures);
  validateNetworkSwitchProduct(product, failures);
  validateMonitorLightProduct(product, failures);
  validatePeripheralProduct(product, failures);
  validateBeddingProduct(product, failures);
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
      const normalizedDimensionSpec = String(dimensionSpecs[0]).trim();
      assert(dimensionPatternForCategory(product.category).test(normalizedDimensionSpec), `${product.id} has invalid dimension spec: ${dimensionSpecs[0]}`, failures);
      if (NEW_DIMENSION_CATEGORIES.has(product.category)) {
        assert(normalizedDimensionSpec !== "尺寸：未標示", `${product.id} must use 尺寸：查不到 when the new lookup has no result`, failures);
      }
      if (product.category === "waterheater" && Array.isArray(product.componentModels) && product.componentModels.length > 1) {
        assert(normalizedDimensionSpec !== "尺寸：查不到", `${product.id} composite system requires dimensions for every component`, failures);
        assert(
          hasDistinctLabeledMeasurements(normalizedDimensionSpec.slice("尺寸：".length), product.componentModels, /寬 \d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? x 深 \d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? x 高 \d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? cm/iu),
          `${product.id} dimension spec must give every component its own measurement segment`,
          failures,
        );
      }
    }
  }

  if (WEIGHT_CATEGORIES.has(product.category)) {
    const weightSpecs = product.specs.filter((spec) => String(spec).trim().startsWith("重量："));
    assert(weightSpecs.length === 1, `${product.id} must include exactly one weight spec`, failures);
    if (weightSpecs.length === 1) {
      const normalizedWeightSpec = String(weightSpecs[0]).trim();
      assert(weightPatternForCategory(product.category).test(normalizedWeightSpec), `${product.id} has invalid weight spec: ${weightSpecs[0]}`, failures);
      assert(normalizedWeightSpec !== "重量：未標示", `${product.id} must use 重量：查不到 when the new lookup has no result`, failures);
      if (product.category === "waterheater" && Array.isArray(product.componentModels) && product.componentModels.length > 1) {
        assert(normalizedWeightSpec !== "重量：查不到", `${product.id} composite system requires net weights for every component`, failures);
        assert(
          hasDistinctLabeledMeasurements(normalizedWeightSpec.slice("重量：".length), product.componentModels, /(?:約 )?\d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? kg/iu),
          `${product.id} weight spec must give every component its own measurement segment`,
          failures,
        );
      }
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

function validateIssueResearchFile(root, products, failures, incremental = null, documents = null, expectedIssueDate = CHECKED_AT) {
  const research = readResearchDocument(root, "product_issue_research.json", failures, documents);
  const reportLedger = readResearchDocument(root, "product_issue_report_evidence.json", failures, documents);
  if (!research || !reportLedger) return;
  const ledgerReports = Array.isArray(reportLedger.reports) ? reportLedger.reports : [];
  const researchReports = [];
  const aggregateCheckedAt = research.summary?.checkedAt?.slice(0, 10);
  const expectedCheckedAt = incremental?.report.dataDate || expectedIssueDate;
  assert(aggregateCheckedAt === expectedCheckedAt, "product issue research aggregate date mismatch", failures);
  assert(reportLedger.checkedAt === research.summary?.checkedAt?.slice(0, 10), "product issue report ledger date mismatch", failures);
  assert(reportLedger.checkedAt === expectedCheckedAt, "product issue report ledger aggregate date mismatch", failures);
  assert(typeof reportLedger.policy === "string" && reportLedger.policy.trim(), "product issue report ledger requires policy", failures);
  assert(Array.isArray(reportLedger.reports), "product issue report ledger requires an explicit reports array", failures);
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
    for (const [candidateIndex, candidate] of (row.manualReview?.candidateReviews || []).entries()) {
      assert(
        checkedPlatformSet.has(normalize(candidate.platform)),
        `${product.id} manualReview candidateReviews[${candidateIndex}] platform must be declared in checkedPlatforms`,
        failures,
      );
    }
    assert(JSON.stringify(row.issueResearch) === JSON.stringify(product.issueResearch), `${product.id} issueResearch research mismatch`, failures);

    assert(Array.isArray(row.searchChecks) && row.searchChecks.length > 0, `${product.id} issue research requires searchChecks`, failures);
    for (const [searchIndex, searchCheck] of (row.searchChecks || []).entries()) {
      const prefix = `${product.id} searchChecks[${searchIndex}]`;
      assert(typeof searchCheck.platform === "string" && searchCheck.platform.trim(), `${prefix} requires platform`, failures);
      assert(typeof searchCheck.query === "string" && searchCheck.query.trim(), `${prefix} requires exact query`, failures);
      assert(isHttpUrl(searchCheck.searchUrl), `${prefix} searchUrl must be http(s)`, failures);
      assert(
        queryUrlMatchesRecord({ query: searchCheck.query, queryUrl: searchCheck.searchUrl }),
        `${prefix} searchUrl must reproduce the recorded query`,
        failures,
      );
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
      const inspectedDate = String(searchCheck.inspectedAt || "").slice(0, 10);
      assert(
        ISSUE_RESEARCH_DATE_PATTERN.test(inspectedDate) && inspectedDate <= product.issueResearch.checkedAt,
        `${prefix} inspectedAt date exceeds the product review date`,
        failures,
      );
    }

    const searchCandidates = (row.searchChecks || []).flatMap((searchCheck) => searchCheck.candidates || []);
    const manualCandidateReviews = row.manualReview?.candidateReviews || [];
    manualCandidateReviews.forEach((candidate, index) => {
      validateCandidateReview(candidate, `${product.id} manualReview candidateReviews[${index}]`, product.issueResearch.checkedAt, failures);
    });
    const searchCandidateKeys = searchCandidates.map(candidateReviewKey).sort();
    const manualCandidateKeys = manualCandidateReviews.map(candidateReviewKey).sort();
    const manualCandidateKeySet = new Set(manualCandidateKeys);
    const reviewedKeys = reviewedCandidateKeySet(row.manualReview, product.issueResearch);
    assert(manualCandidateKeySet.size === manualCandidateKeys.length, `${product.id} manual candidate reviews must be unique`, failures);
    assert(
      searchCandidateKeys.every((key) => reviewedKeys.has(key)),
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

function validateIssueReviewManifest(root, products, failures, incremental = null, documents = null, expectedIssueDate = CHECKED_AT) {
  const manifest = readResearchDocument(root, "product_issue_review_manifest.json", failures, documents);
  const research = readResearchDocument(root, "product_issue_research.json", failures, documents);
  if (!manifest || !research) return;
  const researchById = new Map((research.results || []).map((row) => [row.id, row]));
  const rows = Array.isArray(manifest.results) ? manifest.results : [];
  const byId = new Map(rows.map((row) => [row.id, row]));
  assert(ISSUE_RESEARCH_DATE_PATTERN.test(String(manifest.checkedAt || "")), "issue review manifest requires checkedAt", failures);
  assert(manifest.checkedAt === (incremental?.report.dataDate || expectedIssueDate), "issue review manifest aggregate date mismatch", failures);
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
      // Pending bundles are checked against their own compact/detailed/ledger evidence below,
      // before the persisted verified-issue registry can include a newly added product.
      validateExplicitReview(row, product, verifiedIssueById.get(product.id) || (documents ? product.issueResearch : undefined));
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
    for (const [candidateIndex, candidate] of (row.candidateReviews || []).entries()) {
      assert(
        checkedPlatforms.has(normalize(candidate.platform)),
        `${product.id} issue review manifest candidateReviews[${candidateIndex}] platform must be declared in checkedPlatforms`,
        failures,
      );
    }
    const researchRow = researchById.get(product.id);
    assert(
      JSON.stringify(researchRow?.manualReview?.representativeSources || []) === JSON.stringify(row.representativeSources || []),
      `${product.id} issue research representativeSources must match the review manifest`,
      failures,
    );
    const expectedCandidateKeys = (researchRow?.searchChecks || [])
      .flatMap((searchCheck) => searchCheck.candidates || [])
      .map(candidateReviewKey)
      .sort();
    const manifestCandidateKeys = (row.candidateReviews || []).map(candidateReviewKey).sort();
    const manifestCandidateKeySet = new Set(manifestCandidateKeys);
    const reviewedKeys = reviewedCandidateKeySet(row, product.issueResearch);
    assert(manifestCandidateKeySet.size === manifestCandidateKeys.length, `${product.id} manifest candidate reviews must be unique`, failures);
    assert(
      expectedCandidateKeys.every((key) => reviewedKeys.has(key)),
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

function validateHistoricalPriceResearch(root, products, failures, incremental = null, documents = null) {
  const maintenanceReportFile = path.join(root, "catalog_maintenance_latest.json");
  const research = readResearchDocument(root, "historical_price_research.json", failures, documents);
  if (!research) return;
  const maintenanceReport = documents ? documents["catalog_maintenance_latest.json"] : fs.existsSync(maintenanceReportFile)
    ? JSON.parse(fs.readFileSync(maintenanceReportFile, "utf8"))
    : null;
  const researchRows = Array.isArray(research.results) ? research.results : [];
  const researchById = new Map(researchRows.map((row) => [row.id, row]));
  const foundRows = researchRows.filter((row) => row.historicalLow?.status === "found");
  const missingRows = researchRows.filter((row) => row.historicalLow?.status === "not_found");

  assert(researchRows.length === products.length, `historical price research rows ${researchRows.length} does not match products ${products.length}`, failures);
  assert(researchById.size === products.length, `historical price research count ${researchById.size} does not match products ${products.length}`, failures);
  assert(research.summary && research.summary.total === products.length, "historical price research summary total mismatch", failures);
  assert(research.summary && research.summary.found === foundRows.length, "historical price research summary found mismatch", failures);
  assert(research.summary && research.summary.missing === missingRows.length, "historical price research summary missing mismatch", failures);

  if (maintenanceReport) {
    const summary = research.summary || {};
    const maintenanceSummary = maintenanceReport.summary || {};
    const invalidatedHistoricalLows = (maintenanceReport.changes?.historicalLows || [])
      .filter((change) => change.before !== null && change.after === null).length;
    const expectedRunSummary = {
      lastMaintenanceCheckAt: maintenanceReport.checkedAt,
      currentPriceChanged: maintenanceSummary.priceChanges,
      currentBuyLinkChanged: maintenanceSummary.linkChanges,
      currentPriceDrops: maintenanceSummary.priceDrops,
      currentPriceRises: maintenanceSummary.priceRises,
      historicalLowUpdated: maintenanceSummary.historicalLowPriceChanges,
      historicalLowInvalidated: invalidatedHistoricalLows,
      currentImageChanged: maintenanceSummary.imageChanges,
      discontinuedRemoved: (maintenanceSummary.discontinuedRemoved || []).length,
      newProductsAdded: (maintenanceSummary.newProductsAdded || []).length,
      catalogEntriesRemoved: (maintenanceSummary.discontinuedRemoved || []).length,
    };
    for (const [key, expected] of Object.entries(expectedRunSummary)) {
      assert(summary[key] === expected, `historical price research summary ${key} is stale`, failures);
    }
    assert(summary.checkedAt === `${maintenanceReport.dataDate}T00:00:00.000+08:00`, "historical price research summary checkedAt is stale", failures);
    assert(summary.researchedThisRun === (incremental?.addedIds.length ?? products.length), "historical price research researchedThisRun is stale", failures);
    assert(summary.sourcePolicy?.includes(maintenanceReport.dataDate), "historical price research source policy date is stale", failures);
    assert(summary.exchange?.USD_TWD === maintenanceReport.exchange?.USD_TWD, "historical price research USD exchange rate is stale", failures);
    assert(summary.exchange?.currentUSD_TWD === maintenanceReport.exchange?.USD_TWD, "historical price research current USD exchange rate is stale", failures);
    assert(!Object.hasOwn(summary, "sameRunCorrections"), "historical price research contains stale same-run corrections", failures);
  }

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
    assert(row.priceBasis === (product.price.basis || "not_stated"), `${product.id} historical price research price basis mismatch`, failures);
    assert(
      row.priceLabel === (product.price.basis === "official_suggested"
        ? "官方建議售價"
        : product.price.basis === "retailer_current"
          ? "通路現價"
          : "價格基準未標示"),
      `${product.id} historical price research price label mismatch`,
      failures,
    );
    assert(row.currentBuyUrl === product.buyUrl, `${product.id} historical price research buyUrl mismatch`, failures);
    assert(row.currentBuyLabel === product.buyLabel, `${product.id} historical price research buyLabel mismatch`, failures);
    assert(JSON.stringify(row.historicalLow) === JSON.stringify(product.historicalLow), `${product.id} historicalLow research mismatch`, failures);
    if (product.category === "garmentcare" || product.category === "coffee") {
      const checkedSources = Array.isArray(row.checkedSources) ? row.checkedSources : [];
      assert(checkedSources.length >= 2, `${product.id} historical price research requires at least two checked sources`, failures);
      assert(
        new Set(checkedSources).size === checkedSources.length,
        `${product.id} historical price research checked sources must be unique`,
        failures,
      );
    }
    if (product.category === "coffee") {
      validateHistoricalPriceChecks(product, row, failures);
    }
  }
}

function validateReleaseResearch(root, products, failures, incremental = null, documents = null) {
  const research = readResearchDocument(root, "release_date_research.json", failures, documents);
  if (!research) return;
  if (incremental) assert(research.summary?.checkedAt?.slice(0, 10) === incremental.report.dataDate, "incremental release research aggregate date mismatch", failures);
  const researchById = new Map((research.results || []).map((row) => [row.id, row]));
  assert(researchById.size === products.length, `release research count ${researchById.size} does not match products ${products.length}`, failures);

  for (const product of products) {
    const row = researchById.get(product.id);
    assert(row, `${product.id} missing release research row`, failures);
    if (!row) continue;
    for (const field of ["category", "brand", "model", "name"]) {
      assert(row[field] === product[field], `${product.id} release research ${field} mismatch`, failures);
    }
    assert(row.releaseDate === product.releaseDate, `${product.id} release research date mismatch`, failures);
    if (product.releaseDate !== "找不到") {
      assert(row.sourceUrl, `${product.id} non-empty releaseDate requires sourceUrl`, failures);
      assert(row.sourceTitle, `${product.id} non-empty releaseDate requires sourceTitle`, failures);
      assert(row.evidenceSnippet, `${product.id} non-empty releaseDate requires evidenceSnippet`, failures);
    }
  }
}

function validateDimensionResearch(root, products, failures, incremental = null, documents = null, { skipCatalogCounts = false } = {}) {
  const dimensionProducts = products.filter((product) => DIMENSION_CATEGORIES.has(product.category));
  const weightProducts = products.filter((product) => WEIGHT_CATEGORIES.has(product.category));
  if (!skipCatalogCounts) {
    assert(dimensionProducts.length === EXPECTED_DIMENSION_PRODUCT_COUNT, `expected ${EXPECTED_DIMENSION_PRODUCT_COUNT} dimension products, got ${dimensionProducts.length}`, failures);
    for (const [categoryId, expectedCount] of DIMENSION_CATEGORY_COUNTS) {
      const count = dimensionProducts.filter((product) => product.category === categoryId).length;
      assert(count === expectedCount, `${categoryId} must have ${expectedCount} dimension products, got ${count}`, failures);
    }
    assert(weightProducts.length === EXPECTED_WEIGHT_PRODUCT_COUNT, `expected ${EXPECTED_WEIGHT_PRODUCT_COUNT} weight products, got ${weightProducts.length}`, failures);
    for (const [categoryId, expectedCount] of WEIGHT_CATEGORY_COUNTS) {
      const count = weightProducts.filter((product) => product.category === categoryId).length;
      assert(count === expectedCount, `${categoryId} must have ${expectedCount} weight products, got ${count}`, failures);
    }
  }

  const research = readResearchDocument(root, "dimension_research.json", failures, documents);
  if (!research) return;
  if (incremental) assert(research.generatedAt === incremental.report.dataDate, "incremental dimension research aggregate date mismatch", failures);
  assert(/^\d{4}-\d{2}-\d{2}$/.test(String(research.generatedAt || "")), "dimension research requires YYYY-MM-DD generatedAt", failures);
  for (const [category, categoryLabel] of [
    ["tv", "電視"],
    ["soundbar", "Soundbar"],
    ["washer", "洗衣機"],
    ["dryer", "烘衣機"],
    ["washerdryer", "洗烘衣機"],
    ["garmentcare", "電子衣櫥"],
    ["refrigerator", "冰箱"],
    ["coffee", "咖啡機"],
    ["oven", "多功能氣炸烤箱／微波爐"],
    ["dishwasher", "洗碗機"],
    ["bidet", "免治馬桶"],
    ["aircon", "冷氣"],
    ["waterheater", "熱水器"],
    ["network-switch", "網路交換器"],
    ["monitor-light", "螢幕燈"],
    ["mouse", "滑鼠"],
    ["keyboard", "鍵盤"],
    ["mousepad", "滑鼠墊"],
    ["bedsheet", "床包"],
    ["comforter", "棉被"],
    ["pillow", "枕頭"],
  ]) {
    if (!dimensionProducts.some((product) => product.category === category)) continue;
    assert(
      String(research.sourcePolicy || "").includes(categoryLabel),
      `dimension research source policy must include ${categoryLabel}`,
      failures,
    );
  }
  assert(
    String(research.sourcePolicy || "").includes("淨重")
      && String(research.sourcePolicy || "").includes("毛重"),
    "dimension research source policy must distinguish net weight from gross weight",
    failures,
  );
  const researchRows = Array.isArray(research.results) ? research.results : [];
  const researchById = new Map(researchRows.map((row) => [row.id, row]));
  assert(researchRows.length === dimensionProducts.length, `dimension research rows ${researchRows.length} does not match dimension products ${dimensionProducts.length}`, failures);
  assert(researchById.size === dimensionProducts.length, `dimension research count ${researchById.size} does not match dimension products ${dimensionProducts.length}`, failures);

  for (const product of dimensionProducts) {
    const row = researchById.get(product.id);
    assert(row, `${product.id} missing dimension research row`, failures);
    if (!row) continue;
    if (PERIPHERAL_TYPES[product.category] || BEDDING_TYPES[product.category]) {
      for (const field of ["category", "brand", "model", "name"]) {
        assert(row[field] === product[field], `${product.id} dimension research ${field} mismatch`, failures);
      }
    }

    const dimensionSpecs = product.specs.filter((spec) => String(spec).trim().startsWith("尺寸："));
    const dimensionSpec = dimensionSpecs[0];
    assert(row.dimension === dimensionSpec, `${product.id} dimension research mismatch`, failures);
    if (product.category === "bedsheet") {
      const pocketHeight = product.specs.find((spec) => String(spec).startsWith("可包覆高度："));
      assert(row.pocketHeight === pocketHeight, `${product.id} pocket-height research mismatch`, failures);
    }
    if (product.category === "comforter") {
      const fillWeight = product.specs.find((spec) => String(spec).startsWith("填充重量："));
      assert(row.fillWeight === fillWeight, `${product.id} fill-weight research mismatch`, failures);
    }
    assert(dimensionPatternForCategory(product.category).test(String(row.dimension || "").trim()), `${product.id} dimension research has invalid dimension: ${row.dimension}`, failures);
    assert(isHttpUrl(row.sourceUrl), `${product.id} dimension research requires a valid http(s) sourceUrl`, failures);
    assert(!isSearchDiscoveryUrl(row.sourceUrl), `${product.id} dimension research must cite an original product/spec page`, failures);
    assert(row.sourceTitle, `${product.id} dimension research requires sourceTitle`, failures);
    assert(row.evidenceSnippet, `${product.id} dimension research requires evidenceSnippet`, failures);
    if (BEDDING_TYPES[product.category]) {
      assert(measurementEvidenceSupportsSpec(row.dimension, row.evidenceSnippet), `${product.id} dimension evidence does not support the recorded value`, failures);
      if (product.category === "bedsheet") {
        assert(measurementEvidenceSupportsSpec(row.pocketHeight, row.evidenceSnippet), `${product.id} pocket-height evidence does not support the recorded value`, failures);
      }
      if (product.category === "comforter") {
        assert(measurementEvidenceSupportsSpec(row.fillWeight, row.evidenceSnippet), `${product.id} fill-weight evidence does not support the recorded value`, failures);
      }
    }
    assert(DIMENSION_CONFIDENCE_VALUES.has(row.confidence), `${product.id} dimension research has invalid confidence: ${row.confidence}`, failures);
    assert(typeof row.isOfficialSource === "boolean", `${product.id} dimension research requires boolean isOfficialSource`, failures);
    assert(/^\d{4}-\d{2}-\d{2}$/.test(String(row.checkedAt || "")), `${product.id} dimension research requires YYYY-MM-DD checkedAt`, failures);
    if (NEW_DIMENSION_CATEGORIES.has(product.category)) {
      assert(row.checkedAt <= research.generatedAt, `${product.id} dimension research checkedAt cannot be newer than generatedAt`, failures);
    }

    const dimensionNotFound = dimensionSpec === "尺寸：未標示" || dimensionSpec === "尺寸：查不到";
    if (dimensionNotFound) {
      assert(row.confidence === "not_found", `${product.id} missing dimension must use not_found confidence`, failures);
    } else {
      assert(row.confidence !== "not_found", `${product.id} found dimension cannot use not_found confidence`, failures);
    }
    if (product.category === "waterheater" && Array.isArray(product.componentModels) && product.componentModels.length > 1) {
      assert(
        hasDistinctLabeledMeasurements(row.evidenceSnippet, product.componentModels, /寬 \d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? x 深 \d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? x 高 \d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? cm/iu),
        `${product.id} dimension evidence must give every component its own measurement segment`,
        failures,
      );
    }

    if (WEIGHT_CATEGORIES.has(product.category)) {
      const weightSpecs = product.specs.filter((spec) => String(spec).trim().startsWith("重量："));
      const weightSpec = weightSpecs[0];
      assert(row.weight === weightSpec, `${product.id} weight research mismatch`, failures);
      assert(weightPatternForCategory(product.category).test(String(row.weight || "").trim()), `${product.id} weight research has invalid weight: ${row.weight}`, failures);
      assert(isHttpUrl(row.weightSourceUrl), `${product.id} weight research requires a valid http(s) weightSourceUrl`, failures);
      assert(!isSearchDiscoveryUrl(row.weightSourceUrl), `${product.id} weight research must cite an original product/spec page`, failures);
      assert(row.weightSourceTitle, `${product.id} weight research requires weightSourceTitle`, failures);
      assert(row.weightEvidenceSnippet, `${product.id} weight research requires weightEvidenceSnippet`, failures);
      if (BEDDING_TYPES[product.category]) {
        assert(measurementEvidenceSupportsSpec(row.weight, row.weightEvidenceSnippet), `${product.id} weight evidence does not support the recorded value`, failures);
      }
      assert(WEIGHT_CONFIDENCE_VALUES.has(row.weightConfidence), `${product.id} weight research has invalid weightConfidence: ${row.weightConfidence}`, failures);
      assert(typeof row.weightIsOfficialSource === "boolean", `${product.id} weight research requires boolean weightIsOfficialSource`, failures);
      assert(/^\d{4}-\d{2}-\d{2}$/.test(String(row.weightCheckedAt || "")), `${product.id} weight research requires YYYY-MM-DD weightCheckedAt`, failures);
      assert(row.weightCheckedAt <= research.generatedAt, `${product.id} weight research weightCheckedAt cannot be newer than generatedAt`, failures);

      const weightNotFound = weightSpec === "重量：未標示" || weightSpec === "重量：查不到";
      if (weightNotFound) {
        assert(row.weightConfidence === "not_found", `${product.id} missing weight must use not_found confidence`, failures);
      } else {
        assert(row.weightConfidence !== "not_found", `${product.id} found weight cannot use not_found confidence`, failures);
      }
      if (product.category === "waterheater" && Array.isArray(product.componentModels) && product.componentModels.length > 1) {
        assert(
          hasDistinctLabeledMeasurements(row.weightEvidenceSnippet, product.componentModels, /(?:約 )?\d+(?:\.\d+)?(?:[-–／/]\d+(?:\.\d+)?)? kg/iu),
          `${product.id} weight evidence must give every component its own measurement segment`,
          failures,
        );
      }
    }
  }
}

function expectedIssueEvidenceDate(root, products, documents, failures, incremental) {
  if (incremental) return incremental.report.dataDate;
  try {
    return resolveIssueEvidenceDate(root, documents["catalog_maintenance_latest.json"], products, documents, CHECKED_AT);
  } catch (error) {
    failures.push(error.message);
    return CHECKED_AT;
  }
}

function validateResearchDocuments(products, documents, failures, incremental = null, { root = path.resolve(__dirname, ".."), skipCatalogCounts = true } = {}) {
  const issueDate = expectedIssueEvidenceDate(root, products, documents, failures, incremental);
  products.forEach((product) => validateIssueResearch(product, failures));
  validateReleaseResearch(null, products, failures, incremental, documents);
  // Bundle preflight checks every supplied product, independently of final catalog quotas.
  validateDimensionResearch(null, products, failures, incremental, documents, { skipCatalogCounts });
  validateHistoricalPriceResearch("", products, failures, incremental, documents);
  validateIssueReviewManifest(null, products, failures, incremental, documents, issueDate);
  validateIssueResearchFile(null, products, failures, incremental, documents, issueDate);
}

function validateCategoryContent(products, failures) {
  validatePeripheralCatalog(products, failures);
  validateBeddingCatalog(products, failures);
  const monitorLightProducts = categoryProducts(products, "monitor-light");
  if (monitorLightProducts.length) assert(monitorLightProducts.filter((product) => product.topPick).length === 1, "monitor-light must have exactly one Top Pick", failures);
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

  const networkSwitchProducts = categoryProducts(products, "network-switch");
  assert(networkSwitchProducts.length === 20, `network-switch must contain exactly 20 products, got ${networkSwitchProducts.length}`, failures);
  for (const [type, minimumCount] of NETWORK_SWITCH_TYPE_MIN_COUNTS) {
    const count = networkSwitchProducts.filter((product) => product.type === type).length;
    assert(count >= minimumCount, `network-switch ${type} count must be at least ${minimumCount}, got ${count}`, failures);
  }
  const networkSwitchTopPicks = networkSwitchProducts.filter((product) => product.topPick);
  assert(
    networkSwitchTopPicks.length === 1 && networkSwitchTopPicks[0].model === NETWORK_SWITCH_TOP_PICK_MODEL,
    `network-switch Top Pick must be ${NETWORK_SWITCH_TOP_PICK_MODEL}`,
    failures,
  );

  for (const product of categoryProducts(products, "tv")) {
    assert(productText(product).includes("手機投影："), `${product.id} TV missing mobile casting spec`, failures);
  }

  for (const product of categoryProducts(products, "monitor")) {
    assert(productText(product).includes("重量："), `${product.id} monitor missing weight spec`, failures);
  }

  for (const product of categoryProducts(products, "standingdesk")) {
    assert(productText(product).includes("桌板厚度："), `${product.id} standing desk missing desktop thickness spec`, failures);
  }

  const garmentCareProducts = categoryProducts(products, "garmentcare");
  const garmentCareModels = new Set(garmentCareProducts.map((product) => product.model));
  assert(
    garmentCareModels.size === GARMENTCARE_MODELS.size
      && [...GARMENTCARE_MODELS].every((model) => garmentCareModels.has(model)),
    "garmentcare exact-model roster does not match the approved 20 models",
    failures,
  );
  for (const [brand, expectedCount] of GARMENTCARE_BRAND_COUNTS) {
    const count = garmentCareProducts.filter((product) => product.brand === brand).length;
    assert(count === expectedCount, `garmentcare ${brand} count must be ${expectedCount}, got ${count}`, failures);
  }
  for (const [channel, expectedCount] of GARMENTCARE_CHANNEL_COUNTS) {
    const count = garmentCareProducts.filter((product) => product.channel === channel).length;
    assert(count === expectedCount, `garmentcare ${channel} count must be ${expectedCount}, got ${count}`, failures);
  }
  const garmentCareTopPicks = garmentCareProducts.filter((product) => product.topPick);
  assert(
    garmentCareTopPicks.length === 1 && garmentCareTopPicks[0].model === GARMENTCARE_TOP_PICK_MODEL,
    `garmentcare Top Pick must be ${GARMENTCARE_TOP_PICK_MODEL}`,
    failures,
  );
  for (const product of garmentCareProducts) {
    for (const prefix of GARMENTCARE_SPEC_PREFIXES) {
      const count = product.specs.filter((spec) => String(spec).startsWith(prefix)).length;
      assert(count === 1, `${product.id} must include exactly one ${prefix} spec`, failures);
    }
    const expectedCurrency = product.channel === "tw"
      ? "TWD"
      : product.brand === "LG"
        ? "USD"
        : product.brand === "Samsung"
          ? "KRW"
          : "JPY";
    assert(product.price.currency === expectedCurrency, `${product.id} must use ${expectedCurrency}`, failures);
    if (product.channel === "global") {
      const text = productText(product);
      for (const warning of ["國際運費", "進口稅", "台灣保固"]) {
        assert(text.includes(warning), `${product.id} overseas warning is missing ${warning}`, failures);
      }
      assert(/電壓|插頭/.test(text), `${product.id} overseas warning is missing voltage/plug risk`, failures);
      assert(!product.topPick, `${product.id} overseas product must not be a Taiwan Top Pick`, failures);
    }
  }

  const coffeeProducts = categoryProducts(products, "coffee");
  const coffeeBrands = new Map();
  for (const product of coffeeProducts) {
    coffeeBrands.set(product.brand, (coffeeBrands.get(product.brand) || 0) + 1);
    for (const prefix of COFFEE_SPEC_PREFIXES) {
      const count = product.specs.filter((spec) => String(spec).startsWith(prefix)).length;
      assert(count === 1, `${product.id} must include exactly one ${prefix} spec`, failures);
    }
    const typeSpec = product.specs.find((spec) => String(spec).startsWith("類型："));
    const type = String(typeSpec || "").slice("類型：".length).trim();
    assert(COFFEE_TYPE_COUNTS.has(type), `${product.id} coffee type must be 全自動 or 半自動`, failures);
    assert(product.channel === "tw", `${product.id} coffee product must use the Taiwan channel`, failures);
    assert(product.price.currency === "TWD", `${product.id} coffee product must use TWD`, failures);
    assert(product.price.amount === product.price.converted, `${product.id} TWD amount and converted price must match`, failures);
    const powerSpec = product.specs.find((spec) => String(spec).startsWith("電壓／頻率："));
    assert(/1(?:10|20)\s*V/i.test(String(powerSpec || "")), `${product.id} coffee product must use a Taiwan-market 110V or 120V rating`, failures);
    assert(/60\s*Hz/i.test(String(powerSpec || "")), `${product.id} coffee product must support Taiwan 60Hz frequency`, failures);
    assert(/台灣/.test(String(product.warranty || "")) && /保固/.test(String(product.warranty || "")), `${product.id} coffee product must state Taiwan warranty`, failures);
    const taiwanMarketText = [product.voltage, product.warranty, product.price.confidence, product.buyLabel].join(" ");
    assert(/公司貨|台灣官方|原廠/.test(taiwanMarketText), `${product.id} coffee product must prove Taiwan official-market supply`, failures);
    assert(/咖啡機/.test(String(product.name)), `${product.id} coffee product name must identify a coffee machine`, failures);
    for (const excludedTerm of COFFEE_EXCLUDED_NAME_TERMS) {
      assert(!String(product.name).includes(excludedTerm), `${product.id} coffee product name must not be an excluded ${excludedTerm} item`, failures);
    }
  }

  assert(coffeeBrands.size >= COFFEE_MIN_BRAND_COUNT, `coffee must include at least ${COFFEE_MIN_BRAND_COUNT} brands, got ${coffeeBrands.size}`, failures);
  for (const [brand, count] of coffeeBrands) {
    assert(count <= COFFEE_MAX_PRODUCTS_PER_BRAND, `coffee ${brand} exceeds ${COFFEE_MAX_PRODUCTS_PER_BRAND} products`, failures);
  }

  for (const [type, expectedCount] of COFFEE_TYPE_COUNTS) {
    const productsOfType = coffeeProducts.filter((product) => product.specs.includes(`類型：${type}`));
    assert(productsOfType.length === expectedCount, `coffee ${type} count must be ${expectedCount}, got ${productsOfType.length}`, failures);
    for (const budget of COFFEE_BUDGET_COUNTS.keys()) {
      const count = productsOfType.filter((product) => product.budget === budget).length;
      assert(count === COFFEE_TYPE_BUDGET_COUNT, `coffee ${type} ${budget} count must be ${COFFEE_TYPE_BUDGET_COUNT}, got ${count}`, failures);
    }
  }
  for (const [budget, expectedCount] of COFFEE_BUDGET_COUNTS) {
    const count = coffeeProducts.filter((product) => product.budget === budget).length;
    assert(count === expectedCount, `coffee ${budget} count must be ${expectedCount}, got ${count}`, failures);
  }

  const semiAutomaticProducts = coffeeProducts.filter((product) => product.specs.includes("類型：半自動"));
  const builtInGrinderCount = semiAutomaticProducts.filter((product) => {
    const grinderSpec = product.specs.find((spec) => String(spec).startsWith("研磨系統："));
    return String(grinderSpec || "").slice("研磨系統：".length).trim().startsWith("內建");
  }).length;
  const externalGrinderCount = semiAutomaticProducts.filter((product) => {
    const grinderSpec = product.specs.find((spec) => String(spec).startsWith("研磨系統："));
    const grinder = String(grinderSpec || "").slice("研磨系統：".length).trim();
    return !grinder.startsWith("內建") && /外接|另購/.test(grinder);
  }).length;
  assert(
    builtInGrinderCount === COFFEE_SEMI_AUTO_GRINDER_COUNTS.get("built_in"),
    `coffee semi-auto built-in grinder count must be ${COFFEE_SEMI_AUTO_GRINDER_COUNTS.get("built_in")}, got ${builtInGrinderCount}`,
    failures,
  );
  assert(
    externalGrinderCount === COFFEE_SEMI_AUTO_GRINDER_COUNTS.get("external"),
    `coffee semi-auto external-grinder count must be ${COFFEE_SEMI_AUTO_GRINDER_COUNTS.get("external")}, got ${externalGrinderCount}`,
    failures,
  );

  for (const tag of COFFEE_RECOMMENDATION_TAGS) {
    assert(coffeeProducts.some((product) => product.tags.includes(tag)), `coffee missing recommendation tag ${tag}`, failures);
  }

  const coffeeTopPicks = coffeeProducts.filter((product) => product.topPick);
  assert(coffeeTopPicks.length === 1, `coffee must have exactly one Top Pick, got ${coffeeTopPicks.length}`, failures);
  if (coffeeTopPicks.length === 1) {
    const [topPick] = coffeeTopPicks;
    const powerSpec = topPick.specs.find((spec) => String(spec).startsWith("電壓／頻率："));
    const availabilitySpec = topPick.specs.find((spec) => String(spec).startsWith("耗材／配件相容性："));
    assert(/110\s*V/i.test(String(powerSpec || "")) && /60\s*Hz/i.test(String(powerSpec || "")), `${topPick.id} Top Pick must be 110V/60Hz`, failures);
    assert(/台灣/.test(String(topPick.warranty || "")) && /保固/.test(String(topPick.warranty || "")), `${topPick.id} Top Pick must have Taiwan warranty`, failures);
    assert(
      /台灣/.test(String(availabilitySpec || "")) && /可取得|供應|購買/.test(String(availabilitySpec || "")),
      `${topPick.id} Top Pick must state Taiwan supplies or parts availability`,
      failures,
    );
  }

  const airconProducts = categoryProducts(products, "aircon");
  for (const [type, minimumCount] of AIRCON_TYPE_COUNTS) {
    const count = airconProducts.filter((product) => product.type === type).length;
    assert(count >= minimumCount, `aircon ${type} count must be at least ${minimumCount}, got ${count}`, failures);
  }
  for (const [band, minimumCount] of AIRCON_CAPACITY_BAND_COUNTS) {
    const count = airconProducts.filter((product) => product.capacityBand === band).length;
    assert(count >= minimumCount, `aircon ${band} count must be at least ${minimumCount}, got ${count}`, failures);
  }
  assert(airconProducts.filter((product) => product.topPick).length === 1, "aircon must have exactly one Top Pick", failures);

  const waterheaterProducts = categoryProducts(products, "waterheater");
  for (const [type, expectedCount] of WATERHEATER_TYPE_COUNTS) {
    const count = waterheaterProducts.filter((product) => product.type === type).length;
    assert(count === expectedCount, `waterheater ${type} count must be ${expectedCount}, got ${count}`, failures);
  }
  const electricWaterheaters = waterheaterProducts.filter((product) => product.type === "electric");
  for (const [subtype, expectedCount] of WATERHEATER_ELECTRIC_SUBTYPE_COUNTS) {
    const count = electricWaterheaters.filter((product) => product.electricSubtype === subtype).length;
    assert(count === expectedCount, `waterheater electric ${subtype} count must be ${expectedCount}, got ${count}`, failures);
  }
  assert(waterheaterProducts.filter((product) => product.topPick).length === 1, "waterheater must have exactly one Top Pick", failures);

  for (const [model, category] of [
    ["R-HW620YJ", "refrigerator"],
    ["LEGEE-Q10 PRO", "robot"],
    ["NA-V170RPH-K", "washerdryer"],
    ["AQ928", "waterdispenser"],
  ]) {
    const matches = products.filter((product) => product.model === model && product.category === category);
    assert(matches.length === 1, `${model} must appear exactly once in ${category}`, failures);
  }
}

function canonicalJapaneseBrand(value) {
  const normalized = normalize(value).replaceAll(" ", "");
  return {
    sony: "Sony",
    panasonic: "Panasonic",
    hitachi: "HITACHI",
    mitsubishielectric: "Mitsubishi Electric",
    daikin: "Daikin",
    general: "GENERAL",
    fujitsugeneral: "GENERAL",
    rinnai: "Rinnai",
    noritz: "Noritz",
    toto: "TOTO",
  }[normalized] || null;
}

function validateJapaneseBrandReview(category, row, productById, dataDate, expectedReviews, carriedReviewMatches, failures) {
  const reviews = Array.isArray(row?.japaneseBrandReview) ? row.japaneseBrandReview : [];
  assert(reviews.length === JAPANESE_BRAND_ROSTER.length, `${category.id} Japanese-brand review must contain ${JAPANESE_BRAND_ROSTER.length} rows`, failures);
  assert(
    carriedReviewMatches || JSON.stringify(reviews) === JSON.stringify(expectedReviews),
    `${category.id} Japanese-brand review must match the current or carried same-date catalog baseline`,
    failures,
  );
  const byBrand = new Map(reviews.map((review) => [review.brand, review]));
  assert(byBrand.size === JAPANESE_BRAND_ROSTER.length, `${category.id} Japanese-brand review contains duplicate brands`, failures);

  for (const brand of JAPANESE_BRAND_ROSTER) {
    const review = byBrand.get(brand);
    const prefix = `${category.id} ${brand} Japanese-brand review`;
    assert(review, `${prefix} is missing`, failures);
    if (!review) continue;
    assert(JAPANESE_BRAND_REVIEW_STATUSES.has(review.status), `${prefix} has invalid status: ${review.status}`, failures);
    assert(review.checkedAt === dataDate, `${prefix} checkedAt must equal ${dataDate}`, failures);
    assert(Array.isArray(review.officialSources) && review.officialSources.length > 0, `${prefix} requires officialSources`, failures);
    for (const source of review.officialSources || []) {
      assert(isHttpUrl(source), `${prefix} has invalid official source: ${source}`, failures);
    }
    assert(Array.isArray(review.existingProductIds), `${prefix} existingProductIds must be an array`, failures);
    assert(Array.isArray(review.addedProductIds), `${prefix} addedProductIds must be an array`, failures);
    assert(typeof review.reason === "string" && review.reason.trim(), `${prefix} requires a reason`, failures);

    const ids = [...(review.existingProductIds || []), ...(review.addedProductIds || [])];
    assert(new Set(ids).size === ids.length, `${prefix} contains duplicate product IDs`, failures);
    for (const id of ids) {
      const product = productById.get(id);
      assert(product, `${prefix} references unknown product ${id}`, failures);
      if (!product) continue;
      assert(product.category === category.id, `${prefix} references ${id} from ${product.category}`, failures);
      assert(canonicalJapaneseBrand(product.brand) === brand, `${prefix} references ${id} with non-matching brand ${product.brand}`, failures);
    }

    if (review.status === "covered_existing") {
      assert((review.existingProductIds || []).length > 0 && (review.addedProductIds || []).length === 0, `${prefix} covered_existing IDs are inconsistent`, failures);
    } else if (review.status === "covered_added") {
      assert((review.existingProductIds || []).length === 0 && (review.addedProductIds || []).length > 0, `${prefix} covered_added IDs are inconsistent`, failures);
    } else if (review.status === "covered_supplemented") {
      assert((review.existingProductIds || []).length > 0 && (review.addedProductIds || []).length > 0, `${prefix} covered_supplemented IDs are inconsistent`, failures);
    } else {
      assert(ids.length === 0, `${prefix} ${review.status} must not claim product IDs`, failures);
    }
  }
}

function validateMaintenanceReport(root, categories, products, dataDate, exchange, failures, reportOverride = null) {
  const reportFile = path.join(root, "catalog_maintenance_latest.json");
  assert(fs.existsSync(reportFile), `missing maintenance report for ${dataDate}`, failures);
  if (!fs.existsSync(reportFile)) return;

  const report = reportOverride || JSON.parse(fs.readFileSync(reportFile, "utf8"));
  let incremental = null;
  assert(report.auditScope === undefined || report.auditScope === ADDED_PRODUCTS_SCOPE, "unsupported maintenance auditScope", failures);
  if (report.auditScope === ADDED_PRODUCTS_SCOPE) {
    try {
      const baseline = loadIncrementalBaseline(root, report.baselineRef);
      incremental = assertIncrementalBaselinePreserved({ report, catalog: { categories, products, exchange }, baseline, documents: readEvidenceDocuments(root) });
      validateMaintenanceReport(root, baseline.categories, baseline.products, baseline.meta.dataDate, baseline.exchange, failures, baseline.report);
    } catch (error) {
      failures.push(error.message);
    }
  }
  const productIds = products.map((product) => product.id).sort();
  const productIdSet = new Set(productIds);
  const historicalProductIds = products
    .filter((product) => product.historicalLow?.status === "found")
    .map((product) => product.id)
    .sort();
  const minimumCount = Math.min(...categories.map((category) => categoryProducts(products, category.id).length));
  assert(report.schemaVersion === 3, "maintenance report schema version is stale", failures);
  assert(report.dataDate === dataDate, "maintenance report data date is stale", failures);
  assert(report.summary?.finalProducts === products.length, "maintenance report final product count is stale", failures);
  assert(report.summary?.categories === categories.length, "maintenance report category count is stale", failures);
  assert(report.summary?.minimumProductsPerCategory === minimumCount, "maintenance report minimum category count is stale", failures);
  assert(report.summary?.priceChanges === report.changes?.prices?.length, "maintenance report price change summary is inconsistent", failures);
  assert(report.summary?.linkChanges === report.changes?.links?.length, "maintenance report link change summary is inconsistent", failures);
  assert(report.summary?.imageChanges === report.changes?.images?.length, "maintenance report image change summary is inconsistent", failures);
  assert(report.summary?.historicalLowChanges === report.changes?.historicalLows?.length, "maintenance report historical-low summary is inconsistent", failures);
  assert(
    ["current_run", "same_date_carried_forward", "mixed_current_and_carried_forward"].includes(report.categoryReviewProvenance),
    "maintenance report category review provenance is missing or pending",
    failures,
  );
  assert(report.categoryScan?.length === categories.length, "maintenance report category scan is incomplete", failures);

  const reportCheckedAt = Date.parse(report.checkedAt);
  assert(!Number.isNaN(reportCheckedAt), "maintenance report checkedAt is invalid", failures);
  assert(new Set((report.categoryScan || []).map((row) => row.category)).size === categories.length, "maintenance report category scan contains duplicate categories", failures);
  const categoryScan = new Map((report.categoryScan || []).map((row) => [row.category, row]));
  const productById = new Map(products.map((product) => [product.id, product]));
  const addedIds = new Set([
    ...(report.summary?.newProductsAdded || []),
    ...(report.summary?.catalogEntriesReplaced || []).map((replacement) => replacement.afterId),
  ]);
  for (const id of addedIds) {
    assert(productById.has(id), `maintenance summary references unknown added product ${id}`, failures);
    if (productById.has(id)) validatePriceAndInstallationContract(productById.get(id), failures, true, exchange);
  }
  const baselineById = new Map(products
    .filter((product) => !addedIds.has(product.id))
    .map((product) => [product.id, product]));
  for (const category of categories) {
    const row = categoryScan.get(category.id);
    const count = categoryProducts(products, category.id).length;
    assert(row?.status === "manually_reviewed", `${category.id} maintenance scan still requires manual review`, failures);
    assert(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(String(row?.reviewedAt || "")),
      `${category.id} maintenance review timestamp is invalid`,
      failures,
    );
    assert(
      !Number.isNaN(Date.parse(row?.reviewedAt)) && Date.parse(row.reviewedAt) <= reportCheckedAt,
      `${category.id} maintenance review timestamp exceeds the report checkpoint`,
      failures,
    );
    assert(row?.finalProductCount === count, `${category.id} maintenance scan product count is stale`, failures);
    assert(row?.minimumSatisfied === (count >= MIN_PRODUCTS_PER_CATEGORY), `${category.id} maintenance minimum flag is stale`, failures);
    // Only immutable, unchanged baseline rows may retain their original review date.
    if (incremental?.baseline.categories.some((previous) => previous.id === category.id)) continue;
    const expectedReviews = buildJapaneseBrandReview({
      category,
      products,
      baselineById,
      checkedAt: dataDate,
    });
    const carriedReviewMatches = ["same_date_carried_forward", "mixed_current_and_carried_forward"]
      .includes(report.categoryReviewProvenance)
      && carriedCategoryReviewMatchesCatalog({
        row,
        category,
        products,
        baselineById,
        maintenanceDate: dataDate,
        maximumReviewedAt: report.checkedAt,
      });
    validateJapaneseBrandReview(
      category,
      row,
      productById,
      dataDate,
      expectedReviews,
      carriedReviewMatches,
      failures,
    );
  }
  for (const [categoryId, reviews] of Object.entries(report.addedProductReview?.manualJapaneseBrandReview || {})) {
    const canonicalReviews = new Map((categoryScan.get(categoryId)?.japaneseBrandReview || []).map((review) => [review.brand, review]));
    for (const review of reviews) {
      const canonical = canonicalReviews.get(review.brand);
      assert(
        canonical?.status === review.status && canonical?.checkedAt === review.checkedAt,
        `${categoryId} ${review.brand} manual Japanese-brand review contradicts categoryScan`,
        failures,
      );
    }
  }

  const validateCompactAudit = (name, audit, expectedIds, verifiedKey, expectedExceptionCount) => {
    const checkedIds = [...(audit?.checkedProductIds || [])].sort();
    const verifiedIds = [...(audit?.[verifiedKey] || [])].sort();
    const exceptions = audit?.exceptions || [];
    const exceptionIds = exceptions.map((row) => row.id).sort();
    assert(JSON.stringify(checkedIds) === JSON.stringify(expectedIds), `${name} checked product IDs are incomplete`, failures);
    assert(exceptions.length === expectedExceptionCount, `${name} exception summary is inconsistent`, failures);
    assert(new Set(checkedIds).size === checkedIds.length, `${name} contains duplicate checked product IDs`, failures);
    assert(new Set([...verifiedIds, ...exceptionIds]).size === checkedIds.length, `${name} verified and exception partitions overlap`, failures);
    assert(
      JSON.stringify([...verifiedIds, ...exceptionIds].sort()) === JSON.stringify(checkedIds),
      `${name} verified and exception partitions are incomplete`,
      failures,
    );
    for (const row of exceptions) {
      assert(productIdSet.has(row.id), `${name} has unknown product ${row.id}`, failures);
      assert(row.status && row.status !== "verified" && row.status !== "verified_available", `${name} has invalid exception status for ${row.id}`, failures);
    }
  };

  validateCompactAudit("maintenance source audit", report.sourceAudit, productIds, "verifiedAvailableIds", report.summary?.sourceExceptions);
  validateCompactAudit("maintenance image audit", report.imageAudit, productIds, "verifiedIds", report.summary?.imageExceptions);
  validateCompactAudit(
    "maintenance historical source audit",
    report.historicalSourceAudit,
    historicalProductIds,
    "verifiedIds",
    report.summary?.historicalSourceExceptions,
  );

  assert(report.summary?.sourcesAudited === productIds.length, "maintenance source audit count is stale", failures);
  assert(
    report.summary?.pchomeExactModelVerified
      + report.summary?.pchomeReviewedBindingVerified
      + report.summary?.pchomeModelUnverified
      + report.summary?.pchomeOutOfStockTracked
      + report.summary?.pchomeInvalidPrices
      + report.summary?.pchomeRequestFailures
      + report.summary?.pchomeOtherExceptions === report.summary?.pchomeAudited,
    "maintenance PChome source partitions are inconsistent",
    failures,
  );
  assert(report.summary?.sourcesVerifiedAvailable === report.sourceAudit?.verifiedAvailableIds?.length, "maintenance verified source count is stale", failures);
  assert(report.summary?.sourcesModelUnverified === report.sourceAudit?.exceptions?.filter((row) => row.status === "model_unverified").length, "maintenance unverified source count is stale", failures);
  assert(report.summary?.imagesAudited === productIds.length, "maintenance image audit count is stale", failures);
  assert(report.summary?.historicalSourcesAudited === historicalProductIds.length, "maintenance historical source audit count is stale", failures);
  assert(report.summary?.historicalSourcesVerified === report.historicalSourceAudit?.verifiedIds?.length, "maintenance verified historical source count is stale", failures);
  assert(report.summary?.historicalFound === historicalProductIds.length, "maintenance historical found count is stale", failures);
  assert(report.summary?.historicalMissing === products.length - historicalProductIds.length, "maintenance historical missing count is stale", failures);

  const pendingDiscontinuationReviews = (report.officialDiscontinuedCandidates || [])
    .filter((row) => row.disposition === "manual_official_evidence_required");
  assert(pendingDiscontinuationReviews.length === 0, "maintenance report has unreviewed official discontinuation candidates", failures);
  assert(report.summary?.officialDiscontinuedPendingReview === 0, "maintenance discontinuation review summary is stale", failures);
  return incremental;
}

function main() {
  const root = path.resolve(__dirname, "..");
  const failures = [];
  const { categories, products, exchange, meta } = readDashboardProducts(root);
  const categoryIds = new Set(categories.map((category) => category.id));

  assert(categories.length === EXPECTED_CATEGORY_COUNT, `expected ${EXPECTED_CATEGORY_COUNT} categories, got ${categories.length}`, failures);
  assert(products.length === EXPECTED_PRODUCT_COUNT, `expected ${EXPECTED_PRODUCT_COUNT} products, got ${products.length}`, failures);
  const coffeeCategoryIndex = categories.findIndex((category) => category.id === "coffee");
  assert(coffeeCategoryIndex > 0 && categories[coffeeCategoryIndex - 1]?.id === "blender", "coffee category must appear immediately after blender", failures);
  const beddingCategoryIndex = categories.findIndex((category) => category.id === "bedsheet");
  assert(
    beddingCategoryIndex > 0
      && categories[beddingCategoryIndex - 1]?.id === "garmentcare"
      && categories.slice(beddingCategoryIndex, beddingCategoryIndex + 3).map((category) => category.id).join(",") === "bedsheet,comforter,pillow"
      && categories[beddingCategoryIndex + 3]?.id === "refrigerator"
      && categories.slice(beddingCategoryIndex, beddingCategoryIndex + 3).every((category) => category.group === "臥室寢具"),
    "bedding categories must form the 臥室寢具 group between garmentcare and refrigerator",
    failures,
  );
  const missingIssueResearchIds = products
    .filter((product) => !product.issueResearch || typeof product.issueResearch !== "object" || Array.isArray(product.issueResearch))
    .map((product) => product.id);
  assert(
    missingIssueResearchIds.length === 0,
    `issueResearch missing for ${missingIssueResearchIds.length} products: ${missingIssueResearchIds.slice(0, 10).join(", ")}`,
    failures,
  );

  for (const category of categories) {
    const categoryProducts = products.filter((product) => product.category === category.id);
    const count = categoryProducts.length;
    assert(count >= MIN_PRODUCTS_PER_CATEGORY, `${category.label} has only ${count} products`, failures);
    assert(
      count === EXPECTED_CATEGORY_PRODUCT_COUNTS.get(category.id),
      `${category.label} expected ${EXPECTED_CATEGORY_PRODUCT_COUNTS.get(category.id)} products, got ${count}`,
      failures,
    );
    const ranks = categoryProducts.map((product) => product.rank);
    assert(
      ranks.every((rank) => Number.isInteger(rank) && rank > 0),
      `${category.label} contains a non-positive or non-integer rank`,
      failures,
    );
    assert(
      new Set(ranks).size === ranks.length,
      `${category.label} contains duplicate ranks`,
      failures,
    );
  }
  assert(
    EXPECTED_CATEGORY_PRODUCT_COUNTS.size === categories.length,
    `expected category product count contract for ${categories.length} categories, got ${EXPECTED_CATEGORY_PRODUCT_COUNTS.size}`,
    failures,
  );
  assert(
    [...EXPECTED_CATEGORY_PRODUCT_COUNTS.values()].reduce((sum, count) => sum + count, 0) === EXPECTED_PRODUCT_COUNT,
    "expected category product counts do not sum to the expected product total",
    failures,
  );

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

  const incremental = validateMaintenanceReport(root, categories, products, meta.dataDate, exchange, failures);
  validateResearchDocuments(products, {
    ...readEvidenceDocuments(root),
    "catalog_maintenance_latest.json": JSON.parse(fs.readFileSync(path.join(root, "catalog_maintenance_latest.json"), "utf8")),
  }, failures, incremental, { root, skipCatalogCounts: false });
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

if (require.main === module) main();

module.exports = {
  validateCandidateReview,
  validateAirconProduct,
  validateNetworkSwitchProduct,
  validateMonitorLightProduct,
  validatePeripheralProduct,
  validatePeripheralCatalog,
  validateBeddingProduct,
  validateBeddingCatalog,
  measurementEvidenceSupportsSpec,
  validateMaintenanceReport,
  validatePriceAndInstallationContract,
  validateWaterheaterProduct,
  validateResearchDocuments,
};
