import {expect, Page} from '@playwright/test';

export class ProductPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToProductPage(productFullName: string) {
        await this.page.getByRole('link', {name: productFullName}).click();
    }



    async validateProductInfo(productFullName: string, quantity : number) {
  await this.page.getByRole('heading', { name: productFullName }).click();
  await expect( this.page.locator('#product_quantity')).toHaveValue('1');
    }

    async addToCart() {
        await this.page.getByRole('link', { name: ' Add to Cart' }).click();
    }

}
