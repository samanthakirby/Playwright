"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
(0, cucumber_1.Before)(async function (scenario) {
    console.log(`🥒 Running cucumber "${scenario.pickle.name}"`);
    const contextOptions = {
        recordVideo: {
            dir: './reports/videos/' + scenario.pickle.name,
        },
    };
    const ready = await this.init(contextOptions);
    return ready;
});
(0, cucumber_1.After)(async function (scenario) {
    const { screen: { page, browser }, } = this;
    const scenarioStatus = scenario.result?.status;
    if (scenarioStatus === 'FAILED') {
        await page.screenshot({
            path: `./reports/screenshots/${scenario.pickle.name}.png`,
        });
    }
    await browser.close();
    return browser;
});
