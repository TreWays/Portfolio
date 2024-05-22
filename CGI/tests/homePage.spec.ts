
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.cgi.com/en');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/IT and business consulting services/);
});

test("cycle Through Homepage Headings", async ({ page }) => {
  await page.goto("https://www.cgi.com/en");

  await expect(page.getByRole('heading', { name: 'Digital triplet: AI-powered sibling to the digital twin' })).toBeVisible();
  await page.getByLabel("Next").click();

  await expect(page.getByRole('heading', { name: '  Supporting Iberdrola’s transformation' })).toBeVisible();
  await page.getByLabel("Next").click();

  await expect(page.getByRole('heading', { name: 'Recognized for excellence' })).toBeVisible();
  await page.getByLabel("Next").click();
});
