/* eslint-disable no-console */
const inquirer = require('inquirer');
const { setWorkspaces } = require('./setWorkspaces');


const userConfiguration = () => {
  const userConfigurations = [
    'Set your Workspace locations',
    'Update your Workspaces',
    'View your Configuration',
  ];

  inquirer
    .prompt(
      {
        type: 'list',
        name: 'userConfiguration',
        message: 'Configure lazy-project-configuration and view your settings',
        choices: [...userConfigurations],
      },
    )
    .then((selection) => {
      switch (selection.userConfiguration !== null) {
        case selection.userConfiguration === 'Set your Workspace locations':
          console.log('Setting Workspace...');
          setWorkspaces();
          break;

        case selection.userConfiguration === 'Update your Workspaces':
          console.log('Updating Workspaces...');
          break;

        case selection.userConfiguration === 'View your Configuration':
          console.log('Viewing Configuration...');
          break;

        default:
          console.log('DEFAULT');
          break;
      }
    });
};

module.exports = {
  userConfiguration,
};
