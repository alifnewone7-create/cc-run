# Coco AI — PRD

## Original problem statement
1. Copy all files from https://github.com/alifnewone7-create/swenew.git, install deps, run the site as-is.
2. Redesign home, /login and /registration using the Refero "ToDesktop" style reference
   (https://styles.refero.design/style/dd89ce6c-f0aa-4ca8-bd63-19dcd81920a7). Rename to **Coco AI**,
   new logo / OG image / favicon (attached asset), OG title + description without hyphens (use `|`),
   unique context-matched icons, tech theme, fully responsive.

## Architecture
- Next.js 16 (App Router, TS) app served by supervisor `yarn start` on port 3000, Node 22 (`/root/node22`, symlinked to `/usr/local/bin/node`).
- FastAPI (`/app/backend/server.py`) is a thin reverse proxy: `/api/*` → `http://localhost:3000/api/*`
  (platform ingress sends `/api` to 8001, the app's own route handlers live in Next.js).
- Auth + data: Firebase Auth + Realtime Database (keys hardcoded in repo, unchanged). Groq via `@ai-sdk/groq`.

## Implemented
- 2026-06: repo cloned into `/app/frontend` unchanged, deps installed with yarn, production build + run verified.
- 2026-06: Coco AI redesign
  - `app/coco.css` — scoped design system (Electric Iris #0036ff, Signal Cyan #0093ff, Cosmic #0f071d,
    hairline borders, pill buttons/nav, mono eyebrow tags, dark hero ↔ light spec-sheet zones, motion).
  - Fonts: Inter Tight (display), Inter (body), Geist Mono (technical labels).
  - `components/coco/*` — navbar, hero (terminal + live signal mockup), features, pricing, footer.
  - `components/auth-card.tsx` — new dual-zone login/registration (dark brand panel + light form card).
  - Branding: `/public/coco-ai.jpg` used as logo, favicon, apple icon and OG/Twitter image; metadata,
    OG title/description rewritten with `|` separators.
  - Responsive verified at 390px and 1920px; data-testid on all interactive elements.

## Backlog
- P1: apply Coco AI branding/design to dashboard and inner tool pages (still Sweetex-styled).
- P2: light/dark toggle for the light spec-sheet zone; localized copy.
