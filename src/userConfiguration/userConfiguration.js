/* eslint-disable no-console */
const inquirer = require('inquirer');

const userConfiguration = () => {
  const userConfigurations = [
    'Configure your Workspaces',
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
        case selection.userConfiguration === 'Configure your Workspaces':
          console.log('Configuring Workspace...');
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
