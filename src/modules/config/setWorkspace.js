const fs = require('fs');
const inquirer = require('inquirer');
const {
  pathToConfigFile,
} = require('./getConfig');


const configFile = pathToConfigFile();

// Writes Configuration to config.json
const createConfiguration = (file, configuredData, updatedWorkspace) => {
  try {
    const configuration = JSON.stringify(configuredData);
    fs.writeFileSync(file, configuration);
    // eslint-disable-next-line
    console.log(`updated path to ${updatedWorkspace} workspace`);
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
  }
};


// Sets Workspace
const setWorkspace = (workspace, lpcConfig) => {
  // Updates the Path to different Workspaces in config.json
  const updatePath = (workspaceToUpdate, inputJSON, localPath) => {
    const { workspaces } = inputJSON;

    switch (workspaceToUpdate != null) {
      case workspaceToUpdate === 'web':
        try {
          workspaces[0].web = localPath;
          createConfiguration(configFile, inputJSON, workspaceToUpdate);
        } catch (err) {
          // eslint-disable-next-line
          console.log(err);
        }
        break;

      case workspaceToUpdate === 'nodejs':
        try {
          workspaces[1].nodejs = localPath;
          createConfiguration(configFile, inputJSON, workspaceToUpdate);
        } catch (err) {
          // eslint-disable-next-line
          console.log(err);
        }
        break;

      case workspaceToUpdate === 'flutter':
        try {
          workspaces[2].flutter = localPath;
          createConfiguration(configFile, inputJSON, workspaceToUpdate);
        } catch (err) {
          // eslint-disable-next-line
          console.log(err);
        }
        break;

      case workspaceToUpdate === 'go':
        try {
          workspaces[3].go = localPath;
          createConfiguration(configFile, inputJSON, workspaceToUpdate);
        } catch (err) {
          // eslint-disable-next-line
          console.log(err);
        }
        break;

      default:
        // eslint-disable-next-line
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
          message: `Enter path to your ${workspace} workspace:`,
        },
      )
      .then((answers) => {
        const pathToWorkspace = answers.workspace_path;
        // eslint-disable-next-line
        console.log(`Path to your ${workspace} workspace ${pathToWorkspace}`);

        inquirer.prompt({
          type: 'confirm',
          name: 'confirm_workspace',
          message: `Is the path to your ${workspace} workspace correct?`,
        }).then((confirmation) => {
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
  setWorkspace,
};
