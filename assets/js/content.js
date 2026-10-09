/* =========================================================
   CONTENT — Chang.cee portfolio
   Sửa thông tin cá nhân, link mạng xã hội, dự án và bài viết tại đây.
   Mỗi đoạn chữ có 3 ngôn ngữ: vi / en / zh
   ========================================================= */

const L = (vi, en, zh) => ({ vi, en, zh });

window.SITE = {
  name: "Vũ Thị Mai Trang",
  nameShort: "Mai Trang",
  nickname: "Chang.cee",
  birthday: "18.09.2002",
  email: "maitrang180902@gmail.com",
  // 👉 Dán link vào đây khi có. Để trống thì nút sẽ hiển thị "Sắp có".
  behance: "",
  facebook: "",
  // 👉 Thêm ảnh chân dung: chép ảnh vuông vào assets/img/avatar.jpg rồi đổi dòng dưới thành "assets/img/avatar.jpg".
  //    Để trống thì trang hiển thị monogram.
  avatar: "",
  years: 3,
};

/* ---------- UI strings ---------- */
window.I18N = {
  "nav.work": L("Dự án", "Work", "作品"),
  "nav.about": L("Giới thiệu", "About", "关于"),
  "nav.process": L("Quy trình", "Process", "流程"),
  "nav.writing": L("Bài viết", "Writing", "文章"),
  "nav.contact": L("Liên hệ", "Contact", "联系"),
  "nav.home": L("Trang chủ", "Home", "首页"),
  "theme.toggle": L("Đổi giao diện sáng/tối", "Toggle light/dark", "切换明暗模式"),

  /* nhãn section kiểu "work." */
  "label.work": L("dự án.", "work.", "作品。"),
  "label.beyond": L("hệ thống.", "systems.", "系统。"),
  "label.about": L("giới thiệu.", "about.", "关于。"),
  "label.journey": L("hành trình.", "journey.", "经历。"),
  "label.process": L("quy trình.", "process.", "流程。"),
  "label.writing": L("bài viết.", "writing.", "文章。"),
  "label.ux": L("ux.", "ux.", "ux。"),
  "label.ui": L("ui.", "ui.", "ui。"),
  "label.screens": L("màn hình.", "screens.", "界面。"),
  "hero.intro": L(
    "Xin chào, mình là UI/UX designer với 3 năm kinh nghiệm — thiết kế app mobile IAA, IAP, Hybrid và cả dashboard, hệ thống quản lý. <em>Cùng làm nhé!</em>",
    "Hello, I'm a UI/UX designer with 3 years of experience — crafting IAA, IAP & Hybrid mobile apps, dashboards and management systems. <em>Let's create!</em>",
    "你好，我是一名拥有 3 年经验的 UI/UX 设计师——设计 IAA、IAP 与混合变现移动应用，以及数据看板和管理系统。<em>一起创作吧！</em>"
  ),
  "about.big": L(
    "Mình thiết kế những sản phẩm nơi trải nghiệm tốt và mục tiêu kinh doanh cùng tồn tại — từ app mobile đại chúng đến hệ thống quản lý nhiều nghiệp vụ.",
    "I design products where great experience and business goals live together — from consumer mobile apps to process-heavy management systems.",
    "我设计让优秀体验与商业目标共存的产品——从大众移动应用到业务复杂的管理系统。"
  ),
  "contact.big": L(
    "Bạn tò mò chúng ta có thể cùng tạo ra điều gì? Hãy biến ý tưởng thành sản phẩm thật nhé!",
    "Curious about what we can create together? Let's bring something great to life!",
    "好奇我们能一起创造什么吗？让我们把想法变成真正的产品！"
  ),
  "contact.cta": L("Liên hệ ngay", "Get in touch", "联系我"),
  "footer.rights": L("Bảo lưu mọi quyền", "All rights reserved", "版权所有"),
  "version2": L("Xem bản 2", "Version 2", "版本 2"),
  "work.more": L("Xem chi tiết", "View", "查看"),

  "hero.badge": L("Đang nhận dự án mới", "Available for new projects", "可接新项目"),
  "hero.role": L("UI/UX Designer", "UI/UX Designer", "UI/UX 设计师"),
  "hero.lead": L(
    "Mình thiết kế sản phẩm số có thể <em>vận hành và kiếm tiền</em> — từ app mobile IAA, IAP, Hybrid trên iOS & Android đến dashboard, hệ thống quản lý và dự án nhà nước.",
    "I design digital products that <em>work and earn</em> — from IAA, IAP and Hybrid mobile apps on iOS & Android to dashboards, management systems and public-sector platforms.",
    "我设计<em>好用又能盈利</em>的数字产品——从 iOS 与 Android 上的 IAA、IAP、混合变现应用，到数据看板、管理系统与政府项目。"
  ),
  "hero.cta.work": L("Xem dự án", "See my work", "查看作品"),
  "hero.cta.contact": L("Liên hệ ngay", "Get in touch", "联系我"),
  "hero.scroll": L("Cuộn để khám phá", "Scroll to explore", "向下滚动"),
  "stat.years": L("năm kinh nghiệm", "years of experience", "年经验"),
  "stat.apps": L("app mobile đã thiết kế", "mobile apps designed", "款移动应用"),
  "stat.screens": L("màn hình & trạng thái", "screens & states", "个界面与状态"),
  "stat.models": L("mô hình kiếm tiền", "monetisation models", "种变现模式"),

  "work.eyebrow": L("Dự án chọn lọc", "Selected work", "精选作品"),
  "work.title": L("Thiết kế cho <em>người dùng</em>,<br/>tính toán cho <em>doanh thu</em>.", "Designed for <em>people</em>,<br/>built for <em>revenue</em>.", "为<em>用户</em>而设计，<br/>为<em>收益</em>而构建。"),
  "work.sub": L(
    "Mỗi case study gồm cả hai nửa: UX (vấn đề, luồng, quyết định, trạng thái lỗi, chiến lược quảng cáo) và UI (ngôn ngữ hình ảnh, bảng màu, màn hình hoàn thiện).",
    "Every case study shows both halves: UX (problem, flows, decisions, edge states, ad strategy) and UI (visual language, palette, polished screens).",
    "每个案例都包含两部分：UX（问题、流程、决策、异常状态、广告策略）与 UI（视觉语言、配色、最终界面）。"
  ),
  "work.view": L("Xem case study", "View case study", "查看案例"),
  "work.all": L("Tất cả dự án", "All projects", "全部项目"),
  "cursor.view": L("Xem", "View", "查看"),
  "cursor.drag": L("Kéo", "Drag", "拖动"),
  "cursor.read": L("Đọc", "Read", "阅读"),

  "beyond.eyebrow": L("Ngoài mobile", "Beyond mobile", "移动端之外"),
  "beyond.title": L("Dashboard, hệ thống quản lý <em>&</em> dự án nhà nước", "Dashboards, management systems <em>&</em> public sector", "数据看板、管理系统<em>与</em>政府项目"),
  "beyond.soon": L("Case study đang cập nhật", "Case study coming soon", "案例整理中"),
  "beyond.nda": L("Một số dự án thuộc NDA — có thể trình bày trực tiếp khi phỏng vấn.", "Some projects are under NDA — happy to walk through them in person.", "部分项目受保密协议约束——可在面试时当面讲解。"),

  "about.eyebrow": L("Giới thiệu", "About me", "关于我"),
  "about.title": L("Xin chào, mình là <em>Trang</em> — mọi người hay gọi là Chang.cee.", "Hi, I'm <em>Trang</em> — most people call me Chang.cee.", "你好，我是 <em>Trang</em>——大家都叫我 Chang.cee。"),
  "about.p1": L(
    "Mình là UI/UX Designer với 3 năm kinh nghiệm. Phần lớn thời gian mình làm app mobile thương mại trên iOS & Android — nơi mỗi màn hình phải cân bằng giữa trải nghiệm người dùng và mục tiêu kinh doanh: quảng cáo (IAA), mua trong ứng dụng (IAP) hoặc kết hợp cả hai (Hybrid).",
    "I'm a UI/UX Designer with 3 years of experience. Most of my time goes into commercial mobile apps on iOS & Android — where every screen has to balance user experience with business goals: ads (IAA), in-app purchases (IAP), or both (Hybrid).",
    "我是一名拥有 3 年经验的 UI/UX 设计师。大部分时间我在做 iOS 与 Android 的商业移动应用——每一个界面都需要在用户体验与商业目标之间取得平衡：广告变现（IAA）、应用内购买（IAP）或两者结合（Hybrid）。"
  ),
  "about.p2": L(
    "Trước và song song với mobile, mình thiết kế dashboard, hệ thống quản lý nội bộ và các dự án quản lý nhà nước — những sản phẩm nhiều dữ liệu, nhiều quy trình, nơi sự rõ ràng quan trọng hơn sự hào nhoáng.",
    "Alongside mobile, I design dashboards, internal management systems and public-sector platforms — data-heavy, process-heavy products where clarity matters more than flair.",
    "在移动端之外，我也设计数据看板、内部管理系统和政府管理项目——这些产品数据密集、流程复杂，清晰比炫目更重要。"
  ),
  "about.p3": L(
    "Mình tin thiết kế tốt là thiết kế được bàn giao tốt: mỗi file Figma của mình đều kèm ghi chú hành vi, trạng thái lỗi và logic hiển thị để dev không phải đoán.",
    "I believe good design is design that's handed off well: every Figma file I ship includes behaviour notes, error states and display logic so developers never have to guess.",
    "我相信好的设计也必须交付得好：我的每个 Figma 文件都附带交互说明、异常状态和显示逻辑，让开发无需猜测。"
  ),
  "about.info.name": L("Họ tên", "Name", "姓名"),
  "about.info.nick": L("Biệt danh", "Nickname", "昵称"),
  "about.info.dob": L("Ngày sinh", "Born", "出生日期"),
  "about.info.mail": L("Email", "Email", "邮箱"),
  "about.info.focus": L("Chuyên môn", "Focus", "专注领域"),
  "about.info.focusv": L("Mobile app · Dashboard · Hệ thống", "Mobile apps · Dashboards · Systems", "移动应用 · 看板 · 系统"),
  "about.skills": L("Kỹ năng", "Skills", "技能"),
  "about.tools": L("Công cụ", "Tools", "工具"),
  "about.journey": L("Hành trình", "Journey", "经历"),

  "process.eyebrow": L("Cách mình làm việc", "How I work", "工作方式"),
  "process.title": L("Quy trình là <em>tất cả</em>", "Process is <em>everything</em>", "流程<em>决定一切</em>"),

  "writing.eyebrow": L("Bài viết", "Writing", "文章"),
  "writing.title": L("Ghi chép từ <em>bàn làm việc</em>", "Notes from the <em>desk</em>", "来自<em>工作台</em>的笔记"),
  "writing.sub": L(
    "Kiến thức chuyên môn, quan điểm về ngành và những điều mình đúc rút sau từng dự án.",
    "Craft knowledge, opinions on the industry, and lessons distilled from each project.",
    "专业知识、行业观点，以及从每个项目中总结的经验。"
  ),
  "writing.all": L("Xem tất cả bài viết", "Read all articles", "查看全部文章"),
  "writing.min": L("phút đọc", "min read", "分钟阅读"),
  "writing.back": L("Tất cả bài viết", "All articles", "全部文章"),
  "writing.next": L("Bài tiếp theo", "Next article", "下一篇"),
  "writing.filter.all": L("Tất cả", "All", "全部"),

  "contact.eyebrow": L("Liên hệ", "Contact", "联系"),
  "contact.title": L("Cùng làm điều gì đó <em>đáng nhớ</em>?", "Let's make something <em>memorable</em>?", "一起做点<em>难忘</em>的东西？"),
  "contact.copy": L("Sao chép email", "Copy email", "复制邮箱"),
  "contact.copied": L("Đã sao chép!", "Copied!", "已复制！"),
  "contact.soon": L("Sắp có", "Soon", "即将上线"),
  "footer.made": L("Thiết kế & phát triển bởi Chang.cee", "Designed & built by Chang.cee", "由 Chang.cee 设计与开发"),
  "footer.top": L("Lên đầu trang", "Back to top", "回到顶部"),

  /* case study */
  "cs.role": L("Vai trò", "Role", "角色"),
  "cs.platform": L("Nền tảng", "Platform", "平台"),
  "cs.model": L("Mô hình", "Model", "模式"),
  "cs.year": L("Năm", "Year", "年份"),
  "cs.scope": L("Phạm vi", "Scope", "范围"),
  "cs.ux": L("Phần UX", "The UX", "UX 部分"),
  "cs.ui": L("Phần UI", "The UI", "UI 部分"),
  "cs.problem": L("Vấn đề", "Problem", "问题"),
  "cs.goal": L("Mục tiêu", "Goal", "目标"),
  "cs.myrole": L("Mình đã làm gì", "What I did", "我的工作"),
  "cs.flow": L("Luồng người dùng chính", "Core user flow", "核心用户流程"),
  "cs.decisions": L("Quyết định UX quan trọng", "Key UX decisions", "关键 UX 决策"),
  "cs.money": L("Thiết kế kiếm tiền", "Monetisation design", "变现设计"),
  "cs.states": L("Trạng thái biên — phần ít ai thấy", "Edge states — the part nobody sees", "边缘状态——少有人看见的部分"),
  "cs.statesSub": L("Trống, đang tải, lỗi mạng, thiếu quyền, xoá… Mỗi trạng thái là một lời hứa với người dùng rằng app không bỏ rơi họ.", "Empty, loading, offline, missing permission, delete… Each state is a promise that the app won't abandon its user.", "空状态、加载、断网、缺少权限、删除……每一个状态都是对用户的承诺：应用不会丢下他们。"),
  "cs.handoff": L("Ghi chú bàn giao", "Handoff notes", "交付说明"),
  "cs.handoffSub": L("Mỗi thay đổi đều có thẻ ghi chú ngày, hành vi và logic hiển thị ngay cạnh màn hình trong Figma.", "Every change ships with a dated note card describing behaviour and display logic, right next to the screen in Figma.", "每次改动都会在 Figma 中界面旁附上带日期的说明卡，描述交互与显示逻辑。"),
  "cs.visual": L("Ngôn ngữ hình ảnh", "Visual language", "视觉语言"),
  "cs.palette": L("Bảng màu", "Palette", "配色"),
  "cs.gallery": L("Màn hình hoàn thiện", "Final screens", "最终界面"),
  "cs.learn": L("Bài học rút ra", "What I learned", "收获与反思"),
  "cs.next": L("Dự án tiếp theo", "Next project", "下一个项目"),
  "cs.back": L("Tất cả dự án", "All projects", "全部项目"),
  "cs.screens": L("màn hình", "screens", "个界面"),
  "cs.placeholder": L("Màn hình chi tiết sẽ được cập nhật.", "Detailed screens coming soon.", "详细界面即将更新。"),
};

/* ---------- Skills / tools / journey / process ---------- */
window.ABOUT = {
  skills: [
    L("Nghiên cứu người dùng", "User research", "用户研究"),
    L("User flow & IA", "User flows & IA", "用户流程与信息架构"),
    L("Wireframe & Prototype", "Wireframing & prototyping", "线框与原型"),
    L("UI cho iOS & Android", "iOS & Android UI", "iOS 与 Android UI"),
    L("Thiết kế IAA / IAP / Hybrid", "IAA / IAP / Hybrid design", "IAA / IAP / 混合变现设计"),
    L("Design system", "Design systems", "设计系统"),
    L("Dashboard & dữ liệu", "Dashboards & data viz", "看板与数据可视化"),
    L("Micro-interaction", "Micro-interactions", "微交互"),
    L("Minh hoạ AI & key visual", "AI illustration & key visuals", "AI 插画与主视觉"),
    L("Bàn giao cho dev", "Developer handoff", "开发交付"),
  ],
  tools: ["Figma", "FigJam", "Photoshop", "Illustrator", "Midjourney", "After Effects", "Notion", "Jira"],
  journey: [
    {
      year: "2023",
      title: L("Bắt đầu với hệ thống web", "Started with web systems", "从 Web 系统起步"),
      body: L("Thiết kế dashboard, hệ thống quản lý nội bộ và dự án quản lý nhà nước — học cách tổ chức dữ liệu dày đặc và quy trình nhiều bước.", "Designed dashboards, internal management tools and public-sector platforms — learning to organise dense data and multi-step workflows.", "设计数据看板、内部管理工具与政府平台——学习组织密集数据与多步骤流程。"),
    },
    {
      year: "2024",
      title: L("Chuyển sang mobile thương mại", "Moved into commercial mobile", "转向商业移动应用"),
      body: L("Thiết kế app tiện ích và giải trí trên iOS & Android theo mô hình IAA, tối ưu vị trí quảng cáo mà không phá trải nghiệm.", "Designed utility & entertainment apps on iOS & Android under the IAA model, placing ads without breaking the experience.", "为 iOS 与 Android 设计工具与娱乐类 IAA 应用，在不破坏体验的前提下布局广告。"),
    },
    {
      year: "2025",
      title: L("IAP & Hybrid", "IAP & Hybrid", "IAP 与混合变现"),
      body: L("Paywall, gói VIP, xu thưởng, điểm danh hằng ngày — kết hợp mua hàng và quảng cáo thưởng trong cùng một sản phẩm.", "Paywalls, VIP plans, coins and daily check-ins — combining purchases and rewarded ads in one product.", "付费墙、VIP 订阅、金币与每日签到——在同一产品中融合购买与激励广告。"),
    },
    {
      year: L("Nay", "Now", "至今"),
      title: L("Sản phẩm trọn vẹn, từ ý tưởng đến bàn giao", "End-to-end products, idea to handoff", "端到端产品，从想法到交付"),
      body: L("Dẫn dắt thiết kế cho nhiều app cùng lúc: nghiên cứu, flow, UI, key visual, store asset và ghi chú bàn giao.", "Leading design across several apps at once: research, flows, UI, key visuals, store assets and handoff notes.", "同时主导多款应用的设计：研究、流程、UI、主视觉、商店素材与交付说明。"),
    },
  ],
  process: [
    {
      t: L("Hiểu bài toán", "Understand", "理解问题"),
      d: L("Đọc kỹ mục tiêu kinh doanh, đối thủ trên store, review của người dùng và dữ liệu hiện có. Xác định chỉ số cần cải thiện: retention, eCPM, tỉ lệ chuyển đổi…", "Study the business goal, store competitors, user reviews and existing data. Pin down the metric that matters: retention, eCPM, conversion…", "研究商业目标、商店竞品、用户评论与现有数据，明确要改善的指标：留存、eCPM、转化率……"),
    },
    {
      t: L("Lên luồng", "Map the flow", "梳理流程"),
      d: L("Vẽ user flow đầy đủ — kể cả nhánh lỗi, thiếu quyền, mất mạng — và đánh dấu điểm đặt quảng cáo / paywall ngay từ wireframe.", "Draw complete user flows — including error, permission and offline branches — and mark ad / paywall touchpoints from the wireframe stage.", "绘制完整用户流程——包括错误、权限与断网分支——并在线框阶段标出广告与付费墙触点。"),
    },
    {
      t: L("Thiết kế", "Design", "设计"),
      d: L("Xây key visual và UI trên design system nhỏ gọn. Prototype các micro-interaction quan trọng để cả team cảm nhận được nhịp của sản phẩm.", "Build key visuals and UI on a lean design system. Prototype key micro-interactions so the whole team can feel the product's rhythm.", "基于精简的设计系统构建主视觉与 UI，并为关键微交互制作原型，让团队感受产品节奏。"),
    },
    {
      t: L("Bàn giao", "Hand off", "交付"),
      d: L("Ghi chú hành vi, logic hiển thị, trạng thái biên và thời gian delay ngay trên Figma. Theo sát quá trình dev và QA.", "Annotate behaviour, display logic, edge states and timing directly in Figma. Stay close through dev and QA.", "在 Figma 中直接标注交互、显示逻辑、边缘状态与时序，并全程跟进开发与测试。"),
    },
    {
      t: L("Đo & cải thiện", "Measure & iterate", "衡量与迭代"),
      d: L("Đọc số liệu sau phát hành, A/B test vị trí CTA và quảng cáo, rồi quay lại vòng lặp.", "Read post-launch metrics, A/B test CTA and ad placements, then loop again.", "解读上线后的数据，A/B 测试 CTA 与广告位置，然后进入下一轮迭代。"),
    },
  ],
};

/* ---------- Projects ---------- */
const img = (slug, n) => `assets/img/projects/${slug}/${n}.webp`;

window.PROJECTS = [
  {
    slug: "moonly-match",
    name: "Love Test — Moonly Match",
    year: "2026",
    platform: "Android",
    model: "IAA",
    accent: "#F37FA0",
    tint: "#2A1626",
    category: L("Video filter · Giải trí", "Video filters · Entertainment", "视频滤镜 · 娱乐"),
    tagline: L(
      "Ứng dụng quay video với filter bói tình yêu theo pha mặt trăng — nơi trải nghiệm lãng mạn phải sống chung với quảng cáo.",
      "A video app with moon-phase love-test filters — where a romantic experience has to live alongside ads.",
      "一款以月相爱情测试滤镜为核心的视频应用——浪漫体验需要与广告共存。"
    ),
    role: L("UI/UX Designer chính", "Lead UI/UX Designer", "主 UI/UX 设计师"),
    scope: L("Research, flow, UI, 92 màn & trạng thái", "Research, flows, UI, 92 screens & states", "研究、流程、UI、92 个界面与状态"),
    cover: ["feed", "result", "effects"],
    hero: "onb2",
    problem: L(
      "Các app filter tình yêu trên store giống hệt nhau: giao diện rối, quảng cáo bật lên giữa lúc quay, người dùng mất video vì không hiểu cần xem quảng cáo để lưu.",
      "Love-filter apps on the store all look alike: cluttered UI, ads popping up mid-recording, and users losing videos because they don't understand they must watch an ad to save.",
      "商店里的爱情滤镜应用千篇一律：界面杂乱、录制中途弹出广告、用户因为不知道需要看广告才能保存而丢失视频。"
    ),
    goal: L(
      "Tạo một không gian ‘đêm trăng’ có cảm xúc, đưa người dùng từ lúc mở app đến khi có video đầu tiên trong dưới 60 giây — và để quảng cáo xuất hiện ở đúng thời điểm có giá trị.",
      "Create an emotional ‘moonlit night’ space that takes users from launch to their first video in under 60 seconds — with ads appearing only at moments of value.",
      "打造充满情感的“月夜”氛围，让用户在 60 秒内从启动到完成第一个视频——并只在有价值的时刻展示广告。"
    ),
    did: L(
      "Định hướng visual, thiết kế toàn bộ luồng quay – xem kết quả – lưu – thư viện, viết logic cho 92 màn hình và trạng thái (loading, offline, thiếu quyền camera/mic, lỗi lưu, video bị xoá ngoài app…).",
      "Set the visual direction, designed the full record → result → save → library flow, and specified logic for 92 screens and states (loading, offline, missing camera/mic permission, save errors, videos deleted outside the app…).",
      "确定视觉方向，设计完整的录制 → 结果 → 保存 → 资料库流程，并为 92 个界面与状态（加载、断网、缺少相机/麦克风权限、保存失败、视频在应用外被删除等）编写逻辑。"
    ),
    flow: [
      L("Splash", "Splash", "启动页"),
      L("Chọn ngôn ngữ", "Language", "选择语言"),
      L("Onboarding 4 bước", "4-step onboarding", "4 步引导"),
      L("Feed xu hướng", "Trending feed", "热门内容"),
      L("Chọn filter", "Pick a filter", "选择滤镜"),
      L("Nhập ngày sinh & quay", "Enter birthdays & record", "输入生日并录制"),
      L("Kết quả % hợp nhau", "Match result %", "契合度结果"),
      L("Lưu & chia sẻ", "Save & share", "保存与分享"),
    ],
    decisions: [
      {
        img: "coach",
        t: L("Dạy bằng cử chỉ, không bằng chữ", "Teach with gestures, not text", "用手势教学，而非文字"),
        d: L("Lần đầu vào feed, một coach-mark ‘vuốt lên’ xuất hiện đè lên video thật thay vì tutorial nhiều trang. Người dùng học bằng cách làm.", "On the first feed visit a ‘swipe up’ coach-mark sits on top of a real video instead of a multi-page tutorial. Users learn by doing.", "首次进入信息流时，在真实视频上叠加“上滑”提示，而不是多页教程。用户在操作中学习。"),
      },
      {
        img: "camera",
        t: L("Câu hỏi trước, camera sau", "Question first, camera second", "先提问，再拍摄"),
        d: L("Mỗi filter mở bằng một câu hỏi (‘Whose heart beats for me?’). Câu hỏi tạo kỳ vọng, khiến khoảnh khắc lộ kết quả đáng chia sẻ hơn.", "Each filter opens with a question (‘Whose heart beats for me?’). The question builds anticipation and makes the reveal more shareable.", "每个滤镜都以一个问题开场（“谁的心为我跳动？”）。问题制造期待，让结果揭晓更值得分享。"),
      },
      {
        img: "campermission",
        t: L("Xin quyền theo ngữ cảnh", "Contextual permissions", "情境化权限请求"),
        d: L("Không xin camera & micro ở onboarding. Chỉ hỏi khi người dùng bấm quay, kèm giải thích ngắn và nút ‘Để sau’ — giảm tỉ lệ từ chối vĩnh viễn.", "No camera & mic prompts during onboarding. We ask only when the user taps record, with a short reason and a ‘Not now’ — reducing permanent denials.", "引导阶段不请求相机与麦克风权限，仅在用户点击录制时请求，并附简短说明与“稍后”按钮——减少永久拒绝。"),
      },
    ],
    money: [
      {
        t: L("Native ad ở màn ngôn ngữ & onboarding", "Native ads on language & onboarding", "语言页与引导页原生广告"),
        d: L("Khối quảng cáo được thiết kế cùng nhịp với card nội dung, luôn nằm dưới CTA chính để không gây bấm nhầm.", "Ad blocks share the rhythm of content cards and always sit below the primary CTA to avoid mis-taps.", "广告模块与内容卡片节奏一致，并始终位于主 CTA 下方，避免误触。"),
      },
      {
        t: L("Rewarded ad để lưu video", "Rewarded ad to save", "激励广告保存视频"),
        d: L("Nói rõ trao đổi giá trị trước khi phát quảng cáo; nếu người dùng thoát giữa chừng, toast giải thích ‘xem hết quảng cáo để lưu’ thay vì im lặng thất bại.", "The value exchange is stated before the ad plays; if users skip, a toast explains ‘watch the full ad to save’ instead of failing silently.", "播放前明确价值交换；若用户中途退出，会以提示说明“看完广告即可保存”，而非静默失败。"),
      },
      {
        t: L("Không quảng cáo khi đang quay", "No ads while recording", "录制期间无广告"),
        d: L("Toàn bộ màn camera là vùng cấm quảng cáo — khoảnh khắc sáng tạo được bảo vệ tuyệt đối.", "The whole camera screen is an ad-free zone — the creative moment is protected.", "整个相机界面为无广告区域——创作时刻受到完全保护。"),
      },
    ],
    states: ["loadingfeed", "offline", "error", "denied", "empty", "missing", "delete", "discard"],
    gallery: [
      { g: L("Onboarding", "Onboarding", "引导"), imgs: ["splash", "lang", "onb1", "onb2", "onb3", "onb4", "notif"] },
      { g: L("Khám phá & quay", "Discover & record", "探索与录制"), imgs: ["feed", "video", "category", "effects", "camera", "countdown", "recording", "result", "song"] },
      { g: L("Lưu & thư viện", "Save & library", "保存与资料库"), imgs: ["yourvideo", "saved", "library", "settings", "rate", "leave", "feedback"] },
    ],
    palette: ["#130B16", "#2A1626", "#3C2336", "#B07679", "#F37FA0", "#FFD6E2"],
    type: "Inter / SF Pro",
    learn: L(
      "Viết ra 92 trạng thái nghe có vẻ nhiều, nhưng nó giúp dev hỏi ít đi và QA tìm ít lỗi hơn hẳn. Thiết kế trạng thái biên ngay từ đầu rẻ hơn rất nhiều so với vá sau phát hành.",
      "Writing 92 states sounds like a lot, but it meant far fewer dev questions and QA bugs. Designing edge states up-front is much cheaper than patching after launch.",
      "写出 92 个状态听起来很多，但它让开发的提问和测试的缺陷都大幅减少。提前设计边缘状态远比上线后修补便宜。"
    ),
  },
  {
    slug: "dramazone",
    name: "DramaZone",
    year: "2026",
    platform: "iOS · Android",
    model: "Hybrid",
    accent: "#F0245A",
    tint: "#1C0D0E",
    category: L("Phim ngắn · Streaming", "Short drama · Streaming", "短剧 · 流媒体"),
    tagline: L(
      "App xem phim ngắn dọc kết hợp gói VIP, xu thưởng và quảng cáo thưởng — một bài toán Hybrid điển hình.",
      "A vertical short-drama app combining VIP plans, coins and rewarded ads — a textbook Hybrid challenge.",
      "一款结合 VIP 订阅、金币与激励广告的竖屏短剧应用——典型的混合变现课题。"
    ),
    role: L("UI/UX Designer", "UI/UX Designer", "UI/UX 设计师"),
    scope: L("Flow, UI, paywall, hệ thống phần thưởng", "Flows, UI, paywall, reward system", "流程、UI、付费墙、奖励体系"),
    cover: ["ranking", "player", "vip"],
    hero: "onb1",
    problem: L(
      "Người xem phim ngắn bị cuốn vào từng tập, nhưng bức tường trả phí xuất hiện đột ngột khiến họ thấy bị ‘gài’, dẫn đến đánh giá thấp và gỡ app.",
      "Short-drama viewers get hooked episode by episode, but abrupt paywalls make them feel trapped — leading to bad reviews and uninstalls.",
      "短剧观众一集集被吸引，但突兀的付费墙让他们感觉被“套路”，导致差评与卸载。"
    ),
    goal: L(
      "Cho người dùng nhiều con đường mở khoá tập phim — trả phí, dùng xu, xem quảng cáo, điểm danh — và để họ tự chọn mà không cảm thấy bị ép.",
      "Give users several ways to unlock episodes — pay, spend coins, watch ads, check in daily — and let them choose without feeling forced.",
      "为用户提供多种解锁剧集的方式——付费、金币、看广告、每日签到——让他们自由选择而不被强迫。"
    ),
    did: L(
      "Thiết kế khám phá (ranking, sắp chiếu, miễn phí, độc quyền), trình phát dọc, màn mở khoá, paywall VIP, hệ thống xu & điểm danh, lịch sử giao dịch và luồng giữ chân khi gỡ app.",
      "Designed discovery (ranking, coming soon, free, exclusive), the vertical player, unlock sheet, VIP paywall, coin & check-in system, transaction history and the uninstall-retention flow.",
      "设计了发现页（排行、即将上线、免费、独家）、竖屏播放器、解锁面板、VIP 付费墙、金币与签到体系、交易记录及卸载挽留流程。"
    ),
    flow: [
      L("Onboarding", "Onboarding", "引导"),
      L("Ưu đãi VIP", "VIP offer", "VIP 优惠"),
      L("Khám phá", "Discover", "发现"),
      L("Xem tập miễn phí", "Watch free episodes", "观看免费剧集"),
      L("Hết tập miễn phí", "Free episodes end", "免费剧集结束"),
      L("Chọn cách mở khoá", "Choose how to unlock", "选择解锁方式"),
      L("Tiếp tục xem", "Keep watching", "继续观看"),
    ],
    decisions: [
      {
        img: "unlock",
        t: L("Một màn, ba lựa chọn", "One sheet, three choices", "一个面板，三种选择"),
        d: L("Khi hết tập miễn phí, bottom sheet trình bày song song: gói VIP, dùng xu, xem quảng cáo. Số dư xu luôn hiển thị để người dùng tự quyết định.", "When free episodes run out, a bottom sheet presents VIP, coins and ads side by side. The coin balance is always visible so users can decide for themselves.", "免费剧集结束时，底部面板并列展示 VIP、金币与看广告三种方式，并始终显示金币余额，让用户自主决定。"),
      },
      {
        img: "checkin",
        t: L("Điểm danh tạo thói quen", "Check-ins build habits", "签到养成习惯"),
        d: L("Chuỗi điểm danh 7 ngày với phần thưởng tăng dần biến việc mở app thành thói quen, đồng thời là nguồn xu cho người không trả phí.", "A 7-day check-in streak with escalating rewards turns opening the app into a habit — and a coin source for non-payers.", "7 天连续签到、奖励递增，让打开应用成为习惯，也为不付费用户提供金币来源。"),
      },
      {
        img: "uninstall",
        t: L("Hỏi lý do trước khi chia tay", "Ask why before goodbye", "告别前先问原因"),
        d: L("Luồng gỡ cài đặt hỏi lý do bằng lựa chọn nhanh. Dữ liệu này trở thành đầu vào cho roadmap thay vì mất đi lặng lẽ.", "The uninstall flow asks for a reason with quick options. That data feeds the roadmap instead of disappearing silently.", "卸载流程以快捷选项询问原因，这些数据成为产品路线图的输入，而不是悄然流失。"),
      },
    ],
    money: [
      {
        t: L("Paywall VIP có đồng hồ đếm ngược trung thực", "Honest countdown on VIP offer", "诚实倒计时的 VIP 优惠"),
        d: L("Ưu đãi giảm 30% có thời hạn rõ ràng, nút đóng dễ thấy và dòng ‘Tự gia hạn · Huỷ bất cứ lúc nào’ ngay dưới CTA.", "A 30%-off offer with a clear deadline, a visible close button and ‘Auto-renew · Cancel anytime’ right under the CTA.", "七折优惠有明确期限、醒目的关闭按钮，并在 CTA 下方注明“自动续订 · 随时取消”。"),
      },
      {
        t: L("Xu là tiền tệ trung gian", "Coins as a middle currency", "金币作为中间货币"),
        d: L("Xu kiếm được từ điểm danh, nhiệm vụ và quảng cáo, giúp người dùng không trả phí vẫn có lối đi — và quen với giá trị của nội dung.", "Coins come from check-ins, tasks and ads, giving non-payers a path forward — and teaching them the value of content.", "金币来自签到、任务与广告，让不付费用户也有路可走，并逐步认识内容的价值。"),
      },
      {
        t: L("Rewarded ad mở từng tập", "Rewarded ads per episode", "激励广告解锁单集"),
        d: L("Có giới hạn số lần mỗi ngày để giữ giá trị gói VIP và tránh mệt mỏi quảng cáo.", "Capped per day to protect the value of VIP and avoid ad fatigue.", "每日次数有上限，以保护 VIP 价值并避免广告疲劳。"),
      },
    ],
    states: ["e404", "offline", "empty", "emptyusage", "report", "survey"],
    gallery: [
      { g: L("Onboarding & ưu đãi", "Onboarding & offer", "引导与优惠"), imgs: ["splash", "lang", "onb1", "onb2", "onb3", "vip"] },
      { g: L("Khám phá", "Discover", "发现"), imgs: ["ranking", "coming", "free", "filter", "search", "more"] },
      { g: L("Xem & mở khoá", "Watch & unlock", "观看与解锁"), imgs: ["player", "episodes", "unlock", "unlock2", "checkin"] },
      { g: L("Cá nhân", "Profile", "个人"), imgs: ["mylist", "profile", "uninstall"] },
    ],
    palette: ["#0B0B0B", "#1C0D0E", "#2B191B", "#F0245A", "#F5B24A", "#978680"],
    type: "SF Pro Display",
    learn: L(
      "Với Hybrid, kẻ thù không phải là quảng cáo hay paywall, mà là sự bất ngờ. Khi người dùng luôn biết mình còn bao nhiêu tập miễn phí và có những lựa chọn nào, họ trả tiền thoải mái hơn.",
      "In Hybrid models the enemy isn't ads or paywalls — it's surprise. When users always know how many free episodes remain and what their options are, they pay more willingly.",
      "在混合变现中，敌人不是广告或付费墙，而是“意外”。当用户始终清楚还剩几集免费、有哪些选择时，他们更愿意付费。"
    ),
  },
  {
    slug: "dynamic-island",
    name: "Dynamic Island",
    year: "2026",
    platform: "Android",
    model: "IAA",
    accent: "#2F80ED",
    tint: "#DCEBFF",
    category: L("Tuỳ biến · Tiện ích", "Customisation · Utility", "个性化 · 工具"),
    tagline: L(
      "Mang Dynamic Island lên Android: thông báo, sạc pin, cuộc gọi và sticker sống động ngay trên đỉnh màn hình.",
      "Bringing Dynamic Island to Android: notifications, charging, calls and playful stickers living at the top of the screen.",
      "将灵动岛带到 Android：通知、充电、来电与可爱贴纸都在屏幕顶部生动呈现。"
    ),
    role: L("UI/UX Designer", "UI/UX Designer", "UI/UX 设计师"),
    scope: L("Flow cấp quyền, UI, motion island, hình nền động", "Permission flow, UI, island motion, live wallpapers", "权限流程、UI、灵动岛动效、动态壁纸"),
    cover: ["home", "island2", "animation"],
    hero: "onb1",
    problem: L(
      "App cần quyền Accessibility và hiển thị trên ứng dụng khác — hai quyền khiến người dùng e ngại nhất. Không có quyền, app hoàn toàn vô dụng.",
      "The app needs Accessibility and draw-over-apps permissions — the two scariest permissions for users. Without them, the app does nothing.",
      "应用需要无障碍与悬浮窗权限——最让用户顾虑的两项权限。没有它们，应用毫无用处。"
    ),
    goal: L(
      "Giải thích giá trị trước khi xin quyền, dẫn người dùng qua cài đặt hệ thống mà không lạc, và cho họ ‘wow’ ngay khi bật thành công.",
      "Explain value before asking, guide users through system settings without getting lost, and give them a ‘wow’ the moment it's enabled.",
      "先说明价值再请求权限，引导用户顺利完成系统设置，并在开启成功的瞬间带来“惊喜”。"
    ),
    did: L(
      "Thiết kế onboarding, luồng cấp quyền với tooltip hướng dẫn, các biến thể island (thông báo, trả lời tin nhắn, sạc, cuộc gọi, tai nghe…), trang trí status bar, hình nền sạc và tuỳ chỉnh vị trí/kích thước.",
      "Designed onboarding, the guided permission flow, island variants (notifications, inline reply, charging, calls, headphones…), status-bar stickers, charging wallpapers and position/size customisation.",
      "设计了引导页、带提示的权限流程、灵动岛多种形态（通知、快捷回复、充电、来电、耳机等）、状态栏贴纸、充电壁纸及位置/尺寸自定义。"
    ),
    flow: [
      L("Onboarding", "Onboarding", "引导"),
      L("Bật Dynamic", "Enable Dynamic", "开启灵动岛"),
      L("Tooltip hướng dẫn", "Guided tooltip", "引导提示"),
      L("Cài đặt hệ thống", "System settings", "系统设置"),
      L("Quay lại app", "Return to app", "返回应用"),
      L("Chọn animation", "Pick an animation", "选择动画"),
      L("Áp dụng thành công", "Applied!", "应用成功"),
    ],
    decisions: [
      {
        img: "perm",
        t: L("Tooltip chỉ đúng chỗ cần bấm", "Tooltips that point exactly", "精准指向的提示"),
        d: L("Thay vì đoạn hướng dẫn dài, một bàn tay động chỉ vào công tắc ‘Enable Dynamic’ và giải thích một câu.", "Instead of long instructions, an animated hand points at the ‘Enable Dynamic’ toggle with a one-line explanation.", "没有冗长说明，而是用动态手势指向“开启灵动岛”开关，并配一句解释。"),
      },
      {
        img: "island3",
        t: L("Island phải trông như của hệ thống", "The island must feel native", "灵动岛必须像系统原生"),
        d: L("Bo góc, độ giãn và thời gian chuyển động được tinh chỉnh theo từng loại máy, để island hoà vào camera đục lỗ thay vì trông như một lớp dán.", "Radius, stretch and timing are tuned per device so the island merges with the punch-hole camera instead of looking like an overlay.", "圆角、伸展与动画时长针对不同机型调校，让灵动岛与挖孔摄像头融为一体，而不像一层贴纸。"),
      },
      {
        img: "leave",
        t: L("Không để mất công tuỳ chỉnh", "Never lose a customisation", "不丢失任何自定义"),
        d: L("Rời màn chỉnh sửa khi chưa lưu sẽ hiện hộp thoại xác nhận với nút chính là ‘Ở lại’ — hành động an toàn được ưu tiên.", "Leaving the editor unsaved triggers a confirmation where the primary button is ‘Stay here’ — the safe action wins.", "未保存就离开编辑页时会弹出确认框，主按钮是“留在此页”——安全操作优先。"),
      },
    ],
    money: [
      {
        t: L("Unlock by Reward cho nội dung cao cấp", "Unlock by Reward for premium content", "激励解锁高级内容"),
        d: L("Hình nền và sticker đặc biệt mở bằng quảng cáo thưởng, có icon nhận diện nhất quán trên mọi thumbnail.", "Special wallpapers and stickers unlock via rewarded ads, marked with a consistent badge on every thumbnail.", "特殊壁纸与贴纸通过激励广告解锁，每个缩略图上都有统一的标识。"),
      },
      {
        t: L("Native ad trong lưới nội dung", "Native ads within content grids", "内容网格中的原生广告"),
        d: L("Quảng cáo native đặt cuối section, cách xa các công tắc bật/tắt để tránh thao tác nhầm.", "Native ads sit at the end of sections, away from toggles to prevent accidental taps.", "原生广告放在区块末尾，远离开关，避免误触。"),
      },
      {
        t: L("Màn thành công có giá trị", "Success screens with value", "有价值的成功页"),
        d: L("Sau khi áp dụng, màn chúc mừng là nơi đặt quảng cáo tự nhiên nhất — người dùng vừa đạt được điều họ muốn.", "After applying, the celebration screen is the most natural ad slot — the user just got what they wanted.", "应用成功后的庆祝页是最自然的广告位——用户刚刚得到了想要的东西。"),
      },
    ],
    states: ["offline", "oops", "almost", "leave", "rate"],
    gallery: [
      { g: L("Onboarding", "Onboarding", "引导"), imgs: ["onb1", "onb2", "onb3", "onb4"] },
      { g: L("Island trong thực tế", "Islands in context", "真实场景中的灵动岛"), imgs: ["island1", "island2", "island3", "island4", "states"] },
      { g: L("Tuỳ biến", "Customise", "自定义"), imgs: ["home", "animation", "statusbar", "preview", "wallpaper", "wpreview", "applied", "settings"] },
    ],
    palette: ["#F7F9FC", "#DCEBFF", "#8FB8FF", "#2F80ED", "#111E34", "#FFD84D"],
    type: "SF Pro / Nunito",
    learn: L(
      "Quyền nhạy cảm không đáng sợ bằng sự mơ hồ. Khi mỗi bước chỉ yêu cầu đúng một hành động và có hình minh hoạ, tỉ lệ bật quyền tăng lên rõ rệt.",
      "Sensitive permissions are less scary than ambiguity. When each step asks for exactly one action with a visual cue, enable rates rise noticeably.",
      "敏感权限并不比模糊更可怕。当每一步只要求一个动作并配有图示时，开启率明显提升。"
    ),
  },
  {
    slug: "ar-drawing",
    name: "AR Drawing",
    year: "2026",
    platform: "iOS · Android",
    model: "IAA",
    accent: "#8B7CF6",
    tint: "#F3FBE3",
    category: L("Sáng tạo · AR", "Creative · AR", "创意 · AR"),
    tagline: L(
      "Vẽ theo nét phác hoạ bằng camera AR — biến bất kỳ ảnh nào thành bài tập vẽ trên giấy thật.",
      "Trace sketches with an AR camera — turn any photo into a drawing exercise on real paper.",
      "通过 AR 相机临摹线稿——把任何照片变成真实纸面上的绘画练习。"
    ),
    role: L("UI/UX Designer", "UI/UX Designer", "UI/UX 设计师"),
    scope: L("Key visual, flow, UI camera, minh hoạ", "Key visuals, flows, camera UI, illustration", "主视觉、流程、相机 UI、插画"),
    cover: ["onb2", "camera", "templates"],
    hero: "onb1",
    problem: L(
      "Người dùng đặt điện thoại trên cốc hoặc chồng sách, vừa nhìn màn hình vừa vẽ. Mọi nút bấm phải dùng được bằng một tay, khi tay kia đang cầm bút.",
      "Users prop the phone on a glass or a stack of books and draw while looking at the screen. Every control must work one-handed while the other hand holds a pencil.",
      "用户把手机架在杯子或书堆上，一边看屏幕一边画画。所有控件都必须能单手操作，因为另一只手正拿着笔。"
    ),
    goal: L(
      "Giảm tối đa thao tác trên màn camera, cho phép khoá vị trí ảnh và chỉnh độ mờ nhanh — đồng thời giữ không khí vui tươi, sáng tạo.",
      "Minimise interactions on the camera screen, allow locking the image and adjusting opacity quickly — while keeping a playful, creative mood.",
      "尽量减少相机界面的操作，支持快速锁定图像与调节透明度——同时保持轻松有趣的创作氛围。"
    ),
    did: L(
      "Xây key visual 3D cho onboarding, thiết kế thư viện mẫu, luồng cắt ảnh, hai chế độ vẽ (camera & màn hình), thanh công cụ camera, lưu ảnh/video quá trình và trang cá nhân.",
      "Built 3D key visuals for onboarding, designed the template library, crop flow, two drawing modes (camera & screen), the camera toolbar, photo/time-lapse saving and the profile.",
      "制作引导页 3D 主视觉，设计模板库、裁剪流程、两种绘画模式（相机与屏幕）、相机工具栏、照片/过程视频保存以及个人页。"
    ),
    flow: [
      L("Onboarding", "Onboarding", "引导"),
      L("Chọn mẫu / ảnh", "Pick template / photo", "选择模板/照片"),
      L("Cắt ảnh 3:4", "Crop 3:4", "裁剪 3:4"),
      L("Chọn chế độ vẽ", "Choose mode", "选择模式"),
      L("Vẽ với camera", "Draw with camera", "相机绘画"),
      L("Lưu kết quả", "Save result", "保存作品"),
    ],
    decisions: [
      {
        img: "mode",
        t: L("Hai chế độ, một lựa chọn rõ ràng", "Two modes, one clear choice", "两种模式，一个清晰选择"),
        d: L("Card lớn có minh hoạ cách đặt điện thoại cho từng chế độ — người dùng hiểu ngay mình cần chuẩn bị gì trước khi bắt đầu.", "Large cards illustrate how to position the phone for each mode — users know what to prepare before starting.", "大卡片图示每种模式下手机的摆放方式——用户开始前就知道需要准备什么。"),
      },
      {
        img: "camera",
        t: L("Thanh công cụ ở vùng ngón cái", "Toolbar in the thumb zone", "拇指热区工具栏"),
        d: L("Độ mờ, khoá, đèn flash, lật ảnh nằm ở đáy màn hình; thanh trượt độ mờ hiển thị % để người dùng lặp lại được thiết lập yêu thích.", "Opacity, lock, flash and flip live at the bottom; the opacity slider shows a % so users can repeat their favourite setting.", "透明度、锁定、闪光灯和翻转都位于底部；透明度滑块显示百分比，方便用户复用喜欢的设置。"),
      },
      {
        img: "done",
        t: L("Ăn mừng thành quả", "Celebrate the result", "为作品喝彩"),
        d: L("Sau khi vẽ xong, màn ‘Yay! You did it’ với nhân vật 3D tạo cảm xúc tích cực — thời điểm tốt nhất để xin đánh giá app.", "After finishing, a ‘Yay! You did it’ screen with a 3D character creates a positive moment — the best time to ask for a rating.", "完成后，“耶！你做到了”页面配合 3D 角色营造积极情绪——这是请求评分的最佳时机。"),
      },
    ],
    money: [
      {
        t: L("Native ad cuối onboarding", "Native ad at onboarding end", "引导结尾原生广告"),
        d: L("Quảng cáo nằm dưới nút Continue, có nhãn rõ ràng; nút chính luôn nằm trên vùng quảng cáo.", "Ads sit below the Continue button with clear labels; the primary button always stays above the ad.", "广告位于“继续”按钮下方并有清晰标识，主按钮始终位于广告之上。"),
      },
      {
        t: L("Quảng cáo ở hộp thoại lưu/xoá", "Ads in save/delete dialogs", "保存/删除弹窗中的广告"),
        d: L("Khối quảng cáo nhỏ gắn vào dialog, tách biệt bằng khoảng trắng để không lẫn với nút hành động.", "Small ad units attach to dialogs, separated by whitespace so they're never confused with action buttons.", "小型广告附在弹窗中，用留白与操作按钮区分，避免混淆。"),
      },
      {
        t: L("Không quảng cáo khi đang vẽ", "No ads while drawing", "绘画时无广告"),
        d: L("Màn camera chỉ có một banner thu gọn ở đáy — người dùng đang tập trung, không thể bị ngắt.", "The camera screen only carries a collapsed banner at the very bottom — the user is focused and must not be interrupted.", "相机界面底部只有一个折叠横幅——用户正在专注，不能被打断。"),
      },
    ],
    states: ["camaccess", "empty", "error", "delete", "rate"],
    gallery: [
      { g: L("Onboarding", "Onboarding", "引导"), imgs: ["splash", "lang", "onb1", "onb2", "onb3", "onb4", "perm"] },
      { g: L("Chuẩn bị", "Set up", "准备"), imgs: ["templates", "preview", "crop", "mode"] },
      { g: L("Vẽ & lưu", "Draw & save", "绘画与保存"), imgs: ["camera", "screen", "save", "done", "profile"] },
    ],
    palette: ["#F8FCED", "#E9FBB0", "#D8F35A", "#B8AEFA", "#8B7CF6", "#2E2624"],
    type: "Outfit",
    learn: L(
      "Thiết kế cho ngữ cảnh vật lý — điện thoại dựng trên cốc, tay cầm bút — dạy mình rằng UX không chỉ nằm trong màn hình.",
      "Designing for a physical context — phone on a glass, pencil in hand — taught me that UX doesn't live only inside the screen.",
      "为物理场景而设计——手机架在杯子上、手里握着笔——让我明白 UX 不只存在于屏幕之内。"
    ),
  },
  {
    slug: "gps-camera",
    name: "GPS Map Camera",
    year: "2026",
    platform: "iOS · Android",
    model: "IAA",
    accent: "#3B82F6",
    tint: "#E7F0FB",
    category: L("Camera · Bản đồ", "Camera · Maps", "相机 · 地图"),
    tagline: L(
      "Chụp ảnh và quay video có đóng dấu GPS, địa chỉ, thời gian — kèm tìm xe và đo diện tích.",
      "Photos and videos stamped with GPS, address and time — plus car finder and area measurement.",
      "为照片和视频加上 GPS、地址与时间水印——还能寻车与测量面积。"
    ),
    role: L("UI/UX Designer", "UI/UX Designer", "UI/UX 设计师"),
    scope: L("Key visual, template stamp, flow", "Key visuals, stamp templates, flows", "主视觉、水印模板、流程"),
    cover: ["p1", "onb2", "p4"],
    hero: "onb1",
    problem: L(
      "Người dùng là kỹ sư công trường, nhân viên giao hàng, người đi du lịch — họ cần bằng chứng vị trí đáng tin cậy, nhưng các app hiện có đóng dấu xấu và khó đọc.",
      "Users are site engineers, couriers and travellers — they need trustworthy location proof, but existing apps produce ugly, unreadable stamps.",
      "用户是工地工程师、快递员与旅行者——他们需要可信的位置证明，但现有应用的水印丑且难以辨认。"
    ),
    goal: L(
      "Thiết kế stamp vừa đẹp vừa đọc được trên mọi nền ảnh, và đưa 4 tính năng (ảnh, video, tìm xe, đo diện tích) vào một app không rối.",
      "Design stamps that are beautiful and legible on any photo, and fit four features (photo, video, car finder, area) into one uncluttered app.",
      "设计在任何背景上都美观易读的水印，并将四项功能（拍照、视频、寻车、测面积）整合进一个不杂乱的应用。"
    ),
    did: L(
      "Thiết kế key visual onboarding, bộ template stamp (bản đồ mini, toạ độ, thời gian), banner tính năng video, màn điều hướng, thư viện và các hộp thoại xoá.",
      "Designed onboarding key visuals, the stamp template set (mini map, coordinates, time), video feature banners, navigation screen, library and delete dialogs.",
      "设计引导页主视觉、水印模板（迷你地图、坐标、时间）、视频功能横幅、导航页、资料库与删除弹窗。"
    ),
    flow: [
      L("Onboarding", "Onboarding", "引导"),
      L("Cấp quyền vị trí", "Location permission", "位置权限"),
      L("Chọn template", "Pick a template", "选择模板"),
      L("Chụp / quay", "Shoot / record", "拍照/录像"),
      L("Xem trước", "Preview", "预览"),
      L("Chia sẻ / điều hướng", "Share / navigate", "分享/导航"),
    ],
    decisions: [
      {
        img: "p3",
        t: L("Stamp kính mờ đọc được trên mọi nền", "Frosted stamps legible anywhere", "任何背景都清晰的磨砂水印"),
        d: L("Nền blur bán trong suốt + chữ trắng đảm bảo tương phản trên trời xanh, đèn đêm hay tường trắng.", "A translucent blurred backing with white text keeps contrast on blue skies, night lights or white walls.", "半透明模糊底与白色文字，在蓝天、夜景或白墙上都保持足够对比度。"),
      },
      {
        img: "onb2",
        t: L("Key visual kể đúng công dụng", "Key visuals that explain use", "讲清用途的主视觉"),
        d: L("Mỗi trang onboarding là một tình huống thật: du lịch, quay video, tìm xe, đo đất — người dùng nhận ra mình trong đó.", "Each onboarding page is a real scenario: travel, video, finding your car, measuring land — users see themselves in it.", "每个引导页都是真实场景：旅行、录像、寻车、测地——用户能在其中看到自己。"),
      },
      {
        img: "navigate",
        t: L("Từ ảnh trở lại địa điểm", "From photo back to place", "从照片回到地点"),
        d: L("Mỗi ảnh trong thư viện có thể mở bản đồ và điều hướng ngược lại vị trí chụp — biến ảnh thành dấu mốc.", "Every photo in the library can open the map and navigate back to where it was taken — photos become landmarks.", "资料库中的每张照片都可以打开地图并导航回拍摄地点——照片变成了地标。"),
      },
    ],
    money: [
      {
        t: L("Banner thu gọn (collapsible)", "Collapsible banners", "可折叠横幅"),
        d: L("Banner mở rộng lần đầu rồi thu gọn, không che khung ngắm camera.", "Banners expand once, then collapse — never covering the viewfinder.", "横幅首次展开后折叠，绝不遮挡取景框。"),
      },
      {
        t: L("Banner tính năng thay cho quảng cáo", "Feature banners instead of ads", "以功能横幅代替广告"),
        d: L("Trên thiết bị không hỗ trợ dual camera, vị trí đó hiển thị banner giới thiệu tính năng video — không bao giờ để trống hay lỗi.", "On devices without dual-camera support, that slot shows a video-feature banner — never empty, never broken.", "在不支持双摄的设备上，该位置展示视频功能横幅——绝不留空或报错。"),
      },
      {
        t: L("Native ad trong onboarding", "Native ads in onboarding", "引导页原生广告"),
        d: L("Tuân thủ nguyên tắc chung: quảng cáo dưới CTA, có nhãn rõ ràng.", "Following the same rule: ads below the CTA, clearly labelled.", "遵循相同原则：广告位于 CTA 下方，并清晰标注。"),
      },
    ],
    states: ["offline", "retry", "delete", "delmeasure"],
    gallery: [
      { g: L("Onboarding", "Onboarding", "引导"), imgs: ["onb1", "onb2", "onb3", "onb4", "onb5"] },
      { g: L("Template stamp", "Stamp templates", "水印模板"), imgs: ["p1", "p2", "p3", "p4", "p5", "p6"] },
      { g: L("Bản đồ", "Map", "地图"), imgs: ["navigate"] },
    ],
    palette: ["#FFFFFF", "#E7F0FB", "#AFCADC", "#3B82F6", "#11151B", "#E53935"],
    type: "SF Pro",
    learn: L(
      "Tính năng ‘phụ’ như stamp lại là thứ người dùng nhìn thấy nhiều nhất — vì nó nằm trên mọi bức ảnh họ chia sẻ. Đầu tư vào chi tiết nhỏ có sức lan toả lớn.",
      "‘Minor’ features like stamps are what users see most — they're on every photo they share. Investing in small details has outsized reach.",
      "像水印这样的“次要”功能反而最常被看见——它出现在用户分享的每一张照片上。在细节上投入，影响力巨大。"
    ),
  },
  {
    slug: "ringtone",
    name: "Ringtones",
    year: "2026",
    platform: "iOS · Android",
    model: "IAA",
    accent: "#F7D774",
    tint: "#151328",
    category: L("Âm nhạc · Tiện ích", "Audio · Utility", "音频 · 工具"),
    tagline: L(
      "Khám phá nhạc chuông, tải âm thanh từ video và đặt làm chuông, thông báo hoặc báo thức chỉ trong vài chạm.",
      "Discover ringtones, extract audio from videos and set it as ringtone, notification or alarm in a few taps.",
      "发现铃声、从视频中提取音频，几步即可设为来电、通知或闹钟铃声。"
    ),
    role: L("UI/UX Designer", "UI/UX Designer", "UI/UX 设计师"),
    scope: L("Flow tải & đặt chuông, UI tối, minh hoạ", "Download & assign flows, dark UI, illustration", "下载与设置流程、深色 UI、插画"),
    cover: ["home", "assign", "dl100"],
    hero: "onb",
    problem: L(
      "Đặt nhạc chuông trên điện thoại là thao tác nhiều bước, khác nhau giữa các hãng; dán link video để lấy âm thanh thường thất bại mà không rõ lý do.",
      "Setting a ringtone takes many steps and differs by manufacturer; pasting a video link to extract audio often fails with no explanation.",
      "设置铃声步骤繁琐且因厂商而异；粘贴视频链接提取音频常常失败却没有任何说明。"
    ),
    goal: L(
      "Rút gọn còn 3 bước: nghe thử → chọn loại (chuông / thông báo / báo thức) → xong. Mọi lỗi tải đều có lời giải thích và lối thoát.",
      "Cut it to 3 steps: preview → choose type (ringtone / notification / alarm) → done. Every download error has an explanation and a way out.",
      "精简为 3 步：试听 → 选择类型（来电/通知/闹钟）→ 完成。每个下载错误都有说明与出路。"
    ),
    did: L(
      "Thiết kế trang chủ, danh mục, trình nghe thử, bottom sheet chọn loại, luồng tải từ link (đang tải, thành công, link lỗi, hết thời gian), thư viện yêu thích/đã tải và cài đặt.",
      "Designed home, categories, the preview player, the type-picker sheet, the link download flow (progress, success, invalid link, timeout), favourites/downloads library and settings.",
      "设计首页、分类、试听播放器、类型选择面板、链接下载流程（进度、成功、无效链接、超时）、收藏/下载资料库与设置。"
    ),
    flow: [
      L("Khám phá", "Explore", "探索"),
      L("Nghe thử", "Preview", "试听"),
      L("Tải xuống", "Download", "下载"),
      L("Chọn loại", "Choose type", "选择类型"),
      L("Đặt thành công", "Set successfully", "设置成功"),
    ],
    decisions: [
      {
        img: "assign",
        t: L("Một bottom sheet cho ba mục đích", "One sheet, three purposes", "一个面板，三种用途"),
        d: L("Chuông, thông báo, báo thức được gom vào một sheet với icon rõ ràng; lựa chọn gần nhất được nhớ lại.", "Ringtone, notification and alarm live in one sheet with clear icons; the last choice is remembered.", "来电、通知、闹钟集中在一个面板中，图标清晰，并记住上次选择。"),
      },
      {
        img: "dl25",
        t: L("Tiến trình có số, có lời", "Progress with numbers and words", "有数字也有文字的进度"),
        d: L("Vòng tiến trình lớn kèm % và mô tả bước đang chạy — người dùng biết app đang làm việc, không phải bị treo.", "A large progress ring with % and a description of the current step — users know the app is working, not frozen.", "大号进度环配合百分比与当前步骤说明——用户知道应用在工作，而不是卡住了。"),
      },
      {
        img: "unavailable",
        t: L("Lỗi có tên, có lối ra", "Errors with names and exits", "有名字、有出路的错误"),
        d: L("‘Link không khả dụng’ giải thích nguyên nhân có thể (riêng tư, đã xoá) và nút ‘Thử link khác’ đưa người dùng về đúng chỗ.", "‘Link unavailable’ explains likely causes (private, deleted) and a ‘Try another link’ button takes users right back.", "“链接不可用”说明可能原因（私密、已删除），并提供“换个链接”按钮直接返回。"),
      },
    ],
    money: [
      {
        t: L("Quảng cáo xen kẽ hợp lý", "Well-paced interstitials", "节奏合理的插屏广告"),
        d: L("Chỉ xuất hiện sau khi tải thành công, không bao giờ trước khi người dùng nghe được âm thanh.", "Shown only after a successful download, never before the user hears the sound.", "仅在下载成功后出现，绝不在用户听到声音之前。"),
      },
      {
        t: L("Banner ở tab, không ở player", "Banners on tabs, not the player", "横幅在标签页而非播放器"),
        d: L("Màn nghe thử giữ sạch để người dùng tập trung vào âm thanh và hình minh hoạ.", "The preview screen stays clean so users focus on the sound and artwork.", "试听页保持干净，让用户专注于声音与插画。"),
      },
      {
        t: L("Đánh giá đúng lúc", "Rating at the right time", "适时请求评分"),
        d: L("Hộp thoại đánh giá xuất hiện sau lần đặt chuông thành công thứ hai — khi người dùng đã thấy giá trị.", "The rating dialog appears after the second successful set — once users have felt the value.", "评分弹窗在第二次成功设置后出现——此时用户已感受到价值。"),
      },
    ],
    states: ["timeout", "notif", "libempty", "notfound", "delete", "unavailable"],
    gallery: [
      { g: L("Onboarding", "Onboarding", "引导"), imgs: ["splash", "onb", "lang"] },
      { g: L("Khám phá & nghe", "Explore & listen", "探索与试听"), imgs: ["home", "category", "search", "downloading", "assign", "success"] },
      { g: L("Tải từ link", "Download from link", "链接下载"), imgs: ["tik", "tikhistory", "dl25", "dl100"] },
      { g: L("Thư viện", "Library", "资料库"), imgs: ["library", "settings", "rate"] },
    ],
    palette: ["#0B0912", "#151328", "#262337", "#807A81", "#F7D774", "#FDF1C4"],
    type: "Plus Jakarta Sans",
    learn: L(
      "Người dùng không đọc thông báo lỗi dài, nhưng họ đọc tiêu đề và bấm nút. Một tiêu đề đúng + một nút đúng giải quyết 80% tình huống lỗi.",
      "Users don't read long error messages, but they read titles and tap buttons. The right title + the right button resolves 80% of error cases.",
      "用户不会读冗长的错误信息，但会看标题、点按钮。一个准确的标题加一个正确的按钮就能解决 80% 的错误场景。"
    ),
  },
  {
    slug: "danno",
    name: "Danno Music",
    year: "2026",
    platform: "iOS · Android",
    model: "Hybrid",
    accent: "#8C5BD7",
    tint: "#1E1E1E",
    category: L("Âm nhạc · Streaming", "Music · Streaming", "音乐 · 流媒体"),
    tagline: L(
      "Ứng dụng nghe nhạc với ngôn ngữ hình ảnh neon, sân khấu và cảm xúc — key visual tạo bằng AI, tinh chỉnh thủ công.",
      "A music app with a neon, on-stage, emotional visual language — AI-generated key visuals, hand-refined.",
      "一款以霓虹、舞台与情绪为视觉语言的音乐应用——AI 生成主视觉并经手工精修。"
    ),
    role: L("UI/UX Designer", "UI/UX Designer", "UI/UX 设计师"),
    scope: L("Định hướng visual, key visual, UI", "Visual direction, key visuals, UI", "视觉方向、主视觉、UI"),
    cover: ["stage", "hero", "singer"],
    hero: "hero",
    coverImage: "cover",
    placeholder: true,
    problem: L(
      "Thị trường app nghe nhạc bão hoà; cần một bản sắc thị giác đủ mạnh để nổi bật trên store chỉ trong một lần lướt.",
      "The music-app market is saturated; it needs a visual identity strong enough to stand out on the store in a single scroll.",
      "音乐应用市场已经饱和，需要足够强烈的视觉识别，在商店中一划而过也能脱颖而出。"
    ),
    goal: L(
      "Xây dựng hệ key visual nhất quán (ánh sáng neon, chân dung nghệ sĩ, vật thể 3D) dùng xuyên suốt app, store và quảng cáo.",
      "Build a consistent key-visual system (neon light, artist portraits, 3D objects) used across the app, store and ads.",
      "建立一套统一的主视觉体系（霓虹光效、艺人肖像、3D 物件），贯穿应用、商店与广告。"
    ),
    did: L(
      "Định hướng moodboard, tạo và tinh chỉnh hình ảnh AI, thiết kế icon gói VIP, đĩa nhạc 3D và UI các màn chính. Màn hình chi tiết sẽ được cập nhật.",
      "Led the moodboard, generated and refined AI imagery, designed VIP gem icons, the 3D disc and core UI. Detailed screens will be added soon.",
      "主导情绪板，生成并精修 AI 图像，设计 VIP 宝石图标、3D 唱片与核心界面。详细界面即将更新。"
    ),
    flow: [
      L("Onboarding", "Onboarding", "引导"),
      L("Chọn gu nhạc", "Pick your taste", "选择喜好"),
      L("Trang chủ", "Home", "首页"),
      L("Trình phát", "Player", "播放器"),
      L("Nâng cấp VIP", "Upgrade to VIP", "升级 VIP"),
    ],
    decisions: [
      {
        img: "art1",
        t: L("Cảm xúc dẫn dắt hình ảnh", "Emotion leads the imagery", "情绪主导视觉"),
        d: L("Mỗi key visual bắt một khoảnh khắc cảm xúc khi nghe nhạc thay vì chỉ trưng bày sản phẩm.", "Each key visual captures an emotional moment of listening instead of just showing the product.", "每张主视觉捕捉聆听音乐时的情绪瞬间，而不只是展示产品。"),
      },
      {
        img: "gem",
        t: L("Icon VIP dạng đá quý 3D", "3D gem VIP icons", "3D 宝石 VIP 图标"),
        d: L("Các cấp VIP được phân biệt bằng màu đá quý, dễ nhận ra ngay cả ở kích thước nhỏ.", "VIP tiers are distinguished by gem colour, recognisable even at small sizes.", "VIP 等级以宝石颜色区分，即使尺寸很小也易于辨认。"),
      },
    ],
    money: [
      {
        t: L("Hybrid: VIP + quảng cáo", "Hybrid: VIP + ads", "混合：VIP + 广告"),
        d: L("Chi tiết chiến lược sẽ được cập nhật cùng màn hình hoàn chỉnh.", "Strategy details will be added alongside the final screens.", "策略细节将随完整界面一起更新。"),
      },
    ],
    states: [],
    gallery: [
      { g: L("Key visual", "Key visuals", "主视觉"), imgs: ["hero", "art1", "stage", "singer", "disc", "gem"] },
    ],
    palette: ["#0A0A0F", "#1E1E1E", "#10202B", "#8C5BD7", "#C8F25A", "#DDD9A5"],
    type: "Inter",
    learn: L(
      "AI giúp đi nhanh ở giai đoạn khám phá, nhưng sự nhất quán vẫn đến từ con mắt của designer: chọn, cắt, chỉnh màu cho từng tấm.",
      "AI speeds up exploration, but consistency still comes from the designer's eye: selecting, cropping and grading every image.",
      "AI 加快了探索阶段，但一致性仍来自设计师的眼光：挑选、裁剪并为每张图调色。"
    ),
  },
];

/* Dự án ngoài mobile — khung chờ bổ sung */
window.BEYOND = [
  {
    icon: "chart",
    t: L("Dashboard phân tích", "Analytics dashboard", "数据分析看板"),
    d: L("Biểu đồ, bộ lọc, bảng dữ liệu dày đặc — thiết kế để người dùng tìm ra insight trong vài giây.", "Charts, filters, dense tables — designed so users find insight in seconds.", "图表、筛选、高密度表格——让用户在几秒内找到洞察。"),
    tags: ["Web", "Data viz", "Design system"],
  },
  {
    icon: "grid",
    t: L("Hệ thống quản lý nội bộ", "Internal management system", "内部管理系统"),
    d: L("Quản lý nhân sự, tài liệu và quy trình duyệt nhiều cấp với phân quyền chi tiết.", "HR, documents and multi-level approval workflows with granular permissions.", "人事、文档与多级审批流程，配合细粒度权限管理。"),
    tags: ["Web", "Workflow", "Roles"],
  },
  {
    icon: "gov",
    t: L("Dự án quản lý nhà nước", "Public-sector platform", "政府管理项目"),
    d: L("Nền tảng cho cơ quan nhà nước: biểu mẫu dài, tra cứu hồ sơ, báo cáo — ưu tiên rõ ràng và dễ tiếp cận.", "Platforms for government agencies: long forms, record lookup, reporting — clarity and accessibility first.", "面向政府机构的平台：长表单、档案查询、报表——清晰与无障碍优先。"),
    tags: ["Gov", "Forms", "Accessibility"],
  },
];

/* ---------- Articles ---------- */
window.ARTICLES = [
  {
    slug: "iaa-without-hurting-ux",
    date: "2026-08-12",
    read: 6,
    tag: L("Kiếm tiền", "Monetisation", "变现"),
    cover: "assets/img/projects/moonly-match/feed.webp",
    title: L(
      "Đặt quảng cáo mà không phá trải nghiệm: 7 nguyên tắc mình dùng cho app IAA",
      "Placing ads without breaking UX: 7 rules I use for IAA apps",
      "不破坏体验地放置广告：我在 IAA 应用中遵循的 7 条原则"
    ),
    excerpt: L(
      "Với app IAA, quảng cáo là nguồn sống. Nhưng mỗi lần bấm nhầm là một lần người dùng mất niềm tin. Đây là những gì mình rút ra sau nhiều app tiện ích.",
      "In IAA apps, ads pay the bills. But every mis-tap costs trust. Here's what I've learned across many utility apps.",
      "在 IAA 应用中，广告是生命线，但每一次误触都在消耗信任。这是我在多款工具类应用中总结的经验。"
    ),
    body: {
      vi: `<p>Khi mới chuyển từ web sang mobile, mình từng nghĩ quảng cáo là ‘kẻ thù’ của thiết kế. Sau vài dự án IAA, mình hiểu ra: quảng cáo là một phần của sản phẩm, và nó cũng cần được <strong>thiết kế</strong> như mọi thành phần khác.</p>
<h2>1. CTA chính luôn nằm trên quảng cáo</h2><p>Ở onboarding, màn chọn ngôn ngữ hay màn xin quyền, nút hành động chính luôn nằm phía trên khối native ad, cách một khoảng đủ lớn. Bấm nhầm vào quảng cáo có thể tăng click ngắn hạn, nhưng làm giảm eCPM và đánh giá app về lâu dài.</p>
<h2>2. Vùng cấm quảng cáo</h2><p>Mỗi app có một ‘khoảnh khắc thiêng liêng’: lúc đang quay video, lúc đang vẽ, lúc đang nghe thử nhạc chuông. Mình đánh dấu những màn này là vùng cấm ngay từ wireframe để cả team thống nhất.</p>
<h2>3. Quảng cáo sau giá trị, không phải trước</h2><p>Màn ‘Áp dụng thành công’ hay ‘Tải xong’ là chỗ đặt quảng cáo tự nhiên nhất: người dùng vừa nhận được điều họ muốn, tâm trạng tích cực và sẵn sàng chờ vài giây.</p>
<h2>4. Rewarded ad phải nói rõ trao đổi</h2><p>‘Xem quảng cáo để mở khoá hình nền này’ — câu chữ phải xuất hiện trước khi quảng cáo chạy. Nếu người dùng thoát giữa chừng, đừng im lặng: hãy nói cho họ biết vì sao chưa mở khoá được.</p>
<h2>5. Thiết kế native ad cùng nhịp với nội dung</h2><p>Khối quảng cáo có bo góc, khoảng cách và kích thước chữ giống card nội dung, nhưng luôn có nhãn ‘Ad’ rõ ràng. Hài hoà, nhưng không đánh lừa.</p>
<h2>6. Banner thu gọn thay vì che nội dung</h2><p>Collapsible banner mở rộng một lần rồi thu nhỏ. Với app camera, nó không bao giờ được che khung ngắm.</p>
<h2>7. Luôn có phương án khi không có quảng cáo</h2><p>Khi không tải được quảng cáo, vị trí đó không được để trống trơn. Mình thường thiết kế sẵn một banner giới thiệu tính năng khác của app.</p>
<p>Quảng cáo tốt là quảng cáo mà người dùng chấp nhận được. Và việc đó, nói cho cùng, là việc của designer.</p>`,
      en: `<p>When I moved from web to mobile, I thought ads were design's enemy. After a few IAA projects I realised: ads are part of the product, and they need to be <strong>designed</strong> like any other component.</p>
<h2>1. The primary CTA always sits above the ad</h2><p>On onboarding, language or permission screens, the main action sits above the native ad with generous spacing. Mis-taps may lift clicks short-term, but they lower eCPM and ratings over time.</p>
<h2>2. Ad-free zones</h2><p>Every app has a ‘sacred moment’: recording a video, drawing, previewing a ringtone. I mark these screens as ad-free from the wireframe stage so the whole team agrees.</p>
<h2>3. Ads after value, not before</h2><p>‘Applied successfully’ or ‘Download complete’ screens are the most natural ad slots: users just got what they wanted and are happy to wait a few seconds.</p>
<h2>4. Rewarded ads must state the exchange</h2><p>‘Watch an ad to unlock this wallpaper’ — the copy must appear before the ad plays. If users quit midway, don't stay silent: tell them why it didn't unlock.</p>
<h2>5. Native ads share the content rhythm</h2><p>Ad blocks use the same radius, spacing and type scale as content cards, but always carry a clear ‘Ad’ label. Harmonious, never deceptive.</p>
<h2>6. Collapsible banners instead of covering content</h2><p>Collapsible banners expand once and then shrink. In camera apps they must never cover the viewfinder.</p>
<h2>7. Always have a no-fill fallback</h2><p>When no ad loads, the slot shouldn't be blank. I design a fallback banner promoting another feature of the app.</p>
<p>A good ad is one users can accept. And that, ultimately, is a designer's job.</p>`,
      zh: `<p>刚从 Web 转到移动端时，我以为广告是设计的敌人。做了几个 IAA 项目后我明白了：广告是产品的一部分，它也需要像其他组件一样被<strong>设计</strong>。</p>
<h2>1. 主 CTA 始终位于广告之上</h2><p>在引导页、语言页或权限页，主操作按钮始终位于原生广告上方，并保持足够间距。误触或许能短期提升点击，但长期会拉低 eCPM 与评分。</p>
<h2>2. 无广告区域</h2><p>每个应用都有“神圣时刻”：录视频、画画、试听铃声。我会在线框阶段就把这些界面标为无广告区，让团队达成共识。</p>
<h2>3. 先给价值，再给广告</h2><p>“应用成功”或“下载完成”页面是最自然的广告位：用户刚得到想要的东西，心情愉快，愿意等几秒。</p>
<h2>4. 激励广告必须说明交换</h2><p>“观看广告解锁此壁纸”——文案必须在广告播放前出现。如果用户中途退出，不要沉默：告诉他们为什么没有解锁。</p>
<h2>5. 原生广告与内容同节奏</h2><p>广告模块与内容卡片使用相同的圆角、间距和字号，但始终带有清晰的“广告”标识。和谐，但不欺骗。</p>
<h2>6. 用可折叠横幅代替遮挡内容</h2><p>可折叠横幅展开一次后收起。在相机类应用中，它绝不能遮挡取景框。</p>
<h2>7. 永远准备无广告时的方案</h2><p>广告加载失败时，位置不应空白。我会预先设计一个推广应用其他功能的横幅。</p>
<p>好的广告，是用户能够接受的广告。而这，归根结底是设计师的工作。</p>`,
    },
  },
  {
    slug: "edge-states-are-the-product",
    date: "2026-07-03",
    read: 5,
    tag: L("UX", "UX", "UX"),
    cover: "assets/img/projects/moonly-match/denied.webp",
    title: L(
      "Trạng thái biên chính là sản phẩm",
      "Edge states are the product",
      "边缘状态就是产品本身"
    ),
    excerpt: L(
      "Một app có 20 màn ‘đẹp’ nhưng có tới 70 trạng thái người dùng thực sự gặp. Đây là cách mình liệt kê và thiết kế chúng.",
      "An app has 20 ‘pretty’ screens but 70 states users actually hit. Here's how I list and design them.",
      "一个应用有 20 个“好看”的界面，却有 70 种用户真正会遇到的状态。这是我列举和设计它们的方法。"
    ),
    body: {
      vi: `<p>Trong dự án Moonly Match, file Figma cuối cùng có <strong>92 màn hình và trạng thái</strong>. Chỉ khoảng 20 trong số đó là những màn ‘happy path’ mà ta hay đưa lên Dribbble.</p>
<h2>Checklist 8 trạng thái mình luôn kiểm tra</h2><ul><li><strong>Trống</strong> — lần đầu dùng, chưa có dữ liệu. Đây là cơ hội hướng dẫn, không phải ngõ cụt.</li><li><strong>Đang tải</strong> — skeleton đúng hình dạng nội dung thật.</li><li><strong>Mất mạng</strong> — nói rõ, cho nút thử lại.</li><li><strong>Lỗi máy chủ</strong> — khác với mất mạng, câu chữ cũng phải khác.</li><li><strong>Thiếu quyền</strong> — lần đầu hỏi, lần hai dẫn vào cài đặt.</li><li><strong>Dữ liệu bị thay đổi ngoài app</strong> — video bị xoá trong thư viện máy.</li><li><strong>Xác nhận phá huỷ</strong> — xoá, bỏ thay đổi chưa lưu.</li><li><strong>Phản hồi nhanh</strong> — toast thành công, toast lỗi.</li></ul>
<h2>Đặt tên file để dev tự tìm được</h2><p>Mình đặt tên theo quy tắc <code>SCR-F03-01--permission-denied</code>: mã luồng, mã màn, hậu tố trạng thái. Dev và QA tra cứu như tra từ điển, không cần hỏi lại.</p>
<h2>Viết câu chữ cho lúc tệ nhất</h2><p>Câu chữ ở trạng thái lỗi quan trọng hơn câu chữ ở trạng thái thành công. Mình theo công thức: <em>chuyện gì đã xảy ra + người dùng có thể làm gì</em>. Không đổ lỗi, không thuật ngữ kỹ thuật.</p>
<p>Người dùng sẽ không nhớ bạn có bao nhiêu màn đẹp. Họ sẽ nhớ app đã đối xử với họ thế nào khi có chuyện không ổn.</p>`,
      en: `<p>In Moonly Match, the final Figma file had <strong>92 screens and states</strong>. Only about 20 were the ‘happy path’ screens we usually post on Dribbble.</p>
<h2>The 8 states I always check</h2><ul><li><strong>Empty</strong> — first use, no data. An onboarding opportunity, not a dead end.</li><li><strong>Loading</strong> — skeletons shaped like the real content.</li><li><strong>Offline</strong> — say it plainly, offer retry.</li><li><strong>Server error</strong> — different from offline, so the copy must differ too.</li><li><strong>Missing permission</strong> — ask first, then guide to settings the second time.</li><li><strong>Data changed outside the app</strong> — a video deleted from the gallery.</li><li><strong>Destructive confirmation</strong> — delete, discard unsaved changes.</li><li><strong>Quick feedback</strong> — success and error toasts.</li></ul>
<h2>Name files so devs can find them</h2><p>I name frames like <code>SCR-F03-01--permission-denied</code>: flow code, screen code, state suffix. Devs and QA look them up like a dictionary — no follow-up questions.</p>
<h2>Write copy for the worst moment</h2><p>Error copy matters more than success copy. My formula: <em>what happened + what the user can do</em>. No blame, no jargon.</p>
<p>Users won't remember how many beautiful screens you had. They'll remember how the app treated them when things went wrong.</p>`,
      zh: `<p>在 Moonly Match 项目中，最终的 Figma 文件有 <strong>92 个界面与状态</strong>，其中只有约 20 个是我们常发到 Dribbble 上的“理想路径”界面。</p>
<h2>我每次都会检查的 8 种状态</h2><ul><li><strong>空状态</strong>——首次使用、没有数据。这是引导的机会，而不是死胡同。</li><li><strong>加载中</strong>——骨架屏要与真实内容形状一致。</li><li><strong>断网</strong>——直说，并提供重试。</li><li><strong>服务器错误</strong>——与断网不同，文案也必须不同。</li><li><strong>缺少权限</strong>——第一次请求，第二次引导去设置。</li><li><strong>应用外数据变化</strong>——视频在相册中被删除。</li><li><strong>破坏性确认</strong>——删除、放弃未保存的修改。</li><li><strong>即时反馈</strong>——成功与失败提示。</li></ul>
<h2>命名让开发自己找到</h2><p>我用 <code>SCR-F03-01--permission-denied</code> 的规则命名：流程编号、界面编号、状态后缀。开发和测试像查字典一样查找，无需反复询问。</p>
<h2>为最糟糕的时刻写文案</h2><p>错误文案比成功文案更重要。我的公式：<em>发生了什么 + 用户可以做什么</em>。不指责，不用术语。</p>
<p>用户不会记得你有多少漂亮的界面，他们会记得出问题时应用是如何对待他们的。</p>`,
    },
  },
  {
    slug: "honest-paywalls",
    date: "2026-05-20",
    read: 5,
    tag: L("Kiếm tiền", "Monetisation", "变现"),
    cover: "assets/img/projects/dramazone/vip.webp",
    title: L(
      "Paywall trung thực bán được nhiều hơn",
      "Honest paywalls convert better",
      "诚实的付费墙转化更高"
    ),
    excerpt: L(
      "Từ DramaZone: vì sao nút đóng dễ thấy, giá rõ ràng và nhiều lựa chọn mở khoá lại giúp người dùng trả tiền thoải mái hơn.",
      "Lessons from DramaZone: why a visible close button, clear pricing and multiple unlock paths help users pay more willingly.",
      "来自 DramaZone 的经验：为什么醒目的关闭按钮、清晰的价格与多种解锁方式能让用户更乐意付费。"
    ),
    body: {
      vi: `<p>Rất dễ để thiết kế một paywall ‘hiệu quả’ trong tuần đầu: nút đóng mờ, giá tuần ẩn trong chữ nhỏ, dùng thử tự gia hạn. Và cũng rất dễ để nhận một loạt đánh giá 1 sao ngay sau đó.</p>
<h2>Ba điều mình không thoả hiệp</h2><ul><li><strong>Nút đóng thấy được</strong> — ngay từ giây đầu tiên.</li><li><strong>Giá và chu kỳ rõ ràng</strong> — ‘Tự gia hạn · Huỷ bất cứ lúc nào’ nằm ngay dưới CTA, không phải ở cuối trang.</li><li><strong>Đếm ngược thật</strong> — nếu ưu đãi hết hạn thì nó phải hết hạn thật.</li></ul>
<h2>Cho người dùng nhiều con đường</h2><p>Ở DramaZone, khi hết tập miễn phí, người dùng có ba lựa chọn: VIP, xu, hoặc quảng cáo. Nhiều người lo rằng có lối đi miễn phí sẽ làm giảm doanh thu IAP. Thực tế, người dùng xem quảng cáo hôm nay là người mua VIP tuần sau — vì họ đã kịp yêu bộ phim.</p>
<h2>Xu là ‘ngôn ngữ chung’</h2><p>Xu biến mọi hành vi (điểm danh, xem quảng cáo, làm nhiệm vụ) thành một đơn vị giá trị. Người dùng học được rằng một tập phim ‘đáng’ 10 xu — và từ đó, gói VIP trở nên hợp lý.</p>
<p>Một paywall tốt không ép người dùng. Nó giúp họ hiểu giá trị, rồi để họ tự quyết định.</p>`,
      en: `<p>It's easy to design a paywall that ‘works’ in week one: faded close button, weekly price hidden in fine print, auto-renewing trial. It's just as easy to collect a wave of one-star reviews right after.</p>
<h2>Three things I don't compromise on</h2><ul><li><strong>A visible close button</strong> — from the very first second.</li><li><strong>Clear price and period</strong> — ‘Auto-renew · Cancel anytime’ right under the CTA, not at the bottom of the page.</li><li><strong>Real countdowns</strong> — if an offer expires, it really expires.</li></ul>
<h2>Give users several paths</h2><p>In DramaZone, when free episodes run out, users can choose VIP, coins or an ad. Many worry a free path cannibalises IAP. In practice, today's ad-watcher is next week's VIP buyer — because by then they've fallen for the show.</p>
<h2>Coins as a shared language</h2><p>Coins turn every behaviour (check-ins, ads, tasks) into one unit of value. Users learn an episode is ‘worth’ 10 coins — and suddenly the VIP plan makes sense.</p>
<p>A good paywall doesn't force. It helps users understand value, then lets them decide.</p>`,
      zh: `<p>设计一个第一周“有效”的付费墙很容易：淡化关闭按钮、把周价格藏在小字里、自动续订试用。同样容易的是，紧接着收到一大波一星差评。</p>
<h2>我不妥协的三件事</h2><ul><li><strong>可见的关闭按钮</strong>——从第一秒开始。</li><li><strong>清晰的价格与周期</strong>——“自动续订 · 随时取消”就在 CTA 下方，而不是页面底部。</li><li><strong>真实的倒计时</strong>——优惠到期就必须真的到期。</li></ul>
<h2>给用户多条路</h2><p>在 DramaZone 中，免费剧集结束后，用户可以选择 VIP、金币或看广告。很多人担心免费路径会蚕食 IAP。实际上，今天看广告的人就是下周买 VIP 的人——因为他们已经爱上了这部剧。</p>
<h2>金币是通用语言</h2><p>金币把每种行为（签到、看广告、做任务）转化为同一种价值单位。用户会了解到一集“值” 10 金币——于是 VIP 套餐就显得合理了。</p>
<p>好的付费墙不强迫用户。它帮助用户理解价值，然后让他们自己决定。</p>`,
    },
  },
  {
    slug: "designing-for-density",
    date: "2026-03-08",
    read: 6,
    tag: L("Hệ thống", "Systems", "系统"),
    cover: "",
    title: L(
      "Từ app mobile đến dashboard nhà nước: thiết kế cho mật độ",
      "From mobile apps to government dashboards: designing for density",
      "从移动应用到政府看板：为高密度而设计"
    ),
    excerpt: L(
      "Mobile dạy mình tiết chế, hệ thống quản lý dạy mình tổ chức. Đây là những gì hai thế giới học được từ nhau.",
      "Mobile taught me restraint; management systems taught me structure. Here's what each world learns from the other.",
      "移动端教会我克制，管理系统教会我结构。这是两个世界可以相互借鉴的地方。"
    ),
    body: {
      vi: `<p>Chuyển qua lại giữa app giải trí và hệ thống quản lý nhà nước giống như đổi giữa viết thơ và viết luật. Nhưng cả hai đều cần sự rõ ràng.</p>
<h2>Điều mobile dạy dashboard</h2><ul><li><strong>Một màn, một việc chính</strong> — kể cả khi màn hình có 40 cột dữ liệu, vẫn phải có một hành động nổi bật nhất.</li><li><strong>Trạng thái rỗng là hướng dẫn</strong> — bảng chưa có dữ liệu nên chỉ người dùng cách thêm dữ liệu đầu tiên.</li><li><strong>Phản hồi tức thì</strong> — toast, skeleton, trạng thái nút đang xử lý.</li></ul>
<h2>Điều dashboard dạy mobile</h2><ul><li><strong>Quy ước đặt tên & phân cấp</strong> — hệ thống lớn buộc mình đặt tên component có kỷ luật.</li><li><strong>Phân quyền</strong> — cùng một màn, mỗi vai trò thấy khác nhau; thiết kế phải thể hiện được điều đó.</li><li><strong>Khả năng tiếp cận</strong> — người dùng hệ thống nhà nước đa dạng độ tuổi, cỡ chữ và độ tương phản không thể chỉ ‘đẹp’.</li></ul>
<h2>Mẹo cho bảng dữ liệu dày</h2><p>Căn phải số, căn trái chữ. Cố định cột đầu và hàng tiêu đề. Dùng màu chỉ cho trạng thái, không cho trang trí. Và luôn cho phép người dùng tự chọn cột hiển thị.</p>
<p>Dù là app hay dashboard, mục tiêu vẫn là một: giúp người dùng làm xong việc của họ nhanh hơn hôm qua.</p>`,
      en: `<p>Switching between entertainment apps and public-sector systems feels like switching between poetry and law. Yet both demand clarity.</p>
<h2>What mobile teaches dashboards</h2><ul><li><strong>One screen, one main job</strong> — even with 40 data columns, one action must stand out.</li><li><strong>Empty states are guidance</strong> — an empty table should show how to add the first record.</li><li><strong>Instant feedback</strong> — toasts, skeletons, busy button states.</li></ul>
<h2>What dashboards teach mobile</h2><ul><li><strong>Naming & hierarchy</strong> — large systems force disciplined component naming.</li><li><strong>Permissions</strong> — the same screen looks different per role; the design must show that.</li><li><strong>Accessibility</strong> — government users span all ages; type size and contrast can't just be ‘pretty’.</li></ul>
<h2>Tips for dense tables</h2><p>Right-align numbers, left-align text. Freeze the first column and header row. Use colour for status, not decoration. And always let users choose which columns to show.</p>
<p>App or dashboard, the goal is the same: help people finish their work faster than yesterday.</p>`,
      zh: `<p>在娱乐应用与政府系统之间切换，就像在写诗与写法规之间切换。但两者都要求清晰。</p>
<h2>移动端教给看板的</h2><ul><li><strong>一屏一主任务</strong>——即使有 40 列数据，也必须有一个最突出的操作。</li><li><strong>空状态即引导</strong>——空表格应告诉用户如何添加第一条数据。</li><li><strong>即时反馈</strong>——提示、骨架屏、按钮处理中状态。</li></ul>
<h2>看板教给移动端的</h2><ul><li><strong>命名与层级</strong>——大型系统迫使我以严谨的方式命名组件。</li><li><strong>权限</strong>——同一界面不同角色看到不同内容，设计必须体现这一点。</li><li><strong>无障碍</strong>——政府系统用户年龄跨度大，字号与对比度不能只追求“好看”。</li></ul>
<h2>高密度表格小技巧</h2><p>数字右对齐，文字左对齐。冻结首列与表头。颜色只用于状态而非装饰。并始终允许用户自选显示列。</p>
<p>无论应用还是看板，目标都一样：帮助用户比昨天更快地完成工作。</p>`,
    },
  },
  {
    slug: "handoff-notes",
    date: "2026-01-15",
    read: 4,
    tag: L("Quy trình", "Process", "流程"),
    cover: "assets/img/projects/dynamic-island/spec.webp",
    title: L(
      "Ghi chú bàn giao: cách mình ‘nói chuyện’ với dev trong Figma",
      "Handoff notes: how I ‘talk’ to developers in Figma",
      "交付说明：我如何在 Figma 中与开发“对话”"
    ),
    excerpt: L(
      "Một thẻ ghi chú nhỏ cạnh màn hình — có ngày, có hành vi, có logic — tiết kiệm hàng giờ họp.",
      "A small note card next to each screen — dated, with behaviour and logic — saves hours of meetings.",
      "每个界面旁的一张小说明卡——标注日期、交互与逻辑——能省下数小时会议。"
    ),
    body: {
      vi: `<p>Nếu bạn mở file Figma của mình, bạn sẽ thấy rất nhiều thẻ viền cam có chữ ‘New’ kèm ngày tháng nằm cạnh màn hình. Đó là cách mình bàn giao.</p>
<h2>Một thẻ ghi chú tốt gồm</h2><ul><li><strong>Ngày cập nhật</strong> — dev biết đâu là thay đổi mới so với lần build trước.</li><li><strong>Hành vi</strong> — ‘Tự động cuộn lên đầu khi…’, ‘Delay 2s rồi mới hiện…’.</li><li><strong>Điều kiện hiển thị</strong> — ‘Chỉ hiện khi người dùng chưa cấp đủ quyền’, ‘Thiết bị không hỗ trợ dual camera thì hiện banner tính năng’.</li><li><strong>Liên kết luồng</strong> — đường nối đến màn trước/sau.</li></ul>
<h2>Viết bằng ngôn ngữ của dev</h2><p>Thay vì ‘nút này nổi bật hơn’, mình viết ‘disable khi chưa có thay đổi, enable khi có ít nhất một trường thay đổi’. Câu điều kiện rõ ràng giảm hiểu nhầm gần như hoàn toàn.</p>
<h2>Ghi chú cũng cần dọn dẹp</h2><p>Sau mỗi bản phát hành, mình gom thẻ cũ vào một trang ‘Changelog’. File làm việc luôn chỉ giữ ghi chú còn hiệu lực.</p>
<p>Thiết kế không kết thúc ở Figma. Nó kết thúc khi người dùng cầm được sản phẩm đúng như mình hình dung.</p>`,
      en: `<p>Open any of my Figma files and you'll see orange-bordered cards labelled ‘New’ with a date, sitting next to screens. That's how I hand off.</p>
<h2>A good note card contains</h2><ul><li><strong>Update date</strong> — devs know what changed since the last build.</li><li><strong>Behaviour</strong> — ‘Auto-scroll to top when…’, ‘Delay 2s before showing…’.</li><li><strong>Display conditions</strong> — ‘Only show when permissions are incomplete’, ‘If the device lacks dual camera, show the feature banner’.</li><li><strong>Flow links</strong> — connectors to the previous/next screen.</li></ul>
<h2>Write in the developer's language</h2><p>Instead of ‘make this button stand out’, I write ‘disabled until a field changes; enabled once at least one field differs’. Clear conditions nearly eliminate misunderstandings.</p>
<h2>Notes need housekeeping too</h2><p>After each release I move old cards into a ‘Changelog’ page. The working file only keeps notes that are still valid.</p>
<p>Design doesn't end in Figma. It ends when users hold the product exactly as I imagined it.</p>`,
      zh: `<p>打开我的任何一个 Figma 文件，你都会看到界面旁边有许多橙色边框、标着“New”和日期的卡片。这就是我的交付方式。</p>
<h2>一张好的说明卡包含</h2><ul><li><strong>更新日期</strong>——开发知道相比上次构建改了什么。</li><li><strong>交互行为</strong>——“当……时自动滚动到顶部”“延迟 2 秒后显示……”。</li><li><strong>显示条件</strong>——“仅在权限未完全授予时显示”“设备不支持双摄时显示功能横幅”。</li><li><strong>流程连线</strong>——与前后界面的连接。</li></ul>
<h2>用开发的语言写</h2><p>与其写“让这个按钮更突出”，我会写“无改动时禁用，至少一个字段变化后启用”。清晰的条件几乎消除了误解。</p>
<h2>说明也需要整理</h2><p>每次发版后，我会把旧卡片移到“更新日志”页面，工作文件只保留仍然有效的说明。</p>
<p>设计不止于 Figma，而是在用户拿到与我设想一致的产品时才算完成。</p>`,
    },
  },
];
