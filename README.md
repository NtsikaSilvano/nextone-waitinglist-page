# NextOne Waitlist Landing Page

Single-page waitlist landing page for **NextOne** — a creator economy platform built for South African youth to sell digital products and get paid in Rands.

## Tech stack

- **React + TypeScript**
- **Vite**
- **Tailwind CSS (v4)** via the Vite plugin

## Design system (tokens)

The page follows these brand tokens:

- **Primary**: `#FF3B30`
- **Background**: `#121212`
- **Surface**: `#1E1E1E`
- **Surface 2 / Border**: `#2A2A2A`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#B3B3B3`
- **Accent**: `#00E0FF`
- **Success**: `#00C853`
- **Font**: Space Grotesk (Google Fonts)

Theme tokens live in `src/index.css` under `@theme`.

## Local development

Install deps:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Project structure

- `src/pages/WaitlistPage.tsx`: **single page component** (all sections + waitlist form)
- `src/App.tsx`: renders `<WaitlistPage />`
- `src/index.css`: Tailwind import + `@theme` tokens
- `index.html`: Space Grotesk Google Fonts import

## Deploy to Vercel

### Option A: Vercel UI

1. Create a new project in Vercel and import the GitHub repo.
2. Set **Framework Preset** to **Vite** (Vercel usually detects this automatically).
3. Deploy.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

## Notes

- This is a **single-page** app; `vercel.json` is configured to route all paths to `index.html`.
- There are **no environment variables** required for the waitlist form UI state (submit is local-only).
