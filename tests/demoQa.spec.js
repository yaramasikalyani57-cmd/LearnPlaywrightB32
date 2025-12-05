import { test, expect } from '@playwright/test';

import { logindemopage } from "../pages/createaccdemo.po.js"// tmportig pages file

import demoQadata from "../testData/demoQadata.json";// importing  data file

let login


test.beforeEach("demopagelogin page", async ({ page }) => {


    login = new logindemopage(page)

    await login.openPage()// open the page
    await login.clickbtns()// click on the element and text box button
})
// calling the creareaccount method using the data file
test("enter credentials", async () => {
    await login.createAccount(demoQadata.fullname,
        demoQadata.email,
        demoQadata.currentadd,
        demoQadata.permanentadd)
    await login.submitbtn()// click on submit button

    await login.credentialsVerification(demoQadata.fullname,
        demoQadata.email,
        demoQadata.currentadd,
        demoQadata.permanentadd// assertion checking for text visiblity
    )


})