const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { readDashboardProducts } = require("./read-dashboard-products");
const { validateExplicitReview } = require("./mark-product-issue-review");
const { validateExplicitReport, validateUniqueReportExcerpts } = require("./verified-product-issues");
const {
  queryTargetsProduct,
  queryTargetsWebsite,
  queryUrlMatchesRecord,
} = require("./product-issue-validation");
const {
  candidateMatchesExactModel,
  researchRow,
  reviewedDecision,
  sanitizeSearchCheck,
} = require("./research-product-issues");

const root = path.resolve(__dirname, "..");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function assertThrows(callback, message) {
  let threw = false;
  try {
    callback();
  } catch (_error) {
    threw = true;
  }
  assert(threw, message);
}

function createRuntime() {
  const context = {
    console,
    Intl,
    Date,
    Map,
    Promise,
    Set,
    URL,
    URLSearchParams,
    setTimeout,
    clearTimeout,
    globalThis: null,
  };
  context.globalThis = context;
  context.window = context;
  vm.createContext(context);

  for (const file of [
    "assets/js/config.js",
    ...readDashboardProducts(root).categories.map((category) => `products/${category.id}.js`),
    "assets/js/utils.js",
    "assets/js/filters.js",
    "assets/js/templates.js",
    "assets/js/url-state.js",
    "assets/js/product-loader.js",
  ]) {
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
  }

  return {
    context,
    dashboard: context.applianceDashboard,
  };
}

async function assertLoaderFailureIsClear(context, dashboard) {
  let appendedScript = null;
  context.document = {
    createElement() {
      appendedScript = {};
      return appendedScript;
    },
    head: {
      append(script) {
        setTimeout(() => script.onerror(), 0);
      },
    },
  };

  try {
    await assertRejects(
      dashboard.productLoader.loadCategory({ id: "unit-missing" }),
      /Unable to load product script: unit-missing/,
    );
  } finally {
    delete context.document;
  }
  assert(appendedScript && appendedScript.src.includes("unit-missing.js"), "loader should append the missing category script");
}

async function assertRejects(promise, pattern) {
  try {
    await promise;
  } catch (error) {
    assert(pattern.test(error.message), `unexpected rejection: ${error.message}`);
    return;
  }
  throw new Error("expected promise to reject");
}

async function main() {
  const { context, dashboard } = createRuntime();
  const { categories, filters, meta, products, productLoader, templates, utils } = dashboard;

  assert(categories.length === meta.expectedCategoryCount, "meta category count should match categories");
  assert(products.length === meta.expectedProductCount, "meta product count should match products");
  assert(productLoader.productScriptUrl(categories[0]) === `./products/tv.js?v=${meta.cacheVersion}`, "loader URL should use category id and cache version");

  const sample = [
    { id: "unknown", category: "tv", rank: 1, releaseDate: "找不到" },
    { id: "year", category: "tv", rank: 2, releaseDate: "2024" },
    { id: "month", category: "tv", rank: 3, releaseDate: "2024-03" },
    { id: "day", category: "tv", rank: 4, releaseDate: "2025-01-02" },
  ];
  dashboard.state.sort = "releaseDateAsc";
  assert(filters.sortedProducts(sample).map((product) => product.id).join(",") === "year,month,day,unknown", "ascending release date sort should keep unknown last");
  dashboard.state.sort = "releaseDateDesc";
  assert(filters.sortedProducts(sample).map((product) => product.id).join(",") === "day,month,year,unknown", "descending release date sort should keep unknown last");
  dashboard.state.sort = "rank";

  dashboard.state.category = "smartlock";
  const smartLockBrands = filters.brandOptionsForCurrentCategory();
  assert(smartLockBrands.includes("Yale"), "smart lock brands should include Yale");
  assert(!smartLockBrands.includes("ASUS"), "smart lock brands should not include router brands");
  dashboard.state.category = "all";

  assert(utils.escapeHtml(`<a href="x">O'Reilly & Co</a>`) === "&lt;a href=&quot;x&quot;&gt;O&#039;Reilly &amp; Co&lt;/a&gt;", "escapeHtml should escape dangerous characters");

  const foundLowProduct = products.find((product) => product.historicalLow?.status === "found");
  const missingLowProduct = products.find((product) => product.historicalLow?.status === "not_found");
  assert(foundLowProduct, "fixture should contain a found historical low product");
  assert(missingLowProduct, "fixture should contain a missing historical low product");
  assert(templates.historicalLowInfo(foundLowProduct).sourceUrl, "found historical low should expose a source URL");
  assert(templates.historicalLowInfo(missingLowProduct).label === "無法判定", "missing historical low should show unknown label");

  const commonIssueProduct = {
    ...products[0],
    id: "test-common-issue-product",
    issueResearch: {
      status: "common_issue",
      checkedAt: "2026-07-10",
      summary: "LiquidCrystalIssue2026：多人反映閃爍 <script>alert('summary')</script>",
      issues: [
        {
          title: "面板閃爍 <img src=x onerror=alert('title')>",
          detail: "使用一段時間後畫面會短暫變黑 & 閃爍",
          reportCount: 6,
          sources: [
            {
              platform: "Mobile01",
              title: "同型號使用回報 <svg onload=alert('source')>",
              url: "https://www.mobile01.com/topicdetail.php?f=347&t=123456",
            },
            {
              platform: "Reddit",
              title: "Same-model owner reports",
              url: "https://www.reddit.com/r/example/comments/abcdef/same_model_reports/",
            },
            {
              platform: "不安全來源",
              title: "不應成為可點擊連結",
              url: "javascript:alert('unsafe')",
            },
          ],
        },
      ],
    },
  };
  const commonIssueMarkup = templates.cardMarkup(commonIssueProduct);
  assert(commonIssueMarkup.includes('class="issue-research'), "common issue card should render an issue research block");
  assert(commonIssueMarkup.includes('data-issue-status="common_issue"'), "common issue card should expose a semantic warning status");
  assert(commonIssueMarkup.includes("負評／災情查核"), "common issue card should label the research block without relying on color");
  assert(/6\s*(?:位|人)/.test(commonIssueMarkup), "common issue card should show the independent report count");
  assert(commonIssueMarkup.includes("&lt;script&gt;alert(&#039;summary&#039;)&lt;/script&gt;"), "issue summary should be HTML escaped");
  assert(commonIssueMarkup.includes("&lt;img src=x onerror=alert(&#039;title&#039;)&gt;"), "issue title should be HTML escaped");
  assert(commonIssueMarkup.includes("&lt;svg onload=alert(&#039;source&#039;)&gt;"), "issue source title should be HTML escaped");
  assert(!commonIssueMarkup.includes("<script>"), "issue summary must not inject script markup");
  assert(!commonIssueMarkup.includes('href="javascript:'), "issue source links must reject javascript URLs");
  assert(
    commonIssueMarkup.includes('href="https://www.mobile01.com/topicdetail.php?f=347&amp;t=123456" target="_blank" rel="noreferrer"'),
    "safe issue source should remain clickable and isolate the opened page",
  );

  const noCommonIssueProduct = {
    ...products[1],
    id: "test-no-common-issue-product",
    issueResearch: {
      status: "no_common_issue",
      checkedAt: "2026-07-10",
      summary: "截至查核日，查無達門檻的集中負評／災情",
      issues: [],
      checkedSources: [
        {
          platform: "Google",
          query: "example model issues site:mobile01.com",
          queryUrl: "https://www.google.com/search?q=example+model+issues",
        },
        {
          platform: "Reddit",
          query: "example model issues",
          queryUrl: "https://www.reddit.com/search/?q=example%20model%20issues",
        },
        {
          platform: "不安全查詢",
          query: "unsafe query",
          queryUrl: "data:text/html,<script>alert('unsafe')</script>",
        },
      ],
    },
  };
  const noCommonIssueMarkup = templates.cardMarkup(noCommonIssueProduct);
  assert(noCommonIssueMarkup.includes('data-issue-status="no_common_issue"'), "no-common-issue card should expose its semantic status");
  assert(noCommonIssueMarkup.includes("截至查核日，查無達門檻的集中負評／災情"), "no-common-issue card should show the agreed wording");
  assert(noCommonIssueMarkup.includes("查核紀錄"), "no-common-issue card should link to checked sources");
  assert(!noCommonIssueMarkup.includes('href="data:'), "checked-source links must reject data URLs");
  assert(!noCommonIssueMarkup.includes("<script>"), "checked-source URLs must not inject markup");

  const compareIssueMarkup = templates.compareTableMarkup([commonIssueProduct]);
  assert(compareIssueMarkup.includes("負評／災情"), "comparison table should include an issue research row");
  assert(compareIssueMarkup.includes("LiquidCrystalIssue2026"), "comparison table should show the issue summary");
  assert(!compareIssueMarkup.includes("<script>"), "comparison issue text must be HTML escaped");

  products.push(commonIssueProduct);
  try {
    dashboard.state.search = "liquidcrystalissue2026";
    assert(
      filters.filteredProducts().some((product) => product.id === commonIssueProduct.id),
      "search should include issue research summaries",
    );
  } finally {
    products.pop();
    dashboard.state.search = "";
  }

  const c5 = products.find((product) => product.id === "tv-lg-c5-65");
  const reviewManifest = JSON.parse(fs.readFileSync(path.join(root, "product_issue_review_manifest.json"), "utf8"));
  const c5Review = reviewManifest.results.find((review) => review.id === c5.id);
  assert(reviewedDecision(c5, new Map([[c5.id, c5Review]])), "explicit manual review should satisfy the workflow gate");
  assert(
    reviewedDecision(c5, new Map([[c5.id, { ...c5Review, attestation: "" }]])) === null,
    "review without original-page attestation must remain pending",
  );
  assertThrows(
    () => validateExplicitReview({ ...c5Review, queries: [] }, c5),
    "marker must reject review rows without explicit queries",
  );
  assertThrows(
    () => validateExplicitReview({ ...c5Review, candidateReviews: null }, c5),
    "marker must reject review rows without explicit per-candidate decisions",
  );
  assertThrows(
    () => validateExplicitReview({
      ...c5Review,
      queries: c5Review.queries.map((query, index) => (index === 0
        ? { ...query, query: "site:mobile01.com unrelated appliance", queryUrl: "https://www.google.com/search?q=site%3Amobile01.com%20unrelated%20appliance" }
        : query)),
    }, c5),
    "marker must reject a query that does not contain the canonical model",
  );
  validateExplicitReview(c5Review, c5);
  const reportLedger = JSON.parse(fs.readFileSync(path.join(root, "product_issue_report_evidence.json"), "utf8"));
  const explicitReport = reportLedger.reports[0];
  validateExplicitReport(explicitReport);
  assertThrows(
    () => validateExplicitReport({ ...explicitReport, auditNote: "" }),
    "report evidence must reject a missing manual audit note",
  );
  assertThrows(
    () => validateExplicitReport({ ...explicitReport, evidenceExcerpt: "" }),
    "report evidence must reject a missing per-person excerpt",
  );
  assertThrows(
    () => validateExplicitReport({ ...explicitReport, exactModel: false }),
    "report evidence must reject a non-exact-model attestation",
  );
  assertThrows(
    () => validateUniqueReportExcerpts([explicitReport, { ...explicitReport, author: "different-author" }]),
    "two authors on one source must not reuse the same per-person evidence excerpt",
  );

  const pollutedCandidate = {
    title: "Opinions on buying a used LG OLED65C7P (2017 Model)",
    url: "https://www.reddit.com/r/LGOLED/comments/example/oled65c7p/",
  };
  const exactCandidate = {
    title: "LG OLED65C5PTA owner issue report",
    url: "https://www.reddit.com/r/LGOLED/comments/example/oled65c5pta/",
  };
  assert(!candidateMatchesExactModel(c5, pollutedCandidate), "different-model search result must be rejected");
  assert(candidateMatchesExactModel(c5, exactCandidate), "exact-model search result should remain a candidate");
  const aqaraA100 = products.find((product) => product.id === "smartlock-aqara-a100");
  const concatenatedVariantQuery = {
    platform: "Reddit",
    query: '"Aqara A100Pro" problems',
    queryUrl: "https://www.reddit.com/search/?q=%22Aqara%20A100Pro%22%20problems",
    targetHost: "reddit.com",
  };
  assert(!queryTargetsProduct(concatenatedVariantQuery, aqaraA100), "an exact-model query must reject a concatenated longer variant");
  assert(queryUrlMatchesRecord(concatenatedVariantQuery), "the variant regression query should otherwise be reproducible");
  const deceptiveTargetQuery = {
    platform: "Reddit",
    query: 'site:reddit.com.evil.example "Aqara A100" problems',
    queryUrl: "https://www.google.com/search?q=site%3Areddit.com.evil.example%20%22Aqara%20A100%22%20problems",
    targetHost: "reddit.com",
  };
  assert(!queryTargetsWebsite(deceptiveTargetQuery), "a deceptive site token must not count as the target website");
  assert(queryUrlMatchesRecord(deceptiveTargetQuery), "the deceptive-site regression query should otherwise be reproducible");
  assert(
    !candidateMatchesExactModel(aqaraA100, {
      title: "Aqara A100 Pro owner issue report",
      url: "https://www.reddit.com/r/Aqara/comments/example/a100_pro/",
    }),
    "a longer product variant must not count as the exact model",
  );
  assert(
    !candidateMatchesExactModel(aqaraA100, {
      title: "Aqara A100Pro owner issue report",
      url: "https://www.reddit.com/r/Aqara/comments/example/a100pro/",
    }),
    "a directly concatenated longer variant must not count as the exact model",
  );
  const be58uV2 = products.find((product) => product.id === "wifi-asus-rt-be58u-v2");
  assert(
    !candidateMatchesExactModel(be58uV2, {
      title: "ASUS RT-BE58U owner discussion",
      url: "https://www.mobile01.com/topicdetail.php?model=rt-be58u",
    }),
    "a base model must not count as its V2 variant",
  );
  assert(
    !candidateMatchesExactModel({ brand: "ASUS", model: "RT-BE58U" }, {
      title: "ASUS RT-BE58Uv2 owner discussion",
      url: "https://www.snbforums.com/threads/rt-be58uv2.12345/",
    }),
    "a directly concatenated V2 suffix must not count as the base model",
  );
  assert(
    !candidateMatchesExactModel({ brand: "LG", model: "C5" }, {
      title: "LG C55 owner discussion",
      url: "https://www.reddit.com/r/LGOLED/comments/example/c55/",
    }),
    "a longer numeric model token must not count as the exact model",
  );
  const sanitizedSearch = sanitizeSearchCheck(c5, {
    platform: "Yahoo Search",
    query: "exact model query",
    searchUrl: "https://search.yahoo.com/search?p=example",
    result: "candidates_unverified_by_search_only",
    resultCount: 2,
    candidateUrls: [pollutedCandidate.url, exactCandidate.url],
    candidates: [pollutedCandidate, exactCandidate],
    inspectedAt: "2026-07-10T00:00:00+08:00",
  });
  assert(sanitizedSearch.resultCount === 1, "search candidates should be filtered to the exact model");
  assert(sanitizedSearch.candidates[0].url === exactCandidate.url, "sanitized search should keep only the exact-model URL");
  const pendingRow = researchRow(c5, sanitizedSearch, new Map([[c5.id, { ...c5Review, attestation: "" }]]));
  assert(pendingRow.workflowStatus === "pending_manual_review", "invalid review must keep research pending");
  assert(pendingRow.issueResearch === null, "invalid review must not generate no_common_issue");
  const missingCandidateReviewRow = researchRow(c5, sanitizedSearch, new Map([[c5.id, c5Review]]));
  assert(missingCandidateReviewRow.workflowStatus === "pending_manual_review", "an unreviewed exact-model candidate must keep research pending");
  assert(missingCandidateReviewRow.rejectedCandidates.length === 0, "research must not generate a candidate rejection reason");
  const candidateReview = {
    url: exactCandidate.url,
    title: exactCandidate.title,
    outcome: "excluded",
    reviewedAt: "2026-07-10",
    exactModel: true,
    sourceExcerpt: "原頁只出現單一使用者詢問 OLED65C5PTA，沒有同一問題的多人第一人稱回報。",
    independentAuthors: 1,
    specificReason: "原頁只有一位可辨識作者，未達 6 位，亦沒有第二個獨立網站的相同問題證據。",
  };
  const completedReview = {
    ...c5Review,
    attestation: "manual_original_pages_reviewed",
    candidateReviews: [candidateReview],
    representativeSources: [{
      platform: "Reddit",
      title: exactCandidate.title,
      url: exactCandidate.url,
    }],
  };
  const missingRepresentativeSourceRow = researchRow(
    c5,
    sanitizedSearch,
    new Map([[c5.id, { ...completedReview, representativeSources: [] }]]),
  );
  assert(missingRepresentativeSourceRow.workflowStatus === "pending_manual_review", "candidate pages require matching representative sources before completion");
  assertThrows(
    () => validateExplicitReview({
      ...completedReview,
      candidateReviews: [{ ...candidateReview, specificReason: "未達門檻" }],
    }, c5),
    "marker must reject a vague per-candidate reason",
  );
  const completedRow = researchRow(c5, sanitizedSearch, new Map([[c5.id, completedReview]]));
  assert(completedRow.workflowStatus === "completed", "explicit valid review should complete research");
  assert(completedRow.issueResearch.status === "no_common_issue", "explicit no-common decision should generate the agreed status");

  context.location = new URL("https://example.test/index.html?q=OLED&category=monitor&sort=priceAsc");
  context.history = {
    lastUrl: "",
    replaceState(_state, _title, url) {
      this.lastUrl = url;
      context.location = new URL(url);
    },
  };
  dashboard.urlState.applyFromQuery();
  assert(dashboard.state.search === "OLED", "query should restore search text");
  assert(dashboard.state.category === "monitor", "query should restore category");
  assert(dashboard.state.sort === "priceAsc", "query should restore sort");
  dashboard.state.brand = "ASUS";
  dashboard.urlState.syncToQuery();
  assert(context.history.lastUrl.endsWith("?q=OLED&category=monitor&brand=ASUS&sort=priceAsc"), "query sync should persist active filters only");

  await assertLoaderFailureIsClear(context, dashboard);

  console.log("logic check passed");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
