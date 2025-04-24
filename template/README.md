# My Turborepo Config Package

> A scaffolding and configuration package for Turborepo-based monorepos, providing boilerplate for React frontend, Next.js web, HTTP backend, and WebSocket backend.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation & Usage](#installation--usage)
   - [Global Install](#global-install)
   - [Using NPX](#using-npx)
5. [Generated Structure](#generated-structure)
6. [Configuration Details](#configuration-details)
   - [React Frontend](#react-frontend)
   - [Next.js Web](#nextjs-web)
   - [HTTP Backend](#http-backend)
   - [WebSocket Backend](#websocket-backend)
7. [Customization](#customization)
8. [CLI Commands](#cli-commands)
9. [Contributing](#contributing)
10. [License](#license)

---

## Introduction

This package provides a one‑stop scaffolding solution for monorepos powered by Turborepo. It generates a opinionated boilerplate containing:

- A React-based frontend
- A Next.js-powered web directory (`/web`)
- An HTTP backend service (`/services/api`)
- A WebSocket backend service (`/services/ws`)

Use it to jumpstart new projects without manually wiring up each workspace.

---

## Features

- Standardized folder structure
- Preconfigured `tsconfig.json`, ESLint, Prettier, and Jest
- `turborepo.json` workspace setup with optimized caching
- Environment variable management via `.env` files

---

## Prerequisites

- Node.js v16+ (LTS recommended)
- npm v8+ or yarn v1/v2
- Git

---

## Installation & Usage

### Global Install

Install globally and scaffold a new project:

```bash
npm install -g create-turbo-monorepo
create-turbo-monorepo my-project
```  

### Using NPX

Without global install:

```bash
npx create-turbo-monorepo my-project
```  

Follow the interactive prompts or pass flags:

```bash
npx create-turbo-monorepo my-project --template typescript --name my-org
```

---

## Generated Structure

```text
my-project/
├── apps/
│   ├── web/              # Next.js frontend
│   └── react-frontend/   # CRA / Vite React app
├── services/
│   ├── api/              # HTTP backend (Express/Koa)
│   └── ws/               # WebSocket backend (ws / socket.io)
├── packages/
│   └── config/           # Shared configs (eslint, tsconfig, etc.)
├── turbo.json            # Turborepo config
├── package.json
└── README.md
```

---

## Configuration Details

### React Frontend

- Uses Vite
- Entry: `apps/react-web`
- Linted with ESLint and Prettier

### Next.js Web

- Based on Next.js 15 & React 19
- Entry: `apps/web`

### HTTP Backend

- Express.js server in `apps/http-backend`
- `tsconfig` path alias for shared code

### WebSocket Backend

- Uses `ws` library in `apps/ws-backend`
- Example echo server and broadcast utility

---

## CLI Commands

- `npm run dev`  
  Starts all workspaces in parallel (via Turborepo pipeline).

- `npm run build`  
  Builds all workspaces sequentially.

- `npm run lint`  
  Lints all code.

- `npm test`  
  Runs tests across services.

---

## Contributing

1. Fork the repo
2. Clone your fork
3. Run `npm install`
4. Create a branch: `git checkout -b feature/your-feature`
5. Commit changes and open a PR


---

## License

MIT © Shreyansh Shukla