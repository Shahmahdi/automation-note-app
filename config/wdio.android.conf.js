const path = require("path");
const { config } = require("./wdio.shared.conf");

config.port = 4723;

config.specs = ["../test/specs/android/addNote.spec.js"];

config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    "appium:platformName": "Android",
    "appium:deviceName": "Pixel 7",
    "appium:platformVersion": "14.0",
    "appium:automationName": "UiAutomator2",
    "appium:app": path.join(process.cwd(), "app/android/ColorNote.apk"),
    "appium:autoGrantPermissions": true,
  },
];

exports.config = config;
