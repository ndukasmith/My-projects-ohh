const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const options = new chrome.Options();
options.addArguments('--headless'); // Run in headless mode

const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

module.exports = driver;
