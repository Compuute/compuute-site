# AGENTS.md — compuute-site

Operating guide for any agent (or new developer) editing the compuute.se landing page.

## What this site is for

`compuute.se` is the **marketing + canonical-hub** site for Compuute AB. Two responsibilities:

1. **Convert visitors to discovery calls** — primary CTA is "Book a Security Assessment" (mailto link in the hero + Contact section)
2. **Backlink to product surfaces** — `scan.compuute.se`, `leads.compuute.se`, GitHub repos, and MCP-registry listings

If a change doesn't serve one of those two goals, push back before merging.

## Position lock — read first

The site presents Compuute AB as an **independent Swedish security consultancy specialised in AI agent / MCP server security**. The position is locked. Do not propose:

- Generic SaaS positioning ("our platform helps you ...")
- Pricing pages (we sell engagements, not products on this site)
- Multi-page navigation (one-page is the choice — keep it that way)
- Blog/content marketing on this site (content lives in product repos as case studies, advisories, whitepapers)
- Live chat widgets, analytics tracking beyond what's necessary, popups

If a change requires breaking the position lock, surface that explicitly in the PR description — don't ship it silently.

## Editorial voice

- Plain English, dev-to-CISO tone
- No buzzwords ("revolutionary", "synergy", "next-generation")
- No emoji in copy
- Numbers and concrete claims preferred over adjectives ("37 rules" > "comprehensive coverage")
- Hyphenated tech words: "open-source" (when adjective), "open source" (when noun)
- British or American English consistently — current site uses American
- No first-person plural in marketing claims unless we can back it up ("We secure the AI agent layer" — OK; "We are the leading MCP security provider" — not OK, can't verify)

## What lives where

| File | Contents |
|------|----------|
| `app/page.tsx` | Entire visible page. Sections in order: Nav, Hero, Services, Open Source, Contact, Footer |
| `app/layout.tsx` | Metadata (title, description, OG tags), root HTML structure, font loading |
| `app/globals.css` | Tailwind directives, design tokens, base styles |
| `package.json` | Dependencies — keep minimal |
| `README.md` | What this site is and how to update it |
| `AGENTS.md` | This file |

## Common edit patterns

### Adding a new product link

When a new product surface goes live (e.g. a new hosted API), update the Open Source section to include a button to it. Match the existing button styling — outlined zinc for secondary, filled emerald for primary. Add the URL to the surfaces table in README.

### Adding a third-party listing

If we get listed on a new MCP registry or marketplace, add a link under the "Listed on" row in the Open Source section. Order alphabetically. Match the existing styling (text-sm, zinc-400 → emerald-400 on hover).

### Updating stats

The four `<Stat>` blocks in the Open Source section should reflect current product reality. If `compuute-scan` ships a new major version with more rules or languages, bump those numbers. Cross-check with the compuute-scan repo's README before pushing.

### Adding a new service

Three `<ServiceCard>` blocks live in the Services section. They are sized for a three-column grid on desktop. If we add a fourth service, restructure the grid (`sm:grid-cols-4` or two rows). Don't squeeze four cards into three columns.

## What NOT to change without explicit approval

- Hero copy ("Agentic AI Security" + the one-paragraph description) — this is the position lock surface
- The `Book a Security Assessment` CTA — it's the primary conversion path
- The `mailto:daniel@compuute.se` link — replacing it with a form requires a deliberate decision
- The footer copyright line
- The font (Geist) — defined in `layout.tsx`

## Verification before merging

1. `npm run build` succeeds locally
2. `npx tsc --noEmit` passes (no TypeScript errors)
3. Vercel preview URL renders correctly on desktop AND mobile
4. All external links return 2xx (or 3xx) when curled
5. The mailto link copies the right email when clicked
6. Lighthouse score remains >= 95 on each of Performance / Accessibility / Best Practices / SEO

## Operating rules for agents

These mirror the global verification rules in `~/.claude/CLAUDE.md`:

- Run before claiming. If you say "the new section is live", check the preview URL.
- Separate diagnosis from proposed fix when reviewing.
- Push back with data if a suggested change conflicts with the position lock.
- Sycophancy is a bug — don't agree with bad suggestions to be agreeable.

## Owner

Daniel Abbay — <daniel@compuute.se>. He has final say on copy and position.
