# Shadcn Wrapped 2025

![Shadcn Wrapped hero](/public/hero.png)

A playful, data-driven “wrapped” experience for the shadcn/ui ecosystem. It highlights yearly stats, showcases community registries (with inline logos), and brings a lively, celebratory vibe with motion, gradients, and bold typography.

## Why it’s fun

- **Celebrates the ecosystem:** Registry logos and stats spotlight the breadth of community contributions.
- **Wrapped-style storytelling:** Big, punchy numbers with subtle motion for a year-in-review feel.
- **Lightweight SVG logos:** All registry logos render inline—no extra image hosting needed.
- **Theming-ready UI:** Built on shadcn/ui primitives, so it fits right in with Tailwind and Radix.

## Tech stack

- Next.js 16 + React 19
- Tailwind CSS (v4) + shadcn/ui components
- Motion-friendly UI accents (animated cards, counters, gradients)

## Getting started

1. Install deps: `bun install`
2. Run dev server: `bun dev` (defaults to http://localhost:3000)
3. Build for production: `bun build` then `bun start`

## Notable paths

- `app/page.tsx` — main wrapped page layout and sections.
- `app/layout.tsx` — global metadata and fonts.
- `components/wrapped/*` — hero, sections, metrics, registry logos.
- `lib/data/registry-logos.ts` — inline SVG registry data.
- `lib/data/wrapped-2025.ts` — metrics and copy for the experience.

## Customization tips

- Update metrics/copy in `lib/data/wrapped-2025.ts`.
- Add or tweak registries in `lib/data/registry-logos.ts` (name, homepage, description, logo SVG).
- Adjust styles in wrapped components (e.g., grids, shadows, hover states) to match your brand.
  This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
