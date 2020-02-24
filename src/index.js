const inquirer = require('inquirer');
const {
  getLpcConfig,
} = require('./modules/config/getConfig');
const { setWorkspace } = require('./modules/config/setWorkspace');
const help = require('./modules/help');
// testing logs
// const test = require('./tests');
// console.log(`Calling testing function: ${test.testLogs()} \n `);


/**
 * Project Starts here, have some logging for tests above
 */
// eslint-disable-next-line
console.log('Welcome to lazy-project-creation! \t run lpc --help for more information \n');

// Configuration Data from config.json
const lpcConfig = getLpcConfig();

// Pull Out Project Types from Configuration Data
const { projectTypes } = lpcConfig;

// Lists commands and basic instructions for lpc
if (process.argv[2] === '--help') {
  help.getHelp();
}

// Lists all supported Project formats
if (process.argv[2] === '--supported') {
  // eslint-disable-next-line
  console.log('Currently Supported:');
  projectTypes.map((projectType) => {
    // eslint-disable-next-line
    console.log(`  -${projectType}`);
    return null;
  });
}

// Configure Workspaces for lpc
if (process.argv[2] === '--config') {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'setWorkspacePath',
        message: 'which workspace path do you want to set?',
        choices: [...projectTypes],
      },
    ])
    .then((answers) => {
      setWorkspace(answers.setWorkspacePath, lpcConfig);
    });
}
