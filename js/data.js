/* ==========================================================================
   data.js: ALL the site's content lives here.

   The homepage, the Murals page and every mural detail page are built
   from these lists. To add, remove or fix something, edit it here.
   You never need to touch the HTML for content changes.

   Rules of thumb:
   - Leave a field as "" if it's unknown. Empty fields are hidden on the
     page, so nothing shows a blank or a guess.
   - Image paths are relative to the site folder, e.g. "images/murals/x.jpg".
   - Order matters: things appear on the page in the order listed.

   Lines marked TODO need an answer from Jose.
   ========================================================================== */


/* --------------------------------------------------------------------------
   MURALS
   Each mural gets its own page at: mural.html?id=THE-ID

   id        short name used in the page address (letters, numbers, dashes)
   title     the mural's name
   client    who commissioned it
   location  where it is
   year      year painted
   size      dimensions, e.g. "60 ft x 8 ft"
   role      Jose's role (Lead artist, Co-artist, Production...)
   featured  true = shows in the 4 tiles on the homepage
   photos    list of images. The first one is the tile image. [] = "Photos coming"
   credit    photo credit, if any
   summary   1-3 plain sentences for the detail page
   media     links about this mural: { outlet, title, date, url }
             add  video: "YOUTUBE-ID"  to embed a YouTube video instead
   -------------------------------------------------------------------------- */

const MURALS = [
  {
    id: "i-waited-for-you",
    title: "I Waited For You",       // TODO: Calle Collective lists it as "I waited for you there". Which one?
    client: "Calle Collective / Fisher Brothers, curated with WXLLSPACE",
    location: "Joule House paseo, 2200 NW 1st Ave, Wynwood, Miami",
    year: "2025",
    size: "",                        // TODO: size
    role: "Lead artist",
    featured: true,
    photos: ["images/murals/i-waited-for-you-1.jpg"],
    credit: "",
    summary: "A wall for Calle Collective, the artist gallery that opened at Joule House in Wynwood in October 2025.",
    media: [
      { outlet: "Calle Collective", title: "Artists at Calle Collective", date: "2025", url: "https://callecollective.com/art" }
    ]
  },
  {
    id: "we-grew-into-this",
    title: "We Grew Into This",
    client: "Greenberg Traurig",
    location: "Downtown Miami office, interior stairwell",
    year: "2010",
    size: "60 ft x 8 ft (ten 6 x 8 ft panels, five floors)",
    role: "Lead artist",
    featured: true,
    photos: [
      "images/murals/greenberg-1.jpg",
      "images/murals/greenberg-2.jpg",
      "images/murals/greenberg-3.jpg"
    ],
    credit: "",
    summary: "Jose won this commission as a senior at New World School of the Arts, picked from six alumni proposals. He painted it in panels in the studio, then installed it up five floors of the firm's stairwell.",
    media: [
      { outlet: "Wet Heat Project / NWSA", title: "5 Stories Tall (film)", date: "2011", video: "wR2n07rloZU" },
      { outlet: "Biscayne Bay Tribune", title: "Five-story mural created for law firm's Miami office", date: "Nov 24, 2010", url: "https://communitynewspapers.com/?p=10257" }
    ]
  },
  {
    id: "grow-native",
    title: "Grow Native",
    client: "Greater Hollywood Chamber of Commerce",
    location: "Hollywood, FL",
    year: "2023",
    size: "",                        // TODO: size
    role: "Lead artist",
    featured: true,
    photos: ["images/murals/grow-native-1.jpg"],
    credit: "",
    summary: "A full building facade of native South Florida plants for the Greater Hollywood Chamber.",
    media: []
  },
  {
    id: "sony-music-latin",
    title: "Sony Music Latin",
    client: "Sony Music Latin",
    location: "Main offices, Coconut Grove, Miami",
    year: "2015",
    size: "",                        // TODO: size
    role: "Lead artist",
    featured: true,
    photos: [
      "images/murals/sony-2.jpg",
      "images/murals/sony-1.jpg",
      "images/murals/sony-3.jpg"
    ],
    credit: "",
    summary: "An interior commission that wraps the walls and curves of Sony Music Latin's offices in a single red field.",
    media: []
  },
  {
    id: "forma",
    title: "Untitled (Forma)",
    client: "Forma",                 // TODO: confirm client and building
    location: "Edgewater, Miami",
    year: "2024",
    size: "",
    role: "",                        // TODO: role
    featured: false,
    photos: ["images/murals/forma-1.jpg", "images/murals/forma-2.jpg"],
    credit: "",
    summary: "Sea grape leaves at architectural scale, on a terrace wall.",
    media: []
  },
  {
    id: "ode-to-frederic-remington",
    title: "Ode to Remington",
    client: "Primary Flight, Wynwood's first mural festival",
    location: "29th Street and NW 2nd Avenue, Wynwood, Miami",
    year: "2010",
    size: "",
    role: "Exterior mural, with Michael Vasquez",
    featured: false,
    photos: ["images/murals/remington-2.jpg", "images/murals/remington-1.jpg"],
    credit: "Photo: Martha Cooper",
    summary: "An exterior mural painted with Michael Vasquez for Primary Flight, Wynwood's first mural festival.",
    media: []
  },
  {
    id: "arial-black-mayo-memorial",
    title: "Arial \"Black\" Mayo Memorial",
    client: "The Corner",
    location: "NW 11th St & N Miami Ave, Miami",
    year: "2019",
    size: "",
    role: "Co-painter with Magnus Sodamin",
    featured: false,
    photos: [],                      // TODO: photos
    credit: "",
    summary: "A memorial to the bar's beloved bouncer, painted in about three hours on the day of his memorial service.",
    media: [
      { outlet: "WLRN", title: "Local Artists Collaborate On Miami Mural Paying Tribute To Bar's Beloved Late Bouncer", date: "Dec 4, 2019", url: "https://www.wlrn.org/local-news/2019-12-04/local-artists-collaborate-on-miami-mural-paying-tribute-to-bars-beloved-late-bouncer" }
    ]
  },
  {
    id: "d12-tribute-detroit",
    title: "D12 Tribute",
    client: "Murals in the Market (1xRUN)",
    location: "2740 Rivard St, Eastern Market, Detroit, MI",
    year: "2017",
    size: "18 ft x 45 ft",
    role: "Exterior mural, with Michael Vasquez",
    featured: false,
    photos: [],                      // TODO: photos
    credit: "",
    summary: "A tribute to the Detroit rap group D12 and Eminem, painted with Michael Vasquez for the Murals in the Market festival, based on a photo by Jeremy Deputat.",
    media: [
      { outlet: "Murals in the Market", title: "Artist profile: Jose Felix Perez", date: "2017", url: "https://www.muralsinthemarket.com/jose-felix-perez" },
      { outlet: "Wayne State University archive", title: "Detroit rappers Eminem and D12 (mural)", date: "2017", url: "https://waynestateu.omeka.net/items/show/507" }
    ]
  },
  {
    id: "avaf-espanola-way",
    title: "Adora Vanessa Athena Fantasia",
    client: "City of Miami Beach, Elevate Española series (artist: Assume Vivid Astro Focus)",
    location: "Española Way, Miami Beach",
    year: "2023",
    size: "",
    role: "Mural production",        // TODO: confirm his exact scope
    featured: false,
    photos: [],                      // TODO: photos he shot or owns
    credit: "",
    summary: "Jose ran mural production for Assume Vivid Astro Focus's public art project celebrating Miami's drag community.",
    media: [
      { outlet: "The Art Newspaper", title: "Sky's the limit in public art project in solidarity with Miami's drag queens", date: "Dec 5, 2023", url: "https://www.theartnewspaper.com/2023/12/05/skys-the-limit-in-public-art-project-in-solidarity-with-miamis-drag-queens" },
      { outlet: "CNN Style", title: "In Miami Beach, a new street art installation celebrates the city's vibrant drag scene", date: "Dec 2023", url: "https://www.cnn.com/style/miami-drag-queens-art-avaf-elevate-espanola" }
    ]
  },
  {
    id: "my-home-mi-hogar",
    title: "My Home, Mi Hogar",
    client: "O, Miami with the City of Miami Beach (artist: Boa Mistura)",
    location: "Miami Beach water tanks",
    year: "2023",
    size: "",
    role: "Project manager and assistant",
    featured: false,
    photos: [],                      // TODO: photos he shot or owns
    credit: "",
    summary: "Jose project-managed and assisted on Boa Mistura's poem mural across two Miami Beach water tanks.",
    media: [
      { outlet: "WLRN", title: "What does it mean to call a place a home?", date: "May 9, 2023", url: "https://www.wlrn.org/education/2023-05-09/miami-beach-high-poem-mural-boa-mistura-o" },
      { outlet: "O, Miami", title: "My Home, Mi Hogar", date: "2023", url: "https://omiami.org/projects-and-events/myhomemihogar-miamibeach-2023" }
    ]
  }
];


/* --------------------------------------------------------------------------
   PRESS: the "Media" section on the homepage.
   Only pieces that name Jose. Newest first.
   quote is optional (keep it short and exact).
   -------------------------------------------------------------------------- */

const PRESS = [
  { outlet: "WLRN", title: "Local Artists Collaborate On Miami Mural Paying Tribute To Bar's Beloved Late Bouncer", date: "2019", url: "https://www.wlrn.org/local-news/2019-12-04/local-artists-collaborate-on-miami-mural-paying-tribute-to-bars-beloved-late-bouncer", quote: "" },
  { outlet: "Hyperallergic", title: "The Painterly Brilliance of South Florida's Foliage", date: "2018", url: "https://hyperallergic.com/447140/the-painterly-brilliance-of-south-floridas-foliage/", quote: "Perez, as it were, paints from inside the clasp." },
  { outlet: "Murals in the Market", title: "Artist profile: Jose Felix Perez", date: "2017", url: "https://www.muralsinthemarket.com/jose-felix-perez", quote: "Blurs the line between abstraction and landscape painting." },
  { outlet: "Brooklyn Street Art", title: "Images of the Week: Michael Vasquez and Jose Felix Perez in Wynwood", date: "2017", url: "https://www.brooklynstreetart.com/2017/01/22/bsa-images-of-the-week-01-22-17/", quote: "" },
  { outlet: "Wet Heat Project", title: "5 Stories Tall (film)", date: "2011", url: "https://www.youtube.com/watch?v=wR2n07rloZU", quote: "" },
  { outlet: "Biscayne Bay Tribune", title: "Five-story mural created for law firm's Miami office", date: "2010", url: "https://communitynewspapers.com/?p=10257", quote: "" }
];


/* --------------------------------------------------------------------------
   STUDIO: paintings on canvas.

   Each painting gets its own page at: painting.html?id=THE-ID
   The id is the image's file name without ".jpg",
   e.g. images/studio/gust.jpg  ->  painting.html?id=gust

   home: true   = shows on the homepage (keep it to 8, nature work only)
   home: false  = only on the All Studio Work page (studio.html)
   notes        optional: a sentence or two for the painting's page

   ORDER: the site sorts paintings by year, newest first (Jose, 2026-11-12).
   Paintings with no year go at the end, in the order they're listed here,
   so the intense portraits (undated, listed last) stay at the very bottom.
   Add a year and a painting moves into place on its own.
   Sizes came from the old site and are read as inches. TODO: confirm with Jose.
   -------------------------------------------------------------------------- */

const STUDIO = [
  // ---- Nature and landscape (the first 8 also show on the homepage) ----
  { title: "Overgrown", medium: "Acrylic on canvas", size: "24 x 30 in", year: "", image: "images/studio/overgrown.jpg", home: true },
  { title: "Under the Sun", medium: "Acrylic on canvas", size: "12 x 9 in", year: "2020", image: "images/studio/under-the-sun.jpg", home: true },
  { title: "Ground Cover", medium: "Acrylic on canvas", size: "20 x 16 in", year: "2020", image: "images/studio/ground-cover.jpg", home: true },
  { title: "Canopy", medium: "Acrylic on canvas", size: "30 x 40 in", year: "", image: "images/studio/canopy.jpg", home: true },
  { title: "When the Time Comes", medium: "Acrylic on canvas", size: "12 x 9 in", year: "2020", image: "images/studio/when-the-time-comes.jpg", home: true },
  { title: "Everything Grows", medium: "Acrylic on canvas", size: "20 x 16 in", year: "2018", image: "images/studio/everything-grows.jpg", home: true },
  { title: "Gust", medium: "Acrylic on canvas", size: "20 x 16 in", year: "2018", image: "images/studio/gust.jpg", home: true },
  { title: "Move Slow", medium: "Acrylic on canvas", size: "20 x 16 in", year: "2018", image: "images/studio/move-slow.jpg", home: true },
  { title: "Dimming", medium: "Acrylic on canvas", size: "20 x 16 in", year: "2018", image: "images/studio/dimming.jpg", home: false },
  { title: "Dizzying Heights", medium: "Acrylic on canvas", size: "20 x 16 in", year: "2020", image: "images/studio/dizzying-heights.jpg", home: false },
  { title: "A Little Outside While You're In", medium: "Acrylic on canvas", size: "20 x 16 in", year: "2020", image: "images/studio/a-little-outside-while-youre-in.jpg", home: false },
  { title: "Expectations Dissolve", medium: "Acrylic on canvas", size: "20 x 16 in", year: "2020", image: "images/studio/expectations-dissolve.jpg", home: false },
  { title: "It Begins To Blur", medium: "Acrylic on canvas", size: "20 x 16 in", year: "2018", image: "images/studio/it-begins-to-blur.jpg", home: false },
  { title: "Last Light (Covered)", medium: "Acrylic on canvas", size: "30 x 24 in", year: "2018", image: "images/studio/last-light-covered.jpg", home: false },
  { title: "Last Light (Shielded)", medium: "Acrylic on canvas", size: "30 x 24 in", year: "2018", image: "images/studio/last-light-shielded.jpg", home: false },
  { title: "Last Light (Underneath)", medium: "Acrylic on canvas", size: "30 x 24 in", year: "2018", image: "images/studio/last-light-underneath.jpg", home: false },
  { title: "On the Other Side", medium: "Acrylic on canvas", size: "48 x 36 in", year: "2018", image: "images/studio/on-the-other-side.jpg", home: false },
  { title: "Under Cover", medium: "Acrylic on canvas", size: "12 x 9 in", year: "2019", image: "images/studio/under-cover.jpg", home: false },
  { title: "Study for a Rainy Day (I)", medium: "Acrylic on canvas", size: "12 x 9 in", year: "2020", image: "images/studio/study-for-a-rainy-day-i.jpg", home: false },
  { title: "Study for a Rainy Day (II)", medium: "Acrylic on canvas", size: "12 x 9 in", year: "2020", image: "images/studio/study-for-a-rainy-day-ii.jpg", home: false },
  { title: "Complicated Circumstances", medium: "Acrylic on canvas", size: "24 x 24 in", year: "", image: "images/studio/complicated-circumstances.jpg", home: false },
  { title: "Color Study", medium: "Acrylic on canvas", size: "16 x 20 in", year: "", image: "images/studio/color-study.jpg", home: false },
  { title: "It Was Supposed To Be The Last Time", medium: "Acrylic on canvas", size: "30 x 20 in", year: "2015", image: "images/studio/it-was-supposed-to-be-the-last-time.jpg", home: false },
  { title: "Choosing Sides", medium: "Acrylic on canvas", size: "36 x 48 in", year: "2016", image: "images/studio/choosing-sides.jpg", home: false },
  { title: "Remembered and Reprised", medium: "Acrylic on canvas", size: "72 x 48 in", year: "2010", image: "images/studio/remembered-and-reprised.jpg", home: false },
  { title: "An Invitation To Stay", medium: "Acrylic on canvas", size: "72 x 48 in", year: "2010", image: "images/studio/an-invitation-to-stay.jpg", home: false },
  { title: "Roam", medium: "Acrylic on canvas", size: "72 x 36 in", year: "", image: "images/studio/roam.jpg", home: false },
  { title: "Half Empty", medium: "Acrylic on canvas", size: "24 x 18 in", year: "2012", image: "images/studio/half-empty.jpg", home: false },
  // ---- Night, light and abstraction ----
  { title: "Wander Through", medium: "Acrylic on canvas", size: "6 x 9 in", year: "", image: "images/studio/wander-through-01.jpg", home: false },
  { title: "Wander Through", medium: "Acrylic on canvas", size: "6 x 9 in", year: "", image: "images/studio/wander-through-02.jpg", home: false },
  { title: "Wander Through", medium: "Acrylic on canvas", size: "6 x 9 in", year: "", image: "images/studio/wander-through-03.jpg", home: false },
  { title: "Wander Through", medium: "Acrylic on canvas", size: "6 x 9 in", year: "", image: "images/studio/wander-through-04.jpg", home: false },
  { title: "Wander Through", medium: "Acrylic on canvas", size: "6 x 9 in", year: "", image: "images/studio/wander-through-05.jpg", home: false },
  { title: "Wander Through", medium: "Acrylic on canvas", size: "6 x 9 in", year: "", image: "images/studio/wander-through-06.jpg", home: false },
  { title: "Wander Through", medium: "Acrylic on canvas", size: "6 x 9 in", year: "", image: "images/studio/wander-through-07.jpg", home: false },
  { title: "Wander Through", medium: "Acrylic on canvas", size: "6 x 9 in", year: "", image: "images/studio/wander-through-08.jpg", home: false },
  { title: "Navigating Through The Lights", medium: "Acrylic on canvas", size: "9 x 12 in", year: "", image: "images/studio/navigating-through-the-lights-01.jpg", home: false },
  { title: "Navigating Through The Lights", medium: "Acrylic on canvas", size: "9 x 12 in", year: "", image: "images/studio/navigating-through-the-lights-02.jpg", home: false },
  { title: "Navigating Through The Lights", medium: "Acrylic on canvas", size: "9 x 12 in", year: "", image: "images/studio/navigating-through-the-lights-03.jpg", home: false },
  { title: "Navigating Through The Lights", medium: "Acrylic on canvas", size: "9 x 12 in", year: "", image: "images/studio/navigating-through-the-lights-04.jpg", home: false },
  { title: "Soak", medium: "Acrylic on canvas", size: "9 x 12 in", year: "", image: "images/studio/soak.jpg", home: false },
  { title: "Strobe", medium: "Acrylic on canvas", size: "8 x 12 in", year: "", image: "images/studio/strobe.jpg", home: false },
  { title: "Scatter", medium: "Acrylic on canvas", size: "20 x 16 in", year: "", image: "images/studio/scatter.jpg", home: false },
  { title: "Untitled", medium: "Acrylic on canvas", size: "22 x 16.5 in", year: "", image: "images/studio/untitled-01.jpg", home: false },
  { title: "Untitled", medium: "Acrylic on canvas", size: "24 x 18 in", year: "", image: "images/studio/untitled-02.jpg", home: false },
  { title: "Untitled", medium: "Acrylic on canvas", size: "16 x 20 in", year: "", image: "images/studio/untitled-03.jpg", home: false },
  // ---- Figures ----
  { title: "Bathing In The Lights", medium: "Acrylic on canvas", size: "48 x 48 in", year: "", image: "images/studio/bathing-in-the-lights.jpg", home: false },
  { title: "The Night Was A Blur", medium: "Acrylic on canvas", size: "36 x 36 in", year: "", image: "images/studio/the-night-was-a-blur.jpg", home: false },
  { title: "Domi x Kami", medium: "Acrylic on canvas", size: "16 x 20 in", year: "", image: "images/studio/domi-x-kami.jpg", home: false },
  { title: "If I Didn't Love The End", medium: "Acrylic on canvas", size: "36 x 24 in", year: "2010", image: "images/studio/if-i-didnt-love-the-end.jpg", home: false },
  { title: "Kiss The Past Goodbye", medium: "Acrylic on canvas", size: "24 x 36 in", year: "2010", image: "images/studio/kiss-the-past-goodbye.jpg", home: false },
  { title: "Make My Burden Lighter", medium: "Acrylic on canvas", size: "10 x 8 in", year: "", image: "images/studio/make-my-burden-lighter.jpg", home: false },
  { title: "Figure Study", medium: "Acrylic on canvas", size: "20 x 16 in", year: "", image: "images/studio/figure-study.jpg", home: false },
  // ---- Portraits (kept last on purpose; never on the homepage) ----
  { title: "Blurred Self", medium: "Acrylic on canvas", size: "24 x 20 in", year: "", image: "images/studio/blurred-self.jpg", home: false },
  { title: "Imbalance", medium: "Acrylic on canvas", size: "18 x 24 in", year: "", image: "images/studio/imbalance.jpg", home: false },
  { title: "Study", medium: "Acrylic on canvas", size: "24 x 20 in", year: "", image: "images/studio/study.jpg", home: false },
  { title: "Push", medium: "Acrylic on canvas", size: "30 x 24 in", year: "2011", image: "images/studio/push.jpg", home: false },
  { title: "Forced Portrait I", medium: "Acrylic on canvas", size: "48 x 36 in", year: "", image: "images/studio/forced-portrait-i.jpg", home: false },
  { title: "Forced Portrait II", medium: "Acrylic on canvas", size: "48 x 36 in", year: "", image: "images/studio/forced-portrait-ii.jpg", home: false },
  { title: "Withholding", medium: "Acrylic on canvas", size: "30 x 24 in", year: "", image: "images/studio/withholding.jpg", home: false },
];


/* --------------------------------------------------------------------------
   CONTACT: used by the footer on every page AND by the contact pop-up.
   Change it here once and it updates everywhere.
   -------------------------------------------------------------------------- */

const CONTACT = {
  email: "josemakesemail@gmail.com",        // TODO: confirm the public inquiry email with Jose
  instagram: "jose.felix.perez",            // handle without the @
  location: "Miami, FL",
  note: "For mural commissions, studio work and gallery inquiries, email is best."
};
