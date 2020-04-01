const inquirer = require('inquirer');
const fs = require('fs');
const os = require('os');
const { getUserConfiguration } = require('../../userConfiguration/getUserConfiguration');

const userConfiguration = getUserConfiguration();
const githubConfiguration = {
  username: '',
  usermail: '',
  personalAccessToken: '',
};


const getGithubUserName = () => {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt({
        type: 'input',
        name: 'username',
        message: 'Please enter your github username',
      })
      .then((answer) => {
        if (answer.username === '') {
          const err = new Error('No github username set, try again...');
          reject(err);
        }

        if (answer.username !== '') {
          githubConfiguration.username = answer.username;
          resolve(`Github username:\t${answer.username}\tset successfully`);
        }
      });
  });
};


const getGithubMail = () => {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt({
        type: 'input',
        name: 'usermail',
        message: 'Please enter your github usermail',
      })
      .then((answer) => {
        if (answer.usermail === '') {
          const err = new Error('No github usermail set, try again...');
          reject(err);
        }

        if (answer.usermail !== '') {
          githubConfiguration.usermail = answer.usermail;
          resolve(`Github usermail:\t${answer.usermail}\tset successfully`);
        }
      });
  });
};


const getGithubPersonalAccessToken = () => {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt({
        type: 'input',
        name: 'personalAccessToken',
        message: 'Please enter your personal access token for github',
      })
      .then((answer) => {
        if (answer.personalAccessToken === '') {
          const err = new Error('You didn\'t enter a personal access token');
          reject(err);
        }

        if (answer.personalAccessToken !== '') {
          githubConfiguration.personalAccessToken = answer.personalAccessToken;
          resolve('Personal access token set successfully...');
        }
      });
  });
};


const configureGithub = async () => {

  try {
    const githubUsername = await getGithubUserName();
    console.log(githubUsername);
  } catch (err) {
    console.log(err.message);
  }


  try {
    const githubMail = await getGithubMail();
    console.log(githubMail);
  } catch (err) {
    console.log(err.message);
  }

  try {
    const githubToken = await getGithubPersonalAccessToken();
    console.log(githubToken);
  } catch (err) {
    console.log(err.message);
  }

  // Update Github Configuration
  userConfiguration.gitConfig.gitHub.username = githubConfiguration.username;

  userConfiguration.gitConfig.gitHub.usermail = githubConfiguration.usermail;

  userConfiguration.gitConfig.gitHub.token = githubConfiguration.personalAccessToken;


  const data = JSON.stringify(userConfiguration);

  fs.writeFileSync(`${os.homedir()}/.config/lazy-project-creation/userConfig.json`, data);

  console.log('Github configuration update successful');
};

module.exports = {
  configureGithub,
}