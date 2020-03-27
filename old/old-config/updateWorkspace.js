const inquirer = require('inquirer');
const { getLpcConfig } = require('./getConfig');
const { setWorkspace } = require('./setWorkspace');

const { projectTypes } = getLpcConfig();

const lpcConfig = getLpcConfig();

function updateWorkspace() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'selected_workspace',
        message: 'Select a workspac<e you want to configure.',
        choices: [...projectTypes],
      },
    ])
    .then((answers) => {
      const selected = answers.selected_workspace;
      setWorkspace(selected, lpcConfig);
    });
}

module.exports = {
  updateWorkspace,
};
