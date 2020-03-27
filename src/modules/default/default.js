const inquirer = require('inquirer');
const { getHelp } = require('../help/help');
const { userConfiguration } = require('../../userConfiguration/userConfiguration');
const { createProject } = require('../createProject/createProject');

/* eslint-disable no-console */
const lpcFunctionality = () => {
  const functionality = [
    'Create Project',
    'Configure lazy-project-creation',
    'Get Help',
    'List Supported Project Types',
  ];

  inquirer
    .prompt(
      {
        type: 'list',
        name: 'functionality',
        message: 'Please choose what you want to do',
        choices: [...functionality],
      },
    )
    .then((selection) => {
      switch (selection.functionality !== null) {
        case selection.functionality === 'Create Project':
          console.log('Creating project...');
          createProject();
          break;

        case selection.functionality === 'Configure lazy-project-creation':
          console.log('Configuring lpc selected...');
          userConfiguration();
          break;

        case selection.functionality === 'Get Help':
          console.log('Help selected...');
          getHelp();
          break;

        case selection.functionality === 'List Supported Project Types':
          console.log('List Supported Project Types');
          break;

        default:
          console.log('Nothing selected exiting...');
          break;
      }
    });
};


module.exports = {
  lpcFunctionality,
};
