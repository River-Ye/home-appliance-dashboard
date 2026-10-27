# 家電推薦比較工作台

純前端靜態頁面，整理 2026-10-27 查核的家電推薦清單，並保留好市多可購買候選，涵蓋價格、歷史最低價、負評／災情、入手時機、規格、優缺點、通路連結與海外價格 TWD 換算。

> 本專案由 AI 協助研究、整理資料並製作網頁；內容僅供採購比較參考，購買前請再以通路與品牌官方資訊為準。

## 線上瀏覽

不熟悉 GitHub 的人可以直接點這個公開網頁：

[家電推薦比較工作台](https://appliance.riverye.com/)

## 內容

- 共 37 類商品，每種商品至少 20 個，共 1220 筆。
- 另由現有分類與商品資料產生 37 個可獨立索引的 `/categories/<id>/` 選購指南頁；每頁的初始 HTML 均含前 5 名詳細推薦與該類全部型號索引，不為 1220 筆商品建立重複、薄內容的獨立頁面。
- 床包、棉被各 30 款，枕頭 32 款；CP 值／均衡／旗艦分別為床包與棉被 6／12／12、枕頭 6／12／14，位於獨立「臥室寢具」群組，各一款台灣 Top Pick。床包涵蓋單件與床包加枕套組，棉被涵蓋五種主要填充，枕頭只收成人睡眠枕；同系列最多三個官方獨立尺寸或高度／軟硬度 SKU，顏色、花色、件數與贈品不增加款數。
- 滑鼠 34 款、鍵盤 34 款、滑鼠墊 33 款；CP 值／均衡／旗艦分別為 6／13／15、6／13／15、6／12／15，辦公與電競並重，各一款台灣 Top Pick。完整成品優先台灣可信新品通路；鍵盤不同軸體、滑鼠墊不同平面尺寸可依官方型號／SKU 分列，同款最多三版，純顏色、語言、背光或套裝不增加款數。2026-09-01 01:56 的周邊增量批次以原 943 款為固定 baseline，只新增 90 款。
- 周邊品牌涵蓋 Logitech、Razer、Sony；鍵盤另含 Keychron、HyperX、Ducky、SteelSeries、ASUS、MSI、Corsair、NuPhy、Wooting，滑鼠墊另含 ASUS、ELECOM、KINYO、HP、IKEA、darkFlash、ZOWIE、SteelSeries。品牌篩選依各分類實際收錄顯示，不表示每個品牌都有三類商品。
- 螢幕燈精選 20 款桌機掛燈，台灣通路優先、可信海外通路補充；排除一般檯燈、筆電燈、單純氣氛燈與配件，不以顏色或套組重複湊數。該次螢幕燈擴充僅新增 20 款，原 923 款沿用固定基準版本；後續全量維護另依最新摘要記錄。
- 掃拖機器人共 50 款；新增 MOVA Z70 Ultra Roller Complete 台灣 R5765U，核對 110V／50–60Hz、兩年保固與現售價格，明示組合台階越障及海外個別回報限制。保留既有 S70 與其他型號；E20 依先前官方停止生產公告移除。
- 洗衣機共 27 款；新增 Panasonic NA-V150SW 15kg 前開溫水單洗款，補充不同容量與型態，保留既有直立與 12kg 滾筒機。
- 洗碗機共 35 款；新增 Bosch SMI6ECS00X 14人份半嵌式自動開門款，台灣110V／60Hz、36kg、含標準安裝但門板施工另計；保留 Bosch SMS8ZCI02X 14人份獨立式沸石款，台灣110V／60Hz、51.7kg，原廠派裝但所選通路基本安裝含價範圍待確認。新增 Haier W32／HDWE16-58GY3TW，明列去檯面後 76.5cm 機高、最低 76.8cm 開孔、220V／60Hz 與另計安裝費；淨重查不到，搬運前需確認。
- 本輪補齊 Dreame X60 Track 的台灣官方現售、主機 RLR82DE／基站 RCZE0204 與 110V／50–60Hz 手冊證據，保留 Aqua 10 Pro Track 比較；分件淨重、上市日及可靠史低仍查不到，未列 Top Pick。
- 新增 HITACHI RV-X20DPA，配備 4L 自動集塵座，但拖布仍需手洗；購前須電話確認，保固年限未明。
- 除濕機共 30 款；新增 Whirlpool WDEE123HTW，分列除濕與清淨適用範圍，並保留噪音及到貨外觀評價限制。
- 電腦螢幕共 67 款；新增 BenQ RD320U 31.5 吋 4K／60Hz 程式設計螢幕，核對台灣三年保固、100–240V 與不含底座 7.3kg，並保留跨站個別面板與 KVM 回報。保留原 66 款，包括 MSI MPG 491CQPX QD-OLED、491CQP、MPG 271QR QD-OLED X50 與既有 ASUS 型號比較。
- 烘衣機共 26 款；新增 Panasonic NH-V150SP 15kg獨立熱泵款，台灣110V／60Hz、64kg、含基本安裝與同賣場一年保固；原廠要求15A專用接地插座、漏電斷路器與排水，原24款保留。
- 洗烘衣機共 35 款；本輪補入 Electrolux EWW1143R7WC 11/7kg，110V／60Hz、原廠全機兩年保固，所選 PChome 頁面基本安裝含價範圍待確認。新增 Panasonic NA-LX128EL 左開 12/6kg 日本製熱泵款，核對 110V／60Hz、80kg 與含基本安裝的台灣新品價格，保留既有型號。
- 無線路由器共 57 款；新增 D-Link M95 單台三頻 Wi-Fi 7 Mesh，保留 R95 與 M36；公開促銷時限、原廠三年保固及少數斷線／發熱回報均有揭露。
- 電視共 42 款；新增 TCL 75X11L 75 吋 SQD-Mini LED，核對台灣供電、含／不含底座尺寸、40.5kg 整機淨重與三年保固，既有型號保留比較。
- Soundbar 共 38 款；新增 Sonos Beam Ultra 美國黑色版，核對 2026-09-29 發售、7.1.2 聲道、100–240V／50–60Hz 與本體尺寸／淨重，只作海外參考並揭露跨境費用、台灣保固及個別問題回報。保留 Philips TAB8750/96 與其他既有型號。
- 冰箱共 48 款；含本日既有的 19 款 Panasonic 秋季通路型號，新增 HITACHI HRBN5366DF1 330L 下冷凍窄身款，保留 313L 舊款；NT$27,400 為原廠右開建議售價，現貨交期與實際成交價待確認，不冒充通路現價或史低。
- 免治馬桶共 22 款；新增 Panasonic DL-RU60TWWS，核對 nanoe X、智慧雙溫控、自動開蓋及台灣電力規格；所選優惠頁未明載含基本安裝，需先確認施工費與馬桶相容性。
- 電風扇共 21 款；依 Philips 台灣 exact-model 官方「已停產」標示移除 ACR3142CF、ACR3144WTF 與 AHR5164FD，保留其他可比較型號；不以通路缺貨或舊頁失效推定停產。
- 電子衣櫥共 21 款；新增 Panasonic N-R600AR-X1 台灣 110V／60Hz 鏡面款，保留既有窄機身與海外型號。
- 吸塵器共 34 款；新增 HITACHI PV-XH4Q 並保留 PV-XH4P，明示新款的貼邊／防纏優勢與吸力、重量取捨。
- 櫥下飲水機共 44 款；本輪新增 Rinnai RWP-H201 冷熱雙溫窄機身款，明示另備生飲過濾設備、進水限制與標準安裝邊界。新增水空間 WS-RCH601、WS-Min'O-R2、WS-UVN500，依完整型號分列常溫／多段熱水、直出 RO 與超濾 LED-UV 功能，保留既有 40 款比較。
- 聚焦可信通路新品，排除配件、耗材、福利品、展示機與誤判品。
- 冷氣固定 30 組台灣住宅一對一分離式完整室內／室外機組，冷專、冷暖各至少 12 組，且小／中／大／客餐廳四個坪數帶各至少 6 組；熱水器目前精確收錄 47 台，瓦斯 17 台、電熱與熱泵各 15 台，其中電熱為儲熱式 8 台、瞬熱式 7 台。
- Sony、Panasonic、HITACHI、Mitsubishi Electric、Daikin、GENERAL、Rinnai、Noritz、TOTO 以 37 類 × 9 品牌完整矩陣保存人工盤點結果；只在有台灣合格 exact model 且確實增加比較價值時補代表款。完整維護重新盤點 333 格；僅新增批次保留基準與真實覆核日期。品牌已有商品不代表全部世代已核實，來源阻擋與未確定後繼的缺口另列於逐類紀錄。
- 咖啡機共 24 款台灣現售義式機，全自動與半自動各 12 款，並維持各類型入門／均衡／旗艦各 4 款；半自動再平分為 6 款內建磨豆機與 6 款需外接磨豆機。
- 本輪依使用者明確要求補入合格新版，保留現售舊款；主要新增包括 BenQ MA270S／MA320UG、Panasonic NA-V1515SP／NA-V1715SP、SAMPO SD-10DH、Electrolux EFF5581SXA／EFF7591SXA、Philips DDL720-FVP／MVP、TEMPUR SmartCool 千禧／夢幻枕與 SAKURA DH1670H／DH1693H。電腦椅共 30 款、電子鎖共 53 款；完整新增與候選處置以維護摘要為準。
- 原初固定配額可隨使用者明確要求的合格新版擴充，精確款數與分型／預算配額仍由 `tools/dashboard-contract.js` 嚴格驗證；電力、台灣通路與保固、版本、史低和負評證據門檻不變。缺台灣 exact 60Hz 證據的 Philips EP8557/20、尚未確認台灣供電與交貨條件的 Vitamix Ascent X5 繼續列待查。
- 每類「綜合推薦」以 CP 值、評價口碑、價格、可信通路、台灣售後/保固風險綜合判斷，並附簡短推薦原因。
- 支援分類、冷氣／熱水器型態、網路交換器 1G／2.5G／10G 速率、滑鼠握持型態、鍵盤機構、滑鼠墊與寢具材質／填充、品牌、選購定位、通路、自然多詞搜尋、排序、active filter chips、可分享 URL 篩選狀態與比較清單；既有 `budget` query key 維持相容。
- 首屏與 37 個分類指南皆清楚標示 AI 協作、資料日期、查核方法與 GitHub 原始碼；資料日代表最近完成的研究批次，個別商品查核日期以逐筆證據為準，不等於全目錄均於當日重查。網站與內容仍可能有錯漏，不虛構專家或實機使用經驗。
- 針對桌機與手機操作最佳化，包含群組化分類列、sticky 分類列、手機快速操作列、收合式商品細節與重設篩選。
- 21 類尺寸與 13 類新增重量規格／證據對齊，含螢幕燈、三類鍵鼠周邊與三類寢具；既有家電及寢具使用 cm／kg，周邊使用 mm／g 並保留來源明示軸序。滑鼠墊厚度、床包可包覆高度、棉被填充重量另列；無法確認時明示「查不到」，不使用包裝、毛重或猜測缺漏資料。
<!-- catalog-maintenance-summary:start -->
- 2026-10-27 10:04（台灣時間）完成 1220 筆商品、37 類價格與來源全量查核；539 筆 PChome SKU API 已完成（280 筆 exact model、63 筆人工 SKU 綁定可寫入，72 筆型號未自動確認），更新 68 筆公開價格（1 筆下修、67 筆上修），42 筆缺貨／預購只列追蹤。
- 本次增量沒有納入新產品；本次增量沒有移除停產產品。已逐類覆核取得的新品來源；尚未確認的逐型號後繼對照與來源限制詳見 categoryScan，所有分類至少 20 筆；停產只採品牌官方明確證據，缺貨、反爬或單次連線錯誤不作為刪除依據。
- 圖片查核覆蓋 1220 筆；845 筆來源可由 exact model 或人工 SKU 綁定確認，375 筆來源例外與 0 筆圖片例外保留原資料。史低為 510 筆 `found`、710 筆 `not_found`，本輪其他更正 5 筆；84 筆來源可重現，其餘保留原逐筆證據且未臆測失效。
- ExchangeRate-API 最新批次為 2026-10-27 00:02 UTC，USD/TWD 32.592411；39 筆外幣商品已重算。完整摘要與例外保存在 `catalog_maintenance_latest.json`。
<!-- catalog-maintenance-summary:end -->

2026-10-24 已重查 37 類官方新品入口與 333 格日系品牌邊界，但既有型號與後繼型號的逐筆對應尚未全部完成。各類 `successorReview` 保留實際查到的對應與來源限制；無法存取或確認的部分不視為「沒有後繼款」，既有上市、尺寸與負評證據也保留原查核日期。

2026-08-31 晚間另定向覆核 7 款既有商品的負評：Flexus Core 200 有線重低音輸出爆音新增為集中回報（Reddit 5 人、Best Buy 2 人）；U7 Pro 排除症狀不明的作者後低於 6 人門檻，撤回集中負評標示。AP22 與 AW3225QF 只補修補／包裝改善背景，原逐人證據日期保留。本輪不是 943 款負評全部重查。

2026-08-31 新品候選批次另掃描掃拖機器人、吸塵器、電腦螢幕、無線路由器、空氣清淨機與電視。MOVA Mobius 60 當日核對台灣新品 NT$28,888、兩年保固及個別負評，但缺台灣基站 AC 額定證據，暫不正式納入；Dreame X60 Track 當時仍為預購，其餘候選與未完成項目保留於維護摘要，不將預購或證據未齊商品當成現貨推薦。

## 使用

直接開啟 `index.html`，或透過 [正式網站](https://appliance.riverye.com/) 瀏覽。

商品資料已依分類拆到 `products/*.js`，由 `assets/js/product-loader.js` 依分類設定自動載入；前端邏輯拆在 `assets/js/*.js`，樣式來源拆在 `assets/css/*.css`。首頁載入的 `assets/css/app.css` 是產生器合併的首屏 bundle，不可手動修改；GitHub Pages 仍直接服務靜態檔案，不需要執行期建置。

## GEO / AI 搜尋維護

- `tools/category-guides.js` 是 37 類導讀、選購重點與 FAQ 的人工維護來源；商品事實仍以 `assets/js/config.js` 與 `products/*.js` 為準。
- 每個分類頁會從同一份商品資料產生可直接擷取的「完整型號索引」，讓無 JavaScript 爬蟲也能讀到全部 1220 款的品牌、型號、名稱、參考價、上市日期與摘要。
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
- `npm run check:data`：檢查 37 類、1220 筆、必要欄位、日期格式、21 類尺寸與 13 類新增重量規格／證據對齊、鍵鼠與寢具逐分類精確款數及預算配額、同款最多三版、型態與版本重複、螢幕燈 20 款、網路交換器 20 款、冷氣 30 組、熱水器 47 台、333 格日系品牌矩陣、價格／安裝 enum、歷史最低價與負評 research 對齊、人工覆核完成清單、逐位反映者、6 人／2 平台門檻、每類至少 20 筆、重複型號與重複購買 URL。
- `npm run check:docs`：檢查 README、AGENTS、index/config 的商品數、分類數、日期與 cache version 沒有漂移。
- `npm run check:geo`：檢查 37 個分類頁、1220 款靜態型號索引、metadata、結構化資料、內部連結、sitemap、llms、證據檔、Pages artifact、38 個 canonical IndexNow URL contract 與所有產生結果沒有漂移。
- `npm run check:ui`：用 Playwright 驗證桌機/手機搜尋、篩選、排序、lazy loading、比較清單、負評警示與推薦卡高亮。
- `npm run check:quality`：用 Lighthouse 驗證首頁與代表分類頁；Performance、LCP、CLS、Accessibility 與 SEO 採瀏覽器行動 throttling，TBT 採 Lantern 標準化模擬以排除 CI runner 硬體差異，門檻仍為 200ms。
- `npm run audit:pchome-prices`：唯讀重查所有 PChome SKU；有正值 `Price.Low` 時優先採折扣價，否則採 `Price.P`。人工確認輸出後才可加 `-- --write --date=YYYY-MM-DD` 寫回。
- `npm run maintain:catalog -- --draft --date=YYYY-MM-DD --baseline-ref=origin/main`：新資料日先產生 gitignored `.maintenance-draft.json` 與原始 audit，供 AI 完成每類新品與停產候選原頁覆核；覆核結果齊全後再改用 `--write` 定稿。daily workflow 在尚無同日覆核決策時只上傳 draft artifact，不會誤寫商品。
- `npm run review:japanese-brands -- --date=YYYY-MM-DD --baseline-ref=origin/main`：全量維護時在 draft 上寫入 37 類 × 9 品牌同日人工盤點矩陣；僅新增模式不得重寫沿用分類，矩陣不另建第七份公開證據檔。
- `npm run sync:maintenance-metadata`：由 `catalog_maintenance_latest.json` 同步 README、AGENTS 與首頁資料日期／匯率文案；逐筆原始稽核只保存在 gitignored `.maintenance-audit.json` 或 CI artifact。

## 僅新增商品的增量記錄

- `auditScope: "added_products_only"` 僅用於使用者要求的補品；省略此欄位仍是既有全量維護。`baselineRef` 固定為新增前完整 commit SHA，`summary.newProductsAdded` 必須等於與基準清單的 ID 差集，不另造第二套大型 audit。
- 原商品、逐筆研究與已確認／例外證據原樣承接；來源與圖片的完整 checked ID sets 表示目前證據覆蓋，不代表本輪全部重查。`researchedThisRun` 只計本輪新增款，資料日與 aggregate 可更新，沿用列的真實日期不可改寫。
- 匯率沿用既有批次，新海外商品明示原幣、換算日期、運費、稅費、供電與台灣保固風險，不因此重算原商品。缺少可讀基準、舊列被改、ID 差集不符或新款證據未齊時應停止，不得自動擴張為全目錄維護。
- 使用者要求開 PR 時，完成分支、PR 與 CI 驗證即可；未另獲要求前不合併 `main`、不部署 Pages。
