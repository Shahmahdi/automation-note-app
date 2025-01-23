describe('Todo list with item', () => {
  it('Create Todo list and add item into it', async () => {

    await $('//*[@name="Create list"]').click();
    await $('//*[@value="List Name"]').addValue("Things to do");
    await $('~Create').click();
    await expect(await $('~Things to do')).toBeExisting();

    await $('~Things to do').click();

    await $('//*[@name="Create item"]').click();

    await $('//*[@value="Title"]').addValue("Buy groceries");
    await $('//*[@value="Due"]').click();
    const tomorrowDate = new Date().getDate() + 1;
    await $(`//XCUIElementTypeStaticText[@name="${tomorrowDate}"]`).click();
    await $('~Create').click();

    await $('~Add').click();

    await $('//*[@value="Title"]').addValue("Buy cloth");
    await $('//*[@value="Due"]').click();
    const futureDate = new Date().getDate() + 5;
    await $(`//XCUIElementTypeStaticText[@name="${futureDate}"]`).click();
    await $('~Create').click();

    await expect(await $('~Buy groceries')).toBeExisting();
    const tomorrowText = '**/XCUIElementTypeStaticText[`name CONTAINS "Tomorrow"`]';
    await expect(await $(`-ios class chain:${tomorrowText}`).getText()).toContain("Tomorrow");

    await expect(await $('~Buy cloth')).toBeExisting();
    const futureText = '**/XCUIElementTypeStaticText[`name CONTAINS "28"`]';
    await expect(await $(`-ios class chain:${futureText}`).getText()).toContain(`${futureDate}`);

    await driver.pause(2000);
  });
});