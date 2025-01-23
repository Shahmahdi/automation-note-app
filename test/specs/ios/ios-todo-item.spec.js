import { $, $$, expect, driver } from "@wdio/globals";
import todoItemScreen from "../../screenObjects/ios/todoItemScreen";
import todoListScreen from "../../screenObjects/ios/todoListScreen";

describe("Todo list with item", () => {
  before(async () => {
    await todoListScreen.createListBtn.click();
    await todoListScreen.listNameInput.addValue("Things to do");
    await todoListScreen.createBtn.click();
    await expect(
      await todoListScreen.listNameField("Things to do")
    ).toBeExisting();

    await todoListScreen.listNameField("Things to do").click();
  });

  it("Create Todo list and add item into it", async () => {
    await todoItemScreen.createItemBtn.click();

    await todoItemScreen.itemTitleInput.addValue("Buy groceries");
    await todoItemScreen.itemDateInput.click();
    const tomorrowDate = new Date().getDate() + 1;
    await todoItemScreen.datePickerTomorrowDateInput(tomorrowDate).click();
    await todoListScreen.createBtn.click();

    await todoItemScreen.addItemBtn.click();

    await todoItemScreen.itemTitleInput.addValue("Buy cloth");
    await todoItemScreen.itemDateInput.click();
    const futureDate = new Date().getDate() + 5;
    await todoItemScreen.datePickerTomorrowDateInput(futureDate).click();
    await todoListScreen.createBtn.click();

    await expect(
      await todoItemScreen.getByAccessibilityId("Buy groceries")
    ).toBeExisting();
    const tomorrowText =
      '**/XCUIElementTypeStaticText[`name CONTAINS "Tomorrow"`]';
    await expect(
      await todoItemScreen.getByClassChainsId(tomorrowText).getText()
    ).toContain("Tomorrow");

    await expect(
      todoItemScreen.getByAccessibilityId("Buy cloth")
    ).toBeExisting();
    // const futureText = '**/XCUIElementTypeStaticText[`name CONTAINS "28"`]';
    // await expect(
    //   await todoItemScreen.getByClassChainsId(futureText).getText()
    // ).toContain(`${futureDate}`);

    await driver.pause(2000);
  });
});
