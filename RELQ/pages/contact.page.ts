import { Locator, Page } from "@playwright/test"

export class ContactPage{
    page: Page
    yourName: Locator;
    phoneNumber: Locator;
    emailAddress: Locator;
    subject: Locator;
    message: Locator;
    sendMessageButton: Locator;

    requiredFieldLabel: Locator;
    contactFormLabel: Locator;

constructor(page: Page){
    this.page = page;
    this.yourName = page.getByPlaceholder('Your Name *');
    this.phoneNumber= page.getByPlaceholder('Phone Number *');
    this.emailAddress=page.getByPlaceholder('Email Address *');
    this.subject = page.getByPlaceholder('Subject');
    this.message = page.getByText('Message *');
    this.sendMessageButton = page.getByRole('button', { name: 'send message' });
    this.requiredFieldLabel = page.getByLabel("Contact form");
    this.contactFormLabel = page.getByLabel("Contact form");
}
}