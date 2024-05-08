import { test, expect } from '@playwright/test';

test('Navigate to Password Support Page from home', async ({ page }) => {
  await page.goto('https://www.asrcfederal.com/');
  await page.getByRole('link', { name: 'Contact Us', exact: true }).click();
  await page.getByRole('link', { name: ' View Employee Resources ' }).click();
  const passwordSupportPagePromise = page.waitForEvent('popup');
  await page.getByText(' Password Self-Service').click();
  const passwordSupportPage = await passwordSupportPagePromise;
  await expect (passwordSupportPage.getByRole('heading', { name: 'Password Support'})).toBeVisible();
});