import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.zkoss.org/zkdemo/input');
  await page.locator('#sidebar-tree').getByRole('link', { name: 'Form Sample' }).click();
  await page.locator('#infotab1 > .desc-tab-hl').click();
  await page.getByRole('row', { name: 'UserName Textbox' }).getByRole('textbox').click();
  await page.getByRole('row', { name: 'UserName Textbox' }).getByRole('textbox').fill('shebin');
  await page.getByRole('row', { name: 'UserName Textbox' }).getByRole('textbox').press('Tab');
  await page.getByRole('row', { name: 'UserName Textbox' }).getByRole('textbox').click();
  await page.getByRole('row', { name: 'Password Textbox type = "' }).getByRole('textbox').fill('amal');
  await page.getByRole('row', { name: 'Re-type Password Textbox with' }).getByRole('textbox').fill('anamaam');
  await page.getByRole('button', { name: 'Submit' }).click();
});




//npx playwright codegen --browser=chromium --channel=msedge https://www.zkoss.org/zkdemo/input