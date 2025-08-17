import type { Page } from '@playwright/test';

// @ts-ignore
export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://automationteststore.com/');
    }

    async searchProductAndSelect(productName: string) {
        await this.page.getByRole('textbox', { name: 'Search Keywords' }).fill(productName);
        // await this.page.click('button[title="Search"]');
        await this.page.getByRole('textbox', { name: 'Search Keywords' }).press('Enter');
    }


}