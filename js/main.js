/* ============================================================
 * main.js — renders content from js/data.js and wires up
 * theme / language toggles, mobile nav, scrollspy, reveal
 * animations, and the back-to-top button.
 *
 * You should NOT need to edit this file to update content —
 * edit js/data.js instead.
 * ============================================================ */

(function () {
  "use strict";

  /* ---------- state & helpers ---------- */

  let lang = localStorage.getItem("lang") || "en";

  // Translate: {en, ko} objects are language-switched, plain values pass through.
  function t(v) {
    return v && typeof v === "object" && "en" in v ? (v[lang] || v.en) : v;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Escape, then bold every occurrence of the site owner's name.
  function boldMyName(authors) {
    return esc(authors).replace(
      new RegExp(esc(SITE.config.myName), "g"),
      "<strong>" + esc(SITE.config.myName) + "</strong>"
    );
  }

  function label(key) {
    return t(SITE.ui.labels[key]);
  }

  /* ---------- inline SVG icons (16x16, currentColor) ---------- */

  const ICONS = {
    email:
      '<svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>',
    scholar:
      '<svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/><path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/></svg>',
    github:
      '<svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
    linkedin:
      '<svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>',
    cv:
      '<svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/><path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/></svg>',
  };

  /* ---------- renderers ---------- */

  function container(key) {
    return document.querySelector('[data-render="' + key + '"]');
  }

  function profileChips(links) {
    return links
      .map(function (l) {
        const newTab = l.url.startsWith("http") || l.icon === "cv";
        const labelText = l.icon === "cv" ? label("cvButton") : l.label;
        return (
          '<a class="chip" href="' + esc(l.url) + '"' +
          (newTab ? ' target="_blank" rel="noopener"' : "") +
          ">" + (ICONS[l.icon] || "") + esc(labelText) + "</a>"
        );
      })
      .join("");
  }

  function renderHero() {
    const p = SITE.profile;
    container("heroName").innerHTML =
      '<span class="name-accent">' + esc(t(p.name)) + "</span>";
    container("heroTitle").textContent = t(p.title);
    container("heroAffiliation").innerHTML =
      '<span class="affil-line"><a href="' + esc(p.lab.url) + '" target="_blank" rel="noopener">' +
      esc(t(p.lab.name)) + "</a>, " +
      '<a href="' + esc(p.universityUrl) + '" target="_blank" rel="noopener">' +
      esc(t(p.university)) + "</a></span>" +
      '<span class="affil-line">' + esc(t(p.location)) +
      ' · <span class="affil-email">' + esc(p.emailDisplay) + "</span></span>";
    container("heroLinks").innerHTML = profileChips(p.links);
    container("bio").innerHTML = p.bio
      .map(function (para) {
        return "<p>" + t(para) + "</p>"; // trusted author-written HTML (allows <a>)
      })
      .join("");

    const tagRow = function (items, cls) {
      return (
        '<div class="tag-list">' +
        items.map(function (x) {
          return '<span class="tag' + (cls ? " " + cls : "") + '">' + esc(x) + "</span>";
        }).join("") +
        "</div>"
      );
    };
    container("interests").innerHTML =
      '<h3 class="interests-label">' + esc(label("interests")) + "</h3>" +
      tagRow(t(SITE.profile.interests.broad), "") +
      tagRow(t(SITE.profile.interests.topics), "tag--sub");
  }

  function renderEducation() {
    container("education").innerHTML =
      '<div class="reveal">' +
      SITE.education.map(function (e) {
        return (
          '<div class="edu-item">' +
          '<div><div class="edu-school">' + esc(t(e.school)) + "</div>" +
          '<div class="edu-degree">' + esc(t(e.degree)) + "</div>" +
          (e.note ? '<div class="edu-note">' + esc(t(e.note)) + "</div>" : "") +
          "</div>" +
          '<div class="edu-period">' + esc(t(e.period)) + "</div>" +
          "</div>"
        );
      }).join("") +
      "</div>";
  }

  function renderNews() {
    container("news").innerHTML =
      '<div class="news-list">' +
      SITE.news.map(function (n, i) {
        return (
          '<div class="news-item' + (n.highlight ? " highlight" : "") +
          ' reveal" style="transition-delay:' + Math.min(i * 50, 200) + 'ms">' +
          '<div class="news-date">' + esc(t(n.date)) + "</div>" +
          '<p class="news-text">' + t(n.text) + "</p>" + // trusted HTML from data.js
          "</div>"
        );
      }).join("") +
      "</div>";
  }

  function pubCard(p, i) {
    return (
      '<article class="pub-card reveal" style="transition-delay:' + Math.min(i * 60, 200) + 'ms">' +
      (p.id ? '<span class="pub-id" aria-hidden="true">' + esc(p.id) + "</span>" : "") +
      '<h4 class="pub-title">' + esc(p.title) + "</h4>" +
      '<p class="pub-authors">' + boldMyName(p.authors) + "</p>" +
      '<p class="pub-venue">' + esc(t(p.venue)) + "</p>" +
      (p.venueTag || p.award
        ? '<div class="pub-badges">' +
          (p.venueTag ? '<span class="pub-venue-tag">' + esc(p.venueTag) + "</span>" : "") +
          (p.award ? '<span class="pub-award">' + esc(t(p.award)) + "</span>" : "") +
          "</div>"
        : "") +
      (p.links && p.links.length
        ? '<div class="pub-links">' +
          p.links.map(function (l) {
            return '<a class="pub-link" href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
              esc(l.label) + "</a>";
          }).join("") +
          "</div>"
        : "") +
      "</article>"
    );
  }

  function renderPublications() {
    const conf = SITE.publications.filter(function (p) { return p.type === "conference"; });
    const pre = SITE.publications.filter(function (p) { return p.type === "preprint"; });

    container("publications").innerHTML =
      '<h3 class="subsection-title reveal">' + esc(label("conference")) + "</h3>" +
      conf.map(pubCard).join("") +
      '<h3 class="subsection-title reveal">' + esc(label("preprints")) + "</h3>" +
      pre.map(pubCard).join("") +
      '<p class="pub-legend reveal">' + esc(label("eqContrib")) + " · " + esc(label("corresp")) + "</p>";
  }

  function renderPatents() {
    container("patents").innerHTML =
      '<div class="reveal">' +
      SITE.patents.map(function (pt) {
        return (
          '<div class="patent-item">' +
          '<div class="patent-title">' + esc(pt.title) + "</div>" +
          '<p class="patent-meta">' + esc(t(pt.status)) + "<br>" +
          esc(label("inventors")) + ": " + boldMyName(pt.inventors) + "</p>" +
          "</div>"
        );
      }).join("") +
      "</div>";
  }

  function timelineItem(role, org, period, desc) {
    return (
      '<div class="timeline-item reveal">' +
      '<div class="timeline-head">' +
      '<span class="timeline-role">' + esc(role) + "</span>" +
      '<span class="timeline-period">' + esc(period) + "</span>" +
      "</div>" +
      '<div class="timeline-org">' + esc(org) + "</div>" +
      (desc ? '<p class="timeline-desc">' + esc(desc) + "</p>" : "") +
      "</div>"
    );
  }

  function renderWorkExperience() {
    container("workExperience").innerHTML =
      SITE.experience.map(function (e) {
        return timelineItem(t(e.role), t(e.org), t(e.period), t(e.desc));
      }).join("");
  }

  function renderProjects() {
    container("projects").innerHTML =
      SITE.projects.map(function (p) {
        return timelineItem(t(p.name), t(p.sponsor), t(p.period), t(p.desc));
      }).join("");
  }

  function rowList(items) {
    return (
      '<div class="row-list reveal">' +
      items.map(function (r) {
        return (
          '<div class="row">' +
          '<div class="row-main"><span class="row-title">' + esc(r.title) + "</span>" +
          (r.note ? '<span class="row-note">' + esc(r.note) + "</span>" : "") +
          (r.sub ? '<div class="row-sub">' + esc(r.sub) + "</div>" : "") +
          "</div>" +
          '<div class="row-date">' + esc(r.date) + "</div>" +
          "</div>"
        );
      }).join("") +
      "</div>"
    );
  }

  function renderFellowships() {
    container("fellowships").innerHTML =
      rowList(SITE.fellowships.map(function (f) {
        return { title: t(f.name), sub: t(f.org), date: t(f.year), note: f.note ? t(f.note) : null };
      }));
  }

  function renderAwards() {
    container("awards").innerHTML =
      rowList(SITE.awards.map(function (a) {
        return { title: t(a.name), sub: t(a.org), date: t(a.year), note: a.note ? t(a.note) : null };
      }));
  }

  function renderTalks() {
    container("talks").innerHTML =
      rowList(SITE.talks.map(function (tk) {
        return { title: t(tk.title), sub: t(tk.venue), date: t(tk.date) };
      }));
  }

  function renderTeaching() {
    container("teaching").innerHTML =
      rowList(SITE.teaching.map(function (c) {
        return { title: t(c.course), sub: label("ta") + ", " + t(c.school), date: t(c.term) };
      }));
  }

  function renderServices() {
    container("services").innerHTML =
      rowList(SITE.service.map(function (s) {
        return { title: t(s.role), sub: s.detail, date: s.year || "" };
      }));
  }

  function renderActivities() {
    container("activities").innerHTML =
      rowList(SITE.activities.map(function (a) {
        return { title: t(a.role), sub: t(a.org), date: t(a.period) };
      }));
  }

  function renderFooter() {
    container("footerLinks").innerHTML = profileChips(SITE.profile.links);
    container("footerCopyright").textContent = t(SITE.footer.copyright);
    container("footerSub").textContent = t(SITE.footer.sub);
  }

  function renderAll() {
    document.documentElement.lang = lang === "ko" ? "ko" : "en";

    // Static labels marked with data-i18n="group.key"
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const path = el.dataset.i18n.split(".");
      const v = SITE.ui[path[0]] && SITE.ui[path[0]][path[1]];
      if (v) el.textContent = t(v);
    });

    renderHero();
    renderNews();
    renderEducation();
    renderPublications();
    renderPatents();
    renderWorkExperience();
    renderProjects();
    renderFellowships();
    renderAwards();
    renderTalks();
    renderTeaching();
    renderServices();
    renderActivities();
    renderFooter();

    // Localized aria-labels / button text
    const langBtn = document.getElementById("lang-toggle");
    langBtn.textContent = label("langButton");
    langBtn.setAttribute("aria-label", label("langToggle"));
    document.getElementById("theme-toggle").setAttribute("aria-label", label("themeToggle"));
    document.getElementById("back-to-top").setAttribute("aria-label", label("backToTop"));
    updateBurgerLabel();

    initReveal(); // observe any freshly rendered .reveal elements
  }

  /* ---------- theme toggle ---------- */

  function initTheme() {
    document.getElementById("theme-toggle").addEventListener("click", function () {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("theme", next);
    });
  }

  /* ---------- language toggle ---------- */

  function initLang() {
    document.getElementById("lang-toggle").addEventListener("click", function () {
      lang = lang === "en" ? "ko" : "en";
      localStorage.setItem("lang", lang);
      renderAll();
    });
  }

  /* ---------- mobile nav ---------- */

  const header = document.getElementById("site-header");
  const burger = document.getElementById("nav-toggle");

  function updateBurgerLabel() {
    const open = header.classList.contains("nav-open");
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? label("menuClose") : label("menuOpen"));
  }

  function initNav() {
    burger.addEventListener("click", function () {
      header.classList.toggle("nav-open");
      updateBurgerLabel();
    });

    header.querySelectorAll(".site-nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        header.classList.remove("nav-open");
        updateBurgerLabel();
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && header.classList.contains("nav-open")) {
        header.classList.remove("nav-open");
        updateBurgerLabel();
        burger.focus();
      }
    });
  }

  /* ---------- scrollspy ---------- */

  function initSpy() {
    // id -> [toc link, mobile menu link]
    const links = {};
    document.querySelectorAll('.toc a[href^="#"], .site-nav a[href^="#"]').forEach(function (a) {
      const id = a.getAttribute("href").slice(1);
      (links[id] = links[id] || []).push(a);
    });
    const all = Object.keys(links).reduce(function (acc, k) {
      return acc.concat(links[k]);
    }, []);

    const spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && links[entry.target.id]) {
            all.forEach(function (a) {
              a.classList.remove("active");
            });
            links[entry.target.id].forEach(function (a) {
              a.classList.add("active");
            });
          }
        });
      },
      { rootMargin: "-15% 0px -75% 0px" }
    );

    document.querySelectorAll("main section[id]").forEach(function (s) {
      spy.observe(s);
    });
  }

  /* ---------- reveal-on-scroll ---------- */

  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let revealObserver = null;

  function initReveal() {
    if (reducedMotion) {
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 }
      );
    }

    document.querySelectorAll(".reveal:not(.visible)").forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ---------- portrait flip (tap support for touch devices) ---------- */

  function initFlip() {
    const card = document.getElementById("portrait-flip");
    if (card) {
      card.addEventListener("click", function () {
        card.classList.toggle("flipped");
      });
    }
  }

  /* ---------- back-to-top ---------- */

  function initTopBtn() {
    const btn = document.getElementById("back-to-top");
    btn.hidden = false;

    window.addEventListener(
      "scroll",
      function () {
        btn.classList.toggle("show", window.scrollY > 600);
      },
      { passive: true }
    );

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- boot ---------- */

  renderAll();
  initTheme();
  initLang();
  initNav();
  initSpy();
  initFlip();
  initTopBtn();
})();
