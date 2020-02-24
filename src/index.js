const inquirer = require('inquirer');
const {
  getLpcConfig,
  setWorkspace,
} = require('./modules/configure');
const help = require('./modules/help');
// testing logs
// const test = require('./tests');
// console.log(`Calling testing function: ${test.testLogs()} \n `);


/**
 * Project Starts here, have some logging for tests above
 */
console.log('Welcome to lazy-project-creation! \t run lpc --help for more information \n');


const lpcConfig = getLpcConfig();

const { projectTypes } = lpcConfig;

if (process.argv[2] === '--help') {
  help.getHelp();
}

if (process.argv[2] === '--supported') {
  console.log('Currently Supported:');
  projectTypes.map((projectType) => {
    console.log(`  -${projectType}`);
  });
}

if (process.argv[2] === '--config') {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'list',
        name: 'setWorkspacePath',
        message: 'which workspace path do you want to set?',
        choices: [...projectTypes],
        // choices: [...Object.keys(lpcConfig.workspaces)],
      },
    ])
    .then((answers) => {
      setWorkspace(answers.setWorkspacePath, lpcConfig);
    });
}
