const SITE_URL = "https://appliance.riverye.com/";
const SITE_HOST = new URL(SITE_URL).host;
const REPO_URL = "https://github.com/River-Ye/home-appliance-dashboard";
const SITE_NAME = "家電推薦比較工作台";
const EDITORIAL_TEAM = "家電推薦比較工作台專案編輯團隊";
const HOME_PAGE_TITLE = "台灣家電推薦與價格比較｜規格、史低與負評查核";
const HOME_H1 = "家電推薦與價格比較工作台";
const AI_DISCLOSURE = "本站內容與網站由 AI 協助研究、整理與製作；依公開規則查核，仍可能有錯漏。";
const SOCIAL_PREVIEW = Object.freeze({
  url: `${SITE_URL}social-preview.png`,
  type: "image/png",
  width: 1730,
  height: 909,
  alt: `${SITE_NAME}：家電與比較表插圖`,
});
const INDEXNOW_KEY = "949a77c30a2a9346e8a7475117ff39b6";
const INDEXNOW_KEY_FILE = `${INDEXNOW_KEY}.txt`;
const PUBLIC_EVIDENCE_RESOURCES = Object.freeze([
  Object.freeze({ file: "release_date_research.json", label: "上市／發售日期查核證據" }),
  Object.freeze({ file: "historical_price_research.json", label: "歷史最低價查核證據" }),
  Object.freeze({ file: "dimension_research.json", label: "大型家電尺寸查核證據" }),
  Object.freeze({ file: "product_issue_research.json", label: "商品負評／災情研究" }),
  Object.freeze({ file: "product_issue_report_evidence.json", label: "集中負評逐位反映者證據" }),
  Object.freeze({ file: "product_issue_review_manifest.json", label: "商品負評人工覆核清單" }),
]);
const PUBLIC_EVIDENCE_FILES = Object.freeze(PUBLIC_EVIDENCE_RESOURCES.map(({ file }) => file));

function homePageDescription(categoryCount, productCount) {
  return `由 AI 協作整理 ${categoryCount} 類、${productCount} 款可信新品，提供價格、規格、歷史最低價與負評查核，並公開查核方法與原始碼。`;
}

function categoryPageHeading(year, categoryLabel) {
  return `${year} ${categoryLabel} 推薦與選購指南`;
}

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
  SITE_NAME,
  EDITORIAL_TEAM,
  HOME_PAGE_TITLE,
  HOME_H1,
  AI_DISCLOSURE,
  SOCIAL_PREVIEW,
  INDEXNOW_KEY,
  INDEXNOW_KEY_FILE,
  PUBLIC_EVIDENCE_FILES,
  PUBLIC_EVIDENCE_RESOURCES,
  homePageDescription,
  categoryPageHeading,
  categoryUrl,
  publicUrls,
};
