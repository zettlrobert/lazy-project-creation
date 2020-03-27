const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');


const pathToUserConfig = path.resolve('./src/modules/userConfiguration/configurationData/userConfig.json');


const userConfiguration = JSON.parse(fs.readFileSync(pathToUserConfig));


const updateWorkspace = (workspace) => {
  inquirer
    .prompt(
      {
        type: 'input',
        name: 'workspacePath',
        message: `Enter the Path to your ${workspace} Workspace (/home/username/code):`,
      },
    )
    .then((selection) => {
      console.log(`Path to ${workspace} Workspace: ${selection.workspacePath}`);

      // update config
    });
};


const whichWorkspace = () => {
  inquirer
    .prompt(
      {
        type: 'list',
        name: 'selectedWorkspace',
        message: 'Which Workspace location do you want to update?',
        choices: [...userConfiguration.projectTypes],
      },
    )
    .then((selection) => {

      switch (selection != null) {
        // web
        case selection.selectedWorkspace === userConfiguration.projectTypes[0]:
          console.log(`Updating ${userConfiguration.projectTypes[0]} Workspace...`);
          // Update Logic
          updateWorkspace(userConfiguration.projectTypes[0]);
          break;

        // nodejs
        case selection.selectedWorkspace === userConfiguration.projectTypes[1]:
          console.log(`Updating ${userConfiguration.projectTypes[1]} Workspace...`);
          // Update Logic
          updateWorkspace(userConfiguration.projectTypes[1]);
          break;

        // flutter
        case selection.selectedWorkspace === userConfiguration.projectTypes[2]:
          console.log(`Updating ${userConfiguration.projectTypes[2]} Workspace...`);
          // Update Logic
          updateWorkspace(userConfiguration.projectTypes[2]);
          break;

        // go
        case selection.selectedWorkspace === userConfiguration.projectTypes[3]:
          console.log(`Updating ${userConfiguration.projectTypes[3]} Workspace...`);
          // Update Logic
          updateWorkspace(userConfiguration.projectTypes[3]);
          break;

        // do nothing and exit
        default:
          console.log('Workspaces not changing...');
          break;
      }
    });
};


// write configuration
const setWorkspaces = async () => {
  whichWorkspace();
};


module.exports = {
  setWorkspaces,
};
