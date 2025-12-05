import { test, expect } from '@playwright/test';

import { loginpage } from '../pages/loginpage.po';

let login

test(" login to the page ", async ({ page }) => {

    login = new loginpage(page)

    await login.gotowebpage()
    await login.logovisible()

})

test("login with valid credentials", async ({ page }) => {

    login = new loginpage(page)
    await login.gotowebpage()


    await login.login("standard_user", "secret_sauce")
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")


})










