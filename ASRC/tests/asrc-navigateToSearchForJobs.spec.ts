
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.asrcfederal.com/careers');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Purpose Driven Government Contracting Careers/);
});

test("Navigate to Search For Jobs", async ({ page }) => { 
  await page.goto('https://www.asrcfederal.com/careers');
  await expect (page.getByRole('heading', { name: 'Purpose Driven Careers' })).toBeVisible();
  await page.getByRole('button', { name: 'View Our Career Opportunities' });
  await page.getByPlaceholder('Job title or keywords');
  await page.getByRole('button', { name: 'Search for Jobs!'});


});