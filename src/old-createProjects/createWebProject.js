/* eslint-disable no-console */
/* eslint-disable quotes */
const fs = require('fs');
const inquirer = require('inquirer');


function askForProjectName() {
  return new Promise((resolve, reject) => {
    // Inquire here
    inquirer.prompt({
      type: 'input',
      name: 'project_name',
      message: 'Name your Project!',
    }).then((answer) => {
      if (answer.project_name !== '') {
        const projectName = answer.project_name;
        resolve(projectName);
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('Name not specified, try again!');
    });
  });
}


function createProjectPath(projectWorkspace, projectName) {
  return new Promise((resolve, reject) => {
    // Create Path here
    const projectPath = `${projectWorkspace}/${projectName}`;
    resolve(projectPath);

    if (!projectPath) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('Project path not set');
    }
  });
}


function createDirectorie(createdPath, projectWorkspace, projectName) {
  return new Promise((resolve, reject) => {
    const canCreate = !fs.existsSync(createdPath);
    // console.log(`There is NO Project with the given name: ${canCreate}`);
    if (canCreate) {
      fs.mkdir(createdPath, { recursive: false }, (err) => {
        reject(new Error(`Error creating Directory: ${err}`));
      });
      resolve(`${projectName} in workspace ${projectWorkspace}`);
    }
    reject(new Error(`Directorie already exists.`));
  });
}


const createWebProject = async (projectType, projectWorkspace) => {
  try {
    console.log("hello from try");
    const projectName = await askForProjectName();
    console.log(`Project Name received: ${projectName}`);
    const createdPath = await createProjectPath(projectWorkspace, projectName);
    console.log(`Path to new Project: ${createdPath}`);
    const createdDir = await createDirectorie(createdPath, projectWorkspace, projectName);
    console.log(`Create Directory: ${createdDir}`);
  } catch (err) {
    console.log(`Could not create because: \n ${err}`);
  }
};

module.exports = {
  createWebProject,
};
