const path = require('path');
const fs = require('fs');


const pathToUserConfig = path.resolve('./src/modules/userConfiguration/configurationData/userConfig.json');


const getUserConfiguration = () => {

  const data = JSON.parse(fs.readFileSync(pathToUserConfig));

  console.log(data);
};


module.exports = {
  getUserConfiguration,
};
