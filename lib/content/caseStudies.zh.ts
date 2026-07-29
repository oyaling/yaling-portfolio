import type { CaseStudy } from "./caseStudies.en";

const IMG = "https://cdn.prod.website-files.com/63e48f4ed598a369cd769311";

const caseStudies: CaseStudy[] = [
  {
    slug: "designing-admin-experience-for-better-enrolment-and-revenue-management",
    cardTitle: "Palette - 線上學習平台後台",
    cardName: "招生與營收管理",
    cardDesc: "協助教育機構行銷、管理並銷售課程。",
    title: "設計更好的報名與營收管理後台體驗",
    subtitle: "協助教育機構行銷、管理並銷售課程。",
    cover: `${IMG}/67370fcb86b2e6ca5c5f1150_Designthinking_Final%20solution3.jpg`,
    meta: {
      role: "產品設計師",
      duration: "2020 年 3 月 – 12 月",
      team: "產品經理、2 位工程師",
      skills: [
        "UX 設計",
        "UI 設計",
        "資訊架構",
        "設計系統",
        "可用性測試",
        "端到端產品設計",
      ],
      teamAvatars: [
        `${IMG}/6655cd0f57bd4caa0225f8fa_gin.jpeg`,
        `${IMG}/6655cd0f53afb0a89a48ef3c_yaling.jpeg`,
        `${IMG}/6655cd0fdc0760515e3fc2eb_drew.jpeg`,
        `${IMG}/6655cd0f177e5e46999f77a4_dilasha.jpeg`,
        `${IMG}/6655cd10059721292ac9288e_david.jpeg`,
      ],
    },
    product:
      "Palette（後更名為 Course-hub）是一項協助教育機構行銷、管理並銷售課程的服務。我們協助客戶架設銷售課程的網站，涵蓋網站上的課程內容管理、金流方案、報名管理與行銷活動。",
    user: "我們的客戶是大學或培訓機構，需要一個符合自身品牌的白牌網站來銷售課程，並有效率地管理報名。",
    userStory:
      "身為管理員，我希望能從後台存取特定的報名資料，並聯絡特定學生以處理付款問題。",
    summary:
      "身為唯一的產品設計師，我花了兩個月的時間重新設計並形塑後台體驗的新方向。我與產品經理及工程師緊密合作，制定策略、簡化複雜的工作流程，並從零建立可延展的設計系統。最終，重新設計後的平台在 10 個月內為訂閱客戶帶來 50% 的成長。",
    problem: {
      items: [
        {
          text: "缺乏每期招生報名資料的直接檢視方式：使用者希望能直接在平台內查看招生表現與學生檔案，以簡化工作流程。",
          image: `${IMG}/68b84f0984ade7ab980156bb_Designthinking_Problem1%20(3).jpg`,
        },
        {
          text: "介面結構不清楚：頂端導覽不夠清晰，未來也難以容納更複雜的功能；所有欄位都被列在同一頁面上。",
          image: `${IMG}/68b84f09c46dd5493801c05b_Designthinking_Problem2%20(1).jpg`,
        },
      ],
      challenge: "我們該如何簡化報名檢視體驗，以提升效率？",
    },
    goal: {
      intro: "提升管理員的使用體驗，讓他們能有效率地完成日常任務。",
      items: [
        {
          title: "縮短尋找報名資料的時間",
          body: "透過改善資訊結構與直覺的檢視頁面，為使用者節省時間。",
        },
        {
          title: "縮短產品教育時間",
          body: "導入對使用者友善的設計模式，引導使用者並降低系統內的困惑。",
        },
        {
          title: "縮短新功能的實作時間",
          body: "運用設計系統協助工程師加快實作速度，節省開發時間。",
        },
        {
          title: "提升產品與市場的契合度",
          body: "回應小型機構的需求，避免產品視角過於狹隘，藉此擴大市場吸引力。",
        },
      ],
    },
    process: {
      heading: "設計流程",
      steps: [
        {
          title: "1. 使用者研究",
          body: "檢視既有的後台工作流程，並訪談客戶端的管理員，了解報名與營收相關任務在哪些環節卡關。",
          image: `${IMG}/68b8b3b713baffdbd3a69cef_Designthinking_Research3%20(4).jpg`,
        },
        {
          title: "2. 思考商業機會",
          body: "我們發現一個機會：讓這個平台不只是課程管理工具，更能成為一套分析解決方案。透過從銷售數據中萃取行銷洞察來支援行銷與活動決策，我們能協助客戶更有效地擴大課程銷售。",
          note: "機會點：從銷售數據中萃取有價值的行銷洞察，能符合客戶的期待。",
        },
        {
          title: "3. 共同排列功能優先順序",
          body: "與產品經理及工程師緊密合作，為精簡的第一版釋出排列功能優先順序。我們專注於既有功能的優化，同時考量未來擴充的可能性——這個做法確保我們能快速推進，同時為持續改進打下基礎。",
          image: `${IMG}/67c052ea346acb0341a50d0e_Designthinking_Research2.jpg`,
        },
        {
          title: "4. 重整資訊架構",
          body: "透過腦力激盪為功能分類，我們找出兩大使用者導覽平台的方式。側邊導覽：分為「管理、行銷、銷售、探索」四大類別，協助使用者快速將任務與平台功能連結起來。課程設定分頁：將內容重整為三個清楚的分頁，各自對應課程設定的不同面向，讓使用者能更快掌握並找到所需內容，不至於感到不知所措。",
          image: `${IMG}/681641891b07e336335e5774_Designthinking_Design%20decision1.jpg`,
        },
        {
          title: "5. 設計易學的操作模式",
          body: "「檢視」與「編輯」模式：讓使用者能清楚區分「閱讀資訊」與「編輯內容」。麵包屑與標籤：透過指示元件，幫助使用者掌握狀態並快速瀏覽標題列中的資訊。",
          image: `${IMG}/681611d3ee4143d5596d0109_Designthinking_Design%20decision2.jpg`,
        },
      ],
    },
    finalSolution: {
      items: [
        {
          title: "資訊架構 —— 課程設定分頁",
          body: "將相似的欄位歸類為三個分頁——招生中、內容管理、頁面設定，讓使用者能快速找到相關內容。",
          image: `${IMG}/681611d338f6bb5a301b9932_Designthinking_Final%20solution1.1.jpg`,
        },
        {
          title: "資訊架構 —— 報名資料頁",
          body: "設計了一個報名資料頁面，讓使用者無需下載 CSV 檔案，就能檢視報名與營收明細。",
          image: `${IMG}/6816f607cb723011384b38ba_Designthinking_Final%20solution1.3%20(2).jpg`,
        },
        {
          title: "直覺的互動模式",
          body: "模式一：側邊導覽未來能輕鬆擴充。模式二：清楚的「檢視」與「編輯」設計模式，避免混淆。",
          image: `${IMG}/681611d3e9080f73e7a30f9d_Designthinking_Final%20solution2.1.jpg`,
        },
        {
          title: "可延展的設計系統",
          body: "所有支援元件的頁面都維持視覺一致性，加快了開發速度。",
          video: `https://s3.amazonaws.com/webflow-prod-assets/63e48f4ed598a369cd769311/6818ab6de905afeb08f188b3_Design%20system.mp4`,
        },
        {
          title: "行銷官網",
          body: "與產品經理及行銷團隊合作，重新設計產品識別與官網，傳達產品願景與功能，帶動客戶成長。",
          image: `${IMG}/67c052e4c95a5560e2671d27_Designthinking_Final%20solution%204.1.jpg`,
        },
      ],
    },
    outcome: {
      video: `https://s3.amazonaws.com/webflow-prod-assets/63e48f4ed598a369cd769311/6658611024a5f9621327f73e_Palette_overview%202024.mov`,
      items: [
        {
          title: "使用者驗收測試 100% 正面回饋",
          body: "在正式推出新版本前，我們與所有既有客戶進行了使用者驗收測試（UAT）。重新設計的報名檢視頁面獲得 100% 正面回饋，證實它解決了存取報名資料時的關鍵可用性問題。",
        },
        {
          title: "降低產品教育成本",
          body: "透過定義清楚的角色、產品流程與使用情境，我們將原本客製化的客戶專案，轉化為一套可延展的產品——降低了上線說明會的需求，讓我們能透過部落格與公開路線圖來傳達功能。",
        },
        {
          title: "新功能實作速度更快",
          body: "我建立了模組化的設計模式與可重複使用的流程，成為未來開發的基礎，大幅縮短了功能擴充的設計與開發時間。",
        },
        {
          title: "10 個月內客戶成長 50%",
          body: "隨著全新行銷官網上線與更清晰的產品定位，Palette 在 10 個月內帶來 50% 的客戶成長。",
        },
      ],
    },
    flow: "1. 選擇一個招生期 → 2. 檢視報名資料與總覽 → 3. 返回課程 → 4. 檢視並編輯頁面內容 → 5. 檢視並編輯頁面設定",
  },
  {
    slug: "designing-a-block-based-feature-for-website-customisation",
    cardTitle: "Palette - 線上學習平台後台",
    cardName: "區塊功能與內容管理",
    cardDesc: "協助網站客製化。",
    title: "設計網站客製化的區塊化功能",
    subtitle: "協助網站客製化。",
    cover: `${IMG}/68b8d8ea3538af5875e1bfc3_Block%20design_cover%20(6).jpg`,
    meta: {
      role: "產品設計師",
      team: "產品經理、2 位工程師",
      skills: ["UX 設計", "UI 設計", "功能設計"],
      teamAvatars: [
        `${IMG}/6655cd0f53afb0a89a48ef3c_yaling.jpeg`,
        `${IMG}/673717a9ebead6da977a8fa2_1589259934613.jpeg`,
        `${IMG}/6737168eab8f5d37a6690543_1719522268590.jpeg`,
      ],
    },
    product:
      "Palette（後更名為 Course-hub）是一項協助教育機構行銷、管理並銷售課程的服務。我們協助客戶架設銷售課程的網站，涵蓋網站上的課程內容管理、金流方案、報名管理與行銷活動。",
    user: "我們的客戶是大學或培訓機構，需要一個符合自身品牌的白牌網站來銷售課程，並有效率地管理報名。",
    userStory:
      "身為管理員，我想在課程說明中多加一則學員推薦，並多加一位講師介紹。我能編輯文字，但我不知道怎麼編輯 HTML 來新增這些資訊。",
    summary:
      "我主導設計了一套可重複使用內容區塊的網站客製化功能，讓不熟悉技術的使用者也能輕鬆且有信心地編輯課程頁面。這項改善大幅提升了可用性與使用者滿意度。由於團隊當時規模仍小，有效運用資源在成長階段格外重要——這項新功能也在兩個月內，將新客戶白牌網站的建置時間縮短了 50%。",
    problem: {
      items: [
        {
          text: "許多客戶端的管理員想在課程頁面新增內容，卻擔心會破壞版面，或需要仰賴我們團隊協助處理小幅修改，這對客戶與我們的開發團隊都造成不便。",
          image: `${IMG}/68179cfc99749f33deeacf48_UI_Problem1.jpg`,
        },
      ],
      challenge: "我們該如何讓管理員有信心編輯版面，而不需要具備設計或程式技能？",
    },
    goal: {
      items: [
        {
          title: "降低客服請求量",
          body: "讓客戶端管理員能自行管理並更新內容，減少提交給客服的變更請求。",
        },
      ],
    },
    process: {
      heading: "設計流程",
      steps: [
        {
          title: "1. 使用者研究",
          body: "與客戶端管理員討論他們曾嘗試進行哪些編輯，以及在哪些環節卡住。",
          image: `${IMG}/68b856c9aefb1024a5324331_UI_Research2%20(2).jpg`,
        },
        {
          title: "2. 探索版面變化",
          body: "分析過去的客戶專案，找出常見的版面模式，再將常用的區塊轉化為可重複使用的元件。",
          image: `${IMG}/68179cfcd20594846991d946_UI_Design%20decision3.1.jpg`,
        },
        {
          title: "3. 依情境設計區塊",
          body: "一般頁面：這類區塊提供更廣泛、彈性的版面，以支援行銷頁與到達頁的需求。課程頁面：這類區塊沒有變化版本，目的是清楚呈現課程細節，例如文字、影片、手風琴選單與課程大綱。",
          image: `${IMG}/68179cfdba19dd766d9fd976_UI_Design%20decision4.1.jpg`,
        },
        {
          title: "4. 讓區塊數量保持精簡",
          body: "以範本為基礎的做法容易限制視覺多樣性，因此我在區塊設定中加入了「樣式控制選項」。例如 Hero 區塊提供輪播、圖片比例、文字對齊與色彩樣式等選項——在維持精簡區塊數量的同時，滿足多樣化的設計需求。",
          image: `${IMG}/68179cfd8e783498a09ab0c6_UI_Design%20decision4.1-1.jpg`,
        },
        {
          title: "5. 聚焦內容而非視覺",
          body: "使用者經常需要新增視覺樣式相同的內容。舉例來說，使用者想在現有講師介紹之後，再新增一則講師簡介作為更新——她不希望新增一個全新區塊，只想在同一個區塊底下新增一個項目，且不改變任何視覺樣式。因此在「作者與圖片」、「清單」與「手風琴」區塊中，「新增項目」這個操作至關重要。",
          image: `${IMG}/68179cfd7b7c3d8f5c79b1bf_UI_Design%20decision4.1-2.jpg`,
        },
        {
          title: "6. 確保對比度足夠",
          body: "我們也加入了手動色彩覆寫功能——例如圖片背景上的文字顏色。舉例來說，當使用者套用背景圖片時，可以手動調整文字顏色，確保對比度足夠，同時兼顧無障礙與美觀。",
          image: `${IMG}/68179cfcccc61f09884d4372_UI_Design%20decision5.jpg`,
        },
      ],
    },
    finalSolution: {
      intro:
        "使用者無需任何前端知識，就能在現有內容之下新增介紹並維持視覺一致性。使用者也能透過為不同用途設計的區塊（如 Hero、學員推薦、輪播與關於我們）編輯首頁。",
      items: [
        {
          title: "範例：在課程頁新增講師簡介",
          body: "1. 新增區塊 → 2.「新增項目」進行編輯 → 3. 儲存",
          video: `https://s3.amazonaws.com/webflow-prod-assets/63e48f4ed598a369cd769311/6736e129013796d6eb5dd6a3_Expand%20content-block%20design.mp4`,
        },
        {
          title: "範例：在首頁新增 Hero 區塊",
          body: "1. 點擊「新增區塊」→ 2. 將滑鼠移到圖示上預覽 → 3. 新增",
          video: `https://s3.amazonaws.com/webflow-prod-assets/63e48f4ed598a369cd769311/6736e118199d8d0b6b286828_Add%20block_block%20design.mp4`,
        },
      ],
    },
    outcome: {
      items: [
        {
          title: "內容相關請求僅下降 10%",
          body: "低於預期成效。許多使用者並不知道有這項新功能，凸顯出未來需要加強客戶教育與功能導入的支援。",
        },
      ],
    },
    flow: "新增講師簡介 → 1. 新增區塊 → 2.「新增項目」進行編輯 → 3. 儲存 · 新增 Hero 區塊 → 1. 點擊「新增區塊」→ 2. 移到圖示上預覽 → 3. 新增",
  },
  {
    slug: "designing-a-survey-experience-and-visualising-assessment-data",
    cardTitle: "360 評測工具",
    cardName: "評測體驗與報告",
    cardDesc: "協助企業了解團隊的職能狀況。",
    title: "設計問卷體驗並視覺化評測數據",
    subtitle: "協助企業了解團隊的職能狀況。",
    cover: `${IMG}/68b837fee833ab39f756004d_Survey%20tool_cover%20(5).jpg`,
    meta: {
      role: "產品設計師",
      team: "客戶專案",
      skills: ["原型製作", "UX 設計", "UI 設計", "資料視覺化"],
      teamAvatars: [
        `${IMG}/6655cd0f53afb0a89a48ef3c_yaling.jpeg`,
        `${IMG}/673717a9ebead6da977a8fa2_1589259934613.jpeg`,
      ],
    },
    product:
      "Compass 360 協助企業了解團隊的職能狀況，弭平策略與技能之間的落差。Compass 360 讓個人、主管與領導者能在同一個直覺、數據豐富的平台中評估能力、產生洞察，並將發展計畫對齊實際的學習路徑。",
    user: "在這個專案中，我們的客戶是伊迪斯科文大學（Edith Cowan University），與雪梨職業安全衛生中心合作，建置一套問卷平台，協助任何機構的主管了解自身的治理能力，並持續改進。",
    userStory:
      "身為一位主管，我想了解自己目前的治理能力程度，並取得相關資源來提升它。",
    summary:
      "我是這個專案唯一的設計師，負責提出解決方案，並根據可用性測試結果反覆迭代，最終準備完成的設計成果。其中的關鍵亮點是使用進度標頭，以及正向、非數字化的回饋設計，藉此鼓勵使用者完成問卷並分享結果。這個做法在 10 位參與者的使用者驗收測試（UAT）中，達成了 100% 的問卷完成率。我的貢獻主要聚焦於：製作互動原型以傳達設計構想與使用者旅程，確保使用者需求、技術可行性與產品目標三者一致；管理利害關係人的期望，將需求轉化為直覺、有效率且視覺吸引人的介面；以及支援行動裝置的使用體驗。",
    problem: {
      items: [
        {
          text: "我們的客戶推出了一套治理能力評估框架，用來評估主管的治理技能，但由於缺乏誘因，參與率一直偏低。",
        },
      ],
      challenge: "我們該如何設計一套具支持性的體驗，激勵主管完成評測，並對結果感到受鼓舞？",
    },
    goal: {
      items: [{ body: "達成至少 60% 的問卷完成率。" }],
    },
    process: {
      heading: "設計流程",
      steps: [
        {
          title: "1. 將需求轉化為使用者流程",
          body: "分析文件並釐清需求，為使用者流程與主要需求設計解決方案：長流程的導覽、支援性通知、篩選問題、到達頁與資料視覺化。",
        },
        {
          title: "2. 快速製作原型以取得回饋",
          body: "我建置了互動原型，用來蒐集回饋並與利害關係人一起驗證使用者流程，這有效協助管理了利害關係人的期望。",
          prototypeUrl:
            "https://www.figma.com/proto/1ameCoME3jxPts7UbLbpRR/Portfolio---Edith-Cowan-Uni-Directing-Safety?node-id=4205-5487&p=f&t=JXgDmQIB2GjxFSPG-1&scaling=scale-down-width&content-scaling=fixed&page-id=4201%3A5364&starting-point-node-id=4205%3A5487&show-proto-sidebar=1",
          prototypeLabel: "查看原型",
          gallery: [
            {
              src: `${IMG}/6816edd721679bcf16647c49_Process1.1.jpg`,
              label: "彈出視窗流程——測試彈出視窗如何提供額外說明並避免使用者出錯",
            },
            {
              src: `${IMG}/67effc52f5fd1444a73f877f_Process1.2.jpg`,
              label: "導覽清晰度——確保使用者在每個步驟都感到被引導",
            },
            {
              src: `${IMG}/67effc52be0e01f91fd73184_Process1.4.jpg`,
              label: "可重複使用元件——一致的元件系統，簡化原型與未來的開發交接",
            },
          ],
        },
        {
          title: "3. 支援行動裝置",
          body: "調整整個評測流程，使其在行動裝置上也能順暢使用，而不僅限於桌面版。",
          image: `${IMG}/67effc52801970682e792cd0_Process1.5.jpg`,
        },
        {
          title: "4. 可用性優化",
          body: "漸進式揭露：從單頁式問卷改為漸進式揭露，以提升專注度，並將傳統的單選按鈕調整以提升可用性。可掃描性：以可視的選項清單取代下拉選單，提升可掃描性。",
          gallery: [
            {
              src: `${IMG}/6816620c4a5d9978b3593c12_Process2.1.jpg`,
              label: "漸進式揭露",
            },
            {
              src: `${IMG}/681662292752d2ab8088fb65_Process2.2.jpg`,
              label: "可掃描性",
            },
          ],
        },
        {
          title: "5. 正向的資料視覺化",
          body: "避免顯示原始分數以降低評判感，改用百分比基準與同儕或機構比較，並聚焦於優勢與機會，而非「好與壞」的分數。",
          image: `${IMG}/6816ed826b64741741abf819_Process3.1.jpg`,
        },
      ],
    },
    finalSolution: {
      items: [
        {
          title: "到達頁",
          body: "介紹能力框架，並說明這套工具的運作方式。",
          image: `${IMG}/673c9e4cb19cffab5cf01130_Landingpage.jpg`,
        },
        {
          title: "主要評測",
          body: "提供簡單、有引導的自我評測體驗，並搭配一致的視覺提示與導覽模式。",
          image: `${IMG}/673c9e4c620a064255ead1b5_Survey.jpg`,
        },
        {
          title: "客製化報告",
          body: "產出強調使用者優勢並提供比較基準的報告——聚焦於激勵與清晰度，而非評判。",
          image: `${IMG}/673c9e4cc559e47725d4d429_Report.jpg`,
        },
      ],
    },
    outcome: {
      video: `https://s3.amazonaws.com/webflow-prod-assets/63e48f4ed598a369cd769311/673c9e823a227c9aeadc6d85_Surveytool.mp4`,
      items: [
        {
          title: "UAT 問卷完成率達 100%",
          body: "全部 10 位使用者驗收測試參與者都完整完成了整份評測。",
        },
      ],
    },
    learning: {
      intro: "在這個專案中面對設計上的分歧時，我學到了兩個心得：",
      body: "一、挖掘利害關係人回饋背後真正的需求。二、提供選項以支援更好的決策。在設計資料視覺化時，我被要求在能力框架的三個面向中特別突顯其中一項，這可能會讓圖表對使用者造成困惑。透過更深入的討論，我發現客戶將其中兩個面向（價值驅動與法規遵循驅動）視為基礎能力——也就是說，大多數主管在這兩項上的表現預期會優於第三項（策略驅動）。我準備了兩個方案，以視覺化的方式呈現這個潛在問題，同時也說明使用平均分數指標已足夠清楚地進行比較。",
      image: `${IMG}/6816ed83936df62525af7587_Process3.1-1.jpg`,
    },
    flow: "1. 勾選或取消選項 → 2. 進入下一步 → 3. 取得協助或離開 → 4. 送出 → 5. 檢視結果 → 6. 客製化報告 → 7. 取得報告",
  },
];

export default caseStudies;
