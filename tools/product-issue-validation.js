function normalize(value) {
  return String(value || "").normalize("NFKC").trim().toLowerCase().replace(/\s+/g, " ");
}

function compactIdentity(value) {
  return normalize(value).replace(/[^\p{L}\p{N}]+/gu, "");
}

function canonicalModel(product) {
  return String(product?.model || "")
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\s+(?:\d+\s*)?(?:入組|入|pack|pcs?)$/i, "")
    .trim();
}

function hostnameOf(value) {
  try {
    const url = new URL(String(value).includes("://") ? value : `https://${value}`);
    return url.hostname.toLowerCase().replace(/^www\./, "");
  } catch (_error) {
    return "";
  }
}

function canonicalWebsite(value) {
  const hostname = hostnameOf(value);
  if (!hostname) return "";
  if (hostname === "old.reddit.com" || hostname.endsWith(".reddit.com")) return "reddit.com";
  const labels = hostname.split(".");
  const multipartSuffixes = new Set(["co.jp", "co.nz", "co.uk", "com.au", "com.cn", "com.sg", "com.tw"]);
  const suffix = labels.slice(-2).join(".");
  const count = multipartSuffixes.has(suffix) ? 3 : 2;
  return labels.slice(-Math.min(count, labels.length)).join(".");
}

function textContainsExactModel(value, product) {
  const canonical = canonicalModel(product);
  if (!canonical) return false;
  const pattern = canonical
    .split(/[\s_-]+/)
    .map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("[\\s_-]*");
  const longerVariant = new RegExp(`${pattern}[\\s_-]*(?:pro|max|plus|lite|ultra|v\\d+|x)\\b`, "i");
  if (longerVariant.test(value)) return false;
  return new RegExp(`(^|[^A-Za-z0-9])${pattern}(?=$|[^A-Za-z0-9])`, "i").test(value);
}

function queryTargetsProduct(query, product) {
  return textContainsExactModel(String(query?.query || ""), product);
}

function queryUrlMatchesRecord(query) {
  try {
    const url = new URL(query.queryUrl);
    const encodedQuery = url.searchParams.get("q");
    return encodedQuery !== null && normalize(encodedQuery) === normalize(query.query);
  } catch (_error) {
    return false;
  }
}

function queryTargetsWebsite(query) {
  const expectedByPlatform = new Map([
    ["dcard", "dcard.tw"],
    ["mobile01", "mobile01.com"],
    ["ptt", "ptt.cc"],
    ["reddit", "reddit.com"],
  ]);
  const expected = expectedByPlatform.get(normalize(query?.platform));
  if (!expected || canonicalWebsite(query?.targetHost) !== expected) return false;
  if (canonicalWebsite(query?.queryUrl) === expected) return true;
  const siteTargets = [...String(query?.query || "").matchAll(/(?:^|\s)site:([^\s()]+)/gi)]
    .map((match) => canonicalWebsite(match[1]));
  return siteTargets.includes(expected);
}

module.exports = {
  canonicalModel,
  canonicalWebsite,
  compactIdentity,
  hostnameOf,
  normalize,
  queryTargetsProduct,
  queryTargetsWebsite,
  queryUrlMatchesRecord,
  textContainsExactModel,
};
