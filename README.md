# compuute-site

Source for the **compuute.se** landing page. Next.js 16 + Tailwind on Vercel. One-page dark theme.

Public: <https://compuute.se>

## What this is

The marketing site for Compuute AB — an independent Swedish security consultancy focused on AI agent / MCP server security. The page is structurally simple:

```
Hero
  → Services (MCP audits, NIS2/DORA, AI Agent Security)
    → Open Source (compuute-scan CLI + scan.compuute.se hosted API)
      → Contact
        → Footer
```

It is also the **canonical hub** that backlinks to all our product surfaces:

| Surface | URL | Linked from |
|---------|-----|-------------|
| Open-source scanner | <https://github.com/Compuute/compuute-scan> | Open Source section |
| Hosted scan API | <https://scan.compuute.se> | Open Source section (primary CTA) |
| Lead-enrichment API | <https://leads.compuute.se> | (not linked yet — add when ready) |
| Anthropic MCP Registry listing | `registry.modelcontextprotocol.io` | Open Source → "Listed on" row |
| Smithery listing | <https://smithery.ai/servers/daniel-abbay/compuute-scan-api> | Open Source → "Listed on" row |
| mcp.so listing | <https://mcp.so/server/compuute-scan-api> | Open Source → "Listed on" row |

This backlink topology is intentional — see [Why backlinks matter](#why-backlinks-matter) below.

## Tech stack

- Next.js 16 (App Router, Server Components by default)
- React 19
- Tailwind CSS 4
- TypeScript 5
- Hosted on Vercel (auto-deploy from `main`)
- Zero runtime dependencies beyond the above

The site is intentionally simple: one route (`app/page.tsx`), one layout (`app/layout.tsx`), global styles (`app/globals.css`). No CMS, no API routes, no database. Updates ship as PRs against `main`.

## How to update content

1. Clone the repo
2. `npm install && npm run dev` → http://localhost:3000
3. Edit `app/page.tsx` (or `layout.tsx` for metadata, `globals.css` for design tokens)
4. Commit on a feature branch
5. Open PR against `main`
6. Vercel auto-deploys a preview URL — verify the preview
7. Merge → Vercel auto-deploys to compuute.se within ~30 seconds

## Design system

- **Background:** zinc-950 (primary), zinc-900 (cards)
- **Borders:** zinc-800
- **Text:** zinc-200 (body), zinc-400 (secondary), zinc-500 (footer / labels)
- **Accent:** emerald-400 (highlights), emerald-500 (primary buttons)
- **Buttons:** `rounded-full` pills in two variants — filled-emerald and outlined-zinc
- **Typography:** Geist (default Next.js font)
- **No emoji in copy.** Section icons (the three in `ServiceCard`) are the only exception.

Keep new content within this system. If you want to change tokens, change them in `globals.css`, not inline.

## Why backlinks matter

`compuute.se` has accumulated SEO authority over time. Subdomains like `scan.compuute.se` and `leads.compuute.se` start with zero. Linking from the parent domain to the subdomains transfers a meaningful portion of that authority — concretely, Google ranks the linked subdomain higher for relevant queries within days of indexing.

This is why the Open Source section now drives traffic to `scan.compuute.se` as its primary CTA, rather than only linking to the GitHub repo. We add a new product link here every time a public product surface goes live.

**Add-a-new-product-link checklist:**

1. Product is live at its own URL (e.g. `https://newthing.compuute.se`)
2. Add a button or section card in `app/page.tsx`
3. If it's listed on third-party registries (Anthropic, Smithery, mcp.so, etc.), add those under a "Listed on" row
4. Update the surfaces table at the top of this README
5. Open PR with title `feat(landing): backlink to <product>` — Vercel deploys a preview, merge → live

## Linking conventions

- External links use `target="_blank" rel="noopener noreferrer"`
- Internal section anchors are not currently used (one-page site)
- All product URLs are HTTPS and use the apex `compuute.se` namespace (`scan.compuute.se`, `leads.compuute.se`, etc.)

## Local development

```bash
npm install
npm run dev
# http://localhost:3000
```

The page auto-updates on save. Tailwind classes auto-detected via `app/globals.css` directives.

## Deployment

- Connected to Vercel → `compuute.se`
- Auto-deploy on push to `main`
- Preview deployments per PR

There is no staging environment beyond Vercel preview URLs. If you need to test against the production DNS, request a temporary alias from Daniel.

## Owner

- Daniel Abbay — <daniel@compuute.se>
- Repo: [`Compuute/compuute-site`](https://github.com/Compuute/compuute-site) (public)
- Deployment: Vercel → `compuute.se` (auto from `main`)

## License

This repository is the source for our marketing site. Source code is not separately licensed — content (text, images) © Compuute AB, all rights reserved.
