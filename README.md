# 家電推薦比較工作台

純前端靜態頁面，整理 2026-09-01 查核的家電推薦清單，並保留好市多可購買候選，涵蓋價格、歷史最低價、負評／災情、入手時機、規格、優缺點、通路連結與海外價格 TWD 換算。

> 本專案由 AI 協助研究、整理資料並製作網頁；內容僅供採購比較參考，購買前請再以通路與品牌官方資訊為準。

## 線上瀏覽

不熟悉 GitHub 的人可以直接點這個公開網頁：

[家電推薦比較工作台](https://appliance.riverye.com/)

## 內容

- 共 34 類商品，每種商品至少 20 個，共 1035 筆。
- 另由現有分類與商品資料產生 34 個可獨立索引的 `/categories/<id>/` 選購指南頁；每頁的初始 HTML 均含前 5 名詳細推薦與該類全部型號索引，不為 1035 筆商品建立重複、薄內容的獨立頁面。
- 滑鼠、鍵盤、滑鼠墊各 30 款，各類選購定位固定 CP 值／均衡／旗艦 6／12／12，辦公與電競並重，各一款台灣 Top Pick。完整成品優先台灣可信新品通路；鍵盤不同軸體、滑鼠墊不同平面尺寸可依官方型號／SKU 分列，同款最多三版，純顏色、語言、背光或套裝不增加款數。2026-09-01 01:56 的周邊增量批次以原 943 款為固定 baseline，只新增 90 款。
- 周邊品牌涵蓋 Logitech、Razer、Sony；鍵盤另含 Keychron、HyperX、Ducky、SteelSeries、ASUS、MSI、Corsair、NuPhy、Wooting，滑鼠墊另含 ASUS、ELECOM、KINYO、HP、IKEA、darkFlash、ZOWIE、SteelSeries。品牌篩選依各分類實際收錄顯示，不表示每個品牌都有三類商品。
- 螢幕燈精選 20 款桌機掛燈，台灣通路優先、可信海外通路補充；排除一般檯燈、筆電燈、單純氣氛燈與配件，不以顏色或套組重複湊數。該次螢幕燈擴充僅新增 20 款，原 923 款沿用固定基準版本；後續全量維護另依最新摘要記錄。
- 掃拖機器人共 43 款，包含 HITACHI RV-X20P 台灣入門雷射掃拖款；無自動集塵、洗布或烘布，不列 Top Pick，保固年限需於購前確認。
- 新增 HITACHI RV-X20DPA，配備 4L 自動集塵座，但拖布仍需手洗；購前須電話確認，保固年限未明。
- Soundbar 共 33 款，新增 ASUS ROG Gjallar，非 Top Pick；6 位獨立使用者跨 2 個原始網站回報重低音斷線，官方已提供更新，但未保證全部解決。
- 聚焦可信通路新品，排除配件、耗材、福利品、展示機與誤判品。
- 冷氣固定 30 組台灣住宅一對一分離式完整室內／室外機組，冷專、冷暖各至少 12 組，且小／中／大／客餐廳四個坪數帶各至少 6 組；熱水器固定 45 台，瓦斯、電熱與熱泵各 15 台，其中電熱為儲熱式 8 台、瞬熱式 7 台。
- Sony、Panasonic、HITACHI、Mitsubishi Electric、Daikin、GENERAL、Rinnai、Noritz、TOTO 以 34 類 × 9 品牌完整矩陣保存人工盤點結果；只在有台灣合格 exact model 且確實增加比較價值時補代表款。2026-09-01 01:56 的周邊增量批次只新增 27 格、原 279 格保留原日期；本次全量維護重新逐類核對後，306 格才統一記為 2026-09-01，不把預設值當查核結論。
- 咖啡機共 24 款台灣現售義式機，全自動與半自動各 12 款，並維持各類型入門／均衡／旗艦各 4 款；半自動再平分為 6 款內建磨豆機與 6 款需外接磨豆機。
- 每類「綜合推薦」以 CP 值、評價口碑、價格、可信通路、台灣售後/保固風險綜合判斷，並附簡短推薦原因。
- 支援分類、冷氣／熱水器型態、網路交換器 1G／2.5G／10G 速率、滑鼠握持型態、鍵盤機構、滑鼠墊材質、品牌、選購定位、通路、自然多詞搜尋、排序、active filter chips、可分享 URL 篩選狀態與比較清單；既有 `budget` query key 維持相容。
- 首屏與 34 個分類指南皆清楚標示 AI 協作、資料日期、查核方法與 GitHub 原始碼；資料日代表最近完成的研究批次，個別商品查核日期以逐筆證據為準，不等於全目錄均於當日重查。網站與內容仍可能有錯漏，不虛構專家或實機使用經驗。
- 針對桌機與手機操作最佳化，包含群組化分類列、sticky 分類列、手機快速操作列、收合式商品細節與重設篩選。
- 18 類尺寸與 10 類新增重量規格／證據對齊，含螢幕燈及三類鍵鼠周邊；既有家電 cm／kg 契約不變，周邊使用 mm／g 並保留來源明示軸序，滑鼠墊厚度另列。冷氣分列室內／室外機，熱泵複合系統分列主機／儲槽；無法確認時明示「查不到」，不使用包裝、毛重或猜測缺漏資料。
<!-- catalog-maintenance-summary:start -->
- 2026-09-01 07:05（台灣時間）完成 1035 筆商品、34 類全量查核；486 筆 PChome SKU API 已完成（277 筆 exact model、67 筆人工 SKU 綁定可寫入，65 筆型號未自動確認），更新 116 筆公開價格（81 筆下修、35 筆上修），52 筆 Qty 0 只列追蹤。
- 本次增量新增 tv-sony-xr80m2-65、vacuum-dyson-v8-cyclone-sv55；本次增量沒有移除停產產品。逐類人工新品覆核已完成，所有分類至少 20 筆；停產只採品牌官方明確證據，缺貨、反爬或單次連線錯誤不作為刪除依據。
- 圖片查核覆蓋 1035 筆；761 筆來源可由 exact model 或人工 SKU 綁定確認，274 筆來源例外與 0 筆圖片例外保留原資料。史低為 502 筆 `found`、533 筆 `not_found`，本輪下修 3 筆；135 筆來源可自動重現，其餘保留原逐筆證據且未臆測失效。
- ExchangeRate-API 最新批次為 2026-08-31 00:02 UTC，USD/TWD 31.649299；38 筆外幣商品已重算。完整摘要與例外保存在 `catalog_maintenance_latest.json`。
<!-- catalog-maintenance-summary:end -->

2026-08-31 晚間另定向覆核 7 款既有商品的負評：Flexus Core 200 有線重低音輸出爆音新增為集中回報（Reddit 5 人、Best Buy 2 人）；U7 Pro 排除症狀不明的作者後低於 6 人門檻，撤回集中負評標示。AP22 與 AW3225QF 只補修補／包裝改善背景，原逐人證據日期保留。本輪不是 943 款負評全部重查。

2026-08-31 新品候選批次另掃描掃拖機器人、吸塵器、電腦螢幕、無線路由器、空氣清淨機與電視。MOVA Mobius 60 當日核對台灣新品 NT$28,888、兩年保固及個別負評，但缺台灣基站 AC 額定證據，暫不正式納入；Dreame X60 Track 當時仍為預購，其餘候選與未完成項目保留於維護摘要，不將預購或證據未齊商品當成現貨推薦。

## 使用

直接開啟 `index.html`，或透過 [正式網站](https://appliance.riverye.com/) 瀏覽。

商品資料已依分類拆到 `products/*.js`，由 `assets/js/product-loader.js` 依分類設定自動載入；前端邏輯拆在 `assets/js/*.js`，樣式來源拆在 `assets/css/*.css`。首頁載入的 `assets/css/app.css` 是產生器合併的首屏 bundle，不可手動修改；GitHub Pages 仍直接服務靜態檔案，不需要執行期建置。

## GEO / AI 搜尋維護

- `tools/category-guides.js` 是 34 類導讀、選購重點與 FAQ 的人工維護來源；商品事實仍以 `assets/js/config.js` 與 `products/*.js` 為準。
- 每個分類頁會從同一份商品資料產生可直接擷取的「完整型號索引」，讓無 JavaScript 爬蟲也能讀到全部 1035 款的品牌、型號、名稱、參考價、上市日期與摘要。
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
- `npm run check:data`：檢查 34 類、1035 筆、必要欄位、日期格式、18 類尺寸與 10 類新增重量規格／證據對齊、鍵鼠三類各 30 款與 6／12／12、同款最多三版及重複軸體／尺寸、螢幕燈 20 款與 13 項規格前綴、網路交換器 20 款與三速／八埠／非 PoE 契約、冷氣 30 組與型態／坪數帶／室內外 pair、熱水器 45 台與 15／15／15、電熱 8／7、306 格日系品牌矩陣、價格／安裝 enum、電子衣櫥與咖啡機契約、歷史最低價與負評 research 對齊、人工覆核完成清單、逐位反映者、6 人／2 平台門檻、每類至少 20 筆、重複型號與重複購買 URL。
- `npm run check:docs`：檢查 README、AGENTS、index/config 的商品數、分類數、日期與 cache version 沒有漂移。
- `npm run check:geo`：檢查 34 個分類頁、1035 款靜態型號索引、metadata、結構化資料、內部連結、sitemap、llms、證據檔、Pages artifact、35 個 canonical IndexNow URL contract 與所有產生結果沒有漂移。
- `npm run check:ui`：用 Playwright 驗證桌機/手機搜尋、篩選、排序、lazy loading、比較清單、負評警示與推薦卡高亮。
- `npm run check:quality`：用 Lighthouse 驗證首頁與代表分類頁；Performance、LCP、CLS、Accessibility 與 SEO 採瀏覽器行動 throttling，TBT 採 Lantern 標準化模擬以排除 CI runner 硬體差異，門檻仍為 200ms。
- `npm run audit:pchome-prices`：唯讀重查所有 PChome SKU；有正值 `Price.Low` 時優先採折扣價，否則採 `Price.P`。人工確認輸出後才可加 `-- --write --date=YYYY-MM-DD` 寫回。
- `npm run maintain:catalog -- --draft --date=YYYY-MM-DD --baseline-ref=origin/main`：新資料日先產生 gitignored `.maintenance-draft.json` 與原始 audit，供 AI 完成每類新品與停產候選原頁覆核；覆核結果齊全後再改用 `--write` 定稿。daily workflow 在尚無同日覆核決策時只上傳 draft artifact，不會誤寫商品。
- `npm run review:japanese-brands -- --date=YYYY-MM-DD --baseline-ref=origin/main`：全量維護時在 draft 上寫入 34 類 × 9 品牌同日人工盤點矩陣；僅新增模式不得重寫沿用分類，矩陣不另建第七份公開證據檔。
- `npm run sync:maintenance-metadata`：由 `catalog_maintenance_latest.json` 同步 README、AGENTS 與首頁資料日期／匯率文案；逐筆原始稽核只保存在 gitignored `.maintenance-audit.json` 或 CI artifact。

## 僅新增商品的增量記錄

- `auditScope: "added_products_only"` 僅用於使用者要求的補品；省略此欄位仍是既有全量維護。`baselineRef` 固定為新增前完整 commit SHA，`summary.newProductsAdded` 必須等於與基準清單的 ID 差集，不另造第二套大型 audit。
- 原商品、逐筆研究與已確認／例外證據原樣承接；來源與圖片的完整 checked ID sets 表示目前證據覆蓋，不代表本輪全部重查。`researchedThisRun` 只計本輪新增款，資料日與 aggregate 可更新，沿用列的真實日期不可改寫。
- 匯率沿用既有批次，新海外商品明示原幣、換算日期、運費、稅費、供電與台灣保固風險，不因此重算原商品。缺少可讀基準、舊列被改、ID 差集不符或新款證據未齊時應停止，不得自動擴張為全目錄維護。
- 使用者要求開 PR 時，完成分支、PR 與 CI 驗證即可；未另獲要求前不合併 `main`、不部署 Pages。
