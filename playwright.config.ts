import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config : PlaywrightTestConfig = {
  testDir: './tests',
  /* Set test timeout  */
  timeout: 60 * 3000,
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Chromium',
      use: { 
        // configure the browser to use
        browserName: 'chromium',
        permissions: ['geolocation'],
        // chrome browser config
        channel: 'chrome',
        // picks base URL based on user input
        baseURL: `https://xathon.mettl.com/event/Dare2Code_`,
        // browser mode
        headless: false,
        // launchOptions: {
        //   headless: false,
        //   args: ['--incognito']
        // },
        ...devices['Desktop Chrome'],
        // browser height and width
        viewport: { width: 1300, height: 740 },
        // enable file downloads in chrome
        acceptDownloads: true,
        launchOptions: {
          args: ['--incognito']
        },
        // artifacts
        screenshot: 'on',
        video: 'on',
        trace: 'retain-on-failure'

      },
    },

    {
      name: 'Firefox',
      use: { 
            // Configure the browser to use
            browserName: `firefox`,
            permissions: ['geolocation'],
            // firefox browser config
            channel:  `firefox`,     
            // picks base URL based on user input
            baseURL:  `https://xathon.mettl.com/event/Dare2Code_`,  
	          // browser mode
            headless:  false, 
            ...devices['Desktop Firefox'], 
            // browser height and width
            viewport: { width: 1360, height: 720 },
            // enable file downloads in chrome 
            acceptDownloads: true,
            // artifacts
            screenshot: 'on',
            video: 'on',
            trace: `retain-on-failure`,
      },
    },

    {
      name: 'WebKit',
      use: { 
        // Configure the browser to use
        browserName: `webkit`,
        permissions: ['geolocation'],
        // picks base URL based on user input
        baseURL:  `https://xathon.mettl.com/event/Dare2Code_`,  
        // browser mode
        headless:  false, 
        ...devices['Desktop Safari'],
        // browser height and width
        viewport: { width: 1360, height: 720 },
        // enable file downloads in chrome 
        acceptDownloads: true,
        // artifacts
        screenshot: 'on',
        video: 'on',
        trace: `retain-on-failure`,

      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     headless: false,
    //     ...devices['iPhone 12'],
    //     viewport: { width: 200, height: 720 },
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/'

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
};

export default config;
