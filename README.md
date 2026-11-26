# HSG Pinnau Website

Website der Handball-Spielgemeinschaft HSG Pinnau (TSV Prisdorf & VfL Pinneberg).

Gebaut mit Vite, React, TypeScript, Tailwind CSS und shadcn/ui. Inhalte werden über [TinaCMS](https://tina.io) gepflegt (Admin unter `/admin`) und liegen als JSON/Markdown in `content/`. Gehostet auf Vercel.

## Lokal entwickeln

Voraussetzungen: Node.js 24 und pnpm.

```sh
pnpm install
pnpm dev        # TinaCMS + Vite auf http://localhost:8080
pnpm build      # Produktions-Build
pnpm lint
```

Weitere Hinweise zur Struktur stehen in `CLAUDE.md`.
