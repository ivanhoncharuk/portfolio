# Ivan Honcharuk — Portfolio

Personal portfolio site for **Ivan Honcharuk**, Full Stack & AI Developer.

Built with React 19, Vite and Tailwind CSS v4, animated with Motion, and deployed on Vercel.

## Stack

| | |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animation | Motion (`motion/react`) |
| Icons | lucide-react + inline brand SVGs |
| Hosting | Vercel |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Editing the content

All copy lives in one place — [`src/data/content.js`](src/data/content.js).
Change it there and every section updates:

- `profile` — name, role, contact details, bio paragraphs
- `stats` — the three figures under the hero
- `experience` — roles, bullet points, tech stack
- `projects` — **placeholders; replace with your real work.** `live` and `repo`
  are optional, and each card renders without those buttons if they're absent
- `skills` — the toolkit groups
- `education` — schools and degrees

## Deploying to Vercel

1. Import this repository at [vercel.com/new](https://vercel.com/new).
2. Vercel detects Vite automatically — no configuration needed
   (`vercel.json` pins the framework, build command and output directory).
3. Deploy. Every push to `main` ships a new production build.

## Project layout

```
src/
├── components/
│   ├── Background.jsx   # grid, aurora blooms, pointer spotlight
│   ├── Nav.jsx          # sticky nav, scroll progress, mobile sheet
│   ├── Hero.jsx         # hero + tech marquee
│   ├── About.jsx
│   ├── Experience.jsx   # timeline + education
│   ├── Work.jsx         # project cards
│   ├── Skills.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── BrandIcons.jsx   # GitHub / LinkedIn marks
│   └── primitives.jsx   # Reveal, Section, SectionHeading, Tag, Panel
├── data/content.js      # ← all site content
├── index.css            # theme tokens and base styles
└── App.jsx
```

## Notes

- Respects `prefers-reduced-motion`: animations are disabled for users who ask.
- Keyboard accessible with a skip link and visible focus rings.
- Dark theme only, by design.
