import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.cgi.com/en');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/IT and business consulting services/);
});

test("carousel", async ({ page }) => {
  await page.goto("https://www.cgi.com/en");

  await expect(page.getByRole('heading', { name: 'Insights for trusted AI' })).toBeVisible();
  await page.getByLabel("Next").click();

  await expect(page.getByRole('heading', { name: 'Discover what it’s like to' })).toBeVisible();
  await page.getByLabel("Next").click();

  await expect(page.getByRole('heading', { name: 'Building a more sustainable and inclusive world' })).toBeVisible();
  await page.getByLabel("Next").click();

  await expect(page.getByRole('heading', { name: 'Insights for trusted AI' })).toBeVisible();
});
