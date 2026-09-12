const {test, expect} = require('@playwright/test');

test('Add new admin', async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();
    await page.locator('span').filter({ hasText: 'Admin' }).first().click();
    await page.waitForTimeout(5000);
    await page.locator("(//a[normalize-space()='Admin'])").click();
    await page.locator("(//button[normalize-space()='Add'])").click();
    await page.waitForSelector("(//div[@class='oxd-select-text oxd-select-text--active'])[1]");
    await page.locator("(//div[@class='oxd-grid-item oxd-grid-item--gutters'])[1]").click(); 
    await page.locator("(//div[@role='option'])[2]").click();

    await page.locator("(//div[@class='oxd-grid-item oxd-grid-item--gutters'])[3]").click();
    await page.locator("(//div[@role='listbox']//div[2])").click();
    await page.locator("(//input[@placeholder='Type for hints...'])").click();
    await page.locator("(//input[@placeholder='Type for hints...'])").fill('Test');

    await page.locator("(//div[@role='listbox']//div[2]//span[1])").click();
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[1]").type('Admin1234');
    await page.locator("(//input[@type='password'])[1]").type('admin1235');
    await page.locator("(//input[@type='password'])[2]").type('admin1235');
    await page.locator("(//button[normalize-space()='Save'])").click();
}
)

