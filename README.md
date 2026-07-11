# andrepacheco.pt — Portfolio

My personal portfolio, live at [andrepacheco.pt](https://andrepacheco.pt).

Single-page site built with **Vue 3 + Vite + Tailwind CSS v4**, with an animated square-grid hero, a tech-stack section rendered from [simple-icons](https://simple-icons.github.io/simple-icons-website/) (inlined at build time, no CDN), a tabbed **Live Platforms** section for the self-hosted demos, grouped project sections (games / Java & systems / mobile), and a homelab/infrastructure overview.

## Features

- **EN/PT i18n** (vue-i18n) — English by default, Portuguese auto-detected from the browser language; manual choice persists in `localStorage`
- **Live platform tabs** — one tab per dockerized platform (VoltExchange, Travel Companion, Folio, Millionaire Game, GameLobby, Kits, EcoFuturo) with screenshot, stack, highlights and demo credentials where applicable
- **Animated square grid** hero background (canvas) that respects `prefers-reduced-motion`
- Fully static output — no backend, no runtime configuration

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```

## Deployment

The build output is static, so it works either way:

- **Docker (homelab)**: `docker build -t portfolio . && docker run -p 8090:80 portfolio` — multi-stage build, served by nginx
- **Cloudflare Pages**: build command `npm run build`, output directory `dist`

Live URLs for the platform tabs live in [`src/data/projects.js`](src/data/projects.js) — each entry has a `live` flag to flip when the corresponding platform goes online.
