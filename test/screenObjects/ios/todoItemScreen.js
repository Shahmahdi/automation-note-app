class TodoItemScreen {
  get createItemBtn() {
    return $('//*[@name="Create item"]');
  }

  get itemTitleInput() {
    return $('//*[@value="Title"]');
  }

  get itemDateInput() {
    return $('//*[@value="Due"]');
  }

  datePickerTomorrowDateInput(dateNumber) {
    return $(`//XCUIElementTypeStaticText[@name="${dateNumber}"]`);
  }

  get addItemBtn() {
    return $("~Add");
  }

  getByAccessibilityId(name) {
    return $(`~${name}`);
  }

  getByClassChainsId(name) {
    return $(`-ios class chain:${name}`);
  }
}

export default new TodoItemScreen();
