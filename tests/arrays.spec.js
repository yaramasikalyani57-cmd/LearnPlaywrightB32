import { test, expect } from '@playwright/test';



test('Verify Get all Product Name', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

    const productnames = await page.locator('.product-name').allTextContents()

    //console.log(productnames)

    const firstproductname = await page.locator('(//h4[@class="product-name"])[last()]').textContent()

    console.log(firstproductname)

})

test('Verify slice method', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')


    const items = await page.locator('(//h4[@class="product-name"])').allTextContents()
    const productnames = items.slice(0, 5)

    // console.log(productnames)

    const productprice = await page.locator('//p[@class="product-price"]').allTextContents()
    const price = productprice.slice(10, 20)
    console.log(price)// to view price of the products 

})




// splice method 

test('Verify splice method', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

    const items = await page.locator('(//h4[@class="product-name"])').allTextContents()

    items.splice(0, 5, "peanutbutter")// here 0 staart from index o and remove 5 items and add penut butter at index point

    // console.log(items)

    // example 2 
    const productprice = await page.locator('//p[@class="product-price"]').allTextContents()
    productprice.splice(10, 20, 34)
    console.log(productprice)


})


