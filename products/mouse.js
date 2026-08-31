(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

    dashboard.registerProducts("mouse", [
        {
            "category": "mouse",
            "type": "standard",
            "budget": "premium",
            "channel": "tw",
            "installation": {
                "status": "not_stated",
                "note": "自行連接接收器、配對與軟體設定；不含到府安裝，另購無線充電設備不計入本體價格。"
            },
            "id": "mouse-logitech-g502-x-lightspeed",
            "brand": "Logitech",
            "model": "G502 X LIGHTSPEED",
            "name": "G502 X LIGHTSPEED 白色 910-006226 無線電競滑鼠",
            "rank": 28,
            "score": 84,
            "price": {
                "currency": "TWD",
                "amount": 3490,
                "converted": 3490,
                "basis": "retailer_current",
                "confidence": "2026-09-01 Chrome已查核：官店白色910-006226，原生variant網址重新直開仍還原白色；3490元並可加入購物車。"
            },
            "image": "https://store.logitech.tw/cdn/shop/products/g502-x-lightspeed-766213.jpg?v=1770259311",
            "buyUrl": "https://store.logitech.tw/products/g502xlightspeed?variant=40325534384151",
            "buyLabel": "羅技 Logi 台灣網路旗艦店（白色）",
            "specs": [
                "類型：一般平置多鍵電競滑鼠，白色910-006226；不是有線G502 X或RGB G502 X PLUS",
                "握型／慣用手：右手輪廓與拇指支撐，較大的本體建議先試握；可翻轉或移除DPI切換鍵",
                "連線：LIGHTSPEED無線USB-A接收器、USB-C充電；無Bluetooth",
                "感測器／解析度：HERO 25K，100–25,600 DPI；>400 IPS、>40G為官方G240測試条件",
                "回報率：所查當前官方完整規格未列數值Hz；不以『快68%』文案推定回報率或實際延遲",
                "按鍵／滾輪：13個可自訂控制輸入，LIGHTFORCE複合微動；可切換分段／超高速捲動及傾斜輸入",
                "供電／續航：內建充電電池／USB-C，持續動作最長140小時依使用而變；POWERPLAY另購，額定V/A查不到",
                "系統／軟體：Windows10或更新、macOS10.14或更新；G HUB設定進階功能與最多5組內建設定檔（預設2組）",
                "尺寸：高 41.1 x 寬 79.2 x 長 131.4 mm",
                "重量：約 102 g",
                "隨附配件：DPI切換鍵蓋、USB-C充電線、LIGHTSPEED USB-A接收器、USB延長線、使用者文件"
            ],
            "description": "保留G502右手拇指支撐與多控制輸入，改用LIGHTFORCE和USB-C充電。非PLUS版本沒有其RGB配置；多鍵與飛梭是重點，不是極輕FPS路線。",
            "pros": [
                "多個可自訂控制輸入",
                "可切換分段／飛梭滾輪",
                "USB-C充電與最長140小時動作續航"
            ],
            "cons": [
                "體積與重量高於60g級競技鼠",
                "沒有Bluetooth多裝置切換",
                "主鍵聲與側鍵位置需試握"
            ],
            "bestFor": "習慣右手掌握、需要多快捷操作及高速捲動的玩家。",
            "recommendation": "以手掌支撐、多键與滾輪為選擇理由；先確認拇指鍵不誤觸，不要與G502 HERO、有線X或X PLUS混比。",
            "voltage": "內建電池，USB-C充電或另購POWERPLAY；來源未列額定電壓電流，不推定V/A。",
            "warranty": "台灣羅技官方2年有限硬體保固；保留購買憑證。",
            "tags": [
                "電競",
                "多鍵",
                "飛梭滾輪",
                "台灣公司貨"
            ],
            "releaseDate": "2022-10-05",
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
                "checkedAt": "2026-09-01",
                "note": "已查完整SKU及白色G502 X LIGHTSPEED價格歷史。飛比白色原頁只有有線X和PLUS；Pangoly有2025-11-20 USD84.99，但屬910-006187且未還原同規格新品原通路，不套白色6226。BigGo黑色2860有促銷條件並非白色；台灣官店及燦坤9/1實售3490只是現價，不自行推史低。"
            },
            "issueResearch": {
                "status": "no_common_issue",
                "checkedAt": "2026-09-01",
                "summary": "截至查核日，查無達門檻的集中負評／災情",
                "issues": [],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "targetHost": "reddit.com",
                        "query": "site:reddit.com \"G502 X LIGHTSPEED\" problem",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22G502%20X%20LIGHTSPEED%22%20problem"
                    },
                    {
                        "platform": "PTT",
                        "targetHost": "ptt.cc",
                        "query": "site:ptt.cc \"G502 X LIGHTSPEED\" (問題 OR 故障 OR 連點)",
                        "queryUrl": "https://www.google.com/search?q=site%3Aptt.cc%20%22G502%20X%20LIGHTSPEED%22%20(%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E9%80%A3%E9%BB%9E)"
                    }
                ]
            }
        },
        {
            "category": "mouse",
            "type": "standard",
            "budget": "premium",
            "channel": "tw",
            "installation": {
                "status": "not_stated",
                "note": "自行連接接收器、配對與軟體設定；不含到府安裝，另購無線充電設備不計入本體價格。"
            },
            "id": "mouse-logitech-pro-x-superlight-2",
            "brand": "Logitech",
            "model": "910-006641",
            "name": "PRO X SUPERLIGHT 2 白色 910-006641 無線電競滑鼠",
            "rank": 2,
            "score": 92,
            "price": {
                "currency": "TWD",
                "amount": 3690,
                "converted": 3690,
                "basis": "retailer_current",
                "confidence": "2026-09-01 Chrome已查核：官店白色910-006641，原生variant網址重新直開仍還原普通SUPERLIGHT2白色；3690元可加入購物車，非DEX/SE/2C。"
            },
            "image": "https://store.logitech.tw/cdn/shop/products/pro-x-superlight-2-463287.jpg?v=1770258821",
            "buyUrl": "https://store.logitech.tw/products/superlight2?variant=40632667013143",
            "buyLabel": "羅技 Logi 台灣網路旗艦店（白色）",
            "specs": [
                "類型：一般平置輕量競技滑鼠，白色910-006641，普通第二代；非DEX、SE或COMPACT",
                "握型／慣用手：對稱本體搭左側鍵，右手使用側鍵較方便；偏抓握／指握仍須依手掌大小試握",
                "連線：LIGHTSPEED無線接收器／USB-C充電資料線，不具Bluetooth",
                "感測器／解析度：HERO 2，當前官規100–44,000 DPI、最大>888 IPS／>88G；進階功能需G HUB",
                "回報率：最高LIGHTSPEED 8000Hz需配合韌體與G HUB；高回報率需遊戲／主機支援，不等同實際延遲保證",
                "按鍵／滾輪：5鍵、LIGHTFORCE混合光學機械微動、一般捲動；不提供辦公飛梭與多裝置快捷",
                "供電／續航：內建充電電池、USB-C，持續動作最長95小時依使用而變；額定V/A查不到",
                "系統／軟體：當前所查官方規格明示Windows10以上／USB2.0；G HUB進階設定，不從其他款推定完整macOS條件",
                "尺寸：高 40 x 寬 63.5 x 長 125 mm",
                "重量：60 g",
                "隨附配件：LIGHTSPEED接收器、USB-A轉USB-C線、接收器延長轉接器、握把貼布、選用PTFE底蓋與文件"
            ],
            "description": "60g普通SUPERLIGHT第二代著重競技移動與簡潔按鍵配置。搭配HERO2和可更新的高回報率，但握型與軟體穩定性比單看DPI更重要。",
            "pros": [
                "60g本體適合頻繁抬鼠",
                "標準輪廓與五鍵配置清楚",
                "HERO2及USB-C充電"
            ],
            "cons": [
                "只有五鍵且沒有Bluetooth",
                "LIGHTFORCE手感偏硬響，需試按",
                "Reddit有多位斷連案例，仍缺第二原站同症狀達本研究門檻"
            ],
            "bestFor": "以FPS為主、想要60g對稱輪廓且不需辦公多裝置功能的右手玩家。",
            "recommendation": "列為電競推薦；先試握與試按，收到後測試自己的USB環境。已核台灣白色追蹤區間低價2990元可作等待促銷參考，不宣稱全網永久最低。",
            "voltage": "內建電池／USB-C充電；所查官方頁未列額定V/A，不由接頭外型推定。",
            "warranty": "台灣羅技官方2年有限硬體保固；保留購買憑證。",
            "tags": [
                "電競推薦",
                "電競",
                "60g",
                "HERO2",
                "台灣公司貨"
            ],
            "releaseDate": "2023-09-18",
            "historicalLow": {
                "status": "found",
                "amount": 2990,
                "currency": "TWD",
                "converted": 2990,
                "sourceUrl": "https://biggo.com.tw/s/PRO%20X%20SUPERLIGHT%202%20%E7%99%BD",
                "sourceTitle": "BigGo — PRO X SUPERLIGHT 2 白色 Yahoo 90天價格歷史",
                "evidenceSnippet": "Chrome已核白色普通SUPERLIGHT2 Yahoo10743596追蹤：2026-07-30 05:00為2990元，區間低2990高3690；原Yahoo白色新品單品與台灣官方6641映射相符。",
                "sourceKind": "price_history",
                "confidence": "high",
                "checkedAt": "2026-08-31",
                "note": "僅保證本次可追蹤90天區間低價，不是無限期全網最低；不含DEX、SE、2C、顏色以白色為準。現價3690高於已查區間低價，可等同規促銷。"
            },
            "issueResearch": {
                "status": "no_common_issue",
                "checkedAt": "2026-09-01",
                "summary": "截至查核日，查無達門檻的集中負評／災情",
                "issues": [],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "targetHost": "reddit.com",
                        "query": "\"910-006641\" site:reddit.com",
                        "queryUrl": "https://www.google.com/search?q=%22910-006641%22%20site%3Areddit.com"
                    },
                    {
                        "platform": "Mobile01",
                        "targetHost": "mobile01.com",
                        "query": "\"910-006641\" site:mobile01.com",
                        "queryUrl": "https://www.google.com/search?q=%22910-006641%22%20site%3Amobile01.com"
                    },
                    {
                        "platform": "PTT",
                        "targetHost": "ptt.cc",
                        "query": "\"910-006641\" site:ptt.cc",
                        "queryUrl": "https://www.google.com/search?q=%22910-006641%22%20site%3Aptt.cc"
                    }
                ]
            }
        },
        {
            "category": "mouse",
            "type": "standard",
            "budget": "premium",
            "channel": "tw",
            "installation": {
                "status": "not_stated",
                "note": "自行連接接收器、配對與軟體設定；不含到府安裝，另購無線充電設備不計入本體價格。"
            },
            "id": "mouse-logitech-pro-x-superlight-2-dex",
            "brand": "Logitech",
            "model": "910-007360",
            "name": "PRO X SUPERLIGHT 2 DEX 黑色 910-007360 無線電競滑鼠",
            "rank": 3,
            "score": 91,
            "price": {
                "currency": "TWD",
                "amount": 3990,
                "converted": 3990,
                "basis": "retailer_current",
                "confidence": "2026-09-01 Chrome已查核：官店獨立商品頁預設黑色910-007360，3990元可加入購物車；並由官方黑色產品頁連結對應此商品。"
            },
            "image": "https://store.logitech.tw/cdn/shop/files/High_Resolution_JPG-PROXSUPERLIGHT2DEXTOPBlack.jpg?v=1770258964",
            "buyUrl": "https://store.logitech.tw/products/superlight2dex",
            "buyLabel": "羅技 Logi 台灣網路旗艦店（黑色）",
            "specs": [
                "類型：一般平置右手非對稱競技滑鼠，黑色910-007360；DEX與普通SUPERLIGHT2為不同握形版本",
                "握型／慣用手：右手專用非對稱支撐，背部較高；掌握或抓握需依手掌大小試握",
                "連線：LIGHTSPEED無線與USB-A轉USB-C充電／資料線，不具Bluetooth",
                "感測器／解析度：HERO 2，100–44,000 DPI、>888 IPS／>88G依官方G640測試条件；不把官網誤譯公克當加速度單位",
                "回報率：最高無線8000Hz、有線1000Hz，進階功能需G HUB；不採官網8k旁錯誤的時間換算",
                "按鍵／滾輪：5鍵、LIGHTFORCE混合微動，一般捲動；非多快捷辦公鼠",
                "供電／續航：USB-C充電、內建電池，持續動作最長95小時依條件而異；額定V/A查不到",
                "系統／軟體：Windows10以上、macOS12以上及USB2.0，G HUB進階設定與內建記憶體",
                "尺寸：高 43.9 x 寬 67.7 x 長 125.8 mm",
                "重量：60 g",
                "隨附配件：LIGHTSPEED接收器、USB-A轉USB-C充電資料線、接收器延長轉接器、PTFE腳墊POWERPLAY底蓋、握把貼布、清潔布、文件"
            ],
            "description": "把60g與HERO2放進右手非對稱殼型，比普通SUPERLIGHT2更強調掌側支撐。兩款適合的手型不同，不應因同樣60g就當作顏色變體。",
            "pros": [
                "60g右手支撐輪廓",
                "無線8k與有線1k條件明確",
                "官方明示Windows與macOS相容"
            ],
            "cons": [
                "非左右手通用外型",
                "背部高度與側面支撐需試握",
                "少量按鍵機構與追蹤案例需留意，未達跨站同症狀六位"
            ],
            "bestFor": "希望保留輕量競技配置、但普通SUPERLIGHT輪廓支撐不足的右手玩家。",
            "recommendation": "與普通SUPERLIGHT2實際試握後再選；不要把8k視為所有PC遊戲都更順，若有卡頓可依官方軟體降低回報率排查。",
            "voltage": "內建充電電池、USB-C充電資料線；所查官方頁未列額定V/A。",
            "warranty": "台灣羅技官方2年有限硬體保固；保留購買憑證。",
            "tags": [
                "電競",
                "右手支撐",
                "60g",
                "台灣公司貨"
            ],
            "releaseDate": "2024-09-24",
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
                "checkedAt": "2026-09-01",
                "note": "已查PRO X SUPERLIGHT 2 DEX黑色價格與跨站歷史。BigGo本次可讀3990與酷澎3590等當期價，沒有可復現日期低點；韓國Alltimeprice列黑7360的159000韓元，但6/22日期只出現在AI摘要，完整歷史在App且未核原零售會員條件，不採作可靠史低。保留價格追蹤候選，不用3990現價補成史低。"
            },
            "issueResearch": {
                "status": "no_common_issue",
                "checkedAt": "2026-09-01",
                "summary": "截至查核日，查無達門檻的集中負評／災情",
                "issues": [],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "targetHost": "reddit.com",
                        "query": "site:reddit.com \"910-007360\"",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22910-007360%22"
                    },
                    {
                        "platform": "PTT",
                        "targetHost": "ptt.cc",
                        "query": "site:ptt.cc \"910-007360\"",
                        "queryUrl": "https://www.google.com/search?q=site%3Aptt.cc%20%22910-007360%22"
                    }
                ]
            }
        },
        {
            "category": "mouse",
            "type": "standard",
            "budget": "premium",
            "channel": "tw",
            "installation": {
                "status": "not_stated",
                "note": "自行連接接收器、配對與軟體設定；不含到府安裝，另購無線充電設備不計入本體價格。"
            },
            "id": "mouse-razer-basilisk-v3-pro-35k",
            "brand": "Razer",
            "model": "RZ01-05240100-R3A1",
            "name": "Basilisk V3 Pro 35K 黑色 RZ01-05240100-R3A1 無線電競滑鼠",
            "rank": 6,
            "score": 89,
            "price": {
                "currency": "TWD",
                "amount": 5690,
                "converted": 5690,
                "basis": "retailer_current",
                "confidence": "2026-09-01 Chrome已查核：Razer台灣官站exact黑色SKU獨立URL，單滑鼠5690元可加入購物車；非Dock/Puck套裝。INPAD4290需選色且URL不還原、新亞4290缺貨，未用作此筆可直接購買版本。"
            },
            "image": "https://assets3.razerzone.com/e_Wgt84QExereiAe4BgOEYV8IVs=/1500x1000/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh8b%2Fhf1%2F9821719822366%2F241001-basilisk-v3-pro-35k-1500x1000-1.jpg",
            "buyUrl": "https://www.razer.com/tw-zh/gaming-mice/razer-basilisk-v3-pro-35k/RZ01-05240100-R3A1",
            "buyLabel": "Razer 台灣官方商城（黑色單品）",
            "specs": [
                "類型：一般平置多鍵右手電競滑鼠，35K黑色RZ01-05240100-R3A1；不是舊30K Pro或Phantom版",
                "握型／慣用手：右手專用人體工學輪廓與拇指支撐，較大的本體應先試握",
                "連線：HyperSpeed 2.4GHz無線／Bluetooth／有線三模式",
                "感測器／解析度：第2代Focus Pro 35K光學、最高35,000 DPI、750 IPS、70G",
                "回報率：標準1000Hz；8000Hz需另購HyperPolling Wireless Dongle或Mouse Dock Pro；不把輪詢率等同端到端延遲",
                "按鍵／滾輪：11個可編程按鍵、第3代光學微動；4向HyperScroll電子切換分段／自由捲動，Synapse可自訂智慧捲動",
                "供電／續航：USB-C充電；1000Hz動作最長140小時、8k最長28小時、Bluetooth最長210小時，條件不同不能混算；額定V/A查不到",
                "系統／軟體：Synapse進階自訂与5個內建設定檔；所查產品頁未列完整OS最低版本，Bluetooth不保證所有系統的按鍵映射功能",
                "尺寸：長 130 x 寬 75.1 x 高 42.5 mm",
                "重量：112 g（不含傳輸器和纜線）",
                "隨附配件：HyperSpeed Wireless Dongle、USB傳輸轉接器、USB-A轉USB-C線、重要產品資訊指南；Mouse Dock Pro與Wireless Charging Puck均另購"
            ],
            "description": "三模連線、多鍵與可自訂飛梭滾輪兼顧遊戲及長文件操作。這筆是35K黑色單滑鼠，8k接收器與無線充電配件都不能默認包含。",
            "pros": [
                "三模連線與多鍵自訂",
                "4向智慧切換HyperScroll",
                "35K感測器與可設定RGB"
            ],
            "cons": [
                "112g不走極輕競技路線",
                "8k及無線充電需額外配件費用",
                "官站可還原版本價格較高，購前可核可信通路當期單色供貨"
            ],
            "bestFor": "兼顧遊戲、快捷鍵與長文件捲動，重視右手支撐而非極輕重量的使用者。",
            "recommendation": "先以標準接收器評估需求，再決定是否另購8k或充電座；保留35K版本與配件費用邊界，不拿舊30K Pro價格套用。",
            "voltage": "內建電池、USB-C充電；Dock Pro／充電Puck另購；所查官方頁未列額定V/A，不猜USB供電規格。",
            "warranty": "Razer台灣官方商城購買適用滑鼠2年有限保固，憑訂單向官方申請RMA；送修寄送及相關費用依條款，不宣稱台灣到府或免運維修。",
            "tags": [
                "電競",
                "三模",
                "多鍵",
                "飛梭滾輪",
                "台灣官方商城"
            ],
            "releaseDate": "2024-10-01",
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
                "checkedAt": "2026-09-01",
                "note": "已查35K Pro黑色完整SKU與BigGo、Kakaku。台灣比價混舊30K、35K、白色、套裝及折價券，不能把舊款3790套用；Kakaku完整黑SKU顯示8/2–8/30的26600日圓，但導向楽天商品集合，原成交店與新品/促銷條件未還原，且只是近30日資料。故保留海外價格參考，不宣稱可證本款歷史最低；5690只是台灣官店現價。"
            },
            "issueResearch": {
                "status": "no_common_issue",
                "checkedAt": "2026-09-01",
                "summary": "截至查核日，查無達門檻的集中負評／災情",
                "issues": [],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "targetHost": "reddit.com",
                        "query": "site:reddit.com \"RZ01-05240100-R3A1\"",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22RZ01-05240100-R3A1%22"
                    },
                    {
                        "platform": "Razer Insider",
                        "targetHost": "insider.razer.com",
                        "query": "site:insider.razer.com \"RZ01-05240100-R3A1\"",
                        "queryUrl": "https://www.google.com/search?q=site%3Ainsider.razer.com%20%22RZ01-05240100-R3A1%22"
                    }
                ]
            }
        },
        {
            "id": "mouse-logitech-g703-hero",
            "category": "mouse",
            "brand": "Logitech",
            "model": "910-005643",
            "name": "G703 HERO 黑色 910-005643 無線電競滑鼠",
            "type": "standard",
            "rank": 22,
            "score": 82,
            "budget": "premium",
            "channel": "tw",
            "price": {
                "currency": "TWD",
                "amount": 2490,
                "converted": 2490,
                "basis": "retailer_current",
                "confidence": "2026-09-01 Chrome重新開台灣羅技官店獨立商品頁，型號910-005643、2490元及可加入購物車，單一黑色不需再選版本。Chrome直接開同頁原圖確認1000x787及黑色本體；不採比價搜尋快取的2290、2176或個人拍賣。"
            },
            "installation": {
                "status": "not_stated",
                "note": "需接USB接收器或資料線；POWERPLAY另購，不含安裝服務。"
            },
            "image": "https://store.logitech.tw/cdn/shop/products/g703-753065.jpg?v=1748793885",
            "buyUrl": "https://store.logitech.tw/products/g703",
            "buyLabel": "羅技 Logi 台灣網路旗艦店",
            "specs": [
                "類型：一般平置電競滑鼠，G703 HERO黑色910-005643，非前代3366版",
                "握型／慣用手：右手人體工學外型，橡膠側握；適合掌握仍須依手長試握",
                "連線：LIGHTSPEED無線及USB有線；無藍牙",
                "感測器／解析度：HERO 25K，100–25600 DPI，最高加速度>40 G、最大速度>400 IPS；官方測試用G240鼠墊",
                "回報率：有線USB與LIGHTSPEED無線皆1000 Hz（1 ms）；標示回報間隔不代表端到端實測延遲",
                "按鍵／滾輪：6個可程式化按鈕、機械按鍵張力系統、LIGHTSYNC RGB；滾輪細項未完整標示",
                "供電／續航：內建充電電池、USB充電；關燈最長60小時／持續RGB最長35小時，額定電壓與電流未標示",
                "系統／軟體：Windows 7以上、macOS 10.11以上、ChromeOS及USB埠；G HUB下載需網際網路，進階功能以軟體支援為準；POWERPLAY另購",
                "尺寸：高 43 x 寬 68 x 長 124 mm",
                "重量：95 g（不含選配配重）",
                "隨附配件：滑鼠、LIGHTSPEED接收器、1.8m充電／資料線、接收器延長轉接器、10g配重、說明文件"
            ],
            "description": "保留右手高背與橡膠側握的無線HERO款，重視掌心支撐與可選配重。不是輕量FPS旗艦，與前代非HERO G703須分別核對。",
            "pros": [
                "右手高背與橡膠側握",
                "1000Hz有線／無線雙用",
                "可搭另購POWERPLAY"
            ],
            "cons": [
                "95g較輕量鼠重",
                "無Bluetooth",
                "RGB開啟會縮短續航"
            ],
            "bestFor": "偏好右手掌握支撐與傳統重量、需有線備援的遊戲使用者。",
            "recommendation": "先試握高背與側握，若追求極輕重量改比較60g級；POWERPLAY成本及橡膠長期磨耗另考慮。",
            "voltage": "內建充電電池、USB充電；關燈最長60小時／持續RGB最長35小時，額定電壓與電流未標示",
            "warranty": "台灣羅技官店公司貨2年有限硬體保固",
            "tags": [
                "電競",
                "右手工學",
                "HERO25K",
                "台灣公司貨"
            ],
            "releaseDate": "2019-06",
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
                "checkedAt": "2026-09-01",
                "note": "兩個完整SKU查詢均無结果，擴充HERO名查詢並人工讀原比價頁。2490僅官方目前售價，不由現價推定史低。美加舊優惠及最初非HERO G703不跨版本採用。 原頁混列2490、2290、2176等當期或舊快取通路價，沒有可重現日期史低；PChome/myfone/三井出站連結讀取失敗，不能採為查核時現價。 原頁2490及漲價500未附可核歷史日期，不逆推1990為史低；1890/1900個人拍賣、腳貼及接收器均排除。 原頁是日本G703h區域版本，不能跨用到台灣910-005643；不拿日幣線圖補台灣SKU史低。"
            },
            "issueResearch": {
                "status": "no_common_issue",
                "checkedAt": "2026-09-01",
                "summary": "截至查核日，查無達門檻的集中負評／災情",
                "issues": [],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "targetHost": "reddit.com",
                        "query": "\"910-005643\" site:reddit.com",
                        "queryUrl": "https://www.google.com/search?q=%22910-005643%22%20site%3Areddit.com"
                    },
                    {
                        "platform": "Mobile01",
                        "targetHost": "mobile01.com",
                        "query": "\"910-005643\" site:mobile01.com",
                        "queryUrl": "https://www.google.com/search?q=%22910-005643%22%20site%3Amobile01.com"
                    }
                ]
            }
        },
        {
            "id": "mouse-razer-deathadder-v4-pro",
            "category": "mouse",
            "rank": 5,
            "budget": "premium",
            "channel": "tw",
            "brand": "Razer",
            "model": "RZ01-05330100-R3A1",
            "name": "DeathAdder V4 Pro 黑色",
            "type": "standard",
            "score": 92,
            "price": {
                "currency": "TWD",
                "amount": 4990,
                "converted": 4990,
                "basis": "retailer_current",
                "confidence": "2026-09-01 Chrome重新直接開啟名人3C獨立商品頁，畫面確認黑色RZ01-05330100-R3A1、4990、促銷至9/30及購買按鈕；不需重選顏色。原INPAD12802重開會清掉黑色選取，改名人3C還原選定版本。三井MAR101黑色6290非此次可驗低價；PChome DCBF01-A900IZY50黑白禁選、有貨通知，排除現售連結。图片保留已Chrome視覺確認黑色本體的INPAD500px。名人頁框DOM落在左欄，採整頁Chrome截圖人工確認售價與SKU，不聲稱從錯誤frame擷取。"
            },
            "installation": {
                "status": "not_stated",
                "note": "桌面USB接收器／線材接電腦；不含桌機、作業系統設定或另購配件費用。"
            },
            "image": "https://www.inpad.com.tw/data/goods/gallery/202508/1754894482151200184.jpg",
            "buyUrl": "https://www.mren.com.tw/product/show.php?id=040471802140",
            "buyLabel": "名人3C 台灣新品通路",
            "specs": [
                "類型：一般平置電競滑鼠，DeathAdder V4 Pro 黑色；完整SKU RZ01-05330100-R3A1",
                "握型／慣用手：右手人體工學",
                "連線：HyperSpeed Wireless Gen-2 2.4GHz／USB有線，無藍牙",
                "感測器／解析度：Focus Pro 45K第二代，900 IPS／85 G",
                "回報率：有線與無線最高8000 Hz；回報週期不等於端到端延遲",
                "按鍵／滾輪：6鍵、第四代光學按鍵軸、24段光學滾輪，無傾斜",
                "供電／續航：USB-A to USB-C充電／內建電池，1000 Hz最長150小時或8000 Hz最長22小時；USB V/A未標示",
                "系統／軟體：進階設定需Synapse 4；單一內建設定檔、PTFE鼠腳、無RGB",
                "尺寸：長 128 x 寬 68 x 高 44 mm",
                "重量：56 g（黑色）",
                "隨附配件：已確認需專用無線接收器及USB-A轉USB-C連接；本次所讀頁未保存完整裝箱清單，不宣稱額外充電器隨附"
            ],
            "description": "右手人體工學外型与黑色56g配置，兼顧低重量與完整握持。第四代光學主鍵與24段光學滾輪是硬體重點；8000Hz的續航成本必須和150小時低回報模式分開比較。",
            "pros": [
                "黑色56g右手人體工學",
                "有線／無線最高8000Hz",
                "光學主鍵與24段光學滾輪"
            ],
            "cons": [
                "無Bluetooth",
                "8000Hz續航縮短至22小時",
                "已有跨站無線接收失聯回報，需留意退換貨"
            ],
            "bestFor": "偏好右手人體工學與低重量，願意維護韌體和測試接收穩定性的FPS玩家。",
            "recommendation": "以自己的握型與遊戲實測1000／8000Hz差異，接收器放近並驗證有線與無線穩定；保留台灣通路憑證，異常優先聯繫原廠。",
            "voltage": "USB-A to USB-C充電／內建電池，1000 Hz最長150小時或8000 Hz最長22小時；USB V/A未標示",
            "warranty": "名人3C台灣新品通路，商品頁明列2年保固；送修程序依通路及原廠公告",
            "tags": [
                "電競",
                "輕量化",
                "USB-C",
                "光學微動",
                "台灣公司貨"
            ],
            "releaseDate": "2025-07-10",
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
                "checkedAt": "2026-09-01",
                "note": "實際飛比清單有酷澎4056/PChome4618/myfone4990，逐點外連皆410、不能重現條件；未附可驗證歷史日期，非史低證明。 exact SKU與別名查詢後原頁兩次開啟失敗，不採搜尋數字當歷史證據。 Chrome原頁4990但黑白缺貨、95折券及P幣不可算無條件現價；無日期價格歷史。另硬派實際黑色4990僅現價，不推定史低。"
            },
            "issueResearch": {
                "status": "common_issue",
                "checkedAt": "2026-09-01",
                "summary": "DeathAdder V4 Pro 黑色有六位跨Reddit與Razer Insider的獨立使用者回報「無線接收器無法連線、間歇失去辨識或需反覆重插」。",
                "issues": [
                    {
                        "title": "無線接收器無法連線、間歇失去辨識或需反覆重插",
                        "detail": "逐頁覆核一般零售DeathAdder V4 Pro回報，採4位Insider及2位Reddit可辨識原作者。跨板AirSuch2770去重；三隻換貨也只一人。不同症狀（滾輪異音、回彈黏、USB慢充、完全死機、睡眠短暫凍結）不併入本問題；非零售電競隊版本及明示其他型號/白綠外觀候選不作本筆計數。此為使用者歷史回報，不能推定新批次必然故障或共同根因。 本批保守六位，網路自選回報不代表故障率或已證實共同根因。",
                        "reportCount": 6,
                        "sources": [
                            {
                                "platform": "Razer Insider",
                                "title": "DeathAdder V4 Pro 黑色 — Im_in_YourWalls 原始回報",
                                "url": "https://insider.razer.com/razer-support-45/deathadder-v4-pro-dongle-stopped-working-randomly-89502"
                            },
                            {
                                "platform": "Razer Insider",
                                "title": "DeathAdder V4 Pro 黑色 — Nesmohten 原始回報",
                                "url": "https://insider.razer.com/razer-support-45/razer-deathadder-v4-pro-dongle-doesnt-turn-on-85831"
                            },
                            {
                                "platform": "Razer Insider",
                                "title": "DeathAdder V4 Pro 黑色 — Anxu211 原始回報",
                                "url": "https://insider.razer.com/razer-support-45/razer-deathadder-v4-pro-dongle-doesn-t-work-83468"
                            },
                            {
                                "platform": "Razer Insider",
                                "title": "DeathAdder V4 Pro 黑色 — fnord0 原始回報",
                                "url": "https://insider.razer.com/razer-support-45/deathadder-v4-pro-defective-dongle-less-than-1-week-old-86141"
                            },
                            {
                                "platform": "Reddit",
                                "title": "DeathAdder V4 Pro 黑色 — AirSuch2770 原始回報",
                                "url": "https://www.reddit.com/r/razer/comments/1radofd/razer_deathadder_v4_pro_issuesrecommendations/"
                            },
                            {
                                "platform": "Reddit",
                                "title": "DeathAdder V4 Pro 黑色 — NunoSM 原始回報",
                                "url": "https://www.reddit.com/r/razer/comments/1q39nqw/deathadder_v4_pro_problem/"
                            }
                        ]
                    }
                ],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "targetHost": "reddit.com",
                        "query": "\"RZ01-05330100-R3A1\" site:reddit.com",
                        "queryUrl": "https://www.google.com/search?q=%22RZ01-05330100-R3A1%22%20site%3Areddit.com"
                    },
                    {
                        "platform": "Razer Insider",
                        "targetHost": "insider.razer.com",
                        "query": "\"RZ01-05330100-R3A1\" site:insider.razer.com",
                        "queryUrl": "https://www.google.com/search?q=%22RZ01-05330100-R3A1%22%20site%3Ainsider.razer.com"
                    }
                ]
            }
        },
        {
            "id": "mouse-razer-viper-v3-pro",
            "category": "mouse",
            "rank": 4,
            "budget": "premium",
            "channel": "tw",
            "brand": "Razer",
            "model": "RZ01-05120100-R3A1",
            "name": "Viper V3 Pro 黑色 35K 非SE",
            "type": "standard",
            "score": 92,
            "price": {
                "currency": "TWD",
                "amount": 3690,
                "converted": 3690,
                "basis": "retailer_current",
                "confidence": "2026-09-01 Chrome重新直接開啟名人3C獨立頁，整頁截圖可見黑色RZ01-05120100-R3A1、3690、促銷至9/30及購買按鈕，重開不需選色。名人框架DOM只落在左欄，採Chrome截圖人工確認。web索引3990/3月促銷為舊快取，不採作目前價格。PChome DCBF01-A900IUNKQ現價3690但黑白未預選，不能當黑色直連；myfone P0000203749303錯植30K/95g/MMO/藍牙，不採。momo15133565未展售；舊88%折扣已過期。"
            },
            "installation": {
                "status": "not_stated",
                "note": "桌面USB接收器／線材接電腦；不含桌機、作業系統設定或另購配件費用。"
            },
            "image": "https://www.mren.com.tw/product/pic/04/04/040471802127b.jpg",
            "buyUrl": "https://www.mren.com.tw/product/show.php?id=040471802127",
            "buyLabel": "名人3C 台灣新品通路",
            "specs": [
                "類型：一般平置電競滑鼠，Viper V3 Pro 黑色 35K 非SE；完整SKU RZ01-05120100-R3A1",
                "握型／慣用手：右手用對稱外型，左側側鍵；適合抓握或指握仍須依手長試握",
                "連線：2.4GHz HyperPolling無線／USB有線；無藍牙、無無線充電",
                "感測器／解析度：第二代Focus Pro 35K光學，750 IPS、70 G",
                "回報率：無線最高8000 Hz；官方FAQ明示有線不支援8000 Hz，有線上限未明示，不自行推定；回報週期不等於端到端延遲",
                "按鍵／滾輪：6實體按鍵；官方另以8個可程式化控制輸入計數，非8個實體鍵；第三代光學微動、非傾斜滾輪",
                "供電／續航：USB-C充電；最長95小時@1000Hz、62小時@2000Hz、40小時@4000Hz、17小時@8000Hz；V/A未標示",
                "系統／軟體：USB隨插即用；進階巨集及設定需Razer Synapse，不宣稱macOS可用Synapse進階功能；無RGB，單一內建設定檔",
                "尺寸：長 127.1 x 寬 63.9 x 高 39.9 mm（約）",
                "重量：54 g（黑色，不含連接線）",
                "隨附配件：滑鼠、隨附專用HyperPolling接收器、USB-A轉USB-C線、防滑鼠貼、重要產品資訊指南"
            ],
            "description": "右手操作的對稱外形、黑色54g與第二代Focus Pro35K搭配，適合希望降低鼠體重量的FPS玩家。只收標準黑色Pro，不混SE、Faker或其他特別版，無線8000Hz不能套用有線模式。",
            "pros": [
                "黑色54g配置",
                "隨附專用HyperPolling接收器",
                "35K感測器與光學主鍵"
            ],
            "cons": [
                "無Bluetooth與無線充電",
                "8000Hz最長17小時，續航取決設定",
                "已有跨站連線中斷與接收器辨識回報"
            ],
            "bestFor": "偏好右手對稱外形、重視輕量化與無線高回報率的FPS玩家。",
            "recommendation": "先試握再選高回報率，普通HyperSpeed及商店單售HyperPolling接收器不可替代專用原配；收貨後測試休眠喚醒、充電与多埠連接，異常走台灣售後。",
            "voltage": "USB-C充電；最長95小時@1000Hz、62小時@2000Hz、40小時@4000Hz、17小時@8000Hz；V/A未標示",
            "warranty": "名人3C台灣新品通路明列2年保固",
            "tags": [
                "電競",
                "輕量化",
                "USB-C",
                "光學微動",
                "台灣公司貨"
            ],
            "releaseDate": "2024-04-23",
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
                "checkedAt": "2026-09-01",
                "note": "同型號3690/4299等通路當期價與不同版本混列，未提供可重現的黑色SKU日期史低。 黑色SKU酷澎3085出站連結500失敗不可核；PChome3360舊活動連回IUNKQ現價3690，非同日實價或具日期史低；Faker/SE/CS2及組合排除。"
            },
            "issueResearch": {
                "status": "common_issue",
                "checkedAt": "2026-09-01",
                "summary": "Viper V3 Pro 黑色 35K 非SE有六位跨Reddit與Razer Insider的獨立使用者回報「連線中斷或接收器失去辨識」。",
                "issues": [
                    {
                        "title": "連線中斷或接收器失去辨識",
                        "detail": "原版Viper V3 Pro非V3 HyperSpeed／V2／SE；顏色不是獨立收錄變體，但回報未都寫區域SKU或顏色，不宣稱已確認黑色特定批次或共同硬體根因。四位Insider加兩位Reddit，僅集中相同連線/辨識症狀，不混入追蹤、按鍵、充電或其他世代以湊數。 本批保守六位，網路自選回報不代表故障率或已證實共同根因。",
                        "reportCount": 6,
                        "sources": [
                            {
                                "platform": "Razer Insider",
                                "title": "Viper V3 Pro 黑色 35K 非SE — TownPablo 原始回報",
                                "url": "https://insider.razer.com/razer-support-45/mouse-randomly-stop-working-razer-viper-v3-pro-87204"
                            },
                            {
                                "platform": "Razer Insider",
                                "title": "Viper V3 Pro 黑色 35K 非SE — autoZaffrenexus116 原始回報",
                                "url": "https://insider.razer.com/razer-support-45/issue-viper-v3-pro-wireless-mode-87233"
                            },
                            {
                                "platform": "Razer Insider",
                                "title": "Viper V3 Pro 黑色 35K 非SE — miztersex 原始回報",
                                "url": "https://insider.razer.com/razer-support-45/viper-v3-pro-issue-disconnecting-66740"
                            },
                            {
                                "platform": "Razer Insider",
                                "title": "Viper V3 Pro 黑色 35K 非SE — the_yutman 原始回報",
                                "url": "https://insider.razer.com/razer-support-45/razer-viper-v3-pro-keeps-disconnecting-85434"
                            },
                            {
                                "platform": "Reddit",
                                "title": "Viper V3 Pro 黑色 35K 非SE — JayThaPistola 原始回報",
                                "url": "https://www.reddit.com/r/razer/comments/1q39nqw/deathadder_v4_pro_problem/"
                            },
                            {
                                "platform": "Reddit",
                                "title": "Viper V3 Pro 黑色 35K 非SE — Omrops40 原始回報",
                                "url": "https://www.reddit.com/r/MouseReview/comments/1rocxui/"
                            }
                        ]
                    }
                ],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "targetHost": "reddit.com",
                        "query": "\"RZ01-05120100-R3A1\" site:reddit.com",
                        "queryUrl": "https://www.google.com/search?q=%22RZ01-05120100-R3A1%22%20site%3Areddit.com"
                    },
                    {
                        "platform": "Razer Insider",
                        "targetHost": "insider.razer.com",
                        "query": "\"RZ01-05120100-R3A1\" site:insider.razer.com",
                        "queryUrl": "https://www.google.com/search?q=%22RZ01-05120100-R3A1%22%20site%3Ainsider.razer.com"
                    }
                ]
            }
        },
        {
            "id": "mouse-logitech-g309",
            "category": "mouse",
            "brand": "Logitech",
            "model": "G309",
            "name": "G309 LIGHTSPEED 黑色 910-007202 雙模電競滑鼠",
            "type": "standard",
            "rank": 15,
            "score": 85,
            "budget": "mid",
            "channel": "tw",
            "price": {
                "currency": "TWD",
                "amount": 2190,
                "converted": 2190,
                "basis": "retailer_current",
                "confidence": "2026-09-01 Chrome官店預設黑色910-007202、2190元、加入購物車可用；不是POWERPLAY套裝。"
            },
            "installation": {
                "status": "not_stated",
                "note": "一般AA電池／接收器或Bluetooth配對；POWERPLAY為選購，不能當隨附。"
            },
            "image": "https://store.logitech.tw/cdn/shop/files/Low_Resolution_JPG-G309LIGHTSPEEDBTYOpenBlack.jpg?v=1761494816",
            "buyUrl": "https://store.logitech.tw/products/g309-lightspeed",
            "buyLabel": "羅技 Logi 台灣網路旗艦店",
            "specs": [
                "類型：一般平置電競滑鼠，標準黑色910-007202、硬體MR0109，非綾華特仕",
                "握型／慣用手：對稱本體搭左側鍵，右手使用側鍵較方便；手型與後方重心需先試握",
                "連線：LIGHTSPEED 2.4GHz USB-A接收器／Bluetooth LE，最遠10m依環境",
                "感測器／解析度：HERO 25K光學，100–25,600 DPI、最大速度>400 IPS／加速度>40G",
                "回報率：LIGHTSPEED高模式1000Hz、低模式125Hz；Bluetooth125Hz；不由回報率推實際延遲",
                "按鍵／滾輪：6個可自訂鍵、LIGHTFORCE複合按鍵軸；滾輪詳細傾斜／飛梭資料互相衝突，未採支援表7鍵與Hyper-fast說法",
                "供電／續航：1顆AA鹼性電池，1000Hz最長300小時、Bluetooth最長600小時；另支援POWERPLAY無線供電（另購），額定V/A查不到",
                "系統／軟體：G HUB支援按鍵設定与最多5設定檔；本次所讀官方資料未完整核對各OS最低版本，不宣稱通用所有系統",
                "尺寸：高 120 x 寬 64 x 深 39 mm",
                "重量：使用POWERPLAY 68 g；含AA電池 86 g",
                "隨附配件：已確認LIGHTSPEED USB-A接收器、AA電池；其餘完整裝箱清單未核實，POWERPLAY另購"
            ],
            "description": "AA電池与Bluetooth／LIGHTSPEED雙模式是主要差異，可在筆電辦公與桌機遊戲間轉換。重量需區分AA與另购POWERPLAY條件，不能把68g當開箱即得的AA重量。",
            "pros": [
                "AA電池可更換",
                "Bluetooth與LIGHTSPEED雙模式",
                "HERO25K与可自訂按鍵"
            ],
            "cons": [
                "AA配置較重且重心需適應",
                "主鍵聲音與掌下溝槽建議實際試握",
                "68g需要另購POWERPLAY条件"
            ],
            "bestFor": "想兼顧辦公藍牙與桌機遊戲、偏好可換AA電池的使用者。",
            "recommendation": "先試握按鍵聲與掌下溝槽；若以AA日常使用請比較86g配置，別為68g另購成本未計的充電墊。",
            "voltage": "1顆AA鹼性電池或選購POWERPLAY無線供電；所查官方頁未標额定V/A，不以USB接收器推定鼠體充電。",
            "warranty": "台灣官方2年有限硬體保固，保留購買憑證並依條款。",
            "tags": [
                "電競",
                "雙模",
                "AA電池",
                "HERO25K",
                "台灣公司貨"
            ],
            "releaseDate": "2024-07-25",
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
                "checkedAt": "2026-09-01",
                "note": "已查910-007202／G309黑色歷史價格、BigGo與LBJ；BigGo黑Coupang1890導購無法還原完整SKU與會員條件，Yahoo漲價200未見歷史日期。LBJ exact查詢原頁失敗，泛Logitech頁不證史低；韓國追蹤混白色7210與券，排除。官店2190只是現價，不推史低。"
            },
            "issueResearch": {
                "status": "no_common_issue",
                "checkedAt": "2026-09-01",
                "summary": "截至查核日，查無達門檻的集中負評／災情",
                "issues": [],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "targetHost": "reddit.com",
                        "query": "site:reddit.com \"G309\" problem",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22G309%22%20problem"
                    },
                    {
                        "platform": "PTT",
                        "targetHost": "ptt.cc",
                        "query": "site:ptt.cc \"G309\" (問題 OR 故障 OR 連點)",
                        "queryUrl": "https://www.google.com/search?q=site%3Aptt.cc%20%22G309%22%20(%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E9%80%A3%E9%BB%9E)"
                    }
                ]
            }
        },
        {
            "id": "mouse-logitech-m350s",
            "category": "mouse",
            "brand": "Logitech",
            "model": "M350S",
            "name": "Pebble Mouse 2 M350S 玫瑰粉 910-006996 藍牙滑鼠",
            "type": "standard",
            "rank": 29,
            "score": 78,
            "budget": "value",
            "channel": "tw",
            "installation": {
                "status": "not_stated",
                "note": "透過藍牙配對，接收器需另購；中鍵自訂需Windows/macOS的Options+。"
            },
            "buyUrl": "https://www.tk3c.com/product/245490",
            "buyLabel": "燦坤線上購物",
            "specs": [
                "類型：一般平置薄型便攜滑鼠，M350S玫瑰粉910-006996；不是前代M350",
                "握型／慣用手：扁平對稱三鍵布局，無側鍵；薄形不一定適合長時間掌握，需試握",
                "連線：Bluetooth Low Energy，最多三裝置Easy-Switch、官方範圍10m依環境；Logi Bolt相容但未隨附",
                "感測器／解析度：高精確度光學追蹤，400–4000 DPI、100 DPI步進，額定1000 DPI",
                "回報率：所查官方頁未標示，不推定實際延遲",
                "按鍵／滾輪：3鍵，SilentTouch靜音點按；只有中鍵可透過Options+自訂，非SmartWheel飛速滾輪",
                "供電／續航：1顆AA鹼性電池，官方最長24個月依使用條件；無充電功能，所查頁未列額定V/A",
                "系統／軟體：Windows10/11、macOS11、iPadOS14、Android9以上、ChromeOS、Linux基本連線；Options+僅Windows/macOS",
                "尺寸：高 106 x 寬 58.7 x 深 26.62 mm",
                "重量：76 g",
                "隨附配件：M350S滑鼠、預裝AA鹼性電池、使用者與重要資訊文件；不含Logi Bolt接收器"
            ],
            "description": "以薄型包裝收納、靜音三鍵和三装置切換為主的便攜鼠。相較M350改用Logi Bolt相容性且接收器不在包裝內；長時間使用的手掌支撐應親自確認。",
            "pros": [
                "薄型便於筆電包攜帶",
                "三裝置切換與靜音主鍵",
                "單AA電池、無需充電線"
            ],
            "cons": [
                "無側鍵、接收器另購",
                "扁平握感不適合所有手型",
                "本批有零星左鍵及連線回報，不等於完全沒有負評"
            ],
            "bestFor": "以藍牙筆電、平板為主，重視收納體積與靜音的輕量辦公。",
            "recommendation": "確認電腦支援藍牙且接受扁平握感；Android/iPad基本滑鼠操作與Windows/macOS的Options+中鍵自訂不可視為同等功能。",
            "voltage": "1顆AA鹼性電池；所查官方頁未列額定V/A，不能充電。",
            "warranty": "台灣官方1年有限硬體保固，依通路憑證及原廠條款。",
            "tags": [
                "辦公",
                "便攜",
                "薄型",
                "靜音",
                "三裝置",
                "AA電池",
                "台灣公司貨"
            ],
            "price": {
                "currency": "TWD",
                "amount": 699,
                "converted": 699,
                "basis": "retailer_current",
                "confidence": "2026-09-01 Chrome燦坤245490：玫瑰粉910-006996、公開促銷699、可加入購物車。"
            },
            "image": "https://www.cdn-tkec.tw/image/product/202401/245490_M.jpg?t=20250513174631",
            "releaseDate": "2023-09-06",
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
                "checkedAt": "2026-09-01",
                "note": "實查M350S/6996與歷史價格、BigGo與良品比價；列表599/629為未閉合日期現價，非史低。PTT2025-08-19之584原購圖已Chrome看清是石墨灰、618再使用34折券，與本筆玫瑰粉不同且有折券條件，排除。未找到同玫瑰粉SKU可驗證的歷史低點。"
            },
            "issueResearch": {
                "status": "no_common_issue",
                "checkedAt": "2026-09-01",
                "summary": "截至查核日，查無達門檻的集中負評／災情",
                "issues": [],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "targetHost": "reddit.com",
                        "query": "site:reddit.com \"M350S\" problem",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22M350S%22%20problem"
                    },
                    {
                        "platform": "PTT",
                        "targetHost": "ptt.cc",
                        "query": "site:ptt.cc \"M350S\" (問題 OR 故障 OR 連點)",
                        "queryUrl": "https://www.google.com/search?q=site%3Aptt.cc%20%22M350S%22%20(%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E9%80%A3%E9%BB%9E)"
                    }
                ]
            }
        },
        {
            "id": "mouse-logitech-pop-mouse",
            "category": "mouse",
            "brand": "Logitech",
            "model": "POP Mouse",
            "name": "POP Mouse 石墨黑 910-007163 四鍵藍牙滑鼠（2024配色）",
            "type": "standard",
            "rank": 20,
            "score": 81,
            "budget": "mid",
            "channel": "tw",
            "price": {
                "currency": "TWD",
                "amount": 990,
                "converted": 990,
                "basis": "retailer_current",
                "confidence": "2026-09-01 Chrome官店預設石墨黑910-007163、990元、可加入購物車；非鍵鼠套装。"
            },
            "installation": {
                "status": "not_stated",
                "note": "藍牙配對即可；標準包裝不含Bolt，官店限量贈品不能視為永久標配。"
            },
            "image": "https://store.logitech.tw/cdn/shop/files/Low_Resolution_JPG-POPMouseTOPGraphite.jpg?v=1757668267&width=1220",
            "buyUrl": "https://store.logitech.tw/products/popmouse",
            "buyLabel": "羅技 Logi 台灣網路旗艦店",
            "specs": [
                "類型：一般平置小型辦公滑鼠，2024配色石墨黑910-007163；官規稱石墨灰，非POP Keys套裝",
                "握型／慣用手：圓弧對稱外形、上方四鍵、無側键；手型與長時間掌心支撐需試握",
                "連線：Bluetooth Low Energy 5.1、三裝置Easy-Switch，最遠10m依環境；相容Logi Bolt但標準包裝不含接收器",
                "感測器／解析度：高精確度光學追蹤，額定1000 DPI、1000–4000 DPI可調，未公布晶片型號",
                "回報率：官方支援規格125Hz；8ms是回報週期，不等於實際端到端延遲",
                "按鍵／滾輪：4鍵、2個可自訂鍵；SilentTouch靜音、SmartWheel自動切換逐行與快速捲動",
                "供電／續航：1顆AA電池，最長24個月依使用條件；非充電款，官方所查頁未列額定V/A",
                "系統／軟體：Windows10/11、macOS10.15、ChromeOS、iPadOS13.4以上基本功能；Options+與自訂僅Windows/macOS",
                "尺寸：高 104.8 x 寬 59.4 x 深 35.2 mm",
                "重量：82 g",
                "隨附配件：滑鼠、AA電池與文件；標準包裝不含Bolt，官店當時圖片標示限量贈接收器，贈品依下單時條款及庫存"
            ],
            "description": "圓弧小型外觀、靜音主鍵及SmartWheel搭配三裝置切換，適合想兼顾收納與快速捲動的日常辦公。這筆只收2024石墨黑配色，其他顏色與鍵鼠套裝不重複計數。",
            "pros": [
                "四鍵搭配兩個可自訂鍵",
                "SmartWheel逐行與快速捲動",
                "AA電池及三裝置切換"
            ],
            "cons": [
                "底部切換鍵需抬鼠操作",
                "無側鍵且小型握感要先試握",
                "標準包裝不含Bolt，自訂功能依Options+系統支援"
            ],
            "bestFor": "重視靜音與圓弧小型外觀、使用多台藍牙裝置的日常辦公。",
            "recommendation": "確認手型合適與電腦可用Bluetooth；不要把促銷贈品當永久標配，行動系統亦不能套用Windows/macOS的全部自訂功能。",
            "voltage": "1顆AA電池；非充電型，所查官方頁未列額定V/A。",
            "warranty": "台灣官方1年有限硬體保固，依購買憑證及原廠條款。",
            "tags": [
                "辦公",
                "靜音",
                "三裝置",
                "AA電池",
                "四鍵",
                "台灣公司貨"
            ],
            "releaseDate": "2024-12-06",
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
                "checkedAt": "2026-09-01",
                "note": "已實查POP Mouse／910-007163石墨黑與史低、BigGo及良品比價，原頁失敗／WAF；列表891/899為未驗證日期的現價，840混舊色不可移用。2021紫色6425不是本筆2024黑色7163。官店990為本次可買現價，不推定史低。"
            },
            "issueResearch": {
                "status": "no_common_issue",
                "checkedAt": "2026-09-01",
                "summary": "截至查核日，查無達門檻的集中負評／災情",
                "issues": [],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "targetHost": "reddit.com",
                        "query": "site:reddit.com \"POP Mouse\" problem",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22POP%20Mouse%22%20problem"
                    },
                    {
                        "platform": "PTT",
                        "targetHost": "ptt.cc",
                        "query": "site:ptt.cc \"POP Mouse\" (問題 OR 故障 OR 連點)",
                        "queryUrl": "https://www.google.com/search?q=site%3Aptt.cc%20%22POP%20Mouse%22%20(%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E9%80%A3%E9%BB%9E)"
                    }
                ]
            }
        },
        {
            "id": "mouse-razer-cobra",
            "category": "mouse",
            "brand": "Razer",
            "model": "RZ01-04650100-R3M1",
            "name": "Cobra 有線電競滑鼠 黑色 RZ01-04650100-R3M1",
            "type": "standard",
            "rank": 21,
            "score": 82,
            "budget": "mid",
            "channel": "tw",
            "price": {
                "currency": "TWD",
                "amount": 1088,
                "converted": 1088,
                "basis": "retailer_current",
                "confidence": "Chrome 2026-09-01查明黑色標準有線Cobra完整RZ01-04650100-R3M1，單品1088，qty/cart可用，未選加購。momo11921709實際無展售故不用。"
            },
            "installation": {
                "status": "not_stated",
                "note": "USB有線即用，不涉及到府安裝；自訂需相容Synapse與作業系統。"
            },
            "image": "https://www.inpad.com.tw/data/goods/gallery/202306/1688111238816486497.jpg",
            "buyUrl": "https://www.inpad.com.tw/product.php?act=view&id=9420",
            "buyLabel": "硬派精璽線上購物",
            "specs": [
                "類型：一般平置有線電競滑鼠，Cobra 有線電競滑鼠 黑色 RZ01-04650100-R3M1",
                "握型／慣用手：右手對稱外型；需試握確認掌／爪握合適程度",
                "連線：Speedflex 有線 USB",
                "感測器／解析度：8500 DPI 光學／300 IPS／35 G；不以DPI推定端到端延遲",
                "回報率：1000 Hz；回報週期不等於端到端延遲",
                "按鍵／滾輪：6 個可編程按鍵，第三代光學微動",
                "供電／續航：USB 供電；來源未標示 V/A；有線款沒有電池續航",
                "系統／軟體：進階設定需 Razer Synapse；不宣稱 macOS 軟體相容",
                "尺寸：長 119.6 x 寬 62.5 x 高 38.1 mm",
                "重量：58 g（不含線材）",
                "隨附配件：有線滑鼠本體與連接線；所查官方／通路頁未完整列出其他隨附配件"
            ],
            "description": "小型右手對稱外觀的有線電競滑鼠，以58g不含線重量、第三代光學主鍵和六鍵配置為主；不把8500 DPI当成實際延遲指標，也不與無線Pro版混算。",
            "pros": [
                "小型58g不含線材本體",
                "有線供電與六鍵自訂",
                "台灣可信新品通路、兩年原廠保固"
            ],
            "cons": [
                "無藍牙或無線模式",
                "設定需確認Synapse與作業系統相容",
                "本批達門檻的滾輪異常回報，需評估售後"
            ],
            "bestFor": "偏好小型滑鼠、接受有線與六鍵操作的入門電競玩家。",
            "recommendation": "試握長119.6mm機身，退換貨期測連續上下捲動；既有使用者曾回報滾輪跳動，異常應優先走保固，勿以自行拆機清理作保證修復方法。",
            "releaseDate": "2023-06-29",
            "voltage": "USB 供電；來源未標示 V/A",
            "warranty": "台灣INPAD硬派通路，原廠2年；硬派首年代送免費、第二年NT240處理費，一般7–14工作天、送海外可1–2月",
            "tags": [
                "電競",
                "有線",
                "小型",
                "光學主鍵",
                "六鍵",
                "台灣公司貨"
            ],
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
                "checkedAt": "2026-09-01",
                "note": "原比價頁有順發/良興等1088、酷澎不同選項858–1635，無同SKU可定位日期史低；Pro/Minecraft排除。 原頁有1349新品與Yahoo滿件95折1282、Coupang1180及92漲價提示；未有同SKU具日期歷史值，購買清單不當史低，個人賣家/Pro排除。 同型號現價不等於歷史最低。"
            },
            "issueResearch": {
                "status": "common_issue",
                "checkedAt": "2026-09-01",
                "summary": "Cobra 有線電競滑鼠 黑色有六位跨Reddit與Razer Insider的獨立使用者回報「滾輪跳動或滾動異常」。",
                "issues": [
                    {
                        "title": "滾輪跳動或滾動異常",
                        "detail": "逐人採標準有線Cobra，不混入Pro、HyperSpeed或Viper Mini。 本批保守六位、跨Reddit與Razer Insider兩原始網站；自選網路回報不能推算故障率，也不代表所有現售批次同一根因，異常宜走台灣售後。",
                        "reportCount": 6,
                        "sources": [
                            {
                                "platform": "Reddit",
                                "title": "bought RAZOR COBRA.",
                                "url": "https://www.reddit.com/r/mkindia/comments/1tgpvxl/bought_razor_cobra/"
                            },
                            {
                                "platform": "Reddit",
                                "title": "Unpopular opinion: Razer Cobras are great!",
                                "url": "https://www.reddit.com/r/MouseReview/comments/1rzf0gc/unpopular_opinion_razer_cobras_are_great/"
                            },
                            {
                                "platform": "Razer Insider",
                                "title": "Mouse scroll wheel jumps up and down",
                                "url": "https://insider.razer.com/razer-support-45/mouse-scroll-wheel-jumps-up-and-down-69357"
                            },
                            {
                                "platform": "Razer Insider",
                                "title": "What mice has the most durable scrollwheel and side buttons",
                                "url": "https://insider.razer.com/mice-and-surfaces-9/what-mice-has-the-most-durable-scrollwheel-and-side-buttons-85764?postid=276890"
                            }
                        ]
                    }
                ],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "targetHost": "reddit.com",
                        "query": "\"RZ01-04650100-R3M1\" site:reddit.com",
                        "queryUrl": "https://www.google.com/search?q=%22RZ01-04650100-R3M1%22%20site%3Areddit.com"
                    },
                    {
                        "platform": "Razer Insider",
                        "targetHost": "insider.razer.com",
                        "query": "\"RZ01-04650100-R3M1\" site:insider.razer.com",
                        "queryUrl": "https://www.google.com/search?q=%22RZ01-04650100-R3M1%22%20site%3Ainsider.razer.com"
                    }
                ]
            }
        },
        {
            "id": "mouse-razer-basilisk-v3",
            "category": "mouse",
            "brand": "Razer",
            "model": "RZ01-04000100-R3M1",
            "name": "Basilisk V3 有線 26K 黑色 RZ01-04000100-R3M1",
            "type": "standard",
            "rank": 19,
            "score": 84,
            "budget": "mid",
            "channel": "tw",
            "price": {
                "currency": "TWD",
                "amount": 1488,
                "converted": 1488,
                "basis": "retailer_current",
                "confidence": "Chrome於2026-09-01確認黑色RZ01-04000100-R3M1單品1488（2099劃線）、可選數量與加入購物車、原圖500px。不採35K、Pro、X HyperSpeed或加購。"
            },
            "installation": {
                "status": "not_stated",
                "note": "USB有線即用，不涉及到府安裝；自訂需相容Synapse與作業系統。"
            },
            "image": "https://www.inpad.com.tw/data/goods/gallery/202109/1632477983357778020.jpg",
            "buyUrl": "https://www.inpad.com.tw/product.php?act=view&id=6575",
            "buyLabel": "硬派精璽線上購物",
            "specs": [
                "類型：一般平置有線電競滑鼠，Basilisk V3 有線 26K 黑色 RZ01-04000100-R3M1",
                "握型／慣用手：右手人體工學、拇指托與橡膠側握面；較適合掌握，握型仍需試握；需試握確認掌／爪握合適程度",
                "連線：USB有線Speedflex，無無線功能",
                "感測器／解析度：Focus+ 26K DPI、650 IPS、50 G；不以DPI推定端到端延遲",
                "回報率：1000 Hz；回報週期不等於端到端延遲",
                "按鍵／滾輪：10+1可程式化按鍵、第二代光學微動；四向HyperScroll傾斜滾輪，分段/自由滾动/Smart-Reel",
                "供電／續航：USB供電；V/A未標示；有線款沒有電池續航",
                "系統／軟體：Razer Synapse 3進階自訂；4+1內建設定檔、11區Chroma RGB、PTFE鼠腳；不宣稱macOS支援Synapse設定",
                "尺寸：長 129 x 握持寬 62 x 高 43 mm（約；握持寬非最大外寬）",
                "重量：約 101 g（不含線材）",
                "隨附配件：有線滑鼠本體與連接線；所查官方／通路頁未完整列出其他隨附配件"
            ],
            "description": "原版26K有線Basilisk V3以右手拇指托、10+1可自訂輸入和四向HyperScroll為重點；適合需要快捷操作而能接受較重機身與線材的人，不是35K或無線Pro。",
            "pros": [
                "四向HyperScroll可切分段與自由滾動",
                "10+1自訂輸入與內建設定檔",
                "拇指托及有線供電"
            ],
            "cons": [
                "約101g且有線，追求極輕鼠者先試握",
                "握持寬62mm不是最大外寬",
                "本批达門檻的USB斷接回報，需留意保固"
            ],
            "bestFor": "需要拇指托、額外快捷鍵與四向滾輪，接受有線與較重機身的遊戲／生產力混用者。",
            "recommendation": "確認右手握型及桌面線材路徑；退換貨期測多USB埠與連續捲動。遇亮燈後失去辨識優先聯絡售後，不採論壇拆切線材作一般修復建議。",
            "releaseDate": "2021-09-08",
            "voltage": "USB供電；V/A未標示",
            "warranty": "台灣INPAD硬派通路，原廠2年，硬派首年代送免費、第二年NT240處理費；一般7–14工作天、送海外可能1–2月",
            "tags": [
                "電競",
                "有線",
                "右手",
                "拇指托",
                "四向滾輪",
                "台灣公司貨"
            ],
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
                "checkedAt": "2026-09-01",
                "note": "原頁同SKU momo1488、friDay1181候選；1438酷澎另有新客促銷。並未提供同SKU可核日期歷史低值，Pro/35K/Mobile與配件排除。 原頁有原版有線Yahoo/PChome1488及漲89提示，未給可核實的日期史低數字；不從漲跌幅倒推史低，35K/Pro/無線與會員折扣排除。另讀Reddit 1pwkxzl原PO述Amazon42美元但帳號刪除、沒有商品成交規格與原通路日期紀錄，不列可驗證史低。 同型號現價不等於歷史最低。"
            },
            "issueResearch": {
                "status": "common_issue",
                "checkedAt": "2026-09-01",
                "summary": "Basilisk V3 有線 26K 黑色有六位跨Reddit與Razer Insider的獨立使用者回報「USB反覆斷接、短暫亮燈後失去辨識」。",
                "issues": [
                    {
                        "title": "USB反覆斷接、短暫亮燈後失去辨識",
                        "detail": "5位Insider加1位Reddit本人原文；同頁引用原文不重計。只描述供電/辨識症狀，不斷言全部由同一硬體根因造成；自行拆切線材的回覆僅保留已恢復的結果，不轉述為操作建議。 本批保守六位、跨Reddit與Razer Insider兩原始網站；自選網路回報不能推算故障率，也不代表所有現售批次同一根因，異常宜走台灣售後。",
                        "reportCount": 6,
                        "sources": [
                            {
                                "platform": "Razer Insider",
                                "title": "Basilisk V3 Wired RZ01-0400 blinking, can't update or do anything",
                                "url": "https://insider.razer.com/razer-support-45/basilisk-v3-wired-rz01-0400-blinking-can-t-update-or-do-anything-64500?sort=mostRecentFirst"
                            },
                            {
                                "platform": "Razer Insider",
                                "title": "Basilisk V3 Wired RZ01-0400 blinking and not detected on any device",
                                "url": "https://insider.razer.com/razer-support-45/basilisk-v3-wired-rz01-0400-blinking-and-not-detected-on-any-device-61916"
                            },
                            {
                                "platform": "Razer Insider",
                                "title": "Razer Basilisk V3 stopped working completely",
                                "url": "https://insider.razer.com/razer-support-45/razer-basilisk-v3-stopped-working-completely-48689?postid=240700"
                            },
                            {
                                "platform": "Reddit",
                                "title": "Basilisk V3 bug glitch",
                                "url": "https://www.reddit.com/r/razer/comments/1uct5ue/basilisk_v3_bug_glitch/"
                            }
                        ]
                    }
                ],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "targetHost": "reddit.com",
                        "query": "\"RZ01-04000100-R3M1\" site:reddit.com",
                        "queryUrl": "https://www.google.com/search?q=%22RZ01-04000100-R3M1%22%20site%3Areddit.com"
                    },
                    {
                        "platform": "Razer Insider",
                        "targetHost": "insider.razer.com",
                        "query": "\"RZ01-04000100-R3M1\" site:insider.razer.com",
                        "queryUrl": "https://www.google.com/search?q=%22RZ01-04000100-R3M1%22%20site%3Ainsider.razer.com"
                    }
                ]
            }
        },
        {
            "id": "mouse-logitech-mx-anywhere-3s",
            "category": "mouse",
            "brand": "Logitech",
            "model": "MX Anywhere 3S",
            "name": "MX Anywhere 3S 石墨灰 910-006935 無線滑鼠",
            "type": "standard",
            "rank": 10,
            "score": 86,
            "budget": "premium",
            "channel": "tw",
            "installation": {
                "status": "not_stated",
                "note": "藍牙連線即用；Logi Bolt接收器需另購，自訂及Flow需相容電腦與軟體。"
            },
            "buyUrl": "https://store.logitech.tw/products/anywhere3s",
            "buyLabel": "羅技 Logi 台灣網路旗艦店",
            "specs": [
                "類型：一般平置便攜生產力滑鼠，通用版石墨灰910-006935；不是for Mac或商務接收器套裝",
                "握型／慣用手：小型右手側鍵配置，攜帶便利；手掌支撐與側鍵位置需試握",
                "連線：Bluetooth Low Energy、三裝置Easy-Switch；相容Logi Bolt但接收器未隨附，不支援其他羅技接收器",
                "感測器／解析度：Darkfield高精確度感測器，200–8000 DPI、50 DPI步進；玻璃表面至少4mm厚依官方條件",
                "回報率：所查官方頁未標示，不從DPI或藍牙版本推算",
                "按鍵／滾輪：6鍵，靜音主鍵、MagSpeed自動切換滾輪；水平捲動須按住側鍵再轉滾輪",
                "供電／續航：500mAh可充電鋰電池，USB-C充電；官方最長70天、充1分鐘可用3小時，視使用條件而異；額定V/A未標示",
                "系統／軟體：Windows10/11、macOS10.15、Linux、ChromeOS、iPadOS14、Android8以上基本連線；Options+自訂及Flow以Windows/macOS支援為準",
                "尺寸：高 100.5 x 寬 65 x 深 34.4 mm",
                "重量：99 g",
                "隨附配件：滑鼠、USB-A轉USB-C充電線、使用者文件；不含Logi Bolt接收器"
            ],
            "description": "便攜機身整合六鍵、靜音點擊及MagSpeed滾輪，適合筆電在多張辦公桌間移動。可在符合官方厚度條件的玻璃上追蹤，但不把8000 DPI視為反應延遲或所有表面的實測保證。",
            "pros": [
                "小型機身與三裝置切換",
                "MagSpeed快速捲動及側鍵輔助水平捲動",
                "USB-C充電、靜音主鍵"
            ],
            "cons": [
                "Logi Bolt接收器需另購",
                "小機身不一定能完整支撐大手",
                "本批有零星中鍵、點擊與主機連線問題，未達同一問題跨站門檻"
            ],
            "bestFor": "在多台筆電或不同桌面移動、重視靜音及快速捲動的工作者。",
            "recommendation": "先試握小機身及側鍵位置；企業電腦要確認Options+安裝權限，若不想用藍牙需把另購Bolt接收器計入成本。",
            "voltage": "內建500mAh鋰電池、USB-C充電；所查官方頁未列額定V/A，不推定USB供電數值。",
            "warranty": "台灣官方1年有限硬體保固，依購買憑證與原廠條款。",
            "tags": [
                "辦公",
                "便攜",
                "靜音",
                "三裝置",
                "USB-C",
                "台灣公司貨"
            ],
            "price": {
                "currency": "TWD",
                "amount": 2490,
                "converted": 2490,
                "basis": "retailer_current",
                "confidence": "2026-09-01 Chrome官店預設石墨灰910-006935、2490元、加入購物車；非推薦品或套裝。"
            },
            "image": "https://store.logitech.tw/cdn/shop/products/mx-anywhere-3s-472144.jpg?v=1770130977&width=1220",
            "releaseDate": "2023-06-28",
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
                "checkedAt": "2026-09-01",
                "note": "已查MX Anywhere 3S／910-006935與歷史價格，BigGo、良品價格追蹤及原價屋2026-03-20原文；原價屋同SKU2690是可核促銷但高於目前2490，不能宣稱最低。2340涉及滿額折券，2234候選混商務版；PTT1914未能還原精確顏色／購買原頁，淘寶數字缺台灣保固與版本閉合，不採為此通用版石墨灰史低。"
            },
            "issueResearch": {
                "status": "no_common_issue",
                "checkedAt": "2026-09-01",
                "summary": "截至查核日，查無達門檻的集中負評／災情",
                "issues": [],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "targetHost": "reddit.com",
                        "query": "site:reddit.com \"MX Anywhere 3S\" problem",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22MX%20Anywhere%203S%22%20problem"
                    },
                    {
                        "platform": "PTT",
                        "targetHost": "ptt.cc",
                        "query": "site:ptt.cc \"MX Anywhere 3S\" (問題 OR 故障 OR 連點)",
                        "queryUrl": "https://www.google.com/search?q=site%3Aptt.cc%20%22MX%20Anywhere%203S%22%20(%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E9%80%A3%E9%BB%9E)"
                    }
                ]
            }
        },
        {
            "id": "mouse-logitech-g403-hero",
            "category": "mouse",
            "brand": "Logitech",
            "model": "G403 HERO",
            "name": "G403 HERO 黑色 910-005635 有線電競滑鼠",
            "type": "standard",
            "rank": 17,
            "score": 83,
            "budget": "mid",
            "channel": "tw",
            "price": {
                "currency": "TWD",
                "amount": 1490,
                "converted": 1490,
                "basis": "retailer_current",
                "confidence": "2026-08-31 Chrome官店單品910-005635／1490元／加入購物車，未計推薦配件。"
            },
            "installation": {
                "status": "not_stated",
                "note": "USB有線即用，不涉及到府安裝；燈效與按鍵自訂需G HUB。"
            },
            "image": "https://store.logitech.tw/cdn/shop/products/g403-hero-488438.jpg?v=1729179172&width=1220",
            "buyUrl": "https://store.logitech.tw/products/g403",
            "buyLabel": "羅技 Logi 台灣網路旗艦店",
            "specs": [
                "類型：一般平置有線電競滑鼠，G403 HERO黑色910-005635；不是Prodigy或無線G403",
                "握型／慣用手：右手輪廓、兩側橡膠握把；高背握感需試握",
                "連線：USB有線，連接線長2.1m；無Bluetooth或無線接收器",
                "感測器／解析度：HERO 25K，100–25,600 DPI；官方現行韌體規格，不把DPI當精準度實測排名",
                "回報率：USB最高1000Hz，官方括註1毫秒為回報週期，不等於端到端延遲",
                "按鍵／滾輪：6個可自訂按鈕、機械按鍵張力系統、中央滾輪；非光學主鍵",
                "供電／續航：USB連線供電，不需要電池；官方所查頁未列額定V/A",
                "系統／軟體：官規列Windows7以上、macOS10.11以上及USB埠；G HUB下載需網路，舊OS應另核當前軟體支援，非LGS保證相容",
                "尺寸：高 43 x 寬 68 x 長 124 mm",
                "重量：87.3 g",
                "隨附配件：G403 HERO滑鼠、10g可選裝砝碼、使用者文件"
            ],
            "description": "以右手高背輪廓、橡膠握把與六鍵配置為重點的有線電競款，省去充電與無線配對。官網現行規格為HERO25K；外形適合與否比最高DPI更重要，購買前應試握。",
            "pros": [
                "台灣官店型號與單品價格清楚",
                "六鍵自訂與可選10g砝碼",
                "有線供電，不需管理電池"
            ],
            "cons": [
                "線材會占桌面，無無線模式",
                "橡膠側面需清潔保養，非可換式外殼",
                "本批有零星按鍵與滾輪故障回報，未達同一問題跨站門檻"
            ],
            "bestFor": "喜歡右手高背握感、六鍵與有線供電的電競使用者。",
            "recommendation": "先試握43mm高背，確認接受線材與橡膠側面；有按鍵漏點或回滾應依保固處理，不以同系列其他版本的故障率推測此款。",
            "releaseDate": "2019-06",
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
                "checkedAt": "2026-09-01",
                "note": "已查G403 HERO/5635現价與歷史候選、BigGo及飛比原頁；官店1490是現價，列表1350/東森1341未還原歷史日期及當時可買版本。硬派5635售完不作現價；中國329/259報導混3366、12000DPI與双模敘述，不能套HERO5635。未找到同版本可信新品可核的歷史低點。 2026-09-01補查同兩查詢：欣亞980為已結標競價非一般公開零售價，良興／宏華列表價格未還原歷史日期，亦不採作史低。"
            },
            "issueResearch": {
                "status": "no_common_issue",
                "checkedAt": "2026-09-01",
                "summary": "截至查核日，查無達門檻的集中負評／災情",
                "issues": [],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "targetHost": "reddit.com",
                        "query": "site:reddit.com \"G403 HERO\" problem",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22G403%20HERO%22%20problem"
                    },
                    {
                        "platform": "PTT",
                        "targetHost": "ptt.cc",
                        "query": "site:ptt.cc \"G403 HERO\" (問題 OR 故障 OR 連點)",
                        "queryUrl": "https://www.google.com/search?q=site%3Aptt.cc%20%22G403%20HERO%22%20(%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E9%80%A3%E9%BB%9E)"
                    }
                ]
            },
            "voltage": "USB有線供電；官方所查頁未列額定V/A，不從USB外形猜測。",
            "warranty": "台灣官方2年有限硬體保固，依原廠條款及購買憑證。",
            "tags": [
                "電競",
                "有線",
                "右手",
                "六鍵",
                "可加配重",
                "台灣公司貨"
            ]
        },
        {
            "id": "mouse-logitech-m185",
            "category": "mouse",
            "brand": "Logitech",
            "model": "M185",
            "name": "M185 灰色 910-002258 三鍵無線滑鼠",
            "type": "standard",
            "rank": 30,
            "score": 75,
            "budget": "value",
            "channel": "tw",
            "price": {
                "currency": "TWD",
                "amount": 649,
                "converted": 649,
                "basis": "retailer_current",
                "confidence": "2026-08-31 Chrome燦坤117872明列910-002258，市價與會員價同為649，可加入購物車。"
            },
            "installation": {
                "status": "not_stated",
                "note": "不涉及到府安裝；需USB接收器連接埠，不是Bluetooth滑鼠。"
            },
            "image": "https://www.cdn-tkec.tw/image/product/201107/117872_M.jpg?t=20251201161001",
            "buyUrl": "https://www.tk3c.com/product/117872",
            "buyLabel": "燦坤3C",
            "specs": [
                "類型：一般平置辦公滑鼠，灰色910-002258；同商業型號有多種底部M/N，通路未鎖出貨批次",
                "握型／慣用手：左右對稱小型輪廓；手大或需掌心支撐者先試握",
                "連線：2.4GHz USB接收器、最遠10m依環境；不同M/N接收器協定不一，不保證Unifying共用",
                "感測器／解析度：官方列順暢光學追蹤、1000± DPI，未明晶片型號",
                "回報率：所查官方頁未標示，不由無線規格推定實際延遲",
                "按鍵／滾輪：3鍵（左／右／中鍵）、逐行捲動；各批次滾輪構造不同，非靜音型",
                "供電／續航：1顆AA電池（預裝），官方稱最長12個月、依使用條件；具電源開關",
                "系統／軟體：Windows／macOS／ChromeOS／Linux基本USB滑鼠；支援最低版本與Options+依M/N，購買前核對，不保證現售版可自訂",
                "尺寸：查不到",
                "重量：查不到",
                "隨附配件：M185滑鼠、超小型USB接收器、1顆AA電池（已裝妥）、使用者文件"
            ],
            "description": "三鍵、AA電池與隨附USB接收器的基本辦公款，台灣燦坤可直接購買。商業型號沿用多年，官方支援文件列多個不同尺寸、重量與軟體能力的硬體版本；這筆不以舊規格承諾當前出貨批次。",
            "pros": [
                "台灣可信新品通路與灰色SKU可核對",
                "基本三鍵、接收器與AA電池隨附",
                "官方三年有限硬體保固"
            ],
            "cons": [
                "出貨M/N未鎖定，尺寸／重量不能精確對應",
                "無Bluetooth、多裝置快切與側鍵",
                "不保證可用Options+或與其他接收器共用"
            ],
            "bestFor": "只需便宜三鍵USB無線鼠、能接受購買前核對出貨批次的辦公使用者。",
            "recommendation": "先核底部M/N與接收器，尤其要替換MK270等套組滑鼠時；不以相同M185商業名稱保證可重新配對。",
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
                "checkedAt": "2026-09-01",
                "note": "已查M185與910-002258價格、BigGo及飛比。飛比原頁649是現價，搜尋低价488未還原歷史日期／硬體版；PTT500元為終身會員贈品，299/290留言無原始交易頁；海外與仿品候選不採。2011首代與現售六種M/N不自動同版，不能以現價或第一代促銷推史低。 2026-09-01再次精確SKU BigGo查詢無可核結果，史低搜尋只返非相關列表，未新增可靠歷史候選。"
            },
            "issueResearch": {
                "status": "no_common_issue",
                "checkedAt": "2026-08-31",
                "summary": "截至查核日，查無達門檻的集中負評／災情",
                "issues": [],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "query": "site:reddit.com \"M185\" problem",
                        "targetHost": "reddit.com",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22M185%22%20problem"
                    },
                    {
                        "platform": "PTT",
                        "query": "site:ptt.cc \"M185\" (問題 OR 故障 OR 連點)",
                        "targetHost": "ptt.cc",
                        "queryUrl": "https://www.google.com/search?q=site%3Aptt.cc%20%22M185%22%20(%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E9%80%A3%E9%BB%9E)"
                    }
                ]
            },
            "voltage": "1顆AA電池供電；所查官頁未列額定V/A，不自行猜測。",
            "warranty": "台灣官方與燦坤列3年有限硬體保固，依原廠條款及購買憑證。",
            "tags": [
                "辦公",
                "三鍵",
                "AA電池",
                "USB接收器",
                "出貨批次注意",
                "台灣公司貨"
            ]
        },
        {
            "id": "mouse-logitech-m331",
            "category": "mouse",
            "brand": "Logitech",
            "model": "M331",
            "name": "M331 SILENT PLUS 黑色 910-004917 靜音滑鼠",
            "type": "standard",
            "rank": 26,
            "score": 78,
            "budget": "mid",
            "channel": "tw",
            "price": {
                "currency": "TWD",
                "amount": 699,
                "converted": 699,
                "basis": "retailer_current",
                "confidence": "2026-08-31 Chrome官店黑色4917、699元、加入購物車可用；未承諾特定NCC出貨批次。"
            },
            "installation": {
                "status": "not_stated",
                "note": "不涉及到府安裝；需要USB接收器連接埠，不是藍牙滑鼠。"
            },
            "image": "https://store.logitech.tw/cdn/shop/files/Low_Resolution_JPG-M330_M331_M280_M275_Black_TOP.jpg?v=1787824341&width=1220",
            "buyUrl": "https://store.logitech.tw/products/m331",
            "buyLabel": "羅技 Logi 台灣網路旗艦店",
            "specs": [
                "類型：一般平置靜音辦公滑鼠，M331黑色910-004917；官店同列MR0112/MR0098，出貨硬體批次未標明",
                "握型／慣用手：右手輪廓、拇指側支撐；現官店主圖為logi標誌無指示燈，側材與旧版可能不同，先試握",
                "連線：2.4GHz USB接收器，最遠10m依環境；不支援Bluetooth，不保證可與舊Unifying接收器共用",
                "感測器／解析度：官方現行頁列順暢光學追蹤、1000± DPI，未標晶片型號；不推測各批次感測器相同",
                "回報率：所查官方頁未標示，不以無線技術推定延遲",
                "按鍵／滾輪：3鍵含中鍵、逐行捲動；官方現行規格列2D機械橡膠滾輪，無側鍵",
                "供電／續航：1顆AA電池預裝；現官頁18個月、官店舊文24個月，出貨批次未閉合，不能保證24個月",
                "系統／軟體：現官頁列Windows10/11以上、macOS11以上、ChromeOS與Linux；刷新款為隨插即用，勿依舊版承諾Options+自訂",
                "尺寸：高 105.4 x 寬 67.9 x 深 38.4 mm",
                "重量：查不到",
                "隨附配件：M331滑鼠、USB接收器、1顆AA電池（預裝）、使用者文件"
            ],
            "description": "699元的三鍵靜音辦公選擇，USB接收器隨插即用，適合不需要側鍵與多裝置切換的人。此SKU經過硬體刷新，官店未鎖NCC批次；需要舊版橡膠側面、Options+或Unifying能力者不宜只憑M331名稱下單。",
            "pros": [
                "價格與黑色SKU可在台灣官店直接核對",
                "三鍵與隨附接收器，基本辦公容易上手",
                "AA電池可替換，無需充電線"
            ],
            "cons": [
                "同SKU現售批次未鎖定，重量與續航來源有差異",
                "不能保證舊版Options+自訂或Unifying共用能力",
                "沒有Bluetooth、側鍵或裝置快切；非電競定位"
            ],
            "bestFor": "只要安靜點擊、基本三鍵與USB接收器，不要求舊版自訂功能的辦公使用者。",
            "recommendation": "購買前確認出貨批次；若需要自訂側鍵、無接收器或多裝置切換，改看M650、M750等已明確列規格的款式。",
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
                "checkedAt": "2026-08-31",
                "note": "已查M331/4917史低、BigGo與飛比價格原頁及PTT2020順發449元原文／附圖。449圖明示舊Logitech標誌與指示燈，與目前官店logi無燈主圖不同，未還原新舊硬體批次，不能套為現售版史低。比價混多色／舊版／配件與新客折扣，BigGo原頁讀取失敗；699僅為查核日黑4917現價。"
            },
            "issueResearch": {
                "status": "no_common_issue",
                "checkedAt": "2026-08-31",
                "summary": "截至查核日，查無達門檻的集中負評／災情",
                "issues": [],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "query": "site:reddit.com \"M331\" problem",
                        "targetHost": "reddit.com",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22M331%22%20problem"
                    },
                    {
                        "platform": "PTT",
                        "query": "site:ptt.cc \"M331\" (問題 OR 連點 OR 故障)",
                        "targetHost": "ptt.cc",
                        "queryUrl": "https://www.google.com/search?q=site%3Aptt.cc%20%22M331%22%20(%E5%95%8F%E9%A1%8C%20OR%20%E9%80%A3%E9%BB%9E%20OR%20%E6%95%85%E9%9A%9C)"
                    }
                ]
            },
            "voltage": "1顆AA電池供電；所查官方頁未列額定V/A，不自行补充電或市電規格。",
            "warranty": "台灣官方列1年有限硬體保固，保留購買憑證並依原廠條款。",
            "tags": [
                "辦公",
                "靜音",
                "AA電池",
                "三鍵",
                "出貨批次注意",
                "台灣公司貨"
            ]
        },
        {
            "id": "mouse-logitech-m650",
            "category": "mouse",
            "brand": "Logitech",
            "model": "M650",
            "name": "Signature M650 石墨灰 910-006259 標準尺寸靜音滑鼠",
            "type": "standard",
            "rank": 18,
            "score": 83,
            "budget": "mid",
            "channel": "tw",
            "price": {
                "currency": "TWD",
                "amount": 990,
                "converted": 990,
                "basis": "retailer_current",
                "confidence": "2026-08-31 Chrome原頁預設黑色910-006259，990元及加入購物車可用；搜尋摘要1090已不符當前畫面。"
            },
            "installation": {
                "status": "not_stated",
                "note": "不涉及到府施工；Bolt接收器需USB埠，Bluetooth需主機支援BLE。"
            },
            "image": "https://store.logitech.tw/cdn/shop/products/m650-611461.jpg?v=1761498503&width=1220",
            "buyUrl": "https://store.logitech.tw/products/m650",
            "buyLabel": "羅技 Logi 台灣網路旗艦店",
            "specs": [
                "類型：一般平置靜音辦公滑鼠，Signature M650標準尺寸石墨灰910-006259；非M650 L大型或企業版",
                "握型／慣用手：標準中小手尺寸、左側快捷鍵，橡膠側握與柔軟拇指區；先試握",
                "連線：Logi Bolt USB接收器或Bluetooth低耗電，最遠10m依環境；同一配對通道，非Easy-Switch三裝置款",
                "感測器／解析度：羅技先進光學追蹤，額定400 DPI、最高4000 DPI；未公布晶片型號",
                "回報率：所查官方頁未標示，不以雙模連線推定延遲",
                "按鍵／滾輪：5鍵含前後側鍵与中鍵，SmartWheel逐行／快速慣性捲動；側鍵加滾輪水平捲動預設開啟，可用Options+調整",
                "供電／續航：1顆AA鹼性電池隨附；Bolt最長24個月、Bluetooth最長20個月，依使用條件",
                "系統／軟體：Bolt支援Windows10/11以上、macOS10.10以上、Linux、ChromeOS；BLE需macOS10.15以上，另支援iPadOS13.4、Android5以上；Options+限Windows/macOS",
                "尺寸：高 108.2 x 寬 61 x 深 38.8 mm",
                "重量：101.4 g",
                "隨附配件：無線滑鼠、Logi Bolt USB接收器、1顆AA電池、使用者文件"
            ],
            "description": "990元標準尺寸靜音辦公款，包含Bolt接收器、五鍵與SmartWheel。適合主要固定一台電腦、希望側鍵方便且不吵的使用者；雙模不是多台快速切換，若常換工作與私人電腦要考慮M750或M720。",
            "pros": [
                "SmartWheel兼顧逐行與快速捲動，五鍵可在Options+自訂",
                "Bolt接收器與AA電池隨附",
                "官方列SilentTouch減少點擊噪音，適合共享工作空間"
            ],
            "cons": [
                "只有同一配對通道，Bluetooth與Bolt更換連線需重新配對",
                "側鍵／水平捲動與遊戲長按用途須先測設定，不當電競款",
                "台灣官方列一年有限硬體保固，101.4g不是極輕量"
            ],
            "bestFor": "主要固定一台電腦、喜歡標準小尺寸與安靜側鍵辦公操作的人。",
            "recommendation": "靜音辦公參考；先試握108.2mm機身並確認單裝置配對符合需求，若使用側鍵長按則先檢查水平捲動設定。",
            "releaseDate": "2022-01",
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
                "note": "已查M650與6259歷史／史低、飛比及BigGo。飞比779／1090等為當期比價、含新客折扣及不同色尺寸；BigGo原页顯示白色1090與M750混合範圍，未還原6259日期低點。PTT約950為未還原優惠券條件與顏色的個人購入；法亞22／22.99歐未確認6259原賣家歷史條件。990只是本日官店已選黑色現價。"
            },
            "issueResearch": {
                "status": "no_common_issue",
                "checkedAt": "2026-08-31",
                "summary": "截至查核日，查無達門檻的集中負評／災情",
                "issues": [],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "query": "site:reddit.com \"M650\" (issue OR problem)",
                        "targetHost": "reddit.com",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22M650%22%20(issue%20OR%20problem)"
                    },
                    {
                        "platform": "PTT",
                        "query": "site:ptt.cc \"M650\" (問題 OR 故障 OR 連點)",
                        "targetHost": "ptt.cc",
                        "queryUrl": "https://www.google.com/search?q=site%3Aptt.cc%20%22M650%22%20(%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E9%80%A3%E9%BB%9E)"
                    }
                ]
            },
            "voltage": "1顆AA鹼性電池；所查官方頁未列額定V/A，不自行補市電或充電規格。",
            "warranty": "台灣官方列1年有限硬體保固，依原廠條款與購買憑證。",
            "tags": [
                "辦公",
                "靜音",
                "雙模",
                "AA電池",
                "台灣公司貨"
            ]
        },
        {
            "id": "mouse-logitech-m720",
            "category": "mouse",
            "brand": "Logitech",
            "model": "M720",
            "name": "M720 Triathlon 黑色 910-004793 多工無線滑鼠",
            "type": "standard",
            "rank": 9,
            "score": 84,
            "budget": "mid",
            "channel": "tw",
            "price": {
                "currency": "TWD",
                "amount": 888,
                "converted": 888,
                "basis": "retailer_current",
                "confidence": "2026-08-31 Chrome重新開啟獨立單品DSAR0S-1900HRWXS，主商品網路价888/1990，數量1、加入購物車與立即購買可用，PChome倉出24小時；主商品沒有加購條件，相關鍵盤套裝1880/2380/4580另列。不扣滿2000折200或銀行回饋。舊搜尋摘要1790不是目前原頁價。"
            },
            "installation": {
                "status": "not_stated",
                "note": "不涉及到府施工；接收器使用USB埠，藍牙則需主機支援BLE。"
            },
            "image": "https://img.pchome.com.tw/cs/items/DSAR0S1900HRWXS/000001_1787591611.jpg",
            "buyUrl": "https://24h.pchome.com.tw/prod/DSAR0S-1900HRWXS",
            "buyLabel": "PChome 24h 台灣新品",
            "specs": [
                "類型：一般平置多工辦公無線滑鼠，M720 Triathlon黑色910-004793單品",
                "握型／慣用手：右手全尺寸掌心支撐、橡膠塗層；不據此保證消除手腕不適",
                "連線：Bluetooth Low Energy或Unifying 2.4GHz，最遠10m依環境；Easy-Switch三台設備",
                "感測器／解析度：高精準光學追蹤，官方列1000± DPI；未公布感測器晶片型號",
                "回報率：所查官方頁未標示，不以無線標準推定延遲",
                "按鍵／滾輪：8鍵，雙模式高速滾輪、左右傾斜及中鍵，設備切換鍵在側面",
                "供電／續航：1顆AA電池隨附，最長24個月依使用條件；額定電壓未標示",
                "系統／軟體：Unifying支援Windows10/11以上、macOS10.5以上、ChromeOS、Linux2.6+；BLE另支援Android5、iPadOS13.4以上；Windows/macOS用Options+自訂",
                "尺寸：高 115 x 寬 74 x 深 45 mm",
                "重量：135 g（含 AA 電池）",
                "隨附配件：M720滑鼠、Unifying接收器、1顆AA電池與使用者文件"
            ],
            "description": "888元台灣新品單支，三裝置切換鍵放在側邊，配高速滾輪與左右傾斜，適合跨工作電腦、多文件的右手使用者。135g含電池偏辦公支撐取向，不當極輕量競技選擇。",
            "pros": [
                "側邊切換三台設備，無需翻到鼠底",
                "高速雙模式與左右傾斜滾輪，適合長文件及試算表",
                "台灣新品單支888元，AA電池隨附"
            ],
            "cons": [
                "跨Reddit與Mobile01已核八位左鍵異常連點或拖曳中斷",
                "135g含電池、右手輪廓，不適合所有手型與輕量偏好",
                "Unifying不是Logi Bolt，規劃共用接收器前須確認相容性"
            ],
            "bestFor": "需要在多台電腦之間切換、操作長文件與試算表的右手辦公使用者。",
            "recommendation": "多工辦公參考；先試握與確認設備作業系統，保留單品購買憑證，退換貨期間測試左鍵单擊及拖曳；八人網路回報不能換算故障率。",
            "releaseDate": "2016-09-28",
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
                "note": "本輪查M720的BigGo、飛比、PTT史低查詢及PChome原價；比價頁888/1290/1790是爬取現價，未還原帶日期且可購的完整歷史最低點。799私人賣場、腳貼/外殼配件、兩入/五入與鍵鼠套組折算均排除。PChome加購專頁888不作無條件史低；獨立單品本次也888仍只是現價，不推定史低。"
            },
            "issueResearch": {
                "status": "common_issue",
                "checkedAt": "2026-08-31",
                "summary": "M720 有跨 Reddit、Mobile01 的八位獨立使用者回報左鍵異常連點或持續拖曳時無法保持。",
                "issues": [
                    {
                        "title": "左鍵異常連點或拖曳中斷",
                        "detail": "八位第一人稱回報來自四個原始討論頁、兩個網站，已逐人核對。部分在使用多年後出現，有人清理或維修後改善，不代表全部新品會故障，也不能由自選網路回報估算故障率。退換貨期宜測單擊、持續選取與拖曳，異常優先使用台灣售後，不建議因論壇教學自行拆焊影響保固。",
                        "reportCount": 8,
                        "sources": [
                            {
                                "platform": "Mobile01",
                                "title": "羅技M720滑鼠連點 DIY換微動開關",
                                "url": "https://www.mobile01.com/topicdetail.php?f=497&t=6406235"
                            },
                            {
                                "platform": "Mobile01",
                                "title": "請問有可以快速切換配對裝置的藍芽滑鼠嗎？",
                                "url": "https://www.mobile01.com/topicdetail.php?f=497&t=5769430"
                            },
                            {
                                "platform": "Reddit",
                                "title": "Two and a half years: a normal life span for a M720 mouse?",
                                "url": "https://www.reddit.com/r/logitech/comments/1aydrnj/two_and_a_half_years_a_normal_life_span_for_a/"
                            },
                            {
                                "platform": "Reddit",
                                "title": "M720 Click Issue. Recommendations?",
                                "url": "https://www.reddit.com/r/logitech/comments/pdhoi6/m720_click_issue_recommendations/"
                            }
                        ]
                    }
                ],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "query": "site:reddit.com \"M720\" \"double click\"",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22M720%22%20%22double%20click%22",
                        "targetHost": "reddit.com"
                    },
                    {
                        "platform": "Mobile01",
                        "query": "site:mobile01.com \"M720\" \"連點\"",
                        "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22M720%22%20%22%E9%80%A3%E9%BB%9E%22",
                        "targetHost": "mobile01.com"
                    }
                ]
            },
            "voltage": "1顆AA電池供電；來源未列額定V/A，不推定外接充電需求。",
            "warranty": "台灣官方列1年有限硬體保固，依原廠條款與購買憑證。",
            "tags": [
                "辦公",
                "多工",
                "三裝置",
                "AA電池",
                "台灣公司貨"
            ]
        },
        {
            "id": "mouse-logitech-g502-hero",
            "category": "mouse",
            "brand": "Logitech",
            "model": "G502 HERO",
            "name": "G502 HERO 黑色 910-005473 有線滑鼠",
            "type": "standard",
            "rank": 16,
            "score": 84,
            "budget": "mid",
            "channel": "tw",
            "price": {
                "currency": "TWD",
                "amount": 1290,
                "converted": 1290,
                "basis": "retailer_current",
                "confidence": "2026-08-31 Chrome原頁明列910-005473、1290元及可加入購物車；商品特色說明目前塑料線。"
            },
            "installation": {
                "status": "not_stated",
                "note": "不涉及到府施工；需USB連接埠並保留線材移動空間。"
            },
            "image": "https://store.logitech.tw/cdn/shop/files/G502LIGHTSPEED_EC_-1.jpg?v=1770259313",
            "buyUrl": "https://store.logitech.tw/products/g502hero?variant=40018409127959",
            "buyLabel": "羅技 Logi 台灣網路旗艦店",
            "specs": [
                "類型：一般平置有線電競滑鼠，G502 HERO黑色910-005473；現售官店改塑料線，非LIGHTSPEED或G502 X",
                "握型／慣用手：拇指側鍵與側墊造型；官方未列指定握型與手掌尺寸，建議實際試握",
                "連線：USB有線；台灣官方代理規格列2.1m線材，官店明示實品為塑料線",
                "感測器／解析度：HERO，100–25600 DPI；最高5組內建設定檔需韌體127.1.7",
                "回報率：USB 1000Hz；頻率不是實測端到端延遲",
                "按鍵／滾輪：11個可自訂按鍵，雙模式高速滾輪；LIGHTSYNC RGB單區",
                "供電／續航：USB有線供電，不需電池；所查來源未明列額定V/A",
                "系統／軟體：Windows7、macOS10.11或以上、ChromeOS與USB埠；進階設定使用Logitech G HUB",
                "尺寸：高 40 x 寬 75 x 深 131.2 mm",
            "重量：121 g（僅滑鼠）",
                "隨附配件：G502 HERO滑鼠、五個3.6g配重及收納盒、使用者文件"
            ],
            "description": "1290元的官店多鍵有線款，提供11鍵、双模式滾輪及可調配重，適合需要快捷鍵而接受較重滑鼠的人。現行25K數值來自官方軟體升級；121g重量與塑料線牽引需一併評估，不以DPI作實際瞄準品質排名。",
            "pros": [
                "11鍵自訂和雙模式滾輪兼顧遊戲快捷鍵與長文件",
                "可用五個配重調整重量與平衡",
                "台灣官方列兩年有限硬體保固"
            ],
            "cons": [
                "已核跨兩站六位同型號按鍵連點／保持中斷，歷史回報批次未全部識別",
                "121g未加配重已偏重，不適合追求極輕量者",
                "USB有線需整理線材；G HUB與內建模式設定要留意"
            ],
            "bestFor": "重視多鍵操作、慣用較重手感且可接受有線的遊戲與工作使用者。",
            "recommendation": "多鍵有線參考；試握確認拇指側鍵及重量，退換貨期間測單擊、拖曳與長按。歷史同型號回報不等於現售塑料線批次的故障率。",
            "releaseDate": "2018-10",
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
                "note": "BigGo／神腦1390009有2026-08-10的1190元記錄且現可購，但原頁未印910-005473及塑料線版本，未獨立閉合與本選定官店版本的對應。2022-11-05 PTT提momo1111元，原促銷頁未還原，另8%點數不算售價。飛比SKU結果1290是現價；不把任一候選或本日1290推定本版本史低。"
            },
            "issueResearch": {
                "status": "common_issue",
                "checkedAt": "2026-08-31",
                "summary": "G502 HERO 有跨 PTT 與 Reddit 的六位獨立使用者回報按鍵異常連點或按住時中斷。",
                "issues": [
                    {
                        "title": "按鍵異常連點或保持中斷",
                        "detail": "保守採六位同型號第一人稱回報，保固替換品與同人多次留言只計一次。現售官店已改塑料線，但回報者的線材／生產批次未逐筆確認，不能推定目前批次故障率；2020年的25K更新屬官方軟體升級。退換貨期間宜測單擊、拖曳與長按；異常優先找台灣售後，不把敲擊或自行拆焊當通用修復方法。",
                        "reportCount": 6,
                        "sources": [
                            {
                                "platform": "PTT",
                                "title": "[問題] 江子翠附近修滑鼠微動",
                                "url": "https://www.ptt.cc/bbs/BigBanciao/M.1636585555.A.62D.html"
                            },
                            {
                                "platform": "PTT",
                                "title": "[公告] 公關帳號水桶",
                                "url": "https://www.ptt.cc/bbs/PC_Shopping/M.1729069800.A.DAF.html"
                            },
                            {
                                "platform": "Reddit",
                                "title": "G502 Hero Double Click issue",
                                "url": "https://www.reddit.com/r/LogitechG/comments/cxm3vh/g502_hero_double_click_issue/"
                            },
                            {
                                "platform": "Reddit",
                                "title": "G502 Hero double clicking issue",
                                "url": "https://www.reddit.com/r/LogitechG/comments/hg2woh/g502_hero_double_clicking_issue/"
                            },
                            {
                                "platform": "Reddit",
                                "title": "Logitech G502 Hero double-click issue",
                                "url": "https://www.reddit.com/r/LogitechG/comments/kng7no/logitech_g502_hero_doubleclick_issue/"
                            },
                            {
                                "platform": "Reddit",
                                "title": "G502 Hero Double-click issue",
                                "url": "https://www.reddit.com/r/LogitechG/comments/15f4fea/g502_hero_doubleclick_issue/"
                            }
                        ]
                    }
                ],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "query": "site:reddit.com \"G502 HERO\" (double click OR issue)",
                        "targetHost": "reddit.com",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22G502%20HERO%22%20(double%20click%20OR%20issue)"
                    },
                    {
                        "platform": "PTT",
                        "query": "site:ptt.cc \"G502 HERO\" (連點 OR 故障 OR 問題)",
                        "targetHost": "ptt.cc",
                        "queryUrl": "https://www.google.com/search?q=site%3Aptt.cc%20%22G502%20HERO%22%20(%E9%80%A3%E9%BB%9E%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E5%95%8F%E9%A1%8C)"
                    }
                ]
            },
            "voltage": "USB有線供電；官方與官店所查頁未列額定V/A，不能自行推定外接充電器或市電規格。",
            "warranty": "台灣官方列2年有限硬體保固，依原廠條款與購買憑證。",
            "tags": [
                "電競",
                "有線",
                "多鍵",
                "配重",
                "台灣公司貨"
            ]
        },
        {
            "id": "mouse-logitech-g304",
            "category": "mouse",
            "brand": "Logitech",
            "model": "G304",
            "name": "G304 LIGHTSPEED 白色 910-005294 無線滑鼠",
            "type": "standard",
            "rank": 24,
            "score": 82,
            "budget": "value",
            "channel": "tw",
            "price": {
                "currency": "TWD",
                "amount": 799,
                "converted": 799,
                "basis": "retailer_current",
                "confidence": "2026-08-31 Chrome官店選白色910-005294，當頁799元且加入購物車可用；不沿用搜尋摘要990元。"
            },
            "installation": {
                "status": "not_stated",
                "note": "不涉及到府施工；需可用USB埠安置LIGHTSPEED接收器，留意接收器與其他無線設備位置。"
            },
            "image": "https://store.logitech.tw/cdn/shop/products/g304-lightspeed-623471.jpg?v=1748793663&width=1220",
            "buyUrl": "https://store.logitech.tw/products/g304?variant=40018407981079",
            "buyLabel": "羅技 Logi 台灣網路旗艦店",
            "specs": [
                "類型：一般平置無線電競滑鼠，原G304 LIGHTSPEED白色910-005294，非G304 X SUPERLIGHT",
                "握型／慣用手：精巧平置造型；官方未列指定握型、慣用手與手掌尺寸，側鍵可達性請實際試握",
                "連線：LIGHTSPEED無線USB接收器；接收器可收納於滑鼠",
                "感測器／解析度：HERO光學感應器，200–12000 DPI，1組內建設定檔",
                "回報率：1000Hz；回報頻率不等於實測端到端延遲",
                "按鍵／滾輪：6個可自訂按鈕，含中鍵、DPI及兩側鍵；機械按鈕張力系統",
                "供電／續航：1顆3號AA電池，遊戲模式最長250小時，省電模式日常使用最長約9個月；實際依設定與使用情況",
                "系統／軟體：Windows7、macOS10.13或以上、ChromeOS及USB埠；進階設定用Logitech G HUB",
                "尺寸：高 38.2 x 寬 62.1 x 長 116.6 mm",
                "重量：99 g",
                "隨附配件：G304滑鼠、LIGHTSPEED USB接收器與使用者文件；現行官網包裝清單未另列電池或延長線"
            ],
            "description": "799元的官店原版G304，用一顆AA電池供電並提供HERO感應器、六鍵與接收器收納。偏重經濟型無線遊戲與一般工作，不以12000DPI推定實際瞄準表現；99g亦不是極輕量競技定位。",
            "pros": [
                "台灣官店799元，原廠列兩年有限硬體保固",
                "AA供電免充電等待，USB接收器可收納",
                "HERO感應器、六鍵自訂及1000Hz規格完整"
            ],
            "cons": [
                "已核實跨PTT與Reddit六位使用者按鍵連點，需重視退換貨測試及保固",
                "99g較新世代極輕量競技款重，手大者先試握",
                "需占用USB接收器埠；無線環境與電池狀況仍可能影響使用"
            ],
            "bestFor": "預算有限、願意使用AA電池並保留保固憑證的無線遊戲入門者。",
            "recommendation": "入門無線電競參考；先確認116.6mm長度是否合手，試用單擊與持續拖曳，出現連點直接找售後，勿把G304 X的改版規格套用本款。",
            "releaseDate": "2018-05",
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
                "note": "已查BigGo白色、PTT/Yahoo688元及2021/2022年479/599元候選。688文雖寫黑白，原Yahoo頁當前白色售完，未獨立還原當時白色SKU可購條件；479未辨配色、599原優惠頁未還原，不宣稱其中任一為本選定版本最低。澳洲7.24價串接混合AliExpress賣場排除；799僅本次官店選白現價。"
            },
            "issueResearch": {
                "status": "common_issue",
                "checkedAt": "2026-08-31",
                "summary": "G304 有跨 PTT 與 Reddit 的六位獨立使用者回報按鍵異常連點；替換機及同一人多支不重複計數。",
                "issues": [
                    {
                        "title": "按鍵異常連點",
                        "detail": "保守採六位獨立使用者的原始G304第一人稱回報，替換機與同一人多支只算一次。這不是故障率估算；斷線、休眠、電池套筒及滾輪老化不合併。建議保留購買憑證，在退換貨期間測試單擊及拖曳，出現異常優先走原廠售後；不把網友噴油、吹氣或自行拆焊作為通用安全修復建議。",
                        "reportCount": 6,
                        "sources": [
                            {
                                "platform": "PTT",
                                "title": "[閒聊] 羅技G304滑鼠常常瞬斷的問題",
                                "url": "https://www.ptt.cc/bbs/Key_Mou_Pad/M.1709636091.A.5A3.html"
                            },
                            {
                                "platform": "PTT",
                                "title": "Re: [滑鼠] 羅技 G304 首發拆解 & 改裝",
                                "url": "https://www.ptt.cc/bbs/Key_Mou_Pad/M.1609601887.A.17E.html"
                            },
                            {
                                "platform": "PTT",
                                "title": "[心得] G304滑鼠連點，不用換微動開關，WD40搞定",
                                "url": "https://www.ptt.cc/bbs/PC_Shopping/M.1689938296.A.A0C.html"
                            },
                            {
                                "platform": "PTT",
                                "title": "[心得] 羅技G304 RMA完整心得 ft. SSR客服 (圖多",
                                "url": "https://www.ptt.cc/bbs/PC_Shopping/M.1676135808.A.1F4.html"
                            },
                            {
                                "platform": "Reddit",
                                "title": "~200 Rs. DIY Fix for Double click issue",
                                "url": "https://www.reddit.com/r/IndianGaming/comments/1h0e70g/200_rs_diy_fix_for_double_click_issue/"
                            },
                            {
                                "platform": "Reddit",
                                "title": "Double click issue on Logitech G304 wireless",
                                "url": "https://www.reddit.com/r/IndianGaming/comments/p59d12/double_click_issue_on_logitech_g304_wireless/"
                            }
                        ]
                    }
                ],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "query": "site:reddit.com \"G304\" (double click OR issue)",
                        "targetHost": "reddit.com",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22G304%22%20(double%20click%20OR%20issue)"
                    },
                    {
                        "platform": "PTT",
                        "query": "site:ptt.cc \"G304\" (連點 OR 故障 OR 問題)",
                        "targetHost": "ptt.cc",
                        "queryUrl": "https://www.google.com/search?q=site%3Aptt.cc%20%22G304%22%20(%E9%80%A3%E9%BB%9E%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E5%95%8F%E9%A1%8C)"
                    }
                ]
            },
            "voltage": "1顆AA電池供電、USB接收器接電腦；所查官頁未列額定V/A，不推定外接充電器或市電插頭需求。",
            "warranty": "台灣官方列2年有限硬體保固，依原廠條款及購買憑證。",
            "tags": [
                "電競",
                "無線",
                "AA電池",
                "入門",
                "台灣公司貨"
            ]
        },
        {
            "id": "mouse-logitech-g102-lightsync",
            "category": "mouse",
            "brand": "Logitech",
            "model": "G102",
            "name": "G102 LIGHTSYNC 第二代 莫蘭紫 910-005856 有線滑鼠",
            "type": "standard",
            "rank": 23,
            "score": 80,
            "budget": "value",
            "channel": "tw",
            "price": {
                "currency": "TWD",
                "amount": 499,
                "converted": 499,
                "basis": "retailer_current",
                "confidence": "2026-08-31 Chrome已選莫蘭紫910-005856，旗艦店499、可加入購物車。"
            },
            "installation": {
                "status": "not_stated",
                "note": "不涉及到府施工；以USB接電腦，桌面須留線材移動空間。"
            },
            "image": "https://store.logitech.tw/cdn/shop/products/g102-rgb-650925.jpg?v=1737302398&width=1220",
            "buyUrl": "https://store.logitech.tw/products/g102?variant=40018407653399",
            "buyLabel": "羅技 Logi 台灣網路旗艦店",
            "specs": [
                "類型：一般平置有線電競滑鼠，G102 LIGHTSYNC第二代莫蘭紫910-005856，非Prodigy",
                "握型／慣用手：一般平置握持；官方未列指定握型與手掌尺寸，側鍵可達性需實際試握",
                "連線：USB有線，連接線2.1m；無無線接收器或Bluetooth",
                "感測器／解析度：遊戲級感應器（晶片型號未標示），可調200–8000 DPI",
                "回報率：USB 1000Hz；這是回報頻率，不等於實測端到端延遲",
                "按鍵／滾輪：6個可自訂按鈕、一般滾輪，LIGHTSYNC RGB；非高速自由捲動輪",
                "供電／續航：USB有線供電、無需電池；所查官方頁未標示額定V/A與功耗",
                "系統／軟體：Windows7、macOS10.13或以上、ChromeOS與USB埠；進階自訂採G HUB，勿套舊Prodigy的LGS設定相容性",
                "尺寸：高 38.2 x 寬 62.1 x 長 116.6 mm",
                "重量：85 g",
                "隨附配件：G102 LIGHTSYNC滑鼠及使用者文件"
            ],
            "description": "保留2.1m有線、六鍵與RGB功能的低價入門電競選項。用官網實際標示的高／寬／長順序與85g比較，不把8000DPI或1000Hz當作競技表現保證；採購與研究鎖定第二代LIGHTSYNC。",
            "pros": [
                "499元官店入門價、台灣兩年有限硬體保固",
                "有線不需充電或更換電池，六鍵可自訂",
            "85g本體、LIGHTSYNC RGB選項"
            ],
            "cons": [
                "需安排2.1m線材，無無線使用模式",
                "有第二代按鍵與G HUB候選負評；本輪未達六人兩站同一問題門檻，不代表零故障",
                "非極輕量新世代競技款，也沒有辦公高速滾輪"
            ],
            "bestFor": "預算有限、可接受有線並需要側鍵與RGB的遊戲入門者。",
            "recommendation": "入門電競參考：先試握與單擊／拖曳，保留台灣購買憑證；不要把Prodigy版本的規格或故障數直接套給本筆第二代。",
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
                "checkedAt": "2026-08-31",
                "note": "本輪查G102莫蘭紫5856的BigGo、iFG、3CTown、順發與PTT價格。BigGo iFG紫色近一年紀錄僅499，原通路現已售完且未建立過往可購庫存；3CTown480及順發499為現價、非帶日期史低。PTT 2021年G102 88元未在正文確定紫色／SKU，不能跨色版本採用。499為本次官店選色現價，不宣称史低。"
            },
            "issueResearch": {
                "status": "no_common_issue",
                "checkedAt": "2026-08-31",
                "summary": "截至查核日，查無達門檻的集中負評／災情",
                "issues": [],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "query": "site:reddit.com \"G102\" \"LIGHTSYNC\" (double click OR issue)",
                        "targetHost": "reddit.com",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22G102%22%20%22LIGHTSYNC%22%20(double%20click%20OR%20issue)"
                    },
                    {
                        "platform": "Mobile01",
                        "query": "site:mobile01.com \"G102\" \"LIGHTSYNC\" (連點 OR 故障 OR 問題)",
                        "targetHost": "mobile01.com",
                        "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22G102%22%20%22LIGHTSYNC%22%20(%E9%80%A3%E9%BB%9E%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E5%95%8F%E9%A1%8C)"
                    }
                ]
            },
            "voltage": "USB有線供電；所查官方資料未標明額定V/A，不推定充電器或插頭需求。",
            "warranty": "台灣官方列2年有限硬體保固，依台灣原廠條款與購買憑證。",
            "tags": [
                "電競",
                "有線",
                "RGB",
                "入門",
                "台灣公司貨"
            ]
        },
        {
            "id": "mouse-logitech-mx-vertical",
            "category": "mouse",
            "brand": "Logitech",
            "model": "MX Vertical",
            "name": "MX Vertical 石墨灰 910-005450 充電式垂直滑鼠",
            "type": "vertical",
            "rank": 11,
            "score": 83,
            "budget": "premium",
            "channel": "tw",
            "price": {
                "currency": "TWD",
                "amount": 2990,
                "converted": 2990,
                "basis": "retailer_current",
                "confidence": "2026-08-31 Chrome台灣旗艦店MX Vertical單一石墨灰910-005450頁2990，可加入購物車。"
            },
            "installation": {
                "status": "not_stated",
                "note": "不涉及到府施工；自行配對與USB充電，垂直握姿須試握適應。"
            },
            "image": "https://store.logitech.tw/cdn/shop/files/Vertical_01.jpg?v=1770260291&width=1220",
            "buyUrl": "https://store.logitech.tw/products/vertical",
            "buyLabel": "羅技 Logi 台灣網路旗艦店",
            "specs": [
                "類型：57°垂直人體工學滑鼠，石墨灰910-005450，非Lift或軌跡球",
                "握型／慣用手：右手握手姿勢；舒適度取決於手型與桌面高度，需試握，不保證改善醫療症狀",
                "連線：Unifying USB接收器、Bluetooth低耗電4.2或USB-C有線；Easy-Switch最多3台與Logitech Flow",
                "感測器／解析度：高精度光學，額定1000／1600 DPI，可調400–4000 DPI、50 DPI步長",
                "回報率：所查官方資料未標示，不由DPI或連線型態推定實測延遲",
                "按鍵／滾輪：4個可自訂控制（前進、後退、DPI、中鍵）及左右鍵；精確滾輪，非MagSpeed",
                "供電／續航：內建240 mAh充電式鋰電池、USB-C充電，最長4個月依使用條件；額定V/A未標示",
                "系統／軟體：Windows10/11、macOS10.15、ChromeOS、Linux；Bluetooth另支援iPadOS13.4以上；Windows/macOS可用Logi Options+",
                "尺寸：高 120 x 寬 79 x 深 78.5 mm",
                "重量：125 g",
                "隨附配件：滑鼠、Unifying USB接收器、USB-A轉USB-C充電連接線、使用者文件"
            ],
            "description": "以右手57°握持與USB-C充電為主的辦公垂直滑鼠，可在三台裝置間切換。本筆尺寸及125g採台灣現行官網，保留其高／寬／深標籤；舊官方PDF另列高78.5×寬79×長120mm、135g，研究中保留差異，採購前可再向原廠確認。",
            "pros": [
                "隨附Unifying接收器與A轉C線，支援無線及有線使用",
                "三裝置切換與Flow辦公工作流程",
                "內建充電電池，官方最長4個月續航"
            ],
            "cons": [
                "左鍵異常連點／拖曳中斷已達六人兩站查核門檻，耐用性風險要納入",
                "右手專用且垂直握姿需要適應，不是左右手通用",
                "現行台灣官網与舊官方PDF重量／軸標不同；無MagSpeed高速滾輪"
            ],
            "bestFor": "願意試握垂直角度、需要三裝置與有線備援的右手辦公使用者。",
            "recommendation": "垂直充電型參考：先確認握感與尺寸，再把已達門檻的左鍵可靠性回報列入取捨。優先使用台灣保固與退換貨期測試，不以人体工學名義承諾醫療效果。",
            "releaseDate": "2018-09",
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
            "note": "已查 exact 910-005450 價格搜尋、飛比與PTT。飛比同SKU當前2690/2988/3290不是帶日期的歷史最低；PTT 2022-10-24提2490但未附可還原的原始通路頁，另稱低於1700含信用卡／點數回饋，排除。LBJ原頁未返回可核對內容。保留本次Chrome台灣官店2990现價，不推定史低。 飛比2690轉回燦坤205985原頁，當前為2990且明列910-005450，因此不採比價快取低價。"
            },
            "issueResearch": {
                "status": "common_issue",
                "checkedAt": "2026-08-31",
                "summary": "MX Vertical 有跨 Reddit、iFixit 的六位独立使用者回報左鍵異常連點或持續拖曳時自行鬆開。",
                "issues": [
                    {
                        "title": "左鍵異常連點或拖曳中斷",
                        "detail": "已核對六位第一人稱同型號回報；部分作者更換滑鼠或微動後改善，也有人替換機再次出現。這是回報集合而非故障率估算，不推定所有新品或地域批次都會發生。建議在退換貨期間測試持續選取、拖曳和單擊，異常時優先向台灣售後處理，勿因網路教學自行拆焊影響保固。",
                        "reportCount": 6,
                        "sources": [
                            {
                                "platform": "Reddit",
                                "title": "MX Vertical mouse issues",
                                "url": "https://www.reddit.com/r/logitech/comments/148fo27/mx_vertical_mouse_issues/"
                            },
                            {
                                "platform": "Reddit",
                                "title": "Logitech MX Vertical Mouse Intermittent Left",
                                "url": "https://www.reddit.com/r/logitech/comments/17av6vm/logitech_mx_vertical_mouse_intermittent_left/"
                            },
                            {
                                "platform": "Reddit",
                                "title": "Logi MX Vertical Mouse Left Click Acting Weird",
                                "url": "https://www.reddit.com/r/LogitechG/comments/ql05u5/logi_mx_vertical_mouse_left_click_acting_weird/"
                            },
                            {
                                "platform": "Reddit",
                                "title": "Do not buy MX Vertical",
                                "url": "https://www.reddit.com/r/logitech/comments/1ja2xsx/do_not_buy_mx_vertical/"
                            },
                            {
                                "platform": "iFixit",
                                "title": "Logitech MX Vertical Left and Right Mouse Button Microswitch Replacement",
                                "url": "https://www.ifixit.com/Guide/Logitech+MX+Vertical+Left+and+Right+Mouse+Button+Microswitch+Replacement/138168"
                            }
                        ]
                    }
                ],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "query": "site:reddit.com \"MX Vertical\" (problem OR failure)",
                        "targetHost": "reddit.com",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22MX%20Vertical%22%20(problem%20OR%20failure)"
                    },
                    {
                        "platform": "Mobile01",
                        "query": "site:mobile01.com \"MX Vertical\" (故障 OR 問題 OR 連點)",
                        "targetHost": "mobile01.com",
                        "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22MX%20Vertical%22%20(%E6%95%85%E9%9A%9C%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E9%80%A3%E9%BB%9E)"
                    }
                ]
            },
            "voltage": "USB-C充電／內建240 mAh鋰電池；所查官方資料未標明額定V/A，不猜測。",
            "warranty": "台灣官方列1年有限硬體保固，依台灣購買憑證與原廠條款。",
            "tags": [
                "辦公",
                "垂直滑鼠",
                "右手",
                "USB-C充電",
                "多裝置",
                "台灣公司貨"
            ]
        },
        {
            "id": "mouse-logitech-lift",
            "category": "mouse",
            "brand": "Logitech",
            "model": "Lift",
            "name": "Lift 珍珠白 910-006483 右手人體工學垂直滑鼠",
            "type": "vertical",
            "rank": 8,
            "score": 87,
            "budget": "mid",
            "channel": "tw",
            "price": {
                "currency": "TWD",
                "amount": 2490,
                "converted": 2490,
                "basis": "retailer_current",
                "confidence": "2026-08-31 Chrome核對台灣旗艦店珍珠白右手版910-006483、2490及加入購物車。"
            },
            "installation": {
                "status": "not_stated",
                "note": "不涉及到府施工；自行裝入電池與配對，垂直握姿需要適應與實際試握。"
            },
            "image": "https://store.logitech.tw/cdn/shop/files/Lift_FOB_Top_Off_White.png?v=1773626475&width=1220",
            "buyUrl": "https://store.logitech.tw/products/lift?variant=40213292711959",
            "buyLabel": "羅技 Logi 台灣網路旗艦店",
            "specs": [
                "類型：57°垂直人體工學滑鼠，珍珠白910-006483右手一般版，非左手／Mac／Business版",
                "握型／慣用手：右手握手姿勢，官方定位小至中型手掌；舒適度需實際試握，不保證改善醫療症狀",
                "連線：Bluetooth低耗電或隨附Logi Bolt USB接收器；最多3台裝置與Logitech Flow",
                "感測器／解析度：羅技先進光學追蹤，額定1000 DPI、可調400–4000 DPI、100 DPI步長",
                "回報率：所查官方頁未標示，不由Bluetooth或DPI推定實測延遲",
                "按鍵／滾輪：6按鈕含前進／後退與中鍵；SmartWheel支援逐行精準與快速捲動",
                "供電／續航：隨附1顆AA電池，最長24個月、依使用條件；所查官方頁未明示額定V",
                "系統／軟體：Windows10/11、macOS10.15、ChromeOS、Linux；藍牙另支援iPadOS14、Android8以上；Windows/macOS選用Logi Options+",
                "尺寸：高 108 x 寬 70 x 深 71 mm",
                "重量：125 g",
                "隨附配件：Lift滑鼠、Logi Bolt USB接收器、1顆AA電池、快速入門指南"
            ],
            "description": "以小至中型右手為定位的57°垂直滑鼠，結合靜音SmartWheel、可自訂側鍵與三裝置工作流程。尺寸依台灣官網原始高／寬／深順序保留；白色握把需定期依原廠清潔指引保養。",
            "pros": [
                "小至中型手掌的垂直握姿選項",
                "附Bolt接收器並支援藍牙、最多3台裝置",
                "AA電池最長24個月，台灣一年有限硬體保固"
            ],
            "cons": [
                "大手或偏好低趴握姿者可能不合用，建議試握",
                "白色軟質握把有染色候選回報，需注意清潔且避免自行使用強力清潔劑",
                "不是充電型；未公布回報率，不適合據此承諾競技低延遲"
            ],
            "bestFor": "小至中型右手、希望比較垂直握姿並在多台電腦間辦公的人。",
            "recommendation": "辦公垂直型參考：先試握57°角度與側鍵位置。需要較大握持空間可比較MX Vertical；左手者不可買本筆右手白色版。",
            "releaseDate": "2022-04",
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
                "note": "已查Lift白色6483的BigGo、韓國Alltimeprice及台灣官店。韓國比價同頁混合MR0094、6483與多個顏色/賣家，57,530韓元和79,000韓元歷史區塊各屬不同選項，未還原與本筆台灣6483相同原始新品通路條件；BigGo原頁讀取失敗，不能採搜尋摘要為史低。2490為本次選定珍珠白的通路現價。"
            },
            "issueResearch": {
                "status": "no_common_issue",
                "checkedAt": "2026-08-31",
                "summary": "截至查核日，查無達門檻的集中負評／災情",
                "issues": [],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "query": "site:reddit.com \"Logitech Lift\" \"white\" problem",
                        "targetHost": "reddit.com",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22Logitech%20Lift%22%20%22white%22%20problem"
                    },
                    {
                        "platform": "Mobile01",
                        "query": "site:mobile01.com \"Lift\" 羅技 (故障 OR 連點 OR 問題)",
                        "targetHost": "mobile01.com",
                        "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Lift%22%20%E7%BE%85%E6%8A%80%20(%E6%95%85%E9%9A%9C%20OR%20%E9%80%A3%E9%BB%9E%20OR%20%E5%95%8F%E9%A1%8C)"
                    }
                ]
            },
            "voltage": "1顆AA電池；所查官方頁未明示額定V，不推定任意電池種類相容。",
            "warranty": "台灣官方規格列1年有限硬體保固，依原廠條款與台灣購買憑證辦理。",
            "tags": [
                "辦公",
                "垂直滑鼠",
                "右手",
                "小中手",
                "Logi Bolt",
                "多裝置",
                "台灣公司貨"
            ]
        },
    {
        "id": "mouse-logitech-m240",
        "category": "mouse",
        "brand": "Logitech",
        "model": "M240",
        "name": "M240 珍珠白 910-007126 靜音藍牙滑鼠（不附接收器）",
        "type": "standard",
        "rank": 25,
        "score": 80,
        "budget": "value",
        "channel": "tw",
        "price": {
            "currency": "TWD",
            "amount": 629,
            "converted": 629,
            "basis": "retailer_current",
            "confidence": "2026-08-31 Chrome已核對台灣旗艦店選定珍珠白、910-007126、629與加入購物車。搜尋快取599不採為現價。"
        },
        "installation": {
            "status": "not_stated",
            "note": "不涉及到府施工；自行裝入電池並透過藍牙配對。"
        },
        "image": "https://store.logitech.tw/cdn/shop/products/m240-432654.jpg?v=1729181288&width=1220",
        "buyUrl": "https://store.logitech.tw/products/m240?variant=40584388280343",
        "buyLabel": "羅技 Logi 台灣網路旗艦店",
        "specs": [
            "類型：標準型靜音藍牙滑鼠，珍珠白910-007126、不附接收器一般版",
            "握型／慣用手：緊湊左右對稱外形，官方明示可供左右手使用；掌握是否舒適需實際試握",
            "連線：Bluetooth低耗電；另相容Logi Bolt USB接收器但未隨附，不相容其他羅技USB接收器",
            "感測器／解析度：光學追蹤，額定1000 DPI，可調400–4000 DPI、100 DPI步長",
            "回報率：所查官方頁未標示，不由Bluetooth或DPI推定實測延遲",
            "按鍵／滾輪：3按鈕（左右、中鍵）；2D機械式逐行滾輪、SilentTouch",
            "供電／續航：1顆AA電池，最長18個月、依使用條件；所查官方頁未明示額定V",
            "系統／軟體：Windows10/11、macOS11、iPadOS14、ChromeOS、Linux、Android9以上及HID藍牙滑鼠支援；當前官規列Windows/macOS選用Logi Options+",
            "尺寸：高 99 x 寬 60 x 深 39 mm",
            "重量：73.8 g",
            "隨附配件：滑鼠、預裝1顆AA電池、使用者文件；不附Logi Bolt接收器"
        ],
        "description": "小型三鍵辦公滑鼠，以藍牙直接連接筆電或支援HID滑鼠的行動裝置，不占用USB埠。左右對稱外形與靜音按鍵適合移動辦公，但不提供Easy-Switch多裝置快速切換或電競回報率承諾。",
        "pros": [
            "緊湊左右對稱外形，左右手皆可選用",
            "藍牙配對不需接收器，AA電池最長18個月",
            "台灣旗艦店可核對白色SKU與一年有限硬體保固"
        ],
        "cons": [
            "不附Logi Bolt接收器；需接收器連線者另計預算",
            "切換不同電腦需重新配對，不是Easy-Switch多裝置款",
            "三鍵配置無側鍵；游標追蹤与藍牙穩定性需看使用表面、電腦與無線環境"
        ],
        "bestFor": "預算有限、希望空出USB埠且偏好小型靜音滑鼠的左右手筆電使用者。",
        "recommendation": "入門藍牙参考：先確認電腦支援HID藍牙滑鼠，再比較三鍵及小型外形是否合用。需要在多台裝置間快速切換者看M350S或M750；不要將入門藍牙鼠視為競技低延遲方案。",
        "releaseDate": "2023-05-12",
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
            "note": "實查台灣旗艦店、FindPrice比價與Reddit PCPartsUK的英國價格歷史候選。英國白色11.99英鎊表格為機器人转述，未还原台灣7126原始零售歷史；台灣比價含不同顏色、兩入組、平輸與未明SKU現價，沒有獨立確認同版日期最低點。629是本次已選白色的官店現價，非史低。"
        },
        "issueResearch": {
            "status": "no_common_issue",
            "checkedAt": "2026-08-31",
            "summary": "截至查核日，查無達門檻的集中負評／災情",
            "issues": [],
            "checkedSources": [
                {
                    "platform": "Reddit",
                    "query": "site:reddit.com \"M240\" Logitech (issue OR problem OR failure)",
                    "targetHost": "reddit.com",
                    "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22M240%22%20Logitech%20(issue%20OR%20problem%20OR%20failure)"
                },
                {
                    "platform": "Mobile01",
                    "query": "site:mobile01.com \"M240\" 羅技 (問題 OR 故障 OR 災情)",
                    "targetHost": "mobile01.com",
                    "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22M240%22%20%E7%BE%85%E6%8A%80%20(%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E7%81%BD%E6%83%85)"
                }
            ]
        },
        "voltage": "1顆AA電池；所查台灣官方頁未明示額定V，不猜測任意電池種類相容。",
        "warranty": "台灣官方規格列1年有限硬體保固，依原廠條款與台灣購買憑證辦理。",
        "tags": [
            "辦公",
            "台灣公司貨",
            "靜音",
            "Bluetooth",
            "左右手",
            "AA電池"
        ]
    },
{
    "id": "mouse-logitech-m190",
    "category": "mouse",
    "brand": "Logitech",
    "model": "M190",
    "name": "M190 木炭黑 910-005916 全尺寸無線滑鼠",
    "type": "standard",
    "rank": 27,
    "score": 78,
    "budget": "value",
    "channel": "tw",
    "description": "三鍵、一般逐行滾輪與USB超小型接收器構成的基本全尺寸滑鼠。左右對稱外形適合想要較飽滿握感的中大型手掌；不提供藍牙、多裝置切換或進階自訂，不將無線宣傳當作實測零延遲。",
    "pros": [
        "三鍵配置簡單，左右對稱外形",
        "隨附AA電池與專用接收器，最長18個月續航",
        "台灣旗艦店新品售399，維持一年有限硬體保固"
    ],
    "cons": [
        "不支援Unifying，接收器不能當其他鍵鼠的共用接收器",
        "沒有藍牙或多裝置Easy-Switch；電腦需有合適USB連接埠",
        "Options+電量與進階功能未獲所查官規支援；較大外形不一定合小手"
    ],
    "bestFor": "只要基本指標與三鍵操作、偏好全尺寸外形的左右手辦公使用者。",
    "recommendation": "低預算全尺寸參考：以手型和三鍵是否足夠為選購重點。妥善保存專用接收器；需要Bluetooth、側鍵、多裝置或靜音規格者比較其他款，不把它當電競性能鼠。",
    "tags": [
        "辦公",
        "台灣公司貨",
        "全尺寸",
        "左右手",
        "AA電池"
    ],
    "price": {
        "currency": "TWD",
        "amount": 399,
        "converted": 399,
        "basis": "retailer_current",
        "confidence": "2026-08-31 Chrome核對台灣旗艦店已選黑色、SKU910-005916、399及加入購物車；原連結已實際轉址/products/m190，圖片naturalWidth500。"
    },
    "installation": {
        "status": "not_stated",
        "note": "不涉及到府施工；自行裝電池並插入原隨附接收器。"
    },
    "image": "https://store.logitech.tw/cdn/shop/products/m190-666692.jpg?v=1705570757&width=1220",
    "buyUrl": "https://store.logitech.tw/products/m190?variant=40018414206999",
    "buyLabel": "羅技 Logi 台灣網路旗艦店",
    "specs": [
        "類型：標準型全尺寸無線滑鼠，木炭黑910-005916",
        "握型／慣用手：左右對稱、中至大型手掌外形；掌握是否舒適需依實際手型試用",
        "連線：2.4GHz羅技超小型USB接收器；滑鼠和接收器均不支援Unifying，未標示Bluetooth",
        "感測器／解析度：光學追蹤，1000 DPI",
        "回報率：所查官方頁未標示，不由無線宣傳推定零延遲",
        "按鍵／滾輪：3按鈕、逐行精確滾輪，未標示可自訂側鍵",
        "供電／續航：1顆AA电池，最長18個月；所查官方頁未明示額定V",
        "系統／軟體：Windows10/11、macOS10.10、ChromeOS、Linux；所查官規未列Options+進階自訂支援",
        "尺寸：高 115.4 x 寬 66.1 x 深 40.3 mm",
        "重量：含電池 89.9 g",
        "隨附配件：無線滑鼠、預先安裝1顆AA電池、羅技超小型接收器、使用說明書"
    ],
    "voltage": "1顆AA電池；所查官方頁未明示額定V，不自行推定任意電池種類相容。",
    "warranty": "台灣官方規格列1年有限硬體保固，依台灣原廠條款和購買憑證辦理。",
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
        "checkedAt": "2026-08-31",
        "note": "實查台灣店頁、FindPrice、Pangoly及BuyWisely原頁。Pangoly最低USD17.99為Mid Grey非木炭黑；BuyWisely澳洲黑色歷史AUD10.98對應910-005913而非台灣5916；台灣比價含九成五新、配件與未明SKU／日期，未取得合格同SKU公開史低。399僅是查核現價。"
    },
    "issueResearch": {
        "status": "no_common_issue",
        "checkedAt": "2026-08-31",
        "summary": "截至查核日，查無達門檻的集中負評／災情",
        "issues": [],
        "checkedSources": [
            {
                "platform": "Reddit",
                "query": "site:reddit.com \"M190\" (issue OR problem OR failure)",
                "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22M190%22%20(issue%20OR%20problem%20OR%20failure)",
                "targetHost": "reddit.com"
            },
            {
                "platform": "Mobile01",
                "query": "site:mobile01.com \"M190\" (問題 OR 故障 OR 災情)",
                "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22M190%22%20(%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E7%81%BD%E6%83%85)",
                "targetHost": "mobile01.com"
            }
        ]
    }
},
{
    "id": "mouse-logitech-m750",
    "category": "mouse",
    "brand": "Logitech",
    "model": "M750",
    "name": "Signature Plus M750 石墨黑 910-007440 一般尺寸多工靜音滑鼠",
    "type": "standard",
    "rank": 7,
    "score": 86,
    "budget": "mid",
    "channel": "tw",
    "description": "一般尺寸的右手辦公滑鼠，以三裝置 Easy-Switch、SmartWheel 與可自訂側鍵提供實用多工能力。這筆為台灣非 AI、非大手 L 版的石墨黑單品；比價與負評都需避開相近型號、AI 版及混合賣場。",
    "pros": [
        "三裝置切換，Bluetooth／Bolt兩種連線",
        "SmartWheel 精準逐行與快速捲動，配備側鍵及 DPI 鍵",
        "隨附Bolt接收器與AA電池，台灣一年有限硬體保固"
    ],
    "cons": [
        "SmartWheel 不等於 MX 系列 MagSpeed 磁性無段滾輪",
        "側鍵外形偏右手，與大手L版尺寸不同",
        "本批見零星左鍵、Options+設定及表面追蹤抱怨，未達同一版本跨兩站六人門檻"
    ],
    "bestFor": "需要在工作與個人電腦之間切換、重視靜音及側鍵的一般手型辦公使用者。",
    "recommendation": "中階辦公參考：想要多裝置切換而不需要雙滾輪，可選此一般尺寸版。先比手型與M750 L差異，並確認公司電腦可用Options+；不因相同M750字樣採用AI版或不明低價仿品。",
    "tags": [
        "辦公推薦",
        "台灣公司貨",
        "一般尺寸",
        "三裝置切換",
        "SmartWheel"
    ],
    "price": {
        "currency": "TWD",
        "amount": 1490,
        "converted": 1490,
        "basis": "retailer_current",
        "confidence": "2026-08-31 Chrome核對台灣旗艦店M750，一般版石墨黑已選、SKU910-007440、公開價1490及加入購物車；沒有採用旁邊M750 L或其他推薦商品價格。"
    },
    "installation": {
        "status": "not_stated",
        "note": "不涉及到府施工；自行安裝電池、配對接收器或藍牙與選用Options+。"
    },
    "image": "https://store.logitech.tw/cdn/shop/files/High_Resolution_PNG-M750_Medium_Graphite_Top-1.png?v=1761498454&width=1220",
    "buyUrl": "https://store.logitech.tw/products/m750",
    "buyLabel": "羅技 Logi 台灣網路旗艦店",
    "specs": [
        "類型：標準型辦公滑鼠，Signature Plus M750 一般尺寸石墨黑910-007440；非M750 L／AI Edition",
        "握型／慣用手：流線型外形、橡膠側條及拇指區域，側鍵配置偏右手；一般尺寸建議先試握",
        "連線：Bluetooth 低耗電、Logi Bolt USB接收器；Easy-Switch三裝置切換",
        "感測器／解析度：羅技先進光學追蹤，400–4000 DPI",
        "回報率：所查官方規格未標示，不以DPI推定延遲",
        "按鍵／滾輪：6按鈕（左右鍵、前後側鍵、滾輪中鍵、DPI鍵）；SmartWheel逐行／快速捲動，非MagSpeed",
        "供電／續航：1顆隨附AA電池；Bolt最長24個月、Bluetooth最長20個月；所查官方頁未標示額定V",
        "系統／軟體：Bolt支援Windows10/11、macOS10.10、Linux、ChromeOS；Bluetooth需macOS10.15，另支援iPadOS13.4／Android5.0；Options+自訂限Windows/macOS",
        "尺寸：高 107.19 x 寬 61.8 x 深 37.8 mm",
        "重量：101.2 g",
        "隨附配件：無線滑鼠、Logi Bolt USB接收器、1顆AA電池、使用者文件"
    ],
    "voltage": "1顆AA電池供電；所查官方頁未明示額定V，不自行補填電池電壓或任意化學種類相容。",
    "warranty": "台灣官方規格列1年有限硬體保固，依購買憑證及台灣原廠條款辦理。",
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
        "checkedAt": "2026-08-31",
        "note": "實查台灣旗艦店與FindPrice原始比價頁及M750史低查詢。比價頁含M650/M750/M750L混賣，低價有折價券或未定SKU與日期；搜尋『史低』另命中不同品牌Lexma M750。未找到同台灣910-007440新品公開歷史最低點；1490僅為本次已選購買頁現價。"
    },
    "issueResearch": {
        "status": "no_common_issue",
        "checkedAt": "2026-08-31",
        "summary": "截至查核日，查無達門檻的集中負評／災情",
        "issues": [],
        "checkedSources": [
            {
                "platform": "Reddit",
                "query": "site:reddit.com \"M750\" Logitech (issue OR problem OR failure)",
                "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22M750%22%20Logitech%20(issue%20OR%20problem%20OR%20failure)",
                "targetHost": "reddit.com"
            },
            {
                "platform": "Mobile01",
                "query": "site:mobile01.com \"M750\" (問題 OR 故障 OR 災情)",
                "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22M750%22%20(%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E7%81%BD%E6%83%85)",
                "targetHost": "mobile01.com"
            }
        ]
    }
},
{
    "id": "mouse-logitech-mx-ergo-s",
    "category": "mouse",
    "brand": "Logitech",
    "model": "MX Ergo S",
    "name": "MX Ergo S 910-007262 右手拇指無線軌跡球",
    "type": "trackball",
    "rank": 12,
    "score": 88,
    "budget": "premium",
    "description": "以拇指轉球、不需在桌面移動機身，並可把本體傾斜 20°。適合願意重新適應指標操作的右手辦公使用者；兩裝置切換與可充电設計好用，但體積及含底板重量不屬於便攜定位。",
    "pros": [
        "20° 可調傾角與精準模式，提供不同右手擺位",
        "Bluetooth／Bolt 並可切換兩台裝置，附 Bolt 接收器",
        "USB-C 充電最長四個月；台灣官方一年有限硬體保固"
    ],
    "cons": [
        "不含充電線；只有兩裝置切換，並無 MagSpeed 無段高速滾輪",
        "含金屬底板 259 g，體積較大且限右手拇指操作",
        "本批有中鍵切通道與表面觸感個別回報，未達相同問題跨兩站六人門檻"
    ],
    "bestFor": "桌面移動空間有限、右手且願意適應拇指軌跡球的長時間辦公使用者。",
    "recommendation": "辦公軌跡球推薦：先試握拇指球位置及傾角。若需要三台快速切換或無段高速捲動，這款並不具備；機身不移動不代表可治療或避免手腕不適。",
    "tags": [
        "辦公推薦",
        "台灣公司貨",
        "軌跡球",
        "20°傾角",
        "兩裝置切換"
    ],
    "channel": "tw",
    "price": {
        "currency": "TWD",
        "amount": 3290,
        "converted": 3290,
        "basis": "retailer_current",
        "confidence": "2026-08-31 Chrome 核對台灣旗艦店 MX ERGO S、SKU 910-007262、公開價3290與可加入購物車；單品非 Plus／套裝。"
    },
    "installation": {
        "status": "not_stated",
        "note": "不涉及到府施工；自行配對接收器／藍牙及按需求安裝軟體。"
    },
    "image": "https://store.logitech.tw/cdn/shop/files/ERGOs_01.jpg?v=1770260024&width=1220",
    "buyUrl": "https://store.logitech.tw/products/ergos?variant=41655899422743",
    "buyLabel": "羅技 Logi 台灣網路旗艦店",
    "specs": [
        "類型：右手拇指軌跡球，MX Ergo S 910-007262；非舊 MX Ergo／北美 Plus",
        "握型／慣用手：右手拇指控制球體，金屬傾斜底板可調至 20°；不保證所有手型適合",
        "連線：Bluetooth 低耗電、Logi Bolt，Easy-Switch 兩装置；USB-C 用於充電，未標示有線資料模式",
        "感測器／解析度：先進光學追蹤，512–2048 DPI；支援精準模式",
        "回報率：所查官方規格未標示，不由 DPI 推定延遲",
        "按鍵／滾輪：8 按鈕、6 可自訂；可傾斜滾輪，非 MagSpeed 無段滾輪",
        "供電／續航：可充電電池、USB-C 充電最長120天，快充1分鐘最長24小時；額定電壓未標示，線材未附",
        "系統／軟體：Windows 10/11、macOS 12、Linux、ChromeOS；Bluetooth 另支援 iPadOS 15／Android 12；Options+ 自訂功能限 Windows/macOS",
        "尺寸：高 132.5 x 寬 99.8 x 深 51.4 mm",
        "重量：不含金屬板／不含接收器 164 g；含金屬板／不含接收器 259 g",
        "隨附配件：軌跡球滑鼠、Logi Bolt USB 接收器、使用者文件；不附 USB-C 充電線"
    ],
    "voltage": "內建可充電電池；USB-C 充電。所查官方頁未標示額定 V／A，不由端口外形推定充電器或台灣市電相容。",
    "warranty": "台灣官方規格列 1 年有限硬體保固；依台灣官方條款及購買憑證辦理。",
    "releaseDate": "2024-09-13",
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
        "note": "查核台灣官方旗艦店現價、exact-model 史低搜尋與印度價格歷史原頁。印度追蹤的是 910-007261，並非本筆台灣 910-007262；日版 MXTB2 搜尋命中也不跨市場 SKU 套用。NT$3,290 僅為查核現價，未找到可確認同 SKU 交易條件的歷史最低點。"
    },
    "issueResearch": {
        "status": "no_common_issue",
        "checkedAt": "2026-08-31",
        "summary": "截至查核日，查無達門檻的集中負評／災情",
        "issues": [],
        "checkedSources": [
            {
                "platform": "Reddit",
                "query": "site:reddit.com \"MX Ergo S\" (issue OR problem OR failure)",
                "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22MX%20Ergo%20S%22%20(issue%20OR%20problem%20OR%20failure)",
                "targetHost": "reddit.com"
            },
            {
                "platform": "Mobile01",
                "query": "site:mobile01.com \"MX Ergo S\" (問題 OR 故障 OR 災情)",
                "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22MX%20Ergo%20S%22%20(%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E7%81%BD%E6%83%85)",
                "targetHost": "mobile01.com"
            }
        ]
    }
},
{
    "id": "mouse-logitech-ergo-m575s",
    "category": "mouse",
    "brand": "Logitech",
    "model": "ERGO M575S",
    "name": "ERGO M575S 石墨灰 910-007033 無線軌跡球",
    "type": "trackball",
    "rank": 13,
    "score": 84,
    "budget": "mid",
    "description": "以固定底座搭配右手拇指球操作，提供 AA 電池、Bolt 及藍牙連線的入門軌跡球選擇。官方台灣規格頁連往此旗艦店石墨灰 SKU；不具 Ergo S 的傾角底板與兩裝置 Easy-Switch，切换連線情境需留意重新配對。",
    "pros": [
        "機身不用在桌面移動，適合空間受限工作區",
        "隨附 AA 電池與 Logi Bolt 接收器，也支援藍牙",
        "台灣官方新品公開價1490，一年有限硬體保固"
    ],
    "cons": [
        "固定角度、拇指球操作需要適應，限右手使用",
        "不是多裝置 Easy-Switch 機型；從藍牙切回接收器的配對情境應先確認",
        "無 MagSpeed 無段高速捲動；本批個別指標失效與配對抱怨未達集中門檻"
    ],
    "bestFor": "想以較低預算嘗試右手拇指軌跡球、主要在單台電腦使用的辦公使用者。",
    "recommendation": "入門軌跡球參考：把手型與球位適應放在價格之前；需要經常在兩台電腦切換者比較 MX Ergo S。可拆換 AA 電池便利，但不把低手部移動宣傳視為醫療保證。",
    "tags": [
        "辦公推薦",
        "台灣公司貨",
        "軌跡球",
        "AA電池",
        "固定底座"
    ],
    "channel": "tw",
    "price": {
        "currency": "TWD",
        "amount": 1490,
        "converted": 1490,
        "basis": "retailer_current",
        "confidence": "2026-08-31 Chrome 核對官方規格頁導向台灣旗艦店 M575S，石墨灰已選、SKU 910-007033、公開價1490且加入購物車可用；不採頁尾其他滑鼠起價。"
    },
    "installation": {
        "status": "not_stated",
        "note": "不涉及到府施工；自行安裝電池與配對藍牙／Bolt。"
    },
    "image": "https://store.logitech.tw/cdn/shop/files/High_Resolution_JPG-ERGO_M575S_Graphite_Blue_Ball_TOP_DOWN.jpg?v=1770260254&width=1220",
    "buyUrl": "https://store.logitech.tw/products/m575s?variant=41655872323607",
    "buyLabel": "羅技 Logi 台灣網路旗艦店",
    "specs": [
        "類型：右手拇指軌跡球，ERGO M575S 石墨灰；台灣販售 SKU 910-007033，非舊 M575",
        "握型／慣用手：右手拇指操控球體、固定角度底座，無 MX Ergo S 傾角調整",
        "連線：Bluetooth 低耗電或 Logi Bolt 接收器；非兩裝置 Easy-Switch，切換連線方式需留意配對",
        "感測器／解析度：先進光學追蹤，400–2000 DPI",
        "回報率：所查官方規格未標示，不由 DPI 或藍牙名稱推定延遲",
        "按鍵／滾輪：5 按鈕，3 可自訂；一般捲動滾輪，未標示 MagSpeed",
        "供電／續航：1 顆 AA 電池，最長18個月；官方所查頁未明示額定電壓，不自行填入 V",
        "系統／軟體：Windows 10/11、macOS 12、Linux、ChromeOS；Bluetooth 另支援 iPadOS 15／Android 12；Options+ 自訂功能限 Windows/macOS",
        "尺寸：高 134 x 寬 100 x 深 48 mm",
        "重量：145 g",
        "隨附配件：軌跡球滑鼠、Logi Bolt USB 接收器、1顆AA電池、使用者文件"
    ],
    "voltage": "1 顆 AA 電池供電；所查官方頁未明示額定 V，不推定可任意替換電池化學種類。",
    "warranty": "台灣官方規格列 1 年有限硬體保固；依台灣官方條款及購買憑證辦理。",
    "releaseDate": "2024-09-13",
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
        "note": "實查台灣旗艦店、FindPrice 比價原頁與 M575S 史低／價格查詢。比價頁混入旧 M575、M575S 共用賣場及個人拍賣，價格不是帶明確日期的同 SKU 歷史最低點；排除私人拍賣。NT$1,490 只代表已選 910-007033 當日公開價，不推定史低。"
    },
    "issueResearch": {
        "status": "no_common_issue",
        "checkedAt": "2026-08-31",
        "summary": "截至查核日，查無達門檻的集中負評／災情",
        "issues": [],
        "checkedSources": [
            {
                "platform": "Reddit",
                "query": "site:reddit.com \"ERGO M575S\" (issue OR problem OR failure)",
                "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22ERGO%20M575S%22%20(issue%20OR%20problem%20OR%20failure)",
                "targetHost": "reddit.com"
            },
            {
                "platform": "Mobile01",
                "query": "site:mobile01.com \"ERGO M575S\" (問題 OR 故障 OR 災情)",
                "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22ERGO%20M575S%22%20(%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E7%81%BD%E6%83%85)",
                "targetHost": "mobile01.com"
            }
        ]
    }
},
    {
      "id": "mouse-logitech-mx-master-4",
      "category": "mouse",
      "brand": "Logitech",
      "model": "MX Master 4",
      "name": "MX Master 4 石墨灰 910-007567 無線智能滑鼠",
      "type": "standard",
      "rank": 1,
      "score": 93,
      "budget": "premium",
      "topPick": true,
      "description": "以多裝置辦公與長文件操作為核心的右手滑鼠；MagSpeed 主滾輪、獨立水平滾輪和 Actions Ring 適合表格及剪輯快捷工作流。150 g 的份量與大型右手外形應先試握，不把官方連線宣傳當作實測延遲。",
      "pros": [
        "MagSpeed 與獨立拇指水平滾輪便於長文件及表格操作",
        "隨附 USB-C Bolt 接收器，可切換三台裝置",
        "台灣旗艦店公開新品售價與一年有限硬體保固"
      ],
      "cons": [
        "150 g 本體較重，並非低重量競技定位",
        "未隨附 USB-C 充電線；Actions Ring 及進階映射依賴 Options+",
        "本批有零星連線、電源與按鍵手感抱怨，未達相同問題跨兩站六人門檻"
      ],
      "bestFor": "右手、重視表格水平捲動與多裝置快捷操作的辦公使用者；小手及偏好輕量者先試握。",
      "recommendation": "台灣綜合推薦／辦公推薦：適合確實使用雙滾輪與 Options+ 快捷工作的使用者。先確認手型、系統版本及企業電腦能否安裝 Options+；只需三鍵或競技輕量時不必追此級距。",
      "tags": [
        "Top Pick",
        "辦公推薦",
        "台灣公司貨",
        "三裝置切換",
        "水平滾輪"
      ],
      "channel": "tw",
      "price": {
        "currency": "TWD",
        "amount": 3690,
        "converted": 3690,
        "basis": "retailer_current",
        "confidence": "Chrome 原頁顯示 910-007567、Logitech MX Master 4 無線智能滑鼠、石墨灰已選取；原價4190，公開Sale3690，加入購物車可用。未採會員或加購價格。 查核日期 2026-08-31"
      },
      "installation": {
        "status": "not_stated",
        "note": "滑鼠不涉及到府施工；需自行配對接收器／藍牙及按需求安裝軟體。"
      },
      "image": "https://store.logitech.tw/cdn/shop/files/Low_Resolution_JPG-MX_Master_4_Graphite_TOP_DOWN_c9419bcd-31a8-4692-b7e3-11cba448ef64.jpg?v=1770953056&width=1220",
      "buyUrl": "https://store.logitech.tw/products/master4?variant=43460457988119",
      "buyLabel": "羅技 Logi 台灣網路旗艦店",
      "specs": [
        "類型：標準型多裝置辦公滑鼠，一般版石墨灰 910-007567，非 for Mac／Business",
        "握型／慣用手：右手拇指支撐外形；掌握為主的實際合手程度仍應先試握",
        "連線：Bluetooth 5.1 低耗電、Logi Bolt；可配對切換三裝置，附 USB-C Bolt 接收器",
        "感測器／解析度：Darkfield 高精度感測器，200–8000 DPI，50 DPI 增量",
        "回報率：所查官方規格未標示；不由 DPI 或連線宣傳推定延遲",
        "按鍵／滾輪：8 按鈕、MagSpeed 智慧切換滾輪、拇指水平滾輪；Actions Ring 與觸覺回饋可在 Options+ 設定",
        "供電／續航：650 mAh 可充電電池，USB-C 充電最長 70 天；1 分鐘充電最長 3 小時；額定電壓未標示，充電線未附",
        "系統／軟體：Bluetooth 需 Windows 11／macOS 13 以上；Bolt 支援 Windows 10/11、macOS 13；Linux／ChromeOS／iPadOS 15／Android 12 依連線方式支援基本功能；Options+ 進階自訂限 Windows/macOS",
        "尺寸：高 128.15 x 寬 88.35 x 深 50.8 mm",
        "重量：150 g",
        "隨附配件：滑鼠、USB-C Logi Bolt 接收器、使用者文件；不含充電線"
      ],
      "voltage": "650 mAh 可充電電池；USB-C 充電。官方所查頁未明示額定 V／A，不由 USB 端口外形推定市電或任意充電器相容。",
      "warranty": "台灣官方規格列 1 年有限硬體保固；依購買憑證與台灣原廠條款辦理。",
      "releaseDate": "2025-09-30",
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
        "note": "查核官方旗艦店同 SKU 現價、Mobile01 首購分享與 exact-model 史低搜尋。Mobile01 NT$2,790 是禮券 NT$1,200 及折價券 NT$200 後個人實付，不能作公開史低；搜尋命中京東轉載未確認台灣同 SKU 的原始新品交易條件。NT$3,690 僅為當日售價，不推定史低。"
      },
      "issueResearch": {
        "status": "no_common_issue",
        "checkedAt": "2026-08-31",
        "summary": "截至查核日，查無達門檻的集中負評／災情",
        "issues": [],
        "checkedSources": [
          {
            "platform": "Reddit",
            "query": "site:reddit.com \"MX Master 4\" (issue OR problem OR failure)",
            "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22MX%20Master%204%22%20(issue%20OR%20problem%20OR%20failure)",
            "targetHost": "reddit.com"
          },
          {
            "platform": "Mobile01",
            "query": "site:mobile01.com \"MX Master 4\" (故障 OR 問題 OR 災情)",
            "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22MX%20Master%204%22%20(%E6%95%85%E9%9A%9C%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E7%81%BD%E6%83%85)",
            "targetHost": "mobile01.com"
          }
        ]
      }
    },
        {
            "id": "mouse-sony-mse-g500",
            "category": "mouse",
            "brand": "Sony",
            "model": "MSE-G500",
            "name": "INZONE Mouse-A MSE-G500/B 黑色無線電競滑鼠",
            "type": "standard",
            "rank": 14,
            "score": 88,
            "budget": "premium",
            "description": "輕量對稱外殼但右手專用，適合希望保留掌心支撐的 FPS 玩家；附 8K 接收器，不必另買高回報率配件。滾輪觸感與握持外形值得先試用，不能從 8000 Hz 直接推定端到端延遲。",
            "pros": [
                "48.4 g 本體重量，來源明確排除線材及接收器",
                "附接收器即可選 500–8000 Hz",
                "Sony 台灣原廠一年保固，註冊可再延長一年"
            ],
            "cons": [
                "有用戶反映滾輪較滑、偏輕而容易誤按；本批未達跨兩站六人同一問題門檻",
                "8000 Hz 續航最長 19 小時，低於 1000 Hz 的 90 小時",
                "官方兩處快充文案不同，未用該數字作評分依據"
            ],
            "bestFor": "重視輕量、右手抓握與台灣原廠售後的 FPS 玩家；購買前試握外形與滾輪。",
            "recommendation": "電競輕量推薦：預算包含高回報率接收器與台灣售後。先以慣用握法試用並確認滾輪手感，設定高回報率時也要衡量續航和電腦負載；不將官規 Hz 或 DPI 當成實測延遲。",
            "tags": [
                "台灣公司貨",
                "電競推薦",
                "8K接收器隨附",
                "光學主鍵"
            ],
            "channel": "tw",
            "price": {
                "currency": "TWD",
                "amount": 3990,
                "converted": 3990,
                "basis": "retailer_current",
                "confidence": "2026-08-31 Chrome 人工核對 Sony Store MSE-G500/B 黑色單品限時優惠价 NT$3,990、加入購物車按鈕可用；未扣註冊贈品或組合折扣。"
            },
            "installation": {
                "status": "not_stated",
                "note": "USB／接收器即插即用，不涉及到府施工；購買頁未列到府安裝。"
            },
            "image": "https://store.sony.com.tw/resource/file/product_files/MSE-G500-B/01_d207e5452.jpg",
            "buyUrl": "https://store.sony.com.tw/product/MSE-G500/B",
            "buyLabel": "Sony 台灣官方購物網站",
            "specs": [
                "類型：標準型無線電競滑鼠，MSE-G500/B 黑色成品",
                "握型／慣用手：官方明示對稱型右手專用；抓握適應仍取決於手型，建議先試握",
                "連線：2.4 GHz 專用無線接收器；USB-A 對 USB-C 有線模式，未標示藍牙",
                "感測器／解析度：3950IZ（客製化 PixArt PAW3950），最高 30000 DPI／750 IPS／70 G",
                "回報率：500／1000／2000／4000／8000 Hz；附對應無線接收器，非端到端延遲實測",
                "按鍵／滾輪：光學主鍵、側面按鈕與刻度滾輪；底部電源／設定檔按鈕；INZONE Hub 可改鍵，官方所查頁未明列按鍵總數",
                "供電／續航：內建鋰離子充電電池、USB-C 充電約 1.5 小時；1000 Hz 最長 90 小時、8000 Hz 最長 19 小時；USB 變壓器需至少 0.5A，所查頁未明示額定電壓；快充文案有 5 分鐘換 1／10 小時差異，不據此保證",
                "系統／軟體：電腦 USB；INZONE Hub 應用程式及網頁設定；所查滑鼠頁未明示作業系統版本，特殊系統下單前應另核對",
                "尺寸：寬 64.2 x 高 40.8 x 深 119.8 mm",
                "重量：不含充電線與接收器 約 48.4 g",
                "隨附配件：USB-A 對 USB-C 充電線、無線接收器、滑鼠腳貼、文件"
            ],
            "voltage": "內建鋰離子電池；USB Type-C 充電，官方說明要求 USB 變壓器輸出至少 0.5A（500mA）；所查頁未明示額定 V，不由接口外形推定市電相容。",
            "warranty": "Sony 台灣官方購物網站保固 12 個月，完成產品註冊可再延長 12 個月；依台灣官方條款與購買憑證辦理。",
            "releaseDate": "2025-09-17",
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
                "note": "本批查核 Sony 台灣單品、PTT 上市價格討論與価格.com 價格歷史。PTT NT$4,990 為上市定價轉述而非完整歷史最低點；価格.com 命中橘色 Fnatic Edition MSE-G500 DQ，不是收錄的黑色 MSE-G500/B；二手日店與套裝折算排除。NT$3,990 僅為查核現價，不推定為史低。"
            },
            "issueResearch": {
                "status": "no_common_issue",
                "checkedAt": "2026-08-31",
                "summary": "截至查核日，查無達門檻的集中負評／災情",
                "issues": [],
                "checkedSources": [
                    {
                        "platform": "Reddit",
                        "query": "site:reddit.com \"MSE-G500\" (issue OR problem OR failure)",
                        "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22MSE-G500%22%20(issue%20OR%20problem%20OR%20failure)",
                        "targetHost": "reddit.com"
                    },
                    {
                        "platform": "Mobile01",
                        "query": "site:mobile01.com \"MSE-G500\" (問題 OR 故障 OR 災情)",
                        "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22MSE-G500%22%20(%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E7%81%BD%E6%83%85)",
                        "targetHost": "mobile01.com"
                    }
                ]
            }
        }
]);
})();
