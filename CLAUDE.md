# CLAUDE.md

Astro static site for andrewgarner.com — personal portfolio and resume.

## Setup

Package manager is **pnpm** (requires Node.js 22).

## Verify before committing

```sh
pnpm astro check
pnpm eslint
pnpm prettier --check --ignore-unknown .
```

Auto-fix lint and formatting: `pnpm eslint --fix . && pnpm prettier --write --ignore-unknown .`

## Conventions

See [.claude/conventions.md](.claude/conventions.md) when writing or modifying code.
