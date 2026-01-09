import { test, expect } from '@playwright/test';

// first test
test('my first program', async ({ page })=> {
    await page.goto('https://www.google.com/');
    //check title
    await expect(page).toHaveTitle('Google')
});


