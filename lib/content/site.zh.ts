import type { SiteContent } from "./site.en";

const siteContent: SiteContent = {
  nav: { home: "首頁", work: "作品", experience: "經歷" },
  hero: {
    greetings: ["Hello :)", "Hallo", "Nǐ hǎo"],
    name: "YA-LING O",
    headline: "一位擅長產品策略、UX/UI 設計與系統性思考的產品設計師。",
    body: "我的經驗橫跨後台管理介面、CMS 功能開發、B2B 產品，以及優化使用者上線流程與付款體驗。",
    resumeCta: "下載履歷",
  },
  workHeading: "作品",
  work: [
    {
      slug: "designing-admin-experience-for-better-enrolment-and-revenue-management",
      title: "Palette - 線上學習平台後台",
      name: "招生與營收管理",
      desc: "協助教育機構行銷、管理並銷售課程。",
      cta: "查看作品",
      cover:
        "https://cdn.prod.website-files.com/63e48f4ed598a369cd769311/67370fcb86b2e6ca5c5f1150_Designthinking_Final%20solution3.jpg",
    },
    {
      slug: "designing-a-block-based-feature-for-website-customisation",
      title: "Palette - 線上學習平台後台",
      name: "區塊功能與內容管理",
      desc: "協助網站客製化。",
      cta: "查看作品",
      cover:
        "https://cdn.prod.website-files.com/63e48f4ed598a369cd769311/68b8d8ea3538af5875e1bfc3_Block%20design_cover%20(6).jpg",
    },
    {
      slug: "designing-a-survey-experience-and-visualising-assessment-data",
      title: "360 評測工具",
      name: "評測體驗與報告",
      desc: "協助企業了解團隊的職能狀況。",
      cta: "查看作品",
      cover:
        "https://cdn.prod.website-files.com/63e48f4ed598a369cd769311/68b837fee833ab39f756004d_Survey%20tool_cover%20(5).jpg",
    },
  ],
  skillsHeading: "專長",
  skills: [
    {
      title: "使用者研究",
      desc: "質化與量化研究方法、可用性測試、利害關係人訪談",
    },
    {
      title: "UX/UI 設計",
      desc: "設計系統、響應式設計、線框圖、原型製作、無障礙設計標準，以及進階 Figma 應用能力",
    },
    {
      title: "敏捷協作",
      desc: "與產品經理、工程師緊密合作；具備前端知識；能交付可直接落地的設計成果",
    },
    {
      title: "策略性設計",
      desc: "SaaS / B2B 產品思維、發掘商業機會、UX 審查，以及跨部門決策協調",
    },
    {
      title: "工具",
      desc: "Figma、Jira、Webflow，以及用於原型設計的 Claude Code",
    },
  ],
  industriesHeading: "曾參與的產業經驗",
  industries: [
    {
      emoji: "📚",
      title: "課程銷售平台",
      tag: "（B2B / SaaS / 教育）",
      body: "Palette（後更名為 Course-hub）是一項協助教育機構行銷、管理並銷售課程的服務。我主導了 Palette 的後台重新設計，讓網站經營者能透過內容管理與區塊化設計功能，管理自己的白牌學習平台。",
      cta: "查看作品",
      slug: "designing-admin-experience-for-better-enrolment-and-revenue-management",
    },
    {
      emoji: "💬",
      title: "回饋收集平台",
      tag: "（B2B / SaaS / IT）",
      body: "Userback 是一款 SaaS 產品，透過小工具或問卷將回饋集中收集到單一後台，協助改善各種情境下的數位產品體驗。我優化了使用者的上線體驗，並提供了應用內教學。",
    },
    {
      emoji: "📦",
      title: "庫存管理平台",
      tag: "（B2B / SaaS / 電商）",
      body: "為一套線上庫存系統設計新功能，包含活動紀錄與財務帳務追蹤，並維持 UI 元件與設計語言的一致性。",
    },
    {
      emoji: "🏌️",
      title: "高爾夫教練媒合平台",
      tag: "（B2C / 運動）",
      body: "為高爾夫會員平台設計 Android 應用程式，重新規劃使用者旅程以提升教練媒合功能的通知體驗。",
    },
    {
      emoji: "✈️",
      title: "旅遊規劃平台",
      tag: "（B2C / 旅遊）",
      body: "為早期新創公司從概念發想到 MVP，設計一套旅遊規劃平台，讓使用者能在網站上編輯行程，並建立旅程尋找同行旅伴。",
    },
  ],
  experienceHeading: "經歷",
  experience: [
    {
      role: "產品設計師 - CURIO（Compass 360）",
      link: "https://curiogroup.com/",
      location: "遠端 | 2023 年 10 月 – 至今 | 專案制自由接案",
      bullets: [
        "Compass 360 協助企業了解團隊的職能狀況。我為主管設計了問卷平台，協助他們了解自身的治理能力。",
        "製作互動原型以傳達設計構想與使用者旅程，確保使用者需求、技術可行性與產品目標三者一致。",
        "管理利害關係人的期望，將需求轉化為直覺、有效率且視覺吸引人的介面。所有專案都順利推進，客戶對成果十分滿意。",
      ],
    },
    {
      role: "產品設計師 - Userback",
      link: "https://userback.io/",
      location: "澳洲墨爾本 | 2022 年 9 月 – 2023 年 1 月 | 全職",
      bullets: [
        "Userback 是一款 SaaS 產品，透過小工具或問卷將回饋集中收集到單一後台，協助改善各種情境下的數位產品體驗。我優化了使用者的上線體驗，並提供了應用內教學。",
        "改善後台的篩選功能以提升管理效率，並與跨部門團隊合作，確保新功能上線時與產品目標一致。",
        "透過重新設計註冊流程，將使用者留存率提升 25%。",
      ],
    },
    {
      role: "UX/UI 設計師 - CURIO（Palette）",
      link: "https://curiogroup.com/",
      location: "澳洲墨爾本 | 2020 年 3 月 – 2022 年 8 月 | 全職",
      bullets: [
        "Palette（後更名為 Course-hub）是一項協助教育機構行銷、管理並銷售課程的服務。我主導了 Palette 的後台重新設計，讓網站經營者能透過內容管理與區塊化設計功能，管理自己的白牌學習平台。",
        "執行 UX 審查、重整複雜的資訊架構，並建立一套可延展的設計系統。",
        "設計了優惠券管理、註冊流程、學員入口與結帳等功能。",
        "在 10 個月內為公司帶來 50% 的客戶成長。",
      ],
    },
    {
      role: "UX/UI 設計師 - VENTY",
      link: "",
      location: "台北，台灣 | 2017 年 7 月 – 2019 年 9 月 | 全職",
      bullets: [
        "為線上庫存系統設計新功能，包含活動紀錄與財務帳務追蹤。",
        "維持 UI 元件與設計語言的一致性。",
        "發起使用者訪談與共同腦力激盪，提升團隊的 UX 成熟度與利害關係人的共識。",
      ],
    },
    {
      role: "UX/UI 設計師 - NETEXBOOM",
      link: "",
      location: "台北，台灣 | 2016 年 11 月 – 2017 年 7 月 | 全職",
      bullets: [
        "為早期新創公司從概念發想到 MVP，設計一套旅遊規劃平台，讓使用者能在網站上編輯行程，並建立旅程尋找同行旅伴。",
        "製作線框圖並進行反覆的可用性測試以驗證設計。",
        "與工程團隊合作，並支援前端交接。",
      ],
    },
    {
      role: "UX/UI 設計師 - CODEGREEN",
      link: "",
      location: "台北，台灣 | 2014 年 11 月 – 2016 年 7 月 | 全職",
      bullets: [
        "為高爾夫會員平台設計 Android 應用程式。",
        "重新規劃使用者旅程，提升教練媒合平台的通知體驗。",
        "重新設計首頁，更清楚地傳達產品願景，進而提升網站流量。",
      ],
    },
  ],
  recommendationHeading: "推薦",
  recommendation: {
    quote:
      "Ya-ling 是一位才華洋溢、專業又全方位的產品設計師，也是非常愉快的合作對象。她兼具出色的視覺設計美感、扎實的前端技術理解，以及對人們如何使用數位產品與資訊的深度思考。她是我合作過數一數二優秀的設計師，能夠與 PM 緊密協作，反覆打磨複雜的低擬真流程，也能設計出精細的微互動與像素級精準的介面，並與工程師合作確保實作品質。我很享受與 Ya-ling 共事的過程，強力推薦她。",
    name: "Gin Atkins",
    meta: "Palette 總經理，2021 年 11 月 7 日 · 曾直接管理 Ya-ling",
    avatar:
      "https://cdn.prod.website-files.com/63e48f4ed598a369cd769311/6655cd0f57bd4caa0225f8fa_gin.jpeg",
  },
  contact: {
    heading: "聯絡我",
    body: "歡迎與我聯繫，聊聊我能如何幫上忙。",
    emailLabel: "電子郵件",
    email: "ooyaling@gmail.com",
    workLabel: "作品",
    linkedinLabel: "LinkedIn",
    linkedinUrl: "https://www.linkedin.com/in/ya-ling-o-2aa241125/",
    resumeLabel: "下載履歷",
  },
  otherWorksHeading: "其他作品",
  resumeUrl:
    "https://drive.google.com/file/d/1CtEN4xiBfaSUQyRqVOiNlknVW-8oGjV2/view?usp=sharing",
  profileImage: "/hero.png",
  languageSwitcher: {
    en: "EN",
    zhHant: "繁中",
  },
};

export default siteContent;
