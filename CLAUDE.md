# CLAUDE.md

Context for any agent working on this repo.

## What this is

The personal site for Joanna Nicks — award-winning playwright, and freelance content producer / video editor based in West Yorkshire. Live at joannanicks.co.uk.

Two audiences, deliberately separated:

- **Podcast producers and organisations hiring an editor.** They land, they need to see and hear evidence fast. This side pays.
- **Theatre and screen commissioners.** They read. Credits, awards, press.

The homepage introduces Joanna and forks to the two sides. Don't merge them.

## Stack

Static HTML and CSS. No framework, no build step, no dependencies, no JavaScript unless something genuinely needs it. Hosted on Vercel, deployed from `main`.

This is a deliberate choice. Do not introduce React, Next.js, Tailwind, a bundler, or a package.json without being asked. The site must stay editable by a non-technical person through GitHub's web editor.

## Files

- `index.html` — homepage
- `production.html` — content producer / video editor side
- `writing.html` — playwriting side
- `styles.css` — every colour, font and layout rule
- `images/` — photos, original resolution

## Conventions

- All colours come from the custom properties at the top of `styles.css`. Never hardcode a hex value in a page.
- Section backgrounds use the `.band--peach` / `--orange` / `--cream` / `--ink` classes. Don't invent new background rules per page.
- Headings are uppercase via CSS, not typed in caps. Keep the source readable.
- British English throughout.
- Video and audio are never uploaded to this repo. Always embed from YouTube, Vimeo, Spotify or Apple Podcasts.
- Nav appears in all three pages. Change it in one, change it in all three.
- `aria-current="page"` marks the current page in the nav.

## Design brief

The look comes from Joanna's own Canva sketch, not from a template. Peach ground, saturated orange-red display type set large and tight, yellow as the single accent, hard edges, no border-radius, no drop shadows, no gradients. Big flat colour bands stacked down the page.

If a change would make the site look more like a generic portfolio template, don't make it.

## Outstanding

- Content/video page copy is placeholder — Joanna to write.
- All embeds are placeholder boxes (`.placeholder`). Replace with real iframes, adding `class="embed"`.
- Production photos needed at original resolution; the ones on the old Wix site are downscaled and unusable.
- Colours are eyeballed from a screenshot. Replace with exact values from Canva when available.
- `hello@joannanicks.co.uk` is a placeholder address.

## Working style

Joanna is not a developer. When she asks for a change in plain language, make it and keep the source tidy enough that she could find that text herself next time.
