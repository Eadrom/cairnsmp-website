# Cairn SMP website

The static website and player handbook for [Cairn SMP](https://cairnsmp.com/), a small Minecraft Java Edition survival community. The landing page is custom Astro; handbook pages use Astro Starlight and Markdown.

## Requirements

- Node.js 22 or newer
- npm (included with Node.js)

## Local development

```sh
npm install
npm run dev
```

Astro prints the local preview URL in the terminal. To verify a change before pushing:

```sh
npm run check
npm run build
```

The production output is written to `dist/`.

## Project map

- `src/pages/index.astro` — custom landing page
- `src/content/docs/` — Starlight handbook pages
- `src/content/docs/features/` — one Markdown file per server feature
- `src/content/changelog/` — structured Markdown release notes
- `src/data/commands.json` — structured command reference
- `src/content.config.ts` — build-time content validation
- `src/styles/` — landing page and Starlight themes
- `public/` — domain, crawler, favicon, and social-preview assets

Git and Markdown are the content-management workflow. V1 has no database, admin interface, authentication, or server runtime.

## Add a feature page

Create a Markdown file under `src/content/docs/features/`. The file name becomes the URL, and Starlight automatically adds it to the Features sidebar. Use `sidebar.order` to control ordering.

```md
---
title: Feature name
description: A unique, concise page description.
sidebar:
  order: 6
---

Verified player documentation goes here.
```

Do not publish guessed mechanics, commands, drop rates, or values. Leave an explicit TODO until source information is available.

## Add a changelog release

Copy `src/content/changelog/_template.md` to a stable slug such as `1-4.md`. Replace the frontmatter and body, remove `published: false` (or set it to `true`), and keep the release date in `YYYY-MM-DD` format.

The changelog index and homepage “Latest update” section both read the same collection. Releases are sorted newest first by date.

## Add or edit commands

Edit `src/data/commands.json`. Every entry requires a unique `id`, `command`, `description`, and `category`; aliases, example, and notes are optional. Copy the unpublished template object and set `published` to `true` only after the command is verified for Cairn SMP.

Run `npm run check` after editing content. Invalid metadata fails validation.

## Deployment

The workflow in `.github/workflows/deploy.yml` runs on pull requests and pushes to `main`:

- installs exactly from `package-lock.json` with `npm ci`
- runs `npm run check`
- runs `npm run build`
- uploads and deploys `dist/` to GitHub Pages on non-PR runs

In the GitHub repository, choose **Settings → Pages → Source: GitHub Actions**. The canonical custom domain is `cairnsmp.com`; Astro intentionally has no repository-name `base` path. `public/CNAME` preserves the custom domain during deployment.

DNS remains managed at Porkbun. Do not change the `play.cairnsmp.com` Minecraft record while configuring the website. Use GitHub’s current custom-domain documentation when adding the apex and `www` records instead of copying potentially stale IP addresses into this repository.

No secrets are required for V1.
