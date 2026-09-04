# joannanicks.co.uk

Plain HTML and CSS. No build step, no framework, no dependencies. Push to `main` and Vercel redeploys in about 30 seconds.

## Files

The site is one homepage and two separate sections. Once you're inside a section, the menu only shows that section's pages — the way back across is the **Joanna Nicks** wordmark at the top left, which always returns to the homepage.

| File | What's in it |
|---|---|
| `index.html` | Homepage: name, bio, the fork to the two sides, contact |
| **Content & Video** | |
| `production.html` | Section front page: about, what I do |
| `production-portfolio.html` | Podcast and video work |
| `production-testimonials.html` | Client quotes and client list |
| `production-contact.html` | Contact |
| **Playwriting** | |
| `writing.html` | Section front page: about, awards |
| `writing-work.html` | Produced works, press, production images |
| `writing-contact.html` | Contact |
| | |
| `styles.css` | All colours, fonts and layout. Change a colour once here, it changes everywhere |
| `images/` | Photos. Drop originals in here |

### Adding a page to a section

Copy an existing page from the same section, change the words, then add a link to it in the `<nav>` **of every page in that section**. Don't link across sections — that's the point of the split.

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

`nicks.joanna@gmail.com`, on the homepage and on each section's contact page. To change it, search the project for the address — it needs changing in two places per page: the `mailto:` link and the visible text next to it.
