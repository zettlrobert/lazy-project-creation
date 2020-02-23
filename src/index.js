const fs = require('fs');
const path = require('path');
// const inquirer = require('inquirer');
const help = require('./modules/help');

const testLogs = () => {
  // const existingConfig = fs.existsSync(__dirname);

  // Current Directory Path
  console.log(`process.cwd(): ${process.cwd()}`);

  // lazy-project-createn configuration
  console.log(`configuration path: ${path.join(__dirname, '/config.json')}`);

  // Get Name of current Directory only
  console.log(`current working directory: ${path.basename(process.cwd())}`);
};
// console.log(`call to test function: ${testLogs()}`);


/**
 * Project Starts here, have some logging for tests above
 */
console.log(`Welcome to lazy-project-creation! \t run lpc --help for more information`);

if (process.argv[2] === '--help') {
  help.getHelp();
}


// Get lazy-project-createion configuration data
const lpcConfig = () => {
  const configPath = path.join(__dirname, '/config.json');

  const configData = JSON.parse(fs.readFileSync(configPath));

  return configData;

};
const config = lpcConfig();

const projectTypes = [
  'web',
  'nodejs',
  'flutter',
  'go',
];


// const currentDirectoryName = path.basename(process.cwd());



// inquirer
//   .prompt([
//     /* Pass your questions in here */
//     {
//       type: 'list',
//       name: 'whichTypeOfProject',
//       message: 'which Project would you like to create?',
//       choices: [...projectTypes]
//     }
//   ])
//   .then(answers => {
//     const selectedTypeOfProject = answers.whichTypeOfProject;

//     console.log(`You want to create a ${selectedTypeOfProject} Project`);

//     // Use user feedback for... whatever!!

//   });
