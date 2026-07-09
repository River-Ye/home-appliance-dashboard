const fs = require("fs");
const path = require("path");
const { readDashboardProducts } = require("./read-dashboard-products");

const root = path.resolve(__dirname, "..");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function main() {
  const { categories, exchange, products } = readDashboardProducts(root);
  const config = read("assets/js/config.js");
  const index = read("index.html");
  const readme = read("README.md");
  const agents = read("AGENTS.md");
  const metaMatch = config.match(/const meta = ({[\s\S]*?});/);
  assert(metaMatch, "config meta block is missing");

  const meta = Function(`return ${metaMatch[1]}`)();
  assert(meta.expectedCategoryCount === categories.length, "meta expectedCategoryCount mismatch");
  assert(meta.expectedProductCount === products.length, "meta expectedProductCount mismatch");

  for (const file of ["README.md", "AGENTS.md"]) {
    const text = file === "README.md" ? readme : agents;
    assert(text.includes(`共 ${meta.expectedCategoryCount} 類`), `${file} category count is stale`);
    assert(text.includes(`${meta.expectedProductCount} 筆`), `${file} product count is stale`);
    assert(text.includes(meta.dataDate), `${file} data date is stale`);
    assert(text.includes(exchange.date), `${file} exchange date is stale`);
  }

  assert(index.includes(`id="dataDate">${meta.dataDate}</strong>`), "index data date fallback is stale");
  assert(index.includes(`id="exchangeSummary">${meta.exchangeSummary}</span>`), "index exchange fallback is stale");
  assert(!index.includes("<script src=\"./products/"), "index should not list product scripts manually");
  assert(index.includes("assets/js/product-loader.js"), "index should load product-loader.js");

  const cacheVersions = [...index.matchAll(/\?v=([^"']+)/g)].map((match) => match[1]);
  assert(cacheVersions.length > 0, "index should include cache-busting query strings");
  assert(cacheVersions.every((version) => version === meta.cacheVersion), "index cache versions should match config meta");

  assert(!agents.includes("outputs/products/*.js"), "AGENTS should reference products/*.js, not outputs/products/*.js");

  console.log("docs check passed");
}

try {
  main();
} catch (error) {
  console.error(error);
  process.exit(1);
}
