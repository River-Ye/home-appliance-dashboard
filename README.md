# 家電推薦比較工作台

純前端靜態頁面，整理 2026-07-23 查核的家電推薦清單，並保留好市多可購買候選，涵蓋價格、歷史最低價、負評／災情、入手時機、規格、優缺點、通路連結與海外價格 TWD 換算。

> 本專案由 AI 協助研究、整理資料並製作網頁；內容僅供採購比較參考，購買前請再以通路與品牌官方資訊為準。

## 線上瀏覽

不熟悉 GitHub 的人可以直接點這個公開網頁：

[家電推薦比較工作台](https://appliance.riverye.com/)

## 內容

- 共 26 類商品，每種商品至少 20 個，共 688 筆。
- 另由現有分類與商品資料產生 26 個可獨立索引的 `/categories/<id>/` 選購指南頁；不為 688 筆商品建立重複、薄內容的獨立頁面。
- 聚焦可信通路新品，排除配件、耗材、福利品、展示機與誤判品。
- 每類「綜合推薦」以 CP 值、評價口碑、價格、可信通路、台灣售後/保固風險綜合判斷，並附簡短推薦原因。
- 支援分類、品牌、選購定位、通路、自然多詞搜尋、排序、active filter chips、可分享 URL 篩選狀態與比較清單；既有 `budget` query key 維持相容。
- 首屏與 26 個分類指南皆清楚標示 AI 協作、資料日期、查核方法與 GitHub 原始碼；網站與內容仍可能有錯漏，不虛構專家或實機使用經驗。
- 針對桌機與手機操作最佳化，包含群組化分類列、sticky 分類列、手機快速操作列、收合式商品細節與重設篩選。
- 冰箱、洗衣機、烘衣機、洗烘衣機與電子衣櫥皆標示機身尺寸，方便先確認家中擺放空間；若可信來源查不到則明確標示未標示。
<!-- catalog-maintenance-summary:start -->
- 2026-07-23 21:40（台灣時間）完成 688 筆商品、26 類全量查核；407 筆 PChome SKU API 已完成（264 筆 exact model、10 筆人工 SKU 綁定可寫入，110 筆型號未自動確認），更新 24 筆現價（17 筆降價、7 筆漲價），20 筆 Qty 0 只列追蹤。
- 新增 garmentcare-lg-e523ir、garmentcare-lg-e523mr、garmentcare-lg-e523mw、garmentcare-lg-r723mb、garmentcare-lg-r723mg、garmentcare-lg-r723sb、garmentcare-lg-r723wg、garmentcare-lg-s3mfbn、garmentcare-lg-s3rfbn、garmentcare-lg-s3wfbn、garmentcare-lg-sc5gmr80h、garmentcare-lg-sc5mar4g、garmentcare-panasonic-hcc-r600al-x、garmentcare-panasonic-hcc-r600ar-x、garmentcare-samsung-df80h24r1c、garmentcare-samsung-df80h24r1d、garmentcare-samsung-df90h24r4b、garmentcare-samsung-df90h24r4d、garmentcare-samsung-df90h24r4p、garmentcare-samsung-df90h24r5c；沒有移除產品。逐類人工新品覆核已完成，所有分類至少 20 筆；停產只採品牌官方明確證據，缺貨、反爬或單次連線錯誤不作為刪除依據。
- 圖片查核覆蓋 688 筆；516 筆來源可由 exact model 或人工 SKU 綁定確認，172 筆來源／圖片例外保留原資料。史低為 438 筆 `found`、250 筆 `not_found`，本輪下修 0 筆；51 筆來源可自動重現，其餘保留原逐筆證據且未臆測失效。
- ExchangeRate-API 最新批次為 2026-07-23 00:02 UTC，USD/TWD 32.409765；30 筆外幣商品已重算。完整摘要與例外保存在 `catalog_maintenance_latest.json`。
<!-- catalog-maintenance-summary:end -->

## 使用

直接開啟 `index.html`，或透過 [正式網站](https://appliance.riverye.com/) 瀏覽。

商品資料已依分類拆到 `products/*.js`，由 `assets/js/product-loader.js` 依分類設定自動載入；前端邏輯拆在 `assets/js/*.js`，樣式來源拆在 `assets/css/*.css`。首頁載入的 `assets/css/app.css` 是產生器合併的首屏 bundle，不可手動修改；GitHub Pages 仍直接服務靜態檔案，不需要執行期建置。

## GEO / AI 搜尋維護

- `tools/category-guides.js` 是 26 類導讀、選購重點與 FAQ 的人工維護來源；商品事實仍以 `assets/js/config.js` 與 `products/*.js` 為準。
- 站名、首頁 title、description、H1 與 AI 揭露契約集中在 `tools/geo-config.js`，供首頁檢查、JSON-LD、分類產生器與 `llms.txt` 共用。
- 修改商品、分類、分類指南或首頁 CSS 來源後，先執行 `npm run generate:categories`。`assets/css/app.css`、`categories/<id>/index.html`、`sitemap.xml`、`llms.txt`，以及 `index.html` 內 `geo-structured-data`／`geo-category-links` marker 之間的區塊都是產生結果，不可手動修改。
- `llms.txt` 只是提供網站用途、查核方式與分類入口的補充說明，不保證任何搜尋排名、AI 引用或收錄結果。
- Pages 同時公開 `release_date_research.json`、`historical_price_research.json`、`dimension_research.json`、`product_issue_research.json`、`product_issue_report_evidence.json`、`product_issue_review_manifest.json` 六份證據檔。
- Pages 部署成功後才通知 IndexNow；此步驟失敗不會阻擋部署，但仍需檢查 workflow log。GEO 功能不新增追蹤碼，並維持既有禁止未授權追蹤的規則。

## 維護檢查

```bash
npm run check
```

- `npm run check:syntax`：檢查公開 JS 與維護工具語法。
- `npm run check:logic`：檢查排序、篩選、URL 狀態、史低／負評文案、問題摘要搜尋、來源 URL 安全、HTML escape 與商品 loader 純邏輯。
- `npm run check:data`：檢查 26 類、688 筆、必要欄位、日期格式、五類需量測機身的大型家電尺寸、電子衣櫥 exact-model／品牌／通路／必要規格、歷史最低價與負評 research 對齊、人工覆核完成清單、逐位反映者、6 人／2 平台門檻、每類至少 20 筆、重複型號與重複購買 URL。
- `npm run check:docs`：檢查 README、AGENTS、index/config 的商品數、分類數、日期與 cache version 沒有漂移。
- `npm run check:geo`：檢查 26 個分類頁、metadata、結構化資料、內部連結、sitemap、llms、證據檔、Pages artifact、IndexNow contract 與所有產生結果沒有漂移。
- `npm run check:ui`：用 Playwright 驗證桌機/手機搜尋、篩選、排序、lazy loading、比較清單、負評警示與推薦卡高亮。
- `npm run check:quality`：用 Lighthouse 驗證首頁與代表分類頁；Performance、LCP、CLS、Accessibility 與 SEO 採瀏覽器行動 throttling，TBT 採 Lantern 標準化模擬以排除 CI runner 硬體差異，門檻仍為 200ms。
- `npm run audit:pchome-prices`：唯讀重查所有 PChome SKU；有正值 `Price.Low` 時優先採折扣價，否則採 `Price.P`。人工確認輸出後才可加 `-- --write --date=YYYY-MM-DD` 寫回。
- `npm run maintain:catalog -- --draft --date=YYYY-MM-DD --baseline-ref=origin/main`：新資料日先產生 gitignored `.maintenance-draft.json` 與原始 audit，供 AI 完成每類新品與停產候選原頁覆核；覆核結果齊全後再改用 `--write` 定稿。daily workflow 在尚無同日覆核決策時只上傳 draft artifact，不會誤寫商品。
- `npm run sync:maintenance-metadata`：由 `catalog_maintenance_latest.json` 同步 README、AGENTS 與首頁資料日期／匯率文案；逐筆原始稽核只保存在 gitignored `.maintenance-audit.json` 或 CI artifact。
