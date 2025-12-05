import { test, expect } from '@playwright/test';

exports.loginpage = class logipage {

    constructor(page) {

        this.page = page;


        // locators 

        this.username = page.locator('//input[@placeholder="Username"]')
        this.password = page.locator('input[placeholder="Password"]')

        this.loginbtn = page.locator('input[type="submit"]')

        this.logo = page.locator('.login_logo')
    }

    async gotowebpage() {

        await this.page.goto("https://www.saucedemo.com/")

    }

    async logovisible() {
        await expect(this.logo).toBeVisible()
    }


    async login(username, password) {

        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbtn.click()
    }

}