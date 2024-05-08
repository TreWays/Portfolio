import { Locator, Page } from "@playwright/test"

export class Header{
    page: Page
    menu: Locator;
    servicesLink: Locator;
    aboutUsLink: Locator;
    contactLink: Locator;
    blogLink: Locator;
    careersLink: Locator;
    searchIcon: Locator;
    searchField: Locator;
    masthead: Locator
    pageHeading: Locator;




constructor(page: Page){
    this.page = page;
    this.pageHeading = page.locator('h1');
    this.menu = page.locator('#menu-1-d443975');
    this.servicesLink= this.menu.getByRole('link', { name: 'Services' });
    this.aboutUsLink = this.menu.getByRole('link', { name: 'About Us' });
    this.contactLink = this.menu.getByRole('link', { name: 'Contact us' });
    this.blogLink = this.menu.getByRole('link', { name: 'Blog' });
    this.careersLink = this.menu.getByRole('link', { name: 'CAREERS' });

    this.searchIcon = page.getByRole('search').locator('i').first();
    this.searchField = page.getByPlaceholder('Search...');

    this.masthead = page.locator('#masthead');
    
}
}