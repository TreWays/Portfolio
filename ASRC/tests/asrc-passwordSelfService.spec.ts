
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.asrcfederal.com/careers');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Purpose Driven Government Contracting Careers/);
});

test("navigate to password self-service", async ({ page }) => { 
  await page.goto('https://www.asrcfederal.com/employee-resources/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByText(' Password Self-Service').click();
  const page1 = await page1Promise;
  await expect(page1.locator('h1')).toContainText('Password Support');
});
  