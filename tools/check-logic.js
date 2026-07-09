const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { readDashboardProducts } = require("./read-dashboard-products");

const root = path.resolve(__dirname, "..");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function createRuntime() {
  const context = {
    console,
    Intl,
    Date,
    Map,
    Promise,
    Set,
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

  await assertLoaderFailureIsClear(context, dashboard);

  console.log("logic check passed");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
