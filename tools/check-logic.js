const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { readDashboardProducts } = require("./read-dashboard-products");
const {
  exactModelMatch,
  isExcludedListing,
  isExplicitlyDiscontinued,
  isReviewedPchomeBinding,
  normalizeIdentity,
  tokenizedIdentity,
} = require("./catalog-maintenance-policy");
const { matchesPchomeProductId, selectPchomeCurrentPrice } = require("./pchome-product-api");
const {
  normalizeExchangeDate,
  replaceMarkerBlock,
} = require("./update-maintenance-metadata");
const {
  buildCompactReport,
  maintenanceReviewReady,
  mergeDiscontinuationReviews,
  pchomeProductId,
  structuredPriceCandidates,
  trustedStructuredPrice,
  updateDashboardContractSource,
  updateDimensionCategoryCounts,
} = require("./run-daily-catalog-maintenance");
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
const {
  ADS_LOADER_ID,
  ADS_LOADER_URL,
  PUBLISHER_ID,
  initializeManualAds,
  isProductionLocation,
  syncUnfilledState,
} = require("../assets/js/ads");

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

function createClassList() {
  const values = new Set();
  return {
    contains(value) {
      return values.has(value);
    },
    toggle(value, force) {
      if (force) values.add(value);
      else values.delete(value);
    },
  };
}

function createAdTestDom(slotCount = 2) {
  const appendedScripts = [];
  const observers = [];
  const slots = Array.from({ length: slotCount }, () => {
    const container = { classList: createClassList() };
    const attributes = new Map();
    return {
      container,
      getAttribute(name) {
        return attributes.get(name) || null;
      },
      setAttribute(name, value) {
        attributes.set(name, value);
      },
      closest(selector) {
        return selector === ".ad-placement" ? container : null;
      },
    };
  });
  const document = {
    head: {
      append(script) {
        appendedScripts.push(script);
      },
    },
    createElement(tagName) {
      return { tagName: tagName.toUpperCase() };
    },
    getElementById(id) {
      return appendedScripts.find((script) => script.id === id) || null;
    },
    querySelectorAll(selector) {
      return selector === ".adsbygoogle" ? slots : [];
    },
  };
  class FakeMutationObserver {
    constructor(callback) {
      this.callback = callback;
      this.records = [];
      observers.push(this);
    }

    observe(target, options) {
      this.records.push({ target, options });
    }
  }

  return {
    appendedScripts,
    document,
    FakeMutationObserver,
    observers,
    slots,
  };
}

function assertManualAdsLogic() {
  const productionLocation = { protocol: "https:", hostname: "appliance.riverye.com" };
  for (const [location, expected] of [
    [productionLocation, true],
    [{ protocol: "http:", hostname: "appliance.riverye.com" }, false],
    [{ protocol: "file:", hostname: "" }, false],
    [{ protocol: "https:", hostname: "localhost" }, false],
    [{ protocol: "https:", hostname: "river-ye.github.io" }, false],
    [{ protocol: "https:", hostname: "appliance.riverye.com.evil.example" }, false],
    [null, false],
  ]) {
    assert(isProductionLocation(location) === expected, `unexpected production-location decision for ${JSON.stringify(location)}`);
  }

  const productionDom = createAdTestDom();
  const adsQueue = [];
  initializeManualAds({
    location: productionLocation,
    document: productionDom.document,
    adsQueue,
    MutationObserver: productionDom.FakeMutationObserver,
  });
  assert(adsQueue.length === 2, "production should enqueue each manual ad slot exactly once");
  assert(productionDom.appendedScripts.length === 1, "production should append the AdSense loader exactly once");
  assert(productionDom.observers.length === 2, "production should observe each slot status");
  const [loader] = productionDom.appendedScripts;
  assert(loader.id === ADS_LOADER_ID, "AdSense loader should use the stable loader id");
  assert(loader.src === ADS_LOADER_URL, "AdSense loader URL mismatch");
  assert(loader.src.endsWith(PUBLISHER_ID), "AdSense loader should identify the approved publisher");
  assert(loader.async === true, "AdSense loader should be async");
  assert(loader.crossOrigin === "anonymous", "AdSense loader should use anonymous CORS");

  initializeManualAds({
    location: productionLocation,
    document: productionDom.document,
    adsQueue,
    MutationObserver: productionDom.FakeMutationObserver,
  });
  assert(adsQueue.length === 2, "repeated initialization should not enqueue slots twice");
  assert(productionDom.appendedScripts.length === 1, "repeated initialization should not append a second loader");
  assert(productionDom.observers.length === 2, "repeated initialization should not attach duplicate observers");

  const [slot] = productionDom.slots;
  syncUnfilledState(slot);
  assert(!slot.container.classList.contains("is-unfilled"), "slot should keep its reserved space before AdSense reports a status");
  slot.setAttribute("data-ad-status", "filled");
  syncUnfilledState(slot);
  assert(!slot.container.classList.contains("is-unfilled"), "filled slot should remain visible");
  slot.setAttribute("data-ad-status", "unfilled");
  syncUnfilledState(slot);
  assert(slot.container.classList.contains("is-unfilled"), "only an explicitly unfilled slot should collapse");
  slot.setAttribute("data-ad-status", "filled");
  syncUnfilledState(slot);
  assert(!slot.container.classList.contains("is-unfilled"), "slot should expand again if AdSense later reports filled");

  const localDom = createAdTestDom();
  const localQueue = [];
  initializeManualAds({
    location: { protocol: "file:", hostname: "" },
    document: localDom.document,
    adsQueue: localQueue,
    MutationObserver: localDom.FakeMutationObserver,
  });
  assert(localQueue.length === 0, "file pages must not enqueue ads");
  assert(localDom.appendedScripts.length === 0, "file pages must not load AdSense");
  assert(localDom.observers.length === 0, "file pages must not attach ad observers");

  const emptyDom = createAdTestDom(0);
  initializeManualAds({
    location: productionLocation,
    document: emptyDom.document,
    adsQueue: [],
    MutationObserver: emptyDom.FakeMutationObserver,
  });
  assert(emptyDom.appendedScripts.length === 0, "pages without manual slots should not load AdSense");
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

function createLoaderRuntime(categoryIds = ["alpha", "beta", "gamma"]) {
  const appendedScripts = [];
  const products = [];
  const categories = categoryIds.map((id) => ({ id }));
  const dashboard = {
    categories,
    meta: { cacheVersion: "unit-loader" },
    products,
    registerProducts(categoryId, items) {
      products.push(...items.map((product) => ({
        ...product,
        category: product.category || categoryId,
      })));
    },
  };
  const context = {
    console,
    Promise,
    Set,
    applianceDashboard: dashboard,
    document: {
      createElement() {
        return {};
      },
      head: {
        append(script) {
          appendedScripts.push(script);
        },
      },
    },
    globalThis: null,
  };
  context.globalThis = context;
  vm.createContext(context);
  vm.runInContext(
    fs.readFileSync(path.join(root, "assets/js/product-loader.js"), "utf8"),
    context,
    { filename: "assets/js/product-loader.js" },
  );

  return {
    appendedScripts,
    dashboard,
  };
}

async function assertLoaderSchedulesAllCategoriesTogether() {
  const {
    appendedScripts,
    dashboard,
  } = createLoaderRuntime();
  let settled = false;
  const loadPromise = dashboard.productLoader.loadAll().then((value) => {
    settled = true;
    return value;
  });

  assert(
    appendedScripts.length === dashboard.categories.length,
    "loader should append every category before any category finishes loading",
  );
  assert(
    appendedScripts.every((script) => script.async === false),
    "parallel product scripts should preserve category execution order",
  );
  assert(
    appendedScripts.map((script) => script.src).join(",")
      === dashboard.categories.map((category) => `./products/${category.id}.js?v=unit-loader`).join(","),
    "loader should schedule category URLs in configured order",
  );

  await Promise.resolve();
  assert(!settled, "loader should wait for every scheduled category");

  dashboard.categories.forEach((category, index) => {
    dashboard.registerProducts(category.id, [{ id: `${category.id}-product` }]);
    appendedScripts[index].onload();
  });

  const result = await loadPromise;
  assert(result === undefined, "loadAll should keep its Promise<void> contract");
  assert(
    dashboard.products.map((product) => product.category).join(",")
      === dashboard.categories.map((category) => category.id).join(","),
    "parallel loading should preserve configured category order",
  );

  await dashboard.productLoader.loadAll();
  assert(
    appendedScripts.length === dashboard.categories.length,
    "loadAll should not append categories that already loaded successfully",
  );
}

async function assertLoaderRequiresNewItemsForCategory() {
  const {
    appendedScripts,
    dashboard,
  } = createLoaderRuntime(["alpha"]);
  dashboard.registerProducts("alpha", [{ id: "alpha-existing" }]);

  const loadPromise = dashboard.productLoader.loadCategory(dashboard.categories[0]);
  dashboard.registerProducts("beta", [{ id: "beta-unrelated" }]);
  appendedScripts[0].onload();

  await assertRejects(
    loadPromise,
    /Product category did not register items: alpha/,
  );
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
  const markerSource = [
    "before",
    "<!-- maintenance:start -->",
    "old",
    "<!-- maintenance:end -->",
    "after",
  ].join("\n");
  assert(
    replaceMarkerBlock(markerSource, "maintenance", "new\nsummary") === [
      "before",
      "<!-- maintenance:start -->",
      "new",
      "summary",
      "<!-- maintenance:end -->",
      "after",
    ].join("\n"),
    "maintenance metadata should replace only the generated marker body",
  );
  assertThrows(
    () => replaceMarkerBlock("missing markers", "maintenance", "summary"),
    "maintenance metadata should reject documents without its markers",
  );
  assert(
    normalizeExchangeDate("Wed, 22 Jul 2026 00:02:31 +0000") === "2026-07-22 00:02 UTC",
    "exchange metadata should normalize API timestamps",
  );
  assert(
    pchomeProductId("https://24h.pchome.com.tw/prod/DPADYE-A900JC4MY") === "DPADYE-A900JC4MY",
    "daily maintenance should extract only canonical PChome product IDs",
  );
  assert(
    pchomeProductId("https://example.com/prod/DPADYE-A900JC4MY") === null,
    "daily maintenance should reject non-PChome product URLs",
  );
  assert(
    isReviewedPchomeBinding("robot-ecovacs-x11-pro", "DMBL0L-A900J5HJ0"),
    "manually reviewed PChome source bindings should allow the exact approved product ID",
  );
  assert(
    !isReviewedPchomeBinding("robot-ecovacs-x11-pro", "DMBL0L-A900IDIPA"),
    "manually reviewed PChome source bindings must reject a different product ID",
  );
  const structuredPrices = structuredPriceCandidates(`
    <script type="application/ld+json">
      {"@type":"Product","offers":{"price":"7,490","priceCurrency":"TWD"}}
    </script>
  `);
  assert(
    structuredPrices.length === 1
      && structuredPrices[0].amount === 7490
      && structuredPrices[0].currency === "TWD",
    "daily maintenance should extract a structured public price without writing it automatically",
  );
  assert(
    trustedStructuredPrice(
      "https://tw.buy.yahoo.com/gdsale/example-1.html",
      structuredPrices,
      "TWD",
    ) === 7490,
    "daily maintenance should accept one exact public Yahoo structured price",
  );
  assert(
    trustedStructuredPrice(
      "https://brand.example/products/model",
      structuredPrices,
      "TWD",
    ) === null,
    "daily maintenance should not auto-write structured prices from unapproved hosts",
  );
  const retainedDiscontinuationReview = mergeDiscontinuationReviews(
    [{ id: "oven-breville-joule", url: "https://www.breville.com/en-us/product/bov950", disposition: "manual_official_evidence_required" }],
    new Map([["oven-breville-joule", {
      id: "oven-breville-joule",
      url: "https://old.example.invalid/bov950",
      disposition: "false_positive_retained",
      reviewedAt: "2026-07-22T14:16:00.000Z",
    }]]),
  )[0];
  assert(retainedDiscontinuationReview.disposition === "false_positive_retained", "a same-date manual discontinuation review must survive a rerun");
  assert(retainedDiscontinuationReview.url === "https://www.breville.com/en-us/product/bov950", "a retained review must use the current candidate URL");
  assert(
    maintenanceReviewReady({ dataDate: "2026-07-22", categoryScan: [{ status: "manually_reviewed" }] }, "2026-07-22"),
    "same-date explicit category reviews should allow finalization",
  );
  assert(
    !maintenanceReviewReady({ dataDate: "2026-07-22", categoryScan: [{ status: "manually_reviewed" }] }, "2026-07-23"),
    "a new data date should require a draft and fresh category reviews",
  );
  const baselineProduct = {
    id: "fixture-product",
    buyUrl: "https://old.example/product",
    buyLabel: "Old retailer",
    image: "https://old.example/image.jpg",
    price: { amount: 1000, currency: "TWD" },
    historicalLow: { status: "not_found" },
  };
  const currentProduct = {
    ...baselineProduct,
    buyUrl: "https://new.example/product",
    buyLabel: "New retailer",
    image: "https://new.example/image.jpg",
    price: { amount: 900, currency: "TWD" },
  };
  const compactChangeFixture = buildCompactReport({
    catalog: { products: [currentProduct], categories: [{ items: [currentProduct] }] },
    baselineById: new Map([[baselineProduct.id, baselineProduct]]),
    raw: {
      sourceRows: [{
        id: currentProduct.id,
        sourceKind: "pchome_api",
        status: "verified_available",
        exactModel: true,
        manualBindingApproved: true,
      }],
      imageRows: [{ id: currentProduct.id, status: "verified" }],
      historicalRows: [],
      foreignPriceChanges: [],
      discontinuedCandidates: [],
    },
    exchange: {},
    checkedAt: "2026-07-22T00:00:00.000Z",
    categoryScan: [],
  });
  assert(compactChangeFixture.summary.linkChanges === 1, "compact maintenance report should detect a changed purchase link");
  assert(compactChangeFixture.summary.imageChanges === 1, "compact maintenance report should detect a changed image link");
  assert(compactChangeFixture.summary.pchomeExactModelVerified === 1, "an exact PChome match should be counted once");
  assert(compactChangeFixture.summary.pchomeReviewedBindingVerified === 0, "a reviewed PChome binding must be counted only as an exact-model fallback");
  assert(compactChangeFixture.changes.links[0].afterUrl === currentProduct.buyUrl, "compact maintenance report should retain the new purchase link");
  assert(compactChangeFixture.changes.images[0].after === currentProduct.image, "compact maintenance report should retain the new image link");
  assert(
    updateDashboardContractSource("const EXPECTED_CATEGORY_COUNT = 25;\nconst EXPECTED_PRODUCT_COUNT = 668;", 669, 26)
      === "const EXPECTED_CATEGORY_COUNT = 26;\nconst EXPECTED_PRODUCT_COUNT = 669;",
    "catalog maintenance should keep dashboard contract counts synchronized",
  );
  assert(
    updateDimensionCategoryCounts(
      '[\n  ["washer", 23],\n  ["dryer", 21],\n  ["washerdryer", 25],\n  ["refrigerator", 23],\n]',
      new Map([["washer", 24], ["dryer", 22], ["washerdryer", 26], ["refrigerator", 24]]),
    ).includes('["washerdryer", 26]'),
    "catalog maintenance should synchronize dimension-category contract counts",
  );

  assert(normalizeIdentity(null) === "", "catalog identity normalization should tolerate null input");
  assert(
    normalizeIdentity("  ＬＧ OLED65－C5PTA  ") === "lgoled65c5pta",
    "catalog identity normalization should fold width, case, whitespace, and punctuation",
  );
  assert(
    tokenizedIdentity("  ＡＳＵＳ RT－BE58U / V2  ").join(",") === "asus,rt,be58u,v2",
    "catalog identity tokenization should preserve meaningful model parts",
  );

  assert(
    exactModelMatch("LG OLED65C5PTA 65-inch television", "OLED65C5PTA"),
    "exact-model policy should accept the canonical model",
  );
  assert(
    exactModelMatch("Samsung RT22M4015S8 / TW refrigerator", "RT22M4015S8/TW"),
    "exact-model policy should tolerate punctuation and spacing differences",
  );
  assert(
    !exactModelMatch("Aqara A100 Pro smart lock", "A100"),
    "exact-model policy should reject a separated related-model suffix",
  );
  assert(
    !exactModelMatch("Aqara A100Pro smart lock", "A100"),
    "exact-model policy should reject a concatenated related-model suffix",
  );
  assert(
    !exactModelMatch("ASUS RT-BE58U V2 router", "RT-BE58U"),
    "exact-model policy should reject a newer hardware revision",
  );
  assert(
    !exactModelMatch("ASUS RT-BE58U router", "RT-BE58U V2"),
    "exact-model policy should reject a base model for a revision-specific product",
  );
  assert(
    !exactModelMatch("LG C55 owner discussion", "C5"),
    "exact-model policy should reject a longer numeric model token",
  );
  assert(!exactModelMatch("anything", ""), "exact-model policy should reject an empty model");

  for (const listing of [
    "Samsung OLED TV 二手品",
    "Dyson refurbished vacuum",
    "LG display model refrigerator",
    "Sony open-box television",
    "Panasonic 配件專用底座",
    "Coway 替換濾心耗材組",
    { title: "ASUS router", condition: "Pre-owned" },
  ]) {
    assert(isExcludedListing(listing), `catalog policy should exclude ineligible listing: ${JSON.stringify(listing)}`);
  }
  assert(
    !isExcludedListing("LG OLED65C5PTA 65-inch 4K OLED TV 全新品"),
    "catalog policy should keep a normal new-product listing",
  );
  assert(
    !isExcludedListing("POIEMA P50 空氣清淨機（無耗材、水洗濾網）"),
    "catalog policy should not treat an explicit no-consumables benefit as a consumable listing",
  );

  for (const statement of [
    "本產品已停產。",
    "原廠已停止生產此型號。",
    "This model has been discontinued by the manufacturer.",
    "This product is no longer manufactured.",
  ]) {
    assert(isExplicitlyDiscontinued(statement), `explicit discontinuation wording should be accepted: ${statement}`);
  }
  for (const statement of [
    "請問這款是否已停產？",
    "網友猜測可能停產。",
    "本商品目前售完，待原廠補貨。",
    "This model is temporarily out of stock.",
    "This model has not been discontinued.",
  ]) {
    assert(!isExplicitlyDiscontinued(statement), `weak or negated discontinuation wording should be rejected: ${statement}`);
  }

  assert(
    selectPchomeCurrentPrice({ P: 79900, Low: 49618 }) === 49618,
    "PChome public discount price should take precedence over the network price",
  );
  assert(
    selectPchomeCurrentPrice({ P: 41310, Low: null }) === 41310,
    "PChome network price should be used when no public discount price exists",
  );
  assert(
    selectPchomeCurrentPrice({ P: null, Low: 0 }) === null,
    "PChome products without a positive public price must be rejected",
  );
  assert(
    matchesPchomeProductId("DPADYE-A900JC4MY", { Id: "DPADYE-A900JC4MY-000" }),
    "PChome API product IDs should match the requested SKU and item suffix",
  );
  assert(
    !matchesPchomeProductId("DPADYE-A900JC4MY", { Id: "DPADYE-A900OTHER" }),
    "PChome API product ID drift must be rejected",
  );

  assertManualAdsLogic();
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

  assert(
    utils.normalizeText("  Ｗｉ－Ｆｉ， ６５ 吋 ／ 2.5 cm  ") === "wifi 65吋 2.5cm",
    "search normalization should fold width and case, remove punctuation, collapse whitespace, and join common units",
  );
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

  const multiTokenSearchProduct = {
    ...commonIssueProduct,
    id: "test-multi-token-search-product",
    brand: "SearchBrand",
    model: "UnitModel",
    name: "Wi-Fi 7 測試機",
  };
  products.push(multiTokenSearchProduct);
  try {
    dashboard.state.search = "WIFI unitmodel liquidcrystalissue2026";
    assert(
      filters.filteredProducts().some((product) => product.id === multiTokenSearchProduct.id),
      "search should require every normalized token while allowing tokens to match across product fields and issue summaries",
    );
    dashboard.state.search = "wifi unitmodel missing-token";
    assert(
      !filters.filteredProducts().some((product) => product.id === multiTokenSearchProduct.id),
      "search should reject a product when any query token is missing",
    );
  } finally {
    products.pop();
    dashboard.state.search = "";
  }

  const labeledSearchProduct = {
    ...products[0],
    id: "test-labeled-search-product",
    category: "wifi",
    budget: "value",
    channel: "global",
  };
  products.push(labeledSearchProduct);
  try {
    dashboard.state.search = "工作網路 無線路由器 CP 值 海外通路";
    assert(
      filters.filteredProducts().some((product) => product.id === labeledSearchProduct.id),
      "search corpus should include category labels and groups plus budget and channel labels",
    );
  } finally {
    products.pop();
    dashboard.state.search = "";
  }

  const retailerSearchProduct = {
    ...products[0],
    id: "test-retailer-search-product",
    buyLabel: "PChome 24h 購物",
  };
  products.push(retailerSearchProduct);
  try {
    dashboard.state.search = "PChome 24h";
    assert(
      filters.filteredProducts().some((product) => product.id === retailerSearchProduct.id),
      "search corpus should include the actual retailer name from buyLabel",
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
    inspectedAt: `${c5Review.reviewedAt}T00:00:00+08:00`,
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
    reviewedAt: c5Review.reviewedAt,
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
  const noCandidateSearch = {
    ...sanitizedSearch,
    result: "no_exact_model_result",
    resultCount: 0,
    candidateUrls: [],
    candidates: [],
  };
  const completedFromMultipleSearches = researchRow(
    c5,
    [noCandidateSearch, sanitizedSearch],
    new Map([[c5.id, completedReview]]),
  );
  assert(
    completedFromMultipleSearches.workflowStatus === "completed",
    "decision rebuild should accept a review covering candidates across prior search checks",
  );
  assert(
    completedFromMultipleSearches.searchChecks.length === 2,
    "decision rebuild should preserve every prior search check as evidence",
  );
  const emptyCandidateReview = {
    ...c5Review,
    candidateReviews: [],
    representativeSources: [],
  };
  const unreviewedLaterCandidateRow = researchRow(
    c5,
    [noCandidateSearch, sanitizedSearch],
    new Map([[c5.id, emptyCandidateReview]]),
  );
  assert(
    unreviewedLaterCandidateRow.workflowStatus === "pending_manual_review",
    "decision rebuild must not ignore an exact-model candidate from a later search check",
  );
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

  await assertLoaderSchedulesAllCategoriesTogether();
  await assertLoaderRequiresNewItemsForCategory();
  await assertLoaderFailureIsClear(context, dashboard);

  console.log("logic check passed");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
