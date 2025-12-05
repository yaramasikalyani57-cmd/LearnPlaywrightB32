import { test, expect } from '@playwright/test';

test('login to orangehrm account', async ({ page }) => {

  // login to the url
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator('//input[@placeholder="Username"]').fill(process.env.APP_USERNAME);
  await page.locator('//input[@name="password"]').fill(process.env.APP_PASSWORD);
  await page.locator('//button[@type="submit"]').click();
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
});

//click on buzz
test('click on Buzz and post', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator('//input[@name="username"]').fill('Admin');
  await page.locator('//input[@name="password"]').fill('admin123');
  await page.locator('//button[@type="submit"]').click();
  //asertion current url or not
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  //click on buzz
  await page.locator('//a[@class="oxd-main-menu-item active"]').click();
  //write in notes
  await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main"]').fill('hello buddies');
  //click on post
  await page.locator('//button[@type="submit"]').click();
});

// uploading imageor file
test('upload image', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator('//input[@placeholder="Username"]').fill('Admin');
  await page.locator('//input[@name="password"]').fill('admin123');
  await page.locator('//button[@type="submit"]').click();
  //asertion current url or not
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  //click on buzz
  await page.locator('//a[@href="/web/index.php/buzz/viewBuzz"]').click();
  // click on share
  await page.locator('//span[@class="oxd-glass-button-icon oxd-glass-button-icon--cameraglass"]').click();

  //upload image
  await page.locator('//p[@class="oxd-text oxd-text--p oxd-text--card-title"]').setInputFiles('testdata.json\Hello Friends Images.jpg');

});

// add job 
test('add job', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator('//input[@placeholder="Username"]').fill('Admin');
  await page.locator('//input[@name="password"]').fill('admin123');
  await page.locator('//button[@type="submit"]').click();
  //asertion current url or not
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  await page.locator('//a[@class="oxd-main-menu-item"]').click();//click on admin
  await page.locator('//i[@class="oxd-icon bi-chevron-down"]').click();//click on job

});
