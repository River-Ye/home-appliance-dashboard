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

function assertFileExists(file) {
  assert(fs.existsSync(path.join(root, file)), `${file} is missing`);
}

function attributeValue(markup, name) {
  return markup.match(new RegExp(`\\b${name}="([^"]+)"`))?.[1] || "";
}

function main() {
  const siteUrl = "https://appliance.riverye.com/";
  const oldSiteUrl = "https://river-ye.github.io/home-appliance-dashboard/";
  const repoUrl = "https://github.com/River-Ye/home-appliance-dashboard";
  const privacyUrl = "https://riverye.com/privacy.html";
  const publisherId = "ca-pub-4799252410303973";
  const adsLoaderBaseUrl = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=";
  const seoTitle = "家電推薦比較工作台｜台灣家電價格、規格與購買建議";
  const seoDescription = "家電推薦比較工作台整理電視、冰箱、洗衣機、掃拖機器人、螢幕等家電的價格、規格、優缺點、歷史低價、負評查核與可信通路購買建議。";
  const { categories, exchange, products } = readDashboardProducts(root);
  const config = read("assets/js/config.js");
  const index = read("index.html");
  const readme = read("README.md");
  const agents = read("AGENTS.md");
  const repoSkill = read(".agents/skills/home-appliance-dashboard/SKILL.md");
  assertFileExists("CNAME");
  assertFileExists("robots.txt");
  assertFileExists("sitemap.xml");
  assertFileExists("social-preview.png");
  assertFileExists("assets/js/ads.js");
  const cname = read("CNAME");
  const robots = read("robots.txt");
  const sitemap = read("sitemap.xml");
  const adsScript = read("assets/js/ads.js");
  const publicJavaScript = fs.readdirSync(path.join(root, "assets/js"))
    .filter((file) => file.endsWith(".js"))
    .map((file) => read(`assets/js/${file}`))
    .join("\n");
  const pagesWorkflow = read(".github/workflows/pages.yml");
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
  assert(readme.includes(siteUrl), "README should link to the canonical custom domain");
  assert(!readme.includes(oldSiteUrl), "README should not retain the old public Pages URL");
  assert(cname.trim() === "appliance.riverye.com", "CNAME should contain only the custom hostname");

  for (const snippet of [
    `<title>${seoTitle}</title>`,
    `<meta name="description" content="${seoDescription}">`,
    '<meta name="robots" content="index, follow, max-image-preview:large">',
    `<link rel="canonical" href="${siteUrl}">`,
    '<meta property="og:type" content="website">',
    '<meta property="og:locale" content="zh_TW">',
    '<meta property="og:site_name" content="家電推薦比較工作台">',
    `<meta property="og:title" content="${seoTitle}">`,
    `<meta property="og:description" content="${seoDescription}">`,
    `<meta property="og:url" content="${siteUrl}">`,
    `<meta property="og:image" content="${siteUrl}social-preview.png">`,
    '<meta property="og:image:type" content="image/png">',
    '<meta property="og:image:width" content="1730">',
    '<meta property="og:image:height" content="909">',
    '<meta property="og:image:alt" content="家電推薦比較工作台：家電與比較表插圖">',
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${seoTitle}">`,
    `<meta name="twitter:description" content="${seoDescription}">`,
    `<meta name="twitter:image" content="${siteUrl}social-preview.png">`,
    '<meta name="twitter:image:alt" content="家電推薦比較工作台：家電與比較表插圖">',
    `<meta name="google-adsense-account" content="${publisherId}">`,
    '<p class="project-source">專案原始碼：',
    `<a href="${repoUrl}" target="_blank" rel="noopener noreferrer">GitHub Repo</a>`,
    `<a href="${privacyUrl}">隱私權政策</a>`,
  ]) {
    assert(index.includes(snippet), `index SEO contract is missing: ${snippet}`);
  }

  const localAdsScripts = [...index.matchAll(/<script\b[^>]*src="\.\/assets\/js\/ads\.js\?v=[^"]+"[^>]*><\/script>/g)];
  assert(localAdsScripts.length === 1, "index should load assets/js/ads.js exactly once");
  assert(!index.includes("pagead2.googlesyndication.com"), "index should not load AdSense directly outside the production hostname gate");
  assert(adsScript.split(adsLoaderBaseUrl).length - 1 === 1, "ads.js should contain the official AdSense loader base URL exactly once");
  assert(adsScript.split(publisherId).length - 1 === 1, "ads.js should define the publisher ID exactly once");

  const adUnits = [...index.matchAll(/<ins\b[^>]*class="adsbygoogle"[^>]*>/g)].map((match) => match[0]);
  assert(adUnits.length === 2, `index should contain exactly two manual AdSense units, got ${adUnits.length}`);
  const adSlots = adUnits.map((unit, index) => {
    assert(attributeValue(unit, "data-ad-client") === publisherId, `ad unit ${index + 1} publisher mismatch`);
    assert(attributeValue(unit, "data-ad-format") === "auto", `ad unit ${index + 1} should use auto format`);
    assert(attributeValue(unit, "data-full-width-responsive") === "true", `ad unit ${index + 1} should be responsive`);
    const slot = attributeValue(unit, "data-ad-slot");
    assert(/^\d+$/.test(slot), `ad unit ${index + 1} should use a numeric AdSense slot ID`);
    return slot;
  });
  assert(new Set(adSlots).size === 2, "manual AdSense units should use two unique slot IDs");

  const topPicksIndex = index.indexOf('id="topPicks"');
  const afterPicksAdIndex = index.indexOf('id="ad-after-picks"');
  const resultToolbarIndex = index.indexOf('class="result-toolbar"');
  assert(topPicksIndex < afterPicksAdIndex && afterPicksAdIndex < resultToolbarIndex, "after-picks ad should sit between top picks and the result toolbar");
  const comparePanelIndex = index.indexOf('id="comparePanel"');
  const beforeFooterAdIndex = index.indexOf('id="ad-before-footer"');
  const mainEndIndex = index.indexOf("</main>");
  assert(comparePanelIndex < beforeFooterAdIndex && beforeFooterAdIndex < mainEndIndex, "before-footer ad should sit after comparison and inside main");

  const structuredDataMatch = index.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/);
  assert(structuredDataMatch, "index WebSite structured data is missing");
  const structuredData = JSON.parse(structuredDataMatch[1]);
  assert(structuredData["@context"] === "https://schema.org", "structured data context mismatch");
  assert(Array.isArray(structuredData["@graph"]), "structured data should use an @graph");
  const graph = structuredData["@graph"];
  const typeNode = (type) => graph.find((node) => {
    const types = Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]];
    return types.includes(type);
  });
  const website = typeNode("WebSite");
  const webpage = typeNode("WebPage");
  const organization = typeNode("Organization");
  const categoryList = typeNode("ItemList");
  assert(website?.name === "家電推薦比較工作台", "structured data WebSite name mismatch");
  assert(website?.url === siteUrl, "structured data WebSite URL mismatch");
  assert(website?.description === seoDescription, "structured data WebSite description mismatch");
  assert(website?.inLanguage === "zh-Hant-TW", "structured data WebSite language mismatch");
  assert(webpage?.url === siteUrl && webpage?.dateModified === meta.dataDate, "structured data WebPage freshness mismatch");
  assert(organization?.name === "家電推薦比較工作台專案編輯團隊", "structured data editorial team mismatch");
  assert(Array.isArray(organization?.sameAs) && organization.sameAs.includes(repoUrl), "structured data GitHub sameAs is missing");
  assert(categoryList?.itemListElement?.length === categories.length, "structured data category ItemList mismatch");

  assert(robots.includes("User-agent: *"), "robots.txt should address all crawlers");
  assert(robots.includes("Allow: /"), "robots.txt should allow crawling");
  assert(!/^Disallow:\s*\/$/m.test(robots), "robots.txt should not block the entire site");
  assert(robots.includes(`Sitemap: ${siteUrl}sitemap.xml`), "robots.txt sitemap URL mismatch");
  assert(sitemap.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'), "sitemap namespace mismatch");
  const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const expectedSitemapLocations = [
    siteUrl,
    ...categories.map((category) => `${siteUrl}categories/${category.id}/`),
  ];
  assert(JSON.stringify(sitemapLocations) === JSON.stringify(expectedSitemapLocations), "sitemap canonical URL set mismatch");
  const sitemapLastmods = [...sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((match) => match[1]);
  assert(sitemapLastmods.length === expectedSitemapLocations.length, "sitemap should include one lastmod per canonical URL");
  assert(sitemapLastmods.every((value) => value === meta.dataDate), "sitemap lastmod should use the catalog data date");
  const artifactStepMatch = pagesWorkflow.match(/- name: Prepare Pages artifact([\s\S]*?)(?=\n\s+- name:)/);
  assert(artifactStepMatch, "Pages artifact preparation step is missing");
  assert(artifactStepMatch[1].includes("robots.txt"), "Pages artifact should include robots.txt");
  assert(artifactStepMatch[1].includes("sitemap.xml"), "Pages artifact should include sitemap.xml");
  assert(artifactStepMatch[1].includes("social-preview.png"), "Pages artifact should include the social preview image");
  assert(artifactStepMatch[1].includes("CNAME"), "Pages artifact should include CNAME");
  assert(artifactStepMatch[1].includes("categories"), "Pages artifact should include generated category pages");
  assert(artifactStepMatch[1].includes("llms.txt"), "Pages artifact should include llms.txt");
  for (const evidenceFile of [
    "release_date_research.json",
    "historical_price_research.json",
    "dimension_research.json",
    "product_issue_research.json",
    "product_issue_report_evidence.json",
    "product_issue_review_manifest.json",
  ]) {
    assert(artifactStepMatch[1].includes(evidenceFile), `Pages artifact should include ${evidenceFile}`);
  }

  const cacheVersions = [...index.matchAll(/\?v=([^"']+)/g)].map((match) => match[1]);
  assert(cacheVersions.length > 0, "index should include cache-busting query strings");
  assert(cacheVersions.every((version) => version === meta.cacheVersion), "index cache versions should match config meta");

  assert(!agents.includes("outputs/products/*.js"), "AGENTS should reference products/*.js, not outputs/products/*.js");
  for (const [name, text] of [["AGENTS.md", agents], ["repo-local skill", repoSkill]]) {
    assert(text.includes("只允許本次核准的 Google AdSense 手動廣告與 Google CMP"), `${name} should document the approved AdSense and CMP exception`);
    assert(text.includes("`https://appliance.riverye.com/` 必須維持 AdSense 全站 Auto ads page exclusion"), `${name} should preserve the custom-domain Auto ads exclusion rule`);
    assert(text.includes("禁止加入 Google Analytics、Google Ads 轉換追蹤或其他未授權追蹤"), `${name} should keep unauthorized tracking prohibited`);
  }

  const publicTrackingSurface = `${index}\n${publicJavaScript}`;
  for (const [pattern, label] of [
    [/google-analytics\.com/i, "Google Analytics loader"],
    [/googletagmanager\.com/i, "Google Tag Manager loader"],
    [/\bgtag\s*\(/i, "gtag tracking call"],
    [/googleadservices\.com\/pagead\/conversion/i, "Google Ads conversion endpoint"],
    [/\bAW-\d{5,}\b/, "Google Ads conversion ID"],
  ]) {
    assert(!pattern.test(publicTrackingSurface), `public app should not include ${label}`);
  }

  console.log("docs check passed");
}

try {
  main();
} catch (error) {
  console.error(error);
  process.exit(1);
}
