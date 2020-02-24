/* eslint-disable no-console */
const inquirer = require('inquirer');
const { createProject } = require('./createProject');

const defaultTask = () => {
  const defaultTasks = [
    'Create Project',
    'Configure lpc',
  ];


  inquirer
    .prompt(
      /* Pass your questions in here */
      {
        type: 'list',
        name: 'task',
        message: 'What do you want to do?',
        choices: [...defaultTasks],
      },
    )
    .then((answers) => {
      // Do something based on Answer
      switch (answers.task != null) {
        case answers.task === 'Create Project':
          // Creating Project
          createProject();
          break;

        case answers.task === 'Configure lpc':

          break;

        default:
          console.log('Nothing Selected');
          break;
      }
    });
};

module.exports = {
  defaultTask,
};
