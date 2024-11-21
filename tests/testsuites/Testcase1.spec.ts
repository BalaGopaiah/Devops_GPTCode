import { expect, Page } from '@playwright/test';
import { testConfig } from '../../testConfig';
import test from '../lib/BaseTest';
import { createAmzonECR, createArgoCD, createAWS, createAzure, createBitbucket, createCircleCI, createDockerHub, createGCP, createGithub, createGithubContainerRegistry, createGitlab, createGoogleContainerRegistry, createGrafana, createJenkins, createLoki, createMimir, createTempo } from '../util/mockdata.factory';
import { CreationOfAmazonECR, CreationOfArgoCD, CreationOfAWS, CreationOfAzure, CreationOfBitbucket, CreationOfCircleCI, CreationOfDockerHub, CreationOfGCP, CreationOfGilab, CreationOfGithub, CreationOfGithubContainerRegistry, CreationOfGoogleContainerRegistry, CreationOfGrafana, CreationOfJenkins, CreationOfLoki, CreationOfMimir, CreationOfTempo } from '../types/devopsgpt.type';

const date = new Date();
const day = `${date.getDate()}`.padStart(2, '0');
const time = `${date.getMinutes()}`.padStart(2, '0') + `${date.getSeconds()}`.padStart(2, '0');
const screenshotpath = `./tests/screenshots/${day}${time}.png`;

const awsData: CreationOfAWS = createAWS({}); 
const gcpData: CreationOfGCP = createGCP({}); 
const azureData: CreationOfAzure = createAzure({});
const githubData: CreationOfGithub = createGithub({});
const gitlabData: CreationOfGilab = createGitlab({});
const bitbucketbData: CreationOfBitbucket = createBitbucket({});
const googlecontainerRegistryData: CreationOfGoogleContainerRegistry = createGoogleContainerRegistry({});
const amazonECRData: CreationOfAmazonECR = createAmzonECR({});
const dockerHubData: CreationOfDockerHub = createDockerHub({});
const githubContainerRegistryData: CreationOfGithubContainerRegistry = createGithubContainerRegistry({});
const argoCDData: CreationOfArgoCD = createArgoCD({});
const jenkinsData: CreationOfJenkins = createJenkins({});
const circleCIData: CreationOfCircleCI = createCircleCI({});
const grafanaData: CreationOfGrafana = createGrafana({});
const lokiData: CreationOfLoki = createLoki({});
const mimirData: CreationOfMimir = createMimir({});
const tempoData: CreationOfTempo = createTempo({});

// Navigate and validate the Integrations module for Cloud Providers, Version Control, and Container Registry sub-modules
test.describe('Navigate and validate the Integrations module for Cloud Providers, Version Control, and Container Registry sub-modules', async () => {

  test('Navigate and validate the Integrations module for Cloud Providers, Version Control, and Container Registry sub-modules', async ({ page }) => {

    // Navigate to the given applicaton Url
    await NavigateURL(page);

    // Validate Login credentials with valid email and password.
    await loginDashboard(page);

    // Click on slidebar
    await sidebar(page);

    // Click on Integratios button and Validate the Cloud Providers page fields
    await clickOnIntegrationAndCloudProvidersBtn(page);

    // Validate the Version Control page fields 
    await clickOnVersionControlBtn(page);

    // Validate the Container Registry page fields 
    await clickOnContainerRegistryBtn(page);

    // Validate the CI/CD page fields 
    await clickOnCIAndCDBtn(page);

    // Validate the Observability page fields
    await clickOnObservabilityBtn(page);

  })

});

/**
 * Function is used to Navigate to the given application URL
 * @param page Interface page
 */
async function NavigateURL(page: Page) {
  // Navigate to the application URL
  await page.goto(testConfig.url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(awsData.title);
  // const titletext = await page.title();
  // if (titletext == 'DevOps_GPT') {
  //   console.log("Page Title : " + titletext);
  // } else {
  //   console.error();
  // }

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

  // Enter Email field
  await page.locator("input[id='input_field_p_email_email']").fill(testConfig.email);
  await page.screenshot({ path: screenshotpath, fullPage: true });
  await page.waitForTimeout(2000);

  // click on continue button
  await page.screenshot({ path: screenshotpath, fullPage: true });
  await page.click("button:has(span:text('Continue'))");
  await page.waitForTimeout(2000);

  await page.locator("input[id='input_field_p_password_password']").fill(testConfig.password);
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

  await page.locator("button[class='text-gray-400 hover:text-white'] svg[class='lucide lucide-panel-right-close absolute left-[3.2rem]']").click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: screenshotpath, fullPage: true });

}

/**
 * Function is used to Validate the Cloud Providers fields with valid credentials
 * @param page Interface page
 */
async function clickOnIntegrationAndCloudProvidersBtn(page: Page) {
  await page.locator("a:has(span:text('Integration'))").click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: screenshotpath, fullPage: true });

  await clickOnAWSButton(page);

  await clickOnGCPButton(page);

  await clickOnAzureButton(page);
  await page.waitForTimeout(3000);

  await clickOnDeleteButton(page);
  await page.waitForTimeout(2000);
}

/**
 * Function is used to click and Validate the AWS Integration with valid credentials
 * @param page Interface page
 */
async function clickOnAWSButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: awsData.aws }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill(awsData.awssecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='accessKeyId']").fill(awsData.awsaccesskeyId);
  await page.waitForTimeout(1000);
  await page.locator("input[id='secretAccessKey']").fill(awsData.awssecretaccessKey);
  await page.waitForTimeout(1000);
  await page.locator("input[id='region']").fill(awsData.awsregion);
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
  await page.getByRole('option', { name: gcpData.gcp }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill(gcpData.gcpsecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='projectId']").fill(gcpData.gcpprojectId);
  await page.waitForTimeout(1000);
  await page.locator("input[id='serviceAccountKey']").fill(gcpData.gcpserviceaccountKey);
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
  await page.getByRole('option', { name: azureData.azure }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill(azureData.azuresecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='TenantId']").fill(azureData.azuretenantId);
  await page.waitForTimeout(1000);
  await page.locator("input[id='clientID']").fill(azureData.azureclientId);
  await page.waitForTimeout(1000);
  await page.locator("input[id='clientSecret']").fill(azureData.azureclientSecret);
  await page.waitForTimeout(2000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(2000);
}

/**
 * Function is used to click on all delete buttons for each secret type.
 * @param page Interface page
 */
async function clickOnDeleteButton(page: Page) {
  // Keep deleting until no delete buttons are left
  while (true) {
    const delebtn = page.locator('div[class="flex gap-1"] button:nth-child(2)');
    const delelength = await delebtn.count();
    console.log("Current delete button count: " + delelength);

    // Break the loop if no delete buttons are found
    if (delelength === 0) {
      console.log("No more delete buttons remaining.");
      break;
    }

    // Click on the first available delete button
    try {
      const button = delebtn.first();

      // Ensure the button is visible and enabled before clicking
      if (await button.isVisible() && await button.isEnabled()) {
        console.log("Clicking delete button...");
        await button.click();

        // Wait for the button to be removed from the DOM
        await page.waitForTimeout(1000);
      } else {
        console.log("Button is not clickable, exiting loop.");
        break;
      }
    } catch (error) {
      console.error("Error clicking delete button:", error);
      break;
    }

    // Short pause to allow the DOM to update
    await page.waitForTimeout(500);
  }

  console.log("All delete buttons have been processed.");
}

/**
 * Function is used to Validate the version control fields with valid credentials
 * @param page Interface page
 */
async function clickOnVersionControlBtn(page: Page) {
  await page.click("button:text('Version Control')");
  await page.screenshot({ path: screenshotpath, fullPage: true });
  await page.waitForTimeout(2000);

  await clickOnGitHubButton(page);
  await clickOnGitLabButton(page);
  await clickOnBitbucketButton(page);
  await page.waitForTimeout(3000);

  await clickOnDeleteButton(page);
  await page.waitForTimeout(2000);


}

/**
 * Function is used to click and Validate the GitHub Integration with valid credentials
 * @param page Interface page
 */
async function clickOnGitHubButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(2000);
  await page.getByRole('option', { name: githubData.github }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill(githubData.githubsecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='userName']").fill(githubData.githubusername);
  await page.waitForTimeout(1000);
  await page.locator("input[id='accessToken']").fill(githubData.githubaccessToken);
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
  await page.getByRole('option', { name: gitlabData.gitlab }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill(gitlabData.gitlabsecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='userName']").fill(gitlabData.gitlabusername);
  await page.waitForTimeout(1000);
  await page.locator("input[id='accessToken']").fill(gitlabData.gitlabaccessToken);
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
  await page.getByRole('option', { name: bitbucketbData.bitbucket }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill(bitbucketbData.bbsecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='userName']").fill(bitbucketbData.bbusername);
  await page.waitForTimeout(1000);
  await page.locator("input[id='accessToken']").fill(bitbucketbData.bbaccessToken);
  await page.waitForTimeout(1000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(2000);

}

/**
 * Function is used to Validate the Container Registry fields with valid credentials
 * @param page Interface page
 */
async function clickOnContainerRegistryBtn(page: Page) {
  await page.click('button:text("Container Registry")');
  await page.waitForTimeout(2000);

  //await clickOnGoogleContainerRegistryButton(page);
  await clickOnAmazonECRButton(page);
  await clickOnDockerHubButton(page);
  await clickOnGithubContainerRegistryButton(page);
  await page.waitForTimeout(3000);

  await clickOnDeleteButton(page);
  await page.waitForTimeout(2000);

}

/**
 * Function is used to click and Validate the Google Container Registry Integration with valid credentials
 * @param page Interface page
 */
async function clickOnGoogleContainerRegistryButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: googlecontainerRegistryData.googlecontainerregistry }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill(googlecontainerRegistryData.gcrsecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='serviceAccountKey']").fill(googlecontainerRegistryData.gcrserviceaccountkey);
  await page.waitForTimeout(1000);
  await page.locator("input[id='url']").fill(googlecontainerRegistryData.gcrurl);
  await page.waitForTimeout(1000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(2000);
}

/**
 * Function is used to click and Validate the Amazon ECR Integration with valid credentials
 * @param page Interface page
 */
async function clickOnAmazonECRButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: amazonECRData.amazonecr }).click();
  await page.waitForTimeout(3000);
  await page.locator("input[id='secretName']").fill(amazonECRData.amazonecrsecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='registryId']").fill(amazonECRData.amazonecrregistryId);
  await page.waitForTimeout(1000);
  await page.locator("input[id='accessKeyId']").fill(amazonECRData.amazonecraccesskeyId);
  await page.waitForTimeout(1000);
  await page.locator("input[id='secretAccessKey']").fill(amazonECRData.amazonecrsecretaccesskey);
  await page.waitForTimeout(1000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(2000);
}

/**
 * Function is used to click and Validate the Docker Hub Integration with valid credentials
 * @param page Interface page
 */
async function clickOnDockerHubButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: dockerHubData.dockerhub }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill(dockerHubData.dockerhubsecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='url']").fill(dockerHubData.dockerhuburl);
  await page.waitForTimeout(1000);
  await page.locator("input[id='userName']").fill(dockerHubData.dockerhubusername);
  await page.waitForTimeout(1000);
  await page.locator("input[id='password']").fill(dockerHubData.dockerhubpassword);
  await page.waitForTimeout(1000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(2000);
}

/**
 * Function is used to click and Validate the GitHub container registry Integration with valid credentials
 * @param page Interface page
 */
async function clickOnGithubContainerRegistryButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: githubContainerRegistryData.ghcr }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill(githubContainerRegistryData.ghcrsecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='registry_url']").fill(githubContainerRegistryData.ghcrregistryurl);
  await page.waitForTimeout(1000);
  await page.locator("input[id='username']").fill(githubContainerRegistryData.ghcrusername);
  await page.waitForTimeout(1000);
  await page.locator("input[id='password']").fill(githubContainerRegistryData.ghcrpassword);
  await page.waitForTimeout(1000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(2000);
}

/**
 * Function is used to Validate the CI/CD fields with valid credentials
 * @param page Interface page
 */
async function clickOnCIAndCDBtn(page: Page) {
  await page.click("button:text('CI/CD')");
  await page.screenshot({ path: screenshotpath, fullPage: true });
  await page.waitForTimeout(2000);

  await clickOnArgoCDButton(page);
  await clickOnJenkinsButton(page);
  await clickOnCircleCIButton(page);
  await page.waitForTimeout(3000);

  await clickOnDeleteButton(page);
  await page.waitForTimeout(2000);

}

/**
 * Function is used to click and Validate the ArgoCD Integration with valid credentials
 * @param page Interface page
 */
async function clickOnArgoCDButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: argoCDData.argocd }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill(argoCDData.acdsecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='endpointURL']").fill(argoCDData.acdendpointurl);
  await page.waitForTimeout(1000);
  await page.locator("input[id='userName']").fill(argoCDData.acdusername);
  await page.waitForTimeout(1000);
  await page.locator("input[id='password']").fill(argoCDData.acdpassword);
  await page.waitForTimeout(1000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(2000);
}

/**
 * Function is used to click and Validate the Jenkins Integration with valid credentials
 * @param page Interface page
 */
async function clickOnJenkinsButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: jenkinsData.jenkins }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill(jenkinsData.jsecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='endpointURL']").fill(jenkinsData.jendpointurl);
  await page.waitForTimeout(1000);
  await page.locator("input[id='userName']").fill(jenkinsData.jusername);
  await page.waitForTimeout(1000);
  await page.locator("input[id='password']").fill(jenkinsData.jpassword);
  await page.waitForTimeout(1000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(2000);
}

/**
 * Function is used to click and Validate the CircleCI Integration with valid credentials
 * @param page Interface page
 */
async function clickOnCircleCIButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: circleCIData.circleci }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill(circleCIData.ccisecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='endpointURL']").fill(circleCIData.cciendpointurl);
  await page.waitForTimeout(1000);
  await page.locator("input[id='userName']").fill(circleCIData.cciusername);
  await page.waitForTimeout(1000);
  await page.locator("input[id='password']").fill(circleCIData.ccipassword);
  await page.waitForTimeout(1000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(2000);
}

/**
 * Function is used to Validate the Observability fields with valid credentials
 * @param page Interface page
 */
async function clickOnObservabilityBtn(page: Page) {
  await page.click("button:text('Observability')");
  await page.screenshot({ path: screenshotpath, fullPage: true });
  await page.waitForTimeout(2000);

  await clickOnGrafanaButton(page);
  await clickOnLokiButton(page);
  await clickOnMimirButton(page);
  await clickOnTempoButton(page);
  await page.waitForTimeout(3000);

  await clickOnDeleteButton(page);
  await page.waitForTimeout(2000);

}

/**
 * Function is used to click and Validate the Grafana Integration with valid credentials
 * @param page Interface page
 */
async function clickOnGrafanaButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: grafanaData.grafana }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill(grafanaData.gsecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='endpointURL']").fill(grafanaData.gendpointurl);
  await page.waitForTimeout(1000);
  await page.locator("input[id='userName']").fill(grafanaData.gusername);
  await page.waitForTimeout(1000);
  await page.locator("input[id='password']").fill(grafanaData.gpassword);
  await page.waitForTimeout(1000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(2000);
}

/**
 * Function is used to click and Validate the Loki Integration with valid credentials
 * @param page Interface page
 */
async function clickOnLokiButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: lokiData.loki }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill(lokiData.lsecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='endpointURL']").fill(lokiData.lendpointurl);
  await page.waitForTimeout(1000);
  await page.locator("input[id='userName']").fill(lokiData.lusername);
  await page.waitForTimeout(1000);
  await page.locator("input[id='password']").fill(lokiData.lpassword);
  await page.waitForTimeout(1000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(2000);
}

/**
 * Function is used to click and Validate the Mimir Integration with valid credentials
 * @param page Interface page
 */
async function clickOnMimirButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: mimirData.mimir }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill(mimirData.msecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='endpointURL']").fill(mimirData.mendpointurl);
  await page.waitForTimeout(1000);
  await page.locator("input[id='userName']").fill(mimirData.musername);
  await page.waitForTimeout(1000);
  await page.locator("input[id='password']").fill(mimirData.mpassword);
  await page.waitForTimeout(1000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(2000);
}

/**
 * Function is used to click and Validate the Tempo Integration with valid credentials
 * @param page Interface page
 */
async function clickOnTempoButton(page: Page) {
  await page.click("button:has(span:text('Select secret type'))");
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: tempoData.tempo }).click();
  await page.waitForTimeout(2000);
  await page.locator("input[id='secretName']").fill(tempoData.tsecretname);
  await page.waitForTimeout(1000);
  await page.locator("input[id='endpointURL']").fill(tempoData.tendpointurl);
  await page.waitForTimeout(1000);
  await page.locator("input[id='userName']").fill(tempoData.tusername);
  await page.waitForTimeout(1000);
  await page.locator("input[id='password']").fill(tempoData.tpassword);
  await page.waitForTimeout(1000);
  await page.click("button:text('Add Secret')");
  await page.waitForTimeout(2000);
}
