export interface CaseStudy {
  slug: string;
  cardTitle: string;
  title: string;
  subtitle: string;
  cover: string;
  meta: {
    role: string;
    duration?: string;
    team?: string;
    skills: string[];
    teamAvatars?: string[];
  };
  product: string;
  user: string;
  userStory: string;
  summary: string;
  problem: {
    items: { text: string; image?: string }[];
    challenge: string;
  };
  goal: { intro?: string; items: { title?: string; body: string }[] };
  process: {
    heading: string;
    steps: {
      title: string;
      body: string;
      note?: string;
      image?: string;
      gallery?: { src: string; label: string }[];
      prototypeUrl?: string;
      prototypeLabel?: string;
    }[];
  };
  finalSolution: {
    intro?: string;
    items: { title: string; body: string; image?: string; video?: string }[];
  };
  outcome: {
    image?: string;
    video?: string;
    items: { title: string; body: string }[];
  };
  learning?: { intro: string; body: string; image?: string };
  flow: string;
}

const IMG = "https://cdn.prod.website-files.com/63e48f4ed598a369cd769311";

const caseStudies: CaseStudy[] = [
  {
    slug: "designing-admin-experience-for-better-enrolment-and-revenue-management",
    cardTitle: "Palette - E Learning platform admin",
    title: "Designing admin experience for better enrolment and revenue management",
    subtitle: "Helps learning providers to market, manage and sell courses.",
    cover: `${IMG}/67370fcb86b2e6ca5c5f1150_Designthinking_Final%20solution3.jpg`,
    meta: {
      role: "Product designer",
      duration: "Mar - Dec 2020",
      team: "Product manager, 2 engineers",
      skills: [
        "UX design",
        "UI design",
        "Information Architecture",
        "Design System",
        "Usability Test",
        "End-to-End Product Design",
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
      "Palette (Renamed to Course-hub) is a service that helps learning providers market, manage, and sell courses. We helped clients set up their websites to sell courses, which included managing course content on their websites, payment solutions, enrollment management, and marketing campaigns.",
    user: "Our clients are universities or training organisations that need a white-label website aligned with their brand to sell their courses and efficiently manage enrolment.",
    userStory:
      "As an administrator, I want to access a certain enrolment from the admin and contact a specific student to deal with the payment issue.",
    summary:
      "As a solo product designer, I spent two months redesigning and shaping the new direction of the admin experience. I collaborated closely with product managers and engineers to define strategy, simplify complex workflows, and build a scalable design system from scratch. As a result, the redesigned platform contributed to a 50% growth in subscription clients over 10 months.",
    problem: {
      items: [
        {
          text: "Lack of direct view for enrolment data related to each intake: users want to access intake performance and student profiles directly within the platform to streamline their workflow.",
          image: `${IMG}/68b84f0984ade7ab980156bb_Designthinking_Problem1%20(3).jpg`,
        },
        {
          text: "Unclear interface structure: the top navigation is unclear, and it is not easy to fit complex features in the future. All the fields are listed on a single page.",
          image: `${IMG}/68b84f09c46dd5493801c05b_Designthinking_Problem2%20(1).jpg`,
        },
      ],
      challenge:
        "How might we streamline the enrolment checking experience to improve efficiency?",
    },
    goal: {
      intro: "Enhance the user experience for admins to efficiently complete their frequent tasks.",
      items: [
        {
          title: "Reduce Task Time for Finding Enrolments",
          body: "Implement an improved information structure and intuitive view pages to save users time.",
        },
        {
          title: "Reduce Product Education Time",
          body: "Introduce user-friendly patterns to guide users and minimise confusion within the system.",
        },
        {
          title: "Reduce Implementation Time for Feature Expansion",
          body: "Leverage a design system to help developers streamline implementation and save time.",
        },
        {
          title: "Increase Product-Market Fit",
          body: "Address the needs of small organisations to avoid a narrow product perspective and broaden market appeal.",
        },
      ],
    },
    process: {
      heading: "Design process",
      steps: [
        {
          title: "1. User research",
          body: "Reviewed existing admin workflows and interviewed client administrators to understand where enrolment and revenue tasks were breaking down.",
          image: `${IMG}/68b8b3b713baffdbd3a69cef_Designthinking_Research3%20(4).jpg`,
        },
        {
          title: "2. Considering business opportunities",
          body: "We saw an opportunity to position the platform as more than a course management tool, but also an analytics solution. By extracting marketing insights from sales data that support marketing and campaign decisions, we could help clients scale their course sales effectively.",
          note: "Opportunity: extracting valuable marketing insights from sales data could meet clients' expectations.",
        },
        {
          title: "3. Prioritising features collaboratively",
          body: "Working closely with the product managers and engineers, we prioritised features for a lean first release. We focused on existing feature optimisations and considered the potential expansion ability. This approach ensured we could move fast while setting a foundation for continuous improvement.",
          image: `${IMG}/67c052ea346acb0341a50d0e_Designthinking_Research2.jpg`,
        },
        {
          title: "4. Restructuring the information architecture",
          body: "Through brainstorming for feature categorisation, we landed on two areas for users to navigate the platform. Side navigation: grouped into four top-level categories — Manage, Market, Sell, and Explore — helping users quickly connect their tasks to platform capabilities. Offering (Product) tab: reorganised content into three clear tabs, each addressing a different aspect of course setup, so users could grasp and access what they need faster without feeling overwhelmed.",
          image: `${IMG}/681641891b07e336335e5774_Designthinking_Design%20decision1.jpg`,
        },
        {
          title: "5. Designing learnable patterns",
          body: '"View" vs. "Edit" modes: users can clearly distinguish between reading information and editing content. Breadcrumbs and tags: indicators help users stay informed and scan the information in the header.',
          image: `${IMG}/681611d3ee4143d5596d0109_Designthinking_Design%20decision2.jpg`,
        },
      ],
    },
    finalSolution: {
      items: [
        {
          title: "Information architecture — Offering (Product) tab",
          body: "Grouped similar fields into three tabs — Active Intakes, Listing Management, and Listing Settings. This structure allows users to quickly access relevant content.",
          image: `${IMG}/681611d338f6bb5a301b9932_Designthinking_Final%20solution1.1.jpg`,
        },
        {
          title: "Information architecture — Enrolment data",
          body: "Designed an enrolment data page where users can view enrolment and revenue details without downloading CSV files.",
          image: `${IMG}/6816f607cb723011384b38ba_Designthinking_Final%20solution1.3%20(2).jpg`,
        },
        {
          title: "Intuitive interaction patterns",
          body: 'Pattern 1: side navigation can easily expand in the future. Pattern 2: a clear "View" and "Edit" pattern design, avoiding confusion.',
          image: `${IMG}/681611d3e9080f73e7a30f9d_Designthinking_Final%20solution2.1.jpg`,
        },
        {
          title: "Scalable design system",
          body: "All pages supporting components maintain visual consistency, accelerating development.",
          video: `https://s3.amazonaws.com/webflow-prod-assets/63e48f4ed598a369cd769311/6818ab6de905afeb08f188b3_Design%20system.mp4`,
        },
        {
          title: "Marketing website",
          body: "Collaborated with the product managers and marketing supporters to redesign the product identity and website, communicating our product vision and features to increase the client's growth.",
          image: `${IMG}/67c052e4c95a5560e2671d27_Designthinking_Final%20solution%204.1.jpg`,
        },
      ],
    },
    outcome: {
      video: `https://s3.amazonaws.com/webflow-prod-assets/63e48f4ed598a369cd769311/6658611024a5f9621327f73e_Palette_overview%202024.mov`,
      items: [
        {
          title: "100% positive feedback from UAT testing",
          body: "Before launching the new version, we conducted user acceptance testing (UAT) with all existing clients. The redesigned enrolment view received 100% positive feedback, confirming it solved key usability issues around accessing enrolment data.",
        },
        {
          title: "Reduced product education effort",
          body: "By defining clear personas, product flows, and use cases, we transformed what began as a bespoke client project into a scalable product — reducing the need for onboarding meetings and allowing us to communicate features through blogs and a public roadmap.",
        },
        {
          title: "Faster implementation for new features",
          body: "I established modular design patterns and reusable flows that now serve as a foundation for future development, significantly reducing design and development time for expanding features.",
        },
        {
          title: "50% growth in customer adoption (10 months)",
          body: "With the launch of a new marketing website and clearer product positioning, Palette saw a 50% increase in customer growth within 10 months.",
        },
      ],
    },
    flow: "1. Select an intake → 2. View enrolment data and overview → 3. Back to course → 4. View and edit the listing content → 5. View and edit the listing setting",
  },
  {
    slug: "designing-a-block-based-feature-for-website-customisation",
    cardTitle: "Palette - E Learning platform admin",
    title: "Designing a Block-Based Feature for Website Customisation",
    subtitle: "Helps website customisation with CMS and block design features.",
    cover: `${IMG}/68b8d8ea3538af5875e1bfc3_Block%20design_cover%20(6).jpg`,
    meta: {
      role: "Product designer",
      team: "Product manager, 2 engineers",
      skills: ["UX design", "UI design", "Feature Design"],
      teamAvatars: [
        `${IMG}/6655cd0f53afb0a89a48ef3c_yaling.jpeg`,
        `${IMG}/673717a9ebead6da977a8fa2_1589259934613.jpeg`,
        `${IMG}/6737168eab8f5d37a6690543_1719522268590.jpeg`,
      ],
    },
    product:
      "Palette (Renamed to Course-hub) is a service that helps learning providers market, manage, and sell courses. We helped clients set up their websites to sell courses, which included managing course content on their websites, payment solutions, enrollment management, and marketing campaigns.",
    user: "Our clients are universities or training organisations that need a white-label website aligned with their brand to sell their courses and efficiently manage enrolment.",
    userStory:
      "As an administrator, I want to add one more testimonial and add one more lecturer to the course description. I can edit the text, but I don't know how to edit HTML to add more information.",
    summary:
      "I led the design of a website customisation feature using reusable content blocks, empowering non-technical users to edit course pages easily and confidently. This improvement significantly enhanced usability and user satisfaction. As our team was still small, efficiently managing resources was crucial during our growth stage — this new feature also helped reduce the setup time for white-label websites for new clients by 50% within two months.",
    problem: {
      items: [
        {
          text: "Many clients' administrators wanted to add content on course pages, but they were afraid of breaking the layout or needed to rely on our team for small changes. This created inconvenience for both our clients and our development team.",
          image: `${IMG}/68179cfc99749f33deeacf48_UI_Problem1.jpg`,
        },
      ],
      challenge:
        "How can we give administrators confidence to edit layouts without needing design or coding skills?",
    },
    goal: {
      items: [
        {
          title: "Reduce customer support requests",
          body: "Empowered client administrators to independently manage and update content, reducing change requests to customer support.",
        },
      ],
    },
    process: {
      heading: "Design process",
      steps: [
        {
          title: "1. User research",
          body: "Talked with client administrators about the kinds of edits they attempted and where they got stuck.",
          image: `${IMG}/68b856c9aefb1024a5324331_UI_Research2%20(2).jpg`,
        },
        {
          title: "2. Exploring layout variations",
          body: "Analysed past client projects to identify common layout patterns, then transformed frequently used sections into blocks.",
          image: `${IMG}/68179cfcd20594846991d946_UI_Design%20decision3.1.jpg`,
        },
        {
          title: "3. Designing blocks by scenario",
          body: "General pages: blocks in this category include a broader range of flexible layouts to support marketing and landing pages as needed. Course pages: blocks in this category don't have variations — the purpose is to present course details clearly, such as text, video, accordion, and program.",
          image: `${IMG}/68179cfdba19dd766d9fd976_UI_Design%20decision4.1.jpg`,
        },
        {
          title: "4. Keeping the block number lean",
          body: 'Template-based approaches can limit visual diversity, so I introduced a "style control option" in the block setting. For example, the Hero block offers options like carousel, image ratio, text alignment, and colour style — this ensured diverse design needs while maintaining a lean block number.',
          image: `${IMG}/68179cfd8e783498a09ab0c6_UI_Design%20decision4.1-1.jpg`,
        },
        {
          title: "5. Focusing on content more than visual",
          body: 'Users frequently need to add content with the same visual style. For example, a user wants to add a new teacher bio after the existing one as an update — she doesn\'t want a new block, just a new item under the same block without any visual changes. The "add item" action under the Author-and-image, List, and Accordion blocks is essential.',
          image: `${IMG}/68179cfd7b7c3d8f5c79b1bf_UI_Design%20decision4.1-2.jpg`,
        },
        {
          title: "6. Ensuring proper contrast",
          body: "We also added manual colour overrides — such as text colour on image backgrounds. For example, when a user applies a background image, they can manually adjust the text colour to ensure proper contrast, improving both accessibility and aesthetics.",
          image: `${IMG}/68179cfcccc61f09884d4372_UI_Design%20decision5.jpg`,
        },
      ],
    },
    finalSolution: {
      intro:
        "Users can add new introductions underneath the existing one and maintain visual consistency without any front-end knowledge. Users can also edit the homepage with blocks designed for different purposes, such as Hero, Testimonial, Carousel, and About.",
      items: [
        {
          title: "Example: adding a teacher bio to the course page",
          body: '1. Add a block → 2. Click "add item" to edit → 3. Save',
          video: `https://s3.amazonaws.com/webflow-prod-assets/63e48f4ed598a369cd769311/6736e129013796d6eb5dd6a3_Expand%20content-block%20design.mp4`,
        },
        {
          title: "Example: adding a hero section to the homepage",
          body: '1. Click "add block" → 2. Hover the icon to see the preview → 3. Add',
          video: `https://s3.amazonaws.com/webflow-prod-assets/63e48f4ed598a369cd769311/6736e118199d8d0b6b286828_Add%20block_block%20design.mp4`,
        },
      ],
    },
    outcome: {
      items: [
        {
          title: "Content-related requests dropped by only 10%",
          body: "This fell short of expectations. Many users were unaware of the new feature, highlighting the need for better client education and feature adoption support.",
        },
      ],
    },
    flow: 'Adding a teacher bio → 1. Add a block → 2. Click "add item" to edit → 3. Save · Adding a hero section → 1. Click "add block" → 2. Hover the icon to preview → 3. Add',
  },
  {
    slug: "designing-a-survey-experience-and-visualising-assessment-data",
    cardTitle: "Assessment Tool",
    title: "Designing a Survey Experience and Visualising Assessment Data",
    subtitle: "Helps organisations understand their workforce capabilities.",
    cover: `${IMG}/68b837fee833ab39f756004d_Survey%20tool_cover%20(5).jpg`,
    meta: {
      role: "Product designer",
      team: "Client project",
      skills: ["Prototype", "UX Design", "UI Design", "Data Visualisation"],
      teamAvatars: [
        `${IMG}/6655cd0f53afb0a89a48ef3c_yaling.jpeg`,
        `${IMG}/673717a9ebead6da977a8fa2_1589259934613.jpeg`,
      ],
    },
    product:
      "Compass 360 helps organisations understand their workforce capabilities and close the gap between strategy and skills. Compass 360 enables individuals, managers, and leaders to assess capability, generate insights, and align development plans to real learning pathways — all in one intuitive, data-rich platform.",
    user: "In this project, our client is Edith Cowan University, in partnership with the Sydney Centre for Work Health and Safety, building a survey platform for any organisation's managers to understand their governance ability and keep improving it.",
    userStory:
      "As a manager, I want to understand my current level of governance ability and get resources to improve it.",
    summary:
      "I was the solo designer on this project, responsible for initiating the solution and driving iterations based on usability testing before preparing the final assets. The key highlight was using a progress header and positive, non-numeric feedback design to encourage users to complete the survey and share their results. This approach achieved a 100% survey completion rate during UAT (User Acceptance Testing) with 10 participants. My contributions focused on: creating interactive prototypes to communicate design ideas and user journeys, ensuring alignment between user needs, technical feasibility, and product goals; managing stakeholder expectations and translating requirements into intuitive, efficient, and visually engaging interfaces; and supporting mobile devices.",
    problem: {
      items: [
        {
          text: "Our client introduced a capability framework to assess governance skills among managers, but participation remained low due to a lack of motivation.",
        },
      ],
      challenge:
        "How might we design a supportive experience that motivates managers to complete the assessment and feel encouraged by the results?",
    },
    goal: {
      items: [
        { body: "Achieve at least a 60% survey completion rate." },
      ],
    },
    process: {
      heading: "Design process",
      steps: [
        {
          title: "1. Turning the requirements into a user flow",
          body: "Analysed the documents and clarified the requirements for designing the user flow and solutions for the main requirements: navigation for a long process, supporting notifications, screening questions, a landing page, and data visualisation.",
        },
        {
          title: "2. Rapid prototyping for feedback",
          body: "I built interactive prototypes to gather feedback and validate user flows with stakeholders, which helped manage stakeholder expectations efficiently.",
          prototypeUrl:
            "https://www.figma.com/proto/1ameCoME3jxPts7UbLbpRR/Portfolio---Edith-Cowan-Uni-Directing-Safety?node-id=4205-5487&p=f&t=JXgDmQIB2GjxFSPG-1&scaling=scale-down-width&content-scaling=fixed&page-id=4201%3A5364&starting-point-node-id=4205%3A5487&show-proto-sidebar=1",
          prototypeLabel: "View prototype",
          gallery: [
            {
              src: `${IMG}/6816edd721679bcf16647c49_Process1.1.jpg`,
              label:
                "Modal flows — tested how modals could support additional explanations and prevent user errors",
            },
            {
              src: `${IMG}/67effc52f5fd1444a73f877f_Process1.2.jpg`,
              label: "Navigation clarity — ensured users felt guided through each step",
            },
            {
              src: `${IMG}/67effc52be0e01f91fd73184_Process1.4.jpg`,
              label:
                "Reusable components — a consistent system that simplified the prototype and future handoff",
            },
          ],
        },
        {
          title: "3. Supporting mobile devices",
          body: "Adapted the full assessment flow so it worked comfortably on mobile, not just desktop.",
          image: `${IMG}/67effc52801970682e792cd0_Process1.5.jpg`,
        },
        {
          title: "4. Usability improvements",
          body: "Progressive disclosure: shifted from a one-page survey to progressive disclosure for better focus, and adapted traditional radio buttons to increase usability. Scannability: replaced dropdowns with visible option lists to improve scannability.",
          gallery: [
            {
              src: `${IMG}/6816620c4a5d9978b3593c12_Process2.1.jpg`,
              label: "Progressive disclosure",
            },
            {
              src: `${IMG}/681662292752d2ab8088fb65_Process2.2.jpg`,
              label: "Scannability",
            },
          ],
        },
        {
          title: "5. Positive data visualisation",
          body: "Avoided showing raw scores to reduce judgement, used percentage-based benchmarks for comparison with peers or organisations, and focused on strengths and opportunities instead of \"good vs. bad\" scores.",
          image: `${IMG}/6816ed826b64741741abf819_Process3.1.jpg`,
        },
      ],
    },
    finalSolution: {
      items: [
        {
          title: "Landing page",
          body: "Introduced the capability framework and explained how the tool works.",
          image: `${IMG}/673c9e4cb19cffab5cf01130_Landingpage.jpg`,
        },
        {
          title: "Main assessment",
          body: "Provided a simple, guided self-assessment experience with consistent visual cues and navigation patterns.",
          image: `${IMG}/673c9e4c620a064255ead1b5_Survey.jpg`,
        },
        {
          title: "Customised reporting",
          body: "Generated reports that highlighted user strengths and provided benchmarks for comparison — focusing on motivation and clarity over judgement.",
          image: `${IMG}/673c9e4cc559e47725d4d429_Report.jpg`,
        },
      ],
    },
    outcome: {
      video: `https://s3.amazonaws.com/webflow-prod-assets/63e48f4ed598a369cd769311/673c9e823a227c9aeadc6d85_Surveytool.mp4`,
      items: [
        {
          title: "100% survey completion rate in the UAT",
          body: "All 10 UAT participants completed the assessment end to end.",
        },
      ],
    },
    learning: {
      intro:
        "Two takeaways I learned through this project when encountering design conflicts:",
      body: '1. Uncover the real needs behind stakeholder feedback. 2. Provide options to support better decision-making. While designing the data visualisation, I was asked to highlight one of the three areas in the capability framework, which might have resulted in a confusing chart for users. Through deeper conversations, I discovered the client viewed two areas as a foundational capability (value-driven and compliance-driven) — meaning most managers were expected to perform better in them than in the third (strategy-driven). I prepared two solutions to visually show the potential problem, and also explained that using average score indicators was clear enough for comparison.',
      image: `${IMG}/6816ed83936df62525af7587_Process3.1-1.jpg`,
    },
    flow: "1. Select and unselect an option → 2. Go next → 3. Get help and exit → 4. Submit → 5. Check the result → 6. Customise report → 7. Get report",
  },
];

export default caseStudies;
