/* eslint-disable no-console */
const fs = require('fs');
const os = require('os');


const pathToUserConfig = `${os.homedir()}/.config/lazy-project-creation/userConfig.json`;


const getUserConfiguration = () => {
  const data = JSON.parse(fs.readFileSync(pathToUserConfig));
  return data;
};


module.exports = {
  getUserConfiguration,
};
