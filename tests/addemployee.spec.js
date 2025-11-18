import { test, expect } from '@playwright/test';

import moment from 'moment';

const date = moment().format("DD-MMM-YY");

console.log(date);

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/285');
  await page.getByRole('listitem').filter({ hasText: 'Add Employee' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
  await page.locator('div').filter({ hasText: 'Add EmployeeAccepts jpg, .png' }).nth(4).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('yaramasi');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('kalyani');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/167');
});