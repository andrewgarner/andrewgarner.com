# Code Conventions

## Components

- Pure Astro components only — no client-side frameworks (React, Vue, etc.).
- Define props via `interface Props` in the frontmatter block.

## Styling

- Tailwind utility classes inline. Use `dark:` prefix for dark mode.
- `@tailwindcss/typography` plugin is available — use `prose` classes for rich text.

## TypeScript

- Strictest config (`astro/tsconfigs/strictest`). Never use `any`.
