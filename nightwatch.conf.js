const chromedriver = require(`chromedriver`);

/** @type {NightwatchOptions} */
const options = {
  test_settings: {
    CHROME_ENV: {
      desiredCapabilities: {
        acceptSslCerts: true,
        browserName: `chrome`,
        chromeOptions: {
          args: [
            `disable-gpu`,
          ],
        },
        javascriptEnabled: true,
        webStorageEnabled: true,
      },
      webdriver: {
        cli_args: [`--port=4444`],
        server_path: chromedriver.path,
        start_process: true,
      },
    },
  },
};

module.exports = options;
