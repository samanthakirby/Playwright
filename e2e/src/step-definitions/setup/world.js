"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioWorld = void 0;
const playwright_1 = __importDefault(require("playwright"));
const cucumber_1 = require("@cucumber/cucumber");
const parseEnv_1 = require("../../env/parseEnv");
class ScenarioWorld extends cucumber_1.World {
    constructor(options) {
        super(options);
    }
    screen;
    async init(contextOptions) {
        await this.screen?.page?.close();
        await this.screen?.context?.close();
        await this.screen?.browser?.close();
        const browser = await this.newBrowser();
        const context = await browser.newContext(contextOptions);
        const page = await context.newPage();
        this.screen = { browser, context, page };
        return this.screen;
    }
    newBrowser = async () => {
        const automationBrowsers = ['chromium', 'firefox', 'webkit'];
        const automationBrowser = (0, parseEnv_1.env)('UI_AUTOMATION_BROWSER');
        const browserType = playwright_1.default[automationBrowser];
        const browser = await browserType.launch({
            headless: process.env.HEADLESS !== 'false',
            args: ['--disable-web-security', '--disable-features=IsolateOrigins,site-per-process'],
        });
        return browser;
    };
}
exports.ScenarioWorld = ScenarioWorld;
(0, cucumber_1.setWorldConstructor)(ScenarioWorld);
