import { test, expect } from '@playwright/test';


exports.logindemopage = class logindemopage {

    constructor(page) {

        this.page = page;


        //locators

        this.elementBtn = page.locator('//h5[text ()="Elements"]')
        this.textboxbtn = page.locator('//span[text ()="Text Box"]')
        this.fullname = page.locator('//input[@placeholder="Full Name"]')
        this.email = page.locator('#userEmail')
        this.currentadd = page.locator('#currentAddress')
        this.permanentadd = page.locator('#permanentAddress')
        this.submitbutton = page.locator('//button[text()="Submit"]')


        // visible locators

        this.nameOutput = page.locator('//p[@id="name"]')
        this.emailOutput = page.locator('//p[@id="email"]')
        this.currentAdd = page.locator('//p[@id="currentAddress"]')
        this.permanentAdd = page.locator('//p[@id="permanentAddress"]')


    }

    //methods

    async openPage() {
        await this.page.goto("https://demoqa.com/")
    }

    async clickbtns() {
        await this.elementBtn.click()
        await this.textboxbtn.click()



    }

    async createAccount(fullname, email, currentadd, permanentadd) {

        await this.fullname.fill(fullname)
        await this.email.fill(email)
        await this.currentadd.fill(currentadd)
        await this.permanentadd.fill(permanentadd)

    }
    async submitbtn() {
        await this.submitbutton.click()



    }

    async credentialsVerification(fullname, email, currentadd, permanentadd) {

        await expect(this.nameOutput).toHaveText(`Name:${fullname}`)
        await expect(this.emailOutput).toHaveText(`Email:${email}`)
        await expect(this.currentAdd).toHaveText(`Current Address :${currentadd}`)
        await expect(this.permanentAdd).toHaveText(`Permananet  Address :${permanentadd}`)
    }




}





















