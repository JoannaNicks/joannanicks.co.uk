# joannanicks.co.uk

Plain HTML and CSS. No build step, no framework, no dependencies. Push to `main` and Vercel redeploys in about 30 seconds.

## Files

| File | What's in it |
|---|---|
| `index.html` | Homepage: name, bio, the fork to the two sides, recent editing, contact |
| `production.html` | Content producer / video editor: about, podcasts, video, clients |
| `writing.html` | Playwriting: produced works, awards, press, production images |
| `styles.css` | All colours, fonts and layout. Change a colour once here, it changes everywhere |
| `images/` | Photos. Drop originals in here |

## Editing content

Open the file on GitHub, click the pencil icon, edit the text between the tags, click "Commit changes". The site updates itself.

The bits marked `[Placeholder ...]` and the dashed orange boxes are the things still waiting on content.

## Colours and fonts

Top of `styles.css`:

```
--peach:  #FFE4CE
--orange: #F5390B
--yellow: #FFC93D
--ink:    #17110D
--cream:  #FFF4E9
```

These are approximations of Joanna's Canva design. If she can give the exact hex codes from Canva, change them here.

Fonts are Poppins (headings) and Work Sans (body), loaded from Google Fonts in each page's `<head>`.

## Adding a video or podcast

Don't upload the file. Get the embed code:

- **YouTube** — Share → Embed → copy the `<iframe>`
- **Vimeo** — Share → Embed → copy the `<iframe>`
- **Spotify** — ••• → Share → Embed episode
- **Apple Podcasts** — ••• → Embed this episode

Replace the whole `<div class="placeholder">...</div>` with the iframe, and add `class="embed"` to the iframe so it sizes correctly.

## Deploying

1. Push this folder to a GitHub repo.
2. In Vercel: Add New → Project → import the repo. Framework preset: **Other**. No build command, no output directory.
3. Vercel → Project → Settings → Domains → add `joannanicks.co.uk` and `www.joannanicks.co.uk`.
4. In GoDaddy DNS:
   - A record, host `@`, value `76.76.21.21`
   - CNAME, host `www`, value `cname.vercel-dns.com`
5. Wait for propagation (usually minutes, occasionally an hour).

Vercel will show the exact records to use — trust its screen over this file if they differ.

## Email

`hello@joannanicks.co.uk` is a placeholder throughout. Either set up forwarding on that address or swap it for Joanna's real address (it appears once per page, in the contact section).
