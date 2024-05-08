
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.asrcfederal.com/careers');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Purpose Driven Government Contracting Careers/);
});

test("Navigate to Great Place to Work", async ({ page }) => { 
  await page.goto('https://www.asrcfederal.com/careers');
  await page.getByRole('link', { name: 'Contact Us', exact: true })
  await page.locator('xpath=//a[@href="/careers"]');
  await page.getByAltText('Great Place to Work Badge').click();

});