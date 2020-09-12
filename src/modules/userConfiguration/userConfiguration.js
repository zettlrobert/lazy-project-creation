/* eslint-disable no-console */
const inquirer = require('inquirer');
const { setWorkspaces } = require('./setWorkspaces');
const { viewWorkspaces } = require('./viewWorkspaces');
const { configureGithub } = require('../git/github/configureGithub');


const userConfiguration = () => {
  const userConfigurations = [
    'Update your Workspaces',
    'View your Configuration',
    'Configure Github',
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
      // process.stdout.write(selection.userConfiguration);

      switch (selection.userConfiguration !== null) {
        case selection.userConfiguration === userConfigurations[0]:
          process.stdout.write('Updating Workspaces...');
          setWorkspaces();
          break;

        case selection.userConfiguration === userConfigurations[1]:
          process.stdout.write('Viewing Configuration...');
          viewWorkspaces();
          break;

        case selection.userConfiguration === userConfigurations[2]:
          process.stdout.write('Updating Github Configuration');
          configureGithub();
          break;

        default:
          process.stdout.write('DEFAULT');
          break;
      }
    });
};

module.exports = {
  userConfiguration,
};
