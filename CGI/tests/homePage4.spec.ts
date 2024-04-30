import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.cgi.com/en');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/IT and business consulting services/);
});

test('language switch', async ({ page }) => {
  await page.goto('https://www.cgi.com/en');
  await page.getByLabel('language Switcher').click();
  await page.getByLabel('Switch language to FR').last().click();
  await expect(page.getByRole('link').getByText('Carrières').first()).toBeVisible();
});