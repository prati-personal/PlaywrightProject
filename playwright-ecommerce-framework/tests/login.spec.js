const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Valid Login Test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    const loginPage = new LoginPage(page);

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);

    //Add to cart
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    //Go to cart
    await page.locator('.shopping_cart_link').click();
    //Verify item in cart
    await expect(page.locator('.inventory_item_name')).toContainText('Sauce Labs Backpack');
    //Checkout
    await page.locator('#checkout').click();    
    //Fill in checkout info
    await page.locator('#first-name').fill('John');
    await page.locator('#last-name').fill('Doe');
    await page.locator('#postal-code').fill('12345');
    await page.locator('#continue').click();
    //Verify checkout overview
    await expect(page.locator('.title')).toContainText('Checkout: Overview');
    await expect(page.locator('.inventory_item_name')).toContainText('Sauce Labs Backpack');        
    //Finish checkout
    await page.locator('#finish').click();
    //Verify checkout complete
    await expect(page.locator('.title')).toContainText('Checkout: Complete!');
    await expect(page.locator('.complete-header')).toContainText('Thank you for your order!');
    await page.close();

    //Logout
    /*await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    //Verify logged out
    await expect(page).toHaveURL(/https:\/\/www\.saucedemo\.com\/$/);
    await expect(page.locator('#login-button')).toBeVisible();*/
    });