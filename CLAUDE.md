# CLAUDE.md

Context for any agent working on this repo.

## What this is

The personal site for Joanna Nicks — award-winning playwright, and freelance Content Producer / Video Editor based in West Yorkshire. Live at joannanicks.co.uk.

Two audiences, deliberately separated:

- **Podcast producers and organisations hiring an editor.** They land, they need to see and hear evidence fast. This side pays.
- **Theatre and screen commissioners.** They read. Credits, awards, press.

The homepage introduces Joanna and forks to the two sides. Don't merge them.

The separation is structural, not just visual. Each side is a self-contained section with its own nav; neither section links to the other. The only route across is the wordmark, which goes back to the homepage. A visitor reading about podcast editing should never be offered a link to the plays, and vice versa.

## Stack

Static HTML and CSS. No framework, no build step, no dependencies, no JavaScript unless something genuinely needs it. Hosted on Vercel, deployed from `main`.

This is a deliberate choice. Do not introduce React, Next.js, Tailwind, a bundler, or a package.json without being asked. The site must stay editable by a non-technical person through GitHub's web editor.

## Files

- `index.html` — homepage, the fork

Content & Video section:

- `production.html` — section front page
- `production-portfolio.html` — the work
- `production-testimonials.html` — client quotes and client list
- `production-contact.html`

Playwriting section:

- `writing.html` — section front page
- `writing-work.html` — produced works, press, production images
- `writing-contact.html`

Shared:

- `styles.css` — every colour, font and layout rule
- `images/` — web-sized photos, the ones pages actually reference
- `images/originals/` — untouched originals, never referenced by a page

Phone and camera originals are far too heavy to serve. Add a resized copy at
roughly 1400px on the long edge to `images/`, keep the original in
`images/originals/`, and point the page at the resized one. Always set `width`,
`height` and a descriptive `alt` on an `<img>`.

New pages take the `production-` or `writing-` prefix so the two sections stay
obvious in the file list.

## Conventions

- All colours come from the custom properties at the top of `styles.css`. Never hardcode a hex value in a page.
- Section backgrounds use the `.band--peach` / `--orange` / `--cream` / `--ink` classes. Don't invent new background rules per page.
- Headings are uppercase via CSS, not typed in caps. Keep the source readable.
- British English throughout.
- Video and audio are never uploaded to this repo. Always embed from YouTube, Vimeo, Spotify or Apple Podcasts.
- Each section has its own nav, repeated on every page in that section. Change it in one, change it in all of them.
- A section's nav lists only that section's pages. Never add a cross-section link.
- The wordmark links to `index.html` on every page. That is the only way between sections.
- `aria-current="page"` marks the current page in the nav.
- `.next` is the block of onward links at the foot of a page. Same-section links only.

## Design brief

The look comes from Joanna's own Canva sketch, not from a template. Peach ground, saturated orange-red display type set large and tight, yellow as the single accent, hard edges, no border-radius, no drop shadows, no gradients. Big flat colour bands stacked down the page.

If a change would make the site look more like a generic portfolio template, don't make it.

## Outstanding

- Content & Video copy is placeholder — Joanna to write.
- Portfolio, testimonials and client list are empty placeholders awaiting real entries.
- All embeds are placeholder boxes (`.placeholder`). Replace with real iframes, adding `class="embed"`.
- Production photos needed at original resolution; the ones on the old Wix site are downscaled and unusable.
- Colours are eyeballed from a screenshot. Replace with exact values from Canva when available.

## Working style

Joanna is not a developer. When she asks for a change in plain language, make it and keep the source tidy enough that she could find that text herself next time.
