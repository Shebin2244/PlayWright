import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');
  await page.locator('.card-body').click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('practice');
  await page.getByRole('textbox', { name: 'Passwords' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});


//npx playwright codegen  --browser=chromium --channel=msedge https://practice.expandtesting.com/login