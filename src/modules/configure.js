const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const configPath = path.join(__dirname, '../config.json');


// Get lazy-project-createion configuration data
const getLpcConfig = () => {
  const configData = JSON.parse(fs.readFileSync(configPath));
  return configData;
};


const createConfiguration = (configFile, configuredData, updatedWorkspace) => {
  const configuration = JSON.stringify(configuredData);
  fs.writeFileSync(configFile, configuration);
  console.log(`updated path to ${updatedWorkspace} workspace`);
};

const setWorkspace = (workspace, lpcConfig) => {

  const updatePath = (workspaceToUpdate, inputJSON, path) => {

    const { workspaces } = inputJSON;

    switch (workspaceToUpdate != null) {
      case workspaceToUpdate === 'web':
        try {
          workspaces[0].web = path;
          createConfiguration(configPath, inputJSON, workspaceToUpdate);
        } catch (err) {
          console.log(err);
        }
        break;

      case workspaceToUpdate === 'nodejs':
        try {
          workspaces[1].nodejs = path;
          createConfiguration(configPath, inputJSON, workspaceToUpdate);
        } catch (err) {
          console.log(err);
        }
        break;

      case workspaceToUpdate === 'flutter':
        try {
          workspaces[2].flutter = path;
          createConfiguration(configPath, inputJSON, workspaceToUpdate);
        } catch (err) {
          console.log(err);
        }
        break;

      case workspaceToUpdate === 'go':
        try {
          workspaces[3].go = path;
          createConfiguration(configPath, inputJSON, workspaceToUpdate);
        } catch (err) {
          console.log(err);
        }
        break;

      default:
        console.log(`There was an error updating ${workspaceToUpdate} workspace, please run again`);
        break;
    }
  };


  const askForPath = () => {
    inquirer
      .prompt(
        /* Pass your questions in here */
        {
          type: 'input',
          name: 'workspace_path',
          message: `Enter path to your ${workspace} workspace`,
        },
      )
      .then((answers) => {
        const pathToWorkspace = answers.workspace_path;
        console.log(`Path to your ${workspace} workspace ${pathToWorkspace}`);

        inquirer.prompt({
          type: 'confirm',
          name: 'confirm_workspace',
          message: `Is the path to your ${workspace} workspace correct?`,
        },
        ).then((confirmation) => {
          if (confirmation.confirm_workspace === true) {
            // Write Path to Workspace
            updatePath(workspace, lpcConfig, pathToWorkspace);
          } else {
            askForPath();
          }
        });
      });
  };
  askForPath();
};


module.exports = {
  getLpcConfig,
  setWorkspace,
}