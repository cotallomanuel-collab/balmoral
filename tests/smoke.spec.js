import { test, expect } from "@playwright/test";

const ROUTES = [
  "/",
  "/about",
  "/studios",
  "/what-we-do",
  "/contact",
  "/events",
  "/innovation",
  "/artists-and-labels",
  "/privacy",
  "/cookies",
  "/legal-notice",
];

for (const route of ROUTES) {
  test(`${route} loads with no console or page errors`, async ({ page }) => {
    const pageErrors = [];
    const consoleErrors = [];
    const failedRequests = [];

    page.on("pageerror", (err) => pageErrors.push(err.message));
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    page.on("requestfailed", (req) =>
      failedRequests.push(`${req.method()} ${req.url()}`),
    );

    const response = await page.goto(route, { waitUntil: "networkidle" });
    expect(response.status()).toBe(200);

    // Let scroll-triggered animations and lazy content settle.
    await page.mouse.wheel(0, 2000);
    await page.waitForTimeout(500);

    expect(pageErrors, "no uncaught page errors").toEqual([]);
    expect(consoleErrors, "no console.error output").toEqual([]);
    expect(failedRequests, "no failed network requests").toEqual([]);
  });

  test(`${route} has no horizontal overflow on mobile width`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(route, { waitUntil: "networkidle" });
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(scrollWidth, "page must not scroll horizontally").toBeLessThanOrEqual(
      clientWidth + 1,
    );
  });
}

test("unknown route returns 404", async ({ page }) => {
  const response = await page.goto("/no-such-page");
  expect(response.status()).toBe(404);
});
