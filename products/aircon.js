(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("aircon", [
  {
    "id": "aircon-hitachi-ras-22ntb-rac-22np",
    "category": "aircon",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "small",
    "roomSizeUpperPing": 3,
    "brand": "HITACHI",
    "model": "RAS-22NTB / RAC-22NP",
    "modelPair": {
      "indoor": "RAS-22NTB",
      "outdoor": "RAC-22NP"
    },
    "name": "HITACHI RAS-22NTB / RAC-22NP 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 33800,
      "converted": 33800,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/RAS-22NTB.png",
    "buyUrl": "https://www.3uo.tw/ecommerce/RAS-22NTB/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 RAS-22NTB；室外機 RAC-22NP",
      "適用坪數：3 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：2.2 kW",
      "暖房能力：2.7 kW",
      "CSPF／能源效率：9.11 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 84 x 深 27 x 高 31.5 cm；室外機 寬 73 x 深 29 x 高 60 cm",
      "重量：室內機 12 kg；室外機 40 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：內建雲端智慧模組，可遠端控制",
      "安裝／配管：液管 2 分／氣管 3 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 3 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 9.11、能源效率第 1 級",
      "尺寸：室內機 寬 84 x 深 27 x 高 31.5 cm；室外機 寬 73 x 深 29 x 高 60 cm；重量：室內機 12 kg；室外機 40 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "小房間或書房，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "綜合推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HITACHI RAS-22NTB / RAC-22NP\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HITACHI%20RAS-22NTB%20%2F%20RAC-22NP%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HITACHI RAS-22NTB / RAC-22NP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HITACHI%20RAS-22NTB%20%2F%20RAC-22NP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HITACHI RAS-22NTB / RAC-22NP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HITACHI%20RAS-22NTB%20%2F%20RAC-22NP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HITACHI RAS-22NTB / RAC-22NP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HITACHI%20RAS-22NTB%20%2F%20RAC-22NP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HITACHI RAS-22NTB / RAC-22NP\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HITACHI%20RAS-22NTB%20%2F%20RAC-22NP%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 96,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "HITACHI 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書與安裝條件",
    "tags": [
      "一對一分離式變頻冷暖",
      "3坪內",
      "small",
      "R32",
      "一級能效",
      "含基本安裝",
      "日系品牌"
    ]
  },
  {
    "id": "aircon-hitachi-ras-40ntb-rac-40np",
    "category": "aircon",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "medium",
    "roomSizeUpperPing": 7,
    "brand": "HITACHI",
    "model": "RAS-40NTB / RAC-40NP",
    "modelPair": {
      "indoor": "RAS-40NTB",
      "outdoor": "RAC-40NP"
    },
    "name": "HITACHI RAS-40NTB / RAC-40NP 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 48900,
      "converted": 48900,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/RAS-40NTB.png",
    "buyUrl": "https://www.3uo.tw/ecommerce/RAS-40NTB/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 RAS-40NTB；室外機 RAC-40NP",
      "適用坪數：7 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：4.1 kW",
      "暖房能力：4.5 kW",
      "CSPF／能源效率：7.78 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 94 x 深 27 x 高 31.5 cm；室外機 寬 81 x 深 30 x 高 68.5 cm",
      "重量：室內機 14 kg；室外機 48 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：內建雲端智慧模組，可遠端控制",
      "安裝／配管：液管 2 分／氣管 3 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 7 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 7.78、能源效率第 1 級",
      "尺寸：室內機 寬 94 x 深 27 x 高 31.5 cm；室外機 寬 81 x 深 30 x 高 68.5 cm；重量：室內機 14 kg；室外機 48 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "一般臥室或中型工作空間，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HITACHI RAS-40NTB / RAC-40NP\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HITACHI%20RAS-40NTB%20%2F%20RAC-40NP%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HITACHI RAS-40NTB / RAC-40NP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HITACHI%20RAS-40NTB%20%2F%20RAC-40NP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HITACHI RAS-40NTB / RAC-40NP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HITACHI%20RAS-40NTB%20%2F%20RAC-40NP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HITACHI RAS-40NTB / RAC-40NP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HITACHI%20RAS-40NTB%20%2F%20RAC-40NP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HITACHI RAS-40NTB / RAC-40NP\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HITACHI%20RAS-40NTB%20%2F%20RAC-40NP%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 96,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "HITACHI 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書與安裝條件",
    "tags": [
      "一對一分離式變頻冷暖",
      "7坪內",
      "medium",
      "R32",
      "一級能效",
      "含基本安裝",
      "日系品牌"
    ]
  },
  {
    "id": "aircon-hitachi-ras-71ntb-rac-71np",
    "category": "aircon",
    "rank": 3,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "living_dining",
    "roomSizeUpperPing": 12,
    "brand": "HITACHI",
    "model": "RAS-71NTB / RAC-71NP",
    "modelPair": {
      "indoor": "RAS-71NTB",
      "outdoor": "RAC-71NP"
    },
    "name": "HITACHI RAS-71NTB / RAC-71NP 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 69500,
      "converted": 69500,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/RAS-71NTB.png",
    "buyUrl": "https://www.3uo.tw/ecommerce/RAS-71NTB/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 RAS-71NTB；室外機 RAC-71NP",
      "適用坪數：12 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：7.2 kW",
      "暖房能力：8 kW",
      "CSPF／能源效率：6.81 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 111 x 深 28 x 高 31.5 cm；室外機 寬 88 x 深 31.5 x 高 79 cm",
      "重量：室內機 16 kg；室外機 55 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：內建雲端智慧模組，可遠端控制",
      "安裝／配管：液管 2 分／氣管 4 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 12 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 6.81、能源效率第 1 級",
      "尺寸：室內機 寬 111 x 深 28 x 高 31.5 cm；室外機 寬 88 x 深 31.5 x 高 79 cm；重量：室內機 16 kg；室外機 55 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "大客廳、開放式客餐廳或高熱負載空間，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HITACHI RAS-71NTB / RAC-71NP\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HITACHI%20RAS-71NTB%20%2F%20RAC-71NP%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HITACHI RAS-71NTB / RAC-71NP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HITACHI%20RAS-71NTB%20%2F%20RAC-71NP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HITACHI RAS-71NTB / RAC-71NP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HITACHI%20RAS-71NTB%20%2F%20RAC-71NP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HITACHI RAS-71NTB / RAC-71NP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HITACHI%20RAS-71NTB%20%2F%20RAC-71NP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HITACHI RAS-71NTB / RAC-71NP\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HITACHI%20RAS-71NTB%20%2F%20RAC-71NP%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 96,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "HITACHI 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書與安裝條件",
    "tags": [
      "一對一分離式變頻冷暖",
      "12坪內",
      "living_dining",
      "R32",
      "一級能效",
      "含基本安裝",
      "日系品牌"
    ]
  },
  {
    "id": "aircon-panasonic-cs-vx40fa2-cu-ux40fha2",
    "category": "aircon",
    "rank": 4,
    "budget": "mid",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "medium",
    "roomSizeUpperPing": 7,
    "brand": "Panasonic",
    "model": "CS-VX40FA2 / CU-UX40FHA2",
    "modelPair": {
      "indoor": "CS-VX40FA2",
      "outdoor": "CU-UX40FHA2"
    },
    "name": "Panasonic CS-VX40FA2 / CU-UX40FHA2 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 43900,
      "converted": 43900,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/CS-VX40FA2-CU-UX40FHA2.jpg",
    "buyUrl": "https://www.3uo.tw/ecommerce/CS-VX40FA2/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 CS-VX40FA2；室外機 CU-UX40FHA2",
      "適用坪數：7 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：4.1 kW",
      "暖房能力：4.5 kW",
      "CSPF／能源效率：8.00 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 98 x 深 25 x 高 31.5 cm；室外機 寬 86 x 深 28.9 x 高 66.6 cm",
      "重量：室內機 12 kg；室外機 38 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：IoT 智慧健康家電、智能聲控與 ECONAVI",
      "安裝／配管：液管 2 分／氣管 3 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 7 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 8.00、能源效率第 1 級",
      "尺寸：室內機 寬 98 x 深 25 x 高 31.5 cm；室外機 寬 86 x 深 28.9 x 高 66.6 cm；重量：室內機 12 kg；室外機 38 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "一般臥室或中型工作空間，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic CS-VX40FA2 / CU-UX40FHA2\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20CS-VX40FA2%20%2F%20CU-UX40FHA2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic CS-VX40FA2 / CU-UX40FHA2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20CS-VX40FA2%20%2F%20CU-UX40FHA2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic CS-VX40FA2 / CU-UX40FHA2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20CS-VX40FA2%20%2F%20CU-UX40FHA2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic CS-VX40FA2 / CU-UX40FHA2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20CS-VX40FA2%20%2F%20CU-UX40FHA2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic CS-VX40FA2 / CU-UX40FHA2\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20CS-VX40FA2%20%2F%20CU-UX40FHA2%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 95,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "Panasonic 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書與活動條件",
    "tags": [
      "一對一分離式變頻冷暖",
      "7坪內",
      "medium",
      "R32",
      "一級能效",
      "含基本安裝",
      "日系品牌"
    ]
  },
  {
    "id": "aircon-panasonic-cs-vx50fa2-cu-ux50fha2",
    "category": "aircon",
    "rank": 5,
    "budget": "mid",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "large",
    "roomSizeUpperPing": 8,
    "brand": "Panasonic",
    "model": "CS-VX50FA2 / CU-UX50FHA2",
    "modelPair": {
      "indoor": "CS-VX50FA2",
      "outdoor": "CU-UX50FHA2"
    },
    "name": "Panasonic CS-VX50FA2 / CU-UX50FHA2 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 48800,
      "converted": 48800,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/CS-VX50FA2-CU-UX50FHA2.jpg",
    "buyUrl": "https://www.3uo.tw/ecommerce/CS-VX50FA2/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 CS-VX50FA2；室外機 CU-UX50FHA2",
      "適用坪數：8 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：5 kW",
      "暖房能力：5.6 kW",
      "CSPF／能源效率：7.97 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 108 x 深 25 x 高 31.5 cm；室外機 寬 86 x 深 28.9 x 高 66.6 cm",
      "重量：室內機 15 kg；室外機 39 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：IoT 智慧健康家電、智能聲控與 ECONAVI",
      "安裝／配管：液管 2 分／氣管 4 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 8 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 7.97、能源效率第 1 級",
      "尺寸：室內機 寬 108 x 深 25 x 高 31.5 cm；室外機 寬 86 x 深 28.9 x 高 66.6 cm；重量：室內機 15 kg；室外機 39 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "大臥室或中型客餐廳，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic CS-VX50FA2 / CU-UX50FHA2\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20CS-VX50FA2%20%2F%20CU-UX50FHA2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic CS-VX50FA2 / CU-UX50FHA2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20CS-VX50FA2%20%2F%20CU-UX50FHA2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic CS-VX50FA2 / CU-UX50FHA2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20CS-VX50FA2%20%2F%20CU-UX50FHA2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic CS-VX50FA2 / CU-UX50FHA2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20CS-VX50FA2%20%2F%20CU-UX50FHA2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic CS-VX50FA2 / CU-UX50FHA2\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20CS-VX50FA2%20%2F%20CU-UX50FHA2%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 95,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "Panasonic 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書與活動條件",
    "tags": [
      "一對一分離式變頻冷暖",
      "8坪內",
      "large",
      "R32",
      "一級能效",
      "含基本安裝",
      "日系品牌"
    ]
  },
  {
    "id": "aircon-panasonic-cs-vx80fa2-cu-ux80fha2",
    "category": "aircon",
    "rank": 6,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "living_dining",
    "roomSizeUpperPing": 13,
    "brand": "Panasonic",
    "model": "CS-VX80FA2 / CU-UX80FHA2",
    "modelPair": {
      "indoor": "CS-VX80FA2",
      "outdoor": "CU-UX80FHA2"
    },
    "name": "Panasonic CS-VX80FA2 / CU-UX80FHA2 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 76800,
      "converted": 76800,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/CS-VX80FA2-CU-UX80FHA2.jpg",
    "buyUrl": "https://www.3uo.tw/ecommerce/CS-VX80FA2/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 CS-VX80FA2；室外機 CU-UX80FHA2",
      "適用坪數：13 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：8 kW",
      "暖房能力：9.1 kW",
      "CSPF／能源效率：6.88 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 128 x 深 25 x 高 33.5 cm；室外機 寬 88 x 深 34 x 高 92 cm",
      "重量：室內機 18 kg；室外機 60 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：IoT 智慧健康家電、智能聲控與 ECONAVI",
      "安裝／配管：液管 2 分／氣管 5 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 13 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 6.88、能源效率第 1 級",
      "尺寸：室內機 寬 128 x 深 25 x 高 33.5 cm；室外機 寬 88 x 深 34 x 高 92 cm；重量：室內機 18 kg；室外機 60 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "大客廳、開放式客餐廳或高熱負載空間，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic CS-VX80FA2 / CU-UX80FHA2\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20CS-VX80FA2%20%2F%20CU-UX80FHA2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic CS-VX80FA2 / CU-UX80FHA2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20CS-VX80FA2%20%2F%20CU-UX80FHA2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic CS-VX80FA2 / CU-UX80FHA2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20CS-VX80FA2%20%2F%20CU-UX80FHA2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic CS-VX80FA2 / CU-UX80FHA2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20CS-VX80FA2%20%2F%20CU-UX80FHA2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic CS-VX80FA2 / CU-UX80FHA2\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20CS-VX80FA2%20%2F%20CU-UX80FHA2%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 95,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "Panasonic 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書與活動條件",
    "tags": [
      "一對一分離式變頻冷暖",
      "13坪內",
      "living_dining",
      "R32",
      "一級能效",
      "含基本安裝",
      "日系品牌"
    ]
  },
  {
    "id": "aircon-daikin-ftxm36zvlt-rxm36zvlt",
    "category": "aircon",
    "rank": 7,
    "budget": "mid",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "small",
    "roomSizeUpperPing": 5,
    "brand": "Daikin",
    "model": "FTXM36ZVLT / RXM36ZVLT",
    "modelPair": {
      "indoor": "FTXM36ZVLT",
      "outdoor": "RXM36ZVLT"
    },
    "name": "Daikin FTXM36ZVLT / RXM36ZVLT 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 48780,
      "converted": 48780,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/RXM36ZVLT.png",
    "buyUrl": "https://www.3uo.tw/ecommerce/RXM36ZVLT/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 FTXM36ZVLT；室外機 RXM36ZVLT",
      "適用坪數：5 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：3.5 kW",
      "暖房能力：3.8 kW",
      "CSPF／能源效率：6.84 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 83.8 x 深 27.5 x 高 29.9 cm；室外機 寬 84.5 x 深 30 x 高 59.5 cm",
      "重量：室內機 12 kg；室外機 38 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：智慧眼；遠端控制需另購原廠模組",
      "安裝／配管：液管 2 分／氣管 3 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 5 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 6.84、能源效率第 1 級",
      "尺寸：室內機 寬 83.8 x 深 27.5 x 高 29.9 cm；室外機 寬 84.5 x 深 30 x 高 59.5 cm；重量：室內機 12 kg；室外機 38 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "小房間或書房，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Daikin FTXM36ZVLT / RXM36ZVLT\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Daikin%20FTXM36ZVLT%20%2F%20RXM36ZVLT%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Daikin FTXM36ZVLT / RXM36ZVLT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Daikin%20FTXM36ZVLT%20%2F%20RXM36ZVLT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Daikin FTXM36ZVLT / RXM36ZVLT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Daikin%20FTXM36ZVLT%20%2F%20RXM36ZVLT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Daikin FTXM36ZVLT / RXM36ZVLT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Daikin%20FTXM36ZVLT%20%2F%20RXM36ZVLT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Daikin FTXM36ZVLT / RXM36ZVLT\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Daikin%20FTXM36ZVLT%20%2F%20RXM36ZVLT%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 94,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "Daikin 台灣公司貨；全機保固 5 年、主機板 7 年、壓縮機 10 年，登錄延長依活動條件",
    "tags": [
      "一對一分離式變頻冷暖",
      "5坪內",
      "small",
      "R32",
      "一級能效",
      "含基本安裝",
      "日系品牌"
    ]
  },
  {
    "id": "aircon-daikin-ftxm41zvlt-rxm41zvlt",
    "category": "aircon",
    "rank": 8,
    "budget": "mid",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "medium",
    "roomSizeUpperPing": 7,
    "brand": "Daikin",
    "model": "FTXM41ZVLT / RXM41ZVLT",
    "modelPair": {
      "indoor": "FTXM41ZVLT",
      "outdoor": "RXM41ZVLT"
    },
    "name": "Daikin FTXM41ZVLT / RXM41ZVLT 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 54780,
      "converted": 54780,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/RXM41ZVLT.png",
    "buyUrl": "https://www.3uo.tw/ecommerce/RXM41ZVLT/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 FTXM41ZVLT；室外機 RXM41ZVLT",
      "適用坪數：7 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：4.1 kW",
      "暖房能力：4.7 kW",
      "CSPF／能源效率：6.52 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 92 x 深 27.5 x 高 29.9 cm；室外機 寬 84.5 x 深 30 x 高 59.5 cm",
      "重量：室內機 13 kg；室外機 41 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：智慧眼；遠端控制需另購原廠模組",
      "安裝／配管：液管 2 分／氣管 4 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 7 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 6.52、能源效率第 1 級",
      "尺寸：室內機 寬 92 x 深 27.5 x 高 29.9 cm；室外機 寬 84.5 x 深 30 x 高 59.5 cm；重量：室內機 13 kg；室外機 41 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "一般臥室或中型工作空間，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Daikin FTXM41ZVLT / RXM41ZVLT\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Daikin%20FTXM41ZVLT%20%2F%20RXM41ZVLT%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Daikin FTXM41ZVLT / RXM41ZVLT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Daikin%20FTXM41ZVLT%20%2F%20RXM41ZVLT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Daikin FTXM41ZVLT / RXM41ZVLT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Daikin%20FTXM41ZVLT%20%2F%20RXM41ZVLT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Daikin FTXM41ZVLT / RXM41ZVLT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Daikin%20FTXM41ZVLT%20%2F%20RXM41ZVLT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Daikin FTXM41ZVLT / RXM41ZVLT\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Daikin%20FTXM41ZVLT%20%2F%20RXM41ZVLT%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 94,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "Daikin 台灣公司貨；全機保固 5 年、主機板 7 年、壓縮機 10 年，登錄延長依活動條件",
    "tags": [
      "一對一分離式變頻冷暖",
      "7坪內",
      "medium",
      "R32",
      "一級能效",
      "含基本安裝",
      "日系品牌"
    ]
  },
  {
    "id": "aircon-daikin-ftxm60zvlt-rxm60zvlt",
    "category": "aircon",
    "rank": 9,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "large",
    "roomSizeUpperPing": 10,
    "brand": "Daikin",
    "model": "FTXM60ZVLT / RXM60ZVLT",
    "modelPair": {
      "indoor": "FTXM60ZVLT",
      "outdoor": "RXM60ZVLT"
    },
    "name": "Daikin FTXM60ZVLT / RXM60ZVLT 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 69180,
      "converted": 69180,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/RXM60ZVLT.png",
    "buyUrl": "https://www.3uo.tw/ecommerce/RXM60ZVLT/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 FTXM60ZVLT；室外機 RXM60ZVLT",
      "適用坪數：10 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：6 kW",
      "暖房能力：7 kW",
      "CSPF／能源效率：6.20 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 110 x 深 27.5 x 高 29.9 cm；室外機 寬 93 x 深 35 x 高 69.5 cm",
      "重量：室內機 15 kg；室外機 48 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：智慧眼；遠端控制需另購原廠模組",
      "安裝／配管：液管 2 分／氣管 4 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 10 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 6.20、能源效率第 1 級",
      "尺寸：室內機 寬 110 x 深 27.5 x 高 29.9 cm；室外機 寬 93 x 深 35 x 高 69.5 cm；重量：室內機 15 kg；室外機 48 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "大臥室或中型客餐廳，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Daikin FTXM60ZVLT / RXM60ZVLT\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Daikin%20FTXM60ZVLT%20%2F%20RXM60ZVLT%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Daikin FTXM60ZVLT / RXM60ZVLT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Daikin%20FTXM60ZVLT%20%2F%20RXM60ZVLT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Daikin FTXM60ZVLT / RXM60ZVLT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Daikin%20FTXM60ZVLT%20%2F%20RXM60ZVLT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Daikin FTXM60ZVLT / RXM60ZVLT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Daikin%20FTXM60ZVLT%20%2F%20RXM60ZVLT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Daikin FTXM60ZVLT / RXM60ZVLT\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Daikin%20FTXM60ZVLT%20%2F%20RXM60ZVLT%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 94,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "Daikin 台灣公司貨；全機保固 5 年、主機板 7 年、壓縮機 10 年，登錄延長依活動條件",
    "tags": [
      "一對一分離式變頻冷暖",
      "10坪內",
      "large",
      "R32",
      "一級能效",
      "含基本安裝",
      "日系品牌"
    ]
  },
  {
    "id": "aircon-mitsubishi-electric-msy-ga42nj-muy-ga42nj",
    "category": "aircon",
    "rank": 10,
    "budget": "mid",
    "channel": "tw",
    "type": "cooling_only",
    "capacityBand": "medium",
    "roomSizeUpperPing": 7,
    "brand": "Mitsubishi Electric",
    "model": "MSY-GA42NJ / MUY-GA42NJ",
    "modelPair": {
      "indoor": "MSY-GA42NJ",
      "outdoor": "MUY-GA42NJ"
    },
    "name": "Mitsubishi Electric MSY-GA42NJ / MUY-GA42NJ 一對一分離式變頻冷專",
    "price": {
      "currency": "TWD",
      "amount": 37800,
      "converted": 37800,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/MUY-GA42NJ.png",
    "buyUrl": "https://www.3uo.tw/ecommerce/MUY-GA42NJ/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷專",
      "組合型號：室內機 MSY-GA42NJ；室外機 MUY-GA42NJ",
      "適用坪數：7 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：4.1 kW",
      "暖房能力：無暖房",
      "CSPF／能源效率：5.67 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 79.9 x 深 23.2 x 高 29 cm；室外機 寬 80 x 深 28.5 x 高 55 cm",
      "重量：室內機 10 kg；室外機 35 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：無內建 Wi-Fi；週間定時與內部乾燥",
      "安裝／配管：液管 2 分／氣管 3 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷專完整室內外機組，適用上限 7 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 5.67、能源效率第 1 級",
      "尺寸：室內機 寬 79.9 x 深 23.2 x 高 29 cm；室外機 寬 80 x 深 28.5 x 高 55 cm；重量：室內機 10 kg；室外機 35 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "一般臥室或中型工作空間，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷專推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Mitsubishi Electric MSY-GA42NJ / MUY-GA42NJ\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Mitsubishi%20Electric%20MSY-GA42NJ%20%2F%20MUY-GA42NJ%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Mitsubishi Electric MSY-GA42NJ / MUY-GA42NJ\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Mitsubishi%20Electric%20MSY-GA42NJ%20%2F%20MUY-GA42NJ%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Mitsubishi Electric MSY-GA42NJ / MUY-GA42NJ\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Mitsubishi%20Electric%20MSY-GA42NJ%20%2F%20MUY-GA42NJ%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Mitsubishi Electric MSY-GA42NJ / MUY-GA42NJ\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Mitsubishi%20Electric%20MSY-GA42NJ%20%2F%20MUY-GA42NJ%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Mitsubishi Electric MSY-GA42NJ / MUY-GA42NJ\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Mitsubishi%20Electric%20MSY-GA42NJ%20%2F%20MUY-GA42NJ%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 93,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "Mitsubishi Electric 台灣公司貨；全機保固 3 年、主機板 7 年、壓縮機 10 年，依保證書條件",
    "tags": [
      "一對一分離式變頻冷專",
      "7坪內",
      "medium",
      "R32",
      "一級能效",
      "含基本安裝",
      "日系品牌"
    ]
  },
  {
    "id": "aircon-mitsubishi-electric-msy-ga50nj-muy-ga50nj",
    "category": "aircon",
    "rank": 11,
    "budget": "mid",
    "channel": "tw",
    "type": "cooling_only",
    "capacityBand": "large",
    "roomSizeUpperPing": 8,
    "brand": "Mitsubishi Electric",
    "model": "MSY-GA50NJ / MUY-GA50NJ",
    "modelPair": {
      "indoor": "MSY-GA50NJ",
      "outdoor": "MUY-GA50NJ"
    },
    "name": "Mitsubishi Electric MSY-GA50NJ / MUY-GA50NJ 一對一分離式變頻冷專",
    "price": {
      "currency": "TWD",
      "amount": 44500,
      "converted": 44500,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/MUY-GA50NJ.png",
    "buyUrl": "https://www.3uo.tw/ecommerce/MUY-GA50NJ/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷專",
      "組合型號：室內機 MSY-GA50NJ；室外機 MUY-GA50NJ",
      "適用坪數：8 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：5 kW",
      "暖房能力：無暖房",
      "CSPF／能源效率：6.06 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 92.3 x 深 25 x 高 30.5 cm；室外機 寬 80 x 深 28.5 x 高 71.4 cm",
      "重量：室內機 12.5 kg；室外機 41 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：無內建 Wi-Fi；週間定時與內部乾燥",
      "安裝／配管：液管 2 分／氣管 3 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷專完整室內外機組，適用上限 8 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 6.06、能源效率第 1 級",
      "尺寸：室內機 寬 92.3 x 深 25 x 高 30.5 cm；室外機 寬 80 x 深 28.5 x 高 71.4 cm；重量：室內機 12.5 kg；室外機 41 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "大臥室或中型客餐廳，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷專推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Mitsubishi Electric MSY-GA50NJ / MUY-GA50NJ\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Mitsubishi%20Electric%20MSY-GA50NJ%20%2F%20MUY-GA50NJ%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Mitsubishi Electric MSY-GA50NJ / MUY-GA50NJ\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Mitsubishi%20Electric%20MSY-GA50NJ%20%2F%20MUY-GA50NJ%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Mitsubishi Electric MSY-GA50NJ / MUY-GA50NJ\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Mitsubishi%20Electric%20MSY-GA50NJ%20%2F%20MUY-GA50NJ%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Mitsubishi Electric MSY-GA50NJ / MUY-GA50NJ\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Mitsubishi%20Electric%20MSY-GA50NJ%20%2F%20MUY-GA50NJ%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Mitsubishi Electric MSY-GA50NJ / MUY-GA50NJ\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Mitsubishi%20Electric%20MSY-GA50NJ%20%2F%20MUY-GA50NJ%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 93,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "Mitsubishi Electric 台灣公司貨；全機保固 3 年、主機板 7 年、壓縮機 10 年，依保證書條件",
    "tags": [
      "一對一分離式變頻冷專",
      "8坪內",
      "large",
      "R32",
      "一級能效",
      "含基本安裝",
      "日系品牌"
    ]
  },
  {
    "id": "aircon-mitsubishi-electric-msy-ga71nj-muy-ga71nj",
    "category": "aircon",
    "rank": 12,
    "budget": "premium",
    "channel": "tw",
    "type": "cooling_only",
    "capacityBand": "living_dining",
    "roomSizeUpperPing": 12,
    "brand": "Mitsubishi Electric",
    "model": "MSY-GA71NJ / MUY-GA71NJ",
    "modelPair": {
      "indoor": "MSY-GA71NJ",
      "outdoor": "MUY-GA71NJ"
    },
    "name": "Mitsubishi Electric MSY-GA71NJ / MUY-GA71NJ 一對一分離式變頻冷專",
    "price": {
      "currency": "TWD",
      "amount": 61500,
      "converted": 61500,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/MUY-GA71NJ.png",
    "buyUrl": "https://www.3uo.tw/ecommerce/MUY-GA71NJ/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷專",
      "組合型號：室內機 MSY-GA71NJ；室外機 MUY-GA71NJ",
      "適用坪數：12 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：7.2 kW",
      "暖房能力：無暖房",
      "CSPF／能源效率：5.39 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 110 x 深 23.8 x 高 32.5 cm；室外機 寬 84 x 深 33 x 高 88 cm",
      "重量：室內機 15.5 kg；室外機 53 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：無內建 Wi-Fi；週間定時與內部乾燥",
      "安裝／配管：液管 2 分／氣管 4 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷專完整室內外機組，適用上限 12 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 5.39、能源效率第 1 級",
      "尺寸：室內機 寬 110 x 深 23.8 x 高 32.5 cm；室外機 寬 84 x 深 33 x 高 88 cm；重量：室內機 15.5 kg；室外機 53 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "大客廳、開放式客餐廳或高熱負載空間，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷專推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Mitsubishi Electric MSY-GA71NJ / MUY-GA71NJ\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Mitsubishi%20Electric%20MSY-GA71NJ%20%2F%20MUY-GA71NJ%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Mitsubishi Electric MSY-GA71NJ / MUY-GA71NJ\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Mitsubishi%20Electric%20MSY-GA71NJ%20%2F%20MUY-GA71NJ%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Mitsubishi Electric MSY-GA71NJ / MUY-GA71NJ\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Mitsubishi%20Electric%20MSY-GA71NJ%20%2F%20MUY-GA71NJ%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Mitsubishi Electric MSY-GA71NJ / MUY-GA71NJ\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Mitsubishi%20Electric%20MSY-GA71NJ%20%2F%20MUY-GA71NJ%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Mitsubishi Electric MSY-GA71NJ / MUY-GA71NJ\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Mitsubishi%20Electric%20MSY-GA71NJ%20%2F%20MUY-GA71NJ%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 93,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "Mitsubishi Electric 台灣公司貨；全機保固 3 年、主機板 7 年、壓縮機 10 年，依保證書條件",
    "tags": [
      "一對一分離式變頻冷專",
      "12坪內",
      "living_dining",
      "R32",
      "一級能效",
      "含基本安裝",
      "日系品牌"
    ]
  },
  {
    "id": "aircon-sanlux-sae-v28hj3-sac-v28hj3",
    "category": "aircon",
    "rank": 13,
    "budget": "value",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "small",
    "roomSizeUpperPing": 4,
    "brand": "SANLUX",
    "model": "SAE-V28HJ3 / SAC-V28HJ3",
    "modelPair": {
      "indoor": "SAE-V28HJ3",
      "outdoor": "SAC-V28HJ3"
    },
    "name": "SANLUX SAE-V28HJ3 / SAC-V28HJ3 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 18300,
      "converted": 18300,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/SAE-V28HJ3-SAC-V28HJ3.jpg",
    "buyUrl": "https://www.3uo.tw/ecommerce/SAC-V28HJ3/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 SAE-V28HJ3；室外機 SAC-V28HJ3",
      "適用坪數：4 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：2.8 kW",
      "暖房能力：2.8 kW",
      "CSPF／能源效率：6.23 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 79.5 x 深 22.5 x 高 29.5 cm；室外機 寬 86 x 深 30.3 x 高 55.5 cm",
      "重量：室內機 10.3 kg；室外機 25.5 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：Wi-Fi 遠端控制需另購；液晶無線遙控",
      "安裝／配管：液管 2 分／氣管 3 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 4 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 6.23、能源效率第 1 級",
      "尺寸：室內機 寬 79.5 x 深 22.5 x 高 29.5 cm；室外機 寬 86 x 深 30.3 x 高 55.5 cm；重量：室內機 10.3 kg；室外機 25.5 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "小房間或書房，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SANLUX SAE-V28HJ3 / SAC-V28HJ3\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SANLUX%20SAE-V28HJ3%20%2F%20SAC-V28HJ3%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SANLUX SAE-V28HJ3 / SAC-V28HJ3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SANLUX%20SAE-V28HJ3%20%2F%20SAC-V28HJ3%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SANLUX SAE-V28HJ3 / SAC-V28HJ3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SANLUX%20SAE-V28HJ3%20%2F%20SAC-V28HJ3%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SANLUX SAE-V28HJ3 / SAC-V28HJ3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SANLUX%20SAE-V28HJ3%20%2F%20SAC-V28HJ3%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SANLUX SAE-V28HJ3 / SAC-V28HJ3\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SANLUX%20SAE-V28HJ3%20%2F%20SAC-V28HJ3%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 92,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "SANLUX 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書條件",
    "tags": [
      "一對一分離式變頻冷暖",
      "4坪內",
      "small",
      "R32",
      "一級能效",
      "含基本安裝"
    ]
  },
  {
    "id": "aircon-sanlux-sae-v63hj3-sac-v63hj3",
    "category": "aircon",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "large",
    "roomSizeUpperPing": 10,
    "brand": "SANLUX",
    "model": "SAE-V63HJ3 / SAC-V63HJ3",
    "modelPair": {
      "indoor": "SAE-V63HJ3",
      "outdoor": "SAC-V63HJ3"
    },
    "name": "SANLUX SAE-V63HJ3 / SAC-V63HJ3 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 38800,
      "converted": 38800,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/SAE-V63HJ3-SAC-V63HJ3.jpg",
    "buyUrl": "https://www.3uo.tw/ecommerce/SAC-V63HJ3/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 SAE-V63HJ3；室外機 SAC-V63HJ3",
      "適用坪數：10 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：6.3 kW",
      "暖房能力：6.3 kW",
      "CSPF／能源效率：5.60 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 114 x 深 27.5 x 高 37 cm；室外機 寬 97.5 x 深 34.2 x 高 67.3 cm",
      "重量：室內機 17.4 kg；室外機 39.9 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：Wi-Fi 遠端控制需另購；液晶無線遙控",
      "安裝／配管：液管 2 分／氣管 4 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 10 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 5.60、能源效率第 1 級",
      "尺寸：室內機 寬 114 x 深 27.5 x 高 37 cm；室外機 寬 97.5 x 深 34.2 x 高 67.3 cm；重量：室內機 17.4 kg；室外機 39.9 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "大臥室或中型客餐廳，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SANLUX SAE-V63HJ3 / SAC-V63HJ3\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SANLUX%20SAE-V63HJ3%20%2F%20SAC-V63HJ3%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SANLUX SAE-V63HJ3 / SAC-V63HJ3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SANLUX%20SAE-V63HJ3%20%2F%20SAC-V63HJ3%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SANLUX SAE-V63HJ3 / SAC-V63HJ3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SANLUX%20SAE-V63HJ3%20%2F%20SAC-V63HJ3%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SANLUX SAE-V63HJ3 / SAC-V63HJ3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SANLUX%20SAE-V63HJ3%20%2F%20SAC-V63HJ3%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SANLUX SAE-V63HJ3 / SAC-V63HJ3\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SANLUX%20SAE-V63HJ3%20%2F%20SAC-V63HJ3%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 92,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "SANLUX 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書條件",
    "tags": [
      "一對一分離式變頻冷暖",
      "10坪內",
      "large",
      "R32",
      "一級能效",
      "含基本安裝"
    ]
  },
  {
    "id": "aircon-sanlux-sae-v72hj3-sac-v72hj3",
    "category": "aircon",
    "rank": 15,
    "budget": "mid",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "living_dining",
    "roomSizeUpperPing": 12,
    "brand": "SANLUX",
    "model": "SAE-V72HJ3 / SAC-V72HJ3",
    "modelPair": {
      "indoor": "SAE-V72HJ3",
      "outdoor": "SAC-V72HJ3"
    },
    "name": "SANLUX SAE-V72HJ3 / SAC-V72HJ3 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 41800,
      "converted": 41800,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/SAE-V72HJ3-SAC-V72HJ3.jpg",
    "buyUrl": "https://www.3uo.tw/ecommerce/SAC-V72HJ3/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 SAE-V72HJ3；室外機 SAC-V72HJ3",
      "適用坪數：12 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：7.2 kW",
      "暖房能力：7.2 kW",
      "CSPF／能源效率：5.37 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 114 x 深 27.5 x 高 37 cm；室外機 寬 97.5 x 深 34.2 x 高 67.3 cm",
      "重量：室內機 17.6 kg；室外機 44.7 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：Wi-Fi 遠端控制需另購；液晶無線遙控",
      "安裝／配管：液管 2 分／氣管 5 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 12 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 5.37、能源效率第 1 級",
      "尺寸：室內機 寬 114 x 深 27.5 x 高 37 cm；室外機 寬 97.5 x 深 34.2 x 高 67.3 cm；重量：室內機 17.6 kg；室外機 44.7 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "大客廳、開放式客餐廳或高熱負載空間，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SANLUX SAE-V72HJ3 / SAC-V72HJ3\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SANLUX%20SAE-V72HJ3%20%2F%20SAC-V72HJ3%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SANLUX SAE-V72HJ3 / SAC-V72HJ3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SANLUX%20SAE-V72HJ3%20%2F%20SAC-V72HJ3%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SANLUX SAE-V72HJ3 / SAC-V72HJ3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SANLUX%20SAE-V72HJ3%20%2F%20SAC-V72HJ3%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SANLUX SAE-V72HJ3 / SAC-V72HJ3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SANLUX%20SAE-V72HJ3%20%2F%20SAC-V72HJ3%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SANLUX SAE-V72HJ3 / SAC-V72HJ3\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SANLUX%20SAE-V72HJ3%20%2F%20SAC-V72HJ3%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 92,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "SANLUX 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書條件",
    "tags": [
      "一對一分離式變頻冷暖",
      "12坪內",
      "living_dining",
      "R32",
      "一級能效",
      "含基本安裝"
    ]
  },
  {
    "id": "aircon-heran-hi-sl36-ho-sl36",
    "category": "aircon",
    "rank": 16,
    "budget": "mid",
    "channel": "tw",
    "type": "cooling_only",
    "capacityBand": "small",
    "roomSizeUpperPing": 5,
    "brand": "HERAN",
    "model": "HI-SL36 / HO-SL36",
    "modelPair": {
      "indoor": "HI-SL36",
      "outdoor": "HO-SL36"
    },
    "name": "HERAN HI-SL36 / HO-SL36 一對一分離式變頻冷專",
    "price": {
      "currency": "TWD",
      "amount": 36000,
      "converted": 36000,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/HO-SL36.jpg",
    "buyUrl": "https://www.3uo.tw/ecommerce/HO-SL36/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷專",
      "組合型號：室內機 HI-SL36；室外機 HO-SL36",
      "適用坪數：5 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：3.6 kW",
      "暖房能力：無暖房",
      "CSPF／能源效率：6.75 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 97.8 x 深 24.8 x 高 33.3 cm；室外機 寬 80 x 深 35 x 高 55.5 cm",
      "重量：室內機 13.5 kg；室外機 29 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：Wi-Fi、智能溫濕控制與智能聲控皆為選配",
      "安裝／配管：液管 2 分／氣管 3 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷專完整室內外機組，適用上限 5 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 6.75、能源效率第 1 級",
      "尺寸：室內機 寬 97.8 x 深 24.8 x 高 33.3 cm；室外機 寬 80 x 深 35 x 高 55.5 cm；重量：室內機 13.5 kg；室外機 29 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "小房間或書房，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷專推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HERAN HI-SL36 / HO-SL36\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HERAN%20HI-SL36%20%2F%20HO-SL36%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HERAN HI-SL36 / HO-SL36\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HERAN%20HI-SL36%20%2F%20HO-SL36%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HERAN HI-SL36 / HO-SL36\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HERAN%20HI-SL36%20%2F%20HO-SL36%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HERAN HI-SL36 / HO-SL36\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HERAN%20HI-SL36%20%2F%20HO-SL36%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HERAN HI-SL36 / HO-SL36\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HERAN%20HI-SL36%20%2F%20HO-SL36%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 91,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "HERAN 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書條件",
    "tags": [
      "一對一分離式變頻冷專",
      "5坪內",
      "small",
      "R32",
      "一級能效",
      "含基本安裝"
    ]
  },
  {
    "id": "aircon-heran-hi-sl41r-ho-sl41r",
    "category": "aircon",
    "rank": 17,
    "budget": "mid",
    "channel": "tw",
    "type": "cooling_only",
    "capacityBand": "medium",
    "roomSizeUpperPing": 7,
    "brand": "HERAN",
    "model": "HI-SL41R / HO-SL41R",
    "modelPair": {
      "indoor": "HI-SL41R",
      "outdoor": "HO-SL41R"
    },
    "name": "HERAN HI-SL41R / HO-SL41R 一對一分離式變頻冷專",
    "price": {
      "currency": "TWD",
      "amount": 36400,
      "converted": 36400,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/HO-SL41R.jpg",
    "buyUrl": "https://www.3uo.tw/ecommerce/HO-SL41R/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷專",
      "組合型號：室內機 HI-SL41R；室外機 HO-SL41R",
      "適用坪數：7 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：4.3 kW",
      "暖房能力：無暖房",
      "CSPF／能源效率：6.01 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 97.8 x 深 24.8 x 高 33.3 cm；室外機 寬 80 x 深 35 x 高 55.5 cm",
      "重量：室內機 13.5 kg；室外機 29 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：Wi-Fi、智能溫濕控制與智能聲控皆為選配",
      "安裝／配管：液管 2 分／氣管 3 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷專完整室內外機組，適用上限 7 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 6.01、能源效率第 1 級",
      "尺寸：室內機 寬 97.8 x 深 24.8 x 高 33.3 cm；室外機 寬 80 x 深 35 x 高 55.5 cm；重量：室內機 13.5 kg；室外機 29 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "一般臥室或中型工作空間，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷專推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HERAN HI-SL41R / HO-SL41R\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HERAN%20HI-SL41R%20%2F%20HO-SL41R%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HERAN HI-SL41R / HO-SL41R\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HERAN%20HI-SL41R%20%2F%20HO-SL41R%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HERAN HI-SL41R / HO-SL41R\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HERAN%20HI-SL41R%20%2F%20HO-SL41R%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HERAN HI-SL41R / HO-SL41R\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HERAN%20HI-SL41R%20%2F%20HO-SL41R%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HERAN HI-SL41R / HO-SL41R\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HERAN%20HI-SL41R%20%2F%20HO-SL41R%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 91,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "HERAN 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書條件",
    "tags": [
      "一對一分離式變頻冷專",
      "7坪內",
      "medium",
      "R32",
      "一級能效",
      "含基本安裝"
    ]
  },
  {
    "id": "aircon-heran-hi-sl80-ho-sl80",
    "category": "aircon",
    "rank": 18,
    "budget": "premium",
    "channel": "tw",
    "type": "cooling_only",
    "capacityBand": "living_dining",
    "roomSizeUpperPing": 13,
    "brand": "HERAN",
    "model": "HI-SL80 / HO-SL80",
    "modelPair": {
      "indoor": "HI-SL80",
      "outdoor": "HO-SL80"
    },
    "name": "HERAN HI-SL80 / HO-SL80 一對一分離式變頻冷專",
    "price": {
      "currency": "TWD",
      "amount": 57900,
      "converted": 57900,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/HO-SL80.jpg",
    "buyUrl": "https://www.3uo.tw/ecommerce/HO-SL80/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷專",
      "組合型號：室內機 HI-SL80；室外機 HO-SL80",
      "適用坪數：13 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：8 kW",
      "暖房能力：無暖房",
      "CSPF／能源效率：5.37 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 108.1 x 深 24.8 x 高 32.5 cm；室外機 寬 96 x 深 40.2 x 高 66 cm",
      "重量：室內機 16 kg；室外機 44.5 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：Wi-Fi 遠端控制為選配",
      "安裝／配管：液管 2 分／氣管 5 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷專完整室內外機組，適用上限 13 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 5.37、能源效率第 1 級",
      "尺寸：室內機 寬 108.1 x 深 24.8 x 高 32.5 cm；室外機 寬 96 x 深 40.2 x 高 66 cm；重量：室內機 16 kg；室外機 44.5 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "大客廳、開放式客餐廳或高熱負載空間，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷專推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HERAN HI-SL80 / HO-SL80\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HERAN%20HI-SL80%20%2F%20HO-SL80%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HERAN HI-SL80 / HO-SL80\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HERAN%20HI-SL80%20%2F%20HO-SL80%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HERAN HI-SL80 / HO-SL80\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HERAN%20HI-SL80%20%2F%20HO-SL80%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HERAN HI-SL80 / HO-SL80\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HERAN%20HI-SL80%20%2F%20HO-SL80%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HERAN HI-SL80 / HO-SL80\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HERAN%20HI-SL80%20%2F%20HO-SL80%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 91,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "HERAN 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書條件",
    "tags": [
      "一對一分離式變頻冷專",
      "13坪內",
      "living_dining",
      "R32",
      "一級能效",
      "含基本安裝"
    ]
  },
  {
    "id": "aircon-gree-gks-23ci-gks-23co",
    "category": "aircon",
    "rank": 19,
    "budget": "value",
    "channel": "tw",
    "type": "cooling_only",
    "capacityBand": "small",
    "roomSizeUpperPing": 3,
    "brand": "GREE",
    "model": "GKS-23CI / GKS-23CO",
    "modelPair": {
      "indoor": "GKS-23CI",
      "outdoor": "GKS-23CO"
    },
    "name": "GREE GKS-23CI / GKS-23CO 一對一分離式變頻冷專",
    "price": {
      "currency": "TWD",
      "amount": 17800,
      "converted": 17800,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/GKS-23CO.jpg",
    "buyUrl": "https://www.3uo.tw/ecommerce/GKS-23CO/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷專",
      "組合型號：室內機 GKS-23CI；室外機 GKS-23CO",
      "適用坪數：3 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：2.4 kW",
      "暖房能力：無暖房",
      "CSPF／能源效率：6.24 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 82.5 x 深 19.6 x 高 29.3 cm；室外機 寬 73.2 x 深 33 x 高 55.5 cm",
      "重量：室內機 9.5 kg；室外機 24 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：隨身感溫；未標示 Wi-Fi 遠端控制",
      "安裝／配管：液管 2 分／氣管 3 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷專完整室內外機組，適用上限 3 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 6.24、能源效率第 1 級",
      "尺寸：室內機 寬 82.5 x 深 19.6 x 高 29.3 cm；室外機 寬 73.2 x 深 33 x 高 55.5 cm；重量：室內機 9.5 kg；室外機 24 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "小房間或書房，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷專推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"GREE GKS-23CI / GKS-23CO\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22GREE%20GKS-23CI%20%2F%20GKS-23CO%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"GREE GKS-23CI / GKS-23CO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22GREE%20GKS-23CI%20%2F%20GKS-23CO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"GREE GKS-23CI / GKS-23CO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22GREE%20GKS-23CI%20%2F%20GKS-23CO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"GREE GKS-23CI / GKS-23CO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22GREE%20GKS-23CI%20%2F%20GKS-23CO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"GREE GKS-23CI / GKS-23CO\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22GREE%20GKS-23CI%20%2F%20GKS-23CO%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 90,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "GREE 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書條件",
    "tags": [
      "一對一分離式變頻冷專",
      "3坪內",
      "small",
      "R32",
      "一級能效",
      "含基本安裝"
    ]
  },
  {
    "id": "aircon-gree-gks-41ci-gks-41co",
    "category": "aircon",
    "rank": 20,
    "budget": "value",
    "channel": "tw",
    "type": "cooling_only",
    "capacityBand": "medium",
    "roomSizeUpperPing": 7,
    "brand": "GREE",
    "model": "GKS-41CI / GKS-41CO",
    "modelPair": {
      "indoor": "GKS-41CI",
      "outdoor": "GKS-41CO"
    },
    "name": "GREE GKS-41CI / GKS-41CO 一對一分離式變頻冷專",
    "price": {
      "currency": "TWD",
      "amount": 26800,
      "converted": 26800,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/GKS-41CO.jpg",
    "buyUrl": "https://www.3uo.tw/ecommerce/GKS-41CO/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷專",
      "組合型號：室內機 GKS-41CI；室外機 GKS-41CO",
      "適用坪數：7 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：4.3 kW",
      "暖房能力：無暖房",
      "CSPF／能源效率：5.60 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 82.5 x 深 19.6 x 高 29.3 cm；室外機 寬 80.2 x 深 35 x 高 55.5 cm",
      "重量：室內機 9.5 kg；室外機 29 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：隨身感溫；未標示 Wi-Fi 遠端控制",
      "安裝／配管：液管 2 分／氣管 4 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷專完整室內外機組，適用上限 7 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 5.60、能源效率第 1 級",
      "尺寸：室內機 寬 82.5 x 深 19.6 x 高 29.3 cm；室外機 寬 80.2 x 深 35 x 高 55.5 cm；重量：室內機 9.5 kg；室外機 29 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "一般臥室或中型工作空間，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷專推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"GREE GKS-41CI / GKS-41CO\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22GREE%20GKS-41CI%20%2F%20GKS-41CO%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"GREE GKS-41CI / GKS-41CO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22GREE%20GKS-41CI%20%2F%20GKS-41CO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"GREE GKS-41CI / GKS-41CO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22GREE%20GKS-41CI%20%2F%20GKS-41CO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"GREE GKS-41CI / GKS-41CO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22GREE%20GKS-41CI%20%2F%20GKS-41CO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"GREE GKS-41CI / GKS-41CO\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22GREE%20GKS-41CI%20%2F%20GKS-41CO%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 90,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "GREE 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書條件",
    "tags": [
      "一對一分離式變頻冷專",
      "7坪內",
      "medium",
      "R32",
      "一級能效",
      "含基本安裝"
    ]
  },
  {
    "id": "aircon-gree-gks-63ci-gks-63co",
    "category": "aircon",
    "rank": 21,
    "budget": "mid",
    "channel": "tw",
    "type": "cooling_only",
    "capacityBand": "large",
    "roomSizeUpperPing": 10,
    "brand": "GREE",
    "model": "GKS-63CI / GKS-63CO",
    "modelPair": {
      "indoor": "GKS-63CI",
      "outdoor": "GKS-63CO"
    },
    "name": "GREE GKS-63CI / GKS-63CO 一對一分離式變頻冷專",
    "price": {
      "currency": "TWD",
      "amount": 39800,
      "converted": 39800,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/GKS-63CO.jpg",
    "buyUrl": "https://www.3uo.tw/ecommerce/GKS-63CO/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷專",
      "組合型號：室內機 GKS-63CI；室外機 GKS-63CO",
      "適用坪數：10 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：6.3 kW",
      "暖房能力：無暖房",
      "CSPF／能源效率：5.61 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 107.5 x 深 24.6 x 高 33.3 cm；室外機 寬 87.3 x 深 37.6 x 高 55.5 cm",
      "重量：室內機 17 kg；室外機 42 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：隨身感溫；未標示 Wi-Fi 遠端控制",
      "安裝／配管：液管 2 分／氣管 5 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷專完整室內外機組，適用上限 10 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 5.61、能源效率第 1 級",
      "尺寸：室內機 寬 107.5 x 深 24.6 x 高 33.3 cm；室外機 寬 87.3 x 深 37.6 x 高 55.5 cm；重量：室內機 17 kg；室外機 42 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "大臥室或中型客餐廳，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷專推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"GREE GKS-63CI / GKS-63CO\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22GREE%20GKS-63CI%20%2F%20GKS-63CO%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"GREE GKS-63CI / GKS-63CO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22GREE%20GKS-63CI%20%2F%20GKS-63CO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"GREE GKS-63CI / GKS-63CO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22GREE%20GKS-63CI%20%2F%20GKS-63CO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"GREE GKS-63CI / GKS-63CO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22GREE%20GKS-63CI%20%2F%20GKS-63CO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"GREE GKS-63CI / GKS-63CO\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22GREE%20GKS-63CI%20%2F%20GKS-63CO%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 90,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "GREE 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書條件",
    "tags": [
      "一對一分離式變頻冷專",
      "10坪內",
      "large",
      "R32",
      "一級能效",
      "含基本安裝"
    ]
  },
  {
    "id": "aircon-lg-lsn28ddhs-lsu28dhs",
    "category": "aircon",
    "rank": 22,
    "budget": "value",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "small",
    "roomSizeUpperPing": 4,
    "brand": "LG",
    "model": "LSN28DDHS / LSU28DHS",
    "modelPair": {
      "indoor": "LSN28DDHS",
      "outdoor": "LSU28DHS"
    },
    "name": "LG LSN28DDHS / LSU28DHS 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 26800,
      "converted": 26800,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/LSN28DDHS-LSU28DHS.jpg",
    "buyUrl": "https://www.3uo.tw/ecommerce/LSN28DDHS/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 LSN28DDHS；室外機 LSU28DHS",
      "適用坪數：4 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：2.8 kW",
      "暖房能力：3.4 kW",
      "CSPF／能源效率：6.35 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 89.5 x 深 23.5 x 高 30.7 cm；室外機 寬 77 x 深 28.8 x 高 54.5 cm",
      "重量：室內機 11 kg；室外機 32.8 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：內建 Wi-Fi，可用 LG ThinQ 遠端控制與管理用電",
      "安裝／配管：液管 2 分／氣管 3 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 4 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 6.35、能源效率第 1 級",
      "尺寸：室內機 寬 89.5 x 深 23.5 x 高 30.7 cm；室外機 寬 77 x 深 28.8 x 高 54.5 cm；重量：室內機 11 kg；室外機 32.8 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "小房間或書房，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG LSN28DDHS / LSU28DHS\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20LSN28DDHS%20%2F%20LSU28DHS%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG LSN28DDHS / LSU28DHS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20LSN28DDHS%20%2F%20LSU28DHS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG LSN28DDHS / LSU28DHS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20LSN28DDHS%20%2F%20LSU28DHS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG LSN28DDHS / LSU28DHS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20LSN28DDHS%20%2F%20LSU28DHS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG LSN28DDHS / LSU28DHS\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20LSN28DDHS%20%2F%20LSU28DHS%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 89,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "LG 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書與活動條件",
    "tags": [
      "一對一分離式變頻冷暖",
      "4坪內",
      "small",
      "R32",
      "一級能效",
      "含基本安裝"
    ]
  },
  {
    "id": "aircon-lg-lsn50ddhst-lsu50dhst",
    "category": "aircon",
    "rank": 23,
    "budget": "mid",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "large",
    "roomSizeUpperPing": 8,
    "brand": "LG",
    "model": "LSN50DDHST / LSU50DHST",
    "modelPair": {
      "indoor": "LSN50DDHST",
      "outdoor": "LSU50DHST"
    },
    "name": "LG LSN50DDHST / LSU50DHST 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 53900,
      "converted": 53900,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/LSN50DDHST-LSU50DHST.png",
    "buyUrl": "https://www.3uo.tw/ecommerce/LSN50DDHST/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 LSN50DDHST；室外機 LSU50DHST",
      "適用坪數：8 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：5 kW",
      "暖房能力：5.6 kW",
      "CSPF／能源效率：6.00 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 105 x 深 23.5 x 高 30.7 cm；室外機 寬 97.4 x 深 38.6 x 高 65 cm",
      "重量：室內機 12.8 kg；室外機 40 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：內建 Wi-Fi，可用 LG ThinQ 遠端控制、AI 氣流與管理用電",
      "安裝／配管：液管 2 分／氣管 4 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 8 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 6.00、能源效率第 1 級",
      "尺寸：室內機 寬 105 x 深 23.5 x 高 30.7 cm；室外機 寬 97.4 x 深 38.6 x 高 65 cm；重量：室內機 12.8 kg；室外機 40 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "大臥室或中型客餐廳，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG LSN50DDHST / LSU50DHST\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20LSN50DDHST%20%2F%20LSU50DHST%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG LSN50DDHST / LSU50DHST\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20LSN50DDHST%20%2F%20LSU50DHST%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG LSN50DDHST / LSU50DHST\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20LSN50DDHST%20%2F%20LSU50DHST%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG LSN50DDHST / LSU50DHST\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20LSN50DDHST%20%2F%20LSU50DHST%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG LSN50DDHST / LSU50DHST\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20LSN50DDHST%20%2F%20LSU50DHST%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 89,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "LG 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書與活動條件",
    "tags": [
      "一對一分離式變頻冷暖",
      "8坪內",
      "large",
      "R32",
      "一級能效",
      "含基本安裝"
    ]
  },
  {
    "id": "aircon-lg-lsn72ddhst-lsu72dhst",
    "category": "aircon",
    "rank": 24,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "living_dining",
    "roomSizeUpperPing": 12,
    "brand": "LG",
    "model": "LSN72DDHST / LSU72DHST",
    "modelPair": {
      "indoor": "LSN72DDHST",
      "outdoor": "LSU72DHST"
    },
    "name": "LG LSN72DDHST / LSU72DHST 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 67900,
      "converted": 67900,
      "confidence": "玉明電器 exact-pair 完整室內外機新品公開價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    },
    "image": "https://www.3uo.tw/wp-content/uploads/LSN72DDHST-LSU72DHST.png",
    "buyUrl": "https://www.3uo.tw/ecommerce/LSN72DDHST/",
    "buyLabel": "玉明電器 exact-pair 完整室內外機新品公開價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 LSN72DDHST；室外機 LSU72DHST",
      "適用坪數：12 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：7.2 kW",
      "暖房能力：7 kW",
      "CSPF／能源效率：5.61 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 105 x 深 23.5 x 高 30.7 cm；室外機 寬 105.6 x 深 39 x 高 83.6 cm",
      "重量：室內機 13 kg；室外機 56 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：內建 Wi-Fi，可用 LG ThinQ 遠端控制、AI 氣流與管理用電",
      "安裝／配管：液管 2 分／氣管 4 分；玉明公開完整組價含室內外機安裝與銅管、控制線 5 公尺內；鑽孔、室外機架、遮雨棚、排水器、超長配管、樓層與危險施工另計，且僅承作公告服務區。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 12 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 5.61、能源效率第 1 級",
      "尺寸：室內機 寬 105 x 深 23.5 x 高 30.7 cm；室外機 寬 105.6 x 深 39 x 高 83.6 cm；重量：室內機 13 kg；室外機 56 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "大客廳、開放式客餐廳或高熱負載空間，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG LSN72DDHST / LSU72DHST\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20LSN72DDHST%20%2F%20LSU72DHST%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG LSN72DDHST / LSU72DHST\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20LSN72DDHST%20%2F%20LSU72DHST%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG LSN72DDHST / LSU72DHST\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20LSN72DDHST%20%2F%20LSU72DHST%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG LSN72DDHST / LSU72DHST\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20LSN72DDHST%20%2F%20LSU72DHST%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG LSN72DDHST / LSU72DHST\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20LSN72DDHST%20%2F%20LSU72DHST%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 89,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "LG 台灣公司貨；全機保固 7 年、主機板 7 年、壓縮機 10 年，依保證書與活動條件",
    "tags": [
      "一對一分離式變頻冷暖",
      "12坪內",
      "living_dining",
      "R32",
      "一級能效",
      "含基本安裝"
    ]
  },
  {
    "id": "aircon-general-ascg022kmtc-aocg022kmtc",
    "category": "aircon",
    "rank": 25,
    "budget": "value",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "small",
    "roomSizeUpperPing": 4,
    "brand": "GENERAL",
    "model": "ASCG022KMTC / AOCG022KMTC",
    "modelPair": {
      "indoor": "ASCG022KMTC",
      "outdoor": "AOCG022KMTC"
    },
    "name": "GENERAL ASCG022KMTC / AOCG022KMTC 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 22900,
      "converted": 22900,
      "confidence": "PChome 24h exact-pair 完整室內外機新品價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "excluded",
      "note": "PChome 公開完整組價含運送、拆箱定位與舊機回收，未含基本安裝；銅管、鑽孔、室外機架、配電與危險施工須另行估價。"
    },
    "image": "https://img.pchome.com.tw/cs/items/DPAF24A900IR3AW/000001_1746523973.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAF24-A900IR3AW",
    "buyLabel": "PChome 24h exact-pair 完整室內外機新品價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 ASCG022KMTC；室外機 AOCG022KMTC",
      "適用坪數：4 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：2.2 kW",
      "暖房能力：2.7 kW",
      "CSPF／能源效率：6.23 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 83.4 x 深 22.2 x 高 27 cm；室外機 寬 66.3 x 深 29 x 高 54.1 cm",
      "重量：室內機 10 kg；室外機 23 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：室內機冷房高 38／靜 20 dB(A)；室外機冷房 45 dB(A)",
      "智慧功能：家用 App 控制器為選購品",
      "安裝／配管：液管 φ6.35 mm／氣管 φ9.52 mm；最大配管 20 m；PChome 公開完整組價含運送、拆箱定位與舊機回收，未含基本安裝；銅管、鑽孔、室外機架、配電與危險施工須另行估價。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 4 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 6.23、能源效率第 1 級",
      "尺寸：室內機 寬 83.4 x 深 22.2 x 高 27 cm；室外機 寬 66.3 x 深 29 x 高 54.1 cm；重量：室內機 10 kg；室外機 23 kg"
    ],
    "cons": [
      "公開價未包含基本安裝",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "官方無響室噪音值與實際環境仍會不同"
    ],
    "bestFor": "小房間或書房，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"GENERAL ASCG022KMTC / AOCG022KMTC\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22GENERAL%20ASCG022KMTC%20%2F%20AOCG022KMTC%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"GENERAL ASCG022KMTC / AOCG022KMTC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22GENERAL%20ASCG022KMTC%20%2F%20AOCG022KMTC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"GENERAL ASCG022KMTC / AOCG022KMTC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22GENERAL%20ASCG022KMTC%20%2F%20AOCG022KMTC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"GENERAL ASCG022KMTC / AOCG022KMTC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22GENERAL%20ASCG022KMTC%20%2F%20AOCG022KMTC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"GENERAL ASCG022KMTC / AOCG022KMTC\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22GENERAL%20ASCG022KMTC%20%2F%20AOCG022KMTC%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 88,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "GENERAL 台灣公司貨；PChome 標示全機保固 10 年，實際年限與零件範圍依原廠保證書",
    "tags": [
      "一對一分離式變頻冷暖",
      "4坪內",
      "small",
      "R32",
      "一級能效",
      "安裝另估",
      "日系品牌"
    ]
  },
  {
    "id": "aircon-general-ascg050kmtc-aocg050kmtc",
    "category": "aircon",
    "rank": 26,
    "budget": "mid",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "large",
    "roomSizeUpperPing": 8,
    "brand": "GENERAL",
    "model": "ASCG050KMTC / AOCG050KMTC",
    "modelPair": {
      "indoor": "ASCG050KMTC",
      "outdoor": "AOCG050KMTC"
    },
    "name": "GENERAL ASCG050KMTC / AOCG050KMTC 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 52475,
      "converted": 52475,
      "confidence": "PChome 24h exact-pair 完整室內外機新品價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "excluded",
      "note": "PChome 公開完整組價含運送、拆箱定位與舊機回收，未含基本安裝；銅管、鑽孔、室外機架、配電與危險施工須另行估價。"
    },
    "image": "https://img.pchome.com.tw/cs/items/DPAF24A900IR3M5/000001_1746525491.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAF24-A900IR3M5",
    "buyLabel": "PChome 24h exact-pair 完整室內外機新品價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 ASCG050KMTC；室外機 AOCG050KMTC",
      "適用坪數：8 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：5 kW",
      "暖房能力：5.2 kW",
      "CSPF／能源效率：5.66 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 83.4 x 深 23.9 x 高 27 cm；室外機 寬 79.9 x 深 29 x 高 63.2 cm",
      "重量：室內機 11 kg；室外機 38 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：室內機冷房高 50／靜 34 dB(A)；室外機冷房 53 dB(A)",
      "智慧功能：家用 App 控制器為選購品",
      "安裝／配管：液管 φ6.35 mm／氣管 φ12.7 mm；最大配管 30 m；PChome 公開完整組價含運送、拆箱定位與舊機回收，未含基本安裝；銅管、鑽孔、室外機架、配電與危險施工須另行估價。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 8 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 5.66、能源效率第 1 級",
      "尺寸：室內機 寬 83.4 x 深 23.9 x 高 27 cm；室外機 寬 79.9 x 深 29 x 高 63.2 cm；重量：室內機 11 kg；室外機 38 kg"
    ],
    "cons": [
      "公開價未包含基本安裝",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "官方無響室噪音值與實際環境仍會不同"
    ],
    "bestFor": "大臥室或中型客餐廳，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"GENERAL ASCG050KMTC / AOCG050KMTC\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22GENERAL%20ASCG050KMTC%20%2F%20AOCG050KMTC%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"GENERAL ASCG050KMTC / AOCG050KMTC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22GENERAL%20ASCG050KMTC%20%2F%20AOCG050KMTC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"GENERAL ASCG050KMTC / AOCG050KMTC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22GENERAL%20ASCG050KMTC%20%2F%20AOCG050KMTC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"GENERAL ASCG050KMTC / AOCG050KMTC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22GENERAL%20ASCG050KMTC%20%2F%20AOCG050KMTC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"GENERAL ASCG050KMTC / AOCG050KMTC\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22GENERAL%20ASCG050KMTC%20%2F%20AOCG050KMTC%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 88,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "GENERAL 台灣公司貨；PChome 標示全機保固 10 年，實際年限與零件範圍依原廠保證書",
    "tags": [
      "一對一分離式變頻冷暖",
      "8坪內",
      "large",
      "R32",
      "一級能效",
      "安裝另估",
      "日系品牌"
    ]
  },
  {
    "id": "aircon-general-ascg063kmtc-aocg063kmtc",
    "category": "aircon",
    "rank": 27,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_cool",
    "capacityBand": "living_dining",
    "roomSizeUpperPing": 11,
    "brand": "GENERAL",
    "model": "ASCG063KMTC / AOCG063KMTC",
    "modelPair": {
      "indoor": "ASCG063KMTC",
      "outdoor": "AOCG063KMTC"
    },
    "name": "GENERAL ASCG063KMTC / AOCG063KMTC 一對一分離式變頻冷暖",
    "price": {
      "currency": "TWD",
      "amount": 59660,
      "converted": 59660,
      "confidence": "PChome 24h exact-pair 完整室內外機新品價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "excluded",
      "note": "PChome 公開完整組價含運送、拆箱定位與舊機回收，未含基本安裝；銅管、鑽孔、室外機架、配電與危險施工須另行估價。"
    },
    "image": "https://img.pchome.com.tw/cs/items/DPAF24A900IR3NA/000001_1746525613.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAF24-A900IR3NA",
    "buyLabel": "PChome 24h exact-pair 完整室內外機新品價",
    "specs": [
      "型式：一對一分離式變頻冷暖",
      "組合型號：室內機 ASCG063KMTC；室外機 AOCG063KMTC",
      "適用坪數：11 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：6 kW",
      "暖房能力：7.2 kW",
      "CSPF／能源效率：5.60 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 83.4 x 深 23.9 x 高 27 cm；室外機 寬 79.9 x 深 29 x 高 63.2 cm",
      "重量：室內機 11 kg；室外機 38 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：室內機冷房高 50／靜 34 dB(A)；室外機冷房 55 dB(A)",
      "智慧功能：家用 App 控制器為選購品",
      "安裝／配管：液管 φ6.35 mm／氣管 φ12.7 mm；最大配管 30 m；PChome 公開完整組價含運送、拆箱定位與舊機回收，未含基本安裝；銅管、鑽孔、室外機架、配電與危險施工須另行估價。"
    ],
    "description": "一對一分離式變頻冷暖完整室內外機組，適用上限 11 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 5.60、能源效率第 1 級",
      "尺寸：室內機 寬 83.4 x 深 23.9 x 高 27 cm；室外機 寬 79.9 x 深 29 x 高 63.2 cm；重量：室內機 11 kg；室外機 38 kg"
    ],
    "cons": [
      "公開價未包含基本安裝",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "官方無響室噪音值與實際環境仍會不同"
    ],
    "bestFor": "大客廳、開放式客餐廳或高熱負載空間，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷暖推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
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
      "checkedAt": "2026-08-14",
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"GENERAL ASCG063KMTC / AOCG063KMTC\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22GENERAL%20ASCG063KMTC%20%2F%20AOCG063KMTC%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"GENERAL ASCG063KMTC / AOCG063KMTC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22GENERAL%20ASCG063KMTC%20%2F%20AOCG063KMTC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"GENERAL ASCG063KMTC / AOCG063KMTC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22GENERAL%20ASCG063KMTC%20%2F%20AOCG063KMTC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"GENERAL ASCG063KMTC / AOCG063KMTC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22GENERAL%20ASCG063KMTC%20%2F%20AOCG063KMTC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"GENERAL ASCG063KMTC / AOCG063KMTC\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22GENERAL%20ASCG063KMTC%20%2F%20AOCG063KMTC%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 88,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "GENERAL 台灣公司貨；PChome 標示全機保固 10 年，實際年限與零件範圍依原廠保證書",
    "tags": [
      "一對一分離式變頻冷暖",
      "11坪內",
      "living_dining",
      "R32",
      "一級能效",
      "安裝另估",
      "日系品牌"
    ]
  },
  {
    "id": "aircon-teco-ms22ic-hs8-ma22ic-hs8",
    "category": "aircon",
    "rank": 28,
    "budget": "value",
    "channel": "tw",
    "type": "cooling_only",
    "capacityBand": "small",
    "roomSizeUpperPing": 4,
    "brand": "TECO",
    "model": "MS22IC-HS8 / MA22IC-HS8",
    "modelPair": {
      "indoor": "MS22IC-HS8",
      "outdoor": "MA22IC-HS8"
    },
    "name": "TECO MS22IC-HS8 / MA22IC-HS8 一對一分離式變頻冷專",
    "price": {
      "currency": "TWD",
      "amount": 23900,
      "converted": 23900,
      "confidence": "TECO 東元台灣官方 exact-pair 產品頁 2026-08-14 官方建議售價；非通路現價或歷史最低價",
      "basis": "official_suggested",
      "scope": "complete_system"
    },
    "installation": {
      "status": "not_stated",
      "note": "東元官方頁為完整室內外機建議售價，未明列基本安裝範圍；配管、鑽孔、室外機架、樓層與配電須另行確認。"
    },
    "image": "https://www.tecohome.com.tw/upload/products/01_air_con/HS8%E5%8E%BB%E8%83%8C.png",
    "buyUrl": "https://www.tecohome.com.tw/tw/Products/Items/907",
    "buyLabel": "TECO 東元台灣官方 exact-pair 產品頁",
    "specs": [
      "型式：一對一分離式變頻冷專",
      "組合型號：室內機 MS22IC-HS8；室外機 MA22IC-HS8",
      "適用坪數：4 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：2.4 kW",
      "暖房能力：無暖房",
      "CSPF／能源效率：6.69 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 76.8 x 深 20.1 x 高 29.9 cm；室外機 寬 78.5 x 深 30 x 高 55.5 cm",
      "重量：室內機 7.5 kg；室外機 26 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：內建 Wi-Fi、微風感與 3D 氣流",
      "安裝／配管：液管 2 分／氣管 3 分；東元官方頁為完整室內外機建議售價，未明列基本安裝範圍；配管、鑽孔、室外機架、樓層與配電須另行確認。"
    ],
    "description": "一對一分離式變頻冷專完整室內外機組，適用上限 4 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 6.69、能源效率第 1 級",
      "尺寸：室內機 寬 76.8 x 深 20.1 x 高 29.9 cm；室外機 寬 78.5 x 深 30 x 高 55.5 cm；重量：室內機 7.5 kg；室外機 26 kg"
    ],
    "cons": [
      "公開價未包含基本安裝",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "小房間或書房，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷專推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
    "releaseDate": "2024-06-01",
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
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TECO MS22IC-HS8 / MA22IC-HS8\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TECO%20MS22IC-HS8%20%2F%20MA22IC-HS8%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TECO MS22IC-HS8 / MA22IC-HS8\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TECO%20MS22IC-HS8%20%2F%20MA22IC-HS8%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"TECO MS22IC-HS8 / MA22IC-HS8\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22TECO%20MS22IC-HS8%20%2F%20MA22IC-HS8%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"TECO MS22IC-HS8 / MA22IC-HS8\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22TECO%20MS22IC-HS8%20%2F%20MA22IC-HS8%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"TECO MS22IC-HS8 / MA22IC-HS8\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22TECO%20MS22IC-HS8%20%2F%20MA22IC-HS8%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 87,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "TECO 台灣公司貨；全機保固 7 年，登錄、施工與零件範圍依原廠保證書",
    "tags": [
      "一對一分離式變頻冷專",
      "4坪內",
      "small",
      "R32",
      "一級能效",
      "安裝範圍未明"
    ]
  },
  {
    "id": "aircon-teco-ms63ic-hs8-ma63ic-hs8",
    "category": "aircon",
    "rank": 29,
    "budget": "mid",
    "channel": "tw",
    "type": "cooling_only",
    "capacityBand": "living_dining",
    "roomSizeUpperPing": 11,
    "brand": "TECO",
    "model": "MS63IC-HS8 / MA63IC-HS8",
    "modelPair": {
      "indoor": "MS63IC-HS8",
      "outdoor": "MA63IC-HS8"
    },
    "name": "TECO MS63IC-HS8 / MA63IC-HS8 一對一分離式變頻冷專",
    "price": {
      "currency": "TWD",
      "amount": 45900,
      "converted": 45900,
      "confidence": "PChome 24h exact-pair 完整室內外機新品價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "PChome 公開完整組價標示含運、基本安裝與舊機回收；超額配管、鑽孔、室外機架、樓層、配電與危險施工另計。"
    },
    "image": "https://www.tecohome.com.tw/upload/products/01_air_con/HS8%E5%8E%BB%E8%83%8C.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAFFS-A900I4U5B",
    "buyLabel": "PChome 24h exact-pair 完整室內外機新品價",
    "specs": [
      "型式：一對一分離式變頻冷專",
      "組合型號：室內機 MS63IC-HS8；室外機 MA63IC-HS8",
      "適用坪數：11 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：6.3 kW",
      "暖房能力：無暖房",
      "CSPF／能源效率：6.02 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 114 x 深 22.9 x 高 33.4 cm；室外機 寬 90 x 深 35 x 高 70 cm",
      "重量：室內機 14 kg；室外機 43 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：內建 Wi-Fi、微風感與 3D 氣流",
      "安裝／配管：液管 2 分／氣管 5 分；PChome 公開完整組價標示含運、基本安裝與舊機回收；超額配管、鑽孔、室外機架、樓層、配電與危險施工另計。"
    ],
    "description": "一對一分離式變頻冷專完整室內外機組，適用上限 11 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 6.02、能源效率第 1 級",
      "尺寸：室內機 寬 114 x 深 22.9 x 高 33.4 cm；室外機 寬 90 x 深 35 x 高 70 cm；重量：室內機 14 kg；室外機 43 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "大客廳、開放式客餐廳或高熱負載空間，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷專推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
    "releaseDate": "2024-06-01",
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
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TECO MS63IC-HS8 / MA63IC-HS8\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TECO%20MS63IC-HS8%20%2F%20MA63IC-HS8%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TECO MS63IC-HS8 / MA63IC-HS8\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TECO%20MS63IC-HS8%20%2F%20MA63IC-HS8%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"TECO MS63IC-HS8 / MA63IC-HS8\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22TECO%20MS63IC-HS8%20%2F%20MA63IC-HS8%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"TECO MS63IC-HS8 / MA63IC-HS8\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22TECO%20MS63IC-HS8%20%2F%20MA63IC-HS8%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"TECO MS63IC-HS8 / MA63IC-HS8\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22TECO%20MS63IC-HS8%20%2F%20MA63IC-HS8%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 87,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "TECO 台灣公司貨；全機保固 7 年，登錄、施工與零件範圍依原廠保證書",
    "tags": [
      "一對一分離式變頻冷專",
      "11坪內",
      "living_dining",
      "R32",
      "一級能效",
      "含基本安裝"
    ]
  },
  {
    "id": "aircon-teco-ms80ic-hs8-ma80ic-hs8",
    "category": "aircon",
    "rank": 30,
    "budget": "premium",
    "channel": "tw",
    "type": "cooling_only",
    "capacityBand": "living_dining",
    "roomSizeUpperPing": 14,
    "brand": "TECO",
    "model": "MS80IC-HS8 / MA80IC-HS8",
    "modelPair": {
      "indoor": "MS80IC-HS8",
      "outdoor": "MA80IC-HS8"
    },
    "name": "TECO MS80IC-HS8 / MA80IC-HS8 一對一分離式變頻冷專",
    "price": {
      "currency": "TWD",
      "amount": 60900,
      "converted": 60900,
      "confidence": "PChome 24h exact-pair 完整室內外機新品價 2026-08-14 可公開重現現價；型號與室內外機完整組合已核對",
      "basis": "retailer_current",
      "scope": "complete_system"
    },
    "installation": {
      "status": "included_basic",
      "note": "PChome 公開完整組價標示含運、基本安裝與舊機回收；超額配管、鑽孔、室外機架、樓層、配電與危險施工另計。"
    },
    "image": "https://www.tecohome.com.tw/upload/products/01_air_con/HS8%E5%8E%BB%E8%83%8C.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAFFS-A900I4UD2",
    "buyLabel": "PChome 24h exact-pair 完整室內外機新品價",
    "specs": [
      "型式：一對一分離式變頻冷專",
      "組合型號：室內機 MS80IC-HS8；室外機 MA80IC-HS8",
      "適用坪數：14 坪內（官方／品牌 exact-model 規格建議上限；西曬、頂樓與挑高須重新估算）",
      "冷房能力：8 kW",
      "暖房能力：無暖房",
      "CSPF／能源效率：5.80 kWh/kWh",
      "能源效率等級：第 1 級",
      "尺寸：室內機 寬 114 x 深 22.9 x 高 33.4 cm；室外機 寬 90 x 深 35 x 高 70 cm",
      "重量：室內機 14 kg；室外機 43 kg",
      "電壓／頻率：單相 220V／60Hz（台灣住宅規格；須配置合規專用迴路與接地）",
      "冷媒：R32",
      "運轉音：查不到（公開 exact-model 規格未列完整室內／室外 dB）",
      "智慧功能：內建 Wi-Fi、微風感與 3D 氣流",
      "安裝／配管：液管 2 分／氣管 5 分；PChome 公開完整組價標示含運、基本安裝與舊機回收；超額配管、鑽孔、室外機架、樓層、配電與危險施工另計。"
    ],
    "description": "一對一分離式變頻冷專完整室內外機組，適用上限 14 坪；公開價格、安裝範圍與追加施工分開標示，方便比較實際落地總價。",
    "pros": [
      "exact indoor／outdoor model pair 與完整組價可公開核對",
      "CSPF 5.80、能源效率第 1 級",
      "尺寸：室內機 寬 114 x 深 22.9 x 高 33.4 cm；室外機 寬 90 x 深 35 x 高 70 cm；重量：室內機 14 kg；室外機 43 kg"
    ],
    "cons": [
      "基本安裝仍有配管長度與施工區域限制",
      "西曬、頂樓、挑高或開放空間不可只按坪數上限選機",
      "公開 exact-model 規格未列完整室內外機運轉音"
    ],
    "bestFor": "大客廳、開放式客餐廳或高熱負載空間，且能先確認 220V 專用迴路、排水、室外機位置與配管路徑的台灣住宅",
    "recommendation": "冷專推薦：完整組價與安裝邊界清楚；實際能力仍應由合格空調技師依熱負載場勘。",
    "releaseDate": "2024-06-01",
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
      "note": "已查核 BigGo 與 FindPrice 的 exact indoor／outdoor model pair 價格結果；未取得可公開重現且符合新品、完整室內外機組、非會員個人化優惠的歷史最低價。現價與官方建議售價均未冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TECO MS80IC-HS8 / MA80IC-HS8\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TECO%20MS80IC-HS8%20%2F%20MA80IC-HS8%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TECO MS80IC-HS8 / MA80IC-HS8\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TECO%20MS80IC-HS8%20%2F%20MA80IC-HS8%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"TECO MS80IC-HS8 / MA80IC-HS8\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22TECO%20MS80IC-HS8%20%2F%20MA80IC-HS8%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"TECO MS80IC-HS8 / MA80IC-HS8\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22TECO%20MS80IC-HS8%20%2F%20MA80IC-HS8%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"TECO MS80IC-HS8 / MA80IC-HS8\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22TECO%20MS80IC-HS8%20%2F%20MA80IC-HS8%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 87,
    "voltage": "單相 220V／60Hz 台灣住宅規格；安裝前須確認專用迴路、線徑、接地與無熔絲開關",
    "warranty": "TECO 台灣公司貨；全機保固 7 年，登錄、施工與零件範圍依原廠保證書",
    "tags": [
      "一對一分離式變頻冷專",
      "14坪內",
      "living_dining",
      "R32",
      "一級能效",
      "含基本安裝"
    ]
  }
]);
})();
