# Photos

Drop image files straight into this folder. **Originals, please** — full size,
straight off the camera or phone. The site shrinks them to fit; it can't grow
them back.

## How the two folders work

- `images/originals/` — the untouched files, exactly as you sent them. Nothing
  on the site points at these. They're kept so a bigger version always exists.
- `images/` — the shrunk-down copies the pages actually use, at about 1400px on
  the long edge and 100–300KB each, so pages stay quick to load.

Put your file in either place and say so, and Claude will make the web copy,
give it a tidy name and drop it on the right page.

## Naming

Lower case, hyphens instead of spaces, describing what it is:

    and-it-rains-01.jpg
    fresh-meat-02.jpg

## Putting one on a page

    <img src="images/and-it-rains-01.jpg" width="1400" height="933"
         alt="Two women on a sofa, one comforting the other">

Always set `width`, `height` and `alt`. The `alt` text describes the picture
for anyone who can't see it; write what's happening in the shot.
