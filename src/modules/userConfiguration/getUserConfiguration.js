/* eslint-disable no-console */
const path = require('path');
const fs = require('fs');


const pathToUserConfig = path.resolve('./src/modules/userConfiguration/configurationData/userConfig.json');


const getUserConfiguration = () => {
  const data = JSON.parse(fs.readFileSync(pathToUserConfig));
  return data;
};


module.exports = {
  getUserConfiguration,
};
