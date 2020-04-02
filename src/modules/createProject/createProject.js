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


const askGithubRepoCreate = () => {
  inquirer
    .prompt({
      type: 'list',
      name: 'createGithubRepo',
      message: 'Do you want to create a Github Repository and sync it with your local project?',
      choices: ['yes', 'no'],
    })
    .then((answer) => {
      console.log(answer.createGithubRepo);
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
          askGithubRepoCreate();
          // move to project
          // cwd current working directory.
          // console.log(`Switching Directory to ${projectPath}...`);
          // const switched = await spawn(`${os.userInfo().shell}`, ['-i'], {
          //   cwd: projectPath,
          //   stdio: 'inherit',
          // });

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
          workspaceConfiguration(selection.userConfiguration);
          break;

        case selection.userConfiguration === userConfiguration.projectTypes[1]:
          console.log(`Creating Project ${userConfiguration.projectTypes[1]}...'`);
          workspaceConfiguration(selection.userConfiguration);
          break;

        case selection.userConfiguration === userConfiguration.projectTypes[2]:
          console.log(`Creating Project ${userConfiguration.projectTypes[2]}...'`);
          workspaceConfiguration(selection.userConfiguration);
          break;

        case selection.userConfiguration === userConfiguration.projectTypes[3]:
          console.log(`Creating Project ${userConfiguration.projectTypes[3]}...'`);
          workspaceConfiguration(selection.userConfiguration);
          break;

        case selection.userConfiguration === userConfiguration.projectTypes[4]:
          console.log(`Creating Project ${userConfiguration.projectTypes[4]}...'`);
          workspaceConfiguration(selection.userConfiguration);
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
