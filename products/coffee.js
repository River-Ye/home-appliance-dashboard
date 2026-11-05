(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("coffee", [
  {
    "id": "coffee-best-g6280",
    "category": "coffee",
    "rank": 1,
    "topPick": true,
    "budget": "value",
    "channel": "tw",
    "brand": "BEST",
    "model": "G6280",
    "name": "BEST 貝斯特 G6280 獨立式全自動咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 18800,
      "converted": 18800,
      "confidence": "PChome 2026-08-09 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMATI9A900HPMCA/000001_1722852018.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMATI9-A900HPMCA",
    "buyLabel": "PChome 24h｜公司貨，含基本安裝與教學",
    "specs": [
      "類型：全自動",
      "使用原料：咖啡豆；另設咖啡粉槽",
      "研磨系統：內建磨豆機；咖啡粉粗細與磨豆量可調",
      "萃取／沖煮：15 bar；咖啡與蒸氣雙鍋爐；可同時萃取 2 杯；美式、義式、卡布奇諾、拿鐵",
      "奶泡：外接奶泡器／蒸氣奶泡管",
      "容量：水箱 1.7 L；豆槽 250 g；單杯粉量 7–10 g",
      "尺寸：寬 27 x 深 42 x 高 35 cm",
      "重量：10.5 kg",
      "電壓／頻率：110V／60Hz",
      "功率：1400W",
      "清潔維護：開關機自動清洗；隨附木刷、不鏽鋼刷與沖泡器密封圈",
      "耗材／配件相容性：咖啡豆或咖啡粉；奶泡管、奶泡器；沖泡器密封圈；台灣原廠濾芯、密封圈與維修耗材可取得"
    ],
    "description": "全自動義式咖啡機；雙鍋爐與台灣 110V 規格兼顧一鍵飲品和在地維修耗材。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "雙鍋爐與台灣 110V 規格兼顧一鍵飲品和在地維修耗材",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 27 x 深 42 x 高 35 cm、10.5 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "品牌服務據點不如國際大廠密集，購買前仍要確認到府範圍",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "希望一鍵完成黑咖啡與奶咖，又把台灣電力、保固和耗材可得性放在首位的家庭",
    "recommendation": "全自動推薦：雙鍋爐與台灣 110V 規格兼顧一鍵飲品和在地維修耗材。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 17860,
      "currency": "TWD",
      "converted": 17860,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMATI9-A900HPMCA",
      "sourceTitle": "PChome 24h 購物：Best 貝斯特 獨立式全自動咖啡機 G6280",
      "evidenceSnippet": "PChome 24h 購物於 2026-08-09 顯示同型號可信新品公開價 NT$17,860，低於既有史低 NT$18,800。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-08-09",
      "note": "採用 PChome 24h 購物當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"BEST G6280\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22BEST%20G6280%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"BEST G6280\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22BEST%20G6280%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"BEST G6280\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22BEST%20G6280%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"BEST G6280\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22BEST%20G6280%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"BEST G6280\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22BEST%20G6280%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 96,
    "voltage": "110V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣公司貨；原廠保固 1 年",
    "tags": [
      "全自動推薦",
      "全自動",
      "CP 值",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-philips-ep3326-94",
    "category": "coffee",
    "rank": 2,
    "budget": "value",
    "channel": "tw",
    "brand": "Philips",
    "model": "EP3326/94",
    "name": "Philips 飛利浦 EP3326/94 雙溫萃取全自動義式咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 14900,
      "converted": 14900,
      "confidence": "台灣飛利浦家電官方網站 2026-08-04 exact-model 公開新品價；台灣公司貨／原廠通路"
    },
    "image": "https://images.philips.com/is/image/philipsconsumer/vrs_ac10e200_8033_4a0d_a1b1306abcbc18f8?$pnglarge$",
    "buyUrl": "https://www.philips-da.com.tw/products/ep3326",
    "buyLabel": "台灣飛利浦家電官方網站",
    "specs": [
      "類型：全自動",
      "使用原料：咖啡豆；另設咖啡粉槽",
      "研磨系統：內建100% 陶瓷研磨器；12 段研磨設定；支援咖啡粉",
      "萃取／沖煮：15 bar；AromaExtract；高溫萃取與低溫慢萃；5 種飲品；可出雙杯",
      "奶泡：經典蒸氣手動奶泡管",
      "容量：水箱 1.8 L；豆槽 275 g；豆渣槽 12 份粉餅",
      "尺寸：寬 24.6 x 深 43.3 x 高 37.2 cm",
      "重量：8 kg",
      "電壓／頻率：120V／60Hz",
      "功率：1500W",
      "清潔維護：可拆式沖煮器；出水口與管線自動清潔；除垢提示；支援 AquaClean",
      "耗材／配件相容性：咖啡豆或咖啡粉；AquaClean 濾芯；咖啡脂清潔錠；除垢劑；沖煮器潤滑油；購買前依台灣代理型號確認供應"
    ],
    "description": "全自動義式咖啡機；雙溫萃取、陶瓷磨豆與手動奶泡提供全自動入門彈性。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "雙溫萃取、陶瓷磨豆與手動奶泡提供全自動入門彈性",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 24.6 x 深 43.3 x 高 37.2 cm、8 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "奶泡需手動操作，沖煮器和水盤仍要按週期拆洗",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "主要喝黑咖啡與冰咖啡、偶爾願意自己打奶泡的入門使用者",
    "recommendation": "分型建議：雙溫萃取、陶瓷磨豆與手動奶泡提供全自動入門彈性。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 14900,
      "currency": "TWD",
      "converted": 14900,
      "sourceUrl": "https://www.philips-da.com.tw/products/ep3326",
      "sourceTitle": "台灣飛利浦家電 Philips 3300 系列 EP3326/94 官方商品頁",
      "evidenceSnippet": "官方 exact-model 頁公開價為 NT$14,900，並列原價 NT$28,900；附加點數未計入價格。",
      "sourceKind": "official_sale",
      "confidence": "high",
      "checkedAt": "2026-08-04",
      "note": "截至查核日，台灣官方 exact-model 頁的 NT$14,900 為本輪可重現最低公開新品促銷價；LINE 點數屬附加利益，沒有折入史低金額。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips EP3326/94\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20EP3326%2F94%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips EP3326/94\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20EP3326%2F94%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Philips EP3326/94\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Philips%20EP3326%2F94%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Philips EP3326/94\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Philips%20EP3326%2F94%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Philips EP3326/94\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Philips%20EP3326%2F94%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 94,
    "voltage": "120V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣飛利浦官方販售；全球保固 2 年",
    "tags": [
      "全自動",
      "CP 值",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-delonghi-ecam220-22-sb",
    "category": "coffee",
    "rank": 3,
    "budget": "value",
    "channel": "tw",
    "brand": "DeLonghi",
    "model": "ECAM220.22.SB",
    "name": "De'Longhi ECAM220.22.SB Magnifica Start 全自動義式咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 21900,
      "converted": 21900,
      "confidence": "ECAM220.22.SB 官方商品頁 2026-09-05 人工核對 exact-model 公開現價及可購狀態；非會員券、紅利或加購價"
    },
    "image": "https://i3.momoshop.com.tw/1787104171/goodsimg/0013/120/356/13120356_R4_m.webp",
    "buyUrl": "https://www.idelonghi.com.tw/id/products/ecam22022",
    "buyLabel": "De'Longhi Taiwan 官方網站",
    "specs": [
      "類型：全自動",
      "使用原料：咖啡豆；另設咖啡粉槽",
      "研磨系統：內建 13 段錐形不鏽鋼研磨器；無管道系統",
      "萃取／沖煮：濃縮、黑咖啡、美式與熱水；雙份濃縮；3 段溫度、3 段濃度",
      "奶泡：手作蒸氣奶泡系統",
      "容量：水箱 1.8 L；豆槽 250 g",
      "尺寸：寬 24 x 深 44 x 高 35 cm",
      "重量：8.8 kg",
      "電壓／頻率：120V／60Hz",
      "功率：1250W",
      "清潔維護：開關機自動沖洗；可拆式小型沖泡器、瀝水盤與咖啡渣盒",
      "耗材／配件相容性：咖啡豆；De'Longhi 除垢劑；水質軟化濾芯；沖泡器保養用品；購買前依台灣代理型號確認供應"
    ],
    "description": "全自動義式咖啡機；Magnifica Start 的直覺操作、可拆沖煮器與手動奶泡兼顧日常維護。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "Magnifica Start 的直覺操作、可拆沖煮器與手動奶泡兼顧日常維護",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 24 x 深 44 x 高 35 cm、8.8 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "沒有自動奶壺，連續製作奶咖需要額外操作與清潔",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "重視 DeLonghi 台灣售後、以黑咖啡為主並願意練習奶泡的人",
    "recommendation": "分型建議：Magnifica Start 的直覺操作、可拆沖煮器與手動奶泡兼顧日常維護。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 21900,
      "currency": "TWD",
      "converted": 21900,
      "sourceUrl": "https://www.idelonghi.com.tw/id/products/ecam22022",
      "sourceTitle": "ECAM220.22.SB 官方商品頁",
      "evidenceSnippet": "DeLonghi 台灣官方商城於 2026-09-05 顯示 ECAM220.22.SB 同型號新品公開價 NT$21,900 且可購，低於既有可驗證史低 NT$26,900；未套用紅利或個人優惠券。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-09-05",
      "note": "採用官方商城同型號可購新品公開價格；不含會員個人化折扣、點數、信用卡回饋、加購、二手、福利、展示或拆封品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"DeLonghi ECAM220.22.SB\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22DeLonghi%20ECAM220.22.SB%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"DeLonghi ECAM220.22.SB\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22DeLonghi%20ECAM220.22.SB%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"DeLonghi ECAM220.22.SB\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22DeLonghi%20ECAM220.22.SB%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"DeLonghi ECAM220.22.SB\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22DeLonghi%20ECAM220.22.SB%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"DeLonghi ECAM220.22.SB\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22DeLonghi%20ECAM220.22.SB%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 93,
    "voltage": "120V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣原廠公司貨；原廠保固 1 年；提供到府安裝教學與台灣客服",
    "tags": [
      "全自動",
      "CP 值",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-gaggia-anima-cmf",
    "category": "coffee",
    "rank": 4,
    "budget": "value",
    "channel": "tw",
    "brand": "Gaggia",
    "model": "ANIMA CMF",
    "name": "Gaggia 佳吉亞 ANIMA CMF 星耀型全自動咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 27900,
      "converted": 27900,
      "confidence": "PChome 2026-09-14 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://img.pchome.com.tw/cs/items/DMAT01A900GG8P0/000001_1777224847.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAT01-A900GG8P0",
    "buyLabel": "PChome 24h｜Gaggia 台灣原廠公司貨",
    "specs": [
      "類型：全自動",
      "使用原料：咖啡豆；另設咖啡粉槽",
      "研磨系統：內建100% 陶瓷研磨器；5 段粗細；5 段 Optiaroma；支援咖啡粉",
      "萃取／沖煮：15 bar；預浸泡；Espresso、Espresso Lungo、熱水；可同時萃取 2 杯",
      "奶泡：不鏽鋼經典 Pannarello 蒸氣奶泡管",
      "容量：水箱 1.8 L；豆槽 150 g；粉餅盒最多 15 份",
      "尺寸：寬 22.1 x 深 43 x 高 34 cm",
      "重量：7.9 kg",
      "電壓／頻率：120V／60Hz",
      "功率：1400W",
      "清潔維護：自動沖洗、引導除垢；可拆洗沖泡器、水箱、粉餅盒、滴水盤與奶泡管",
      "耗材／配件相容性：咖啡豆或咖啡粉；Brita/Mavea Intenza+ 濾芯；Gaggia 除垢劑與沖泡器潤滑脂；購買前依台灣代理型號確認供應"
    ],
    "description": "全自動義式咖啡機；窄機身、陶瓷磨豆與可拆沖煮器適合有限檯面。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "窄機身、陶瓷磨豆與可拆沖煮器適合有限檯面",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 22.1 x 深 43 x 高 34 cm、7.9 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "圖示按鍵與手動蒸汽系統的飲品自動化程度有限",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "想要義大利製全自動核心、又能接受手動奶泡與定期潤滑沖煮器的人",
    "recommendation": "分型建議：窄機身、陶瓷磨豆與可拆沖煮器適合有限檯面。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 22800,
      "currency": "TWD",
      "converted": 22800,
      "sourceUrl": "https://www.qkshopping.com.tw/product/anima/",
      "sourceTitle": "QK Shopping GAGGIA ANIMA CMF 星耀型 110V 全新公司貨",
      "evidenceSnippet": "exact-model 頁列出全新公司貨、保固與公開特價 NT$22,800，原價 NT$29,900。",
      "sourceKind": "retailer_promo",
      "confidence": "high",
      "checkedAt": "2026-08-04",
      "note": "截至查核日，可信台灣新品通路 exact-model 頁的 NT$22,800 為本輪可重現最低公開促銷價；頁面明列 110V、全新品、公司貨與保固。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Gaggia ANIMA CMF\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Gaggia%20ANIMA%20CMF%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Gaggia ANIMA CMF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Gaggia%20ANIMA%20CMF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Gaggia ANIMA CMF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Gaggia%20ANIMA%20CMF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Gaggia ANIMA CMF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Gaggia%20ANIMA%20CMF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Gaggia ANIMA CMF\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Gaggia%20ANIMA%20CMF%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 92,
    "voltage": "120V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣原廠公司貨；PChome exact-model 頁標示代理商原廠保固 3 年",
    "tags": [
      "全自動",
      "CP 值",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-philips-ep3347-84",
    "category": "coffee",
    "rank": 5,
    "budget": "mid",
    "channel": "tw",
    "brand": "Philips",
    "model": "EP3347/84",
    "name": "Philips 飛利浦 EP3347/84 LatteGo 雙溫萃取全自動義式咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 26550,
      "converted": 26550,
      "confidence": "2026-11-01 人工核對同型號、同版本原商品頁或官方SKU API公開報價；供貨、優惠與交期見註記。",
      "basis": "retailer_current",
      "note": "2026-11-04 全國電子2149579 EP3347/84主頁明示預購接單、依排單順序出貨；26550為原參考，實際出貨需確認。"
    },
    "image": "https://images.philips.com/is/image/philipsconsumer/vrs_635dc934_7995_4bd3_9be963f05e9b68b4?$pnglarge$",
    "buyUrl": "https://www.elifemall.com.tw/product/2149579",
    "buyLabel": "全國電子｜預購，依排單順序出貨",
    "specs": [
      "類型：全自動",
      "使用原料：咖啡豆；另設咖啡粉槽",
      "研磨系統：內建100% 陶瓷研磨器；12 段研磨設定；支援咖啡粉",
      "萃取／沖煮：15 bar；AromaExtract；高溫與低溫慢萃；6 種熱／冷飲品；可出雙杯",
      "奶泡：LatteGo 無管線自動奶泡系統",
      "容量：水箱 1.8 L；豆槽 275 g；LatteGo 奶盒 0.26 L；豆渣槽 12 份粉餅",
      "尺寸：寬 24.6 x 深 43.3 x 高 37.2 cm",
      "重量：8 kg",
      "電壓／頻率：120V／60Hz",
      "功率：1400W",
      "清潔維護：LatteGo 約 10–15 秒沖洗；可拆式沖煮器；自動管線沖洗；除垢提示；支援 AquaClean",
      "耗材／配件相容性：咖啡豆或咖啡粉；AquaClean 濾芯；咖啡脂清潔錠；除垢劑；沖煮器潤滑油；購買前依台灣代理型號確認供應"
    ],
    "description": "全自動義式咖啡機；LatteGo 無奶管結構讓一鍵奶咖後的拆洗更直接。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "LatteGo 無奶管結構讓一鍵奶咖後的拆洗更直接",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 24.6 x 深 43.3 x 高 37.2 cm、8 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "奶泡質地偏固定，追求拉花微奶泡者可調空間有限",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "每天喝拿鐵或卡布奇諾、最討厭清洗奶管的小家庭",
    "recommendation": "分型建議：LatteGo 無奶管結構讓一鍵奶咖後的拆洗更直接。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 23900,
      "currency": "TWD",
      "converted": 23900,
      "sourceUrl": "https://online.skm.com.tw/product/2239170067621",
      "sourceTitle": "新光三越 PHILIPS 飛利浦 3300 系列 EP3347/84 商品頁",
      "evidenceSnippet": "百貨 exact-model 新品頁公開售價 NT$23,900，並列原價 NT$34,900。",
      "sourceKind": "retailer_promo",
      "confidence": "high",
      "checkedAt": "2026-08-04",
      "note": "截至查核日，新光三越 exact-model 新品頁的 NT$23,900 為本輪可重現最低公開促銷價；未把會員、信用卡或點數回饋折入。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips EP3347/84\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20EP3347%2F84%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips EP3347/84\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20EP3347%2F84%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Philips EP3347/84\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Philips%20EP3347%2F84%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Philips EP3347/84\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Philips%20EP3347%2F84%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Philips EP3347/84\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Philips%20EP3347%2F84%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 91,
    "voltage": "120V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣公司貨；全球保固 2 年",
    "tags": [
      "全自動",
      "均衡",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-philips-ep5547-90",
    "category": "coffee",
    "rank": 6,
    "budget": "mid",
    "channel": "tw",
    "brand": "Philips",
    "model": "EP5547/90",
    "name": "Philips 飛利浦 EP5547/90 LatteGo 雙溫萃取全自動義式咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 33900,
      "converted": 33900,
      "confidence": "2026-10-24 人工核對 www.philips-da.com.tw 同型號與所選版本公開價 TWD 33900，可下單；未扣會員、信用卡或點數。"
    },
    "image": "https://images.philips.com/is/image/philipsconsumer/vrs_8236e6d7_84b6_4a40_a27587047fae427e?$pnglarge$",
    "buyUrl": "https://www.philips-da.com.tw/products/ep554790",
    "buyLabel": "台灣飛利浦家電官方網站",
    "specs": [
      "類型：全自動",
      "使用原料：咖啡豆；另設咖啡粉槽",
      "研磨系統：內建100% 陶瓷研磨器；12 段研磨設定；支援咖啡粉",
      "萃取／沖煮：15 bar；雙溫雙萃；20 種熱／冷飲品；QuickStart；4 組使用者喜好",
      "奶泡：LatteGo 無管線自動奶泡系統",
      "容量：水箱 1.8 L；豆槽 275 g；LatteGo 奶盒 0.26 L；豆渣槽 12 份粉餅",
      "尺寸：寬 24.6 x 深 43.3 x 高 37.1 cm",
      "重量：8 kg",
      "電壓／頻率：120V／60Hz",
      "功率：1500W",
      "清潔維護：LatteGo 約 15 秒沖洗；可拆式沖煮器；自動管線沖洗；除垢提示；支援 AquaClean",
      "耗材／配件相容性：咖啡豆或咖啡粉；AquaClean 濾芯；咖啡脂清潔錠；除垢劑；沖煮器潤滑油；購買前依台灣代理型號確認供應"
    ],
    "description": "全自動義式咖啡機；多種冷熱飲品與 LatteGo 系統兼顧選擇和清潔速度。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "多種冷熱飲品與 LatteGo 系統兼顧選擇和清潔速度",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 24.6 x 深 43.3 x 高 37.1 cm、8 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "飲品選項多但機身仍需頻繁補水、倒渣與保養沖煮器",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "家庭成員口味差異大，常在黑咖啡、奶咖與冷飲間切換的人",
    "recommendation": "分型建議：多種冷熱飲品與 LatteGo 系統兼顧選擇和清潔速度。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 33900,
      "currency": "TWD",
      "converted": 33900,
      "sourceUrl": "https://www.philips-da.com.tw/products/ep554790",
      "sourceTitle": "台灣飛利浦家電 Philips 5500 系列 EP5547/90 官方商品頁",
      "evidenceSnippet": "官方 exact-model 頁公開價為 NT$33,900，並列原價 NT$49,900。",
      "sourceKind": "official_sale",
      "confidence": "high",
      "checkedAt": "2026-08-04",
      "note": "截至查核日，台灣官方 exact-model 頁的 NT$33,900 為本輪可重現最低公開新品促銷價；未把附加回饋折入金額。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips EP5547/90\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20EP5547%2F90%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips EP5547/90\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20EP5547%2F90%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Philips EP5547/90\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Philips%20EP5547%2F90%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Philips EP5547/90\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Philips%20EP5547%2F90%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Philips EP5547/90\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Philips%20EP5547%2F90%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 90,
    "voltage": "120V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣飛利浦官方販售；全球保固 2 年",
    "tags": [
      "全自動",
      "均衡",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-delonghi-ecam290-43-sb",
    "category": "coffee",
    "rank": 7,
    "budget": "mid",
    "channel": "tw",
    "brand": "DeLonghi",
    "model": "ECAM290.43.SB",
    "name": "De'Longhi ECAM290.43.SB Magnifica Evo 全自動義式咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 23900,
      "converted": 23900,
      "confidence": "2026-11-01 人工核對同型號、同版本原商品頁或官方SKU API公開報價；供貨、優惠與交期見註記。",
      "basis": "retailer_current",
      "note": "2026-11-01 DeLonghi台灣官方ECAM29043SB原SKU主價23900元、InStock；未以同頁推薦ECAM290.84.SB混價。"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAT03A900GX8R8/000007_1700470715.jpg",
    "buyUrl": "https://www.idelonghi.com.tw/ja/products/ecam29043",
    "buyLabel": "De'Longhi Taiwan 官方網站",
    "specs": [
      "類型：全自動",
      "使用原料：咖啡豆；另設咖啡粉槽",
      "研磨系統：內建 13 段錐形不鏽鋼研磨器；無管道系統",
      "萃取／沖煮：15 bar；5 款一鍵飲品，含 Long 長萃與 Over Ice；3 段電子溫控",
      "奶泡：手作蒸氣奶泡系統",
      "容量：水箱 1.8 L；豆槽 250 g",
      "尺寸：寬 24 x 深 44 x 高 36 cm",
      "重量：9.4 kg",
      "電壓／頻率：120V／60Hz",
      "功率：1250W",
      "清潔維護：開關機自動沖洗；可拆式小型沖泡器、瀝水盤與咖啡渣盒",
      "耗材／配件相容性：咖啡豆；De'Longhi 除垢劑；水質軟化濾芯；沖泡器保養用品；購買前依台灣代理型號確認供應"
    ],
    "description": "全自動義式咖啡機；Doppio+、冰咖啡與手動奶泡在價格與濃縮調整間取得平衡。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "Doppio+、冰咖啡與手動奶泡在價格與濃縮調整間取得平衡",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 24 x 深 44 x 高 36 cm、9.4 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "奶飲不能一鍵完成，蒸汽棒使用後要立即排汽擦洗",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "重視濃縮與冰咖啡表現、願意自行控制奶泡的人",
    "recommendation": "分型建議：Doppio+、冰咖啡與手動奶泡在價格與濃縮調整間取得平衡。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 23900,
      "currency": "TWD",
      "converted": 23900,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMAT03-A900IJELQ",
      "sourceTitle": "PChome 24h DeLonghi Magnifica Evo ECAM290.43.SB 公司貨",
      "evidenceSnippet": "exact-model 公司貨頁公開價 23,900 元，並列原價 29,900 元。",
      "sourceKind": "retailer_promo",
      "confidence": "high",
      "checkedAt": "2026-08-04",
      "note": "截至查核日，PChome exact-model 公司貨頁的 23,900 元為本輪可重現最低合格新品促銷價；另見 19,900 元頁面明載福利品，已排除。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"DeLonghi ECAM290.43.SB\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22DeLonghi%20ECAM290.43.SB%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"DeLonghi ECAM290.43.SB\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22DeLonghi%20ECAM290.43.SB%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"DeLonghi ECAM290.43.SB\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22DeLonghi%20ECAM290.43.SB%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"DeLonghi ECAM290.43.SB\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22DeLonghi%20ECAM290.43.SB%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"DeLonghi ECAM290.43.SB\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22DeLonghi%20ECAM290.43.SB%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 89,
    "voltage": "120V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣原廠公司貨；原廠保固 1 年；提供台灣客服與到府安裝教學",
    "tags": [
      "全自動",
      "均衡",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-delonghi-ecam350-25-sb",
    "category": "coffee",
    "rank": 8,
    "budget": "mid",
    "channel": "tw",
    "brand": "DeLonghi",
    "model": "ECAM350.25.SB",
    "name": "De'Longhi ECAM350.25.SB Dinamica 全自動義式咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 30900,
      "converted": 30900,
      "confidence": "PChome 24h｜De'Longhi 原廠公司貨 2026-08-04 exact-model 公開新品價；台灣公司貨／原廠通路",
      "note": "2026-11-04 Chrome逐筆開啟原商品頁，頁面明示「本商品已熱銷一空，歡迎您繼續瀏覽其他商品」。此金額保留為先前參考價，未確認可購現價；通路售完不等同原廠停產。"
    },
    "image": "https://img.pchome.com.tw/cs/items/DMAT03A900J0QWV/000001_1779441345.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAT03-A900J0QWV",
    "buyLabel": "PChome（原商品已售完，查看供貨）",
    "specs": [
      "類型：全自動",
      "使用原料：咖啡豆；另設咖啡粉槽",
      "研磨系統：內建 13 段錐形不鏽鋼研磨器；無管道系統",
      "萃取／沖煮：15 bar；觸控 LCD；一鍵義式咖啡與純萃冷冽／Over Ice",
      "奶泡：手作蒸氣奶泡系統",
      "容量：水箱 1.8 L；豆槽 300 g",
      "尺寸：寬 24 x 深 44 x 高 36 cm",
      "重量：9.2 kg",
      "電壓／頻率：120V／60Hz",
      "功率：1250W",
      "清潔維護：開關機自動沖洗；可拆式小型沖泡器、瀝水盤與咖啡渣盒",
      "耗材／配件相容性：咖啡豆；De'Longhi 除垢劑；水質軟化濾芯；沖泡器保養用品；購買前依台灣代理型號確認供應"
    ],
    "description": "全自動義式咖啡機；Dinamica 飲品記憶、冰咖啡與可拆沖煮器適合高頻日用。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "Dinamica 飲品記憶、冰咖啡與可拆沖煮器適合高頻日用",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 24 x 深 44 x 高 36 cm、9.2 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "手動奶泡與較深機身需要預留操作和清潔空間",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "黑咖啡出杯頻率高、想保留手動奶泡控制的家庭",
    "recommendation": "分型建議：Dinamica 飲品記憶、冰咖啡與可拆沖煮器適合高頻日用。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 30900,
      "currency": "TWD",
      "converted": 30900,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMAT03-A900J0QWV",
      "sourceTitle": "PChome 24h DeLonghi Dinamica ECAM350.25.SB 公司貨",
      "evidenceSnippet": "exact-model 公司貨頁公開價 30,900 元，並列原價 47,900 元。",
      "sourceKind": "retailer_promo",
      "confidence": "high",
      "checkedAt": "2026-08-04",
      "note": "截至查核日，PChome exact-model 公司貨頁的 30,900 元為本輪可重現最低公開新品促銷價；官方頁同期為 35,900 元。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"DeLonghi ECAM350.25.SB\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22DeLonghi%20ECAM350.25.SB%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"DeLonghi ECAM350.25.SB\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22DeLonghi%20ECAM350.25.SB%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"DeLonghi ECAM350.25.SB\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22DeLonghi%20ECAM350.25.SB%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"DeLonghi ECAM350.25.SB\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22DeLonghi%20ECAM350.25.SB%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"DeLonghi ECAM350.25.SB\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22DeLonghi%20ECAM350.25.SB%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 88,
    "voltage": "120V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣原廠公司貨；原廠保固 1 年；提供到府安裝與台灣客服",
    "tags": [
      "全自動",
      "均衡",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-gaggia-magenta-prestige",
    "category": "coffee",
    "rank": 9,
    "budget": "premium",
    "channel": "tw",
    "brand": "Gaggia",
    "model": "Magenta Prestige",
    "name": "Gaggia MAGENTA PRESTIGE 爵品型全自動咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 49800,
      "converted": 49800,
      "confidence": "momo 購物網｜台灣公司貨新品 2026-08-04 exact-model 公開新品價；台灣公司貨／原廠通路"
    },
    "image": "https://www.gaggia.com/app/uploads/2023/10/Gaggia-Magenta-Glazed-Grey-Still-life-sito-e1761825760161.png",
    "buyUrl": "https://www.momoshop.com.tw/product/11041230",
    "buyLabel": "momo 購物網｜台灣公司貨新品",
    "specs": [
      "類型：全自動",
      "使用原料：咖啡豆；另設咖啡粉槽",
      "研磨系統：內建超耐磨陶瓷平刀研磨器；支援咖啡粉",
      "萃取／沖煮：15 bar；預浸泡；13 種飲品（台灣型錄列 12 種）；可連續雙份萃取",
      "奶泡：整合式 0.5 L 自動奶壺；奶壺自動清洗",
      "容量：水箱 1.8 L；豆槽 250 g；奶壺 0.5 L；粉餅盒最多 15 份",
      "尺寸：寬 22.4 x 深 43.5 x 高 35.7 cm",
      "重量：7.7 kg",
      "電壓／頻率：120V／60Hz",
      "功率：1400W",
      "清潔維護：自動沖洗、奶路自動清潔、自動除垢程序；沖泡器、水箱、奶壺、粉餅盒與滴水盤可拆",
      "耗材／配件相容性：咖啡豆或咖啡粉；Intenza+ 濾芯；Gaggia 除垢劑、清潔錠與沖泡器潤滑脂；購買前依台灣代理型號確認供應"
    ],
    "description": "全自動義式咖啡機；一鍵奶壺、彩色介面與陶瓷磨豆讓奶咖流程完整。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "一鍵奶壺、彩色介面與陶瓷磨豆讓奶咖流程完整",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 22.4 x 深 43.5 x 高 35.7 cm、7.7 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "奶壺零件、沖煮器與潤滑保養項目比純黑咖啡機多",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "想要 Gaggia 沖煮核心與自動奶咖，又能按表清潔保養的人",
    "recommendation": "分型建議：一鍵奶壺、彩色介面與陶瓷磨豆讓奶咖流程完整。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 49800,
      "currency": "TWD",
      "converted": 49800,
      "sourceUrl": "https://photo.sogo.com.tw/Content/Upload/02/Dm_pdf/2024/01m/24010519103344-3.pdf#page=23",
      "sourceTitle": "SOGO 天母店 2024 甲辰祥春節官方 DM",
      "evidenceSnippet": "SOGO 天母店官方 DM 印刷頁 22 明列「GAGGIA 全自動義式咖啡機 爵品型（義大利原裝）MAGENTA PRESTIGE」，原價 NT$75,000、活動特價 NT$49,800。",
      "sourceKind": "retailer_promo",
      "confidence": "high",
      "checkedAt": "2026-08-15",
      "note": "SOGO 官方 DM 活動期間為 2024-01-20 至 2024-02-14；momo 目前同型號公司貨亦列 NT$49,800，未取得更低且可回到可信新品原始頁的候選。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Gaggia Magenta Prestige\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Gaggia%20Magenta%20Prestige%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Gaggia Magenta Prestige\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Gaggia%20Magenta%20Prestige%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Gaggia Magenta Prestige\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Gaggia%20Magenta%20Prestige%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Gaggia Magenta Prestige\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Gaggia%20Magenta%20Prestige%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Gaggia Magenta Prestige\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Gaggia%20Magenta%20Prestige%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 87,
    "voltage": "120V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣公司貨；momo 公開頁標示 3 年保固",
    "tags": [
      "全自動",
      "旗艦",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-jura-e8-15646",
    "category": "coffee",
    "rank": 10,
    "budget": "premium",
    "channel": "tw",
    "brand": "JURA",
    "model": "E8 15646",
    "name": "JURA E8 Chrome (NAC) 全自動咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 63800,
      "converted": 63800,
      "confidence": "PChome 2026-09-02 exact-model 公開價；有正值 Price.Low 時優先於 Price.P",
      "note": "2026-11-04 Chrome逐筆開啟原商品頁，頁面明示「本商品已熱銷一空，歡迎您繼續瀏覽其他商品」。此金額保留為先前參考價，未確認可購現價；通路售完不等同原廠停產。"
    },
    "image": "https://img.pchome.com.tw/cs/items/DMAT3GA900JFELW/000001_1762414552.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAT3G-A900JFELW",
    "buyLabel": "PChome（原商品已售完，查看供貨）",
    "specs": [
      "類型：全自動",
      "使用原料：咖啡豆；另設咖啡粉槽",
      "研磨系統：內建P.A.G.2 專業研磨器",
      "萃取／沖煮：15 bar；第八代 3D 沖煮頭；P.E.P. 脈衝萃取；17 種飲品",
      "奶泡：外接奶管的一鍵式奶泡系統；自動清洗奶路",
      "容量：水箱 1.9 L；豆槽 280 g；粉餅盒約 16 份",
      "尺寸：寬 28 x 深 44.6 x 高 35.1 cm",
      "重量：10 kg",
      "電壓／頻率：120V／60Hz",
      "功率：1450W",
      "清潔維護：整合式沖洗、清潔、除垢與一鍵奶路清洗；CLARIS Smart+ 自動濾芯辨識",
      "耗材／配件相容性：咖啡豆或咖啡粉；CLARIS Smart+ 濾芯；JURA 三相清潔片；奶路清潔劑；除垢片；購買前依台灣代理型號確認供應"
    ],
    "description": "全自動義式咖啡機；P.A.G.2、3D 沖煮與 17 種飲品提供細緻的高階一鍵體驗。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "P.A.G.2、3D 沖煮與 17 種飲品提供細緻的高階一鍵體驗",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 28 x 深 44.6 x 高 35.1 cm、10 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "售價與原廠濾芯、清潔錠及奶路耗材成本都偏高",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "在意黑咖啡品質、介面客製與台灣官方維修的高預算家庭",
    "recommendation": "分型建議：P.A.G.2、3D 沖煮與 17 種飲品提供細緻的高階一鍵體驗。",
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
      "checkedAt": "2026-08-04",
      "note": "官方頁可確認 article 15646，但台灣零售頁只寫 E8 IV、未顯示 15646；exact-model 價格搜尋也沒有取得可重現的同 article 新品史低，因此保守維持找不到。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"JURA E8 15646\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22JURA%20E8%2015646%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"JURA E8 15646\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22JURA%20E8%2015646%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"JURA E8 15646\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22JURA%20E8%2015646%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"JURA E8 15646\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22JURA%20E8%2015646%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"JURA E8 15646\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22JURA%20E8%2015646%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 86,
    "voltage": "120V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣原廠公司貨；JURA 台灣官方頁列保固條件並由瑞技企業提供在台客服與維修",
    "tags": [
      "全自動",
      "旗艦",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-jura-e6-15465",
    "category": "coffee",
    "brand": "JURA",
    "model": "E6 15465",
    "name": "JURA E6 Platin (NAC) 15465 全自動義式咖啡機",
    "rank": 11,
    "budget": "premium",
    "channel": "tw",
    "topPick": false,
    "price": {
      "currency": "TWD",
      "amount": 56900,
      "converted": 56900,
      "basis": "retailer_current",
      "confidence": "2026-11-04 人工核對台灣官方總代理瑞技9087138原商品主區：h1 JURA E6全彩中文脈衝精萃式咖啡機，現價56900、劃線67000、數量1，加入購物車與立即結帳可用，無售完標記。台灣原廠exact 15465產品頁externalBuyUrl直接指向此商品，非US SKU價格。",
      "note": "台灣官方總代理公開新品主價NT$56,900；未扣會員券、點數或信用卡回饋。官方購物說明為確認付款後7個工作日內出貨，配送地區及離島費用依商店條款，不承諾即日出貨。"
    },
    "installation": {
      "status": "not_stated",
      "note": "台灣官方商店提供E6專用教學與台灣總代理售後，公開頁未明示56900是否包含到府安裝/教學及標準範圍，先確認交機安排、偏遠配送與額外服務費。使用接地插座並確認迴路負載及檯面散熱/補水空間。"
    },
    "image": "https://api.jura.com/media/global/images/home-products/e-linie-2022/e6/e6-platin-ec-15440/e6_ec_platin_packshot.jpg?cb=243930",
    "buyUrl": "https://store.eurocafe.com.tw/SalePage/Index/9087138",
    "buyLabel": "JURA台灣總代理瑞技官方商城",
    "specs": [
      "類型：全自動",
      "使用原料：咖啡豆；另設預磨咖啡粉槽",
      "研磨系統：內建Professional Aroma Grinder（P.A.G.）專業Aroma磨豆機；10段咖啡濃度",
      "萃取／沖煮：15 bar；P.E.P.脈衝萃取；5–16g可變沖煮單元；11種飲品；3段沖煮溫度",
      "奶泡：Easy Cappuccino簡易奶泡系統，HP1/CX3奶路/可換噴嘴；使用外接牛奶管，製作奶咖後須清潔奶路",
      "容量：水箱1.9 L；豆槽280 g；咖啡渣盒約16份",
      "尺寸：寬 28 x 深 44.6 x 高 35.1 cm",
      "重量：9.1 kg",
      "電壓／頻率：120V／60Hz；台灣原廠exact NAC 15465頁與其所鏈E6 NAC手冊核對",
      "功率：1450W",
      "清潔維護：整合沖洗、清潔及除垢；依提示更換CLARIS Smart+濾芯，奶路使用後清潔；沖煮單元依原廠保養程序，不宣稱可自行拆洗",
      "耗材／配件相容性：CLARIS Smart+濾芯、JURA三相清潔片、除鈣片及奶系統迷你清潔片；HP1/CX3；J.O.E.相容，Wi-Fi Connect發射器未列隨附，須另確認選配"
    ],
    "description": "台灣官方現行E6 Platin NAC 15465以P.A.G.磨豆、P.E.P.與簡易奶泡系統提供11種咖啡/奶泡/熱水選項，1.9L水箱較適合多人每日使用。台灣原廠產品頁直接連至瑞技現售商品，可辨識15465版本與120V/60Hz電力。",
    "pros": [
      "台灣原廠exact 15465與總代理商品連結可互相核對，公開TWD新品價可購",
      "P.A.G.磨豆、P.E.P.及11種飲品兼顧黑咖啡與卡布奇諾",
      "原廠台灣售後與CLARIS Smart+、清潔耗材有具體來源"
    ],
    "cons": [
      "120V額定，非110V機種；先依原廠交機確認台灣插座及迴路",
      "奶管與噴嘴須每日清潔，濾芯及原廠清潔耗材需持續支出",
      "台灣公開頁未明示保固年限與到府教學費用，購前向瑞技確認隨附保固條件",
      "未找到exact 15465實際上市日期與可信史低；J.O.E.無線模組需另確認選配"
    ],
    "bestFor": "希望以台灣原廠售後支援，兼顧黑咖啡、卡布奇諾與較大水箱的家庭。",
    "recommendation": "全自動奶咖參考款；以台灣官方總代理56900元新品價與NAC 15465電力規格評估，保留奶路清潔及耗材預算。",
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
      "checkedAt": "2026-11-04",
      "note": "已逐頁查台灣官方總代理主價、FindPrice與飛比exact E6 15465價格搜尋。FindPrice只有泛E6當日56900/60000、舊JU15070及配件，未提供exact 15465的可信歷史最低點；飛比連線失敗，補查該站exact型號索引亦無可驗歷史點。不以56900當日價、67000劃線價、US售價或舊ENA4 15344價格推史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-11-04",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "targetHost": "mobile01.com",
          "query": "site:mobile01.com \"E6 15465\" (問題 OR 故障 OR 心得)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22E6%2015465%22%20%28%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E5%BF%83%E5%BE%97%29"
        },
        {
          "platform": "PTT",
          "targetHost": "ptt.cc",
          "query": "site:ptt.cc \"E6 15465\" (問題 OR 故障 OR 心得)",
          "queryUrl": "https://www.google.com/search?q=site%3Aptt.cc%20%22E6%2015465%22%20%28%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E5%BF%83%E5%BE%97%29"
        }
      ]
    },
    "score": 86,
    "voltage": "120V／60Hz、1450W；台灣原廠NAC 15465產品頁連結E6 NAC手冊技術頁確認，使用接地插座並依瑞技交機要求核對迴路。",
    "warranty": "台灣官方總代理瑞技企業公司貨；JURA台灣exact NAC 15465原廠頁明列隨附保固條件，並直接連瑞技官方商城；公開頁未明示保固年限，期限及除外條件以隨機保固文件與瑞技確認為準。台灣客服02-8809-8859分機450／service@eurocafe.com.tw，北中南有客服中心。",
    "tags": [
      "全自動",
      "旗艦",
      "內建磨豆",
      "台灣公司貨",
      "奶咖",
      "保固年限先確認"
    ]
  },
  {
    "id": "coffee-miele-cm5310",
    "category": "coffee",
    "rank": 12,
    "budget": "premium",
    "channel": "tw",
    "brand": "Miele",
    "model": "CM5310",
    "name": "Miele CM5310 獨立式全自動咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 76000,
      "converted": 76000,
      "confidence": "德國 Miele 台灣總代理嘉儀企業產品頁 2026-08-04 exact-model 公開新品價；台灣公司貨／原廠通路"
    },
    "image": "https://miele.kenk.com.tw/file/product-photo/924feb64696846c3b968cb98c3360db6.png",
    "buyUrl": "https://miele.kenk.com.tw/product/coffee/no.cm5310/%E7%8D%A8%E7%AB%8B%E5%BC%8F%E5%85%A8%E8%87%AA%E5%8B%95%E5%92%96%E5%95%A1%E6%A9%9F",
    "buyLabel": "德國 Miele 台灣總代理嘉儀企業產品頁",
    "specs": [
      "類型：全自動",
      "使用原料：咖啡豆；另設咖啡粉槽",
      "研磨系統：內建錐形研磨器；研磨粗細可調；支援咖啡粉槽",
      "萃取／沖煮：15 bar；AromaticSystem；OneTouch for Two，可同時製作兩杯咖啡／奶飲",
      "奶泡：外接奶管的自動奶泡系統",
      "容量：水箱 1.3 L；豆槽 200 g；粉餅盒約 7 份",
      "尺寸：寬 24.1 x 深 46 x 高 36 cm",
      "重量：9.9 kg",
      "電壓／頻率：110V／60Hz",
      "功率：1300W",
      "清潔維護：自動沖洗奶路；可拆式沖泡器；清潔與除垢程式；可拆洗滴水盤與粉餅盒",
      "耗材／配件相容性：咖啡豆或咖啡粉；Miele 清潔錠、除垢錠、奶泡管道清潔粉；購買前依台灣代理型號確認供應"
    ],
    "description": "全自動義式咖啡機；雙杯、OneTouch 奶咖與整壺功能適合家庭分享。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "雙杯、OneTouch 奶咖與整壺功能適合家庭分享",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 24.1 x 深 46 x 高 36 cm、9.9 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "價格高且奶管、沖煮器與除垢仍需依手冊定期維護",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "重視安靜研磨、繁中操作與台灣總代理服務的 Miele 使用者",
    "recommendation": "分型建議：雙杯、OneTouch 奶咖與整壺功能適合家庭分享。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 68000,
      "currency": "TWD",
      "converted": 68000,
      "sourceUrl": "https://www.ye888.com.tw/ec99/rwd1295/product.asp?prodid=cm5310",
      "sourceTitle": "永業 Miele CM5310 全自動咖啡機商品頁",
      "evidenceSnippet": "exact-model 台灣頁公開特價 68,000 元、定價 76,000 元；Yahoo 與 momo 同型號公司貨為 68,400 元。",
      "sourceKind": "retailer_promo",
      "confidence": "medium",
      "checkedAt": "2026-08-04",
      "note": "截至查核日，exact-model 台灣新品頁可重現 68,000 元公開特價；兩個可直接購買的主要通路同為 68,400 元，未採無法回到原始頁的 67,500 元聚合摘要。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Miele CM5310\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Miele%20CM5310%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Miele CM5310\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Miele%20CM5310%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Miele CM5310\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Miele%20CM5310%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Miele CM5310\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Miele%20CM5310%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Miele CM5310\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Miele%20CM5310%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 84,
    "voltage": "110V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣總代理嘉儀公司貨；嘉儀公開保固條款標示台灣地區保固 2 年",
    "tags": [
      "全自動",
      "旗艦",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-electrolux-e5ec1-51st",
    "category": "coffee",
    "rank": 13,
    "budget": "value",
    "channel": "tw",
    "brand": "Electrolux",
    "model": "E5EC1-51ST",
    "name": "1公升極致美味500 半自動義式咖啡機（不鏽鋼觸控式）",
    "price": {
      "currency": "TWD",
      "amount": 3990,
      "converted": 3990,
      "confidence": "E5EC1-51ST 官方商品頁 2026-09-05 人工核對 exact-model 公開現價及可購狀態；非會員券、紅利或加購價",
      "basis": "retailer_current"
    },
    "image": "https://www.electrolux.com.tw/globalassets/appliances/coffee-machine/e5ec1-51st/e5ec1-51st-fr-1500x1500.png?width=1200&height=630",
    "buyUrl": "https://www.electrolux.com.tw/appliances/coffee-machines/e5ec1-51st/",
    "buyLabel": "伊萊克斯台灣官方",
    "specs": [
      "類型：半自動",
      "使用原料：咖啡豆研磨後的咖啡粉",
      "研磨系統：需外接磨豆機；使用咖啡粉",
      "萃取／沖煮：Thermoblock 瞬速加熱、20 bar 幫浦、預設或自訂單／雙杯容量",
      "奶泡：手動蒸汽奶泡管",
      "容量：水箱 1.0L",
      "尺寸：寬 14.7 x 深 41.2 x 高 30.4 cm",
      "重量：3.9 kg",
      "電壓／頻率：110V／60Hz",
      "功率：1140W",
      "清潔維護：可拆濾網組；附清潔針；機身具防滴漏設計",
      "耗材／配件相容性：單杯／E.S.E. 濾網、雙杯濾網；後續濾網與除垢耗材相容型號查不到；購買前依台灣代理型號確認供應"
    ],
    "description": "半自動義式咖啡機；14.7 cm 窄機身、20 bar 幫浦與快速加熱降低半自動入門門檻。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "14.7 cm 窄機身、20 bar 幫浦與快速加熱降低半自動入門門檻",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 14.7 x 深 41.2 x 高 30.4 cm、3.9 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "沒有內建磨豆機，蒸汽與萃取切換需要練習",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "檯面很窄、預算有限且願意另購義式磨豆機的新手",
    "recommendation": "入門推薦：14.7 cm 窄機身、20 bar 幫浦與快速加熱降低半自動入門門檻。",
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
      "checkedAt": "2026-08-04",
      "note": "已查官方現價、LBJ exact-model 曲線與公開比價入口；4,111 元曲線來自無法確認為品牌授權的第三方 Shopee Mall 賣場，2,990 元候選又混有顏色／福利品邊界，未達可信新品史低門檻。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Electrolux E5EC1-51ST\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Electrolux%20E5EC1-51ST%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Electrolux E5EC1-51ST\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Electrolux%20E5EC1-51ST%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Electrolux E5EC1-51ST\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Electrolux%20E5EC1-51ST%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Electrolux E5EC1-51ST\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Electrolux%20E5EC1-51ST%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Electrolux E5EC1-51ST\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Electrolux%20E5EC1-51ST%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 83,
    "voltage": "110V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣伊萊克斯官方公司貨；咖啡機提供 1 年免費保固維修",
    "tags": [
      "入門推薦",
      "半自動",
      "CP 值",
      "外接磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-philips-ems5110-02",
    "category": "coffee",
    "rank": 14,
    "budget": "value",
    "channel": "tw",
    "brand": "Philips",
    "model": "EMS5110/02",
    "name": "Saeco 半自動義式咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 4990,
      "converted": 4990,
      "confidence": "2026-11-05 人工核對同型號原SKU公開報價；供貨與優惠條件見註記。",
      "note": "2026-11-05 人工覆核：Yahoo同型號主商品公開價4990元，主區立即購買／加入購物車可見。 不扣個人化折價券、點數、信用卡回饋或贈品價值。",
      "basis": "retailer_current"
    },
    "image": "https://img.yec.tw/zp/MerchandiseImages/69fb8a2ae4-Gd-11322933.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Philips-%E9%A3%9B%E5%88%A9%E6%B5%A6-Saeco%E5%8D%8A%E8%87%AA%E5%8B%95%E7%BE%A9%E5%BC%8F%E5%92%96%E5%95%A1%E6%A9%9F-EMS5110-02-11322933.html",
    "buyLabel": "Yahoo購物中心自營",
    "specs": [
      "類型：半自動",
      "使用原料：咖啡豆研磨後的咖啡粉",
      "研磨系統：需外接磨豆機；使用咖啡粉",
      "萃取／沖煮：52mm 沖煮把手；單份、雙份與咖啡包粉杯；萃取細節查不到",
      "奶泡：手動蒸汽奶泡管",
      "容量：水箱 1.2L",
      "尺寸：寬 20.0 x 深 31.0 x 高 31.5 cm",
      "重量：5.3 kg",
      "電壓／頻率：110V／60Hz",
      "功率：1100W",
      "清潔維護：可拆水箱與滴水盤；具體除垢週期查不到",
      "耗材／配件相容性：52mm 單／雙份雙層粉杯、咖啡包粉杯；除垢耗材型號查不到；購買前依台灣代理型號確認供應"
    ],
    "description": "半自動義式咖啡機；52 mm 沖煮把手和手動奶泡提供基本義式練習流程。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "52 mm 沖煮把手和手動奶泡提供基本義式練習流程",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 20.0 x 深 31.0 x 高 31.5 cm、5.3 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "需外接磨豆機，溫控與萃取參數的公開資訊較少",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "想用較低預算練習填壓、萃取與奶泡的使用者",
    "recommendation": "分型建議：52 mm 沖煮把手和手動奶泡提供基本義式練習流程。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 4491,
      "currency": "TWD",
      "converted": 4491,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1233739510&cgp=4990",
      "sourceTitle": "LBJ Yahoo 購物 Philips EMS5110/02 exact-model 新品價格曲線",
      "evidenceSnippet": "Yahoo exact-model 裸機曲線於 2025-11-02 至 2025-12-13 多次記錄 4,491 元。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-04",
      "note": "LBJ 可重現 Yahoo exact-model 裸機在 2025-11-02 至 2025-12-13 多次出現 4,491 元；未採套磨豆機、奶泡機或其他組合價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips EMS5110/02\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20EMS5110%2F02%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips EMS5110/02\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20EMS5110%2F02%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Philips EMS5110/02\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Philips%20EMS5110%2F02%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Philips EMS5110/02\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Philips%20EMS5110%2F02%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Philips EMS5110/02\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Philips%20EMS5110%2F02%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 82,
    "voltage": "110V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣飛利浦公司貨；官方頁標示全球 2 年保固",
    "tags": [
      "半自動",
      "CP 值",
      "外接磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-delonghi-em450-m",
    "category": "coffee",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "DeLonghi",
    "model": "EM450.M",
    "name": "啡行家半自動義式咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 5990,
      "converted": 5990,
      "confidence": "2026-10-28 人工覆核同型號同版本公開價與銷售狀態；價格條件與保留參考價原因見註記。",
      "note": "2026-10-31 原頁同型號公開價格5990元；不扣會員券、信用卡、點數或贈品，銷售／出貨條件依原通路。",
      "basis": "retailer_current"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAT03A900J5HMT/000007_1755771859.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Delonghi-官方直營-EM450-M-半自動義式咖啡機-11985428.html",
    "buyLabel": "Yahoo購物（De’Longhi官方直營）",
    "specs": [
      "類型：半自動",
      "使用原料：咖啡豆研磨後的咖啡粉",
      "研磨系統：需外接磨豆機；使用咖啡粉",
      "萃取／沖煮：Thermoblock 瞬熱、15 bar 幫浦、可視壓力表",
      "奶泡：可調式手動蒸汽奶泡系統",
      "容量：水箱 1.7L",
      "尺寸：寬 22.6 x 深 28.3 x 高 31.0 cm",
      "重量：4.1 kg",
      "電壓／頻率：110V／60Hz",
      "功率：1100W",
      "清潔維護：可拆滴水盤；官方台灣頁未列完整除垢程序",
      "耗材／配件相容性：金屬濾杯／沖煮配件；相容耗材型號查不到；購買前依台灣代理型號確認供應"
    ],
    "description": "半自動義式咖啡機；壓力錶、Thermoblock 與金屬配件適合觀察萃取狀態。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "壓力錶、Thermoblock 與金屬配件適合觀察萃取狀態",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 22.6 x 深 28.3 x 高 31.0 cm、4.1 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "需外接磨豆機，蒸汽後降溫與連續出杯需要操作節奏",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "想從壓力錶理解萃取、又偏好 DeLonghi 台灣售後的入門玩家",
    "recommendation": "分型建議：壓力錶、Thermoblock 與金屬配件適合觀察萃取狀態。",
    "releaseDate": "2025",
    "historicalLow": {
      "status": "found",
      "amount": 5990,
      "currency": "TWD",
      "converted": 5990,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=571908732&cgp=5990",
      "sourceTitle": "LBJ De'Longhi 品牌旗艦 EM450.M exact-model 新品價格曲線",
      "evidenceSnippet": "品牌旗艦 exact-model 曲線自 2025-11-01 至 2026-08-04 多次記錄 5,990 元。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-04",
      "note": "LBJ 可重現 De'Longhi 品牌旗艦 exact-model 新品自 2025-11-01 至 2026-08-04 多次為 5,990 元；EC885 與配件候選均排除。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"DeLonghi EM450.M\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22DeLonghi%20EM450.M%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"DeLonghi EM450.M\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22DeLonghi%20EM450.M%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"DeLonghi EM450.M\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22DeLonghi%20EM450.M%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"DeLonghi EM450.M\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22DeLonghi%20EM450.M%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"DeLonghi EM450.M\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22DeLonghi%20EM450.M%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 82,
    "voltage": "110V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣 DeLonghi 原廠公司貨；欣格官方頁標示原廠保固 1 年",
    "tags": [
      "半自動",
      "CP 值",
      "外接磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-philips-psa3218-10",
    "category": "coffee",
    "rank": 16,
    "budget": "value",
    "channel": "tw",
    "brand": "Philips",
    "model": "PSA3218/10",
    "name": "半自動研磨義式咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "momo購物網 2026-08-04 exact-model 公開新品價；台灣公司貨／原廠通路"
    },
    "image": "https://images.philips.com/is/image/philipsconsumer/vrs_8fcb89a37f563817f34e4329e9054edf32f33cc3?wid=700&hei=700&$pnglarge$",
    "buyUrl": "https://www.momoshop.com.tw/product/12830517",
    "buyLabel": "momo購物網",
    "specs": [
      "類型：半自動",
      "使用原料：咖啡豆研磨後的咖啡粉",
      "研磨系統：內建不鏽鋼錐形刀盤磨豆機，15 段研磨；豆槽 250g",
      "萃取／沖煮：15 bar 幫浦、3 秒預浸、壓力錶、PID 三段溫控、粉水定量",
      "奶泡：手動高壓蒸汽棒",
      "容量：水箱 2.3L；豆槽 250g",
      "尺寸：寬 32.0 x 深 41.0 x 高 33.5 cm",
      "重量：8.6 kg",
      "電壓／頻率：110V／60Hz",
      "功率：1120W",
      "清潔維護：可拆水箱；附接粉環；完整清潔／除垢程序查不到",
      "耗材／配件相容性：單層／雙層濾杯、接粉環、拉花缸；除垢耗材型號查不到；購買前依台灣代理型號確認供應"
    ],
    "description": "半自動義式咖啡機；內建 15 段磨豆、壓力錶與 2.3 L 水箱把入門工具整合在一機。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "內建 15 段磨豆、壓力錶與 2.3 L 水箱把入門工具整合在一機",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 32.0 x 深 41.0 x 高 33.5 cm、8.6 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "磨豆與沖煮整合後體積較大，日後升級磨豆機彈性較低",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "不想另配磨豆機、希望一次備齊研磨萃取奶泡的新手",
    "recommendation": "分型建議：內建 15 段磨豆、壓力錶與 2.3 L 水箱把入門工具整合在一機。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 9999,
      "currency": "TWD",
      "converted": 9999,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1221296524&cgp=9999",
      "sourceTitle": "LBJ momo Philips PSA3218/10 exact-model 裸機價格曲線",
      "evidenceSnippet": "momo exact-model 裸機曲線自 2025-05-29 至 2026-07-27 多次記錄 9,999 元。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-04",
      "note": "LBJ 可重現 momo exact-model 裸機自 2025-05-29 至 2026-07-27 多次為 9,999 元；12,900 元大全配組不是相同商品範圍。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips PSA3218/10\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20PSA3218%2F10%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips PSA3218/10\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20PSA3218%2F10%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Philips PSA3218/10\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Philips%20PSA3218%2F10%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Philips PSA3218/10\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Philips%20PSA3218%2F10%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Philips PSA3218/10\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Philips%20PSA3218%2F10%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 82,
    "voltage": "110V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣飛利浦公司貨；官方與 momo 頁標示 2 年保固並提供到府安裝",
    "tags": [
      "半自動",
      "CP 值",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-breville-bes450xl",
    "category": "coffee",
    "rank": 17,
    "budget": "mid",
    "channel": "tw",
    "brand": "Breville",
    "model": "BES450XL",
    "name": "the Bambino 半自動義式咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 8500,
      "converted": 8500,
      "confidence": "2026-11-01 人工核對同型號、同版本原商品頁或官方SKU API公開報價；供貨、優惠與交期見註記。",
      "basis": "retailer_current",
      "note": "2026-11-04 momo14547707 BES450XL金屬銀主價8500、qty1–20、1年保固，預計11/05出貨，不轉借其他版本。"
    },
    "image": "https://storage.googleapis.com/uni-splendor.appspot.com/images/p/4ef71aab-221e-42be-80b7-67676515bb0d.png",
    "buyUrl": "https://www.momoshop.com.tw/product/14547707",
    "buyLabel": "momo（11/1開賣／保留舊參考價）",
    "specs": [
      "類型：半自動",
      "使用原料：咖啡豆研磨後的咖啡粉",
      "研磨系統：需外接磨豆機；使用咖啡粉",
      "萃取／沖煮：54mm 沖煮把手、ThermoJet 3 秒加熱、PID 控溫、低壓預浸、15 bar 幫浦",
      "奶泡：手動蒸汽棒",
      "容量：水箱 1.4L",
      "尺寸：寬 16.0 x 深 34.7 x 高 30.5 cm",
      "重量：4.9 kg",
      "電壓／頻率：110V／60Hz",
      "功率：1450W",
      "清潔維護：可拆滴水盤；沖煮頭與蒸汽棒需手動清潔；除垢週期查不到",
      "耗材／配件相容性：54mm 沖煮配件；相容接粉環 BEA201；清潔錠型號查不到；購買前依台灣代理型號確認供應"
    ],
    "description": "半自動義式咖啡機；3 秒 ThermoJet、PID 與窄機身適合小量快速出杯。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "3 秒 ThermoJet、PID 與窄機身適合小量快速出杯",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 16.0 x 深 34.7 x 高 30.5 cm、4.9 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "需另購能磨義式細粉的磨豆機，蒸汽與萃取不可同時進行",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "空間有限、已有好磨豆機並重視快速預熱的人",
    "recommendation": "分型建議：3 秒 ThermoJet、PID 與窄機身適合小量快速出杯。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 8300,
      "currency": "TWD",
      "converted": 8300,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1262077588&cgp=8300",
      "sourceTitle": "LBJ momo Breville BES450XL exact-model 台灣公司貨價格曲線",
      "evidenceSnippet": "momo exact-model 總代理公司貨曲線在 2026-07-30 記錄 8,300 元。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-08-04",
      "note": "LBJ 可重現 momo exact-model 總代理公司貨在 2026-07-30 的 8,300 元；目前只有一個可驗證低點，因此信心標為 medium。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Breville BES450XL\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Breville%20BES450XL%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Breville BES450XL\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Breville%20BES450XL%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Breville BES450XL\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Breville%20BES450XL%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Breville BES450XL\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Breville%20BES450XL%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Breville BES450XL\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Breville%20BES450XL%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 82,
    "voltage": "110V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣總代理公司貨；momo exact-model 頁標示原廠保固 1 年",
    "tags": [
      "半自動",
      "均衡",
      "外接磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-philips-ess5228-02",
    "category": "coffee",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "Philips",
    "model": "ESS5228/02",
    "name": "Saeco 半自動雙研磨義式咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 18900,
      "converted": 18900,
      "confidence": "PChome 24h購物 2026-08-04 exact-model 公開新品價；台灣公司貨／原廠通路",
      "note": "2026-11-04 Chrome逐筆開啟原商品頁，頁面明示「本商品已熱銷一空，歡迎您繼續瀏覽其他商品」。此金額保留為先前參考價，未確認可購現價；通路售完不等同原廠停產。"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAC4WA900H8QLE/000001_1786352320.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAC4W-A900H8QLE",
    "buyLabel": "PChome（原商品已售完，查看供貨）",
    "specs": [
      "類型：半自動",
      "使用原料：咖啡豆研磨後的咖啡粉",
      "研磨系統：內建不鏽鋼錐形刀盤磨豆機，雙可拆豆槽、30 段研磨；豆槽 250g",
      "萃取／沖煮：雙加熱系統、PID 控溫、20 bar 幫浦、預浸、58mm 沖煮把手",
      "奶泡：360 度手動高壓蒸汽棒",
      "容量：水箱 2.0L；豆槽 250g",
      "尺寸：寬 34.5 x 深 34.1 x 高 42.7 cm",
      "重量：10.76 kg",
      "電壓／頻率：110V／60Hz",
      "功率：1550W",
      "清潔維護：附清潔針與清潔刷；官網提供操作與清潔教學",
      "耗材／配件相容性：58mm 單層／雙層粉碗、無底／分流沖煮把手；除垢耗材型號查不到；購買前依台灣代理型號確認供應"
    ],
    "description": "半自動義式咖啡機；雙可拆豆槽、30 段研磨與雙加熱系統便於切換豆種。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "雙可拆豆槽、30 段研磨與雙加熱系統便於切換豆種",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 34.5 x 深 34.1 x 高 42.7 cm、10.76 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "機身大且清潔零件較多，雙豆槽仍要避免殘粉交叉",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "常在一般豆與低咖啡因豆間切換、又想保留手動萃取的人",
    "recommendation": "分型建議：雙可拆豆槽、30 段研磨與雙加熱系統便於切換豆種。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 17910,
      "currency": "TWD",
      "converted": 17910,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1213304271&cgp=19900",
      "sourceTitle": "LBJ momo Philips ESS5228/02 exact-model 裸機價格曲線",
      "evidenceSnippet": "momo exact-model 裸機曲線於 2026-06-18 記錄 17,910 元。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-08-04",
      "note": "LBJ 可重現 momo exact-model 裸機在 2026-06-18 的 17,910 元；未採贈豆、家電或敲渣桶套組價格。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips ESS5228/02\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20ESS5228%2F02%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips ESS5228/02\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20ESS5228%2F02%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Philips ESS5228/02\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Philips%20ESS5228%2F02%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Philips ESS5228/02\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Philips%20ESS5228%2F02%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Philips ESS5228/02\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Philips%20ESS5228%2F02%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 82,
    "voltage": "110V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣公司貨；全球 2 年保固",
    "tags": [
      "半自動",
      "均衡",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-electrolux-e7ec1-610p",
    "category": "coffee",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "Electrolux",
    "model": "E7EC1-610P",
    "name": "3公升極致美味700 半自動義式咖啡機（珍珠黑）",
    "price": {
      "currency": "TWD",
      "amount": 18900,
      "converted": 18900,
      "confidence": "2026-10-24人工核對www.electrolux.com.tw同型號同版本公開TWD 18900；未扣個人化券、信用卡或點數。",
      "note": "未扣另購產品滿額贈品或優惠；未實際下單。"
    },
    "image": "https://www.electrolux.com.tw/globalassets/appliances/coffee-machine/e7ec1-610p/fr-e7ec1-610p-1500x1500.png?width=1200&height=630",
    "buyUrl": "https://www.electrolux.com.tw/appliances/coffee-machines/e7ec1-610p/",
    "buyLabel": "伊萊克斯台灣官方",
    "specs": [
      "類型：半自動",
      "使用原料：咖啡豆研磨後的咖啡粉",
      "研磨系統：內建抗靜電錐形刀盤磨豆機，30 段研磨",
      "萃取／沖煮：雙加熱塊可同時萃取與打奶泡、58mm 沖煮頭、PID 控溫、預浸、壓力錶",
      "奶泡：專業尺寸手動蒸汽管",
      "容量：水箱 3.0L；豆槽容量查不到",
      "尺寸：寬 35.5 x 深 42.6 x 高 41.3 cm",
      "重量：11.71 kg",
      "電壓／頻率：110V／60Hz",
      "功率：1650W",
      "清潔維護：除垢警示、自動斷電；附清潔刷與清潔針",
      "耗材／配件相容性：58mm 單／雙杯濾網；除垢耗材型號查不到；購買前依台灣代理型號確認供應"
    ],
    "description": "半自動義式咖啡機；雙加熱塊、58 mm 把手與 30 段抗靜電磨豆兼顧連續奶咖。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "雙加熱塊、58 mm 把手與 30 段抗靜電磨豆兼顧連續奶咖",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 35.5 x 深 42.6 x 高 41.3 cm、11.71 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "11.71 kg 與 42.6 cm 深度需要充足檯面和上方投豆空間",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "想把磨豆、萃取與強蒸汽整合，並會微調溫度粉量的進階家庭",
    "recommendation": "半自動推薦：雙加熱塊、58 mm 把手與 30 段抗靜電磨豆兼顧連續奶咖。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 11111,
      "currency": "TWD",
      "converted": 11111,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1221659333&cgp=13900",
      "sourceTitle": "LBJ momo Electrolux E7EC1-610P exact-model 新品價格曲線",
      "evidenceSnippet": "momo exact-model 曲線自 2025-10-25 至 2026-08-04 多次記錄 11,111 元；原頁亦保留公開件數折扣。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-04",
      "note": "LBJ 可重現 momo exact-model 新品自 2025-10-25 至 2026-08-04 多次為 11,111 元；單日 6,000 元曲線與原 listing 價格範圍不一致，未採。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Electrolux E7EC1-610P\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Electrolux%20E7EC1-610P%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Electrolux E7EC1-610P\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Electrolux%20E7EC1-610P%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Electrolux E7EC1-610P\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Electrolux%20E7EC1-610P%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Electrolux E7EC1-610P\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Electrolux%20E7EC1-610P%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Electrolux E7EC1-610P\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Electrolux%20E7EC1-610P%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 82,
    "voltage": "110V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣伊萊克斯官方公司貨；咖啡機提供 1 年免費保固維修",
    "tags": [
      "半自動推薦",
      "半自動",
      "均衡",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-giaretti-gl-5700",
    "category": "coffee",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "Giaretti",
    "model": "GL-5700",
    "name": "Barista EX 系列經典義式濃縮咖啡機（爵士灰）",
    "price": {
      "currency": "TWD",
      "amount": 6911,
      "converted": 6911,
      "confidence": "2026-11-03 人工核對同型號、同版本原商品頁或官方SKU API公開報價；供貨、優惠與交期見註記。",
      "note": "2026-11-03 PChome exact原SKU DMAT09-A900IXUVD，逐筆核對本輪主標題「【義大利Giaretti 珈樂堤】Barista EX系列 經典義式濃縮咖啡機 爵士灰 GL-5700 【義大利Giaretti 珈樂堤】義式磨豆咖啡機-爵士灰 GL-5700」、Qty=5與公開主價6911。 同輪原頁主商品價格/購買入口已閱讀。未扣券/點數/信用卡回饋。",
      "basis": "retailer_current"
    },
    "image": "https://img.pchome.com.tw/cs/items/DMAT09A900IXUVD/000001_1769478978.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAT09-A900IXUVD",
    "buyLabel": "PChome 24h購物",
    "specs": [
      "類型：半自動",
      "使用原料：咖啡豆研磨後的咖啡粉",
      "研磨系統：內建可拆刀盤磨豆機，15 段研磨、定量出粉記憶",
      "萃取／沖煮：58mm 沖煮系統、20 bar 幫浦、雙溫控 PID／NTC",
      "奶泡：手動蒸汽奶泡管",
      "容量：水箱 2.7L；豆槽容量查不到",
      "尺寸：寬 30.1 x 深 33.1 x 高 41.2 cm",
      "重量：9.34 kg",
      "電壓／頻率：110V／60Hz",
      "功率：1300W",
      "清潔維護：磨豆刀盤可拆清潔；附清潔工具",
      "耗材／配件相容性：單杯／雙杯濾網；其餘相容耗材型號查不到；購買前依台灣代理型號確認供應"
    ],
    "description": "半自動義式咖啡機；58 mm 把手、15 段磨豆與 2.7 L 水箱提供較低價的一體式配置。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "58 mm 把手、15 段磨豆與 2.7 L 水箱提供較低價的一體式配置",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 30.1 x 深 33.1 x 高 41.2 cm、9.34 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "刀盤與售後網路不如大型品牌，升級路線與零件供應要先確認",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "預算有限但想要內建磨豆、58 mm 把手與壓力錶的人",
    "recommendation": "分型建議：58 mm 把手、15 段磨豆與 2.7 L 水箱提供較低價的一體式配置。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 6168,
      "currency": "TWD",
      "converted": 6168,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1253866481&cgp=6990",
      "sourceTitle": "LBJ momo Giaretti GL-5700 exact-model 裸機價格曲線",
      "evidenceSnippet": "momo exact-model 裸機曲線於 2025-10-16 至 2025-10-31 記錄 6,168 元。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-08-04",
      "note": "LBJ 可重現 momo exact-model 裸機在 2025-10-16 至 2025-10-31 的 6,168 元；未採贈品組或沒有日期的聚合價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Giaretti GL-5700\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Giaretti%20GL-5700%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Giaretti GL-5700\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Giaretti%20GL-5700%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Giaretti GL-5700\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Giaretti%20GL-5700%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Giaretti GL-5700\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Giaretti%20GL-5700%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Giaretti GL-5700\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Giaretti%20GL-5700%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 82,
    "voltage": "110V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣原廠公司貨；PChome exact-model 頁標示原廠保固 1 年",
    "tags": [
      "半自動",
      "均衡",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-delonghi-ec9255m",
    "category": "coffee",
    "rank": 21,
    "budget": "premium",
    "channel": "tw",
    "brand": "DeLonghi",
    "model": "EC9255M",
    "name": "La Specialista Arte Evo 半自動義式咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 25900,
      "converted": 25900,
      "confidence": "2026-11-01 人工核對同型號、同版本原商品頁或官方SKU API公開報價；供貨、優惠與交期見註記。",
      "basis": "retailer_current",
      "note": "2026-11-01 DeLonghi台灣官方選定EC9255M／EC9255MEX2主商品25900元，原頁同SKU結構化InStock；未採其他推薦型號或會員點數。"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAT03A900K4F0K/000007_1781601666.jpg",
    "buyUrl": "https://www.stilusa.com.tw/zh-TW/products/ec9255m",
    "buyLabel": "De'Longhi 台灣總代理官方商城",
    "specs": [
      "類型：半自動",
      "使用原料：咖啡豆研磨後的咖啡粉",
      "研磨系統：內建不鏽鋼錐形磨豆機，8 段粗細與 40 段研磨份量調整",
      "萃取／沖煮：15 bar；92–96°C 三段萃取溫度；支援熱萃與約 5 分鐘冷萃",
      "奶泡：My LatteArt 手動蒸汽棒",
      "容量：水箱 1.7L",
      "尺寸：寬 28.5 x 深 36.5 x 高 40 cm",
      "重量：9.3 kg",
      "電壓／頻率：110V／60Hz",
      "功率：1150W",
      "清潔維護：沖煮頭、濾杯、磨豆機與蒸汽棒需依官方教學清潔，並依水質定期除垢",
      "耗材／配件相容性：51mm 沖煮把手與濾杯；原廠金屬填壓器、接粉環、奶缸與清潔配件；可搭配 De'Longhi 除垢劑"
    ],
    "description": "2026 年台灣新款半自動義式咖啡機；整合內建磨豆、三段萃取溫度、手動奶泡與約 5 分鐘冷萃。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "8 段磨豆、40 段份量與三段萃取溫度，保留手動調整空間",
      "熱萃、冷萃與 My LatteArt 蒸汽棒整合在同一台機器",
      "台灣總代理官方現貨、一年保固與到府服務資訊完整"
    ],
    "cons": [
      "一體式磨豆機限制後續獨立升級，並需反覆校正研磨與粉量",
      "手動填粉、萃取與奶泡仍有學習曲線，不是一鍵式全自動機",
      "使用後需清潔濾杯、滴水盤、蒸汽棒與磨豆機，並計入除垢耗材成本"
    ],
    "bestFor": "想練習手動萃取與奶泡，同時需要內建磨豆與冷萃功能的進階家庭用戶",
    "recommendation": "半自動新品推薦：EC9255M 用約 5 分鐘冷萃、三段溫控與內建磨豆擴充飲品與調整範圍；但仍需手動填壓、奶泡與清潔。",
    "releaseDate": "2026",
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
      "checkedAt": "2026-08-05",
      "note": "已查 De'Longhi 台灣官方、PChome exact-model 原始頁與 API、FindPrice 與 BigGo；本輪只能重現 27,900–35,900 元現價，沒有附明確日期的可信新品價格曲線。另網頁中的 25,900 元候選實為 TCL 65Q6C 電視，型號不符，不採作本機史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"DeLonghi EC9255M\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22DeLonghi%20EC9255M%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"DeLonghi EC9255M\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22DeLonghi%20EC9255M%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"DeLonghi EC9255M\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22DeLonghi%20EC9255M%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"DeLonghi EC9255M\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22DeLonghi%20EC9255M%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"DeLonghi EC9255M\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22DeLonghi%20EC9255M%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 86,
    "voltage": "110V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣總代理公司貨；原廠 1 年保固；官方提供台灣本島到府安裝教學與到府維修聯絡",
    "tags": [
      "半自動",
      "旗艦",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-breville-bes878xl",
    "category": "coffee",
    "rank": 22,
    "budget": "premium",
    "channel": "tw",
    "brand": "Breville",
    "model": "BES878XL",
    "name": "the Barista Pro 專業級複合式研磨義式咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 28500,
      "converted": 28500,
      "confidence": "2026-11-01 人工核對同型號、同版本原商品頁或官方SKU API公開報價；供貨、優惠與交期見註記。",
      "basis": "retailer_current",
      "note": "2026-11-04 momo14956869 BES878XL雪花白主價28500、qty1–17、1年保固，預計11/05出貨，不轉借其他版本。"
    },
    "image": "https://storage.googleapis.com/uni-splendor.appspot.com/images/p/6cf71d58-a653-465a-a6c3-7089f7f37314.png",
    "buyUrl": "https://www.momoshop.com.tw/product/14956869",
    "buyLabel": "momo（11/1開賣／保留舊參考價）",
    "specs": [
      "類型：半自動",
      "使用原料：咖啡豆研磨後的咖啡粉",
      "研磨系統：內建不鏽鋼錐形刀盤磨豆機，30 段研磨；豆槽約 230g",
      "萃取／沖煮：54mm 沖煮把手、中文 LCD、ThermoJet 3 秒加熱、PID 控溫、低壓預浸",
      "奶泡：手動蒸汽棒",
      "容量：水箱 2.0L；豆槽約 230g",
      "尺寸：寬 35.4 x 深 41.0 x 高 40.6 cm",
      "重量：9.08 kg",
      "電壓／頻率：110V／60Hz",
      "功率：1680W",
      "清潔維護：沖煮頭、磨豆機與蒸汽棒需手動清潔；完整除垢程序查不到",
      "耗材／配件相容性：54mm 沖煮配件；相容 BEA201 接粉環及 BEA202／203／204 配件；購買前依台灣代理型號確認供應"
    ],
    "description": "半自動義式咖啡機；LCD 引導、30 段磨豆與 ThermoJet 提供快速且可重現的工作流。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "LCD 引導、30 段磨豆與 ThermoJet 提供快速且可重現的工作流",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 35.4 x 深 41.0 x 高 40.6 cm、9.08 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "價格接近分體式組合，內建磨豆的升級彈性較小",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "重視操作提示、快速預熱與整潔一體外觀的半自動玩家",
    "recommendation": "分型建議：LCD 引導、30 段磨豆與 ThermoJet 提供快速且可重現的工作流。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 27500,
      "currency": "TWD",
      "converted": 27500,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1269952183&cgp=29300",
      "sourceTitle": "LBJ momo Breville BES878XL exact-model 台灣公司貨價格曲線",
      "evidenceSnippet": "momo exact-model 公司貨曲線於 2026-04-19 至 2026-05-04 記錄 27,500 元。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-08-04",
      "note": "LBJ 可重現 momo exact-model 公司貨在 2026-04-19 至 2026-05-04 的 27,500 元；二手與個人未開箱候選不是可信新品通路。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Breville BES878XL\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Breville%20BES878XL%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Breville BES878XL\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Breville%20BES878XL%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Breville BES878XL\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Breville%20BES878XL%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Breville BES878XL\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Breville%20BES878XL%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Breville BES878XL\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Breville%20BES878XL%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 82,
    "voltage": "110V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣總代理公司貨；momo exact-model 頁標示原廠保固 1 年",
    "tags": [
      "半自動",
      "旗艦",
      "內建磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-lelit-mara-x-pl62x-v2",
    "category": "coffee",
    "rank": 23,
    "budget": "premium",
    "channel": "tw",
    "brand": "Lelit",
    "model": "Mara X PL62X V2",
    "name": "Mara X V2 單孔半自動義式咖啡機",
    "price": {
      "currency": "TWD",
      "amount": 48800,
      "converted": 48800,
      "confidence": "LELIT Taiwan（MJS 梅珍香） 2026-08-04 exact-model 公開新品價；台灣公司貨／原廠通路",
      "note": "2026-11-04 本輪尚無法由原來源重新核對此完整型號／所選版本與可購價格；金額保留為先前參考價，購前請確認型號、版本及供貨。"
    },
    "image": "https://img.shoplineapp.com/media/image_clips/63725fd6b62504001000e514/original.jpg?1668440022",
    "buyUrl": "https://www.lelittaiwan.com/products/lelit-mara-x-pl62x",
    "buyLabel": "LELIT Taiwan（MJS 梅珍香）（來源待確認）",
    "specs": [
      "類型：半自動",
      "使用原料：咖啡豆研磨後的咖啡粉",
      "研磨系統：需外接磨豆機；使用咖啡粉",
      "萃取／沖煮：L58E／E61 類機械預浸沖煮頭、1.8L 熱交換鍋爐、內建 PID、三段溫度與咖啡／蒸汽雙模式",
      "奶泡：手動蒸汽棒；蒸汽與熱水防燙設計",
      "容量：水箱 2.5L；鍋爐 1.8L",
      "尺寸：寬 22.0 x 深 41.0 x 高 35.0 cm",
      "重量：18.8 kg",
      "電壓／頻率：110V／60Hz",
      "功率：1250W",
      "清潔維護：附逆洗濾杯、軟水濾芯與清潔刷；E61 沖煮頭需定期逆洗",
      "耗材／配件相容性：LELIT58 口徑濾杯／把手、軟水濾芯、逆洗清潔粉；購買前依台灣代理型號確認供應"
    ],
    "description": "半自動義式咖啡機；E61 沖煮頭與 HX 溫控模式兼顧濃縮穩定和蒸汽續航。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "E61 沖煮頭與 HX 溫控模式兼顧濃縮穩定和蒸汽續航",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 22.0 x 深 41.0 x 高 35.0 cm、18.8 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "需外接高階磨豆機，暖機、逆洗與水質管理成本高",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "願意投入磨豆機與水質管理、追求 E61 手感和連續奶咖的人",
    "recommendation": "分型建議：E61 沖煮頭與 HX 溫控模式兼顧濃縮穩定和蒸汽續航。",
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
      "checkedAt": "2026-08-04",
      "note": "已查台灣代理 exact-model 現價、可信新品通路與 BigGo exact-model 比價；目前只找到 43,800／44,800 元現價，沒有可重現日期或價格曲線，因此不以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Lelit Mara X PL62X V2\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Lelit%20Mara%20X%20PL62X%20V2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Lelit Mara X PL62X V2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Lelit%20Mara%20X%20PL62X%20V2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Lelit Mara X PL62X V2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Lelit%20Mara%20X%20PL62X%20V2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Lelit Mara X PL62X V2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Lelit%20Mara%20X%20PL62X%20V2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Lelit Mara X PL62X V2\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Lelit%20Mara%20X%20PL62X%20V2%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 82,
    "voltage": "110V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣總代理公司貨；官方通路標示原廠保固 1 年並提供在台維修",
    "tags": [
      "半自動",
      "旗艦",
      "外接磨豆",
      "台灣公司貨"
    ]
  },
  {
    "id": "coffee-rancilio-silvia-pro-x",
    "category": "coffee",
    "rank": 24,
    "budget": "premium",
    "channel": "tw",
    "brand": "Rancilio",
    "model": "Silvia Pro X",
    "name": "Silvia Pro X 雙鍋爐半自動咖啡機 110V",
    "price": {
      "currency": "TWD",
      "amount": 56050,
      "converted": 56050,
      "confidence": "禧龍企業台灣進口商 2026-08-04 exact-model 公開新品價；台灣公司貨／原廠通路"
    },
    "image": "https://img.pchome.com.tw/cs/items/DMAT09A900JCI6N/000001_1786502280.jpg",
    "buyUrl": "https://www.tiamo-cafe.com.tw/ec99/rwd1627/product.asp?category_id=141&prodid=HG6477",
    "buyLabel": "禧龍企業台灣進口商",
    "specs": [
      "類型：半自動",
      "使用原料：咖啡豆研磨後的咖啡粉",
      "研磨系統：需外接磨豆機；使用咖啡粉",
      "萃取／沖煮：58mm 商用沖煮把手、0.3L 咖啡鍋爐＋1.0L 蒸汽鍋爐、雙 PID、可調預浸",
      "奶泡：多向不鏽鋼手動蒸汽棒",
      "容量：水箱 2.0L；咖啡鍋爐 0.3L；蒸汽鍋爐 1.0L",
      "尺寸：寬 25.0 x 深 42.0 x 高 39.0 cm",
      "重量：20 kg",
      "電壓／頻率：110V／60Hz",
      "功率：950–1000W",
      "清潔維護：附逆洗墊片、清洗藥錠、沖煮頭清潔刷與水箱軟水器",
      "耗材／配件相容性：58mm 8.5g／18g 濾杯、清洗藥錠、水箱型軟水器；購買前依台灣代理型號確認供應"
    ],
    "description": "半自動義式咖啡機；雙鍋爐、雙 PID、可調預浸與 58 mm 把手適合精細控制。實際風味仍取決於咖啡豆、研磨、粉水比與清潔狀態。",
    "pros": [
      "雙鍋爐、雙 PID、可調預浸與 58 mm 把手適合精細控制",
      "台灣新品通路提供 TWD 公開價與本地保固",
      "寬 25.0 x 深 42.0 x 高 39.0 cm、20 kg 已納入檯面與搬運評估"
    ],
    "cons": [
      "需外接磨豆機且機身重，逆洗、除垢與鍋爐水質管理不能省略",
      "使用後須清潔咖啡渣、滴水盤與奶泡零件",
      "須依水質與原廠週期除垢並計入耗材成本"
    ],
    "bestFor": "重視濃縮與蒸汽同時工作、想長期精進參數的高階玩家",
    "recommendation": "分型建議：雙鍋爐、雙 PID、可調預浸與 58 mm 把手適合精細控制。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 55000,
      "currency": "TWD",
      "converted": 55000,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1244400604&cgp=55000",
      "sourceTitle": "LBJ Pinkoi Rancilio Silvia Pro X exact-model 新品價格曲線",
      "evidenceSnippet": "Pinkoi exact-model 新品曲線自 2025-03-20 至 2026-07-19 多次記錄 55,000 元。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-04",
      "note": "LBJ 可重現 Pinkoi exact-model 新品自 2025-03-20 至 2026-07-19 多次為 55,000 元；無法落到 exact listing 的 48,888 元摘要、MISS Silvia 變體與點數回饋均排除。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Rancilio Silvia Pro X\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Rancilio%20Silvia%20Pro%20X%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Rancilio Silvia Pro X\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Rancilio%20Silvia%20Pro%20X%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Rancilio Silvia Pro X\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Rancilio%20Silvia%20Pro%20X%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Rancilio Silvia Pro X\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Rancilio%20Silvia%20Pro%20X%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Rancilio Silvia Pro X\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Rancilio%20Silvia%20Pro%20X%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 82,
    "voltage": "110V／60Hz 台灣公司貨；使用前確認獨立接地插座與迴路負載",
    "warranty": "台灣禧龍企業公司貨；原廠保固 1 年並提供桃園在台送修",
    "tags": [
      "半自動",
      "旗艦",
      "外接磨豆",
      "台灣公司貨"
    ]
  },
{
  "id": "coffee-lelit-marax3-pl62x3",
  "category": "coffee",
  "rank": 25,
  "budget": "premium",
  "channel": "tw",
  "brand": "Lelit",
  "model": "PL62X3",
  "name": "MaraX3 110V 半自動義式咖啡機",
  "price": {
    "currency": "TWD",
    "amount": 58800,
    "converted": 58800,
    "basis": "retailer_current",
    "confidence": "2026-11-04 root Chrome Native實讀LELIT Taiwan exact PL62X3 110V主區：58800、劃63800；主button46 #btn-add-to-cart可用、未見缺貨、未加車。",
    "note": "台灣阿爾派官方商城公開新品價，不扣會員券、點數或信用卡。SSR同時帶Sold Out/通知等Angular隱藏模板不可作即時狀態；主購狀態採本輪Native實際呈現，配送及到貨依通路確認。"
  },
  "image": "https://img.shoplineapp.com/media/image_clips/6ae76d02fbe8619ae82a0ce1/original.jpg?1793551617=&owner_id=5f741e937e0fc600394dcaf0",
  "buyUrl": "https://www.lelittaiwan.com/products/lelit-marax3-pl62x3-110v",
  "buyLabel": "LELIT Taiwan阿爾派官方商城",
  "specs": [
    "類型：半自動",
    "使用原料：咖啡豆經外接磨豆機研磨後的咖啡粉",
    "研磨系統：需外接磨豆機；沒有內建磨豆機",
    "萃取／沖煮：L58E沖煮頭、雙探針PID熱交換、Pagaia電子流量撥槳、三段溫控與咖啡／蒸汽雙模式",
    "奶泡：手動三孔防燙多向蒸汽棒，另有熱水棒與Steam boost",
    "容量：1.8L不鏽鋼熱交換鍋爐；水箱2.5L",
    "尺寸：寬 22 x 深 41 x 高 38.5 cm",
    "重量：18.3 kg",
    "電壓／頻率：110V／60Hz；台灣官方原頁明示標準110V15A插座及保留接地",
    "功率：鍋爐加熱元件1200W（台灣110V版）",
    "清潔維護：用後敲渣、沖洗把手/滴盤與蒸汽棒；附盲碗、清潔組及尼龍刷，反沖洗與水質管理依原廠手冊",
    "耗材／配件相容性：LELIT58雙流把手、IMS 9–11g/14–18g/18–21g濾杯與盲碗、70L軟水濾芯、L58E墊圈；台灣實際隨附與補料先核阿爾派"
  ],
  "description": "MaraX3是Mara X家族第三代，以Pagaia電子調節泵功率與萃取水流、三孔蒸汽噴頭及更新外觀區隔V2。台灣阿爾派販售110V60Hz1200W版，需搭外接磨豆機；舊V2未有官方停產文字，保留並列。",
  "pros": [
    "原生Pagaia電子流量撥槳，提供萃取曲線操作",
    "雙探針PID熱交換、三孔蒸氣及防燙蒸汽/熱水棒",
    "台灣原廠列名阿爾派官方通路可購，110V60Hz電力明確"
  ],
  "cons": [
    "需另購磨豆機、練習萃取打奶，清潔與水質管理成本較高",
    "台灣原頁尺寸22×41×38.5cm含增高腳，global官網/技術表另列25.5×53.5×38.5cm；區域/配置差異尚未釐清，下單前須核實本體及擺櫃散熱空間",
    "台灣阿爾派有售後/維修/保固明示但未找到PL62X3公開保固年限，不套其他型號一年",
    "現價58800不是可驗歷史最低價；台灣110V版正式上市日期未明"
  ],
  "bestFor": "已有合適磨豆機、願意調整萃取水流並重視熱交換蒸汽操作的進階玩家。",
  "recommendation": "半自動進階補充款：以Pagaia原生流量控制比較V2是否值得升級，先確認台灣保固條款及尺寸衝突；保留現售舊款，不列Top Pick。",
  "releaseDate": "2026",
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
    "checkedAt": "2026-11-04",
    "note": "已實讀台灣總代理exact110V主頁Native58800，以及FindPrice PL62X3與Feebee PL62X3：前者有月曜咖啡58800索引，後者同款58800與阿爾派63800。均為當期報價，無同110V主機可信日期化歷史低點；不採舊PL62X、海外220V、美規120V或配件價格。"
  },
  "issueResearch": {
    "status": "no_common_issue",
    "checkedAt": "2026-11-04",
    "summary": "截至查核日，查無達門檻的集中負評／災情",
    "issues": [],
    "checkedSources": [
      {
        "platform": "Mobile01",
        "targetHost": "mobile01.com",
        "query": "\"Lelit\" \"PL62X3\" site:mobile01.com (問題 OR 故障 OR 心得)",
        "queryUrl": "https://www.google.com/search?q=%22Lelit%22%20%22PL62X3%22%20site%3Amobile01.com%20(%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E5%BF%83%E5%BE%97)"
      },
      {
        "platform": "PTT",
        "targetHost": "ptt.cc",
        "query": "\"Lelit\" \"PL62X3\" site:ptt.cc (問題 OR 故障 OR 心得)",
        "queryUrl": "https://www.google.com/search?q=%22Lelit%22%20%22PL62X3%22%20site%3Aptt.cc%20(%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E5%BF%83%E5%BE%97)"
      },
      {
        "platform": "Reddit",
        "targetHost": "reddit.com",
        "query": "\"Lelit\" \"PL62X3\" site:reddit.com (problem OR issue OR failure)",
        "queryUrl": "https://www.google.com/search?q=%22Lelit%22%20%22PL62X3%22%20site%3Areddit.com%20(problem%20OR%20issue%20OR%20failure)"
      }
    ]
  },
  "score": 84,
  "voltage": "110V／60Hz；台灣阿爾派exact PL62X3 110V原頁明示1200W、標準110V15A接地插座；出貨電力依台灣版銘牌與原廠資料，不借其他地區版本。",
  "warranty": "台灣阿爾派國際官方通路提供售後、維修及保固，公開年限未標。LELIT原廠Support列ALPINE INTERNATIONAL CO., LTD / Cabra Coffee（花蓮）並直連lelittaiwan.com；阿爾派官方頻道明示全台售後/維修/保固。以購買憑證及隨機保固條件為準，不借V2、海外或其他經銷商年限。",
  "tags": [
    "半自動",
    "旗艦",
    "外接磨豆",
    "Pagaia",
    "110V",
    "台灣公司貨"
  ],
  "topPick": false,
  "installation": {
    "status": "not_stated",
    "note": "官方商品頁未明示到府裝機或基本安裝費是否包含；桌上型需台灣110V15A接地插座及合適檯面，安裝/教學與運送費先向阿爾派確認。"
  }
}
]);
})();
