import { Locator, Page, Expect, test, TestInfo, expect } from '@playwright/test';

export class WebActions {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    public static current(page: Page) {
        return new WebActions(page);
    }

    /**
    * (soft expect) dropdown/combobox option list, locator identified by getByRole 'option'
    * @param dropdownOptionName name: property value to be selected from Option
    * @param log option name or report description to be added as playwright test step
    */
    async optionToBeVisible(dropdownOptionName: string, log: string) {
        try {
            await expect.soft(this.page.getByRole('option', { name: dropdownOptionName })).toBeVisible();
            await test.step("Displayed - dropdown/combobox option list" + log, async () => { });
        }
        catch (error) {
            await test.step("unable to validate visiblity of the dropdown/combobox option list" + log + " because " + error, async () => { });
        }
    }

    /**
    * To fill Placeholder textbox, locator identified by getByPlaceholder 
    * @param textboxName name: property value
    * @param value Value to be send into the text box
    */
    async fillPlaceholderTextBox(textboxName: string, value: string) {
        try {
            await this.page.getByPlaceholder(textboxName).click();
            await this.page.getByPlaceholder(textboxName).fill(value);
            await test.step("sending value " + value + " into " + textboxName, async () => { })
        }
        catch (error) {
            await test.step("unable to sending value " + value + " into " + textboxName, async () => { })
        }
    }

    /** fill field, locator identified by getByLabel
    * @param labelName label value
    * @param value field value
    * @param log label name or report description to be added as playwright test step
    */
    async fillLabelField(labelName: string, value: string, log: string) {
        try {
            await this.page.getByLabel(labelName).fill(value);
            await test.step("sending value " + value + " into " + log, async () => { })
        }
        catch (error) {
            await test.step("unable to sending value " + value + " into " + log, async () => { })
        }
    }

    /**
    * To click on tab, locator identified by getByRole 'tab'
    * @param tabName name: property value to be selected from tab
    * @param log option name or report description to be added as playwright test step
    */
    async clickTab(tabName: string, log: string) {
        try {
            await this.page.getByRole('tab', { name: tabName }).click();
            await test.step("click on tab" + log, async () => { });
        }
        catch (error) {
            await test.step("unable to click on the tab" + log + " because " + error, async () => { });
        }
    }

    /**
    * To type on dropdown/combobox, locator identified by getByRole 'combobox'
    * @param dropdownName name: property value
    * @param value Value to be enter in dropdown box
    * @param log combobox name or report description to be added as playwright test step
    */
    async sendKeysDropDown(dropdownName: string, value: string, log: string) {
        try {
            await this.page.getByRole('combobox', { name: dropdownName }).fill(value);
            await test.step("search for " + value + " on dropdown/combobox " + log, async () => { });
        }
        catch (error) {
            await test.step("unable to click/type on the dropdown/combobox " + log + " because " + error, async () => { });
        }
    }
    /**
   * To select option on dropdown/combobox, locator identified by getByRole 'option'
   * @param dropdownName option name: property value
   * @param log combobox name or report description to be added as playwright test step
   */
    async selectDropDownOption(dropdownName: string, log: string) {
        try {
            await this.page.getByRole('option', { name: dropdownName }).click();
            await test.step("Option " + dropdownName + " found in dropdown/combobox " + log, async () => { });
        }
        catch (error) {
            await test.step("Option " + dropdownName + " NOT found in dropdown/combobox " + log + " because " + error, async () => { });
        }
    }
    /**
    * To click on button, locator identified by getByRole 'button'
    * @param dropDownName name: property value
    * @param log button name or report description to be added as playwright test step
    */
    async clickSelectDropDown(dropDownName: string, log: string) {
        try {
            await this.page.getByRole('button', { name: dropDownName }).getByText('Select').click();
            await test.step("click on the dropdown " + log, async () => { });
        }
        catch (error) {
            await test.step("unable to click on the dropdown " + log + " because " + error, async () => { });
        }
    }

    /**
    * To click on button, locator identified by getByRole 'button'
    * @param buttonName name: property value
    * @param log button name or report description to be added as playwright test step
    */
    async clickButton(buttonName: string, log: string) {
        try {
            await this.page.getByRole('button', { name: buttonName }).click();
            await test.step("click on the button " + log, async () => { });
        }
        catch (error) {
            await test.step("unable to click on the button " + log + " because " + error, async () => { });
        }
    }

    /**
    * To click on dropdown/combobox, locator identified by getByRole 'combobox'
    * @param dropdownName name: property value
    * @param log combobox name or report description to be added as playwright test step
    */
    async clickDropDown(dropdownName: string, log: string) {
        try {
            await this.page.getByRole('combobox', { name: dropdownName }).click({ force: true });
            await test.step("click on dropdown/combobox " + log, async () => { });

        }
        catch (error) {
            await test.step("unable to click on the dropdown/combobox " + log + " because " + error, async () => { });
        }
    }

    /**
    * (soft expect) Text to displayed, locator identified by getByText
    * @param textVal Text value
    * @param log Text value or report description to be added as playwright test step
    */
    async textToBeVisible(textVal: string, log: string) {
        try {
            // await expect.soft(this.page.getByText(textVal)).toBeVisible();
            await expect.soft(this.page.getByText(textVal).first()).toBeVisible();
            await test.step("Text Displayed " + log, async () => { });
        }
        catch (error) {
            await test.step("Text may NOT displayed " + log + " because " + error, async () => { });
        }
    }

    /**
    * (soft expect) heading to displayed, locator identified by getByRole 'heading'
    * @param headingName name: property value
    * @param log heading name or report description to be added as playwright test step
    */
    async headingToBeVisible(headingName: string, log: string) {
        try {
            // await expect.soft(this.page.getByRole('heading', { name: headingName ,exact:true })).toBeVisible();
            await expect.soft(this.page.getByRole('heading', { name: headingName }).nth(0)).toBeVisible();
            await test.step("Heading Displayed " + log, async () => { });
        }
        catch (error) {
            await test.step("Heading may NOT displayed " + log + " because " + error, async () => { });
        }
    }

    /**
    * (soft expect) Value in Table to be displayed, locator identified by getByRole 'rowheader'
    * @param rowheaderName name: property value
    * @param log rowheader name or report description to be added as playwright test step
    */
    async rowheaderToBeVisible(rowheaderName: string, log: string) {
        try {
            await expect.soft(this.page.getByRole('rowheader', { name: rowheaderName })).toBeVisible();
            await test.step("Value Displayed -" + log, async () => { });
        }
        catch (error) {
            await test.step("Value may NOT displayed -" + log + " because " + error, async () => { });
        }
    }

    /**
    * Wait for heading to be visible, locator identified by getByRole 'heading'
    * @param headingName name: property value
    * @param log heading name or report description to be added as playwright test step
    */
    async waitForHeading(headingName: string, log: string) {
        try {
            await this.page.getByRole('heading', { name: headingName, exact: true }).waitFor({ state: "visible" });
            await test.step("Heading Visible " + log, async () => { });
        }
        catch (error) {
            await test.step("Heading may NOT be Visible " + log + " because " + error, async () => { });
        }
    }

    /**
    * To click on dropdown/combobox option list, locator identified by getByRole 'option'
    * @param dropdownOptionName name: property value to be selected from Option
    * @param log option name or report description to be added as playwright test step
    */
    async clickOption(dropdownOptionName: string, log: string) {
        try {
            await this.page.getByRole('option', { name: dropdownOptionName }).click();
            await test.step("click on dropdown/combobox option list" + log, async () => { });
        }
        catch (error) {
            await test.step("unable to click on the dropdown/combobox option list" + log + " because " + error, async () => { });
        }
    }

    /**
    * To click on dropdown/combobox option list, locator identified by getByRole 'option'
    * @param dropdownOptionName name: property value to be selected from Option
    * @param log option name or report description to be added as playwright test step
    */
    async clickOption2(dropdownOptionName: string, log: string) {
        try {
            await this.page.getByRole('option', { name: dropdownOptionName }).nth(1).click();
            await test.step("click on dropdown/combobox option list" + log, async () => { });
        }
        catch (error) {
            await test.step("unable to click on the dropdown/combobox option list" + log + " because " + error, async () => { });
        }
    }

    /**
    * To click on menu item, locator identified by getByRole 'menuitem'
    * @param menuName name: property value
    * @param log menu item name or report description to be added as playwright test step
    */
    async clickMenu(menuName: string, log: string) {
        try {
            await this.page.getByRole('menuitem', { name: menuName }).first().click();
            await test.step("click on the menuitem " + log, async () => { });
        }
        catch (error) {
            await test.step("unable to click on the menuitem " + log + " because " + error, async () => { });
        }
    }

    async click(element: Locator, log: string) {
        try {
            await element.click();
            await test.step("click on the " + log, async () => {
            });
        }
        catch (error) {
            await test.step("unable to click on the " + log + " because " + error, async () => {
            });
        }
    }

    /**
    * To fill textbox, locator identified by page.locator
    * @param element name: property value
    * @param value Value to be enter in textbox box
    * @param log textbox name
    */
    async sendKeys(element: Locator, value: string, log: string) {
        try {
            await element.fill(value);
            await test.step("sending value " + value + " into " + log, async () => {
            });
        }
        catch (error) {
            await test.step("unable to send value " + value + " into " + log, async () => {
            });
        }
    }

    /**
    * (soft expect) link to displayed, locator identified by getByRole 'link'
    * @param linkName name: property value
    * @param log link name or report description to be added as playwright test step
    */
    async linkToBeVisible(linkName: string, log: string) {
        try {
            await expect.soft(this.page.getByRole('link', { name: linkName })).toBeVisible();
            await test.step("link Displayed " + log, async () => { });
        }
        catch (error) {
            await test.step("link may NOT displayed " + log + " because " + error, async () => { });
        }
    }

    /**
    * To click on menu item, locator identified by getByRole 'menuitem'
    * @param menuName name: property value
    * @param log menu item name or report description to be added as playwright test step
    */
    async clickMenuItem(menuName: string, log: string) {
        try {
            await this.page.getByRole('menuitem', { name: menuName }).first().click();
            await test.step("click on the menuitem " + log, async () => { });
        }
        catch (error) {
            await test.step("unable to click on the menuitem " + log + " because " + error, async () => { });
        }
    }

    /**
    * (soft expect) button to displayed, locator identified by getByRole 'button'
    * @param buttonName name: property value
    * @param log button name or report description to be added as playwright test step
    */
    async buttonToBeVisible(buttonName: string, log: string) {
        try {
            await expect.soft(this.page.getByRole('button', { name: buttonName })).toBeVisible();
            await test.step("Button Displayed " + log, async () => { });
        }
        catch (error) {
            await test.step("Button may NOT displayed " + log + " because " + error, async () => { });
        }
    }

    /**
    * To upload a document 
    * @param element name: property value
    * @param uploadDocPath document upload path set in
    */
    async uploadDocument(element: Locator, uploadDocPath: string[]) {
        try {
            // await element.isVisible()

            await element.setInputFiles(uploadDocPath);
            await test.step("Set path - " + uploadDocPath, async () => { });
        }
        catch (error) {
            await test.step("Unable to set path " + uploadDocPath, async () => { });
        }
    }

    async isDisplayed(element: Locator, log: string) {
        try {
            await expect.soft(element).toBeVisible();
            await test.step("Verify " + log + " element is visible ", async () => {
                return true;
            });
        }
        catch (error) {
            await test.step(log + " element is visible", async () => {
                return false;
            });
        }
    }

    /**
  * To click on link, locator identified by getByRole 'link'
  * @param linkName name: property value
  * @param log link name or report description to be added as playwright test step
  */
    async clickLink(linkName: string, log: string) {
        try {
            await this.page.getByRole('link', { name: linkName }).click();
            await test.step("click on the link " + log, async () => { });
        }
        catch (error) {
            await test.step("unable to click on the link " + log + " because " + error, async () => { });
        }
    }

    /**
    * Get Locator identified using getByRole by menuitem
    * @param menuitemName 
    * @returns Locator
    */
    async menuItem(menuitemName: string): Promise<Locator> {
        return this.page.getByRole('menuitem', { name: menuitemName });
    };


    /* Click Text, locator identified by getByText
    * @param textVal Text value
    * @param log Text Val name or report description to be added as playwright test step
    */
    async clickText(textVal: string, log: string) {

        try {
            await this.page.getByText(textVal).click()
            await test.step("click on the text " + log, async () => { });
        }
        catch (error) {
            await test.step("unable to click on the text " + log + " because " + error, async () => { });
        }
    }

    async fillTextbox(textboxName: string, value: string, log: string) {
        try {
            await this.page.getByRole('textbox', { name: textboxName }).click()
            await this.page.getByRole('textbox', { name: textboxName }).fill(value)
            await test.step("sending value " + value + " into " + log, async () => { })
        }
        catch (error) {
            await test.step("unable to sending value " + value + " into " + log, async () => { })
        }
    }
    /**
    * (soft expect) menuitem to displayed, locator identified by getByRole 'menuitem'
    * @param menuitemName name: property value
    * @param log menuitem name or report description to be added as playwright test step
    */
    async menuItemToBeVisible(menuitemName: string, log: string) {
        try {
            await expect.soft(this.page.getByRole('menuitem', { name: menuitemName })).toBeVisible();
            await test.step("Menuitem Displayed " + log, async () => { });
        }
        catch (error) {
            await test.step("Menuitem may NOT displayed " + log + " because " + error, async () => { });
        }
    }


    async selectCheckBox(CheckBoxName: string, log: string) {
        try {
            await this.page.getByRole('checkbox', { name: CheckBoxName }).first().click();
            await test.step("Click on the checkBox " + log, async () => { });
        }
        catch (error) {
            await test.step(" Unable to click on the checkbox " + log + "because " + error, async () => { });
        }
    }

    /**
    * (soft expect) Value in Table to be displayed, locator identified by getByRole 'columnheader'
    * @param columnheaderName name: property value
    * @param log columnheader name or report description to be added as playwright test step
    */
    async columnHeaderToBeVisible(columnheaderName: string, log: string) {
        try {
            await expect.soft(this.page.getByRole('columnheader', { name: columnheaderName })).toBeVisible();
            await test.step("Value Displayed -" + log, async () => { });
        }
        catch (error) {
            await test.step("Value may NOT displayed -" + log + " because " + error, async () => { });
        }
    }

    /**
     * Function to see if the option is not clickable
     * @param optionName 
     * @param log 
     */

    async optionNotToBeVisible(optionName, log: string) {
        try {
            await expect.soft(this.page.getByText(optionName)).not.toBeVisible();
            await test.step("Option is not Clickable" + log, async () => { });
        }
        catch (error) {
            await test.step("Option is Clickable" + log + " because " + error, async () => { });
        }

    }

    /**
    * To fill Placeholder textbox, locator identified by getByPlaceholder 
    * @param textboxName name: property value
    * @param value Value to be send into the text box
    */
    async placeholderTextBoxNotToBeVisible(textboxName: string, value: string) {
        try {
            await this.page.getByPlaceholder(textboxName).isDisabled();
            await test.step("TextBox is Disabled " + value + " Can't be Entered into " + textboxName, async () => { })
        }
        catch (error) {
            await test.step("unable to sending value " + value + " into " + textboxName, async () => { })
        }
    }


    /**
     * 
     * @param labelName 
     * @param option 
     */
    async labelNotToBeVisible(labelName: string, option: string) {
        try {
            await expect.soft(this.page.getByLabel(labelName).isDisabled());
            await test.step("Label Name is not visible" + option + "Can;t be selected" + labelName, async () => { })
        }
        catch (error) {
            await test.step("Option can be selected " + option + " selected" + " option ", async () => { })
        }

    }
    
    /**
     * 
     * @param labelName 
     * @param log 
     */
    async clickLabel(labelName: string, log: string) {
        try {
            await this.page.getByLabel(labelName).click();
            await test.step("click on the Label " + log, async () => { });
        }
        catch (error) {
            await test.step("unable to click on the label " + log + " because " + error, async () => { });
        }
    }

}


