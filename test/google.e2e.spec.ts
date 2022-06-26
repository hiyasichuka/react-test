import { test } from "@playwright/test";

test("Google Search test", async ({ page }) => {
  // Go to https://google.com/
  await page.goto("https://google.com/");

  // Input text
  await page.fill('input[name="q"]', "conepla");

  // Click
  await page.click('input[type="submit"]');
});
