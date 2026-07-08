(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("dryer",   [
    {
      "id": "dryer-panasonic-nh-80rz-w",
      "rank": 1,
      "topPick": true,
      "brand": "Panasonic",
      "model": "NH-80RZ-W",
      "name": "Panasonic NH-80RZ-W",
      "image": "https://img.yec.tw/zp/MerchandiseImages/D5FBA0861F-SP-22704432.jpg",
      "price": {
        "currency": "TWD",
        "amount": 10000,
        "converted": 10000,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic國際牌8公斤乾衣機NH-80RZ-W-12105618.html",
      "specs": [
        "烘衣機：Panasonic國際牌8公斤乾衣機NH-80RZ-W",
        "容量：8kg",
        "乾衣方式：依商品頁標示",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "綜合推薦：Panasonic NH-80RZ-W 在烘乾效率、可信通路價格、品牌售後與安裝條件之間最均衡。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 96,
      "budget": "value",
      "tags": [
        "容量：8kg",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-panasonic-nh-70g-l",
      "rank": 2,
      "topPick": false,
      "brand": "Panasonic",
      "model": "NH-70G-L",
      "name": "Panasonic NH-70G-L",
      "image": "https://img.yec.tw/zp/MerchandiseImages/78E50A47B2-Gd-9194341.jpg",
      "price": {
        "currency": "TWD",
        "amount": 8590,
        "converted": 8590,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic國際牌-7公斤-落地型乾衣機-NH-70G-9194341.html",
      "specs": [
        "烘衣機：Panasonic國際牌 7公斤 落地型乾衣機 NH-70G-L",
        "容量：7kg",
        "乾衣方式：電熱",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 2 推薦：Panasonic NH-70G-L 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 95,
      "budget": "value",
      "tags": [
        "容量：7kg",
        "電熱",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-whirlpool-8twgd5010pw",
      "rank": 3,
      "topPick": false,
      "brand": "Whirlpool",
      "model": "8TWGD5010PW",
      "name": "Whirlpool 8TWGD5010PW",
      "image": "https://img.yec.tw/zp/MerchandiseImages/p0214264894319-item-d588xf4x1000x1000-m.jpg",
      "price": {
        "currency": "TWD",
        "amount": 23590,
        "converted": 23590,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/gdsale.asp?gdid=p0214264894319",
      "specs": [
        "烘衣機：Whirlpool惠而浦 12公斤 快烘瓦斯型乾衣機 8TWGD5010PW 含基本安裝",
        "容量：12kg",
        "乾衣方式：瓦斯",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 3 推薦：Whirlpool 8TWGD5010PW 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 94,
      "budget": "mid",
      "tags": [
        "容量：12kg",
        "瓦斯",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-whirlpool-8twgd5050pw",
      "rank": 4,
      "topPick": false,
      "brand": "Whirlpool",
      "model": "8TWGD5050PW",
      "name": "Whirlpool 8TWGD5050PW",
      "image": "https://img.yec.tw/zp/MerchandiseImages/p0214264894336-item-8fcdxf4x1000x1000-m.jpg",
      "price": {
        "currency": "TWD",
        "amount": 24590,
        "converted": 24590,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/gdsale.asp?gdid=p0214264894336",
      "specs": [
        "烘衣機：Whirlpool惠而浦 12公斤 快烘瓦斯型乾衣機 8TWGD5050PW 含基本安裝",
        "容量：12kg",
        "乾衣方式：瓦斯",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 4 推薦：Whirlpool 8TWGD5050PW 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 93,
      "budget": "mid",
      "tags": [
        "容量：12kg",
        "瓦斯",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-whirlpool-8twgd8620hw",
      "rank": 5,
      "topPick": false,
      "brand": "Whirlpool",
      "model": "8TWGD8620HW",
      "name": "Whirlpool 8TWGD8620HW",
      "image": "https://img.yec.tw/zp/MerchandiseImages/p0214264895249-item-61b0xf4x1000x1000-m.jpg",
      "price": {
        "currency": "TWD",
        "amount": 39900,
        "converted": 39900,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/gdsale.asp?gdid=p0214264895249",
      "specs": [
        "烘衣機：Whirlpool惠而浦 16公斤 快烘瓦斯型滾筒乾衣機 8TWGD8620HW 含基本安裝",
        "容量：16kg",
        "乾衣方式：瓦斯",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 5 推薦：Whirlpool 8TWGD8620HW 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 92,
      "budget": "mid",
      "tags": [
        "容量：16kg",
        "瓦斯",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-whirlpool-8twgd5620hw",
      "rank": 6,
      "topPick": false,
      "brand": "Whirlpool",
      "model": "8TWGD5620HW",
      "name": "Whirlpool 8TWGD5620HW",
      "image": "https://img.yec.tw/zp/MerchandiseImages/7F9FE7215B-SP-21903027.jpg",
      "price": {
        "currency": "TWD",
        "amount": 32850,
        "converted": 32850,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/Whirlpool-惠而浦16公斤快烘瓦斯型滾筒乾衣機8TWGD5620HW-桶裝瓦斯-11953164.html",
      "specs": [
        "烘衣機：Whirlpool 惠而浦16公斤快烘瓦斯型滾筒乾衣機8TWGD5620HW(桶裝瓦斯)",
        "容量：16kg",
        "乾衣方式：瓦斯",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 6 推薦：Whirlpool 8TWGD5620HW 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 91,
      "budget": "mid",
      "tags": [
        "容量：16kg",
        "瓦斯",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-sanlux-sd-66u8a",
      "rank": 7,
      "topPick": false,
      "brand": "SANLUX",
      "model": "SD-66U8A",
      "name": "SANLUX SD-66U8A",
      "image": "https://img.yec.tw/zp/MerchandiseImages/3520BAB421-Product-24570513.jpg",
      "price": {
        "currency": "TWD",
        "amount": 7120,
        "converted": 7120,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/SANLUX台灣三洋-5KG-乾衣機-SD-66U-8734078.html",
      "specs": [
        "烘衣機：【SANLUX 台灣三洋】5KG PTC加熱式乾衣機 SD-66U8A",
        "容量：5kg",
        "乾衣方式：依商品頁標示",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 7 推薦：SANLUX SD-66U8A 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 90,
      "budget": "value",
      "tags": [
        "容量：5kg",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-sanlux-sd-85ua",
      "rank": 8,
      "topPick": false,
      "brand": "SANLUX",
      "model": "SD-85UA",
      "name": "SANLUX SD-85UA",
      "image": "https://img.yec.tw/zp/MerchandiseImages/28C5B9A18A-Product-24570512.jpg",
      "price": {
        "currency": "TWD",
        "amount": 8800,
        "converted": 8800,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/SANLUX台灣三洋-7-5KG-乾衣機-SD-8-8734077.html",
      "specs": [
        "烘衣機：【SANLUX 台灣三洋】7.5KG PTC加熱式乾衣機 SD-85UA",
        "容量：7.5kg",
        "乾衣方式：依商品頁標示",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 8 推薦：SANLUX SD-85UA 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 89,
      "budget": "value",
      "tags": [
        "容量：7.5kg",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-sanlux-sd-88u",
      "rank": 9,
      "topPick": false,
      "brand": "SANLUX",
      "model": "SD-88U",
      "name": "SANLUX SD-88U",
      "image": "https://img.yec.tw/zp/MerchandiseImages/0c64f4b677-Gd-7010187.jpg",
      "price": {
        "currency": "TWD",
        "amount": 9270,
        "converted": 9270,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/SANLUX-台灣三洋-7-5公斤電子式乾衣機-S-7010187.html",
      "specs": [
        "烘衣機：【SANLUX 台灣三洋】7.5KG 電子式乾衣機 SD-88U",
        "容量：7.5kg",
        "乾衣方式：依商品頁標示",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 9 推薦：SANLUX SD-88U 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 88,
      "budget": "value",
      "tags": [
        "容量：7.5kg",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-panasonic-nh-vs100hp",
      "rank": 10,
      "topPick": false,
      "brand": "Panasonic",
      "model": "NH-VS100HP",
      "name": "Panasonic NH-VS100HP",
      "image": "https://img.yec.tw/zp/MerchandiseImages/C3051A6C25-SP-21442967.jpg",
      "price": {
        "currency": "TWD",
        "amount": 35900,
        "converted": 35900,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic-國際牌-10kg淨護完美乾衣機NH-VS100HP-含基本安裝-11874057.html",
      "specs": [
        "烘衣機：Panasonic 國際牌 10kg淨護完美乾衣機NH-VS100HP 含基本安裝",
        "容量：10kg",
        "乾衣方式：依商品頁標示",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 10 推薦：Panasonic NH-VS100HP 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 87,
      "budget": "mid",
      "tags": [
        "容量：10kg",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-whirlpool-8twgd6622hw",
      "rank": 11,
      "topPick": false,
      "brand": "Whirlpool",
      "model": "8TWGD6622HW",
      "name": "Whirlpool 8TWGD6622HW",
      "image": "https://img.yec.tw/zp/MerchandiseImages/p0214264895227-item-7edaxf4x1000x1000-m.jpg",
      "price": {
        "currency": "TWD",
        "amount": 41490,
        "converted": 41490,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/gdsale.asp?gdid=p0214264895227",
      "specs": [
        "烘衣機：Whirlpool惠而浦 16公斤 快烘瓦斯型滾筒乾衣機 8TWGD6622HW 含基本安裝",
        "容量：16kg",
        "乾衣方式：瓦斯",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 11 推薦：Whirlpool 8TWGD6622HW 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 86,
      "budget": "premium",
      "tags": [
        "容量：16kg",
        "瓦斯",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-sampo-sd-7c",
      "rank": 12,
      "topPick": false,
      "brand": "SAMPO",
      "model": "SD-7C",
      "name": "SAMPO SD-7C",
      "image": "https://img.yec.tw/zp/MerchandiseImages/afa2c287e6-Gd-9971420.jpg",
      "price": {
        "currency": "TWD",
        "amount": 8094,
        "converted": 8094,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/SAMPO聲寶-7公斤乾衣機-SD-7C-含基本安裝-運送到府-9971420.html",
      "specs": [
        "烘衣機：SAMPO聲寶 7公斤乾衣機SD-7C 含基本安裝+運送到府",
        "容量：7kg",
        "乾衣方式：依商品頁標示",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 12 推薦：SAMPO SD-7C 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 85,
      "budget": "value",
      "tags": [
        "容量：7kg",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-hitachi-td120xfvem",
      "rank": 13,
      "topPick": false,
      "brand": "HITACHI",
      "model": "TD120XFVEM",
      "name": "HITACHI TD120XFVEM",
      "image": "https://img.yec.tw/zp/MerchandiseImages/848381293C-SP-22144611.jpg",
      "price": {
        "currency": "TWD",
        "amount": 38900,
        "converted": 38900,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/HITACHI日立12公斤熱泵滾筒乾衣機TD120XFVEM-11999506.html",
      "specs": [
        "烘衣機：HITACHI日立12公斤熱泵滾筒乾衣機TD120XFVEM",
        "容量：12kg",
        "乾衣方式：熱泵",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 13 推薦：HITACHI TD120XFVEM 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 84,
      "budget": "mid",
      "tags": [
        "容量：12kg",
        "熱泵",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-panasonic-nh-l70g-l",
      "rank": 14,
      "topPick": false,
      "brand": "Panasonic",
      "model": "NH-L70G-L",
      "name": "Panasonic NH-L70G-L",
      "image": "https://img.yec.tw/zp/MerchandiseImages/c60aea63b8-Gd-10746995.jpg",
      "price": {
        "currency": "TWD",
        "amount": 9590,
        "converted": 9590,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic-國際牌-NH-L70G-L-架上型7kg乾衣機-10746995.html",
      "specs": [
        "烘衣機：Panasonic 國際牌 NH-L70G-L 架上型7kg乾衣機",
        "容量：7kg",
        "乾衣方式：電熱",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 14 推薦：Panasonic NH-L70G-L 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 83,
      "budget": "value",
      "tags": [
        "容量：7kg",
        "電熱",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-sampo-sd-7b",
      "rank": 15,
      "topPick": false,
      "brand": "SAMPO",
      "model": "SD-7B",
      "name": "SAMPO SD-7B",
      "image": "https://img.yec.tw/zp/MerchandiseImages/16ed8fac6f-Gd-9237299.jpg",
      "price": {
        "currency": "TWD",
        "amount": 8936,
        "converted": 8936,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/SAMPO聲寶-7公斤-乾衣機-SD-7B-9237299.html",
      "specs": [
        "烘衣機：SAMPO聲寶 7公斤乾衣機SD-7B 含基本安裝+運送到府",
        "容量：7kg",
        "乾衣方式：依商品頁標示",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 15 推薦：SAMPO SD-7B 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 82,
      "budget": "value",
      "tags": [
        "容量：7kg",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-tatung-taw-d60t",
      "rank": 16,
      "topPick": false,
      "brand": "TATUNG",
      "model": "TAW-D60T",
      "name": "TATUNG TAW-D60T",
      "image": "https://img.yec.tw/zp/MerchandiseImages/ACBE93D02C-SP-16513735.jpg",
      "price": {
        "currency": "TWD",
        "amount": 6800,
        "converted": 6800,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/TATUNG大同-6KG乾衣機-TAW-D60T-11014360.html",
      "specs": [
        "烘衣機：TATUNG大同 6KG乾衣機(TAW-D60T)",
        "容量：6kg",
        "乾衣方式：電熱",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 16 推薦：TATUNG TAW-D60T 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 81,
      "budget": "value",
      "tags": [
        "容量：6kg",
        "電熱",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-heran-hdm-0841",
      "rank": 17,
      "topPick": false,
      "brand": "HERAN",
      "model": "HDM-0841",
      "name": "HERAN HDM-0841",
      "image": "https://img.yec.tw/zp/MerchandiseImages/5C6B4B8DDF-SP-18495887.jpg",
      "price": {
        "currency": "TWD",
        "amount": 7990,
        "converted": 7990,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/HERAN禾聯-8KG-乾衣機-HDM-0841-11396347.html",
      "specs": [
        "烘衣機：HERAN禾聯 8KG 乾衣機 HDM-0841",
        "容量：8kg",
        "乾衣方式：依商品頁標示",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 17 推薦：HERAN HDM-0841 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 80,
      "budget": "value",
      "tags": [
        "容量：8kg",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-sanlux-asd-80ua",
      "rank": 18,
      "topPick": false,
      "brand": "SANLUX",
      "model": "ASD-80UA",
      "name": "SANLUX ASD-80UA",
      "image": "https://img.yec.tw/zp/MerchandiseImages/283C461BC5-SP-22670878.jpg",
      "price": {
        "currency": "TWD",
        "amount": 9982,
        "converted": 9982,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/SANLUX台灣三洋8公斤乾衣機ASD-80UA-12097903.html",
      "specs": [
        "烘衣機：SANLUX台灣三洋8公斤乾衣機ASD-80UA",
        "容量：8kg",
        "乾衣方式：依商品頁標示",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 18 推薦：SANLUX ASD-80UA 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 79,
      "budget": "value",
      "tags": [
        "容量：8kg",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-samsung-dv10db7440gb-dv10db7440gw",
      "rank": 19,
      "topPick": false,
      "brand": "Samsung",
      "model": "DV10DB7440GB/DV10DB7440GW",
      "name": "Samsung DV10DB7440GB/DV10DB7440GW",
      "image": "https://img.yec.tw/zp/MerchandiseImages/558A255AD3-SP-21351939.jpg",
      "price": {
        "currency": "TWD",
        "amount": 40900,
        "converted": 40900,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/SAMSUNG-三星-10KG-智慧熱泵乾衣機-DV10DB7440GB-DV10DB7440GW-11854932.html",
      "specs": [
        "烘衣機：SAMSUNG 三星 10KG 智慧熱泵乾衣機 DV10DB7440GB/DV10DB7440GW 黑白",
        "容量：10kg",
        "乾衣方式：熱泵",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 19 推薦：Samsung DV10DB7440GB/DV10DB7440GW 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 78,
      "budget": "premium",
      "tags": [
        "容量：10kg",
        "熱泵",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    },
    {
      "id": "dryer-bosch-wqb245a0tc",
      "rank": 20,
      "topPick": false,
      "brand": "Bosch",
      "model": "WQB245A0TC",
      "name": "Bosch WQB245A0TC",
      "image": "https://img.yec.tw/zp/MerchandiseImages/D0291F4A28-SP-20893325.jpg",
      "price": {
        "currency": "TWD",
        "amount": 49900,
        "converted": 49900,
        "confidence": "Yahoo 購物中心低價查核"
      },
      "channel": "tw",
      "buyLabel": "Yahoo購物",
      "buyUrl": "https://tw.buy.yahoo.com/gdsale/BOSCH博世-9公斤除皺清新熱泵式乾衣機-含基本安裝-220V拉電-WQB245A0TC-11757116.html",
      "specs": [
        "烘衣機：BOSCH博世 9公斤除皺清新熱泵式乾衣機 含基本安裝+220V拉電 (WQB245A0TC)",
        "容量：9kg",
        "乾衣方式：熱泵",
        "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
        "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
      ],
      "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
      "pros": [
        "獨立烘乾效率通常優於洗脫烘二合一",
        "熱泵、瓦斯與電熱不同需求可比較",
        "安裝條件與售後風險納入排序"
      ],
      "cons": [
        "需確認排風、排水、瓦斯或專用迴路",
        "疊放時需另查同品牌疊架與重量限制",
        "高階熱泵機價格明顯較高"
      ],
      "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
      "recommendation": "烘衣機第 20 推薦：Bosch WQB245A0TC 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
      "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
      "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
      "score": 77,
      "budget": "premium",
      "tags": [
        "容量：9kg",
        "熱泵",
        "烘衣機",
        "洗衣家務"
      ],
      "category": "dryer",
      "releaseDate": "找不到"
    }
  ]);
})();
