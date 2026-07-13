const fs = require("fs");
const http = require("http");
const path = require("path");
const zlib = require("zlib");
const { chromium } = require("playwright");

const ROOT_DIR = path.resolve(__dirname, "..");
const HOST = "127.0.0.1";
const REPRESENTATIVE_CATEGORY_PATH = "/categories/soundbar/";

const MIME_TYPES = new Map([
  [".css", "text/css; charset=utf-8"],
  [".gif", "image/gif"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".webp", "image/webp"],
  [".xml", "application/xml; charset=utf-8"],
]);

const COMPRESSIBLE_TYPES = /^(?:application\/(?:javascript|json|xml)|image\/svg\+xml|text\/)/;
const FIRST_PARTY_CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "connect-src 'self'",
  "font-src 'self' data:",
  "form-action 'self'",
  "frame-src 'none'",
  "img-src 'self' data:",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
].join("; ");

function resolveRequestPath(requestUrl) {
  const pathname = decodeURIComponent(new URL(requestUrl, `http://${HOST}`).pathname);
  const normalizedPath = pathname.endsWith("/") ? `${pathname}index.html` : pathname;
  const filePath = path.resolve(ROOT_DIR, `.${normalizedPath}`);
  const relativePath = path.relative(ROOT_DIR, filePath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) return null;
  return filePath;
}

function respond(response, statusCode, body, contentType) {
  response.writeHead(statusCode, {
    "Cache-Control": "no-store",
    "Content-Length": Buffer.byteLength(body),
    "Content-Security-Policy": FIRST_PARTY_CSP,
    "Content-Type": contentType,
    "X-Content-Type-Options": "nosniff",
  });
  response.end(body);
}

function createStaticServer() {
  return http.createServer(async (request, response) => {
    if (request.method !== "GET" && request.method !== "HEAD") {
      respond(response, 405, "Method not allowed", "text/plain; charset=utf-8");
      return;
    }

    let filePath;
    try {
      filePath = resolveRequestPath(request.url);
    } catch {
      respond(response, 400, "Bad request", "text/plain; charset=utf-8");
      return;
    }

    if (!filePath) {
      respond(response, 403, "Forbidden", "text/plain; charset=utf-8");
      return;
    }

    try {
      const stats = await fs.promises.stat(filePath);
      if (!stats.isFile()) throw Object.assign(new Error("Not a file"), { code: "ENOENT" });

      const contentType = MIME_TYPES.get(path.extname(filePath).toLowerCase())
        || "application/octet-stream";
      const acceptsGzip = /(?:^|,)\s*gzip\s*(?:,|$)/i.test(request.headers["accept-encoding"] || "");
      const shouldGzip = acceptsGzip && COMPRESSIBLE_TYPES.test(contentType);
      const body = await fs.promises.readFile(filePath);
      const payload = shouldGzip ? zlib.gzipSync(body, { level: zlib.constants.Z_BEST_SPEED }) : body;
      const headers = {
        "Cache-Control": "no-store",
        "Content-Length": payload.length,
        "Content-Security-Policy": FIRST_PARTY_CSP,
        "Content-Type": contentType,
        "Vary": "Accept-Encoding",
        "X-Content-Type-Options": "nosniff",
      };
      if (shouldGzip) headers["Content-Encoding"] = "gzip";

      response.writeHead(200, headers);
      response.end(request.method === "HEAD" ? undefined : payload);
    } catch (error) {
      if (error.code === "ENOENT" || error.code === "ENOTDIR") {
        respond(response, 404, "Not found", "text/plain; charset=utf-8");
        return;
      }

      console.error(`quality server error for ${request.url}:`, error);
      respond(response, 500, "Internal server error", "text/plain; charset=utf-8");
    }
  });
}

function listen(server) {
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, HOST, () => {
      server.off("error", reject);
      resolve(server.address().port);
    });
  });
}

function closeServer(server) {
  return new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
}

function categoryScore(lhr, categoryId) {
  return (lhr.categories[categoryId]?.score || 0) * 100;
}

function formatScore(score) {
  return Number.isInteger(score) ? String(score) : score.toFixed(1);
}

function formatMilliseconds(milliseconds) {
  return `${milliseconds.toFixed(1)}ms`;
}

function formatMetrics(lhr) {
  return {
    performance: categoryScore(lhr, "performance"),
    accessibility: categoryScore(lhr, "accessibility"),
    seo: categoryScore(lhr, "seo"),
    lcp: lhr.audits["largest-contentful-paint"].numericValue,
    cls: lhr.audits["cumulative-layout-shift"].numericValue,
    tbt: lhr.audits["total-blocking-time"].numericValue,
  };
}

function printMetrics(label, metrics) {
  console.log(
    `${label}: Performance ${formatScore(metrics.performance)}, `
    + `Accessibility ${formatScore(metrics.accessibility)}, SEO ${formatScore(metrics.seo)}, `
    + `LCP ${formatMilliseconds(metrics.lcp)}, CLS ${metrics.cls.toFixed(4)}, `
    + `TBT ${formatMilliseconds(metrics.tbt)}`,
  );
}

function validateHomepage(metrics) {
  const failures = [];
  if (metrics.performance < 90) failures.push(`Performance ${formatScore(metrics.performance)} < 90`);
  if (metrics.lcp > 2500) failures.push(`LCP ${formatMilliseconds(metrics.lcp)} > 2500ms`);
  if (metrics.cls > 0.1) failures.push(`CLS ${metrics.cls.toFixed(4)} > 0.1000`);
  if (metrics.tbt > 200) failures.push(`TBT ${formatMilliseconds(metrics.tbt)} > 200ms`);
  if (metrics.accessibility < 100) failures.push(`Accessibility ${formatScore(metrics.accessibility)} < 100`);
  if (metrics.seo < 95) failures.push(`SEO ${formatScore(metrics.seo)} < 95`);
  return failures;
}

function validateCategory(metrics) {
  const failures = [];
  if (metrics.performance < 95) failures.push(`Performance ${formatScore(metrics.performance)} < 95`);
  if (metrics.accessibility < 95) failures.push(`Accessibility ${formatScore(metrics.accessibility)} < 95`);
  if (metrics.seo < 95) failures.push(`SEO ${formatScore(metrics.seo)} < 95`);
  return failures;
}

async function runAudit(lighthouse, url, chromePort, options = {}) {
  const throttlingMethod = options.throttlingMethod || "devtools";
  const onlyCategories = options.onlyCategories || ["performance", "accessibility", "seo"];
  const result = await lighthouse(url, {
    blockedUrlPatterns: ["https://*/*"],
    disableStorageReset: false,
    logLevel: "error",
    maxWaitForLoad: 45_000,
    output: "json",
    port: chromePort,
  }, {
    extends: "lighthouse:default",
    settings: {
      onlyCategories,
      formFactor: "mobile",
      // Browser throttling measures rendering metrics directly. TBT is audited separately with
      // Lantern simulation so shared-runner CPU speed does not change the pass/fail decision.
      throttlingMethod,
    },
  });

  if (!result?.lhr) throw new Error(`Lighthouse did not return a report for ${url}`);
  return result.lhr;
}

async function main() {
  const chromePath = chromium.executablePath();
  if (!fs.existsSync(chromePath)) {
    throw new Error(`Playwright Chromium is missing at ${chromePath}; run \"npx playwright install chromium\".`);
  }

  const [{ default: lighthouse }, chromeLauncher] = await Promise.all([
    import("lighthouse"),
    import("chrome-launcher"),
  ]);
  const server = createStaticServer();
  let chrome;

  try {
    const serverPort = await listen(server);
    chrome = await chromeLauncher.launch({
      chromePath,
      chromeFlags: [
        "--headless=new",
        "--no-sandbox",
        "--disable-dev-shm-usage",
        "--disable-background-networking",
        "--disable-component-update",
        "--disable-default-apps",
        "--disable-domain-reliability",
        "--disable-extensions",
        "--disable-features=MediaRouter,OptimizationHints,Translate",
        "--disable-sync",
        "--metrics-recording-only",
        "--no-first-run",
        "--safebrowsing-disable-auto-update",
      ],
      logLevel: "silent",
    });

    const baseUrl = `http://${HOST}:${serverPort}`;
    const pages = [
      { label: "homepage", path: "/", validate: validateHomepage },
      { label: "category/soundbar", path: REPRESENTATIVE_CATEGORY_PATH, validate: validateCategory },
    ];
    const failures = [];

    for (const page of pages) {
      const lhr = await runAudit(lighthouse, `${baseUrl}${page.path}`, chrome.port);
      if (process.env.QUALITY_REPORT_DIR) {
        fs.mkdirSync(process.env.QUALITY_REPORT_DIR, { recursive: true });
        fs.writeFileSync(
          path.join(process.env.QUALITY_REPORT_DIR, `${page.label.replace(/[^a-z0-9]+/gi, "-")}.json`),
          JSON.stringify(lhr),
        );
      }
      const metrics = formatMetrics(lhr);
      if (page.label === "homepage") {
        const simulatedLhr = await runAudit(
          lighthouse,
          `${baseUrl}${page.path}`,
          chrome.port,
          { onlyCategories: ["performance"], throttlingMethod: "simulate" },
        );
        metrics.tbt = simulatedLhr.audits["total-blocking-time"].numericValue;
        if (process.env.QUALITY_REPORT_DIR) {
          fs.writeFileSync(
            path.join(process.env.QUALITY_REPORT_DIR, "homepage-tbt-simulated.json"),
            JSON.stringify(simulatedLhr),
          );
        }
      }
      printMetrics(page.label, metrics);
      if (page.label === "homepage") {
        console.log("homepage TBT uses Lighthouse Lantern simulation for runner-independent scoring");
      }
      failures.push(...page.validate(metrics).map((failure) => `${page.label}: ${failure}`));
    }

    if (failures.length) {
      throw new Error(`Lighthouse quality gate failed:\n- ${failures.join("\n- ")}`);
    }

    console.log("Lighthouse quality gate passed");
  } finally {
    if (chrome) await chrome.kill();
    if (server.listening) await closeServer(server);
  }
}

main().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
