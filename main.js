/* zyro.games — page rendering. Game data lives in games.js. */

const $ = (s) => document.querySelector(s);
const svg = (id, cls = "ic") => `<svg class="${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;
const pageUrl = (g) => `game.html?id=${encodeURIComponent(g.id)}`;
const isLive = (g) => Boolean(g.links.ios || g.links.android || g.links.web);
const statusText = (g) => (isLive(g) ? "Out now" : "In development");
const tileStyle = (g) => `--tile:${g.tile};--ink:${g.ink}`;

const STORES = {
  ios: { icon: "i-apple", top: "Download on the", name: "App Store" },
  android: { icon: "i-play", top: "Get it on", name: "Google Play" },
  web: { icon: "i-arrow-ne", top: "Play in your", name: "Browser" },
};

function storeBadges(g) {
  return ["ios", "android", "web"]
    .filter((k) => k !== "web" || g.links.web)
    .map((k) => {
      const s = STORES[k];
      const href = g.links[k];
      const inner = `${svg(s.icon)}<span><small>${href ? s.top : "Coming soon to"}</small>${s.name}</span>`;
      return href
        ? `<a class="store" href="${href}" target="_blank" rel="noopener">${inner}</a>`
        : `<span class="store is-soon">${inner}</span>`;
    })
    .join("");
}

/* ------------------------------------------------------------ home page */

function renderShelf() {
  const el = $("#shelf");
  if (!el) return;
  el.innerHTML = GAMES.map(
    (g) => `
    <a class="shelf-tile" href="${pageUrl(g)}" style="${tileStyle(g)}">
      <span class="shelf-genre">${g.genre}</span>
      <img src="${g.icon}" alt="" />
      <span class="shelf-title">${g.title}</span>
    </a>`
  ).join("");
}

let genre = "All";

function renderTabs() {
  const el = $("#tabs");
  if (!el) return;
  const genres = ["All", ...new Set(GAMES.map((g) => g.genre))];
  el.innerHTML = genres
    .map((name) => `<button class="tab" data-genre="${name}" aria-pressed="${name === genre}">${name}</button>`)
    .join("");
}

function renderGrid() {
  const el = $("#game-grid");
  if (!el) return;
  const list = genre === "All" ? GAMES : GAMES.filter((g) => g.genre === genre);
  el.innerHTML = list
    .map(
      (g) => `
    <article class="game-card${g.featured && genre === "All" ? " is-featured" : ""}">
      <a class="game-art" href="${pageUrl(g)}" style="${tileStyle(g)}" tabindex="-1" aria-hidden="true">
        <img src="${g.icon}" alt="" loading="lazy" />
      </a>
      <div class="game-info">
        <p class="game-meta"><span>${g.genre}</span><span class="status${isLive(g) ? " is-live" : ""}">${statusText(g)}</span></p>
        <h3><a href="${pageUrl(g)}">${g.title}</a></h3>
        <p class="game-tagline">${g.tagline}</p>
        <p class="game-desc">${g.description}</p>
        <a class="more" href="${pageUrl(g)}" aria-label="View ${g.title}">View game ${svg("i-arrow")}</a>
      </div>
    </article>`
    )
    .join("");
}

function setupTabs() {
  const el = $("#tabs");
  if (!el) return;
  el.addEventListener("click", (e) => {
    const b = e.target.closest("[data-genre]");
    if (!b) return;
    genre = b.dataset.genre;
    renderTabs();
    renderGrid();
  });
}

/* ------------------------------------------------------------ game page */

function renderGamePage() {
  const el = $("#game-page");
  if (!el) return;
  const id = new URLSearchParams(location.search).get("id");
  const g = GAMES.find((x) => x.id === id);

  if (!g) {
    el.innerHTML = `
      <section class="wrap notfound">
        <p class="label">404</p>
        <h1 class="h2">We couldn't find that game.</h1>
        <a class="btn btn-dark" href="index.html#games">See all games ${svg("i-arrow")}</a>
      </section>`;
    return;
  }

  document.title = `${g.title} — zyro.games`;
  const others = GAMES.filter((x) => x.id !== g.id);

  el.innerHTML = `
    <nav class="wrap crumbs" aria-label="Breadcrumb">
      <a href="index.html#games">Games</a><span>/</span><span aria-current="page">${g.title}</span>
    </nav>

    <section class="wrap">
      <div class="g-hero" style="${tileStyle(g)}">
        <div class="g-hero-text">
          <p class="game-meta"><span>${g.genre}</span><span class="status${isLive(g) ? " is-live" : ""}">${statusText(g)}</span></p>
          <h1>${g.title}</h1>
          <p class="g-tagline">${g.tagline}</p>
          <div class="stores">${storeBadges(g)}</div>
        </div>
        <img class="g-icon" src="${g.icon}" alt="${g.title} app icon" />
      </div>
    </section>

    <section class="wrap section-sm">
      <div class="g-body">
        <div>
          <p class="label">About the game</p>
          <p class="g-lead">${g.description}</p>

          <p class="label label-gap">Features</p>
          <ol class="g-features">
            ${g.features
              .map(([t, d], i) => `<li><span class="num">${String(i + 1).padStart(2, "0")}</span><div><h3>${t}</h3><p>${d}</p></div></li>`)
              .join("")}
          </ol>
        </div>

        <aside class="g-facts" aria-label="Game details">
          <dl>
            <div><dt>Genre</dt><dd>${g.genre}</dd></div>
            <div><dt>Platforms</dt><dd>iOS, Android${g.links.web ? ", Web" : ""}</dd></div>
            <div><dt>Developer</dt><dd>zyro.games</dd></div>
            <div><dt>Status</dt><dd>${statusText(g)}</dd></div>
            <div><dt>Tags</dt><dd>${g.tags.join(", ")}</dd></div>
          </dl>
          <a class="btn btn-line btn-block" href="mailto:hello@zyro.games?subject=${encodeURIComponent(g.title)}">Ask about ${g.title}</a>
        </aside>
      </div>
    </section>

    <section class="wrap section-sm">
      <div class="section-top">
        <h2>More from zyro</h2>
        <a class="more" href="index.html#games">All games ${svg("i-arrow")}</a>
      </div>
      <div class="shelf shelf-4">
        ${others
          .map(
            (o) => `
          <a class="shelf-tile" href="${pageUrl(o)}" style="${tileStyle(o)}">
            <span class="shelf-genre">${o.genre}</span>
            <img src="${o.icon}" alt="" />
            <span class="shelf-title">${o.title}</span>
          </a>`
          )
          .join("")}
      </div>
    </section>`;
}

/* ------------------------------------------------------------ shared */

function renderFooter() {
  const el = $("#footer-games");
  if (el) el.innerHTML = GAMES.map((g) => `<li><a href="${pageUrl(g)}">${g.title}</a></li>`).join("");
  document.querySelectorAll(".year").forEach((y) => (y.textContent = new Date().getFullYear()));
  const count = $("#game-count");
  if (count) count.textContent = String(GAMES.length).padStart(2, "0");
}

function setupHeader() {
  const header = $("#header");
  const toggle = $("#menu-toggle");
  const close = () => {
    header.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "Menu";
  };
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
  });
  $("#menu").addEventListener("click", (e) => e.target.closest("a") && close());
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 4);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

renderShelf();
renderTabs();
renderGrid();
setupTabs();
renderGamePage();
renderFooter();
setupHeader();
