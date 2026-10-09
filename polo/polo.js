/* =========================================================
   Chang.cee — bản 2 (Polo-inspired): render, i18n, theme, motion
   ========================================================= */
(() => {
  const BASE = "../"; // ảnh & nội dung dùng chung ở thư mục gốc
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} },
  };
  const PAGE = document.body.dataset.page;
  const params = new URLSearchParams(location.search);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGsap = !!(window.gsap && window.ScrollTrigger) && !reduced;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (hasGsap) { gsap.registerPlugin(ScrollTrigger); document.documentElement.classList.add("anim"); }

  /* ---------- i18n ---------- */
  const LANGS = [{ id: "vi", label: "VI" }, { id: "en", label: "EN" }, { id: "zh", label: "中" }];
  const detect = () => {
    const q = params.get("lang");
    if (LANGS.some((l) => l.id === q)) return q;
    const s = store.get("lang");
    if (LANGS.some((l) => l.id === s)) return s;
    const n = (navigator.language || "en").toLowerCase();
    return n.startsWith("vi") ? "vi" : n.startsWith("zh") ? "zh" : "en";
  };
  let lang = detect();
  const t = (k) => (I18N[k] && (I18N[k][lang] ?? I18N[k].en)) || k;
  const tx = (o) => (o == null ? "" : typeof o === "string" ? o : o[lang] ?? o.en ?? "");

  /* ---------- theme ---------- */
  const root = document.documentElement;
  const currentTheme = () => root.dataset.theme || "dark";

  /* ---------- helpers ---------- */
  const img = (slug, n) => `${BASE}assets/img/projects/${slug}/${n}.webp`;
  const asset = (p) => (p ? BASE + p : "");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const pad2 = (n) => String(n).padStart(2, "0");
  const lum = (hex) => {
    const n = hex.replace("#", "");
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const tint = (p) => `--tint:${p.tint}`;
  const phone = (src, cls = "", alt = "", eager = false) =>
    `<div class="phone ${cls}"><div class="phone__screen"><img src="${src}" alt="${esc(alt)}" loading="${eager ? "eager" : "lazy"}" decoding="async"/></div></div>`;
  const artCls = (p) => (p.slug === "danno" ? "phone--art" : "");
  const fmtDate = (d) =>
    new Date(d + "T00:00:00").toLocaleDateString(lang === "zh" ? "zh-CN" : lang === "vi" ? "vi-VN" : "en-GB", { day: "2-digit", month: "short", year: "numeric" });

  const svg = (d, w = 1.8) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const I = {
    arrow: svg('<path d="M7 17 17 7M8 7h9v9"/>', 2),
    right: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    back: svg('<path d="M19 12H5M11 18l-6-6 6-6"/>'),
    sun: `<span class="sun">${svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>')}</span>`,
    moon: `<span class="moon">${svg('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>')}</span>`,
    plus: svg('<path d="M12 5v14M5 12h14"/>'),
    check: svg('<path d="m5 12 5 5 9-10"/>', 2.4),
    x: svg('<path d="M6 6l12 12M18 6 6 18"/>', 2.4),
    mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
    behance: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.2 11.4c.9-.4 1.5-1.2 1.5-2.4C9.7 6.8 8.2 6 6.2 6H1v12h5.4c2.1 0 4.1-1 4.1-3.4 0-1.5-.7-2.7-2.3-3.2ZM3.4 8h2.3c.9 0 1.6.3 1.6 1.3S6.7 10.6 5.8 10.6H3.4V8Zm2.5 8H3.4v-3.2h2.6c1 0 1.8.4 1.8 1.6 0 1.2-.8 1.6-1.9 1.6ZM20 9H15V7.6h5V9Zm3.7 5.8c0-2.8-1.6-5-4.6-5-2.9 0-4.8 2.1-4.8 4.9 0 2.9 1.8 4.9 4.8 4.9 2.2 0 3.7-1 4.4-3.2h-2.3c-.2.7-1.1 1.1-2 1.1-1.6 0-2.4-.9-2.4-2.4h6.9v-.3Zm-6.9-1c.1-1.2.9-2 2.2-2 1.4 0 2 .8 2.1 2h-4.3Z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8.5V6.8c0-.8.5-1 .9-1h2.4V2.1L14 2c-3.6 0-4.4 2.7-4.4 4.4v2.1H7.5v3.8h2.1V22H14v-9.7h3l.4-3.8H14Z"/></svg>`,
    step: [
      svg('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
      svg('<circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 6h5a4 4 0 0 1 4 4v5"/>'),
      svg('<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>'),
      svg('<path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>'),
      svg('<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>'),
    ],
    service: {
      phone: svg('<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>'),
      chart: svg('<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 15l3-3 3 2 4-5"/>'),
      layers: svg('<path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>'),
      spark: svg('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>'),
    },
    money: [
      svg('<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 15h18M7 18h4"/>'),
      svg('<circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .9-3 2s1.3 1.7 3 2 3 .9 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v2M12 16v2"/>'),
      svg('<path d="M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>'),
    ],
  };
  const SOON_SVG = {
    chart: `<svg viewBox="0 0 320 200" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="14" y="14" width="60" height="172" rx="6" opacity=".5"/><rect x="88" y="14" width="66" height="40" rx="6"/><rect x="164" y="14" width="66" height="40" rx="6"/><rect x="240" y="14" width="66" height="40" rx="6"/><path d="M96 150 130 118l28 16 34-44 30 22 40-36 40 20" stroke-width="2.2"/></svg>`,
    grid: `<svg viewBox="0 0 320 200" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="14" y="14" width="292" height="26" rx="6"/><path d="M14 60h292M14 84h292M14 108h292M14 132h292M14 156h292" opacity=".5"/><path d="M90 48v124M190 48v124M250 48v124" opacity=".35"/></svg>`,
    gov: `<svg viewBox="0 0 320 200" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="40" y="36" width="110" height="22" rx="5"/><rect x="170" y="36" width="110" height="22" rx="5"/><rect x="40" y="72" width="240" height="22" rx="5"/><rect x="40" y="108" width="150" height="22" rx="5"/><rect x="204" y="108" width="76" height="22" rx="5"/><rect x="190" y="150" width="90" height="26" rx="13" fill="currentColor" opacity=".3"/></svg>`,
  };

  /* ---------- shell ---------- */
  const navLinks = [
    { href: "index.html#work", k: "nav.work" },
    { href: "index.html#about", k: "nav.about" },
    { href: "index.html#process", k: "nav.process" },
    { href: "writing.html", k: "nav.writing", id: "writing" },
    { href: "index.html#contact", k: "nav.contact" },
  ];
  const langSwitch = () => `<div class="lang" role="group" aria-label="Language">${LANGS.map((l) => `<button type="button" data-lang="${l.id}" aria-pressed="${l.id === lang}">${l.label}</button>`).join("")}</div>`;
  const renderNav = () => `
    <div class="nav__bar">
      <a href="index.html" class="logo"><span class="logo__mark">C</span>Chang.cee</a>
      <nav class="nav__links" aria-label="Primary">
        ${navLinks.map((l) => `<a href="${l.href}" class="${(PAGE === "writing" || PAGE === "article") && l.id === "writing" ? "is-active" : ""}">${t(l.k)}</a>`).join("")}
      </nav>
      <div class="nav__tools">
        ${langSwitch()}
        <button type="button" class="icon-btn theme-btn" aria-label="${esc(t("theme.toggle"))}">${I.sun}${I.moon}</button>
        <button type="button" class="icon-btn menu-btn" aria-label="Menu" aria-expanded="false"><span></span></button>
      </div>
    </div>
    <div class="nav__drop">
      ${navLinks.map((l) => `<a href="${l.href}">${t(l.k)}</a>`).join("")}
      ${langSwitch()}
    </div>`;
  const renderFooter = () => `
    <div class="wrap">
      <div class="footer__grid">
        <span>© ${new Date().getFullYear()} ${SITE.name} · ${SITE.nickname}</span>
        <div class="footer__links">
          <a href="mailto:${SITE.email}">${SITE.email}</a>
          <a href="${BASE}index.html">${t("p.version")}</a>
          <a href="#top" data-top>${t("footer.top")} ↑</a>
        </div>
      </div>
    </div>`;

  const head = (chip, title, sub = "") => `
    <div class="head">
      <span class="chip" data-reveal><i></i>${chip}</span>
      ${title ? `<h2 class="h2" data-reveal>${title}</h2>` : ""}
      ${sub ? `<p data-reveal>${sub}</p>` : ""}
    </div>`;

  /* ---------- pieces ---------- */
  const projCard = (p, i, big = false) => `
    <a class="pcard ${big ? "pcard--big" : ""}" href="project.html?p=${p.slug}" style="${tint(p)}" data-reveal data-spot>
      <div class="pcard__frame">
        <div class="pcard__media" data-media>${p.cover.map((c) => phone(img(p.slug, c), artCls(p), p.name, i < 2)).join("")}</div>
        <span class="pcard__go">${I.arrow}</span>
      </div>
      <div class="pcard__body">
        <div><h3>${esc(p.name)}</h3><p>${tx(p.category)}</p></div>
        <div class="pcard__tags"><span class="tag">${p.model}</span><span class="tag">${p.platform}</span><span class="tag">${p.year}</span></div>
      </div>
    </a>`;

  const postCard = (a) => `
    <a class="post" href="article.html?a=${a.slug}" data-reveal>
      <div class="post__img ${a.cover ? "" : "post__img--blank"}">${a.cover ? `<img src="${asset(a.cover)}" alt="" loading="lazy"/>` : "density."}</div>
      <div class="post__body">
        <div class="post__meta"><span class="tag" style="padding:4px 8px;font-size:12px">${tx(a.tag)}</span><span>${fmtDate(a.date)}</span><span>· ${a.read} ${t("writing.min")}</span></div>
        <h3>${tx(a.title)}</h3>
        <p>${tx(a.excerpt)}</p>
      </div>
    </a>`;

  const social = (href, icon, label) =>
    href ? `<a class="icon-btn" href="${href}" target="_blank" rel="noopener" aria-label="${label}">${icon}</a>` : `<span class="icon-btn" aria-disabled="true" title="${label} · ${esc(t("contact.soon"))}" style="opacity:.35">${icon}</span>`;

  const renderCTA = () => `
    <section class="section" id="contact">
      <div class="wrap">
        <div class="card cta" data-reveal data-spot>
          <span class="spot"></span>
          <span class="chip"><span class="dot"></span>${t("hero.badge")}</span>
          <h2 class="h2">${t("p.cta.title")}</h2>
          <p>${t("p.cta.sub")}</p>
          <a class="cta__mail" href="mailto:${SITE.email}">${SITE.email}</a>
          <div class="cta__row">
            <a class="btn btn--light" href="mailto:${SITE.email}" data-magnetic>${t("p.cta.contact")}</a>
            <button type="button" class="btn btn--dark" data-copy data-magnetic><span>${t("contact.copy")}</span></button>
          </div>
        </div>
      </div>
    </section>`;

  /* ---------- home ---------- */
  const nameWords = () => {
    const w = (s, dim) => `<span class="word ${dim ? "dim" : ""}">${[...s].map((c) => `<span class="char">${c}</span>`).join("")}</span>`;
    return `${w("Vũ")}${w("Thị")}${w("Mai", true)}${w("Trang", true)}`;
  };

  const pageHome = () => `
    <section class="hero" id="top">
      <div class="wrap">
        <div class="hero__inner">
          <span class="chip" data-reveal><i></i>${t("p.hero.chip")}</span>
          <h1 class="hero__name" aria-label="${esc(SITE.name)}">${nameWords()}<a class="hero__arrow" href="#contact" aria-label="${esc(t("nav.contact"))}">${I.arrow}</a></h1>
          <p class="hero__lead" data-reveal>${t("p.hero.lead")}</p>
          <div class="hero__ctas" data-reveal>
            <a class="btn btn--dark" href="#work" data-magnetic>${t("p.cta.projects")}</a>
            <a class="btn btn--light" href="#contact" data-magnetic>${t("p.cta.contact")}</a>
          </div>
        </div>
        <div class="showcase">${PROJECTS.slice(0, 2).map((p, i) => projCard(p, i)).join("")}</div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="wrap">
        ${head(t("p.about.chip"), t("p.about.title"), t("p.about.sub"))}
        <div class="about">
          <div class="card card--pad" data-reveal data-spot>
            <span class="spot"></span>
            <div class="about__photo" data-avatar>
              <span class="about__mono">Chang.cee</span>
              <span class="about__avail"><i></i>${t("hero.badge")}</span>
            </div>
            <div class="about__id">
              <div><h4>${t("p.about.hello")}</h4><p>${t("p.about.role")}</p></div>
              <div class="socials">${social(SITE.behance, I.behance, "Behance")}${social(SITE.facebook, I.facebook, "Facebook")}<a class="icon-btn" href="mailto:${SITE.email}" aria-label="Email">${I.mail}</a></div>
            </div>
          </div>
          <div class="about__grid">
            <div class="card card--pad about__text" data-reveal data-spot>
              <span class="spot"></span>
              <p>${t("about.p1")}</p><p>${t("about.p2")}</p><p>${t("about.p3")}</p>
            </div>
            <div class="card card--pad" data-reveal data-spot style="display:flex;flex-direction:column;gap:18px">
              <span class="spot"></span>
              <div class="tags">${ABOUT.skills.map((s) => `<span class="tag">${tx(s)}</span>`).join("")}</div>
              <div class="tags">${ABOUT.tools.map((s) => `<span class="tag" style="color:var(--muted)">${s}</span>`).join("")}</div>
            </div>
          </div>
          <div class="card card--pad" data-reveal data-spot>
            <span class="spot"></span>
            <div class="table">${ABOUT.journey.map((j) => `<div class="table__row"><span>${tx(j.title)}</span><span>${tx(j.body)}</span><span>${tx(j.year)}</span></div>`).join("")}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="process">
      <div class="wrap">
        ${head(t("p.process.chip"), t("p.process.title"), t("p.process.sub"))}
        <div class="steps">
          ${ABOUT.process.map((s, i) => `
            <div class="card card--pad step" data-reveal data-spot>
              <span class="spot"></span>
              <div class="step__top"><span class="step__ico">${I.step[i % I.step.length]}</span><span class="step__n">${i + 1}</span></div>
              <h3>${tx(s.t)}</h3>
              <p>${tx(s.d)}</p>
              <span class="tag">${t("p.process.step")} ${i + 1}</span>
            </div>`).join("")}
        </div>
        <div class="with" data-reveal>
          <span class="chip"><i></i>${t("p.process.with")}</span>
          <div class="hero__ctas" style="justify-content:center">
            <a class="btn btn--dark" href="#work">${t("p.cta.projects")}</a>
            <a class="btn btn--light" href="#contact">${t("p.cta.contact")}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="services">
      <div class="wrap">
        ${head(t("p.services.chip"), t("p.services.title"), t("p.services.sub"))}
        <div class="services">
          ${POLO.services.map((s) => `
            <div class="card card--pad service" data-reveal data-spot>
              <span class="spot"></span>
              <span class="step__ico">${I.service[s.icon]}</span>
              <h3>${tx(s.t)}</h3><p>${tx(s.d)}</p>
            </div>`).join("")}
        </div>
      </div>
      <div class="marquees" data-reveal>
        <div class="mq" data-mq="1">${[...POLO.marqueeA, ...POLO.marqueeA, ...POLO.marqueeA].map((x) => `<span class="tag">${x}</span>`).join("")}</div>
        <div class="mq" data-mq="-1">${[...POLO.marqueeB, ...POLO.marqueeB, ...POLO.marqueeB].map((x) => `<span class="tag">${x}</span>`).join("")}</div>
      </div>
    </section>

    <section class="section" id="work">
      <div class="wrap">
        ${head(t("p.work.chip"), t("p.work.title"), t("p.work.sub"))}
        <div class="works">${PROJECTS.map((p, i) => projCard(p, i, i === 0)).join("")}</div>
        <div class="soon">
          ${BEYOND.map((b) => `
            <div class="card card--pad" data-reveal data-spot>
              <span class="spot"></span>
              <div class="soon__vis">${SOON_SVG[b.icon]}<span class="chip">${t("p.work.soon")}</span></div>
              <h3>${tx(b.t)}</h3><p>${tx(b.d)}</p>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        ${head(t("p.why.chip"), t("p.why.title"))}
        <div class="why">
          <div class="card card--pad" data-reveal data-spot>
            <span class="spot"></span>
            <h3>${t("p.why.me")}</h3>
            ${POLO.why.map((w) => `<div class="why__row"><span class="why__mark">${I.check}</span><div><b>${tx(w.me)}</b><p>${tx(w.meD)}</p></div></div>`).join("")}
          </div>
          <div class="card card--pad is-other" data-reveal>
            <h3>${t("p.why.other")}</h3>
            ${POLO.why.map((w) => `<div class="why__row"><span class="why__mark">${I.x}</span><div><b>${tx(w.other)}</b><p>${tx(w.otherD)}</p></div></div>`).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        ${head(t("p.stats.chip"), t("p.stats.title"))}
        <div class="stats">
          ${POLO.stats.map((s) => `<div class="card card--pad stat" data-reveal data-spot><span class="spot"></span><b><span data-count="${s.n}">${s.n}</span>${s.s}</b><span>${tx(s.l)}</span></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section" id="writing">
      <div class="wrap">
        ${head(t("p.writing.chip"), t("p.writing.title"), t("writing.sub"))}
        <div class="posts">${ARTICLES.slice(0, 3).map(postCard).join("")}</div>
        <div class="with" data-reveal><a class="btn btn--dark" href="writing.html">${t("writing.all")}</a></div>
      </div>
    </section>

    <section class="section" id="faq">
      <div class="wrap">
        ${head(t("p.faq.chip"), t("p.faq.title"), t("p.faq.sub"))}
        <div class="faq">
          ${POLO.faq.map((f, i) => `
            <div class="faq__item ${i === 0 ? "is-open" : ""}" data-reveal>
              <button type="button" class="faq__q" aria-expanded="${i === 0}"><span>${tx(f.q)}</span><span class="faq__plus">${I.plus.replace("<svg", '<svg width="16" height="16"')}</span></button>
              <div class="faq__a"><div><p>${tx(f.a)}</p></div></div>
            </div>`).join("")}
        </div>
      </div>
    </section>
    ${renderCTA()}`;

  /* ---------- case study ---------- */
  const pageProject = () => {
    const idx = Math.max(0, PROJECTS.findIndex((x) => x.slug === params.get("p")));
    const p = PROJECTS[idx];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    document.title = `${p.name} — Chang.cee`;
    const heroImgs = [p.cover[0], p.hero, p.cover[2]];
    const hasSpec = ["ar-drawing", "dramazone", "dynamic-island", "gps-camera"].includes(p.slug);
    const total = p.gallery.reduce((n, g) => n + g.imgs.length, 0);
    return `
    <section class="cs-hero" style="${tint(p)}">
      <div class="wrap">
        <div class="hero__inner">
          <a class="crumb" href="index.html#work">${I.back.replace("<svg", '<svg width="16" height="16"')} ${t("cs.back")}</a>
          <span class="chip" data-reveal><i></i>${tx(p.category)}</span>
          <h1 class="cs-title" data-reveal>${esc(p.name)}</h1>
          <p class="hero__lead" data-reveal>${tx(p.tagline)}</p>
          <div class="cs-meta" data-reveal>
            <span class="tag">${t("cs.role")}<b>${tx(p.role)}</b></span>
            <span class="tag">${t("cs.platform")}<b>${p.platform}</b></span>
            <span class="tag">${t("cs.model")}<b>${p.model}</b></span>
            <span class="tag">${t("cs.year")}<b>${p.year}</b></span>
          </div>
        </div>
        <div class="pcard pcard--big cs-cover" data-reveal>
          <div class="pcard__frame"><div class="pcard__media" data-media>${heroImgs.map((h) => phone(img(p.slug, h), artCls(p), p.name, true)).join("")}</div></div>
          <div class="pcard__body"><div><h3>${t("cs.scope")}</h3><p>${tx(p.scope)}</p></div></div>
        </div>
      </div>
    </section>

    <div style="${tint(p)}">
      <section class="section"><div class="wrap">
        ${head(t("cs.ux"), tx({ vi: "Bài toán & cách giải", en: "The problem & the approach", zh: "问题与解法" }))}
        <div class="trio">
          <div class="card card--pad" data-reveal data-spot><span class="spot"></span><span class="step__ico">?</span><h3>${t("cs.problem")}</h3><p>${tx(p.problem)}</p></div>
          <div class="card card--pad" data-reveal data-spot><span class="spot"></span><span class="step__ico">→</span><h3>${t("cs.goal")}</h3><p>${tx(p.goal)}</p></div>
          <div class="card card--pad" data-reveal data-spot><span class="spot"></span><span class="step__ico">✦</span><h3>${t("cs.myrole")}</h3><p>${tx(p.did)}</p></div>
        </div>
      </div></section>

      <section class="section"><div class="wrap">
        ${head(t("cs.flow"), tx({ vi: "Từ lúc mở app đến giá trị", en: "From launch to value", zh: "从启动到价值" }))}
        <div class="flow" data-flowwrap>${p.flow.map((f, i) => `<span class="tag" data-flow><em>${pad2(i + 1)}</em>${tx(f)}</span>`).join(`<span class="flow__arrow" data-flow>→</span>`)}</div>
      </div></section>

      <section class="section"><div class="wrap">
        ${head(t("cs.decisions"), tx({ vi: "Những lựa chọn tạo khác biệt", en: "Choices that made the difference", zh: "带来差异的选择" }))}
        <div class="decs">
          ${p.decisions.map((d, i) => `
            <article class="card dec" data-reveal data-spot>
              <span class="spot"></span>
              <div class="dec__vis">${phone(img(p.slug, d.img), artCls(p), tx(d.t))}</div>
              <div class="dec__text"><span class="tag">${pad2(i + 1)}</span><h3>${tx(d.t)}</h3><p>${tx(d.d)}</p></div>
            </article>`).join("")}
        </div>
      </div></section>

      <section class="section"><div class="wrap">
        ${head(t("cs.money"), p.model)}
        <div class="trio">${p.money.map((m, i) => `<div class="card card--pad" data-reveal data-spot><span class="spot"></span><span class="step__ico">${I.money[i % 3]}</span><h3>${tx(m.t)}</h3><p>${tx(m.d)}</p></div>`).join("")}</div>
      </div></section>

      ${p.states.length ? `
      <section class="section">
        <div class="wrap">${head(t("cs.states"), "", t("cs.statesSub"))}</div>
        <div class="strip" data-drag>${p.states.map((s) => `<figure>${phone(img(p.slug, s), "", s)}<figcaption>${s}</figcaption></figure>`).join("")}</div>
      </section>` : ""}

      ${hasSpec ? `
      <section class="section"><div class="wrap">
        ${head(t("cs.handoff"), "", t("cs.handoffSub"))}
        <div class="card card--pad spec" data-reveal><img src="${img(p.slug, "spec")}" alt="Figma handoff note" loading="lazy"/>
          <ul>
            <li>${I.check.replace("<svg", '<svg width="16" height="16"')}${tx({ vi: "Ngày cập nhật để dev biết thay đổi mới", en: "Update date so devs see what's new", zh: "更新日期，让开发看到最新改动" })}</li>
            <li>${I.check.replace("<svg", '<svg width="16" height="16"')}${tx({ vi: "Hành vi, thời gian delay, hiệu ứng", en: "Behaviour, delays and effects", zh: "交互、延迟与动效" })}</li>
            <li>${I.check.replace("<svg", '<svg width="16" height="16"')}${tx({ vi: "Điều kiện hiển thị theo quyền & thiết bị", en: "Display conditions by permission & device", zh: "按权限与设备的显示条件" })}</li>
            <li>${I.check.replace("<svg", '<svg width="16" height="16"')}${tx({ vi: "Đường nối luồng giữa các màn", en: "Flow connectors between screens", zh: "界面之间的流程连线" })}</li>
          </ul>
        </div>
      </div></section>` : ""}

      <section class="section"><div class="wrap">
        ${head(t("cs.ui"), t("cs.visual"))}
        <div class="card card--pad" data-reveal>
          <div class="palette" data-palette>${p.palette.map((c) => `<div class="swatch" style="background:${c};color:${lum(c) > 0.4 ? "#000" : "#fff"}">${c.toUpperCase()}</div>`).join("")}</div>
          <div class="typo"><b>Aa</b><span>${p.type} — ${tx({ vi: "kiểu chữ chính", en: "primary typeface", zh: "主要字体" })}</span></div>
        </div>
      </div></section>

      <section class="section">
        <div class="wrap">${head(t("cs.gallery"), `${total} ${t("cs.screens")}`)}</div>
        ${p.gallery.map((g) => `
          <div class="gal" data-pin-gallery>
            <div class="gal-head"><h3>${tx(g.g)}</h3><span class="tag">${pad2(g.imgs.length)}</span></div>
            <div class="strip">${g.imgs.map((s) => `<figure>${phone(img(p.slug, s), artCls(p), `${p.name} — ${s}`)}</figure>`).join("")}</div>
          </div>`).join("")}
        ${p.placeholder ? `<p class="note">${t("cs.placeholder")}</p>` : ""}
      </section>

      <section class="section"><div class="wrap">
        ${head(t("cs.learn"), "")}
        <div class="card card--pad" data-reveal data-spot><span class="spot"></span><p class="quote">“${tx(p.learn)}”</p></div>
      </div></section>
    </div>

    <section class="section"><div class="wrap">
      <a class="card card--pad next-card" href="project.html?p=${next.slug}" data-reveal data-spot>
        <span class="spot"></span>
        <div><small>${t("cs.next")}</small><b>${esc(next.name)}</b></div>
        <span class="icon-btn">${I.right}</span>
      </a>
    </div></section>`;
  };

  /* ---------- writing ---------- */
  let writingFilter = "all";
  const pageWriting = () => {
    const tags = [...new Set(ARTICLES.map((a) => tx(a.tag)))];
    const list = ARTICLES.filter((a) => writingFilter === "all" || tx(a.tag) === writingFilter);
    document.title = `${t("nav.writing")} — Chang.cee`;
    return `
    <section class="cs-hero"><div class="wrap">
      <div class="hero__inner">
        <span class="chip" data-reveal><i></i>${t("p.writing.chip")}</span>
        <h1 class="cs-title" data-reveal>${t("p.writing.title")}</h1>
        <p class="hero__lead" data-reveal>${t("writing.sub")}</p>
        <div class="filters" data-reveal>
          <button type="button" data-filter="all" aria-pressed="${writingFilter === "all"}">${t("writing.filter.all")}</button>
          ${tags.map((g) => `<button type="button" data-filter="${esc(g)}" aria-pressed="${writingFilter === g}">${g}</button>`).join("")}
        </div>
      </div>
    </div></section>
    <section class="section" style="padding-top:clamp(40px,6vw,64px)"><div class="wrap"><div class="posts">${list.map(postCard).join("")}</div></div></section>
    ${renderCTA()}`;
  };

  const pageArticle = () => {
    const idx = Math.max(0, ARTICLES.findIndex((a) => a.slug === params.get("a")));
    const a = ARTICLES[idx];
    const next = ARTICLES[(idx + 1) % ARTICLES.length];
    document.title = `${tx(a.title)} — Chang.cee`;
    return `
    <div class="progress-bar" data-progress></div>
    <section class="cs-hero"><div class="wrap">
      <div class="hero__inner">
        <a class="crumb" href="writing.html">${I.back.replace("<svg", '<svg width="16" height="16"')} ${t("writing.back")}</a>
        <span class="chip" data-reveal><i></i>${tx(a.tag)} · ${fmtDate(a.date)} · ${a.read} ${t("writing.min")}</span>
        <h1 class="cs-title" style="font-size:clamp(2rem,5vw,3.8rem);max-width:20ch" data-reveal>${tx(a.title)}</h1>
        <p class="hero__lead" data-reveal>${tx(a.excerpt)}</p>
      </div>
      ${a.cover ? `<div class="article-cover" style="margin-top:clamp(36px,5vw,56px)" data-reveal><img src="${asset(a.cover)}" alt=""/></div>` : ""}
    </div></section>
    <div class="wrap"><article class="prose" data-reveal>${tx(a.body)}</article></div>
    <section class="section"><div class="wrap">
      <a class="card card--pad next-card" href="article.html?a=${next.slug}" data-reveal data-spot>
        <span class="spot"></span>
        <div><small>${t("writing.next")}</small><b style="font-size:clamp(1.4rem,3vw,2.2rem)">${tx(next.title)}</b></div>
        <span class="icon-btn">${I.right}</span>
      </a>
    </div></section>`;
  };

  /* ---------- mount ---------- */
  const app = $("#app");
  const nav = $("#nav");
  const footer = $("#footer");
  let lenis = null;
  let ctx = null;

  const render = () => {
    root.lang = lang;
    nav.innerHTML = renderNav();
    footer.innerHTML = renderFooter();
    app.innerHTML = PAGE === "project" ? pageProject() : PAGE === "writing" ? pageWriting() : PAGE === "article" ? pageArticle() : pageHome();
    if (PAGE === "home") document.title = `${SITE.name} (Chang.cee) — ${t("hero.role")}`;
    bindUI();
    initAvatar();
  };
  const remount = () => {
    const y = window.scrollY;
    if (ctx) { ctx.revert(); ctx = null; }
    render();
    initMotion(false);
    if (lenis) lenis.scrollTo(y, { immediate: true }); else window.scrollTo(0, y);
    if (hasGsap) ScrollTrigger.refresh();
  };

  const closeMenu = () => { nav.classList.remove("is-open"); const b = $(".menu-btn"); b && b.setAttribute("aria-expanded", "false"); };

  const bindUI = () => {
    $$("[data-lang]").forEach((b) => b.addEventListener("click", () => {
      if (b.dataset.lang === lang) return;
      lang = b.dataset.lang; store.set("lang", lang); writingFilter = "all"; closeMenu();
      fade(remount);
    }));
    $(".theme-btn").addEventListener("click", (e) => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      let applied = false;
      const apply = () => { if (applied) return; applied = true; root.dataset.theme = next; store.set("theme", next); };
      if (document.startViewTransition && !reduced) {
        const r = e.currentTarget.getBoundingClientRect();
        root.style.setProperty("--vt-x", r.left + r.width / 2 + "px");
        root.style.setProperty("--vt-y", r.top + r.height / 2 + "px");
        try { const vt = document.startViewTransition(apply); [vt.ready, vt.finished, vt.updateCallbackDone].forEach((pr) => pr && pr.catch(() => {})); } catch { apply(); }
        setTimeout(apply, 500);
      } else apply();
    });
    $(".menu-btn").addEventListener("click", () => {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      $(".menu-btn").setAttribute("aria-expanded", String(open));
    });
    $$(".nav__drop a").forEach((a) => a.addEventListener("click", closeMenu));
    $$("[data-copy]").forEach((btn) => btn.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(SITE.email); } catch {}
      const s = $("span", btn); s.textContent = t("contact.copied");
      setTimeout(() => (s.textContent = t("contact.copy")), 1600);
    }));
    $$("[data-filter]").forEach((b) => b.addEventListener("click", () => { writingFilter = b.dataset.filter; remount(); }));
    $$("[data-top]").forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); lenis ? lenis.scrollTo(0, { duration: 1.6 }) : window.scrollTo({ top: 0, behavior: "smooth" }); }));
    $$('a[href^="#"], a[href^="index.html#"]').forEach((a) => a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href.startsWith("index.html") && PAGE !== "home") return;
      const el = document.getElementById(href.split("#")[1]);
      if (!el) return;
      e.preventDefault(); closeMenu();
      lenis ? lenis.scrollTo(el, { offset: -90, duration: 1.4 }) : el.scrollIntoView({ behavior: "smooth" });
    }));
    // FAQ
    $$(".faq__item").forEach((it) => $(".faq__q", it).addEventListener("click", () => {
      const open = !it.classList.contains("is-open");
      $$(".faq__item").forEach((o) => { o.classList.remove("is-open"); $(".faq__q", o).setAttribute("aria-expanded", "false"); });
      it.classList.toggle("is-open", open); $(".faq__q", it).setAttribute("aria-expanded", String(open));
      setTimeout(() => hasGsap && ScrollTrigger.refresh(), 550);
    }));
    // spotlight on cards
    if (finePointer) $$("[data-spot]").forEach((c) => c.addEventListener("pointermove", (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", e.clientX - r.left + "px");
      c.style.setProperty("--my", e.clientY - r.top + "px");
    }));
    // drag strips
    $$("[data-drag]").forEach((track) => {
      let down = false, sx = 0, sl = 0, moved = false;
      track.addEventListener("pointerdown", (e) => { if (e.pointerType !== "mouse") return; down = true; moved = false; sx = e.clientX; sl = track.scrollLeft; track.classList.add("is-drag"); });
      addEventListener("pointerup", () => { down = false; track.classList.remove("is-drag"); });
      track.addEventListener("pointermove", (e) => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 3) moved = true; track.scrollLeft = sl - dx; });
      track.addEventListener("click", (e) => { if (moved) e.preventDefault(); }, true);
      $$("img", track).forEach((i) => (i.draggable = false));
    });
  };

  const initAvatar = () => {
    if (!SITE.avatar) return;
    const els = $$("[data-avatar]");
    if (!els.length) return;
    const src = /^(https?:|\/)/.test(SITE.avatar) ? SITE.avatar : BASE + SITE.avatar;
    const probe = new Image();
    probe.onload = () => els.forEach((el) => {
      if ($("img", el)) return;
      const im = document.createElement("img"); im.src = src; im.alt = SITE.name;
      el.prepend(im); el.classList.add("has-img");
    });
    probe.src = src;
  };

  /* ---------- transitions ---------- */
  const curtain = $("#curtain");
  const fade = (fn) => {
    if (!hasGsap || !curtain) return fn();
    gsap.timeline().to(curtain, { opacity: 1, duration: 0.3, ease: "power2.out" }).add(fn).to(curtain, { opacity: 0, duration: 0.5, ease: "power2.out", delay: 0.05 });
  };
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a || !hasGsap || !curtain) return;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (!/\.html/.test(href)) return;
    if (href.startsWith("index.html#") && PAGE === "home") return;
    e.preventDefault();
    gsap.to(curtain, { opacity: 1, duration: 0.35, ease: "power2.out", onComplete: () => (location.href = href) });
  });
  addEventListener("pageshow", (e) => { if (e.persisted && curtain && hasGsap) gsap.set(curtain, { opacity: 0 }); });

  /* ---------- motion ---------- */
  const initMotion = (first = true) => {
    if (!hasGsap) return;
    ctx = gsap.context(() => {
      const show = (els) => gsap.to(els.filter((el) => !el.classList.contains("is-in")), {
        opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out", overwrite: "auto",
        stagger: { each: 0.08, onComplete() { const el = this.targets()[0]; el.classList.add("is-in"); gsap.set(el, { clearProps: "filter,transform,opacity" }); } },
      });
      ScrollTrigger.batch("[data-reveal]", { start: "top 92%", onEnter: show, onEnterBack: show });
      show($$("[data-reveal]").filter((el) => el.getBoundingClientRect().top < innerHeight * 0.92));

      const chars = $$(".hero__name .char");
      if (first && chars.length) {
        gsap.from(chars, { yPercent: 110, opacity: 0, duration: 1.1, ease: "expo.out", stagger: 0.03, delay: 0.15 });
        gsap.from(".hero__arrow", { scale: 0, rotate: -90, duration: 1, ease: "back.out(2)", delay: 0.7 });
      }

      // project media parallax
      $$("[data-media]").forEach((m) => {
        $$(".phone", m).forEach((p, i) => gsap.fromTo(p, { y: [40, 0, 50][i] || 0 }, { y: [-20, 0, -26][i] || 0, ease: "none", scrollTrigger: { trigger: m, start: "top bottom", end: "bottom top", scrub: true } }));
      });

      // counters
      $$("[data-count]").forEach((n) => {
        const o = { v: 0 };
        gsap.to(o, { v: +n.dataset.count, duration: 2, ease: "power3.out", scrollTrigger: { trigger: n, start: "top 95%" }, onUpdate: () => (n.textContent = Math.round(o.v)) });
      });

      // marquee rows
      $$("[data-mq]").forEach((row) => {
        const dir = +row.dataset.mq;
        const tw = gsap.fromTo(row, { xPercent: dir > 0 ? 0 : -33.333 }, { xPercent: dir > 0 ? -33.333 : 0, duration: 40, ease: "none", repeat: -1, paused: true });
        // chỉ chạy khi nhìn thấy — tiết kiệm tài nguyên vẽ
        ScrollTrigger.create({ trigger: row, start: "top bottom", end: "bottom top", onToggle: (st) => (st.isActive ? tw.play() : tw.pause()) });
      });

      // flow chips
      const flow = $("[data-flowwrap]");
      if (flow) gsap.from($$("[data-flow]", flow), { opacity: 0, y: 16, duration: 0.7, ease: "power3.out", stagger: 0.05, scrollTrigger: { trigger: flow, start: "top 88%" } });
      const pal = $("[data-palette]");
      if (pal) gsap.from($$(".swatch", pal), { scale: 0.6, opacity: 0, duration: 0.8, ease: "back.out(1.7)", stagger: 0.06, scrollTrigger: { trigger: pal, start: "top 88%" } });

      // pinned galleries
      gsap.matchMedia().add("(min-width: 761px)", () => {
        $$("[data-pin-gallery]").forEach((g) => {
          const track = $(".strip", g);
          const dist = () => Math.max(0, track.scrollWidth - g.clientWidth);
          if (dist() < 40) return;
          g.classList.add("pin-gallery");
          gsap.to(track, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: g, start: "center center", end: () => "+=" + dist(), pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 } });
        });
        return () => $$("[data-pin-gallery]").forEach((g) => g.classList.remove("pin-gallery"));
      });

      const bar = $("[data-progress]");
      if (bar) gsap.to(bar, { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".prose", start: "top 60%", end: "bottom bottom", scrub: true } });

      // magnetic buttons
      if (finePointer) $$("[data-magnetic]").forEach((el) => {
        const qx = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" });
        const qy = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });
        el.addEventListener("pointermove", (e) => { const r = el.getBoundingClientRect(); qx((e.clientX - r.left - r.width / 2) * 0.2); qy((e.clientY - r.top - r.height / 2) * 0.3); });
        el.addEventListener("pointerleave", () => { qx(0); qy(0); });
      });
    });
  };

  /* ---------- boot ---------- */
  render();
  if (hasGsap && window.Lenis) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  initMotion(true);
  if (hasGsap && curtain) gsap.fromTo(curtain, { opacity: 1 }, { opacity: 0, duration: 0.6, ease: "power2.out" });
  if (location.hash) {
    const el = document.getElementById(location.hash.slice(1));
    if (el) setTimeout(() => (lenis ? lenis.scrollTo(el, { immediate: true, offset: -90 }) : el.scrollIntoView()), 60);
  }
  if (document.fonts && hasGsap) document.fonts.ready.then(() => ScrollTrigger.refresh());
  addEventListener("load", () => hasGsap && ScrollTrigger.refresh());
})();
