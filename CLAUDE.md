# CLAUDE.md

Guide for AI assistants working on this codebase.

## Project Overview

Personal portfolio/resume website for Andrew Garner, built with **Astro** and **TypeScript**. Statically generated, no runtime dependencies.

## Tech Stack

- **Framework:** Astro 5
- **Language:** TypeScript (strictest config)
- **Styling:** Tailwind CSS 3 + Sass
- **Font:** Sometype Mono Variable (@fontsource-variable)
- **Date handling:** Luxon
- **Package manager:** pnpm 10 (requires Node.js 22)

## Project Structure

```
src/
├── components/         # Reusable .astro components (Experience, Section, Skill, Time)
├── layouts/            # Root HTML layout (Layout.astro)
├── pages/              # Routes (index.astro, 404.astro)
└── styles/             # SCSS partials (_variables.scss, _mixins.scss)
public/                 # Static assets (favicon, apple-touch-icon, cv.pdf)
```

## Commands

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Type-check (`astro check`) then build |
| `pnpm preview` | Preview production build |

## Verification - Run Before Committing

Run all three checks to match CI:

```sh
pnpm astro check        # TypeScript/Astro type checking
pnpm eslint             # Lint JS/TS/Astro files
pnpm prettier --check --ignore-unknown .  # Formatting check
```

To auto-fix formatting and lint issues:

```sh
pnpm eslint --fix .
pnpm prettier --write --ignore-unknown .
```

## Code Conventions

- **Components:** Astro single-file components (.astro). Props defined via TypeScript `interface Props` in frontmatter.
- **Styling:** Tailwind utility classes inline. Dark mode via `dark:` prefix. Typography plugin for prose content.
- **TypeScript:** Strictest mode (`astro/tsconfigs/strictest`). No `any` types.
- **Naming:** PascalCase for components, kebab-case for CSS classes and HTML IDs.
- **Indentation:** 2 spaces, LF line endings, UTF-8.
- **No test framework.** Quality is enforced via type checking, linting, and formatting.

## CI Pipeline

GitHub Actions (`.github/workflows/ci.yml`) runs three parallel jobs on PRs and pushes to `main`:

1. `astro check` - type validation
2. `eslint` - linting
3. `prettier --check` - formatting

## Git Hooks

Lefthook runs on pre-commit:
- **ESLint** with `--fix` on staged `.js`, `.cjs`, `.mjs`, `.ts`, `.astro` files
- **Prettier** with `--write` on all staged files

Both auto-stage fixes.

## Architecture Notes

- Pure Astro components only - no client-side JavaScript frameworks (React, Vue, etc.)
- All packages are devDependencies; there are no runtime dependencies
- Build output goes to `dist/` (gitignored)
- Astro-generated types live in `.astro/` (gitignored)
