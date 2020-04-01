/* eslint-disable no-console */
const inquirer = require('inquirer');
const fs = require('fs');
const os = require('os');
const process = require('process');
const { spawn } = require('child_process');
const { getUserConfiguration } = require('../userConfiguration/getUserConfiguration');

const userConfiguration = getUserConfiguration();


const create = (projectPath, projectType, projectName) => {
  return new Promise((resolve, reject) => {
    // check if project already exists
    const projectDoesNotExist = !fs.existsSync(projectPath);

    if (projectDoesNotExist) {
      fs.mkdir(projectPath, { recursive: false }, (err) => {
        reject(new Error(`Error creating Directory: ${err}`));
      });
      resolve({
        success: true,
        message: `${projectName} in Workspace ${projectType} successfully created.`,
      });
    }
    reject(new Error('Project already Exists.'));
  });
};


const nameAndCreateProject = async (projectType) => {
  inquirer
    .prompt({
      type: 'input',
      name: 'projectName',
      message: 'Please name your Project',
    })
    .then(async (input) => {
      console.log(`Creating your ${projectType} Project: \t ${input.projectName}`);
      // project path
      const projectPath = `${userConfiguration.workspaces[projectType]}/${input.projectName}`;
      try {
        const project = await create(projectPath, projectType, input.projectName);
        console.log(project.message);

        // call and wait for success creating repo.

        if (project.success) {
          // move to project
          // cwd current working directory.
          console.log('Switching Directory...');
          spawn(`${os.userInfo().shell}`, ['-i'], {
            cwd: projectPath,
            stdio: 'inherit',
          });

          // Ask for Online Repo

        }


      } catch (err) {
        console.log(err.name, err.message);
      }
    });
};


const workspaceConfiguration = (selected) => {
  inquirer
    .prompt({
      type: 'list',
      name: 'checkWorkspace',
      message: `Is ${userConfiguration.workspaces[selected]} the correct workspace?`,
      choices: ['yes', 'no'],
    })
    .then((selection) => {
      // console.log(selection)
      if (selection.checkWorkspace === 'yes') {
        nameAndCreateProject(selected);
      }

      if (selection.checkWorkspace === 'no') {
        console.log('Try again and don\'t forget update your configuration...');
        process.exit();
      }
      // Name Folder
    });
};


const createProject = () => {
  // console.log(userConfiguration.workspaces);
  inquirer
    .prompt(
      {
        type: 'list',
        name: 'userConfiguration',
        message: 'Select which Project you want to create',
        choices: [...userConfiguration.projectTypes],
      },
    )
    .then((selection) => {
      switch (selection.userConfiguration !== null) {
        case selection.userConfiguration === userConfiguration.projectTypes[0]:
          console.log(`Creating Project ${userConfiguration.projectTypes[0]}...'`);
          workspaceConfiguration(userConfiguration.projectTypes[0]);
          break;

        case selection.userConfiguration === userConfiguration.projectTypes[1]:
          console.log(`Creating Project ${userConfiguration.projectTypes[1]}...'`);
          break;

        case selection.userConfiguration === userConfiguration.projectTypes[2]:
          console.log(`Creating Project ${userConfiguration.projectTypes[2]}...'`);
          break;

        default:
          console.log('DEFAULT');
          break;
      }
    });
};


module.exports = {
  createProject,
};
