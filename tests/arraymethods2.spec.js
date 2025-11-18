
const { test, expect } = require('@playwright/test');

test('Filter products containing Green', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

    // Get all product names
    const products = await page.locator(".product-name").allTextContents();

    // Filter only items containing "Green"
    const greenProducts = products.filter(item =>
        item.toLowerCase().includes("green")
    );

    console.log("Filtered Products:", greenProducts);
});



test('Filter price > 30 rupees items', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

    // Extract all prices as numbers
    const prices = await page.locator(".product-price").allTextContents();
    const priceNumbers = prices.map(p => Number(p));

    // Filter prices above 30
    const above30 = priceNumbers.filter(price => price > 30);

    console.log("Items priced above 30:", above30);
});