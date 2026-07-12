const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");
const { readDashboardProducts } = require("./read-dashboard-products");
const { CATEGORY_GUIDES } = require("./category-guides");
const {
  collectOutputDrift,
  collectUnexpectedCategoryEntries,
  escapeHtml,
  jsonLdStringify,
} = require("./generate-category-pages");
const { submitIndexNow } = require("./submit-indexnow");

const root = path.resolve(__dirname, "..");
const siteUrl = "https://appliance.riverye.com/";
const editorialTeam = "家電推薦比較工作台專案編輯團隊";
const generatorFile = "tools/generate-category-pages.js";
const indexNowTool = "tools/submit-indexnow.js";
const expectedEvidenceFiles = [
  "release_date_research.json",
  "historical_price_research.json",
  "dimension_research.json",
  "product_issue_research.json",
  "product_issue_report_evidence.json",
  "product_issue_review_manifest.json",
];
const unauthorizedTrackingPatterns = [
  [/google-analytics\.com/i, "Google Analytics loader"],
  [/googletagmanager\.com/i, "Google Tag Manager loader"],
  [/\bgtag\s*\(/i, "gtag tracking call"],
  [/googleadservices\.com\/pagead\/conversion/i, "Google Ads conversion endpoint"],
  [/\bAW-\d{5,}\b/, "Google Ads conversion ID"],
];

const failures = [];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function check(name, callback) {
  try {
    callback();
    console.log(`ok - ${name}`);
  } catch (error) {
    failures.push(`${name}: ${error.message}`);
    console.error(`not ok - ${name}: ${error.message}`);
  }
}

async function checkAsync(name, callback) {
  try {
    await callback();
    console.log(`ok - ${name}`);
  } catch (error) {
    failures.push(`${name}: ${error.message}`);
    console.error(`not ok - ${name}: ${error.message}`);
  }
}

function filePath(file) {
  return path.join(root, file);
}

function read(file) {
  return fs.readFileSync(filePath(file), "utf8");
}

function assertFileExists(file) {
  assert(fs.existsSync(filePath(file)), `${file} is missing`);
}

function attributeValue(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*(["'])([\\s\\S]*?)\\1`, "i"));
  return match?.[2] || "";
}

function elements(markup, tagName) {
  return markup.match(new RegExp(`<${tagName}\\b[^>]*>`, "gi")) || [];
}

function metaContent(markup, attributeName, attributeValue) {
  const tag = elements(markup, "meta").find((candidate) => (
    attributeValueOf(candidate, attributeName) === attributeValue
  ));
  return tag ? attributeValueOf(tag, "content") : "";
}

function attributeValueOf(tag, name) {
  return attributeValue(tag, name);
}

function canonicalHref(markup) {
  const tag = elements(markup, "link").find((candidate) => (
    attributeValueOf(candidate, "rel").split(/\s+/).includes("canonical")
  ));
  return tag ? attributeValueOf(tag, "href") : "";
}

function decodeEntities(value) {
  const named = new Map([
    ["amp", "&"],
    ["lt", "<"],
    ["gt", ">"],
    ["quot", "\""],
    ["apos", "'"],
    ["#39", "'"],
    ["nbsp", " "],
  ]);
  return value.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (entity, token) => {
    if (token.toLowerCase().startsWith("#x")) {
      return String.fromCodePoint(Number.parseInt(token.slice(2), 16));
    }
    if (token.startsWith("#")) {
      return String.fromCodePoint(Number.parseInt(token.slice(1), 10));
    }
    return named.get(token.toLowerCase()) || entity;
  });
}

function visibleText(markup) {
  return decodeEntities(markup
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function jsonLdDocuments(markup) {
  return elements(markup, "script")
    .filter((tag) => attributeValueOf(tag, "type") === "application/ld+json")
    .map((openTag) => {
      const start = markup.indexOf(openTag) + openTag.length;
      const end = markup.indexOf("</script>", start);
      assert(end >= start, "JSON-LD script is not closed");
      return JSON.parse(markup.slice(start, end));
    });
}

function typeIncludes(node, expectedType) {
  const types = Array.isArray(node?.["@type"]) ? node["@type"] : [node?.["@type"]];
  return types.includes(expectedType);
}

function treeContainsType(value, expectedType) {
  if (Array.isArray(value)) return value.some((item) => treeContainsType(item, expectedType));
  if (!value || typeof value !== "object") return false;
  if (typeIncludes(value, expectedType)) return true;
  return Object.values(value).some((item) => treeContainsType(item, expectedType));
}

function graphNodes(documents) {
  return documents.flatMap((document) => (
    Array.isArray(document?.["@graph"]) ? document["@graph"] : [document]
  ));
}

function categoryPageFile(categoryId) {
  return `categories/${categoryId}/index.html`;
}

function parseMeta() {
  const config = read("assets/js/config.js");
  const match = config.match(/const meta = ({[\s\S]*?});/);
  assert(match, "config meta block is missing");
  return Function(`"use strict"; return (${match[1]});`)();
}

function expectedUrls(categories) {
  return [
    siteUrl,
    ...categories.map((category) => `${siteUrl}categories/${category.id}/`),
  ];
}

function runNode(file, args = []) {
  return spawnSync(process.execPath, [filePath(file), ...args], {
    cwd: root,
    encoding: "utf8",
  });
}

function commandOutput(result) {
  return [result.stdout, result.stderr].filter(Boolean).join("\n").trim();
}

function findIndexNowProof() {
  const candidates = fs.readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => /^([A-Za-z0-9-]{8,128})\.txt$/.test(name))
    .filter((name) => {
      const key = name.slice(0, -4);
      return read(name).trim() === key;
    });
  assert(candidates.length === 1, `expected exactly one standard IndexNow key proof file, got ${candidates.length}`);
  const filename = candidates[0];
  return { filename, key: filename.slice(0, -4) };
}

function assertSafePublicMarkup(markup, file) {
  for (const [pattern, label] of unauthorizedTrackingPatterns) {
    assert(!pattern.test(markup), `${file} contains unauthorized ${label}`);
  }
  const urlAttributes = [
    ...elements(markup, "a").map((tag) => attributeValueOf(tag, "href")),
    ...elements(markup, "img").map((tag) => attributeValueOf(tag, "src")),
  ].filter(Boolean);
  for (const value of urlAttributes) {
    assert(!/^\s*(?:javascript|data):/i.test(value), `${file} contains unsafe URL: ${value.slice(0, 80)}`);
  }
}

function assertGuideAndEscapingContracts(categories) {
  const expectedIds = categories.map((category) => category.id).sort();
  const guideIds = Object.keys(CATEGORY_GUIDES).sort();
  assert(JSON.stringify(guideIds) === JSON.stringify(expectedIds), "category guide ids should exactly match config categories");
  for (const category of categories) {
    const guide = CATEGORY_GUIDES[category.id];
    assert(guide?.intro?.trim(), `${category.id} guide intro is missing`);
    assert(guide.criteria?.length === 3, `${category.id} should have exactly three buying criteria`);
    assert(guide.faqs?.length === 3, `${category.id} should have exactly three FAQs`);
    for (const criterion of guide.criteria) {
      assert(criterion.title?.trim() && criterion.detail?.trim(), `${category.id} has an incomplete buying criterion`);
    }
    for (const faq of guide.faqs) {
      assert(faq.question?.trim() && faq.answer?.trim(), `${category.id} has an incomplete FAQ`);
    }
  }

  const malicious = `"><script>alert("geo")</script>&`;
  const escapedMarkup = escapeHtml(malicious);
  assert(!escapedMarkup.includes("<script>"), "HTML escaping must neutralize script markup");
  assert(escapedMarkup.includes("&lt;script&gt;"), "HTML escaping should preserve malicious text safely");
  const escapedJson = jsonLdStringify({ value: malicious });
  assert(!escapedJson.includes("</script>"), "JSON-LD escaping must neutralize closing script tags");
  assert(JSON.parse(escapedJson).value === malicious, "JSON-LD escaping should preserve the source value after parsing");
}

function assertGeneratorDriftContract(categories) {
  assertFileExists(generatorFile);
  const packageJson = JSON.parse(read("package.json"));
  assert(packageJson.scripts?.["generate:categories"]?.includes(generatorFile), "package.json should expose generate:categories");

  const clean = runNode(generatorFile, ["--check"]);
  assert(clean.status === 0, `generator --check should pass for committed output: ${commandOutput(clean)}`);

  const temporaryRoot = fs.mkdtempSync(path.join(os.tmpdir(), "dashboard-geo-drift-"));
  try {
    const temporaryPage = path.join(temporaryRoot, "generated.html");
    const expected = "expected generated content\n";
    const drifted = "unexpected hand edit\n";
    fs.writeFileSync(temporaryPage, drifted);
    const drift = collectOutputDrift(new Map([[temporaryPage, expected]]));
    assert(drift.length === 1 && drift[0].includes("out of date"), "drift comparison should reject modified generated content");
    assert(fs.readFileSync(temporaryPage, "utf8") === drifted, "drift comparison must not rewrite checked output");
    fs.writeFileSync(temporaryPage, expected);
    assert(collectOutputDrift(new Map([[temporaryPage, expected]])).length === 0, "drift comparison should accept matching output");

    const temporaryCategories = path.join(temporaryRoot, "categories");
    fs.mkdirSync(path.join(temporaryCategories, "tv"), { recursive: true });
    fs.writeFileSync(path.join(temporaryCategories, "tv", "index.html"), "expected");
    fs.writeFileSync(path.join(temporaryCategories, "tv", "extra.html"), "thin page");
    const unexpected = collectUnexpectedCategoryEntries(temporaryCategories, [{ id: "tv" }]);
    assert(unexpected.includes("tv/extra.html"), "category tree comparison should reject extra HTML pages");
  } finally {
    fs.rmSync(temporaryRoot, { recursive: true, force: true });
  }
}

function assertGeneratedPageSet(categories) {
  const categoriesRoot = filePath("categories");
  assert(fs.existsSync(categoriesRoot), "categories directory is missing");
  const actualIds = fs.readdirSync(categoriesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  const expectedIds = categories.map((category) => category.id).sort();
  assert(JSON.stringify(actualIds) === JSON.stringify(expectedIds), `generated category directories mismatch: expected ${expectedIds.length}, got ${actualIds.length}`);
  const missing = categories
    .map((category) => categoryPageFile(category.id))
    .filter((file) => !fs.existsSync(filePath(file)));
  assert(missing.length === 0, `missing category pages: ${missing.join(", ")}`);
  const unexpected = collectUnexpectedCategoryEntries(categoriesRoot, categories);
  assert(unexpected.length === 0, `unexpected generated category entries: ${unexpected.join(", ")}`);
}

function assertCategoryPageContracts(categories, products, meta) {
  const titles = new Set();
  const descriptions = new Set();
  const canonicals = new Set();

  for (const category of categories) {
    const file = categoryPageFile(category.id);
    assertFileExists(file);
    const markup = read(file);
    const text = visibleText(markup);
    const title = decodeEntities(markup.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "");
    const description = metaContent(markup, "name", "description");
    const canonical = canonicalHref(markup);
    const categoryProducts = products
      .filter((product) => product.category === category.id)
      .sort((left, right) => left.rank - right.rank || left.id.localeCompare(right.id));
    const topFive = categoryProducts.slice(0, 5);

    assert(title && title.includes(category.label), `${file} title should identify ${category.label}`);
    assert(description && decodeEntities(description).includes(category.label), `${file} description should identify ${category.label}`);
    assert(canonical === `${siteUrl}categories/${category.id}/`, `${file} canonical mismatch`);
    assert(metaContent(markup, "property", "og:title") === title, `${file} og:title should match title`);
    assert(metaContent(markup, "property", "og:description") === description, `${file} og:description should match description`);
    assert(metaContent(markup, "property", "og:url") === canonical, `${file} og:url should match canonical`);
    assert(/<h1\b[^>]*>[\s\S]*?<\/h1>/i.test(markup), `${file} visible H1 is missing`);
    assert(text.includes(category.label), `${file} visible H1/content should identify ${category.label}`);
    assert(text.includes(meta.dataDate), `${file} should show data date ${meta.dataDate}`);
    assert(text.includes(editorialTeam), `${file} editorial team byline is missing`);
    assert(text.includes("選購重點"), `${file} buying criteria are missing`);
    assert(text.includes("常見問題"), `${file} FAQ heading is missing`);
    assert(text.includes("資料限制"), `${file} data limitations are missing`);
    assert(/研究方法|查核方法/.test(text), `${file} research method is missing`);
    assert((text.match(/[？?]/g) || []).length >= 2, `${file} should contain at least two non-empty FAQ questions`);
    assert(new RegExp(`${categoryProducts.length}\\s*筆`).test(text), `${file} should show ${categoryProducts.length} products in the category`);
    for (const label of ["適合對象", "優點", "缺點", "推薦理由", "歷史最低價", "負評／災情查核"]) {
      assert(text.includes(label), `${file} recommended product summaries are missing ${label}`);
    }
    assert(topFive.length === 5, `${file} cannot derive five recommendations from source products`);
    const normalizedText = text.replace(/[,，]/g, "");
    for (const product of topFive) {
      for (const value of [product.brand, product.model, product.bestFor, product.recommendation, product.pros[0], product.cons[0]]) {
        assert(normalizedText.includes(String(value).replace(/[,，]/g, "")), `${file} is missing source-backed content for ${product.id}: ${value}`);
      }
      assert(normalizedText.includes(String(product.price.amount)), `${file} is missing the source price for ${product.id}`);
    }

    const homeFilterLink = elements(markup, "a")
      .map((tag) => attributeValueOf(tag, "href"))
      .filter(Boolean)
      .find((href) => {
        const url = new URL(href, canonical);
        return ["/", "/index.html"].includes(url.pathname) && url.searchParams.get("category") === category.id;
      });
    assert(homeFilterLink, `${file} should link to the homepage with ?category=${category.id}`);

    const documents = jsonLdDocuments(markup);
    const scriptTags = elements(markup, "script");
    assert(scriptTags.length === 1, `${file} should contain only its JSON-LD script`);
    assert(attributeValueOf(scriptTags[0], "type") === "application/ld+json", `${file} must not load executable JavaScript`);
    assert(documents.some((document) => document["@context"] === "https://schema.org" && Array.isArray(document["@graph"])), `${file} should expose schema.org JSON-LD with @graph`);
    const nodes = graphNodes(documents);
    for (const type of ["CollectionPage", "BreadcrumbList", "ItemList"]) {
      assert(nodes.some((node) => typeIncludes(node, type)), `${file} JSON-LD is missing ${type}`);
    }
    const itemList = nodes.find((node) => typeIncludes(node, "ItemList"));
    assert(itemList.itemListElement?.length === 5, `${file} ItemList should contain exactly five recommendations`);
    itemList.itemListElement.forEach((item, index) => {
      assert(item.position === index + 1, `${file} ItemList positions should be 1 through 5`);
      assert(JSON.stringify(item).includes(topFive[index].model), `${file} ItemList position ${index + 1} should identify ${topFive[index].model}`);
    });
    for (const forbiddenType of ["Offer", "Review", "AggregateRating"]) {
      assert(!documents.some((document) => treeContainsType(document, forbiddenType)), `${file} must not add unverifiable ${forbiddenType} structured data`);
    }
    assertSafePublicMarkup(markup, file);

    assert(!titles.has(title), `${file} title duplicates another category page`);
    assert(!descriptions.has(description), `${file} description duplicates another category page`);
    assert(!canonicals.has(canonical), `${file} canonical duplicates another category page`);
    titles.add(title);
    descriptions.add(description);
    canonicals.add(canonical);
  }

  assert(titles.size === categories.length, "category page titles should all be unique");
  assert(descriptions.size === categories.length, "category page descriptions should all be unique");
  assert(canonicals.size === categories.length, "category page canonicals should all be unique");
}

function assertHomepageGeoContract(categories) {
  const markup = read("index.html");
  const text = visibleText(markup);
  for (const label of ["如何選", "如何查核", "資料限制", editorialTeam]) {
    assert(text.includes(label), `index visible trust content is missing ${label}`);
  }

  const hrefs = elements(markup, "a").map((tag) => attributeValueOf(tag, "href")).filter(Boolean);
  for (const category of categories) {
    const expected = `${siteUrl}categories/${category.id}/`;
    assert(hrefs.some((href) => new URL(href, siteUrl).href === expected), `index is missing a crawlable link to ${expected}`);
  }
  const categoryHrefs = hrefs.filter((href) => {
    const url = new URL(href, siteUrl);
    return url.origin === new URL(siteUrl).origin && /^\/categories\/[a-z0-9-]+\/$/.test(url.pathname);
  });
  assert(categoryHrefs.length === categories.length, `index should contain exactly ${categories.length} crawlable category guide links`);

  const documents = jsonLdDocuments(markup);
  assert(documents.some((document) => document["@context"] === "https://schema.org" && Array.isArray(document["@graph"])), "index JSON-LD should use @graph");
  const nodes = graphNodes(documents);
  for (const type of ["WebSite", "WebPage", "Organization", "ItemList"]) {
    assert(nodes.some((node) => typeIncludes(node, type)), `index JSON-LD is missing ${type}`);
  }
  const organization = nodes.find((node) => typeIncludes(node, "Organization"));
  assert(organization.name === editorialTeam, "index JSON-LD should identify the project editorial team");
  const categoryList = nodes.find((node) => typeIncludes(node, "ItemList"));
  assert(categoryList.itemListElement?.length === categories.length, `index category ItemList should contain ${categories.length} entries`);
}

function sitemapEntries(markup) {
  return [...markup.matchAll(/<url>\s*([\s\S]*?)\s*<\/url>/g)].map((match) => ({
    location: decodeEntities(match[1].match(/<loc>([^<]+)<\/loc>/)?.[1] || ""),
    lastmod: match[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] || "",
  }));
}

function assertDiscoveryFiles(categories, meta) {
  assertFileExists("robots.txt");
  assertFileExists("sitemap.xml");
  assertFileExists("llms.txt");
  const robots = read("robots.txt");
  const sitemap = read("sitemap.xml");
  const llms = read("llms.txt");
  const urls = expectedUrls(categories);

  assert(robots.includes("User-agent: *"), "robots.txt should address all crawlers");
  assert(robots.includes("Allow: /"), "robots.txt should allow crawling");
  assert(!/^Disallow:\s*\/$/m.test(robots), "robots.txt should not block the site");
  assert(robots.includes(`Sitemap: ${siteUrl}sitemap.xml`), "robots.txt sitemap URL mismatch");

  const entries = sitemapEntries(sitemap);
  assert(entries.length === urls.length, `sitemap should contain exactly ${urls.length} URLs, got ${entries.length}`);
  assert(new Set(entries.map((entry) => entry.location)).size === entries.length, "sitemap URLs should be unique");
  const actualUrls = new Set(entries.map((entry) => entry.location));
  for (const url of urls) assert(actualUrls.has(url), `sitemap is missing ${url}`);
  for (const entry of entries) {
    assert(entry.lastmod === meta.dataDate, `sitemap lastmod for ${entry.location} should be ${meta.dataDate}`);
  }

  for (const phrase of ["家電推薦比較工作台", "查核方法", "資料限制", "補充", "不保證"]) {
    assert(llms.includes(phrase), `llms.txt should explain ${phrase}`);
  }
  for (const file of expectedEvidenceFiles) {
    assert(llms.includes(file), `llms.txt should identify evidence file ${file}`);
  }
  for (const category of categories) {
    const url = `${siteUrl}categories/${category.id}/`;
    assert(llms.includes(url), `llms.txt is missing category page ${url}`);
  }
}

function assertIndexNowContract(categories) {
  const proof = findIndexNowProof();
  assertFileExists(indexNowTool);
  const dryRun = runNode(indexNowTool, ["--dry-run"]);
  assert(dryRun.status === 0, `IndexNow --dry-run should succeed: ${commandOutput(dryRun)}`);
  const lines = dryRun.stdout.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  assert(lines.length > 0, "IndexNow --dry-run should print its JSON payload");
  let payload;
  try {
    payload = JSON.parse(lines.at(-1));
  } catch (error) {
    throw new Error(`IndexNow --dry-run final line should be JSON: ${error.message}`);
  }

  const urls = expectedUrls(categories);
  assert(payload.host === "appliance.riverye.com", "IndexNow payload host mismatch");
  assert(payload.key === proof.key, "IndexNow payload key mismatch");
  assert(payload.keyLocation === `${siteUrl}${proof.filename}`, "IndexNow payload keyLocation mismatch");
  assert(Array.isArray(payload.urlList) && payload.urlList.length === urls.length, `IndexNow payload should contain ${urls.length} URLs`);
  assert(new Set(payload.urlList).size === payload.urlList.length, "IndexNow payload URLs should be unique");
  for (const url of urls) assert(payload.urlList.includes(url), `IndexNow payload is missing ${url}`);
}

async function assertIndexNowResponseHandling() {
  for (const status of [200, 202]) {
    let request;
    const result = await submitIndexNow(async (url, options) => {
      request = { url, options };
      return { status, text: async () => "" };
    }, { log() {} });
    assert(result.status === status, `IndexNow should accept HTTP ${status}`);
    assert(request.url === "https://api.indexnow.org/indexnow", "IndexNow endpoint mismatch");
    assert(request.options.method === "POST", "IndexNow should use POST");
    const payload = JSON.parse(request.options.body);
    assert(payload.urlList.length === 26, "IndexNow POST payload should contain all canonical URLs");
  }

  let rejected = false;
  try {
    await submitIndexNow(async () => ({ status: 429, text: async () => "rate limited" }), { log() {} });
  } catch (error) {
    rejected = error.message.includes("429") && error.message.includes("rate limited");
  }
  assert(rejected, "IndexNow non-success responses should reject with status and response text");

  let bodyTimedOut = false;
  try {
    await submitIndexNow(async (_url, options) => ({
      status: 200,
      text: () => new Promise((_resolve, reject) => {
        options.signal.addEventListener("abort", () => reject(new Error("response body aborted")), { once: true });
      }),
    }), { log() {} }, 10);
  } catch (error) {
    bodyTimedOut = error.message.includes("response body aborted");
  }
  assert(bodyTimedOut, "IndexNow timeout should remain active while reading the response body");
}

function assertPagesWorkflow(categories) {
  const workflow = read(".github/workflows/pages.yml");
  const artifactStep = workflow.match(/- name: Prepare Pages artifact([\s\S]*?)(?=\n\s+- name:)/)?.[1] || "";
  assert(artifactStep, "Pages artifact preparation step is missing");
  assert(/\bcategories\b/.test(artifactStep), "Pages artifact should include categories/");
  assert(artifactStep.includes("llms.txt"), "Pages artifact should include llms.txt");
  const proof = findIndexNowProof();
  assert(artifactStep.includes(proof.filename) || artifactStep.includes("*.txt"), `Pages artifact should include ${proof.filename}`);
  for (const evidenceFile of expectedEvidenceFiles) {
    assert(artifactStep.includes(evidenceFile), `Pages artifact should include ${evidenceFile}`);
  }
  assert(workflow.includes("npm run check:geo"), "Pages workflow should run the GEO contract check");

  const deploymentIndex = workflow.indexOf("uses: actions/deploy-pages@");
  const indexNowNameIndex = workflow.search(/- name:.*IndexNow/i);
  assert(deploymentIndex >= 0, "Pages deployment step is missing");
  assert(indexNowNameIndex > deploymentIndex, "IndexNow notification should run after Pages deployment");
  const indexNowStep = workflow.slice(indexNowNameIndex).split(/\n\s+- name:/, 1)[0];
  assert(indexNowStep.includes("continue-on-error: true"), "IndexNow submission failure must not fail the deployed Pages job");
  assert(/timeout-minutes:\s*1\b/.test(indexNowStep), "IndexNow workflow step should have a one-minute hard timeout");
  assert(indexNowStep.includes(indexNowTool), `IndexNow workflow step should call ${indexNowTool}`);

  const urls = expectedUrls(categories);
  assert(urls.length === 26, "public artifact contract assumes one homepage plus 25 category pages");
}

async function main() {
  const { categories, products } = readDashboardProducts(root);
  const meta = parseMeta();
  assert(categories.length === 25, `GEO contract expects 25 categories, got ${categories.length}`);

  check("category guides and serializer escaping are complete", () => assertGuideAndEscapingContracts(categories));
  check("category generator detects committed-output drift", () => assertGeneratorDriftContract(categories));
  check("generated output is exactly 25 category pages", () => assertGeneratedPageSet(categories));
  check("category pages expose unique, source-backed, static GEO content", () => assertCategoryPageContracts(categories, products, meta));
  check("homepage exposes trust signals, category links, and JSON-LD graph", () => assertHomepageGeoContract(categories));
  check("robots, sitemap, and llms discovery files match the catalog", () => assertDiscoveryFiles(categories, meta));
  check("IndexNow proof and dry-run payload cover all canonical URLs", () => assertIndexNowContract(categories));
  await checkAsync("IndexNow accepts 200/202 and rejects other responses", assertIndexNowResponseHandling);
  check("Pages artifact and post-deploy IndexNow workflow are complete", () => assertPagesWorkflow(categories));

  if (failures.length) {
    console.error(`\nGEO contract check failed (${failures.length}):`);
    failures.forEach((failure) => console.error(`- ${failure}`));
    process.exitCode = 1;
  } else {
    console.log("GEO contract check passed");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
