const path = require("path");
const os = require("os");
const {
  runProductLoadSchedulingJourney,
  runExhaustiveViewport,
  runSmokeViewport,
  runDesktopJourney,
  runMobileJourney,
} = require("./dashboard-ui-journeys");
const { runCategoryPageJourneys } = require("./category-page-ui-journeys");

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
    await runProductLoadSchedulingJourney(browser);
    await runCategoryPageJourneys(browser);
    if (fullMode) {
      await runExhaustiveViewport(browser, "dashboard-wide-desktop", { width: 2048, height: 1152 });
      await runExhaustiveViewport(browser, "dashboard-desktop", { width: 1440, height: 1100 });
      await runExhaustiveViewport(browser, "dashboard-mobile", { width: 390, height: 844 });
      await runSmokeViewport(browser, "dashboard-minimum-mobile", { width: 320, height: 568 });
      await runSmokeViewport(browser, "dashboard-mobile-breakpoint", { width: 620, height: 900 });
      await runSmokeViewport(browser, "dashboard-post-mobile-breakpoint", { width: 621, height: 900 });
      await runSmokeViewport(browser, "dashboard-tablet", { width: 768, height: 1024 });
      await runSmokeViewport(browser, "dashboard-compact-toolbar", { width: 1080, height: 900 });
      await runSmokeViewport(browser, "dashboard-full-toolbar", { width: 1081, height: 900 });
    } else {
      await runSmokeViewport(browser, "dashboard-wide-desktop", { width: 2048, height: 1152 });
      await runDesktopJourney(browser);
      await runSmokeViewport(browser, "dashboard-mobile-breakpoint", { width: 620, height: 900 });
      await runSmokeViewport(browser, "dashboard-post-mobile-breakpoint", { width: 621, height: 900 });
      await runSmokeViewport(browser, "dashboard-compact-toolbar", { width: 1080, height: 900 });
      await runSmokeViewport(browser, "dashboard-full-toolbar", { width: 1081, height: 900 });
      await runMobileJourney(browser);
    }
  } finally {
    await browser.close();
  }
  console.log(fullMode ? "dashboard full verification passed" : "dashboard verification passed");
})();
