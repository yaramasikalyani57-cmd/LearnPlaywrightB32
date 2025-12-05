import { test, expect } from '@playwright/test';

test('login to swaglabs account', async ({ page }) => {

 // login to the url
await page.goto("https://www.saucedemo.com/v1/");
 await page.locator("input[data-test='username']").fill('standard_user');
 await page.locator("(//input[@class='form_input'])[2]").fill('secret_sauce');
 await page.locator("(//input[@class='form_input']/following-sibling::input)[2]").click();
 await expect (page.locator("(//div[@id='inventory_container'])[1]")).toBeVisible();

});
// invalid password
test('login with valid username and invalid password', async ({ page }) => {
await page.goto("https://www.saucedemo.com/v1/");
 await page.locator("input[data-test='username']").fill('standard_user');
 await page.locator("(//input[@class='form_input'])[2]").fill('secret_sau');
 await page.locator("(//input[@class='form_input']/following-sibling::input)[2]").click();
 await expect (page.locator("//input[@class='btn_action']/following-sibling::h3[1]")).toBeVisible();
});
//wrong username
test('login with invalid username and valid password', async ({ page }) => {
await page.goto("https://www.saucedemo.com/v1/");
 await page.locator("input[data-test='username']").fill('standard_use');
 await page.locator("(//input[@class='form_input'])[2]").fill('secret_sauce');
 await page.locator("(//input[@class='form_input']/following-sibling::input)[2]").click();
c});

// invalid password and username

test('login with invalid username and invalid password', async ({ page }) => {
await page.goto("https://www.saucedemo.com/v1/");
 await page.locator("input[data-test='username']").fill('standard_use');
 await page.locator("(//input[@class='form_input'])[2]").fill('secret_sau');
 await page.locator("(//input[@class='form_input']/following-sibling::input)[2]").click();
 await expect (page.locator("//input[@class='btn_action']/following-sibling::h3[1]")).toBeVisible();
});
// both values empty
test('login with empty username and empty password', async ({ page }) => {
await page.goto("https://www.saucedemo.com/v1/");
 await page.locator("input[data-test='username']").fill('');
 await page.locator("(//input[@class='form_input'])[2]").fill('');
 await page.locator("(//input[@class='form_input']/following-sibling::input)[2]").click();
 await expect (page.locator("//input[@class='btn_action']/following-sibling::h3[1]")).toBeVisible();
});

// login with loged out username
test('login with loged out username and valid password', async ({ page }) => {
await page.goto("https://www.saucedemo.com/v1/");
 await page.locator("input[data-test='username']").fill('locked_out_user');
 await page.locator("(//input[@class='form_input'])[2]").fill('secret_sauce');
 await page.locator("(//input[@class='form_input']/following-sibling::input)[2]").click();
 await expect (page.locator("//input[@class='btn_action']/following-sibling::h3[1]")).toBeVisible();
});

// login with problem user
test('login with problem username and valid password', async ({ page }) => {
await page.goto("https://www.saucedemo.com/v1/");
 await page.locator("input[data-test='username']").fill('problem_user');
 await page.locator("(//input[@class='form_input'])[2]").fill('secret_sauce');
 await page.locator("(//input[@class='form_input']/following-sibling::input)[2]").click();
 await expect (page.locator("//div[@class='header_container']/following-sibling::div[1]")).toBeVisible();
  await expect (page.locator("(//div[@id='inventory_container']//div)[2]")).toBeVisible();

});
//login with performance glitch user 
test('login with performace glitch  username and valid password', async ({ page }) => {
await page.goto("https://www.saucedemo.com/v1/");
 await page.locator("input[data-test='username']").fill('performance_glitch_user');
 await page.locator("(//input[@class='form_input'])[2]").fill('secret_sauce');
 await page.locator("(//input[@class='form_input']/following-sibling::input)[2]").click();
 await expect (page.locator("//div[@class='header_container']/following-sibling::div[1]")).toBeVisible();
  await expect (page.locator("//div[normalize-space(text())='Products']")).toBeVisible();
});









