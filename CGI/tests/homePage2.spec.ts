import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.cgi.com/en');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/IT and business consulting services/);
});

test('validate header', async ({ page }) => {
    await page.goto('https://www.cgi.com/en');
  
    // Click the get started link.
    await page.getByRole('button').getByText('Services').click();
  
  
    await expect(page.getByRole('link', { name: 'End-to-end services ' }).first()).toHaveAttribute('href', '/en/end-to-end-services')
  });