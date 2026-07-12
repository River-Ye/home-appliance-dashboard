const fs = require("fs");
const path = require("path");
const {
  SITE_URL,
  SITE_HOST,
  INDEXNOW_KEY,
  INDEXNOW_KEY_FILE,
  publicUrls,
} = require("./geo-config");
const { readDashboardProducts } = require("./read-dashboard-products");

const root = path.resolve(__dirname, "..");
const endpoint = "https://api.indexnow.org/indexnow";

function readSitemapUrls() {
  const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
  return [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
}

function buildPayload() {
  const { categories } = readDashboardProducts(root);
  const expected = publicUrls(categories);
  const sitemapUrls = readSitemapUrls();
  if (JSON.stringify(sitemapUrls) !== JSON.stringify(expected)) {
    throw new Error("sitemap.xml must contain the canonical public URLs in category order before IndexNow submission");
  }
  for (const value of sitemapUrls) {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.host !== SITE_HOST) {
      throw new Error(`Refusing to submit a non-canonical URL to IndexNow: ${value}`);
    }
  }
  return {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}${INDEXNOW_KEY_FILE}`,
    urlList: sitemapUrls,
  };
}

async function submitIndexNow(fetchImplementation = globalThis.fetch, logger = console, timeoutMs = 15000) {
  if (typeof fetchImplementation !== "function") {
    throw new Error("This command requires a Node.js runtime with fetch support");
  }
  const payload = buildPayload();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  let response;
  let responseText;
  try {
    response = await fetchImplementation(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    responseText = (await response.text()).trim();
  } finally {
    clearTimeout(timeout);
  }
  if (![200, 202].includes(response.status)) {
    throw new Error(`IndexNow rejected the submission (${response.status}): ${responseText.slice(0, 1000) || "empty response"}`);
  }
  logger.log(`IndexNow accepted ${payload.urlList.length} canonical URLs (${response.status})${responseText ? `: ${responseText.slice(0, 500)}` : ""}`);
  return { status: response.status, payload };
}

async function main() {
  const payload = buildPayload();
  if (process.argv.includes("--dry-run")) {
    console.log(JSON.stringify(payload));
    return;
  }
  await submitIndexNow();
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}

module.exports = { buildPayload, readSitemapUrls, submitIndexNow };
