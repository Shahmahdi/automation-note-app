const textTitle = "Fav anime list";

describe("Add Notes", () => {
  it("skip tutorial", async () => {
    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'
    ).click();

    await expect($('//*[@text="Add note"]')).toBeDisplayed();
  });

  it("add a note, save changes and verify note", async () => {
    await $('//*[@text="Add note"]').click();
    await $('//*[@text="Text"]').click();
    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/datetime_relative"]'
      )
    ).toBeDisplayed();

    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    ).setValue(textTitle);
    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    ).setValue("Naruto\nOne Piece\nAOT");

    await driver.back();
    await driver.back();

    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
      )
    ).toBeDisplayed();
    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'
      )
    ).toHaveText("Naruto\nOne Piece\nAOT");
    await driver.back();
    await driver.pause(1000);
  });

  it("delete the note", async () => {
    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    ).click();
    await $('//*[@content-desc="More"]').click();
    await $('//*[@text="Delete"]').click();
    await $('//*[@resource-id="android:id/button1"]').click();
    await expect($('//*[@text="Add note"]')).toBeDisplayed();
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Trash Can"]').click();
    const noteTitle = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();
    await expect(noteTitle).toEqual(textTitle);
    await driver.pause(1000);
  });
});
