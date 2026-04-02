# Haul247web

Bootstrapped Next.js project with:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod

## Requirements

- Node.js 20+ (recommended)
- npm 10+

## Setup

```bash
npm install
```

## Environment variables

No `.env` file is required for the current setup.

## Run locally

```bash
npm run dev
```

If port 3000 is in use:

```bash
npm run dev -- -p 3001
```

## Production build

```bash
npm run build
```

`build` is configured to run `next build --webpack` to avoid local Turbopack native-binding issues on some macOS setups.

## Professional testing process

### 1) Static and type quality gates

- `npm run lint` - ESLint checks for code quality and framework best practices.
- `npm run typecheck` - TypeScript strict-mode checks.

### 2) Unit / integration tests

- `npm test` - runs Vitest test suite.
- `npm run test:watch` - interactive local development mode.
- `npm run test:coverage` - coverage report for tracked source files.

### 3) End-to-end tests

- `npm run test:e2e` - Playwright browser tests.
- `npm run test:e2e:ui` - Playwright interactive runner.

### 4) Release gate

- `npm run test:all` runs lint + typecheck + coverage + e2e.
- CI workflow (`.github/workflows/ci.yml`) executes the same full gate on push/PR.

## Troubleshooting

If dependency state gets corrupted locally:

```bash
rm -rf node_modules package-lock.json
npm install
```
# haul247-website-2026-04
