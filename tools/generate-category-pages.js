const fs = require("fs");
const path = require("path");
const { CATEGORY_GUIDES } = require("./category-guides");
const {
  SITE_URL,
  REPO_URL,
  SITE_NAME,
  EDITORIAL_TEAM,
  HOME_PAGE_TITLE,
  HOME_H1,
  AI_DISCLOSURE,
  SOCIAL_PREVIEW,
  PUBLIC_EVIDENCE_RESOURCES,
  homePageDescription,
  categoryPageHeading,
  categoryUrl,
} = require("./geo-config");
const { readDashboardProducts } = require("./read-dashboard-products");

const root = path.resolve(__dirname, "..");
const categoriesRoot = path.join(root, "categories");
const checkOnly = process.argv.includes("--check");
const generatedFiles = new Map();
const HOMEPAGE_STYLESHEET_SOURCES = [
  "tokens.css",
  "layout.css",
  "filters.css",
  "tabs.css",
  "cards.css",
  "comparison.css",
  "navigation.css",
  "editorial.css",
  "responsive.css",
];

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function jsonLdStringify(value) {
  return JSON.stringify(value, null, 2)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function safeHttpUrl(value) {
  try {
    const parsed = new URL(value);
    return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : "";
  } catch (_error) {
    return "";
  }
}

function assertCategoryId(categoryId) {
  if (!/^[a-z0-9-]+$/.test(categoryId)) {
    throw new Error(`Unsafe category id: ${categoryId}`);
  }
}

function categoryPagePath(categoryId) {
  assertCategoryId(categoryId);
  const target = path.resolve(categoriesRoot, categoryId, "index.html");
  if (!target.startsWith(`${categoriesRoot}${path.sep}`)) {
    throw new Error(`Category path escaped the generated directory: ${categoryId}`);
  }
  return target;
}

function formatTwd(value) {
  return `NT$${new Intl.NumberFormat("zh-TW", { maximumFractionDigits: 0 }).format(Math.round(value))}`;
}

function formatOriginal(price) {
  const amount = Number(price.amount);
  const formatted = Number.isFinite(amount)
    ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(amount)
    : String(price.amount);
  return `${price.currency} ${formatted}`;
}

function productAnchor(productId) {
  return `product-${String(productId).replace(/[^a-zA-Z0-9_-]/g, "-")}`;
}

function historicalLowText(product) {
  const historicalLow = product.historicalLow || {};
  if (historicalLow.status !== "found") {
    return "歷史最低價：找不到可公開驗證的同型號新品史低，不能以現價推定。";
  }
  const current = Number(product.price.converted);
  const low = Number(historicalLow.converted);
  const comparison = Number.isFinite(current) && Number.isFinite(low) && current <= low
    ? "目前價格等於或低於可驗證史低"
    : "目前價格仍高於可驗證史低";
  return `歷史最低價：${formatTwd(low)}（${historicalLow.currency} ${historicalLow.amount}）；${comparison}。`;
}

function issueResearchText(product) {
  const research = product.issueResearch || {};
  const summary = research.summary || "截至查核日，查無達門檻的集中負評／災情";
  if (research.status !== "common_issue") {
    return `${summary}（查核日：${research.checkedAt || "未標示"}）。`;
  }
  const details = (research.issues || [])
    .map((issue) => `${issue.title}，${issue.reportCount} 位獨立使用者反映`)
    .join("；");
  return `${summary}${details ? `；${details}` : ""}（查核日：${research.checkedAt || "未標示"}）。`;
}

function validateGuides(categories) {
  const expectedIds = categories.map((category) => category.id).sort();
  const guideIds = Object.keys(CATEGORY_GUIDES).sort();
  if (JSON.stringify(expectedIds) !== JSON.stringify(guideIds)) {
    throw new Error(`Category guide ids do not match config: expected ${expectedIds.join(", ")}; got ${guideIds.join(", ")}`);
  }
  for (const category of categories) {
    const guide = CATEGORY_GUIDES[category.id];
    if (!guide.intro?.trim()) throw new Error(`${category.id} guide intro is missing`);
    if (!Array.isArray(guide.criteria) || guide.criteria.length !== 3) throw new Error(`${category.id} must have exactly 3 criteria`);
    if (!Array.isArray(guide.faqs) || guide.faqs.length !== 3) throw new Error(`${category.id} must have exactly 3 FAQs`);
    for (const item of guide.criteria) {
      if (!item.title?.trim() || !item.detail?.trim()) throw new Error(`${category.id} has an incomplete criterion`);
    }
    for (const item of guide.faqs) {
      if (!item.question?.trim() || !item.answer?.trim()) throw new Error(`${category.id} has an incomplete FAQ`);
    }
  }
}

function homepageStructuredData(categories, products, meta) {
  const description = homePageDescription(categories.length, products.length);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        name: SITE_NAME,
        alternateName: "Home Appliance Shortlist",
        url: SITE_URL,
        description,
        inLanguage: "zh-Hant-TW",
        publisher: { "@id": `${SITE_URL}#editorial-team` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#editorial-team`,
        name: EDITORIAL_TEAM,
        url: SITE_URL,
        description: AI_DISCLOSURE,
        sameAs: [REPO_URL],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}#webpage`,
        url: SITE_URL,
        name: HOME_PAGE_TITLE,
        description,
        inLanguage: "zh-Hant-TW",
        dateModified: meta.dataDate,
        isPartOf: { "@id": `${SITE_URL}#website` },
        publisher: { "@id": `${SITE_URL}#editorial-team` },
        mainEntity: { "@id": `${SITE_URL}#category-guides` },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}#category-guides`,
        name: "家電分類選購指南",
        numberOfItems: categories.length,
        itemListElement: categories.map((category, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CollectionPage",
            "@id": categoryUrl(category.id),
            url: categoryUrl(category.id),
            name: categoryPageHeading(meta.dataDate.slice(0, 4), category.label),
          },
        })),
      },
    ],
  };
}

function categoryStructuredData(category, topFive, meta, description) {
  const url = categoryUrl(category.id);
  const heading = categoryPageHeading(meta.dataDate.slice(0, 4), category.label);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: heading,
        description,
        inLanguage: "zh-Hant-TW",
        dateModified: meta.dataDate,
        isPartOf: { "@id": `${SITE_URL}#website` },
        publisher: { "@id": `${SITE_URL}#editorial-team` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#recommendations` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE_NAME, item: SITE_URL },
          { "@type": "ListItem", position: 2, name: heading, item: url },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${url}#recommendations`,
        name: `${category.label}前 5 名比較清單`,
        numberOfItems: topFive.length,
        itemListElement: topFive.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Thing",
            "@id": `${url}#${productAnchor(product.id)}`,
            url: `${url}#${productAnchor(product.id)}`,
            name: `${product.brand} ${product.model}`,
            description: product.recommendation,
          },
        })),
      },
    ],
  };
}

function productMarkup(product, index) {
  const buyUrl = safeHttpUrl(product.buyUrl);
  const pros = product.pros.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const cons = product.cons.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const specs = product.specs.slice(0, 4).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  return `
        <article id="${escapeHtml(productAnchor(product.id))}" class="editorial-product">
          <div class="editorial-product-rank" aria-label="第 ${index + 1} 名">${String(index + 1).padStart(2, "0")}</div>
          <div class="editorial-product-body">
            <div class="editorial-product-heading">
              <div>
                <p class="editorial-kicker">${escapeHtml(product.brand)} · ${escapeHtml(product.model)}</p>
                <h3>${escapeHtml(product.name)}</h3>
              </div>
              <div class="editorial-price">
                <span>查核時價格</span>
                <strong>${escapeHtml(formatTwd(product.price.converted))}</strong>
                <small>原始售價：${escapeHtml(formatOriginal(product.price))}</small>
              </div>
            </div>
            <p class="editorial-verdict"><strong>推薦理由</strong>${escapeHtml(product.recommendation)}</p>
            <dl class="editorial-facts">
              <div><dt>本站比較分數</dt><dd>${escapeHtml(product.score)} / 100</dd></div>
              <div><dt>適合對象</dt><dd>${escapeHtml(product.bestFor)}</dd></div>
              <div><dt>上市／發售</dt><dd>${escapeHtml(product.releaseDate)}</dd></div>
              <div><dt>電壓／保固</dt><dd>${escapeHtml(`${product.voltage}；${product.warranty}`)}</dd></div>
            </dl>
            <div class="editorial-evaluation">
              <div><h4>優點</h4><ul>${pros}</ul></div>
              <div><h4>缺點</h4><ul>${cons}</ul></div>
              <div><h4>重點規格</h4><ul>${specs}</ul></div>
            </div>
            <div class="editorial-research-notes">
              <p><strong>歷史最低價</strong>${escapeHtml(historicalLowText(product).replace(/^歷史最低價：/, ""))}</p>
              <p><strong>負評／災情查核</strong>${escapeHtml(issueResearchText(product))}</p>
            </div>
            <div class="editorial-actions">
              <a href="../../index.html?category=${escapeHtml(product.category)}">在工作台比較同類商品</a>
              ${buyUrl ? `<a class="secondary" href="${escapeHtml(buyUrl)}" target="_blank" rel="noopener noreferrer nofollow">查看 ${escapeHtml(product.buyLabel)} 原通路</a>` : ""}
            </div>
          </div>
        </article>`;
}

function renderCategoryPage(category, categoryProducts, guide, meta, categories) {
  const topFive = [...categoryProducts]
    .sort((left, right) => left.rank - right.rank || left.id.localeCompare(right.id))
    .slice(0, 5);
  if (topFive.length !== 5) throw new Error(`${category.id} does not have five products for its shortlist`);
  const year = meta.dataDate.slice(0, 4);
  const url = categoryUrl(category.id);
  const title = categoryPageHeading(year, category.label);
  const description = `${year} ${category.label}推薦比較，整理 ${categoryProducts.length} 筆可信新品的價格、規格、優缺點、歷史最低價與負評查核，並提供台灣選購重點與常見問題。`;
  const structuredData = categoryStructuredData(category, topFive, meta, description);
  const criteria = guide.criteria.map((item, index) => `
          <article>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.detail)}</p>
          </article>`).join("");
  const faqs = guide.faqs.map((item) => `
          <details>
            <summary>${escapeHtml(item.question)}</summary>
            <p>${escapeHtml(item.answer)}</p>
          </details>`).join("");
  const evidenceLinks = PUBLIC_EVIDENCE_RESOURCES.map(({ file, label }) => (
    `<li><a href="../../${escapeHtml(file)}">${escapeHtml(label)}</a></li>`
  )).join("");
  const relatedGuides = categories
    .filter((candidate) => candidate.group === category.group && candidate.id !== category.id)
    .map((candidate) => (
      `<li><a href="../${escapeHtml(candidate.id)}/">${escapeHtml(categoryPageHeading(year, candidate.label))}</a></li>`
    ))
    .join("");

  return `<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <title>${escapeHtml(title)}</title>
    <link rel="canonical" href="${escapeHtml(url)}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="zh_TW">
    <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${escapeHtml(url)}">
    <meta property="og:image" content="${escapeHtml(SOCIAL_PREVIEW.url)}">
    <meta property="og:image:type" content="${escapeHtml(SOCIAL_PREVIEW.type)}">
    <meta property="og:image:width" content="${SOCIAL_PREVIEW.width}">
    <meta property="og:image:height" content="${SOCIAL_PREVIEW.height}">
    <meta property="og:image:alt" content="${escapeHtml(SOCIAL_PREVIEW.alt)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${escapeHtml(SOCIAL_PREVIEW.url)}">
    <meta name="twitter:image:type" content="${escapeHtml(SOCIAL_PREVIEW.type)}">
    <meta name="twitter:image:width" content="${SOCIAL_PREVIEW.width}">
    <meta name="twitter:image:height" content="${SOCIAL_PREVIEW.height}">
    <meta name="twitter:image:alt" content="${escapeHtml(SOCIAL_PREVIEW.alt)}">
    <script type="application/ld+json">
${jsonLdStringify(structuredData).split("\n").map((line) => `      ${line}`).join("\n")}
    </script>
    <link rel="icon" type="image/svg+xml" href="../../favicon.svg?v=${escapeHtml(meta.cacheVersion)}">
    <link rel="stylesheet" href="../../assets/css/tokens.css?v=${escapeHtml(meta.cacheVersion)}">
    <link rel="stylesheet" href="../../assets/css/editorial.css?v=${escapeHtml(meta.cacheVersion)}">
  </head>
  <body class="editorial-page">
    <a class="skip-link" href="#categoryContent">跳到主要內容</a>
    <header class="editorial-hero">
      <div class="editorial-shell">
        <nav class="editorial-breadcrumb" aria-label="麵包屑">
          <a href="../../index.html">${escapeHtml(SITE_NAME)}</a><span aria-hidden="true">/</span><span>${escapeHtml(category.label)}</span>
        </nav>
        <p class="editorial-kicker">${escapeHtml(category.group)} · ${categoryProducts.length} 筆候選</p>
        <span class="editorial-ai-badge">AI 協作製作</span>
        <h1>${escapeHtml(title)}</h1>
        <p class="editorial-lead">${escapeHtml(guide.intro)}</p>
        <p class="editorial-ai-disclosure">${escapeHtml(AI_DISCLOSURE)} <a href="#methodHeading">查看查核方法</a>，或前往 <a href="${escapeHtml(REPO_URL)}">GitHub 原始碼</a>。</p>
        <div class="editorial-meta">
          <span>資料更新 ${escapeHtml(meta.dataDate)}</span>
          <span>共比較 ${categoryProducts.length} 筆商品</span>
          <span>編輯：${EDITORIAL_TEAM}</span>
        </div>
        <nav class="editorial-page-nav" aria-label="本頁導覽">
          <a href="#shortlistHeading">推薦摘要</a>
          <a href="#buyingGuideHeading">選購重點</a>
          <a href="#faqHeading">常見問題</a>
          <a href="#methodHeading">查核方法</a>
        </nav>
        <a class="editorial-primary-action" href="../../index.html?category=${escapeHtml(category.id)}">比較全部 ${categoryProducts.length} 款 ${escapeHtml(category.label)}</a>
      </div>
    </header>
    <main id="categoryContent" class="editorial-shell">
      <section class="editorial-section" aria-labelledby="shortlistHeading">
        <div class="editorial-section-heading">
          <div><p class="editorial-kicker">Quick answer</p><h2 id="shortlistHeading">先看結論：前 5 名推薦摘要</h2></div>
          <p>依工作台既有推薦排序呈現，不另行重算名次；價格與庫存請以原通路為準。</p>
        </div>
        <div class="editorial-product-list">${topFive.map(productMarkup).join("")}
        </div>
      </section>
      <section class="editorial-section editorial-buying-guide" aria-labelledby="buyingGuideHeading">
        <div class="editorial-section-heading">
          <div><p class="editorial-kicker">Decision checklist</p><h2 id="buyingGuideHeading">${escapeHtml(category.label)}選購重點</h2></div>
        </div>
        <div class="editorial-criteria">${criteria}
        </div>
      </section>
      <section class="editorial-section editorial-faq" aria-labelledby="faqHeading">
        <div class="editorial-section-heading">
          <div><p class="editorial-kicker">FAQ</p><h2 id="faqHeading">常見問題</h2></div>
        </div>
        <div class="editorial-faq-list">${faqs}
        </div>
      </section>
      <section class="editorial-section editorial-related" aria-labelledby="relatedGuidesHeading">
        <div class="editorial-section-heading">
          <div><p class="editorial-kicker">Explore more</p><h2 id="relatedGuidesHeading">相關選購指南</h2></div>
          <p>同屬「${escapeHtml(category.group)}」的分類，可接續比較使用情境與選購條件。</p>
        </div>
        <ul class="editorial-related-guides">${relatedGuides}</ul>
      </section>
      <section class="editorial-section editorial-method" aria-labelledby="methodHeading">
        <div class="editorial-section-heading">
          <div><p class="editorial-kicker">Method & limits</p><h2 id="methodHeading">查核方法與資料限制</h2></div>
        </div>
        <div class="editorial-method-copy">
          <p><strong>查核方法：</strong>價格與購買連結以品牌或可信新品通路為準；上市／發售日期、歷史最低價與負評／災情各自保留來源證據。Top 5 沿用完整工作台的推薦排序，本站比較分數不是消費者評分。</p>
          <p><strong>資料限制：</strong>價格、庫存、規格與保固可能變動；「查無達門檻的集中負評／災情」不代表完全沒有負評。海外商品另需自行確認國際運費、進口稅、電壓、插頭及台灣保固。</p>
          <p><strong>AI 協作說明：</strong>${escapeHtml(AI_DISCLOSURE)}</p>
          <p><strong>編輯責任：</strong>${escapeHtml(EDITORIAL_TEAM)} 公開規則、資料日期與原始碼，不宣稱未經證實的專家資格，也不保證搜尋排名或 AI 引用。</p>
        </div>
        <details class="editorial-evidence">
          <summary>查看結構化研究證據檔</summary>
          <ul>${evidenceLinks}</ul>
        </details>
      </section>
    </main>
    <footer class="editorial-footer">
      <div class="editorial-shell">
        <a href="../../index.html">返回${escapeHtml(SITE_NAME)}</a>
        <a href="${escapeHtml(REPO_URL)}">GitHub 原始碼</a>
        <a href="https://riverye.com/privacy.html">隱私權政策</a>
      </div>
    </footer>
  </body>
</html>
`;
}

function renderSitemap(categories, meta) {
  const urls = [SITE_URL, ...categories.map((category) => categoryUrl(category.id))];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${meta.dataDate}</lastmod>\n  </url>`).join("\n")}
</urlset>
`;
}

function renderLlms(categories, products, meta) {
  const productCountByCategory = new Map(categories.map((category) => [
    category.id,
    products.filter((product) => product.category === category.id).length,
  ]));
  const description = homePageDescription(categories.length, products.length);
  const year = meta.dataDate.slice(0, 4);
  return `# ${HOME_H1}

> ${AI_DISCLOSURE}

${description}

- Brand: ${SITE_NAME}
- Canonical site: ${SITE_URL}
- Data updated: ${meta.dataDate}
- Catalog: ${categories.length} categories, ${products.length} products
- Source code: ${REPO_URL}

## 查核方法

- 價格、圖片與購買連結只採品牌官方或可信新品通路，排除二手、福利品、展示機、拆封品、整新品、配件與耗材誤判。
- 上市／發售日期與歷史最低價需有逐型號證據；找不到時明確標示「找不到」，不以型號年份或現價猜測。
- 集中負評／災情需完全相同型號、至少 6 位可辨識獨立使用者、跨至少 2 個原始網站；未達門檻不代表完全沒有負評。

## 資料限制

- 價格、庫存、規格與保固可能在查核後變動，實際資訊以品牌與原通路為準。
- 海外價格未含國際運費、進口稅，並有電壓、插頭與台灣保固風險。
- 本站的推薦排序與比較分數是專案內部評估，不是消費者星等、專業認證或效果保證。
- 本檔只是供機器理解網站結構的補充說明，不是正式排名標準，也不保證任何搜尋引擎或 AI 系統收錄、排名或引用。

## 分類選購指南

${categories.map((category) => `- [${categoryPageHeading(year, category.label)}](${categoryUrl(category.id)}): ${productCountByCategory.get(category.id)} 筆候選。${CATEGORY_GUIDES[category.id].intro}`).join("\n")}

## 研究證據

${PUBLIC_EVIDENCE_RESOURCES.map(({ file, label }) => `- [${label}](${SITE_URL}${file}): ${file}`).join("\n")}

## 主要入口

- [完整互動比較工作台](${SITE_URL})
- [專案維護與資料來源說明](${REPO_URL})
`;
}

function renderHomepageCategoryLinks(categories, products) {
  const groups = new Map();
  for (const category of categories) {
    if (!groups.has(category.group)) groups.set(category.group, []);
    groups.get(category.group).push(category);
  }
  return `<div class="category-guide-groups">
${[...groups].map(([group, groupCategories]) => `  <section class="category-guide-group">
    <h3>${escapeHtml(group)}</h3>
    <ul>
${groupCategories.map((category) => {
    const count = products.filter((product) => product.category === category.id).length;
    return `      <li><a href="./categories/${escapeHtml(category.id)}/"><span>${escapeHtml(category.label)} 推薦與選購指南</span><small>${count} 筆</small></a></li>`;
  }).join("\n")}
    </ul>
  </section>`).join("\n")}
</div>`;
}

function renderHomepageStylesheet() {
  const sections = HOMEPAGE_STYLESHEET_SOURCES.map((file) => {
    const source = fs.readFileSync(path.join(root, "assets", "css", file), "utf8").trim();
    return `/* ${file} */\n${source}`;
  });
  return `/* Generated by tools/generate-category-pages.js. Edit the source CSS modules, then regenerate. */\n\n${sections.join("\n\n")}\n`;
}

function renderHomepageMetadata(categoryCount, productCount) {
  const description = homePageDescription(categoryCount, productCount);
  return `<meta name="description" content="${escapeHtml(description)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="google-adsense-account" content="ca-pub-4799252410303973">
<title>${escapeHtml(HOME_PAGE_TITLE)}</title>
<link rel="canonical" href="${escapeHtml(SITE_URL)}">
<meta property="og:type" content="website">
<meta property="og:locale" content="zh_TW">
<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}">
<meta property="og:title" content="${escapeHtml(HOME_PAGE_TITLE)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${escapeHtml(SITE_URL)}">
<meta property="og:image" content="${escapeHtml(SOCIAL_PREVIEW.url)}">
<meta property="og:image:type" content="${escapeHtml(SOCIAL_PREVIEW.type)}">
<meta property="og:image:width" content="${SOCIAL_PREVIEW.width}">
<meta property="og:image:height" content="${SOCIAL_PREVIEW.height}">
<meta property="og:image:alt" content="${escapeHtml(SOCIAL_PREVIEW.alt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(HOME_PAGE_TITLE)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
<meta name="twitter:image" content="${escapeHtml(SOCIAL_PREVIEW.url)}">
<meta name="twitter:image:alt" content="${escapeHtml(SOCIAL_PREVIEW.alt)}">`;
}

function renderHomepageH1() {
  return `<h1>${escapeHtml(HOME_H1)}</h1>`;
}

function renderHomepageAiDisclosure() {
  return `<div class="ai-disclosure">
  <span class="ai-disclosure-badge">AI 協作製作</span>
  <span>${escapeHtml(AI_DISCLOSURE)}</span>
  <a href="#researchMethod">查核方法與資料限制</a>
  <a href="${escapeHtml(REPO_URL)}" target="_blank" rel="noopener noreferrer">GitHub 原始碼</a>
</div>`;
}

function replaceGeneratedBlock(source, startMarker, endMarker, body) {
  const escapePattern = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`([ \\t]*)${escapePattern(startMarker)}[\\s\\S]*?\\1${escapePattern(endMarker)}`);
  if (!pattern.test(source)) throw new Error(`Missing generated block markers: ${startMarker}`);
  return source.replace(pattern, (_match, indent) => {
    const indentedBody = body.split("\n").map((line) => `${indent}${line}`).join("\n");
    return `${indent}${startMarker}\n${indentedBody}\n${indent}${endMarker}`;
  });
}

function prepareOutputs() {
  const { categories, products, meta } = readDashboardProducts(root);
  validateGuides(categories);
  for (const category of categories) {
    const categoryProducts = products.filter((product) => product.category === category.id);
    generatedFiles.set(categoryPagePath(category.id), renderCategoryPage(
      category,
      categoryProducts,
      CATEGORY_GUIDES[category.id],
      meta,
      categories,
    ));
  }
  generatedFiles.set(path.join(root, "sitemap.xml"), renderSitemap(categories, meta));
  generatedFiles.set(path.join(root, "llms.txt"), renderLlms(categories, products, meta));
  generatedFiles.set(path.join(root, "assets", "css", "app.css"), renderHomepageStylesheet());

  const indexPath = path.join(root, "index.html");
  let index = fs.readFileSync(indexPath, "utf8");
  const structuredDataScript = `<script type="application/ld+json">\n${jsonLdStringify(homepageStructuredData(categories, products, meta))}\n</script>`;
  index = replaceGeneratedBlock(index, "<!-- geo-home-metadata:start -->", "<!-- geo-home-metadata:end -->", renderHomepageMetadata(categories.length, products.length));
  index = replaceGeneratedBlock(index, "<!-- geo-structured-data:start -->", "<!-- geo-structured-data:end -->", structuredDataScript);
  index = replaceGeneratedBlock(index, "<!-- geo-home-h1:start -->", "<!-- geo-home-h1:end -->", renderHomepageH1());
  index = replaceGeneratedBlock(index, "<!-- geo-home-ai-disclosure:start -->", "<!-- geo-home-ai-disclosure:end -->", renderHomepageAiDisclosure());
  index = replaceGeneratedBlock(index, "<!-- geo-category-links:start -->", "<!-- geo-category-links:end -->", renderHomepageCategoryLinks(categories, products));
  generatedFiles.set(indexPath, index);
  return { categories };
}

function collectOutputDrift(outputs) {
  const drift = [];
  for (const [file, expected] of outputs) {
    const current = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : null;
    if (current !== expected) {
      drift.push(`${path.relative(root, file)} is ${current === null ? "missing" : "out of date"}`);
    }
  }
  return drift;
}

function collectUnexpectedCategoryEntries(directory, categories) {
  if (!fs.existsSync(directory)) return [];
  const expectedIds = new Set(categories.map((category) => category.id));
  const expectedFiles = new Set(categories.map((category) => `${category.id}/index.html`));
  const unexpected = [];

  function walk(currentDirectory, relativeDirectory = "") {
    for (const entry of fs.readdirSync(currentDirectory, { withFileTypes: true })) {
      const relativePath = path.join(relativeDirectory, entry.name);
      const normalizedPath = relativePath.split(path.sep).join("/");
      if (entry.isDirectory()) {
        if (relativeDirectory || !expectedIds.has(entry.name)) {
          unexpected.push(`${normalizedPath}/`);
        }
        walk(path.join(currentDirectory, entry.name), relativePath);
      } else if (!expectedFiles.has(normalizedPath)) {
        unexpected.push(normalizedPath);
      }
    }
  }

  walk(directory);
  return unexpected.sort();
}

function syncOutputs(categories) {
  if (!checkOnly && fs.existsSync(categoriesRoot)) {
    fs.rmSync(categoriesRoot, { recursive: true, force: true });
  }

  const drift = checkOnly ? collectOutputDrift(generatedFiles) : [];
  if (checkOnly) {
    drift.push(...collectUnexpectedCategoryEntries(categoriesRoot, categories)
      .map((entry) => `categories/${entry} is unexpected`));
  } else {
    for (const [file, expected] of generatedFiles) {
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, expected);
    }
  }

  if (drift.length) {
    throw new Error(`Generated GEO output drift detected:\n- ${drift.join("\n- ")}\nRun npm run generate:categories.`);
  }
  console.log(checkOnly
    ? `category page generation check passed (${categories.length} pages)`
    : `generated ${categories.length} category pages, sitemap.xml, llms.txt, homepage CSS, and GEO blocks`);
}

function main() {
  const { categories } = prepareOutputs();
  syncOutputs(categories);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = {
  escapeHtml,
  jsonLdStringify,
  collectOutputDrift,
  collectUnexpectedCategoryEntries,
  renderCategoryPage,
  renderHomepageCategoryLinks,
  renderHomepageStylesheet,
  renderHomepageMetadata,
  renderHomepageH1,
  renderHomepageAiDisclosure,
  homepageStructuredData,
  renderLlms,
};
