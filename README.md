# Voya by Vntrip

Single-page React presentation site for `Voya`, a premium health + travel concierge concept layered on top of Vntrip's travel infrastructure.

Live site:
[https://geomessi.github.io/voya/](https://geomessi.github.io/voya/)

## What this repo is

This project is a presentation prototype, not a production booking product.

It is designed to help communicate:
- the master `Voya` product story
- the trust / concierge layer around cross-border care
- the premium product world and mockups
- campaign directions that sit under one unified Voya brand

## Tech stack

- React 18
- Vite
- Tailwind CSS
- `lucide-react`

## Project structure

- [src/App.jsx](/Users/georgiamessinger/Documents/New%20project%204/src/App.jsx): main page content, sections, mockups, messaging, campaign tabs
- [src/index.css](/Users/georgiamessinger/Documents/New%20project%204/src/index.css): global styles
- [public/voya-hero-mockups-transparent.png](/Users/georgiamessinger/Documents/New%20project%204/public/voya-hero-mockups-transparent.png): current hero mockup image
- [vite.config.js](/Users/georgiamessinger/Documents/New%20project%204/vite.config.js): Vite config, including GitHub Pages base path
- [.github/workflows/deploy-pages.yml](/Users/georgiamessinger/Documents/New%20project%204/.github/workflows/deploy-pages.yml): GitHub Pages deploy workflow

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This repo deploys automatically to GitHub Pages on every push to `main`.

Important details:
- Pages source should be set to `GitHub Actions`
- the Vite base path is `/voya/`
- the workflow builds `dist/` and publishes it via GitHub Actions

If the repo name changes, update the `base` value in [vite.config.js](/Users/georgiamessinger/Documents/New%20project%204/vite.config.js).

## Editing guide

If you want to make quick changes:

- Update headlines, section copy, tabs, and mockups in [src/App.jsx](/Users/georgiamessinger/Documents/New%20project%204/src/App.jsx)
- Replace hero assets in [public](/Users/georgiamessinger/Documents/New%20project%204/public) if needed
- Keep brand capitalization as `Vntrip`
- Keep the visual system consistent:
  - dark navy shell
  - gold/orange accents
  - premium rounded cards
  - concise editorial copy

## Current messaging system

Master product:
- `Voya`

Campaign platform names:
- `Second Opinion?`
- `At Last.`
- `Stay A Little Longer.`
- `Word Travels.`
- `Holiday, Handled.`

## Notes

- This site intentionally avoids consumer-facing use of the phrase `medical tourism`
- The hero currently uses a transparent PNG mockup asset rather than fully code-built phone UI
- If GitHub push fails with a large asset, compress the image before retrying
