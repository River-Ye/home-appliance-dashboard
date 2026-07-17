# 家電推薦比較工作台

純前端靜態頁面，整理 2026-07-17 查核的家電推薦清單，並保留好市多可購買候選，涵蓋價格、歷史最低價、負評／災情、入手時機、規格、優缺點、通路連結與海外價格 TWD 換算。

> 本專案由 AI 協助研究、整理資料並製作網頁；內容僅供採購比較參考，購買前請再以通路與品牌官方資訊為準。

## 線上瀏覽

不熟悉 GitHub 的人可以直接點這個公開網頁：

[家電推薦比較工作台](https://appliance.riverye.com/)

## 內容

- 共 25 類商品，每種商品至少 20 個，共 664 筆。
- 另由現有分類與商品資料產生 25 個可獨立索引的 `/categories/<id>/` 選購指南頁；不為 664 筆商品建立重複、薄內容的獨立頁面。
- 聚焦可信通路新品，排除配件、耗材、福利品、展示機與誤判品。
- 每類「綜合推薦」以 CP 值、評價口碑、價格、可信通路、台灣售後/保固風險綜合判斷，並附簡短推薦原因。
- 支援分類、品牌、選購定位、通路、自然多詞搜尋、排序、active filter chips、可分享 URL 篩選狀態與比較清單；既有 `budget` query key 維持相容。
- 首屏與 25 個分類指南皆清楚標示 AI 協作、資料日期、查核方法與 GitHub 原始碼；網站與內容仍可能有錯漏，不虛構專家或實機使用經驗。
- 針對桌機與手機操作最佳化，包含群組化分類列、sticky 分類列、手機快速操作列、收合式商品細節與重設篩選。
- 冰箱、洗衣機、烘衣機與洗烘衣機皆標示機身尺寸，方便先確認家中擺放空間；若可信來源查不到則明確標示未標示。
- 2026-07-17 07:55（台灣時間；2026-07-16 23:55 UTC）以原有 662 筆清單全量重查可信通路價格、購買連結、圖片、438 筆 `found` 史低來源與原廠停產狀態；更新 77 筆現價（61 筆降價、16 筆漲價）、1 筆購買連結與 3 筆新史低。Airmate FB2391DR 改用品牌官方現貨頁；Whirlpool WDEE1200TW、BenQ BSH01、Samsung HW-Q930H/ZW 的史低分別下修至 NT$7,690、NT$2,999、NT$44,910。
- 同輪將已失去可重現商品內容的 ASUS XG27AQDMES 原 NT$10,343 史低誠實改為 `not_found`，並納入 ZWILLING UNLOCK 1034435 台灣新品與 Ninja MW101 海外參考；總數增為 664，鍋具與多功能氣炸烤箱／微波爐各 24 筆。664 張圖片皆可讀取，最終 437 筆 `found`、227 筆 `not_found`；14 筆 PChome Qty 0 只保留追蹤，沒有新增原廠停產商品。
- ExchangeRate-API 已更新至 2026-07-17 00:02 UTC，17 筆外幣商品均依新批次重算；Ninja MW101 僅列美規 120V／1700W 海外參考，不列台灣 Top Pick。新品的 exact-model Mobile01／Reddit 人工覆核均未找到達門檻集中負評，且未把相近型號討論跨型號套用。
- 2026-07-16 夜間以 662 筆清單再次全量查核價格、購買連結、圖片、史低來源與停產狀態；更新 3 筆可信通路現價，皆為漲價：WMF Durado 24cm NT$1,690 → NT$2,690、WMF Belmonte 20cm NT$1,869 → NT$2,288、Sony HT-S40R NT$8,193 → NT$8,490。購買連結與圖片連結無需更換，662 張圖片皆可讀取，438 筆 `found` 史低沒有新低或失效證據。
- 同輪依 HCG 官方頁明示移除已停產的 AF890AW，並納入 Dreame 北美官方現貨、官方型號 HHR32F、上市與 exact-model 負評覆核證據齊全的 Aero Ultra Steam 海外參考；總數維持 662，免治馬桶 20 筆、吸塵器 24 筆，各分類仍至少 20 筆。ExchangeRate-API 仍為 2026-07-16 00:02 UTC 同一批次，16 筆外幣商品已重算；13 筆 PChome Qty 0 僅保留追蹤，沒有其他原廠停產或需立即納入的新產品。
- 2026-07-16 晚間以 662 筆清單全量重查價格、購買連結、圖片、史低來源與停產狀態；更新 62 筆可信通路售價（5 筆降價、57 筆漲價），購買連結與圖片連結無需更換，662 張商品圖片皆可讀取。
- 同輪將 LG DFB533FW 的 LBJ 可公開驗證史低由 NT$29,900 下修至 NT$28,255；其餘 437 筆 `found` 史低沒有需要失效或下修的證據。ExchangeRate-API 最新仍為 2026-07-16 00:02 UTC 同一批次，15 筆外幣換算無差異；13 筆 PChome Qty 0 僅保留追蹤。沒有新的原廠停產證據，也沒有同時具備可信售價、現貨與台灣適用資訊而需立即納入的新品；25 類仍各至少 21 筆、總數維持 662。
- 2026-07-16 以原有 658 筆清單全量重查價格、購買連結、圖片、史低來源與停產狀態；更新 47 筆既有商品的可信通路售價（36 筆降價、11 筆漲價），並將 Dyson Spot+Scrub Ai 改回台灣 Dyson 官方同型號現貨頁、官方圖片與 NT$24,900 台灣售價。Panasonic F-S14KM 原 momo 史低頁已失去可重現的商品與價格證據，因此由 `found` 誠實改為 `not_found`。
- 同輪納入 4 款已有台灣可信新品通路、官方發售證據與可驗證史低的新產品：LG OLED65C6PTA、Sony Y-65XR90M2、Samsung QA65S95HAXXZW 與 Sony HT-A7100；總數增為 662 筆，電視與 Soundbar 各 26 筆。662 張商品圖片皆可讀取，最終有 438 筆 `found`、224 筆 `not_found` 史低；13 筆 PChome Qty 0 僅保留追蹤，未找到新的原廠停產證據，各分類仍至少 21 筆。
- 2026-07-15 晚間以現有 658 筆清單再次全量重查價格、購買連結、圖片、史低來源與停產狀態；更新 46 筆可信通路售價（28 筆降價、18 筆漲價）與 2 筆購買連結，圖片連結無需更換。Sony HT-S100F 改用同一 Yahoo 商品編號的穩定 canonical URL；ASUS ROG Strix XG27AQDMES 的 PChome 售罄頁改為 momo 同型號現貨頁，價格維持 NT$10,888。
- 同輪將 Samsung WW12BB744DGBTW 的可公開驗證現價與史低下修為 NT$15,000；658 張商品圖片皆可讀取，435 筆 `found` 史低沒有需要失效的證據。ExchangeRate-API 仍是 2026-07-15 00:02 UTC 同一發布批次，16 筆外幣換算無差異；13 筆 PChome Qty 0 只保留追蹤。沒有新的原廠停產證據，也沒有已具備可信售價、供貨與購買頁而需立即納入的新品；25 類仍各至少 21 筆、總數維持 658。
- 2026-07-15 以現有 658 筆清單全量重查價格、購買連結、圖片、史低來源與停產狀態；更新 67 筆可信通路售價（8 筆降價、59 筆漲價）、1 筆購買連結、1 張同型號來源圖片、16 筆海外商品 TWD 換算與 2 筆可公開驗證史低。Sonos Arc Ultra 的失效 PChome 頁已改為 K.Wild 同型號公司貨現貨頁，現價與史低皆更新為 NT$37,710；Acerpure KW534-60W 的 LBJ 歷史曲線新低下修至 NT$15,031。
- 同輪確認 658 張商品圖片重試後皆可讀取、435 筆 `found` 史低來源沒有需要失效的證據；13 筆 PChome Qty 0 僅視為缺貨追蹤。沒有找到新的原廠停產證據或需要立即納入且已有可信台灣新品通路的候選，25 類仍各至少 21 筆、總數維持 658；好市多補充候選同步查核至 2026-07-15。
- 2026-07-14 晚間以 660 筆原始清單全量重查價格、購買連結、圖片、史低來源與停產狀態；移除 2 款有原廠停產證據的循環扇後，現有 658 筆。台灣商品優先比較 PChome、Yahoo、momo、Costco 與品牌官方，海外商品才比較可信海外通路。「低價」指可公開驗證、同型號／尺寸／容量／套裝的可信新品價，不包含個人拍賣或個人化優惠；好市多補充候選同日查核，目前共 64 筆，每類最多 3 筆。
- 2026-07-14 晚間定期查核更新 94 筆可信通路售價（51 筆降價、43 筆漲價）、13 筆購買連結與 1 張同型號白色款來源圖片，並下修 11 筆可公開驗證的歷史最低價。660 張原始商品圖片皆可讀取；438 筆既有 `found` 史低來源中，Samsung HW-Q990F 的 NT$42,914 原 PChome 來源已失效且找不到合規替代證據，已誠實改為「找不到」，最終為 435 筆 `found`、223 筆 `not_found`。
- 同輪依原廠頁明確標示移除 BALMUDA GreenFan Cirq EGF-3300 與 IRIS OHYAMA TAF-MKM10；循環扇仍有 21 筆，各分類皆至少 20 筆。新品搜尋未發現需要立即納入且已有可信台灣新品通路的候選；無可信現貨替代的售罄頁仍保留追蹤，未把缺貨或反爬訊號誤判為停產。
- 2026-07-14 清晨定期查核更新 49 筆可信通路售價（21 筆降價、28 筆漲價）、10 筆購買連結與 1 張來源圖片，並將 Raymii LS-104-M1 可公開驗證的史低下修至 NT$2,849；660 張商品圖片與 438 筆既有 `found` 史低來源皆可連線。
- 同輪將 8 筆 Yahoo 售罄頁切換到同型號 PChome 現貨頁，並將 Dyson Spot+Scrub Ai、Marshall Heston 60 切換到 Best Buy 現貨頁；其餘 25 筆 PChome 暫時缺貨商品保留追蹤。TOJIRO Black Zen 165mm 的商品名稱與既有 FD-1563 180mm 牛刀頁不一致，且找不到可信同型號新品頁，因此移除；刀具仍有 21 筆。HERAN HDF-16S6(S) 仍在禾聯官方商品頁與分類頁，沒有官方停產證據；新品搜尋未發現需立即納入者，25 類皆維持至少 20 筆，總數為 660。
- 2026-07-13 另由 6 個商品 Agent 分工精查 Tefal Daisy 28cm IH、Raymii LS-116-M1、IRIS PCF-SC15T、BenQ EX271Q、D-Link M36 三入與 HERAN HDF-16S6：3 筆價格更新、3 筆購買連結更新；HERAN 查無可購新品，既有 PChome 頁只保留為明示售罄的追蹤價。
- 2026-07-13 晚間定期查核更新 55 筆可信通路售價（19 筆降價、36 筆漲價）、3 筆失效購買來源與對應圖片，並新增或下修 5 筆可公開驗證的歷史最低價；25 筆 PChome 與 9 筆其他通路暫時缺貨商品保留追蹤，未把單次缺貨、轉址或擋自動請求誤判為停產。
- 同輪確認 661 張商品圖片皆可讀取、原有 437 筆 `found` 史低來源皆可連線，並新增 1 筆可重現的 Sony 裸機史低；其中 23 筆原頁已不再直接顯示舊金額，仍保留先前逐筆擷取的日期、摘錄與來源，不以目前頁面價格覆寫歷史觀測。
- 本輪另修正 1 筆無效重複資料：原 `WD-S18DNB` 名稱實際連到已存在的 `WD-S18NDB`，已替換為 LG 官方與 Yahoo購物中心皆可確認的 `WD-S18VDW`，並針對新型號重新查價、尺寸與負評候選。
- 歷史最低價以同型號、同尺寸/容量/規格的可信新品通路可驗證來源為準；本批逐筆查核 BigGo 730 天價格歷史，並用 FindPrice、LBJ 比價撿便宜與可信通路頁交叉確認；找不到可靠來源時明確標示「找不到」，不以現價推定史低。
- 歷史最低價排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、拆封品與整新品；海外史低需自行加計運費、關稅、電壓/插頭與台灣保固風險。
- 664 筆商品皆有同型號負評／災情查核；本輪新增的 ZWILLING UNLOCK 1034435 與 Ninja MW101，以及 2026-07-16 先前新增的 5 款商品，皆已用包含完整 canonical model 的 Mobile01 與 Reddit 查詢逐頁覆核，未找到可成立的 exact-model 集中負評。2026-07-11 重查的 612 筆原先完全沒有負面候選商品、36 筆既有集中負評與 13 筆已有少量負面證據者則保留原研究內容。只有同一問題由至少 6 位可辨識的獨立使用者反映、且跨至少 2 個原始網站時才顯示紅色警示；未達門檻統一顯示「截至查核日，查無達門檻的集中負評／災情」。
- 上述 6 筆中，IRIS PCF-SC15T 已有 `common_issue`，本輪依規則保留既有證據、不重搜；其餘 5 筆重新查詢並逐頁覆核 11 個候選，HERAN 僅 1 位 exact-model 故障案例，D-Link 與 BenQ 候選亦未形成同一問題 6 位且跨 2 個原始網站，因此決策仍為 `no_common_issue`。
- Google、Yahoo 等搜尋結果僅用於發現候選，不計入反映人數；同帳號重複留言、跨站轉貼、按讚、媒體轉述及系列相近型號皆不計。完整查詢、候選、逐位反映者、原文定位與採用證據保存在 `product_issue_research.json`；逐位原頁覆核 ledger `product_issue_report_evidence.json` 會保存每位使用者的忠實個別摘要，不接受只有作者名稱的模板化認定。逐型號的顯式決策、精確查詢、實際查核目標網域、候選處置與人工 attestation 則保存在 `product_issue_review_manifest.json`；每個經型號邊界過濾後的 exact-model 搜尋候選都必須有原頁摘要、獨立作者數及具體排除理由。
- 海外價格使用 ExchangeRate-API 最新回傳的 2026-07-17 00:02 UTC 匯率換算：USD/TWD 32.247891、GBP/TWD 43.492011、EUR/TWD 36.918781、JPY/TWD 0.198655、CNY/TWD 4.756088；17 筆外幣商品已同步重算，仍未含國際運費、進口稅與台灣保固。

## 使用

直接開啟 `index.html`，或透過 [正式網站](https://appliance.riverye.com/) 瀏覽。

商品資料已依分類拆到 `products/*.js`，由 `assets/js/product-loader.js` 依分類設定自動載入；前端邏輯拆在 `assets/js/*.js`，樣式來源拆在 `assets/css/*.css`。首頁載入的 `assets/css/app.css` 是產生器合併的首屏 bundle，不可手動修改；GitHub Pages 仍直接服務靜態檔案，不需要執行期建置。

## GEO / AI 搜尋維護

- `tools/category-guides.js` 是 25 類導讀、選購重點與 FAQ 的人工維護來源；商品事實仍以 `assets/js/config.js` 與 `products/*.js` 為準。
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
- `npm run check:data`：檢查 25 類、664 筆、必要欄位、日期格式、四類大型家電尺寸、歷史最低價與負評 research 對齊、人工覆核完成清單、逐位反映者、6 人／2 平台門檻、每類至少 20 筆、重複型號與重複購買 URL。
- `npm run check:docs`：檢查 README、AGENTS、index/config 的商品數、分類數、日期與 cache version 沒有漂移。
- `npm run check:geo`：檢查 25 個分類頁、metadata、結構化資料、內部連結、sitemap、llms、證據檔、Pages artifact、IndexNow contract 與所有產生結果沒有漂移。
- `npm run check:ui`：用 Playwright 驗證桌機/手機搜尋、篩選、排序、lazy loading、比較清單、負評警示與推薦卡高亮。
- `npm run check:quality`：用 Lighthouse 驗證首頁與代表分類頁；Performance、LCP、CLS、Accessibility 與 SEO 採瀏覽器行動 throttling，TBT 採 Lantern 標準化模擬以排除 CI runner 硬體差異，門檻仍為 200ms。
