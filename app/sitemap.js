const SITE_URL = "https://balmoral-rouge.vercel.app";

// Keep this list in sync with the real routes in app/. Pages that are still
// placeholders (see contexto.md §7) are included anyway — a live but
// half-empty page should still be crawlable once the site is public.
const ROUTES = [
  "",
  "/about",
  "/studios",
  "/what-we-do",
  "/contact",
  "/events",
  "/innovation",
  "/artists-and-labels",
];

export default function sitemap() {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
