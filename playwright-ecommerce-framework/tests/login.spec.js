const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Valid Login Test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    const loginPage = new LoginPage(page);

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
});