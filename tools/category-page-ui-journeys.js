const fs = require("fs");
const path = require("path");
const { fileURLToPath, pathToFileURL } = require("url");
const { readDashboardProducts } = require("./read-dashboard-products");

const root = path.resolve(__dirname, "..");
const firstPartyPrefix = pathToFileURL(`${root}${path.sep}`).href;
const editorialTeam = "家電推薦比較工作台專案編輯團隊";
const representativeCategories = [
  { id: "tv", label: "電視" },
  { id: "monitor", label: "電腦螢幕" },
  { id: "mouse", label: "滑鼠" },
  { id: "keyboard", label: "鍵盤" },
  { id: "mousepad", label: "滑鼠墊" },
];
const viewports = [
  { name: "category-desktop", viewport: { width: 1440, height: 1100 } },
  { name: "category-mobile", viewport: { width: 390, height: 844 } },
];
const { products } = readDashboardProducts(root);

function categoryFileUrl(categoryId) {
  return pathToFileURL(path.join(root, "categories", categoryId, "index.html")).href;
}

function attachRuntimeIssueCollector(page) {
  const issues = [];
  const adRequests = [];
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
  page.on("request", (request) => {
    if (/(googlesyndication|doubleclick|googleadservices)/i.test(request.url())) {
      adRequests.push(request.url());
    }
  });
  return { issues, adRequests };
}

function assertNoRuntimeIssues(state, name) {
  if (state.issues.length) {
    throw new Error(`${name}: first-party runtime errors ${JSON.stringify(state.issues.slice(0, 10))}`);
  }
  if (state.adRequests.length) {
    throw new Error(`${name}: local category journey unexpectedly requested ad services ${JSON.stringify(state.adRequests.slice(0, 5))}`);
  }
}

async function assertNoHorizontalOverflow(page, name) {
  const result = await page.evaluate(() => ({
    viewport: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    bodyWidth: document.body.scrollWidth,
  }));
  if (result.documentWidth > result.viewport + 2 || result.bodyWidth > result.viewport + 2) {
    throw new Error(`${name}: horizontal overflow ${JSON.stringify(result)}`);
  }
}

async function assertLocalStaticTargetsExist(page, name) {
  const references = await page.locator("a[href], link[href], script[src], img[src]").evaluateAll((nodes) => (
    nodes.map((node) => node.getAttribute("href") || node.getAttribute("src")).filter(Boolean)
  ));
  const missing = [];
  for (const reference of references) {
    const resolved = new URL(reference, page.url());
    if (resolved.protocol !== "file:" || !resolved.href.startsWith(firstPartyPrefix)) continue;
    const target = fileURLToPath(resolved);
    if (!fs.existsSync(target)) missing.push(reference);
  }
  if (missing.length) {
    throw new Error(`${name}: broken first-party links ${JSON.stringify(missing.slice(0, 10))}`);
  }
}

async function assertNoJavaScriptCategoryPage(browser, category, name, viewport) {
  const context = await browser.newContext({ viewport, javaScriptEnabled: false });
  const page = await context.newPage();
  const runtime = attachRuntimeIssueCollector(page);
  try {
    await page.goto(categoryFileUrl(category.id), { waitUntil: "domcontentloaded" });
    const h1 = page.locator("h1").first();
    if (!await h1.isVisible()) throw new Error(`${name}: visible H1 is missing`);
    if (!(await h1.innerText()).includes(category.label)) {
      throw new Error(`${name}: H1 does not identify ${category.label}`);
    }
    const main = page.locator("main");
    if (!await main.isVisible()) throw new Error(`${name}: main content is not visible without JavaScript`);
    const text = (await main.innerText()).replace(/\s+/g, " ");
    for (const phrase of ["完整型號索引", "選購重點", "常見問題", "資料限制", editorialTeam]) {
      if (!text.includes(phrase)) throw new Error(`${name}: no-JS content is missing ${phrase}`);
    }
    const categoryProducts = products
      .filter((product) => product.category === category.id)
      .sort((left, right) => left.rank - right.rank || left.id.localeCompare(right.id));
    const catalog = page.locator(".editorial-catalog-list");
    if (!await catalog.isVisible()) {
      throw new Error(`${name}: no-JS catalog is not visibly rendered`);
    }
    if (await catalog.locator(".editorial-catalog-item").count() !== categoryProducts.length) {
      throw new Error(`${name}: no-JS catalog does not contain all ${categoryProducts.length} products`);
    }
    const catalogText = (await catalog.innerText()).replace(/\s+/g, " ");
    for (const product of categoryProducts) {
      if (!catalogText.includes(product.model)) {
        throw new Error(`${name}: no-JS catalog content is missing ${product.model}`);
      }
    }
    await assertLocalStaticTargetsExist(page, name);
    await assertNoHorizontalOverflow(page, name);
    if (viewport.width <= 520) {
      const evidence = page.locator(".editorial-evidence");
      await evidence.locator("summary").click();
      const undersizedEvidenceLinks = await evidence.locator("a").evaluateAll((links) => links
        .filter((link) => link.getClientRects().length > 0)
        .map((link) => ({ text: link.textContent.trim(), height: link.getBoundingClientRect().height }))
        .filter((link) => link.height < 43));
      if (undersizedEvidenceLinks.length) {
        throw new Error(`${name}: evidence links have undersized touch targets ${JSON.stringify(undersizedEvidenceLinks.slice(0, 5))}`);
      }
    }
    assertNoRuntimeIssues(runtime, name);
  } finally {
    await context.close();
  }
}

async function findLocalHomepageFragmentLink(page, categoryId) {
  return page.locator("a[href]").evaluateAll((links, expectedCategoryId) => {
    const link = links.find((candidate) => {
      const url = new URL(candidate.getAttribute("href"), document.baseURI);
      const hashParams = new URLSearchParams(url.hash.replace(/^#/, ""));
      return url.protocol === "file:"
        && !url.search
        && hashParams.get("category") === expectedCategoryId;
    });
    return link?.getAttribute("href") || null;
  }, categoryId);
}

async function assertHomepageFilterJourney(browser, category, name, viewport) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  const runtime = attachRuntimeIssueCollector(page);
  try {
    await page.goto(categoryFileUrl(category.id), { waitUntil: "domcontentloaded" });
    const target = await findLocalHomepageFragmentLink(page, category.id);
    if (!target) {
      throw new Error(`${name}: category page has no local homepage #category=${category.id} link`);
    }
    const targetUrl = new URL(target, page.url());
    const localHomepageUrl = `${pathToFileURL(path.join(root, "index.html")).href}${targetUrl.hash}`;
    await page.goto(localHomepageUrl, { waitUntil: "domcontentloaded" });
    await page.waitForSelector(".product-card");
    const expectedCount = products.filter((product) => product.category === category.id).length;
    await page.waitForFunction(({ expectedLabel, count }) => (
      document.querySelector("#categoryInput")?.value === expectedLabel
      && document.querySelector("#visibleCount")?.textContent?.trim() === String(count)
    ), { expectedLabel: category.label, count: expectedCount });
    const currentUrl = new URL(page.url());
    const currentHash = new URLSearchParams(currentUrl.hash.replace(/^#/, ""));
    if (currentUrl.search || currentHash.get("category") !== category.id) {
      throw new Error(`${name}: homepage URL did not retain fragment category=${category.id}`);
    }
    await assertNoHorizontalOverflow(page, name);
    assertNoRuntimeIssues(runtime, name);
  } finally {
    await context.close();
  }
}

async function runCategoryPageJourneys(browser) {
  for (const { name, viewport } of viewports) {
    for (const category of representativeCategories) {
      await assertNoJavaScriptCategoryPage(
        browser,
        category,
        `${name}-${category.id}-no-js`,
        viewport,
      );
    }
    await assertHomepageFilterJourney(
      browser,
      representativeCategories[0],
      `${name}-homepage-filter`,
      viewport,
    );
  }
}

module.exports = { runCategoryPageJourneys };
