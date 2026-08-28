# 家電推薦比較工作台

純前端靜態頁面，整理 2026-08-28 查核的家電推薦清單，並保留好市多可購買候選，涵蓋價格、歷史最低價、負評／災情、入手時機、規格、優缺點、通路連結與海外價格 TWD 換算。

> 本專案由 AI 協助研究、整理資料並製作網頁；內容僅供採購比較參考，購買前請再以通路與品牌官方資訊為準。

## 線上瀏覽

不熟悉 GitHub 的人可以直接點這個公開網頁：

[家電推薦比較工作台](https://appliance.riverye.com/)

## 內容

- 共 30 類商品，每種商品至少 20 個，共 914 筆。
- 另由現有分類與商品資料產生 30 個可獨立索引的 `/categories/<id>/` 選購指南頁；每頁的初始 HTML 均含前 5 名詳細推薦與該類全部型號索引，不為 914 筆商品建立重複、薄內容的獨立頁面。
- 聚焦可信通路新品，排除配件、耗材、福利品、展示機與誤判品。
- 冷氣固定 30 組台灣住宅一對一分離式完整室內／室外機組，冷專、冷暖各至少 12 組，且小／中／大／客餐廳四個坪數帶各至少 6 組；熱水器固定 45 台，瓦斯、電熱與熱泵各 15 台，其中電熱為儲熱式 8 台、瞬熱式 7 台。
- Sony、Panasonic、HITACHI、Mitsubishi Electric、Daikin、GENERAL、Rinnai、Noritz、TOTO 以 30 類 × 9 品牌完整矩陣保存人工盤點結果；只在有台灣合格 exact model 且確實增加比較價值時補代表款。
- 咖啡機共 24 款台灣現售義式機，全自動與半自動各 12 款，並維持各類型入門／均衡／旗艦各 4 款；半自動再平分為 6 款內建磨豆機與 6 款需外接磨豆機。
- 每類「綜合推薦」以 CP 值、評價口碑、價格、可信通路、台灣售後/保固風險綜合判斷，並附簡短推薦原因。
- 支援分類、冷氣／熱水器型態、網路交換器 1G／2.5G／10G 速率、品牌、選購定位、通路、自然多詞搜尋、排序、active filter chips、可分享 URL 篩選狀態與比較清單；既有 `budget` query key 維持相容。
- 首屏與 30 個分類指南皆清楚標示 AI 協作、資料日期、查核方法與 GitHub 原始碼；網站與內容仍可能有錯漏，不虛構專家或實機使用經驗。
- 針對桌機與手機操作最佳化，包含群組化分類列、sticky 分類列、手機快速操作列、收合式商品細節與重設篩選。
- 14 類尺寸與 6 類新增重量規格／證據對齊；冷氣分列室內／室外機，熱泵複合系統分列主機／儲槽。新補查欄位若可信來源仍無法確認，會明確標示「查不到」，不使用包裝資料或猜測寬深高順序。
<!-- catalog-maintenance-summary:start -->
- 2026-08-28 22:39（台灣時間）完成 914 筆商品、30 類全量查核；458 筆 PChome SKU API 已完成（270 筆 exact model、69 筆人工 SKU 綁定可寫入，58 筆型號未自動確認），更新 15 筆公開價格（2 筆下修、13 筆上修），39 筆 Qty 0 只列追蹤。
- 本次增量新增 washerdryer-xiaomi-wd125mja12tw、smartlock-lockin-v5-max、smartlock-lockin-v6-max、smartlock-lockin-v7-max；本次增量沒有移除停產產品。沿用本資料日既有逐類人工新品覆核，並補查部分分類（原覆核時間保留），所有分類至少 20 筆；停產只採品牌官方明確證據，缺貨、反爬或單次連線錯誤不作為刪除依據。
- 圖片查核覆蓋 914 筆；681 筆來源可由 exact model 或人工 SKU 綁定確認，233 筆來源例外與 0 筆圖片例外保留原資料。史低為 493 筆 `found`、421 筆 `not_found`，本輪異動 0 筆；70 筆來源可自動重現，其餘保留原逐筆證據且未臆測失效。
- ExchangeRate-API 最新批次為 2026-08-28 00:02 UTC，USD/TWD 31.678539；30 筆外幣商品已重算。完整摘要與例外保存在 `catalog_maintenance_latest.json`。
<!-- catalog-maintenance-summary:end -->

## 使用

直接開啟 `index.html`，或透過 [正式網站](https://appliance.riverye.com/) 瀏覽。

商品資料已依分類拆到 `products/*.js`，由 `assets/js/product-loader.js` 依分類設定自動載入；前端邏輯拆在 `assets/js/*.js`，樣式來源拆在 `assets/css/*.css`。首頁載入的 `assets/css/app.css` 是產生器合併的首屏 bundle，不可手動修改；GitHub Pages 仍直接服務靜態檔案，不需要執行期建置。

## GEO / AI 搜尋維護

- `tools/category-guides.js` 是 30 類導讀、選購重點與 FAQ 的人工維護來源；商品事實仍以 `assets/js/config.js` 與 `products/*.js` 為準。
- 每個分類頁會從同一份商品資料產生可直接擷取的「完整型號索引」，讓無 JavaScript 爬蟲也能讀到全部 914 款的品牌、型號、名稱、參考價、上市日期與摘要。
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
- `npm run check:data`：檢查 30 類、914 筆、必要欄位、日期格式、14 類尺寸與 6 類新增重量規格／證據對齊、網路交換器 20 款與三速／八埠／非 PoE 契約、冷氣 30 組與型態／坪數帶／室內外 pair、熱水器 45 台與 15／15／15、電熱 8／7、270 格日系品牌矩陣、價格／安裝 enum、電子衣櫥與咖啡機契約、歷史最低價與負評 research 對齊、人工覆核完成清單、逐位反映者、6 人／2 平台門檻、每類至少 20 筆、重複型號與重複購買 URL。
- `npm run check:docs`：檢查 README、AGENTS、index/config 的商品數、分類數、日期與 cache version 沒有漂移。
- `npm run check:geo`：檢查 30 個分類頁、914 款靜態型號索引、metadata、結構化資料、內部連結、sitemap、llms、證據檔、Pages artifact、31 個 canonical IndexNow URL contract 與所有產生結果沒有漂移。
- `npm run check:ui`：用 Playwright 驗證桌機/手機搜尋、篩選、排序、lazy loading、比較清單、負評警示與推薦卡高亮。
- `npm run check:quality`：用 Lighthouse 驗證首頁與代表分類頁；Performance、LCP、CLS、Accessibility 與 SEO 採瀏覽器行動 throttling，TBT 採 Lantern 標準化模擬以排除 CI runner 硬體差異，門檻仍為 200ms。
- `npm run audit:pchome-prices`：唯讀重查所有 PChome SKU；有正值 `Price.Low` 時優先採折扣價，否則採 `Price.P`。人工確認輸出後才可加 `-- --write --date=YYYY-MM-DD` 寫回。
- `npm run maintain:catalog -- --draft --date=YYYY-MM-DD --baseline-ref=origin/main`：新資料日先產生 gitignored `.maintenance-draft.json` 與原始 audit，供 AI 完成每類新品與停產候選原頁覆核；覆核結果齊全後再改用 `--write` 定稿。daily workflow 在尚無同日覆核決策時只上傳 draft artifact，不會誤寫商品。
- `npm run review:japanese-brands -- --date=YYYY-MM-DD --baseline-ref=origin/main`：在 draft 上寫入 30 類 × 9 品牌同日人工盤點矩陣；矩陣不另建第七份公開證據檔。
- `npm run sync:maintenance-metadata`：由 `catalog_maintenance_latest.json` 同步 README、AGENTS 與首頁資料日期／匯率文案；逐筆原始稽核只保存在 gitignored `.maintenance-audit.json` 或 CI artifact。
