# Hardik Gupta — Portfolio

Editorial-meets-research-lab portfolio for an ML / GenAI engineer.
Dark ink palette, signal-amber accents, animated waveform motifs, Instrument Serif + IBM Plex Mono typography.

**Stack:** Vite · React 18 · Tailwind CSS 3 · lucide-react

---

## 📂 Project Structure

```
hardik-portfolio/
├── public/
│   └── favicon.svg              ← Amber signal-dot favicon
├── src/
│   ├── components/
│   │   └── Portfolio.jsx        ← Main component (Nav, Hero, About, Skills, …)
│   ├── data/
│   │   └── resume.js            ← ⭐ Edit this to update content
│   ├── App.jsx
│   ├── main.jsx                 ← React entry point
│   └── index.css                ← Tailwind directives + design system CSS
├── index.html                   ← HTML shell with SEO + font preconnect
├── package.json
├── vite.config.js               ← Vendor chunking for CDN caching
├── tailwind.config.js
├── postcss.config.js
├── vercel.json                  ← Vercel deployment config
├── render.yaml                  ← Render blueprint
├── netlify.toml                 ← Netlify config (bonus)
├── .nvmrc                       ← Node 20
└── .gitignore
```

---

## 🚀 Quick Start

```bash
# install
npm install

# dev (http://localhost:5173)
npm run dev

# production build
npm run build

# preview the production build locally
npm run preview
```

Requires **Node 18+** (Node 20 recommended, pinned in `.nvmrc`).

---

## ✏️ Updating Content

**All text, stats, projects, and skill lists live in `src/data/resume.js`.**
You do not need to touch component code to update the portfolio.

Common edits:

| Change | File | Field |
|---|---|---|
| Name / email / phone | `src/data/resume.js` | `PROFILE` |
| Hero stats (R², latency, etc.) | `src/data/resume.js` | `HERO_STATS` |
| Skill groups | `src/data/resume.js` | `SKILL_GROUPS` |
| Experience entries | `src/data/resume.js` | `EXPERIENCE` |
| Projects | `src/data/resume.js` | `PROJECTS` (update `live` / `code` URLs) |
| Achievements | `src/data/resume.js` | `ACHIEVEMENTS` |
| "Now" block | `src/data/resume.js` | `NOW_BLOCK` |

**Colors / design tokens:** edit `src/index.css` (CSS variables at the top) and the mirrored `C` object inside `src/components/Portfolio.jsx`.

---

## 🌐 Deploy

### Option A — Vercel (recommended, 1 min)

1. Push the project to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) → import the repo.
3. Vercel auto-detects Vite from `vercel.json`. Click **Deploy**.

Or via CLI:
```bash
npm i -g vercel
vercel            # deploy preview
vercel --prod     # deploy production
```

### Option B — Render

1. Push the project to GitHub.
2. On [render.com/dashboard](https://dashboard.render.com) → **New +** → **Blueprint**.
3. Connect the repo. Render reads `render.yaml` and provisions a static site.
4. Done — public URL is live.

Manual alternative (no blueprint):
- **New +** → **Static Site**
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- Add rewrite: `/*` → `/index.html` → `200`

### Option C — Netlify

```bash
npm i -g netlify-cli
netlify deploy --build           # preview
netlify deploy --build --prod    # production
```

Or drag-and-drop the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop) after running `npm run build`.

---

## ⚡ Performance Notes

- Fonts are preconnected in `index.html` and use `display=swap` to avoid FOIT.
- Vite chunks `react`/`react-dom` and `lucide-react` separately so repeat visits load instantly from the CDN cache.
- Assets under `/assets/*` get `Cache-Control: max-age=31536000, immutable` on both Vercel and Render.
- Reduced-motion users have all animations and smooth-scroll disabled (see the media query in `src/index.css`).

---

## 🎨 Design System

| Token | Hex | Purpose |
|---|---|---|
| `--bg` | `#0B0B0A` | Page background (ink) |
| `--bg-elev` | `#141311` | Elevated card surface |
| `--ink` | `#1B1A18` | Alternating section bg |
| `--bone` | `#F2EFE6` | Primary text |
| `--bone-dim` | `#C9C4B3` | Secondary text |
| `--muted` | `#6B6763` | Labels, dividers |
| `--amber` | `#F5A524` | Primary accent — signal amber |
| `--phosphor` | `#00D17F` | Status / live indicators |
| `--rule` | `#2A2825` | Borders / hairlines |

Typography:
- **Display** — Instrument Serif (headlines, italic numerals)
- **Body** — Fraunces (prose, pull-quotes)
- **Technical** — IBM Plex Mono (labels, data, code blocks)

---

## 🧾 License

Personal portfolio — fork freely, but please swap out Hardik's details.
