
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.asrcfederal.com/careers');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Purpose Driven Government Contracting Careers/);
});

test("Clicking ASRC Federal Text", async ({ page }) => { 
  await page.goto('https://www.asrcfederal.com/');
  await page.getByAltText('ASRC Federal').click();

});