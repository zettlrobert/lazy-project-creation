const os = require('os');
const fs = require('fs');
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable no-console */

const checkSystemForConfig = () => {
  const defaultHomePath = `${os.homedir()}`;

  const configJSON = {
    "projectTypes": [
      "web",
      "nodejs",
      "flutter",
      "go"
    ],
    "workspaces": {
      "web": `${defaultHomePath}`,
      "nodejs": `${defaultHomePath}`,
      "flutter": `${defaultHomePath}`,
      "go": `${defaultHomePath}`
    },
    "gitconfig": {
      "username": null,
      "usermail": null
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
    return true;
  }
};


module.exports = {
  checkSystemForConfig,
};
