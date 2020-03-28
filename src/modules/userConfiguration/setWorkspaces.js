/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { getUserConfiguration } = require('./getUserConfiguration');


const userConfiguration = getUserConfiguration();


const updateWorkspace = (workspace) => {
  inquirer
    .prompt(
      {
        type: 'input',
        name: 'workspace',
        message: `Enter the Path to your ${workspace} Workspace (/home/username/code):`,
      },
    )
    .then((selection) => {
      console.log(`Path to ${workspace} Workspace, updated to: ${selection.workspace}`);
      // update config
      userConfiguration.workspaces[workspace] = selection.workspace;

      const data = JSON.stringify(userConfiguration);

      fs.writeFileSync(path.resolve('./src/modules/userConfiguration/configurationData/userConfig.json'), data);

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
      // Update selected workspace
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
