import { test, expect } from '@playwright/test';
import { Header } from '../pages/header.page';

test('navigation checks', async ({ page }) => {
  const header = new Header(page);
  await page.goto('https://relqtechnologies.com/');
  await header.servicesLink.click();
  await expect(header.pageHeading).toContainText('Services');
  await header.aboutUsLink.click();
  await expect(header.pageHeading).toContainText('About Us');
  await header.contactLink.click();
  await expect(header.pageHeading).toContainText('Contact');
  await header.blogLink.click();
  await expect(header.pageHeading).toContainText('Blog');
  await header.careersLink.click();
  await expect(header.pageHeading).toContainText('CAREERS');
});

test('Cross-site scripting search', async ({ page }) => {
  const header = new Header(page);
  await page.goto('https://relqtechnologies.com/');
  await header.searchIcon.click();
  await header.searchField.click();
  await header.searchField.fill('<script>');
  await header.searchField.press('Enter');
  await expect(page.getByRole('heading')).toContainText('Service Unavailable');
});

test('search happy path', async ({ page }) => {
  const header = new Header(page);

  await page.goto('https://relqtechnologies.com/');
  await header.searchIcon.click();
  await header.searchField.click();
  await header.searchField.fill('testing');
  await header.searchField.press('Enter');
  await expect(page.locator('#post-5736')).toContainText('Testing from Data Science Perspective');
});

test('visiblity checks', async ({ page }) => {
  const header = new Header(page);
  await page.goto('https://relqtechnologies.com/');
  await expect(header.masthead).toContainText('info@relqtechnologies.com');
  await expect(page.locator('section').filter({ hasText: 'info@relqtechnologies.com' }).getByRole('listitem').nth(1)).toBeVisible();
  await expect(page.getByText('Office Hour : 08:00am - 6:00pm')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Facebook ' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Twitter ' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Google-plus ' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Instagram ' })).toBeVisible();
  await expect(page.locator('.elementor-image > a')).toBeVisible();
  await expect(page.locator('section').filter({ hasText: 'Home Services About Us' }).locator('i').nth(1)).toBeVisible();
});