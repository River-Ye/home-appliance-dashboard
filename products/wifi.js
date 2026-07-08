(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("wifi", [
  {
    "id": "wifi-asus-zenwifi-bd5-2pack",
    "category": "wifi",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "ASUS",
    "model": "ZenWiFi BD5 2入",
    "name": "BE5000 雙頻 Wi-Fi 7 AiMesh 網狀路由器二入組",
    "price": {
      "currency": "TWD",
      "amount": 5999,
      "converted": 5999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAF01A900I3ETA/000001_1759801067.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAF01-A900I3ETA",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE5000 雙頻",
      "Mesh：支援 AiMesh，二入組可直接全屋串接",
      "Gigabit 有線埠"
    ],
    "description": "ASUS ZenWiFi BD5 2入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想買 2 台起步串接、重視台灣售後與設定穩定的一般家庭。",
    "recommendation": "綜合推薦：二入價格接近單顆中高階路由器，AiMesh 擴充彈性與 ASUS 台灣售後都成熟，最符合 2-3 台串接需求。",
    "score": 94,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "綜合推薦",
      "Mesh",
      "二入組",
      "ASUS"
    ],
    "releaseDate": "2025-01"
  },
  {
    "id": "wifi-tplink-deco-be25-2pack",
    "category": "wifi",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Deco BE25 2入",
    "name": "BE5000 雙頻 Wi-Fi 7 真 Mesh 網狀路由器二入組",
    "price": {
      "currency": "TWD",
      "amount": 5699,
      "converted": 5699,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC1TA900I6ACS/000001_1771826403.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBC1T-A900I6ACS",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE5000 雙頻",
      "Mesh：支援 Deco Mesh，二入組",
      "2.5G/Gigabit 依商品頁"
    ],
    "description": "TP-Link Deco BE25 2入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想用 Deco App 快速完成全屋 Mesh、預算希望壓在中階的人。",
    "recommendation": "Mesh CP 推薦：Deco 系列設定門檻低，二入組價格漂亮，適合公寓或中小透天先買 2 台測覆蓋。",
    "score": 92,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "二入組",
      "CP 值",
      "TP-Link"
    ],
    "releaseDate": "2024-08-30"
  },
  {
    "id": "wifi-dlink-m36-3pack",
    "category": "wifi",
    "rank": 3,
    "budget": "mid",
    "channel": "tw",
    "brand": "D-Link",
    "model": "M36 3入",
    "name": "BE3600 Wi-Fi 7 無線 Mesh 路由器三入組",
    "price": {
      "currency": "TWD",
      "amount": 7499,
      "converted": 7499,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ6A900JL8Q9/000001_1766717579.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ6-A900JL8Q9",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：支援 AQUILA PRO AI Mesh，三入組",
      "2.5G + Gigabit"
    ],
    "description": "D-Link M36 3入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "一開始就確定要買 3 台、需要跨樓層或多隔間覆蓋的人。",
    "recommendation": "三入推薦：台灣通路常見，三入組不用再分次加購，適合你提到的 2-3 台串接情境。",
    "score": 90,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "三入組",
      "D-Link",
      "全屋"
    ],
    "releaseDate": "2025-09-26"
  },
  {
    "id": "wifi-asus-rt-be58u-v2",
    "category": "wifi",
    "rank": 4,
    "budget": "mid",
    "channel": "tw",
    "brand": "ASUS",
    "model": "RT-BE58U V2",
    "name": "BE3600 雙頻 Wi-Fi 7 AiMesh 可擴充路由器",
    "price": {
      "currency": "TWD",
      "amount": 3499,
      "converted": 3499,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFLPA900JKWXK/000001_1782952070.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFLP-A900JKWXK",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：支援 AiMesh，可日後加購節點",
      "Gigabit 有線埠"
    ],
    "description": "ASUS RT-BE58U V2 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "小家庭先買單台，之後視訊號再補 ASUS AiMesh 節點。",
    "recommendation": "單台 CP 推薦：價格低、韌體成熟、可 AiMesh 擴充，比不能串接的入門款更有長期彈性。",
    "score": 89,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "AiMesh",
      "單台",
      "CP 值",
      "ASUS"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-tplink-deco-be65-2pack",
    "category": "wifi",
    "rank": 5,
    "budget": "premium",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Deco BE65 2入",
    "name": "BE11000 三頻 2.5G 真 Mesh 路由器二入組",
    "price": {
      "currency": "TWD",
      "amount": 11999,
      "converted": 11999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAN08A900H851Z/000001_1782099268.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAN08-A900H851Z",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE11000 三頻",
      "Mesh：支援 Deco Mesh，二入組",
      "全 2.5G"
    ],
    "description": "TP-Link Deco BE65 2入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "家中網路已到 1G/2G 以上、想要更穩 Mesh 回程的人。",
    "recommendation": "高階 Mesh 推薦：三頻與 2.5G 埠更適合高速寬頻和多節點回程，比入門雙頻 Mesh 更耐用。",
    "score": 88,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "三頻",
      "2.5G",
      "高階"
    ],
    "releaseDate": "2024-05-16"
  },
  {
    "id": "wifi-netgear-orbi-rbe373",
    "category": "wifi",
    "rank": 6,
    "budget": "premium",
    "channel": "tw",
    "brand": "NETGEAR",
    "model": "Orbi RBE373",
    "name": "BE5000 Wi-Fi 7 Mesh 延伸系統路由器+2衛星",
    "price": {
      "currency": "TWD",
      "amount": 9900,
      "converted": 9900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJAA900JG5AK/000001_1763014538.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJA-A900JG5AK",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE5000 雙頻",
      "Mesh：支援 Orbi Mesh，路由器+2衛星",
      "Gigabit 有線埠"
    ],
    "description": "NETGEAR Orbi RBE373 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想一次買 3 顆、偏好 NETGEAR Orbi 全屋系統的人。",
    "recommendation": "Orbi 入門推薦：三件式對大坪數友善，但訂閱功能與後續衛星成本要先評估。",
    "score": 87,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "三件式",
      "NETGEAR",
      "Orbi"
    ],
    "releaseDate": "2025-07-29"
  },
  {
    "id": "wifi-linksys-velop-pro-axe5400",
    "category": "wifi",
    "rank": 7,
    "budget": "value",
    "channel": "tw",
    "brand": "Linksys",
    "model": "Velop Pro AXE5400",
    "name": "Wi-Fi 6E 三頻無線網狀路由器一入",
    "price": {
      "currency": "TWD",
      "amount": 2990,
      "converted": 2990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFL7A900IJMF6/000001_1744352670.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFL7-A900IJMF6",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6E",
      "AXE5400 三頻",
      "Mesh：支援 Velop Mesh，可加購節點",
      "Gigabit 有線埠"
    ],
    "description": "Linksys Velop Pro AXE5400 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想用較低單顆價格進 Wi-Fi 6E Mesh 生態的人。",
    "recommendation": "低價 6E Mesh：有 6GHz 頻段，適合先買一顆試訊號，再逐步補節點。",
    "score": 86,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "Wi-Fi 6E",
      "Linksys",
      "三頻"
    ],
    "releaseDate": "2023-07-16"
  },
  {
    "id": "wifi-synology-wrx560",
    "category": "wifi",
    "rank": 8,
    "budget": "mid",
    "channel": "tw",
    "brand": "Synology",
    "model": "WRX560",
    "name": "AX3000 雙頻 Wi-Fi 6 Mesh 路由器",
    "price": {
      "currency": "TWD",
      "amount": 6899,
      "converted": 6899,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAGCMA900FQ3JZ/000001_1681110575.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAGCM-A900FQ3JZ",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX3000 雙頻",
      "Mesh：支援 Synology Mesh",
      "2.5G + Gigabit"
    ],
    "description": "Synology WRX560 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "重視家長控管、VPN、SRM 管理介面與穩定性的進階家庭。",
    "recommendation": "管理功能推薦：不是最便宜，但 SRM 口碑好，適合想細控網路規則的人。",
    "score": 86,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "管理",
      "Synology",
      "2.5G"
    ],
    "releaseDate": "2022-11-02"
  },
  {
    "id": "wifi-unifi-u7-pro",
    "category": "wifi",
    "budget": "premium",
    "channel": "global",
    "brand": "UniFi",
    "model": "U7 Pro",
    "name": "Wi-Fi 7 6GHz Ceiling AP",
    "price": {
      "currency": "USD",
      "amount": 189,
      "converted": 6072,
      "confidence": "Ubiquiti 官方美國售價"
    },
    "image": "https://cdn.ecomm.ui.com/products/fa8dd4e4-36c8-4c79-a928-22c7bff2ce29/ab5bc8a4-6135-402e-a695-e3ea5e16d3e6.png",
    "buyUrl": "https://store.ui.com/us/en/category/all-wifi/products/u7-pro",
    "buyLabel": "Ubiquiti Store",
    "specs": [
      "Wi-Fi 7",
      "6 spatial streams，支援 6GHz",
      "Mesh：UniFi AP 可做無線 uplink/漫遊，需 UniFi Network 管理",
      "2.5GbE PoE+ uplink"
    ],
    "description": "UniFi U7 Pro 是商用/Prosumer Wi-Fi 7 AP，不是單台家用分享器；適合已準備 UniFi Gateway、PoE Switch 或控制器的環境。",
    "pros": [
      "UniFi 生態系完整，適合 gateway、switch、AP 一起管理",
      "官方美國通路售價清楚，規格與產品線更新快"
    ],
    "cons": [
      "多數 AP 需 PoE 交換器或 PoE Injector，部分配件另購",
      "海外官方價未含國際運費、進口稅與台灣保固"
    ],
    "bestFor": "想用 UniFi 生態佈建 2-3 顆 AP，並重視集中管理、VLAN、漫遊與後續擴充的人。",
    "recommendation": "UniFi 綜合推薦：U7 Pro 價格仍在可接受範圍，已支援 Wi-Fi 7 與 6GHz，是現在切入 UniFi AP 的均衡款。",
    "score": 86,
    "voltage": "PoE+ 供電；海外官方通路，需確認 PoE 交換器/Injector、插頭與台灣保固",
    "warranty": "Ubiquiti 官方美國通路；海外運費、進口稅與台灣保固另計",
    "tags": [
      "UniFi",
      "Ubiquiti",
      "Wi-Fi 7",
      "PoE",
      "商用 AP"
    ],
    "rank": 9,
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-unifi-u6-pro",
    "category": "wifi",
    "budget": "mid",
    "channel": "global",
    "brand": "UniFi",
    "model": "U6 Pro",
    "name": "Wi-Fi 6 6-stream Ceiling AP",
    "price": {
      "currency": "USD",
      "amount": 159,
      "converted": 5108,
      "confidence": "Ubiquiti 官方美國售價"
    },
    "image": "https://cdn.ecomm.ui.com/products/8e88b222-7a55-4cf0-8677-ae9b6347fe84/e16aa122-b5e5-4ffb-9f1a-27ee14d9ab3d.png",
    "buyUrl": "https://store.ui.com/us/en/category/all-wifi/products/u6-pro",
    "buyLabel": "Ubiquiti Store",
    "specs": [
      "Wi-Fi 6",
      "6 spatial streams",
      "Mesh：UniFi AP 可做無線 uplink/漫遊，需 UniFi Network 管理",
      "Gigabit PoE uplink"
    ],
    "description": "UniFi U6 Pro 是成熟的 Wi-Fi 6 商用 AP，適合不急著上 6GHz、但希望穩定佈建 UniFi 多 AP 的環境。",
    "pros": [
      "UniFi 生態系完整，適合 gateway、switch、AP 一起管理",
      "官方美國通路售價清楚，規格與產品線更新快"
    ],
    "cons": [
      "多數 AP 需 PoE 交換器或 PoE Injector，部分配件另購",
      "海外官方價未含國際運費、進口稅與台灣保固"
    ],
    "bestFor": "已經有 PoE 交換器、想用較穩定成熟的 Wi-Fi 6 AP 做多點漫遊的人。",
    "recommendation": "UniFi Wi-Fi 6 推薦：U6 Pro 口碑成熟，價格比 Wi-Fi 7 款更好控制，適合重視穩定勝過追新規格的使用者。",
    "score": 84,
    "voltage": "PoE 供電；海外官方通路，需確認 PoE 交換器/Injector、插頭與台灣保固",
    "warranty": "Ubiquiti 官方美國通路；海外運費、進口稅與台灣保固另計",
    "tags": [
      "UniFi",
      "Ubiquiti",
      "Wi-Fi 6",
      "PoE",
      "商用 AP"
    ],
    "rank": 10,
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-unifi-u7-lite",
    "category": "wifi",
    "budget": "mid",
    "channel": "global",
    "brand": "UniFi",
    "model": "U7 Lite",
    "name": "Compact Wi-Fi 7 AP",
    "price": {
      "currency": "USD",
      "amount": 99,
      "converted": 3181,
      "confidence": "Ubiquiti 官方美國售價"
    },
    "image": "https://cdn.ecomm.ui.com/products/253cc208-4b09-4b2e-9d1a-7aa1e8f93507/49241c96-878f-4e40-8541-c2e89c1c5e6e.png",
    "buyUrl": "https://store.ui.com/us/en/category/all-wifi/products/u7-lite",
    "buyLabel": "Ubiquiti Store",
    "specs": [
      "Wi-Fi 7",
      "4 spatial streams",
      "Mesh：UniFi AP 可做無線 uplink/漫遊，需 UniFi Network 管理",
      "2.5GbE PoE uplink"
    ],
    "description": "UniFi U7 Lite 是入門 Wi-Fi 7 AP，適合想用較低單價鋪 2-3 顆 UniFi AP 的家庭工作室或小型辦公室。",
    "pros": [
      "UniFi 生態系完整，適合 gateway、switch、AP 一起管理",
      "官方美國通路售價清楚，規格與產品線更新快"
    ],
    "cons": [
      "多數 AP 需 PoE 交換器或 PoE Injector，部分配件另購",
      "海外官方價未含國際運費、進口稅與台灣保固"
    ],
    "bestFor": "想控制單顆成本，又希望直接進 Wi-Fi 7 與 UniFi 管理生態的人。",
    "recommendation": "UniFi 低價 Wi-Fi 7 候選：官方售價低，買 2-3 顆的總成本好控制，但仍要把 PoE 與 Gateway 成本算進去。",
    "score": 83,
    "voltage": "PoE 供電；海外官方通路，需確認 PoE 交換器/Injector、插頭與台灣保固",
    "warranty": "Ubiquiti 官方美國通路；海外運費、進口稅與台灣保固另計",
    "tags": [
      "UniFi",
      "Ubiquiti",
      "Wi-Fi 7",
      "PoE",
      "低價 AP"
    ],
    "rank": 11,
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-aruba-ap22",
    "category": "wifi",
    "budget": "premium",
    "channel": "tw",
    "brand": "Aruba",
    "model": "Instant On AP22",
    "name": "HPE Aruba Instant On Wi-Fi 6 室內 AP",
    "price": {
      "currency": "TWD",
      "amount": 15000,
      "converted": 15000,
      "confidence": "PChome 可信通路低價查核"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJRA900JB5WP/000001_1759461654.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJR-A900JB5WP",
    "buyLabel": "PChome",
    "specs": [
      "Wi‑Fi 6",
      "室內型 AP",
      "Mesh：Instant On 多 AP/Smart Mesh 與漫遊，需同系統管理",
      "需 PoE 或相容電源方案"
    ],
    "description": "Aruba Instant On AP22 是國際商用網路品牌的 Wi-Fi 6 AP，適合想把家用分享器升級成多 AP 漫遊架構的人。",
    "pros": [
      "國際商用網路品牌，適合多 AP 漫遊與集中管理",
      "台灣 PChome 可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "屬商用無線基地台，不是家用一體式 NAT 路由器",
      "通常需既有閘道器/路由器與 PoE 或電源供應規劃"
    ],
    "bestFor": "願意用商用 AP 佈建、重視穩定漫遊與品牌售後的小型辦公室或大坪數住宅。",
    "recommendation": "Aruba 綜合推薦：AP22 是 Instant On Wi-Fi 6 的主流均衡款，比 AP25 便宜、比 AP21 更有餘裕。",
    "score": 82,
    "voltage": "多為 PoE/外接電源；台灣 PChome 通路，需確認是否含變壓器與安裝條件",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Aruba",
      "HPE",
      "Instant On",
      "Wi‑Fi 6",
      "商用 AP"
    ],
    "rank": 12,
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-aruba-ap25",
    "category": "wifi",
    "budget": "premium",
    "channel": "tw",
    "brand": "Aruba",
    "model": "Instant On AP25",
    "name": "HPE Aruba Instant On 4x4 Wi-Fi 6 室內 AP",
    "price": {
      "currency": "TWD",
      "amount": 22000,
      "converted": 22000,
      "confidence": "PChome 可信通路低價查核"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJRA900JB5QX/000001_1759459286.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJR-A900JB5QX",
    "buyLabel": "PChome",
    "specs": [
      "Wi‑Fi 6",
      "4x4 室內型 AP",
      "Mesh：Instant On 多 AP/Smart Mesh 與漫遊，需同系統管理",
      "需 PoE 或相容電源方案"
    ],
    "description": "Aruba Instant On AP25 是更高規的 Wi-Fi 6 室內 AP，適合裝置數多、同時連線壓力較高的場域。",
    "pros": [
      "國際商用網路品牌，適合多 AP 漫遊與集中管理",
      "台灣 PChome 可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "屬商用無線基地台，不是家用一體式 NAT 路由器",
      "通常需既有閘道器/路由器與 PoE 或電源供應規劃"
    ],
    "bestFor": "多人辦公室、工作室、餐飲門店或高裝置密度家庭。",
    "recommendation": "Aruba 高密度推薦：AP25 價格較高，但 4x4 規格更適合多人同時連線與商用場景。",
    "score": 81,
    "voltage": "多為 PoE/外接電源；台灣 PChome 通路，需確認是否含變壓器與安裝條件",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Aruba",
      "HPE",
      "Instant On",
      "Wi‑Fi 6",
      "高密度"
    ],
    "rank": 13,
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-aruba-ap32",
    "category": "wifi",
    "budget": "premium",
    "channel": "tw",
    "brand": "Aruba",
    "model": "Instant On AP32",
    "name": "HPE Aruba Instant On Wi-Fi 6E 三頻 AP",
    "price": {
      "currency": "TWD",
      "amount": 19999,
      "converted": 19999,
      "confidence": "PChome 可信通路低價查核"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJRA900JB5RW/000001_1759459789.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJR-A900JB5RW",
    "buyLabel": "PChome",
    "specs": [
      "Wi‑Fi 6E",
      "三頻室內型 AP",
      "Mesh：Instant On 多 AP/Smart Mesh 與漫遊，需同系統管理",
      "6GHz 使用需終端與地區規範支援"
    ],
    "description": "Aruba Instant On AP32 是 Wi-Fi 6E 三頻 AP，適合想要 6GHz 頻段、但仍偏好 Aruba Instant On 管理生態的人。",
    "pros": [
      "國際商用網路品牌，適合多 AP 漫遊與集中管理",
      "台灣 PChome 可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "屬商用無線基地台，不是家用一體式 NAT 路由器",
      "通常需既有閘道器/路由器與 PoE 或電源供應規劃"
    ],
    "bestFor": "有 Wi-Fi 6E 終端、想降低 5GHz 壅塞並使用商用 AP 管理的人。",
    "recommendation": "Aruba 6E 推薦：AP32 比 AP25 便宜一些且有 6GHz，但要確認終端支援與佈建條件。",
    "score": 80,
    "voltage": "多為 PoE/外接電源；台灣 PChome 通路，需確認是否含變壓器與安裝條件",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Aruba",
      "HPE",
      "Instant On",
      "Wi‑Fi 6E",
      "6GHz"
    ],
    "rank": 14,
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-aruba-ap21",
    "category": "wifi",
    "budget": "premium",
    "channel": "tw",
    "brand": "Aruba",
    "model": "Instant On AP21",
    "name": "HPE Aruba Instant On Wi-Fi 6 室內 AP",
    "price": {
      "currency": "TWD",
      "amount": 10800,
      "converted": 10800,
      "confidence": "PChome 可信通路低價查核"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJRA900JB6BU/000001_1759470005.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJR-A900JB6BU",
    "buyLabel": "PChome",
    "specs": [
      "Wi‑Fi 6",
      "室內型 AP",
      "Mesh：Instant On 多 AP/Smart Mesh 與漫遊，需同系統管理",
      "需 PoE 或相容電源方案"
    ],
    "description": "Aruba Instant On AP21 是較入門的 Wi-Fi 6 商用 AP，適合想用 Aruba 生態但先控制單顆成本的人。",
    "pros": [
      "國際商用網路品牌，適合多 AP 漫遊與集中管理",
      "台灣 PChome 可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "屬商用無線基地台，不是家用一體式 NAT 路由器",
      "通常需既有閘道器/路由器與 PoE 或電源供應規劃"
    ],
    "bestFor": "小坪數辦公室、工作室或想用 Aruba AP 先試佈建的人。",
    "recommendation": "Aruba 入門候選：價格是 Aruba Instant On 這批裡最低，適合先買 1-2 顆測覆蓋。",
    "score": 79,
    "voltage": "多為 PoE/外接電源；台灣 PChome 通路，需確認是否含變壓器與安裝條件",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Aruba",
      "HPE",
      "Instant On",
      "Wi‑Fi 6",
      "入門 AP"
    ],
    "rank": 15,
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-unifi-u6-plus",
    "category": "wifi",
    "budget": "mid",
    "channel": "global",
    "brand": "UniFi",
    "model": "U6+",
    "name": "Compact Wi-Fi 6 AP",
    "price": {
      "currency": "USD",
      "amount": 129,
      "converted": 4144,
      "confidence": "Ubiquiti 官方美國售價"
    },
    "image": "https://cdn.ecomm.ui.com/products/6d5c6141-e2e9-416a-b789-53e59416bb1a/853bc73b-f65b-4e59-a171-75c9a4a4615e.png",
    "buyUrl": "https://store.ui.com/us/en/category/all-wifi/products/u6-plus",
    "buyLabel": "Ubiquiti Store",
    "specs": [
      "Wi-Fi 6",
      "4 spatial streams",
      "Mesh：UniFi AP 可做無線 uplink/漫遊，需 UniFi Network 管理",
      "Gigabit PoE uplink"
    ],
    "description": "UniFi U6+ 是較低價的 Wi-Fi 6 AP，適合小型空間或想用多顆低單價 AP 做覆蓋的人。",
    "pros": [
      "UniFi 生態系完整，適合 gateway、switch、AP 一起管理",
      "官方美國通路售價清楚，規格與產品線更新快"
    ],
    "cons": [
      "多數 AP 需 PoE 交換器或 PoE Injector，部分配件另購",
      "海外官方價未含國際運費、進口稅與台灣保固"
    ],
    "bestFor": "想用 UniFi 管理，但不需要高規 6GHz 或高密度吞吐的人。",
    "recommendation": "UniFi 入門 AP 推薦：單價低、容易鋪多顆，但若裝置數很多可上 U6 Pro/U7 Pro。",
    "score": 78,
    "voltage": "PoE 供電；海外官方通路，需確認 PoE 交換器/Injector、插頭與台灣保固",
    "warranty": "Ubiquiti 官方美國通路；海外運費、進口稅與台灣保固另計",
    "tags": [
      "UniFi",
      "Ubiquiti",
      "Wi-Fi 6",
      "PoE",
      "入門 AP"
    ],
    "rank": 16,
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-unifi-u7-pro-max",
    "category": "wifi",
    "budget": "premium",
    "channel": "global",
    "brand": "UniFi",
    "model": "U7 Pro Max",
    "name": "Wi-Fi 7 8-stream Ceiling AP",
    "price": {
      "currency": "USD",
      "amount": 279,
      "converted": 8964,
      "confidence": "Ubiquiti 官方美國售價"
    },
    "image": "https://cdn.ecomm.ui.com/products/350070a0-ae43-431b-b052-8e849c3b0a75/bad94693-bc54-4ab4-b060-9b972401941c.png",
    "buyUrl": "https://store.ui.com/us/en/category/all-wifi/products/u7-pro-max",
    "buyLabel": "Ubiquiti Store",
    "specs": [
      "Wi-Fi 7",
      "8 spatial streams，支援 6GHz",
      "Mesh：UniFi AP 可做無線 uplink/漫遊，需 UniFi Network 管理",
      "2.5GbE PoE+ uplink"
    ],
    "description": "UniFi U7 Pro Max 是更高階的 Wi-Fi 7 AP，適合高密度、重視頻譜掃描與長期規格餘裕的場域。",
    "pros": [
      "UniFi 生態系完整，適合 gateway、switch、AP 一起管理",
      "官方美國通路售價清楚，規格與產品線更新快"
    ],
    "cons": [
      "多數 AP 需 PoE 交換器或 PoE Injector，部分配件另購",
      "海外官方價未含國際運費、進口稅與台灣保固"
    ],
    "bestFor": "高裝置密度、小型辦公室或想一步到位買 UniFi 旗艦 AP 的人。",
    "recommendation": "UniFi 旗艦候選：規格最完整但價格高，除非環境很吃無線容量，否則 U7 Pro 通常更均衡。",
    "score": 77,
    "voltage": "PoE+ 供電；海外官方通路，需確認 PoE 交換器/Injector、插頭與台灣保固",
    "warranty": "Ubiquiti 官方美國通路；海外運費、進口稅與台灣保固另計",
    "tags": [
      "UniFi",
      "Ubiquiti",
      "Wi-Fi 7",
      "PoE",
      "旗艦 AP"
    ],
    "rank": 17,
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-asus-rt-be82u",
    "category": "wifi",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "ASUS",
    "model": "RT-BE82U",
    "name": "BE6500 雙頻 Wi-Fi 7 路由器",
    "price": {
      "currency": "TWD",
      "amount": 4999,
      "converted": 4999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFLPA900IV4B6/000001_1782965267.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFLP-A900IV4B6",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE6500 雙頻",
      "Mesh：支援 AiMesh",
      "2.5G/Gigabit 依商品頁"
    ],
    "description": "ASUS RT-BE82U 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想比 RT-BE58U 再上一步、仍保留 AiMesh 擴充的人。",
    "recommendation": "ASUS 中階推薦：價格和規格落在甜蜜點，適合單台主路由或 AiMesh 主節點。",
    "score": 85,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "AiMesh",
      "ASUS",
      "中階",
      "Wi-Fi 7"
    ],
    "releaseDate": "2025-04-30"
  },
  {
    "id": "wifi-tplink-archer-be700",
    "category": "wifi",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Archer BE700",
    "name": "BE15000 三頻 Wi-Fi 7 10G 路由器",
    "price": {
      "currency": "TWD",
      "amount": 7999,
      "converted": 7999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJBA900I4F5A/000001_1780372394.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJB-A900I4F5A",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE15000 三頻",
      "Mesh：支援 EasyMesh",
      "10G + 多 Gigabit"
    ],
    "description": "TP-Link Archer BE700 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "有 NAS、2G/10G 內網或高階遊戲需求，但不一定要 Mesh 套組的人。",
    "recommendation": "高階單機 CP：比頂規 BE805/BE900 便宜不少，仍有三頻與 10G 能力。",
    "score": 85,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "EasyMesh",
      "10G",
      "三頻",
      "高階"
    ],
    "releaseDate": "2025-01-20"
  },
  {
    "id": "wifi-dlink-r95",
    "category": "wifi",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "D-Link",
    "model": "R95",
    "name": "BE9500 Wi-Fi 7 三頻 2.5G Mesh 路由器",
    "price": {
      "currency": "TWD",
      "amount": 5299,
      "converted": 5299,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ6A900IZ71A/000001_1755490950.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ6-A900IZ71A",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE9500 三頻",
      "Mesh：支援 AQUILA PRO AI Mesh",
      "2.5G + Gigabit"
    ],
    "description": "D-Link R95 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想買 D-Link 三頻 Wi-Fi 7 主路由，並保留 Mesh 擴充的人。",
    "recommendation": "D-Link 高規推薦：三頻與 2.5G 價格不高，台灣品牌通路與維修辨識度佳。",
    "score": 84,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "三頻",
      "D-Link",
      "2.5G"
    ],
    "releaseDate": "2026-04-16"
  },
  {
    "id": "wifi-acer-predator-t7",
    "category": "wifi",
    "rank": 21,
    "budget": "mid",
    "channel": "tw",
    "brand": "Acer",
    "model": "Predator Connect T7",
    "name": "BE11000 Mesh Wi-Fi 7 電競路由器",
    "price": {
      "currency": "TWD",
      "amount": 5490,
      "converted": 5490,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAF02A900I473A/000001_1732699929.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAF02-A900I473A",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE11000 三頻",
      "Mesh：支援 Mesh",
      "2.5G/Gigabit 依商品頁"
    ],
    "description": "Acer Predator Connect T7 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "Acer/Predator 使用者、想要電競外型和三頻 Wi-Fi 7 的人。",
    "recommendation": "電競特色款：價格相對友善且支援 Mesh，但管理生態成熟度仍可和 ASUS/TP-Link 比較。",
    "score": 83,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "電競",
      "Acer",
      "三頻"
    ],
    "releaseDate": "2024-01-08"
  },
  {
    "id": "wifi-mercusys-halo-h80x-3pack",
    "category": "wifi",
    "rank": 22,
    "budget": "mid",
    "channel": "tw",
    "brand": "Mercusys",
    "model": "Halo H80X 3入",
    "name": "AX3000 Wi-Fi 6 Mesh 網狀路由器三入組",
    "price": {
      "currency": "TWD",
      "amount": 4199,
      "converted": 4199,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFEMA900F9H1Y/000001_1774858877.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFEM-A900F9H1Y",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX3000 雙頻",
      "Mesh：支援 Halo Mesh，三入組",
      "Gigabit 有線埠"
    ],
    "description": "Mercusys Halo H80X 3入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想用低預算一次鋪 3 顆，網速需求不追求 Wi-Fi 7 的家庭。",
    "recommendation": "低價三入 Mesh：價格非常漂亮，適合先解決死角，但長期韌體與售後可排在 TP-Link/ASUS 之後。",
    "score": 82,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "三入組",
      "Wi-Fi 6",
      "低價"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-xiaomi-ax3000-2pack",
    "category": "wifi",
    "rank": 23,
    "budget": "value",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "AX3000 2入",
    "name": "AX3000 Mesh 路由器兩件裝",
    "price": {
      "currency": "TWD",
      "amount": 2159,
      "converted": 2159,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DYANAIA900HNEUP/000001_1730700224.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DYANAI-A900HNEUP",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX3000 雙頻",
      "Mesh：支援 Xiaomi Mesh，兩件裝",
      "Gigabit 有線埠"
    ],
    "description": "Xiaomi AX3000 2入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "預算很低、裝置數不多、只想改善基本覆蓋的小家庭。",
    "recommendation": "超低價 Mesh：兩件裝價格非常低，但若重視售後與長期韌體，ASUS/TP-Link 仍更安心。",
    "score": 81,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "二入組",
      "低價",
      "Xiaomi"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-tplink-archer-be220",
    "category": "wifi",
    "rank": 24,
    "budget": "value",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Archer BE220",
    "name": "BE3600 雙頻 Gigabit Wi-Fi 7 路由器",
    "price": {
      "currency": "TWD",
      "amount": 2290,
      "converted": 2290,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFLVA900K13CR/000001_1779257487.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFLV-A900K13CR",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：未特別標示 Mesh",
      "Gigabit 有線埠"
    ],
    "description": "TP-Link Archer BE220 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "小坪數、只需要單台便宜 Wi-Fi 7 主路由的人。",
    "recommendation": "單台低價推薦：價格低但不是 Mesh 首選，若要 2-3 台串接建議改 Deco 系列。",
    "score": 80,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "單台",
      "低價",
      "TP-Link",
      "Wi-Fi 7"
    ],
    "releaseDate": "2024-11-07"
  },
  {
    "id": "wifi-mercusys-mr27be",
    "category": "wifi",
    "rank": 25,
    "budget": "value",
    "channel": "tw",
    "brand": "Mercusys",
    "model": "MR27BE",
    "name": "BE3600 雙頻 2.5G Wi-Fi 7 路由器",
    "price": {
      "currency": "TWD",
      "amount": 1890,
      "converted": 1890,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC1TA900IR9CO/000001_1746532107.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBC1T-A900IR9CO",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：未特別標示 Mesh",
      "2.5G + Gigabit"
    ],
    "description": "Mercusys MR27BE 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想最低成本進 Wi-Fi 7 與 2.5G 的小空間使用者。",
    "recommendation": "入門價位很強，但若要全屋 Mesh 串接，請優先看 Halo/Deco/ZenWiFi。",
    "score": 79,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "低價",
      "2.5G",
      "單台",
      "Mercusys"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-totolink-be5",
    "category": "wifi",
    "rank": 26,
    "budget": "value",
    "channel": "tw",
    "brand": "TOTOLINK",
    "model": "BE5",
    "name": "BE5100 Wi-Fi 7 Mesh 網狀路由器系統",
    "price": {
      "currency": "TWD",
      "amount": 1990,
      "converted": 1990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJDA900JJ4D4/000001_1765268990.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJD-A900JJ4D4",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE5100 雙頻",
      "Mesh：支援 Mesh",
      "Gigabit 有線埠"
    ],
    "description": "TOTOLINK BE5 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想找低價 Wi-Fi 7 Mesh 單顆，再慢慢補同品牌節點的人。",
    "recommendation": "低價 Mesh 候選：規格吸引人，但品牌售後與韌體體驗建議保守看待。",
    "score": 79,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "低價",
      "TOTOLINK",
      "Wi-Fi 7"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-dlink-m36",
    "category": "wifi",
    "rank": 27,
    "budget": "value",
    "channel": "tw",
    "brand": "D-Link",
    "model": "M36",
    "name": "BE3600 Wi-Fi 7 2.5G 無線 Mesh 路由器",
    "price": {
      "currency": "TWD",
      "amount": 2599,
      "converted": 2599,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ6A900JFC98/000001_1782210759.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ6-A900JFC98",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：支援 AQUILA PRO AI Mesh",
      "2.5G + Gigabit"
    ],
    "description": "D-Link M36 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "偏好 D-Link、想先買單顆 Mesh 節點再擴充的人。",
    "recommendation": "D-Link 入門 Mesh：價格低、通路清楚，適合先買一顆測試覆蓋。",
    "score": 79,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "D-Link",
      "2.5G",
      "入門"
    ],
    "releaseDate": "2025-09-26"
  },
  {
    "id": "wifi-netgear-rs100",
    "category": "wifi",
    "rank": 28,
    "budget": "mid",
    "channel": "tw",
    "brand": "NETGEAR",
    "model": "Nighthawk RS100",
    "name": "BE3600 雙頻 Wi-Fi 7 路由器",
    "price": {
      "currency": "TWD",
      "amount": 4095,
      "converted": 4095,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJAA900JUQYP/000001_1774520642.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJA-A900JUQYP",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：未特別標示 Mesh",
      "Gigabit 有線埠"
    ],
    "description": "NETGEAR Nighthawk RS100 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "偏好 NETGEAR Nighthawk 單機路由器的人。",
    "recommendation": "品牌單機候選：NETGEAR 口碑佳，但若要 Mesh 應改看 Orbi 系列。",
    "score": 78,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "NETGEAR",
      "單台",
      "Wi-Fi 7",
      "Nighthawk"
    ],
    "releaseDate": "2025"
  },
  {
    "id": "wifi-linksys-mx5502-3pack",
    "category": "wifi",
    "rank": 29,
    "budget": "premium",
    "channel": "tw",
    "brand": "Linksys",
    "model": "MX5502-AH 3入",
    "name": "AX5400 Velop Mesh Wi-Fi 6 三入組",
    "price": {
      "currency": "TWD",
      "amount": 12349,
      "converted": 12349,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFE5A900JUA8C/000001_1774227439.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFE5-A900JUA8C",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX5400 雙頻",
      "Mesh：支援 Velop Mesh，三入組",
      "Gigabit 有線埠"
    ],
    "description": "Linksys MX5502-AH 3入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "偏好 Linksys Velop，且家中需要三顆覆蓋的人。",
    "recommendation": "Velop 三入候選：覆蓋完整，但以 Wi-Fi 6 規格來看價格偏高。",
    "score": 78,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "三入組",
      "Linksys",
      "Wi-Fi 6"
    ],
    "releaseDate": "2021-12"
  },
  {
    "id": "wifi-synology-rt6600ax",
    "category": "wifi",
    "rank": 30,
    "budget": "premium",
    "channel": "tw",
    "brand": "Synology",
    "model": "RT6600ax",
    "name": "三頻 Wi-Fi 6 Router 無線路由器",
    "price": {
      "currency": "TWD",
      "amount": 11235,
      "converted": 11235,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4VA900JIQU0/000001_1764896894.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4V-A900JIQU0",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX6600 三頻",
      "Mesh：未特別標示 Mesh",
      "2.5G + Gigabit"
    ],
    "description": "Synology RT6600ax 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想要 Synology SRM、安全控管與三頻 Wi-Fi 6 的進階家庭。",
    "recommendation": "進階管理推薦：適合懂網路設定的人，純 Mesh 覆蓋則 WRX560 更直覺。",
    "score": 78,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "三頻",
      "Synology",
      "管理",
      "Wi-Fi 6"
    ],
    "releaseDate": "2022-05-11"
  },
  {
    "id": "wifi-asus-rt-be88u",
    "category": "wifi",
    "rank": 31,
    "budget": "premium",
    "channel": "tw",
    "brand": "ASUS",
    "model": "RT-BE88U",
    "name": "BE7200 Wi-Fi 7 AiMesh 雙頻電競路由器",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ5A900HRBD9/000001_1760580708.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ5-A900HRBD9",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE7200 雙頻",
      "Mesh：支援 AiMesh",
      "多 Gigabit / 10G 依商品頁"
    ],
    "description": "ASUS RT-BE88U 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "有多台有線設備、NAS、遊戲主機，並想保留 AiMesh 的進階使用者。",
    "recommendation": "高階 ASUS 推薦：有線擴充與韌體功能強，但一般家庭可先看 ZenWiFi/RT-BE58U。",
    "score": 77,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "AiMesh",
      "高階",
      "ASUS",
      "多埠"
    ],
    "releaseDate": "2024-03-27"
  },
  {
    "id": "wifi-tplink-archer-be805",
    "category": "wifi",
    "rank": 32,
    "budget": "premium",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Archer BE805",
    "name": "BE19000 三頻 10G Wi-Fi 7 路由器",
    "price": {
      "currency": "TWD",
      "amount": 12999,
      "converted": 12999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAN5BA900HQT2A/000001_1780372414.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAN5B-A900HQT2A",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE19000 三頻",
      "Mesh：未特別標示 Mesh",
      "雙 10G"
    ],
    "description": "TP-Link Archer BE805 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "追求單台高吞吐、雙 10G、有線內網與高速 NAS 的玩家。",
    "recommendation": "高吞吐單機：規格漂亮，但若主要需求是全屋覆蓋，Deco Mesh 更適合。",
    "score": 77,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "10G",
      "三頻",
      "TP-Link",
      "旗艦"
    ],
    "releaseDate": "2024-08-30"
  },
  {
    "id": "wifi-tplink-archer-be900",
    "category": "wifi",
    "rank": 33,
    "budget": "premium",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Archer BE900",
    "name": "BE24000 四頻 10G Wi-Fi 7 路由器",
    "price": {
      "currency": "TWD",
      "amount": 16999,
      "converted": 16999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAN5BA900HF2LS/000001_1782099036.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAN5B-A900HF2LS",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE24000 四頻",
      "Mesh：未特別標示 Mesh",
      "雙 10G"
    ],
    "description": "TP-Link Archer BE900 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想看 TP-Link 單機天花板、家中有大量高階裝置的人。",
    "recommendation": "旗艦規格參考：性能上限高，但價格也高，不是多數家庭 CP 首選。",
    "score": 76,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "10G",
      "四頻",
      "旗艦",
      "TP-Link"
    ],
    "releaseDate": "2022-12-31"
  },
  {
    "id": "wifi-netgear-rs300",
    "category": "wifi",
    "rank": 34,
    "budget": "mid",
    "channel": "tw",
    "brand": "NETGEAR",
    "model": "Nighthawk RS300",
    "name": "BE9300 三頻 Wi-Fi 7 旗艦路由器",
    "price": {
      "currency": "TWD",
      "amount": 8700,
      "converted": 8700,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJAA900IFBVA/000001_1780997121.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJA-A900IFBVA",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE9300 三頻",
      "Mesh：未特別標示 Mesh",
      "2.5G/Gigabit 依商品頁"
    ],
    "description": "NETGEAR Nighthawk RS300 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "偏好 NETGEAR Nighthawk，想要三頻 Wi-Fi 7 單台主路由的人。",
    "recommendation": "NETGEAR 高階單機：品牌與硬體口碑不錯，但 Mesh 串接應選 Orbi。",
    "score": 76,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "NETGEAR",
      "三頻",
      "單台",
      "高階"
    ],
    "releaseDate": "2024-06-19"
  },
  {
    "id": "wifi-zyxel-usg-lite-60ax",
    "category": "wifi",
    "rank": 35,
    "budget": "mid",
    "channel": "tw",
    "brand": "Zyxel",
    "model": "USG LITE 60AX",
    "name": "AX6000 Wi-Fi 6 雲端安全路由器",
    "price": {
      "currency": "TWD",
      "amount": 6480,
      "converted": 6480,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAF0IA900HO2DR/000001_1777023675.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAF0I-A900HO2DR",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX6000 雙頻",
      "Mesh：未特別標示 Mesh",
      "Gigabit 有線埠"
    ],
    "description": "Zyxel USG LITE 60AX 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "重視資安防護、雲端管理或小型辦公室的人。",
    "recommendation": "資安管理候選：功能取向和一般家用 Mesh 不同，適合需要防護/控管的人。",
    "score": 76,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "資安",
      "Zyxel",
      "小辦公",
      "Wi-Fi 6"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-msi-radix-axe6600",
    "category": "wifi",
    "rank": 36,
    "budget": "mid",
    "channel": "tw",
    "brand": "MSI",
    "model": "RadiX AXE6600",
    "name": "Wi-Fi 6E 三頻電競路由器",
    "price": {
      "currency": "TWD",
      "amount": 7990,
      "converted": 7990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFKSA900HEQVN/000001_1713512948.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFKS-A900HEQVN",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6E",
      "AXE6600 三頻",
      "Mesh：未特別標示 Mesh",
      "2.5G/Gigabit 依商品頁"
    ],
    "description": "MSI RadiX AXE6600 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "MSI 電競設備使用者，想要 Wi-Fi 6E 三頻單台路由。",
    "recommendation": "電競單機候選：有 6GHz 頻段，但 Mesh 串接與售後成熟度可和 ASUS/TP-Link 比較。",
    "score": 75,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Wi-Fi 6E",
      "電競",
      "MSI",
      "三頻"
    ],
    "releaseDate": "2023-02-16"
  },
  {
    "id": "wifi-acer-ovia-t360",
    "category": "wifi",
    "rank": 37,
    "budget": "value",
    "channel": "tw",
    "brand": "Acer",
    "model": "Connect Ovia T360",
    "name": "Wi-Fi 7 路由器",
    "price": {
      "currency": "TWD",
      "amount": 2990,
      "converted": 2990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ8A900JSZV4/000001_1773200906.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ8-A900JSZV4",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：支援 Mesh",
      "Gigabit 有線埠"
    ],
    "description": "Acer Connect Ovia T360 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想試 Acer Wi-Fi 7 入門 Mesh 生態的人。",
    "recommendation": "Acer 入門候選：價格低且標示 Mesh，但品牌網通生態仍不如傳統網通大廠完整。",
    "score": 75,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "Acer",
      "低價",
      "Wi-Fi 7"
    ],
    "releaseDate": "2026-03"
  },
  {
    "id": "wifi-xiaomi-ax3000-1pack",
    "category": "wifi",
    "rank": 38,
    "budget": "value",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "AX3000 1入",
    "name": "AX3000 Mesh 路由器一件裝",
    "price": {
      "currency": "TWD",
      "amount": 1199,
      "converted": 1199,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DYANAIA900HNETW/000001_1730700267.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DYANAI-A900HNETW",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX3000 雙頻",
      "Mesh：支援 Xiaomi Mesh",
      "Gigabit 有線埠"
    ],
    "description": "Xiaomi AX3000 1入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "預算極低的小宅或租屋族。",
    "recommendation": "低價單顆 Mesh：價格很低，可加購節點，但重視售後者仍建議上 ASUS/TP-Link。",
    "score": 74,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "低價",
      "Xiaomi",
      "Wi-Fi 6"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-totolink-x30-se",
    "category": "wifi",
    "rank": 39,
    "budget": "value",
    "channel": "tw",
    "brand": "TOTOLINK",
    "model": "X30 SE",
    "name": "AX3000 Wi-Fi 6 Mesh 網狀路由器系統",
    "price": {
      "currency": "TWD",
      "amount": 891,
      "converted": 891,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ8A900JNW9S/000001_1768979044.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ8-A900JNW9S",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX3000 雙頻",
      "Mesh：支援 Mesh",
      "Gigabit 有線埠"
    ],
    "description": "TOTOLINK X30 SE 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "只想用最低成本補 Wi-Fi 6 Mesh 覆蓋的人。",
    "recommendation": "最低價參考：價格很殺，但不作為主要推薦，適合預算優先且能接受售後風險的人。",
    "score": 73,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "最低價",
      "TOTOLINK",
      "Wi-Fi 6"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-qnap-qhora-301w",
    "category": "wifi",
    "rank": 40,
    "budget": "mid",
    "channel": "tw",
    "brand": "QNAP",
    "model": "QHora-301W",
    "name": "Wi-Fi 6 雙 10GbE SD-WAN 路由器",
    "price": {
      "currency": "TWD",
      "amount": 7990,
      "converted": 7990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAG6JA900AUW3D/000001_1626400932.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAG6J-A900AUW3D",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX3600 雙頻",
      "Mesh：未特別標示 Mesh",
      "雙 10GbE"
    ],
    "description": "QNAP QHora-301W 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "有 QNAP NAS、10GbE 內網或 SD-WAN 需求的進階使用者。",
    "recommendation": "專業用途候選：雙 10G 很少見，但一般家庭 Mesh 覆蓋不是它的主場。",
    "score": 73,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "10G",
      "QNAP",
      "SD-WAN",
      "進階"
    ],
    "releaseDate": "2020-11-06"
  },
  {
    "id": "wifi-cudy-ax3000-mesh",
    "category": "wifi",
    "rank": 41,
    "budget": "value",
    "channel": "tw",
    "brand": "Cudy",
    "model": "AX3000 2.5G Mesh",
    "name": "AX3000 2.5Gbps Mesh Wi-Fi 6 路由器",
    "price": {
      "currency": "TWD",
      "amount": 1720,
      "converted": 1720,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ8A900JX7UY/000001_1776333176.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ8-A900JX7UY",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX3000 雙頻",
      "Mesh：支援 Mesh",
      "2.5G + Gigabit"
    ],
    "description": "Cudy AX3000 2.5G Mesh 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想要低價 2.5G + Wi-Fi 6 Mesh 的進階玩家。",
    "recommendation": "規格低價候選：硬體規格漂亮，但品牌售後與韌體口碑要自行斟酌。",
    "score": 72,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "2.5G",
      "低價",
      "Cudy"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-cudy-be3600",
    "category": "wifi",
    "rank": 42,
    "budget": "value",
    "channel": "tw",
    "brand": "Cudy",
    "model": "WR3600 BE3600",
    "name": "BE3600 Wi-Fi 7 雙頻無線網狀路由器",
    "price": {
      "currency": "TWD",
      "amount": 1790,
      "converted": 1790,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFLTA900JMCU4/000001_1776166910.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFLT-A900JMCU4",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：標示網狀路由器，需確認同型號 Mesh 串接",
      "Gigabit 有線埠"
    ],
    "description": "Cudy WR3600 BE3600 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想低價嘗試 Wi-Fi 7 單台路由的人。",
    "recommendation": "低價 Wi-Fi 7 參考：價格漂亮，但 Mesh 串接與售後成熟度仍建議保守看待。",
    "score": 72,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "低價",
      "Mesh",
      "Cudy",
      "Wi-Fi 7"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-asus-rt-be3600hp",
    "category": "wifi",
    "rank": 43,
    "budget": "mid",
    "channel": "tw",
    "brand": "ASUS",
    "model": "RT-BE3600HP",
    "name": "BE3600 Wi-Fi 7 AiMesh 雙頻可擴充路由器",
    "price": {
      "currency": "TWD",
      "amount": 3299,
      "converted": 3299,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ5A900K6OV8/000001_1783069758.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ5-A900K6OV8",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：支援 AiMesh",
      "Gigabit 有線埠"
    ],
    "description": "ASUS RT-BE3600HP 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想買 ASUS 入門可擴充路由器，且偏好外接天線造型的人。",
    "recommendation": "ASUS 入門替代：和 RT-BE58U 接近，可依價格與外型挑選。",
    "score": 72,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "AiMesh",
      "ASUS",
      "入門",
      "Wi-Fi 7"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-tplink-deco-be22",
    "category": "wifi",
    "rank": 44,
    "budget": "value",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Deco BE22",
    "name": "BE3600 Wi-Fi 7 真 Mesh 無線路由器一入組",
    "price": {
      "currency": "TWD",
      "amount": 2699,
      "converted": 2699,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC5UA900J0QSL/000001_1779184048.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBC5U-A900J0QSL",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：支援 Deco Mesh，單入可擴充",
      "Gigabit 有線埠"
    ],
    "description": "TP-Link Deco BE22 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想先買一顆 Deco，再逐步加到 2-3 顆的人。",
    "recommendation": "Deco 單顆擴充候選：適合先測家中死角，再按需求補同系列節點。",
    "score": 72,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "單入",
      "TP-Link",
      "可擴充"
    ],
    "releaseDate": "2025-08-27"
  },
  {
    "id": "wifi-mercusys-halo-h25be-2pack",
    "category": "wifi",
    "rank": 45,
    "budget": "mid",
    "channel": "tw",
    "brand": "Mercusys",
    "model": "Halo H25BE 2入",
    "name": "BE3600 雙頻真 Mesh Wi-Fi 7 路由器二入組",
    "price": {
      "currency": "TWD",
      "amount": 4699,
      "converted": 4699,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ9A900IZ7Y3/000001_1753463373.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ9-A900IZ7Y3",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：支援 Halo Mesh，二入組",
      "Gigabit 有線埠"
    ],
    "description": "Mercusys Halo H25BE 2入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想用比 Deco/ZenWiFi 更低的預算買 Wi-Fi 7 二入 Mesh。",
    "recommendation": "低價二入 Wi-Fi 7 Mesh：價格漂亮，但品牌售後與 App 體驗仍建議和 TP-Link/ASUS 比較後再決定。",
    "score": 71,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "二入組",
      "低價",
      "Mercusys"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "wifi-costco-tplink-deco-x55",
    "category": "wifi",
    "rank": 46,
    "budget": "value",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Deco X55",
    "name": "AX3000 Wi-Fi 6 雙頻 Mesh 路由器",
    "price": {
      "currency": "TWD",
      "amount": 1999,
      "converted": 1999,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h3e/h7d/98612380598302.webp",
    "buyUrl": "https://www.costco.com.tw/Digital-Mobile/Laptops-Computers/Keyboards-Mice-Computer-Accessories/TP-Link-AX3000-Mesh-Wi-Fi-6-System-Deco-X55/p/134457",
    "buyLabel": "Costco 好市多",
    "specs": [
      "Wi-Fi 6 / AX3000",
      "Deco Mesh",
      "雙頻",
      "可做 Mesh 擴充節點",
      "Costco 評價 4.7 / 107 則"
    ],
    "description": "Deco X55 是 Costco 評價穩定的 Wi-Fi 6 Mesh 路由器，適合買 2-3 台延伸全屋覆蓋。",
    "pros": [
      "Costco 107 則評論、4.7 分",
      "Deco Mesh 生態成熟"
    ],
    "cons": [
      "不是 Wi-Fi 7",
      "實際速度受回程、牆面與擺位影響"
    ],
    "bestFor": "需要 2-3 台 Mesh 串接、重視設定簡單與價格的人。",
    "recommendation": "好市多補充推薦：Deco X55 是 Costco Wi-Fi 類中評論量足的 Mesh 入門候選。",
    "score": 85,
    "voltage": "台灣通路；需確認電源變壓器與網路拓樸",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "Wi-Fi 6",
      "Mesh"
    ],
    "releaseDate": "找不到"
  }
  ]);
})();
