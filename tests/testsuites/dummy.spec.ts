import { test, expect, Page } from '@playwright/test';
import { BasePage } from '../pageobjects/base-page';

const date = new Date();
const day = `${date.getDate()}`.padStart(2, '0');
const time = `${date.getMinutes()}`.padStart(2, '0') + `${date.getSeconds()}`.padStart(2, '0');

// Navigate and validate the Integrations module for Cloud Providers, Version Control sub-modules
test.describe('Navigate and validate the Integrations module for Cloud Providers, Version Control sub-modules', async () => {
    
    test('Navigate and validate the Integrations module for Cloud Providers, Version Control sub-modules', async ({ page }) => {
            
            // Navigate to the given applicaton Url
            await NavigateURL(page);
            
            // Validate Login credentials with valid email and password.
            await loginDashboard(page);
            
            await sidebar(page);
            
            await clickOnIntegrationBtn(page);

            //await clickOnVersionControlBtn(page);

    })

});

/**
 * Function is used to Navigate to the given application URL
 * @param page Interface page
 */
async function NavigateURL(page: Page) {
  // Navigate to the application URL
    await page.goto('https://devopsgpt.ezy.dev/');
    await page.screenshot({ path: `./tests/screenshots/${day}${time}.png`, fullPage: true});
    await page.waitForTimeout(3000);
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('DevOps_GPT');
}

/**
 * Function is used to Validate the login with valid credentials
 * @param page Interface page
 */
async function loginDashboard(page: Page) {
  // click on Hackathons button 
    await page.screenshot({ path: `./tests/screenshots/${day}${time}.png`, fullPage: true });
    await page.getByRole('link', { name: 'Sign In' }).click();
    await page.waitForTimeout(2000);

    // Enter Email field
    await page.locator("input[id='input_field_p_email_email']").fill('vishnupriya@zelarsoft.com');
    await page.screenshot({ path: `./tests/screenshots/${day}${time}.png`, fullPage: true });
    await page.waitForTimeout(2000);

    // click on continue button
    await page.screenshot({ path: `./tests/screenshots/${day}${time}.png`, fullPage: true });
    await page.click("button:has(span:text('Continue'))");
    await page.waitForTimeout(2000);

    await page.locator("input[id='input_field_p_password_password']").fill("pass1234S$&*()");
    await page.screenshot({ path: `./tests/screenshots/${day}${time}.png`, fullPage: true });
    await page.waitForTimeout(2000);

    await page.screenshot({ path: `./tests/screenshots/${day}${time}.png`, fullPage: true });
    await page.click("button:has(span:text('Continue'))");
    await page.waitForTimeout(3000);

  // await page.locator("input[id='input_field_p_confirmation_code_code_']").fill('');
  // await page.waitForTimeout(4000);

}

async function sidebar(page: Page) {
    await page.locator("button[class='text-gray-400 hover:text-white'] svg").click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `./tests/screenshots/${day}${time}.png`, fullPage: true });
}

async function clickOnIntegrationBtn(page: Page) {
    await page.locator("a:has(span:text('Integration'))").click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `./tests/screenshots/${day}${time}.png`, fullPage: true });
    
    const arrList: number = 3;
    // const selectypes = page.locator(`div[id="radix-:r4:-content-Cloud Providers"] select option`);

    for (let i = 0; i < arrList; i++) {
        await page.click("button:has(span:text('Select secret type'))");
        // await page.waitForSelector('div[id="radix-:r4:-content-Cloud Providers"] select');
        
        const selectElement = page.locator('div[id="radix-:r4:-content-Cloud Providers"] select option');
        // const options = selectElement.locator('option');
        const valuesCount = await selectElement.count();
        console.log('Number of options:', valuesCount);

        // for (let j = 0; j < valuesCount; j++) {
        //     const optionText = await options.nth(j).textContent();
        //     console.log(`Option ${j}:`, optionText);
        // }
        // for (let j = 0; j < values; j++) {

        //     await page.waitForTimeout(3000);
        //     // switch (selectTypes) {
        //     //     case ['AWS']:
        //     //         await clickOnAWSButton(page);
        //     //         break;
        //     //     case ['GCP']:
        //     //         await clickOnGCPButton(page);
        //     //         break;
        //     //     case ['Azure']:
        //     //         await clickOnAzureButton(page);
        //     //         break;
        //     // }
        // }
        
        
    }

    //await clickOnAWSButton(page);

    //await clickOnGCPButton(page);

    //await clickOnAzureButton(page);
    await page.waitForTimeout(3000);

}

async function clickOnAWSButton(page: Page) {
    await page.getByRole('option', { name: 'AWS' }).click();
    await page.waitForTimeout(2000);
    await page.locator("input[id='secretName']").fill('Secret1');
    await page.waitForTimeout(2000);
    await page.locator("input[id='accessKeyId']").fill('Key1');  
    await page.waitForTimeout(2000);
    await page.locator("input[id='secretAccessKey']").fill('SecretAccess1'); 
    await page.waitForTimeout(2000); 
    await page.locator("input[id='region']").fill('Region1');  
    await page.waitForTimeout(2000);
    await page.click("button:text('Add Secret')");
    await page.waitForTimeout(2000);
}

async function clickOnGCPButton(page: Page) {
    await page.getByRole('option', { name: 'GCP' }).click();
    await page.waitForTimeout(2000);
    await page.locator("input[id='secretName']").fill('Secret2');
    await page.waitForTimeout(2000);
    await page.locator("input[id='projectId']").fill('ProjectId1');  
    await page.waitForTimeout(2000);
    await page.locator("input[id='serviceAccountKey']").fill('ServiceAccount1'); 
    await page.waitForTimeout(2000); 
    await page.click("button:text('Add Secret')");
    await page.waitForTimeout(2000);
}

async function clickOnAzureButton(page: Page) {
    await page.click("button:has(span:text('Select secret type'))");
    await page.waitForTimeout(3000);
    await page.getByRole('option', { name: 'Azure' }).click();
    await page.waitForTimeout(2000);
    await page.locator("input[id='secretName']").fill('Secret3');
    await page.waitForTimeout(1000);
    await page.locator("input[id='TenantId']").fill('Tenant1');  
    await page.waitForTimeout(1000);
    await page.locator("input[id='clientID']").fill('ClientId1'); 
    await page.waitForTimeout(1000); 
    await page.locator("input[id='clientSecret']").fill('ClientSecret1');  
    await page.waitForTimeout(2000);
    await page.click("button:text('Add Secret')");
    await page.waitForTimeout(2000);
}

async function clickOnVersionControlBtn(page: Page) {
    await page.click("button:text('Version Control')");
    await page.waitForTimeout(2000);

    await clickOnGitHubButton(page);

    await clickOnGitLabButton(page);

    await clickOnBitbucketButton(page);
    await page.waitForTimeout(3000);
    
    await page.close();
}

async function clickOnGitHubButton(page: Page) {
    await page.click("button:has(span:text('Select secret type'))");
    await page.waitForTimeout(3000);
    await page.getByRole('option', { name: 'GitHub' }).click();
    await page.waitForTimeout(2000);
    await page.locator("input[id='secretName']").fill('Secret1');
    await page.waitForTimeout(2000);
    await page.locator("input[id='userName']").fill('UserName1');
    await page.waitForTimeout(2000);
    await page.locator("input[id='accessToken']").fill('AccessToken1');
    await page.waitForTimeout(3000);
    await page.click("button:text('Add Secret')");
    await page.waitForTimeout(2000);

} 

async function clickOnGitLabButton(page: Page) {
    await page.click("button:has(span:text('Select secret type'))");
    await page.waitForTimeout(3000);
    await page.getByRole('option', { name: 'GitLab' }).click();
    await page.waitForTimeout(2000);
    await page.locator("input[id='secretName']").fill('Secret4');
    await page.waitForTimeout(2000);
    await page.locator("input[id='userName']").fill('UserName2');
    await page.waitForTimeout(2000);
    await page.locator("input[id='accessToken']").fill('AccessToken2');
    await page.waitForTimeout(2000);
    await page.click("button:text('Add Secret')");
    await page.waitForTimeout(2000);

} 

async function clickOnBitbucketButton(page: Page) {
    await page.click("button:has(span:text('Select secret type'))");
    await page.waitForTimeout(3000);
    await page.getByRole('option', { name: 'Bitbucket' }).click();
    await page.waitForTimeout(2000);
    await page.locator("input[id='secretName']").fill('Secret5');
    await page.waitForTimeout(2000);
    await page.locator("input[id='userName']").fill('UserName3');
    await page.waitForTimeout(2000);
    await page.locator("input[id='accessToken']").fill('AccessToken3');
    await page.waitForTimeout(2000);
    await page.click("button:text('Add Secret')");
    await page.waitForTimeout(2000);

} 


