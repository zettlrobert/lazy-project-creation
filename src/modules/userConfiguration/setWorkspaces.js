/* eslint-disable no-console */
const fs = require('fs');
const os = require('os');
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
      process.stdout.writ(`Path to ${workspace} Workspace, updated to: ${selection.workspace}`);
      // update config
      userConfiguration.workspaces[workspace] = selection.workspace;

      const data = JSON.stringify(userConfiguration);

      fs.writeFileSync(`${os.homedir()}/.config/lazy-project-creation/userConfig.json`, data);
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
          process.stdout.writ(`Updating ${userConfiguration.projectTypes[0]} Workspace...`);
          // Update Logic
          updateWorkspace(userConfiguration.projectTypes[0]);
          break;

        // nodejs
        case selection.selectedWorkspace === userConfiguration.projectTypes[1]:
          process.stdout.writ(`Updating ${userConfiguration.projectTypes[1]} Workspace...`);
          // Update Logic
          updateWorkspace(userConfiguration.projectTypes[1]);
          break;

        // flutter
        case selection.selectedWorkspace === userConfiguration.projectTypes[2]:
          process.stdout.writ(`Updating ${userConfiguration.projectTypes[2]} Workspace...`);
          // Update Logic
          updateWorkspace(userConfiguration.projectTypes[2]);
          break;

        // go
        case selection.selectedWorkspace === userConfiguration.projectTypes[3]:
          process.stdout.writ(`Updating ${userConfiguration.projectTypes[3]} Workspace...`);
          // Update Logic
          updateWorkspace(userConfiguration.projectTypes[3]);
          break;

        // do nothing and exit
        default:
          process.stdout.writ('Workspaces not changing...');
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
