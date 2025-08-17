import type { Page } from '@playwright/test';
import { TestUtils } from '../utils/testUtils';

// @ts-ignore
export class CheckoutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillCheckoutForm() {
        await TestUtils.waitAndFill(this.page.locator('#guestFrm_firstname'), 'Prabhagar');
        await TestUtils.waitAndFill(this.page.locator('#guestFrm_lastname'), 'Tamizhselvan');
        await this.page.fill('input[name="email"]', 'prabhagar@example.com');
        await this.page.locator('#guestFrm_address_1').fill('923 Latrobe st');
        await this.page.fill('input[name="city"]', 'Melbourne');
        await this.page.fill('input[name="postcode"]', '3000');
        await this.page.locator('#guestFrm_country_id').selectOption('13');
        await this.page.locator('#guestFrm_zone_id option[value="197"]').waitFor({ state: 'attached' });
        await this.page.locator('#guestFrm_zone_id').selectOption('197');
    }

    async stopBeforePayment() {
        console.log('Stopping before payment execution as per requirements.');
    }
}
