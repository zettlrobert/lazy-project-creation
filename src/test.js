/* eslint-disable no-console */
const { exec, spawn } = require('child_process');
const { Octokit } = require('@octokit/rest');


const gitHubConfig = {
  username: 'zettlrobert',
  usermail: 'zettl.robert@gmail.com',
  token: 'TOKEN',
};

const project = {
  projectName: 'testing',
  projectDescription: 'Test Project, gets created over octokit rest api...',
  private: true,
  initCommitMessage: 'init commit',
};

const lazyProjectCreation = new Octokit({
  auth: gitHubConfig.token,
});


const createRepository = () => {
  lazyProjectCreation.repos.createForAuthenticatedUser({
    name: project.projectName,
    description: project.projectDescription,
    private: project.private,
  });
};


// localRepoAndPush();






const testSwitch = async () => {

  console.log(process.env.SHELL);

  spawn(process.env.SHELL, {
    cwd: '/home/zettlrobert',
    stdio: 'inherit',
  });

};
testSwitch();
