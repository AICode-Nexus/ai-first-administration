# AI First Administration Learning Site

> AI First 行政思维转型专题课的静态学习站点

## 技术栈

- Next.js 15 + React 19
- TypeScript
- Tailwind CSS v4
- Radix UI Dialog
- React Markdown + Mermaid
- Biome
- pnpm

## 快速开始

```bash
pnpm install --no-frozen-lockfile
pnpm dev
```

访问：`http://localhost:3000/learn`

## 构建

```bash
pnpm type-check
pnpm lint
pnpm build
```

生产构建会静态导出到 `out/`，GitHub Pages 使用 `/ai-first-administration` 作为 basePath。
