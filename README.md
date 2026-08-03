# Personal Website

A Next.js (App Router, TypeScript, Tailwind v4) site with Home, Projects, Resume, and a Markdown-backed Blog. Built for static export and deployment to GitHub Pages.

## Fill in your content

Everything you need to personalize lives in a few places:

- [`data/site.ts`](data/site.ts) — your name, tagline, bio, location, email, social links, resume file path.
- [`data/projects.ts`](data/projects.ts) — your project list.
- [`data/resume.ts`](data/resume.ts) — experience, education, skills.
- [`content/blog/`](content/blog/) — one Markdown file per blog post (frontmatter: `title`, `date`, `excerpt`, `tags`). Add a new `.md` file here to publish a post.
- [`public/resume.pdf`](public/) — drop your resume PDF here to match the download link in `data/site.ts`.
- `app/layout.tsx` — page metadata (title/description) pulls from `data/site.ts` automatically.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building for production

```bash
npm run build
```

This produces a static export in `./out` (configured via `output: "export"` in `next.config.ts`), ready to host anywhere that serves static files.

## Deploying to GitHub Pages

A workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and deploys `./out` to GitHub Pages automatically on every push to `main`.

One-time setup:

1. Push this repo to GitHub.
2. In the repo settings, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically.

The workflow sets the Next.js `basePath` automatically based on your repo name:
- Repo named `<username>.github.io` → site served at the domain root, no `basePath`.
- Any other repo name (e.g. `personal-website`) → treated as a project page, served at `<username>.github.io/<repo-name>`, and `basePath` is set to `/<repo-name>` at build time.

## Tech

- Next.js App Router + TypeScript
- Tailwind CSS v4 (CSS-first config in `app/globals.css`)
- Markdown blog via `gray-matter` + `remark`
