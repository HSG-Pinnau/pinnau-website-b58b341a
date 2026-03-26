# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HSG Pinnau handball club website (German language). Built with Vite + React 19 + TypeScript, using TinaCMS as a Git-based headless CMS. Content is stored as JSON/Markdown files in `content/` and edited via the TinaCMS admin panel at `/admin`.

## Commands

```sh
pnpm install          # Install dependencies (requires pnpm, Node >=20.19.0)
pnpm dev              # Start dev server (runs TinaCMS + Vite on port 8080)
pnpm build            # Production build (tinacms build && vite build)
pnpm build:dev        # Development build
pnpm lint             # ESLint
pnpm preview          # Preview production build
```

## Architecture

- **Routing:** React Router DOM v7 in `src/App.tsx`. Client-side SPA with Vercel catch-all rewrite. Routes use German paths (`/uber-uns`, `/mannschaften`, `/kontakt`, etc.). Dynamic routes: `/teams/:teamId`, `/news/:articleId`.
- **Pages:** `src/pages/` — each route has a page component that fetches data from TinaCMS and renders feature components.
- **Components:** `src/components/` — feature components (Hero, Navigation, Footer, etc.). `src/components/ui/` contains ~47 shadcn/ui primitives (do not edit manually, regenerate with shadcn CLI).
- **Styling:** Tailwind CSS 3 with CSS variable theming in `src/index.css`. HSL color system with light/dark mode. Uses `tailwindcss-animate` and `@tailwindcss/typography` plugins.
- **Path alias:** `@/*` maps to `./src/*`.

## TinaCMS Content Model

Configuration in `tina/config.ts`. Auto-generated types and client in `tina/__generated__/` (do not edit).

**Collections:**
- `mannschaften` (teams) — JSON in `content/mannschaften/`. References trainers and venues. Has nested trainingszeiten with hall references.
- `trainer` — JSON in `content/trainer/`
- `hallen` (venues) — JSON in `content/hallen/`
- `vorstand` (board) — JSON in `content/vorstand/`
- `hallenhefte` (newsletters) — JSON in `content/hallenhefte/`
- `news` — Markdown in `content/news/`. Rich-text body field.

**Data fetching pattern:**
```typescript
import client from "../../tina/__generated__/client";
const res = await client.queries.mannschaften({ relativePath: `${teamId}.json` });
```

Navigation components cache team/news data for 5 minutes (`src/components/navigation/*DataCache.ts`).

## Key Conventions

- All user-facing text is in German.
- TypeScript strict mode is off; the codebase uses relaxed type checking.
- External integrations: handball4all widget (team standings), Instagram links, Google Maps venue links, Vercel Analytics/Speed Insights.
- Deployed on Vercel (see `vercel.json` for SPA routing config).
