const SITE_URL = "https://appliance.riverye.com/";
const SITE_HOST = new URL(SITE_URL).host;
const REPO_URL = "https://github.com/River-Ye/home-appliance-dashboard";
const EDITORIAL_TEAM = "家電推薦比較工作台專案編輯團隊";
const INDEXNOW_KEY = "949a77c30a2a9346e8a7475117ff39b6";
const INDEXNOW_KEY_FILE = `${INDEXNOW_KEY}.txt`;
const PUBLIC_EVIDENCE_FILES = [
  "release_date_research.json",
  "historical_price_research.json",
  "dimension_research.json",
  "product_issue_research.json",
  "product_issue_report_evidence.json",
  "product_issue_review_manifest.json",
];

function categoryUrl(categoryId) {
  return `${SITE_URL}categories/${categoryId}/`;
}

function publicUrls(categories) {
  return [SITE_URL, ...categories.map((category) => categoryUrl(category.id))];
}

module.exports = {
  SITE_URL,
  SITE_HOST,
  REPO_URL,
  EDITORIAL_TEAM,
  INDEXNOW_KEY,
  INDEXNOW_KEY_FILE,
  PUBLIC_EVIDENCE_FILES,
  categoryUrl,
  publicUrls,
};
