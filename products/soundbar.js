(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("soundbar", [
  {
    "id": "soundbar-samsung-q990f",
    "category": "soundbar",
    "rank": 1,
    "topPick": true,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "HW-Q990F",
    "name": "11.1.4 聲道旗艦 Soundbar",
    "price": {
      "currency": "TWD",
      "amount": 47405,
      "converted": 47405,
      "confidence": "Yahoo購物中心 2026-07-22 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAODA900JMDR5/000001_1773978957.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Samsung-%E4%B8%89%E6%98%9F-11-1-4%E8%81%B2%E9%81%93-%E8%97%8D%E7%89%99%E8%81%B2%E9%9C%B8-HW-Q990F-ZW-11688500.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "11.1.4 聲道",
      "無線後環繞",
      "無線重低音",
      "Dolby Atmos / DTS:X"
    ],
    "description": "一次補齊天空聲道、後環繞與低頻，是最接近家庭劇院的一體式方案。",
    "pros": [
      "包圍感最完整",
      "Samsung TV 可用 Q-Symphony"
    ],
    "cons": [
      "價格高",
      "後環繞仍需擺位與電源"
    ],
    "bestFor": "客廳電影、遊戲與球賽沉浸感。",
    "recommendation": "綜合推薦：Q990F 評價強，含後環繞、重低音與 Atmos，折扣後雖高價但一次到位且售後穩。",
    "score": 95,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "Atmos",
      "後環繞",
      "旗艦"
    ],
    "releaseDate": "2025",
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
      "checkedAt": "2026-07-14",
      "note": "原記錄的 PChome HW-Q990F 商品 API 已不再回傳商品資料；本輪重新查核後找不到可公開重現 NT$42,914 的可信新品來源，因此不再保留無法驗證的 found 判定。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 HW-Q990F 使用者回報播放途中會隨機斷音，部分同時凍結、重置或必須重新啟動才能恢復。",
      "issues": [
        {
          "title": "隨機斷音、凍結或自行重置",
          "detail": "回報涵蓋 HDMI/eARC、直接接入 soundbar 與不同播放來源，部分集中在 1100.4 韌體後；建議關閉自動更新至版本穩定、保留退換貨期，並以電視、遊戲主機與串流來源長時間測試。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "Reddit",
              "title": "q990f problems after update..",
              "url": "https://www.reddit.com/r/Soundbars/comments/1u1wval/q990f_problems_after_update/"
            },
            {
              "platform": "Samsung Community",
              "title": "Q990D still having the audio shutoff bug on firmware 1051",
              "url": "https://us.community.samsung.com/t5/Home-Theater/Q990D-still-having-the-audio-shutoff-bug-on-firmware-1051/td-p/3593283"
            },
            {
              "platform": "Samsung Community",
              "title": "Samsung HW-Q990F loses eARC",
              "url": "https://us.community.samsung.com/t5/Home-Theater/Samsung-HW-Q990F-loses-eARC/td-p/3511021"
            },
            {
              "platform": "CDW",
              "title": "Samsung HW-Q990F customer reviews",
              "url": "https://www.cdw.com/product/samsung-hw-q990f-sound-bar-system-for-home-theater-wireless/8382191"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "soundbar-samsung-q800h",
    "category": "soundbar",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "brand": "Samsung",
    "model": "HW-Q800H/ZW",
    "name": "5.1.2 聲道 Q 系列 Soundbar 家庭劇院",
    "price": {
      "currency": "TWD",
      "amount": 35900,
      "converted": 35900,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAODA900K53X0/000001_1782210112.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAOD-A900K53X0",
    "buyLabel": "PChome",
    "specs": [
      "5.1.2 聲道",
      "無線重低音",
      "Dolby Atmos",
      "Q-Symphony"
    ],
    "description": "改列正常新品頁的 Q 系列 5.1.2 聲道聲霸，適合想升級 Atmos 與重低音的客廳。",
    "pros": [
      "聲道規格比入門聲霸完整",
      "Samsung TV 搭配性好"
    ],
    "cons": [
      "沒有獨立後環繞喇叭",
      "沉浸感不如 Q990F"
    ],
    "bestFor": "想升級 Atmos 與重低音，但不需要完整後環繞的人。",
    "recommendation": "均衡推薦：比入門聲霸更完整，並採用正常新品購買頁。",
    "score": 91,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "Atmos",
      "均衡",
      "後環繞"
    ],
    "releaseDate": "2026",
    "historicalLow": {
      "status": "found",
      "amount": 31255,
      "currency": "TWD",
      "converted": 31255,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282582787&cgp=31255",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Samsung三星 5.1.2聲道 藍牙聲霸(HW-Q800H/ZW)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Samsung三星 5.1.2聲道 藍牙聲霸(HW-Q800H/ZW)」最低價為 NT$31,255，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung HW-Q800H/ZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20HW-Q800H%2FZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung HW-Q800H/ZW\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20HW-Q800H%2FZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-sony-b600",
    "category": "soundbar",
    "rank": 3,
    "budget": "value",
    "channel": "tw",
    "brand": "Sony",
    "model": "HT-B600",
    "name": "BRAVIA Theatre Bar 6 3.1.2 聲道",
    "price": {
      "currency": "TWD",
      "amount": 10710,
      "converted": 10710,
      "confidence": "PChome 2026-07-22 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAODA900JMC1Q/000001_1781726516.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAOD-A900JMC1Q",
    "buyLabel": "PChome",
    "specs": [
      "3.1.2 聲道",
      "Dolby Atmos",
      "無線重低音",
      "BRAVIA 連動"
    ],
    "description": "預算友善且有獨立重低音，適合把電視內建聲音升級到清楚有力。",
    "pros": [
      "價格好入手",
      "對白與低頻改善明顯"
    ],
    "cons": [
      "非完整後環繞",
      "高度效果有限"
    ],
    "bestFor": "中小客廳與 Sony TV 用戶。",
    "recommendation": "CP 值推薦：萬元出頭補足對白與低頻最有感。",
    "score": 87,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "CP 值",
      "重低音",
      "對白"
    ],
    "releaseDate": "2025",
    "historicalLow": {
      "status": "found",
      "amount": 10700,
      "currency": "TWD",
      "converted": 10700,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMAAOD-A900JMC1Q",
      "sourceTitle": "PChome 商品頁：【限時快閃】SONY 索尼 BRAVIA Theatre Bar 6  HT-B600 3.1.2聲道 家庭劇院",
      "evidenceSnippet": "PChome 原始商品頁／API 於 2026-07-11 顯示同型號新品公開價 10700 TWD，低於既有可驗證史低。",
      "sourceKind": "retailer_page",
      "confidence": "high",
      "checkedAt": "2026-07-11",
      "note": "採用同型號、同尺寸／容量／規格的可信新品公開價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony HT-B600\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sony%20HT-B600%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony HT-B600\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sony%20HT-B600%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-sony-ht-a7100",
    "category": "soundbar",
    "rank": 4,
    "budget": "mid",
    "channel": "tw",
    "brand": "Sony",
    "model": "HT-A7100",
    "name": "BRAVIA Theatre Bar 7 5.0.2 聲道 Soundbar",
    "price": {
      "currency": "TWD",
      "amount": 20610,
      "converted": 20610,
      "confidence": "PChome 2026-07-22 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://img.pchome.com.tw/cs/items/DMAAN8A900K0Y8L/000001_1779181877.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAN8-A900K0Y8L",
    "buyLabel": "PChome",
    "specs": [
      "5.0.2 聲道 / 9 單體",
      "360 Spatial Sound Mapping",
      "Dolby Atmos / DTS:X",
      "HDMI 2.1：8K HDR / 4K120 / VRR / ALLM",
      "Apple AirPlay / Spotify Connect",
      "BRAVIA Connect 空間校正"
    ],
    "description": "以九單體與 360 Spatial Sound Mapping 建立虛擬環繞，並保留 4K120、VRR 等新世代遊戲訊號直通。",
    "pros": [
      "單件式即可提供天空聲道與寬廣音場",
      "HDMI 2.1 遊戲直通規格完整"
    ],
    "cons": [
      "未內含獨立重低音與實體後環繞",
      "加購 Sony 無線重低音、後環繞後總價會提高"
    ],
    "bestFor": "希望先以單件式改善電影與遊戲音效，未來再逐步擴充的客廳。",
    "recommendation": "HT-A7100 是 2026 年 Sony 主力新聲霸，公開售價已進入中階帶，規格與擴充彈性都值得納入。",
    "score": 91,
    "voltage": "110V 台灣公司貨",
    "warranty": "1 年台灣原廠保固",
    "tags": [
      "Atmos",
      "360 Spatial Sound Mapping",
      "4K120",
      "可擴充"
    ],
    "releaseDate": "2026-05-19",
    "historicalLow": {
      "status": "found",
      "amount": 20610,
      "currency": "TWD",
      "converted": 20610,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1281926634&cgp=20610",
      "sourceTitle": "LBJ 歷史價格：Sony HT-A7100 BRAVIA Theatre Bar 7",
      "evidenceSnippet": "LBJ 的 Yahoo 同型號歷史於 2026-07-15、07-16 記錄 NT$20,610，先前價格介於 NT$22,264 至 NT$24,200。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-16",
      "note": "來源標示贈品但未從價格扣除贈品價值；主商品為完全相同 HT-A7100 新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-16",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony HT-A7100\" (災情 OR 問題 OR 故障 OR 負評)",
          "targetHost": "mobile01.com",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sony%20HT-A7100%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony HT-A7100\" (problem OR issue OR defect OR \"negative review\")",
          "targetHost": "reddit.com",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sony%20HT-A7100%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)"
        }
      ]
    }
  },
  {
    "id": "soundbar-sonos-arc-ultra",
    "category": "soundbar",
    "rank": 5,
    "budget": "premium",
    "channel": "tw",
    "brand": "Sonos",
    "model": "Arc Ultra",
    "name": "旗艦級無線智能聲霸",
    "price": {
      "currency": "TWD",
      "amount": 37710,
      "converted": 37710,
      "confidence": "K.Wild 2026-07-15 頁面查核價"
    },
    "image": "https://cdn1-next.cybassets.com/media/W1siZiIsIjI2MjU4L3Byb2R1Y3RzLzU4MjgzOTMzLzE3NTQ5OTA1MTVfODE4MTljZGJmN2RmMTY1MzE3NTUuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=3ad41c6aa447363c",
    "buyUrl": "https://www.kwildglamping.com/products/sonos-arc-ultra",
    "buyLabel": "K.Wild",
    "specs": [
      "單件式 Soundbar",
      "Dolby Atmos",
      "Wi-Fi 串流",
      "Sonos 生態系"
    ],
    "description": "音樂串流與多房間體驗強，外型俐落，適合不想擺重低音與後喇叭的人。",
    "pros": [
      "App 與串流體驗佳",
      "單件式好擺"
    ],
    "cons": [
      "完整低頻需另購 Sub",
      "總價容易拉高"
    ],
    "bestFor": "音樂、串流與簡潔客廳。",
    "recommendation": "若你重視質感與多房間音響，Sonos 比傳統劇院聲霸更順手。",
    "score": 89,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "單件式",
      "音樂",
      "Wi-Fi"
    ],
    "releaseDate": "2024-10-15",
    "historicalLow": {
      "status": "found",
      "amount": 37710,
      "currency": "TWD",
      "converted": 37710,
      "sourceUrl": "https://www.kwildglamping.com/products/sonos-arc-ultra",
      "sourceTitle": "K.Wild：SONOS Arc Ultra 旗艦級無線智能聲霸（台灣公司貨、兩年保固）",
      "evidenceSnippet": "K.Wild 同型號新品頁於 2026-07-15 顯示公開售價 NT$37,710、供貨狀況「尚有庫存」，並載明台灣公司貨、原廠兩年保固與約 1 至 2 個工作天出貨。",
      "sourceKind": "retailer_page",
      "confidence": "high",
      "checkedAt": "2026-07-15",
      "note": "採用 K.Wild 同型號公司貨新品現貨頁可公開查核售價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 Arc Ultra 使用者回報播放不同內容時會隨機出現爆音、啪聲或靜電聲，部分伴隨短暫音訊中斷。",
      "issues": [
        {
          "title": "隨機爆音、啪聲或靜電聲",
          "detail": "回報橫跨不同訊源與內容，發生頻率不一；若對突發噪音敏感，建議在退換貨期內長時間測試 HDMI eARC、串流與遊戲訊源。",
          "reportCount": 12,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Sonos Arc Ultra Popping Sound",
              "url": "https://www.reddit.com/r/sonos/comments/1gm5evm/sonos_arc_ultra_popping_sound/"
            },
            {
              "platform": "Sonos Community",
              "title": "Arc Ultra: Popping Sound Across All Content Types",
              "url": "https://en.community.sonos.com/home-theater-229129/arc-ultra-popping-sound-across-all-content-types-6923719"
            },
            {
              "platform": "Sonos Community",
              "title": "Sonos Arc Ultra strange static clicking sound",
              "url": "https://en.community.sonos.com/home-theater-229129/sonos-arc-ultra-strange-static-clicking-sound-6929181"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "soundbar-jbl-500mk2",
    "category": "soundbar",
    "rank": 6,
    "budget": "mid",
    "channel": "tw",
    "brand": "JBL",
    "model": "BAR 500 MK2",
    "name": "5.1 聲道 Soundbar",
    "price": {
      "currency": "TWD",
      "amount": 21296,
      "converted": 21296,
      "confidence": "momo購物 2026-07-14 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAHGA900JCY9J/000001_1760777146.jpg",
    "buyUrl": "https://www.momoshop.com.tw/product/14610686",
    "buyLabel": "momo購物",
    "specs": [
      "5.1 聲道",
      "無線重低音",
      "Dolby Atmos 模擬",
      "藍牙/Wi-Fi"
    ],
    "description": "JBL 低頻與電影感討喜，適合想要震撼感但不想上旗艦環繞的人。",
    "pros": [
      "低頻量感好",
      "電影與遊戲氣氛強"
    ],
    "cons": [
      "環繞定位不如後喇叭系統",
      "音樂細緻度非強項"
    ],
    "bestFor": "重視動作片、遊戲與低頻衝擊。",
    "recommendation": "中價位想要爽度，JBL 是很直接的選項。",
    "score": 86,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "低頻",
      "電影",
      "中價位"
    ],
    "releaseDate": "2023",
    "historicalLow": {
      "status": "found",
      "amount": 20899,
      "currency": "TWD",
      "converted": 20899,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1263183134&cgp=21296",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：JBL BAR 500 MK2 5.1聲道家庭劇院喇叭(英大公司貨)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / JBL BAR 500 MK2 5.1聲道家庭劇院喇叭(英大公司貨)」最低價為 NT$20,899，最低點日期 2026-03-05。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"JBL BAR 500 MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22JBL%20BAR%20500%20MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"JBL BAR 500 MK2\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22JBL%20BAR%20500%20MK2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-extra-6-dmaaod-a900k3qsm",
    "category": "soundbar",
    "rank": 7,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "HW-Q930H/ZW",
    "name": "Q 系列 9.1.4 聲道 Soundbar 家庭劇院",
    "price": {
      "currency": "TWD",
      "amount": 49900,
      "converted": 49900,
      "confidence": "PChome 2026-07-17 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAODA900K3QSM/000001_1782969828.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAOD-A900K3QSM",
    "buyLabel": "PChome",
    "specs": [
      "9.1.4 聲道",
      "Dolby Atmos",
      "後環繞喇叭",
      "Q 系列"
    ],
    "description": "Samsung HW-Q930H/ZW 是Soundbar類的補充比較型號，依 2026-07-17 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Atmos",
      "環繞",
      "旗艦"
    ],
    "releaseDate": "2026-04",
    "historicalLow": {
      "status": "found",
      "amount": 44910,
      "currency": "TWD",
      "converted": 44910,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMAAOD-A900K3QSM",
      "sourceTitle": "PChome 24h：Samsung HW-Q930H/ZW Q 系列 9.1.4 聲道 Soundbar",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-16 UTC 回傳同型號 HW-Q930H/ZW 公開 Low 價 NT$44,910、Qty 2，低於原記錄史低 NT$49,900。",
      "sourceKind": "retailer_page",
      "confidence": "high",
      "checkedAt": "2026-07-17",
      "note": "採用可信通路同型號新品公開價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、拆封品與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung HW-Q930H/ZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20HW-Q930H%2FZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung HW-Q930H/ZW\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20HW-Q930H%2FZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-extra-7-dmaaod-a900jmdr4",
    "category": "soundbar",
    "rank": 8,
    "budget": "mid",
    "channel": "tw",
    "brand": "Samsung",
    "model": "HW-QS700F",
    "name": "3.1.2 聲道 Q 系列 Soundbar 聲霸",
    "price": {
      "currency": "TWD",
      "amount": 17900,
      "converted": 17900,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAODA900JMDR4/000001_1776914225.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0003952/goodsDetail/TP00039520006676",
    "buyLabel": "momo購物",
    "specs": [
      "3.1.2 聲道",
      "Dolby Atmos",
      "Q 系列",
      "中階聲霸"
    ],
    "description": "Samsung HW-QS700F 是Soundbar類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Atmos",
      "中階",
      "電視搭配"
    ],
    "releaseDate": "2025-01-15",
    "historicalLow": {
      "status": "found",
      "amount": 17900,
      "currency": "TWD",
      "converted": 17900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1263825588&cgp=17900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【Samsung 三星】(無安裝)3.1.2聲道全景聲微型劇院SoundBar音響HW-QS700F-ZW",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【Samsung 三星】(無安裝)3.1.2聲道全景聲微型劇院SoundBar音響HW-QS700F-ZW」最低價為 NT$17,900，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung HW-QS700F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20HW-QS700F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung HW-QS700F\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20HW-QS700F%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-extra-8-dmbm1d-a900j5jaz",
    "category": "soundbar",
    "rank": 9,
    "budget": "mid",
    "channel": "tw",
    "brand": "LG",
    "model": "S80TR",
    "name": "LG Soundbar S80TR 5.1.3 聲道立體環繞聲霸",
    "price": {
      "currency": "TWD",
      "amount": 19900,
      "converted": 19900,
      "confidence": "PChome 2026-07-13 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM1DA900J5JAZ/000001_1779262704.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM1D-A900J5JAZ",
    "buyLabel": "PChome",
    "specs": [
      "5.1.3 聲道",
      "Dolby Atmos",
      "立體環繞",
      "LG Soundbar"
    ],
    "description": "LG S80TR 是Soundbar類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "LG",
      "環繞",
      "均衡"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 18905,
      "currency": "TWD",
      "converted": 18905,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMBM1D-A900J5JAZ",
      "sourceTitle": "PChome 商品 API：LG 樂金 5.1.3聲道立體環繞音效 Soundbar 家庭劇院 S80TR / LG 樂金 5.1.3聲道立體環繞音效 Soundbar 家庭劇院 S80TR",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-11 回傳同一商品頁「LG 樂金 5.1.3聲道立體環繞音效 Soundbar 家庭劇院 S80TR / LG 樂金 5.1.3聲道立體環繞音效 Soundbar 家庭劇院 S80TR」查核價 NT$18,905，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-11",
      "note": "採用可信通路同一商品頁可公開查核現價作為本次觀測到的最低價；同型號/規格並排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG S80TR\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20S80TR%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG S80TR\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20S80TR%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-extra-9-dpado2-a900k5vut",
    "category": "soundbar",
    "rank": 10,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "HW-Q990H/ZW",
    "name": "Q 系列 11.1.4 聲道 Soundbar 家庭劇院",
    "price": {
      "currency": "TWD",
      "amount": 56905,
      "converted": 56905,
      "confidence": "Yahoo購物中心 2026-07-22 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADO2A900K5VUT/000001_1782993730.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Samsung%E4%B8%89%E6%98%9F-11-1-4%E8%81%B2%E9%81%93-%E8%97%8D%E7%89%99%E8%81%B2%E9%9C%B8-HW-Q990H-ZW-12124621.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "11.1.4 聲道",
      "重低音",
      "後環繞",
      "Dolby Atmos"
    ],
    "description": "Samsung HW-Q990H/ZW 是Soundbar類的補充比較型號，依 2026-07-17 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Atmos",
      "旗艦",
      "劇院"
    ],
    "releaseDate": "2026",
    "historicalLow": {
      "status": "found",
      "amount": 56905,
      "currency": "TWD",
      "converted": 56905,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282582786&cgp=56905",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Samsung三星 11.1.4聲道 藍牙聲霸(HW-Q990H/ZW)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Samsung三星 11.1.4聲道 藍牙聲霸(HW-Q990H/ZW)」最低價為 NT$56,905，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung HW-Q990H/ZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20HW-Q990H%2FZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung HW-Q990H/ZW\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20HW-Q990H%2FZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-extra-10-dmaaod-a900k5489",
    "category": "soundbar",
    "rank": 11,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "HW-QS90H/ZW",
    "name": "Q 系列 7.1.2 聲道 Soundbar",
    "price": {
      "currency": "TWD",
      "amount": 35055,
      "converted": 35055,
      "confidence": "Yahoo購物中心 2026-07-22 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAODA900K5489/000001_1782988490.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Samsung%E4%B8%89%E6%98%9F-7-1-2%E8%81%B2%E9%81%93-%E8%97%8D%E7%89%99%E8%81%B2%E9%9C%B8-HW-QS90H-ZW-12124562.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "7.1.2 聲道",
      "Q 系列",
      "Dolby Atmos",
      "重低音"
    ],
    "description": "Samsung HW-QS90H/ZW 是Soundbar類的補充比較型號，依 2026-07-17 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Atmos",
      "客廳",
      "均衡"
    ],
    "releaseDate": "2026-04-02",
    "historicalLow": {
      "status": "found",
      "amount": 35055,
      "currency": "TWD",
      "converted": 35055,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282582784&cgp=35055",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Samsung三星 7.1.2聲道 藍牙聲霸(HW-QS90H/ZW)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Samsung三星 7.1.2聲道 藍牙聲霸(HW-QS90H/ZW)」最低價為 NT$35,055，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung HW-QS90H/ZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20HW-QS90H%2FZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung HW-QS90H/ZW\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20HW-QS90H%2FZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-extra-11-dmbm1d-a900ghtfe",
    "category": "soundbar",
    "rank": 12,
    "budget": "value",
    "channel": "tw",
    "brand": "Sony",
    "model": "HT-S40R",
    "name": "5.1 聲道 Soundbar 家庭劇院組",
    "price": {
      "currency": "TWD",
      "amount": 8275,
      "converted": 8275,
      "confidence": "Yahoo購物中心 2026-07-22 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM1DA900GHTFE/000001_1776774078.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/SONY-%E7%B4%A2%E5%B0%BC-5-1-%E8%81%B2%E9%81%93-SOUNDBAR-%E5%AE%B6%E5%BA%AD%E5%8A%87%E9%99%A2%E7%B5%84-HT-S40R-10067449.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "5.1 聲道",
      "後環繞",
      "重低音",
      "藍牙"
    ],
    "description": "Sony HT-S40R 是Soundbar類的補充比較型號，依 2026-07-17 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "CP 值",
      "入門劇院",
      "Sony"
    ],
    "releaseDate": "2025",
    "historicalLow": {
      "status": "found",
      "amount": 7751,
      "currency": "TWD",
      "converted": 7751,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1216107216&cgp=8490",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：SONY HT-S40R 5.1 聲道 Soundbar 家庭劇院組",
      "evidenceSnippet": "LBJ exact-model HT-S40R 歷史曲線共 63 個價格點，最低為 2024-10-24 的 NT$7,751；目前 2026-07-21 曲線價為 NT$8,490。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-21",
      "note": "改採只包含 HT-S40R 的可公開查核 LBJ 歷史曲線；排除原先混合 HT-S100F／HT-S40R／HT-A9000 的不精確 listing。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony HT-S40R\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sony%20HT-S40R%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony HT-S40R\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sony%20HT-S40R%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-extra-12-dmaamt-a900i5hho",
    "category": "soundbar",
    "rank": 13,
    "budget": "value",
    "channel": "tw",
    "brand": "Sony",
    "model": "HT-S100F",
    "name": "2.0 聲道單件式藍牙 Soundbar",
    "price": {
      "currency": "TWD",
      "amount": 7591,
      "converted": 7591,
      "confidence": "Yahoo購物中心 2026-07-22 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAMTA900I5HHO/000001_1778661010.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Sony-HT-S100F-11411387.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "2.0 聲道",
      "單件式",
      "藍牙",
      "小空間"
    ],
    "description": "Sony HT-S100F 是Soundbar類的補充比較型號，依 2026-07-17 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "小空間",
      "入門",
      "簡潔"
    ],
    "releaseDate": "2018-02-17",
    "historicalLow": {
      "status": "found",
      "amount": 5929,
      "currency": "TWD",
      "converted": 5929,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1236497652&cgp=7990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Sony HT-S100F 單件式藍牙聲霸",
      "evidenceSnippet": "LBJ exact-model HT-S100F 歷史曲線共 58 個價格點，最低為 2025-06-21 的 NT$5,929；目前 2026-07-21 曲線價為 NT$7,990。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-21",
      "note": "改採只包含 HT-S100F 的可公開查核 LBJ 歷史曲線；排除原先混合 HT-S100F／HT-S40R／HT-A9000 的不精確 listing。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony HT-S100F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sony%20HT-S100F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony HT-S100F\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sony%20HT-S100F%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-extra-13-dmaahg-a900jcy2v",
    "category": "soundbar",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "brand": "JBL",
    "model": "BAR 300 MK2",
    "name": "BAR 300MK2 5.0 聲道 Soundbar",
    "price": {
      "currency": "TWD",
      "amount": 13261,
      "converted": 13261,
      "confidence": "momo購物 2026-07-14 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAHGA900JCY2V/000001_1760766812.jpg",
    "buyUrl": "https://www.momoshop.com.tw/product/14610154",
    "buyLabel": "momo購物",
    "specs": [
      "5.0 聲道",
      "Dolby Atmos",
      "單件式",
      "黑/白色"
    ],
    "description": "JBL BAR 300 MK2 是Soundbar類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "JBL",
      "小客廳",
      "均衡"
    ],
    "releaseDate": "2026",
    "historicalLow": {
      "status": "found",
      "amount": 13261,
      "currency": "TWD",
      "converted": 13261,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1263061890&cgp=13261",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【JBL】BAR 300 MK2 5.0聲道多功能條型音響(英大公司貨)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【JBL】BAR 300 MK2 5.0聲道多功能條型音響(英大公司貨)」最低價為 NT$13,261，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"JBL BAR 300 MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22JBL%20BAR%20300%20MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"JBL BAR 300 MK2\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22JBL%20BAR%20300%20MK2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-extra-14-dmaahg-a900j56ok",
    "category": "soundbar",
    "rank": 15,
    "budget": "mid",
    "channel": "tw",
    "brand": "JBL",
    "model": "BAR 800 MK2",
    "name": "7.1 聲道家庭劇院喇叭",
    "price": {
      "currency": "TWD",
      "amount": 27161,
      "converted": 27161,
      "confidence": "Yahoo購物中心 2026-07-22 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAHGA900J56OK/000001_1755250707.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/JBL-BAR800-MK2-7-1%E8%81%B2%E9%81%93%E5%AE%B6%E5%BA%AD%E5%8A%87%E9%99%A2%E5%96%87%E5%8F%AD-%E8%8B%B1%E5%A4%A7%E5%85%AC%E5%8F%B8%E8%B2%A8%E4%B8%80%E5%B9%B4%E4%BF%9D%E5%9B%BA-12156647.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "7.1 聲道",
      "無線後環繞",
      "重低音",
      "家庭劇院"
    ],
    "description": "JBL BAR 800 MK2 是Soundbar類的補充比較型號，依 2026-07-17 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "JBL",
      "後環繞",
      "客廳"
    ],
    "releaseDate": "2022",
    "historicalLow": {
      "status": "found",
      "amount": 27161,
      "currency": "TWD",
      "converted": 27161,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1283907970&cgp=27161",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：JBL BAR800 MK2 7.1聲道家庭劇院喇叭 英大公司貨一年保固",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / JBL BAR800 MK2 7.1聲道家庭劇院喇叭 英大公司貨一年保固」最低價為 NT$27,161，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"JBL BAR 800 MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22JBL%20BAR%20800%20MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"JBL BAR 800 MK2\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22JBL%20BAR%20800%20MK2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-extra-15-dmaanj-a900hzbzv",
    "category": "soundbar",
    "rank": 16,
    "budget": "mid",
    "channel": "tw",
    "brand": "Bose",
    "model": "Smart Soundbar 600 Ultra",
    "name": "家庭娛樂揚聲器 600 Ultra",
    "price": {
      "currency": "TWD",
      "amount": 19900,
      "converted": 19900,
      "confidence": "PChome 2026-07-21 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAANJA900HZBZV/000001_1729154632.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAANJ-A900HZBZV",
    "buyLabel": "PChome",
    "specs": [
      "單件式聲霸",
      "智慧連線",
      "Bose 調音",
      "家庭娛樂"
    ],
    "description": "Bose Smart Soundbar 600 Ultra 是Soundbar類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Bose",
      "音樂",
      "簡潔"
    ],
    "releaseDate": "2022-10-10",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：BigGo DMAANJ-A900HZBZV: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DMAANJ-A900HZBZV/product?p=1；BigGo Bose Smart Soundbar 600 Ultra: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Bose%20Smart%20Soundbar%20600%20Ultra/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Bose Smart Soundbar 600 Ultra\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Bose%20Smart%20Soundbar%20600%20Ultra%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Bose Smart Soundbar 600 Ultra\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Bose%20Smart%20Soundbar%20600%20Ultra%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-extra-16-dmaalna900hp6mr",
    "category": "soundbar",
    "rank": 17,
    "budget": "value",
    "channel": "tw",
    "brand": "Philips",
    "model": "TAB4288",
    "name": "2.0 聲道無線藍牙聲霸",
    "price": {
      "currency": "TWD",
      "amount": 4990,
      "converted": 4990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAALNA900HP6MR/000001_1722414518.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAALN-A900HP6MR",
    "buyLabel": "PChome",
    "specs": [
      "2.0 聲道",
      "藍牙",
      "無線聲霸",
      "入門"
    ],
    "description": "Philips TAB4288 補進本分類比較池，重點是2.0 聲道、藍牙、無線聲霸，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "價格低、比電視內建喇叭好",
      "安裝簡單"
    ],
    "cons": [
      "沒有獨立重低音",
      "環繞感有限"
    ],
    "bestFor": "想依預算補強電視音效，並比較入門、Atmos 與實體環繞的人。",
    "recommendation": "補充推薦：2.0 聲道無線藍牙聲霸 的優勢在價格低、比電視內建喇叭好，但仍建議把沒有獨立重低音納入取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "入門",
      "藍牙",
      "Philips"
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
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Philips TAB4288: Yahoo購物中心 Philips 飛利浦 2.0 聲道藍牙聲霸 TAB4288 型號/規格不相符；LBJ Philips TAB4288: Momo富邦購物 【Philips 飛利浦】2.0 聲道藍牙聲霸(TAB4288) 型號/規格不相符；LBJ Philips TAB4288: 蝦皮商城 - 飛利浦家庭娛樂影音旗艦館 Philips 飛利浦 2.0 聲道藍牙聲霸 TAB4288 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips TAB4288\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20TAB4288%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips TAB4288\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20TAB4288%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-extra-17-dmbm1da900hpuxn",
    "category": "soundbar",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "Sony",
    "model": "HT-A8000",
    "name": "BRAVIA Theatre Bar 8 聲霸",
    "price": {
      "currency": "TWD",
      "amount": 27900,
      "converted": 27900,
      "confidence": "PChome 2026-07-22 API exact-model 現貨公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM1DA900HTC64/000001_1781747501.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM1D-A900HTC64",
    "buyLabel": "PChome",
    "specs": [
      "11 單體",
      "Dolby Atmos",
      "空間音場",
      "Sony"
    ],
    "description": "Sony HT-A8000 補進本分類比較池，重點是11 單體、Dolby Atmos、空間音場，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "音場與人聲強化表現好",
      "適合 Sony 電視搭配"
    ],
    "cons": [
      "價格較高",
      "低頻可視需求加購重低音"
    ],
    "bestFor": "想依預算補強電視音效，並比較入門、Atmos 與實體環繞的人。",
    "recommendation": "補充推薦：BRAVIA Theatre Bar 8 聲霸 的優勢在音場與人聲強化表現好，但仍建議把價格較高納入取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "Atmos",
      "Sony",
      "高階"
    ],
    "releaseDate": "2026",
    "historicalLow": {
      "status": "found",
      "amount": 20900,
      "currency": "TWD",
      "converted": 20900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=530237176&cgp=24577",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【現貨】SONY HT-A8000 家庭劇院 5.0.2 聲道 聲霸 SW7 RS8 SW3 SW5 RS9 HT-A8",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - 集雅社旗艦生活館 / 【現貨】SONY HT-A8000 家庭劇院 5.0.2 聲道 聲霸 SW7 RS8 SW3 SW5 RS9 HT-A8」最低價為 NT$20,900，最低點日期 2025-09-12。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony HT-A8000\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sony%20HT-A8000%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony HT-A8000\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sony%20HT-A8000%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-extra-18-dmbm1da900iuzuj",
    "category": "soundbar",
    "rank": 19,
    "budget": "premium",
    "channel": "tw",
    "brand": "Sony",
    "model": "HT-A9000",
    "name": "BRAVIA Theatre Bar 9 旗艦聲霸",
    "price": {
      "currency": "TWD",
      "amount": 34765,
      "converted": 34765,
      "confidence": "PChome 2026-07-17 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM1DA900I0ZKD/000001_1783764143.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM1D-A900I0ZKD",
    "buyLabel": "PChome",
    "specs": [
      "13 單體",
      "360 空間音場",
      "Dolby Atmos",
      "旗艦"
    ],
    "description": "Sony HT-A9000 補進本分類比較池，重點是13 單體、360 空間音場、Dolby Atmos，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "Sony 旗艦單件式聲霸",
      "電影沉浸感強"
    ],
    "cons": [
      "價格高",
      "完整環繞仍需後環繞/重低音"
    ],
    "bestFor": "想依預算補強電視音效，並比較入門、Atmos 與實體環繞的人。",
    "recommendation": "補充推薦：BRAVIA Theatre Bar 9 旗艦聲霸 的優勢在Sony 旗艦單件式聲霸，但仍建議把價格高納入取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "旗艦",
      "Atmos",
      "Sony"
    ],
    "releaseDate": "2024-04-17",
    "historicalLow": {
      "status": "found",
      "amount": 27900,
      "currency": "TWD",
      "converted": 27900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=530211208&cgp=35618",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：SONY HT-A9000 家庭劇院 7.0.2聲道 聲霸 A9000 SW7 RS8 SW3 RS5 SW9 SW8",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - 集雅社旗艦生活館 / SONY HT-A9000 家庭劇院 7.0.2聲道 聲霸 A9000 SW7 RS8 SW3 RS5 SW9 SW8」最低價為 NT$27,900，最低點日期 2025-08-27。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony HT-A9000\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sony%20HT-A9000%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony HT-A9000\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sony%20HT-A9000%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-extra-19-dmaahga900j5777",
    "category": "soundbar",
    "rank": 20,
    "budget": "premium",
    "channel": "tw",
    "brand": "JBL",
    "model": "BAR 1000 MK2",
    "name": "7.1.4 聲道家庭劇院聲霸",
    "price": {
      "currency": "TWD",
      "amount": 42900,
      "converted": 42900,
      "confidence": "PChome 2026-07-21 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAHGA900J5777/000001_1755253698.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAHG-A900J5777",
    "buyLabel": "PChome",
    "specs": [
      "7.1.4 聲道",
      "可拆式無線喇叭",
      "10 吋重低音",
      "Dolby Atmos"
    ],
    "description": "JBL BAR 1000 MK2 補進本分類比較池，重點是7.1.4 聲道、可拆式無線喇叭、10 吋重低音，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "實體後環繞彈性高",
      "低頻與環繞感完整"
    ],
    "cons": [
      "價格與空間需求較高",
      "後喇叭充電/擺放要規劃"
    ],
    "bestFor": "想依預算補強電視音效，並比較入門、Atmos 與實體環繞的人。",
    "recommendation": "補充推薦：7.1.4 聲道家庭劇院聲霸 的優勢在實體後環繞彈性高，但仍建議把價格與空間需求較高納入取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "7.1.4",
      "可拆環繞",
      "重低音"
    ],
    "releaseDate": "2025-06-12",
    "historicalLow": {
      "status": "found",
      "amount": 40755,
      "currency": "TWD",
      "converted": 40755,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMAAHG-A900J5777",
      "sourceTitle": "PChome 商品頁：JBL BAR 1000 MK2 聲霸 7.1.4聲道家庭劇院 / JBL BAR 1000 MK2 聲霸 7.1.4聲道家庭劇院",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-10 回傳同一商品頁「JBL BAR 1000 MK2 聲霸 7.1.4聲道家庭劇院 / JBL BAR 1000 MK2 聲霸 7.1.4聲道家庭劇院」查核價 NT$40,755，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-10",
      "note": "採用 PChome 24h 同一商品頁可公開查核現價作為本次觀測到的最低價；同型號/規格並排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"JBL BAR 1000 MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22JBL%20BAR%201000%20MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"JBL BAR 1000 MK2\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22JBL%20BAR%201000%20MK2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-extra-20-dmaf02a900h2g5r",
    "category": "soundbar",
    "rank": 21,
    "budget": "premium",
    "channel": "tw",
    "brand": "Philips",
    "model": "TAFB1/96",
    "name": "Fidelio 7.1.2 Dolby Atmos 旗艦聲霸",
    "price": {
      "currency": "TWD",
      "amount": 36955,
      "converted": 36955,
      "confidence": "PChome 2026-07-22 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAF02A900H2G5R/000001_1704612188.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAF02-A900H2G5R",
    "buyLabel": "PChome",
    "specs": [
      "7.1.2 聲道",
      "Dolby Atmos",
      "IMAX Enhanced",
      "無線重低音"
    ],
    "description": "Philips TAFB1/96 補進本分類比較池，重點是7.1.2 聲道、Dolby Atmos、IMAX Enhanced，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "規格完整、價格低於部分旗艦",
      "重低音與聲道數一次到位"
    ],
    "cons": [
      "Philips 高階聲霸討論度較少",
      "尺寸與擺位需確認"
    ],
    "bestFor": "想依預算補強電視音效，並比較入門、Atmos 與實體環繞的人。",
    "recommendation": "補充推薦：Fidelio 7.1.2 Dolby Atmos 旗艦聲霸 的優勢在規格完整、價格低於部分旗艦，但仍建議把Philips 高階聲霸討論度較少納入取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "Fidelio",
      "Atmos",
      "旗艦"
    ],
    "releaseDate": "2022",
    "historicalLow": {
      "status": "found",
      "amount": 35010,
      "currency": "TWD",
      "converted": 35010,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1277745007&cgp=35010",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：PHILIPS飛利浦 7.1.2聲道 重低音聲霸喇叭 TAFB1/96 天空聲道",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / PHILIPS飛利浦 7.1.2聲道 重低音聲霸喇叭 TAFB1/96 天空聲道」最低價為 NT$35,010，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips TAFB1/96\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20TAFB1%2F96%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips TAFB1/96\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20TAFB1%2F96%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-marshall-heston-120",
    "category": "soundbar",
    "rank": 22,
    "budget": "premium",
    "channel": "global",
    "brand": "Marshall",
    "model": "Heston 120",
    "name": "5.1.2 聲道 Dolby Atmos Soundbar",
    "price": {
      "currency": "USD",
      "amount": 1299.99,
      "converted": 42046,
      "confidence": "Marshall US 2026-07-21 來源價；ExchangeRate-API 2026-07-21 匯率換算"
    },
    "image": "https://images.ctfassets.net/javen7msabdh/2C2sn9CKoKFdIyd94Gm9z5/f3019d4e721511167ebe5c229bf490dd/heston-120_plp.jpg",
    "buyUrl": "https://www.marshall.com/us/en/product/heston-120",
    "buyLabel": "Marshall US",
    "specs": [
      "5.1.2 聲道",
      "Dolby Atmos / DTS:X",
      "HDMI eARC / HDMI IN 4K 120Hz passthrough",
      "Wi-Fi 6 / Bluetooth 5.3 / AirPlay 2 / Google Cast",
      "可搭配主動式重低音或 Heston Sub 200"
    ],
    "description": "Marshall 首款旗艦 Soundbar，走單件式高質感設計，適合作為 Sonos、Bose 與高階 Samsung 聲霸的海外參考。",
    "pros": [
      "5.1.2 聲道與雙後置低音單體規格完整",
      "外觀辨識度高，音樂串流支援完整"
    ],
    "cons": [
      "海外參考價未含國際運費與進口稅",
      "台灣保固、庫存與售後需購買前另行確認"
    ],
    "bestFor": "重視外觀、音樂播放與單件式 Atmos 聲霸，且願意自行評估海外採購風險的人。",
    "recommendation": "海外參考：Heston 120 適合拿來和 Sonos Arc Ultra、Bose、Samsung 旗艦聲霸比較；規格漂亮但需把運費、稅金與台灣保固風險算進總成本。",
    "score": 84,
    "voltage": "海外版本，購買前確認 110V/插頭與變壓器需求",
    "warranty": "Marshall US / 海外通路，可能無台灣保固",
    "tags": [
      "Marshall",
      "Atmos",
      "DTS:X",
      "海外參考"
    ],
    "releaseDate": "2025-06-03",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "USD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Marshall Heston 120: Yahoo購物中心 Marshall Heston 120 家庭劇院聲霸 型號/規格不相符；LBJ Marshall Heston 120: Yahoo購物中心 【Marshall】Heston 120 家庭劇院聲霸【台灣公司貨】 型號/規格不相符；LBJ Marshall Heston 120: Yahoo購物中心 【百滋原廠公司貨】 Marshall Heston 120 家庭劇院聲霸 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Marshall Heston 120\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Marshall%20Heston%20120%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Marshall Heston 120\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Marshall%20Heston%20120%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-marshall-heston-60",
    "category": "soundbar",
    "rank": 23,
    "budget": "mid",
    "channel": "global",
    "brand": "Marshall",
    "model": "Heston 60",
    "name": "5.1 聲道 Dolby Atmos 緊湊型 Soundbar",
    "price": {
      "currency": "USD",
      "amount": 699.99,
      "converted": 22640,
      "confidence": "Marshall US 官方 2026-07-21 現貨價；ExchangeRate-API 2026-07-21 匯率換算"
    },
    "image": "https://images.ctfassets.net/javen7msabdh/3yitHqjPBTgQk5qRE72PSn/2788206646aa153f71f2c0ebefaff580/Heston-60-black_plp_800x800-v3.jpeg",
    "buyUrl": "https://www.marshall.com/us/en/product/heston-60?pid=1008949",
    "buyLabel": "Marshall US 官方",
    "specs": [
      "5.1 聲道",
      "Dolby Atmos / DTS:X",
      "HDMI eARC / AUX 3.5mm / RCA Mono Sub Out / USB-C",
      "Wi-Fi 6 / Bluetooth 5.3 / AirPlay 2 / Google Cast",
      "可加購 Heston Sub 200 補強低頻"
    ],
    "description": "Marshall Heston 60 是較小空間取向的 Atmos 聲霸，適合和 Sonos Beam、Bose Smart Soundbar 等單件式機型比較。",
    "pros": [
      "尺寸較短，桌面與壁掛彈性高",
      "支援 DTS:X 與主流 Wi-Fi 串流"
    ],
    "cons": [
      "海外通路庫存與到貨時程可能變動",
      "若要更強低頻需另購 Heston Sub 200"
    ],
    "bestFor": "想在小客廳、臥室或書房比較有設計感的 Atmos 聲霸，且能接受海外運費、稅金與保固風險的人。",
    "recommendation": "海外參考：Heston 60 是 Marshall 較好入手的緊湊型聲霸，聲道與串流規格完整；運費稅金與台灣保固仍需先確認。",
    "score": 83,
    "voltage": "海外版本，購買前確認 110V/插頭與變壓器需求",
    "warranty": "Marshall US 官方／海外購買，可能無台灣保固，購買前需確認",
    "tags": [
      "Marshall",
      "Atmos",
      "DTS:X",
      "小空間",
      "海外參考"
    ],
    "releaseDate": "2025-09-23",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "USD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Marshall Heston 60: 蝦皮商城 - 新竹竹北 名展音響 Minjan Audio 【百滋原廠公司貨登錄延長半年保固】Marshall Heston 60 家庭劇院聲霸 型號/規格不相符；LBJ Marshall Heston 60: Momo富邦購物 【Marshall】家庭劇院聲霸 soundbar (Heston 60) 型號/規格不相符；LBJ Marshall Heston 60: Momo富邦購物 (店+)Marshall 馬歇爾音響 Heston 60 家庭劇院聲霸 公司貨 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Marshall Heston 60\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Marshall%20Heston%2060%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Marshall Heston 60\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Marshall%20Heston%2060%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-costco-denon-dht-s517",
    "category": "soundbar",
    "rank": 24,
    "budget": "mid",
    "channel": "tw",
    "brand": "Denon",
    "model": "DHT-S517",
    "name": "3.1.2 聲道 Dolby Atmos Soundbar 重低音組合",
    "price": {
      "currency": "TWD",
      "amount": 14999,
      "converted": 14999,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h40/hc8/204392561901598.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/TV-Home-Entertainment/Soundbars-Home-Theater/Denon-312-CH-Soundbar-with-Dolby-Atmos-and-Wireless-Subwoofer-DHT-S517/p/144030",
    "buyLabel": "Costco 好市多",
    "specs": [
      "3.1.2 聲道",
      "Dolby Atmos",
      "無線重低音",
      "Costco 評價 4.6 / 52 則"
    ],
    "description": "Denon DHT-S517 是 Costco 評價穩定的 Atmos 聲霸，保留獨立重低音又不需要後環繞喇叭。",
    "pros": [
      "Atmos 與重低音配置完整",
      "Costco 評價 4.6 且評論數足夠"
    ],
    "cons": [
      "不是完整後環繞系統",
      "低頻與擺位仍需依客廳調整"
    ],
    "bestFor": "想用 Costco 通路升級電視音效、但不想擺後喇叭的人。",
    "recommendation": "好市多補充推薦：DHT-S517 比入門聲霸更有沉浸感，價格也比旗艦套組低很多。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "Atmos",
      "重低音"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 11599,
      "currency": "TWD",
      "converted": 11599,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1212344126&cgp=14999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】Denon 3.1.2 聲道 Dolby Atmos Soundbar 重低音組合 DHT-S517 Denon 3.1.2 CH Soundbar with Dolby Atmos and Wireless Subwoofer DHT-S517",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】Denon 3.1.2 聲道 Dolby Atmos Soundbar 重低音組合 DHT-S517 Denon 3.1.2 CH Soundbar with Dolby Atmos and Wireless Subwoofer DHT-S517」最低價為 NT$11,599，最低點日期 2026-06-15。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 DHT-S517 使用者回報 HDMI ARC/eARC 或 Bluetooth 播放時會隨機短暫斷音，部分需切換輸入或重新啟動才恢復。",
      "issues": [
        {
          "title": "HDMI ARC/eARC 隨機斷音或無聲",
          "detail": "回報包含數秒斷音、整段無聲，以及需切換輸入或重新啟動才能恢復；建議在退換貨期內以實際電視、遊戲主機與串流來源長時間測試，並保留替換線材與輸入的排查紀錄。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Audio Output cuts out randomly",
              "url": "https://www.reddit.com/r/Soundbars/comments/1jsws5x/audio_output_cuts_out_randomly/"
            },
            {
              "platform": "Sky Community",
              "title": "Denon soundbar issues with SkyQ",
              "url": "https://helpforum.sky.com/t5/Sky-Q/Denon-soundbar-issues-with-SkyQ/td-p/4909403"
            },
            {
              "platform": "Best Buy",
              "title": "Customer Reviews: Denon DHT-S517",
              "url": "https://www.bestbuy.com/site/reviews/denon-dht-s517-3-1-2-ch-soundbar-with-wireless-subwoofer-and-dolby-atmos-bluetooth-black/6495578?feature=Price"
            },
            {
              "platform": "価格.com",
              "title": "『音が途切れる』 DENON DHT-S517 のクチコミ掲示板",
              "url": "https://bbs.kakaku.com/bbs/K0001417614/SortID%3D24628631/"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "soundbar-costco-philips-tab6309",
    "category": "soundbar",
    "rank": 25,
    "budget": "value",
    "channel": "tw",
    "brand": "Philips",
    "model": "TAB6309",
    "name": "2.1 聲道無線重低音 Dolby Atmos 聲霸",
    "price": {
      "currency": "TWD",
      "amount": 7599,
      "converted": 7599,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h84/h32/278946106834974.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/TV-Home-Entertainment/Soundbars-Home-Theater/Philips-21-CH-Soundbar-TAB6309/p/147918",
    "buyLabel": "Costco 好市多",
    "specs": [
      "2.1 聲道",
      "無線重低音",
      "Dolby Atmos",
      "主機 30W / 重低音 40W",
      "Costco 評價 4.6 / 48 則"
    ],
    "description": "Costco 評價不錯的聲霸候選，補進聲音升級比較池。",
    "pros": [
      "評價穩定且通路清楚",
      "可補強電視內建喇叭"
    ],
    "cons": [
      "聲道與低頻能力仍需依空間比較",
      "不一定能取代完整家庭劇院"
    ],
    "bestFor": "想在好市多購買聲霸或小型劇院升級的人",
    "recommendation": "好市多補充推薦：2.1 聲道無線重低音 Dolby Atmos 聲霸 評價不錯，補進Soundbar分類作為 Costco 候選比較。",
    "score": 87,
    "voltage": "100-240V AC 50/60Hz",
    "warranty": "依 Costco 好市多商品頁與品牌 1 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "Soundbar",
      "Atmos",
      "重低音"
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
      "checkedAt": "2026-07-11",
      "note": "未找到 TAB6309/96 可公開驗證的可信新品史低；原 NT$6,388 候選明確標示特價 B 品，依資料契約排除。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips TAB6309\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20TAB6309%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips TAB6309\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20TAB6309%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-costco-soodatek-ss0220",
    "category": "soundbar",
    "rank": 26,
    "budget": "value",
    "channel": "tw",
    "brand": "Soodatek",
    "model": "SS0220-CS2000PBK",
    "name": "2.0 聲道二合一分離式聲霸",
    "price": {
      "currency": "TWD",
      "amount": 602,
      "converted": 602,
      "confidence": "Yahoo購物中心 2026-07-22 exact-model 公開結構化價格"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h21/hac/367883491278878.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Soodatek-2-0%E8%81%B2%E9%81%93%E4%BA%8C%E5%90%88%E4%B8%80Soundbar-SS0220-CS2000PBK-11633433.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "2.0 聲道",
      "二合一分離式設計",
      "重量：680公克",
      "Costco 稀少分類例外候選",
      "Costco 評價 4.6 / 14 則"
    ],
    "description": "Costco 評價不錯的聲霸候選，補進聲音升級比較池。",
    "pros": [
      "評價穩定且通路清楚",
      "可補強電視內建喇叭"
    ],
    "cons": [
      "聲道與低頻能力仍需依空間比較",
      "不一定能取代完整家庭劇院"
    ],
    "bestFor": "想在好市多購買聲霸或小型劇院升級的人",
    "recommendation": "好市多補充推薦：2.0 聲道二合一分離式聲霸 評價不錯，補進Soundbar分類作為 Costco 候選比較。",
    "score": 81,
    "voltage": "通路頁未標示；購買前確認電源規格",
    "warranty": "依 Costco 好市多商品頁與品牌 1 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "平價",
      "2.0聲道",
      "小空間"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 589,
      "currency": "TWD",
      "converted": 589,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1250661497&cgp=602",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Soodatek】2.0聲道二合一Soundbar/SS0220-CS2000PBK",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / 【Soodatek】2.0聲道二合一Soundbar/SS0220-CS2000PBK」最低價為 NT$589，最低點日期 2026-06-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Soodatek SS0220-CS2000PBK\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Soodatek%20SS0220-CS2000PBK%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Soodatek SS0220-CS2000PBK\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Soodatek%20SS0220-CS2000PBK%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  }
]);
})();
