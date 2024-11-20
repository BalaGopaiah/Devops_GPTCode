import { Helper } from '../util/helper';
import { expect, Page, TestInfo } from '@playwright/test';


export class LoginPage {

    private page: Page;
    private baseURL: string;

    constructor(page: Page, baseURL: string) {
        this.page = page;
        this.baseURL = baseURL;
    }

    // constructor(page: Page, baseUrl: string) {

    //     super(page, baseUrl);
    // }

    a: number = 0;
    public stepCounter() {
        return (this.a++).toString();
    }

    /**
    * Navigate to the DocuSign url
    * @param stepNumber Stepnumber count
    * @param page Interface Page
    * @param testInfo TestInfo object to have information about currently running script 
    */
    async goto(stepNumber: string, page: Page, testInfo: TestInfo) {
        await this.page.goto(this.baseURL);
        await Helper.current().createScreenshotAndAddToTestStep(stepNumber, page, testInfo);
        // Zoom out to 75%
        await this.changeZoom(page, '80%');
        await page.waitForTimeout(2000);

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle('DevOps_GPT');
    }

    /**
    * Function is used to change zoom level
    * @param page Interface page
    * @param zoomLevel defines the zoom in and zoom out level in percentage
    */
    async changeZoom(page: Page, zoomLevel: string) {
        await page.evaluate((zoomLevel) => {
            document.body.style.zoom = zoomLevel;
        }, zoomLevel);
    }

}
