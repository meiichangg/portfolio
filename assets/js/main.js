/* =========================================================
   Chang.cee — render, i18n, theme, motion (minimal)
   ========================================================= */
(() => {
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
  const savedTheme = store.get("theme");
  if (savedTheme) root.dataset.theme = savedTheme;
  const currentTheme = () => root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  /* ---------- helpers ---------- */
  const img = (slug, n) => `assets/img/projects/${slug}/${n}.webp`;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const pad2 = (n) => String(n).padStart(2, "0");
  const lum = (hex) => {
    const n = hex.replace("#", "");
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const projVars = (p) => `--tint:${p.tint};--pc-ink:${lum(p.tint) > 0.4 ? "#000" : "#fff"}`;
  const phone = (src, cls = "", alt = "", eager = false) =>
    `<div class="phone ${cls}"><div class="phone__screen"><img src="${src}" alt="${esc(alt)}" loading="${eager ? "eager" : "lazy"}" decoding="async"/></div></div>`;
  const artCls = (p) => (p.slug === "danno" ? "phone--art" : "");
  const fmtDate = (d) =>
    new Date(d + "T00:00:00").toLocaleDateString(lang === "zh" ? "zh-CN" : lang === "vi" ? "vi-VN" : "en-GB", { day: "2-digit", month: "short", year: "numeric" });

  const I = {
    arrow: `<svg class="arrow-ico" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>`,
    back: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,
    sun: `<svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`,
    moon: `<svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>`,
    copy: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>`,
  };

  const SOON_SVG = {
    chart: `<svg viewBox="0 0 320 200" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="1" y="1" width="318" height="198" opacity=".5"/><rect x="14" y="14" width="60" height="172" opacity=".35"/><rect x="88" y="14" width="66" height="40"/><rect x="164" y="14" width="66" height="40"/><rect x="240" y="14" width="66" height="40"/><path d="M96 150 130 118l28 16 34-44 30 22 40-36 40 20" stroke-width="2"/><path d="M88 176h218" opacity=".4"/></svg>`,
    grid: `<svg viewBox="0 0 320 200" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="1" y="1" width="318" height="198" opacity=".5"/><rect x="14" y="14" width="292" height="26"/><path d="M14 60h292M14 84h292M14 108h292M14 132h292M14 156h292" opacity=".45"/><path d="M90 48v124M190 48v124M250 48v124" opacity=".3"/></svg>`,
    gov: `<svg viewBox="0 0 320 200" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="1" y="1" width="318" height="198" opacity=".5"/><rect x="40" y="46" width="110" height="22"/><rect x="170" y="46" width="110" height="22"/><rect x="40" y="82" width="240" height="22"/><rect x="40" y="118" width="150" height="22"/><rect x="204" y="118" width="76" height="22"/><rect x="190" y="160" width="90" height="26" fill="currentColor" opacity=".25"/></svg>`,
  };

  /* ---------- shell ---------- */
  const navLinks = [
    { href: "index.html#work", k: "nav.work" },
    { href: "index.html#about", k: "nav.about" },
    { href: "writing.html", k: "nav.writing", id: "writing" },
    { href: "index.html#contact", k: "nav.contact" },
  ];
  const langSwitch = () =>
    `<div class="lang" role="group" aria-label="Language">${LANGS.map((l, i) => `${i ? '<span class="sep">/</span>' : ""}<button type="button" data-lang="${l.id}" aria-pressed="${l.id === lang}">${l.label}</button>`).join("")}</div>`;
  const renderNav = () => `
    <div class="wrap nav__inner">
      <a href="index.html" class="logo" aria-label="Chang.cee — ${esc(t("nav.home"))}">Chang.cee</a>
      <div class="nav__right">
        <nav class="nav__links" aria-label="Primary">
          ${navLinks.map((l) => `<a class="ul ${(PAGE === "writing" || PAGE === "article") && l.id === "writing" ? "is-active" : ""}" href="${l.href}">${t(l.k)}</a>`).join("")}
        </nav>
        <div class="nav__tools">
          ${langSwitch()}
          <button type="button" class="theme-btn" aria-label="${esc(t("theme.toggle"))}">${I.sun}${I.moon}</button>
          <button type="button" class="menu-btn" aria-label="Menu" aria-expanded="false"><span></span></button>
        </div>
      </div>
    </div>`;
  const renderMobileMenu = () => `
    <nav>${navLinks.map((l) => `<a href="${l.href}">${t(l.k)}</a>`).join("")}</nav>
    <div class="mm-foot">${langSwitch()}<a class="muted" href="mailto:${SITE.email}">${SITE.email}</a></div>`;
  const renderFooter = () => `
    <div class="wrap">
      <div><a href="mailto:${SITE.email}">${SITE.email}</a><br/>${SITE.nickname} · UI/UX Designer</div>
      <div>${t("footer.made")}<br/><a href="polo/index.html">${t("version2")} →</a></div>
      <div>${t("footer.rights")}, ${SITE.nickname} ©${new Date().getFullYear()}<br/><a href="#top" data-top>${t("footer.top")} ↑</a></div>
    </div>`;

  /* ---------- home ---------- */
  const chars = (text) =>
    text.split(" ").map((w) => `<span class="word">${[...w].map((c) => `<span class="char">${c}</span>`).join("")}</span>`).join(" ");

  const label = (k, right = "") => `<div class="label" data-reveal><span>${t(k)}</span>${right}</div>`;

  const renderHero = () => `
    <section class="hero" id="top">
      <div class="wrap">
        <div class="hero__top">
          <h1 class="hero__name" aria-label="${esc(SITE.name)}">
            <span class="row">${chars("Vũ Thị")}</span>
            <span class="row">${chars("Mai Trang")}</span>
          </h1>
          <span class="avatar" data-avatar><span class="avatar__mono">MT</span></span>
        </div>
        <div class="hero__bottom">
          <div data-reveal>
            <div class="mail"><a class="ul" href="mailto:${SITE.email}">${SITE.email}</a>
              <button type="button" data-copy aria-label="${esc(t("contact.copy"))}">${I.copy}<span class="tip">${t("contact.copied")}</span></button>
            </div>
            <div class="hero__meta"><span class="badge"><i></i>${t("hero.badge")}</span><span>${t("hero.role")} · ${SITE.years}+ ${t("stat.years")}</span></div>
          </div>
          <p class="intro" data-split>${t("hero.intro")}</p>
        </div>
      </div>
    </section>`;

  const tile = (p, i, wide = false) => {
    const media = p.cover.map((c) => phone(img(p.slug, c), artCls(p), p.name, i < 3)).join("");
    return `
      <a class="tile ${wide ? "tile--wide" : ""}" href="project.html?p=${p.slug}" style="${projVars(p)}" data-tile>
        <div class="tile__media" data-media>${media}</div>
        <div class="tile__shade"></div>
        <div class="tile__meta"><span>${pad2(i + 1)} — ${p.model}</span><span>${p.year}</span></div>
        <div class="tile__title">${esc(p.name)}<small>${tx(p.category)}</small></div>
      </a>`;
  };

  const renderWork = () => `
    <section class="section" id="work" style="padding-top:0">
      <div class="wrap">
        ${label("label.work", `<small>${pad2(PROJECTS.length)}</small>`)}
        <div class="grid">${PROJECTS.map((p, i) => tile(p, i, i === 0)).join("")}</div>
      </div>
    </section>`;

  const renderSystems = () => `
    <section class="section" style="padding-top:0">
      <div class="wrap">
        ${label("label.beyond", `<small>${t("beyond.soon")}</small>`)}
        <div class="soon">
          ${BEYOND.map((b) => `
            <article class="soon__tile" data-reveal>
              <div class="soon__tag"><span>${b.tags.join(" · ")}</span><span>NDA</span></div>
              ${SOON_SVG[b.icon]}
              <div><h3>${tx(b.t)}</h3><p>${tx(b.d)}</p></div>
            </article>`).join("")}
        </div>
      </div>
    </section>`;

  const social = (href, name) =>
    href ? `<a href="${href}" target="_blank" rel="noopener">${name}</a>` : `<span title="${esc(t("contact.soon"))}">${name}</span>`;

  const renderAbout = () => `
    <section class="section" id="about" style="padding-top:0">
      <div class="wrap">
        ${label("label.about")}
        <div class="about__lead">
          <p class="big" data-split>${t("about.big")}</p>
          <div class="socials" data-reveal>${social(SITE.behance, "Behance")}${social(SITE.facebook, "Facebook")}<a href="mailto:${SITE.email}">Email</a></div>
        </div>
        <div class="about__grid">
          <div class="about__photo" data-avatar data-reveal><span class="avatar__mono">Chang.cee</span></div>
          <div class="about__text" data-reveal>
            <p>${t("about.p1")}</p>
            <p>${t("about.p2")}</p>
            <p>${t("about.p3")}</p>
            <dl class="info">
              <dt>${t("about.info.name")}</dt><dd>${SITE.name}</dd>
              <dt>${t("about.info.nick")}</dt><dd>${SITE.nickname}</dd>
              <dt>${t("about.info.dob")}</dt><dd>${SITE.birthday}</dd>
              <dt>${t("about.info.focus")}</dt><dd>${t("about.info.focusv")}</dd>
            </dl>
          </div>
        </div>
        <div class="lists">
          <div data-reveal><p class="sub">${t("about.skills")}</p><ul class="plain">${ABOUT.skills.map((s, i) => `<li><span>${tx(s)}</span><span>${pad2(i + 1)}</span></li>`).join("")}</ul></div>
          <div data-reveal><p class="sub">${t("about.tools")}</p><ul class="plain">${ABOUT.tools.map((s, i) => `<li><span>${s}</span><span>${pad2(i + 1)}</span></li>`).join("")}</ul></div>
        </div>
      </div>
    </section>
    <section class="section" style="padding-top:0">
      <div class="wrap">
        ${label("label.journey")}
        <ol class="rows">${ABOUT.journey.map((j) => `<li data-reveal><span class="n">${tx(j.year)}</span><h3>${tx(j.title)}</h3><p>${tx(j.body)}</p></li>`).join("")}</ol>
      </div>
    </section>`;

  const renderProcess = () => `
    <section class="section" id="process" style="padding-top:0">
      <div class="wrap">
        ${label("label.process")}
        <ol class="rows">${ABOUT.process.map((s, i) => `<li data-reveal><span class="n">${pad2(i + 1)}</span><h3>${tx(s.t)}</h3><p>${tx(s.d)}</p></li>`).join("")}</ol>
      </div>
    </section>`;

  const articleRow = (a) => `
    <li class="arow" data-reveal data-cover="${a.cover || ""}">
      <a href="article.html?a=${a.slug}">
        <span class="arow__date">${fmtDate(a.date)}</span>
        <span class="arow__title">${tx(a.title)}<span class="arow__excerpt">${tx(a.excerpt)}</span></span>
        <span class="arow__tag">${tx(a.tag)}</span>
        <span class="arow__arrow">${I.arrow}</span>
      </a>
    </li>`;

  const renderWritingTeaser = () => `
    <section class="section" id="writing" style="padding-top:0">
      <div class="wrap">
        ${label("label.writing", `<a class="ul" href="writing.html"><small>${t("writing.all")}</small></a>`)}
        <ul class="alist">${ARTICLES.slice(0, 3).map(articleRow).join("")}</ul>
      </div>
      <div class="apreview" aria-hidden="true"><img alt=""/></div>
    </section>`;

  const renderContact = () => `
    <section class="contact dark-block" id="contact">
      <div class="wrap">
        <p class="contact__big" data-split>${t("contact.big")}</p>
        <div class="contact__row" data-reveal>
          <a class="btn btn--light" href="mailto:${SITE.email}" data-magnetic><span>${t("contact.cta")}</span>${I.arrow}</a>
          <span class="badge"><i></i>${t("hero.badge")}</span>
        </div>
      </div>
    </section>`;

  const pageHome = () => renderHero() + renderWork() + renderSystems() + renderAbout() + renderProcess() + renderWritingTeaser() + renderContact();

  /* ---------- case study ---------- */
  const pageProject = () => {
    const idx = Math.max(0, PROJECTS.findIndex((x) => x.slug === params.get("p")));
    const p = PROJECTS[idx];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    document.title = `${p.name} — Chang.cee`;
    const vars = projVars(p);
    const heroImgs = [p.cover[0], p.hero, p.cover[2]];
    const flow = p.flow.map((f) => `<span class="flow__node" data-flow>${tx(f)}</span>`).join(`<span class="flow__arrow" data-flow>→</span>`);
    const total = p.gallery.reduce((n, g) => n + g.imgs.length, 0);
    const hasSpec = ["ar-drawing", "dramazone", "dynamic-island", "gps-camera"].includes(p.slug);
    return `
    <section class="cs-hero" style="${vars}">
      <div class="wrap">
        <a href="index.html#work" class="crumb">${I.back} ${t("cs.back")}</a>
        <h1 class="cs-title" data-split>${esc(p.name)}</h1>
        <div class="cs-intro">
          <p class="intro" data-split>${tx(p.tagline)}</p>
          <dl class="cs-meta" data-reveal>
            <dt>${t("cs.role")}</dt><dd>${tx(p.role)}</dd>
            <dt>${t("cs.platform")}</dt><dd>${p.platform}</dd>
            <dt>${t("cs.model")}</dt><dd>${p.model}</dd>
            <dt>${t("cs.year")}</dt><dd>${p.year}</dd>
            <dt>${t("cs.scope")}</dt><dd>${tx(p.scope)}</dd>
          </dl>
        </div>
        <div class="cs-cover" data-tile><div class="tile__media" data-media>${heroImgs.map((h) => phone(img(p.slug, h), artCls(p), p.name, true)).join("")}</div></div>
      </div>
    </section>

    <div style="${vars}">
      <section class="cs-section"><div class="wrap">
        ${label("label.ux", `<small>01</small>`)}
        <div class="split"><h3>${tx({ vi: "Tổng quan", en: "Overview", zh: "概述" })}</h3>
          <div class="trio">
            <div data-reveal><h4>${t("cs.problem")}</h4><p>${tx(p.problem)}</p></div>
            <div data-reveal><h4>${t("cs.goal")}</h4><p>${tx(p.goal)}</p></div>
            <div data-reveal><h4>${t("cs.myrole")}</h4><p>${tx(p.did)}</p></div>
          </div>
        </div>
        <div class="split"><h3>${t("cs.flow")}</h3><div class="flow" data-flowwrap>${flow}</div></div>
        <div class="split"><h3>${t("cs.decisions")}</h3>
          <div>${p.decisions.map((d, i) => `
            <article class="dec" data-reveal>
              <div class="dec__vis">${phone(img(p.slug, d.img), artCls(p), tx(d.t))}</div>
              <div><span class="n">${pad2(i + 1)}</span><h4>${tx(d.t)}</h4><p>${tx(d.d)}</p></div>
            </article>`).join("")}</div>
        </div>
        <div class="split"><h3>${t("cs.money")}<small>${p.model}</small></h3>
          <div class="trio">${p.money.map((m) => `<div data-reveal><h4>${tx(m.t)}</h4><p>${tx(m.d)}</p></div>`).join("")}</div>
        </div>
      </div></section>

      ${p.states.length ? `
      <section>
        <div class="wrap"><div class="split" style="margin-bottom:24px"><h3>${t("cs.states")}<small>${t("cs.statesSub")}</small></h3><div></div></div></div>
        <div class="hscroll" style="margin-bottom:clamp(56px,7vw,100px)">
          <div class="hscroll__track" data-drag>${p.states.map((s) => `<figure class="shot">${phone(img(p.slug, s), "", s)}<figcaption>${s}</figcaption></figure>`).join("")}</div>
          <div class="hscroll__progress"><i></i></div>
        </div>
      </section>` : ""}

      ${hasSpec ? `
      <div class="wrap"><div class="split"><h3>${t("cs.handoff")}<small>${t("cs.handoffSub")}</small></h3>
        <div class="spec" data-reveal><img src="${img(p.slug, "spec")}" alt="Figma handoff note" loading="lazy"/>
          <ul>
            <li>${tx({ vi: "Ngày cập nhật để dev biết thay đổi mới", en: "Update date so devs see what's new", zh: "更新日期，让开发看到最新改动" })}</li>
            <li>${tx({ vi: "Hành vi, thời gian delay, hiệu ứng", en: "Behaviour, delays and effects", zh: "交互、延迟与动效" })}</li>
            <li>${tx({ vi: "Điều kiện hiển thị theo quyền & thiết bị", en: "Display conditions by permission & device", zh: "按权限与设备的显示条件" })}</li>
            <li>${tx({ vi: "Đường nối luồng giữa các màn", en: "Flow connectors between screens", zh: "界面之间的流程连线" })}</li>
          </ul>
        </div>
      </div></div>` : ""}

      <section class="cs-section" style="padding-top:clamp(30px,4vw,60px)"><div class="wrap">
        ${label("label.ui", `<small>02</small>`)}
        <div class="split"><h3>${t("cs.palette")}</h3>
          <div>
            <div class="palette" data-palette>${p.palette.map((c) => `<div class="swatch" style="background:${c};color:${lum(c) > 0.4 ? "#000" : "#fff"}">${c.toUpperCase()}</div>`).join("")}</div>
            <div class="typo" data-reveal><b>Aa</b><span>${p.type} — ${tx({ vi: "kiểu chữ chính", en: "primary typeface", zh: "主要字体" })}</span></div>
          </div>
        </div>
      </div></section>

      <div class="wrap">${label("label.screens", `<small>${total}</small>`)}</div>
      ${p.gallery.map((g) => `
        <div class="gallery-group" data-pin-gallery>
          <div class="gallery-group__head"><span style="color:var(--ink)">${tx(g.g)}</span><span>${pad2(g.imgs.length)}</span></div>
          <div class="hscroll__track">${g.imgs.map((s) => phone(img(p.slug, s), artCls(p), `${p.name} — ${s}`)).join("")}</div>
        </div>`).join("")}
      ${p.placeholder ? `<div class="wrap"><p class="placeholder-note">${t("cs.placeholder")}</p></div>` : ""}

      <section class="cs-section" style="padding-bottom:clamp(70px,9vw,130px)"><div class="wrap">
        <div class="split" style="margin-bottom:0"><h3>${t("cs.learn")}</h3><p class="quote" data-split>${tx(p.learn)}</p></div>
      </div></section>
    </div>

    <a class="next dark-block" href="project.html?p=${next.slug}">
      <div class="wrap"><small>${t("cs.next")}</small><b>${esc(next.name)}${I.arrow.replace('width="18" height="18"', "")}</b></div>
    </a>`;
  };

  /* ---------- writing ---------- */
  let writingFilter = "all";
  const pageWriting = () => {
    const tags = [...new Set(ARTICLES.map((a) => tx(a.tag)))];
    const list = ARTICLES.filter((a) => writingFilter === "all" || tx(a.tag) === writingFilter);
    document.title = `${t("nav.writing")} — Chang.cee`;
    return `
    <section class="page-head"><div class="wrap">
      <h1 class="page-title" data-split>${t("nav.writing")}</h1>
      <p class="intro" data-split>${t("writing.sub")}</p>
      <div class="filters" role="group" data-reveal>
        <button type="button" data-filter="all" aria-pressed="${writingFilter === "all"}">${t("writing.filter.all")}</button>
        ${tags.map((g) => `<button type="button" data-filter="${esc(g)}" aria-pressed="${writingFilter === g}">${g}</button>`).join("")}
      </div>
    </div></section>
    <section class="section" style="padding-top:0"><div class="wrap">
      ${label("label.writing", `<small>${pad2(list.length)}</small>`)}
      <ul class="alist">${list.map(articleRow).join("")}</ul></div>
      <div class="apreview" aria-hidden="true"><img alt=""/></div></section>
    ${renderContact()}`;
  };

  const pageArticle = () => {
    const idx = Math.max(0, ARTICLES.findIndex((a) => a.slug === params.get("a")));
    const a = ARTICLES[idx];
    const next = ARTICLES[(idx + 1) % ARTICLES.length];
    document.title = `${tx(a.title)} — Chang.cee`;
    const cover = a.cover
      ? `<div class="article-cover" data-reveal><img src="${a.cover}" alt="" data-parallax-img/></div>`
      : `<div class="article-cover article-cover--blank" data-reveal><span>density.</span></div>`;
    return `
    <div class="progress-bar" data-progress></div>
    <div class="wrap">
      <header class="article-head">
        <a href="writing.html" class="crumb">${I.back} ${t("writing.back")}</a>
        <div class="article-meta" data-reveal><span>${tx(a.tag)}</span><span>${fmtDate(a.date)}</span><span>${a.read} ${t("writing.min")}</span></div>
        <h1 data-split>${tx(a.title)}</h1>
      </header>
      ${cover}
      <div class="article-body">
        <aside data-reveal>${tx(a.excerpt)}</aside>
        <article class="prose" data-reveal>${tx(a.body)}</article>
      </div>
    </div>
    <div style="height:clamp(70px,9vw,130px)"></div>
    <a class="next dark-block" href="article.html?a=${next.slug}">
      <div class="wrap"><small>${t("writing.next")}</small><b style="font-size:clamp(1.8rem,4.6vw,4.4rem);text-transform:none;letter-spacing:-0.06em;line-height:1.05">${tx(next.title)}${I.arrow.replace('width="18" height="18"', "")}</b></div>
    </a>`;
  };

  /* ---------- mount ---------- */
  const app = $("#app");
  const nav = $("#nav");
  const mm = $("#mobile-menu");
  const footer = $("#footer");
  let lenis = null;
  let ctx = null;
  const cleanups = [];

  const render = () => {
    root.lang = lang;
    nav.innerHTML = renderNav();
    mm.innerHTML = renderMobileMenu();
    footer.innerHTML = renderFooter();
    app.innerHTML = PAGE === "project" ? pageProject() : PAGE === "writing" ? pageWriting() : PAGE === "article" ? pageArticle() : pageHome();
    if (PAGE === "home") document.title = `${SITE.name} (Chang.cee) — ${t("hero.role")}`;
    bindUI();
    initAvatar();
  };
  const teardown = () => {
    cleanups.splice(0).forEach((fn) => fn());
    if (ctx) { ctx.revert(); ctx = null; }
  };
  const remount = () => {
    const y = window.scrollY;
    teardown();
    render();
    initMotion(false);
    if (lenis) lenis.scrollTo(y, { immediate: true }); else window.scrollTo(0, y);
    if (hasGsap) ScrollTrigger.refresh();
  };

  /* ---------- UI bindings ---------- */
  const bindUI = () => {
    $$("[data-lang]").forEach((b) =>
      b.addEventListener("click", () => {
        if (b.dataset.lang === lang) return;
        lang = b.dataset.lang;
        store.set("lang", lang);
        writingFilter = "all";
        closeMenu();
        swap(remount);
      })
    );
    $(".theme-btn").addEventListener("click", (e) => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      let applied = false;
      const apply = () => { if (applied) return; applied = true; root.dataset.theme = next; store.set("theme", next); };
      if (document.startViewTransition && !reduced) {
        const r = e.currentTarget.getBoundingClientRect();
        root.style.setProperty("--vt-x", r.left + r.width / 2 + "px");
        root.style.setProperty("--vt-y", r.top + r.height / 2 + "px");
        try { const vt = document.startViewTransition(apply); [vt.ready, vt.finished, vt.updateCallbackDone].forEach((pr) => pr && pr.catch(() => {})); } catch { apply(); }
        setTimeout(apply, 500); // dự phòng khi trình duyệt bỏ qua transition
      } else apply();
    });
    $(".menu-btn").addEventListener("click", () => (nav.classList.contains("is-open") ? closeMenu() : openMenu()));
    $$("#mobile-menu a").forEach((a) => a.addEventListener("click", closeMenu));
    $$("[data-copy]").forEach((btn) =>
      btn.addEventListener("click", async () => {
        try { await navigator.clipboard.writeText(SITE.email); } catch {}
        btn.classList.add("is-copied");
        setTimeout(() => btn.classList.remove("is-copied"), 1600);
      })
    );
    $$("[data-filter]").forEach((b) => b.addEventListener("click", () => { writingFilter = b.dataset.filter; remount(); }));
    $$("[data-top]").forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); lenis ? lenis.scrollTo(0, { duration: 1.6 }) : window.scrollTo({ top: 0, behavior: "smooth" }); }));
    $$('a[href^="#"], a[href^="index.html#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const href = a.getAttribute("href");
        if (href.startsWith("index.html") && PAGE !== "home") return;
        const el = document.getElementById(href.split("#")[1]);
        if (!el) return;
        e.preventDefault();
        closeMenu();
        lenis ? lenis.scrollTo(el, { offset: -90, duration: 1.4 }) : el.scrollIntoView({ behavior: "smooth" });
      });
    });
    $$("[data-drag]").forEach((track) => {
      let down = false, sx = 0, sl = 0, moved = false;
      const prog = track.parentElement.querySelector(".hscroll__progress i");
      const upd = () => {
        if (!prog) return;
        const ratio = track.clientWidth / track.scrollWidth;
        const max = track.scrollWidth - track.clientWidth;
        prog.style.width = ratio * 100 + "%";
        prog.style.transform = `translateX(${max > 0 ? (track.scrollLeft / max) * ((1 - ratio) / ratio) * 100 : 0}%)`;
      };
      upd();
      track.addEventListener("scroll", upd, { passive: true });
      track.addEventListener("pointerdown", (e) => { if (e.pointerType !== "mouse") return; down = true; moved = false; sx = e.clientX; sl = track.scrollLeft; track.classList.add("is-drag"); });
      const up = () => { down = false; track.classList.remove("is-drag"); };
      addEventListener("pointerup", up);
      cleanups.push(() => removeEventListener("pointerup", up));
      track.addEventListener("pointermove", (e) => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 3) moved = true; track.scrollLeft = sl - dx; });
      track.addEventListener("click", (e) => { if (moved) e.preventDefault(); }, true);
      $$("img", track).forEach((i) => (i.draggable = false));
    });
  };
  const openMenu = () => { nav.classList.add("is-open"); mm.classList.add("is-open"); $(".menu-btn").setAttribute("aria-expanded", "true"); lenis && lenis.stop(); };
  const closeMenu = () => { nav.classList.remove("is-open"); mm.classList.remove("is-open"); const b = $(".menu-btn"); b && b.setAttribute("aria-expanded", "false"); lenis && lenis.start(); };

  const initAvatar = () => {
    if (!SITE.avatar) return;
    const els = $$("[data-avatar]");
    if (!els.length) return;
    const probe = new Image();
    probe.onload = () => els.forEach((el) => {
      if ($("img", el)) return;
      const im = document.createElement("img");
      im.src = SITE.avatar; im.alt = SITE.name;
      el.prepend(im); el.classList.add("has-img");
    });
    probe.src = SITE.avatar;
  };

  /* ---------- page transitions ---------- */
  const bars = $$("#curtain i");
  const swap = (fn) => {
    if (!hasGsap || !bars.length) return fn();
    gsap.timeline()
      .set(bars, { transformOrigin: "bottom" })
      .to(bars, { scaleY: 1, duration: 0.5, ease: "power3.inOut" })
      .add(fn)
      .set(bars, { transformOrigin: "top" })
      .to(bars, { scaleY: 0, duration: 0.6, ease: "power3.inOut", delay: 0.05 });
  };
  const bindPageLinks = () => {
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a || !hasGsap) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey) return;
      if (!/\.html/.test(href)) return;
      if (href.startsWith("index.html#") && PAGE === "home") return;
      e.preventDefault();
      gsap.timeline().set(bars, { transformOrigin: "bottom" }).to(bars, { scaleY: 1, duration: 0.55, ease: "power3.inOut", onComplete: () => (location.href = href) });
    });
    addEventListener("pageshow", (e) => { if (e.persisted && bars.length && hasGsap) gsap.set(bars, { scaleY: 0 }); });
  };

  /* ---------- nav hide on scroll ---------- */
  const initNavScroll = () => {
    let last = 0;
    addEventListener("scroll", () => {
      const y = window.scrollY;
      if (!nav.classList.contains("is-open")) nav.classList.toggle("is-hidden", y > last && y > 160);
      last = y;
    }, { passive: true });
  };

  /* ---------- word splitter (keeps <em>, <br>) ---------- */
  const splitWords = (el) => {
    if (el.dataset.splitDone) return;
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          const cjk = /[㐀-鿿]/.test(n.textContent);
          const parts = cjk ? n.textContent.match(/[㐀-鿿]{1,6}[，。！？、；：]?|[^㐀-鿿]+/g) || [] : n.textContent.split(/(\s+)/);
          parts.forEach((p) => {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
            const m = document.createElement("span"); m.className = "line-mask";
            const s = document.createElement("span"); s.className = "sw"; s.textContent = p;
            m.appendChild(s); frag.appendChild(m);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== "BR") walk(n);
      });
    };
    walk(el);
    el.dataset.splitDone = "1";
  };

  /* ---------- motion ---------- */
  const initMotion = (firstLoad = true) => {
    if (!hasGsap) return;
    ctx = gsap.context(() => {
      // text: words rise from masks
      $$("[data-split]").forEach((el) => {
        splitWords(el);
        const inHero = el.closest(".hero, .cs-hero, .page-head, .article-head");
        gsap.from($$(".sw", el), {
          yPercent: 115, duration: 1.2, ease: "expo.out", stagger: 0.025,
          delay: inHero && firstLoad ? 0.35 : 0,
          scrollTrigger: inHero ? undefined : { trigger: el, start: "top 88%" },
        });
      });

      // fade-up
      const show = (els) => gsap.to(els, { opacity: 1, y: 0, duration: 1.1, ease: "expo.out", stagger: 0.07, overwrite: "auto" });
      ScrollTrigger.batch("[data-reveal]", { start: "top 92%", onEnter: show, onEnterBack: show });
      show($$("[data-reveal]").filter((el) => el.getBoundingClientRect().top < innerHeight * 0.92));

      // labels: hairline draws in
      $$(".label").forEach((l) => {
        gsap.fromTo(l, { "--lx": 0 }, { "--lx": 1, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: l, start: "top 92%" } });
      });

      // tiles: open up + inner parallax (depth)
      $$("[data-tile]").forEach((tileEl) => {
        const media = $("[data-media]", tileEl);
        gsap.fromTo(tileEl, { clipPath: "inset(8% 4% 0% 4%)" }, { clipPath: "inset(0% 0% 0% 0%)", ease: "none", scrollTrigger: { trigger: tileEl, start: "top bottom", end: "top 45%", scrub: true } });
        if (media) {
          gsap.fromTo(media, { yPercent: 10 }, { yPercent: -6, ease: "none", scrollTrigger: { trigger: tileEl, start: "top bottom", end: "bottom top", scrub: true } });
          const ph = $$(".phone", media);
          ph.forEach((p, i) => gsap.fromTo(p, { y: [40, 0, 60][i] || 0 }, { y: [-20, 0, -30][i] || 0, ease: "none", scrollTrigger: { trigger: tileEl, start: "top bottom", end: "bottom top", scrub: true } }));
        }
      });

      if (PAGE === "home") motionHome(firstLoad);
      if (PAGE === "project") motionProject();
      if (PAGE === "article") motionArticle();
      motionPointer();
    });
  };

  const motionHome = (firstLoad) => {
    const chars = $$(".hero__name .char");
    if (firstLoad && chars.length) {
      gsap.from(chars, { yPercent: 110, duration: 1.3, ease: "expo.out", stagger: 0.03, delay: 0.1 });
      gsap.from(".avatar", { scale: 0, duration: 1.2, ease: "expo.out", delay: 0.6 });
    }
    gsap.to(".hero__name", { yPercent: -18, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  };

  const motionProject = () => {
    const flow = $("[data-flowwrap]");
    if (flow) gsap.from($$("[data-flow]", flow), { opacity: 0, y: 14, duration: 0.8, ease: "expo.out", stagger: 0.05, scrollTrigger: { trigger: flow, start: "top 88%" } });
    $$(".dec__vis .phone").forEach((v) => gsap.fromTo(v, { y: 50 }, { y: -50, ease: "none", scrollTrigger: { trigger: v.closest(".dec"), start: "top bottom", end: "bottom top", scrub: true } }));
    const pal = $("[data-palette]");
    if (pal) gsap.from($$(".swatch", pal), { clipPath: "inset(100% 0 0 0)", duration: 1.1, ease: "expo.out", stagger: 0.06, scrollTrigger: { trigger: pal, start: "top 88%" } });
    gsap.matchMedia().add("(min-width: 761px)", () => {
      $$("[data-pin-gallery]").forEach((g) => {
        const track = $(".hscroll__track", g);
        const dist = () => Math.max(0, track.scrollWidth - g.clientWidth);
        if (dist() < 40) return;
        g.classList.add("pin-gallery");
        gsap.to(track, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: g, start: "center center", end: () => "+=" + dist(), pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 } });
      });
      return () => $$("[data-pin-gallery]").forEach((g) => g.classList.remove("pin-gallery"));
    });
  };

  const motionArticle = () => {
    const bar = $("[data-progress]");
    if (bar) gsap.to(bar, { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".prose", start: "top 60%", end: "bottom bottom", scrub: true } });
    const im = $("[data-parallax-img]");
    if (im) gsap.fromTo(im, { yPercent: -12 }, { yPercent: 0, ease: "none", scrollTrigger: { trigger: im.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
  };

  const motionPointer = () => {
    if (!finePointer) return;
    $$("[data-magnetic]").forEach((el) => {
      const qx = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" });
      const qy = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });
      el.addEventListener("pointermove", (e) => { const r = el.getBoundingClientRect(); qx((e.clientX - r.left - r.width / 2) * 0.25); qy((e.clientY - r.top - r.height / 2) * 0.35); });
      el.addEventListener("pointerleave", () => { qx(0); qy(0); });
    });
    const pv = $(".apreview");
    if (pv) {
      const pimg = $("img", pv);
      const qx = gsap.quickTo(pv, "x", { duration: 0.7, ease: "power3" });
      const qy = gsap.quickTo(pv, "y", { duration: 0.7, ease: "power3" });
      $$(".arow").forEach((r) => {
        r.addEventListener("pointerenter", () => { if (!r.dataset.cover) return; pimg.src = r.dataset.cover; gsap.to(pv, { opacity: 1, duration: 0.4, ease: "power2.out" }); });
        r.addEventListener("pointerleave", () => gsap.to(pv, { opacity: 0, duration: 0.3 }));
        r.addEventListener("pointermove", (e) => { qx(e.clientX + 24); qy(e.clientY - 100); });
      });
    }
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
  initNavScroll();
  bindPageLinks();

  if (hasGsap && bars.length) {
    gsap.set(bars, { scaleY: 1, transformOrigin: "top" });
    gsap.to(bars, { scaleY: 0, duration: 0.8, ease: "power3.inOut", delay: 0.05 });
  }
  if (location.hash) {
    const el = document.getElementById(location.hash.slice(1));
    if (el) setTimeout(() => (lenis ? lenis.scrollTo(el, { immediate: true, offset: -90 }) : el.scrollIntoView()), 60);
  }
  if (document.fonts && hasGsap) document.fonts.ready.then(() => ScrollTrigger.refresh());
  addEventListener("load", () => hasGsap && ScrollTrigger.refresh());
})();
