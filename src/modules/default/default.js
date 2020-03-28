const inquirer = require('inquirer');
const { getHelp } = require('../help/help');
const { userConfiguration } = require('../userConfiguration/userConfiguration');
const { createProject } = require('../createProject/createProject');

/* eslint-disable no-console */
const lpcFunctionality = () => {
  const functionality = [
    'Create Project',
    'Configure lazy-project-creation',
    'Get Help',
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
        case selection.functionality === functionality[0]:
          console.log('Creating project...');
          createProject();
          break;

        case selection.functionality === functionality[1]:
          console.log('Configuring lpc selected...');
          userConfiguration();
          break;

        case selection.functionality === functionality[2]:
          console.log('Help selected...');
          getHelp();
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
