# 家電推薦比較工作台

純前端靜態頁面，整理 2026-07-08 查核的家電推薦清單、價格、規格、優缺點、通路連結與海外價格 TWD 換算。

> 本專案由 AI 協助研究、整理資料並製作網頁；內容僅供採購比較參考，購買前請再以通路與品牌官方資訊為準。

## 線上瀏覽

不熟悉 GitHub 的人可以直接點這個公開網頁：

[家電推薦比較工作台](https://river-ye.github.io/home-appliance-dashboard/)

## 內容

- 20 類商品，除掃拖機器人、無線路由器、電腦螢幕與電子鎖外每類 15 個型號，共 395 筆。
- 掃拖機器人已擴充到 28 筆，涵蓋 Roborock、ECOVACS、Dreame、Narwal、iRobot、eufy、MOVA、LG、Shark、Dyson 的旗艦 / 次旗艦或代表機種。
- 無線路由器已擴充到 45 筆，只保留 Wi-Fi 6 以上機種，涵蓋 ASUS、TP-Link、D-Link、NETGEAR、Linksys、Synology、Aruba、UniFi、Zyxel、Mercusys、MSI、Acer、Xiaomi、TOTOLINK、QNAP、Cudy 等品牌，並逐筆標示 Mesh/多 AP/商用管理支援狀態。
- 升降桌已加入 15 筆，涵蓋 Loctek、iRocks、LOGIS、NITORI、COUGAR、Apexgaming 等可信通路可購買款。
- 電腦椅已加入 15 筆，涵蓋 iRocks、Ergohuman、Razer、Herman Miller、Steelcase、Backbone、AOTTO、IONRAX、COUGAR 等人體工學與電競代表款。
- 電腦螢幕已加入 36 筆，涵蓋 ASUS、Acer、BenQ、LG、Dell、Samsung、MSI、GIGABYTE、ViewSonic、AOC、Philips、EIZO、Xiaomi 等品牌，包含入門 FHD、高 CP 2K 高刷新、4K/USB-C、生產力、OLED、Mini LED 與專業色彩款。
- 電子鎖已加入 46 筆，涵蓋 Yale、Philips、Kaadas、Aqara、Lockin、Zigbang/SHP、dormakaba、Milre、FIBRE、HITACHI、Lockly、WAFERLOCK、SHARP、Panasonic、HYUNDAI、3E、moorgen 等通路可買品牌。
- 鍋具、刀具、櫥下飲水機、洗碗機各 15 筆，聚焦可信通路新品，排除配件、耗材、福利品、展示機與誤判品。
- 每類「綜合推薦」以 CP 值、評價口碑、價格、可信通路、台灣售後/保固風險綜合判斷，並附簡短推薦原因。
- 支援分類、品牌、預算、通路、搜尋、排序與比較清單。
- 針對桌機與手機操作最佳化，包含群組化分類列、sticky 分類列、手機快速操作列與重設篩選。
- 價格以 2026-07-08 可信通路查核的低價為準；排除不明網站、個人拍賣、福利品、展示機、拆封品、二手品與配件誤判。
- 海外價格使用 ExchangeRate-API 實際回傳的 2026-07-07 00:02 UTC 匯率換算，未含國際運費、進口稅與台灣保固。

## 使用

直接開啟 `index.html`，或透過 [GitHub Pages](https://river-ye.github.io/home-appliance-dashboard/) 瀏覽。

商品資料已依分類拆到 `products/*.js`；`app.js` 僅保留分類設定、資料註冊器、篩選、排序、比較與畫面渲染邏輯。
