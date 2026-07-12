const fs = require("fs");
const path = require("path");
const vm = require("vm");

function createDashboardContext() {
  const context = {
    console,
    Intl,
    Date,
    Map,
    Set,
    globalThis: null,
  };
  context.globalThis = context;
  context.window = context;
  vm.createContext(context);
  return context;
}

function runFile(context, file) {
  vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
}

function readDashboardProducts(root = path.resolve(__dirname, "..")) {
  const context = createDashboardContext();
  const configFile = path.join(root, "assets/js/config.js");
  runFile(context, configFile);

  const dashboard = context.applianceDashboard;
  if (!dashboard || !Array.isArray(dashboard.categories) || !Array.isArray(dashboard.products)) {
    throw new Error("Unable to initialize dashboard registry");
  }

  for (const category of dashboard.categories) {
    const productFile = path.join(root, "products", `${category.id}.js`);
    if (!fs.existsSync(productFile)) {
      throw new Error(`Missing product file: ${productFile}`);
    }
    runFile(context, productFile);
  }

  return {
    categories: dashboard.categories,
    products: dashboard.products,
    exchange: dashboard.exchange,
    meta: dashboard.meta,
  };
}

module.exports = { readDashboardProducts };
