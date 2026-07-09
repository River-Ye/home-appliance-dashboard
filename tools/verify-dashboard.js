const path = require("path");
const os = require("os");
const {
  runExhaustiveViewport,
  runSmokeViewport,
  runDesktopJourney,
  runMobileJourney,
} = require("./dashboard-ui-journeys");

function loadPlaywright() {
  try {
    return require("playwright");
  } catch (error) {
    const bundledModules = path.join(
      os.homedir(),
      ".cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules",
    );
    return require(path.join(bundledModules, "playwright"));
  }
}

(async () => {
  const { chromium } = loadPlaywright();
  const fullMode = process.argv.includes("--full");
  const browser = await chromium.launch({ headless: true });
  try {
    if (fullMode) {
      await runExhaustiveViewport(browser, "dashboard-wide-desktop", { width: 2048, height: 1152 });
      await runExhaustiveViewport(browser, "dashboard-desktop", { width: 1440, height: 1100 });
      await runExhaustiveViewport(browser, "dashboard-narrow-desktop", { width: 1120, height: 1000 });
      await runExhaustiveViewport(browser, "dashboard-tablet", { width: 1180, height: 1000 });
      await runExhaustiveViewport(browser, "dashboard-mobile", { width: 390, height: 844 });
    } else {
      await runSmokeViewport(browser, "dashboard-wide-desktop", { width: 2048, height: 1152 });
      await runDesktopJourney(browser);
      await runSmokeViewport(browser, "dashboard-narrow-desktop", { width: 1120, height: 1000 });
      await runSmokeViewport(browser, "dashboard-tablet", { width: 1180, height: 1000 });
      await runMobileJourney(browser);
    }
  } finally {
    await browser.close();
  }
  console.log(fullMode ? "dashboard full verification passed" : "dashboard verification passed");
})();
