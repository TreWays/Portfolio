
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.asrcfederal.com/careers');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Purpose Driven Government Contracting Careers/);
});

test("Navigate to Software & Applications", async ({ page }) => { 
  await page.goto('https://www.asrcfederal.com/offerings/software-applications-analytics/');
  await page.getByText('Software Lifecycle Services', { exact: true })
  await page.getByText('Lessen the worry of app')
  await page.getByRole('link', { name: 'Software & Application' })
  await page.getByRole('heading', { name: 'Software & Applications' })
   
});