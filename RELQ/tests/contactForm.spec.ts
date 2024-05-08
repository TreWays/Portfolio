import { test, expect } from "@playwright/test";
import { ContactPage } from "../pages/contact.page";

  test("able to populate form", async ({ page }) => {
    await page.goto("https://relqtechnologies.com/contact");
    const contactPage = new ContactPage(page);

    await contactPage.yourName.fill("tre");
    await expect(contactPage.yourName).toHaveValue("tre");
    await contactPage.phoneNumber.click();
    await contactPage.phoneNumber.fill("8043831831");
    await expect(contactPage.phoneNumber).toHaveValue("8043831831");
    await contactPage.emailAddress.click();
    await contactPage.emailAddress.fill("tre@gmail.com");
    await expect(contactPage.emailAddress).toHaveValue("tre@gmail.com");
    await contactPage.subject.click();
    await contactPage.subject.fill("test subject");
    await expect(contactPage.subject).toHaveValue("test subject");
    await contactPage.message.click();
    await contactPage.message.fill("Message Text");
    await expect(contactPage.message).toHaveValue("Message Text");
    await expect(contactPage.sendMessageButton).toBeVisible();
  });

  test("contact form negative test", async ({ page }) => {
    await page.goto("https://relqtechnologies.com/contact");
    const contactPage = new ContactPage(page);
    await contactPage.sendMessageButton.click();
    await expect(contactPage.requiredFieldLabel).toContainText(
      "The field is required."
    );
    await contactPage.emailAddress.click();
    await contactPage.emailAddress.fill("tre@gmail.com");
    await contactPage.sendMessageButton.click();
    await expect(contactPage.contactFormLabel).toContainText(
      "One or more fields have an error. Please check and try again."
    );
  });

