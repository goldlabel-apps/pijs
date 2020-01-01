const packageJSON = require("../package.json");

const pi = {
  url: `https://pijs.app`,
  repository: packageJSON.repository,
  server: {
    name: packageJSON.name,
    description: packageJSON.description,
    version: packageJSON.version,
    dependencies: packageJSON.dependencies
  }
};

exports = module.exports = pi;
