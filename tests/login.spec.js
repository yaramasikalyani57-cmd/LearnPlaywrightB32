import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('yaramasi kalyani');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('yaramasikalyani57@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('chittoor');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('chittoor');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Name:yaramasi kalyani')).toBeVisible();
  await expect(page.getByText('Email:yaramasikalyani57@gmail')).toBeVisible();
  await expect(page.getByText('Current Address :chittoor')).toBeVisible();
  await expect(page.getByText('Permananet Address :chittoor')).toBeVisible();
});