/* eslint-disable no-console */ // Enable console for logging

const { startWebDriver } = require(`nightwatch-api`);

startWebDriver({ env: `CHROME_ENV` }).catch((error) => {
  console.log(error);
});
