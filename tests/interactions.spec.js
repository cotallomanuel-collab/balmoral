import { test, expect } from "@playwright/test";

test("cookie consent banner shows once and remembers the choice", async ({
  page,
}) => {
  await page.goto("/");
  const banner = page.getByRole("dialog", { name: /cookie consent/i });
  await expect(banner).toBeVisible();

  await banner.getByRole("button", { name: /accept/i }).click();
  await expect(banner).toBeHidden();

  await page.reload();
  await expect(
    page.getByRole("dialog", { name: /cookie consent/i }),
  ).toBeHidden();
});

test.describe("desktop interactions", () => {
  test("header nav navigates via the GSAP page transition", async ({
    page,
  }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop-chromium", "desktop-only");
    await page.goto("/");
    await page.getByRole("link", { name: /about/i }).first().click();
    await page.waitForURL("**/about");
    await expect(page.locator("main")).toHaveCSS("opacity", "1");
  });

  test("fluid cursor canvas mounts on desktop only inside Technology", async ({
    page,
  }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop-chromium", "desktop-only");
    await page.goto("/");
    const section = page.locator("#technology");
    await section.scrollIntoViewIfNeeded();
    await expect(section.locator("canvas")).toHaveCount(1);
  });

  test("image carousel autoplays", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop-chromium", "desktop-only");
    await page.goto("/");
    const track = page.locator(".carousel-scroll");
    await track.scrollIntoViewIfNeeded();
    const before = await track.evaluate((el) => el.scrollLeft);
    await page.waitForTimeout(4200);
    const after = await track.evaluate((el) => el.scrollLeft);
    expect(after).not.toBe(before);
  });
});

test.describe("mobile interactions", () => {
  test("Technology section skips the WebGL fluid canvas on mobile", async ({
    page,
  }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile-chromium", "mobile-only");
    await page.goto("/");
    const section = page.locator("#technology");
    await section.scrollIntoViewIfNeeded();
    await expect(section.locator("canvas")).toHaveCount(0);
  });

  test("mobile menu opens and closes", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile-chromium", "mobile-only");
    await page.goto("/");
    const toggle = page.getByRole("button", { name: /open menu/i });
    await toggle.click();
    await expect(page.getByRole("button", { name: /close menu/i })).toBeVisible();

    const nav = page.locator("nav.mobile-nav");
    await expect(nav).toHaveClass(/mobile-nav--visible/);

    await page.getByRole("button", { name: /close menu/i }).click();
    await expect(nav).not.toHaveClass(/mobile-nav--visible/);
  });
});
