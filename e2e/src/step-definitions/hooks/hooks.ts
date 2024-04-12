import { BeforeAll, Before, AfterAll, After } from "@cucumber/cucumber";
const { chromium } = require ("playwright");

BeforeAll(async () => {
    global.browser = await chromium.launch({
        headless: false
    });
});

AfterAll(async () => {
    await global.browser.close();
});

Before(async (scenario) => {
    // Add recording of test run
    global.context = await global.browser.newContext({
        recordVideo: {
            dir: './reports/videos/' + scenario.pickle.name
        }
    });

    global.page = await global.context.newPage();
});

After(async (scenario) => {
    const scenarioStatus = scenario.result?.status;

    if(scenarioStatus === "FAILED"){
     await global.page.screenshot({
         path: `./reports/screenshots/${scenario.pickle.name}.png`
     })
    }

    await global.page.close();
});