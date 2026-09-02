const reportLedger = require("../product_issue_report_evidence.json");
const { canonicalWebsite, normalize } = require("./product-issue-validation");

const CHECKED_AT = "2026-09-02";
const DEFAULT_EVIDENCE_CHECKED_AT = "2026-08-29";
const REVIEW_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function isValidReviewDate(value) {
  if (!REVIEW_DATE_PATTERN.test(String(value || ""))) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

const verifiedRows = [
  {
    "id": "mouse-logitech-mx-vertical",
    "checkedAt": "2026-08-31",
    "summary": "MX Vertical 有跨 Reddit、iFixit 的六位独立使用者回報左鍵異常連點或持續拖曳時自行鬆開。",
    "title": "左鍵異常連點或拖曳中斷",
    "detail": "已核對六位第一人稱同型號回報；部分作者更換滑鼠或微動後改善，也有人替換機再次出現。這是回報集合而非故障率估算，不推定所有新品或地域批次都會發生。建議在退換貨期間測試持續選取、拖曳和單擊，異常時優先向台灣售後處理，勿因網路教學自行拆焊影響保固。",
    "reportCount": 6,
    "sources": [
      {
        "platform": "Reddit",
        "title": "MX Vertical mouse issues",
        "url": "https://www.reddit.com/r/logitech/comments/148fo27/mx_vertical_mouse_issues/",
        "authors": [
          "PolymathUX"
        ],
        "evidenceSnippet": "PolymathUX 自述 MX Vertical 持續按住左鍵拖動時會自行釋放，有時選取檔案反而直接開啟。"
      },
      {
        "platform": "Reddit",
        "title": "Logitech MX Vertical Mouse Intermittent Left",
        "url": "https://www.reddit.com/r/logitech/comments/17av6vm/logitech_mx_vertical_mouse_intermittent_left/",
        "authors": [
          "Smosh962"
        ],
        "evidenceSnippet": "Smosh962 的 MX Vertical 左鍵維持按住時會間歇斷開，跨裝置仍出現；原帖更新換保固新品後恢復。"
      },
      {
        "platform": "Reddit",
        "title": "Logi MX Vertical Mouse Left Click Acting Weird",
        "url": "https://www.reddit.com/r/LogitechG/comments/ql05u5/logi_mx_vertical_mouse_left_click_acting_weird/",
        "authors": [
          "Haitsmelol",
          "tmkang"
        ],
        "evidenceSnippet": "Haitsmelol 說 MX Vertical 拖曳會提早放開或被當成双擊；改Windows設定一度以為改善但又復發，替換機約一年後同樣出現。 tmkang 明寫兩支 MX Vertical 各使用約一年後，左鍵按住卻無法維持；自行拆焊換微動後恢復正常。"
      },
      {
        "platform": "Reddit",
        "title": "Do not buy MX Vertical",
        "url": "https://www.reddit.com/r/logitech/comments/1ja2xsx/do_not_buy_mx_vertical/",
        "authors": [
          "Maximum_Molasses_433"
        ],
        "evidenceSnippet": "Maximum_Molasses_433 自述自己的 MX Vertical 使用不多，卻開始出現左鍵額外點擊、拖曳保持不住；文中的Master 2S是另一款正常對照機。"
      },
      {
        "platform": "iFixit",
        "title": "Logitech MX Vertical Left and Right Mouse Button Microswitch Replacement",
        "url": "https://www.ifixit.com/Guide/Logitech+MX+Vertical+Left+and+Right+Mouse+Button+Microswitch+Replacement/138168",
        "authors": [
          "May D"
        ],
        "evidenceSnippet": "May D 在原創維修指南介紹自述 MX Vertical 約用一年後，左鍵出現非預期双擊，於過保後拆開更換微動。"
      }
    ]
  },
  {
    "id": "mouse-logitech-g304",
    "checkedAt": "2026-08-31",
    "summary": "G304 有跨 PTT 與 Reddit 的六位獨立使用者回報按鍵異常連點；替換機及同一人多支不重複計數。",
    "title": "按鍵異常連點",
    "detail": "保守採六位獨立使用者的原始G304第一人稱回報，替換機與同一人多支只算一次。這不是故障率估算；斷線、休眠、電池套筒及滾輪老化不合併。建議保留購買憑證，在退換貨期間測試單擊及拖曳，出現異常優先走原廠售後；不把網友噴油、吹氣或自行拆焊作為通用安全修復建議。",
    "reportCount": 6,
    "sources": [
      {
        "platform": "PTT",
        "title": "[閒聊] 羅技G304滑鼠常常瞬斷的問題",
        "url": "https://www.ptt.cc/bbs/Key_Mou_Pad/M.1709636091.A.5A3.html",
        "authors": [
          "qqq15963"
        ],
        "evidenceSnippet": "qqq15963 自述目前用第三支 G304，前兩支皆因連點退役；第三支的瞬斷是另外症狀。"
      },
      {
        "platform": "PTT",
        "title": "Re: [滑鼠] 羅技 G304 首發拆解 & 改裝",
        "url": "https://www.ptt.cc/bbs/Key_Mou_Pad/M.1609601887.A.17E.html",
        "authors": [
          "shomie"
        ],
        "evidenceSnippet": "shomie 自述自己的 G304 右鍵開始連點、估計約70%觸發率，因而拆解更換微動。"
      },
      {
        "platform": "PTT",
        "title": "[心得] G304滑鼠連點，不用換微動開關，WD40搞定",
        "url": "https://www.ptt.cc/bbs/PC_Shopping/M.1689938296.A.A0C.html",
        "authors": [
          "kcboy123"
        ],
        "evidenceSnippet": "kcboy123 的 G304 最近出現左鍵連點，自述清潔微動後當下恢復，並說會再回報可維持多久。"
      },
      {
        "platform": "PTT",
        "title": "[心得] 羅技G304 RMA完整心得 ft. SSR客服 (圖多",
        "url": "https://www.ptt.cc/bbs/PC_Shopping/M.1676135808.A.1F4.html",
        "authors": [
          "E7lijah"
        ],
        "evidenceSnippet": "E7lijah 自述 G304 於2022年6月左右出現連點，經官方線上客服保固流程後獲替換產品。"
      },
      {
        "platform": "Reddit",
        "title": "~200 Rs. DIY Fix for Double click issue",
        "url": "https://www.reddit.com/r/IndianGaming/comments/1h0e70g/200_rs_diy_fix_for_double_click_issue/",
        "authors": [
          "crystalMaxi"
        ],
        "evidenceSnippet": "crystalMaxi 的 G304 在一年內連點，保固替換機又於一年半後連點，後來送店更換微動。"
      },
      {
        "platform": "Reddit",
        "title": "Double click issue on Logitech G304 wireless",
        "url": "https://www.reddit.com/r/IndianGaming/comments/p59d12/double_click_issue_on_logitech_g304_wireless/",
        "authors": [
          "Kirito_5"
        ],
        "evidenceSnippet": "Kirito_5 自述購入三個月的 G304 經常誤觸雙擊，仍在保固內並準備送保固。"
      }
    ]
  },
  {
    "id": "mouse-logitech-g502-hero",
    "checkedAt": "2026-08-31",
    "summary": "G502 HERO 有跨 PTT 與 Reddit 的六位獨立使用者回報按鍵異常連點或按住時中斷。",
    "title": "按鍵異常連點或保持中斷",
    "detail": "保守採六位同型號第一人稱回報，保固替換品與同人多次留言只計一次。現售官店已改塑料線，但回報者的線材／生產批次未逐筆確認，不能推定目前批次故障率；2020年的25K更新屬官方軟體升級。退換貨期間宜測單擊、拖曳與長按；異常優先找台灣售後，不把敲擊或自行拆焊當通用修復方法。",
    "reportCount": 6,
    "sources": [
      {
        "platform": "PTT",
        "title": "[問題] 江子翠附近修滑鼠微動",
        "url": "https://www.ptt.cc/bbs/BigBanciao/M.1636585555.A.62D.html",
        "authors": [
          "midgrad"
        ],
        "evidenceSnippet": "midgrad 自述 G502 HERO 左鍵開始連點，正在找可當日取回的微動維修店。"
      },
      {
        "platform": "PTT",
        "title": "[公告] 公關帳號水桶",
        "url": "https://www.ptt.cc/bbs/PC_Shopping/M.1729069800.A.DAF.html",
        "authors": [
          "leo255112"
        ],
        "evidenceSnippet": "leo255112 明寫自己的 G502 HERO 微動時好時壞，連點發作時機隨機，但仍喜歡握感。"
      },
      {
        "platform": "Reddit",
        "title": "G502 Hero Double Click issue",
        "url": "https://www.reddit.com/r/LogitechG/comments/cxm3vh/g502_hero_double_click_issue/",
        "authors": [
          "SladetheUnlucky"
        ],
        "evidenceSnippet": "SladetheUnlucky 自述替換取得的 G502 HERO 使用四個月後左鍵連點，換USB埠與另一台電腦仍重現。"
      },
      {
        "platform": "Reddit",
        "title": "G502 Hero double clicking issue",
        "url": "https://www.reddit.com/r/LogitechG/comments/hg2woh/g502_hero_double_clicking_issue/",
        "authors": [
          "CESARBC"
        ],
        "evidenceSnippet": "CESARBC 的 G502 HERO 使用約八個月後，左鍵一次輸入兩次，有時需更大力才反應。"
      },
      {
        "platform": "Reddit",
        "title": "Logitech G502 Hero double-click issue",
        "url": "https://www.reddit.com/r/LogitechG/comments/kng7no/logitech_g502_hero_doubleclick_issue/",
        "authors": [
          "ImminentFallout"
        ],
        "evidenceSnippet": "ImminentFallout 自述 G502 HERO 第三個月開始連點並惡化，按住左右鍵在遊戲中仍會中斷，右鍵特別明顯。"
      },
      {
        "platform": "Reddit",
        "title": "G502 Hero Double-click issue",
        "url": "https://www.reddit.com/r/LogitechG/comments/15f4fea/g502_hero_doubleclick_issue/",
        "authors": [
          "j0kep0ke"
        ],
        "evidenceSnippet": "j0kep0ke 自述 G502 HERO 右鍵反覆連點／瞄準中斷，清潔只短暫改善；更新說更換微動後恢復。"
      }
    ]
  },
  {
    "id": "mouse-logitech-m720",
    "checkedAt": "2026-08-31",
    "summary": "M720 有跨 Reddit、Mobile01 的八位獨立使用者回報左鍵異常連點或持續拖曳時無法保持。",
    "title": "左鍵異常連點或拖曳中斷",
    "detail": "八位第一人稱回報來自四個原始討論頁、兩個網站，已逐人核對。部分在使用多年後出現，有人清理或維修後改善，不代表全部新品會故障，也不能由自選網路回報估算故障率。退換貨期宜測單擊、持續選取與拖曳，異常優先使用台灣售後，不建議因論壇教學自行拆焊影響保固。",
    "reportCount": 8,
    "sources": [
      {
        "platform": "Mobile01",
        "title": "羅技M720滑鼠連點 DIY換微動開關",
        "url": "https://www.mobile01.com/topicdetail.php?f=497&t=6406235",
        "authors": [
          "therb"
        ],
        "evidenceSnippet": "therb 描述自己的M720用數年後左鍵連點，並記錄拆修。其他回覆的零件問答、換開關但未述症狀、M705/G502均不增算。"
      },
      {
        "platform": "Mobile01",
        "title": "請問有可以快速切換配對裝置的藍芽滑鼠嗎？",
        "url": "https://www.mobile01.com/topicdetail.php?f=497&t=5769430",
        "authors": [
          "一個怪人"
        ],
        "evidenceSnippet": "一個怪人回覆自己使用M720两年后左鍵連點，並說明側邊切換鍵的方便性；樓主只是問購不計入。"
      },
      {
        "platform": "Reddit",
        "title": "Two and a half years: a normal life span for a M720 mouse?",
        "url": "https://www.reddit.com/r/logitech/comments/1aydrnj/two_and_a_half_years_a_normal_life_span_for_a/",
        "authors": [
          "Fernando1dois3",
          "erolmacc",
          "iFrog42",
          "TemporaryAd1061"
        ],
        "evidenceSnippet": "Fernando1dois3、erolmacc、iFrog42及TemporaryAd1061各自描述M720左鍵連點或拖曳失常；後兩人的清理／維修改善也保留，不當成持續未解決故障。"
      },
      {
        "platform": "Reddit",
        "title": "M720 Click Issue. Recommendations?",
        "url": "https://www.reddit.com/r/logitech/comments/pdhoi6/m720_click_issue_recommendations/",
        "authors": [
          "leakywaterjug",
          "real_justindra"
        ],
        "evidenceSnippet": "leakywaterjug與real_justindra本人M720在按住拖曳時變多次點擊、拖放無法保持；客服排錯與其他中鍵問題不當作者人數。"
      }
    ]
  },
  {
    "id": "mouse-razer-cobra",
    "checkedAt": "2026-09-01",
    "summary": "Cobra 有線電競滑鼠 黑色有六位跨Reddit與Razer Insider的獨立使用者回報「滾輪跳動或滾動異常」。",
    "title": "滾輪跳動或滾動異常",
    "detail": "逐人採標準有線Cobra，不混入Pro、HyperSpeed或Viper Mini。 本批保守六位、跨Reddit與Razer Insider兩原始網站；自選網路回報不能推算故障率，也不代表所有現售批次同一根因，異常宜走台灣售後。",
    "reportCount": 6,
    "sources": [
      {
        "platform": "Reddit",
        "title": "bought RAZOR COBRA.",
        "url": "https://www.reddit.com/r/mkindia/comments/1tgpvxl/bought_razor_cobra/",
        "authors": [
          "Pure_Bed_6357",
          "ayushraj_real"
        ],
        "evidenceSnippet": "自述此有線Cobra使用約1.5年，光學按鍵仍好，但滾輪開始表現異常。 在有線Cobra購買文中自述買鼠後四個月內出現滾輪問題。"
      },
      {
        "platform": "Reddit",
        "title": "Unpopular opinion: Razer Cobras are great!",
        "url": "https://www.reddit.com/r/MouseReview/comments/1rzf0gc/unpopular_opinion_razer_cobras_are_great/",
        "authors": [
          "KhajiitWithCoin",
          "IX199xmnl"
        ],
        "evidenceSnippet": "My Razer Cobra 使用未滿一年，滾輪開始跳動，之後改買G203。 自己Cobra有相同滾輪跳動，拆開看到輪側纏狗毛，清理後指出毛髮造成干擾。"
      },
      {
        "platform": "Razer Insider",
        "title": "Mouse scroll wheel jumps up and down",
        "url": "https://insider.razer.com/razer-support-45/mouse-scroll-wheel-jumps-up-and-down-69357",
        "authors": [
          "erhank10"
        ],
        "evidenceSnippet": "2024-10-27自述兩隻Cobra都遇到滾輪上下跳動，第二隻2024-07-16購於Amazon。"
      },
      {
        "platform": "Razer Insider",
        "title": "What mice has the most durable scrollwheel and side buttons",
        "url": "https://insider.razer.com/mice-and-surfaces-9/what-mice-has-the-most-durable-scrollwheel-and-side-buttons-85764?postid=276890",
        "authors": [
          "alleySaffronurban937"
        ],
        "evidenceSnippet": "2026-01-21自述Cobra用約1.5年，滾輪隨機上下跳，吹氣只能暫時改善。"
      }
    ]
  },
  {
    "id": "mouse-razer-basilisk-v3",
    "checkedAt": "2026-09-01",
    "summary": "Basilisk V3 有線 26K 黑色有六位跨Reddit與Razer Insider的獨立使用者回報「USB反覆斷接、短暫亮燈後失去辨識」。",
    "title": "USB反覆斷接、短暫亮燈後失去辨識",
    "detail": "5位Insider加1位Reddit本人原文；同頁引用原文不重計。只描述供電/辨識症狀，不斷言全部由同一硬體根因造成；自行拆切線材的回覆僅保留已恢復的結果，不轉述為操作建議。 本批保守六位、跨Reddit與Razer Insider兩原始網站；自選網路回報不能推算故障率，也不代表所有現售批次同一根因，異常宜走台灣售後。",
    "reportCount": 6,
    "sources": [
      {
        "platform": "Razer Insider",
        "title": "Basilisk V3 Wired RZ01-0400 blinking, can't update or do anything",
        "url": "https://insider.razer.com/razer-support-45/basilisk-v3-wired-rz01-0400-blinking-can-t-update-or-do-anything-64500?sort=mostRecentFirst",
        "authors": [
          "danluckner"
        ],
        "evidenceSnippet": "本人RZ01-0400每秒亮滅與USB斷接；換無Synapse電腦初恢復，韌體更新後又反覆斷接。"
      },
      {
        "platform": "Razer Insider",
        "title": "Basilisk V3 Wired RZ01-0400 blinking and not detected on any device",
        "url": "https://insider.razer.com/razer-support-45/basilisk-v3-wired-rz01-0400-blinking-and-not-detected-on-any-device-61916",
        "authors": [
          "storysmartQueenBlue665"
        ],
        "evidenceSnippet": "2024-05-07自述RZ01-0400持續閃燈、短暫連接立即斷線，重装Synapse及驅動仍無效。"
      },
      {
        "platform": "Razer Insider",
        "title": "Razer Basilisk V3 stopped working completely",
        "url": "https://insider.razer.com/razer-support-45/razer-basilisk-v3-stopped-working-completely-48689?postid=240700",
        "authors": [
          "lpachecs",
          "sillysausa9e",
          "JohnR0ck"
        ],
        "evidenceSnippet": "2024-08-14自述RZ01-0400用2.5年後亮約一秒即滅、USB不能正常使用；改動滾輪線路後恢復但失去自由滾動功能。 2025-02-12引用處理法之後另以本人說明其wired Basilisk V3也有相同故障，測試滾輪連線後鼠恢復供電。 2025-03-03自述Basilisk V3開機LED亮一秒、游標暫動後凍結；重置後進Bootloader且無LED/游標，更新中斷。"
      },
      {
        "platform": "Reddit",
        "title": "Basilisk V3 bug glitch",
        "url": "https://www.reddit.com/r/razer/comments/1uct5ue/basilisk_v3_bug_glitch/",
        "authors": [
          "zyadamini"
        ],
        "evidenceSnippet": "本人原版有線Basilisk V3多年後出現連接/斷接循環；回覆明說mine is wired，另一電腦也相同。"
      }
    ]
  },
  {
    "id": "mouse-razer-deathadder-v4-pro",
    "checkedAt": "2026-09-01",
    "summary": "DeathAdder V4 Pro 黑色有六位跨Reddit與Razer Insider的獨立使用者回報「無線接收器無法連線、間歇失去辨識或需反覆重插」。",
    "title": "無線接收器無法連線、間歇失去辨識或需反覆重插",
    "detail": "逐頁覆核一般零售DeathAdder V4 Pro回報，採4位Insider及2位Reddit可辨識原作者。跨板AirSuch2770去重；三隻換貨也只一人。不同症狀（滾輪異音、回彈黏、USB慢充、完全死機、睡眠短暫凍結）不併入本問題；非零售電競隊版本及明示其他型號/白綠外觀候選不作本筆計數。此為使用者歷史回報，不能推定新批次必然故障或共同根因。 本批保守六位，網路自選回報不代表故障率或已證實共同根因。",
    "reportCount": 6,
    "sources": [
      {
        "platform": "Razer Insider",
        "title": "DeathAdder V4 Pro 黑色 — Im_in_YourWalls 原始回報",
        "url": "https://insider.razer.com/razer-support-45/deathadder-v4-pro-dongle-stopped-working-randomly-89502",
        "authors": [
          "Im_in_YourWalls"
        ],
        "evidenceSnippet": "充至100%後接回接收器毫無反應，有線與Synapse正常；換USB、另一PC、重裝驅動及配對工具仍無線失效。"
      },
      {
        "platform": "Razer Insider",
        "title": "DeathAdder V4 Pro 黑色 — Nesmohten 原始回報",
        "url": "https://insider.razer.com/razer-support-45/razer-deathadder-v4-pro-dongle-doesnt-turn-on-85831",
        "authors": [
          "Nesmohten"
        ],
        "evidenceSnippet": "使用1.5月有四次開機接收器不亮，電池全滿，换埠線及重啟無效；有線正常，反覆插拔接收器十餘次後恢復。"
      },
      {
        "platform": "Razer Insider",
        "title": "DeathAdder V4 Pro 黑色 — Anxu211 原始回報",
        "url": "https://insider.razer.com/razer-support-45/razer-deathadder-v4-pro-dongle-doesn-t-work-83468",
        "authors": [
          "Anxu211"
        ],
        "evidenceSnippet": "新買DeathAdder V4 Pro已註冊Synapse，有線能用；接收器LED不亮，不同電腦同樣無線不能用。"
      },
      {
        "platform": "Razer Insider",
        "title": "DeathAdder V4 Pro 黑色 — fnord0 原始回報",
        "url": "https://insider.razer.com/razer-support-45/deathadder-v4-pro-defective-dongle-less-than-1-week-old-86141",
        "authors": [
          "fnord0"
        ],
        "evidenceSnippet": "Amazon購買未滿一週接收器全滅失去無線；改有線五分鐘再插接收器才恢復，兩日後暫無復發。"
      },
      {
        "platform": "Reddit",
        "title": "DeathAdder V4 Pro 黑色 — AirSuch2770 原始回報",
        "url": "https://www.reddit.com/r/razer/comments/1radofd/razer_deathadder_v4_pro_issuesrecommendations/",
        "authors": [
          "AirSuch2770"
        ],
        "evidenceSnippet": "自己換三隻DeathAdder V4 Pro，2025第38週兩隻/31週一隻，皆偶爾接不上dongle並短暫斷線。"
      },
      {
        "platform": "Reddit",
        "title": "DeathAdder V4 Pro 黑色 — NunoSM 原始回報",
        "url": "https://www.reddit.com/r/razer/comments/1q39nqw/deathadder_v4_pro_problem/",
        "authors": [
          "NunoSM"
        ],
        "evidenceSnippet": "自己的DeathAdder V4 Pro開機不工作，重插鼠與接收器才恢復；另一次充電後卻低電，需要再做相同插拔程序。"
      }
    ]
  },
  {
    "id": "mouse-razer-viper-v3-pro",
    "checkedAt": "2026-09-01",
    "summary": "Viper V3 Pro 黑色 35K 非SE有六位跨Reddit與Razer Insider的獨立使用者回報「連線中斷或接收器失去辨識」。",
    "title": "連線中斷或接收器失去辨識",
    "detail": "原版Viper V3 Pro非V3 HyperSpeed／V2／SE；顏色不是獨立收錄變體，但回報未都寫區域SKU或顏色，不宣稱已確認黑色特定批次或共同硬體根因。四位Insider加兩位Reddit，僅集中相同連線/辨識症狀，不混入追蹤、按鍵、充電或其他世代以湊數。 本批保守六位，網路自選回報不代表故障率或已證實共同根因。",
    "reportCount": 6,
    "sources": [
      {
        "platform": "Razer Insider",
        "title": "Viper V3 Pro 黑色 35K 非SE — TownPablo 原始回報",
        "url": "https://insider.razer.com/razer-support-45/mouse-randomly-stop-working-razer-viper-v3-pro-87204",
        "authors": [
          "TownPablo"
        ],
        "evidenceSnippet": "2026-03-15自述Viper V3 Pro約每十分鐘斷線；後續接收器可被Windows識別但鼠不連線、有線也未即時識別，等待數分鐘恢復且電量90%，換USB口及韌體更新仍持續。"
      },
      {
        "platform": "Razer Insider",
        "title": "Viper V3 Pro 黑色 35K 非SE — autoZaffrenexus116 原始回報",
        "url": "https://insider.razer.com/razer-support-45/issue-viper-v3-pro-wireless-mode-87233",
        "authors": [
          "autoZaffrenexus116"
        ],
        "evidenceSnippet": "2026-03-16自述無線模式週期性短暫關閉數毫秒，明顯干擾操作；客服次日確認其Viper V3 Pro dongle連線問題。"
      },
      {
        "platform": "Razer Insider",
        "title": "Viper V3 Pro 黑色 35K 非SE — miztersex 原始回報",
        "url": "https://insider.razer.com/razer-support-45/viper-v3-pro-issue-disconnecting-66740",
        "authors": [
          "miztersex"
        ],
        "evidenceSnippet": "2024-08-25明說自己全新約三天的Viper V3 Pro頻繁斷接或停止工作，更新韌體沒有解決。"
      },
      {
        "platform": "Razer Insider",
        "title": "Viper V3 Pro 黑色 35K 非SE — the_yutman 原始回報",
        "url": "https://insider.razer.com/razer-support-45/razer-viper-v3-pro-keeps-disconnecting-85434",
        "authors": [
          "the_yutman"
        ],
        "evidenceSnippet": "2026-01-07自述買兩週的Viper V3 Pro原本正常，數日前開始隨機斷線2至30秒，頻率持續增加。"
      },
      {
        "platform": "Reddit",
        "title": "Viper V3 Pro 黑色 35K 非SE — JayThaPistola 原始回報",
        "url": "https://www.reddit.com/r/razer/comments/1q39nqw/deathadder_v4_pro_problem/",
        "authors": [
          "JayThaPistola"
        ],
        "evidenceSnippet": "在DeathAdder討論下明確另說自己擁有Viper V3 Pro，電量幾乎滿時仍在遊戲隨機斷線。"
      },
      {
        "platform": "Reddit",
        "title": "Viper V3 Pro 黑色 35K 非SE — Omrops40 原始回報",
        "url": "https://www.reddit.com/r/MouseReview/comments/1rocxui/",
        "authors": [
          "Omrops40"
        ],
        "evidenceSnippet": "本人V3 Pro用了六個月正常，HyperPolling接收器突然不被PC識別，換另一電腦仍相同，目前只能有線使用。"
      }
    ]
  },
  {
    "id": "keyboard-razer-ornata-v3-x",
    "checkedAt": "2026-08-31",
    "summary": "已核對同款 Ornata V3 X 薄膜完整版至少7位獨立使用者、跨Reddit與Razer Insider回報，涉及WASD、Space、Caps Lock等特定複鍵組合；官方亦明示無key rollover。這是功能限制與使用風險，不宣稱所有鍵都不能三鍵同按，也不把V3非X、清潔後連發或軟體Alt問題混算。",
    "title": "特定複鍵組合漏輸入／按鍵衝突",
    "detail": "人工逐人確認Reddit 2位與Razer Insider 5位均明說自用Ornata V3 X完整薄膜版，特定WASD／Space／Caps Lock組合的輸入會遺漏；不併V3非X或清潔後連發。官方技術表與客服亦明示無key rollover，是遊戲組合鍵能力限制而非所有三鍵都必失效，不能據此推定每批故障率。重視複雜同按操作者宜改選具明確KRO能力的鍵盤。",
    "reportCount": 7,
    "sources": [
      {
        "platform": "Reddit",
        "title": "Razer Ornata V3 X ghosting for 3-keys",
        "url": "https://www.reddit.com/r/razer/comments/x034bi/razer_ornata_v3_x_ghosting_for_3keys/",
        "authors": [
          "encee222"
        ],
        "evidenceSnippet": "正文明确本人V3 X，Windows/Linux及Space+W+Q漏輸入，後續回覆同人不重計。"
      },
      {
        "platform": "Reddit",
        "title": "Ornata V3 X",
        "url": "https://www.reddit.com/r/razer/comments/17m1rps/ornata_v3_x/",
        "authors": [
          "killerskrr"
        ],
        "evidenceSnippet": "原評論明確V3 X、比較WA+N失效而WD+N可，結尾本人退貨。comment獨立URLwebtimeout但全文在父原頁可見，非搜尋摘要。"
      },
      {
        "platform": "Razer Insider",
        "title": "Pressing more than 3 keys simultaneously is not supported on the Razer Ornata V3 X",
        "url": "https://insider.razer.com/razer-support-45/pressing-more-than-3-keys-simultaneously-is-not-supported-on-the-razer-ornata-v3-x-87379",
        "authors": [
          "Timaus"
        ],
        "evidenceSnippet": "標題與tag明確Ornata V3 X，自己Dota2/CS2/Arma3使用三鍵後第四鍵失效並說替代鍵盤沒問題，非轉述。"
      },
      {
        "platform": "Razer Insider",
        "title": "Razer Ornata V3 X keyboard issue",
        "url": "https://insider.razer.com/razer-support-45/razer-ornata-v3-x-keyboard-issue-49656",
        "authors": [
          "infoheadTealGreen951"
        ],
        "evidenceSnippet": "原PO標題V3 X、自己Fifa複鍵L不認；DeezNutez失效/拔插是不同症狀不併算，客服不計。"
      },
      {
        "platform": "Razer Insider",
        "title": "The most ridicilous defect with Razer Ornata V3X",
        "url": "https://insider.razer.com/razer-support-45/the-most-ridicilous-defect-with-razer-ornata-v3x-50443",
        "authors": [
          "Inchwormhomehead563"
        ],
        "evidenceSnippet": "正文明确自己Razer Ornata V3 X及QW第三鍵失效；官方Razer.Aero隔日說no key rollover是預期行為，客服不計入作者。"
      },
      {
        "platform": "Razer Insider",
        "title": "Razer Ornata V3 ghosting",
        "url": "https://insider.razer.com/keyboards-8/razer-ornata-v3-ghosting-39028",
        "authors": [
          "emay_",
          "Jigsaw_Actual"
        ],
        "evidenceSnippet": "混V3論壇中只採此明說自購V3X者，列TABWR及AWE不動，不用其他V3非X多數留言。；明說自購V3X，CapsLock單鍵正常而按住時其他鍵失效；兩筆電多USB且關Synapse仍重現，沒有液體或髒污；同作者長文只算一人。"
      }
    ]
  },
  {
    "id": "soundbar-klipsch-flexus-core-200",
    "checkedAt": "2026-08-31",
    "summary": "多位 Flexus Core 200 使用者回報有線重低音輸出出現間歇爆音或敲擊聲；部分換機後改善，也有換機後復發的回報。",
    "title": "有線重低音輸出間歇爆音／敲擊聲",
    "detail": "2026-08-31 逐人覆核 Reddit 5 位與 Best Buy 2 位獨立使用者，共 7 人回報 Core 200 有線重低音輸出異常。有人更換線材或不同重低音仍重現；部分保固換機後改善，另有復發案例。這是同型號症狀回報，不能據此推定故障率、所有批次都受影響或已確定內部故障零件。購前確認退換貨及保固，若要外接有線重低音，需用實際訊源長時間測試。",
    "reportCount": 7,
    "sources": [
      {
        "platform": "Reddit",
        "title": "Clicks and pops come from Flexus Core 200 after connecting rear satellites via wireless",
        "url": "https://www.reddit.com/r/Klipsch/comments/1hx317y/clicks_and_pops_come_from_flexus_core_200_after/",
        "authors": [
          "Strong_Salt000",
          "pelletjunky",
          "First-Independent671",
          "PracticalGovernment4",
          "homagcncguy"
        ],
        "evidenceSnippet": "五位作者皆明確回報 Core 200 的有線重低音爆音；沒有把樓主的數位啁啾、無線重低音及後環繞症狀混入。"
      },
      {
        "platform": "Best Buy",
        "title": "Klipsch Flexus CORE 200 3.1.2 Soundbar customer reviews",
        "url": "https://www.bestbuy.com/product/klipsch-flexus-core-200-3-1-2-soundbar-black/JX44FCZPQ7/sku/6580304/reviews",
        "authors": [
          "JOHND",
          "Alex"
        ],
        "evidenceSnippet": "Chrome 在 exact Core 200 SKU 6580304 的 Search Reviews 搜尋 popping，親讀 JOHND 與 Alex 的兩則原始購買者回報；兩人皆標示 Verified Purchaser／Incentivized。"
      }
    ]
  },
  {
    "id": "soundbar-asus-rog-gjallar",
    "checkedAt": "2026-08-31",
    "summary": "多位 ROG Gjallar 使用者回報無線重低音會間歇斷線、低頻消失後重新連線；官方已提供更新工具，仍須確認個別設備改善。",
    "title": "無線重低音間歇斷線與重連",
    "detail": "以 Mobile01 與 ASUS ZenTalk 6 位逐人覆核的獨立使用者為保守樣本。官方已提供 Firmware Update Tool v1.00.15，2026-08-20 FAQ 亦要求更新韌體；部分使用者表示改善，但不能推定所有批次、訊源與環境均已解決。購買前確認更新與退換貨條件，到貨後測試低音連線穩定性。",
    "reportCount": 6,
    "sources": [
      {
        "platform": "Mobile01",
        "title": "【開箱】ROG Gjallar電競soundbar",
        "url": "https://www.mobile01.com/topicdetail.php?f=348&t=7285601",
        "authors": [
          "老何"
        ],
        "evidenceSnippet": "第5樓老何描述自己的重低音連線間歇中斷。"
      },
      {
        "platform": "Mobile01",
        "title": "【開箱】ROG Gjallar電競soundbar（第2頁）",
        "url": "https://www.mobile01.com/topicdetail.php?f=348&p=2&t=7285601",
        "authors": [
          "LuIsAnDrUw",
          "ROGYES"
        ],
        "evidenceSnippet": "第17樓及其留言兩位獨立使用者描述重低音反覆斷線，並各自測試移除鍵鼠接收器或僅用手機藍牙。"
      },
      {
        "platform": "ASUS ZenTalk",
        "title": "Rog gjallar",
        "url": "https://zentalk.asus.com/t5/%E9%9F%B3%E6%95%88%E5%8D%A1-dac/rog-gjallar/td-p/510259",
        "authors": [
          "zza",
          "jacoblin3067260"
        ],
        "evidenceSnippet": "首樓zza與jacoblin3067260分別描述重低音斷開重連、紅藍燈狀態與FAQ無法排除的情形。"
      },
      {
        "platform": "ASUS ZenTalk",
        "title": "Rog gjallar（第2頁）",
        "url": "https://zentalk.asus.com/t5/%E9%9F%B3%E6%95%88%E5%8D%A1-dac/rog-gjallar/m-p/510334/highlight/true",
        "authors": [
          "老詹9981"
        ],
        "evidenceSnippet": "老詹9981移動路由器、只留2.4GHz仍重現相同低音斷連。"
      }
    ]
  },
  {
    id: "wifi-unifi-u7-pro-max",
    checkedAt: "2026-08-31",
    summary: "多位 U7 Pro Max 使用者曾回報 2.4GHz IoT 裝置 DHCP／DNS timeout、封包遺失或斷線重連；後續改善程度需依韌體與實際裝置確認。",
    title: "2.4GHz IoT 連線、DHCP／DNS 與封包遺失問題",
    detail: "2026-08-31 以 6 位型號明確的獨立使用者重核歷史回報。部分後續使用者表示韌體改善，但不能用 U7 Pro 的更新結果代替 Pro Max；官方 7.0.95 公告更明文排除 U7 Pro Max。先確認 Pro Max 適用的穩定韌體，以獨立 IoT SSID 及實際家電測試數日，再決定大量部署。",
    reportCount: 6,
    sources: [
      {
        platform: "Ubiquiti Community",
        title: "U7 Pro Max connection issues with IoT devices",
        url: "https://community.ui.com/questions/U7-Pro-Max-connection-issues-with-IoT-devices/79f46435-0180-4216-b19a-524ddf92ba11",
        authors: ["bmikiano"],
        evidenceSnippet: "原發文者回報 IoT 裝置反覆斷線重連，已影響正常使用。",
      },
      {
        platform: "Reddit",
        title: "IoT 2GHz issues on new U7 Pro Max",
        url: "https://www.reddit.com/r/Ubiquiti/comments/1d9peae/iot_2ghz_issues_on_new_u7_pro_max/",
        authors: ["Spaceman_Splff", "BluThunder2k"],
        evidenceSnippet: "兩位明確使用 U7 Pro Max／7PM 的作者回報 IoT 斷線；Spaceman_Splff 約有 95% 封包遺失，並撤回早先誤以為更新已修好的判斷。",
      },
      {
        platform: "Reddit",
        title: "IoT devices won't connect to WiFi",
        url: "https://www.reddit.com/r/Ubiquiti/comments/1fnsctj/new_and_some_old_iot_devices_wont_connect_to_wifi/",
        authors: ["VampireSix", "Capt_shadab"],
        evidenceSnippet: "VampireSix 與 Capt_shadab 皆明確寫出自用 U7 Pro Max，回報 IoT 裝置連線後隨即斷開或不能完成設定。",
      },
      {
        platform: "Reddit",
        title: "All devices disconnecting from 2.4GHz band",
        url: "https://www.reddit.com/r/Ubiquiti/comments/1gra06l/all_devices_disconnecting_from_24ghz_band/",
        authors: ["jtiz88"],
        evidenceSnippet: "原發文者回報所有 2.4GHz 用戶端會一起掉線，需重新啟動才能恢復。",
      },
    ],
  },
  {
    id: "wifi-costco-tplink-deco-x55",
    summary: "多位 Deco X55 使用者回報網路會隨機凍結、節點紅燈或自行重啟，常需手動重開才能恢復。",
    title: "隨機斷線、凍結或自行重啟",
    detail: "回報包含整體網路鎖死、主節點失聯與每日多次重啟；建議保留退換貨期、先更新韌體並觀察多節點環境至少數日。",
    reportCount: 7,
    sources: [
      {
        platform: "TP-Link Community",
        title: "Deco X55 Internet randomly freezes or drops",
        url: "https://community.tp-link.com/en/home/forum/topic/584302",
        authors: ["LonTexan"],
        evidenceSnippet: "原發文者表示網路隨機凍結或斷線，必須重啟系統才能恢復。",
      },
      {
        platform: "TP-Link Community",
        title: "X55 main Deco disconnects after reboot",
        url: "https://community.tp-link.com/us/home/forum/topic/651792?moduleId=2424",
        authors: ["Kingbuzzie"],
        evidenceSnippet: "原發文者回報主 Deco 失聯，往往需要多次重新啟動。",
      },
      {
        platform: "TP-Link Community",
        title: "TP-Link Deco X55 Keeps Rebooting",
        url: "https://community.tp-link.com/en/home/threads/topic/821828",
        authors: ["Pieter068"],
        evidenceSnippet: "原發文者回報同型號每天會隨機重新啟動多次。",
      },
      {
        platform: "TP-Link Community",
        title: "Deco X55 Reboots 2-3 times a day",
        url: "https://community.tp-link.com/us/home/forum/topic/591250",
        authors: ["satek"],
        evidenceSnippet: "原發文者回報 Deco X55 每天會重啟二至三次。",
      },
      {
        platform: "Reddit",
        title: "Avoid TP-Link Deco X55",
        url: "https://www.reddit.com/r/TpLink/comments/1eietd4/avoid_tplink_deco_x55_like_the_plague_it_is/",
        authors: ["malwolficus", "Bubsdaddy", "sfmike64"],
        evidenceSnippet: "三位使用者描述網路鎖死、紅燈或每週必須重啟數次。",
      },
    ],
  },
  {
    id: "soundbar-sonos-arc-ultra",
    summary: "多位 Arc Ultra 使用者回報播放不同內容時會隨機出現爆音、啪聲或靜電聲，部分伴隨短暫音訊中斷。",
    title: "隨機爆音、啪聲或靜電聲",
    detail: "回報橫跨不同訊源與內容，發生頻率不一；若對突發噪音敏感，建議在退換貨期內長時間測試 HDMI eARC、串流與遊戲訊源。",
    reportCount: 12,
    sources: [
      {
        platform: "Reddit",
        title: "Sonos Arc Ultra Popping Sound",
        url: "https://www.reddit.com/r/sonos/comments/1gm5evm/sonos_arc_ultra_popping_sound/",
        authors: ["HumanCheesecake2137", "6over6", "jordanborth", "TheJimmyz", "Oledman", "Afraid_Book_3590", "Legit-Camel", "Future_Artist8227", "Codzy"],
        crossPostAuthors: ["jordanborth"],
        evidenceSnippet: "九位使用者回報不同內容下會隨機爆音、啪聲或短暫音訊異常。",
      },
      {
        platform: "Sonos Community",
        title: "Arc Ultra: Popping Sound Across All Content Types",
        url: "https://en.community.sonos.com/home-theater-229129/arc-ultra-popping-sound-across-all-content-types-6923719",
        authors: ["CMHax", "jordanborth"],
        crossPostAuthors: ["jordanborth"],
        evidenceSnippet: "兩位作者描述各類內容都可能出現隨機啪聲；其中一人已與 Reddit 去重。",
      },
      {
        platform: "Sonos Community",
        title: "Sonos Arc Ultra strange static clicking sound",
        url: "https://en.community.sonos.com/home-theater-229129/sonos-arc-ultra-strange-static-clicking-sound-6929181",
        authors: ["peregarik", "tsquare64"],
        evidenceSnippet: "兩位使用者回報約每三十至六十分鐘出現靜電或點擊聲。",
      },
    ],
  },
  {
    id: "soundbar-samsung-q990f",
    summary: "多位 HW-Q990F 使用者回報播放途中會隨機斷音，部分同時凍結、重置或必須重新啟動才能恢復。",
    title: "隨機斷音、凍結或自行重置",
    detail: "回報涵蓋 HDMI/eARC、直接接入 soundbar 與不同播放來源，部分集中在 1100.4 韌體後；建議關閉自動更新至版本穩定、保留退換貨期，並以電視、遊戲主機與串流來源長時間測試。",
    reportCount: 6,
    sources: [
      {
        platform: "Reddit",
        title: "q990f problems after update..",
        url: "https://www.reddit.com/r/Soundbars/comments/1u1wval/q990f_problems_after_update/",
        authors: ["Visible_Ad_589", "adultonacid", "birdsayschirp"],
        evidenceSnippet: "三位同型號使用者描述播放時音訊完全消失，部分伴隨凍結、黑畫面或自行重置。",
      },
      {
        platform: "Samsung Community",
        title: "Q990D still having the audio shutoff bug on firmware 1051",
        url: "https://us.community.samsung.com/t5/Home-Theater/Q990D-still-having-the-audio-shutoff-bug-on-firmware-1051/td-p/3593283",
        authors: ["Rainmaker825"],
        evidenceSnippet: "留言者明確表示 HW-Q990F 升至 1100.4 後才開始隨機關機或斷音。",
      },
      {
        platform: "Samsung Community",
        title: "Samsung HW-Q990F loses eARC",
        url: "https://us.community.samsung.com/t5/Home-Theater/Samsung-HW-Q990F-loses-eARC/td-p/3511021",
        authors: ["SignalIntegrity"],
        evidenceSnippet: "同型號使用者回報影片持續但音訊偶爾消失，必須重啟 soundbar。",
      },
      {
        platform: "CDW",
        title: "Samsung HW-Q990F customer reviews",
        url: "https://www.cdw.com/product/samsung-hw-q990f-sound-bar-system-for-home-theater-wireless/8382191",
        authors: ["Badboy"],
        evidenceSnippet: "評價者回報快轉後音訊反覆消失，每天需重啟 TV 與 soundbar 多次。",
      },
    ],
  },
  {
    id: "soundbar-costco-denon-dht-s517",
    summary: "多位 DHT-S517 使用者回報 HDMI ARC/eARC 或 Bluetooth 播放時會隨機短暫斷音，部分需切換輸入或重新啟動才恢復。",
    title: "HDMI ARC/eARC 隨機斷音或無聲",
    detail: "回報包含數秒斷音、整段無聲，以及需切換輸入或重新啟動才能恢復；建議在退換貨期內以實際電視、遊戲主機與串流來源長時間測試，並保留替換線材與輸入的排查紀錄。",
    reportCount: 6,
    sources: [
      {
        platform: "Reddit",
        title: "Audio Output cuts out randomly",
        url: "https://www.reddit.com/r/Soundbars/comments/1jsws5x/audio_output_cuts_out_randomly/",
        authors: ["DaveyBlahBlah", "BigCTM", "Infamous-Lecture-554"],
        evidenceSnippet: "三位 DHT-S517 使用者回報聲音隨機消失，部分需切換輸出或重新開機。",
      },
      {
        platform: "Sky Community",
        title: "Denon soundbar issues with SkyQ",
        url: "https://helpforum.sky.com/t5/Sky-Q/Denon-soundbar-issues-with-SkyQ/td-p/4909403",
        authors: ["Frustrated33"],
        evidenceSnippet: "使用者表示 DHT-S517 經 ARC 會頻繁隨機斷音數秒，換線與換埠仍發生。",
      },
      {
        platform: "Best Buy",
        title: "Customer Reviews: Denon DHT-S517",
        url: "https://www.bestbuy.com/site/reviews/denon-dht-s517-3-1-2-ch-soundbar-with-wireless-subwoofer-and-dolby-atmos-bluetooth-black/6495578?feature=Price",
        authors: ["Tony"],
        evidenceSnippet: "Verified Purchase 回報 eARC 與 Bluetooth 都會斷音，之後甚至無法搭配 TV。",
      },
      {
        platform: "価格.com",
        title: "『音が途切れる』 DENON DHT-S517 のクチコミ掲示板",
        url: "https://bbs.kakaku.com/bbs/K0001417614/SortID%3D24628631/",
        authors: ["アムロ0318"],
        evidenceSnippet: "同型號使用者回報開機約一小時後會反覆無聲約五秒再恢復。",
      },
    ],
  },
  {
    id: "wifi-costco-tplink-archer-be550",
    summary: "多位 Archer BE550 使用者回報路由器或 Wi-Fi 用戶端會隨機短暫斷線，數秒後才重新連上。",
    title: "隨機短暫斷線與延遲不穩",
    detail: "回報包含多個裝置一起斷線、替換機仍發生或遊戲延遲突增；購買後應更新韌體並持續壓力測試有線與無線連線。",
    reportCount: 7,
    sources: [
      {
        platform: "TP-Link Community",
        title: "New Archer BE550 constant disconnects",
        url: "https://community.tp-link.com/us/home/forum/topic/623566?moduleId=2414",
        authors: ["DanDaredum", "Betovanbuuren", "MSIMaker", "maksakal"],
        evidenceSnippet: "四位同型號使用者描述用戶端隨機斷線，約十秒後才重新連上。",
      },
      {
        platform: "Reddit",
        title: "Tossing Archer BE550 — too many lagging issues",
        url: "https://www.reddit.com/r/TpLink/comments/1gkcbca/top_routers_tossing_archer_be550_too_many_lagging/",
        authors: ["MasseyFerguson", "Dry_Swan3639", "Deep_Initial9743"],
        evidenceSnippet: "三位使用者描述延遲與斷線，包含更換設備後仍出現相同問題。",
      },
    ],
  },
  {
    id: "wifi-tplink-archer-be900",
    summary: "多位 Archer BE900 使用者回報路由器會不定時自行重新啟動或完全凍結，造成所有裝置斷線。",
    title: "自行重啟或完全凍結",
    detail: "部分回報可能與特定韌體版本有關，官方後續版本曾修正重啟問題；仍建議先更新、重設後測試，並避免在確認穩定前承擔關鍵網路。",
    reportCount: 6,
    sources: [
      {
        platform: "TP-Link Community",
        title: "Archer BE900 v2.6 restarts by itself",
        url: "https://community.tp-link.com/en/home/forum/topic/745810",
        authors: ["sgt_nantz"],
        evidenceSnippet: "原發文者回報同型號會在無明顯規律下自行重新啟動。",
      },
      {
        platform: "TP-Link Community",
        title: "BE900 restarts suddenly",
        url: "https://community.tp-link.com/en/home/forum/topic/744458",
        authors: ["Adol-Cristin"],
        evidenceSnippet: "原發文者回報路由器每天會突然重新啟動一至二次。",
      },
      {
        platform: "TP-Link Community",
        title: "Router completely Freezes",
        url: "https://community.tp-link.com/us/home/forum/topic/732228?replyId=1483126",
        authors: ["Godsdale"],
        evidenceSnippet: "原發文者回報路由器會完全凍結並中斷所有服務。",
      },
      {
        platform: "TP-Link Community",
        title: "Keeps rebooting and factory reset does not work",
        url: "https://community.tp-link.com/en/home/forum/topic/731430",
        authors: ["ProfessorSage"],
        evidenceSnippet: "原發文者回報即使重設後仍會大量重啟，嚴重時每天約二十次。",
      },
      {
        platform: "Reddit",
        title: "Finally got my hands on Archer BE900",
        url: "https://www.reddit.com/r/TpLink/comments/12mkbeb/finally_got_my_hands_on_this_one_archer_be900/",
        authors: ["pd4ever"],
        evidenceSnippet: "使用者回報設備運作約十八小時後會隨機重新啟動。",
      },
      {
        platform: "Reddit",
        title: "BE900 latest firmware looking brighter",
        url: "https://www.reddit.com/r/TpLink/comments/193iy1g/be900_latest_firmware_looking_brighter/",
        authors: ["nunyabiziz"],
        evidenceSnippet: "使用者表示新版韌體改善先前的多次斷線與重啟，證實舊版曾遇到該問題。",
      },
    ],
  },
  {
    id: "wifi-tplink-archer-be805",
    summary: "多位 Archer BE805 使用者回報 2.4／5GHz SSID 或全部 Wi-Fi 用戶端會隨機消失或斷線，通常需重新啟動。",
    title: "Wi-Fi SSID 消失或全部用戶端斷線",
    detail: "回報可能受韌體版本影響，但後續版本仍有人遇到；建議確認硬體版本與穩定韌體，並在多頻段、多用戶端負載下測試。",
    reportCount: 7,
    sources: [
      {
        platform: "TP-Link Community",
        title: "Archer BE805 keep dropping",
        url: "https://community.tp-link.com/en/home/forum/topic/703524",
        authors: ["MatthieuSG", "PavanR", "kirahao", "jeffrey_sg"],
        evidenceSnippet: "四位同型號使用者回報 SSID 消失或 Wi-Fi 掉線，需重啟路由器。",
      },
      {
        platform: "TP-Link Community",
        title: "2.4G/5GHz Wi-Fi function stops after a while",
        url: "https://community.tp-link.com/en/home/forum/topic/741120?moduleId=40",
        authors: ["odp_odp", "Shiro0"],
        evidenceSnippet: "兩位使用者回報 2.4GHz 或 5GHz Wi-Fi 運作一段時間後停止。",
      },
      {
        platform: "Reddit",
        title: "How is the BE11000 as far as wireless speed and range?",
        url: "https://www.reddit.com/r/TpLink/comments/1gqs7z8/how_is_the_be11000_as_far_as_wireless_speed_and/",
        authors: ["Alt_Control_Delete"],
        evidenceSnippet: "留言者明確指出 Costco Archer BE805 需數日重啟一次，否則連線會明顯不穩。",
      },
    ],
  },
  {
    id: "wifi-unifi-u6-plus",
    summary: "多位 U6+ 使用者回報 Wi-Fi 用戶端整批斷線、拒絕重新連接，或 SSID 停止廣播；重啟通常只能暫時恢復。",
    title: "用戶端整批斷線或 SSID 停止服務",
    detail: "回報涵蓋不同 PoE 來源與交換器，部分每天多次發生；部署後應以目前穩定韌體長時間測試，並保留控制器事件與 AP 重啟紀錄。",
    reportCount: 6,
    sources: [
      {
        platform: "Reddit",
        title: "U6+ dropping all clients",
        url: "https://www.reddit.com/r/Ubiquiti/comments/1s37bw2/u6_dropping_all_clients/",
        authors: ["ChairAggravating"],
        evidenceSnippet: "所有 Wi-Fi 用戶端同時掉線，重啟 U6+ 才暫時恢復。",
      },
      {
        platform: "Reddit",
        title: "Fix to U6+ forcing disconnect of some or all clients",
        url: "https://www.reddit.com/r/Ubiquiti/comments/1fdk2bu/fix_to_u6_and_pro_forcing_disconnect_of_some_or/",
        authors: ["albino_diabeto"],
        evidenceSnippet: "每天隨機斷開部分或全部用戶端，且拒絕重連，重啟只能暫時恢復。",
      },
      {
        platform: "Reddit",
        title: "AP U6+ keeps on disconnecting",
        url: "https://www.reddit.com/r/Ubiquiti/comments/1csgcd5/ap_u6_plus_keeps_on_disconnecting/",
        authors: ["Atomsk213"],
        evidenceSnippet: "兩台 U6+ 使用不同 PoE 來源仍每天多次讓所有裝置斷線。",
      },
      {
        platform: "Reddit",
        title: "U6+ connection issues",
        url: "https://www.reddit.com/r/Ubiquiti/comments/191w281/u6_has_anyone_had_issues_with_this/",
        authors: ["barhom"],
        evidenceSnippet: "U6+ 用戶端掉線、無法連線並出現 ping 失敗。",
      },
      {
        platform: "Ubiquiti Community",
        title: "All Wi-Fi devices disconnect after five minutes",
        url: "https://community.ui.com/questions/All-wifi-devices-disconnects-after-5min/a70cf799-6c87-4724-8906-41bb4e83cafc",
        authors: ["bricegodin"],
        evidenceSnippet: "重啟後約一至五分鐘，所有用戶端掉線且 SSID 消失。",
      },
      {
        platform: "Ubiquiti Community",
        title: "U6+ keeps disconnecting",
        url: "https://community.ui.com/questions/U6-keeps-disconnecting/3619ee47-3fac-4efb-b149-36c9d01b2f94",
        authors: ["piero18"],
        evidenceSnippet: "U6+ 經不同交換器與 PoE injector 仍會離線並停止廣播。",
      },
    ],
  },
  {
    id: "wifi-xiaomi-ax3000-2pack",
    summary: "多位 Xiaomi AX3000 使用者回報多層 Mesh 節點常只連主路由器，不能穩定串接較近的 AX3000，造成遠端節點訊號或速度不佳。",
    title: "無線 Mesh 節點偏向星狀連回主機，無法指定較近上游",
    detail: "問題只影響多節點無線 Mesh 情境；兩入組與單入硬體皆為相同 AX3000。若需要跨樓層多跳串接，建議優先規劃有線回程，並在退換貨期內確認節點實際拓樸。",
    reportCount: 8,
    sources: [
      {
        platform: "Reddit",
        title: "Problem with Mesh on AX3000 — all nodes connecting to main router",
        url: "https://www.reddit.com/r/Xiaomi/comments/13ijs0u/problem_with_mesh_on_ax3000_all_nodes_connecting/",
        authors: ["dc740", "fellipeco", "Ehkate", "Pancon13", "JuStAdsor", "drmuteca", "Independent_Pea4630"],
        evidenceSnippet: "七位 AX3000 使用者回報多台節點全部指向主路由器，即使較近節點存在也不串接。",
      },
      {
        platform: "Lowyat Forum",
        title: "Xiaomi AX3000 Mesh satellite ignores nearer node",
        url: "https://forum.lowyat.net/topic/5441492",
        authors: ["TSalpha33"],
        evidenceSnippet: "新增 AX3000 衛星忽略較近 AX3000，改連較遠主機，訊號明顯較差。",
      },
    ],
  },
  {
    id: "wifi-xiaomi-ax3000-1pack",
    summary: "多位 Xiaomi AX3000 使用者回報多層 Mesh 節點常只連主路由器，不能穩定串接較近的 AX3000，造成遠端節點訊號或速度不佳。",
    title: "無線 Mesh 節點偏向星狀連回主機，無法指定較近上游",
    detail: "問題只影響多節點無線 Mesh 情境；單入與兩入組硬體皆為相同 AX3000。若需要跨樓層多跳串接，建議優先規劃有線回程，並在退換貨期內確認節點實際拓樸。",
    reportCount: 8,
    sources: [
      {
        platform: "Reddit",
        title: "Problem with Mesh on AX3000 — all nodes connecting to main router",
        url: "https://www.reddit.com/r/Xiaomi/comments/13ijs0u/problem_with_mesh_on_ax3000_all_nodes_connecting/",
        authors: ["dc740", "fellipeco", "Ehkate", "Pancon13", "JuStAdsor", "drmuteca", "Independent_Pea4630"],
        evidenceSnippet: "七位 AX3000 使用者回報多台節點全部指向主路由器，即使較近節點存在也不串接。",
      },
      {
        platform: "Lowyat Forum",
        title: "Xiaomi AX3000 Mesh satellite ignores nearer node",
        url: "https://forum.lowyat.net/topic/5441492",
        authors: ["TSalpha33"],
        evidenceSnippet: "新增 AX3000 衛星忽略較近 AX3000，改連較遠主機，訊號明顯較差。",
      },
    ],
  },
  {
    id: "wifi-synology-wrx560",
    summary: "多位 WRX560 使用者回報單機或 Mesh 節點會讓用戶端掉線、拒絕重連或誤報密碼錯誤；切換 Wi-Fi radio 或重啟只能暫時恢復。",
    title: "Wi-Fi 用戶端反覆斷線或拒絕重新連接",
    detail: "回報包含換機後仍發生、成批裝置離線，以及有線 Mesh 的規律斷線；建議更新穩定韌體、保留事件紀錄，並在退換貨期內長時間測試。",
    reportCount: 7,
    sources: [
      {
        platform: "Reddit",
        title: "Disconnect wireless troubles with brand new WRX560",
        url: "https://www.reddit.com/r/synology/comments/165qepa/disconnect_wireless_troubles_with_brand_new/",
        authors: ["Flakeinator"],
        evidenceSnippet: "Synology 支援判定 WRX560 有韌體問題，換機後仍持續掉線。",
      },
      {
        platform: "Reddit",
        title: "WRX560 randomly dropping devices",
        url: "https://www.reddit.com/r/synology/comments/1jhuf7r/wrx560_randomly_dropping_devices/",
        authors: ["stu187187"],
        evidenceSnippet: "每隔數週或數月有一批裝置離線，重啟 WRX560 後恢復。",
      },
      {
        platform: "Reddit",
        title: "Connectivity issues with WRX560 router",
        url: "https://www.reddit.com/r/synology/comments/1e7xl5k/connectivity_issues_with_router/",
        authors: ["daraghfi"],
        evidenceSnippet: "多種裝置反覆斷線，通常重啟 WRX560 後才恢復。",
      },
      {
        platform: "Synology Community",
        title: "WRX560 disconnecting devices and reporting wrong password",
        url: "https://community.synology.com/enu/forum/2/post/163298",
        authors: ["straso78", "mably", "jerboa", "luckylukelondon"],
        evidenceSnippet: "四位 WRX560 使用者回報頻繁斷線、錯誤密碼或 Wi-Fi 服務失效，重啟只能短暫改善。",
      },
    ],
  },
  {
    id: "wifi-synology-rt6600ax",
    checkedAt: "2026-08-29",
    summary: "多位 RT6600ax 使用者回報 5GHz 無線涵蓋與吞吐異常偏低，近距離或隔一面牆即大幅降速，部分甚至掉線。",
    title: "5GHz 無線涵蓋與吞吐異常偏低",
    detail: "回報集中在 2022 年早期韌體；Synology 曾提供小型修補，部分案例改善、另有使用者表示未改善。建議先更新最新穩定 SRM，並在退換貨期以 5GHz-1／5GHz-2、隔牆與遠距離實測。",
    reportCount: 6,
    sources: [
      {
        platform: "Reddit",
        title: "RT6600ax HORRIBLE wireless performance compared with RT2600ac",
        url: "https://www.reddit.com/r/synology/comments/vom2ch/rt6600ax_horrible_wireless_performance_compared/",
        authors: ["d0cx", "Appropriate_Map_3572", "crismasjay", "PNWalpha", "VoltPug"],
        evidenceSnippet: "五位 RT6600ax 使用者回報 5GHz 涵蓋與吞吐明顯偏低，部分隔牆或短距離即大幅降速或掉線。",
      },
      {
        platform: "SNBForums",
        title: "Synology RT6600AX",
        url: "https://www.snbforums.com/threads/synology-rt6600ax.78823/",
        authors: ["hyelton"],
        evidenceSnippet: "使用者比較 RT6600ax 與既有路由器後，回報 5GHz 遠距離涵蓋明顯較弱、難以維持連線。",
      },
    ],
  },
  {
    id: "wifi-netgear-rs300",
    summary: "多位 RS300 使用者回報路由器會隨機讓有線或無線裝置失去 Internet，部分情況必須斷電重啟。",
    title: "有線與無線裝置隨機失去網路",
    detail: "案例包含升級韌體後 Wi-Fi 隨機斷線、新機每數分鐘失網，以及重啟後很快復發；建議保留退換貨期並同時測試有線與無線長時間負載。",
    reportCount: 6,
    sources: [
      {
        platform: "Reddit",
        title: "Nighthawk RS300 driving me insane",
        url: "https://www.reddit.com/r/NETGEAR/comments/1h2ynvi/nighthawk_rs300_driving_me_insane/",
        authors: ["Ok_Cartographer_7792", "snitsyq"],
        evidenceSnippet: "兩位 RS300 使用者回報有線與 Wi-Fi 裝置會隨機離線或無法存取 Internet。",
      },
      {
        platform: "NETGEAR Community",
        title: "Nighthawk RS300 randomly fails, requires power reset",
        url: "https://community.netgear.com/discussions/nighthawk-wifi-7-be/nighthawk-rs300-wireless-router-randomly-fails-requires-power-reset/2449770",
        authors: ["fingercurse"],
        evidenceSnippet: "所有 Wi-Fi 裝置被踢下線且無法重連，一個月約六次，必須 power cycle。",
      },
      {
        platform: "NETGEAR Community",
        title: "NETGEAR Nighthawk RS300 disconnects after firmware update",
        url: "https://community.netgear.com/discussions/nighthawk-wifi-7-be/re-netgear-nighthawk-rs300/2416061",
        authors: ["Camaxtli1207"],
        evidenceSnippet: "RS300 升級韌體後 Wi-Fi 隨機斷線，有線遊戲亦出現延遲。",
      },
      {
        platform: "NETGEAR Community",
        title: "RS300 random disconnect from the Internet",
        url: "https://community.netgear.com/discussions/nighthawk-wifi-7-be/re-rs300-random-disconnect-from-the-internet/2450511",
        authors: ["Araz"],
        evidenceSnippet: "新 RS300 約每四至六分鐘失去 Internet。",
      },
      {
        platform: "NETGEAR Community",
        title: "RS300 reply in Nighthawk Wi-Fi discussion",
        url: "https://community.netgear.com/discussions/nighthawk-wifi-7-be/rif--nighthawk-rs200---no-wifi-after-reboot---internet-via-lan-ok/2437053/replies/2437074",
        authors: ["Cap1tan5"],
        evidenceSnippet: "回覆明確列出 Hardware Version RS300；有線與 Wi-Fi 全部掉 Internet，重啟約十五分鐘後又復發。",
      },
    ],
  },
  {
    id: "wifi-aruba-ap22",
    summary: "多位 AP22 使用者回報舊版 3.0.0 韌體會使 iPhone 或 Android 掉線、拒絕重連或顯示密碼錯誤；官方已發布後續修補，但不宜視為所有環境均已解決。",
    title: "舊版 3.0.0 韌體造成行動裝置斷線與錯誤密碼",
    detail: "這是 2024 年 3.0.0 的歷史韌體事件。2026-08-31 補核 HPE 公告：3.0.0.1 後仍於 2024-10-14 公告 3.0.0.2，針對 WPA3 異常框架重啟與記憶體洩漏再修補；同串 AP22 使用者仍有不同結果。保留原六人證據日期，不將舊版災情推定為目前最新版必然發生，也不宣稱全面修復。",
    reportCount: 6,
    sources: [
      {
        platform: "HPE Instant On Community",
        title: "After update to 3.0.0 firmware: connection problems with iPhones to AP22",
        url: "https://community.instant-on.hpe.com/discussion/after-update-to-300-firmware-connection-problems-with-iphones-to-ap22",
        authors: ["hmayer", "TL14", "dennishansen", "Raketenmeyer", "FL16"],
        evidenceSnippet: "五位 AP22 使用者回報升級 3.0.0 後行動裝置斷線、驗證失敗或顯示錯誤密碼。",
      },
      {
        platform: "Reddit",
        title: "Issues since firmware 3.0.0",
        url: "https://www.reddit.com/r/ArubaInstantOn/comments/1eiarrp/issues_since_firmware_300/",
        authors: ["jsqualo2"],
        evidenceSnippet: "AP22 升級 3.0.0 後無法可靠連線，裝置會忘記特定 VLAN 的密碼。",
      },
    ],
  },
  {
    id: "monitor-dell-aw3225qf",
    summary: "多位 AW3225QF 使用者回報早期包裝保護材會摩擦 OLED 面板，開箱即出現污痕、蜂巢壓痕或微刮痕。",
    title: "包裝保護材造成面板污痕或微刮痕",
    detail: "這是早期包裝的歷史回報。2026-08-31 補核 Dell 官方 KB 000321630，已明確記載後期 AW3225QF 的可撕保護膜；另有 2024 年 5 月買家確認收到有膜且完好的機器。官方 KB 說明的是撕膜聲音，不能據此推定所有批次刮痕均已排除。保留原逐人證據日期，收貨仍應立即檢查面板並在退換貨期內處理異常。",
    reportCount: 11,
    sources: [
      {
        platform: "Reddit",
        title: "Poll: Does Your New Alienware AW3225QF Have Micro scratches / Smudges due to Bubble Wrap Packaging?",
        url: "https://old.reddit.com/r/OLED_Gaming/comments/1au0vt8/poll_does_your_new_alienware_aw3225qf_have_micro/",
        authors: ["JerbearCuddles", "NightHawkQc", "cubbycarson", "DrkNeo", "Agile_Finding4840", "rbarba23", "STOPchris1"],
        evidenceSnippet: "七位使用者明確描述自己的 AW3225QF 開箱即有包裝磨痕、污痕或微刮痕。",
      },
      {
        platform: "Dell Community",
        title: "AW3225QF, screen scratches",
        url: "https://www.dell.com/community/en/conversations/alienware-desktops/aw3225qf-screen-scratches/65cfe5920217a51eb1a3fde2",
        authors: ["hipzilla", "AudioDNA", "Kamiya9", "simon247"],
        evidenceSnippet: "四位使用者回報上緣蜂巢痕、殘留污痕或刮傷，部分已多次換貨。",
      },
    ],
  },
  {
    id: "monitor-dell-u2725qe",
    summary: "多位 U2725QE 使用者回報明顯線圈噪音，常在低亮度、待機或低供電負載時較嚴重。",
    title: "低亮度或低負載時線圈噪音",
    detail: "部分換貨機仍有噪音；將亮度提高至約 80% 以上或提高 Thunderbolt／USB-C 供電負載可能減輕，但不是所有案例都有效。對高頻聲敏感者應在退換貨期內測試不同亮度、待機與供電情境。",
    reportCount: 8,
    sources: [
      {
        platform: "Reddit",
        title: "Dell U2725QE owners - questions about coil whine",
        url: "https://www.reddit.com/r/Monitors/comments/1lo952w/dell_u2725qe_owners_questions_about_coil_whine/",
        authors: ["Great-Cartoonist-950", "yak0n-", "relevantcash", "SexyFat88"],
        evidenceSnippet: "四位 U2725QE 使用者回報原機或換貨機仍有線圈聲，部分在低亮度時量得明顯噪音。",
      },
      {
        platform: "Dell Community",
        title: "U2725QE, coil whine",
        url: "https://www.dell.com/community/en/conversations/monitors/u2725qe-coil-whine/685a37a316a3d04bdeebe2f9",
        authors: ["shavin47"],
        evidenceSnippet: "使用約兩個月後出現嚴重線圈聲，形容像置身伺服器機房。",
      },
      {
        platform: "Dell Community",
        title: "U2725QE, coil whine, #2",
        url: "https://www.dell.com/community/en/conversations/monitors/u2725qe-coil-whine-2/6978bb81c678d13f02c5ab24",
        authors: ["user_d188cf"],
        evidenceSnippet: "新品使用一小時即出現線圈聲，決定退貨。",
      },
      {
        platform: "Dell Community",
        title: "Spulenfiepen DELL U2725QE",
        url: "https://www.dell.com/community/de/conversations/displays/spulenfiepen-dell-u2725qe/67ce8da099b1bd4691924eb2",
        authors: ["Oskar P.", "Christoph1234"],
        evidenceSnippet: "兩位同型號使用者確認在中低亮度出現明顯線圈聲並考慮退貨。",
      },
    ],
  },
  {
    id: "monitor-aoc-q27g40xmn",
    summary: "多位 Q27G40XMN 使用者反映，在 VRR、高更新率或遊戲幀率變動時會出現畫面閃爍。",
    title: "VRR 或高更新率下畫面閃爍",
    detail: "案例發生條件不完全相同，部分可透過 V-Sync、鎖幀或降至 120Hz 改善；此現象也可能受顯示卡驅動及 VA 面板 VRR 特性影響，不應直接視為已確認的硬體故障。",
    reportCount: 6,
    sources: [
      {
        platform: "Best Buy",
        title: "AOC Q27G40XMN customer reviews",
        url: "https://www.bestbuy.com/site/reviews/aoc-27-q27g40xmn-mini-led-qhd-180hz-gaming-monitor-black/6617199",
        authors: ["TinkeringTurtle", "Kevin", "TheOldJimmyJam", "JeffreyZ"],
        evidenceSnippet: "四位已驗證購買者回報未鎖幀、VRR 低範圍或 120Hz 以上時偶發畫面閃爍。",
      },
      {
        platform: "Reddit",
        title: "Has anyone gotten the AOC Q27G40XMN yet and have any feedback?",
        url: "https://www.reddit.com/r/Monitors/comments/1k5y8zq/has_anyone_gotten_the_aoc_q27g40xmn_yet_and_have/",
        authors: ["SourBlueDream", "the00039"],
        evidenceSnippet: "兩位同型號使用者回報 VRR 或特定遊戲下閃爍；其中一人也在其他 IPS 螢幕遇到類似現象。",
      },
    ],
  },
  {
    id: "circ-vornado-660",
    summary: "多位 Vornado 660 使用者反映高／Turbo 檔噪音明顯，部分使用者認為連最低檔都不適合睡眠。",
    title: "高風速噪音明顯，部分低檔仍影響睡眠",
    detail: "強風循環力伴隨明顯風切或運轉噪音；若放臥室，建議於退換貨期實測低檔與夜間環境。",
    reportCount: 14,
    sources: [
      {
        platform: "ProductReview.com.au",
        title: "Vornado 660 reviews",
        url: "https://www.productreview.com.au/listings/vornado-660",
        authors: ["Fran", "Seran S", "AFK", "Maria", "Adsman90", "Bill", "Handoyo", "Chloe", "WildOne", "Sweet", "Practical Man", "Sarah"],
        evidenceSnippet: "十二位使用者反映高檔噪音明顯，其中多人表示最低檔仍會干擾睡眠。",
      },
      {
        platform: "Reddit",
        title: "Sydneysiders with no AC what are your plans?",
        url: "https://www.reddit.com/r/sydney/comments/pmqcsd/sydneysiders_with_no_ac_what_are_your_plans/",
        authors: ["A_Nx_rD3v3TmloyB3hEE"],
        evidenceSnippet: "使用者明確表示 Vornado 660 即使最低檔仍太吵，影響入睡。",
      },
      {
        platform: "Whirlpool Forums",
        title: "Air Conditioner Installed Very Close – High Ceiling",
        url: "https://forums.whirlpool.net.au/archive/34k61m40",
        authors: ["jnu123"],
        evidenceSnippet: "使用者表示 660 的 High／Turbo 檔非常吵，Low／Medium 才較能接受。",
      },
    ],
  },
  {
    id: "ap-coway-ap1019",
    summary: "多位同型號使用者反映，AP-1019C 在靜音／夜間或最低風量運轉時仍會出現規律低頻共鳴、嗡嗡聲或馬達振動，可能影響睡眠。",
    title: "靜音／低速模式下的低頻共鳴與馬達振動",
    detail: "問題集中在靜音、夜間或最低風量：有使用者形容規律共振、嗡嗡低頻與機身／馬達振動，甚至無法放在臥室；防震墊或凝膠可減輕但不一定完全消除。對聲音敏感者建議保留退換貨期，並在夜間實測。",
    reportCount: 6,
    sources: [
      {
        platform: "Mobile01",
        title: "Coway AP-1019C 使用問題",
        url: "https://www.mobile01.com/topicdetail.php?f=731&t=6754163",
        authors: ["sempron9", "wjcheng77"],
        evidenceSnippet: "兩位同型號使用者分別回報，靜音模式會出現規律共振或惱人的低頻共鳴，其中一人睡覺時只能關機。",
      },
      {
        platform: "Kakaku.com",
        title: "AIRMEGA 150 AP-1019C レビュー・評価",
        url: "https://review.kakaku.com/review/J0000033647/",
        authors: ["三筋川蜷"],
        evidenceSnippet: "使用一年半後回報最低靜音運轉的低頻嗡嗡聲特別明顯，並認為可拆部件的共振抑制不足，不建議放在臥室。",
      },
      {
        platform: "Kakaku.com",
        title: "フィルターが臭い",
        url: "https://bbs.kakaku.com/bbs/J0000033647/SortID=26493796/",
        authors: ["NICONICO YOU"],
        evidenceSnippet: "回報低速模式的風扇噪音仍很明顯，因此不適合放在臥室。",
      },
      {
        platform: "Yahoo!ショッピング",
        title: "COWAY AP-1019C 商品レビュー",
        url: "https://shopping.yahoo.co.jp/products/p/156b159ec6#tab",
        authors: ["usu********", "aki********"],
        evidenceSnippet: "兩位購買者分別回報夜間模式的馬達聲與振動、以及嗡嗡共鳴音；防震墊或凝膠只能降低影響。",
      },
    ],
  },
  {
    id: "circ-iris-sc15t",
    summary: "多位 PCF-SC15T 使用者反映上下／左右擺頭時會出現塑膠摩擦、喀喀或尖銳異音。",
    title: "擺頭時出現摩擦、喀喀或尖銳異音",
    detail: "部分新品或換貨品仍會發生；臥室低風量使用尤其明顯，建議到貨後完整測試 3D 擺頭並保留退換貨期。",
    reportCount: 7,
    sources: [
      {
        platform: "価格.com",
        title: "カラカラと異音がする",
        url: "https://bbs.kakaku.com/bbs/K0001040259/SortID=21999955/",
        authors: ["セブはベッテル", "しゅんや＠愛知", "キチャク"],
        evidenceSnippet: "三位使用者回報上下或左右擺頭時出現喀喀聲、塑膠摩擦聲，部分換貨品仍相同。",
      },
      {
        platform: "価格.com",
        title: "異音が激しい",
        url: "https://bbs.kakaku.com/bbs/K0001040259/SortID=22974691/",
        authors: ["じゅん29"],
        evidenceSnippet: "使用約一週後，四向擺頭出現強烈異音並辦理更換。",
      },
      {
        platform: "価格.com",
        title: "PCF-SC15T レビュー評価・評判",
        url: "https://review.kakaku.com/review/K0001040259/",
        authors: ["お品書き", "かむまに"],
        evidenceSnippet: "兩位使用者回報水平擺頭時出現尖銳或摩擦異音，換貨品仍可能發生。",
      },
      {
        platform: "Yahoo! Shopping",
        title: "PCF-SC15T 商品評價",
        url: "https://shopping.yahoo.co.jp/products/db27e58d1b/review/",
        authors: ["art********"],
        evidenceSnippet: "使用者回報擺頭時出現摩擦或研磨般異音，使用一段時間後才稍有改善。",
      },
    ],
  },
  {
    id: "circulator-extra-12-qbaf31-a9008ybed",
    summary: "多位 Vornado 6303DC 使用者反映風速提高後噪音快速增加，臥室使用容易受干擾。",
    title: "中高風速噪音明顯",
    detail: "回報集中在約 15／99、20–40／99、40／99、50／99 以上至最大檔；低速較安靜但循環力同步下降。",
    reportCount: 9,
    sources: [
      {
        platform: "Vornado Singapore",
        title: "Vornado 6303DC Medium Circulator",
        url: "https://vornadosg.com/products/vornado-6303dc-circulator",
        authors: ["Jeremy K.", "Athanasius L.", "Angeline N.", "Ming C.", "Ponnanna I.", "Esther C.", "Tru K.", "Syed Munir I."],
        evidenceSnippet: "八位使用者分別反映約 15、40、50 或最大檔後噪音明顯，部分會干擾睡眠。",
      },
      {
        platform: "Reddit",
        title: "Are Vornado fans worth it?",
        url: "https://www.reddit.com/r/phmoneysaving/comments/gx1884/comment/nil0z8q/",
        authors: ["scmitr"],
        evidenceSnippet: "使用者購買兩台 6303DC，兩台在 20–40 檔都明顯過吵。",
      },
    ],
  },
  {
    id: "monitor-asus-xg27acs",
    summary: "多位 XG27ACS 使用者回報在 180Hz／DisplayPort 下會隨機閃出白色水平線或畫面閃爍，部分伴隨短暫黑屏。",
    title: "180Hz 下白色水平線、閃爍或短暫黑屏",
    detail: "部分使用者降到 165Hz 後改善，但也有換線或換機仍復發；應在退換貨期內以 180Hz 長時間測試遊戲、桌面與休眠喚醒。",
    reportCount: 8,
    sources: [
      {
        platform: "Reddit",
        title: "Issues with brand new ASUS ROG Strix XG27ACS monitor",
        url: "https://old.reddit.com/r/ASUSROG/comments/1gu36al/issues_with_brand_new_asus_rog_strix_xg27acs/",
        authors: ["Mefisty", "Kaosz777", "ZaneyGamerr", "Electronic-Glove-510", "Iruja"],
        evidenceSnippet: "五位同型號使用者回報隨機白色水平線、短暫黑屏或降到 165Hz 才改善。",
      },
      {
        platform: "ASUS ROG Forum",
        title: "New XG27ACS has Screen issues",
        url: "https://rog-forum.asus.com/t5/gaming-monitors/new-xg27acs-has-screen-issues/td-p/1033966",
        authors: ["ThunderZz", "KeirZG", "Zack_0909"],
        evidenceSnippet: "三位使用者描述黑屏與白色橫線，其中一例換機、換線後仍發生。",
      },
    ],
  },
  {
    id: "blender-vitamix-a3500i",
    summary: "多位 A3500i 使用者回報 SELF-DETECT 無法辨識原廠杯壺，會顯示三點或禁止符號、途中停止，部分更換杯壺後仍反覆發生。",
    title: "SELF-DETECT 杯壺偵測失效，顯示三點或禁止運轉",
    detail: "問題可能在少量使用後出現，重新校正或更換原廠杯壺也可能只短暫改善；購買後應以所有預計使用的原廠杯壺反覆測試辨識與完整程式運轉。",
    reportCount: 6,
    sources: [
      {
        platform: "ProductReview.com.au",
        title: "Vitamix A3500i Ascent reviews",
        url: "https://www.productreview.com.au/listings/vitamix-a3500i",
        authors: ["Rey", "Pail", "TC80"],
        evidenceSnippet: "三位 A3500i 使用者回報杯壺不再被偵測、顯示三點，或運轉途中停止；其中一例維修後仍無法使用。",
      },
      {
        platform: "Reddit",
        title: "Multiple container replacements for Ascent",
        url: "https://www.reddit.com/r/Vitamix/comments/1rkhs0c/multiple_container_replacements_for_ascent/",
        authors: ["Independent-Bug1776"],
        evidenceSnippet: "A3500i 的數個原廠大杯壺陸續停止被偵測，第三個替換杯壺後仍再次復發。",
      },
      {
        platform: "Reddit",
        title: "Is there anyone who regrets buying their Vitamix?",
        url: "https://www.reddit.com/r/Vitamix/comments/1r274z/is_there_anyone_and_i_mean_anyone_who_regrets/",
        authors: ["Auskat85"],
        evidenceSnippet: "A3500i 使用約兩個月後突然無法偵測杯壺，排除簡單處理後預期需更換。",
      },
      {
        platform: "Manuals",
        title: "Vitamix Ascent A3500i manual Q&A",
        url: "https://www.manua.ls/vitamix/ascent-a3500i/manual",
        authors: ["Kat"],
        evidenceSnippet: "少量使用的 A3500i 顯示圓圈斜線，無法偵測 mixing bowl，機器不能啟動。",
      },
    ],
  },
  {
    id: "chair-razer-iskur-v2",
    summary: "多位 Iskur V2 使用者反映座墊明顯偏硬或緩衝不足，部分使用者久坐後出現臀部、髖部疼痛或因此退貨。",
    title: "座墊過硬、緩衝不足",
    detail: "回報皆為 Iskur V2，包含坐數小時後疼痛、近似坐在硬物上，以及因下座墊填充不足而退貨；對座墊硬度敏感者應先試坐或保留退換貨期。",
    reportCount: 7,
    sources: [
      {
        platform: "Reddit",
        title: "Is the Iskur V2 supposed to be hard as a brick?",
        url: "https://www.reddit.com/r/razer/comments/1nnmw57/is_the_iskur_v2_supposed_to_be_hard_as_a_brick/",
        authors: ["Hwipz", "Apprehensive_Seat777"],
        evidenceSnippet: "兩位 Iskur V2 使用者表示坐數小時或一週內即出現臀部、髖部疼痛，其中一人因此退貨。",
      },
      {
        platform: "Reddit",
        title: "Iskur v2 arrived!",
        url: "https://www.reddit.com/r/razer/comments/1akcksp/iskur_v2_arrived/",
        authors: ["Jaugusts", "neilicus2077"],
        evidenceSnippet: "兩位使用者表示 V2 座墊比辦公椅硬、不蓬鬆且較不舒服，或直接形容如石頭般硬。",
      },
      {
        platform: "Best Buy",
        title: "Customer Reviews: Razer Iskur V2 Gaming Chair Black",
        url: "https://www.bestbuy.com/site/reviews/razer-iskur-v2-gaming-chair-black/6605863?page=6",
        authors: ["Marcos", "Myreview", "Dommm"],
        evidenceSnippet: "三位使用者分別表示座墊需要更多緩衝、幾乎沒有填充、臀部不適或座墊緩衝應改善。",
      },
    ],
  },
  {
    id: "chair-razer-enki",
    summary: "多位 Razer Enki 使用者反映氣壓棒失效、漏壓、無法維持高度或需更換氣壓棒。",
    title: "氣壓棒故障或漏壓，座面自行下沉",
    detail: "案例從購入一天到使用一年多後出現，包含座面無法維持高度、隨機緩慢下沉及氣壓棒沉到底部；若退換貨期內出現高度變化，應立即錄影並向原廠報修。",
    reportCount: 7,
    sources: [
      {
        platform: "Reddit",
        title: "Razer Enki cylinder replacement",
        url: "https://www.reddit.com/r/razer/comments/1awxmid/razer_enki_cylinder_replacement/",
        authors: ["ebsixtynine", "Middle_Interest_1084", "Gullible-Safety-3972"],
        evidenceSnippet: "三位 Enki 使用者回報氣壓棒故障、購入一天即漏壓下降，或使用一年多後氣壓棒沉到底部。",
      },
      {
        platform: "Reddit",
        title: "Enki Replacement Cylinder",
        url: "https://www.reddit.com/r/razer/comments/1koewb4/enki_replacement_cylinder/",
        authors: ["ashebash88", "mutantarachnid", "Denroll"],
        evidenceSnippet: "三位使用者明確回報 Enki 氣壓棒漏壓、座面無法維持高度並尋找替換件。",
      },
      {
        platform: "Best Buy",
        title: "Customer Reviews: Razer Enki Gaming Chair",
        url: "https://www.bestbuy.com/site/reviews/razer-enki-gaming-chair-with-synthetic-leather-for-all-day-comfort-black-green/6554668?page=9",
        authors: ["Raiko"],
        evidenceSnippet: "使用約八個月後氣壓棒失效，椅面會隨機緩慢下沉。",
      },
    ],
  },
  {
    id: "blender-ninja-bn701",
    summary: "多位 BN701 使用者回報塑膠調理壺在一次至數月使用後，底部或刀座周圍產生裂紋，部分進一步漏液；替換壺也可能在相同位置再裂。",
    title: "塑膠調理壺底部或刀座周圍龜裂並漏液",
    detail: "案例包含到貨即有微裂、第一次使用後裂開，以及正常製作 smoothie 數月後壺底裂漏；到貨後應立即檢查壺體與刀座周圍，並在退換貨期內反覆測試。",
    reportCount: 6,
    sources: [
      {
        platform: "Best Buy",
        title: "Ninja Professional Plus Blender with Auto-IQ Gray, Model BN701",
        url: "https://www.bestbuy.com/product/ninja-professional-plus-blender-with-auto-iq-gray/JXJVXGKV7Y/sku/12371988/reviews?ratings=1",
        authors: ["MrSmoothie", "Ataraxia", "Kati", "Zach"],
        evidenceSnippet: "四位 BN701 使用者回報壺身或壺底龜裂，部分開始漏液；其中一人的替換壺在同一位置第一次使用又裂。",
      },
      {
        platform: "Best Buy",
        title: "Ninja Professional Plus Blender with Auto-IQ reviews",
        url: "https://www.bestbuy.com/site/reviews/ninja-professional-plus-blender-with-auto-iq-gray/6395885?page=3",
        authors: ["SSTT2005"],
        evidenceSnippet: "使用數月約二十次後底座出現液體，檢查發現壺底整條裂紋，且未摔落或誤用。",
      },
      {
        platform: "BITcom Electronics",
        title: "Ninja BN701 Professional Plus Blender customer review",
        url: "https://bitcomelectronics.com/product/ninja-bn701-professional-plus-blender-1400-peak-watts-3-functions-for-smoothies-frozen-drinks-ice-cream-with-auto-iq-72-oz-total-crushing-pitcher-lid-dark-grey/",
        authors: ["LH"],
        evidenceSnippet: "購入約十個月後，刀座周圍底部出現兩道裂痕並開始漏液。",
      },
    ],
  },
  {
    id: "blender-extra-8-dmay0g-a900agmd8",
    summary: "多位 E320 使用者形容高轉速噪音刺耳或震耳，量測約 90 dB、手錶發出高分貝警告，部分因此使用聽力防護或退貨。",
    title: "運轉噪音刺耳，部分使用者需聽力防護",
    detail: "回報集中在中高轉速，包含耳朵疼痛、穿戴降噪耳機及因噪音退貨；若對噪音敏感，建議在退換貨期內以實際食材測試常用轉速。",
    reportCount: 6,
    sources: [
      {
        platform: "Reddit",
        title: "5200 significantly quieter than E320?",
        url: "https://www.reddit.com/r/Vitamix/comments/w1orgt/5200_significantly_quieter_than_e320/",
        authors: ["cashmonee81"],
        evidenceSnippet: "新購 E320 噪音極大且刺耳，與 5200 實測後退回 E320。",
      },
      {
        platform: "Reddit",
        title: "Sound dampening suggestions",
        url: "https://www.reddit.com/r/Vitamix/comments/qedauh/sound_dampening_suggestions/",
        authors: ["spicycurry55"],
        evidenceSnippet: "新購 E320 量測約九十多分貝，未防護時耳朵會痛，因此使用降噪耳機並遠離機器。",
      },
      {
        platform: "Reddit",
        title: "New Vitamix Question",
        url: "https://www.reddit.com/r/Vitamix/comments/1j1efxl/new_vitamix_question/",
        authors: ["jonnesoh"],
        evidenceSnippet: "當天新購 E320，速度七以上時噪音極大。",
      },
      {
        platform: "Reddit",
        title: "Can an E320 blend fibrous food just as smoothly as an A3500i?",
        url: "https://www.reddit.com/r/Vitamix/comments/17l89l1/can_an_e320_blend_fibrous_food_just_as_smoothly/",
        authors: ["Oldblindman0310"],
        evidenceSnippet: "自己的 E320 從速度五起很吵，Apple Watch 經常發出高分貝警告。",
      },
      {
        platform: "Reddit",
        title: "E320 ($300) vs E5200 ($370)",
        url: "https://www.reddit.com/r/Vitamix/comments/r8y68l/e320_300_vs_e5200_370/",
        authors: ["WestCoastCuisine"],
        evidenceSnippet: "購買 E320 後認為噪音過大而退貨。",
      },
      {
        platform: "Konesso",
        title: "Blender Vitamix Explorian E320 opinions",
        url: "https://www.konesso.pl/product-opinions-pol-22517-Blender-Vitamix-Explorian-E320.html",
        authors: ["Dorota, Koszalin"],
        evidenceSnippet: "已驗證購買者表示 E320 明顯比舊 5200 大聲很多。",
      },
    ],
  },
  {
    id: "blender-extra-13-dmaybb-a900k3czm",
    summary: "多位 Blendtec Total Blender 使用者回報調理壺漏液；多數案例指向壺底刀軸、墊圈、密封或軸承劣化。",
    title: "調理壺漏液",
    detail: "漏點回報多集中在壺底刀座、墊圈或壺體接合處，但也有使用者只確認壺體漏液；問題可能在長期使用後出現，發現滲液、異常噪音或墊圈碎裂時應立即停用並洽詢原廠。",
    reportCount: 6,
    sources: [
      {
        platform: "Reddit",
        title: "Blender recommendations?",
        url: "https://www.reddit.com/r/BuyItForLife/comments/rrav71/blender_recommendations/",
        authors: ["mark5hs"],
        evidenceSnippet: "Blendtec Total Blender 約使用兩千次後壺底橡膠墊圈劣化、無法維持密封，需整壺替換。",
      },
      {
        platform: "iFixit",
        title: "How is a leaky blender jar fixed?",
        url: "https://www.ifixit.com/Answers/View/703754/How+is+a+leaky+blender+jar+fixed",
        authors: ["Elsa Ornelas", "Nancy C"],
        evidenceSnippet: "兩位 Total Blender 使用者回報調理壺漏液；其中一人更換 O-ring 後仍從壺體與底座材料交界滲漏。",
      },
      {
        platform: "iFixit",
        title: "Can a leak at the bottom of Wideside jar (blade seal) be repaired?",
        url: "https://www.ifixit.com/Answers/View/757556/Can+a+leak+at+the+bottom+of+Wideside+jar+(blade+seal)+be+repaired",
        authors: ["Uday"],
        evidenceSnippet: "Wideside 壺從底部中央刀片連接處漏液。",
      },
      {
        platform: "iFixit",
        title: "How do I fix a leak at the bottom of the plastic container (blade)",
        url: "https://www.ifixit.com/Answers/View/413038/How+do+I+fix+a+leak+at+the+bottom+of+the+plastic+container+(blade)",
        authors: ["DWC Resources"],
        evidenceSnippet: "液體從塑膠壺底部刀片連接處滲漏。",
      },
      {
        platform: "Best Buy",
        title: "Blendtec Total Blender 10-Speed Blender reviews",
        url: "https://www.bestbuy.com/site/reviews/blendtec-total-blender-10-speed-blender-black/6405679?page=2",
        authors: ["Blenderfail"],
        evidenceSnippet: "使用數年後兩個杯壺的刀片軸承或密封都失效，噪音加劇且內容物漏到機器和檯面。",
      },
    ],
  },
  {
    id: "robot-irobot-max-705",
    summary: "多位 Roomba Max 705 Combo 使用者回報 AutoWash 基站排水或密封異常，造成髒水滯留、滴漏或基站淹水。",
    title: "AutoWash 基站排水／密封異常與漏水",
    detail: "回報包含拖地時滴出髒水、基站積水與「清潔基站／污水箱」錯誤；部分使用者安裝官方橡膠密封件後仍復發，建議收到後先更新基站韌體並在退換貨期內反覆測試洗拖、排水與密封。",
    reportCount: 8,
    sources: [
      {
        platform: "Reddit",
        title: "Roomba max 705 combo dripping while mopping",
        url: "https://www.reddit.com/r/roomba/comments/1qed9m7/roomba_max_705_combo_dripping_while_mopping/",
        authors: ["Le_zOU", "argo-gardener", "nickgray17"],
        evidenceSnippet: "三位同型號使用者分別回報拖地時滴出髒水，或水槽／滴盤因毛髮、髒污堵塞而持續滲漏。",
      },
      {
        platform: "Reddit",
        title: "Received an email identifying an issue with some units",
        url: "https://www.reddit.com/r/roomba/comments/1syg74a/received_an_email_identifying_an_issue_with_some/",
        authors: ["SurenCT"],
        evidenceSnippet: "使用者在收到密封修理套件前，已因漏水、污垢與基站積水向客服報修。",
      },
      {
        platform: "Reddit",
        title: "New Roomba Max 705 Combo + Base AutoWash Owner",
        url: "https://www.reddit.com/r/roomba/comments/1p4794b/new_roomba_max_705_combo_base_autowash_owner/",
        authors: ["Weary_Passenger_897"],
        evidenceSnippet: "使用者因反覆出現清潔基站／污水箱錯誤退貨，密封套件只稍微改善。",
      },
      {
        platform: "Reddit",
        title: "705 combo made a mass in the dock",
        url: "https://www.reddit.com/r/roomba/comments/1on7j42/705_combo_made_a_mass_in_the_dock/",
        authors: ["Pristine_Time_4386", "MatoMato-Mato"],
        evidenceSnippet: "兩位同型號使用者回報基站漏水或淹水，其中原發文者的官方密封件已正確安裝仍發生。",
      },
      {
        platform: "BBB",
        title: "iRobot Corporation | BBB Complaints",
        url: "https://www.bbb.org/us/ma/bedford/profile/vacuum-cleaning-systems/irobot-corporation-0021-91391/complaints?page=5",
        authors: ["Mark"],
        evidenceSnippet: "消費者回報 Max 705 Combo 持續顯示基站已滿、無法拖地，安裝官方密封套件後仍未解決。",
      },
    ],
  },
  {
    id: "waterdispenser-costco-us-brondell-circle",
    summary: "多位 Brondell Circle RC100 使用者反映，使用一段時間後出水量會從正常流量降為涓流或近乎無水。",
    title: "使用一段時間後出水量驟降",
    detail: "使用數月或數年後，出水可能從正常流量降成涓流或近乎無水；更換濾芯未必能排除，部分使用者需清理內部 smart／shut-off valve、調整排水或更換 shell 主體。",
    reportCount: 9,
    sources: [
      {
        platform: "Reddit",
        title: "Brondell R.O. Water filter.. slows to a trickle",
        url: "https://www.reddit.com/r/water/comments/u6tgd6/brondell_ro_water_filter_slows_to_a_trickle/",
        evidenceSnippet: "八位 Circle／RC100 使用者明確回報正常出水後降為涓流、長期低流量，且更換濾芯未必改善。",
        reports: [
          {
            author: "Attende",
            permalink: "https://www.reddit.com/r/water/comments/u6tgd6/brondell_ro_water_filter_slows_to_a_trickle/",
            locator: "主文作者 Attende",
            evidenceSnippet: "明確持有 Brondell Circle；正常出水約一秒後變成涓流。",
          },
          {
            author: "UltraSecretNinja",
            permalink: "https://www.reddit.com/r/water/comments/u6tgd6/brondell_ro_water_filter_slows_to_a_trickle/lfdoju4/",
            evidenceSnippet: "自述遇到相同流量問題，完成品牌排障後僅暫時改善。",
          },
          {
            author: "LeakedCrypto",
            permalink: "https://www.reddit.com/r/water/comments/u6tgd6/brondell_ro_water_filter_slows_to_a_trickle/lo9ub3s/",
            evidenceSnippet: "拆洗 shut-off valve 後改善，但仍會慢約二至三秒。",
          },
          {
            author: "absurd001",
            permalink: "https://www.reddit.com/r/water/comments/u6tgd6/brondell_ro_water_filter_slows_to_a_trickle/lu8olnt/",
            evidenceSnippet: "相同問題持續約兩年，水龍頭端降為涓流。",
          },
          {
            author: "FudgeSingle",
            permalink: "https://www.reddit.com/r/water/comments/u6tgd6/brondell_ro_water_filter_slows_to_a_trickle/khtbwjv/",
            evidenceSnippet: "明確表示完全相同的先全流、再涓流問題，已持續一年。",
          },
          {
            author: "bigscreen1970",
            permalink: "https://www.reddit.com/r/water/comments/u6tgd6/brondell_ro_water_filter_slows_to_a_trickle/kp5bdzj/",
            evidenceSnippet: "Circle 發生相同問題，更換整個 shell 後恢復。",
          },
          {
            author: "f9ncyj",
            permalink: "https://www.reddit.com/r/water/comments/u6tgd6/brondell_ro_water_filter_slows_to_a_trickle/kr14a89/",
            evidenceSnippet: "明確寫 RC100；只剩正常流量約 15–25%，換濾芯無效。",
          },
          {
            author: "Top-Investigator5170",
            permalink: "https://www.reddit.com/r/water/comments/u6tgd6/brondell_ro_water_filter_slows_to_a_trickle/krvnxr3/",
            evidenceSnippet: "問題約三年；換濾芯後仍會再次降成涓流。",
          },
        ],
      },
      {
        platform: "Brondell",
        title: "Circle Reverse Osmosis Water Filter System — Low pressure",
        url: "https://www.brondell.com/circle-reverse-osmosis-water-filter-system/#reviews",
        evidenceSnippet: "官方商品評論中，一位長期使用者回報水壓持續惡化至一分鐘裝不滿一杯。",
        reports: [
          {
            author: "Oliver",
            permalink: "https://www.brondell.com/circle-reverse-osmosis-water-filter-system/#reviews",
            locator: "Yotpo review 576922725",
            evidenceSnippet: "使用逾三年，最近一年水壓持續惡化，最後一分鐘裝不滿一杯。",
          },
        ],
      },
    ],
  },
  {
    id: "smartlock-aqara-a100",
    summary: "多位 A100 使用者反映電量百分比明顯失準或未出現低電量警示，部分案例隨後門鎖無法正常解鎖。",
    title: "電量顯示或低電量警示失準",
    detail: "回報包含電量長時間停在 88%～100%、新裝電池數日即顯示 77%、電池耗盡前未出現低電量通知，以及指紋或密碼突然無法解鎖。建議不要只依賴 App 百分比，並將機械鑰匙或備用供電留在屋外可取得處。",
    reportCount: 6,
    sources: [
      {
        platform: "Reddit",
        title: "Aqara Lock A100 Battery Life and inaccurate Battery Reading",
        url: "https://www.reddit.com/r/Aqara/comments/1fqjdb2/aqara_lock_a100_battery_life_and_inaccurate/",
        authors: ["zzLZHzz", "Flat_Highway6271"],
        evidenceSnippet: "兩位 A100 使用者回報 App 電量長時間不變或新裝電池數日即顯示異常低值。",
      },
      {
        platform: "Reddit",
        title: "Using rechargeable batteries for Aqara locks (A100 etc)",
        url: "https://www.reddit.com/r/Aqara/comments/10rpi6m/using_rechargeable_batteries_for_aqara_locks_a100/",
        authors: ["Slavor"],
        evidenceSnippet: "非充電電池在耗盡前仍顯示 100%，之後鍵盤閃爍、辨識指紋卻無法實際解鎖。",
      },
      {
        platform: "Reddit",
        title: "Aqara A100 suddenly stops working with single beep",
        url: "https://www.reddit.com/r/Aqara/comments/196iux9/aqara_a100_suddenly_stops_working_with_single_beep/",
        authors: ["AbrocomaFluid6804", "scottdrummer2"],
        evidenceSnippet: "兩位 A100 使用者回報未先收到低電量警告就無法以指紋、密碼或藍牙正常開鎖。",
      },
      {
        platform: "Aqara Forum",
        title: "Aqara A100 lock keep power level at 89% even at low level after 1 year usage",
        url: "https://forum.aqara.com/t/aqara-a100-lock-keep-power-level-at-89-even-at-low-level-after-1-year-usage/285534",
        authors: ["frankiepiglet"],
        evidenceSnippet: "A100 電量長期卡在 89%，低電量時仍未觸發警示。",
      },
    ],
  },
  {
    id: "smartlock-aqara-d200i",
    summary: "多位 D200i 使用者跨站反映，原本可使用數月的充電電池後續突然在數天至兩週內大量掉電，更換備用或新電池後仍可能重現。",
    title: "充電電池異常快速耗盡",
    detail: "部分案例每日約掉電 10%、充滿後三天由 100% 降至 40%，或不到一週耗盡；代理商或維修曾判定感測器或硬體失效，也有使用者懷疑韌體或 Hub 更新，根因尚未一致。另有一例電池膨脹，若出現異常發熱、膨脹或續航暴跌，應立即停用該電池並聯絡原廠。",
    reportCount: 9,
    sources: [
      {
        platform: "Reddit",
        title: "Aqara D200i door lock massive battery drain",
        url: "https://www.reddit.com/r/Aqara/comments/1kamjd0/aqara_d200i_door_lock_massive_battery_drain/",
        authors: ["TheCoolDudeForYou", "ghoonk", "Emotional-Pay-4433", "lesterchan", "ivanl1234"],
        evidenceSnippet: "五位 D200i 使用者回報每日大量掉電、完整充電只維持約兩週，或更換電池、重新配對後仍無改善。",
      },
      {
        platform: "Aqara Forum",
        title: "D200i Sudden Battery Drain / Degradation",
        url: "https://forum.aqara.com/t/d200i-sudden-battery-drain-degradation/298455",
        authors: ["lucas14", "daniel668", "francis_kwang", "Gabin"],
        evidenceSnippet: "四位 D200i 使用者回報充滿後數天至一週內大量掉電，替換整組門鎖或新電池後仍可能復發。",
      },
    ],
  },
  {
    id: "robot-irobot-plus-505",
    summary: "多位 Roomba Plus 505 Combo 使用者回報基站雖啟動自動集塵，機器內集塵盒仍未排空，必須手動倒垃圾。",
    title: "自動集塵無法排空機器集塵盒",
    detail: "回報包含原機、替換主機與替換基站都只在第一次或完全無法排空；購買後應以有毛髮與灰塵的實際清掃測試多次自動集塵，並確認退換貨期。",
    reportCount: 6,
    sources: [
      {
        platform: "Reddit",
        title: "Roomba 505 Plus not emptying dust bin",
        url: "https://www.reddit.com/r/roomba/comments/1srz7jm/roomba_505_plus_not_emptying_dust_bin/",
        authors: ["cheshyrp", "gusmurphy", "Express_Surround760", "PattyBenz"],
        evidenceSnippet: "四位同型號使用者回報基站有吸力聲但集塵盒未排空；其中一人更換主機與基站後仍復發。",
      },
      {
        platform: "Best Buy",
        title: "Decent navigation but plagued with issues",
        url: "https://www.bestbuy.com/site/reviews/irobot-roomba-505-combo-vacuum-mop-autowash-dock-extending-spinning-mop-pads-self-empties-pad-wash-heated-dry-lidar-black/10187359?page=5",
        authors: ["ConradB"],
        evidenceSnippet: "已驗證購買者明確表示 505 無法排空碎屑集塵盒，重啟主機與基站仍無效。",
      },
      {
        platform: "Best Buy",
        title: "Questions and Answers: iRobot Roomba 505 Combo",
        url: "https://www.bestbuy.com/site/questions/irobot-roomba-505-combo-vacuum-mop-autowash-dock-extending-spinning-mop-pads-self-empties-pad-wash-heated-dry-lidar-black/10747590?includeAiContent=true&page=2&pageSize=20&sku=10747590",
        authors: ["Cathy"],
        evidenceSnippet: "使用者表示機器不會自動排空，必須手動撬開倒垃圾並要求更換。",
      },
    ],
  },
  {
    id: "robot-costco-us-roborock-qx-revo",
    summary: "多位 QX Revo 使用者回報使用一段時間或清洗拖布時，基站或機器會漏水至底盤或地板。",
    title: "基站或機器漏水",
    detail: "部分案例換新後再次發生；收到商品後應反覆測試拖布清洗、排水與回充底盤，並確認清水箱、污水箱與密封件安裝正常。",
    reportCount: 7,
    sources: [
      {
        platform: "Costco",
        title: "Roborock QX Revo Robot Vacuum and Mop with Multifunctional Dock",
        url: "https://www.costco.com/roborock-qx-revo-robot-vacuum-and-mop-with-multifunctional-dock.product.4000233271.html",
        authors: ["Jack", "Daya", "Kristi", "Ma sh", "Monisoto", "Robot"],
        evidenceSnippet: "六位會員明確回報同型號基站或機器漏水，包含換新後再次發生。",
      },
      {
        platform: "Reddit",
        title: "QX Revo leaking onto lower tray after cycle",
        url: "https://old.reddit.com/r/Roborock/comments/1l61vlx/qx_revo_leaking_onto_lower_tray_after_cycle/",
        authors: ["rexlu"],
        evidenceSnippet: "原發文者明確表示 Costco QX Revo 完成循環後會在基站底盤留下漏水。",
      },
    ],
  },
  {
    id: "robot-ecovacs-t80-omni",
    checkedAt: "2026-08-29",
    summary: "多位 DEEBOT T80 OMNI 使用者跨站回報，拖地後滾筒、機內污水箱或水路容易產生明顯異味，需要頻繁清洗與晾乾。",
    title: "拖地後滾筒／污水路徑異味",
    detail: "回報涵蓋滾筒拖布、機內污水箱與清潔縫隙；部分可藉由清洗、晾乾或清潔錠暫時改善，也有污水未正常排空而送修仍未解決的案例。若對異味敏感，應在退換貨期內連續測試拖地、基站排水與烘乾，並依原廠方式清潔水路。",
    reportCount: 6,
    sources: [
      {
        platform: "Reddit",
        title: "T80 dirt water Tank Always full",
        url: "https://www.reddit.com/r/ecovacs/comments/1pgc172/t80_dirt_water_tank_always_full/",
        authors: ["qwazogen", "Beni_Gabor"],
        evidenceSnippet: "兩位 T80 OMNI 使用者回報機內或基站污水箱持續產生明顯異味，其中一例污水未正常排空。",
      },
      {
        platform: "Reddit",
        title: "Is the T80S Omni worth it?",
        url: "https://www.reddit.com/r/ecovacs/comments/1ue7oax/is_the_t80s_omni_worth_it/",
        authors: ["NCael"],
        evidenceSnippet: "留言者明確表示曾持有並退掉 T80，滾筒很快發臭且不易徹底清洗。",
      },
      {
        platform: "Reddit",
        title: "I will always avoid Ecovacs like the plague.",
        url: "https://www.reddit.com/r/RobotVacuums/comments/1un38ek/i_will_always_avoid_ecovacs_like_the_plague/",
        authors: ["Heatproof-Snowman"],
        evidenceSnippet: "使用約一年的 T80 OMNI 會在拖地期間與拖地後產生異味，清洗並晾乾滾筒後才改善。",
      },
      {
        platform: "Reddit",
        title: "Which robot vacuum needs the least amount of maintenance?",
        url: "https://www.reddit.com/r/RobotVacuums/comments/1rugldo/which_robot_vacuum_needs_the_least_amount_of/",
        authors: ["Guy_Fieri__2024"],
        evidenceSnippet: "T80 OMNI 飼主回報每次使用洗地滾筒後機器就會發臭，必須清理多處縫隙。",
      },
      {
        platform: "Mobile01",
        title: "第一次買掃拖機器人，科沃斯T80 OMNI推薦嗎~",
        url: "https://www.mobile01.com/topicdetail.php?f=728&t=7248442",
        authors: ["chou Ernest"],
        evidenceSnippet: "同型號使用者回報使用半年後，即使有滾筒烘乾，異味仍持續造成困擾。",
      },
    ],
  },
  {
    id: "robot-ecovacs-t90-pro",
    checkedAt: "2026-08-29",
    summary: "多位 DEEBOT T90 PRO OMNI 使用者跨站回報，導航／避障會跳過或拒絕清掃實際可到達的區域。",
    title: "導航／避障跳過可到達區域",
    detail: "回報包含漏掃房間邊緣、整塊地毯、局部區域與可通過的家具兩側，也有物件移走後仍繞開舊位置的情況；部分可透過調整 AIVI、另建區域或重新建圖改善。建議在退換貨期內以全屋不同地面連續測試，確認地圖與實際覆蓋範圍。",
    reportCount: 10,
    sources: [
      {
        platform: "Reddit",
        title: "Ecovacs Deebot T90 Pro Omni skipping a lot of places",
        url: "https://www.reddit.com/r/ecovacs/comments/1uo11zp/ecovacs_deebot_t90_pro_omni_skipping_a_lot_of/",
        authors: ["amirdaraee", "Ok-Succotash4622", "HomelandersBulge"],
        evidenceSnippet: "三位同型號使用者回報機器漏掃邊緣、房間局部或整塊地毯，需調整避障設定或另做區域清掃。",
      },
      {
        platform: "Reddit",
        title: "Qrevo Master vs T90 Pro Omni",
        url: "https://www.reddit.com/r/RobotVacuums/comments/1udvtrz/qrevo_master_vs_t90_pro_omni/",
        authors: ["-Maim-"],
        evidenceSnippet: "同型號使用者回報清掃路徑不合理、會跳過區域，返回基站時也會走異常路徑。",
      },
      {
        platform: "Reddit",
        title: "First time owner - any tips/tricks/info I should know",
        url: "https://www.reddit.com/r/RobotVacuums/comments/1us8voq/first_time_owner_any_tipstricksinfo_i_should_know/",
        authors: ["NovercaIis"],
        evidenceSnippet: "同型號使用者完成建圖與三次清掃後，機器仍拒絕進入實際足以通過的家具兩側。",
      },
      {
        platform: "Reddit",
        title: "Deebot t90 pro omni - what is this madness?",
        url: "https://www.reddit.com/r/ecovacs/comments/1uio4qj/deebot_t90_pro_omni_what_is_this_madness/",
        authors: ["scarzxxx", "Sainted_CumFarter"],
        evidenceSnippet: "兩位同型號使用者分別回報無障礙開放空間仍隨機繞圈並漏掃，以及機器拒絕駛上實際可清掃的黑色地毯。",
      },
      {
        platform: "Reddit",
        title: "Please be mindful if buying a T90 Pro Omni",
        url: "https://www.reddit.com/r/ecovacs/comments/1ureiz8/please_be_mindful_if_buying_a_t90_pro_omni/",
        authors: ["Cobrachicken_iya", "BigBadJon8976"],
        evidenceSnippet: "兩位同型號使用者分別回報物件移走後仍繞開舊位置，以及機器無法判斷繞行時會直接跳過可清掃區域。",
      },
      {
        platform: "YouTube",
        title: "3 Months with a Robot Vacuum! ECOVACS T90 PRO OMNI Review",
        url: "https://www.youtube.com/watch?v=sprhcYrQYfI",
        authors: ["@tx_soul88"],
        evidenceSnippet: "同型號使用者追蹤回覆表示使用數週後仍有漏掃位置，可能需調整地圖或重新建圖。",
      },
    ],
  },
  {
    id: "monitor-msi-271qrx",
    checkedAt: "2026-08-29",
    summary: "多位 MPG 271QRX 使用者跨站回報，使用中會隨機短暫黑屏，約一至數秒後自行恢復。",
    title: "隨機短暫黑屏後自行恢復",
    detail: "回報涵蓋不同更新率、DisplayPort 與 HDMI 情境，部分換線、更新韌體或調整系統設定後仍發生；現有證據不足以判定單一根因。建議在退換貨期內以實際顯卡、線材、HDR 與更新率長時間測試。",
    reportCount: 9,
    sources: [
      {
        platform: "Reddit",
        title: "MSI MPG 271QRX random black screens when at 240hz",
        url: "https://www.reddit.com/r/MSI_Gaming/comments/1b6fmgi/msi_mpg_271qrx_random_black_screens_when_at_240hz/",
        authors: ["No-Berry-2226", "jay_em_j", "Medical_Ad_2399", "Drknight71", "infotorn"],
        evidenceSnippet: "五位同型號使用者回報畫面隨機黑一至數秒後恢復，部分換線、更新韌體或調整系統後仍發生。",
      },
      {
        platform: "MSI Forum",
        title: "MSI MPG 271QRX display keeps going black for a sec and then turns back on",
        url: "https://forum-en.msi.com/index.php?threads/msi-mpg-271qrx-display-keeps-going-black-for-a-sec-and-then-turns-back-on.397545/",
        authors: ["Moheban79", "dabbidha153f02d8", "mondialr8159302ea", "ethanielUK"],
        evidenceSnippet: "四位同型號使用者在 MSI 官方論壇回報相同的短暫黑屏後自行恢復症狀。",
      },
    ],
  },
  {
    id: "wifi-unifi-u6-pro",
    checkedAt: "2026-08-29",
    summary: "多位 U6 Pro 使用者跨站回報，特定批次在屏蔽網路線或接地金屬安裝下會漏電、產生火花或斷電重啟。",
    title: "特定批次接地／STP 造成漏電、火花或斷電重啟",
    detail: "Ubiquiti 官方公告 2022 年 6 至 8 月製造的特定批次與 STP 網路線不相容，可能持續重啟或無法上電；使用者原頁另記錄外殼／網路線屏蔽帶電、安裝時火花及 PoE 中斷。官方稱後續製造已修正；買二手或舊庫存時仍應核對製造日期，並依現場接地與布線條件測試。",
    reportCount: 7,
    sources: [
      {
        platform: "Ubiquiti Community",
        title: "U6 Pro Sparks and Shuts Down When Mounted to Grounded Mountpoint",
        url: "https://community.ui.com/questions/U6-Pro-Sparks-and-Shuts-Down-When-Mounted-to-Grounded-Mountpoint/11277a7f-ff18-4a60-aecf-e2bda4fc485f",
        authors: ["hano009", "csdsupport", "cg-itc", "MindStudio", "dread99", "decast"],
        evidenceSnippet: "六位 U6 Pro 使用者回報接地金屬或屏蔽線情境下出現火花、帶電、斷電或重啟，涵蓋多台同批次設備。",
      },
      {
        platform: "Reddit",
        title: "Multiple Shielded Cable on USW-Lite-8-PoE Cause Issue.",
        url: "https://www.reddit.com/r/Ubiquiti/comments/x39m35/multiple_shielded_cable_on_uswlite8poe_cause_issue/",
        authors: ["tianrenz"],
        evidenceSnippet: "一位獨立 U6 Pro 使用者回報兩條屏蔽線同時接入時 PoE 異常且設備重啟，改用非屏蔽線後恢復。",
      },
    ],
  },
  {
    id: "wifi-unifi-u6-pro",
    checkedAt: "2026-08-29",
    summary: "多位 U6 Pro 使用者跨站回報，中央燈環蓋會在未受外力時自行脫落，常見固定卡榫或塑膠柱斷裂。",
    title: "中央蓋／卡榫自行脫落",
    detail: "回報涵蓋吊頂後約一年半至三年的設備，部分中央蓋落下時砸到人；若仍在保固期應優先申請 RMA，過保設備則需檢查卡榫、避免蓋板再度墜落，並留意自行黏合可能影響後續維修。",
    reportCount: 8,
    sources: [
      {
        platform: "Reddit",
        title: "U6-Pro lids falling off — Is this a widespread manufacturing defect?",
        url: "https://www.reddit.com/r/UNIFI/comments/1qayv1k/u6pro_lids_falling_off_is_this_a_widespread/",
        authors: ["gregstrawberries", "ArchimedesMP"],
        evidenceSnippet: "兩位 U6 Pro 使用者回報吊頂且沒有外力的設備中央蓋自行落下，其中一人已有兩台先後發生。",
      },
      {
        platform: "Reddit",
        title: "Center cap fell out of my U6-Pro",
        url: "https://www.reddit.com/r/UNIFI/comments/1f4ao57/center_cap_fell_out_of_my_u6pro/",
        authors: ["JimmyReagan", "scotty83"],
        evidenceSnippet: "兩位 U6 Pro 使用者回報設備安裝後未再碰觸，中央卡榫仍自行碎裂並讓蓋板脫落。",
      },
      {
        platform: "Reddit",
        title: "U6 Access Point Cap Broken",
        url: "https://www.reddit.com/r/Ubiquiti/comments/14mq3bx/u6_access_point_cap_broken/",
        authors: ["TrevorPerth", "outie2k"],
        evidenceSnippet: "兩位 U6 Pro 使用者回報固定卡榫無外力斷裂，中央蓋自行掉落，其中一例砸到使用者頭部。",
      },
      {
        platform: "Ubiquiti Community",
        title: "Unifi U6-Pro Falling Apart",
        url: "https://community.ui.com/questions/Unifi-U6-Pro-Falling-Apart/f080c0df-d004-47be-8724-d52494b58f5b",
        authors: ["Statecowboy"],
        evidenceSnippet: "使用者回報客廳天花板上的 U6 Pro 中央燈環蓋自行掉落，設備剛過保固。",
      },
      {
        platform: "Ubiquiti Community",
        title: "U6 Pro Cap Broken - COMPLAINT",
        url: "https://community.ui.com/questions/U6-Pro-Cap-Broken-COMPLAINT/0682ca4d-645b-49db-ac47-5571ffeca795",
        authors: ["thpap"],
        evidenceSnippet: "使用者回報 U6 Pro 中央蓋自行從天花板落下，塑膠固定柱已斷裂，過保後 RMA 未獲受理。",
      },
    ],
  },
  {
    id: "wifi-asus-rt-be86u",
    checkedAt: "2026-09-02",
    summary: "多位 RT-BE86U 使用者回報特定韌體下 Wi-Fi 用戶端或無線電會反覆斷線、重啟，嚴重時需重新開機或降版才暫時恢復。",
    title: "特定韌體下 Wi-Fi 反覆斷線或無線電重啟",
    detail: "七位可辨識使用者在 Reddit、ASUS ZenTalk 與 Whirlpool 回報 RT-BE86U 的 Wi-Fi 用戶端、整個無線電或網路服務反覆掉線／重啟；部分案例降版後改善。ASUS 後續韌體說明曾提及改善漫遊、連接埠穩定與部分斷線原因，但不能據此推定所有案例已解決。建議先更新最新穩定版、必要時恢復原廠設定，並於退換貨期內同時壓測 2.4GHz、5GHz、有線連接與 AiMesh。",
    reportCount: 7,
    sources: [
      {
        platform: "Reddit",
        title: "After firmware update RT-BE86U randomly disconnects and reconnects",
        url: "https://www.reddit.com/r/ASUS/comments/1p24n2y/after_firmware_update_rtbe86u_randomly/",
        authors: ["swfanatic717", "HenrikGustavsson", "J_Bug"],
        evidenceSnippet: "三位 RT-BE86U 使用者回報特定韌體後網路反覆斷線、Wi-Fi 凍結或重啟，其中有人降版後才恢復穩定。",
      },
      {
        platform: "ASUS ZenTalk",
        title: "Critical kernel panics / instability by Broadcom Wi-Fi driver bug",
        url: "https://zentalk.asus.com/t5/networking/critical-kernel-panics-instability-by-broadcom-wi-fi-driver-bug/td-p/494971/page/2",
        authors: ["VolkovRA"],
        evidenceSnippet: "RT-BE86U 使用者在 39112 回報個別裝置或整個 Wi-Fi 會斷線並重新啟動，而有線網路維持正常。",
      },
      {
        platform: "ASUS ZenTalk",
        title: "RT-BE86U Kernel: WLC_SCB_DEAUTHORIZE error -30",
        url: "https://zentalk.asus.com/t5/networking/rt-be86u-kernel-wlc-scb-deauthorize-error-30/td-p/485994/page/3",
        authors: ["Hesster92", "RNA"],
        evidenceSnippet: "兩位 RT-BE86U 使用者回報整體連線掉線、韌體崩潰或重啟，恢復原廠設定與換機仍可能復發。",
      },
      {
        platform: "Whirlpool",
        title: "ASUS RT-BE86U discussion",
        url: "https://forums.whirlpool.net.au/archive/3246v0yj",
        authors: ["Edd"],
        evidenceSnippet: "RT-BE86U 使用者回報原廠最新韌體下 Wi-Fi 不穩且 LAN4 偶發斷線，約每半小時掉線一次，最後退貨。",
      },
    ],
  },
];

if (new Set(verifiedRows.map((row) => `${row.id}\n${row.title}`)).size !== verifiedRows.length) {
  throw new Error("Duplicate product issue rows in verified product issue evidence");
}

function verifiedRowCheckedAt(row) {
  const checkedAt = row.checkedAt || DEFAULT_EVIDENCE_CHECKED_AT;
  if (!isValidReviewDate(checkedAt) || checkedAt > CHECKED_AT) {
    throw new Error(`Verified issue has an invalid review date: ${row.id}`);
  }
  return checkedAt;
}

const verifiedRowsById = new Map();
for (const row of verifiedRows) {
  const rows = verifiedRowsById.get(row.id) || [];
  rows.push(row);
  verifiedRowsById.set(row.id, rows);
}

const verifiedIssueById = new Map([...verifiedRowsById].map(([id, rows]) => [id, {
  status: "common_issue",
  checkedAt: rows.map(verifiedRowCheckedAt).sort().at(-1),
  summary: rows.map((row) => row.summary).join(""),
  issues: rows.map((row) => ({
    title: row.title,
    detail: row.detail,
    reportCount: row.reportCount,
    sources: row.sources.map(({ platform, title, url }) => ({ platform, title, url })),
  })),
}]));

if (reportLedger.checkedAt !== CHECKED_AT || !Array.isArray(reportLedger.reports)) {
  throw new Error("Product issue report ledger is missing or uses the wrong review date");
}

function validateExplicitReport(report) {
  const requiredStrings = [
    "productId",
    "issueTitle",
    "platform",
    "sourceTitle",
    "sourceUrl",
    "author",
    "permalink",
    "locator",
    "evidenceExcerpt",
    "auditNote",
  ];
  for (const field of requiredStrings) {
    if (typeof report?.[field] !== "string" || !report[field].trim()) {
      throw new Error(`Explicit report is missing ${field}`);
    }
  }
  if (report.locator.trim().length < 8 || report.evidenceExcerpt.trim().length < 16) {
    throw new Error("Explicit report requires a reproducible locator and per-person evidence");
  }
  if (/^人工回看原始頁，作者「.*」以第一人稱明確回報同型號的同一問題/.test(report.auditNote.trim())) {
    throw new Error("Explicit report auditNote is still a generic attestation");
  }
  if (!report.auditNote.includes(report.evidenceExcerpt)) {
    throw new Error("Explicit report auditNote must retain the per-person evidence excerpt");
  }
  for (const field of ["sourceUrl", "permalink"]) {
    let parsed;
    try {
      parsed = new URL(report[field]);
    } catch (_error) {
      throw new Error(`Explicit report has an invalid ${field}`);
    }
    if (!/^https?:$/.test(parsed.protocol)) {
      throw new Error(`Explicit report has a non-HTTP ${field}`);
    }
  }
  if (report.exactModel !== true || report.firstPerson !== true) {
    throw new Error("Explicit report must attest exactModel and firstPerson");
  }
  if (report.crossPostKey !== null && (typeof report.crossPostKey !== "string" || !report.crossPostKey.trim())) {
    throw new Error("Explicit report has an invalid crossPostKey");
  }
  if (
    report.reviewBasis !== "manual_original_page"
    || !isValidReviewDate(report.reviewedAt)
    || report.reviewedAt > reportLedger.checkedAt
  ) {
    throw new Error("Explicit report must record a valid manual original-page review date");
  }
  return report;
}

function validateUniqueReportExcerpts(reports, label = "source") {
  const excerpts = reports.map((report) => normalize(report.evidenceExcerpt));
  if (new Set(excerpts).size !== excerpts.length) {
    throw new Error(`Per-person evidence excerpts must be unique within ${label}`);
  }
  return reports;
}

const reportsBySource = new Map();
const reportKeys = new Set();
for (const report of reportLedger.reports) {
  validateExplicitReport(report);
  const key = [report.productId, report.issueTitle, report.platform, report.sourceUrl].join("\n");
  const reportKey = [key, report.author, report.permalink].join("\n");
  if (reportKeys.has(reportKey)) throw new Error(`Duplicate explicit report ledger row: ${reportKey}`);
  reportKeys.add(reportKey);
  const reports = reportsBySource.get(key) || [];
  reports.push(report);
  reportsBySource.set(key, reports);
}

function sourceReports(row, source) {
  const key = [row.id, row.title, source.platform, source.url].join("\n");
  const reports = reportsBySource.get(key) || [];
  const checkedAt = verifiedRowCheckedAt(row);
  const compactAuthors = source.authors || (source.reports || []).map((report) => report.author);
  const expectedAuthors = [...new Set(compactAuthors.map((author) => author.trim().toLowerCase()))].sort();
  const reportAuthors = [...new Set(reports.map((report) => report.author.trim().toLowerCase()))].sort();
  if (!reports.length || JSON.stringify(expectedAuthors) !== JSON.stringify(reportAuthors)) {
    throw new Error(`Explicit report ledger mismatch for ${row.id}: ${source.url}`);
  }
  if (reports.some((report) => report.reviewedAt !== checkedAt)) {
    throw new Error(`Explicit report review date mismatch for ${row.id}: ${source.url}`);
  }
  validateUniqueReportExcerpts(reports, `${row.id}: ${source.url}`);
  return reports.map((report) => ({
    author: report.author,
    permalink: report.permalink,
    locator: report.locator,
    evidenceExcerpt: report.evidenceExcerpt,
    auditNote: report.auditNote,
    exactModel: report.exactModel,
    firstPerson: report.firstPerson,
    crossPostKey: report.crossPostKey,
    reviewBasis: report.reviewBasis,
    reviewedAt: report.reviewedAt,
  }));
}

const evidenceRowsByRow = new Map(verifiedRows.map((row) => [row, row.sources.map((source) => {
  const reports = sourceReports(row, source);
  return {
    issueTitle: row.title,
    platform: source.platform,
    title: source.title,
    url: source.url,
    evidenceSnippet: source.evidenceSnippet,
    authors: reports.map((report) => report.author),
    distinctReportCount: new Set(reports.map((report) => report.author.trim().toLowerCase())).size,
    checkedAt: verifiedRowCheckedAt(row),
    reports,
  };
})]));

const evidenceById = new Map();
for (const row of verifiedRows) {
  evidenceById.set(row.id, [...(evidenceById.get(row.id) || []), ...evidenceRowsByRow.get(row)]);
}

for (const row of verifiedRows) {
  const evidenceRows = evidenceRowsByRow.get(row) || [];
  const websites = new Set(evidenceRows.map((evidence) => canonicalWebsite(evidence.url)).filter(Boolean));
  if (websites.size < 2) throw new Error(`Verified issue does not span two independent websites: ${row.id}`);

  const reportRecords = [];
  const reportsByAuthor = new Map();
  for (const evidence of evidenceRows) {
    for (const report of evidence.reports) {
      const author = normalize(report.author);
      const record = {
        accountKey: `${normalize(evidence.platform)}:${author}`,
        author,
        platform: normalize(evidence.platform),
        crossPostKey: normalize(report.crossPostKey),
      };
      reportRecords.push(record);
      const authorRecords = reportsByAuthor.get(author) || [];
      authorRecords.push(record);
      reportsByAuthor.set(author, authorRecords);
    }
  }

  for (const [author, records] of reportsByAuthor) {
    const platforms = new Set(records.map((record) => record.platform));
    if (platforms.size < 2) continue;
    const keys = new Set(records.map((record) => record.crossPostKey).filter(Boolean));
    if (keys.size !== 1 || records.some((record) => !record.crossPostKey)) {
      throw new Error(`Cross-platform author is not explicitly deduplicated for ${row.id}: ${author}`);
    }
  }

  const crossPostByAccount = new Map();
  const crossPostUse = new Map();
  for (const report of reportRecords) {
    if (!report.crossPostKey) continue;
    const existing = crossPostByAccount.get(report.accountKey);
    if (existing && existing !== report.crossPostKey) {
      throw new Error(`Conflicting crossPostKeys for ${row.id}: ${report.accountKey}`);
    }
    crossPostByAccount.set(report.accountKey, report.crossPostKey);
    const accounts = crossPostUse.get(report.crossPostKey) || new Set();
    accounts.add(report.accountKey);
    crossPostUse.set(report.crossPostKey, accounts);
  }
  for (const [crossPostKey, accounts] of crossPostUse) {
    if (accounts.size < 2) throw new Error(`Isolated crossPostKey for ${row.id}: ${crossPostKey}`);
  }

  const distinctReports = new Set(reportRecords.map((report) => {
    const crossPostKey = crossPostByAccount.get(report.accountKey);
    return crossPostKey ? `cross-post:${crossPostKey}` : report.accountKey;
  }));
  if (row.reportCount < 6 || row.reportCount !== distinctReports.size) {
    throw new Error(`Verified issue reporter threshold mismatch for ${row.id}: declared ${row.reportCount}, derived ${distinctReports.size}`);
  }
}

const usedReportCount = [...evidenceById.values()]
  .flat()
  .reduce((total, evidence) => total + evidence.reports.length, 0);
if (usedReportCount !== reportLedger.reports.length) {
  throw new Error(`Unused or missing explicit report rows: used ${usedReportCount}, ledger ${reportLedger.reports.length}`);
}

module.exports = {
  CHECKED_AT,
  evidenceById,
  validateExplicitReport,
  validateUniqueReportExcerpts,
  verifiedIssueById,
};
