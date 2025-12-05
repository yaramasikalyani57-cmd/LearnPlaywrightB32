import { test, expect } from '@playwright/test';

import { logindemopage } from "../pages/createaccdemo.po.js"

import demoQadata from "../testData/demoQadata.json";

let login


test.beforeEach("demopagelogin page", async ({ page }) => {


    login = new logindemopage(page)

    await login.openPage()
    await login.clickbtns()
})

test("enter credentials", async () => {
    await login.createAccount(demoQadata.fullname,
        demoQadata.email,
        demoQadata.currentadd,
        demoQadata.permanentadd)
    await login.submitbtn()

    await login.credentialsVerification(demoQadata.fullname,
        demoQadata.email,
        demoQadata.currentadd,
        demoQadata.permanentadd
    )


})