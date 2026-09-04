# Photos

Drop image files straight into this folder. **Originals, please** — full size,
straight off the camera or phone. The site shrinks them to fit; it can't grow
them back. The downscaled copies from the old Wix site aren't good enough.

## How the two folders work

- `images/originals/` — the untouched files, exactly as you sent them. Nothing
  on the site points at these. They're kept so a bigger version always exists.
- `images/` — the shrunk-down copies the pages actually use. A 3MB phone photo
  would make the site slow to load, so each one gets a web-sized copy at around
  200–300KB.

Put your file in either place and say so, and Claude will make the web copy and
sort the naming out.

## Naming

Lower case, hyphens instead of spaces, describing what it is:

    and-it-rains-salford-arts-01.jpg
    joanna-and-queenie.jpg

## Putting one on a page

    <img src="images/joanna-and-queenie.jpg" alt="Joanna kissing her dog on a train">

The `alt` text describes the picture for anyone who can't see it — a blind
visitor, or someone whose connection failed. Write what's actually happening in
the shot, not "photo of Joanna".
