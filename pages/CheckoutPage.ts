import {Page, expect} from '@playwright/test';
import {TestUtils} from '../utils/testUtils';

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
        await this.page.locator('#guestFrm_zone_id option[value="197"]').waitFor({state: 'attached'});
        await this.page.locator('#guestFrm_zone_id').selectOption('197');
        await this.page.getByRole('button', {name: ' Continue'}).click();
    }

    async validateCheckoutConfirmation(productFullName: string, price: string) {
        const shippmentOptions = this.page.locator('table.table.confirm_shippment_options');
        await expect(shippmentOptions).toContainText('Prabhagar Tamizhselvan');
        await expect(shippmentOptions).toContainText('923 Latrobe st');
        await expect(shippmentOptions).toContainText('Melbourne Victoria 3000');
        await expect(shippmentOptions).toContainText('Australia');
        const productTable = this.page.locator('table.table.confirm_products');
        await expect(productTable).toContainText(productFullName);
        await expect(productTable).toContainText(price);
        await expect(this.page.locator('#checkout_btn')).toBeVisible();
    }

    async stopBeforePayment() {
        console.log('Stopping before payment execution as per requirements.');
    }
}
