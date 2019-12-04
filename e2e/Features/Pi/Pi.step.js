
const { Given } = require(`cucumber`);
const { 
  iAmOn,
  iShouldSeeBlankInBlank,
  iWaitForBlankSeconds,
 } = require(`../../createWorld`);


async function checkScore(score) {
  await iShouldSeeBlankInBlank(score, `#score`);
}
exports.checkScore = checkScore;
Given(/^The score should be "([^"]*)"$/, checkScore);


async function scenarioDone() {
  await iWaitForBlankSeconds(3);
}
exports.scenarioDone = scenarioDone;
Given(/^this scenario is done$/, scenarioDone);

async function iAmOnTheTennisPage() {
  const url = `http://localhost:3000/tennis`;
  await iAmOn(url);
}
exports.iAmOnTheTennisPage = iAmOnTheTennisPage;
Given(/^I am on the tennis page$/, iAmOnTheTennisPage);
