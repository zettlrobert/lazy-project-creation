const inquire = require('inquirer');


var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'confirm',
      name: 'isHuman',
      message: 'Are you a human?',
      default: false
    }
  ])
  .then(answers => {
    console.log(answers);
    // Use user feedback for... whatever!!
  });

console.log("First log");
