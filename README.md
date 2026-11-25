# zyro.games

Studio landing page showcasing all zyro games. Pure static site — no build step, no dependencies.

## Run locally

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Or open `index.html` directly in a browser.

## Add or edit games

Edit `games.js` — each entry has title, tagline, description, icon, accent color,
tags, and store links. Set `links.ios` / `links.android` / `links.web` to the
real URLs once the games are live; `null` renders a "Soon" badge.

Game icons live in `assets/games/`.

## Deploy

Any static host works. Point `zyro.games` DNS at one of:

- **Cloudflare Pages / Netlify / Vercel** — drag this folder in, done.
- **GitHub Pages** — push to a repo, enable Pages on the branch.
- **Your own server** — copy the files into the web root (nginx/Caddy/Apache).
