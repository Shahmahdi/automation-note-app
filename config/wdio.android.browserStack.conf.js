require("dotenv").config();
const path = require("path");
const { config } = require("./wdio.shared.conf");

// BrowserStack credentials
config.user = process.env.BROWSERSTACK_NAME;
config.key = process.env.BROWSERSTACK_KEY;

config.specs = ["../test/specs/android/addNote.spec.js"];

config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    platformName: "android",
    "appium:deviceName": "Google Pixel 7 Pro",
    "appium:platformVersion": "13.0",
    "appium:automationName": "UiAutomator2",
    "appium:app": "bs://50cb5f502a0e06c32b0f86008c52276890038725",
    "appium:autoGrantPermissions": true,
  },
];

config.services = ["browserstack"];

exports.config = config;
