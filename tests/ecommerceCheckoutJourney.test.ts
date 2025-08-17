import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('E-commerce Checkout Journey - Search → Add to Cart → Checkout', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await homePage.navigate();
    await homePage.searchProductAndSelect('spray');


    await productPage.goToProductPage('Armani Eau de Toilette Spray');
    await productPage.validateProductInfo('Armani Eau de Toilette Spray', 1)
    await productPage.addToCart();

    await cartPage.proceedToCheckout();

    await checkoutPage.fillCheckoutForm();
    await checkoutPage.stopBeforePayment();
});
