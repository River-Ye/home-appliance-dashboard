const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { readDashboardProducts } = require("./read-dashboard-products");
const {
  exactModelMatch,
  exactProductModelMatch,
  hasCompleteCompositeSystemIdentityAndPrice,
  hasOfficialSuggestedPriceSource,
  isExcludedListing,
  isExplicitlyDiscontinued,
  isExplicitlyUnavailable,
  isReviewedPchomeBinding,
  normalizeIdentity,
  tokenizedIdentity,
} = require("./catalog-maintenance-policy");
const { matchesPchomeProductId, selectPchomeCurrentPrice } = require("./pchome-product-api");
const {
  AIRCON_SPEC_PREFIXES,
  DIMENSION_PATTERN,
  JAPANESE_BRAND_ROSTER,
  MEASUREMENT_PRIORITY_CATEGORIES,
  NEW_DIMENSION_CATEGORIES,
  WEIGHT_CATEGORIES,
  WEIGHT_PATTERN,
  WATERHEATER_SPEC_PREFIXES,
} = require("./dashboard-contract");
const {
  validateAirconProduct,
  validatePriceAndInstallationContract,
  validateWaterheaterProduct,
} = require("./verify-data");
const {
  buildJapaneseBrandReview,
  canonicalJapaneseBrand,
  isEligibleTaiwanCoverageProduct,
  sameCatalogIdentity,
} = require("./japanese-brand-audit");
const {
  normalizeExchangeDate,
  replaceMarkerBlock,
  renderMaintenanceSummary,
  updateReadmeMetadata,
} = require("./update-maintenance-metadata");
const {
  applyExchangeRates,
  buildCompactReport,
  categoryReviewProvenance,
  currentCategoryScan,
  exchangeRateRequestUrl,
  exchangeRatesFromPayload,
  loadCatalogFromGit,
  maintenanceCacheVersion,
  maintenanceReviewReady,
  mergeDiscontinuationReviews,
  pchomeProductId,
  selectPreviousCategoryReview,
  structuredPriceCandidates,
  syncHistoricalResearchRows,
  trustedStructuredPrice,
  updateDashboardContractSource,
  updateDimensionCategoryCounts,
  visiblePageText,
} = require("./run-daily-catalog-maintenance");
const { validateExplicitReview } = require("./mark-product-issue-review");
const { validateExplicitReport, validateUniqueReportExcerpts } = require("./verified-product-issues");
const {
  queryTargetsProduct,
  queryTargetsWebsite,
  queryUrlMatchesRecord,
} = require("./product-issue-validation");
const {
  buildResearchDocument,
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

function japaneseBrandReviewFixture(checkedAt) {
  return JAPANESE_BRAND_ROSTER.map((brand) => ({
    brand,
    status: "no_relevant_line",
    checkedAt,
    officialSources: ["https://example.test/official-catalog"],
    existingProductIds: [],
    addedProductIds: [],
    reason: "Official catalog reviewed for this category.",
  }));
}

function reviewedCategoryFixture({
  category = "fixture",
  dataDate,
  reviewedAt,
  ...overrides
}) {
  return {
    category,
    status: "manually_reviewed",
    reviewedAt,
    acceptedCandidates: [],
    trackedOrRejectedCandidates: [],
    japaneseBrandReview: japaneseBrandReviewFixture(dataDate),
    ...overrides,
  };
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
  assert(
    DIMENSION_PATTERN.test("尺寸：不含底座 寬 144.1 x 深 4.5 x 高 82.6 cm；含底座 寬 144.1 x 深 26.7 x 高 89.6 cm"),
    "dimension contract should accept separate TV stand configurations",
  );
  assert(
    DIMENSION_PATTERN.test("尺寸：不含底座 寬 144.1 x 深 2.4 x 高 82.6 cm；含底座 寬 144.1 x 深 26.3 x 高 86.5／91 cm"),
    "dimension contract should preserve official alternate stand positions",
  );
  assert(
    DIMENSION_PATTERN.test("尺寸：主機 寬 123.2 x 深 13.8 x 高 7 cm；重低音 寬 24.9 x 深 24.9 x 高 25.1 cm"),
    "dimension contract should accept soundbar component measurements",
  );
  assert(DIMENSION_PATTERN.test("尺寸：查不到"), "dimension contract should accept the agreed not-found text");
  assert(!DIMENSION_PATTERN.test("尺寸：600 x 620 x 1965 mm"), "dimension contract should reject unlabeled measurement order");
  assert(!DIMENSION_PATTERN.test("尺寸：包裝 寬 60 x 深 62 x 高 196.5 cm"), "dimension contract should reject packaging dimensions");
  assert(
    WEIGHT_PATTERN.test("重量：主機 7.7 kg；重低音 11.7 kg；後環繞 3.4 kg"),
    "weight contract should accept soundbar component weights",
  );
  assert(WEIGHT_PATTERN.test("重量：查不到"), "weight contract should accept the agreed not-found text");
  assert(WEIGHT_PATTERN.test("重量：約 15.7 kg"), "weight contract should preserve an explicit approximate qualifier");
  assert(WEIGHT_PATTERN.test("重量：75±5 kg"), "weight contract should preserve an official plus-minus tolerance");
  assert(!WEIGHT_PATTERN.test("重量：毛重 20 kg"), "weight contract should reject gross weight");
  assert(NEW_DIMENSION_CATEGORIES.has("bidet"), "dimension contract should cover bidets");
  assert(MEASUREMENT_PRIORITY_CATEGORIES.has("garmentcare"), "measurement display contract should surface garment-care dimensions");
  assert(!MEASUREMENT_PRIORITY_CATEGORIES.has("monitor"), "measurement display contract should not reorder unrelated monitor specs");
  assert(WEIGHT_CATEGORIES.has("oven"), "weight contract should cover multifunction ovens");

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
    [
      ["blender-extra-8-dmay0g-a900agmd8", "DMAY0G-A900AGMD8"],
      ["blender-extra-9-qbao0f-a900as2dj", "QBAO0F-A900AS2DJ"],
      ["blender-extra-16-dmay01a900gfjco", "DMAY01-A900GFJCO"],
      ["chair-cougar-stryder", "DQBJ0A-A900JCVY5"],
      ["cookware-extra-17-deawmja900jmza5", "DEAWMJ-A900JMZA5"],
      ["cookware-extra-19-dees01a900iq6x3", "DEES01-A900IQ6X3"],
      ["cookware-fissler-levital-28cm", "DEAWED-A900HZZIP"],
      ["cookware-wmf-astoria-20cm-2-5l", "DEAWMJ-A900JN626"],
      ["cookware-wmf-durado-24cm", "DEAWMW-A900JCBKJ"],
      ["cookware-zwilling-joy-plus-24cm", "DEAWMW-A900J5MY9"],
      ["dishwasher-asko-dbi544id-w-tw", "DMBR16-A900HZZEG"],
      ["dishwasher-extra-17-dmbr17a900ihtz3", "DMBR17-A900IHTZ3"],
      ["dishwasher-haier-h500", "DMBR25-A900IUNDB"],
      ["dryer-panasonic-nh-80rz-w", "DPAI1H-A900I7ZB7"],
      ["fan-extra-8-dmablm-a900eorp0", "DMABLM-A900EORP0"],
      ["garmentcare-lg-r723wg", "DPAI1L-A900HWRUQ"],
      ["knife-extra-17-debm2ca900j9cyp", "DEBM2C-A900J9CYP"],
      ["knife-wmf-18cm", "DEAWRU-A900HDL2T"],
      ["monitor-dell-aw3225qf", "DSABOK-A900HB1B5"],
      ["monitor-samsung-s32hg806es", "DSABSK-A900K0G32"],
      ["refrigerator-hitachi-hrbn5366df", "DPAC95-A900HE4RJ"],
      ["refrigerator-hitachi-rv469", "DPACGV-A900BFMHM"],
      ["robot-roborock-qrevo-edge-2-flow", "DMBL1C-A900K7R6R"],
      ["smartlock-panasonic-g11", "DQBS4N-A900K1WBU"],
      ["standingdesk-irocks-d01-120", "DQBJ4C-A900I9XVY"],
      ["standingdesk-irocks-d01-150", "DQBJ4C-A900HUG3C"],
      ["standingdesk-irocks-d01-160", "DQBJ4C-A900ITV12"],
      ["standingdesk-irocks-d01-180", "DQBJ4C-A900HUGSO"],
      ["tv-extra-8-dpad09-a900j9faz", "DPAD09-A900J9FAZ"],
      ["tv-extra-18-dpadtoa900jne73", "DPADTO-A900JNMOP"],
      ["tv-jvc-70tg2", "DPADK9-A900HY2CU"],
      ["tv-philips-70pqt8159", "DPADIK-A900K0GIF"],
      ["vac-lg-a9x", "DMAX8K-A900HLX9W"],
      ["waterdispenser--uw-2262hw-1", "DMAWEM-A900GDIXH"],
      ["waterdispenser-sakura-p0532", "DMCI0O-A900K3T62"],
      ["washerdryer-panasonic-na-sd10tb", "DPAI1H-A900JXCDB"],
      ["wifi-asus-zenwifi-bd5-2pack", "DSBC0Z-A900I6OJ2"],
    ].every(([productId, pchomeProductId]) => isReviewedPchomeBinding(productId, pchomeProductId)),
    "manually verified exact-model PChome pages should keep their approved product bindings",
  );
  assert(
    [
      ["blender-xiaomi-mjpbj01demtw", "DMAYFG-A900IXDP8"],
      ["dishwasher-extra-17-dmbr17a900ihtz3", "DMBR17-A900IHTZ4"],
      ["fan-extra-8-dmablm-a900eorp0", "DMABLM-A900EORP1"],
      ["refrigerator-hitachi-hrbn5366df", "DPAC95-A900HE4VA"],
      ["refrigerator-hitachi-rv469", "DPACGV-A900BFMHN"],
      ["tv-extra-18-dpadtoa900jne73", "DPADTO-A900JNE73"],
      ["waterdispenser-sakura-p0532", "DMCI0O-A900K57Y2"],
      ["wifi-asus-zenwifi-bd5-2pack", "DRAF01-A900I3ETA"],
    ].every(([productId, pchomeProductId]) => !isReviewedPchomeBinding(productId, pchomeProductId)),
    "generic or conflicting PChome titles must remain outside the reviewed bindings",
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
  const brevillePageWithGlobalTranslation = `
    <html>
      <head><script>window.translations = {"legacyAlert":"This model has been discontinued."};</script></head>
      <body><main><h1>Joule Oven Air Fryer Pro BOV950</h1><button>Add to cart</button></main></body>
    </html>
  `;
  assert(
    !isExplicitlyDiscontinued(visiblePageText(brevillePageWithGlobalTranslation)),
    "hidden global translation strings must not create a discontinued-product candidate",
  );
  assert(
    isExplicitlyDiscontinued(visiblePageText("<main><p>This model has been discontinued.</p></main>")),
    "visible official product status must still create a discontinued-product candidate",
  );
  assert(
    isExplicitlyUnavailable(visiblePageText("<main><h1>AT-042AI</h1><p>已停售</p></main>"))
      && isExplicitlyUnavailable(visiblePageText("<main><button>已售完，貨到通知我</button></main>"))
      && !isExplicitlyUnavailable(visiblePageText("<main><p>目前可加入購物車</p></main>")),
    "an explicit visible sold status must not be treated as available",
  );
  assert(
    maintenanceReviewReady({
      dataDate: "2026-07-22",
      categoryScan: [reviewedCategoryFixture({ dataDate: "2026-07-22", reviewedAt: "2026-07-22T14:16:00.000Z" })],
    }, "2026-07-22"),
    "same-date explicit category reviews should allow finalization",
  );
  const semanticReviewDate = "2026-07-22";
  const semanticCategory = { id: "monitor", label: "電腦螢幕" };
  const semanticProduct = {
    id: "monitor-sony-semantic-fixture",
    category: "monitor",
    brand: "Sony",
    model: "FIXTURE-1",
    rank: 1,
    channel: "tw",
    price: { currency: "TWD", converted: 1000 },
    voltage: "110V／60Hz",
    warranty: "台灣保固一年",
  };
  const semanticBaseline = new Map([[semanticProduct.id, semanticProduct]]);
  const semanticReview = buildJapaneseBrandReview({
    category: semanticCategory,
    products: [semanticProduct],
    baselineById: semanticBaseline,
    checkedAt: semanticReviewDate,
  });
  const semanticReport = {
    dataDate: semanticReviewDate,
    checkedAt: "2026-07-22T14:16:01.000Z",
    categoryScan: [reviewedCategoryFixture({
      category: semanticCategory.id,
      dataDate: semanticReviewDate,
      reviewedAt: "2026-07-22T14:16:00.000Z",
      japaneseBrandReview: semanticReview,
    })],
  };
  const semanticContext = {
    categories: [semanticCategory],
    products: [semanticProduct],
    baselineById: semanticBaseline,
  };
  assert(
    maintenanceReviewReady(semanticReport, semanticReviewDate, semanticContext),
    "the maintenance write gate should accept a Japanese-brand matrix derived from the current catalog and baseline",
  );
  const carriedSemanticProduct = {
    ...semanticProduct,
    price: { currency: "TWD", amount: 1000, converted: 1000, basis: "retailer_current" },
    installation: { status: "not_stated", note: "fixture" },
  };
  const carriedSemanticReview = buildJapaneseBrandReview({
    category: semanticCategory,
    products: [carriedSemanticProduct],
    baselineById: new Map(),
    checkedAt: semanticReviewDate,
  });
  const carriedSemanticReport = {
    ...semanticReport,
    categoryReviewProvenance: "same_date_carried_forward",
    categoryScan: [reviewedCategoryFixture({
      category: semanticCategory.id,
      dataDate: semanticReviewDate,
      reviewedAt: "2026-07-22T14:16:00.000Z",
      acceptedCandidates: [carriedSemanticProduct.id],
      japaneseBrandReview: carriedSemanticReview,
    })],
  };
  assert(
    carriedSemanticReview.find((review) => review.brand === "Sony")?.status === "covered_added"
      && maintenanceReviewReady(carriedSemanticReport, semanticReviewDate, {
        categories: [semanticCategory],
        products: [carriedSemanticProduct],
        baselineById: new Map([[carriedSemanticProduct.id, carriedSemanticProduct]]),
      }),
    "a same-date price-only rerun should preserve a valid carried-forward added-product matrix",
  );
  const semanticAddedProduct = {
    ...carriedSemanticProduct,
    id: "monitor-sony-semantic-added",
    brand: "Dell",
    model: "FIXTURE-2",
    rank: 2,
  };
  assert(
    !maintenanceReviewReady(carriedSemanticReport, semanticReviewDate, {
      categories: [semanticCategory],
      products: [carriedSemanticProduct, semanticAddedProduct],
      baselineById: new Map([[carriedSemanticProduct.id, carriedSemanticProduct]]),
    }),
    "a non-Japanese catalog addition must reject a carried-forward review that omits the new product",
  );
  assert(
    !maintenanceReviewReady(carriedSemanticReport, semanticReviewDate, {
      categories: [semanticCategory],
      products: [],
      baselineById: new Map([[carriedSemanticProduct.id, carriedSemanticProduct]]),
    }),
    "a catalog removal must reject a carried-forward review without a reviewed removal",
  );
  const carriedTvCategory = { id: "tv", label: "電視" };
  const carriedTvProduct = {
    ...carriedSemanticProduct,
    id: "tv-sony-carried-semantic-fixture",
    category: carriedTvCategory.id,
    model: "TV-FIXTURE-1",
  };
  const mixedSemanticReport = {
    ...carriedSemanticReport,
    categoryReviewProvenance: "mixed_current_and_carried_forward",
    summary: { newProductsAdded: [semanticAddedProduct.id] },
    categoryScan: [
      reviewedCategoryFixture({
        category: semanticCategory.id,
        dataDate: semanticReviewDate,
        reviewedAt: "2026-07-22T14:16:00.000Z",
        acceptedCandidates: [carriedSemanticProduct.id, semanticAddedProduct.id],
        japaneseBrandReview: buildJapaneseBrandReview({
          category: semanticCategory,
          products: [carriedSemanticProduct, semanticAddedProduct],
          baselineById: new Map([[carriedSemanticProduct.id, carriedSemanticProduct]]),
          checkedAt: semanticReviewDate,
        }),
      }),
      reviewedCategoryFixture({
        category: carriedTvCategory.id,
        dataDate: semanticReviewDate,
        reviewedAt: "2026-07-22T14:15:00.000Z",
        acceptedCandidates: [carriedTvProduct.id],
        japaneseBrandReview: buildJapaneseBrandReview({
          category: carriedTvCategory,
          products: [carriedTvProduct],
          baselineById: new Map(),
          checkedAt: semanticReviewDate,
        }),
      }),
    ],
  };
  assert(
    maintenanceReviewReady(mixedSemanticReport, semanticReviewDate, {
      categories: [semanticCategory, carriedTvCategory],
      products: [carriedSemanticProduct, semanticAddedProduct, carriedTvProduct],
      baselineById: new Map([
        [carriedSemanticProduct.id, carriedSemanticProduct],
        [carriedTvProduct.id, carriedTvProduct],
      ]),
    }),
    "a mixed report should refresh the changed category while preserving an unchanged carried category",
  );
  const reviewedRemovalReport = {
    ...carriedSemanticReport,
    categoryReviewProvenance: "mixed_current_and_carried_forward",
    summary: { discontinuedRemoved: [carriedSemanticProduct.id] },
    categoryScan: [reviewedCategoryFixture({
      category: semanticCategory.id,
      dataDate: semanticReviewDate,
      reviewedAt: "2026-07-22T14:16:00.000Z",
      acceptedCandidates: [carriedSemanticProduct.id],
      japaneseBrandReview: buildJapaneseBrandReview({
        category: semanticCategory,
        products: [],
        baselineById: new Map([[carriedSemanticProduct.id, carriedSemanticProduct]]),
        checkedAt: semanticReviewDate,
      }),
    })],
  };
  assert(
    maintenanceReviewReady(reviewedRemovalReport, semanticReviewDate, {
      categories: [semanticCategory],
      products: [],
      baselineById: new Map([[carriedSemanticProduct.id, carriedSemanticProduct]]),
    }),
    "a reviewed removal should allow its same-date accepted candidate to remain in provenance",
  );
  const changedIdentityProduct = { ...semanticProduct, model: "FIXTURE-2" };
  assert(
    !sameCatalogIdentity(changedIdentityProduct, semanticProduct)
      && !maintenanceReviewReady(semanticReport, semanticReviewDate, {
        ...semanticContext,
        products: [changedIdentityProduct],
      }),
    "the maintenance write gate must reject reusing a product ID for a different exact model",
  );
  assert(
    sameCatalogIdentity(
      { ...semanticProduct, brand: "Mitsubishi Electric", model: "MJ-EHV220KX-TW" },
      { ...semanticProduct, brand: "Mitsubishi", model: "MJ-EHV220KX-TW" },
    ),
    "catalog identity may preserve an exact model while upgrading the legacy Mitsubishi label to confirmed Mitsubishi Electric",
  );
  assert(
    !sameCatalogIdentity(
      { ...semanticProduct, brand: "Mitsubishi Electric", model: "MJ-EHV220KX-TW" },
      { ...semanticProduct, brand: "Mitsubishi Heavy", model: "MJ-EHV220KX-TW" },
    ),
    "catalog identity must never merge Mitsubishi Heavy into Mitsubishi Electric",
  );
  const auditedSemanticProduct = {
    ...semanticProduct,
    price: { ...semanticProduct.price, converted: 900 },
  };
  assert(
    maintenanceReviewReady(semanticReport, semanticReviewDate, {
      ...semanticContext,
      products: [auditedSemanticProduct],
    }),
    "the maintenance write gate must remain stable when the same-run price audit changes a representative product price",
  );
  assert(
    !maintenanceReviewReady({
      ...semanticReport,
      categoryScan: [reviewedCategoryFixture({
        category: semanticCategory.id,
        dataDate: semanticReviewDate,
        reviewedAt: "2026-07-22T14:16:00.000Z",
      })],
    }, semanticReviewDate, semanticContext),
    "the maintenance write gate must reject a structurally valid but semantically false Japanese-brand matrix",
  );
  assert(
    !maintenanceReviewReady({
      dataDate: "2026-07-22",
      checkedAt: "2026-07-22T14:16:01.000Z",
      categoryScan: [{ status: "manually_reviewed", reviewedAt: "2026-07-22T14:16:00.000Z" }],
    }, "2026-07-22"),
    "a category review without the complete Japanese-brand matrix must not allow finalization",
  );
  assert(
    !maintenanceReviewReady({
      dataDate: "2026-07-22",
      categoryScan: [reviewedCategoryFixture({ dataDate: "2026-07-22", reviewedAt: "2026-07-22T14:16:00.000Z" })],
    }, "2026-07-23"),
    "a new data date should require a draft and fresh category reviews",
  );
  assert(
    !maintenanceReviewReady({
      dataDate: "2026-07-22",
      categoryScan: [reviewedCategoryFixture({ dataDate: "2026-07-22", reviewedAt: null })],
    }, "2026-07-22"),
    "a manual category decision without a review timestamp must not allow finalization",
  );
  assert(
    !maintenanceReviewReady({
      dataDate: "2026-07-22",
      checkedAt: "2026-07-22T14:16:00.000Z",
      categoryScan: [reviewedCategoryFixture({ dataDate: "2026-07-22", reviewedAt: "2026-07-22T14:17:00.000Z" })],
    }, "2026-07-22"),
    "a category review timestamp after the final audit checkpoint must not allow finalization",
  );
  const originalCategoryReviewAt = "2026-07-22T14:16:00.000Z";
  const retainedCategoryReview = currentCategoryScan(
    [{ categoryId: "oven", items: [{ id: "fixture-product" }] }],
    [{
      category: "oven",
      status: "manually_reviewed",
      decision: "no_eligible_addition",
      reviewedAt: originalCategoryReviewAt,
    }],
    "2026-07-22T20:00:00.000Z",
  )[0];
  assert(
    retainedCategoryReview.reviewedAt === originalCategoryReviewAt,
    "a same-date category rerun must preserve the actual manual review timestamp",
  );
  const japaneseReview = buildJapaneseBrandReview({
    category: { id: "monitor", label: "電腦螢幕" },
    products: [
      { id: "monitor-sony-existing", category: "monitor", brand: "Sony", model: "OLD-1", rank: 2, channel: "tw", price: { currency: "TWD", converted: 32000 } },
      {
        id: "monitor-sony-added", category: "monitor", brand: "Sony", model: "NEW-1", rank: 1, channel: "tw",
        price: { currency: "TWD", amount: 29000, converted: 29000, basis: "retailer_current" },
        installation: { status: "not_stated", note: "fixture" },
        voltage: "110V／60Hz", warranty: "台灣公司貨保固",
      },
    ],
    baselineById: new Map([["monitor-sony-existing", {
      id: "monitor-sony-existing", category: "monitor", brand: "Sony", model: "OLD-1",
    }]]),
    checkedAt: "2026-08-14",
  });
  assert(japaneseReview.length === 9, "Japanese-brand audit must create the complete 9-brand row set");
  const sonyMonitorReview = japaneseReview.find((review) => review.brand === "Sony");
  assert(
    sonyMonitorReview.status === "covered_supplemented"
      && sonyMonitorReview.existingProductIds[0] === "monitor-sony-existing"
      && sonyMonitorReview.addedProductIds[0] === "monitor-sony-added",
    "Japanese-brand audit must distinguish existing and supplemented representative products",
  );
  assert(
    japaneseReview.find((review) => review.brand === "HITACHI")?.status === "no_relevant_line",
    "Japanese-brand audit must record an explicit no-line decision for uncovered categories",
  );
  const overseasJapaneseReview = buildJapaneseBrandReview({
    category: { id: "garmentcare", label: "電子衣櫥（衣物護理機）" },
    products: [{
      id: "garmentcare-panasonic-overseas",
      category: "garmentcare",
      brand: "Panasonic",
      model: "HCC-R600AL-X",
      rank: 1,
      channel: "global",
      price: { currency: "JPY", converted: 66442 },
      voltage: "日本 100V／50–60Hz",
      warranty: "日本地區保固；不提供台灣原廠保固",
    }],
    baselineById: new Map([["garmentcare-panasonic-overseas", {}]]),
    checkedAt: "2026-08-14",
  });
  const overseasPanasonicReview = overseasJapaneseReview.find((review) => review.brand === "Panasonic");
  assert(
    overseasPanasonicReview.status === "no_eligible_taiwan_model"
      && overseasPanasonicReview.existingProductIds.length === 0,
    "Japanese-brand audit must not count an overseas reference as eligible Taiwan coverage",
  );
  assert(canonicalJapaneseBrand("Hitachi") === "HITACHI", "Hitachi alias must normalize to HITACHI");
  assert(canonicalJapaneseBrand("Mitsubishi Electric") === "Mitsubishi Electric", "the full Mitsubishi Electric name must normalize");
  assert(canonicalJapaneseBrand("Mitsubishi") === null, "bare Mitsubishi must not be assumed to mean Mitsubishi Electric");
  assert(
    !isEligibleTaiwanCoverageProduct({
      channel: "tw",
      price: { currency: "TWD", amount: 1000, converted: 1000, basis: "retailer_current" },
      installation: { status: "not_stated", note: "fixture" },
      voltage: "日本 100V／60Hz",
      warranty: "台灣保固",
    }, { requireNewContract: true }),
    "new Japanese-brand coverage must reject a Japan-only 100V product even when its frequency is 60Hz",
  );
  assert(
    !isEligibleTaiwanCoverageProduct({
      channel: "tw",
      price: { currency: "TWD", converted: 1000, basis: "retailer_current" },
      installation: { status: "not_stated", note: "fixture" },
      voltage: "110V／60Hz",
      warranty: "台灣保固",
    }, { requireNewContract: true }),
    "new Japanese-brand coverage must reject a product without a numeric source price amount",
  );
  assert(
    isEligibleTaiwanCoverageProduct({
      channel: "tw",
      price: { currency: "TWD", amount: 12900, converted: 12900, basis: "retailer_current" },
      installation: { status: "not_stated", note: "fixture" },
      voltage: "原廠適配器輸出 19V／3.42A；BSMI 驗證登錄 R31417",
      warranty: "台灣公司貨保固",
    }, { requireNewContract: true }),
    "a BSMI-registered Taiwan product with an explicit external-adapter output must remain eligible",
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
  assertThrows(
    () => buildCompactReport({
      catalog: {
        products: [{ ...currentProduct, category: "monitor", brand: "Sony", model: "NEW-2" }],
        categories: [{ items: [{ ...currentProduct, category: "monitor", brand: "Sony", model: "NEW-2" }] }],
      },
      baselineById: new Map([[baselineProduct.id, {
        ...baselineProduct,
        category: "monitor",
        brand: "Sony",
        model: "OLD-1",
      }]]),
      raw: { sourceRows: [], imageRows: [], historicalRows: [], foreignPriceChanges: [], discontinuedCandidates: [] },
      exchange: {},
      checkedAt: "2026-08-14T00:00:00.000Z",
      categoryScan: [],
    }),
    "compact maintenance must reject reusing a product ID for a different exact model",
  );
  const removedProduct = {
    ...baselineProduct,
    id: "officially-discontinued-product",
  };
  const confirmedDiscontinuationReview = {
    id: removedProduct.id,
    model: "Official Model",
    url: "https://brand.example/products/official-model",
    disposition: "confirmed_official_discontinued_remove",
    reviewedAt: "2026-07-28T03:27:00.000Z",
    reviewEvidence: {
      sourceKind: "official",
      exactModelConfirmed: true,
      sourceTitle: "Official exact-model product page",
      evidenceSnippet: "The exact-model page marks this product as discontinued.",
    },
  };
  assertThrows(
    () => buildCompactReport({
      catalog: { products: [], categories: [{ items: [] }] },
      baselineById: new Map([[removedProduct.id, removedProduct]]),
      raw: {
        sourceRows: [],
        imageRows: [],
        historicalRows: [],
        foreignPriceChanges: [],
        discontinuedCandidates: [],
      },
      exchange: {},
      checkedAt: "2026-07-28T03:33:46.713Z",
      categoryScan: [],
      previousDiscontinuationReviews: new Map(),
    }),
    "catalog maintenance must reject removed products without confirmed official discontinuation evidence",
  );
  assertThrows(
    () => buildCompactReport({
      catalog: { products: [], categories: [{ items: [] }] },
      baselineById: new Map([[removedProduct.id, removedProduct]]),
      raw: {
        sourceRows: [],
        imageRows: [],
        historicalRows: [],
        foreignPriceChanges: [],
        discontinuedCandidates: [],
      },
      exchange: {},
      checkedAt: "2026-07-28T03:33:46.713Z",
      categoryScan: [],
      previousDiscontinuationReviews: new Map([[
        removedProduct.id,
        { id: removedProduct.id, disposition: "confirmed_official_discontinued_remove" },
      ]]),
    }),
    "catalog maintenance must reject a confirmed marker without complete official exact-model evidence",
  );
  assertThrows(
    () => buildCompactReport({
      catalog: { products: [], categories: [{ items: [] }] },
      baselineById: new Map([[removedProduct.id, removedProduct]]),
      raw: {
        sourceRows: [], imageRows: [], historicalRows: [], foreignPriceChanges: [], discontinuedCandidates: [],
      },
      exchange: {},
      checkedAt: "2026-07-28T03:33:46.713Z",
      categoryScan: [],
      previousDiscontinuationReviews: new Map([[
        removedProduct.id,
        { ...confirmedDiscontinuationReview, url: "https://" },
      ]]),
    }),
    "catalog maintenance must reject official discontinuation evidence with an invalid URL",
  );
  assertThrows(
    () => buildCompactReport({
      catalog: { products: [], categories: [{ items: [] }] },
      baselineById: new Map([[removedProduct.id, removedProduct]]),
      raw: {
        sourceRows: [], imageRows: [], historicalRows: [], foreignPriceChanges: [], discontinuedCandidates: [],
      },
      exchange: {},
      checkedAt: "2026-07-28T03:33:46.713Z",
      categoryScan: [],
      previousDiscontinuationReviews: new Map([[
        removedProduct.id,
        { ...confirmedDiscontinuationReview, reviewedAt: "2099-01-01T00:00:00.000Z" },
      ]]),
    }),
    "catalog maintenance must reject official discontinuation evidence reviewed after the maintenance check",
  );
  const removedProductFixture = buildCompactReport({
    catalog: { products: [], categories: [{ items: [] }] },
    baselineById: new Map([[removedProduct.id, removedProduct]]),
    raw: {
      sourceRows: [],
      imageRows: [],
      historicalRows: [],
      foreignPriceChanges: [],
      discontinuedCandidates: [],
    },
    exchange: {},
    checkedAt: "2026-07-28T03:33:46.713Z",
    categoryScan: [],
    previousDiscontinuationReviews: new Map([[removedProduct.id, confirmedDiscontinuationReview]]),
  });
  assert(
    removedProductFixture.officialDiscontinuedCandidates[0]?.id === removedProduct.id,
    "compact maintenance report should retain confirmed official evidence after a discontinued product is removed",
  );
  assert(
    removedProductFixture.summary.officialDiscontinuedCandidates === 1,
    "compact maintenance summary should count a confirmed removed-product review",
  );
  assert(
    updateDashboardContractSource("const EXPECTED_CATEGORY_COUNT = 25;\nconst EXPECTED_PRODUCT_COUNT = 668;", 669, 26)
      === "const EXPECTED_CATEGORY_COUNT = 26;\nconst EXPECTED_PRODUCT_COUNT = 669;",
    "catalog maintenance should keep dashboard contract counts synchronized",
  );
  assert(
    updateDimensionCategoryCounts(
      '[\n  ["washer", 23],\n  ["dryer", 21],\n  ["washerdryer", 25],\n  ["refrigerator", 23],\n  ["garmentcare", 0],\n]',
      new Map([["washer", 24], ["dryer", 22], ["washerdryer", 26], ["refrigerator", 24], ["garmentcare", 20]]),
    ).includes('["garmentcare", 20]'),
    "catalog maintenance should synchronize dimension-category contract counts",
  );
  const duplicateDimensionCountSource = [
    "const EXPECTED_CATEGORY_PRODUCT_COUNTS = new Map([",
    '  ["washerdryer", 26],',
    "]);",
    "const DIMENSION_CATEGORY_COUNTS = new Map([",
    '  ["washerdryer", 26],',
    "]);",
  ].join("\n");
  assert(
    (updateDimensionCategoryCounts(
      duplicateDimensionCountSource,
      new Map([["washerdryer", 27]]),
    ).match(/\["washerdryer", 27\]/g) || []).length === 2,
    "catalog maintenance should synchronize repeated category counts in both contract maps",
  );
  const historicalResearchFixture = {
    results: [
      {
        id: "existing-product",
        checkedSources: ["https://history.example/existing"],
        rejectedCandidates: ["preserved manual decision"],
      },
      {
        id: "removed-product",
        checkedSources: ["https://history.example/removed"],
        rejectedCandidates: [],
      },
    ],
  };
  const historicalProductsFixture = [
    {
      id: "new-product",
      category: "chair",
      brand: "New",
      model: "NEW-1",
      name: "New product",
      price: { basis: "official_suggested", currency: "TWD", converted: 1200 },
      buyUrl: "https://retailer.example/new",
      buyLabel: "Official catalog",
      historicalLow: {
        status: "found",
        sourceUrl: "https://history.example/new",
        note: "Verified exact-model history",
      },
    },
    {
      id: "existing-product",
      category: "tv",
      brand: "Existing",
      model: "EX-1",
      name: "Updated existing product",
      price: { currency: "TWD", converted: 900 },
      buyUrl: "https://retailer.example/existing",
      buyLabel: "Retailer",
      historicalLow: { status: "not_found", note: "No reproducible history" },
    },
  ];
  syncHistoricalResearchRows(historicalResearchFixture, historicalProductsFixture);
  assert(historicalResearchFixture.results.length === 2, "historical research sync should remove rows absent from the final catalog");
  assert(
    historicalResearchFixture.results[0].id === "existing-product",
    "historical research sync should preserve the existing evidence order",
  );
  assert(
    historicalResearchFixture.results[0].checkedSources[0] === "https://history.example/existing",
    "historical research sync should preserve existing manual source evidence",
  );
  assert(
    JSON.stringify(historicalResearchFixture.results[1].checkedSources)
      === JSON.stringify(["https://history.example/new", "https://retailer.example/new"]),
    "historical research sync should append evidence rows for newly added products",
  );
  assert(
    historicalResearchFixture.results[1].rejectedCandidates.length === 0,
    "historical research sync should not mislabel an accepted source note as a rejected candidate",
  );
  assert(
    historicalResearchFixture.results[1].priceBasis === "official_suggested"
      && historicalResearchFixture.results[1].priceLabel === "官方建議售價",
    "historical research sync must distinguish official suggested prices from retailer current prices",
  );
  assert(
    historicalResearchFixture.results[0].priceBasis === "not_stated"
      && historicalResearchFixture.results[0].priceLabel === "價格基準未標示",
    "historical research sync must not infer a retailer-current basis for legacy products",
  );
  const loweredCoffeeHistoricalResearch = {
    results: [{
      id: "coffee-existing",
      historicalLow: {
        status: "found",
        amount: 17860,
        sourceUrl: "https://retailer.example/coffee",
      },
      checkedSources: [
        "https://retailer.example/coffee",
        "https://prices.example/coffee",
      ],
      rejectedCandidates: [],
      priceChecks: [
        {
          kind: "retailer_price",
          url: "https://retailer.example/coffee",
          query: "COFFEE-1",
          outcome: "採用：exact-model 公開新品促銷價 TWD 18,800。",
        },
        {
          kind: "price_comparison",
          url: "https://prices.example/coffee",
          query: "COFFEE-1",
          outcome: "覆核：沒有更低且可重現的價格。",
        },
      ],
    }],
  };
  syncHistoricalResearchRows(loweredCoffeeHistoricalResearch, [{
    id: "coffee-existing",
    category: "coffee",
    brand: "Coffee",
    model: "COFFEE-1",
    name: "Existing coffee machine",
    price: { currency: "TWD", converted: 17860 },
    buyUrl: "https://retailer.example/coffee",
    buyLabel: "Retailer",
    historicalLow: {
      status: "found",
      amount: 17860,
      currency: "TWD",
      converted: 17860,
      sourceUrl: "https://retailer.example/coffee",
      checkedAt: "2026-08-09",
    },
  }]);
  assert(
    loweredCoffeeHistoricalResearch.results[0].priceChecks[0].outcome.includes("17,860")
      && !loweredCoffeeHistoricalResearch.results[0].priceChecks[0].outcome.includes("18,800"),
    "historical research sync should repair a stale accepted structured price check amount",
  );
  assertThrows(
    () => syncHistoricalResearchRows(
      { results: [] },
      [{
        id: "new-not-found-product",
        category: "chair",
        brand: "New",
        model: "NEW-2",
        name: "New product without evidence",
        price: { currency: "TWD", converted: 1200 },
        buyUrl: "https://retailer.example/new-not-found",
        buyLabel: "Retailer",
        historicalLow: { status: "not_found", note: "No reproducible history" },
      }],
    ),
    /Missing explicit historical-price research evidence/,
    "historical research sync should reject new not-found rows without explicit checked sources",
  );
  assertThrows(
    () => syncHistoricalResearchRows(
      { results: [{ id: "new-not-found-product", checkedSources: [], rejectedCandidates: [] }] },
      [{
        id: "new-not-found-product",
        category: "chair",
        brand: "New",
        model: "NEW-2",
        name: "New product with empty evidence",
        price: { currency: "TWD", converted: 1200 },
        buyUrl: "https://retailer.example/new-not-found",
        buyLabel: "Retailer",
        historicalLow: { status: "not_found", note: "No reproducible history" },
      }],
    ),
    /Missing explicit historical-price research evidence/,
    "historical research sync should reject not-found rows with an empty checked-source list",
  );
  const baselineCalls = [];
  const baselineById = loadCatalogFromGit("origin/main", ["tv.js", "garmentcare.js"], {
    root,
    execGit(args) {
      baselineCalls.push(args);
      if (args[0] === "ls-tree") return "products/tv.js\n";
      if (args[0] === "show" && args[1] === "origin/main:products/tv.js") {
        return `globalThis.applianceDashboard.registerProducts("tv", [{ id: "baseline-tv" }]);`;
      }
      throw new Error(`unexpected git invocation: ${args.join(" ")}`);
    },
  });
  assert(baselineById.has("baseline-tv"), "catalog baseline should load product files present in the reference");
  assert(!baselineCalls.some((args) => args.includes("origin/main:products/garmentcare.js")), "catalog baseline should skip a new product file absent from the reference");
  assertThrows(
    () => loadCatalogFromGit("missing-ref", ["garmentcare.js"], {
      root,
      execGit() {
        throw new Error("fatal: bad revision");
      },
    }),
    "catalog baseline should not swallow unrelated git failures",
  );
  const krwExchange = exchangeRatesFromPayload({
    result: "success",
    time_last_update_utc: "Wed, 22 Jul 2026 00:02:31 +0000",
    time_last_update_unix: 1784678551,
    rates: { TWD: 32, USD: 1, GBP: 0.8, EUR: 0.9, JPY: 160, CNY: 7.2, KRW: 1280 },
  });
  const firstExchangeRequest = exchangeRateRequestUrl("2026-07-30", 1785370200000);
  const retryExchangeRequest = exchangeRateRequestUrl("2026-07-30", 1785370260000);
  assert(
    firstExchangeRequest === "https://open.er-api.com/v6/latest/USD?v=2026-07-30-1785370200000",
    "exchange-rate requests should keep the maintenance date in the cache key",
  );
  assert(
    retryExchangeRequest !== firstExchangeRequest,
    "exchange-rate retries should bypass a same-day CDN response cached before the provider updates",
  );
  assertThrows(
    () => exchangeRateRequestUrl("2026/07/30"),
    "exchange-rate request cache dates must use YYYY-MM-DD",
  );
  assertThrows(
    () => exchangeRateRequestUrl("2026-07-30", Number.NaN),
    "exchange-rate request cache nonces must be finite timestamps",
  );
  assert(krwExchange.KRW_TWD === 0.025, "exchange-rate parser should derive KRW/TWD from the USD base");
  const krwProduct = {
    id: "garmentcare-samsung-fixture",
    price: {
      currency: "KRW",
      amount: 2_399_000,
      converted: 0,
      confidence: "Danawa 2026-07-23 exact-model 新品比價頁公開最低價快照",
    },
    historicalLow: {
      status: "found",
      currency: "KRW",
      amount: 2_000_000,
      converted: 0,
      note: "海外史低並依 2026-07-21 KRW/TWD 匯率換算；未含進口成本。",
    },
  };
  const staleUsdProduct = {
    id: "vacuum-overseas-fixture",
    price: {
      currency: "USD",
      amount: 100,
      converted: 0,
      confidence: "官方 2026-07-21 來源價；ExchangeRate-API 2026-07-21 匯率換算",
    },
    historicalLow: {
      status: "found",
      currency: "USD",
      amount: 80,
      converted: 0,
      note: "海外史低；未含國際運費。",
    },
  };
  const krwRaw = { foreignPriceChanges: [] };
  applyExchangeRates([krwProduct, staleUsdProduct], krwExchange, krwRaw);
  assert(krwProduct.price.converted === 59_975, "KRW catalog prices should convert to rounded TWD");
  assert(krwProduct.historicalLow.converted === 50_000, "KRW historical lows should convert to rounded TWD");
  assert(
    krwProduct.historicalLow.note === "海外史低並依 2026-07-22 KRW/TWD 匯率換算；未含進口成本。",
    "foreign historical lows should replace stale exchange-rate provenance",
  );
  assert(
    krwProduct.price.confidence.endsWith("；ExchangeRate-API 2026-07-22 匯率換算"),
    "foreign catalog prices should append the current exchange-rate provenance",
  );
  assert(
    staleUsdProduct.price.confidence === "官方 2026-07-21 來源價；ExchangeRate-API 2026-07-22 匯率換算",
    "foreign catalog prices should replace stale exchange-rate provenance without changing the source-price date",
  );
  assert(staleUsdProduct.historicalLow.converted === 2_560, "USD historical lows should convert to rounded TWD");
  assert(
    staleUsdProduct.historicalLow.note === "海外史低；未含國際運費；依 2026-07-22 USD/TWD 匯率換算。",
    "foreign historical lows should append exchange-rate provenance when it is missing",
  );
  const rerunExchangeRaw = { foreignPriceChanges: [] };
  applyExchangeRates(
    [staleUsdProduct],
    krwExchange,
    rerunExchangeRaw,
    new Map([[staleUsdProduct.id, { price: { currency: "USD", converted: 3_100 } }]]),
  );
  assert(
    rerunExchangeRaw.foreignPriceChanges[0].before === 3_100
      && rerunExchangeRaw.foreignPriceChanges[0].after === 3_200,
    "same-day exchange reruns should preserve the baseline converted price in the maintenance report",
  );
  assert(
    maintenanceCacheVersion('cacheVersion: "20260723-garmentcare"', "2026-07-23") === "20260723-garmentcare",
    "catalog maintenance should preserve a same-day feature cache version",
  );
  assert(
    maintenanceCacheVersion('cacheVersion: "20260722-previous"', "2026-07-23") === "20260723-maintenance-refactor",
    "catalog maintenance should advance a stale cache version to the maintenance date",
  );
  assert(
    maintenanceCacheVersion(
      'cacheVersion: "20260724-morning-catalog"',
      "2026-07-24",
      "2026-07-24T10:36:29.980Z",
    ) === "20260724-103629-catalog",
    "catalog maintenance should create a unique cache version for each same-day write",
  );

  assert(normalizeIdentity(null) === "", "catalog identity normalization should tolerate null input");
  assert(
    normalizeIdentity("  ＬＧ OLED65－C5PTA  ") === "lgoled65c5pta",
    "catalog identity normalization should fold width, case, whitespace, and punctuation",
  );
  assert(
    updateReadmeMetadata(
      "純前端靜態頁面，整理 2026-07-22 查核的家電推薦清單。",
      { dataDate: "2026-07-23" },
    ) === "純前端靜態頁面，整理 2026-07-23 查核的家電推薦清單。",
    "maintenance metadata sync should refresh the README overview date",
  );
  assert(
    renderMaintenanceSummary({
      checkedAt: "2026-07-26T09:57:00.000Z",
      summary: {
        finalProducts: 707,
        categories: 26,
        pchomeAudited: 415,
        pchomeExactModelVerified: 266,
        pchomeReviewedBindingVerified: 32,
        pchomeModelUnverified: 91,
        priceChanges: 21,
        priceDrops: 19,
        priceRises: 2,
        pchomeOutOfStockTracked: 22,
        newProductsAdded: ["tv-lg-g6-65", "monitor-benq-pd2770u"],
        discontinuedRemoved: [],
        minimumProductsPerCategory: 20,
        imagesAudited: 707,
        sourcesVerifiedAvailable: 549,
        sourceExceptions: 158,
        imageExceptions: 0,
        historicalFound: 443,
        historicalMissing: 264,
        historicalLowPriceChanges: 3,
        historicalSourcesVerified: 54,
        foreignPricesRecomputed: 30,
      },
      changes: {
        historicalLows: [
          { before: 2_499, after: 2_374 },
          { before: 13_272, after: 12_768 },
          { before: 1_560, after: null },
        ],
      },
      exchange: { date: "2026-07-26 00:02 UTC", USD_TWD: 32.349719 },
    }).includes("本輪下修 2 筆、撤銷 1 筆不適用史低"),
    "maintenance summary should distinguish lowered historical prices from invalidated evidence",
  );
  assert(
    renderMaintenanceSummary({
      checkedAt: "2026-08-05T00:00:00.000Z",
      summary: {
        newProductsAdded: ["vacuum-new"],
        discontinuedRemoved: [],
        catalogEntriesReplaced: [{ beforeId: "coffee-old", afterId: "coffee-new" }],
      },
      changes: { historicalLows: [] },
      exchange: {},
    }).includes("品質替換 coffee-old → coffee-new"),
    "maintenance summary should distinguish catalog replacements from discontinued removals",
  );
  const carriedForwardMaintenanceSummary = renderMaintenanceSummary({
    checkedAt: "2026-07-26T13:00:00.000Z",
    categoryReviewProvenance: "same_date_carried_forward",
    summary: {
      newProductsAdded: [],
      discontinuedRemoved: [],
    },
    categoryScan: [{
      status: "manually_reviewed",
      reviewedAt: "2026-07-26T01:00:00.000Z",
    }],
    changes: { historicalLows: [] },
    exchange: {},
  });
  assert(
    carriedForwardMaintenanceSummary.includes("本次增量沒有納入新產品")
      && carriedForwardMaintenanceSummary.includes("沿用本資料日已完成的逐類人工新品覆核（原覆核時間保留）"),
    "a same-date incremental summary must distinguish carried reviews from fresh product additions",
  );
  const freshMaintenanceSummary = renderMaintenanceSummary({
    checkedAt: "2026-08-02T22:29:14.214Z",
    categoryReviewProvenance: "current_run",
    summary: {
      newProductsAdded: [],
      discontinuedRemoved: [],
    },
    categoryScan: [{
      status: "manually_reviewed",
      reviewedAt: "2026-08-02T22:29:03.000Z",
    }],
    changes: { historicalLows: [] },
    exchange: {},
  });
  assert(
    freshMaintenanceSummary.includes("逐類人工新品覆核已完成")
      && !freshMaintenanceSummary.includes("沿用本資料日已完成"),
    "a newly completed draft review must not be reported as carried forward only because finalize happens later",
  );
  const selectedCurrentReview = selectPreviousCategoryReview([
    {
      dataDate: "2026-08-03",
      checkedAt: "2026-08-02T22:20:23.000Z",
      categoryScan: [reviewedCategoryFixture({ dataDate: "2026-08-03", reviewedAt: "2026-08-02T22:29:03.000Z" })],
    },
    {
      dataDate: "2026-08-03",
      checkedAt: "2026-08-02T22:18:00.000Z",
      categoryScan: [reviewedCategoryFixture({ dataDate: "2026-08-03", reviewedAt: "2026-08-02T22:18:00.000Z" })],
    },
  ], "2026-08-03");
  assert(
    selectedCurrentReview.sourceCheckedAt === "2026-08-02T22:20:23.000Z"
      && categoryReviewProvenance(selectedCurrentReview.rows, selectedCurrentReview.sourceCheckedAt) === "current_run",
    "a review completed after the draft checkpoint must be marked as current-run provenance",
  );
  assert(
    categoryReviewProvenance([
      reviewedCategoryFixture({ dataDate: "2026-08-03", reviewedAt: "2026-08-02T22:20:23.000Z" }),
    ], "2026-08-02T22:20:23.000Z") === "current_run",
    "a review completed at the draft checkpoint must be marked as current-run provenance",
  );
  const selectedCarriedReview = selectPreviousCategoryReview([
    {
      dataDate: "2026-08-03",
      checkedAt: "2026-08-02T22:20:23.000Z",
      categoryScan: [reviewedCategoryFixture({ dataDate: "2026-08-03", reviewedAt: "2026-08-02T22:29:03.000Z" })],
    },
    {
      dataDate: "2026-08-03",
      checkedAt: "2026-08-02T22:29:14.214Z",
      categoryScan: [reviewedCategoryFixture({ dataDate: "2026-08-03", reviewedAt: "2026-08-02T22:29:03.000Z" })],
    },
  ], "2026-08-03");
  assert(
    selectedCarriedReview.sourceCheckedAt === "2026-08-02T22:29:14.214Z"
      && categoryReviewProvenance(selectedCarriedReview.rows, selectedCarriedReview.sourceCheckedAt) === "same_date_carried_forward",
    "a finalized same-date review must be marked as carried forward on a later rerun",
  );
  const restoredLatestSnapshot = selectPreviousCategoryReview([
    {
      dataDate: "2026-08-03",
      checkedAt: "2026-08-03T10:32:00.000Z",
      categoryScan: [reviewedCategoryFixture({ dataDate: "2026-08-03", decision: "rewritten", reviewedAt: "2026-08-03T10:31:00.000Z" })],
    },
    {
      dataDate: "2026-08-03",
      checkedAt: "2026-08-03T11:01:00.000Z",
      categoryScan: [reviewedCategoryFixture({ dataDate: "2026-08-03", decision: "restored", reviewedAt: "2026-08-03T04:43:00.000Z" })],
    },
  ], "2026-08-03");
  assert(
    restoredLatestSnapshot.rows[0].decision === "restored",
    "an older report reviewed before the latest checkpoint must not override the latest snapshot",
  );
  const partiallyUpdatedStaleDraft = selectPreviousCategoryReview([
    {
      dataDate: "2026-08-03",
      checkedAt: "2026-08-03T10:00:00.000Z",
      categoryScan: [
        reviewedCategoryFixture({ category: "wifi", dataDate: "2026-08-03", decision: "updated_wifi", reviewedAt: "2026-08-03T12:10:00.000Z" }),
        reviewedCategoryFixture({ category: "tv", dataDate: "2026-08-03", decision: "stale_tv", reviewedAt: "2026-08-03T11:00:00.000Z" }),
      ],
    },
    {
      dataDate: "2026-08-03",
      checkedAt: "2026-08-03T12:00:00.000Z",
      categoryScan: [
        reviewedCategoryFixture({ category: "wifi", dataDate: "2026-08-03", decision: "compact_wifi", reviewedAt: "2026-08-03T11:30:00.000Z" }),
        reviewedCategoryFixture({ category: "tv", dataDate: "2026-08-03", decision: "newer_compact_tv", reviewedAt: "2026-08-03T11:30:00.000Z" }),
      ],
    },
  ], "2026-08-03");
  assert(
    partiallyUpdatedStaleDraft.sourceCheckedAt === "2026-08-03T12:00:00.000Z"
      && partiallyUpdatedStaleDraft.rows.find((row) => row.category === "wifi")?.decision === "updated_wifi"
      && partiallyUpdatedStaleDraft.rows.find((row) => row.category === "tv")?.decision === "newer_compact_tv"
      && categoryReviewProvenance(partiallyUpdatedStaleDraft.rows, partiallyUpdatedStaleDraft.sourceCheckedAt) === "mixed_current_and_carried_forward",
    "a stale draft partial update must merge per category without replacing newer compact decisions",
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
  assert(
    exactProductModelMatch("完整組 MS22IC-HS8 搭配 MA22IC-HS8", {
      category: "aircon",
      model: "MS22IC-HS8 / MA22IC-HS8",
      modelPair: { indoor: "MS22IC-HS8", outdoor: "MA22IC-HS8" },
    }),
    "aircon exact-model policy should accept a page containing both indoor and outdoor models",
  );
  assert(
    !exactProductModelMatch("MS22IC-HS8 室內機單機價", {
      category: "aircon",
      model: "MS22IC-HS8 / MA22IC-HS8",
      modelPair: { indoor: "MS22IC-HS8", outdoor: "MA22IC-HS8" },
    }),
    "aircon exact-model policy should reject a source that names only one component",
  );
  assert(
    exactProductModelMatch("主機 CHC-75WT，搭配儲槽 WT-200AWE", {
      category: "waterheater",
      type: "heat_pump",
      model: "CHC-75WT + WT-200AWE",
      componentModels: ["CHC-75WT", "WT-200AWE"],
    }),
    "composite heat-pump sources should match when every exact component model appears separately",
  );
  assert(
    hasOfficialSuggestedPriceSource({
      price: { basis: "official_suggested" },
      buyUrl: "https://www.rinnai.com.tw/Product/V3/413",
    }),
    "official suggested prices should accept an allowlisted Taiwan official host",
  );
  assert(
    hasOfficialSuggestedPriceSource({
      price: { basis: "official_suggested" },
      buyUrl: "https://www.homemark.com.tw/product/6",
    }),
    "official suggested prices should accept HMK's Taiwan official product host",
  );
  assert(
    !hasOfficialSuggestedPriceSource({
      price: { basis: "official_suggested" },
      buyUrl: "https://retailer.invalid/item",
      buyLabel: "官方建議售價",
    }),
    "official suggested prices must reject a retailer host even when its label sounds official",
  );
  assert(
    !hasCompleteCompositeSystemIdentityAndPrice({
      category: "waterheater",
      type: "heat_pump",
      model: "HPD-06KW + D-50S",
      price: { scope: "single_unit" },
    }),
    "a composite heat-pump water heater must not pass without component identities and a complete-system price",
  );
  assert(
    hasCompleteCompositeSystemIdentityAndPrice({
      category: "waterheater",
      type: "heat_pump",
      model: "HPD-06KW + D-50S",
      componentModels: ["HPD-06KW", "D-50S"],
      price: { scope: "complete_system" },
    }),
    "a composite heat-pump water heater should pass with both component identities and a complete-system price",
  );
  assert(
    !hasCompleteCompositeSystemIdentityAndPrice({
      category: "waterheater",
      type: "heat_pump",
      model: "HPD-06KW + HPD-06KW",
      componentModels: ["HPD-06KW", "HPD-06KW"],
      price: { scope: "complete_system" },
    }),
    "a composite heat-pump water heater must use distinct component models",
  );
  const invalidTaiwanPriceFailures = [];
  validatePriceAndInstallationContract({
    id: "aircon-invalid-price-fixture",
    category: "aircon",
    model: "INDOOR / OUTDOOR",
    price: { basis: "retailer_current", currency: "USD", converted: 12345 },
    installation: { status: "excluded", note: "fixture" },
  }, invalidTaiwanPriceFailures);
  assert(
    invalidTaiwanPriceFailures.some((failure) => failure.includes("positive public numeric price amount"))
      && invalidTaiwanPriceFailures.some((failure) => failure.includes("requires a TWD Taiwan price")),
    "new catalog contracts must reject a missing amount and non-TWD public price",
  );
  const invalidTaiwanFrequencyFailures = [];
  validatePriceAndInstallationContract({
    id: "new-product-invalid-market-fixture",
    category: "aircon",
    channel: "tw",
    model: "INDOOR / OUTDOOR",
    price: { basis: "retailer_current", currency: "TWD", amount: 12345, converted: 12345 },
    installation: { status: "excluded", note: "fixture" },
    voltage: "220V／50Hz",
    warranty: "台灣公司貨保固",
    image: "https://example.test/product.jpg",
  }, invalidTaiwanFrequencyFailures, true);
  assert(
    invalidTaiwanFrequencyFailures.some((failure) => failure.includes("50Hz-only or non-Taiwan warranty")),
    "all new products must reject a 50Hz-only fixture",
  );
  const invalidTaiwanWarrantyFailures = [];
  validatePriceAndInstallationContract({
    id: "new-product-invalid-warranty-fixture",
    category: "aircon",
    channel: "tw",
    model: "INDOOR / OUTDOOR",
    price: { basis: "retailer_current", currency: "TWD", amount: 12345, converted: 12345 },
    installation: { status: "excluded", note: "fixture" },
    voltage: "220V／60Hz",
    warranty: "不提供台灣保固",
    image: "https://example.test/product.jpg",
  }, invalidTaiwanWarrantyFailures, true);
  assert(
    invalidTaiwanWarrantyFailures.some((failure) => failure.includes("50Hz-only or non-Taiwan warranty")),
    "all new products must reject an explicitly non-Taiwan warranty fixture",
  );
  const infiniteRoomSizeFailures = [];
  validateAirconProduct({
    id: "aircon-infinite-room-size-fixture",
    category: "aircon",
    type: "heat_cool",
    model: "INDOOR / OUTDOOR",
    modelPair: { indoor: "INDOOR", outdoor: "OUTDOOR" },
    price: { scope: "complete_system" },
    roomSizeUpperPing: Number.POSITIVE_INFINITY,
    capacityBand: "living_dining",
    channel: "tw",
    specs: AIRCON_SPEC_PREFIXES.map((prefix) => `${prefix}fixture`),
  }, infiniteRoomSizeFailures);
  assert(
    infiniteRoomSizeFailures.some((failure) => failure.includes("finite positive roomSizeUpperPing")),
    "aircon room-size bounds must reject Infinity",
  );
  const mismatchedAirconFailures = [];
  const mismatchedAirconSpecs = {
    "型式：": "一對一分離式變頻冷暖",
    "適用坪數：": "9 坪內",
    "暖房能力：": "3.6 kW",
    "尺寸：": "室內機 寬 80 x 深 20 x 高 30 cm",
    "重量：": "室內機 10 kg",
  };
  validateAirconProduct({
    id: "aircon-visible-contract-mismatch",
    category: "aircon",
    type: "cooling_only",
    model: "INDOOR / OUTDOOR",
    modelPair: { indoor: "INDOOR", outdoor: "OUTDOOR" },
    price: { scope: "complete_system" },
    roomSizeUpperPing: 5,
    capacityBand: "small",
    channel: "tw",
    specs: AIRCON_SPEC_PREFIXES.map((prefix) => `${prefix}${mismatchedAirconSpecs[prefix] || "fixture"}`),
  }, mismatchedAirconFailures);
  assert(
    mismatchedAirconFailures.some((failure) => failure.includes("cooling_only type must match"))
      && mismatchedAirconFailures.some((failure) => failure.includes("must not advertise heating capacity"))
      && mismatchedAirconFailures.some((failure) => failure.includes("roomSizeUpperPing must match"))
      && mismatchedAirconFailures.some((failure) => failure.includes("separate indoor and outdoor dimensions"))
      && mismatchedAirconFailures.some((failure) => failure.includes("separate indoor and outdoor net weights")),
    "aircon visible specs must stay aligned with type, room-size, and both physical components",
  );
  const invalidAirconBoundaryFailures = [];
  const invalidAirconBoundarySpecs = {
    "型式：": "窗型冷專商用機",
    "適用坪數：": "5 坪以上",
    "暖房能力：": "無暖房（冷專）",
    "尺寸：": "室內機與室外機 寬 80 x 深 20 x 高 30 cm",
    "重量：": "室內機與室外機 10 kg",
  };
  validateAirconProduct({
    id: "aircon-invalid-scope-fixture",
    category: "aircon",
    type: "cooling_only",
    model: "ABC / abc",
    modelPair: { indoor: "ABC", outdoor: "abc" },
    price: { scope: "complete_system" },
    roomSizeUpperPing: 5,
    capacityBand: "small",
    channel: "tw",
    specs: AIRCON_SPEC_PREFIXES.map((prefix) => `${prefix}${invalidAirconBoundarySpecs[prefix] || "fixture"}`),
  }, invalidAirconBoundaryFailures);
  assert(
    invalidAirconBoundaryFailures.some((failure) => failure.includes("must differ after normalization"))
      && invalidAirconBoundaryFailures.some((failure) => failure.includes("residential one-to-one split"))
      && invalidAirconBoundaryFailures.some((failure) => failure.includes("window, portable, multi-split, or commercial"))
      && invalidAirconBoundaryFailures.some((failure) => failure.includes("numeric visible room-size upper bound"))
      && invalidAirconBoundaryFailures.some((failure) => failure.includes("separate indoor and outdoor dimensions"))
      && invalidAirconBoundaryFailures.some((failure) => failure.includes("separate indoor and outdoor net weights")),
    "aircon contracts must reject normalized duplicate pairs, excluded form factors, lower-bound ping text, and shared component measurements",
  );
  const invalidGasSafetyFailures = [];
  validateWaterheaterProduct({
    id: "waterheater-invalid-gas-safety-fixture",
    category: "waterheater",
    type: "gas",
    channel: "tw",
    specs: WATERHEATER_SPEC_PREFIXES.map((prefix) => `${prefix}x`),
  }, invalidGasSafetyFailures);
  assert(
    invalidGasSafetyFailures.some((failure) => failure.includes("identify LPG or natural-gas compatibility"))
      && invalidGasSafetyFailures.some((failure) => failure.includes("indoor or outdoor placement"))
      && invalidGasSafetyFailures.some((failure) => failure.includes("state its exhaust condition")),
    "gas water-heater contracts must reject unspecified gas, placement, and exhaust conditions",
  );
  const sharedCompositeMeasurementsFailures = [];
  const sharedCompositeMeasurementsSpecs = {
    "類型：": "熱泵複合系統",
    "尺寸：": "CHC-75WT + WT-200AWE 寬 81 x 深 30 x 高 90 cm",
    "重量：": "CHC-75WT + WT-200AWE 65 kg",
  };
  validateWaterheaterProduct({
    id: "waterheater-shared-composite-measurement-fixture",
    category: "waterheater",
    type: "heat_pump",
    channel: "tw",
    model: "CHC-75WT + WT-200AWE",
    componentModels: ["CHC-75WT", "WT-200AWE"],
    price: { scope: "complete_system" },
    specs: WATERHEATER_SPEC_PREFIXES.map((prefix) => `${prefix}${sharedCompositeMeasurementsSpecs[prefix] || "fixture"}`),
  }, sharedCompositeMeasurementsFailures);
  assert(
    sharedCompositeMeasurementsFailures.some((failure) => failure.includes("dimensions require one measurement segment per component"))
      && sharedCompositeMeasurementsFailures.some((failure) => failure.includes("weights require one measurement segment per component")),
    "composite heat-pump contracts must reject one shared dimension or weight segment for multiple components",
  );

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

  dashboard.state.category = "aircon";
  const airconTypeValues = filters.filterOptions("type").map((option) => option.value);
  assert(
    airconTypeValues.join(",") === "all,cooling_only,heat_cool",
    "aircon type filter must expose only cooling-only and heat-cool values",
  );
  dashboard.state.type = "heat_cool";
  assert(
    filters.filteredProducts().every((product) => product.category === "aircon" && product.type === "heat_cool"),
    "type filtering must apply to the complete product dataset",
  );
  assert(filters.activeAdvancedFilterCount() === 2, "category and type must both contribute to the active mobile filter count");
  filters.applyFilterValue("category", "monitor");
  assert(dashboard.state.type === "all", "switching to an incompatible category must reset type");
  assert(!filters.typeFilterAvailable(), "type filter must hide outside aircon and waterheater");
  dashboard.state.category = "all";

  assert(
    utils.normalizeText("  Ｗｉ－Ｆｉ， ６５ 吋 ／ 2.5 cm  ") === "wifi 65吋 2.5cm",
    "search normalization should fold width and case, remove punctuation, collapse whitespace, and join common units",
  );
  assert(utils.escapeHtml(`<a href="x">O'Reilly & Co</a>`) === "&lt;a href=&quot;x&quot;&gt;O&#039;Reilly &amp; Co&lt;/a&gt;", "escapeHtml should escape dangerous characters");

  const foundLowProduct = products.find((product) => product.historicalLow?.status === "found");
  const missingLowProduct = products.find((product) => (
    product.price?.basis === "retailer_current" && product.historicalLow?.status === "not_found"
  ));
  assert(foundLowProduct, "fixture should contain a found historical low product");
  assert(missingLowProduct, "fixture should contain a missing historical low product");
  assert(templates.historicalLowInfo(foundLowProduct).sourceUrl, "found historical low should expose a source URL");
  assert(templates.historicalLowInfo(missingLowProduct).label === "無法判定", "missing historical low should show unknown label");
  const officialSuggestedProduct = products.find((product) => product.price?.basis === "official_suggested");
  assert(officialSuggestedProduct, "catalog fixture must include at least one official suggested price");
  assert(
    templates.historicalLowInfo(officialSuggestedProduct).label === "待比價",
    "official suggested prices must not be presented as retailer historical-low comparisons",
  );
  const officialSuggestedMarkup = templates.cardMarkup(officialSuggestedProduct);
  assert(
    officialSuggestedMarkup.includes("建議售價") && officialSuggestedMarkup.includes("查看官方資料"),
    "official suggested prices must render explicit label and official-data CTA",
  );
  const legacyPriceProduct = {
    ...products[0],
    price: { ...products[0].price },
  };
  delete legacyPriceProduct.price.basis;
  const legacyPriceMarkup = templates.cardMarkup(legacyPriceProduct);
  assert(
    legacyPriceMarkup.includes("公開售價")
      && legacyPriceMarkup.includes("價格基準未標示")
      && !legacyPriceMarkup.includes("台灣通路現價"),
    "legacy products without a price basis must not be presented as retailer-current prices",
  );
  assert(
    templates.historicalLowInfo(legacyPriceProduct).label === "待覆核",
    "legacy products without a price basis must not calculate a retailer historical-low difference",
  );
  assert(
    templates.compareTableMarkup([legacyPriceProduct]).includes("<td>未標示</td>"),
    "comparison tables must disclose an unknown legacy price basis",
  );

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
  assert(
    sanitizeSearchCheck(c5, {
      result: "candidates_unverified_by_search_only",
      candidates: [{ ...pollutedCandidate, exactModel: true }],
    }).resultCount === 1,
    "an explicitly reviewed exact-model search candidate should not depend on title token order",
  );
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
  const youtubeQuery = {
    platform: "YouTube",
    query: '"LG OLED65C5PTA" problem issue defect failure',
    queryUrl: "https://www.youtube.com/results?search_query=%22LG%20OLED65C5PTA%22%20problem%20issue%20defect%20failure",
    targetHost: "youtube.com",
  };
  assert(queryTargetsProduct(youtubeQuery, c5), "a YouTube query should preserve the exact model");
  assert(queryTargetsWebsite(youtubeQuery), "a YouTube search URL should target YouTube");
  assert(queryUrlMatchesRecord(youtubeQuery), "a YouTube search URL should reproduce search_query");
  assert(queryUrlMatchesRecord({
    query: youtubeQuery.query,
    queryUrl: `https://search.yahoo.com/search?p=${encodeURIComponent(youtubeQuery.query)}`,
  }), "a Yahoo search URL should reproduce p");
  const t50Pro = products.find((product) => product.id === "robot-ecovacs-t50-pro");
  assert(
    !candidateMatchesExactModel(t50Pro, {
      title: "Ecovacs DEEBOT T50 PRO OMNI Gen2 troubleshooting",
      url: "https://www.youtube.com/watch?v=model-variant",
    }),
    "a Gen2 product variant must not count as the base exact model",
  );
  const fallbackResearch = buildResearchDocument([{ id: "fallback" }], new Map([["fallback", {
    workflowStatus: "completed",
    issueResearch: { status: "no_common_issue", issues: [] },
    searchChecks: [
      { result: "search_unavailable" },
      { result: "no_exact_model_result" },
    ],
  }]]));
  assert(fallbackResearch.summary.searchUnavailable === 0, "a successful fallback search should clear search-unavailable status");
  assert(
    buildResearchDocument([{ id: "fallback" }], new Map([["fallback", {
      workflowStatus: "completed",
      issueResearch: { status: "no_common_issue", issues: [] },
      searchChecks: [{ result: "no_exact_model_result" }],
    }]]), { searchLimitations: [{ provider: "Google", status: "captcha_blocked" }] }).summary.searchLimitations.length === 1,
    "research rebuild should preserve an explicit provider limitation",
  );
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
    platform: "Reddit",
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
  const refreshedReviewWithOlderCandidate = {
    ...completedReview,
    reviewedAt: "2026-08-18",
    candidateReviews: [{ ...candidateReview, reviewedAt: "2026-07-10" }],
  };
  validateExplicitReview(refreshedReviewWithOlderCandidate, c5);
  assertThrows(
    () => validateExplicitReview({
      ...refreshedReviewWithOlderCandidate,
      checkedPlatforms: refreshedReviewWithOlderCandidate.checkedPlatforms.filter((platform) => platform !== "Reddit"),
    }, c5),
    "a candidate platform must be declared in checkedPlatforms",
  );
  assert(
    researchRow(c5, sanitizedSearch, new Map([[c5.id, refreshedReviewWithOlderCandidate]])).workflowStatus === "completed",
    "a fresh product review should preserve an earlier explicit original-page candidate review",
  );
  assertThrows(
    () => validateExplicitReview({
      ...refreshedReviewWithOlderCandidate,
      candidateReviews: [{ ...candidateReview, reviewedAt: "2026-08-19" }],
    }, c5),
    "a candidate review dated after the product review must be rejected",
  );
  const noCandidateSearch = {
    ...sanitizedSearch,
    result: "no_exact_model_result",
    resultCount: 0,
    candidateUrls: [],
    candidates: [],
  };
  assert(
    researchRow(c5, noCandidateSearch, new Map([[c5.id, completedReview]])).workflowStatus === "completed",
    "an explicitly reviewed original page may be retained even when it came from a separate manual discovery path",
  );
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

  context.location = new URL("https://example.test/index.html?category=aircon&type=heat_cool");
  context.history.lastUrl = "";
  dashboard.urlState.applyFromQuery();
  assert(dashboard.state.category === "aircon" && dashboard.state.type === "heat_cool", "query should restore a compatible type");
  dashboard.urlState.syncToQuery();
  assert(context.history.lastUrl.includes("category=aircon&type=heat_cool"), "query sync should persist compatible type");

  context.location = new URL("https://example.test/index.html?category=monitor&type=gas");
  context.history.lastUrl = "";
  dashboard.urlState.applyFromQuery();
  assert(dashboard.state.category === "monitor" && dashboard.state.type === "all", "invalid direct type must be ignored");
  assert(!context.history.lastUrl.includes("type="), "invalid direct type must be removed from synchronized URL");

  Object.assign(dashboard.state, {
    search: "",
    category: "all",
    type: "all",
    brand: "all",
    budget: "all",
    channel: "all",
    sort: "rank",
  });
  context.location = new URL("https://example.test/#category=bidet");
  context.history.lastUrl = "";
  dashboard.urlState.applyFromQuery();
  assert(dashboard.state.category === "bidet", "category fragment should restore the guide's dashboard filter");

  dashboard.initialCategoryFragment = "bidet";
  dashboard.state.category = "all";
  context.location = new URL("https://example.test/#researchMethod");
  context.history.lastUrl = "";
  dashboard.urlState.applyFromQuery();
  assert(dashboard.state.category === "bidet", "bootstrap state should survive an anchor click before app initialization");
  assert(
    context.history.lastUrl.endsWith("?category=bidet#researchMethod"),
    "bootstrap state should persist the category while retaining the early anchor target",
  );

  context.location = new URL("https://example.test/#researchMethod");
  context.history.lastUrl = "";
  dashboard.urlState.preserveCategoryAcrossAnchorNavigation();
  assert(
    context.history.lastUrl.endsWith("?category=bidet#researchMethod"),
    "in-page anchor navigation should persist a restored category in the query",
  );

  context.location = new URL("https://example.test/#category=bidet");
  context.history.lastUrl = "";
  dashboard.urlState.syncToQuery();
  assert(context.history.lastUrl.endsWith("?category=bidet"), "query sync should preserve a category restored from the fragment");
  assert(!context.history.lastUrl.includes("#category="), "query sync should remove the consumed category fragment");

  dashboard.state.category = "all";
  context.location = new URL("https://example.test/?category=monitor#category=bidet");
  dashboard.urlState.applyFromQuery();
  assert(dashboard.state.category === "monitor", "an explicit category query should take precedence over the guide fragment");

  await assertLoaderSchedulesAllCategoriesTogether();
  await assertLoaderRequiresNewItemsForCategory();
  await assertLoaderFailureIsClear(context, dashboard);

  console.log("logic check passed");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
