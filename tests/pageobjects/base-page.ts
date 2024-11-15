import { Browser, expect, Locator, Page, TestInfo } from '@playwright/test';
import { WebActions } from '@util/webactions';
import { Helper } from '@util/helper';


export class BasePage {

readonly page: Page;
    readonly baseUrl: string;
    readonly webactions: WebActions;

    a: number = 0;

    constructor(page: Page, baseUrl: string) {
        this.page = page;
        this.baseUrl = baseUrl;
        this.webactions = new WebActions(page);
    }

  //GetFileNames
    public getFilenameFromPath(fullFilePath: string) {
        return ((fullFilePath.replace(/^.*[\\\/]/, '')).valueOf().toString());
    }

    public stepCounter() {
        return (this.a++).toString();
    }

}