const reportLedger = require("../product_issue_report_evidence.json");
const { canonicalWebsite, normalize } = require("./product-issue-validation");

const CHECKED_AT = "2026-07-19";
const DEFAULT_EVIDENCE_CHECKED_AT = "2026-07-10";
const REVIEW_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function isValidReviewDate(value) {
  if (!REVIEW_DATE_PATTERN.test(String(value || ""))) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

const verifiedRows = [
  {
    id: "wifi-unifi-u7-pro",
    summary: "多位同型號使用者回報 2.4GHz IoT 裝置會頻繁斷線、無法連網或反覆重連。",
    title: "2.4GHz IoT 裝置斷線與相容性不穩",
    detail: "問題常集中在 2.4GHz 智慧家電，且可能受韌體版本影響；部署前應先更新穩定韌體，並用實際 IoT 裝置測試連線與漫遊。",
    reportCount: 9,
    sources: [
      {
        platform: "Ubiquiti Community",
        title: "U7-Pro 2.4ghz issues",
        url: "https://community.ui.com/questions/U7-Pro-2-4ghz-issues/4dff7816-5c14-4686-9f9a-ab99f9b93700",
        authors: ["Kurisu112", "DUDL3Y"],
        evidenceSnippet: "兩位 U7 Pro 使用者回報 2.4GHz IoT 裝置持續掉線或同樣異常。",
      },
      {
        platform: "Reddit",
        title: "U7 pro iot issue explained",
        url: "https://www.reddit.com/r/Ubiquiti/comments/1g1funp/u7_pro_iot_issue_explained/",
        authors: ["Capt_shadab", "jrd2me", "Confucius_said", "m4c1n0", "Sp1cedaddy", "Vertigo103"],
        evidenceSnippet: "六位同型號使用者描述 IoT 裝置短暫斷線後重連或無法穩定使用。",
      },
      {
        platform: "Reddit",
        title: "2.4GHz IoT device constant disconnect",
        url: "https://www.reddit.com/r/Ubiquiti/comments/1h600kz/24ghz_iot_device_constant_disconnect_5_6ghz_wifi/",
        authors: ["Mattycee2K15"],
        evidenceSnippet: "原發文者明確回報 U7 Pro 的 IoT 裝置每天多次斷線。",
      },
    ],
  },
  {
    id: "wifi-unifi-u7-pro-max",
    summary: "多位同型號使用者回報 2.4GHz IoT 裝置會出現 DHCP／DNS timeout、高封包遺失或斷線重連。",
    title: "2.4GHz IoT 連線、DHCP／DNS 與封包遺失問題",
    detail: "智慧家電可能在連上後很快掉線，或出現嚴重封包遺失；建議先以目前穩定韌體及獨立 IoT SSID 實測，再決定大量部署。",
    reportCount: 8,
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
        authors: ["Spaceman_Splff", "BluThunder2k", "aladd04"],
        evidenceSnippet: "三位同型號使用者描述 2.4GHz IoT 連線異常，其中一例約有 95% 封包遺失。",
      },
      {
        platform: "Reddit",
        title: "IoT devices won't connect to WiFi",
        url: "https://www.reddit.com/r/Ubiquiti/comments/1fnsctj/new_and_some_old_iot_devices_wont_connect_to_wifi/",
        authors: ["VampireSix", "spford", "Capt_shadab"],
        evidenceSnippet: "三位使用者回報 IoT 裝置只能短暫連線、隨即斷線或完全無法加入。",
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
    summary: "多位 AP22 使用者回報舊版 3.0.0 韌體會使 iPhone 或 Android 掉線、拒絕重連或顯示密碼錯誤；後續 hotfix 已針對此問題修正。",
    title: "舊版 3.0.0 韌體造成行動裝置斷線與錯誤密碼",
    detail: "這是 2024 年 3.0.0 版本的歷史韌體災情；HPE 已於 2024-08-23 發布 3.0.0.1 hotfix。購買或部署後應先確認已升級修正版，不代表目前最新版仍必然發生。",
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
    detail: "部分痕跡無法完全擦除且換貨後仍可能出現；收貨時應在強光下立即檢查整片面板，發現刮痕便在退換貨期內處理。",
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
    checkedAt: "2026-07-11",
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
];

if (new Set(verifiedRows.map((row) => row.id)).size !== verifiedRows.length) {
  throw new Error("Duplicate product IDs in verified product issue evidence");
}

function verifiedRowCheckedAt(row) {
  const checkedAt = row.checkedAt || DEFAULT_EVIDENCE_CHECKED_AT;
  if (!isValidReviewDate(checkedAt) || checkedAt > CHECKED_AT) {
    throw new Error(`Verified issue has an invalid review date: ${row.id}`);
  }
  return checkedAt;
}

const verifiedIssueById = new Map(verifiedRows.map((row) => [row.id, {
  status: "common_issue",
  checkedAt: verifiedRowCheckedAt(row),
  summary: row.summary,
  issues: [
    {
      title: row.title,
      detail: row.detail,
      reportCount: row.reportCount,
      sources: row.sources.map(({ platform, title, url }) => ({ platform, title, url })),
    },
  ],
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

const evidenceById = new Map(verifiedRows.map((row) => [row.id, row.sources.map((source) => {
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

for (const row of verifiedRows) {
  const evidenceRows = evidenceById.get(row.id) || [];
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
