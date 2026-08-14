# How to edit this site

Four pages, all editable without touching much code.

```
Home.dc.html        the landing page
Research.dc.html    list of research write-ups
Projects.dc.html    list of projects
Contact.dc.html     contact page
Entry.dc.html       the template every write-up is rendered through

site.js             your name, links, coursework, tools, list of write-ups
styles.css          all colors, fonts, spacing (the Nocturne design system)
content/posts/      research write-ups, in markdown
content/projects/   project write-ups, in markdown
images/             every image
```

---

## 1. Add a new research post or project

**Step 1** — make a new file in `content/posts/` (or `content/projects/`).
Name it with the slug you want in the URL, e.g. `content/posts/threat-hunting.md`.

**Step 2** — start it with a frontmatter block, exactly this shape:

```
---
title: "Threat Hunting on a Home Lab"
summary: "One sentence that shows up on the card."
image: /images/threat-hunting.png
tags: "Detection, Sysmon, Home Lab"
publishedAt: "2026-09-14"
---

Your write-up starts here.

## A section heading

Regular paragraphs. **Bold** and `code` work.

- bullet
- bullet

1. numbered
2. numbered

[A link](https://example.com)
```

`tags` is a comma-separated list — each one becomes a little outlined chip.
`publishedAt` must be `YYYY-MM-DD`; it controls the sort order (newest first).
For projects you can also add `link: "https://github.com/..."` and a
**View the repository** button appears at the bottom of the page.

**Step 3** — drop the image in `images/` and point `image:` at it.

**Step 4** — open `site.js` and add the slug to the right list:

```js
export const POSTS = ['summer-reu', 'graph-theory', 'threat-hunting'];
export const PROJECTS = ['openai-build-week'];
```

That's it. It appears on Home, on the list page, and gets its own page.

## 2. Edit an existing write-up

Open its `.md` file and type. Nothing else to change.

## 3. Change your name, links, coursework, tools

All in `site.js`, at the top:

- `PROFILE` — name, tagline, email, LinkedIn, GitHub, résumé filename, photo
- `EDUCATION.coursework` — the chips in the middle card on Home
- `EDUCATION.tools` — the chips in the right card on Home

Add or delete items from those arrays freely; the layout wraps on its own.

## 4. Add your résumé

Drop a file named `eitan-gonensky-resume.docx` in the project root. The "Download résumé"
button on Home and the Résumé card on Contact already point at it.
Different filename? Change `resume:` in `PROFILE`.
DO NOT APPLY Nocturne THEME ON THE RESUME!

## 5. Change a photo

Replace the file in `images/` keeping the same name, or point at a new name:
- headshot → `PROFILE.photo` in `site.js`, and the `<img src>` in `Home.dc.html`
- write-up images → the `image:` line in that write-up's `.md`

## 6. Change the look

Two levers, in order of how much you'd break:

**Easiest — the Tweaks panel on `Home.dc.html`.** Accent color, the grid
backdrop on/off, the "Summer 2027" badge on/off.

**Deeper — `styles.css`.** The block at the very top (`:root { … }`) holds
every color and size the whole site uses. Changing `--color-accent` there
changes every accent on every page. `--color-bg` changes the page ground.
Don't hand-edit colors further down the file; change the token instead.

**Editing text directly.** Headlines and paragraphs written straight into the
`.dc.html` pages (the hero copy, the Research/Projects intro sentences, the
Contact page intro) can be clicked and typed over in the editor.

## 7. Navigation

The nav bar is repeated at the top of each `.dc.html` page — this is on
purpose, so each page can highlight its own link. If you add a page, add the
link in all four (plus `Entry.dc.html`). The current page's link is the one
with `color:var(--color-accent)`.

---

### Two things to know

- The contact form opens the visitor's own mail app with the message
  pre-filled. It does not send mail from the page — a static site can't. If
  you want real form delivery later, Formspree or a Vercel function will do
  it in about ten minutes.
- Write-ups are loaded by fetching the `.md` files, so preview the site
  through a web server (or the editor's preview), not by double-clicking the
  HTML file in Finder.
