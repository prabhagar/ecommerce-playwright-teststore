import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('E-commerce Checkout Journey', () => {
    test('should complete checkout flow until payment page', async ({ page }) => {
        const homePage = new HomePage(page);
        const productPage = new ProductPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await test.step('Search for a product', async () => {
            await homePage.navigate();
            await homePage.searchProductAndSelect('spray');
        });

        await test.step('Add product to cart', async () => {
            await productPage.goToProductPage('Armani Eau de Toilette Spray');
            await productPage.validateProductInfo('Armani Eau de Toilette Spray', 1);
            await productPage.addToCart();
            await cartPage.proceedToCheckout();
        });

        await test.step('Proceed through checkout (stop before payment)', async () => {
            await checkoutPage.fillCheckoutForm();
            await checkoutPage.stopBeforePayment();
        });
    });
});
