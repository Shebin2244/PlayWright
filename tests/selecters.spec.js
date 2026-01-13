import {test,expect} from "@playwright/test";

test('Selector Demo', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await expect(page).toHaveURL('https://www.saucedemo.com/')
    // await page.pause()


})
