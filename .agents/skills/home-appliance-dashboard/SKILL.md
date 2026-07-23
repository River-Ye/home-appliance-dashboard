---
name: home-appliance-dashboard
description: Maintain the home-appliance-dashboard static GitHub Pages app. Use when working in this repo on product catalog data, pricing/exchange-rate/link/image audits, release-date or historical-low evidence, static frontend refactors, validation tools, GitHub Pages deployment checks, or repo-local AI maintenance rules.
---

# Home Appliance Dashboard

## Core Workflow

Start by reading `AGENTS.md`, then inspect `package.json`, `assets/js/config.js`, and `tools/dashboard-contract.js` before editing. Keep the app a pure static GitHub Pages site with no build step, backend, login, cart, or checkout.

Use a dedicated git worktree and short-lived `codex/` branch for repo changes unless the user explicitly says otherwise. After implementation, run the repo checks, merge back to `main`, push, verify GitHub Pages, and remove the temporary worktree.

## Task Routing

- For product data, prices, links, images, exchange rates, discontinued decisions, release dates, historical lows, or source evidence, read `references/product-maintenance.md`.
- For static frontend refactors, product loading, validation tools, docs drift checks, or Pages release verification, read `references/static-refactor-release.md`.

## GEO And AI Search Workflow

- The site has one generated static guide for every configured category (currently 26) at `/categories/<id>/`; do not create one thin page per product or add tracking for GEO work.
- Maintain category-level intros, three buying criteria, and three FAQs in `tools/category-guides.js`. Product facts continue to come from `assets/js/config.js` and `products/*.js`.
- Keep the shared site name, homepage title, description, H1, and visible AI disclosure in `tools/geo-config.js`; metadata, JSON-LD, generated guides, and `llms.txt` must use the same contract.
- After any product, category, guide, or homepage CSS source change, run `npm run generate:categories`, then `npm run check:geo`. Do not hand-edit `assets/css/app.css`, `categories/<id>/index.html`, `sitemap.xml`, `llms.txt`, or the generated GEO blocks in `index.html`.
- Treat `llms.txt` as supplemental discovery context only; it does not guarantee indexing, ranking, or AI citation.
- Keep all six evidence files in the Pages artifact: `release_date_research.json`, `historical_price_research.json`, `dimension_research.json`, `product_issue_research.json`, `product_issue_report_evidence.json`, and `product_issue_review_manifest.json`.
- IndexNow runs only after a successful Pages deployment and is non-blocking. Always inspect its workflow log and report failures accurately.

## Guardrails

- Preserve `products/*.js` as the product data boundary and keep `registerProducts(categoryId, items)` compatible.
- Keep `assets/js/config.js` `meta`, `tools/dashboard-contract.js`, README, AGENTS, and visible page dates/counts in sync.
- Start a new data date with `npm run maintain:catalog -- --draft --date=YYYY-MM-DD --baseline-ref=origin/main`; finalize with `--write` only after the same-date category and discontinuation reviews are explicit. Keep reviewed summary/exception evidence in `catalog_maintenance_latest.json`; keep `.maintenance-audit.json` and `.maintenance-draft.json` untracked or as short-lived CI artifacts.
- After maintenance, run `npm run sync:maintenance-metadata` and `npm run generate:categories` before the checks. Never bypass pending category or official-discontinuation review gates.
- Keep the Lighthouse budgets enforced by `npm run check:quality`: browser-throttled Performance ≥ 90, LCP ≤ 2.5s, CLS ≤ 0.1, Accessibility = 100, SEO ≥ 95, plus runner-independent Lantern TBT ≤ 200ms.
- Do not delete products from weak signals such as one stale image URL, one transient page error, or PChome `Qty: 0`.
- Do not rewrite the app into a framework or add a build pipeline unless the user explicitly asks for that architectural change.
- 只允許本次核准的 Google AdSense 手動廣告與 Google CMP；保留兩個 responsive manual slots 與正式 hostname gate；`https://appliance.riverye.com/` 必須維持 AdSense 全站 Auto ads page exclusion，不得擴充為其他追蹤。
- 禁止加入 Google Analytics、Google Ads 轉換追蹤或其他未授權追蹤；本機與 `file://` 驗證不得送出廣告請求，公開驗收不得點擊自己的廣告。
