const { setDefaultTimeout, AfterAll, BeforeAll } = require(`cucumber`);
const { createSession, closeSession } = require(`nightwatch-api`);

setDefaultTimeout(60 * 1000);

BeforeAll(async () => {
  await createSession({ env: `CHROME_ENV` });
});

AfterAll(async () => {
  await closeSession();
});
