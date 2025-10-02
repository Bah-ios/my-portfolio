# Copilot Instructions for AI Coding Agents

## Project Overview
This is a Next.js 15 project using the App Router, TypeScript, TailwindCSS, and ESLint. It is structured for a personal portfolio site, bootstrapped with `create-next-app`.

## Key Architecture & Patterns
- **App Directory Structure**: All main pages and layouts are under `src/app/`. The entry point is `src/app/page.tsx`, with global layout in `src/app/layout.tsx`.
- **Styling**: Uses TailwindCSS via `globals.css` and PostCSS. Custom CSS variables for colors and fonts are defined in `globals.css`.
- **Fonts**: Geist Sans and Geist Mono are loaded using `next/font/google` in `layout.tsx`.
- **Static Assets**: SVGs and other public files are stored in `public/` and referenced with root-relative paths (e.g., `/next.svg`).
- **TypeScript**: Strict mode is enabled. Path alias `@/*` maps to `src/*` (see `tsconfig.json`).
- **ESLint**: Uses Next.js core web vitals and TypeScript rules via `eslint.config.mjs`. Ignores build, output, and type files.

## Developer Workflows
- **Development**: Start with `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`).
- **Build**: Run `npm run build` to create a production build.
- **Linting**: Use `npm run lint` for code quality checks.
- **Start Production**: Use `npm run start` after building.
- **Hot Reload**: Editing files in `src/app/` triggers instant updates in the browser.

## Project-Specific Conventions
- **Component Placement**: All React components/pages should be placed in `src/app/`.
- **Font Variables**: Use CSS variables `--font-geist-sans` and `--font-geist-mono` for font families.
- **Color Scheme**: Use CSS variables for background/foreground colors, with dark mode support via media queries.
- **Image Usage**: Use Next.js `<Image />` for optimized images, referencing assets from `public/`.
- **No Custom Server**: The project uses Next.js default server; no custom API routes or backend logic are present.

## Integration Points
- **External Dependencies**: Only core Next.js, React, TailwindCSS, and ESLint are used. No custom integrations or APIs.
- **Deployment**: Designed for Vercel, but can run anywhere Next.js is supported.

## Examples
- To add a new page, create a file in `src/app/` (e.g., `src/app/about.tsx`).
- To add a new image, place it in `public/` and reference as `/image-name.svg`.
- To use a font, apply the CSS variable in your component's className.

## References
- See `README.md` for basic setup and deployment instructions.
- See `tsconfig.json` for TypeScript config and path aliases.
- See `eslint.config.mjs` for linting rules.
- See `globals.css` for styling conventions.

---
**Feedback:** If any conventions or workflows are unclear, please specify which section needs more detail or examples.