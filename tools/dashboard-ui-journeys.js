const path = require("path");
const os = require("os");
const {
  EXPECTED_CATEGORY_COUNT,
  EXPECTED_PRODUCT_COUNT,
} = require("./dashboard-contract");
const {
  waitForImages,
  visibleText,
  waitForProductCards,
  loadAllVisibleProducts,
  assertProductImagesStayInsideWrap,
  assertHistoricalLowLayout,
  assertHistoricalLowCompareLayout,
  assertIssueResearchCards,
  assertIssueResearchCompareRow,
  assertSingleCompareFitsViewport,
  assertProductDetailsDisclosure,
  assertMobileDockClearance,
  assertMobileFloatingControlsDoNotOverlap,
  assertAccessibleStructure,
  assertOptimizationContracts,
  assertProjectSourceLink,
  assertManualAdPlacements,
  assertPremiumBadgeContrast,
  assertCompareRowHeaders,
  assertNoHorizontalOverflow,
  resetFilters,
  selectComboboxOption,
} = require("./dashboard-ui-assertions");

const EXPECTED_CATEGORY_COUNT_TEXT = String(EXPECTED_CATEGORY_COUNT);
const EXPECTED_PRODUCT_COUNT_TEXT = String(EXPECTED_PRODUCT_COUNT);
const fileUrl = `file://${path.resolve(__dirname, "../index.html")}`;
const firstPartyPrefix = fileUrl.replace(/index\.html$/, "");
const screenshotDir = process.env.DASHBOARD_SCREENSHOT_DIR || os.tmpdir();

function attachRuntimeIssueCollector(page) {
  const issues = [];
  page.__dashboardRuntimeIssues = issues;
  page.__dashboardAdRequests = [];
  page.on("request", (request) => {
    if (/(googlesyndication|doubleclick|googleadservices)/i.test(request.url())) {
      page.__dashboardAdRequests.push(request.url());
    }
  });
  page.on("console", (message) => {
    if (message.type() === "error") issues.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => issues.push(`pageerror: ${error.message}`));
  page.on("requestfailed", (request) => {
    if (request.url().startsWith(firstPartyPrefix)) {
      issues.push(`requestfailed: ${request.url()} ${request.failure()?.errorText || "unknown"}`);
    }
  });
  page.on("response", (response) => {
    if (response.url().startsWith(firstPartyPrefix) && response.status() >= 400) {
      issues.push(`response: ${response.status()} ${response.url()}`);
    }
  });
}

function assertNoRuntimeIssues(page, name) {
  const issues = page.__dashboardRuntimeIssues || [];
  if (issues.length) throw new Error(`${name}: first-party runtime errors ${JSON.stringify(issues.slice(0, 10))}`);
  const adRequests = page.__dashboardAdRequests || [];
  if (adRequests.length) throw new Error(`${name}: local UI unexpectedly requested ad services ${JSON.stringify(adRequests.slice(0, 5))}`);
}

async function waitForVisibleCount(page, expectedCount) {
  await page.waitForFunction((expectedText) => {
    return document.querySelector("#visibleCount")?.textContent?.trim() === expectedText;
  }, String(expectedCount));
}

async function runProductLoadSchedulingJourney(browser) {
  const name = "dashboard-product-loader";
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  attachRuntimeIssueCollector(page);
  try {
    await page.addInitScript(() => {
      window.__productLoadProbe = [];
      window.__executingScheduledTask = false;
      window.__productRenderAfterLoadTask = null;
      const originalSetTimeout = window.setTimeout.bind(window);
      window.setTimeout = (callback, delay, ...args) => originalSetTimeout(() => {
        const previousScheduledTaskState = window.__executingScheduledTask;
        window.__executingScheduledTask = true;
        try {
          callback(...args);
        } finally {
          window.__executingScheduledTask = previousScheduledTaskState;
        }
      }, delay);
      const innerHtmlDescriptor = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML");
      Object.defineProperty(Element.prototype, "innerHTML", {
        configurable: innerHtmlDescriptor.configurable,
        enumerable: innerHtmlDescriptor.enumerable,
        get: innerHtmlDescriptor.get,
        set(value) {
          if (this.id === "productGrid" && typeof value === "string" && value.includes("product-card")) {
            window.__productRenderAfterLoadTask = window.__executingScheduledTask;
          }
          innerHtmlDescriptor.set.call(this, value);
        },
      });
      const originalAppend = HTMLHeadElement.prototype.append;
      HTMLHeadElement.prototype.append = function appendWithProductLoadProbe(...nodes) {
        nodes.forEach((node) => {
          if (!(node instanceof HTMLScriptElement) || !node.src.includes("/products/")) return;

          const record = {
            src: node.src,
            appendedAt: performance.now(),
            loadedAt: null,
            errorAt: null,
          };
          window.__productLoadProbe.push(record);
          node.addEventListener("load", () => {
            record.loadedAt = performance.now();
          }, { once: true });
          node.addEventListener("error", () => {
            record.errorAt = performance.now();
          }, { once: true });
        });
        return originalAppend.apply(this, nodes);
      };
    });

    await page.goto(fileUrl, { waitUntil: "domcontentloaded" });
    await page.waitForSelector(".product-card");
    await waitForProductCards(page, 12);

    const records = await page.evaluate(() => window.__productLoadProbe.map((record) => ({ ...record })));
    if (records.length !== EXPECTED_CATEGORY_COUNT) {
      throw new Error(`${name}: expected ${EXPECTED_CATEGORY_COUNT} product scripts, got ${records.length}`);
    }
    if (records.some((record) => record.errorAt !== null)) {
      throw new Error(`${name}: one or more product scripts failed to load`);
    }
    if (records.some((record) => record.loadedAt === null)) {
      throw new Error(`${name}: app initialized before every product script finished`);
    }
    const renderedAfterLoadTask = await page.evaluate(() => window.__productRenderAfterLoadTask);
    if (renderedAfterLoadTask !== true) {
      throw new Error(`${name}: app initialization should start in a new task after product scripts load`);
    }

    const lastAppend = Math.max(...records.map((record) => record.appendedAt));
    const firstLoad = Math.min(...records.map((record) => record.loadedAt));
    if (lastAppend > firstLoad) {
      throw new Error(`${name}: product scripts were still being appended after the first script loaded`);
    }

    const total = await visibleText(page, "#productCount");
    if (total.trim() !== EXPECTED_PRODUCT_COUNT_TEXT) {
      throw new Error(`${name}: expected ${EXPECTED_PRODUCT_COUNT_TEXT} products, got ${total}`);
    }
    const categoryTotal = await visibleText(page, "#categoryCount");
    if (categoryTotal.trim() !== EXPECTED_CATEGORY_COUNT_TEXT) {
      throw new Error(`${name}: expected ${EXPECTED_CATEGORY_COUNT_TEXT} categories, got ${categoryTotal}`);
    }
    const topPickCount = await page.locator("#topPicks .pick-card").count();
    if (topPickCount !== EXPECTED_CATEGORY_COUNT) {
      throw new Error(`${name}: expected ${EXPECTED_CATEGORY_COUNT} top picks, got ${topPickCount}`);
    }
    assertNoRuntimeIssues(page, name);
  } finally {
    await page.close();
  }
}

async function runInitializationFailureJourney(browser) {
  const name = "dashboard-initialization-failure";
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  attachRuntimeIssueCollector(page);
  try {
    await page.addInitScript(() => {
      window.__forcedInitializationErrorObserved = false;
      window.addEventListener("error", () => {
        window.__forcedInitializationErrorObserved = true;
      });
      const innerHtmlDescriptor = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML");
      Object.defineProperty(Element.prototype, "innerHTML", {
        configurable: innerHtmlDescriptor.configurable,
        enumerable: innerHtmlDescriptor.enumerable,
        get: innerHtmlDescriptor.get,
        set(value) {
          if (this.id === "productGrid" && typeof value === "string" && value.includes("product-card")) {
            throw new Error("forced initialization failure");
          }
          innerHtmlDescriptor.set.call(this, value);
        },
      });
    });

    await page.goto(fileUrl, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => (
      document.querySelector("#productGrid")?.textContent?.includes("商品資料載入失敗")
      || window.__forcedInitializationErrorObserved
    ));
    const result = await page.evaluate(() => ({
      busy: document.querySelector("#mainContent")?.getAttribute("aria-busy"),
      errorVisible: document.querySelector("#productGrid")?.textContent?.includes("商品資料載入失敗"),
      status: document.querySelector("#dashboardStatus")?.textContent || "",
    }));
    if (!result.errorVisible || result.busy !== "false" || !result.status.includes("商品資料載入失敗")) {
      throw new Error(`${name}: initialization error was not rendered safely ${JSON.stringify(result)}`);
    }
    const unexpectedIssues = (page.__dashboardRuntimeIssues || []).filter((issue) => (
      !(issue.startsWith("console:") && issue.includes("forced initialization failure"))
    ));
    if (unexpectedIssues.length) {
      throw new Error(`${name}: unexpected runtime errors ${JSON.stringify(unexpectedIssues.slice(0, 10))}`);
    }
  } finally {
    await page.close();
  }
}

async function assertCommonIssueJourney(page, name) {
  await page.fill("#searchInput", "隨機爆音");
  await waitForVisibleCount(page, 1);
  await waitForProductCards(page, 1);
  const warning = page.locator('.product-card [data-issue-status="common_issue"]');
  if (await warning.count() !== 1) throw new Error(`${name}: exact-model warning card did not render`);
  const warningText = await warning.innerText();
  if (!warningText.includes("12 位獨立使用者反映")) throw new Error(`${name}: warning card missing verified report count`);
  if (await warning.locator("a[href]").count() < 2) throw new Error(`${name}: warning card missing original source links`);
  await assertIssueResearchCards(page, `${name} common issue`);
  await page.fill("#searchInput", "");
  await waitForVisibleCount(page, EXPECTED_PRODUCT_COUNT);
  await waitForProductCards(page, 12);
}

async function runExhaustiveViewport(browser, name, viewport) {
  const page = await browser.newPage({ viewport });
  attachRuntimeIssueCollector(page);
  await page.goto(fileUrl, { waitUntil: "domcontentloaded" });
  await page.waitForSelector(".product-card");
  await waitForImages(page).catch(() => undefined);

  const total = await visibleText(page, "#productCount");
  if (total.trim() !== EXPECTED_PRODUCT_COUNT_TEXT) throw new Error(`${name}: expected ${EXPECTED_PRODUCT_COUNT_TEXT} products, got ${total}`);
  const categoryTotal = await visibleText(page, "#categoryCount");
  if (categoryTotal.trim() !== EXPECTED_CATEGORY_COUNT_TEXT) throw new Error(`${name}: expected ${EXPECTED_CATEGORY_COUNT_TEXT} categories, got ${categoryTotal}`);
  const firstReleaseLabel = await page.locator(".product-card .spec-item", { hasText: "上市 / 發售日期" }).first().count();
  if (!firstReleaseLabel) throw new Error(`${name}: product cards missing release date field`);
  const firstHistoricalLow = await page.locator(".product-card .price-insight", { hasText: "歷史最低價 / 入手時機" }).first().count();
  if (!firstHistoricalLow) throw new Error(`${name}: product cards missing historical low insight`);
  const historicalLowSourceLink = await page.locator(".product-card .price-insight a", { hasText: "史低出處" }).first().count();
  if (!historicalLowSourceLink) throw new Error(`${name}: rendered found historical low cards are missing source links`);
  await waitForProductCards(page, 12);
  await assertHistoricalLowLayout(page, name);
  await assertIssueResearchCards(page, name);
  await assertProductDetailsDisclosure(page, name);
  await assertAccessibleStructure(page, name);
  await assertOptimizationContracts(page, name, viewport);
  await assertProjectSourceLink(page, name);
  await assertManualAdPlacements(page, name);
  await assertPremiumBadgeContrast(page, name);
  const initialRenderedText = await visibleText(page, "#renderedCount");
  if (!initialRenderedText.includes(`12 / ${EXPECTED_PRODUCT_COUNT_TEXT}`)) {
    throw new Error(`${name}: expected initial lazy render 12 / ${EXPECTED_PRODUCT_COUNT_TEXT}, got ${initialRenderedText}`);
  }

  await assertCommonIssueJourney(page, name);

  await page.fill("#searchInput", "POIEMA");
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "3");
  await waitForProductCards(page, 3);
  await page.locator('#activeFilterChips [data-clear-filter="search"]').click();
  await waitForVisibleCount(page, EXPECTED_PRODUCT_COUNT);
  await waitForProductCards(page, 12);

  await page.getByRole("button", { name: "再載入 40 筆" }).click();
  await waitForProductCards(page, 52);
  await page.getByRole("button", { name: "載入全部" }).click();
  await waitForProductCards(page, EXPECTED_PRODUCT_COUNT);
  if (await page.locator("#loadAllProducts").isVisible()) {
    throw new Error(`${name}: load all button should hide after all products render`);
  }
  const unknownHistoricalLow = await page.locator(".product-card .price-insight", { hasText: "無法判定" }).first().count();
  if (!unknownHistoricalLow) throw new Error(`${name}: missing not-found historical low state`);
  await page.fill("#searchInput", "不存在的商品關鍵字");
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "0");
  await page.fill("#searchInput", "");
  await waitForVisibleCount(page, EXPECTED_PRODUCT_COUNT);
  await waitForProductCards(page, 12);

  if (viewport.width >= 700) {
    const headerOffset = await page.evaluate(() => {
      const header = document.querySelector(".topbar-inner")?.getBoundingClientRect();
      const main = document.querySelector("main")?.getBoundingClientRect();
      return Math.abs((header?.left || 0) - (main?.left || 0));
    });
    if (headerOffset > 1) throw new Error(`${name}: header is misaligned by ${headerOffset}px`);
  }

  if (viewport.width < 700) {
    await page.getByRole("button", { name: /^篩選/ }).click();
    await page.waitForFunction(() => document.querySelector("#advancedFilters") && !document.querySelector("#advancedFilters").hidden);
  }

  await page.fill("#categoryInput", "電子");
  await page.locator('#categoryOptions [data-value="smartlock"]').click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "48");
  await page.locator("#brandInput").click();
  const smartLockBrandOptions = await page.$$eval("#brandOptions [data-value]", (options) => options.map((option) => option.dataset.value));
  if (!smartLockBrandOptions.includes("Yale")) throw new Error(`${name}: smart lock brands missing Yale`);
  if (smartLockBrandOptions.includes("ASUS")) throw new Error(`${name}: smart lock brands should not include ASUS`);
  await page.fill("#brandInput", "Yale");
  await page.locator('#brandOptions [data-value="Yale"]').click();
  await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) > 0);
  await page.fill("#budgetInput", "均衡");
  await page.locator('#budgetOptions [data-value="mid"]').click();
  await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) > 0);
  await page.fill("#channelInput", "台灣");
  await page.locator('#channelOptions [data-value="tw"]').click();
  await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) > 0);
  await page.fill("#sortInput", "價格低");
  await page.locator('#sortOptions [data-value="priceAsc"]').click();
  const sortValue = await page.locator("#sortInput").inputValue();
  if (sortValue !== "價格低到高") throw new Error(`${name}: searchable sort did not select priceAsc`);
  if (viewport.width < 700 && await page.locator("#advancedFilters").evaluate((panel) => panel.hidden)) {
    await page.getByRole("button", { name: /^篩選/ }).click();
    await page.waitForFunction(() => document.querySelector("#advancedFilters") && !document.querySelector("#advancedFilters").hidden);
  }
  await page.getByRole("button", { name: "重設篩選" }).click();
  await waitForVisibleCount(page, EXPECTED_PRODUCT_COUNT);

  await page.fill("#categoryInput", "無線");
  await page.locator('#categoryOptions [data-value="wifi"]').click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "48");
  await page.locator("#brandInput").click();
  const routerBrandOptions = await page.$$eval("#brandOptions [data-value]", (options) => options.map((option) => option.dataset.value));
  for (const expected of ["ASUS", "TP-Link", "Aruba", "UniFi"]) {
    if (!routerBrandOptions.includes(expected)) throw new Error(`${name}: router brands missing ${expected}`);
  }
  if (routerBrandOptions.includes("Yale")) throw new Error(`${name}: router brands should not include Yale`);
  await page.locator("#searchInput").click();
  await page.waitForFunction(() => document.querySelector("#brandOptions")?.hidden);
  await page.getByRole("button", { name: "重設篩選" }).click();
  await waitForVisibleCount(page, EXPECTED_PRODUCT_COUNT);

  const soundbarTab = page.getByRole("button", { name: "Soundbar 26" });
  await soundbarTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "26");
  await page.locator("#brandInput").click();
  const soundbarBrandOptions = await page.$$eval("#brandOptions [data-value]", (options) => options.map((option) => option.dataset.value));
  if (!soundbarBrandOptions.includes("Marshall")) throw new Error(`${name}: soundbar brands missing Marshall`);
  await page.fill("#brandInput", "Marshall");
  await page.locator('#brandOptions [data-value="Marshall"]').click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "2");
  await waitForProductCards(page, 2);
  const marshallSoundbarCount = await page.locator(".product-card", { hasText: "Marshall" }).count();
  if (marshallSoundbarCount !== 2) throw new Error(`${name}: expected 2 Marshall soundbars, got ${marshallSoundbarCount}`);
  const marshallCompareButton = page.locator(".compare-button").first();
  await marshallCompareButton.scrollIntoViewIfNeeded();
  await marshallCompareButton.click();
  await page.waitForFunction(() => document.querySelector("#compareCount")?.textContent?.trim() === "1");
  await page.locator("#clearCompare").click();
  await page.waitForFunction(() => document.querySelector("#compareCount")?.textContent?.trim() === "0");
  await page.getByRole("button", { name: "重設篩選" }).click();
  await waitForVisibleCount(page, EXPECTED_PRODUCT_COUNT);

  if (viewport.width < 700) {
    await page.getByRole("button", { name: /^篩選/ }).click();
    await page.waitForFunction(() => document.querySelector("#advancedFilters")?.hidden);
  }

  const fanTab = page.getByRole("button", { name: "電風扇 22" });
  await fanTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "22");
  await loadAllVisibleProducts(page);
  const philipsFanCount = await page.locator(".product-card", { hasText: "Philips" }).count();
  if (philipsFanCount < 5) throw new Error(`${name}: expected at least 5 Philips fan products, got ${philipsFanCount}`);

  const purifierTab = page.getByRole("button", { name: "空氣清淨機 22" });
  await purifierTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "22");
  await loadAllVisibleProducts(page);
  const poiemaCount = await page.locator(".product-card", { hasText: "POIEMA" }).count();
  if (poiemaCount < 2) throw new Error(`${name}: expected POIEMA purifier products, got ${poiemaCount}`);

  const robotTab = page.getByRole("button", { name: /掃拖機器人 34/ });
  await robotTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "34");
  await loadAllVisibleProducts(page);

  const robotBrands = await page.$$eval(".product-card", (cards) => {
    return [...new Set(cards.map((card) => card.querySelector("h3")?.textContent?.trim()).filter(Boolean))];
  });
  for (const expected of ["Roborock", "Ecovacs", "Dreame", "Narwal", "iRobot", "eufy", "MOVA", "LG", "Shark", "Dyson"]) {
    const found = await page.locator(".product-card", { hasText: expected }).count();
    if (!found) throw new Error(`${name}: missing robot brand ${expected}`);
  }

  const smartLockTab = page.getByRole("button", { name: "電子鎖 48" });
  await smartLockTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "48");
  await loadAllVisibleProducts(page);
  for (const expected of ["Yale", "Philips", "Kaadas", "Aqara", "Lockin", "dormakaba", "HITACHI", "WAFERLOCK"]) {
    const found = await page.locator(".product-card", { hasText: expected }).count();
    if (!found) throw new Error(`${name}: missing smart lock brand ${expected}`);
  }

  const routerTab = page.getByRole("button", { name: "無線路由器 48" });
  await routerTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "48");
  await loadAllVisibleProducts(page);
  for (const expected of ["ASUS", "TP-Link", "D-Link", "NETGEAR", "Linksys", "Synology", "Aruba", "UniFi", "Zyxel", "Mercusys", "Acer", "QNAP"]) {
    const found = await page.locator(".product-card", { hasText: expected }).count();
    if (!found) throw new Error(`${name}: missing router brand ${expected}`);
  }
  const nonWifi6Plus = await page.$$eval(".product-card", (cards) => cards.filter((card) => !/Wi-Fi (6|6E|7)/.test(card.textContent || "")).length);
  if (nonWifi6Plus) throw new Error(`${name}: ${nonWifi6Plus} router cards missing Wi-Fi 6+ standard`);
  await page.fill("#searchInput", "Mesh");
  await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) >= 20);
  const meshVisible = Number((await visibleText(page, "#visibleCount")).trim());
  if (meshVisible < 20) throw new Error(`${name}: Mesh search returned ${meshVisible}`);

  if (viewport.width < 700) {
    await page.getByRole("button", { name: /^篩選/ }).click();
    await page.waitForFunction(() => document.querySelector("#advancedFilters") && !document.querySelector("#advancedFilters").hidden);
  }
  await page.fill("#searchInput", "");
  await page.fill("#categoryInput", "螢幕");
  await page.locator('#categoryOptions [data-value="monitor"]').click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "54");
  await page.locator("#brandInput").click();
  const monitorBrandOptions = await page.$$eval("#brandOptions [data-value]", (options) => options.map((option) => option.dataset.value));
  for (const expected of ["ASUS", "BenQ", "Dell", "LG", "Samsung", "EIZO"]) {
    if (!monitorBrandOptions.includes(expected)) throw new Error(`${name}: monitor brands missing ${expected}`);
  }
  if (monitorBrandOptions.includes("Yale")) throw new Error(`${name}: monitor brands should not include Yale`);
  await page.fill("#brandInput", "ASUS");
  await page.locator('#brandOptions [data-value="ASUS"]').click();
  await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) >= 4);
  await page.getByRole("button", { name: "重設篩選" }).click();
  await waitForVisibleCount(page, EXPECTED_PRODUCT_COUNT);

  const cookwareTab = page.getByRole("button", { name: "鍋具 24" });
  await cookwareTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "24");
  await loadAllVisibleProducts(page);
  for (const expected of ["Tefal", "Buffalo", "WMF", "Fissler", "Le Creuset", "Staub"]) {
    const found = await page.locator(".product-card", { hasText: expected }).count();
    if (!found) throw new Error(`${name}: missing cookware brand ${expected}`);
  }

  const knifeTab = page.getByRole("button", { name: "刀具 21" });
  await knifeTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "21");
  await loadAllVisibleProducts(page);
  for (const expected of ["TOJIRO", "GLOBAL", "Victorinox", "Kai", "Kyocera", "Wusthof"]) {
    const found = await page.locator(".product-card", { hasText: expected }).count();
    if (!found) throw new Error(`${name}: missing knife brand ${expected}`);
  }

  const waterDispenserTab = page.getByRole("button", { name: "櫥下飲水機 21" });
  await waterDispenserTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "21");
  await loadAllVisibleProducts(page);
  for (const expected of ["3M", "EVERPURE", "Coway", "Panasonic", "BWT", "BRITA", "賀眾牌"]) {
    const found = await page.locator(".product-card", { hasText: expected }).count();
    if (!found) throw new Error(`${name}: missing water dispenser brand ${expected}`);
  }

  const dishwasherTab = page.getByRole("button", { name: "洗碗機 23" });
  await dishwasherTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "23");
  await loadAllVisibleProducts(page);
  for (const expected of ["Panasonic", "TECO", "Toshiba", "Bosch", "Electrolux", "LG", "Miele"]) {
    const found = await page.locator(".product-card", { hasText: expected }).count();
    if (!found) throw new Error(`${name}: missing dishwasher brand ${expected}`);
  }

  const standingDeskTab = page.getByRole("button", { name: "升降桌 23" });
  await standingDeskTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "23");
  await loadAllVisibleProducts(page);
  for (const expected of ["Loctek", "iRocks", "NITORI", "COUGAR"]) {
    const found = await page.locator(".product-card", { hasText: expected }).count();
    if (!found) throw new Error(`${name}: missing standing desk brand ${expected}`);
  }

  const chairTab = page.getByRole("button", { name: "電腦椅 23" });
  await chairTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "23");
  await loadAllVisibleProducts(page);
  for (const expected of ["iRocks", "Ergohuman", "Razer", "Herman Miller", "Steelcase"]) {
    const found = await page.locator(".product-card", { hasText: expected }).count();
    if (!found) throw new Error(`${name}: missing chair brand ${expected}`);
  }

  const monitorTab = page.getByRole("button", { name: "電腦螢幕 54" });
  await monitorTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "54");
  await loadAllVisibleProducts(page);
  for (const expected of ["ASUS", "Acer", "BenQ", "LG", "Dell", "Samsung", "MSI", "GIGABYTE", "ViewSonic", "AOC", "Philips", "EIZO", "Xiaomi"]) {
    const found = await page.locator(".product-card", { hasText: expected }).count();
    if (!found) throw new Error(`${name}: missing monitor brand ${expected}`);
  }
  await page.fill("#searchInput", "OLED");
  await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) >= 8);
  const oledVisible = Number((await visibleText(page, "#visibleCount")).trim());
  if (oledVisible < 8) throw new Error(`${name}: OLED search returned ${oledVisible}`);

  await page.fill("#searchInput", "寬螢幕");
  await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) >= 15);
  const ultrawideVisible = Number((await visibleText(page, "#visibleCount")).trim());
  if (ultrawideVisible < 15) throw new Error(`${name}: ultrawide search returned ${ultrawideVisible}`);

  await page.fill("#searchInput", "");
  const monitorArmTab = page.getByRole("button", { name: "懸臂支架 21" });
  await monitorArmTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "21");
  await loadAllVisibleProducts(page);
  for (const expected of ["Raymii", "Happy Tech", "Loctek", "Ergotron", "j5create"]) {
    const found = await page.locator(".product-card", { hasText: expected }).count();
    if (!found) throw new Error(`${name}: missing monitor arm brand ${expected}`);
  }
  await page.fill("#searchInput", "57吋");
  await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) >= 5);
  const arm57Visible = Number((await visibleText(page, "#visibleCount")).trim());
  if (arm57Visible < 5) throw new Error(`${name}: 57 inch arm search returned ${arm57Visible}`);
  await page.fill("#searchInput", "30kg");
  await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) >= 1);
  const arm30kgVisible = Number((await visibleText(page, "#visibleCount")).trim());
  if (arm30kgVisible < 1) throw new Error(`${name}: 30kg arm search returned ${arm30kgVisible}`);

  await page.fill("#searchInput", "");
  await page.getByRole("button", { name: "電視 27" }).click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "27");
  await loadAllVisibleProducts(page);
  const tvCastingMissing = await page.$$eval(".product-card", (cards) => cards.filter((card) => !card.textContent.includes("手機投影：")).length);
  if (tvCastingMissing) throw new Error(`${name}: ${tvCastingMissing} TV cards missing mobile casting spec`);
  await page.fill("#searchInput", "Chromecast");
  await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) >= 10);

  await page.fill("#searchInput", "");
  await monitorTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "54");
  await loadAllVisibleProducts(page);
  const monitorWeightMissing = await page.$$eval(".product-card", (cards) => cards.filter((card) => !card.textContent.includes("重量：")).length);
  if (monitorWeightMissing) throw new Error(`${name}: ${monitorWeightMissing} monitor cards missing weight spec`);
  await page.fill("#searchInput", "3.93 kg");
  await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) >= 1);

  await page.fill("#searchInput", "");
  await standingDeskTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "23");
  await loadAllVisibleProducts(page);
  const deskThicknessMissing = await page.$$eval(".product-card", (cards) => cards.filter((card) => !card.textContent.includes("桌板厚度：")).length);
  if (deskThicknessMissing) throw new Error(`${name}: ${deskThicknessMissing} standing desk cards missing desktop thickness spec`);
  await page.fill("#searchInput", "2.5cm");
  await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) >= 3);

  await page.fill("#searchInput", "");
  await robotTab.click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "34");
  await loadAllVisibleProducts(page);
  await page.fill("#searchInput", "Saros");
  await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) >= 3);
  const sarosVisible = Number((await visibleText(page, "#visibleCount")).trim());
  if (sarosVisible < 3) throw new Error(`${name}: Saros search returned ${sarosVisible}`);
  await waitForProductCards(page, sarosVisible);

  const firstCompareButton = page.locator(".compare-button").first();
  await firstCompareButton.scrollIntoViewIfNeeded();
  await firstCompareButton.click();
  await page.waitForFunction(() => document.querySelector("#compareCount")?.textContent?.trim() === "1");
  const compareRows = await page.locator("#compareTable table tr").count();
  if (compareRows < 3) throw new Error(`${name}: compare table did not render`);
  const releaseCompareRows = await page.locator("#compareTable tr", { hasText: "上市/發售" }).count();
  if (releaseCompareRows !== 1) throw new Error(`${name}: compare table missing release date row`);
  const historicalCompareRows = await page.locator("#compareTable tr", { hasText: "歷史最低價 / 入手時機" }).count();
  if (historicalCompareRows !== 1) throw new Error(`${name}: compare table missing historical low row`);
  await assertIssueResearchCompareRow(page, name);
  await assertHistoricalLowCompareLayout(page, name);
  await assertSingleCompareFitsViewport(page, name);
  await assertCompareRowHeaders(page, name);
  await page.locator("[data-compare-remove]").first().click();
  await page.waitForFunction(() => document.querySelector("#compareCount")?.textContent?.trim() === "0");

  await page.getByRole("button", { name: "重設篩選" }).click();
  await waitForVisibleCount(page, EXPECTED_PRODUCT_COUNT);
  await waitForProductCards(page, 12);
  await page.locator("#topPicks [data-focus-product]").nth(14).focus();
  await page.keyboard.press("Enter");
  await page.waitForFunction(() => document.querySelectorAll(".product-card").length >= 15);
  await page.waitForFunction(() => document.querySelector(".product-card.is-targeted"));
  const targetedCardVisible = await page.locator(".product-card.is-targeted").isVisible();
  if (!targetedCardVisible) throw new Error(`${name}: top pick target card is not visible`);

  const overflow = await page.evaluate(() => {
    const root = document.documentElement;
    return root.scrollWidth - window.innerWidth;
  });
  if (overflow > 2) throw new Error(`${name}: horizontal overflow ${overflow}px`);
  await assertProductImagesStayInsideWrap(page, name);
  await assertHistoricalLowLayout(page, name);

  if (viewport.width < 700) {
    const clearCompareButton = page.locator("#clearCompare");
    if (await clearCompareButton.isEnabled()) {
      await clearCompareButton.click();
      await page.waitForFunction(() => document.querySelector("#compareCount")?.textContent?.trim() === "0");
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "auto" }));
    await page.fill("#searchInput", "WWEB10701BS");
    await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "1");
    await waitForProductCards(page, 1);
    await page.locator(".product-card").first().evaluate((card) => {
      const rect = card.getBoundingClientRect();
      window.scrollTo({ top: Math.max(0, window.scrollY + rect.top - 64), behavior: "auto" });
    });
    await page.waitForFunction(() => {
      const card = document.querySelector(".product-card");
      if (!card) return false;
      const top = card.getBoundingClientRect().top;
      return top >= 48 && top <= 96;
    });
    await waitForImages(page).catch(() => undefined);
    await assertProductImagesStayInsideWrap(page, `${name} WWEB10701BS`);
    await page.screenshot({ path: path.resolve(screenshotDir, `${name}-wweb10701bs.png`), fullPage: false });
    await page.fill("#searchInput", "");
    await waitForVisibleCount(page, EXPECTED_PRODUCT_COUNT);
    await waitForProductCards(page, 12);
  }

  if (viewport.width < 700) {
    await assertMobileFloatingControlsDoNotOverlap(page, name);
    await assertMobileDockClearance(page, name);
  }
  await page.getByLabel("滑動到最下面").click();
  await page.waitForFunction(() => window.scrollY > 200);
  await page.getByLabel("滑動到最上面").click();
  await page.waitForFunction(() => window.scrollY < 20);

  if (viewport.width < 700) {
    await page.fill("#searchInput", "");
    const filterToggle = page.getByRole("button", { name: /^篩選/ });
    if (await filterToggle.getAttribute("aria-expanded") === "true") {
      await filterToggle.click();
      await page.waitForFunction(() => document.querySelector("#advancedFilters")?.hidden);
    }
    await filterToggle.click();
    const expanded = await filterToggle.getAttribute("aria-expanded");
    if (expanded !== "true") throw new Error(`${name}: mobile filter did not expand`);
    const panelVisible = await page.locator("#advancedFilters").isVisible();
    if (!panelVisible) throw new Error(`${name}: mobile filter panel hidden after expand`);
    await filterToggle.click();
    const collapsed = await filterToggle.getAttribute("aria-expanded");
    if (collapsed !== "false") throw new Error(`${name}: mobile filter did not collapse`);
  }

  assertNoRuntimeIssues(page, name);
  await page.screenshot({ path: path.resolve(screenshotDir, `${name}.png`), fullPage: false });
  await page.close();
}


async function openDashboardPage(browser, name, viewport) {
  const page = await browser.newPage({ viewport });
  attachRuntimeIssueCollector(page);
  await page.goto(fileUrl, { waitUntil: "domcontentloaded" });
  await page.waitForSelector(".product-card");
  await waitForImages(page).catch(() => undefined);
  await assertBaselineState(page, name, viewport);
  return page;
}

async function assertBaselineState(page, name, viewport) {
  const total = await visibleText(page, "#productCount");
  if (total.trim() !== EXPECTED_PRODUCT_COUNT_TEXT) throw new Error(`${name}: expected ${EXPECTED_PRODUCT_COUNT_TEXT} products, got ${total}`);
  const categoryTotal = await visibleText(page, "#categoryCount");
  if (categoryTotal.trim() !== EXPECTED_CATEGORY_COUNT_TEXT) throw new Error(`${name}: expected ${EXPECTED_CATEGORY_COUNT_TEXT} categories, got ${categoryTotal}`);
  const firstReleaseLabel = await page.locator(".product-card .spec-item", { hasText: "上市 / 發售日期" }).first().count();
  if (!firstReleaseLabel) throw new Error(`${name}: product cards missing release date field`);
  const firstHistoricalLow = await page.locator(".product-card .price-insight", { hasText: "歷史最低價 / 入手時機" }).first().count();
  if (!firstHistoricalLow) throw new Error(`${name}: product cards missing historical low insight`);
  const historicalLowSourceLink = await page.locator(".product-card .price-insight a", { hasText: "史低出處" }).first().count();
  if (!historicalLowSourceLink) throw new Error(`${name}: rendered found historical low cards are missing source links`);
  await waitForProductCards(page, 12);
  await assertHistoricalLowLayout(page, name);
  await assertIssueResearchCards(page, name);
  await assertProductDetailsDisclosure(page, name);
  await assertAccessibleStructure(page, name);
  await assertProjectSourceLink(page, name);
  await assertManualAdPlacements(page, name);
  await assertPremiumBadgeContrast(page, name);
  const initialRenderedText = await visibleText(page, "#renderedCount");
  if (!initialRenderedText.includes(`12 / ${EXPECTED_PRODUCT_COUNT_TEXT}`)) {
    throw new Error(`${name}: expected initial lazy render 12 / ${EXPECTED_PRODUCT_COUNT_TEXT}, got ${initialRenderedText}`);
  }

  if (viewport.width >= 700) {
    const headerOffset = await page.evaluate(() => {
      const header = document.querySelector(".topbar-inner")?.getBoundingClientRect();
      const main = document.querySelector("main")?.getBoundingClientRect();
      return Math.abs((header?.left || 0) - (main?.left || 0));
    });
    if (headerOffset > 1) throw new Error(`${name}: header is misaligned by ${headerOffset}px`);
  }

  await assertNoHorizontalOverflow(page, name);
  await assertProductImagesStayInsideWrap(page, name);
}

async function assertUrlQueryRestore(page, name) {
  await page.goto(`${fileUrl}?q=OLED&category=monitor&sort=priceAsc`, { waitUntil: "domcontentloaded" });
  await page.waitForSelector(".product-card");
  await page.waitForFunction(() => document.querySelector("#searchInput")?.value === "OLED");
  const categoryValue = await page.locator("#categoryInput").inputValue();
  if (categoryValue !== "電腦螢幕") throw new Error(`${name}: query did not restore monitor category`);
  const sortValue = await page.locator("#sortInput").inputValue();
  if (sortValue !== "價格低到高") throw new Error(`${name}: query did not restore priceAsc sort`);
  await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) >= 8);

  const activeChips = await page.locator("#activeFilterChips [data-clear-filter]").count();
  if (activeChips !== 3) throw new Error(`${name}: expected 3 active chips from query, got ${activeChips}`);

  await page.locator('#activeFilterChips [data-clear-filter="sort"]').click();
  const resetSortValue = await page.locator("#sortInput").inputValue();
  if (resetSortValue !== "推薦排序") throw new Error(`${name}: sort chip did not clear sort`);
  if (page.url().includes("sort=")) throw new Error(`${name}: cleared sort remained in URL`);

  await page.locator('#activeFilterChips [data-clear-filter="search"]').click();
  await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "54");
  if (page.url().includes("q=")) throw new Error(`${name}: cleared search remained in URL`);

  await resetFilters(page);
}

async function runSmokeViewport(browser, name, viewport) {
  const page = await openDashboardPage(browser, name, viewport);
  try {
    await page.fill("#searchInput", "POIEMA");
    await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "3");
    await waitForProductCards(page, 3);
    const searchChip = page.locator('#activeFilterChips [data-clear-filter="search"]', { hasText: "POIEMA" });
    if (!await searchChip.count()) throw new Error(`${name}: missing search active filter chip`);
    await searchChip.click();
    await waitForVisibleCount(page, EXPECTED_PRODUCT_COUNT);
    await waitForProductCards(page, 12);
    await assertNoHorizontalOverflow(page, name);
    assertNoRuntimeIssues(page, name);
    await page.screenshot({ path: path.resolve(screenshotDir, `${name}.png`), fullPage: false });
  } finally {
    await page.close();
  }
}

async function runDesktopJourney(browser) {
  const name = "dashboard-desktop";
  const page = await openDashboardPage(browser, name, { width: 1440, height: 1100 });
  try {
    await assertUrlQueryRestore(page, name);

    await page.fill("#searchInput", "POIEMA");
    await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "3");
    await waitForProductCards(page, 3);
    await page.fill("#searchInput", "");
    await waitForVisibleCount(page, EXPECTED_PRODUCT_COUNT);
    await waitForProductCards(page, 12);

    await page.locator("#searchInput").focus();
    await page.locator("#lazySentinel").scrollIntoViewIfNeeded();
    await page.waitForFunction(() => document.querySelectorAll(".product-card").length > 12);
    if (!await page.locator("#searchInput").evaluate((node) => document.activeElement === node)) {
      throw new Error(`${name}: automatic lazy loading moved keyboard focus`);
    }
    await page.evaluate(() => new Promise((resolve) => {
      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      document.scrollingElement.scrollTop = 0;
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
        resolve();
      });
    }));
    await page.waitForFunction(() => window.scrollY < 2);
    await resetFilters(page);

    await page.getByRole("button", { name: "再載入 40 筆" }).click();
    await waitForProductCards(page, 52);
    if (!await page.locator("#loadMoreProducts").evaluate((node) => document.activeElement === node)) {
      throw new Error(`${name}: manual lazy loading did not restore button focus`);
    }
    await page.getByRole("button", { name: "載入全部" }).click();
    await waitForProductCards(page, EXPECTED_PRODUCT_COUNT);
    if (await page.locator("#loadAllProducts").isVisible()) {
      throw new Error(`${name}: load all button should hide after all products render`);
    }
    const unknownHistoricalLow = await page.locator(".product-card .price-insight", { hasText: "無法判定" }).first().count();
    if (!unknownHistoricalLow) throw new Error(`${name}: missing not-found historical low state`);
    await assertHistoricalLowLayout(page, name);

    await page.fill("#searchInput", "不存在的商品關鍵字");
    await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "0");
    const emptyState = page.locator("#productGrid .empty-state");
    if (!await emptyState.getByText("不存在的商品關鍵字", { exact: false }).count()) {
      throw new Error(`${name}: empty state does not echo the search query`);
    }
    if (!await emptyState.getByRole("button", { name: "清除搜尋" }).count()) {
      throw new Error(`${name}: empty state is missing clear-search action`);
    }
    await emptyState.getByRole("button", { name: "重設全部條件" }).click();
    await waitForVisibleCount(page, EXPECTED_PRODUCT_COUNT);
    await waitForProductCards(page, 12);
    if (!await page.locator("#resetFilters").evaluate((node) => document.activeElement === node)) {
      throw new Error(`${name}: zero-result reset did not restore visible desktop focus`);
    }

    await selectComboboxOption(page, "#categoryInput", '#categoryOptions [data-value="smartlock"]', "電子");
    await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "48");
    await page.locator("#brandInput").click();
    const smartLockBrandOptions = await page.$$eval("#brandOptions [data-value]", (options) => options.map((option) => option.dataset.value));
    if (!smartLockBrandOptions.includes("Yale")) throw new Error(`${name}: smart lock brands missing Yale`);
    if (smartLockBrandOptions.includes("ASUS")) throw new Error(`${name}: smart lock brands should not include ASUS`);
    await selectComboboxOption(page, "#brandInput", '#brandOptions [data-value="Yale"]', "Yale");
    await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) > 0);
    await selectComboboxOption(page, "#budgetInput", '#budgetOptions [data-value="mid"]', "均衡");
    await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) > 0);
    await selectComboboxOption(page, "#channelInput", '#channelOptions [data-value="tw"]', "台灣");
    await page.waitForFunction(() => Number(document.querySelector("#visibleCount")?.textContent || 0) > 0);
    await selectComboboxOption(page, "#sortInput", '#sortOptions [data-value="priceAsc"]', "價格低");
    const sortValue = await page.locator("#sortInput").inputValue();
    if (sortValue !== "價格低到高") throw new Error(`${name}: searchable sort did not select priceAsc`);
    await resetFilters(page);

    await selectComboboxOption(page, "#categoryInput", '#categoryOptions [data-value="wifi"]', "無線");
    await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "48");
    await page.locator("#brandInput").click();
    const routerBrandOptions = await page.$$eval("#brandOptions [data-value]", (options) => options.map((option) => option.dataset.value));
    for (const expected of ["ASUS", "TP-Link", "Aruba", "UniFi"]) {
      if (!routerBrandOptions.includes(expected)) throw new Error(`${name}: router brands missing ${expected}`);
    }
    if (routerBrandOptions.includes("Yale")) throw new Error(`${name}: router brands should not include Yale`);
    await page.locator("#searchInput").click();
    await page.waitForFunction(() => document.querySelector("#brandOptions")?.hidden);
    await resetFilters(page);

    await page.getByRole("button", { name: "Soundbar 26" }).click();
    await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "26");
    await page.getByRole("button", { name: "再載入 40 筆" }).click();
    await waitForProductCards(page, 26);
    if (await page.locator("#loadMoreProducts").isVisible()) {
      throw new Error(`${name}: final manual batch should hide the load-more button`);
    }
    await page.waitForFunction(() => document.activeElement === document.querySelector("#productListHeading"));
    await page.locator("#brandInput").click();
    const soundbarBrandOptions = await page.$$eval("#brandOptions [data-value]", (options) => options.map((option) => option.dataset.value));
    if (!soundbarBrandOptions.includes("Marshall")) throw new Error(`${name}: soundbar brands missing Marshall`);
    await selectComboboxOption(page, "#brandInput", '#brandOptions [data-value="Marshall"]', "Marshall");
    await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "2");
    await waitForProductCards(page, 2);
    const marshallSoundbarCount = await page.locator(".product-card", { hasText: "Marshall" }).count();
    if (marshallSoundbarCount !== 2) throw new Error(`${name}: expected 2 Marshall soundbars, got ${marshallSoundbarCount}`);
    const marshallCompareButton = page.locator(".compare-button").first();
    const marshallDetails = page.locator(".product-card details.card-details").first();
    await marshallDetails.locator("summary").click();
    if (!await marshallDetails.evaluate((node) => node.open)) throw new Error(`${name}: compare target details did not open`);
    await marshallCompareButton.scrollIntoViewIfNeeded();
    await marshallCompareButton.click();
    await page.waitForFunction(() => document.querySelector("#compareCount")?.textContent?.trim() === "1");
    if (!await page.locator(".compare-button").first().evaluate((node) => document.activeElement === node)) {
      throw new Error(`${name}: compare action lost keyboard focus after render`);
    }
    if (!await page.locator("#compareTray").isVisible()) throw new Error(`${name}: desktop compare tray is not visible`);
    if (!await page.locator(".product-card details.card-details").first().evaluate((node) => node.open)) {
      throw new Error(`${name}: product details closed after compare render`);
    }
    const compareRows = await page.locator("#compareTable table tr").count();
    if (compareRows < 3) throw new Error(`${name}: compare table did not render`);
    const releaseCompareRows = await page.locator("#compareTable tr", { hasText: "上市/發售" }).count();
    if (releaseCompareRows !== 1) throw new Error(`${name}: compare table missing release date row`);
    const historicalCompareRows = await page.locator("#compareTable tr", { hasText: "歷史最低價 / 入手時機" }).count();
    if (historicalCompareRows !== 1) throw new Error(`${name}: compare table missing historical low row`);
    await assertIssueResearchCompareRow(page, name);
    await assertHistoricalLowCompareLayout(page, name);
    await assertSingleCompareFitsViewport(page, name);
    await assertCompareRowHeaders(page, name);
    await page.fill("#searchInput", "不存在的比較商品");
    await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "0");
    await page.locator("[data-compare-remove]").first().click();
    await page.waitForFunction(() => document.querySelector("#compareCount")?.textContent?.trim() === "0");
    await page.waitForFunction(() => document.activeElement === document.querySelector("#comparePanel h2"));
    await resetFilters(page);

    await page.locator("#topPicks [data-focus-product]").nth(14).focus();
    await page.keyboard.press("Space");
    await page.waitForFunction(() => document.querySelectorAll(".product-card").length >= 15);
    await page.waitForFunction(() => document.querySelector(".product-card.is-targeted"));
    const targetedCardVisible = await page.locator(".product-card.is-targeted").isVisible();
    if (!targetedCardVisible) throw new Error(`${name}: top pick target card is not visible`);
    const targetedHeadingFocused = await page.locator(".product-card.is-targeted h3").evaluate((node) => document.activeElement === node);
    if (!targetedHeadingFocused) throw new Error(`${name}: top pick target heading did not receive focus`);

    await page.getByLabel("滑動到最下面").click();
    await page.waitForFunction(() => window.scrollY > 200);
    await page.getByLabel("滑動到最上面").click();
    await page.waitForFunction(() => window.scrollY < 20);
    await assertNoHorizontalOverflow(page, name);
    await assertProductImagesStayInsideWrap(page, name);
    assertNoRuntimeIssues(page, name);
    await page.screenshot({ path: path.resolve(screenshotDir, `${name}.png`), fullPage: false });
  } finally {
    await page.close();
  }
}

async function runMobileJourney(browser) {
  const name = "dashboard-mobile";
  const page = await openDashboardPage(browser, name, { width: 390, height: 844 });
  try {
    const filterToggle = page.getByRole("button", { name: /^篩選/ });
    await page.fill("#searchInput", "不存在的行動版商品");
    await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "0");
    await page.getByRole("button", { name: "重設全部條件" }).click();
    await waitForVisibleCount(page, EXPECTED_PRODUCT_COUNT);
    if (!await filterToggle.evaluate((node) => document.activeElement === node)) {
      throw new Error(`${name}: zero-result reset did not restore visible mobile focus`);
    }
    await filterToggle.click();
    let expanded = await filterToggle.getAttribute("aria-expanded");
    if (expanded !== "true") throw new Error(`${name}: mobile filter did not expand`);
    if (!await page.locator("#advancedFilters").isVisible()) {
      throw new Error(`${name}: mobile filter panel hidden after expand`);
    }

    await selectComboboxOption(page, "#categoryInput", '#categoryOptions [data-value="soundbar"]', "Soundbar");
    await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "26");
    await selectComboboxOption(page, "#brandInput", '#brandOptions [data-value="Marshall"]', "Marshall");
    await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "2");
    await waitForProductCards(page, 2);
    const activeChipCount = await page.locator("#activeFilterChips [data-clear-filter]").count();
    if (activeChipCount < 2) throw new Error(`${name}: mobile active filter chips missing selected filters`);
    await filterToggle.click();
    await page.waitForFunction(() => document.querySelector("#advancedFilters")?.hidden);
    const collapsedFilterCount = Number(await page.locator("#activeFilterCount").innerText());
    if (collapsedFilterCount < 2) throw new Error(`${name}: collapsed filter count did not reflect active chips`);
    await page.locator('#activeFilterChips [data-clear-filter="brand"]').click();
    await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "26");
    if (!await filterToggle.evaluate((node) => document.activeElement === node)) {
      throw new Error(`${name}: clearing a collapsed mobile filter focused a hidden control`);
    }
    await filterToggle.click();
    await page.waitForFunction(() => document.querySelector("#advancedFilters") && !document.querySelector("#advancedFilters").hidden);
    await selectComboboxOption(page, "#brandInput", '#brandOptions [data-value="Marshall"]', "Marshall");
    await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "2");
    const compareButton = page.locator(".compare-button").first();
    await compareButton.scrollIntoViewIfNeeded();
    await compareButton.click();
    await page.waitForFunction(() => document.querySelector("#compareCount")?.textContent?.trim() === "1");
    await assertIssueResearchCompareRow(page, name);
    await assertHistoricalLowCompareLayout(page, name);
    await assertSingleCompareFitsViewport(page, name);
    await assertCompareRowHeaders(page, name);
    await page.locator("[data-compare-remove]").first().click();
    await page.waitForFunction(() => document.querySelector("#compareCount")?.textContent?.trim() === "0");
    await resetFilters(page);

    await assertCommonIssueJourney(page, name);

    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "auto" }));
    await page.fill("#searchInput", "WWEB10701BS");
    await page.waitForFunction(() => document.querySelector("#visibleCount")?.textContent?.trim() === "1");
    await waitForProductCards(page, 1);
    await page.locator(".product-card").first().evaluate((card) => {
      const rect = card.getBoundingClientRect();
      window.scrollTo({ top: Math.max(0, window.scrollY + rect.top - 64), behavior: "auto" });
    });
    await page.waitForFunction(() => {
      const card = document.querySelector(".product-card");
      if (!card) return false;
      const top = card.getBoundingClientRect().top;
      return top >= 48 && top <= 96;
    });
    await waitForImages(page).catch(() => undefined);
    await assertProductImagesStayInsideWrap(page, `${name} WWEB10701BS`);
    await page.screenshot({ path: path.resolve(screenshotDir, `${name}-wweb10701bs.png`), fullPage: false });
    await page.fill("#searchInput", "");
    await waitForVisibleCount(page, EXPECTED_PRODUCT_COUNT);
    await waitForProductCards(page, 12);

    await assertMobileFloatingControlsDoNotOverlap(page, name);
    await assertMobileDockClearance(page, name);
    await page.getByLabel("滑動到最下面").click();
    await page.waitForFunction(() => window.scrollY > 200);
    await page.getByLabel("滑動到最上面").click();
    await page.waitForFunction(() => window.scrollY < 20);

    if (await filterToggle.getAttribute("aria-expanded") === "true") {
      await filterToggle.click();
      await page.waitForFunction(() => document.querySelector("#advancedFilters")?.hidden);
    }
    await filterToggle.click();
    expanded = await filterToggle.getAttribute("aria-expanded");
    if (expanded !== "true") throw new Error(`${name}: mobile filter did not expand after reset`);
    await filterToggle.click();
    const collapsed = await filterToggle.getAttribute("aria-expanded");
    if (collapsed !== "false") throw new Error(`${name}: mobile filter did not collapse`);

    await assertNoHorizontalOverflow(page, name);
    await assertHistoricalLowLayout(page, name);
    assertNoRuntimeIssues(page, name);
    await page.screenshot({ path: path.resolve(screenshotDir, `${name}.png`), fullPage: false });
  } finally {
    await page.close();
  }
}


module.exports = {
  runProductLoadSchedulingJourney,
  runInitializationFailureJourney,
  runExhaustiveViewport,
  runSmokeViewport,
  runDesktopJourney,
  runMobileJourney,
};
