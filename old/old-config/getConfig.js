const fs = require('fs');
const path = require('path');


// Path to configuration file
const pathToConfigFile = () => {
  const pathToFile = path.join(__dirname, '../../config.json');
  const configFile = pathToFile.toString();
  return configFile;
};

// Get lazy-project-creation configuration data
const getLpcConfig = () => {
  const configData = JSON.parse(fs.readFileSync(pathToConfigFile()));
  return configData;
};


module.exports = {
  getLpcConfig,
  pathToConfigFile,
};
