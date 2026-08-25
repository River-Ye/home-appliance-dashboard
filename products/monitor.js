(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("monitor", [
  {
    "id": "monitor-asus-xg27acs",
    "category": "monitor",
    "rank": 1,
    "topPick": true,
    "budget": "value",
    "channel": "tw",
    "brand": "ASUS",
    "model": "ROG Strix XG27ACS",
    "name": "27 型 2K 180Hz IPS USB-C 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 5218,
      "converted": 5218,
      "confidence": "PChome 2026-08-24 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABKBA900JZ3CV/000001_1777866944.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABKB-A900JZ3CV",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "180Hz",
      "IPS",
      "USB-C",
      "重量：3.93 kg（不含底座）"
    ],
    "description": "XG27ACS 以五千多元給到 27 吋 2K、180Hz、IPS 與 USB-C，是遊戲與工作兼用甜蜜點。",
    "pros": [
      "規格完整且價格漂亮",
      "ASUS/ROG 通路與售後穩",
      "工作與遊戲兼顧"
    ],
    "cons": [
      "不是 4K 或 OLED",
      "USB-C 供電能力需看頁面規格"
    ],
    "bestFor": "想買一台主螢幕兼顧工作、遊戲與預算的人。",
    "recommendation": "本類 Top Pick：2K 高刷新、IPS、USB-C、品牌售後與價格最均衡。",
    "score": 94,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "180Hz",
      "USB-C",
      "CP 值"
    ],
    "releaseDate": "2024-04-17",
    "historicalLow": {
      "status": "found",
      "amount": 4957,
      "currency": "TWD",
      "converted": 4957,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DSABKB-A900JZ3CV",
      "sourceTitle": "PChome 商品頁：27 型 2K 180Hz IPS USB-C 電競螢幕（ROG Strix XG27ACS）",
      "evidenceSnippet": "PChome 同型號新品頁於 2026-07-14 顯示公開售價 NT$4,957，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "high",
      "checkedAt": "2026-07-14",
      "note": "採用同型號新品頁可公開查核售價作為本次觀測到的最低價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 XG27ACS 使用者回報在 180Hz／DisplayPort 下會隨機閃出白色水平線或畫面閃爍，部分伴隨短暫黑屏。",
      "issues": [
        {
          "title": "180Hz 下白色水平線、閃爍或短暫黑屏",
          "detail": "部分使用者降到 165Hz 後改善，但也有換線或換機仍復發；應在退換貨期內以 180Hz 長時間測試遊戲、桌面與休眠喚醒。",
          "reportCount": 8,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Issues with brand new ASUS ROG Strix XG27ACS monitor",
              "url": "https://old.reddit.com/r/ASUSROG/comments/1gu36al/issues_with_brand_new_asus_rog_strix_xg27acs/"
            },
            {
              "platform": "ASUS ROG Forum",
              "title": "New XG27ACS has Screen issues",
              "url": "https://rog-forum.asus.com/t5/gaming-monitors/new-xg27acs-has-screen-issues/td-p/1033966"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "monitor-acer-vg270u-p6",
    "category": "monitor",
    "rank": 2,
    "budget": "value",
    "channel": "tw",
    "brand": "Acer",
    "model": "VG270U P6",
    "name": "27 吋 QHD 144Hz IPS 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 3999,
      "converted": 3999,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABTCA900K0ABK/000001_1781756574.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABTC-A900K0ABK",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "144Hz",
      "IPS",
      "1ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Acer VG270U P6 把 27 吋 2K IPS 價格壓到很低，是升級 FHD 的高 CP 選項。",
    "pros": [
      "2K 價格很低",
      "IPS 視角好",
      "適合入門電競"
    ],
    "cons": [
      "支架與色彩功能偏基本",
      "庫存不多"
    ],
    "bestFor": "預算四千上下、想從 FHD 升級 2K 的人。",
    "recommendation": "低價 2K 推薦：預算有限時先看這台，再往 ASUS/BenQ 升級。",
    "score": 89,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "低價",
      "IPS"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 3688,
      "currency": "TWD",
      "converted": 3688,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1275471764&cgp=3999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Acer 宏碁】VG270U P6 27型 IPS 2K 16:9 144Hz 電競螢幕(可旋轉/內建喇叭/HDR10/FreeSync/1ms/護眼)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Acer 宏碁】VG270U P6 27型 IPS 2K 16:9 144Hz 電競螢幕(可旋轉/內建喇叭/HDR10/FreeSync/1ms/護眼)」最低價為 NT$3,688，最低點日期 2026-06-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Acer VG270U P6\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Acer%20VG270U%20P6%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Acer VG270U P6\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Acer%20VG270U%20P6%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Acer VG270U P6\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Acer%20VG270U%20P6%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Acer VG270U P6\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Acer%20VG270U%20P6%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Acer VG270U P6\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Acer%20VG270U%20P6%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-lg-27u631a",
    "category": "monitor",
    "rank": 3,
    "budget": "value",
    "channel": "tw",
    "brand": "LG",
    "model": "27U631A-B",
    "name": "27 型 2K 100Hz USB-C IPS 護眼螢幕",
    "price": {
      "currency": "TWD",
      "amount": 3980,
      "converted": 3980,
      "confidence": "PChome 2026-08-03 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABRBA900JTLHW/000001_1773730777.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABRB-A900JTLHW",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "100Hz",
      "IPS",
      "USB-C",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "LG 27U631A-B 是偏工作與日常的 2K 螢幕，USB-C 與 100Hz 讓筆電使用更順。",
    "pros": [
      "價格低",
      "USB-C 方便筆電",
      "LG 面板口碑佳"
    ],
    "cons": [
      "遊戲刷新率不如 144/180Hz",
      "支架功能偏基本"
    ],
    "bestFor": "筆電外接、文書、程式與一般娛樂。",
    "recommendation": "文書 CP 推薦：如果不主打競技遊戲，這台 2K USB-C 很划算。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "USB-C",
      "文書"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 3781,
      "currency": "TWD",
      "converted": 3781,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1271031807&cgp=3980",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【LG 樂金】27U631A-B 27型 2K 護眼螢幕 (IPS/100Hz/USB-C/傾斜可調支架)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【LG 樂金】27U631A-B 27型 2K 護眼螢幕 (IPS/100Hz/USB-C/傾斜可調支架)」最低價為 NT$3,781，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG 27U631A-B\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%2027U631A-B%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG 27U631A-B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%2027U631A-B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG 27U631A-B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%2027U631A-B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG 27U631A-B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%2027U631A-B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG 27U631A-B\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%2027U631A-B%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-samsung-g5-s27fg532",
    "category": "monitor",
    "rank": 5,
    "budget": "value",
    "channel": "tw",
    "brand": "Samsung",
    "model": "S27FG532EC Odyssey G5",
    "name": "27 型 2K 200Hz IPS Odyssey G5",
    "price": {
      "currency": "TWD",
      "amount": 4990,
      "converted": 4990,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABONA900JZ7RG/000001_1777952241.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABON-A900JCGXY",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "200Hz",
      "IPS",
      "1ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Odyssey G5 這筆以不到五千元給到 27 吋 2K 200Hz，是電競性價比很強的三星選項。",
    "pros": [
      "刷新率高",
      "2K 價格漂亮",
      "Samsung 品牌"
    ],
    "cons": [
      "庫存不多",
      "支架與色彩專業功能非重點"
    ],
    "bestFor": "預算有限但想要高刷新 2K 遊戲螢幕。",
    "recommendation": "電競 CP 推薦：規格比價格漂亮，適合 FPS/MOBA 玩家。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "200Hz",
      "電競"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 4690,
      "currency": "TWD",
      "converted": 4690,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1263665019&cgp=4990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Samsung 三星】S27FG532EC Odyssey G5 27型 IPS QHD 200Hz電競螢幕(FreeSync/HDR/1ms)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Samsung 三星】S27FG532EC Odyssey G5 27型 IPS QHD 200Hz電競螢幕(FreeSync/HDR/1ms)」最低價為 NT$4,690，最低點日期 2026-05-26。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung S27FG532EC Odyssey G5\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20S27FG532EC%20Odyssey%20G5%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung S27FG532EC Odyssey G5\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20S27FG532EC%20Odyssey%20G5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung S27FG532EC Odyssey G5\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20S27FG532EC%20Odyssey%20G5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung S27FG532EC Odyssey G5\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20S27FG532EC%20Odyssey%20G5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung S27FG532EC Odyssey G5\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20S27FG532EC%20Odyssey%20G5%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-msi-g275l-e14",
    "category": "monitor",
    "rank": 6,
    "budget": "value",
    "channel": "tw",
    "brand": "MSI",
    "model": "G275L E14",
    "name": "27 型 FHD 144Hz IPS 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 2990,
      "converted": 2990,
      "confidence": "PChome 2026-08-24 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABPDA900JTLEG/000001_1773715062.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABPD-A900JTLEG",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "FHD",
      "144Hz",
      "IPS",
      "HDR",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "MSI G275L E14 是 27 吋低價電競入門款，適合預算先決的遊戲或副螢幕。",
    "pros": [
      "價格低",
      "27 吋大畫面",
      "144Hz 入門遊戲足夠"
    ],
    "cons": [
      "FHD 在 27 吋細緻度一般",
      "不適合精細文字工作"
    ],
    "bestFor": "入門遊戲、副螢幕或預算三千左右的人。",
    "recommendation": "低價大螢幕推薦：不追求 2K 時，它的價格很有吸引力。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "FHD",
      "144Hz",
      "入門"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2840,
      "currency": "TWD",
      "converted": 2840,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1258644888&cgp=2990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【MSI 微星】G275L E14 27型 Rapid IPS FHD 144Hz 電競螢幕(HDR Ready)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【MSI 微星】G275L E14 27型 Rapid IPS FHD 144Hz 電競螢幕(HDR Ready)」最低價為 NT$2,840，最低點日期 2026-05-13。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"MSI G275L E14\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22MSI%20G275L%20E14%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"MSI G275L E14\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22MSI%20G275L%20E14%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"MSI G275L E14\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22MSI%20G275L%20E14%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"MSI G275L E14\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22MSI%20G275L%20E14%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"MSI G275L E14\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22MSI%20G275L%20E14%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-gigabyte-g27q20t",
    "category": "monitor",
    "rank": 7,
    "budget": "value",
    "channel": "tw",
    "brand": "GIGABYTE",
    "model": "G27Q20T",
    "name": "27 型 QHD 210Hz IPS 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 4488,
      "converted": 4488,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABW6A900K63WS/000001_1782880934.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABW6-A900K63WS",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "210Hz",
      "IPS",
      "1ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "技嘉 G27Q20T 以四千多元提供 2K 210Hz，適合重視高刷新與 CP 值的玩家。",
    "pros": [
      "2K 高刷新很便宜",
      "品牌售後較熟悉",
      "規格適合遊戲"
    ],
    "cons": [
      "支架與色彩功能需看評測",
      "庫存較少"
    ],
    "bestFor": "想用低預算買高刷新 2K 的玩家。",
    "recommendation": "高刷新 CP 推薦：價格對規格很有競爭力。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "210Hz",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 4488,
      "currency": "TWD",
      "converted": 4488,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1283040459&cgp=4488",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【GIGABYTE 技嘉】G27Q20T 27型 LED 電競螢幕",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【GIGABYTE 技嘉】G27Q20T 27型 LED 電競螢幕」最低價為 NT$4,488，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"GIGABYTE G27Q20T\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22GIGABYTE%20G27Q20T%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"GIGABYTE G27Q20T\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22GIGABYTE%20G27Q20T%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"GIGABYTE G27Q20T\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22GIGABYTE%20G27Q20T%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"GIGABYTE G27Q20T\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22GIGABYTE%20G27Q20T%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"GIGABYTE G27Q20T\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22GIGABYTE%20G27Q20T%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-viewsonic-vx2479",
    "category": "monitor",
    "rank": 8,
    "budget": "value",
    "channel": "tw",
    "brand": "ViewSonic",
    "model": "VX2479A-HD-PRO",
    "name": "24 型 FHD 240Hz IPS 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 2988,
      "converted": 2988,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABOIA900IC2G2/000001_1738836667.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0002973/goodsDetail/TP00029730001792",
    "buyLabel": "momo購物",
    "specs": [
      "24 吋",
      "FHD",
      "240Hz",
      "IPS",
      "1ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "24 吋 FHD 240Hz 是競技遊戲常見尺寸，ViewSonic 這台價格也很親民。",
    "pros": [
      "240Hz 低價",
      "24 吋適合 FPS",
      "IPS 視角佳"
    ],
    "cons": [
      "解析度只有 FHD",
      "工作區域較小"
    ],
    "bestFor": "FPS、競技遊戲與小桌面玩家。",
    "recommendation": "競技入門推薦：想要 240Hz 又不想花大錢，可列入清單。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "240Hz",
      "FPS",
      "FHD"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2988,
      "currency": "TWD",
      "converted": 2988,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1272513543&cgp=2988",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【ViewSonic 優派】ViewSonic優派 24型 VX2479A-HD-PRO 電競顯示器",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【ViewSonic 優派】ViewSonic優派 24型 VX2479A-HD-PRO 電競顯示器」最低價為 NT$2,988，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ViewSonic VX2479A-HD-PRO\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ViewSonic%20VX2479A-HD-PRO%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"ViewSonic VX2479A-HD-PRO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ViewSonic%20VX2479A-HD-PRO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"ViewSonic VX2479A-HD-PRO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22ViewSonic%20VX2479A-HD-PRO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"ViewSonic VX2479A-HD-PRO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22ViewSonic%20VX2479A-HD-PRO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"ViewSonic VX2479A-HD-PRO\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22ViewSonic%20VX2479A-HD-PRO%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-aoc-q27g42ze",
    "category": "monitor",
    "rank": 9,
    "budget": "value",
    "channel": "tw",
    "brand": "AOC",
    "model": "Q27G42ZE",
    "name": "27 型 QHD 260Hz IPS 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 4288,
      "converted": 4288,
      "confidence": "PChome 2026-08-20 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABQRA900JJPCW/000001_1765505711.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABQR-A900JJPCW",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "260Hz",
      "IPS",
      "0.3ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "AOC Q27G42ZE 用很低價格給到 2K 260Hz，規格紙面 CP 值很強。",
    "pros": [
      "刷新率很高",
      "2K 價格低",
      "適合電競比較"
    ],
    "cons": [
      "品牌售後需和 ASUS/BenQ 比較",
      "色彩與支架需看實測"
    ],
    "bestFor": "重視高刷新規格、預算有限的玩家。",
    "recommendation": "規格怪物推薦：若看重 Hz 與價格，AOC 這台很有競爭力。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "260Hz",
      "CP 值"
    ],
    "releaseDate": "2025-07",
    "historicalLow": {
      "status": "found",
      "amount": 3988,
      "currency": "TWD",
      "converted": 3988,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1266453715&cgp=4288",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【AOC】Q27G42ZE 27型IPS 2K 21:9 240Hz 電競螢幕(0.3ms/Adaptive Sync/HDR10/HDMI/DP)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【AOC】Q27G42ZE 27型IPS 2K 21:9 240Hz 電競螢幕(0.3ms/Adaptive Sync/HDR10/HDMI/DP)」最低價為 NT$3,988，最低點日期 2026-06-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"AOC Q27G42ZE\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22AOC%20Q27G42ZE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"AOC Q27G42ZE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22AOC%20Q27G42ZE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"AOC Q27G42ZE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22AOC%20Q27G42ZE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"AOC Q27G42ZE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22AOC%20Q27G42ZE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"AOC Q27G42ZE\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22AOC%20Q27G42ZE%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-philips-27m2n2500nf",
    "category": "monitor",
    "rank": 10,
    "budget": "value",
    "channel": "tw",
    "brand": "Philips",
    "model": "27M2N2500NF",
    "name": "27 型 2K 144Hz IPS 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 3888,
      "converted": 3888,
      "confidence": "PChome 2026-08-20 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABQQA900K2OE1/000001_1780474188.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABQQ-A900K2OE1",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "144Hz",
      "IPS",
      "HDMI",
      "重量：3.04 kg（不含底座）"
    ],
    "description": "Philips 27M2N2500NF 是低價 2K 144Hz 選項，適合一般遊戲與文書混用。",
    "pros": [
      "價格低",
      "2K 144Hz 基本盤完整",
      "品牌辨識度高"
    ],
    "cons": [
      "高階功能較少",
      "支架與色準非專業定位"
    ],
    "bestFor": "預算四千上下、想買知名品牌 2K 螢幕。",
    "recommendation": "平價品牌推薦：比無名款安心，價格接近低價甜蜜點。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "144Hz",
      "平價"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 3693,
      "currency": "TWD",
      "converted": 3693,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DSABQQ-A900K2OE1",
      "sourceTitle": "PChome 商品頁：27 型 2K 144Hz IPS 電競螢幕（27M2N2500NF）",
      "evidenceSnippet": "PChome 同型號新品頁於 2026-07-14 顯示公開售價 NT$3,693，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-14",
      "note": "採用同型號新品頁可公開查核售價作為本次觀測到的最低價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips 27M2N2500NF\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%2027M2N2500NF%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips 27M2N2500NF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%2027M2N2500NF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Philips 27M2N2500NF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Philips%2027M2N2500NF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Philips 27M2N2500NF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Philips%2027M2N2500NF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Philips 27M2N2500NF\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Philips%2027M2N2500NF%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-eizo-ev2740s",
    "category": "monitor",
    "rank": 11,
    "budget": "premium",
    "channel": "tw",
    "brand": "EIZO",
    "model": "FlexScan EV2740S",
    "name": "27 型 4K USB-C 70W 商務螢幕",
    "price": {
      "currency": "TWD",
      "amount": 29900,
      "converted": 29900,
      "confidence": "PChome 2026-08-24 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABGVA900JG58D/000001_1763013340.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABGV-A900JG58D",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "4K/UHD",
      "IPS",
      "USB-C PD 70W",
      "Auto EcoView",
      "重量：8.6 kg（含底座）；5.8 kg（不含底座）"
    ],
    "description": "EV2740S 是 27 吋 4K 商務型 EIZO，USB-C 可供電 70W，適合筆電單線連接與長時間文字、表格工作。",
    "pros": [
      "4K 文字與表格顯示細緻",
      "USB-C 單線影像與 70W 供電",
      "全球官網公告追溯延長為 7 年／30,000 小時"
    ],
    "cons": [
      "價格高於多數同級 27 吋 4K 螢幕",
      "台灣規格頁仍標 5 年，購買前須向總代理確認 7 年條款"
    ],
    "bestFor": "重視長時間辦公舒適、USB-C 筆電整線與長保固的工作者。",
    "recommendation": "4K 商務推薦：用較高預算換取 USB-C 整線、人體工學支架與 EIZO 長保固。",
    "score": 86,
    "voltage": "AC 100–240V、50/60Hz",
    "warranty": "EIZO Global 自 2026-06-23 將 EV2740S 追溯納入購買日起 7 年／30,000 小時保固；台灣規格頁仍標全機、面板 5 年，台灣實際適用條款購買前向總代理確認",
    "tags": [
      "4K",
      "USB-C",
      "商務"
    ],
    "releaseDate": "2025-07-18",
    "historicalLow": {
      "status": "found",
      "amount": 28405,
      "currency": "TWD",
      "converted": 28405,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DSABGV-A900JG58D",
      "sourceTitle": "PChome 24h 購物：EIZO FlexScan EV2740S 黑色",
      "evidenceSnippet": "PChome 24h 購物於 2026-08-19 顯示同型號可信新品公開價 NT$28,405，低於既有史低 NT$28,900。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-08-19",
      "note": "採用 PChome 24h 購物當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"EIZO FlexScan EV2740S\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22EIZO%20FlexScan%20EV2740S%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"EIZO FlexScan EV2740S\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22EIZO%20FlexScan%20EV2740S%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"EIZO FlexScan EV2740S\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22EIZO%20FlexScan%20EV2740S%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"EIZO FlexScan EV2740S\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22EIZO%20FlexScan%20EV2740S%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"EIZO FlexScan EV2740S\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22EIZO%20FlexScan%20EV2740S%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-xiaomi-a27qi-2026",
    "category": "monitor",
    "rank": 12,
    "budget": "value",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "A27Qi 2026",
    "name": "27 型 2K 120Hz 電腦螢幕",
    "price": {
      "currency": "TWD",
      "amount": 3699,
      "converted": 3699,
      "confidence": "PChome 2026-08-20 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABVOA900JMD8B/000001_1768285501.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABVO-A900JMD8B",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "120Hz",
      "2026 款",
      "平價",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "小米 A27Qi 2026 價格低、解析度高，適合預算有限的文書與一般娛樂。",
    "pros": [
      "價格低",
      "2K 120Hz",
      "外型簡潔"
    ],
    "cons": [
      "品牌售後與調校需接受小米風格",
      "遊戲規格不如 180Hz 以上款"
    ],
    "bestFor": "一般工作、學生與預算導向外接螢幕。",
    "recommendation": "平價 2K 推薦：不追電競，想把解析度拉高就很划算。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "120Hz",
      "低價"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 3499,
      "currency": "TWD",
      "converted": 3499,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1268930064&cgp=3699",
      "sourceTitle": "LBJ 比價撿便宜歷史價格：PChome Xiaomi A27Qi 2026",
      "evidenceSnippet": "LBJ PChome history shows NT$3,499 on 2026-01-09 and 2026-01-17 for Xiaomi A27Qi 2026.",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "已由 worker 查核 LBJ、BigGo 與 FindPrice；採 LBJ PChome 同型號歷史低點 NT$3,499。低於此價的福利品、拍賣混列或非可信新品通路候選均排除。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Xiaomi A27Qi 2026\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Xiaomi%20A27Qi%202026%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Xiaomi A27Qi 2026\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Xiaomi%20A27Qi%202026%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Xiaomi A27Qi 2026\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Xiaomi%20A27Qi%202026%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Xiaomi A27Qi 2026\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Xiaomi%20A27Qi%202026%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Xiaomi A27Qi 2026\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Xiaomi%20A27Qi%202026%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-asus-proart-pa278qev",
    "category": "monitor",
    "rank": 14,
    "budget": "value",
    "channel": "tw",
    "brand": "ASUS",
    "model": "ProArt PA278QEV",
    "name": "27 型 2K IPS 專業螢幕",
    "price": {
      "currency": "TWD",
      "amount": 5988,
      "converted": 5988,
      "confidence": "PChome 2026-08-20 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABBIA900HKVGI/000001_1718699617.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABBI-A900HKVGI",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "IPS",
      "ProArt",
      "專業螢幕",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "ProArt PA278QEV 適合想要色彩取向但預算有限的人，比電競螢幕更偏創作與文書。",
    "pros": [
      "ProArt 系列",
      "價格親民",
      "適合創作入門"
    ],
    "cons": [
      "不是 4K",
      "刷新率非競技重點"
    ],
    "bestFor": "設計入門、修圖、影片剪輯與長時間文書。",
    "recommendation": "創作入門推薦：比一般低價 2K 更重視色彩與工作用途。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "ProArt",
      "2K",
      "創作"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5688,
      "currency": "TWD",
      "converted": 5688,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DSABBI-A900JTZCP",
      "sourceTitle": "PChome 商品頁：27 型 2K IPS 專業螢幕（ProArt PA278QEV）",
      "evidenceSnippet": "PChome 同型號新品頁於 2026-07-14 顯示公開售價 NT$5,688，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "high",
      "checkedAt": "2026-07-14",
      "note": "採用同型號新品頁可公開查核售價作為本次觀測到的最低價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ASUS ProArt PA278QEV\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ASUS%20ProArt%20PA278QEV%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"ASUS ProArt PA278QEV\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ASUS%20ProArt%20PA278QEV%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"ASUS ProArt PA278QEV\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22ASUS%20ProArt%20PA278QEV%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"ASUS ProArt PA278QEV\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22ASUS%20ProArt%20PA278QEV%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"ASUS ProArt PA278QEV\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22ASUS%20ProArt%20PA278QEV%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-asus-xg27ucg",
    "category": "monitor",
    "rank": 15,
    "budget": "mid",
    "channel": "tw",
    "brand": "ASUS",
    "model": "ROG Strix XG27UCG",
    "name": "27 型 4K 160Hz IPS USB-C 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 7988,
      "converted": 7988,
      "confidence": "momo購物 2026-07-14 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABW6A900K6A95/000001_1783555579.jpg",
    "buyUrl": "https://www.momoshop.com.tw/product/13254194",
    "buyLabel": "momo購物",
    "specs": [
      "27 吋",
      "4K/UHD",
      "160Hz",
      "IPS",
      "USB-C",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "XG27UCG 是 4K 高刷新與 USB-C 的高 CP 組合，適合遊戲主機與 PC 共用。",
    "pros": [
      "4K 160Hz 價格很強",
      "USB-C 加分",
      "ASUS 售後熟悉"
    ],
    "cons": [
      "庫存很少",
      "若不用 4K 可省預算買 2K"
    ],
    "bestFor": "PS5/PC 雙用、想要 4K 高刷新的人。",
    "recommendation": "4K 電競 CP 推薦：規格對價格非常漂亮，有貨時值得優先看。",
    "score": 90,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "4K",
      "160Hz",
      "USB-C"
    ],
    "releaseDate": "2024-11",
    "historicalLow": {
      "status": "found",
      "amount": 7980,
      "currency": "TWD",
      "converted": 7980,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1283958095&cgp=7980",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【ASUS 華碩】ROG Strix XG27UCG 27型 4K 160Hz 電競螢幕",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【ASUS 華碩】ROG Strix XG27UCG 27型 4K 160Hz 電競螢幕」最低價為 NT$7,980，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ASUS ROG Strix XG27UCG\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ASUS%20ROG%20Strix%20XG27UCG%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"ASUS ROG Strix XG27UCG\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ASUS%20ROG%20Strix%20XG27UCG%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"ASUS ROG Strix XG27UCG\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22ASUS%20ROG%20Strix%20XG27UCG%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"ASUS ROG Strix XG27UCG\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22ASUS%20ROG%20Strix%20XG27UCG%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"ASUS ROG Strix XG27UCG\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22ASUS%20ROG%20Strix%20XG27UCG%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-acer-predator-x27u-x2",
    "category": "monitor",
    "rank": 16,
    "budget": "mid",
    "channel": "tw",
    "brand": "Acer",
    "model": "Predator X27U X2",
    "name": "27 型 2K 240Hz OLED 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 10999,
      "converted": 10999,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABELA900IX8MS/000001_1754810956.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABEL-A900IX8MS",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "OLED",
      "240Hz",
      "0.03ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Predator X27U X2 把 OLED 240Hz 價格壓到中階帶，是想入門 OLED 電競的好選項。",
    "pros": [
      "OLED 價格漂亮",
      "240Hz 適合競技",
      "Acer Predator 系列"
    ],
    "cons": [
      "OLED 需注意烙印保養",
      "亮度與保固條件要核對"
    ],
    "bestFor": "想用較低預算體驗 OLED 遊戲畫面的人。",
    "recommendation": "OLED 入門推薦：價格比多數 OLED 螢幕低，畫質升級感明顯。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "240Hz",
      "電競"
    ],
    "releaseDate": "2025-07-23",
    "historicalLow": {
      "status": "found",
      "amount": 10999,
      "currency": "TWD",
      "converted": 10999,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1251611819&cgp=10999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：ACER 宏碁 Predator X27U X2 電競螢幕(27型/2K/240Hz/0.03ms/HDMI/DP/OLED)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / ACER 宏碁 Predator X27U X2 電競螢幕(27型/2K/240Hz/0.03ms/HDMI/DP/OLED)」最低價為 NT$10,999，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Acer Predator X27U X2\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Acer%20Predator%20X27U%20X2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Acer Predator X27U X2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Acer%20Predator%20X27U%20X2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Acer Predator X27U X2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Acer%20Predator%20X27U%20X2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Acer Predator X27U X2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Acer%20Predator%20X27U%20X2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Acer Predator X27U X2\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Acer%20Predator%20X27U%20X2%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-aoc-q27g4zmn",
    "category": "monitor",
    "rank": 17,
    "budget": "mid",
    "channel": "tw",
    "brand": "AOC",
    "model": "Q27G4ZMN",
    "name": "27 型 2K 240Hz Mini LED 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 8588,
      "converted": 8588,
      "confidence": "PChome 2026-08-20 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABTAA900IGUKX/000001_1742198541.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABTA-A900IGUKX",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "Mini LED",
      "240Hz",
      "1ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "AOC Q27G4ZMN 用 Mini LED 補足 HDR 與亮度，相比 OLED 少了烙印顧慮。",
    "pros": [
      "Mini LED 規格稀有",
      "2K 240Hz",
      "價格合理"
    ],
    "cons": [
      "Mini LED 分區與調校需看實測",
      "品牌售後不如一線大廠安心"
    ],
    "bestFor": "想要高亮 HDR 與高刷新，但擔心 OLED 烙印的人。",
    "recommendation": "Mini LED 推薦：規格完整，適合 OLED 以外的高階電競候選。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mini LED",
      "240Hz",
      "HDR"
    ],
    "releaseDate": "2025-06-27",
    "historicalLow": {
      "status": "found",
      "amount": 8158,
      "currency": "TWD",
      "converted": 8158,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1272943474&cgp=8588",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【AOC】Q27G4ZMN 2K MINI LED 電競顯示器(27型/QHD/240Hz/1ms/Adaptive Sync)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【AOC】Q27G4ZMN 2K MINI LED 電競顯示器(27型/QHD/240Hz/1ms/Adaptive Sync)」最低價為 NT$8,158，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"AOC Q27G4ZMN\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22AOC%20Q27G4ZMN%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"AOC Q27G4ZMN\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22AOC%20Q27G4ZMN%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"AOC Q27G4ZMN\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22AOC%20Q27G4ZMN%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"AOC Q27G4ZMN\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22AOC%20Q27G4ZMN%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"AOC Q27G4ZMN\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22AOC%20Q27G4ZMN%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-samsung-oled-g5",
    "category": "monitor",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "Samsung",
    "model": "S27FG502SC Odyssey OLED G5",
    "name": "27 型 2K 180Hz QD-OLED Odyssey G5",
    "price": {
      "currency": "TWD",
      "amount": 11900,
      "converted": 11900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABONA900JTSHY/000001_1773805820.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABON-A900JTSHY",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "QD-OLED",
      "180Hz",
      "0.03ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Odyssey OLED G5 是三星 OLED 電競入門款，重點在 OLED 對比與反應速度。",
    "pros": [
      "QD-OLED 畫質",
      "三星品牌",
      "價格相對高階 OLED 可接受"
    ],
    "cons": [
      "180Hz 不如 240/360Hz",
      "OLED 保養與保固需確認"
    ],
    "bestFor": "看重遊戲畫面、電影黑位與 OLED 對比的人。",
    "recommendation": "三星 OLED 推薦：畫質取向比純規格 Hz 更吸引人。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "Samsung",
      "遊戲"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 10490,
      "currency": "TWD",
      "converted": 10490,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=539716640&cgp=10490",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Samsung 27吋 Odyssey OLED G5 平面電競顯示器 S27FG502SC 廠商直送",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - 蝦皮直營 - 3C家電館 / Samsung 27吋 Odyssey OLED G5 平面電競顯示器 S27FG502SC 廠商直送」最低價為 NT$10,490，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung S27FG502SC Odyssey OLED G5\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20S27FG502SC%20Odyssey%20OLED%20G5%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung S27FG502SC Odyssey OLED G5\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20S27FG502SC%20Odyssey%20OLED%20G5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung S27FG502SC Odyssey OLED G5\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20S27FG502SC%20Odyssey%20OLED%20G5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung S27FG502SC Odyssey OLED G5\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20S27FG502SC%20Odyssey%20OLED%20G5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung S27FG502SC Odyssey OLED G5\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20S27FG502SC%20Odyssey%20OLED%20G5%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-gigabyte-m27up",
    "category": "monitor",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "GIGABYTE",
    "model": "M27UP",
    "name": "27 型雙模 4K 160Hz / FHD 320Hz 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 8990,
      "converted": 8990,
      "confidence": "PChome 2026-08-17 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABHUA900J98GT/000001_1758009805.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABHU-A900J98GT",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "4K/UHD",
      "160Hz",
      "FHD 320Hz",
      "KVM",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "M27UP 主打雙模，日常用 4K、競技可切 FHD 320Hz，還有 KVM 對多設備友善。",
    "pros": [
      "雙模很實用",
      "KVM 對筆電/桌機友善",
      "價格合理"
    ],
    "cons": [
      "雙模使用情境較特定",
      "色彩專業用途仍要校色"
    ],
    "bestFor": "同時接桌機與筆電、遊戲與工作切換的人。",
    "recommendation": "多設備推薦：KVM 與雙模規格讓它很適合複合工作桌。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "4K",
      "雙模",
      "KVM"
    ],
    "releaseDate": "2025-10-24",
    "historicalLow": {
      "status": "found",
      "amount": 8540,
      "currency": "TWD",
      "converted": 8540,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1272303868&cgp=8990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【GIGABYTE 技嘉】27型 M27UP 雙模4K 電競螢幕(IPS/3840x2160/G-SYNC/1ms/HDMI/DP/內建喇叭)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【GIGABYTE 技嘉】27型 M27UP 雙模4K 電競螢幕(IPS/3840x2160/G-SYNC/1ms/HDMI/DP/內建喇叭)」最低價為 NT$8,540，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"GIGABYTE M27UP\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22GIGABYTE%20M27UP%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"GIGABYTE M27UP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22GIGABYTE%20M27UP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"GIGABYTE M27UP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22GIGABYTE%20M27UP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"GIGABYTE M27UP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22GIGABYTE%20M27UP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"GIGABYTE M27UP\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22GIGABYTE%20M27UP%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-benq-ma270u",
    "category": "monitor",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "BenQ",
    "model": "MA270U",
    "name": "27 型 4K Mac 外接護眼螢幕",
    "price": {
      "currency": "TWD",
      "amount": 16888,
      "converted": 16888,
      "confidence": "PChome 2026-08-18 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABF1A900HW6JB/000001_1754623836.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABF1-A900HW6JB",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "4K/UHD",
      "IPS",
      "USB-C",
      "Mac 外接",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "BenQ MA270U 專為 Mac 外接與護眼場景設計，色彩與亮度一致性比低價 4K 更有保障。",
    "pros": [
      "Mac 外接友善",
      "4K 細緻",
      "BenQ 護眼與售後"
    ],
    "cons": [
      "價格高於一般 4K",
      "非高刷新遊戲螢幕"
    ],
    "bestFor": "MacBook 使用者、設計文書與長時間辦公。",
    "recommendation": "Mac 外接推薦：不想研究相容性與色彩調校時，MA 系列省心。",
    "score": 89,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mac",
      "4K",
      "USB-C"
    ],
    "releaseDate": "2026-02-15",
    "historicalLow": {
      "status": "found",
      "amount": 14144,
      "currency": "TWD",
      "converted": 14144,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1245308262&cgp=14144",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：BenQ MA270U 27型 4K 最適合MAC外接護眼螢幕(IPS/HDMI/USB-C/HDR400)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / BenQ MA270U 27型 4K 最適合MAC外接護眼螢幕(IPS/HDMI/USB-C/HDR400)」最低價為 NT$14,144，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"BenQ MA270U\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22BenQ%20MA270U%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"BenQ MA270U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22BenQ%20MA270U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"BenQ MA270U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22BenQ%20MA270U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"BenQ MA270U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22BenQ%20MA270U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"BenQ MA270U\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22BenQ%20MA270U%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-benq-ew3290u",
    "category": "monitor",
    "rank": 21,
    "budget": "mid",
    "channel": "tw",
    "brand": "BenQ",
    "model": "EW3290U",
    "name": "32 型 4K USB-C 影音護眼螢幕",
    "price": {
      "currency": "TWD",
      "amount": 14888,
      "converted": 14888,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABF1A900I90FS/000001_1736480988.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABF1-A900I90FS",
    "buyLabel": "PChome",
    "specs": [
      "32 吋",
      "4K/UHD",
      "IPS",
      "USB-C",
      "影音護眼",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "EW3290U 適合需要大畫面 4K、追劇與文書兼用的人，32 吋比 27 吋更舒展。",
    "pros": [
      "32 吋 4K 好用",
      "BenQ 護眼",
      "USB-C 對筆電方便"
    ],
    "cons": [
      "桌深不足會太大",
      "高刷新遊戲不是主軸"
    ],
    "bestFor": "影音、文書、程式多視窗與筆電外接。",
    "recommendation": "大尺寸 4K 推薦：需要空間與舒適度時，32 吋比 27 吋更有感。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "32吋",
      "4K",
      "USB-C"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 14144,
      "currency": "TWD",
      "converted": 14144,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1237705567&cgp=14144",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：BenQ EW3290U 32型 IPS 4K 16:9 60Hz影音護眼螢幕 (HDMI/DP/Type-C)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / BenQ EW3290U 32型 IPS 4K 16:9 60Hz影音護眼螢幕 (HDMI/DP/Type-C)」最低價為 NT$14,144，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"BenQ EW3290U\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22BenQ%20EW3290U%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"BenQ EW3290U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22BenQ%20EW3290U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"BenQ EW3290U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22BenQ%20EW3290U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"BenQ EW3290U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22BenQ%20EW3290U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"BenQ EW3290U\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22BenQ%20EW3290U%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-dell-u2724d",
    "category": "monitor",
    "rank": 22,
    "budget": "mid",
    "channel": "tw",
    "brand": "Dell",
    "model": "U2724D-4Y",
    "name": "27 型 2K IPS USB-C UltraSharp 螢幕",
    "price": {
      "currency": "TWD",
      "amount": 12888,
      "converted": 12888,
      "confidence": "PChome 2026-08-20 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABOMA900GS1DN/000001_1699955230.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABOM-A900GS1DN",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "IPS",
      "USB-C",
      "四年保",
      "重量：4.49 kg（僅面板/VESA 掛載）"
    ],
    "description": "Dell U2724D 重點是商務/創作可靠度、端口與保固，不靠高刷新取勝。",
    "pros": [
      "UltraSharp 系列",
      "四年保固",
      "辦公與創作穩"
    ],
    "cons": [
      "同價位可買 4K 或 OLED",
      "遊戲規格普通"
    ],
    "bestFor": "公司採購、文字工作、設計入門與多螢幕辦公。",
    "recommendation": "商務主力推薦：長期穩定與保固，比規格表更重要時選它。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "UltraSharp",
      "商務",
      "四年保"
    ],
    "releaseDate": "2023-11-09",
    "historicalLow": {
      "status": "found",
      "amount": 12243,
      "currency": "TWD",
      "converted": 12243,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1207733401&cgp=12888",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【DELL 戴爾】U2724D-4Y 27型 IPS 2K 窄邊美型螢幕(Type-C/樞紐旋轉/TUV護眼)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【DELL 戴爾】U2724D-4Y 27型 IPS 2K 窄邊美型螢幕(Type-C/樞紐旋轉/TUV護眼)」最低價為 NT$12,243，最低點日期 2026-05-08。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dell U2724D-4Y\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dell%20U2724D-4Y%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dell U2724D-4Y\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dell%20U2724D-4Y%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Dell U2724D-4Y\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Dell%20U2724D-4Y%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Dell U2724D-4Y\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Dell%20U2724D-4Y%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Dell U2724D-4Y\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Dell%20U2724D-4Y%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-dell-u2725qe",
    "category": "monitor",
    "rank": 23,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dell",
    "model": "U2725QE-4Y",
    "name": "27 型 4K Thunderbolt USB-C UltraSharp 螢幕",
    "price": {
      "currency": "TWD",
      "amount": 27888,
      "converted": 27888,
      "confidence": "PChome 2026-08-24 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABOLA900IIFQG/000001_1744702043.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABOL-A900IIFQG",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "4K/UHD",
      "IPS",
      "Thunderbolt",
      "USB-C",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "U2725QE 是高階生產力螢幕，Thunderbolt/USB-C 擴充與保固適合筆電工作站。",
    "pros": [
      "端口擴充完整",
      "4K 細緻",
      "Dell 保固與商務支援"
    ],
    "cons": [
      "價格高",
      "非遊戲取向"
    ],
    "bestFor": "Mac/Windows 筆電工作站、擴充座需求與商務環境。",
    "recommendation": "高階生產力推薦：把螢幕當 Dock 與長期工作中樞時才值得。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "4K",
      "Thunderbolt",
      "商務"
    ],
    "releaseDate": "2025-02-25",
    "historicalLow": {
      "status": "found",
      "amount": 24888,
      "currency": "TWD",
      "converted": 24888,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1247096815&cgp=27888",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【DELL 戴爾】U2725QE-4Y 27吋顯示器(IPS Black/4K UHD/3840x2160/HDMI/DisplayPort/Thunderbolt 4/USB-C)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【DELL 戴爾】U2725QE-4Y 27吋顯示器(IPS Black/4K UHD/3840x2160/HDMI/DisplayPort/Thunderbolt 4/USB-C)」最低價為 NT$24,888，最低點日期 2025-09-17。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 U2725QE 使用者回報明顯線圈噪音，常在低亮度、待機或低供電負載時較嚴重。",
      "issues": [
        {
          "title": "低亮度或低負載時線圈噪音",
          "detail": "部分換貨機仍有噪音；將亮度提高至約 80% 以上或提高 Thunderbolt／USB-C 供電負載可能減輕，但不是所有案例都有效。對高頻聲敏感者應在退換貨期內測試不同亮度、待機與供電情境。",
          "reportCount": 8,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Dell U2725QE owners - questions about coil whine",
              "url": "https://www.reddit.com/r/Monitors/comments/1lo952w/dell_u2725qe_owners_questions_about_coil_whine/"
            },
            {
              "platform": "Dell Community",
              "title": "U2725QE, coil whine",
              "url": "https://www.dell.com/community/en/conversations/monitors/u2725qe-coil-whine/685a37a316a3d04bdeebe2f9"
            },
            {
              "platform": "Dell Community",
              "title": "U2725QE, coil whine, #2",
              "url": "https://www.dell.com/community/en/conversations/monitors/u2725qe-coil-whine-2/6978bb81c678d13f02c5ab24"
            },
            {
              "platform": "Dell Community",
              "title": "Spulenfiepen DELL U2725QE",
              "url": "https://www.dell.com/community/de/conversations/displays/spulenfiepen-dell-u2725qe/67ce8da099b1bd4691924eb2"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "monitor-asus-xg32ucwg",
    "category": "monitor",
    "rank": 25,
    "budget": "premium",
    "channel": "tw",
    "brand": "ASUS",
    "model": "XG32UCWG",
    "name": "32 型 OLED 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 21212,
      "converted": 21212,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABW5A900JNAEB/000001_1768452551.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABW5-A900JNAEB",
    "buyLabel": "PChome",
    "specs": [
      "32 吋",
      "OLED",
      "電競",
      "ASUS",
      "大尺寸",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "XG32UCWG 適合想要 32 吋 OLED 大畫面，但預算低於頂級 Alienware/ROG 旗艦的人。",
    "pros": [
      "32 吋 OLED",
      "ASUS 售後熟悉",
      "價格相對高階 OLED 可接受"
    ],
    "cons": [
      "規格細節需看頁面確認",
      "OLED 需保養"
    ],
    "bestFor": "單機遊戲、影音與桌面大畫面玩家。",
    "recommendation": "32 吋 OLED 推薦：價格比頂級款低，畫質升級感仍明顯。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "32吋",
      "ASUS"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 20888,
      "currency": "TWD",
      "converted": 20888,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=638526256&cgp=20888",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：ASUS華碩 32型 ROG Strix OLED XG32UCWG 電競螢幕",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - eclife良興購物網 / ASUS華碩 32型 ROG Strix OLED XG32UCWG 電競螢幕」最低價為 NT$20,888，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ASUS XG32UCWG\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ASUS%20XG32UCWG%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"ASUS XG32UCWG\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ASUS%20XG32UCWG%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"ASUS XG32UCWG\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22ASUS%20XG32UCWG%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"ASUS XG32UCWG\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22ASUS%20XG32UCWG%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"ASUS XG32UCWG\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22ASUS%20XG32UCWG%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-asus-xg27aqdmes",
    "category": "monitor",
    "rank": 26,
    "budget": "mid",
    "channel": "tw",
    "brand": "ASUS",
    "model": "ROG Strix XG27AQDMES",
    "name": "27 型 2K 240Hz QD-OLED 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 10888,
      "converted": 10888,
      "confidence": "momo購物 2026-07-15 晚間頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABKBA900K092J/000001_1778642752.jpg",
    "buyUrl": "https://www.momoshop.com.tw/product/14831560",
    "buyLabel": "momo購物",
    "specs": [
      "27 吋",
      "2K/QHD",
      "QD-OLED",
      "240Hz",
      "0.03ms",
      "重量：4.9 kg（不含底座）"
    ],
    "description": "XG27AQDMES 是 ASUS 27 吋 OLED 電競的甜蜜價格點，通路庫存也比許多 OLED 更好。",
    "pros": [
      "OLED 240Hz 價格漂亮",
      "ASUS/ROG 品牌",
      "庫存相對足"
    ],
    "cons": [
      "OLED 保養仍需注意",
      "比 2K IPS 貴一倍左右"
    ],
    "bestFor": "想升級 OLED、又不想上兩三萬元旗艦的人。",
    "recommendation": "OLED CP 推薦：ROG 品牌加上萬元出頭價格，很適合升級黨。",
    "score": 89,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "240Hz",
      "ROG"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-17",
      "note": "原 PChome XG27AQDMES 史低頁於 2026-07-17 雖回應 HTTP 200，但商品 API 已回傳空白商品，無法再重現同型號與 NT$10,343 證據；其他可信通路只確認目前新品價，未找到可替代的公開史低證據，因此誠實改為找不到。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ASUS ROG Strix XG27AQDMES\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ASUS%20ROG%20Strix%20XG27AQDMES%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"ASUS ROG Strix XG27AQDMES\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ASUS%20ROG%20Strix%20XG27AQDMES%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"ASUS ROG Strix XG27AQDMES\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22ASUS%20ROG%20Strix%20XG27AQDMES%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"ASUS ROG Strix XG27AQDMES\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22ASUS%20ROG%20Strix%20XG27AQDMES%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"ASUS ROG Strix XG27AQDMES\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22ASUS%20ROG%20Strix%20XG27AQDMES%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-msi-271qrx",
    "category": "monitor",
    "rank": 27,
    "budget": "premium",
    "channel": "tw",
    "brand": "MSI",
    "model": "MPG 271QRX",
    "name": "27 型 WQHD 360Hz QD-OLED 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 18900,
      "converted": 18900,
      "confidence": "Yahoo購物中心 2026-08-24 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC1ZA900HE04M/000001_1757303897.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/MSI%E5%BE%AE%E6%98%9F-MPG-271QRX-QD-OLED-27%E5%9E%8B-2K-360Hz-HDR%E9%9B%BB%E7%AB%B6%E8%9E%A2%E5%B9%95-10958143.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "27 吋",
      "2K/QHD",
      "QD-OLED",
      "360Hz",
      "MSI MPG",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "MSI MPG 271QRX 是 360Hz OLED 競技款，適合追求畫質與高刷新都要的人。",
    "pros": [
      "360Hz OLED",
      "MPG 高階系列",
      "適合競技與畫質兼顧"
    ],
    "cons": [
      "價格高",
      "庫存少",
      "Reddit 與 MSI 官方論壇已有達門檻的隨機短暫黑屏回報；現有證據不足以判定單一根因"
    ],
    "bestFor": "高階 FPS/MOBA 玩家與 OLED 競技需求。",
    "recommendation": "360Hz OLED 推薦：比 240Hz 更進一步，適合高階玩家；購買後應在退換貨期內以實際顯卡、線材與更新率長時間測試。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "360Hz",
      "MSI"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 17955,
      "currency": "TWD",
      "converted": 17955,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1256819502&cgp=17955",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：MSI微星 MPG 271QRX QD-OLED 27型 2K 360Hz HDR電競螢幕",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / MSI微星 MPG 271QRX QD-OLED 27型 2K 360Hz HDR電競螢幕」最低價為 NT$17,955，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-08-18",
      "summary": "多位 MPG 271QRX 使用者跨站回報，使用中會隨機短暫黑屏，約一至數秒後自行恢復。",
      "issues": [
        {
          "title": "隨機短暫黑屏後自行恢復",
          "detail": "回報涵蓋不同更新率、DisplayPort 與 HDMI 情境，部分換線、更新韌體或調整系統設定後仍發生；現有證據不足以判定單一根因。建議在退換貨期內以實際顯卡、線材、HDR 與更新率長時間測試。",
          "reportCount": 9,
          "sources": [
            {
              "platform": "Reddit",
              "title": "MSI MPG 271QRX random black screens when at 240hz",
              "url": "https://www.reddit.com/r/MSI_Gaming/comments/1b6fmgi/msi_mpg_271qrx_random_black_screens_when_at_240hz/"
            },
            {
              "platform": "MSI Forum",
              "title": "MSI MPG 271QRX display keeps going black for a sec and then turns back on",
              "url": "https://forum-en.msi.com/index.php?threads/msi-mpg-271qrx-display-keeps-going-black-for-a-sec-and-then-turns-back-on.397545/"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "monitor-gigabyte-mo27q2a",
    "category": "monitor",
    "rank": 28,
    "budget": "mid",
    "channel": "tw",
    "brand": "GIGABYTE",
    "model": "MO27Q2A",
    "name": "27 型 280Hz QD-OLED 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 14990,
      "converted": 14990,
      "confidence": "PChome 2026-07-28 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABW6A900JKTWS/000001_1783559760.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABW6-A900JKTWS",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "QD-OLED",
      "280Hz",
      "HDR400",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "技嘉 MO27Q2A 介於萬元 OLED 與高階 360Hz 之間，價格與規格很平衡。",
    "pros": [
      "280Hz OLED",
      "內建喇叭",
      "價格中段"
    ],
    "cons": [
      "庫存少",
      "OLED 保固細節要確認"
    ],
    "bestFor": "想要比 240Hz 更高、但不想上 360/480Hz 價格的人。",
    "recommendation": "OLED 中價推薦：規格完整，價格比頂級競技 OLED 友善。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "280Hz",
      "GIGABYTE"
    ],
    "releaseDate": "2025-06-18",
    "historicalLow": {
      "status": "found",
      "amount": 14111,
      "currency": "TWD",
      "converted": 14111,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1261618529&cgp=14666",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【GIGABYTE 技嘉】MO27Q2A 27型 280Hz QD-OLED 電競螢幕",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【GIGABYTE 技嘉】MO27Q2A 27型 280Hz QD-OLED 電競螢幕」最低價為 NT$14,111，最低點日期 2026-06-01。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"GIGABYTE MO27Q2A\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22GIGABYTE%20MO27Q2A%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"GIGABYTE MO27Q2A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22GIGABYTE%20MO27Q2A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"GIGABYTE MO27Q2A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22GIGABYTE%20MO27Q2A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"GIGABYTE MO27Q2A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22GIGABYTE%20MO27Q2A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"GIGABYTE MO27Q2A\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22GIGABYTE%20MO27Q2A%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-viewsonic-vg2719u",
    "category": "monitor",
    "rank": 29,
    "budget": "value",
    "channel": "tw",
    "brand": "ViewSonic",
    "model": "VG2719U-4K",
    "name": "27 型 4K IPS USB-C 人體工學螢幕",
    "price": {
      "currency": "TWD",
      "amount": 7999,
      "converted": 7999,
      "confidence": "PChome 2026-08-21 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABEZA900K1N6R/000001_1782816950.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABEZ-A900K1N6R",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "4K/UHD",
      "IPS",
      "USB-C",
      "人體工學支架",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "VG2719U-4K 用低價給到 4K、USB-C 與人體工學支架，工作用途 CP 值突出。",
    "pros": [
      "4K 價格低",
      "USB-C",
      "支架功能較完整"
    ],
    "cons": [
      "刷新率非電競",
      "品牌調校需看實測"
    ],
    "bestFor": "文書、程式、多視窗與筆電外接。",
    "recommendation": "4K CP 推薦：想要便宜 4K USB-C 工作螢幕，可以優先看它。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "4K",
      "USB-C",
      "人體工學"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 6890,
      "currency": "TWD",
      "converted": 6890,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DSABEZ-A900K1N6R",
      "sourceTitle": "PChome 24h 購物：ViewSonic VG2719U-4K 人體工學螢幕(27型/4K/HDMI/DP/喇叭/IPS/Type-C)",
      "evidenceSnippet": "PChome 24h 購物於 2026-07-23 顯示同型號可信新品公開價 NT$6,890，低於既有史低 NT$6,925。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-23",
      "note": "採用 PChome 24h 購物當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ViewSonic VG2719U-4K\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ViewSonic%20VG2719U-4K%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"ViewSonic VG2719U-4K\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ViewSonic%20VG2719U-4K%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"ViewSonic VG2719U-4K\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22ViewSonic%20VG2719U-4K%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"ViewSonic VG2719U-4K\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22ViewSonic%20VG2719U-4K%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"ViewSonic VG2719U-4K\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22ViewSonic%20VG2719U-4K%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-viewsonic-vx2740d",
    "category": "monitor",
    "rank": 30,
    "budget": "mid",
    "channel": "tw",
    "brand": "ViewSonic",
    "model": "VX2740D-4K",
    "name": "27 型 4K 160Hz IPS 雙模電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 8999,
      "converted": 8999,
      "confidence": "PChome 2026-08-24 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABOIA900K129O/000001_1779250013.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABOI-A900K129O",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "4K/UHD",
      "160Hz",
      "IPS",
      "雙模",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "VX2740D-4K 以八千元內切入 4K 160Hz，對遊戲主機與 PC 玩家很有吸引力。",
    "pros": [
      "4K 160Hz 價格低",
      "ViewSonic 通路常見",
      "適合遊戲主機"
    ],
    "cons": [
      "高階 HDR 不是重點",
      "支架與色彩需看頁面"
    ],
    "bestFor": "PS5/PC 雙用與入門 4K 高刷新玩家。",
    "recommendation": "4K 遊戲 CP 推薦：價格接近中階 2K，但解析度升一級。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "4K",
      "160Hz",
      "遊戲主機"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 7588,
      "currency": "TWD",
      "converted": 7588,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1273971362&cgp=7988",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【ViewSonic 優派】VX2740D-4K 27型4K 160Hz/FHD 320Hz雙模電競螢幕(G-Sync/1ms/相容PS5與Xbox)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【ViewSonic 優派】VX2740D-4K 27型4K 160Hz/FHD 320Hz雙模電競螢幕(G-Sync/1ms/相容PS5與Xbox)」最低價為 NT$7,588，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ViewSonic VX2740D-4K\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ViewSonic%20VX2740D-4K%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"ViewSonic VX2740D-4K\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ViewSonic%20VX2740D-4K%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"ViewSonic VX2740D-4K\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22ViewSonic%20VX2740D-4K%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"ViewSonic VX2740D-4K\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22ViewSonic%20VX2740D-4K%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"ViewSonic VX2740D-4K\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22ViewSonic%20VX2740D-4K%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-philips-27m2n3500pf",
    "category": "monitor",
    "rank": 31,
    "budget": "value",
    "channel": "tw",
    "brand": "Philips",
    "model": "27M2N3500PF",
    "name": "27 型 QHD 260Hz IPS 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 5088,
      "converted": 5088,
      "confidence": "PChome 2026-08-20 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABQIA900J82S0/000001_1757486726.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABQI-A900J82S0",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "260Hz",
      "IPS",
      "0.3ms",
      "重量：3.69 kg（不含底座）"
    ],
    "description": "Philips 27M2N3500PF 是五千元級 2K 260Hz，適合看重刷新率又想買知名品牌的人。",
    "pros": [
      "260Hz 價格好",
      "2K 規格完整",
      "品牌辨識度高"
    ],
    "cons": [
      "高階 HDR 與支架不是亮點",
      "與 AOC 同規格要比保固"
    ],
    "bestFor": "FPS/MOBA、預算五千上下的玩家。",
    "recommendation": "高刷新平價推薦：品牌與規格都不錯，適合和 AOC/技嘉一起比。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "260Hz",
      "Philips"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 4833,
      "currency": "TWD",
      "converted": 4833,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1269024144&cgp=5088",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Philips 飛利浦】27M2N3500PF 27型 IPS QHD 16:9 260Hz電競螢幕(0.3ms/G-SYNC/HDMI)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Philips 飛利浦】27M2N3500PF 27型 IPS QHD 16:9 260Hz電競螢幕(0.3ms/G-SYNC/HDMI)」最低價為 NT$4,833，最低點日期 2026-05-13。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips 27M2N3500PF\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%2027M2N3500PF%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips 27M2N3500PF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%2027M2N3500PF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Philips 27M2N3500PF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Philips%2027M2N3500PF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Philips 27M2N3500PF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Philips%2027M2N3500PF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Philips 27M2N3500PF\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Philips%2027M2N3500PF%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-aoc-q27g40xmn",
    "category": "monitor",
    "rank": 32,
    "budget": "mid",
    "channel": "tw",
    "brand": "AOC",
    "model": "Q27G40XMN",
    "name": "27 型 2K 180Hz Mini LED 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 7588,
      "converted": 7588,
      "confidence": "PChome 2026-08-20 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABTAA900JBMD6/000001_1759809326.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABTA-A900JBMD6",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "Mini LED",
      "180Hz",
      "1ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Q27G40XMN 是較便宜的 2K Mini LED 選項，適合想要亮度與分區控光的人。",
    "pros": [
      "Mini LED 價格低",
      "2K 180Hz",
      "HDR 潛力較好"
    ],
    "cons": [
      "實際分區效果需看評測",
      "不是 OLED 黑位"
    ],
    "bestFor": "想要亮度與 HDR，但不想買 OLED 的玩家。",
    "recommendation": "Mini LED 入門推薦：比 OLED 便宜且少烙印顧慮。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mini LED",
      "2K",
      "HDR"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 7208,
      "currency": "TWD",
      "converted": 7208,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DSABTA-A900JBMD6",
      "sourceTitle": "PChome 24h 購物：AOC Q27G40XMN 電競螢幕(27型/2K/180Hz/1ms/Mini-LED)",
      "evidenceSnippet": "PChome 24h 購物於 2026-07-28 顯示同型號可信新品公開價 NT$7,208，低於既有史低 NT$7,398。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-28",
      "note": "採用 PChome 24h 購物當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 Q27G40XMN 使用者反映，在 VRR、高更新率或遊戲幀率變動時會出現畫面閃爍。",
      "issues": [
        {
          "title": "VRR 或高更新率下畫面閃爍",
          "detail": "案例發生條件不完全相同，部分可透過 V-Sync、鎖幀或降至 120Hz 改善；此現象也可能受顯示卡驅動及 VA 面板 VRR 特性影響，不應直接視為已確認的硬體故障。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "Best Buy",
              "title": "AOC Q27G40XMN customer reviews",
              "url": "https://www.bestbuy.com/site/reviews/aoc-27-q27g40xmn-mini-led-qhd-180hz-gaming-monitor-black/6617199"
            },
            {
              "platform": "Reddit",
              "title": "Has anyone gotten the AOC Q27G40XMN yet and have any feedback?",
              "url": "https://www.reddit.com/r/Monitors/comments/1k5y8zq/has_anyone_gotten_the_aoc_q27g40xmn_yet_and_have/"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "monitor-samsung-oled-g6-500",
    "category": "monitor",
    "rank": 33,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "S27FG602SC Odyssey OLED G6",
    "name": "27 型 2K 500Hz OLED Odyssey G6",
    "price": {
      "currency": "TWD",
      "amount": 19900,
      "converted": 19900,
      "confidence": "PChome 2026-08-03 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABSLA900JNWTU/000001_1768983299.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABSL-A900JNWTU",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "OLED",
      "500Hz",
      "HDMI 2.1",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Odyssey OLED G6 500Hz 是競技旗艦取向，刷新率比多數 OLED 競品更激進。",
    "pros": [
      "500Hz 極高刷新",
      "OLED 反應速度",
      "Samsung 旗艦規格"
    ],
    "cons": [
      "價格高",
      "需要高階顯卡才吃滿"
    ],
    "bestFor": "頂級 FPS 玩家與高階桌機。",
    "recommendation": "競技旗艦推薦：只有真的追 500Hz 才需要它，否則 240Hz OLED 更划算。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "500Hz",
      "旗艦"
    ],
    "releaseDate": "2025-08-13",
    "historicalLow": {
      "status": "found",
      "amount": 19900,
      "currency": "TWD",
      "converted": 19900,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DSABSL-A900JNWTU",
      "sourceTitle": "PChome 24h 購物：SAMSUNG S27FG602SC Odyssey OLED G6 電競螢幕(27型/2K/500Hz/HDMI2.1/0.03ms/OLED)",
      "evidenceSnippet": "PChome 24h 購物於 2026-08-03 顯示同型號可信新品公開價 NT$19,900，低於既有史低 NT$24,900。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-08-03",
      "note": "採用 PChome 24h 購物當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung S27FG602SC Odyssey OLED G6\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20S27FG602SC%20Odyssey%20OLED%20G6%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung S27FG602SC Odyssey OLED G6\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20S27FG602SC%20Odyssey%20OLED%20G6%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung S27FG602SC Odyssey OLED G6\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20S27FG602SC%20Odyssey%20OLED%20G6%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung S27FG602SC Odyssey OLED G6\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20S27FG602SC%20Odyssey%20OLED%20G6%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung S27FG602SC Odyssey OLED G6\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20S27FG602SC%20Odyssey%20OLED%20G6%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-dell-aw3225qf",
    "category": "monitor",
    "rank": 34,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dell",
    "model": "Alienware AW3225QF",
    "name": "32 型 4K 240Hz OLED Alienware 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 33888,
      "converted": 33888,
      "confidence": "PChome 2026-08-24 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABOKA900HB1B5/000001_1710325731.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABOK-A900HB1B5",
    "buyLabel": "PChome",
    "specs": [
      "32 吋",
      "4K/UHD",
      "OLED",
      "240Hz",
      "HDMI 2.1",
      "重量：6 kg（僅面板，VESA 掛載）"
    ],
    "description": "Alienware AW3225QF 是 32 吋 4K OLED 旗艦代表，畫質、刷新率與保固都屬高階。",
    "pros": [
      "4K OLED 畫質頂級",
      "240Hz",
      "Dell/Alienware 保固較安心"
    ],
    "cons": [
      "價格高",
      "需要大桌深與高階顯卡"
    ],
    "bestFor": "高階遊戲、影音與想一次到位的玩家。",
    "recommendation": "4K OLED 旗艦推薦：預算足夠且顯卡夠強時，這台很有代表性。",
    "score": 91,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "4K",
      "OLED",
      "Alienware"
    ],
    "releaseDate": "2024-02",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Dell Alienware AW3225QF: 樂天市場 - 良興EcLife購物網 良興EcLife購物網 DELL 32型 Alienware QD-OLED 4K 曲面遊戲專用顯示器 AW3225QF 非採用通路或含排除條件；LBJ Dell Alienware AW3225QF: 良興購物網 【良興購物網】DELL 32型 Alienware QD-OLED 4K 曲面遊戲專用顯示器 AW3225QF 非採用通路或含排除條件；LBJ Dell Alienware AW3225QF: 全聯線上購 【全聯線上購】【DELL 戴爾】DELL 32型 Alienware QD-OLED 4K 曲面遊戲專用顯示器 AW3225QF(DELL 32型 Alienware QD-OLED 4K 曲面遊戲專用顯示器 AW3225QF) 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 AW3225QF 使用者回報早期包裝保護材會摩擦 OLED 面板，開箱即出現污痕、蜂巢壓痕或微刮痕。",
      "issues": [
        {
          "title": "包裝保護材造成面板污痕或微刮痕",
          "detail": "部分痕跡無法完全擦除且換貨後仍可能出現；收貨時應在強光下立即檢查整片面板，發現刮痕便在退換貨期內處理。",
          "reportCount": 11,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Poll: Does Your New Alienware AW3225QF Have Micro scratches / Smudges due to Bubble Wrap Packaging?",
              "url": "https://old.reddit.com/r/OLED_Gaming/comments/1au0vt8/poll_does_your_new_alienware_aw3225qf_have_micro/"
            },
            {
              "platform": "Dell Community",
              "title": "AW3225QF, screen scratches",
              "url": "https://www.dell.com/community/en/conversations/alienware-desktops/aw3225qf-screen-scratches/65cfe5920217a51eb1a3fde2"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "monitor-acer-ed343cur-j0",
    "category": "monitor",
    "rank": 36,
    "budget": "value",
    "channel": "tw",
    "brand": "Acer",
    "model": "ED343CUR J0",
    "name": "34 型 21:9 UWQHD 120Hz 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 5499,
      "converted": 5499,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABTEA900JE4G6/000001_1761734629.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABTE-A900JE4G6",
    "buyLabel": "PChome",
    "specs": [
      "34 吋",
      "3440x1440 / 21:9",
      "120Hz",
      "VA",
      "曲面",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Acer ED343CUR J0 是低預算切入 34 吋 UWQHD 寬螢幕的選項，適合想要左右並排視窗又不想花太多的人。",
    "pros": [
      "34 吋 UWQHD 價格低",
      "120Hz 比一般辦公螢幕順",
      "21:9 適合多視窗工作"
    ],
    "cons": [
      "VA 面板拖影與可視角不如 IPS/OLED",
      "支架與色彩功能偏基本"
    ],
    "bestFor": "預算有限、想先試 21:9 寬螢幕做文書、程式與一般遊戲的人。",
    "recommendation": "入門寬螢幕推薦：價格非常甜，但若很在意動態殘影可往 AOC 180Hz 或 OLED 款升級。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "21:9",
      "UWQHD",
      "曲面"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5224,
      "currency": "TWD",
      "converted": 5224,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1273683689&cgp=5499",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Acer 宏碁】ED343CUR J0 34型 VA 2K 21:9 120Hz曲面電競螢幕(傾斜/喇叭/1ms)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Acer 宏碁】ED343CUR J0 34型 VA 2K 21:9 120Hz曲面電競螢幕(傾斜/喇叭/1ms)」最低價為 NT$5,224，最低點日期 2026-06-19。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Acer ED343CUR J0\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Acer%20ED343CUR%20J0%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Acer ED343CUR J0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Acer%20ED343CUR%20J0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Acer ED343CUR J0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Acer%20ED343CUR%20J0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Acer ED343CUR J0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Acer%20ED343CUR%20J0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Acer ED343CUR J0\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Acer%20ED343CUR%20J0%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-gigabyte-gs34wqca",
    "category": "monitor",
    "rank": 37,
    "budget": "value",
    "channel": "tw",
    "brand": "GIGABYTE",
    "model": "GS34WQCA",
    "name": "34 型 21:9 WQHD 120Hz 1500R 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 7190,
      "converted": 7190,
      "confidence": "PChome 2026-08-20 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABSZA900JOMA1/000001_1769572714.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABSZ-A900JOMA1",
    "buyLabel": "PChome",
    "specs": [
      "34 吋",
      "WQHD / 21:9",
      "120Hz",
      "1500R",
      "120% sRGB",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "GIGABYTE GS34WQCA 以 34 吋 21:9、120Hz 和 1500R 曲率切進低價寬螢幕帶，工作和輕遊戲都能用。",
    "pros": [
      "價格仍在六千元附近",
      "1500R 曲率適合近距離寬螢幕",
      "技嘉通路常見"
    ],
    "cons": [
      "120Hz 不算高刷旗艦",
      "VA 面板需接受暗部拖影風險"
    ],
    "bestFor": "想要平價 34 吋曲面、偶爾玩遊戲、桌深不大的使用者。",
    "recommendation": "平價曲面候選：和 Acer 接近，但技嘉品牌與色域標示較完整，適合比較售後與庫存後選。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "21:9",
      "WQHD",
      "曲面"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5990,
      "currency": "TWD",
      "converted": 5990,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282347662&cgp=5990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【GIGABYTE 技嘉】GS34WQCA 34型WQHD VA 16:9 120Hz電競螢幕(1ms/FreeSync/HDMI/DP)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【GIGABYTE 技嘉】GS34WQCA 34型WQHD VA 16:9 120Hz電競螢幕(1ms/FreeSync/HDMI/DP)」最低價為 NT$5,990，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"GIGABYTE GS34WQCA\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22GIGABYTE%20GS34WQCA%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"GIGABYTE GS34WQCA\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22GIGABYTE%20GS34WQCA%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"GIGABYTE GS34WQCA\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22GIGABYTE%20GS34WQCA%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"GIGABYTE GS34WQCA\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22GIGABYTE%20GS34WQCA%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"GIGABYTE GS34WQCA\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22GIGABYTE%20GS34WQCA%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-msi-pro-mp341cqw-e12",
    "category": "monitor",
    "rank": 38,
    "budget": "value",
    "channel": "tw",
    "brand": "MSI",
    "model": "PRO MP341CQW E12",
    "name": "34 型 UWQHD 120Hz 曲面美型螢幕",
    "price": {
      "currency": "TWD",
      "amount": 6588,
      "converted": 6588,
      "confidence": "Yahoo購物中心 2026-07-21 頁面公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABPFA900K0AJK/000001_1778658221.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/MSI%E5%BE%AE%E6%98%9FPRO-MP341CQW-E12-34%E5%9E%8B-VA-UWQHD-120Hz-%E6%9B%B2%E9%9D%A2%E8%9E%A2%E5%B9%95-1ms-12002868.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "34 吋",
      "UWQHD",
      "120Hz",
      "1500R",
      "內建喇叭",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "MSI PRO MP341CQW E12 偏工作和娛樂兼用，34 吋 21:9 加上內建喇叭，桌面可以少一點線材。",
    "pros": [
      "34 吋 UWQHD 價格合理",
      "內建喇叭方便臨時使用",
      "MSI EyesErgo 護眼定位明確"
    ],
    "cons": [
      "不是高階電競或 OLED",
      "內建喇叭音質不會取代外接喇叭"
    ],
    "bestFor": "工作為主、偶爾娛樂，想要一台簡單大視野螢幕的人。",
    "recommendation": "工作寬螢幕推薦：比純電競款安靜，適合辦公桌和居家工作混用。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "21:9",
      "UWQHD",
      "文書"
    ],
    "releaseDate": "2026-04-09",
    "historicalLow": {
      "status": "found",
      "amount": 5988,
      "currency": "TWD",
      "converted": 5988,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1271534656&cgp=6288",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【MSI 微星】MSI 微星 PRO MP341CQW E12 曲面電腦螢幕 34吋 120Hz 1ms 2k 內建喇叭 電腦螢幕 白色",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【MSI 微星】MSI 微星 PRO MP341CQW E12 曲面電腦螢幕 34吋 120Hz 1ms 2k 內建喇叭 電腦螢幕 白色」最低價為 NT$5,988，最低點日期 2026-06-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"MSI PRO MP341CQW E12\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22MSI%20PRO%20MP341CQW%20E12%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"MSI PRO MP341CQW E12\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22MSI%20PRO%20MP341CQW%20E12%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"MSI PRO MP341CQW E12\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22MSI%20PRO%20MP341CQW%20E12%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"MSI PRO MP341CQW E12\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22MSI%20PRO%20MP341CQW%20E12%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"MSI PRO MP341CQW E12\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22MSI%20PRO%20MP341CQW%20E12%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-aoc-cu34g4",
    "category": "monitor",
    "rank": 39,
    "budget": "value",
    "channel": "tw",
    "brand": "AOC",
    "model": "CU34G4",
    "name": "34 型 WQHD 180Hz 1500R 曲面電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 6888,
      "converted": 6888,
      "confidence": "PChome 2026-08-07 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABQRA900JPRWC/000001_1770367990.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABQR-A900JPRWC",
    "buyLabel": "PChome",
    "specs": [
      "34 吋",
      "3440x1440 / 21:9",
      "180Hz",
      "0.5ms MPRT",
      "1500R",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "AOC CU34G4 把 34 吋 21:9 與 180Hz 放在相對親民價格，是寬螢幕遊戲 CP 值很強的候選。",
    "pros": [
      "180Hz 比多數平價 34 吋更順",
      "價格仍不到萬元",
      "21:9 適合沉浸遊戲與多視窗"
    ],
    "cons": [
      "VA 面板不是每個人都喜歡",
      "HDR 與色彩不是高階主打"
    ],
    "bestFor": "想買 34 吋寬螢幕打遊戲，又不想上 OLED 價格的人。",
    "recommendation": "寬螢幕 CP 推薦：價格、刷新率與尺寸最均衡，是多數人先看的 34 吋選項。",
    "score": 90,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "21:9",
      "180Hz",
      "CP 值"
    ],
    "releaseDate": "2025-01-20",
    "historicalLow": {
      "status": "found",
      "amount": 6488,
      "currency": "TWD",
      "converted": 6488,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DSABQR-A900JPRWC",
      "sourceTitle": "PChome 24h 購物：AOC CU34G4 曲面電競螢幕(34型/WQHD/180Hz/0.5ms/VA)",
      "evidenceSnippet": "PChome 24h 購物於 2026-07-23 顯示同型號可信新品公開價 NT$6,488，低於既有史低 NT$6,543。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-23",
      "note": "採用 PChome 24h 購物當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"AOC CU34G4\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22AOC%20CU34G4%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"AOC CU34G4\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22AOC%20CU34G4%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"AOC CU34G4\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22AOC%20CU34G4%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"AOC CU34G4\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22AOC%20CU34G4%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"AOC CU34G4\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22AOC%20CU34G4%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-acer-ed340cur-x0",
    "category": "monitor",
    "rank": 40,
    "budget": "value",
    "channel": "tw",
    "brand": "Acer",
    "model": "ED340CUR X0",
    "name": "34 型 UWQHD 200Hz 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 6999,
      "converted": 6999,
      "confidence": "PChome 2026-08-11 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABTEA900JSV4E/000001_1773130247.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABTE-A900JSV4E",
    "buyLabel": "PChome",
    "specs": [
      "34 吋",
      "UWQHD",
      "200Hz",
      "1ms",
      "曲面 VA",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Acer ED340CUR X0 在低價寬螢幕裡給到 200Hz，適合比一般 120Hz 更在意滑順度的玩家。",
    "pros": [
      "200Hz 規格亮眼",
      "價格仍低",
      "34 吋 UWQHD 視野好"
    ],
    "cons": [
      "VA 面板動態表現需實際感受",
      "支架與 USB-C 等生產力功能較少"
    ],
    "bestFor": "想在七千元上下買到 34 吋高刷新寬螢幕的人。",
    "recommendation": "高刷平價候選：如果比起品牌調校更重視刷新率，這台比 120Hz 款更有吸引力。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "21:9",
      "200Hz",
      "電競"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5499,
      "currency": "TWD",
      "converted": 5499,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1275471429&cgp=6999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Acer 宏碁】ED340CUR X0 34型 VA 2K 21:9 200Hz曲面電競螢幕(1500R/傾斜/喇叭/HDR10/1ms)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Acer 宏碁】ED340CUR X0 34型 VA 2K 21:9 200Hz曲面電競螢幕(1500R/傾斜/喇叭/HDR10/1ms)」最低價為 NT$5,499，最低點日期 2026-05-21。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Acer ED340CUR X0\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Acer%20ED340CUR%20X0%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Acer ED340CUR X0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Acer%20ED340CUR%20X0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Acer ED340CUR X0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Acer%20ED340CUR%20X0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Acer ED340CUR X0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Acer%20ED340CUR%20X0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Acer ED340CUR X0\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Acer%20ED340CUR%20X0%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-asus-xg34wcdms",
    "category": "monitor",
    "rank": 41,
    "budget": "premium",
    "channel": "tw",
    "brand": "ASUS",
    "model": "ROG Strix XG34WCDMS",
    "name": "34 型 UWQHD 280Hz QD-OLED 曲面電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 26888,
      "converted": 26888,
      "confidence": "PChome 2026-08-10 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABKBA900K0YA0/000001_1779246107.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABKB-A900K0YA0",
    "buyLabel": "PChome",
    "specs": [
      "34 吋",
      "3440x1440",
      "280Hz",
      "QD-OLED",
      "USB-C",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "ROG Strix XG34WCDMS 是高階 34 吋 QD-OLED 寬螢幕，主打極快反應、280Hz 與 USB-C。",
    "pros": [
      "QD-OLED 對比與反應速度優秀",
      "280Hz 高刷新率",
      "ROG 售後與 OLED 保固資訊較完整"
    ],
    "cons": [
      "價格明顯高於 VA 寬螢幕",
      "OLED 仍需注意長時間靜態畫面"
    ],
    "bestFor": "高階遊戲、影音與想要 21:9 OLED 沉浸感的人。",
    "recommendation": "34 吋 OLED 推薦：比 49 吋容易放進一般桌面，畫質與刷新率都很強。",
    "score": 91,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "OLED",
      "280Hz",
      "USB-C"
    ],
    "releaseDate": "2026-05-07",
    "historicalLow": {
      "status": "found",
      "amount": 25543,
      "currency": "TWD",
      "converted": 25543,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DSABKB-A900K0YA0",
      "sourceTitle": "PChome 商品頁：34 型 UWQHD 280Hz QD-OLED 曲面電競螢幕（ROG Strix XG34WCDMS）",
      "evidenceSnippet": "PChome 同型號新品頁於 2026-07-14 顯示公開售價 NT$25,543，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-14",
      "note": "採用同型號新品頁可公開查核售價作為本次觀測到的最低價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ASUS ROG Strix XG34WCDMS\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ASUS%20ROG%20Strix%20XG34WCDMS%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"ASUS ROG Strix XG34WCDMS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ASUS%20ROG%20Strix%20XG34WCDMS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"ASUS ROG Strix XG34WCDMS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22ASUS%20ROG%20Strix%20XG34WCDMS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"ASUS ROG Strix XG34WCDMS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22ASUS%20ROG%20Strix%20XG34WCDMS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"ASUS ROG Strix XG34WCDMS\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22ASUS%20ROG%20Strix%20XG34WCDMS%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-samsung-s34dg852sc",
    "category": "monitor",
    "rank": 42,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "S34DG852SC",
    "name": "34 型 OLED G8 21:9 175Hz 曲面智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 24900,
      "converted": 24900,
      "confidence": "Yahoo購物中心 2026-07-14 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABUFA900K03Q2/000001_1778565462.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/SAMSUNG%E4%B8%89%E6%98%9F-34%E5%90%8B-Odyssey-OLED-G8-%E6%9B%B2%E9%9D%A2%E9%9B%BB%E7%AB%B6%E9%A1%AF%E7%A4%BA%E5%99%A8-G85SD-S34DG8-12090389.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "34 吋",
      "UWQHD / 21:9",
      "OLED",
      "175Hz",
      "智慧聯網",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Samsung OLED G8 34 吋結合 21:9、OLED 與智慧聯網功能，適合同時看重遊戲與影音串流的人。",
    "pros": [
      "OLED 畫質與反應速度強",
      "智慧聯網功能可獨立看影音",
      "外型與抗眩光處理佳"
    ],
    "cons": [
      "價格高於一般 34 吋",
      "175Hz 不如最新 240/280Hz OLED"
    ],
    "bestFor": "桌面想兼顧 PC 遊戲、主機與影音串流的人。",
    "recommendation": "影音型 OLED 推薦：如果會把螢幕當小電視用，OLED G8 的智慧功能很加分。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "OLED",
      "智慧聯網",
      "21:9"
    ],
    "releaseDate": "2024",
    "historicalLow": {
      "status": "found",
      "amount": 24153,
      "currency": "TWD",
      "converted": 24153,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=566204153&cgp=24153",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Samsung 34吋 Odyssey OLED G8 曲面電競顯示器 S34DG852SC 廠商直送",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - 蝦皮直營 - 3C家電館 / Samsung 34吋 Odyssey OLED G8 曲面電競顯示器 S34DG852SC 廠商直送」最低價為 NT$24,153，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung S34DG852SC\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20S34DG852SC%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung S34DG852SC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20S34DG852SC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung S34DG852SC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20S34DG852SC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung S34DG852SC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20S34DG852SC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung S34DG852SC\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20S34DG852SC%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-aoc-pd34",
    "category": "monitor",
    "rank": 43,
    "budget": "premium",
    "channel": "tw",
    "brand": "AOC",
    "model": "PD34",
    "name": "34 型 Porsche Design 240Hz QD-OLED 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 31988,
      "converted": 31988,
      "confidence": "PChome 2026-08-24 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABQRA900K5BI4/000001_1782298311.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABQR-A900K5BI4",
    "buyLabel": "PChome",
    "specs": [
      "34 吋",
      "WQHD / 21:9",
      "QD-OLED",
      "240Hz",
      "1800R",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "AOC PD34 是 Porsche Design 外觀的 34 吋 QD-OLED，規格和設計感都走高階路線。",
    "pros": [
      "QD-OLED 240Hz",
      "設計感強",
      "21:9 遊戲沉浸感佳"
    ],
    "cons": [
      "價格高",
      "設計溢價不是每個人都需要"
    ],
    "bestFor": "想要高階 OLED，又在意螢幕外觀和桌面質感的人。",
    "recommendation": "設計型 OLED 候選：規格很完整，但若只看 CP 值，ASUS/AOC 平價 34 吋會更理性。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "QD-OLED",
      "240Hz",
      "設計"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 28488,
      "currency": "TWD",
      "converted": 28488,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DSABQR-A900K5BI4",
      "sourceTitle": "PChome 商品頁：34 型 Porsche Design 240Hz QD-OLED 曲面螢幕（PD34）",
      "evidenceSnippet": "PChome 同型號新品頁於 2026-07-14 顯示公開售價 NT$28,488，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-14",
      "note": "採用同型號新品頁可公開查核售價作為本次觀測到的最低價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"AOC PD34\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22AOC%20PD34%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"AOC PD34\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22AOC%20PD34%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"AOC PD34\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22AOC%20PD34%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"AOC PD34\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22AOC%20PD34%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"AOC PD34\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22AOC%20PD34%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-samsung-s49fg916e",
    "category": "monitor",
    "rank": 44,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "S49FG916E",
    "name": "49 型 Odyssey G9 Dual QHD 144Hz 32:9 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 22900,
      "converted": 22900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABW5A900K1VVE/000001_1779865665.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABW5-A900K1VVE",
    "buyLabel": "PChome",
    "specs": [
      "49 吋",
      "5120x1440 / 32:9",
      "144Hz",
      "1000R",
      "HDR600",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Samsung Odyssey G9 49 吋相當於兩台 27 吋 QHD 並排，適合大量視窗、剪輯時間軸與沉浸遊戲。",
    "pros": [
      "32:9 大視野非常適合多工",
      "Dual QHD 比 3840x1080 細緻",
      "價格比 OLED G9 低很多"
    ],
    "cons": [
      "桌深與桌寬需求高",
      "建議搭配高承重懸臂支架或穩固原廠腳架"
    ],
    "bestFor": "想用一台螢幕取代雙 27 吋的人，尤其是剪輯、交易、多文件與模擬遊戲。",
    "recommendation": "49 吋 CP 推薦：Dual QHD 加上 144Hz，價格比 OLED 版本親切，是超寬大螢幕甜蜜點。",
    "score": 90,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "49吋",
      "32:9",
      "Dual QHD"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 22900,
      "currency": "TWD",
      "converted": 22900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282285706&cgp=22900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Samsung 三星 三星 49吋 S49FG916E Odyssey G9 曲面電競顯示器",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / Samsung 三星 三星 49吋 S49FG916E Odyssey G9 曲面電競顯示器」最低價為 NT$22,900，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung S49FG916E\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20S49FG916E%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung S49FG916E\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20S49FG916E%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung S49FG916E\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20S49FG916E%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung S49FG916E\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20S49FG916E%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung S49FG916E\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20S49FG916E%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-samsung-s49dg932scxzw",
    "category": "monitor",
    "rank": 45,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "S49DG932SCXZW",
    "name": "49 型 Odyssey OLED G9 Dual QHD 240Hz 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 36900,
      "converted": 36900,
      "confidence": "PChome 2026-08-25 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM10A900HZCPE/000001_1781766568.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM10-A900HZCPE",
    "buyLabel": "PChome",
    "specs": [
      "49 吋",
      "5120x1440 / 32:9",
      "OLED",
      "240Hz",
      "0.03ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Odyssey OLED G9 把 49 吋 32:9、OLED 與 240Hz 結合，是追求沉浸感和畫質的高階選擇。",
    "pros": [
      "49 吋 OLED 沉浸感極強",
      "240Hz 與 0.03ms 反應快速",
      "可取代雙螢幕配置"
    ],
    "cons": [
      "價格高",
      "大型 OLED 更需要注意靜態畫面與支架承重"
    ],
    "bestFor": "高階遊戲、模擬器、影音創作和想要一台超寬 OLED 主螢幕的人。",
    "recommendation": "49 吋 OLED 推薦：畫質與速度都頂，但務必確認桌深與支架至少能承受螢幕重量。",
    "score": 89,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "49吋",
      "OLED",
      "32:9"
    ],
    "releaseDate": "2024",
    "historicalLow": {
      "status": "found",
      "amount": 34900,
      "currency": "TWD",
      "converted": 34900,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMBM10-A900HZCPE",
      "sourceTitle": "PChome 24h 購物：【限時快閃】SAMSUNG 三星 49吋 Odyssey OLED G9 曲面電競螢幕 S49DG932SCXZW",
      "evidenceSnippet": "PChome 24h 購物於 2026-08-21 顯示同型號可信新品公開價 NT$34,900，低於既有史低 NT$34,999。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-08-21",
      "note": "採用 PChome 24h 購物當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung S49DG932SCXZW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20S49DG932SCXZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung S49DG932SCXZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20S49DG932SCXZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung S49DG932SCXZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20S49DG932SCXZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung S49DG932SCXZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20S49DG932SCXZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung S49DG932SCXZW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20S49DG932SCXZW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-aoc-ag456uczd",
    "category": "monitor",
    "rank": 46,
    "budget": "premium",
    "channel": "tw",
    "brand": "AOC",
    "model": "AG456UCZD",
    "name": "45 型 21:9 OLED 240Hz 800R 曲面電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 38888,
      "converted": 38888,
      "confidence": "momo購物 2026-07-13 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABW9A900K5BHI/000001_1782298284.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0001232/goodsDetail/TP00012320000398",
    "buyLabel": "momo購物",
    "specs": [
      "45 吋",
      "21:9",
      "OLED",
      "240Hz",
      "800R",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "AOC AG456UCZD 是 45 吋 21:9 OLED 大曲面螢幕，視野比 34 吋更開闊，但桌面占用也明顯增加。",
    "pros": [
      "45 吋 21:9 沉浸感強",
      "OLED 240Hz",
      "800R 曲率適合包覆視野"
    ],
    "cons": [
      "桌深、坐距與支架承重都要仔細確認",
      "文字細緻度不一定適合所有文書工作"
    ],
    "bestFor": "以遊戲、影音和沉浸感為主，桌面空間充足的人。",
    "recommendation": "45 吋 OLED 候選：遊戲爽度很高，但如果主要寫字或程式，建議先比較 34/49 吋解析度密度。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "45吋",
      "OLED",
      "大螢幕"
    ],
    "releaseDate": "2024-03-26",
    "historicalLow": {
      "status": "found",
      "amount": 37777,
      "currency": "TWD",
      "converted": 37777,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1264935872&cgp=38888",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【AOC】AOC AG456UCZD 45型 OLED 2K 240Hz 21:9 曲面電競螢幕(0.01ms/HDMI/HDR)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【AOC】AOC AG456UCZD 45型 OLED 2K 240Hz 21:9 曲面電競螢幕(0.01ms/HDMI/HDR)」最低價為 NT$37,777，最低點日期 2026-05-16。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"AOC AG456UCZD\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22AOC%20AG456UCZD%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"AOC AG456UCZD\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22AOC%20AG456UCZD%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"AOC AG456UCZD\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22AOC%20AG456UCZD%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"AOC AG456UCZD\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22AOC%20AG456UCZD%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"AOC AG456UCZD\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22AOC%20AG456UCZD%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-lg-45gx90sa",
    "category": "monitor",
    "rank": 47,
    "budget": "premium",
    "channel": "tw",
    "brand": "LG",
    "model": "45GX90SA-B",
    "name": "45 型 UltraGear 21:9 OLED 240Hz 智慧曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 38005,
      "converted": 38005,
      "confidence": "LG 官方商城 2026-07-28 指定商品公開結帳 92 折價（企業客戶／員購除外）"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC1ZA900J732D/000001_1780394558.jpg",
    "buyUrl": "https://www.lg.com/tw/monitors/ultragear-gaming/45gx90sa-b/",
    "buyLabel": "LG 官方商城",
    "specs": [
      "45 吋",
      "WQHD / 21:9",
      "OLED",
      "240Hz",
      "webOS",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "LG 45GX90SA-B 是 45 吋 OLED 21:9 智慧電競螢幕，內建 webOS，兼顧 PC、主機與影音用途。",
    "pros": [
      "45 吋 OLED 畫面震撼",
      "webOS 可獨立使用串流",
      "LG OLED 調校與品牌口碑強"
    ],
    "cons": [
      "價格高",
      "大尺寸 21:9 對桌深與坐距要求高"
    ],
    "bestFor": "想把工作桌變成遊戲/影音主戰場，又喜歡 LG OLED 生態的人。",
    "recommendation": "智慧 45 吋推薦：如果會常看影音，LG webOS 比純 PC 螢幕更方便。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "45吋",
      "OLED",
      "智慧聯網"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 37900,
      "currency": "TWD",
      "converted": 37900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=638516659&cgp=38990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：LG 樂金 45吋 45GX90SA-B WQHD 240Hz OLED曲面智慧電競螢幕 公司貨 廠商直送",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - 蝦皮直營 - 3C家電館 / LG 樂金 45吋 45GX90SA-B WQHD 240Hz OLED曲面智慧電競螢幕 公司貨 廠商直送」最低價為 NT$37,900，最低點日期 2026-02-02。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG 45GX90SA-B\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%2045GX90SA-B%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG 45GX90SA-B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%2045GX90SA-B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG 45GX90SA-B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%2045GX90SA-B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG 45GX90SA-B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%2045GX90SA-B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG 45GX90SA-B\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%2045GX90SA-B%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-samsung-s57cg952nc",
    "category": "monitor",
    "rank": 48,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "S57CG952NC",
    "name": "57 型 Odyssey Neo G9 Dual UHD 240Hz Mini LED 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 66500,
      "converted": 66500,
      "confidence": "PChome 2026-08-23 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM10A900GQLSE/000001_1783054239.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM10-A900GQLSE",
    "buyLabel": "PChome",
    "specs": [
      "57 吋",
      "7680x2160 / 32:9",
      "Mini LED",
      "240Hz",
      "1000R",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Odyssey Neo G9 57 吋是 Dual UHD 超寬旗艦，解析度與尺寸都非常吃桌面、顯卡與支架承重。",
    "pros": [
      "57 吋 Dual UHD 工作區巨大",
      "Mini LED 與 HDR 規格高",
      "240Hz 旗艦定位"
    ],
    "cons": [
      "價格高且非常吃顯卡",
      "支架需特別確認 57 吋與重量支援"
    ],
    "bestFor": "頂級模擬器、金融交易、多工工作站與有足夠桌深的大桌使用者。",
    "recommendation": "超大寬螢幕旗艦：只有真的需要 57 吋 Dual UHD 才值得，懸臂支架建議看 27kg/30kg 級距。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "57吋",
      "32:9",
      "Mini LED"
    ],
    "releaseDate": "2023-10",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-11",
      "note": "未找到台灣型號 S57CG952NC 可公開驗證的可信新品史低；已排除只確認 G95NC 同系列且未明確聲稱歷史最低的海外促銷。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung S57CG952NC\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20S57CG952NC%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung S57CG952NC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20S57CG952NC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung S57CG952NC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20S57CG952NC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung S57CG952NC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20S57CG952NC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung S57CG952NC\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20S57CG952NC%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-dell-u3425we",
    "category": "monitor",
    "rank": 49,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dell",
    "model": "U3425WE-5Y",
    "name": "34 型 21:9 IPS Black 120Hz USB-C 商務曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 39888,
      "converted": 39888,
      "confidence": "PChome 2026-08-24 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABOMA900HIJN3/000001_1716881117.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABOM-A900HIJN3",
    "buyLabel": "PChome",
    "specs": [
      "34 吋",
      "3440x1440 / 21:9",
      "IPS",
      "120Hz",
      "Type-C",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Dell U3425WE 是偏商務生產力的 34 吋寬螢幕，重點在 USB-C、保固與辦公穩定性。",
    "pros": [
      "Dell UltraSharp 商務口碑佳",
      "USB-C 與辦公連接性完整",
      "IPS 類型更適合文字與色彩穩定"
    ],
    "cons": [
      "價格遠高於平價 34 吋 VA",
      "不是高階電競取向"
    ],
    "bestFor": "MacBook/筆電外接、長時間文書、程式與會議使用者。",
    "recommendation": "商務寬螢幕推薦：如果你把穩定、保固、Type-C 擺在遊戲規格前面，這台很合理。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "21:9",
      "USB-C",
      "商務"
    ],
    "releaseDate": "2024",
    "historicalLow": {
      "status": "found",
      "amount": 37893,
      "currency": "TWD",
      "converted": 37893,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DSABOM-A900HIJN3",
      "sourceTitle": "PChome 商品頁：34 型 21:9 IPS Black 120Hz USB-C 商務曲面螢幕（U3425WE-5Y）",
      "evidenceSnippet": "PChome 同型號新品頁於 2026-07-14 顯示公開售價 NT$37,893，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-14",
      "note": "採用同型號新品頁可公開查核售價作為本次觀測到的最低價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dell U3425WE-5Y\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dell%20U3425WE-5Y%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dell U3425WE-5Y\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dell%20U3425WE-5Y%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Dell U3425WE-5Y\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Dell%20U3425WE-5Y%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Dell U3425WE-5Y\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Dell%20U3425WE-5Y%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Dell U3425WE-5Y\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Dell%20U3425WE-5Y%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-msi-mpg-491cqp",
    "category": "monitor",
    "rank": 50,
    "budget": "premium",
    "channel": "tw",
    "brand": "MSI",
    "model": "MPG 491CQP",
    "name": "49 型 DQHD QD-OLED 144Hz Type-C 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 32900,
      "converted": 32900,
      "confidence": "PChome 2026-08-24 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABPDA900H9PEB/000001_1709257135.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABPD-A900H9PEB",
    "buyLabel": "PChome",
    "specs": [
      "49 吋",
      "5120x1440 / 32:9",
      "QD-OLED",
      "144Hz",
      "Type-C 90W",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "MSI MPG 491CQP 是 49 吋 QD-OLED 超寬螢幕，帶 Type-C 供電與 KVM，工作與遊戲都能整合。",
    "pros": [
      "49 吋 QD-OLED 價格具競爭力",
      "Type-C 90W 與 KVM 對筆電族方便",
      "32:9 可取代雙螢幕"
    ],
    "cons": [
      "144Hz 不如 240Hz OLED G9",
      "仍需高承重支架或穩固大桌"
    ],
    "bestFor": "同時接桌機與筆電、需要 32:9 大工作區與 OLED 畫質的人。",
    "recommendation": "49 吋生產力 OLED 推薦：比 Samsung OLED G9 多了明確 Type-C/KVM 賣點，辦公整合更方便。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "49吋",
      "QD-OLED",
      "Type-C"
    ],
    "releaseDate": "2024-03-21",
    "historicalLow": {
      "status": "found",
      "amount": 31255,
      "currency": "TWD",
      "converted": 31255,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1216821164&cgp=32900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【MSI 微星】MPG 491CQP QD-OLED 49型 DQHD 144Hz 電競曲面顯示器(0.03ms/ClearMR 8000/HDR400/1800R)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【MSI 微星】MPG 491CQP QD-OLED 49型 DQHD 144Hz 電競曲面顯示器(0.03ms/ClearMR 8000/HDR400/1800R)」最低價為 NT$31,255，最低點日期 2026-05-13。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"MSI MPG 491CQP\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22MSI%20MPG%20491CQP%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"MSI MPG 491CQP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22MSI%20MPG%20491CQP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"MSI MPG 491CQP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22MSI%20MPG%20491CQP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"MSI MPG 491CQP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22MSI%20MPG%20491CQP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"MSI MPG 491CQP\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22MSI%20MPG%20491CQP%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-costco-philips-27e1n1100d",
    "category": "monitor",
    "rank": 51,
    "budget": "value",
    "channel": "tw",
    "brand": "Philips",
    "model": "27E1N1100D",
    "name": "27吋 FHD IPS 100Hz 電腦螢幕",
    "price": {
      "currency": "TWD",
      "amount": 2699,
      "converted": 2699,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h19/hcf/277970938331166.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0001232/goodsDetail/TP00012320000478",
    "buyLabel": "momo購物",
    "specs": [
      "27 吋 IPS",
      "1920 x 1080",
      "100Hz",
      "HDMI 1.4 / DVI / VGA",
      "重量：6.6kg",
      "Costco 評價 4.5 / 79 則"
    ],
    "description": "Philips 27E1N1100D 是 Costco 低價 27 吋 IPS 螢幕，適合文書、雙螢幕與基本居家辦公。",
    "pros": [
      "價格低",
      "Costco 79 則評論、4.5 分"
    ],
    "cons": [
      "FHD 解析度在 27 吋較粗",
      "非高階色彩或電競定位"
    ],
    "bestFor": "文書、視訊、雙螢幕與預算優先的人。",
    "recommendation": "好市多補充推薦：27E1N1100D 是 Costco 低價文書螢幕代表，重量資訊也清楚。",
    "score": 83,
    "voltage": "100-240VAC 50-60Hz；台灣通路",
    "warranty": "依 Costco 好市多商品頁、品牌 3 年保固與退貨政策",
    "tags": [
      "Costco",
      "27吋",
      "文書"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2699,
      "currency": "TWD",
      "converted": 2699,
      "sourceUrl": "https://www.momoshop.com.tw/TP/TP0001232/goodsDetail/TP00012320000478",
      "sourceTitle": "momo購物 商品頁：【Philips 飛利浦】Philips 飛利浦 27E1N1100D 27型 IPS 1ms 電腦螢幕 促",
      "evidenceSnippet": "momo購物 原始商品頁／API 於 2026-07-11 顯示同型號新品公開價 2699 TWD，低於既有可驗證史低。",
      "sourceKind": "retailer_page",
      "confidence": "high",
      "checkedAt": "2026-07-11",
      "note": "採用同型號、同尺寸／容量／規格的可信新品公開價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips 27E1N1100D\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%2027E1N1100D%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips 27E1N1100D\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%2027E1N1100D%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Philips 27E1N1100D\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Philips%2027E1N1100D%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Philips 27E1N1100D\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Philips%2027E1N1100D%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Philips 27E1N1100D\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Philips%2027E1N1100D%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-costco-acer-ed270-p0",
    "category": "monitor",
    "rank": 52,
    "budget": "value",
    "channel": "tw",
    "brand": "Acer",
    "model": "ED270 P0",
    "name": "Nitro 27 吋 FHD 曲面電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 3499,
      "converted": 3499,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h51/h54/386020452630558.jpg",
    "buyUrl": "https://www.costco.com.tw/Digital-Mobile/Laptops-Computers/Monitors/Acer-Nitro-27-inch-Gaming-Curved-Monitor-ED270-P0/p/156545",
    "buyLabel": "Costco 好市多",
    "specs": [
      "27 吋 VA 曲面",
      "1920 x 1080",
      "重量：5.5公斤",
      "3 年保固",
      "Costco 評價 4.8 / 74 則"
    ],
    "description": "Costco 評價不錯的螢幕候選，依尺寸、解析度、重量與支架承重補進比較。",
    "pros": [
      "價格與評價具參考性",
      "重量資訊清楚"
    ],
    "cons": [
      "裝懸臂支架前需確認 VESA 與重量",
      "低價款面板與解析度有取捨"
    ],
    "bestFor": "想在好市多買文書、遊戲或 4K 螢幕的人",
    "recommendation": "好市多補充推薦：Nitro 27 吋 FHD 曲面電競螢幕 評價不錯，補進電腦螢幕分類作為 Costco 候選比較。",
    "score": 84,
    "voltage": "依 Costco 商品頁與電源供應器標示；螢幕需確認 VESA 與支架承重",
    "warranty": "依 Costco 好市多商品頁與品牌 3 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "27吋",
      "曲面",
      "FHD"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2799,
      "currency": "TWD",
      "converted": 2799,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1262943902&cgp=3499",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】Acer Nitro 27吋 電競曲面螢幕 ED270 P0 Acer Nitro 27 inch Gaming Curved Monitor ED270 P0",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】Acer Nitro 27吋 電競曲面螢幕 ED270 P0 Acer Nitro 27 inch Gaming Curved Monitor ED270 P0」最低價為 NT$2,799，最低點日期 2026-04-13。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Acer ED270 P0\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Acer%20ED270%20P0%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Acer ED270 P0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Acer%20ED270%20P0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Acer ED270 P0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Acer%20ED270%20P0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Acer ED270 P0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Acer%20ED270%20P0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Acer ED270 P0\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Acer%20ED270%20P0%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-costco-samsung-s32d706eac",
    "category": "monitor",
    "rank": 53,
    "budget": "mid",
    "channel": "tw",
    "brand": "Samsung",
    "model": "S32D706EAC",
    "name": "ViewFinity S7 32 吋 UHD 平面顯示器",
    "price": {
      "currency": "TWD",
      "amount": 8199,
      "converted": 8199,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/hac/h33/274515179241502.jpg",
    "buyUrl": "https://www.costco.com.tw/Digital-Mobile/Laptops-Computers/Monitors/Samsung-ViewFinity-S7-32-inch-UHD-Monitor-S32D706EAC/p/147917",
    "buyLabel": "Costco 好市多",
    "specs": [
      "32 吋 VA",
      "4K (3840 x 2160)",
      "重量：8公斤",
      "AC 100-240V",
      "Costco 評價 4.5 / 31 則"
    ],
    "description": "Costco 評價不錯的螢幕候選，依尺寸、解析度、重量與支架承重補進比較。",
    "pros": [
      "價格與評價具參考性",
      "重量資訊清楚"
    ],
    "cons": [
      "裝懸臂支架前需確認 VESA 與重量",
      "低價款面板與解析度有取捨"
    ],
    "bestFor": "想在好市多買文書、遊戲或 4K 螢幕的人",
    "recommendation": "好市多補充推薦：ViewFinity S7 32 吋 UHD 平面顯示器 評價不錯，補進電腦螢幕分類作為 Costco 候選比較。",
    "score": 87,
    "voltage": "AC 100-240V；螢幕需確認 VESA 與支架承重",
    "warranty": "依 Costco 好市多商品頁與品牌 3 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "32吋",
      "4K",
      "生產力"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 8199,
      "currency": "TWD",
      "converted": 8199,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1232574103&cgp=8199",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】Samsung ViewFinity S7 32吋 UHD 高解析度平面顯示器 S32D706EAC Samsung ViewFinity S7 32 inch UHD Monitor S32D706EAC",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】Samsung ViewFinity S7 32吋 UHD 高解析度平面顯示器 S32D706EAC Samsung ViewFinity S7 32 inch UHD Monitor S32D706EAC」最低價為 NT$8,199，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung S32D706EAC\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20S32D706EAC%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung S32D706EAC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20S32D706EAC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung S32D706EAC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20S32D706EAC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung S32D706EAC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20S32D706EAC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung S32D706EAC\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20S32D706EAC%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-samsung-ls40h850tacxzw",
    "category": "monitor",
    "rank": 54,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "LS40H850TACXZW",
    "name": "40 型 ViewFinity S8 S85TH 5K2K 144Hz Thunderbolt 5 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 27900,
      "converted": 27900,
      "confidence": "PChome 2026-07-18 API 公開價"
    },
    "image": "https://images.samsung.com/is/image/samsung/p6pim/tw/ls40h850tacxzw/gallery/tw-viewfinity-s8-40s85th-ls40h850tacxzw-552039945?$624_468_PNG$",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABW5-A900K0BMC",
    "buyLabel": "PChome",
    "specs": [
      "40 吋 VA / 1000R / 21:9",
      "WUHD 5120 x 2160 / 144Hz / 4ms GtG",
      "HDR10 / HDR10+ / sRGB 99% / 350 nits",
      "Thunderbolt 5（140W）/ DP 1.4 / HDMI 2.1 / KVM / LAN / PIP / PBP",
      "尺寸：含底座 92.86 x 59.99 x 36.21 cm；不含底座 92.86 x 42.28 x 19.89 cm",
      "重量：9.0kg（不含底座；含底座 14.0kg）",
      "VESA 100 x 100 mm"
    ],
    "description": "40 吋 5K2K 生產力超寬螢幕，補足現有清單沒有的 40 吋 5K2K 與 Thunderbolt 5 工作站定位。",
    "pros": [
      "5K2K 與 21:9 適合剪輯時間軸、程式開發與多視窗",
      "Thunderbolt 5 140W、KVM、LAN 與菊鏈整合完整",
      "144Hz 兼顧工作與遊戲，台灣原廠三年保固"
    ],
    "cons": [
      "VA 面板與 350 nits，不是 Mini LED 或 OLED HDR 旗艦",
      "40 吋機身寬 92.86cm、面板 9kg，支架與桌深需先確認",
      "北美 S85TH 有單一使用者回報 Mac 的 TB4/TB5 握手問題，未達警示門檻但宜在退換貨期測試"
    ],
    "bestFor": "需要一線接筆電、5K2K 多工與 144Hz 的創作者、工程師與混合工作／遊戲使用者。",
    "recommendation": "高階生產力推薦；相較同尺寸 5K2K 機型定價有競爭力，且 TB5、KVM 與 LAN 完整，但 Mac 使用者應在退換貨期測試連線握手。",
    "score": 92,
    "voltage": "AC 100-240V；內建電源，台灣公司貨",
    "warranty": "台灣三星電腦螢幕 36 個月；面板亮暗點依官方保固標準",
    "tags": [
      "40吋",
      "5K2K",
      "寬螢幕",
      "21:9",
      "Thunderbolt 5",
      "KVM",
      "生產力"
    ],
    "releaseDate": "2026-05",
    "historicalLow": {
      "status": "found",
      "amount": 26784,
      "currency": "TWD",
      "converted": 26784,
      "sourceUrl": "https://tw.buy.yahoo.com/gdsale/Samsung-%E4%B8%89%E6%98%9F-S40H850TAC-40%E5%9E%8B-WUHD-VA-144Hz-1000R%E9%AB%98%E8%A7%A3%E6%9E%90%E5%BA%A6%E6%9B%B2-12124209.html",
      "sourceTitle": "Yahoo購物中心：Samsung S40H850TAC 40 型 WUHD 144Hz 曲面螢幕",
      "evidenceSnippet": "Yahoo 自營 exact-model 頁於 2026-07-18 顯示公開滿 1 件 96 折價 NT$26,784，原價 NT$27,900，活動於當日 06:59:59 結束。",
      "sourceKind": "retailer_promo",
      "confidence": "high",
      "checkedAt": "2026-07-18",
      "note": "採用 Yahoo 自營同型號新品公開自動折扣；不含點數、信用卡回饋、會員個人化券、二手、福利、展示或拆封品。活動到期後現價回到 NT$27,900。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung LS40H850TACXZW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20LS40H850TACXZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung LS40H850TACXZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20LS40H850TACXZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung LS40H850TACXZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20LS40H850TACXZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung LS40H850TACXZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20LS40H850TACXZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung LS40H850TACXZW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20LS40H850TACXZW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-benq-pd2732u",
    "category": "monitor",
    "rank": 55,
    "budget": "premium",
    "channel": "tw",
    "brand": "BenQ",
    "model": "PD2732U",
    "name": "27 型 4K Adobe RGB Thunderbolt 4 專業設計螢幕",
    "price": {
      "currency": "TWD",
      "amount": 26888,
      "converted": 26888,
      "confidence": "BenQ 台灣官方 2026-07-21 API 公開在庫價"
    },
    "image": "https://image.benq.com/is/image/benqco/pd2732u-front-hotkey-1000?$ResponsivePreset$&fmt=png-alpha",
    "buyUrl": "https://www.benq.com/zh-tw/monitor/creative-pro/pd2732u/buy.html",
    "buyLabel": "BenQ 台灣官方",
    "specs": [
      "27 吋 IPS / 4K 3840 x 2160 / 60Hz / 400 nits",
      "99% Adobe RGB / 99% P3 / 100% sRGB / DeltaE < 2",
      "Thunderbolt 4（90W）/ DP / HDMI / USB-C / KVM / 菊鏈",
      "HDR10 / HLG / Pantone、Pantone SkinTone 與 Calman 認證",
      "重量：5.89kg（不含底座；含底座 8.56kg）",
      "VESA 100 x 100 mm"
    ],
    "description": "PD2732U 是 2026 年新上市的 27 吋專業廣色域螢幕，補足清單中 Adobe RGB、P3 與 Thunderbolt 4 一線工作流兼具的中高階創作選項。",
    "pros": [
      "99% Adobe RGB 與 99% P3 適合攝影、印刷與影音工作流",
      "Thunderbolt 4 90W、KVM 與菊鏈可整合 Mac／PC 桌面",
      "台灣官方現貨、規格與價格證據完整"
    ],
    "cons": [
      "60Hz 不適合追求高刷新遊戲",
      "HDR 峰值與分區背光不是專業 HDR 調色定位",
      "專業色彩功能需要定期校色與正確工作流程才能發揮"
    ],
    "bestFor": "需要 Adobe RGB 印刷色域、4K 細節與 Thunderbolt 4 一線連接的攝影師、設計師與內容創作者。",
    "recommendation": "專業廣色域推薦：相較高價參考級螢幕，PD2732U 以較低門檻提供 Adobe RGB、P3、Thunderbolt 4 與完整台灣官方售後。",
    "score": 92,
    "voltage": "AC 100-240V；台灣官方新品",
    "warranty": "依 BenQ 台灣官方商品頁與保固政策",
    "tags": [
      "27吋",
      "4K",
      "Adobe RGB",
      "P3",
      "Thunderbolt 4",
      "KVM",
      "專業色彩"
    ],
    "releaseDate": "2026-07",
    "historicalLow": {
      "status": "found",
      "amount": 25544,
      "currency": "TWD",
      "converted": 25544,
      "sourceUrl": "https://biggo.com.tw/s/PD2732U/",
      "sourceTitle": "PD2732U 的價格推薦 - 2026年7月 | BigGo",
      "evidenceSnippet": "BigGo 2026-07-21 exact-model 比價頁顯示 Yahoo購物中心「BenQ PD2732U-27型 4K 專業設計繪圖螢幕」曾有公開滿 1 件 95 折價 NT$25,544；Yahoo 原頁目前已回到 NT$26,888。",
      "sourceKind": "retailer_promo",
      "confidence": "medium",
      "checkedAt": "2026-07-21",
      "note": "採用可公開重現的 exact-model Yahoo 公開折扣快照；非會員個人券、信用卡回饋、點數、拍賣、二手、福利、展示或拆封品。折扣已結束，因此現價仍採 BenQ 台灣官方 NT$26,888。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"BenQ PD2732U\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22BenQ%20PD2732U%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"BenQ PD2732U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22BenQ%20PD2732U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"BenQ PD2732U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22BenQ%20PD2732U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"BenQ PD2732U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22BenQ%20PD2732U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"BenQ PD2732U\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22BenQ%20PD2732U%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-asus-pa27usd",
    "category": "monitor",
    "rank": 56,
    "topPick": false,
    "budget": "premium",
    "channel": "tw",
    "brand": "ASUS",
    "model": "PA27USD",
    "name": "26.5 型 4K 240Hz QD-OLED 12G-SDI 專業創作者螢幕",
    "price": {
      "currency": "TWD",
      "amount": 69900,
      "converted": 69900,
      "confidence": "ASUS 台灣官方商城 2026-07-26 公開在庫價"
    },
    "image": "https://shop.asus.com/media/catalog/product/9/5/9565379b9c805db870350b1f2188d50f_1.png?bg-color=255%2C255%2C255&canvas=439%3A439&fit=bounds&format=auto&height=439&optimize=medium&width=439",
    "buyUrl": "https://shop.asus.com/tw/90lm04n0-b013d1-proart-display-oled-pa27usd.html",
    "buyLabel": "ASUS 台灣官方",
    "specs": [
      "26.5 吋 QD-OLED / 4K 3840 x 2160 / 240Hz / 0.1ms",
      "1000 nits 峰值 / 99% DCI-P3 / Delta E < 1 / Dolby Vision",
      "12G-SDI / 2 x Thunderbolt 4（96W）/ DisplayPort 2.1 / 2 x HDMI 2.1 / KVM",
      "內建色度計 / ASUS ProArt 硬體校準 / 隨附遮光罩",
      "重量：4.96kg（不含底座；含標準底座 7.50kg；含迷你底座 5.36kg）",
      "VESA 100 x 100 mm"
    ],
    "description": "PA27USD 是面向影像後期與專業調色的 26.5 吋 4K QD-OLED 螢幕，補足清單中 12G-SDI、內建色度計、硬體校準與 240Hz 同時具備的專業工作流選項。",
    "pros": [
      "12G-SDI、硬體校準與內建色度計適合專業影像工作流",
      "4K 240Hz QD-OLED 兼顧色彩、HDR 與流暢預覽",
      "雙 Thunderbolt 4、96W 供電與 KVM 可整合 Mac／PC 桌面"
    ],
    "cons": [
      "售價遠高於一般 27 吋 4K OLED 與 IPS 專業螢幕",
      "OLED 長時間顯示固定介面仍需注意烙印風險",
      "早期評測者有單一特定連接情境的線圈噪音回報，未達集中災情門檻"
    ],
    "bestFor": "需要 12G-SDI、硬體校準、精準廣色域與高刷新預覽的調色師、影像工作室與高階內容創作者。",
    "recommendation": "專業影像工作流補充推薦：規格整合度高，但定價與用途都很專業，若不需要 SDI 或內建色度計，其他 4K OLED／廣色域螢幕更具性價比。",
    "score": 90,
    "voltage": "AC 100-240V / 50-60Hz；台灣官方新品",
    "warranty": "3 年保固，包含面板烙印",
    "tags": [
      "26.5吋",
      "4K",
      "QD-OLED",
      "240Hz",
      "12G-SDI",
      "Thunderbolt 4",
      "硬體校色",
      "專業色彩"
    ],
    "releaseDate": "2026-05",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-26",
      "note": "已查 ASUS 台灣官方商城、官方產品列表、BigGo、FindPrice、LBJ 與海外 exact-model 價格歷史；台灣官方現價為 NT$69,900，但未找到同一台灣料號 90LM04N0-B013D1 可公開重現的可信新品歷史最低價，因此不把現價直接視為史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ASUS PA27USD\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ASUS%20PA27USD%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"ASUS PA27USD\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ASUS%20PA27USD%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"ASUS PA27USD\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22ASUS%20PA27USD%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"ASUS PA27USD\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22ASUS%20PA27USD%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"ASUS PA27USD\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22ASUS%20PA27USD%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-benq-pd2770u",
    "category": "monitor",
    "rank": 57,
    "topPick": false,
    "budget": "premium",
    "channel": "tw",
    "brand": "BenQ",
    "model": "PD2770U",
    "name": "27 型 4K 內建校色器專業色彩管理螢幕",
    "price": {
      "currency": "TWD",
      "amount": 49888,
      "converted": 49888,
      "confidence": "momo購物 2026-07-26 exact-model 公開促銷可購價"
    },
    "image": "https://image.benq.com/is/image/benqco/1pd2770u-front-hood-hotkey-2?$ResponsivePreset$",
    "buyUrl": "https://www.momoshop.com.tw/product/15221341",
    "buyLabel": "momo購物",
    "specs": [
      "27 吋 IPS / 4K 3840 x 2160 / 60Hz / 450 nits",
      "100% sRGB、100% Rec.709、99% Adobe RGB、99% P3 / Delta E(avg) ≤ 1.5",
      "內建校色器 / 硬體與排程校色 / 光自適應校色 / 三階段均勻度補償",
      "2 x HDMI 2.1 / DisplayPort 1.4 / USB-C 96W / RJ45 / KVM / DMS Local",
      "重量：6.1kg（不含底座；含底座淨重 8.8kg）",
      "VESA 100 x 100 mm"
    ],
    "description": "PD2770U 是面向攝影、印刷與小型工作室的 27 吋 4K 專業螢幕，內建校色器並支援排程、光自適應校色與 DMS Local 多工作站管理，補足既有清單沒有的自動化色彩維護工作流。",
    "pros": [
      "內建校色器與排程校色可降低長期色彩漂移與逐台維護成本",
      "99% Adobe RGB、99% P3 與三階段均勻度補償適合攝影及印刷工作",
      "USB-C 96W、KVM、RJ45 與 DMS Local 可整合多工作站"
    ],
    "cons": [
      "60Hz 不適合追求高刷新遊戲",
      "價格仍明顯高於一般 27 吋 4K 廣色域螢幕",
      "單一外部評測樣機的出廠色差略高於官方平均值目標，專業工作仍應自行校色"
    ],
    "bestFor": "需要 Adobe RGB 印刷色域、內建自動校色與多螢幕集中管理的攝影師、設計工作室及色彩管理人員。",
    "recommendation": "工作室色彩管理補充推薦：PD2770U 的價值不在高刷新，而是把內建校色、排程維護、均勻度補償與 DMS 管理整合在同一台螢幕；若只需一般 4K USB-C 顯示，其他型號更具性價比。",
    "score": 91,
    "voltage": "AC 100-240V；內建電源；台灣公司貨",
    "warranty": "面板與機身 3 年保固；PD 系列保固期內送修可提供同規格或優規備機",
    "tags": [
      "27吋",
      "4K",
      "Adobe RGB",
      "P3",
      "內建校色器",
      "硬體校色",
      "USB-C 96W",
      "KVM",
      "DMS Local",
      "專業色彩"
    ],
    "releaseDate": "2026-05-22",
    "historicalLow": {
      "status": "found",
      "amount": 49888,
      "currency": "TWD",
      "converted": 49888,
      "sourceUrl": "https://www.momoshop.com.tw/product/15221341",
      "sourceTitle": "momo購物：BenQ PD2770U 27 吋 4K 專業色彩管理設計螢幕",
      "evidenceSnippet": "momo exact-model 商品頁於 2026-07-26 顯示公開促銷價 NT$49,888、市售價 NT$59,888，且可加入購物車與結帳。",
      "sourceKind": "retailer_promo",
      "confidence": "high",
      "checkedAt": "2026-07-26",
      "note": "採用可信新品通路可公開重現的同型號限時促銷，低於 BenQ 台灣上市建議售價 NT$59,888；排除會員個人券、信用卡回饋、點數、二手、福利、展示、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"BenQ PD2770U\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22BenQ%20PD2770U%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"BenQ PD2770U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22BenQ%20PD2770U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"BenQ PD2770U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22BenQ%20PD2770U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"BenQ PD2770U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22BenQ%20PD2770U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"BenQ PD2770U\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22BenQ%20PD2770U%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-samsung-s32hg806es",
    "category": "monitor",
    "rank": 58,
    "topPick": false,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "LS32HG806ESXZW",
    "name": "32 型 Odyssey G8 G80HS 6K 165Hz／3K 330Hz 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 29900,
      "converted": 29900,
      "confidence": "PChome 2026-08-24 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABSKA900K0G32/000001_1778746645.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABSK-A900K0G32",
    "buyLabel": "PChome 24h購物",
    "specs": [
      "32 吋 Fast IPS / 6K 6144 x 3456 165Hz；Dual Mode 3K 3072 x 1728 330Hz",
      "1ms GtG / HDR10+ Gaming / sRGB 99% / 350 nits（峰值 400 nits）",
      "G-Sync 相容 / FreeSync Premium",
      "DisplayPort 2.1 x1 / HDMI 2.1 x2 / USB 3.2 Hub",
      "尺寸：不含底座 寬 71.45 x 深 5.96 x 高 42.23 cm；含底座 寬 71.45 x 深 26.39 x 高 59.54 cm",
      "重量：不含底座 4.9 kg；含底座 7.4 kg",
      "VESA 100 x 100 mm / 高度、傾斜、旋轉與垂直旋轉底座"
    ],
    "description": "Odyssey G8 G80HS 以 32 吋 6K 165Hz 與 3K 330Hz 雙模式，補足現有清單中兼顧超高像素密度、創作工作區與競技刷新率的特殊定位。",
    "pros": [
      "6K 165Hz 與 3K 330Hz 雙模式可在畫質及速度間切換",
      "DP 2.1、雙 HDMI 2.1、G-Sync 相容與 FreeSync Premium 完整",
      "可調底座與 4.9 kg 面板重量便於工作站或支架規劃"
    ],
    "cons": [
      "6K 高刷新需要高階顯示卡、DP 2.1 與足夠頻寬",
      "沒有 USB-C 影像與筆電供電，工作站整線彈性較低",
      "價格高於一般 32 吋 4K 高刷新螢幕"
    ],
    "bestFor": "同時需要高像素密度創作空間與 330Hz 競技模式，且具備高階顯示卡的玩家或創作者。",
    "recommendation": "6K／高刷新雙模式推薦：規格在現有清單中獨立，但購買前應確認 GPU、連接埠與遊戲是否能實際輸出目標解析度及刷新率。",
    "score": 93,
    "voltage": "AC 100-240V / 50-60Hz；台灣公司貨",
    "warranty": "Samsung 台灣顯示器 3 年保固；延長保固活動依登錄資格與期限",
    "tags": [
      "32吋",
      "6K",
      "165Hz",
      "3K 330Hz",
      "Dual Mode",
      "DisplayPort 2.1",
      "HDR10+ Gaming"
    ],
    "releaseDate": "2026-05-18",
    "historicalLow": {
      "status": "found",
      "amount": 28405,
      "currency": "TWD",
      "converted": 28405,
      "sourceUrl": "https://www.momoshop.com.tw/product/15335990",
      "sourceTitle": "momo購物：Samsung S32HG806ES 32 型 6K IPS 電競螢幕",
      "evidenceSnippet": "momo exact-model 直達頁的公開 2026-06-09 活動快照顯示滿 1 件 95 折，折後 NT$28,405，原促銷價 NT$29,900。",
      "sourceKind": "retailer_promo",
      "confidence": "medium",
      "checkedAt": "2026-08-06",
      "note": "採 momo exact-model 直達頁的 2026-06-09 公開活動快照作為已發生低點；2026-08-06 momo 商品頁已回復 NT$29,900，本輪現價改採 PChome 可重現 Price.Low NT$28,900。排除會員個人券、信用卡回饋、點數、二手、福利品、展示與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung LS32HG806ESXZW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20LS32HG806ESXZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung LS32HG806ESXZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20LS32HG806ESXZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung LS32HG806ESXZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20LS32HG806ESXZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung LS32HG806ESXZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20LS32HG806ESXZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung LS32HG806ESXZW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20LS32HG806ESXZW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-sony-sdm-27u9m2",
    "category": "monitor",
    "rank": 59,
    "topPick": false,
    "budget": "premium",
    "channel": "tw",
    "brand": "SONY",
    "model": "SDM-27U9M2",
    "name": "INZONE M9 II 27 吋 4K 160Hz 全陣列背光電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 26990,
      "converted": 26990,
      "confidence": "Sony 台灣官方購物網站 2026-08-14 exact-model 公開售價，頁面可加入購物車",
      "basis": "retailer_current"
    },
    "image": "https://store.sony.com.tw/resource/product_files/SDM-27U9M2/SDM-27U9M2_pi.jpg",
    "buyUrl": "https://store.sony.com.tw/product/SDM-27U9M2",
    "buyLabel": "Sony 台灣官方購物網站",
    "installation": {
      "status": "not_stated",
      "note": "Sony 官方購物頁明載免費宅配與 36 個月保固，但未把桌面組裝或 VESA 壁掛施工列為售價內服務；壁掛架、承重與施工需另行確認。"
    },
    "specs": [
      "27 吋 4K UHD IPS；DisplayPort 最高 160Hz、HDMI 最高 144Hz",
      "1ms GtG、全陣列區域控光、峰值亮度 750 nits、DisplayHDR 600",
      "DCI-P3 95% 以上、G-SYNC Compatible、VRR、PS5 Auto HDR Tone Mapping",
      "HDMI 2.1 x2、DisplayPort 2.1 UHBR10 x1、USB Hub",
      "重量：未標示（台灣官方購物頁未明確列出本體淨重）"
    ],
    "description": "Sony INZONE M9 II 以 4K 160Hz、全陣列背光與 PS5 專屬協同功能，補進高階主機／PC 雙用螢幕選擇。",
    "pros": [
      "4K 160Hz、DisplayHDR 600 與全陣列控光兼顧遊戲及 HDR",
      "雙 HDMI 2.1、DP 2.1 與 VRR 適合 PC、PS5 共用",
      "Sony 台灣官方直售、免費宅配與 36 個月保固"
    ],
    "cons": [
      "價格高於一般 27 吋 4K IPS",
      "官方購物頁未明確列本體淨重，支架規劃前仍要查保證書或實機",
      "不是 OLED，暗場光暈仍取決於區域控光表現"
    ],
    "bestFor": "需要一台同時接高階 PC 與 PS5，並重視 4K 高刷新、HDR 與台灣官方保固的人。",
    "recommendation": "Sony 日系電競補強：規格與官方售後完整，但屬高價位，購買前應確認桌深、顯示卡輸出與 VESA 支架承重。",
    "score": 90,
    "voltage": "原廠 AC 變壓器輸入 100–240V、50/60Hz；台灣官方公司貨",
    "warranty": "Sony 台灣官方購物頁明載 36 個月保固",
    "tags": [
      "27吋",
      "4K",
      "160Hz",
      "全陣列背光",
      "HDMI 2.1",
      "PS5"
    ],
    "releaseDate": "2024-10-08",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-08-14",
      "note": "已查 Sony 台灣官方購物頁及 exact-model 價格搜尋；本輪可重現現價為 NT$26,990，搜尋到的活動數字無法在具日期的可信新品原頁重現，因此不以現價或摘要推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SONY SDM-27U9M2\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SONY%20SDM-27U9M2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SONY SDM-27U9M2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SONY%20SDM-27U9M2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SONY SDM-27U9M2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SONY%20SDM-27U9M2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SONY SDM-27U9M2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SONY%20SDM-27U9M2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SONY SDM-27U9M2\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SONY%20SDM-27U9M2%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-panasonic-ts-27gf40ctk",
    "category": "monitor",
    "rank": 60,
    "topPick": false,
    "budget": "balanced",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "TS-27GF40CTK",
    "name": "27 吋 4K 160Hz／FHD 320Hz Fast IPS 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 12900,
      "converted": 12900,
      "confidence": "Panasonic 台灣官方商城 2026-08-14 gaming monitor 分類頁公開會員優惠價",
      "basis": "retailer_current"
    },
    "image": "https://panasonic.com/content/dam/panasonic/tw/zh/pim/dam/TS/TS-27G/TS-27GF40CTK/ast-3334250.png",
    "buyUrl": "https://pstw.panasonic.com.tw/Shop/Product/gamingmonitor?Ordery=MAXPRICE",
    "buyLabel": "Panasonic 台灣官方商城會員價",
    "installation": {
      "status": "not_stated",
      "note": "Panasonic 官方商城頁未將桌面組裝或 VESA 壁掛施工列入售價；如改用支架，需另查 VESA、承重與施工條件。"
    },
    "specs": [
      "27 吋 4K Fast IPS；4K 160Hz／FHD 320Hz 雙模式",
      "1ms、Adaptive-Sync、HDR 模式、DCI-P3 90%（典型值）",
      "HDMI、DisplayPort；底座支援高度與角度調整",
      "尺寸：寬 61 x 深 21.5 x 高 53.5 cm（含底座）",
      "重量：5 kg（官方產品頁淨重）"
    ],
    "description": "Panasonic 首波台灣電競螢幕，以 4K 160Hz 與 FHD 320Hz 雙模式，在單機上兼顧畫質工作區與競技速度。",
    "pros": [
      "4K 160Hz／FHD 320Hz 雙模式用途彈性高",
      "官方明列尺寸與 5kg 淨重，方便桌面及支架規劃",
      "Panasonic 台灣官方商城有公開現價"
    ],
    "cons": [
      "官方 DCI-P3 典型值 90%，不屬專業廣色域定位",
      "320Hz 需切換至 FHD，不能同時維持 4K",
      "新產品線的長期使用評價仍少"
    ],
    "bestFor": "希望同一台螢幕在 4K 單機／創作與 FHD 高刷新競技間切換的人。",
    "recommendation": "Panasonic 日系螢幕補強：雙模式規格清楚且官方現售，但不因品牌直接取代既有 Top Pick。",
    "score": 89,
    "voltage": "原廠適配器輸出 19V／3.42A；BSMI 驗證登錄 R31417、證書 CI315064175992；台灣官方公司貨",
    "warranty": "Panasonic 台灣公司貨；期限依官方商城與保證書",
    "tags": [
      "27吋",
      "4K 160Hz",
      "FHD 320Hz",
      "Fast IPS",
      "雙模式",
      "5kg"
    ],
    "releaseDate": "2026-04-29",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-08-14",
      "note": "已查 Panasonic 官方產品頁、官方商城及 exact-model 價格搜尋；目前只能重現官方商城 NT$12,900，尚無具日期且可公開重現的更低可信新品價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic TS-27GF40CTK\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20TS-27GF40CTK%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic TS-27GF40CTK\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20TS-27GF40CTK%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic TS-27GF40CTK\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20TS-27GF40CTK%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic TS-27GF40CTK\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20TS-27GF40CTK%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic TS-27GF40CTK\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20TS-27GF40CTK%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "monitor-lenovo-loq-27q-10",
    "category": "monitor",
    "rank": 61,
    "topPick": false,
    "budget": "value",
    "channel": "tw",
    "brand": "Lenovo",
    "model": "LOQ 27Q-10",
    "name": "LOQ 27Q-10 27 吋 QHD 180Hz Fast IPS 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 4191,
      "converted": 4191,
      "confidence": "Lenovo 台灣官方商城 2026-08-20 exact part 68F3GACBTW 公開價，頁面可加入購物車並顯示預估 6-9 天出貨",
      "basis": "retailer_current"
    },
    "image": "https://p2-ofp.static.pub/ShareResource/ww/visuals/LOQ-10series/LOQ-27Q-10-list.png?width=584&height=584",
    "buyUrl": "https://www.lenovo.com/tw/zh/p/accessories-and-software/monitors/gaming/68f3gacbtw",
    "buyLabel": "Lenovo 台灣官方商城",
    "installation": {
      "status": "not_stated",
      "note": "Lenovo 台灣官方商城提供宅配，未把桌面組裝或 VESA 壁掛施工列入售價；改用螢幕支架時需自行核對 VESA、承重與桌板。"
    },
    "specs": [
      "27 吋 QHD 2560 x 1440 Fast IPS；最高 180Hz",
      "0.5ms MPRT／1ms GtG、99% sRGB、HDR10",
      "AMD FreeSync Premium、VESA Adaptive Sync",
      "HDMI 2.1 TMDS x2、DisplayPort 1.4 x1；VESA 100 x 100 mm",
      "尺寸：不含底座寬 61.3 x 深 4.6 x 高 36.73 cm；含底座寬 61.3 x 深 21.6 x 高 45.16 cm",
      "重量：不含底座 4.1 kg；含底座 4.5 kg"
    ],
    "description": "Lenovo LOQ 27Q-10 以四千元級官方價提供 QHD 180Hz Fast IPS、雙 HDMI 與三年保固，補進主流品牌的入門 2K 高刷新帶。",
    "pros": [
      "QHD 180Hz、FreeSync Premium 與 1ms GtG 規格完整",
      "99% sRGB、雙 HDMI 及 DisplayPort 適合 PC 與主機共用",
      "Lenovo 台灣官方直售並提供三年保固"
    ],
    "cons": [
      "HDR10 只代表訊號相容，非 Mini LED 或高階 HDR 顯示",
      "底座調整以傾斜為主，沒有 USB-C 或 USB Hub",
      "新款上市時間短，長期使用回報仍少"
    ],
    "bestFor": "預算五千元內，希望從 FHD 升級到 27 吋 QHD 高刷新，並重視官方直售與三年保固的人。",
    "recommendation": "入門 QHD 高刷新補強：官方價與規格很有競爭力，但不把 HDR10 標籤等同高階 HDR；購買前確認顯示卡能否在 QHD 下穩定輸出目標幀率。",
    "score": 89,
    "voltage": "AC 100-240V、50/60Hz；台灣官方商城公司貨",
    "warranty": "Lenovo 台灣官方頁明載三年保固",
    "tags": [
      "27吋",
      "QHD",
      "180Hz",
      "Fast IPS",
      "FreeSync Premium",
      "平價電競"
    ],
    "releaseDate": "2026-03-24",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-08-20",
      "note": "已查 Lenovo 台灣官方商城、PSREF、FindPrice、BigGo、LBJ 與 exact-model 價格搜尋；官方頁當下 NT$4,191 是現價而非具日期歷史曲線，未以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-20",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Lenovo LOQ 27Q-10\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Lenovo%20LOQ%2027Q-10%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Lenovo LOQ 27Q-10\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Lenovo%20LOQ%2027Q-10%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Lenovo LOQ 27Q-10\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Lenovo%20LOQ%2027Q-10%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Lenovo LOQ 27Q-10\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Lenovo%20LOQ%2027Q-10%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Lenovo LOQ 27Q-10\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Lenovo%20LOQ%2027Q-10%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  }
]);
})();
