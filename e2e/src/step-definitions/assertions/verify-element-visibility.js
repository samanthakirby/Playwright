"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
(0, cucumber_1.Then)(/^the "([^"]*)" should be displayed$/, async function (elementKey) {
    const { screen: { page }, } = this;
    console.log(`the ${elementKey} should be displayed`);
    const locator = page.locator("[data-id='header-logo']");
    await (0, test_1.expect)(locator).toBeVisible();
});
(0, cucumber_1.Then)(/^the "([^"]*)" should contain the text "(.*)"$/, async function (elementKey, expectedElementText) {
    const { screen: { page }, } = this;
    console.log(`the ${elementKey} should contain the text ${expectedElementText}`);
    const content = await page.textContent("[data-id='contacts']");
    (0, test_1.expect)(content).toBe(expectedElementText);
});
