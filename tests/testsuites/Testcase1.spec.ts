import { test, expect, Page } from '@playwright/test';
import { BasePage } from '../pageobjects/base-page';

const date = new Date();
const day = `${date.getDate()}`.padStart(2, '0');
const time = `${date.getMinutes()}`.padStart(2, '0') + `${date.getSeconds()}`.padStart(2, '0');
const screenshotpath = `./tests/screenshots/${day}${time}.png`;

// Navigate and validate the Integrations module for Cloud Providers, Version Control, and Container Registry sub-modules
test.describe('Navigate and validate the Integrations module for Cloud Providers, Version Control, and Container Registry sub-modules', async () => {
  
  test('Navigate and validate the Integrations module for Cloud Providers, Version Control, and Container Registry sub-modules', async ({ page }) => {

          // Navigate to the given applicaton Url
          await NavigateURL(page);
          
          // Validate Login credentials with valid email and password.
          await loginDashboard(page);
          
          await sidebar(page);
          
          await clickOnIntegrationAndCloudProvidersBtn(page);

          await clickOnVersionControlBtn(page);

          await clickOnContainerRegistryBtn(page);

  })

});

/**
 * Function is used to Navigate to the given application URL
 * @param page Interface page
 */
async function NavigateURL(page: Page) {
  // Navigate to the application URL
  await page.goto('https://devopsgpt.ezy.dev/');
  // Zoom out to 75%
  await changeZoom(page, '80%');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: screenshotpath, fullPage: true});
  await page.waitForTimeout(3000);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('DevOps_GPT');
}

/**
 * Function is used to change zoom level
 * @param page Interface page
 * @param zoomLevel defines the zoom in and zoom out level in percentage
 */
async function changeZoom(page: Page, zoomLevel: string) {
  await page.evaluate((zoomLevel) => {
    document.body.style.zoom = zoomLevel;
  }, zoomLevel);
}

/**
 * Function is used to Validate the login with valid credentials
 * @param page Interface page
 */
async function loginDashboard(page: Page) {
  // click on Hackathons button 
  await page.screenshot({ path: screenshotpath, fullPage: true });
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.waitForTimeout(2000);

  // Zoom out to 75%
  await changeZoom(page, '75%');
  await page.waitForTimeout(2000);

  // Enter Email field
  await page.locator("input[id='input_field_p_email_email']").fill('vishnupriya@zelarsoft.com');
  await page.screenshot({ path: screenshotpath, fullPage: true });
  await page.waitForTimeout(2000);

  // click on continue button
  await page.screenshot({ path: screenshotpath, fullPage: true });
  await page.click("button:has(span:text('Continue'))");
  await page.waitForTimeout(2000);

  await page.locator("input[id='input_field_p_password_password']").fill("pass1234S$&*()");
  await page.screenshot({ path: screenshotpath, fullPage: true });
  await page.waitForTimeout(2000);

  await page.screenshot({ path: screenshotpath, fullPage: true });
  await page.click("button:has(span:text('Continue'))");
  await page.waitForTimeout(3000);

  // await page.locator("input[id='input_field_p_confirmation_code_code_']").fill('');
  // await page.waitForTimeout(4000);

}

/**
 * Function is used to click on the sidebar panel
 * @param page Interface page
 */
async function sidebar(page: Page) {
  // Zoom out to 75%
  await changeZoom(page, '75%');
  await page.waitForTimeout(2000);
  await page.locator("button[class='text-gray-400 hover:text-white'] svg[class='lucide lucide-panel-right-close absolute left-[3.2rem]']").click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: screenshotpath, fullPage: true });
}

/**
 * Function is used to Validate the Cloud Providers fields with valid credentials
 * @param page Interface page
 */
async function clickOnIntegrationAndCloudProvidersBtn(page: Page) {
  // Zoom out to 75%
  await changeZoom(page, '75%');
  await page.waitForTimeout(2000);
  await page.locator("a:has(span:text('Integration'))").click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: screenshotpath, fullPage: true });

  await clickOnAWSButton(page);

  await clickOnGCPButton(page);

  await clickOnAzureButton(page);
  await page.waitForTimeout(3000);

}

/**
 * Function is used to click and Validate the AWS Integration with valid credentials
 * @param page Interface page
 */
async function clickOnAWSButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
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

/**
 * Function is used to click and Validate the GCP Integration with valid credentials
 * @param page Interface page
 */
async function clickOnGCPButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
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

/**
 * Function is used to click and Validate the Azure Integration with valid credentials
 * @param page Interface page
 */
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

/**
 * Function is used to Validate the version control fields with valid credentials
 * @param page Interface page
 */
async function clickOnVersionControlBtn(page: Page) {
  // Zoom out to 75%
  await changeZoom(page, '75%');
  await page.waitForTimeout(2000);
  await page.click("button:text('Version Control')");
  await page.screenshot({ path: screenshotpath, fullPage: true });
  await page.waitForTimeout(2000);

  await clickOnGitHubButton(page);
  await clickOnGitLabButton(page);
  await clickOnBitbucketButton(page);
  await page.waitForTimeout(3000);
  
  await page.close();
}

/**
 * Function is used to click and Validate the GitHub Integration with valid credentials
 * @param page Interface page
 */
async function clickOnGitHubButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'GitHub' }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill('Secret1');
  await page.waitForTimeout(1000);
  await page.locator("input[id='userName']").fill('username1');
  await page.waitForTimeout(1000);
  await page.locator("input[id='accessToken']").fill('acctoken1');
  await page.waitForTimeout(1000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(2000);

} 

/**
 * Function is used to click and Validate the GitLab Integration with valid credentials
 * @param page Interface page
 */
async function clickOnGitLabButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'GitLab' }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill('Secret4');
  await page.waitForTimeout(1000);
  await page.locator("input[id='userName']").fill('UserName2');
  await page.waitForTimeout(1000);
  await page.locator("input[id='accessToken']").fill('AccessToken2');
  await page.waitForTimeout(1000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(2000);

} 

/**
 * Function is used to click and Validate the Bitbucket Integration with valid credentials
 * @param page Interface page
 */
async function clickOnBitbucketButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'Bitbucket' }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill('Secret5');
  await page.waitForTimeout(1000);
  await page.locator("input[id='userName']").fill('UserName3');
  await page.waitForTimeout(1000);
  await page.locator("input[id='accessToken']").fill('AccessToken3');
  await page.waitForTimeout(1000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(2000);

} 

/**
 * Function is used to Validate the Container Registry fields with valid credentials
 * @param page Interface page
 */
async function clickOnContainerRegistryBtn(page: Page) {
  await page.click("button:text('Container Registry')");
  // await page.getByRole('tab', { name: 'Container Registry' } ).click();
  // await page.locator('button[id="radix-:r4:-trigger-Container Registry"]').click();
  await page.waitForTimeout(2000);

  await clickOnGoogleContainerRegistryButton(page);
  await clickOnAmazonECRButton(page);
  await clickOnDockerHubButton(page);
  await page.screenshot({ path: screenshotpath, fullPage: true });
  await page.waitForTimeout(3000);

}

/**
 * Function is used to click and Validate the Google Container Registry Integration with valid credentials
 * @param page Interface page
 */
async function clickOnGoogleContainerRegistryButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'Google Container Registry' }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill('Secret7');
  await page.waitForTimeout(2000);
  await page.locator("input[id='serviceAccountKey']").fill('ServiceAccountKey1');
  await page.waitForTimeout(2000);
  await page.locator("input[id='url']").fill('https://google.com');
  await page.waitForTimeout(2000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(3000);
}

/**
 * Function is used to click and Validate the Amazon ECR Integration with valid credentials
 * @param page Interface page
 */
async function clickOnAmazonECRButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'Amazon ECR' }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill('Secret8');
  await page.waitForTimeout(2000);
  await page.locator("input[id='registryId']").fill('RegistryId1');
  await page.waitForTimeout(2000);
  await page.locator("input[id='accessKeyId']").fill('AccessKeyId1');
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretAccessKey']").fill('SecretAccessKey1');
  await page.waitForTimeout(2000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(3000);
}

/**
 * Function is used to click and Validate the Docker Hub Integration with valid credentials
 * @param page Interface page
 */
async function clickOnDockerHubButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'Docker Hub' }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill('Secret9');
  await page.waitForTimeout(2000);
  await page.locator("input[id='url']").fill('https://google.com');
  await page.waitForTimeout(2000);
  await page.locator("input[id='userName']").fill('Username1');
  await page.waitForTimeout(2000);
  await page.locator("input[id='password']").fill('Password1');
  await page.waitForTimeout(2000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(3000);
}


