"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
(0, cucumber_1.Given)(/^I am on the "([^"]*)" page$/, async function (pageId) {
    const { screen: { page }, } = this;
    console.log(`I am on the ${pageId} page`);
    await page.goto("http://localhost:3000/");
});
