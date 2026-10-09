/* =========================================================
   Nội dung bổ sung cho bản 2 (phong cách Polo).
   Thông tin cá nhân, dự án, bài viết dùng chung ../assets/js/content.js
   ========================================================= */
(() => {
  const L = (vi, en, zh) => ({ vi, en, zh });

  Object.assign(window.I18N, {
    "p.hero.chip": L("UI/UX Designer · Mobile & Hệ thống", "UI/UX Designer · Mobile & Systems", "UI/UX 设计师 · 移动端与系统"),
    "p.hero.lead": L(
      "Mình thiết kế app mobile IAA, IAP, Hybrid trên iOS & Android và các hệ thống dashboard, quản lý — đẹp, dễ dùng và tính toán cho doanh thu.",
      "I design IAA, IAP & Hybrid mobile apps on iOS & Android, plus dashboards and management systems — beautiful, usable and built for revenue.",
      "我为 iOS 与 Android 设计 IAA、IAP 与混合变现应用，以及数据看板和管理系统——美观、易用，并为收益而设计。"
    ),
    "p.cta.projects": L("Xem dự án", "See all projects", "查看全部项目"),
    "p.cta.contact": L("Liên hệ ngay", "Contact now", "立即联系"),

    "p.about.chip": L("Designer chuyên nghiệp", "Expert designer", "专业设计师"),
    "p.about.title": L("Mai Trang, designer của bạn", "Mai Trang, your designer", "武梅妆，你的设计师"),
    "p.about.sub": L("Giới thiệu ngắn về mình và những gì mình đã làm.", "A brief introduction to me and my experience.", "关于我和我经历的简短介绍。"),
    "p.about.hello": L("Xin chào, mình là Mai Trang", "Hello, I'm Mai Trang", "你好，我是武梅妆"),
    "p.about.role": L("UI/UX Designer · 3 năm kinh nghiệm · Mobile & Web", "UI/UX Designer · 3 years · Mobile & Web", "UI/UX 设计师 · 3 年经验 · 移动端与 Web"),
    "p.about.connect": L("Kết nối với mình", "Connect with me", "与我联系"),

    "p.process.chip": L("Cách mình làm việc", "How it works", "工作方式"),
    "p.process.title": L("Quy trình là tất cả", "Process is everything", "流程决定一切"),
    "p.process.sub": L("Quy trình gọn gàng, rõ ràng — là thứ tạo ra kết quả.", "A simple, clear process is what gets results.", "简洁清晰的流程，才能带来结果。"),
    "p.process.step": L("Bước", "Step", "步骤"),
    "p.process.with": L("Mình đồng hành cùng bạn ở mọi bước", "I'm with you at every step", "每一步我都与你同行"),

    "p.services.chip": L("Dịch vụ thiết kế", "Design services", "设计服务"),
    "p.services.title": L("Mình có thể giúp gì", "What I can help with", "我能提供的帮助"),
    "p.services.sub": L("Từ ý tưởng đến màn hình bàn giao — cho cả mobile và hệ thống web.", "From idea to handoff-ready screens — for both mobile and web systems.", "从想法到可交付的界面——覆盖移动端与 Web 系统。"),

    "p.work.chip": L("Dự án gần đây", "Recent projects", "近期项目"),
    "p.work.title": L("Thiết kế gần đây", "Recent designs", "近期设计"),
    "p.work.sub": L("Mỗi dự án gồm cả phần UX và UI — bấm để xem case study.", "Each project covers both UX and UI — open it for the case study.", "每个项目都包含 UX 与 UI——点击查看案例。"),
    "p.work.soon": L("Đang cập nhật", "Coming soon", "即将更新"),

    "p.why.chip": L("Vì sao chọn mình", "Why choose me", "为什么选择我"),
    "p.why.title": L("Một đối tác thiết kế hiểu cả sản phẩm", "A design partner who understands the product", "一个懂产品的设计伙伴"),
    "p.why.me": L("Làm việc với mình", "Working with me", "与我合作"),
    "p.why.other": L("Cách làm thường gặp", "The usual approach", "常见做法"),

    "p.stats.chip": L("Con số", "In numbers", "数据"),
    "p.stats.title": L("Ba năm, nhiều sản phẩm thật", "Three years, many real products", "三年，许多真实产品"),

    "p.writing.chip": L("Bài viết", "Writing", "文章"),
    "p.writing.title": L("Ghi chép & góc nhìn", "Notes & perspectives", "笔记与观点"),

    "p.faq.chip": L("Câu hỏi thường gặp", "FAQ", "常见问题"),
    "p.faq.title": L("Hỏi & đáp", "Questions, answers", "问与答"),
    "p.faq.sub": L("Những điều mọi người hay hỏi trước khi làm việc cùng mình.", "Quick answers to what people usually ask before we work together.", "合作前大家常问的问题。"),

    "p.cta.title": L("Cùng biến ý tưởng thành sản phẩm?", "Let's turn your idea into a product?", "一起把想法变成产品？"),
    "p.cta.sub": L("Gửi cho mình vài dòng về dự án — mình sẽ phản hồi sớm nhất có thể.", "Send me a few lines about your project — I'll get back to you soon.", "简单介绍一下你的项目——我会尽快回复。"),
    "p.version": L("Bản 1", "Version 1", "版本 1"),
  });

  window.POLO = {
    services: [
      {
        icon: "phone",
        t: L("Thiết kế app mobile", "Mobile app design", "移动应用设计"),
        d: L("UI/UX cho iOS & Android: onboarding, luồng chính, trạng thái biên, paywall — tối ưu cho IAA, IAP và Hybrid.", "UI/UX for iOS & Android: onboarding, core flows, edge states, paywalls — optimised for IAA, IAP and Hybrid.", "iOS 与 Android 的 UI/UX：引导、核心流程、边缘状态、付费墙——针对 IAA、IAP 与混合变现优化。"),
      },
      {
        icon: "chart",
        t: L("Dashboard & hệ thống", "Dashboards & systems", "看板与系统"),
        d: L("Hệ thống quản lý, dashboard phân tích và nền tảng cho cơ quan nhà nước — rõ ràng, nhiều dữ liệu, dễ tiếp cận.", "Management systems, analytics dashboards and public-sector platforms — clear, data-dense and accessible.", "管理系统、数据分析看板与政府平台——清晰、高信息密度、无障碍。"),
      },
      {
        icon: "layers",
        t: L("Design system", "Design systems", "设计系统"),
        d: L("Thư viện component, token màu & chữ, quy tắc đặt tên — giúp team thiết kế và dev đi cùng một ngôn ngữ.", "Component libraries, colour & type tokens, naming rules — so design and dev speak one language.", "组件库、色彩与字体令牌、命名规范——让设计与开发说同一种语言。"),
      },
      {
        icon: "spark",
        t: L("Key visual & store asset", "Key visuals & store assets", "主视觉与商店素材"),
        d: L("Minh hoạ onboarding, ảnh store, banner tính năng — kết hợp AI và tinh chỉnh thủ công cho đồng bộ.", "Onboarding illustrations, store screenshots, feature banners — AI-assisted and hand-refined for consistency.", "引导插画、商店截图、功能横幅——AI 辅助并手工精修，保持统一。"),
      },
    ],
    marqueeA: ["Onboarding", "Paywall", "Rewarded ads", "Native ads", "User flow", "Wireframe", "Prototype", "Edge states"],
    marqueeB: ["Dashboard", "Data table", "Design system", "Key visual", "Store assets", "Handoff", "Figma", "Accessibility"],
    why: [
      {
        me: L("Hiểu mô hình kiếm tiền", "Understands monetisation", "理解变现模式"),
        meD: L("Đặt quảng cáo và paywall đúng lúc, không phá trải nghiệm.", "Places ads and paywalls at the right moment without breaking UX.", "在恰当时机放置广告与付费墙，不破坏体验。"),
        other: L("Quảng cáo đặt tuỳ tiện", "Ads placed anywhere", "广告随意放置"),
        otherD: L("Bấm nhầm nhiều, đánh giá thấp, eCPM giảm.", "Mis-taps, low ratings and falling eCPM.", "误触多、评分低、eCPM 下降。"),
      },
      {
        me: L("Thiết kế đủ trạng thái biên", "Designs every edge state", "设计所有边缘状态"),
        meD: L("Trống, đang tải, lỗi, mất mạng, thiếu quyền — đều có màn riêng.", "Empty, loading, error, offline, missing permission — each has a screen.", "空、加载、错误、断网、缺权限——每种都有界面。"),
        other: L("Chỉ có happy path", "Happy path only", "只有理想路径"),
        otherD: L("Dev tự đoán, mỗi lỗi một kiểu.", "Devs guess, every error looks different.", "开发自行猜测，错误各不相同。"),
      },
      {
        me: L("Bàn giao có ghi chú", "Annotated handoff", "带说明的交付"),
        meD: L("Hành vi, logic hiển thị, thời gian delay ghi ngay trên Figma.", "Behaviour, display logic and timing noted right in Figma.", "交互、显示逻辑与时序直接标注在 Figma 中。"),
        other: L("File thiếu ngữ cảnh", "Files without context", "缺少上下文的文件"),
        otherD: L("Họp đi họp lại, build sai so với thiết kế.", "Endless meetings, builds that drift from design.", "反复开会，实现与设计偏离。"),
      },
      {
        me: L("Cả mobile và hệ thống", "Mobile and systems", "移动端与系统兼顾"),
        meD: L("Kinh nghiệm từ app giải trí đến dashboard nhà nước.", "Experience from entertainment apps to government dashboards.", "从娱乐应用到政府看板都有经验。"),
        other: L("Chỉ quen một mảng", "One-track experience", "只熟悉一个领域"),
        otherD: L("Khó xử lý sản phẩm có cả app và trang quản trị.", "Struggles when a product has both an app and an admin panel.", "难以处理同时包含应用与后台的产品。"),
      },
    ],
    stats: [
      { n: 3, s: "+", l: L("năm kinh nghiệm", "years of experience", "年经验") },
      { n: 7, s: "+", l: L("app mobile đã thiết kế", "mobile apps designed", "款移动应用") },
      { n: 500, s: "+", l: L("màn hình & trạng thái", "screens & states", "个界面与状态") },
      { n: 3, s: "", l: L("mô hình: IAA · IAP · Hybrid", "models: IAA · IAP · Hybrid", "种模式：IAA · IAP · 混合") },
    ],
    faq: [
      {
        q: L("Bạn nhận loại dự án nào?", "What kind of projects do you take on?", "你接哪些类型的项目？"),
        a: L("Chủ yếu là app mobile (iOS & Android) theo mô hình IAA, IAP hoặc Hybrid, cùng dashboard, hệ thống quản lý và nền tảng cho cơ quan nhà nước.", "Mainly mobile apps (iOS & Android) under IAA, IAP or Hybrid models, plus dashboards, management systems and public-sector platforms.", "主要是 IAA、IAP 或混合变现模式的移动应用（iOS 与 Android），以及数据看板、管理系统和政府平台。"),
      },
      {
        q: L("Quy trình làm việc thế nào?", "What does your process look like?", "你的工作流程是怎样的？"),
        a: L("Hiểu bài toán → lên user flow (kể cả nhánh lỗi) → thiết kế UI & prototype → bàn giao có ghi chú → đo lường sau phát hành và cải thiện.", "Understand the problem → map user flows (including error branches) → design UI & prototype → annotated handoff → measure after launch and iterate.", "理解问题 → 梳理用户流程（含错误分支）→ 设计 UI 与原型 → 带说明交付 → 上线后衡量并迭代。"),
      },
      {
        q: L("Bạn bàn giao những gì?", "What do you deliver?", "你会交付什么？"),
        a: L("File Figma có tổ chức, component, toàn bộ trạng thái màn hình, thẻ ghi chú hành vi cho dev, và khi cần là key visual, ảnh store.", "An organised Figma file, components, every screen state, behaviour notes for developers, and key visuals or store assets when needed.", "结构清晰的 Figma 文件、组件、所有界面状态、给开发的交互说明，必要时还有主视觉与商店素材。"),
      },
      {
        q: L("Một dự án mất bao lâu?", "How long does a project take?", "一个项目需要多久？"),
        a: L("Tuỳ phạm vi. Mình sẽ ước lượng cụ thể sau khi hiểu số màn hình, luồng chính và mức độ hoàn thiện bạn cần.", "It depends on scope. I'll give a concrete estimate once I understand the screens, core flows and level of polish you need.", "取决于范围。了解界面数量、核心流程和所需完成度后，我会给出具体估算。"),
      },
      {
        q: L("Làm sao để liên hệ?", "How do I get in touch?", "如何联系你？"),
        a: L("Gửi email cho mình kèm vài dòng mô tả dự án — mục tiêu, nền tảng và thời gian mong muốn.", "Email me with a short description of your project — goals, platform and desired timeline.", "发邮件给我，简单介绍你的项目——目标、平台和期望时间。"),
      },
    ],
  };
})();
