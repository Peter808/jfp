# josefelixperez.com

A plain HTML, CSS and JavaScript site. There's no build step and no framework. To preview it, double-click `index.html`.

## Files

| File | What it is |
|---|---|
| `index.html` | Homepage: hero, 4 featured murals, clients, Media, Studio, About, contact |
| `murals.html` | Every mural as a grid of tiles |
| `studio.html` | All studio work (all 60 paintings, newest first, undated last) |
| `painting.html` | One file serves every painting page: `painting.html?id=gust` (the id is the image file name) |
| `mural.html` | One file serves every mural page. The address picks the mural: `mural.html?id=grow-native` |
| `css/style.css` | All styling. Colors and fonts are at the top under `:root` |
| `js/data.js` | **All the content**: murals, press, paintings. Edit this file to change content |
| `js/main.js` | Builds the pages from `data.js`. You rarely need to touch it |
| `images/` | `murals/`, `studio/`, `about/` |

## Common edits

- **Add a mural:**
  1. Put its photos in `images/murals/`.
  2. Copy one `{ ... }` block in the MURALS list in `data.js` and fill it in.
  3. Give it a new `id`. Its page is now `mural.html?id=that-id`.
- **Change the 4 homepage murals:** set `featured: true` on the 4 you want and `false` on the rest.
- **Add press:** add a line to the PRESS list. Only add pieces that name Jose.
- **Add a painting:** put the image in `images/studio/` and add a line to STUDIO. Its page is `painting.html?id=` plus the image file name. Add `notes: "..."` for a line of text on its page.
- **Add a client logo:**
  1. Put the logo in `images/clients/`. SVG is best.
  2. Copy a `<li class="client-card">` line in `index.html`.
  3. The cards slide on their own when they don't fit on one line. Speed is `SLIDE_SPEED` in `main.js`.
- **Change the homepage film:** edit `data-video` (the YouTube id) on the film banner in `index.html`.
- **Studio:** `home: true` puts a painting on the homepage (keep it to 8). Everything shows on `studio.html` sorted by year, newest first. Paintings with no year go last, in list order, so the portraits stay at the bottom.
- **Contact info:** edit CONTACT in `data.js`. The footer and the pop-up both use it.
- **Make any link open the contact pop-up:** add `data-contact="Your heading"` to it. That text also becomes the email subject.
- **Scroll speed:** `SCROLL_TIME` in `main.js` (650 ms).
- **Unknown facts:** leave the field as `""`. Empty fields are hidden on the page.
- **Find what's still missing:** search `data.js` for `TODO`.

## Notes

- The Greater Hollywood Chamber logo is missing. Its card shows the name as text. Save the logo as `images/clients/hollywood-chamber.png` and swap it in (there's a TODO in `index.html`).

- The YouTube film shows an error when you open the file straight from your computer. It plays once the site is hosted.
- Hosting: drag this folder onto Netlify Drop (app.netlify.com/drop), or push it to GitHub Pages. Then point josefelixperez.com at it.
