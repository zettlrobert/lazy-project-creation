const inquirer = require('inquirer');
const { getHelp } = require('../help/help');
const { userConfiguration } = require('../userConfiguration/userConfiguration');
const { createProject } = require('../createProject/createProject');
const { exit } = require('../default/exit.js');

/* eslint-disable no-console */
const lpcFunctionality = () => {
  const functionality = [
    'Create Project',
    'Configure lazy-project-creation',
    'Get Help',
    'Exit',
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
          process.stdout.write('Creating project...');
          createProject();
          break;

        case selection.functionality === functionality[1]:
          process.stdout.write('Configuring lpc selected...');
          userConfiguration();
          break;

        case selection.functionality === functionality[2]:
          process.stdout.write('Help selected...');
          getHelp();
          break;

        case selection.functionality === functionality[3]:
          process.stdout.write('Exiting...');
          exit();
          break;

        default:
          process.stdout.write('Nothing selected exiting...');
          break;
      }
    });
};


module.exports = {
  lpcFunctionality,
};
