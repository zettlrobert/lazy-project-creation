/* eslint-disable no-console */
const { exec } = require('child_process');
const { getUserConfiguration } = require('../userConfiguration/getUserConfiguration');

const userConfiguration = getUserConfiguration();


const createLocalRepository = async (projectName, projectPath) => {
  const execCreateGitIgnore = () => new Promise((resolve, reject) => {
    exec('echo "node_modules" >> .gitignore', {
      cwd: projectPath,
    }, (error, stdout, stderr) => {
      if (error) {
        const err = new Error(`Error: ${stderr}`);
        reject(err);
      }
      resolve(`.gitignore created: ${stdout}`);
    });
  });


  const execInitGitRepository = () => new Promise((resolve, reject) => {
    exec('git init', {
      cwd: projectPath,
    }, (error, stdout, stderr) => {
      if (error) {
        const err = new Error(`Error: ${stderr}`);
        reject(err);
      }
      resolve(`repository initiated ${stdout}`);
    });
  });


  const execAddRemoteOrigin = () => new Promise((resolve, reject) => {
    exec(`git remote add origin git@github.com:${userConfiguration.gitConfig.gitHub.username}/${projectName}.git`, {
      cwd: projectPath,
    }, (error, stdout, stderr) => {
      if (error) {
        const err = new Error(`Error: ${stderr}`);
        reject(err);
      }
      resolve(`remote added: ${stdout}`);
    });
  });


  const execAddContents = () => new Promise((resolve, reject) => {
    exec('git add .', {
      cwd: projectPath,
    }, (error, stdout, stderr) => {
      if (error) {
        const err = new Error(`Error: ${stderr}`);
        reject(err);
      }
      resolve(`files added: ${stdout}`);
    });
  });


  const execInitCommit = () => new Promise((resolve, reject) => {
    exec('git commit -m "initial commit"', {
      cwd: projectPath,
    }, (error, stdout, stderr) => {
      if (error) {
        const err = new Error(`Error: ${stderr}`);
        reject(err);
      }
      resolve(`initial commit: ${stdout}`);
    });
  });


  const execPush = () => new Promise((resolve, reject) => {
    exec('git push -u origin master', {
      cwd: projectPath,
    }, (error, stdout, stderr) => {
      if (error) {
        const err = new Error(`Error: ${stderr}`);
        reject(err);
      }
      resolve(`repository pushed: ${stdout}`);
    });
  });


  const gitIgnore = await execCreateGitIgnore();
  console.log(gitIgnore);

  const gitInit = await execInitGitRepository();
  console.log(gitInit);

  const addRemote = await execAddRemoteOrigin();
  console.log(addRemote);

  const addContents = await execAddContents();
  console.log(addContents);

  const initCommit = await execInitCommit();
  console.log(initCommit);

  const pushed = await execPush();
  console.log(pushed);

  return ({ success: true, message: 'Have fun Coding' });
};


module.exports = {
  createLocalRepository,
};
