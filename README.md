# inp.cz

Personal site and blog of Pavel Navrátil — [inp.cz](https://inp.cz). Built with
[Astro](https://astro.build), styled with Tailwind CSS v4, bilingual (EN/CS),
and deployed to GitHub Pages.

## Requirements

- Node.js 22+
- pnpm — pinned to the version in `packageManager`; run `corepack enable` and
  pnpm will use it automatically.

## Getting started

```bash
pnpm install
pnpm dev          # dev server on http://localhost:4321
```

## Scripts

| Script | What it does |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | `astro check` (types) followed by `astro build` — both must pass |
| `pnpm preview` | Serve the production build locally |
| `pnpm check` | `astro check` + `biome check .` — what to run before pushing |
| `pnpm fix` | Apply Biome's formatting and lint fixes |

Formatting is Biome's, with **tabs** for indentation. `.editorconfig` mirrors
that; Biome 1.7 does not read `.editorconfig` itself, so the two are kept in
sync by hand.

## Layout

```
src/
  assets/css/      Global styles and design tokens (CSS custom properties)
  collections/     Content as JSON, per language: en/ and cs/
  components/      Astro components, grouped by role
  content/         Blog posts (Astro content collections)
  i18n/            ui.ts holds every translation string; utils.ts the helpers
  layouts/         main.astro — <head>, SEO tags, JSON-LD, theme bootstrap
  pages/           Routes; cs/ mirrors the English tree
  types/           Shared content types
  utils/           Small helpers
```

### Adding a translation

Add the key to **both** language blocks in `src/i18n/ui.ts`, then read it with
`useTranslations(lang)`. English is the default locale and is served without a
prefix (`/who/`); Czech is prefixed (`/cs/who/`). Links are built with
`useTranslatedPath`, which adds the trailing slash the routes expect.

### Certifications

`retiringOn` in `src/collections/*/certifications.json` is a machine-readable
`YYYY-MM` month. Active vs. retired is derived by comparing it to the current
date at **build time**, and the month name is localized at render time — see
`src/utils/certifications.ts`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. The custom domain is set in the repository's
Pages settings and pinned by `public/CNAME`.
