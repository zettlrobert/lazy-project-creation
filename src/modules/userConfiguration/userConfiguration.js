/* eslint-disable no-console */
const inquirer = require('inquirer');
const { setWorkspaces } = require('./setWorkspaces');
const { viewWorkspaces } = require('./viewWorkspaces');


const userConfiguration = () => {
  const userConfigurations = [
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
      // access userConfiguration String
      // console.log(selection.userConfiguration);

      switch (selection.userConfiguration !== null) {
        case selection.userConfiguration === userConfigurations[0]:
          console.log('Updating Workspaces...');
          setWorkspaces();
          break;

        case selection.userConfiguration === userConfigurations[1]:
          console.log('Viewing Configuration...');
          viewWorkspaces();
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
