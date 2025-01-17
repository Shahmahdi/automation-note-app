class AddNoteScreen {
  get skipBtn() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'
    );
  }

  get addNoteText() {
    return $('//*[@text="Add note"]');
  }

  get textOption() {
    return $('//*[@text="Text"]');
  }

  get editingText() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/datetime_relative"]'
    );
  }

  get addNoteFormTitle() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    );
  }

  get addNoteFormDescription() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    );
  }

  get editButton() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
    );
  }

  get listItemDescription() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'
    );
  }

  get listItemTitle() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    );
  }

  get moreButton() {
    return $('//*[@content-desc="More"]');
  }

  get deleteButton() {
    return $('//*[@text="Delete"]');
  }

  get deleteModalOkButton() {
    return $('//*[@resource-id="android:id/button1"]');
  }

  get navbarButton() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]'
    );
  }

  get trashCanOption() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Trash Can"]'
    );
  }

  async saveNote() {
    await driver.back();
    await driver.back();
  }

  async skipTutorial() {
    await this.skipBtn.click();
    await expect(this.addNoteText).toBeDisplayed();
  }
}

export default new AddNoteScreen();
