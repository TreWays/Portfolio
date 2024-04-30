import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.cgi.com/en');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/IT and business consulting services/);
});

test('validate search in header', async ({ page }) => {
  await page.goto('https://www.cgi.com/en');
  await page.locator('.search-icon-btn').click();
  await page.locator('#edit-keyword').fill('business consulting');
  await page.locator('#edit-submit').click();

 const firstContentWrapper = await page.locator('.content-wrapper').first();
 await expect (firstContentWrapper).toContainText('Business consulting');
});