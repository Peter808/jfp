/* ==========================================================================
   main.js: builds the page sections from the lists in data.js.

   How it works:
   Each HTML page has empty containers with an id, e.g. <div id="featured-murals">.
   When the page loads, the functions below find those containers and fill
   them in. If a page doesn't have a container, that function does nothing.

   You shouldn't need to edit this file to change content. Edit data.js.
   ========================================================================== */


/* ---------- Helpers ---------- */

// Makes text safe to put inside HTML (so a quote mark or < can't break the page).
function escapeHTML(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Finds a mural in data.js by its id. Returns undefined if there's no match.
function findMural(id) {
  return MURALS.find(function (mural) { return mural.id === id; });
}

// One line under a tile, e.g. "Greenberg Traurig, 2010". Skips empty parts.
function tileCaption(mural) {
  const clientName = mural.client.split(/[,(]/)[0].trim();   // short client name
  return [clientName, mural.year].filter(Boolean).join(", ");
}


/* ---------- Mural tiles (homepage and Murals page) ---------- */

// Returns the HTML for one mural tile that links to its detail page.
function muralTileHTML(mural) {
  const hasPhoto = mural.photos.length > 0;

  const image = hasPhoto
    ? '<div class="thumb"><img src="' + mural.photos[0] + '" alt="' + escapeHTML(mural.title) + '" loading="lazy"></div>'
    : '<div class="thumb placeholder">Photos coming</div>';

  return (
    '<a class="mural-tile" href="mural.html?id=' + mural.id + '">' +
      image +
      '<h3>' + escapeHTML(mural.title) + '</h3>' +
      '<p>' + escapeHTML(tileCaption(mural)) + '</p>' +
    '</a>'
  );
}

// Homepage: the 4 murals marked featured: true
function renderFeaturedMurals() {
  const container = document.getElementById("featured-murals");
  if (!container) return;

  const featured = MURALS.filter(function (mural) { return mural.featured; });
  container.innerHTML = featured.map(muralTileHTML).join("");
}

// Murals page: every mural
function renderAllMurals() {
  const container = document.getElementById("all-murals");
  if (!container) return;

  container.innerHTML = MURALS.map(muralTileHTML).join("");
}


/* ---------- Media (press list) ---------- */

function renderPress() {
  const container = document.getElementById("press-list");
  if (!container) return;

  container.innerHTML = PRESS.map(function (item) {
    const quote = item.quote
      ? '<span class="quote">"' + escapeHTML(item.quote) + '"</span>'
      : "";

    return (
      '<li class="press-item">' +
        '<span class="outlet">' + escapeHTML(item.outlet) + '</span>' +
        '<div><a href="' + item.url + '" target="_blank" rel="noopener">' + escapeHTML(item.title) + '</a>' + quote + '</div>' +
        '<span class="date">' + escapeHTML(item.date) + '</span>' +
      '</li>'
    );
  }).join("");
}


/* ---------- Studio work ---------- */

// A painting's id is its image file name without ".jpg",
// e.g. "images/studio/gust.jpg" -> "gust". Used in painting.html?id=gust
function paintingId(painting) {
  return painting.image.split("/").pop().replace(/\.[a-z]+$/i, "");
}

// Finds a painting in data.js by its id. Returns undefined if there's no match.
function findPainting(id) {
  return STUDIO.find(function (painting) { return paintingId(painting) === id; });
}

// Every painting, newest year first. Paintings with no year go at the end,
// in the order they're listed in data.js.
function studioByYear() {
  return STUDIO
    .map(function (painting, index) { return { painting: painting, index: index }; })
    .sort(function (a, b) {
      const yearA = Number(a.painting.year) || 0;   // no year counts as 0, so it sorts last
      const yearB = Number(b.painting.year) || 0;
      return (yearB - yearA) || (a.index - b.index);  // same year: keep data.js order
    })
    .map(function (item) { return item.painting; });
}

// Returns the HTML for one painting tile that links to its own page
function paintingHTML(painting) {
  const details = [painting.medium, painting.size, painting.year].filter(Boolean).join(", ");

  return (
    '<a class="painting-tile" href="painting.html?id=' + paintingId(painting) + '">' +
      '<img src="' + painting.image + '" alt="' + escapeHTML(painting.title) + '" loading="lazy">' +
      '<h3>' + escapeHTML(painting.title) + '</h3>' +
      '<p>' + escapeHTML(details) + '</p>' +
    '</a>'
  );
}

// Homepage: only paintings marked home: true, newest first
function renderStudio() {
  const container = document.getElementById("studio-grid");
  if (!container) return;

  const homePaintings = studioByYear().filter(function (painting) { return painting.home; });
  container.innerHTML = homePaintings.map(paintingHTML).join("");
}

// All Studio Work page (studio.html): every painting, newest first
function renderAllStudio() {
  const container = document.getElementById("all-studio");
  if (!container) return;

  container.innerHTML = studioByYear().map(paintingHTML).join("");
}


/* ---------- Painting detail page (painting.html?id=...) ---------- */

// Same 70 / 30 layout as a mural page: the full, uncropped painting on the
// left, details on the right, plus Previous / Next to walk through the work.
function renderPaintingPage() {
  const container = document.getElementById("painting-page");
  if (!container) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const painting = findPainting(id);

  if (!painting) {
    container.innerHTML = '<p>Painting not found. <a href="studio.html">See all studio work</a>.</p>';
    return;
  }

  document.title = painting.title + " | Jose Felix Perez";

  // Details. Rows with no value are skipped.
  const statRows = [
    ["Year", painting.year],
    ["Medium", painting.medium],
    ["Size", painting.size]
  ].filter(function (row) { return row[1]; })
   .map(function (row) {
     return '<div><dt>' + row[0] + '</dt><dd>' + escapeHTML(row[1]) + '</dd></div>';
   }).join("");

  // Previous / next in the same order as the Studio page (wraps around)
  const all = studioByYear();
  const here = all.indexOf(painting);
  const prev = all[(here - 1 + all.length) % all.length];
  const next = all[(here + 1) % all.length];

  container.innerHTML =
    '<div class="mural-photos painting-photo">' +
      '<img src="' + painting.image + '" alt="' + escapeHTML(painting.title) + '">' +
    '</div>' +
    '<aside class="mural-info">' +
      '<a class="back-link" href="studio.html">&larr; All studio work</a>' +
      '<h1>' + escapeHTML(painting.title) + '</h1>' +
      (painting.notes ? '<p class="summary">' + escapeHTML(painting.notes) + '</p>' : "") +
      '<dl class="stats">' + statRows + '</dl>' +
      '<a class="button" href="#contact" data-contact="' + escapeHTML("Inquiry: " + painting.title) + '">Inquire about this work</a>' +
      '<nav class="painting-nav">' +
        '<a href="painting.html?id=' + paintingId(prev) + '">&larr; ' + escapeHTML(prev.title) + '</a>' +
        '<a href="painting.html?id=' + paintingId(next) + '">' + escapeHTML(next.title) + ' &rarr;</a>' +
      '</nav>' +
    '</aside>';
}


/* ---------- Footer (same on every page, built from CONTACT in data.js) ---------- */

function renderFooter() {
  const container = document.getElementById("footer-contact");
  if (!container) return;

  container.innerHTML =
    '<span>Inquiries: <a href="mailto:' + CONTACT.email + '">' + CONTACT.email + '</a></span>' +
    '<span>Instagram: <a href="https://www.instagram.com/' + CONTACT.instagram + '/" target="_blank" rel="noopener">@' + CONTACT.instagram + '</a></span>' +
    '<span>&copy; ' + new Date().getFullYear() + ' Jose Felix Perez</span>';
}


/* ---------- Contact pop-up ---------- */

// Any link or button with a data-contact attribute opens this pop-up instead
// of jumping to the footer. The attribute's text becomes the pop-up heading
// and the email subject, e.g.
//   <a href="#contact" data-contact="Commission a mural">Commission a mural</a>
// The pop-up is built here once, so it doesn't need to be in every HTML file.
function setupContactModal() {
  const triggers = document.querySelectorAll("[data-contact]");
  if (!triggers.length) return;

  // Build the pop-up and add it to the end of the page
  const modal = document.createElement("dialog");
  modal.className = "contact-modal";
  modal.setAttribute("aria-labelledby", "contact-title");
  modal.innerHTML =
    '<button class="modal-close" type="button" aria-label="Close">&times;</button>' +
    '<p class="label" id="contact-topic"></p>' +
    '<h2 id="contact-title">Get in touch</h2>' +
    '<p class="contact-note">' + escapeHTML(CONTACT.note) + '</p>' +
    '<a class="contact-email" id="contact-email" href="mailto:' + CONTACT.email + '">' + CONTACT.email + '</a>' +
    '<div class="contact-actions">' +
      '<a class="button" id="contact-send" href="mailto:' + CONTACT.email + '">Write an email</a>' +
      '<button class="button" type="button" id="contact-copy">Copy email</button>' +
    '</div>' +
    '<p class="contact-meta">' +
      'Instagram: <a href="https://www.instagram.com/' + CONTACT.instagram + '/" target="_blank" rel="noopener">@' + CONTACT.instagram + '</a>' +
      ' &middot; ' + escapeHTML(CONTACT.location) +
    '</p>';
  document.body.appendChild(modal);

  const topicEl = modal.querySelector("#contact-topic");
  const sendLink = modal.querySelector("#contact-send");
  const emailLink = modal.querySelector("#contact-email");
  const copyButton = modal.querySelector("#contact-copy");
  let lastTrigger = null;

  // Open: set the heading and email subject from the link that was clicked
  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      event.preventDefault();              // stop the jump to #contact
      lastTrigger = trigger;

      const topic = trigger.getAttribute("data-contact") || "Inquiry";
      topicEl.textContent = topic;
      const mailto = "mailto:" + CONTACT.email + "?subject=" + encodeURIComponent(topic);
      sendLink.href = mailto;
      emailLink.href = mailto;
      copyButton.textContent = "Copy email";

      modal.showModal();
    });
  });

  // Copy the address, for people whose computer has no mail app set up
  // (that's when an email link seems to "do nothing")
  copyButton.addEventListener("click", function () {
    navigator.clipboard.writeText(CONTACT.email).then(function () {
      copyButton.textContent = "Copied";
    }, function () {
      copyButton.textContent = CONTACT.email;   // clipboard blocked: show it to copy by hand
    });
  });

  // Close: X button, Esc key (built in), or a click on the dark backdrop
  modal.querySelector(".modal-close").addEventListener("click", function () { modal.close(); });
  modal.addEventListener("click", function (event) {
    if (event.target === modal) modal.close();
  });
  modal.addEventListener("close", function () {
    if (lastTrigger) lastTrigger.focus();
  });
}


/* ---------- Smooth scrolling for links on the same page ---------- */

// Links like href="#media" glide to their section instead of jumping.
// Quick but visible: SCROLL_TIME milliseconds with an ease-in-out curve.
const SCROLL_TIME = 650;

// Starts gently, speeds up in the middle, settles gently at the end
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function setupSmoothScroll() {
  // People who turn off motion in their system settings get a normal jump
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.querySelectorAll('a[href^="#"]:not([data-contact])').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;                 // no such section: let the browser handle it
      event.preventDefault();

      const start = window.scrollY;
      const end = target.getBoundingClientRect().top + window.scrollY;
      const distance = end - start;
      const startTime = performance.now();

      function step(now) {
        const progress = Math.min((now - startTime) / SCROLL_TIME, 1);
        window.scrollTo(0, start + distance * easeInOutCubic(progress));
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
      history.pushState(null, "", link.getAttribute("href"));   // keep the #section in the address bar
    });
  });
}


/* ---------- Mural detail page (mural.html?id=...) ---------- */

function renderMuralPage() {
  const container = document.getElementById("mural-page");
  if (!container) return;

  // Read the id from the address bar, e.g. mural.html?id=grow-native
  const id = new URLSearchParams(window.location.search).get("id");
  const mural = findMural(id);

  if (!mural) {
    container.innerHTML = '<p>Mural not found. <a href="murals.html">See all murals</a>.</p>';
    return;
  }

  // Browser tab title
  document.title = mural.title + " | Jose Felix Perez";

  // LEFT column (70%): photos, or a placeholder if there are none yet
  const photos = mural.photos.length
    ? mural.photos.map(function (src, i) {
        return '<img src="' + src + '" alt="' + escapeHTML(mural.title) + ', photo ' + (i + 1) + '">';
      }).join("")
    : '<div class="photo-placeholder">Photos coming soon</div>';

  // RIGHT column (30%): stats. Rows with no value are skipped.
  const statRows = [
    ["Client", mural.client],
    ["Location", mural.location],
    ["Year", mural.year],
    ["Size", mural.size],
    ["Role", mural.role],
    ["Photo", mural.credit.replace(/^Photo:\s*/, "")]
  ].filter(function (row) { return row[1]; })
   .map(function (row) {
     return '<div><dt>' + row[0] + '</dt><dd>' + escapeHTML(row[1]) + '</dd></div>';
   }).join("");

  // Media links (and video embeds) under the stats
  const mediaItems = mural.media.map(function (item) {
    if (item.video) {
      return (
        '<p class="caption">' + escapeHTML(item.title) + ', ' + escapeHTML(item.outlet) + ', ' + escapeHTML(item.date) + '</p>' +
        '<div class="video"><iframe src="https://www.youtube.com/embed/' + item.video + '" title="' + escapeHTML(item.title) + '" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>'
      );
    }
    return (
      '<a href="' + item.url + '" target="_blank" rel="noopener">' + escapeHTML(item.title) +
        '<small>' + escapeHTML(item.outlet) + ', ' + escapeHTML(item.date) + '</small>' +
      '</a>'
    );
  }).join("");

  const media = mural.media.length
    ? '<div class="mural-media"><h2>Media</h2>' + mediaItems + '</div>'
    : "";

  container.innerHTML =
    '<div class="mural-photos">' + photos + '</div>' +
    '<aside class="mural-info">' +
      '<a class="back-link" href="murals.html">&larr; All murals</a>' +
      '<h1>' + escapeHTML(mural.title) + '</h1>' +
      (mural.summary ? '<p class="summary">' + escapeHTML(mural.summary) + '</p>' : "") +
      '<dl class="stats">' + statRows + '</dl>' +
      media +
    '</aside>';
}


/* ---------- Client logo slider ---------- */

// If the logo cards fit on one line, they just sit still.
// If they don't, we copy the cards once (so the loop has no gap) and turn on
// the CSS slide animation. This re-checks when the window is resized.
const SLIDE_SPEED = 30;   // pixels per second. Lower = slower.

function setupClientSlider() {
  const slider = document.getElementById("client-slider");
  if (!slider) return;
  const track = slider.querySelector(".client-track");

  function update() {
    // Start fresh: remove earlier copies and stop sliding
    track.querySelectorAll("[data-clone]").forEach(function (copy) { copy.remove(); });
    slider.classList.remove("is-sliding");

    // Does one set of cards fit in the visible width?
    const setWidth = track.scrollWidth;
    if (setWidth <= slider.clientWidth) return;

    // It doesn't: add one copy of every card, hidden from screen readers
    Array.from(track.children).forEach(function (card) {
      const copy = card.cloneNode(true);
      copy.setAttribute("data-clone", "");
      copy.setAttribute("aria-hidden", "true");
      track.appendChild(copy);
    });

    // Same speed on every screen size: time = distance / speed
    track.style.animationDuration = Math.round(setWidth / SLIDE_SPEED) + "s";
    slider.classList.add("is-sliding");
  }

  update();

  // Re-check after resizing, but wait until resizing stops
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(update, 200);
  });
}


/* ---------- Film pop-up (modal) ---------- */

// Clicking the film banner opens the <dialog id="film-modal"> and loads the
// YouTube player. Closing it removes the player so the video stops playing.
function setupFilmModal() {
  const banner = document.querySelector(".film-banner");
  const modal = document.getElementById("film-modal");
  if (!banner || !modal) return;

  const player = document.getElementById("film-player");
  const closeButton = modal.querySelector(".modal-close");

  function openModal() {
    const videoId = banner.getAttribute("data-video");
    player.innerHTML =
      '<iframe src="https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0" ' +
      'title="5 Stories Tall" allow="autoplay; fullscreen" ' +
      'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    modal.showModal();
  }

  function closeModal() {
    modal.close();
  }

  banner.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);

  // A click on the dark area outside the video closes it
  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeModal();
  });

  // However it closes (X, Esc key, outside click), clear the player
  modal.addEventListener("close", function () {
    player.innerHTML = "";
    banner.focus();
  });
}


/* ---------- Run everything once the page has loaded ---------- */

document.addEventListener("DOMContentLoaded", function () {
  renderFeaturedMurals();
  renderAllMurals();
  renderPress();
  renderStudio();
  renderAllStudio();
  renderMuralPage();
  renderPaintingPage();   // before the contact pop-up, so its Inquire button works
  renderFooter();
  setupClientSlider();
  setupFilmModal();
  setupContactModal();
  setupSmoothScroll();
});
