describe('IOS native features', () => {
  it('Working with modal box', async () => {
    $('~Alert Views').click();
    $('~Okay / Cancel').click();

    console.log(await driver.getAlertText());

    await driver.dismissAlert();

    await expect($('~OK')).not.toExist();
  });

  it('Working with scrollable element', async () => {
    // await driver.execute("mobile: scroll", { direction: "down" });
    // await driver.execute("mobile: scroll", { direction: "up" });

    await $('~Picker View').click();
    const redPicker = await $('~Red color component value');
    const bluePicker = await $('~Blue color component value');

    await driver.execute("mobile: scroll", { element: redPicker.elementId, direction: "down" });
    await driver.execute("mobile: scroll", { element: bluePicker.elementId, direction: "up" });
    
    await driver.pause(2000);
  });

  it.only('Working with picker view', async () => {

    await $('~Picker View').click();
    const redPicker = await $('~Red color component value');
    const greenPicker = await $('~Green color component value');
    const bluePicker = await $('~Blue color component value');

    // set purple color (125, 0, 125)
    await redPicker.addValue('125');
    await greenPicker.addValue('0');
    await bluePicker.addValue('125');
    
    await driver.pause(2000);
  });

});