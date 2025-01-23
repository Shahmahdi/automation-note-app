import TodoListScreen from "../../screenObjects/ios/todoListScreen";

describe("Todo list", () => {
  it("Create a todo list", async () => {
    await TodoListScreen.createListBtn.click();
    await TodoListScreen.listNameInput.addValue("Things to do today");
    await TodoListScreen.createBtn.click();
    await expect(
      await TodoListScreen.listNameField("Things to do today")
    ).toBeExisting();
  });
});
