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
      "amount": 44900,
      "converted": 44900,
      "confidence": "Yahoo購物中心 2026-09-05 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAODA900JMDR5/000001_1773978957.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Samsung-%E4%B8%89%E6%98%9F-11-1-4%E8%81%B2%E9%81%93-%E8%97%8D%E7%89%99%E8%81%B2%E9%9C%B8-HW-Q990F-ZW-11688500.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "11.1.4 聲道",
      "無線後環繞",
      "無線重低音",
      "Dolby Atmos / DTS:X",
      "尺寸：主機 寬 123.2 x 深 13.8 x 高 7.08 cm；後環繞喇叭 寬 12.95 x 深 14.04 x 高 20.13 cm；重低音 寬 24.9 x 深 24.9 x 高 25.18 cm",
      "重量：主機 7.3 kg；後環繞喇叭 3.4 kg；重低音 8.3 kg"
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
    "releaseDate": "2025-03-26",
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
      "checkedAt": "2026-08-29",
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
      "Q-Symphony",
      "尺寸：主機 寬 111.07 x 深 12 x 高 6.04 cm；重低音 寬 24.9 x 深 24.9 x 高 25.18 cm",
      "重量：主機 5.1 kg；重低音 7.2 kg"
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
    "releaseDate": "2026-04",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung HW-Q800H/ZW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20HW-Q800H%2FZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung HW-Q800H/ZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20HW-Q800H%2FZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung HW-Q800H/ZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20HW-Q800H%2FZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung HW-Q800H/ZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20HW-Q800H%2FZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung HW-Q800H/ZW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20HW-Q800H%2FZW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "amount": 11305,
      "converted": 11305,
      "confidence": "momo 2026-07-31 exact-model 公開 95 折價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAODA900JMC1Q/000001_1781726516.jpg",
    "buyUrl": "https://www.momoshop.com.tw/product/14864179",
    "buyLabel": "momo",
    "specs": [
      "3.1.2 聲道",
      "Dolby Atmos",
      "無線重低音",
      "BRAVIA 連動",
      "尺寸：主機 寬 95 x 深 11 x 高 6.4 cm；重低音 寬 21 x 深 38.8 x 高 38.8 cm",
      "重量：主機 3.1 kg；重低音 7.7 kg"
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
    "releaseDate": "2026-01-06",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony HT-B600\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sony%20HT-B600%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony HT-B600\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sony%20HT-B600%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Sony HT-B600\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Sony%20HT-B600%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Sony HT-B600\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Sony%20HT-B600%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Sony HT-B600\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Sony%20HT-B600%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "amount": 21755,
      "converted": 21755,
      "confidence": "PChome 2026-08-26 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "BRAVIA Connect 空間校正",
      "尺寸：主機 寬 95 x 深 12.5 x 高 6.4 cm",
      "重量：主機 4.6 kg"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony HT-A7100\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sony%20HT-A7100%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony HT-A7100\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sony%20HT-A7100%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Sony HT-A7100\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Sony%20HT-A7100%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Sony HT-A7100\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Sony%20HT-A7100%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Sony HT-A7100\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Sony%20HT-A7100%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "Sonos 生態系",
      "尺寸：主機 寬 117.8 x 深 11.06 x 高 7.5 cm",
      "重量：主機 5.9 kg"
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
    "releaseDate": "2024-10-29",
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
      "checkedAt": "2026-08-29",
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
      "藍牙/Wi-Fi",
      "尺寸：主機 寬 94 x 深 10.4 x 高 5.05 cm；重低音 寬 32.5 x 深 32.5 x 高 40 cm",
      "重量：主機 2.9 kg；重低音 8.1 kg"
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
    "releaseDate": "2025-06",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"JBL BAR 500 MK2\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22JBL%20BAR%20500%20MK2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"JBL BAR 500 MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22JBL%20BAR%20500%20MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"JBL BAR 500 MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22JBL%20BAR%20500%20MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"JBL BAR 500 MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22JBL%20BAR%20500%20MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"JBL BAR 500 MK2\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22JBL%20BAR%20500%20MK2%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "confidence": "PChome 2026-09-02 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAODA900K3QSM/000001_1782969828.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAOD-A900K3QSM",
    "buyLabel": "PChome",
    "specs": [
      "9.1.4 聲道",
      "Dolby Atmos",
      "後環繞喇叭",
      "Q 系列",
      "尺寸：主機 寬 111.07 x 深 12 x 高 6.04 cm；後環繞喇叭 寬 12.95 x 深 14.04 x 高 20.13 cm；重低音 寬 24.9 x 深 24.9 x 高 25.18 cm",
      "重量：主機 5.3 kg；後環繞喇叭 3.1 kg；重低音 7.2 kg"
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
      "amount": 42886,
      "currency": "TWD",
      "converted": 42886,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMAAOD-A900K3QSM",
      "sourceTitle": "PChome 24h 購物：SAMSUNG 三星 HW-Q930H/ZW Q 系列 Soundbar 9.1.4 聲道 家庭劇院",
      "evidenceSnippet": "PChome 24h 購物於 2026-08-02 顯示同型號可信新品公開價 NT$42,886，低於既有史低 NT$44,910。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-08-02",
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
          "query": "site:reddit.com \"Samsung HW-Q930H/ZW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20HW-Q930H%2FZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung HW-Q930H/ZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20HW-Q930H%2FZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung HW-Q930H/ZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20HW-Q930H%2FZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung HW-Q930H/ZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20HW-Q930H%2FZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung HW-Q930H/ZW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20HW-Q930H%2FZW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "中階聲霸",
      "尺寸：主機 寬 116 x 深 12 x 高 5.1 cm；重低音 寬 24.9 x 深 24.9 x 高 25.2 cm",
      "重量：主機 4.4 kg；重低音 4.8 kg"
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
    "releaseDate": "2025-04-09",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung HW-QS700F\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20HW-QS700F%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung HW-QS700F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20HW-QS700F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung HW-QS700F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20HW-QS700F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung HW-QS700F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20HW-QS700F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung HW-QS700F\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20HW-QS700F%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "LG Soundbar",
      "尺寸：主機 寬 100 x 深 13.5 x 高 6.3 cm；後環繞喇叭 寬 10 x 深 12 x 高 17.65 cm；重低音 寬 20.17 x 深 40.3 x 高 40.7 cm",
      "重量：主機 4.3 kg；後環繞喇叭（2 只） 2.34 kg；重低音 10 kg"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG S80TR\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20S80TR%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG S80TR\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20S80TR%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG S80TR\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20S80TR%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG S80TR\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20S80TR%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG S80TR\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20S80TR%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "amount": 59900,
      "converted": 59900,
      "confidence": "Yahoo購物中心 2026-09-05 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADO2A900K5VUT/000001_1782993730.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Samsung%E4%B8%89%E6%98%9F-11-1-4%E8%81%B2%E9%81%93-%E8%97%8D%E7%89%99%E8%81%B2%E9%9C%B8-HW-Q990H-ZW-12124621.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "11.1.4 聲道",
      "重低音",
      "後環繞",
      "Dolby Atmos",
      "尺寸：主機 寬 123.2 x 深 13.8 x 高 7.08 cm；後環繞喇叭 寬 12.95 x 深 14.04 x 高 20.13 cm；重低音 寬 24.9 x 深 24.9 x 高 25.18 cm",
      "重量：主機 7.3 kg；後環繞喇叭 3.4 kg；重低音 8.3 kg"
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
    "releaseDate": "2026-04",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung HW-Q990H/ZW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20HW-Q990H%2FZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung HW-Q990H/ZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20HW-Q990H%2FZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung HW-Q990H/ZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20HW-Q990H%2FZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung HW-Q990H/ZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20HW-Q990H%2FZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung HW-Q990H/ZW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20HW-Q990H%2FZW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "amount": 36900,
      "converted": 36900,
      "confidence": "Yahoo購物中心 2026-09-05 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAODA900K5489/000001_1782988490.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Samsung%E4%B8%89%E6%98%9F-7-1-2%E8%81%B2%E9%81%93-%E8%97%8D%E7%89%99%E8%81%B2%E9%9C%B8-HW-QS90H-ZW-12124562.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "7.1.2 聲道",
      "Q 系列",
      "Dolby Atmos",
      "重低音",
      "尺寸：主機 寬 124.5 x 深 12.5 x 高 6.88 cm",
      "重量：主機 6.7 kg"
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
    "releaseDate": "2026-04",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung HW-QS90H/ZW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20HW-QS90H%2FZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung HW-QS90H/ZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20HW-QS90H%2FZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung HW-QS90H/ZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20HW-QS90H%2FZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung HW-QS90H/ZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20HW-QS90H%2FZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung HW-QS90H/ZW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20HW-QS90H%2FZW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "amount": 8541,
      "converted": 8541,
      "confidence": "Yahoo購物中心 2026-09-04 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM1DA900GHTFE/000001_1776774078.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/SONY-%E7%B4%A2%E5%B0%BC-5-1-%E8%81%B2%E9%81%93-SOUNDBAR-%E5%AE%B6%E5%BA%AD%E5%8A%87%E9%99%A2%E7%B5%84-HT-S40R-10067449.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "5.1 聲道",
      "後環繞",
      "重低音",
      "藍牙",
      "尺寸：主機 寬 90 x 深 7.45 x 高 5.2 cm；後環繞喇叭 寬 8.3 x 深 7.45 x 高 18 cm；無線擴大器 寬 16 x 深 16 x 高 5.2 cm；重低音 寬 19.2 x 深 36.6 x 高 38.7 cm",
      "重量：主機 2 kg；無線擴大器 0.8 kg；重低音 7.8 kg"
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
    "releaseDate": "2021-05",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony HT-S40R\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sony%20HT-S40R%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony HT-S40R\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sony%20HT-S40R%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Sony HT-S40R\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Sony%20HT-S40R%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Sony HT-S40R\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Sony%20HT-S40R%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Sony HT-S40R\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Sony%20HT-S40R%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "confidence": "Yahoo購物中心 2026-08-13 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAMTA900I5HHO/000001_1778661010.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Sony-HT-S100F-11411387.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "2.0 聲道",
      "單件式",
      "藍牙",
      "小空間",
      "尺寸：主機 寬 90 x 深 8.8 x 高 6.4 cm",
      "重量：主機 2.4 kg"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony HT-S100F\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sony%20HT-S100F%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony HT-S100F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sony%20HT-S100F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Sony HT-S100F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Sony%20HT-S100F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Sony HT-S100F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Sony%20HT-S100F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Sony HT-S100F\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Sony%20HT-S100F%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "黑/白色",
      "尺寸：主機 寬 94 x 深 10.4 x 高 5.05 cm",
      "重量：主機 2.9 kg"
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
    "releaseDate": "2025-06",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"JBL BAR 300 MK2\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22JBL%20BAR%20300%20MK2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"JBL BAR 300 MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22JBL%20BAR%20300%20MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"JBL BAR 300 MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22JBL%20BAR%20300%20MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"JBL BAR 300 MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22JBL%20BAR%20300%20MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"JBL BAR 300 MK2\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22JBL%20BAR%20300%20MK2%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "amount": 28590,
      "converted": 28590,
      "confidence": "Yahoo購物中心 2026-09-05 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAHGA900J56OK/000001_1755250707.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/JBL-BAR800-MK2-7-1%E8%81%B2%E9%81%93%E5%AE%B6%E5%BA%AD%E5%8A%87%E9%99%A2%E5%96%87%E5%8F%AD-%E8%8B%B1%E5%A4%A7%E5%85%AC%E5%8F%B8%E8%B2%A8%E4%B8%80%E5%B9%B4%E4%BF%9D%E5%9B%BA-12156647.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "7.1 聲道",
      "無線後環繞",
      "重低音",
      "家庭劇院",
      "尺寸：主機 寬 85.4 x 深 12.8 x 高 5.2 cm；後環繞喇叭 寬 16.9 x 深 12.8 x 高 5.2 cm；重低音 寬 32.5 x 深 32.5 x 高 40 cm",
      "重量：主機 5 kg；後環繞喇叭每只 0.7 kg；重低音 8.1 kg"
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
    "releaseDate": "2025-06",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"JBL BAR 800 MK2\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22JBL%20BAR%20800%20MK2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"JBL BAR 800 MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22JBL%20BAR%20800%20MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"JBL BAR 800 MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22JBL%20BAR%20800%20MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"JBL BAR 800 MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22JBL%20BAR%20800%20MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"JBL BAR 800 MK2\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22JBL%20BAR%20800%20MK2%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "家庭娛樂",
      "尺寸：查不到",
      "重量：查不到"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：BigGo DMAANJ-A900HZBZV: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DMAANJ-A900HZBZV/product?p=1；BigGo Bose Smart Soundbar 600 Ultra: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Bose%20Smart%20Soundbar%20600%20Ultra/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Bose Smart Soundbar 600 Ultra\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Bose%20Smart%20Soundbar%20600%20Ultra%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Bose Smart Soundbar 600 Ultra\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Bose%20Smart%20Soundbar%20600%20Ultra%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Bose Smart Soundbar 600 Ultra\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Bose%20Smart%20Soundbar%20600%20Ultra%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Bose Smart Soundbar 600 Ultra\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Bose%20Smart%20Soundbar%20600%20Ultra%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Bose Smart Soundbar 600 Ultra\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Bose%20Smart%20Soundbar%20600%20Ultra%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "入門",
      "尺寸：主機 寬 110 x 深 8.8 x 高 6.7 cm",
      "重量：主機 2.3 kg"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips TAB4288\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20TAB4288%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips TAB4288\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20TAB4288%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Philips TAB4288\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Philips%20TAB4288%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Philips TAB4288\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Philips%20TAB4288%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Philips TAB4288\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Philips%20TAB4288%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "amount": 29900,
      "converted": 29900,
      "confidence": "PChome 2026-08-24 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM1DA900HTC64/000001_1781747501.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM1D-A900HTC64",
    "buyLabel": "PChome",
    "specs": [
      "11 單體",
      "Dolby Atmos",
      "空間音場",
      "Sony",
      "尺寸：主機 寬 110 x 深 11.3 x 高 6.4 cm",
      "重量：主機 4.7 kg"
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
    "releaseDate": "2024-06-01",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony HT-A8000\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sony%20HT-A8000%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony HT-A8000\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sony%20HT-A8000%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Sony HT-A8000\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Sony%20HT-A8000%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Sony HT-A8000\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Sony%20HT-A8000%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Sony HT-A8000\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Sony%20HT-A8000%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "amount": 42900,
      "converted": 42900,
      "confidence": "Sony Store 台灣 2026-09-02 exact-model 官方現售價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "not_stated",
      "note": "Sony Store 台灣頁未列到府安裝；桌面擺放可自行完成，壁掛施工與配線另詢。"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM1DA900I0ZKD/000001_1783764143.jpg",
    "buyUrl": "https://store.sony.com.tw/product/HT-A9000",
    "buyLabel": "Sony Store 台灣",
    "specs": [
      "聲道／單體：7.0.2 聲道、13 單體",
      "空間音效：360 Spatial Sound Mapping、Sound Field Optimization",
      "音訊格式：Dolby Atmos、DTS:X、IMAX Enhanced",
      "連線：HDMI 輸入 1／輸出 1（eARC／ARC）、Bluetooth 5.2、Wi-Fi",
      "串流：AirPlay、Spotify Connect",
      "尺寸：主機 寬 130 x 深 11.3 x 高 6.4 cm",
      "重量：主機 5.5 kg"
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
    "voltage": "Sony 台灣版說明書明示 AC 120V／50–60Hz",
    "warranty": "Sony Store 台灣官方頁標示註冊保固 12 個月，無延長保固",
    "tags": [
      "旗艦",
      "Atmos",
      "Sony"
    ],
    "releaseDate": "2024-08-06",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony HT-A9000\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sony%20HT-A9000%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony HT-A9000\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sony%20HT-A9000%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Sony HT-A9000\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Sony%20HT-A9000%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Sony HT-A9000\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Sony%20HT-A9000%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Sony HT-A9000\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Sony%20HT-A9000%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "confidence": "PChome 2026-07-31 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAHGA900J5777/000001_1755253698.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAHG-A900J5777",
    "buyLabel": "PChome",
    "specs": [
      "7.1.4 聲道",
      "可拆式無線喇叭",
      "10 吋重低音",
      "Dolby Atmos",
      "尺寸：主機 寬 85.4 x 深 12.8 x 高 5.2 cm；後環繞喇叭 寬 18.9 x 深 12.8 x 高 5.2 cm；重低音 寬 32.5 x 深 32.5 x 高 40 cm",
      "重量：主機 5.5 kg；後環繞喇叭每只 0.9 kg；重低音 9.1 kg"
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
    "releaseDate": "2025-06",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"JBL BAR 1000 MK2\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22JBL%20BAR%201000%20MK2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"JBL BAR 1000 MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22JBL%20BAR%201000%20MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"JBL BAR 1000 MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22JBL%20BAR%201000%20MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"JBL BAR 1000 MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22JBL%20BAR%201000%20MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"JBL BAR 1000 MK2\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22JBL%20BAR%201000%20MK2%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "amount": 34930,
      "converted": 34930,
      "confidence": "PChome 2026-08-29 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAF02A900H2G5R/000001_1704612188.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAF02-A900H2G5R",
    "buyLabel": "PChome",
    "specs": [
      "7.1.2 聲道",
      "Dolby Atmos",
      "IMAX Enhanced",
      "無線重低音",
      "尺寸：主機 寬 120 x 深 12.5 x 高 7.3 cm",
      "重量：主機 7.2 kg"
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
      "amount": 34930,
      "currency": "TWD",
      "converted": 34930,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMAF02-A900H2G5R",
      "sourceTitle": "PChome 24h 購物：飛利浦 PHILIPS TAFB1/96 Fidelio Soundbar 7.1.2聲道Dolby Atmos IMAX 無線家庭劇院旗艦級聲霸音響",
      "evidenceSnippet": "PChome 24h 購物於 2026-08-29 顯示同型號可信新品公開價 NT$34,930，低於既有史低 NT$35,010。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-08-29",
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
          "query": "site:reddit.com \"Philips TAFB1/96\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20TAFB1%2F96%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips TAFB1/96\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20TAFB1%2F96%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Philips TAFB1/96\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Philips%20TAFB1%2F96%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Philips TAFB1/96\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Philips%20TAFB1%2F96%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Philips TAFB1/96\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Philips%20TAFB1%2F96%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "converted": 41119,
      "confidence": "Marshall US 2026-07-21 來源價；ExchangeRate-API 2026-09-05 匯率換算"
    },
    "image": "https://images.ctfassets.net/javen7msabdh/2C2sn9CKoKFdIyd94Gm9z5/f3019d4e721511167ebe5c229bf490dd/heston-120_plp.jpg",
    "buyUrl": "https://www.marshall.com/us/en/product/heston-120",
    "buyLabel": "Marshall US",
    "specs": [
      "5.1.2 聲道",
      "Dolby Atmos / DTS:X",
      "HDMI eARC / HDMI IN 4K 120Hz passthrough",
      "Wi-Fi 6 / Bluetooth 5.3 / AirPlay 2 / Google Cast",
      "可搭配主動式重低音或 Heston Sub 200",
      "尺寸：主機 寬 110 x 深 14.5 x 高 7.6 cm",
      "重量：主機 7.04 kg"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Marshall Heston 120\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Marshall%20Heston%20120%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Marshall Heston 120\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Marshall%20Heston%20120%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Marshall Heston 120\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Marshall%20Heston%20120%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Marshall Heston 120\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Marshall%20Heston%20120%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Marshall Heston 120\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Marshall%20Heston%20120%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "amount": 549.99,
      "converted": 17396,
      "confidence": "2026-08-31 人工核對 Marshall US 官方 Heston 60 公開可購主價 USD 549.99；已區分劃線原價、同頁其他 SKU、配件、分期與個人化回饋。；ExchangeRate-API 2026-09-05 匯率換算",
      "basis": "retailer_current"
    },
    "image": "https://images.ctfassets.net/javen7msabdh/3yitHqjPBTgQk5qRE72PSn/2788206646aa153f71f2c0ebefaff580/Heston-60-black_plp_800x800-v3.jpeg",
    "buyUrl": "https://www.marshall.com/us/en/product/heston-60?pid=1008949",
    "buyLabel": "Marshall US 官方",
    "specs": [
      "5.1 聲道",
      "Dolby Atmos / DTS:X",
      "HDMI eARC / AUX 3.5mm / RCA Mono Sub Out / USB-C",
      "Wi-Fi 6 / Bluetooth 5.3 / AirPlay 2 / Google Cast",
      "可加購 Heston Sub 200 補強低頻",
      "尺寸：主機 寬 73 x 深 12.4 x 高 6.8 cm",
      "重量：主機 2.76 kg"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Marshall Heston 60\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Marshall%20Heston%2060%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Marshall Heston 60\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Marshall%20Heston%2060%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Marshall Heston 60\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Marshall%20Heston%2060%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Marshall Heston 60\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Marshall%20Heston%2060%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Marshall Heston 60\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Marshall%20Heston%2060%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "Costco 評價 4.6 / 52 則",
      "尺寸：主機 寬 105 x 深 9.5 x 高 6 cm；重低音 寬 17.2 x 深 29 x 高 37 cm",
      "重量：主機 2.5 kg；重低音 4.3 kg"
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
    "releaseDate": "2022-01",
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
      "checkedAt": "2026-08-29",
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
      "confidence": "Costco 好市多 2026-08-31 exact-model 公開結構化價格"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h84/h32/278946106834974.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/TV-Home-Entertainment/Soundbars-Home-Theater/Philips-21-CH-Soundbar-TAB6309/p/147918",
    "buyLabel": "Costco 好市多",
    "specs": [
      "2.1 聲道",
      "無線重低音",
      "Dolby Atmos",
      "主機 30W / 重低音 40W",
      "Costco 評價 4.6 / 48 則",
      "尺寸：主機 寬 81.1 x 深 4.2 x 高 3.7 cm；重低音 寬 15.5 x 深 16.1 x 高 39.1 cm",
      "重量：主機 0.61 kg；重低音 3.69 kg"
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
    "releaseDate": "2024-06",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips TAB6309\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20TAB6309%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips TAB6309\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20TAB6309%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Philips TAB6309\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Philips%20TAB6309%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Philips TAB6309\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Philips%20TAB6309%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Philips TAB6309\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Philips%20TAB6309%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "amount": 633,
      "converted": 633,
      "confidence": "Yahoo購物中心 2026-09-05 exact-model 公開結構化價格"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h21/hac/367883491278878.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Soodatek-2-0%E8%81%B2%E9%81%93%E4%BA%8C%E5%90%88%E4%B8%80Soundbar-SS0220-CS2000PBK-11633433.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "2.0 聲道",
      "二合一分離式設計",
      "Costco 稀少分類例外候選",
      "Costco 評價 4.6 / 14 則",
      "尺寸：查不到",
      "重量：查不到"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Soodatek SS0220-CS2000PBK\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Soodatek%20SS0220-CS2000PBK%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Soodatek SS0220-CS2000PBK\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Soodatek%20SS0220-CS2000PBK%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Soodatek SS0220-CS2000PBK\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Soodatek%20SS0220-CS2000PBK%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Soodatek SS0220-CS2000PBK\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Soodatek%20SS0220-CS2000PBK%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Soodatek SS0220-CS2000PBK\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Soodatek%20SS0220-CS2000PBK%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-jbl-bar-1300-mk2",
    "category": "soundbar",
    "rank": 27,
    "budget": "premium",
    "channel": "tw",
    "brand": "JBL",
    "model": "BAR 1300MK2",
    "name": "11.1.4 聲道旗艦家庭劇院聲霸",
    "price": {
      "currency": "TWD",
      "amount": 68800,
      "converted": 68800,
      "confidence": "PChome 2026-07-24 exact-model 商品 API 公開價；Price.Low 無正值時採 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAHGA900JK94E/000001_1765975501.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAHG-A900JK94E",
    "buyLabel": "PChome",
    "specs": [
      "11.1.4 聲道、六顆天空聲道單體",
      "可拆式無線後環繞，續航最長 10 小時",
      "雙 8 吋無線重低音，系統最大輸出 2470W",
      "Dolby Atmos / DTS:X / MultiBeam 3.0",
      "HDMI eARC、4K Dolby Vision passthrough、AirPlay 與 Google Cast",
      "尺寸：主機 寬 103 x 深 13.6 x 高 5.8 cm；後環繞喇叭 寬 20.2 x 深 13.6 x 高 5.8 cm；重低音 寬 31.5 x 深 27.5 x 高 27.7 cm",
      "重量：主機 5.93 kg；後環繞喇叭每只 1.3 kg；重低音 12 kg"
    ],
    "description": "JBL BAR 1300MK2 以 11.1.4 聲道、可拆式後環繞與雙 8 吋重低音補足 JBL 旗艦級距，適合與 Samsung Q990 系列直接比較。",
    "pros": [
      "可拆式後環繞兼顧實體包圍感與彈性擺位",
      "六顆天空聲道與雙 8 吋重低音，電影沉浸規格完整",
      "支援多種串流協定與 4K Dolby Vision 訊號直通"
    ],
    "cons": [
      "售價、機身與重低音空間需求都高",
      "後環繞需要充電並規劃擺位",
      "Reddit 單一網站有低音偏弱、後環繞白噪音或連線異常個案，尚未達跨站集中災情門檻"
    ],
    "bestFor": "想要 11.1.4 聲道、實體後環繞與強低頻，且客廳有足夠擺位空間的人。",
    "recommendation": "JBL 旗艦比較候選：規格與沉浸感完整，但價格高，建議在退換貨期內用實際電視與播放來源長時間測試低頻、後環繞與連線穩定性。",
    "score": 88,
    "voltage": "100-240V AC 50/60Hz",
    "warranty": "台灣代理商公司貨 1 年保固；依購買通路與 JBL 台灣條款",
    "tags": [
      "11.1.4",
      "可拆環繞",
      "雙8吋重低音",
      "旗艦"
    ],
    "releaseDate": "2025-10",
    "historicalLow": {
      "status": "found",
      "amount": 176091,
      "currency": "JPY",
      "converted": 35668,
      "sourceUrl": "https://kakaku.com/item/K0001712395/pricehistory/",
      "sourceTitle": "価格.com：JBL BAR 1300MK2 [ブラック] 価格推移",
      "evidenceSnippet": "価格.com 日別價格歷史顯示 exact-model「JBL BAR 1300MK2 [ブラック]」於 2026-06-17 的新品最低價為 ¥176,091；2025-10 初始價格為 ¥205,306。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-08-25",
      "note": "採日本市場 exact-model 公開價格歷史並依 2026-09-05 JPY/TWD 匯率換算；未含國際運費、進口稅、插頭／電壓確認與台灣保固風險。官方規格雖為 100-240V，海外購入仍非台灣公司貨。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"JBL BAR 1300MK2\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22JBL%20BAR%201300MK2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"JBL BAR 1300MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22JBL%20BAR%201300MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"JBL BAR 1300MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22JBL%20BAR%201300MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"JBL BAR 1300MK2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22JBL%20BAR%201300MK2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"JBL BAR 1300MK2\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22JBL%20BAR%201300MK2%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-panasonic-sc-htb334gtk",
    "category": "soundbar",
    "rank": 28,
    "topPick": false,
    "budget": "balanced",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "SC-HTB334GTK",
    "name": "3.1.2 聲道 Dolby Atmos 無線重低音 Soundbar",
    "price": {
      "currency": "TWD",
      "amount": 16900,
      "converted": 16900,
      "confidence": "雅光電器 2026-08-14 exact-model 新品頁公開售價並標示尚有庫存",
      "basis": "retailer_current"
    },
    "image": "https://cdn1-next.cybassets.com/media/W1siZiIsIjI3Njc0L3Byb2R1Y3RzLzYxNzQwOTc0LzE3NjI0MTAxMDVfNGMwMjA0ZGE2MzI5MzI3ZTA2ZmYucG5nIl0sWyJwIiwidGh1bWIiLCI0ODB4NDgwIl1d.png?sha=57bf19743a9c3d5b",
    "buyUrl": "https://www.yk01.com.tw/products/schtb334gtk",
    "buyLabel": "雅光電器",
    "installation": {
      "status": "not_stated",
      "note": "雅光 exact-model 現售頁未把壁掛施工或線材配置列為售價內服務；桌上擺放可自行接線，壁掛支架、牆體承重與施工費需另詢。"
    },
    "specs": [
      "3.1.2 聲道、總輸出 440W、無線重低音",
      "Dolby Atmos、DTS:X、Bluetooth 5.3、HDMI eARC/ARC",
      "尺寸：主機 寬 92 x 深 9 x 高 6 cm；重低音 寬 21.4 x 深 30.4 x 高 29.4 cm",
      "重量：主機 2.9 kg；重低音 5.33 kg",
      "主機／重低音皆 AC 110V / 60Hz；耗電約 18W／19W"
    ],
    "description": "Panasonic SC-HTB334GTK 以 3.1.2 聲道、無線重低音與 Atmos／DTS:X，補入日系中階客廳劇院選擇。",
    "pros": [
      "主機 6cm 高，較不易遮擋電視",
      "Atmos、DTS:X、eARC 與無線重低音規格完整",
      "官方目錄明列各元件尺寸與淨重"
    ],
    "cons": [
      "沒有實體後環繞，包圍感仰賴反射與房間條件",
      "壁掛施工與額外線材未列入通路現價",
      "公開長期使用評價仍有限"
    ],
    "bestFor": "想在不配置後環繞喇叭下取得 Atmos、清楚對白與較完整低頻的中小型客廳。",
    "recommendation": "Panasonic 日系 Soundbar 補強：規格和尺寸證據完整；天花高度、反射面與壁掛條件仍會影響上射聲道效果。",
    "score": 88,
    "voltage": "AC 110V / 60Hz（主機與重低音）",
    "warranty": "台灣公司貨 1 年保固；依 Panasonic 保證書",
    "tags": [
      "3.1.2聲道",
      "Dolby Atmos",
      "DTS:X",
      "無線重低音",
      "eARC"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 15900,
      "currency": "TWD",
      "converted": 15900,
      "sourceUrl": "https://www.mobile01.com/topicdetail.php?f=348&t=7125293",
      "sourceTitle": "Mobile01：Panasonic SC-HTB334GTK 3.1.2 聲道 soundbar 評測",
      "evidenceSnippet": "2025-05-27 的 exact-model 評測明載「新台幣15,900元售價」。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-08-14",
      "note": "採可信媒體同型號、具日期的公開售價紀錄作價格歷史；不是會員個人券、信用卡回饋、點數、二手或展示品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic SC-HTB334GTK\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20SC-HTB334GTK%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic SC-HTB334GTK\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20SC-HTB334GTK%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic SC-HTB334GTK\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20SC-HTB334GTK%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic SC-HTB334GTK\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20SC-HTB334GTK%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic SC-HTB334GTK\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20SC-HTB334GTK%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-sennheiser-ambeo-mini",
    "category": "soundbar",
    "rank": 29,
    "topPick": false,
    "budget": "premium",
    "channel": "tw",
    "brand": "Sennheiser",
    "model": "AMBEO Soundbar Mini",
    "name": "AMBEO Soundbar Mini 7.1.4 虛擬聲道 Dolby Atmos 聲霸",
    "price": {
      "currency": "TWD",
      "amount": 19900,
      "converted": 19900,
      "confidence": "Sennheiser 台灣官方商城於 2026-08-20 的 exact-model 可購公開售價 NT$19,900",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "not_stated",
      "note": "台灣官方商城價格為主機商品價，未標示含到府或壁掛安裝；桌上擺放可自行連接 HDMI eARC，壁掛配件與施工需另行確認。"
    },
    "image": "https://tw.sennheiser-hearing.com/cdn/shop/files/SBMiniwithicon_1810a5e8-dd2e-4343-af92-ed6036565d5e.png?v=1757563435",
    "buyUrl": "https://tw.sennheiser-hearing.com/zh-tw/products/ambeo-soundbar-mini",
    "buyLabel": "Sennheiser 台灣官方商城 exact-model 新品",
    "specs": [
      "虛擬 7.1.4 聲道；Dolby Atmos、DTS:X、MPEG-H、360 Reality Audio",
      "6 組 Class-D 擴大模組，總輸出 250W RMS",
      "4 組全音域單體與 2 組 4 吋低音單體",
      "HDMI eARC；Wi-Fi、Bluetooth、AirPlay 2、Chromecast built-in、Spotify Connect、TIDAL Connect",
      "尺寸：不含腳墊 寬 70 x 深 10.1 x 高 6.7 cm；含腳墊 寬 70 x 深 10.1 x 高 6.9 cm",
      "重量：主機 3.3 kg",
      "可加購最多 4 顆 AMBEO Sub，原價未含重低音或後環繞"
    ],
    "description": "70 公分短機身把 Sennheiser 的 AMBEO 空間校正與虛擬 7.1.4 帶進小型客廳，補上重視單機音質與小空間擺位的知名音響品牌。",
    "pros": [
      "短機身仍支援 Dolby Atmos、DTS:X 與自動空間校正",
      "AirPlay 2、Chromecast built-in 與主流串流協定完整",
      "台灣官方商城直接現售，規格、電力與售後來源一致"
    ],
    "cons": [
      "原價不含獨立重低音與實體後環繞，低頻量感及包圍感仍受單機限制",
      "少數 exact-model 原始討論提到 HDMI eARC 喚醒或輸出異常，但同症狀未達 6 人且未跨 2 站門檻；建議在退換期測試電視連動",
      "官方商城未標示含壁掛安裝"
    ],
    "bestFor": "電視櫃寬度有限、重視人聲與空間校正，並希望以單機先建立 Atmos 系統的小至中型客廳。",
    "recommendation": "小空間音質推薦：不是靠超長機身或多件套取勝，而是以 AMBEO 處理、完整串流與可後加重低音提供不同擴充路線。",
    "releaseDate": "2023-09-01",
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
      "note": "已查台灣官方商城、PChome exact-model 公司貨頁與台灣比價入口；目前 NT$19,900 為可購現價，未找到帶日期、可公開重現且排除會員個人化折扣的可信新品史低，故不把現價冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sennheiser AMBEO Soundbar Mini\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sennheiser%20AMBEO%20Soundbar%20Mini%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sennheiser AMBEO Soundbar Mini\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sennheiser%20AMBEO%20Soundbar%20Mini%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Sennheiser AMBEO Soundbar Mini\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Sennheiser%20AMBEO%20Soundbar%20Mini%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Sennheiser AMBEO Soundbar Mini\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Sennheiser%20AMBEO%20Soundbar%20Mini%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Sennheiser AMBEO Soundbar Mini\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Sennheiser%20AMBEO%20Soundbar%20Mini%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 90,
    "voltage": "AC 100–240V／50–60Hz；台灣官方商城版本可直接使用台灣 110V／60Hz",
    "warranty": "Sennheiser 台灣官方商城公司貨；消費性耳機／聲霸依台灣官方保固政策為 24 個月",
    "tags": [
      "7.1.4虛擬聲道",
      "Dolby Atmos",
      "DTS:X",
      "HDMI eARC",
      "AirPlay 2",
      "Chromecast"
    ]
  },
  {
    "id": "soundbar-klipsch-flexus-core-200",
    "category": "soundbar",
    "rank": 30,
    "topPick": false,
    "budget": "mid",
    "channel": "tw",
    "brand": "Klipsch",
    "model": "Flexus Core 200",
    "name": "Flexus Core 200 3.1.2 聲道 Dolby Atmos 聲霸",
    "price": {
      "currency": "TWD",
      "amount": 14399,
      "converted": 14399,
      "confidence": "Costco 好市多台灣於 2026-08-29 的 exact-model 可購公開售價 NT$14,399",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "not_stated",
      "note": "Costco 商品價只含聲霸主機；原廠規格表明列隨附 L 型壁掛支架與安裝五金，但到府與壁掛施工未包含，Flexus 重低音與後環繞需另購。"
    },
    "image": "https://klipsch.imgix.net/product-images/Klipsch-Flexus-CORE-200-Hero_2000x2000.png?crop=focalpoint&domain=klipsch.imgix.net&fit=crop&fm=webp&fp-x=0.5&fp-y=0.5&h=1000&ixlib=php-3.3.1&q=90&w=1000",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/TV-Home-Entertainment/Soundbars-Home-Theater/Klipsch-Flexus-312-Channel-Dolby-Atmos-SoundBar-Core-200/p/148021",
    "buyLabel": "Costco 好市多台灣 exact-model 新品",
    "specs": [
      "3.1.2 聲道；Dolby Atmos；Klipsch 號角中置高音與 2 組天空聲道單體",
      "185W RMS；頻率響應 43Hz–20kHz；內建 2 組 4 吋低音單體",
      "HDMI eARC、光纖、USB-C、Bluetooth、RCA Sub Out；沒有額外 HDMI 輸入",
      "尺寸：主機 寬 111.8 x 深 12.6 x 高 7.8 cm",
      "重量：主機 8.5 kg",
      "可加購 Flexus SUB 100／200 與 SURR 100／200；目前價格不含重低音或後環繞"
    ],
    "description": "Klipsch 與 Onkyo 合作的模組化 3.1.2 聲道主機，以實體中置、天空聲道和內建雙低音補上品牌缺口，也能日後擴充 Flexus 重低音與後環繞。",
    "pros": [
      "實體中置與號角高音有利於電影對白清晰度",
      "主機內建雙 4 吋低音，未加購重低音也能先使用",
      "Flexus 同系列重低音與後環繞可分階段擴充"
    ],
    "cons": [
      "沒有額外 HDMI 輸入，訊源需接電視再由 eARC 回傳",
      "Costco 現價不含重低音與後環繞，完整環繞系統總價會提高",
      "有線 RCA 重低音爆音候選在 Reddit 可辨識多位 exact-model 使用者，但未跨第二個原始網站，未達集中災情門檻；建議在退換期測試"
    ],
    "bestFor": "中型客廳、重視電影對白與 Atmos 高度感，並希望先買主機、日後再加重低音或後環繞的使用者。",
    "recommendation": "Klipsch 模組化推薦：Core 200 是三款中價格、實體天空聲道與擴充性最均衡的起點。",
    "releaseDate": "2024-04-08",
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
      "checkedAt": "2026-08-29",
      "note": "已查 Costco、PChome 與台灣 exact-model 比價入口；目前 NT$14,399 為可購現價，未找到帶日期、可公開重現且排除會員個人化優惠的可信新品史低，故不把現價冒充史低。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-08-31",
      "summary": "多位 Flexus Core 200 使用者回報有線重低音輸出出現間歇爆音或敲擊聲；部分換機後改善，也有換機後復發的回報。",
      "issues": [
        {
          "title": "有線重低音輸出間歇爆音／敲擊聲",
          "detail": "2026-08-31 逐人覆核 Reddit 5 位與 Best Buy 2 位獨立使用者，共 7 人回報 Core 200 有線重低音輸出異常。有人更換線材或不同重低音仍重現；部分保固換機後改善，另有復發案例。這是同型號症狀回報，不能據此推定故障率、所有批次都受影響或已確定內部故障零件。購前確認退換貨及保固，若要外接有線重低音，需用實際訊源長時間測試。",
          "reportCount": 7,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Clicks and pops come from Flexus Core 200 after connecting rear satellites via wireless",
              "url": "https://www.reddit.com/r/Klipsch/comments/1hx317y/clicks_and_pops_come_from_flexus_core_200_after/"
            },
            {
              "platform": "Best Buy",
              "title": "Klipsch Flexus CORE 200 3.1.2 Soundbar customer reviews",
              "url": "https://www.bestbuy.com/product/klipsch-flexus-core-200-3-1-2-soundbar-black/JX44FCZPQ7/sku/6580304/reviews"
            }
          ]
        }
      ]
    },
    "score": 90,
    "voltage": "AC 100–240V／50–60Hz；Costco 台灣現售規格可直接使用台灣 110V／60Hz",
    "warranty": "Costco 台灣頁標示 1 年保固；代理商與送修流程以賣場資訊為準",
    "tags": [
      "3.1.2聲道",
      "Dolby Atmos",
      "HDMI eARC",
      "模組化擴充",
      "內建雙低音"
    ]
  },
  {
    "id": "soundbar-klipsch-flexus-core-100",
    "category": "soundbar",
    "rank": 31,
    "topPick": false,
    "budget": "value",
    "channel": "tw",
    "brand": "Klipsch",
    "model": "Flexus Core 100",
    "name": "Flexus Core 100 2.1 聲道虛擬 Dolby Atmos 聲霸",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "2026-08-31 人工查核：Flexus Core 100 主商品 NT$9,999，可直接購買／放入購物車；舊 94 折活動價已不顯示，特惠商品不適用折價券。",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "not_stated",
      "note": "momo 商品價只含聲霸主機；原廠規格表明列隨附 L 型壁掛支架與安裝五金，但到府與壁掛施工未包含，Flexus 重低音與後環繞需另購。"
    },
    "image": "https://klipsch.imgix.net/product-images/Klipsch-Flexus-CORE-100-Hero_2000x2000.png?crop=focalpoint&domain=klipsch.imgix.net&fit=crop&fm=webp&fp-x=0.5&fp-y=0.5&h=1000&ixlib=php-3.3.1&q=90&w=1000",
    "buyUrl": "https://www.momoshop.com.tw/product/12737009",
    "buyLabel": "momo 購物網 exact-model 新品",
    "specs": [
      "2.1 聲道；Virtualized Dolby Atmos",
      "100W RMS；頻率響應 45Hz–20kHz；內建 2 組 4 吋低音單體",
      "HDMI eARC、光纖、USB-C、Bluetooth、RCA Sub Out",
      "尺寸：主機 寬 71.1 x 深 12.7 x 高 7.6 cm",
      "重量：主機 4.54 kg",
      "可加購 Flexus SUB 100／200 與 SURR 100／200；目前價格不含重低音或後環繞"
    ],
    "description": "71.1 公分短機身的 Flexus 入門款，以內建雙 4 吋低音和虛擬 Atmos 提供簡潔起步方案，仍保留同系列重低音與後環繞擴充路線。",
    "pros": [
      "短機身適合空間有限的電視櫃",
      "內建雙 4 吋低音，萬元價位即可先建立完整單機系統",
      "保留 HDMI eARC、藍牙與 Flexus 配件擴充能力"
    ],
    "cons": [
      "虛擬 Atmos 且沒有上射單體，高度感較依賴數位處理與空間反射",
      "沒有獨立中置聲道，對白定位不如 Core 200／300",
      "跨 Reddit 與 Mobile01 僅見少數主觀音色或複雜內容細節評論，未達集中災情門檻"
    ],
    "bestFor": "小型客廳、臥室或電視櫃寬度有限，想以較低預算進入 Klipsch Flexus 系統的使用者。",
    "recommendation": "Klipsch 入門推薦：萬元現價換得短機身、內建雙低音與可擴充架構，但不是實體天空聲道方案。",
    "releaseDate": "2024-04-08",
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
      "checkedAt": "2026-08-29",
      "note": "已查 momo、Yahoo 自營、Costco、PChome 與台灣 exact-model 比價入口；目前公開自動折扣 NT$9,399 為可購現價，未找到帶日期、可公開重現且排除會員個人化優惠的可信新品史低，故不把現價冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-31",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Flexus Core 100\" problem issue",
          "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22Flexus%20Core%20100%22%20problem%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Flexus Core 100\" 問題 故障",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Flexus%20Core%20100%22%20%E5%95%8F%E9%A1%8C%20%E6%95%85%E9%9A%9C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 86,
    "voltage": "AC 100–240V／50–60Hz；Costco 台灣現售規格可直接使用台灣 110V／60Hz",
    "warranty": "momo 台灣頁標示 1 年保固",
    "tags": [
      "2.1聲道",
      "虛擬Dolby Atmos",
      "HDMI eARC",
      "短機身",
      "模組化擴充"
    ]
  },
  {
    "id": "soundbar-klipsch-flexus-core-300",
    "category": "soundbar",
    "rank": 32,
    "topPick": false,
    "budget": "premium",
    "channel": "tw",
    "brand": "Klipsch",
    "model": "Flexus Core 300",
    "name": "Flexus Core 300 5.1.2 聲道 Dirac Live Dolby Atmos 聲霸",
    "price": {
      "currency": "TWD",
      "amount": 42048,
      "converted": 42048,
      "confidence": "momo 購物網於 2026-08-29 的 exact-model 釪環公司貨頁顯示公開滿 1 件 96 折價 NT$42,048，並標示特惠商品不適用折價券",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "not_stated",
      "note": "momo 商品價只含聲霸主機，未標示含到府或壁掛安裝；原廠 Core 300 壁掛支架、Flexus 重低音、後環繞與施工均需另購或另行確認。"
    },
    "image": "https://klipsch.imgix.net/product-images/Klipsch-Flexus-CORE_300-Hero_2000x2000.png?crop=focalpoint&domain=klipsch.imgix.net&fit=crop&fm=webp&fp-x=0.5&fp-y=0.5&h=1000&ixlib=php-3.3.1&q=90&w=1000",
    "buyUrl": "https://www.momoshop.com.tw/product/14043582",
    "buyLabel": "momo 購物網釪環公司貨 exact-model 新品",
    "specs": [
      "5.1.2 聲道；Dolby Atmos；Dirac Live 房間校正；共 13 組單體",
      "4 組內建 4 吋低音單體；頻率響應 43Hz–20kHz",
      "HDMI 2.1 輸入直通與 HDMI eARC；Wi-Fi、AirPlay、Google Cast、Spotify Connect、TIDAL Connect、Bluetooth、光纖、USB-C、RCA Sub Out",
      "尺寸：主機 寬 137.2 x 深 12.6 x 高 7.8 cm",
      "重量：主機 8.5 kg",
      "可加購 Flexus SUB 100／200 與 SURR 100／200；目前價格不含重低音或後環繞"
    ],
    "description": "Flexus 旗艦主機以 5.1.2 聲道、側向單體、四組內建低音與 Dirac Live 校正提高單機包圍感，並加入 HDMI 輸入與網路串流。",
    "pros": [
      "Dirac Live 可依房間量測修正頻率與時間響應",
      "13 組單體、側向聲道與四組內建低音提供三款中最完整的單機規格",
      "額外 HDMI 輸入與 Wi-Fi 串流比 Core 100／200 完整"
    ],
    "cons": [
      "137.2 公分機身需先確認電視櫃寬度，且可能遮擋低腳座電視",
      "NT$42,048 現價仍不含實體後環繞與獨立重低音",
      "目前只在 Reddit 找到少數 exact-model CEC／連線候選，未跨第二個原始網站，未達集中災情門檻；建議在退換期測試 HDMI 連動"
    ],
    "bestFor": "較大客廳、願意為房間校正、完整單機聲場與網路串流付費，並可能日後擴充實體後環繞的使用者。",
    "recommendation": "Klipsch 旗艦推薦：Core 300 適合重視 Dirac 與單機聲場者；若只需要對白與 Atmos，Core 200 的價格更容易平衡。",
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
      "checkedAt": "2026-08-29",
      "note": "已查 momo、Yahoo 自營、PChome、台灣 exact-model 比價入口與套裝頁；目前公開自動折扣 NT$42,048 為可購現價，未找到帶日期、可公開重現且排除會員個人化優惠與套裝差異的可信新品史低，故不把現價冒充史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-31",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Flexus Core 300\" problem issue",
          "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22Flexus%20Core%20300%22%20problem%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Flexus Core 300\" 問題 故障",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Flexus%20Core%20300%22%20%E5%95%8F%E9%A1%8C%20%E6%95%85%E9%9A%9C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 92,
    "voltage": "AC 100–240V／50–60Hz；台灣釪環公司貨可直接使用台灣 110V／60Hz",
    "warranty": "釪環台灣公司貨 1 年保固",
    "tags": [
      "5.1.2聲道",
      "Dolby Atmos",
      "Dirac Live",
      "HDMI 2.1輸入",
      "AirPlay",
      "Google Cast"
    ]
  },
  {
    "id": "soundbar-asus-rog-gjallar",
    "category": "soundbar",
    "rank": 33,
    "topPick": false,
    "budget": "mid",
    "channel": "tw",
    "brand": "ASUS",
    "model": "ROG Gjallar",
    "name": "ROG Gjallar 2.1.2 聲道電競 Soundbar 與無線重低音",
    "price": {
      "currency": "TWD",
      "amount": 17300,
      "converted": 17300,
      "confidence": "2026-08-31 人工查核：PChome DCAIAM-A900K9HQX 新品網路價NT$17,900，08/24–08/31公開滿額折扣後NT$17,300；實際商品頁『下單再折』對話框顯示此金額且加入購物車按鈕可用。API Low=17300、Qty=10；未計會員券、信用卡或P幣。",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "not_stated",
      "note": "商品包含Soundbar主機、5GHz無線重低音與控制中樞；原廠列隨附可拆式腳墊、變壓器和兩條AC線。需自行擺放接線；到府、壁掛施工未標示包含。"
    },
    "image": "https://img.pchome.com.tw/cs/items/DCAIAMA900K9HQX/000001_1785489874.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAIAM-A900K9HQX",
    "buyLabel": "PChome 24h exact-model 台灣新品",
    "specs": [
      "2.1.2 聲道 Dolby Atmos；左右聲道、上射式天空聲道與獨立無線重低音；不含實體後環繞",
      "4 x 50mm 全音域、2 x 27mm 高音；6.5吋（165mm）65W重低音，以5GHz無線連接",
      "HDMI IN、HDMI OUT eARC、USB-C、光纖、AUX、Bluetooth 5.3；最高4K@120Hz影像直通",
      "LCD控制中樞、AEC麥克風、Gear Link EQ與RGB設定；麥克風只支援USB或Bluetooth模式",
      "PC Dolby Atmos需HDMI及相容軟體/內容；雙USB-A集線器需主機USB-C連接電腦才可使用",
      "尺寸：主機 寬 60.7 x 深 9.2 x 高 8.2 cm",
      "其他組件：重低音、控制中樞的寬深高順序查不到",
      "重量：主機 2.4 kg；重低音 5.7 kg；控制中樞 0.191 kg",
      "供電：主機使用隨附變壓器接DC輸入、重低音獨立AC供電；需預留兩個插座，額定AC電壓與頻率未標示"
    ],
    "description": "以PC桌面為主的60.7公分Soundbar，將實體上射聲道、無線重低音、LCD控制中樞與USB集線器合為一套；適合在PC與遊戲主機間切換，但上市初期有跨站重低音斷線回報。",
    "pros": [
      "完整套裝含5GHz無線重低音，不必另購低音箱",
      "短機身仍有HDMI 2.1輸入/eARC及4K120直通，方便PC與遊戲主機共用",
      "可在桌邊切換訊源、調EQ，USB/藍牙模式可用AEC麥克風"
    ],
    "cons": [
      "無線重低音間歇斷線已達6位獨立使用者、2個原始網站門檻；官方更新工具已提供，不能推定各批次均已解決",
      "2.1.2不含獨立中置與後環繞，不能取代實體包圍系統",
      "內建麥克風不支援HDMI模式，PC Atmos與語音需求須先確認接法；另有少數HDMI/CEC相容性回報"
    ],
    "bestFor": "桌面空間有限、希望PC與遊戲主機共用聲霸，且願意先更新韌體並在退換貨期實測的玩家。",
    "recommendation": "桌面電競比較候選，非Top Pick：接口與完整2.1.2套裝有特色，但先確認正式韌體、退換貨及電源規格，再以實際訊源測試重低音與HDMI穩定性；追求低維護成本或實體後環繞者宜優先比較其他成熟方案。",
    "releaseDate": "2026-07",
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
      "checkedAt": "2026-08-31",
      "note": "已查ROG Gjallar官方台灣公告、PChome兩個exact-model新品SKU與飛比/BigGo價格搜尋；現價NT$17,300及其他頁的NT$17,900均未提供可重現的歷史價格曲線。飛比及BigGo原搜尋頁讀取失敗，搜尋摘要僅作發現線索；不把現價、會員券、卡片回饋或二手價格冒充史低。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-08-31",
      "summary": "多位 ROG Gjallar 使用者回報無線重低音會間歇斷線、低頻消失後重新連線；官方已提供更新工具，仍須確認個別設備改善。",
      "issues": [
        {
          "title": "無線重低音間歇斷線與重連",
          "detail": "以 Mobile01 與 ASUS ZenTalk 6 位逐人覆核的獨立使用者為保守樣本。官方已提供 Firmware Update Tool v1.00.15，2026-08-20 FAQ 亦要求更新韌體；部分使用者表示改善，但不能推定所有批次、訊源與環境均已解決。購買前確認更新與退換貨條件，到貨後測試低音連線穩定性。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "Mobile01",
              "title": "【開箱】ROG Gjallar電競soundbar",
              "url": "https://www.mobile01.com/topicdetail.php?f=348&t=7285601"
            },
            {
              "platform": "Mobile01",
              "title": "【開箱】ROG Gjallar電競soundbar（第2頁）",
              "url": "https://www.mobile01.com/topicdetail.php?f=348&p=2&t=7285601"
            },
            {
              "platform": "ASUS ZenTalk",
              "title": "Rog gjallar",
              "url": "https://zentalk.asus.com/t5/%E9%9F%B3%E6%95%88%E5%8D%A1-dac/rog-gjallar/td-p/510259"
            },
            {
              "platform": "ASUS ZenTalk",
              "title": "Rog gjallar（第2頁）",
              "url": "https://zentalk.asus.com/t5/%E9%9F%B3%E6%95%88%E5%8D%A1-dac/rog-gjallar/m-p/510334/highlight/true"
            }
          ]
        }
      ],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ROG Gjallar\" (problem OR issue OR defect OR failure)",
          "targetHost": "reddit.com",
          "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22ROG%20Gjallar%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"ROG Gjallar\" (災情 OR 問題 OR 故障 OR 負評)",
          "targetHost": "mobile01.com",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22ROG%20Gjallar%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)"
        }
      ]
    },
    "score": 74,
    "voltage": "台灣公司貨；原廠Q28387手冊確認主機由隨附變壓器供電、重低音獨立AC供電，共兩條AC電源線。官方台灣規格頁、快速手冊與選定通路未列額定AC電壓/頻率，請依隨附電源銘牌確認，勿以USB供電或通用100–240V推定。",
    "warranty": "選定PChome SKU明列2年保固、雙向到府收送；其他通路保固標示不同，下單前確認適用條件與台灣維修。",
    "tags": [
      "2.1.2聲道",
      "Dolby Atmos",
      "HDMI 2.1",
      "4K120直通",
      "PC桌面",
      "無線重低音",
      "韌體風險"
    ]
  },
  {
    "id": "soundbar-sony-ht-a8",
    "category": "soundbar",
    "rank": 34,
    "topPick": false,
    "budget": "premium",
    "channel": "tw",
    "brand": "Sony",
    "model": "HT-A8",
    "name": "BRAVIA Theatre Trio 三件式旗艦環繞家庭劇院",
    "price": {
      "currency": "TWD",
      "amount": 68900,
      "converted": 68900,
      "confidence": "Sony Store 台灣 2026-09-02 exact-model 官方公開現售價；購買須洽專屬展售店",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "not_stated",
      "note": "Sony Store 台灣未標示到府安裝；三件揚聲器各自供電。桌面設定依 BRAVIA Connect 指引；壁掛應由 Sony 經銷商或合格承包商施工，壁材適用螺絲未隨附，中央揚聲器至少兩人安裝。"
    },
    "image": "https://store.sony.com.tw/resource/product_files/HT-A8/HT-A8_pi.jpg",
    "buyUrl": "https://store.sony.com.tw/product/HT-A8",
    "buyLabel": "Sony Store 台灣（洽專屬展售店）",
    "specs": [
      "聲道／單體：3.0.2 聲道、9 單體；9 聲道數位 S-Master 擴大",
      "輸出：總功率 405W（左／中／右各 135W）",
      "空間音效：進階 360 Spatial Sound Mapping（最多 24 個幻影喇叭）、Sound Field Optimization、USB-C 校正麥克風",
      "音訊格式：Dolby Atmos、Dolby TrueHD、DTS:X、DTS-HD Master Audio、IMAX Enhanced、LPCM 7.1",
      "連線：HDMI 輸入 1／輸出 1（eARC／ARC）、8K HDR、4K120、Dolby Vision、VRR、ALLM、SBTM",
      "無線／串流：Wi-Fi a/b/g/n/ac/ax、Bluetooth 6.0（SBC／AAC／LDAC）、AirPlay、Spotify Connect",
      "擴充：支援選購後環繞與兩顆相同型號重低音；BRAVIA Connect、相容 BRAVIA 的 Voice Zoom 3",
      "耗電：中置 31W；左右前置各 26W",
      "尺寸：中置 寬 58.9 x 深 16.5 x 高 6.4 cm；左右前置各 寬 16 x 深 16.5 x 高 33.7 cm",
      "重量：中置 3.2 kg；左右前置各 3.6 kg"
    ],
    "description": "Sony 2026 年台灣新款三件式前方聲場系統，以獨立中央、左右前置和 360 空間音場擴大大尺寸電視的前方定位；原套裝不含重低音與後環繞。",
    "pros": [
      "三件式前方實體分離，對大尺寸電視的聲場與定位比單條聲霸更有彈性",
      "9 單體、405W、Atmos／DTS:X／IMAX Enhanced 與完整 HDMI 2.1 passthrough",
      "可後加後環繞及雙重低音，且台灣官方電力、尺寸與保固證據完整"
    ],
    "cons": [
      "NT$68,900 且原套裝只有 3.0.2 聲道；完整後方環繞與低頻需另購",
      "三件主機各需 AC 插座，壁掛配線與施工成本較高",
      "早期使用者有零星校正、App／韌體、對白調整與無線連線抱怨，尚未達集中災情門檻"
    ],
    "bestFor": "85 吋以上大尺寸電視、重視寬廣前方聲場與後續模組擴充，且能預留三組電源與高預算的人。",
    "recommendation": "2026 Sony 新世代比較候選：三件式前場定位與雙重低音擴充有明顯差異化；不是完整環繞套裝，購買前應把後環繞／重低音、插座與壁掛施工一併估價。",
    "score": 91,
    "voltage": "台灣型號三件揚聲器皆 AC 120V／50–60Hz（Sony 官方台灣參考指南）",
    "warranty": "Sony Store 台灣註冊保固 12 個月，無延長保固",
    "tags": [
      "Sony",
      "2026新款",
      "三件式",
      "Atmos",
      "360空間音場",
      "HDMI 2.1",
      "可擴充"
    ],
    "releaseDate": "2026-06-05",
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
      "checkedAt": "2026-09-02",
      "note": "已查 Sony Store、FindPrice、LBJ 與 Yahoo exact-model 頁；上市未滿三個月，僅取得目前 NT$68,900 與混雜套組／他型號候選，沒有可公開重現且具日期的可信新品價格歷史，不以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-09-02",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony HT-A8\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sony%20HT-A8%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony HT-A8\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sony%20HT-A8%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        }
      ]
    }
  },
  {
    "id": "soundbar-sony-ht-s60",
    "category": "soundbar",
    "rank": 35,
    "topPick": false,
    "budget": "balanced",
    "channel": "tw",
    "brand": "Sony",
    "model": "HT-S60",
    "name": "BRAVIA Theatre System 6 實體 5.1 聲道家庭劇院",
    "price": {
      "currency": "TWD",
      "amount": 18900,
      "converted": 18900,
      "confidence": "Sony Store 台灣 2026-09-02 exact-model 官方頁可加入購物車",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "not_stated",
      "note": "Sony Store 台灣未標示到府安裝；聲霸、後環繞與無線擴大機可依官方指引桌放／壁掛，壁掛固定件與施工條件應另向 Sony 經銷商或合格承包商確認。"
    },
    "image": "https://store.sony.com.tw/resource/product_files/HT-S60/HT-S60_pi.jpg",
    "buyUrl": "https://store.sony.com.tw/product/HT-S60",
    "buyLabel": "Sony Store 台灣",
    "specs": [
      "聲道／單體：實體 5.1 聲道、10 單體",
      "輸出：總功率 1000W；有線重低音與無線後環繞擴大機",
      "音訊格式：Dolby Atmos、Dolby TrueHD、DTS:X、DTS-HD、LPCM 7.1",
      "虛擬環繞：S-Force PRO、Vertical Surround Engine、DTS Virtual:X；DSEE、夜間／語音模式",
      "連線：HDMI 輸入 0／輸出 1（eARC／ARC）、光纖、3.5mm 類比輸入、Bluetooth 5.3（SBC／AAC）",
      "操作：BRAVIA Connect；相容 BRAVIA 的 Voice Zoom 3／快速設定",
      "耗電：重低音 60W；無線擴大機 30W",
      "尺寸：聲霸 寬 90.7 x 深 9 x 高 6.4 cm；重低音 寬 27.5 x 深 38.8 x 高 38.8 cm；後環繞各 寬 10.6 x 深 9.8 x 高 21.6 cm；無線擴大機 寬 17.5 x 深 17.5 x 高 5.2 cm",
      "重量：聲霸 2.6 kg；重低音 11.6 kg；後環繞各 0.89 kg；無線擴大機 0.76 kg"
    ],
    "description": "Sony 台灣現售的多件式實體 5.1 聲道套裝，包含聲霸、重低音、兩顆後環繞與無線擴大機；以一次補齊實體後聲道、Atmos／DTS:X 和 1000W 輸出為主要價值。",
    "pros": [
      "NT$18,900 已包含聲霸、重低音及兩顆實體後環繞，套裝完整度高",
      "1000W、Dolby Atmos／DTS:X、eARC 與 BRAVIA Connect 規格完整",
      "Sony 台灣官方現售、12 個月保固，尺寸與各組件重量都有 exact-model 官方證據"
    ],
    "cons": [
      "沒有 HDMI 輸入，外接播放機須經電視 eARC 或改用光纖／類比",
      "天空音效為虛擬處理而非實體上射單體",
      "後環繞需接無線擴大機及安排配線；零星尖鳴、失真或輸出不均回報未達集中災情門檻"
    ],
    "bestFor": "希望兩萬元內一次補齊實體 5.1 後環繞與重低音、可接受後方配線，且電視具 eARC 的家庭。",
    "recommendation": "Sony 實體環繞套裝推薦：完整 5.1 組件與價格有競爭力；購買前確認電視 eARC／CEC 相容、後方電源與無線擴大機擺位。",
    "score": 88,
    "voltage": "AC 120V／60Hz（Sony 官方 exact-model 參考指南；Sony 台灣商品頁未另列電壓）",
    "warranty": "Sony Store 台灣註冊保固 12 個月，無延長保固",
    "tags": [
      "Sony",
      "實體5.1",
      "Atmos",
      "後環繞",
      "重低音",
      "eARC",
      "台灣公司貨"
    ],
    "releaseDate": "2025-06-05",
    "historicalLow": {
      "status": "found",
      "amount": 15660,
      "currency": "TWD",
      "converted": 15660,
      "sourceUrl": "https://m.momoshop.com.tw/goods.momo?i_code=14080920",
      "sourceTitle": "momo：Sony BRAVIA Theatre System 6 HT-S60 公司貨保固12個月",
      "evidenceSnippet": "momo exact-model 商品頁的 2026 年 5 月公開快照列滿 1 件享 9 折、限時折後價 NT$15,660、促銷價 NT$17,400、市售價 NT$19,900；特惠商品不適用折價券。",
      "sourceKind": "retailer_promo",
      "confidence": "high",
      "checkedAt": "2026-09-02",
      "note": "採 exact-model 台灣公司貨公開滿件折；FindPrice exact 商品群與 Yahoo 購物中心歷史頁亦顯示 NT$15,660。排除會員個人券、信用卡回饋、點數、二手、福利、展示與拆封品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-09-02",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony HT-S60\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sony%20HT-S60%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony HT-S60\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sony%20HT-S60%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        }
      ]
    }
  }
]);
})();
