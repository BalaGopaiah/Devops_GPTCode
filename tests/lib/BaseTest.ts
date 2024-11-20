import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../pageobjects/login-page';

const ENV = process.env.ENV;

export type TestOptions = {
    loginPage: LoginPage;
};

const test = baseTest.extend<TestOptions>({
    loginPage: async ({ page, baseURL }, use) => {
        if (!baseURL) throw new Error("baseURL is undefined!");
        await use(new LoginPage(page, baseURL));
    },
});

// const test = baseTest.extend<TestOptions>
//     ({
//         loginPage: async ({ page, baseURL }, use) => {
//             await use(new LoginPage(page, baseURL));
//         },
//     });

export default test;