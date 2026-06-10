const {test, expect}=require('@playwright/test')

test('Boostrap dropdown', async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();
    await page.locator('span').filter({ hasText: 'Admin' }).first().click();

    //await page.locator("//input[@class='oxd-input oxd-input--active'])[2]").click();

//dropdown
 await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]").click();

 await page.waitForTimeout(5000);
  await page.locator("//div[@role='listbox']//div[2]").click();

  await page.locator("//button[normalize-space()='Search']").click();


})