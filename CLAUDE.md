# CLAUDE.md

Astro static site for andrewgarner.com — personal portfolio and resume.

## Setup

Package manager is **Bun**.

## Verify before committing

```sh
bun run astro check
bun run eslint
bun run prettier --check --ignore-unknown .
```

Auto-fix lint and formatting: `bun run eslint --fix . && bun run prettier --write --ignore-unknown .`

## Conventions

See [.claude/conventions.md](.claude/conventions.md) when writing or modifying code.
