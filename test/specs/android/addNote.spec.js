import { $, $$, expect, driver } from "@wdio/globals";
import AddNoteScreen from "../../screenObjects/android/addNoteScreen";

const textTitle = "Fav anime list";

describe("Add Notes", () => {
  it("skip tutorial", async () => {
    await AddNoteScreen.skipTutorial();
  });

  it("add a note, save changes and verify note", async () => {
    await AddNoteScreen.addNoteText.click();
    await AddNoteScreen.textOption.click();
    await expect(AddNoteScreen.editingText).toBeDisplayed();

    await AddNoteScreen.addNoteFormTitle.setValue(textTitle);
    await AddNoteScreen.addNoteFormDescription.setValue(
      "Naruto\nOne Piece\nAOT"
    );

    AddNoteScreen.saveNote();

    await expect(AddNoteScreen.editButton).toBeDisplayed();
    await expect(AddNoteScreen.listItemDescription).toHaveText(
      "Naruto\nOne Piece\nAOT"
    );
    await driver.back();
    await driver.pause(1000);
  });

  it("delete the note", async () => {
    await AddNoteScreen.listItemTitle.click();
    await AddNoteScreen.moreButton.click();
    await AddNoteScreen.deleteButton.click();
    await AddNoteScreen.deleteModalOkButton.click();
    await AddNoteScreen.navbarButton.click();
    await AddNoteScreen.trashCanOption.click();
    const noteTitle = await AddNoteScreen.listItemTitle.getText();
    await expect(noteTitle).toEqual(textTitle);
    await driver.pause(1000);
  });
});
