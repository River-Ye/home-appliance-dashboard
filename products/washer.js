(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("washer",   [
    {
      "id": "washer-lg-wt-vdn12hm",
      "rank": 1,
      "topPick": true,
      "brand": "LG",
      "model": "WT-VDN12HM",
      "name": "LG WT-VDN12HM",
      "image": "https://img.yec.tw/zp/MerchandiseImages/80ae994660-Gd-11679958.jpg",
      "price": {
        "currency": "TWD",
        "amount": 15899,
        "converted": 15899,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/LG樂金-WT-VDN12HM-12KG-直驅變頻直立洗衣機-曜石黑-贈基本安裝-獨家贈好禮-11679958.html",
      "specs": [
        "洗衣機：LG樂金 WT-VDN12HM 12KG 直驅變頻直立洗衣機 曜石黑 贈基本安裝 (獨家贈好禮)",
        "容量：12kg",
        "形式：直立式",
        "變頻：有標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "綜合推薦：LG WT-VDN12HM 在價格、容量、品牌售後與日常洗淨便利性之間最均衡。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 96,
      "budget": "mid",
      "tags": [
        "容量：12kg",
        "直立",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-lg-wt-td16hw",
      "rank": 2,
      "topPick": false,
      "brand": "LG",
      "model": "WT-TD16HW",
      "name": "LG WT-TD16HW",
      "image": "https://img.yec.tw/zp/MerchandiseImages/5514568E93-SP-22052141.jpg",
      "price": {
        "currency": "TWD",
        "amount": 18905,
        "converted": 18905,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/LG-樂金-16公斤-AI-DD-蒸氣直驅變頻洗衣機-雲朵白-WT-TD16HW-11981704.html",
      "specs": [
        "洗衣機：LG 樂金 16公斤 AI DD 蒸氣直驅變頻洗衣機-雲朵白(WT-TD16HW)",
        "容量：16kg",
        "形式：依商品頁標示",
        "變頻：有標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 2 推薦：LG WT-TD16HW 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 95,
      "budget": "mid",
      "tags": [
        "容量：16kg",
        "變頻",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-lg-wt-td18ob",
      "rank": 3,
      "topPick": false,
      "brand": "LG",
      "model": "WT-TD18OB",
      "name": "LG WT-TD18OB",
      "image": "https://img.yec.tw/zp/MerchandiseImages/B5FF46B1A6-SP-22052251.jpg",
      "price": {
        "currency": "TWD",
        "amount": 19855,
        "converted": 19855,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/LG-樂金-18公斤-AI-DD-直驅變頻洗衣機-瑪瑙黑-WT-TD18OB-11981706.html",
      "specs": [
        "洗衣機：LG 樂金 18公斤 AI DD 直驅變頻洗衣機-瑪瑙黑(WT-TD18OB)",
        "容量：18kg",
        "形式：依商品頁標示",
        "變頻：有標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 3 推薦：LG WT-TD18OB 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 94,
      "budget": "mid",
      "tags": [
        "容量：18kg",
        "變頻",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-panasonic-na-v190mt-pn",
      "rank": 4,
      "topPick": false,
      "brand": "Panasonic",
      "model": "NA-V190MT-PN",
      "name": "Panasonic NA-V190MT-PN",
      "image": "https://img.yec.tw/zp/MerchandiseImages/a4e0db233c-Gd-10538421.jpg",
      "price": {
        "currency": "TWD",
        "amount": 22705,
        "converted": 22705,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic國際牌-19KG-變頻直立式洗衣機-NA-V190MT-PN-玫瑰金-10538421.html",
      "specs": [
        "洗衣機：Panasonic國際牌 19KG 變頻直立式洗衣機 NA-V190MT-PN 玫瑰金",
        "容量：19kg",
        "形式：直立式",
        "變頻：有標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 4 推薦：Panasonic NA-V190MT-PN 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 93,
      "budget": "mid",
      "tags": [
        "容量：19kg",
        "直立",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-panasonic-na-v150nm-pn",
      "rank": 5,
      "topPick": false,
      "brand": "Panasonic",
      "model": "NA-V150NM-PN",
      "name": "Panasonic NA-V150NM-PN",
      "image": "https://img.yec.tw/zp/MerchandiseImages/09409EE61F-SP-14769059.jpg",
      "price": {
        "currency": "TWD",
        "amount": 21755,
        "converted": 21755,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic國際牌-15公斤-溫水變頻直立式洗衣機-NA-V150NM-PN-玫瑰金-10722293.html",
      "specs": [
        "洗衣機：Panasonic國際牌 15公斤 溫水變頻直立式洗衣機 NA-V150NM-PN 玫瑰金",
        "容量：15kg",
        "形式：直立式",
        "變頻：有標示",
        "溫水洗：有標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 5 推薦：Panasonic NA-V150NM-PN 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 92,
      "budget": "mid",
      "tags": [
        "容量：15kg",
        "直立",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-panasonic-na-v130lb-l",
      "rank": 6,
      "topPick": false,
      "brand": "Panasonic",
      "model": "NA-V130LB-L",
      "name": "Panasonic NA-V130LB-L",
      "image": "https://img.yec.tw/zp/MerchandiseImages/340D2A8AF6-SP-10482488.jpg",
      "price": {
        "currency": "TWD",
        "amount": 16632,
        "converted": 16632,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic-國際牌-13公斤變頻直立式洗衣機-NA-V130LB-L-炫銀灰-9722518.html",
      "specs": [
        "洗衣機：Panasonic國際牌 13公斤 變頻直立式洗衣機 NA-V130LB-L 炫銀灰",
        "容量：13kg",
        "形式：直立式",
        "變頻：有標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 6 推薦：Panasonic NA-V130LB-L 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 91,
      "budget": "mid",
      "tags": [
        "容量：13kg",
        "直立",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-lg-wd-s13vbw",
      "rank": 7,
      "topPick": false,
      "brand": "LG",
      "model": "WD-S13VBW",
      "name": "LG WD-S13VBW",
      "image": "https://img.yec.tw/zp/MerchandiseImages/14fd573d8b-Gd-11368468.jpg",
      "price": {
        "currency": "TWD",
        "amount": 24655,
        "converted": 24655,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/LG-樂金-WD-S13VBW-13公斤蒸洗脫WiFi滾筒洗衣機-冰磁白-客約賣場-獨家送雙好禮--11368468.html",
      "specs": [
        "洗衣機：LG 樂金 WD-S13VBW 13公斤蒸洗脫WiFi滾筒洗衣機 冰磁白 客約賣場 (獨家送好禮)",
        "容量：13kg",
        "形式：滾筒",
        "變頻：有標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 7 推薦：LG WD-S13VBW 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 90,
      "budget": "mid",
      "tags": [
        "容量：13kg",
        "滾筒",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-sampo-wm-md10",
      "rank": 8,
      "topPick": false,
      "brand": "SAMPO",
      "model": "WM-MD10",
      "name": "SAMPO WM-MD10",
      "image": "https://img.yec.tw/zp/MerchandiseImages/aeae8992ae-Gd-10764299.jpg",
      "price": {
        "currency": "TWD",
        "amount": 7990,
        "converted": 7990,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/SAMPO-聲寶10公斤窄身變頻單槽直立式洗衣機-香檳金-含基本安裝-舊機回收-10764299.html",
      "specs": [
        "洗衣機：SAMPO 聲寶10公斤窄身變頻單槽直立式洗衣機WM-MD10 香檳金含基本安裝+舊機回收",
        "容量：10kg",
        "形式：直立式",
        "變頻：有標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 8 推薦：SAMPO WM-MD10 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 89,
      "budget": "value",
      "tags": [
        "容量：10kg",
        "直立",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-panasonic-na-90eb-w",
      "rank": 9,
      "topPick": false,
      "brand": "Panasonic",
      "model": "NA-90EB-W",
      "name": "Panasonic NA-90EB-W",
      "image": "https://img.yec.tw/zp/MerchandiseImages/6a4879fcf0-Gd-10743682.jpg",
      "price": {
        "currency": "TWD",
        "amount": 9108,
        "converted": 9108,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic-國際牌-NA-90EB-W-9KG超強淨直立定頻洗衣機-白-10743682.html",
      "specs": [
        "洗衣機：Panasonic 國際牌 NA-90EB-W 9KG超強淨直立定頻洗衣機 白",
        "容量：9kg",
        "形式：直立式",
        "變頻：通路頁未標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 9 推薦：Panasonic NA-90EB-W 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 88,
      "budget": "value",
      "tags": [
        "容量：9kg",
        "直立",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-whirlpool-wm10kw",
      "rank": 10,
      "topPick": false,
      "brand": "Whirlpool",
      "model": "WM10KW",
      "name": "Whirlpool WM10KW",
      "image": "https://img.yec.tw/zp/MerchandiseImages/d3884055f3-Gd-10609233.jpg",
      "price": {
        "currency": "TWD",
        "amount": 6590,
        "converted": 6590,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/Whirlpool惠而浦-10公斤-直立洗衣機-WM10KW-10609233.html",
      "specs": [
        "洗衣機：Whirlpool惠而浦 10公斤 直立洗衣機 WM10KW",
        "容量：10kg",
        "形式：直立式",
        "變頻：通路頁未標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 10 推薦：Whirlpool WM10KW 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 87,
      "budget": "value",
      "tags": [
        "容量：10kg",
        "直立",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-whirlpool-wm07pw",
      "rank": 11,
      "topPick": false,
      "brand": "Whirlpool",
      "model": "WM07PW",
      "name": "Whirlpool WM07PW",
      "image": "https://img.yec.tw/zp/MerchandiseImages/c08d34dec9-Gd-9291102.jpg",
      "price": {
        "currency": "TWD",
        "amount": 4990,
        "converted": 4990,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/Whirlpool-惠而浦-7公斤-直立洗衣機-WM07PW-9291102.html",
      "specs": [
        "洗衣機：Whirlpool惠而浦 7公斤 直立洗衣機 WM07PW",
        "容量：7kg",
        "形式：直立式",
        "變頻：通路頁未標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 11 推薦：Whirlpool WM07PW 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 86,
      "budget": "value",
      "tags": [
        "容量：7kg",
        "直立",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-heran-hwm-1061v",
      "rank": 12,
      "topPick": false,
      "brand": "HERAN",
      "model": "HWM-1061V",
      "name": "HERAN HWM-1061V",
      "image": "https://cs-a.ecimg.tw/items/DPAIB6A900IM3H3/000001_1750206335.jpg",
      "price": {
        "currency": "TWD",
        "amount": 8190,
        "converted": 8190,
        "confidence": "PChome 24h 低價查核"
      },
      "channel": "tw",
      "buyLabel": "PChome",
      "buyUrl": "https://24h.pchome.com.tw/prod/DPAIB6-A900IM3H3",
      "specs": [
        "洗衣機：【HERAN 禾聯】10KG變頻 銀離子抗菌直立式洗衣機HWM-1061V",
        "容量：10kg",
        "形式：依商品頁標示",
        "變頻：有標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "PChome 24h 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 12 推薦：HERAN HWM-1061V 以 10kg 直立變頻、PChome 可購買價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 85,
      "budget": "value",
      "tags": [
        "容量：10kg",
        "變頻",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-sampo-es-k10df",
      "rank": 13,
      "topPick": false,
      "brand": "SAMPO",
      "model": "ES-K10DF",
      "name": "SAMPO ES-K10DF",
      "image": "https://img.yec.tw/zp/MerchandiseImages/1be1c9536e-Gd-9713719.jpg",
      "price": {
        "currency": "TWD",
        "amount": 8990,
        "converted": 8990,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/SAMPO-聲寶10公斤窄身變頻單槽直立式洗衣機-ES-K10DF-香檳金-9713719.html",
      "specs": [
        "洗衣機：SAMPO聲寶 10公斤窄身變頻單槽直立式洗衣機ES- K10DF香檳金 含基本安裝+舊機回收",
        "容量：10kg",
        "形式：直立式",
        "變頻：有標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 13 推薦：SAMPO ES-K10DF 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 84,
      "budget": "value",
      "tags": [
        "容量：10kg",
        "直立",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-sampo-wm-md13",
      "rank": 14,
      "topPick": false,
      "brand": "SAMPO",
      "model": "WM-MD13",
      "name": "SAMPO WM-MD13",
      "image": "https://img.yec.tw/zp/MerchandiseImages/368c0016f2-Gd-10764300.jpg",
      "price": {
        "currency": "TWD",
        "amount": 11900,
        "converted": 11900,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/SAMPO聲寶-13KG-台灣製變頻直立式洗衣機-WM-MD13-10764300.html",
      "specs": [
        "洗衣機：SAMPO聲寶 13KG 台灣製變頻直立式洗衣機 WM-MD13 含基本安裝+舊機回收",
        "容量：13kg",
        "形式：直立式",
        "變頻：有標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 14 推薦：SAMPO WM-MD13 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 83,
      "budget": "value",
      "tags": [
        "容量：13kg",
        "直立",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-sampo-es-b13f",
      "rank": 15,
      "topPick": false,
      "brand": "SAMPO",
      "model": "ES-B13F",
      "name": "SAMPO ES-B13F",
      "image": "https://img.yec.tw/zp/MerchandiseImages/e9f3c9c0e6-Gd-9577871.jpg",
      "price": {
        "currency": "TWD",
        "amount": 8690,
        "converted": 8690,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/SAMPO聲寶-12-5KG-定頻直立式洗衣機-E-9577871.html",
      "specs": [
        "洗衣機：SAMPO聲寶 12.5公斤定頻直立式洗衣機ES-B13F珍珠白 含基本安裝+舊機回收",
        "容量：12.5kg",
        "形式：直立式",
        "變頻：通路頁未標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 15 推薦：SAMPO ES-B13F 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 82,
      "budget": "value",
      "tags": [
        "容量：12.5kg",
        "直立",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-whirlpool-wm10gn",
      "rank": 16,
      "topPick": false,
      "brand": "Whirlpool",
      "model": "WM10GN",
      "name": "Whirlpool WM10GN",
      "image": "https://img.yec.tw/cl/api/res/1.2/sE0R9nksglQbmhAnvyPpjA--/YXBwaWQ9eXR3bWFsbDtoPTYwMDtxPTEwMDt3PTYwMA--/https://img.yec.tw/fy/28ee/item/p0214264897808-item-b3bexf4x1000x1000-m.jpg",
      "price": {
        "currency": "TWD",
        "amount": 7290,
        "converted": 7290,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/gdsale.asp?gdid=p0214264897808",
      "specs": [
        "洗衣機：Whirlpool惠而浦 10公斤 直立洗衣機 WM10GN",
        "容量：10kg",
        "形式：直立式",
        "變頻：通路頁未標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 16 推薦：Whirlpool WM10GN 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 81,
      "budget": "value",
      "tags": [
        "容量：10kg",
        "直立",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-sanlux-sw-13dvgs",
      "rank": 17,
      "topPick": false,
      "brand": "SANLUX",
      "model": "SW-13DVGS",
      "name": "SANLUX SW-13DVGS",
      "image": "https://img.yec.tw/zp/MerchandiseImages/c5d1f1307a-Gd-7966505.jpg",
      "price": {
        "currency": "TWD",
        "amount": 17460,
        "converted": 17460,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/SANLUX台灣三洋-13KG-變頻直立式洗衣機--7966505.html",
      "specs": [
        "洗衣機：【SANLUX 台灣三洋】13KG 變頻直立式超音波洗衣機 SW-13DVGS (內外不鏽鋼)",
        "容量：13kg",
        "形式：直立式",
        "變頻：有標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 17 推薦：SANLUX SW-13DVGS 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 80,
      "budget": "mid",
      "tags": [
        "容量：13kg",
        "直立",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-heran-hwm-0691",
      "rank": 18,
      "topPick": false,
      "brand": "HERAN",
      "model": "HWM-0691",
      "name": "HERAN HWM-0691",
      "image": "https://img.yec.tw/zp/MerchandiseImages/ce1fcbec60-Gd-10425979.jpg",
      "price": {
        "currency": "TWD",
        "amount": 5391,
        "converted": 5391,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/HERAN禾聯-6-5KG全自動洗衣機-HWM-0691-10425979.html",
      "specs": [
        "洗衣機：HERAN禾聯 6.5KG全自動洗衣機 HWM-0691",
        "容量：6.5kg",
        "形式：依商品頁標示",
        "變頻：通路頁未標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 18 推薦：HERAN HWM-0691 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 79,
      "budget": "value",
      "tags": [
        "容量：6.5kg",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "2023"
    },
    {
      "id": "washer-samsung-ww12bb744dgbtw",
      "rank": 19,
      "topPick": false,
      "brand": "Samsung",
      "model": "WW12BB744DGBTW",
      "name": "Samsung WW12BB744DGBTW",
      "image": "https://img.yec.tw/zp/MerchandiseImages/fa8d62756d-Gd-11817109.jpg",
      "price": {
        "currency": "TWD",
        "amount": 25900,
        "converted": 25900,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/SAMSUNG三星-12KG-BESPOKE-AI-智慧蒸洗脫滾筒洗衣機-WW12BB744DGBT-11817109.html",
      "specs": [
        "洗衣機：SAMSUNG三星 12KG BESPOKE AI 智慧蒸洗脫滾筒洗衣機(WW12BB744DGBTW)",
        "容量：12kg",
        "形式：滾筒",
        "變頻：有標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 19 推薦：Samsung WW12BB744DGBTW 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 78,
      "budget": "mid",
      "tags": [
        "容量：12kg",
        "滾筒",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
    {
      "id": "washer-sanlux-sw-v15n",
      "rank": 20,
      "topPick": false,
      "brand": "SANLUX",
      "model": "SW-V15N",
      "name": "SANLUX SW-V15N",
      "image": "https://img.yec.tw/zp/MerchandiseImages/3CC52D084B-SP-22536433.jpg",
      "price": {
        "currency": "TWD",
        "amount": 17900,
        "converted": 17900,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/SANLUX台灣三洋-15KG-變頻直立式洗衣機-SW-V15N-12072774.html",
      "specs": [
        "洗衣機：【SANLUX台灣三洋】15KG 變頻直立式洗衣機 SW-V15N",
        "容量：15kg",
        "形式：直立式",
        "變頻：有標示",
        "溫水洗：依商品頁標示",
        "需確認進排水、插座、門向與安裝空間",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機與配件頁"
      ],
      "description": "涵蓋直立式與滾筒式洗衣機，依容量、變頻、省水、省電、品牌售後與安裝門檻排序。",
      "pros": [
        "直立與滾筒都有覆蓋，容易按空間挑選",
        "品牌售後與安裝服務透明度納入評估",
        "同型號以可信通路低價查核"
      ],
      "cons": [
        "需確認進排水與門片開啟方向",
        "滾筒式通常洗程較長且維修成本較高",
        "容量標示需對照棉被與家庭人口需求"
      ],
      "bestFor": "想依家庭人口、衣物量與空間限制挑選單洗功能的人。",
      "recommendation": "洗衣機第 20 推薦：SANLUX SW-V15N 以容量、可信通路價格與台灣售後風險綜合評估，適合納入比較。",
      "voltage": "110V 台灣通路；需確認進排水、專用插座、地面水平與安裝空間",
      "warranty": "依可信通路與品牌/供應商頁面標示；大型家電安裝與搬運費依通路方案",
      "score": 77,
      "budget": "mid",
      "tags": [
        "容量：15kg",
        "直立",
        "洗衣機",
        "洗衣家務"
      ],
      "category": "washer",
      "releaseDate": "找不到"
    },
  {
    "id": "washer-costco-sharp-es-asf10t",
    "category": "washer",
    "rank": 21,
    "budget": "value",
    "channel": "tw",
    "brand": "SHARP",
    "model": "ES-ASF10T",
    "name": "10公斤 無孔槽變頻洗衣機",
    "price": {
      "currency": "TWD",
      "amount": 12199,
      "converted": 12199,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/hca/hbf/70210285142046.webp",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Large-Appliances/Washers-Dryers/SHARP-10-kg-Top-Load-Washer-ES-ASF10T/p/122954",
    "buyLabel": "Costco 好市多",
    "specs": [
      "10 公斤洗衣容量",
      "直立式",
      "無孔槽",
      "變頻",
      "Costco 評價 4.7 / 223 則"
    ],
    "description": "10 公斤直立式無孔槽機型，Costco 評論量高，適合小家庭或租屋族升級單洗洗衣機。",
    "pros": [
      "Costco 223 則評論、4.7 分",
      "直立式安裝門檻較低"
    ],
    "cons": [
      "不是洗脫烘",
      "仍需確認進排水、插座與地面水平"
    ],
    "bestFor": "需要單洗洗衣機、預算有限且想走 Costco 通路的人。",
    "recommendation": "好市多補充推薦：ES-ASF10T 評價量足，適合作為 Costco 單洗洗衣機的 CP 值候選。",
    "score": 86,
    "voltage": "110V 台灣通路；需確認進排水、插座與地面水平",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "10公斤",
      "直立式"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "washer-costco-samsung-wa80f13s5ltw",
    "category": "washer",
    "rank": 22,
    "budget": "mid",
    "channel": "tw",
    "brand": "Samsung",
    "model": "WA80F13S5LTW",
    "name": "13 公斤 AI 智慧控制直立洗衣機",
    "price": {
      "currency": "TWD",
      "amount": 15999,
      "converted": 15999,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h82/h09/384281302630430.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Large-Appliances/Washers-Dryers/Washer-Size-10-15-kg/Samsung-13-kg-AI-Top-Load-Washer-WA80F13S5LTW/p/155133",
    "buyLabel": "Costco 好市多",
    "specs": [
      "13 公斤",
      "直立式",
      "AI 智慧控制",
      "馬達 10 年保固",
      "Costco 評價 4.6 / 28 則"
    ],
    "description": "Costco 評價不錯的洗衣機候選，依容量、形式、保固與安裝條件補進比較。",
    "pros": [
      "容量與品牌售後清楚",
      "好市多大型家電通路可比較"
    ],
    "cons": [
      "搬運、門向與進排水需確認",
      "不含烘衣功能"
    ],
    "bestFor": "需要單洗洗衣機並重視安裝保固的人",
    "recommendation": "好市多補充推薦：13 公斤 AI 智慧控制直立洗衣機 評價不錯，補進洗衣機分類作為 Costco 候選比較。",
    "score": 87,
    "voltage": "依 Costco 商品頁與安裝條件確認；大型家電需確認插座、進排水與搬運",
    "warranty": "依 Costco 好市多商品頁，全機 1 年、馬達 10 年標示",
    "tags": [
      "Costco",
      "好市多",
      "13kg",
      "直立式",
      "AI"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "washer-costco-panasonic-na-v120hw",
    "category": "washer",
    "rank": 23,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "NA-V120HW",
    "name": "12 公斤洗脫變頻滾筒洗衣機",
    "price": {
      "currency": "TWD",
      "amount": 20119,
      "converted": 20119,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/he0/h00/103644752314398.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Large-Appliances/Washers-Dryers/Panasonic-12-kg-Inverter-Front-Load-Washer-NA-V120HW/p/136412",
    "buyLabel": "Costco 好市多",
    "specs": [
      "12 公斤",
      "滾筒式",
      "110V / 60Hz",
      "金級省水標章",
      "Costco 評價 4.5 / 31 則"
    ],
    "description": "Costco 評價不錯的洗衣機候選，依容量、形式、保固與安裝條件補進比較。",
    "pros": [
      "容量與品牌售後清楚",
      "好市多大型家電通路可比較"
    ],
    "cons": [
      "搬運、門向與進排水需確認",
      "不含烘衣功能"
    ],
    "bestFor": "需要單洗洗衣機並重視安裝保固的人",
    "recommendation": "好市多補充推薦：12 公斤洗脫變頻滾筒洗衣機 評價不錯，補進洗衣機分類作為 Costco 候選比較。",
    "score": 86,
    "voltage": "110V / 60Hz",
    "warranty": "依 Costco 好市多商品頁，全機 1 年、馬達 5 年標示",
    "tags": [
      "Costco",
      "好市多",
      "12kg",
      "滾筒式",
      "省水"
    ],
    "releaseDate": "找不到"
  }
  ]);
})();
