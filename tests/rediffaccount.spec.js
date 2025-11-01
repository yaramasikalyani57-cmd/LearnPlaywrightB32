import { test, expect } from '@playwright/test';
test('verify creating reddif account', async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    await page.locator("//input[@placeholder='Enter your full name']").fill("kalyani")
    await page.locator("//input[@placeholder='Enter Rediffmail ID']").fill("kalyani124")

    await page.locator("input[placeholder='Enter password']").fill("bujii@123")
   await page.locator('#newpasswd1').fill("bujii@123")
 await page.locator('select.day').selectOption('05')
 await page.locator('select.middle.month').selectOption('APR')
 await page.locator('year').selectOption('2011')
 await page.locator("//div[@class='gender']//label)[2]").check()

})




    