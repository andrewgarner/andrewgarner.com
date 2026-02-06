# CLAUDE.md

Astro static site for andrewgarner.com — personal portfolio and resume.

## Setup

Package manager is **Bun**.

## Verify before committing

```sh
bun astro check
bun eslint
bun prettier --check --ignore-unknown .
```

Auto-fix lint and formatting: `bun eslint --fix . && bun prettier --write --ignore-unknown .`

## Conventions

See [.claude/conventions.md](.claude/conventions.md) when writing or modifying code.
