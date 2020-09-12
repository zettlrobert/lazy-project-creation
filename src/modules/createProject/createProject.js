/* eslint-disable no-console */
const inquirer = require('inquirer');
const fs = require('fs');
const process = require('process');
const { getUserConfiguration } = require('../userConfiguration/getUserConfiguration');
const { createGithubRepository } = require('../git/github/createGithubRepository');


const userConfiguration = getUserConfiguration();


const create = (projectPath, projectType, projectName) => new Promise((resolve, reject) => {
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


const askGithubRepoCreate = (projectName, projectPath) => {
  inquirer
    .prompt({
      type: 'list',
      name: 'createGithubRepo',
      message: 'Do you want to create a Github Repository and sync it with your local project?',
      choices: ['yes', 'no'],
    })
    .then((answer) => {
      if (answer.createGithubRepo === 'yes') {
        createGithubRepository(projectName, projectPath);
      }
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
      process.stdout.write(`Creating your ${projectType} Project: \t ${input.projectName}`);
      // project path
      const projectPath = `${userConfiguration.workspaces[projectType]}/${input.projectName}`;
      try {
        const project = await create(projectPath, projectType, input.projectName);
        process.stdout.write(project.message);

        // call and wait for success creating repo.

        if (project.success) {
          askGithubRepoCreate(input.projectName, projectPath);
        }
      } catch (err) {
        process.stdout.write(err.name, err.message);
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
      // process.stdout.write(selection)
      if (selection.checkWorkspace === 'yes') {
        nameAndCreateProject(selected);
      }

      if (selection.checkWorkspace === 'no') {
        process.stdout.write('Try again and don\'t forget update your configuration...');
        process.exit();
      }
      // Name Folder
    });
};


const createProject = () => {
  // process.stdout.write(userConfiguration.workspaces);
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
          process.stdout.write(`Creating Project ${userConfiguration.projectTypes[0]}...'`);
          workspaceConfiguration(selection.userConfiguration);
          break;

        case selection.userConfiguration === userConfiguration.projectTypes[1]:
          process.stdout.write(`Creating Project ${userConfiguration.projectTypes[1]}...'`);
          workspaceConfiguration(selection.userConfiguration);
          break;

        case selection.userConfiguration === userConfiguration.projectTypes[2]:
          process.stdout.write(`Creating Project ${userConfiguration.projectTypes[2]}...'`);
          workspaceConfiguration(selection.userConfiguration);
          break;

        case selection.userConfiguration === userConfiguration.projectTypes[3]:
          process.stdout.write(`Creating Project ${userConfiguration.projectTypes[3]}...'`);
          workspaceConfiguration(selection.userConfiguration);
          break;

        case selection.userConfiguration === userConfiguration.projectTypes[4]:
          process.stdout.write(`Creating Project ${userConfiguration.projectTypes[4]}...'`);
          workspaceConfiguration(selection.userConfiguration);
          break;

        default:
          process.stdout.write('DEFAULT');
          break;
      }
    });
};


module.exports = {
  createProject,
};
