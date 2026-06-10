# smkim37.github.io

Personal academic homepage of **Sumin Kim** — plain HTML/CSS/JS, no build step.
Pushing to the `main` branch of the `smkim37/smkim37.github.io` repo deploys it
automatically via GitHub Pages at <https://smkim37.github.io>.

## How to update content

**Everything you'd ever want to change lives in [`js/data.js`](js/data.js).**
You should not need to touch `index.html`, `css/style.css`, or `js/main.js`
for content updates.

Two rules:

1. **Plain strings** (paper titles, venues, URLs, names) are shown in *both*
   languages as-is.
2. Objects shaped **`{ en: "...", ko: "..." }`** switch with the language
   toggle.

Items render in array order, so put the newest first.

### Add a news item

Copy a block at the top of the `news` array:

```js
{
  date: { en: "Jul 2026", ko: "2026.07" },
  highlight: true, // optional — accent left border; omit for normal items
  text: {
    en: "<b>MyPaper</b> is accepted to <b>NeurIPS 2026</b>!",
    ko: "<b>MyPaper</b> 논문이 <b>NeurIPS 2026</b>에 게재 승인되었습니다!",
  },
},
```

`<b>` and `<a href="...">` tags are allowed inside news `text` only.

### Add a publication

Copy a block at the top of the `publications` array:

```js
{
  id: "C3",
  type: "conference", // or "preprint" — controls which subsection it appears in
  title: "Paper Title Stays in English",
  authors: "Sumin Kim*, Coauthor Name†, ...", // your name is bolded automatically
  venue: "Conference on Neural Information Processing Systems (NeurIPS), 2026",
  venueTag: "NeurIPS 2026", // solid badge next to the venue; omit for preprints
  award: { en: "Oral Presentation", ko: "구두 발표" }, // or null
  links: [
    { label: "Paper", url: "https://..." },
    { label: "arXiv", url: "https://..." },
    // Website / Code / Dataset — any labels you like
  ],
},
```

### Everything else

`patents`, `experience`, `projects`, `fellowships`, `awards`, `talks`,
`teaching`, `service`, `activities`, `education`, and the `profile`
(bio, interests, contact links) follow the same copy-an-object pattern —
each array is commented in `js/data.js`.

### Replace the CV or photo

Drop the new file into `assets/` with the same filename
(`suminkim_cv.pdf` / `suminkim_image.jpg`), or change the paths in
`SITE.config` in `js/data.js`.

## Preview locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

```
index.html      page skeleton + SEO meta (rarely needs edits)
css/style.css   styles, light/dark themes (design changes only)
js/data.js      ★ all content — edit this one
js/main.js      rendering + toggles (no content here)
assets/         photo, CV PDF, favicon
```
