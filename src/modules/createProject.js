/* eslint-disable no-console */
const inquirer = require('inquirer');

const { getLpcConfig } = require('./config/getConfig');

const { projectTypes, workspaces } = getLpcConfig();


const doesWorkspaceForProjectExist = (workspaceForType) => {
  // Get Pathvalue for selected Workspace
  // console.log(workspaces[0][workspaceForProject]);
  const workspaceForProject = workspaces[0][workspaceForType];

  if (workspaceForProject === null) {
    console.log(`There is no Workspace for ${workspaceForType} please configure lpc by running lpc --config`);
    return {
      exists: false,
      message: 'Configure lpc correctly',
    };
  }

  return {
    exists: true,
    workspaceForProject,
    message: `Creating ${workspaceForType} project in workspace ${workspaceForProject}...`,
  };
};


const createProject = () => {
  // Ask for Project Type
  inquirer.prompt({
    type: 'list',
    name: 'project_type',
    message: 'What project would you like to create?',
    choices: [...projectTypes],
  }).then((answer) => {
    const projectType = answer.project_type;

    // Create Project deepending on Answer
    switch (projectType != null) {
      case projectType === 'web': {
        // check if workspace is set
        const doesExist = doesWorkspaceForProjectExist(projectType);

        if (doesExist.exists) {
          console.log(doesExist.message);
          console.log(
            // CREATEHERE
          );
        }
        break;
      }

      case projectType === 'nodejs': {
        const doesExist = doesWorkspaceForProjectExist(projectType);
        if (doesExist.exists) {
          console.log(doesExist.message);
          console.log(
            // CREATEHERE
          );
        }
        break;
      }

      case projectType === 'flutter': {
        const doesExist = doesWorkspaceForProjectExist(projectType);
        if (doesExist.exists) {
          console.log(doesExist.message);
          console.log(
            // CREATEHERE
          );
        }
        break;
      }

      case projectType === 'go': {
        const doesExist = doesWorkspaceForProjectExist(projectType);
        if (doesExist.exists) {
          console.log(doesExist.message);
          console.log(
            // CREATEHERE
          );
        }
        break;
      }

      default:
        break;
    }

    // console.log(answer.project_type);
  });
};

module.exports = {
  createProject,
};
