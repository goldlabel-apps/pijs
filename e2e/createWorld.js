/* eslint-disable no-use-before-define */ // Allow functions to be hoisted

const { Given, Then, When } = require(`cucumber`);
const { client } = require(`nightwatch-api`);

async function storageGet(key) {
  let actual = null;
  await client.execute(`return localStorage.getItem(arguments[0])`, [key], (result) => {
    actual = result.value;
  });
  return actual;
}
exports.storageGet = storageGet;

async function storageSet(key, value) {
  await client.execute(`localStorage.setItem(arguments[0], arguments[1])`, [key, value], () => {
    /* do nothing */
  });
}
exports.storageSet = storageSet;

async function iAmOn(url) {
  await client.url(url);
}
exports.iAmOn = iAmOn;
Given(/^I am on "([^"]*)"$/, iAmOn);


async function iWaitForBlankSeconds(seconds) {
  const milliseconds = 1000;
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, Number(seconds) * milliseconds);
  });
}
exports.iWaitForBlankSeconds = iWaitForBlankSeconds;
Given(/^I wait "([^"]*)" second(?:s)?$/, iWaitForBlankSeconds);

async function iClickBlank(selector) {
  await client.assert.elementPresent(selector);
  await client.element(`css selector`, selector).click(`css selector`, selector);
}
exports.iClickBlank = iClickBlank;
When(/^I click "([^"]*)"$/, iClickBlank);

async function iShouldSeeBlank(value) {
  const selector = `body`;
  await client.assert.elementPresent(selector);
  await client.expect.element(selector).text.contain(value);
}
exports.iShouldSeeBlank = iShouldSeeBlank;
Then(/^I should see "([^"]*)"$/, iShouldSeeBlank);

async function iShouldSeeBlankInBlank(value, selector) {
  await client.assert.elementPresent(selector);
  await client.expect.element(selector).text.contain(value);
}
exports.iShouldSeeBlankInBlank = iShouldSeeBlankInBlank;
Then(/^I should see "([^"]*)" in "([^"]*)"$/, iShouldSeeBlankInBlank);

async function iShouldNotSeeBlank(value) {
  const selector = `body`;
  await client.assert.elementPresent(selector);
  await client.expect.element(selector).text.not.contain(value);
}
exports.iShouldNotSeeBlank = iShouldNotSeeBlank;
Then(/^I should not see "([^"]*)"$/, iShouldNotSeeBlank);

async function iShouldNotSeeBlankInBlank(value, selector) {
  await client.assert.elementPresent(selector);
  await client.expect.element(selector).text.not.contain(value);
}
exports.iShouldNotSeeBlankInBlank = iShouldNotSeeBlankInBlank;
Then(/^I should not see "([^"]*)" in "([^"]*)"$/, iShouldNotSeeBlankInBlank);

async function theBlanksBlankPropertyIsBlank(selector, property, value) {
  await client.assert.cssProperty(selector, property, value);
}
exports.theBlanksBlankPropertyIsBlank = theBlanksBlankPropertyIsBlank;
Then(/^the "([^"]*)" "([^"]*)" property is "([^"]*)"$/, theBlanksBlankPropertyIsBlank);
Then(/^the "([^"]*)"s "([^"]*)" property is "([^"]*)"$/, theBlanksBlankPropertyIsBlank);

async function theBlanksBackgroundColourIsBlank(selector, value) {
  await theBlanksBlankPropertyIsBlank(selector, `background-color`, value);
}
exports.theBlanksBackgroundColourIsBlank = theBlanksBackgroundColourIsBlank;
Then(/^the "([^"]*)" background colour is "([^"]*)"$/, theBlanksBackgroundColourIsBlank);
Then(/^the "([^"]*)"s background colour is "([^"]*)"$/, theBlanksBackgroundColourIsBlank);

async function thePageTitleIsBlank(value) {
  await client.assert.title(value);
}
exports.thePageTitleIsBlank = thePageTitleIsBlank;
Then(/^the page title is "(.*?)"$/, thePageTitleIsBlank);

async function theUrlIsBlank(url) {
  let actual;
  await client.url((result) => {
    actual = result.value;
  });
  await client.assert.equal(actual, url);
}
exports.theUrlIsBlank = theUrlIsBlank;
Then(/^the url is "(.*?)"$/, theUrlIsBlank);
