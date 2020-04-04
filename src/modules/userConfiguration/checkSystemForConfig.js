/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable no-console */
const os = require('os');
const fs = require('fs');


const checkSystemForConfig = () => {
  const defaultHomePath = `${os.homedir()}`;


  const configJSON = {
    "projectTypes": [
      "default",
      "web",
      "nodejs",
      "flutter",
      "go"
    ],
    "workspaces": {
      "default": `${defaultHomePath}`,
      "web": `${defaultHomePath}`,
      "nodejs": `${defaultHomePath}`,
      "flutter": `${defaultHomePath}`,
      "go": `${defaultHomePath}`
    },
    "gitConfig": {
      "gitHub": {
        "username": "",
        "usermail": "",
        "token": ""
      },
      "bitBucket": {
        "username": "",
        "usermail": "",
        "token": ""
      }
    }
  }

  const homeDir = os.homedir();

  const configPath = `${homeDir}/.config/lazy-project-creation`;

  const configExists = fs.existsSync(configPath);

  const configFile = `${configPath}/userConfig.json`;

  const configFileExists = fs.existsSync(configFile);


  if (!configExists) {
    fs.mkdirSync(configPath);

    console.log('\tlazy-project-creation configuration directory created: $HOME/.config/lazy-project-creation \n');
  }

  if (!configFileExists) {
    fs.writeFileSync(configFile, JSON.stringify(configJSON));
    console.log('\tlazy-project-creation configuration file created, please run again to configure and use the tool. Default Workspace is your: ~/ \n\n');
  }

  if (configFileExists) {
    console.log('Configuration file found, proceeding...');
  }
  return true;
};


module.exports = {
  checkSystemForConfig,
};
