import { $, $$, expect, driver } from "@wdio/globals";

describe('Ios Find elements', () => {
  it('Find element by accessibility id', async () => {
    await $('~Alert Views').click();
    await $('~Simple').click();
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });

  it('Find by tag name', async () => {
    // single element
    console.log("========================",await $('XCUIElementTypeStaticText').getText());

    // multiple elements
    const textElements = await $$('XCUIElementTypeStaticText');
    for (const element of textElements) {
      console.log(`-------`, await element.getText());
    }
  });

  it('Find element by xPath', async () => {
    await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
    await $('//XCUIElementTypeStaticText[@name="Simple"]').click();
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });

  it('Find element by class chain', async () => {
    // const alertText = '**/XCUIElementTypeStaticText[`name == "Alert Views"`]';
    const alertText = '**/XCUIElementTypeStaticText[`name CONTAINS "Alert"`]';
    await $(`-ios class chain:${alertText}`).click();
    await $('//XCUIElementTypeStaticText[@name="Simple"]').click();
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });

  it('Find element by predicate string', async () => {
    // const alertText = 'name == "Alert Views"';
    const alertText = 'value BEGINSWITH[c] "alert"';
    await $(`-ios predicate string:${alertText}`).click();
    await $('//XCUIElementTypeStaticText[@name="Simple"]').click();
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });

  it.only('Practice test: search bar text', async () => {
    // await $('~Search').click();
    // await $('~Default').click();
    // const textField = await $('XCUIElementTypeSearchField');
    // await textField.setValue("I love this course!");
    // await $('~Clear text').click();
    // const currentText = await textField.getText();
    // console.log(`============currentText: `, currentText);
    // await expect(currentText).toEqual(""); 

    // ----------------- Another approach ---------------------
    await $('~Search').click();
    await $('~Default').click();
    const textField = await $('XCUIElementTypeSearchField');
    await textField.setValue("I love this course!");
    await expect(textField).toHaveAttr("value");
    await $('~Clear text').click();
    await expect(textField).not.toHaveAttr("value");
  });

});