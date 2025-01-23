class TodoListScreen {
  get createListBtn() {
    return $('//*[@name="Create list"]');
  }

  get listNameInput() {
    return $('//*[@value="List Name"]');
  }

  get createBtn() {
    return $("~Create");
  }

  listNameField(name) {
    return $(`~${name}`);
  }
}

export default new TodoListScreen();
