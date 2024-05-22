import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  page.setDefaultTimeout(90000);
    await page.goto('https://www.cvs.com/retail/help/email-pharmacy-customer-relations.html');
  await page.locator('#guideContainer-rootPanel-guidedropdownlist___widget').selectOption('Yes');
  await page.locator('#guideContainer-rootPanel-guidedropdownlist_51___widget').selectOption('Complaint');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Joe');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Tester');
  await page.locator('#guideContainer-rootPanel-guideemail___widget').fill('joetester@gmail.com');
  await page.locator('#guideContainer-rootPanel-guideemail_679633062___widget').fill('joetester@gmail.com');
  await page.locator('#guideContainer-rootPanel-guidetelephone___widget').fill('8622198282');
  await page.locator('#guideContainer-rootPanel-guidetelephone___widget').press('ArrowLeft');
  await page.locator('#guideContainer-rootPanel-guidetelephone___widget').press('ArrowLeft');
  await page.locator('#guideContainer-rootPanel-guidetelephone___widget').press('ArrowLeft');
  await page.locator('#guideContainer-rootPanel-guidetelephone___widget').press('ArrowLeft');

  await page.getByRole('textbox', { name: 'Address 1' }).fill('12 main st');
  await page.getByRole('textbox', { name: 'City' }).fill('bloomfield');
  await page.getByRole('textbox', { name: 'City' }).press('Tab');
  await page.getByRole('textbox', { name: 'Zip Code' }).fill('07003');
  await page.getByText('Please indicate if a response is required. SelectYesNo Reason for Email Select').click();
  await page.locator('#guideContainer-rootPanel-guidenumericbox_8760___widget').fill('3131315524');
  await page.getByText('Please indicate if a response is required. SelectYesNo Reason for Email Select').click();
  
  await page.getByText('Please indicate if a response is required. SelectYesNo Reason for Email Select').click();
  await page.locator('#guideContainer-rootPanel-guidetelephone_82486___widget').click();
  await page.locator('#guideContainer-rootPanel-guidetelephone_82486___widget').fill('9734444064');
  await page.getByText('Please indicate if a response is required. SelectYesNo Reason for Email Select').click();
  await page.locator('#guideContainer-rootPanel-guidenumericbox_9517__').click();
  await page.locator('#guideContainer-rootPanel-guidenumericbox_9517___widget').click();
  await page.locator('#guideContainer-rootPanel-guidenumericbox_9517___widget').fill('1231');
  await page.locator('#guideContainer-rootPanel-guidedatepicker___widget').fill('2024-05-14');
  await page.getByRole('textbox', { name: 'Register Number' }).fill('1');
  await page.locator('#guideContainer-rootPanel-guidenumericbox_4163___widget').fill('112');
  await page.locator('#guideContainer-rootPanel-guidedropdownlist_35___widget').selectOption('No');
  await page.locator('#guideContainer-rootPanel-guidetextdraw_175141__').getByText('Description of Issue').click();
  await page.locator('#guideContainer-rootPanel-guidetextdraw_175141___guide-item').click();
  await page.getByLabel('Description of Issue').fill('yr');
  await page.getByLabel('Description of Issue').fill('test');
});