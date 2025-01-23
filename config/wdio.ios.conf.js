const { config } = require("./wdio.shared.conf");
const path = require("path");

config.port = 4723;

config.specs = ["../test/specs/ios/ios-todo-item.spec.js"];

config.capabilities = [
  {
    "appium:platformName": "ios",
    "appium:deviceName": "iPhone 15 Pro Max",
    "appium:platformVersion": "17.0",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "app/ios/MVCTodo.app"),
  },
];

exports.config = config;
