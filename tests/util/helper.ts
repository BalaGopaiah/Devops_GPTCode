import {
    Page,
    TestInfo
} from '@playwright/test';
import config from '../../playwright.config';
import screenshotDesktop from 'screenshot-desktop';

export class Helper {
    constructor() {}

    public static current() {
        return new Helper();
    }

    public async createScreenshotAndAddToTestStep(stepNumberSSfileName: string, page: Page, testInfo: TestInfo) {
        stepNumberSSfileName = stepNumberSSfileName.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '');
        const stepPath = testInfo.outputPath(`step${stepNumberSSfileName}.png`);
        if (config.use?.screenshot?.toString() == 'on') {
            const screenShot = await screenshotDesktop({ filename: stepPath }); //Desktop screenshot - With timestamp
            await testInfo.attach(stepNumberSSfileName, { path: stepPath });
        }
        else {
            const screenShot = await page.screenshot(); //WebPage screenshot - No timestamp
            await testInfo.attach(stepNumberSSfileName, { body: screenShot, contentType: 'image/png' });
        }
    }

}

