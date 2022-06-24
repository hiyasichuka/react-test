import { test } from '@playwright/test';

test('Bing Search test', async ({ page }) => {
  // Go to https://google.com/
  await page.goto('https://google.com/');

  // Click text=国际版
  await page.locator('text=国际版').click();

  // Click [aria-label="Enter\ your\ search\ term"]
  await page.locator('[aria-label="Enter\\ your\\ search\\ term"]').click();

  // Fill [aria-label="Enter\ your\ search\ term"]
  await page.locator('[aria-label="Enter\\ your\\ search\\ term"]').fill('Playwright');

  // Press Enter
  await page.locator('[aria-label="Enter\\ your\\ search\\ term"]').press('Enter');
});