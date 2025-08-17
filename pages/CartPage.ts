import { Page } from '@playwright/test';

// @ts-ignore
export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async proceedToCheckout() {
        await this.page.locator('#cart_checkout1').click();
        await this.page.getByText('Guest Checkout').click();
        await this.page.getByRole('button', { name: ' Continue' }).click();
    }
}