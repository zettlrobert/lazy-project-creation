const { Octokit } = require("@octokit/rest");
const inquirer = require('inquirer');
const { getUserConfiguration } = require('../../userConfiguration/getUserConfiguration');


const userConfiguration = getUserConfiguration();

const project = {
  localLocation: '',
  projectName: '',
  projectDescription: '',
  private: false,
};


const getRepoDescription = () => {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt({
        type: 'input',
        name: 'repositoryDescription',
        message: 'Please enter a Repository description or leave blank',
      })
      .then((input) => {
        console.log(`Your repository description: ${input.repositoryDescription}`);
        resolve({ success: true, message: 'Repository description set...', description: input.repositoryDescription });
      });
  });
};

const isPrivateRepo = () => {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt({
        type: 'list',
        name: 'isPrivate',
        message: 'Do you want the Repository to be private?',
        choices: ['no', 'yes'],
      })
      .then((answer) => {
        if (answer.isPrivate === 'no') {
          resolve(false);
        }

        if (answer.isPrivate === 'yes') {
          resolve(true);
        }

        const err = new Error('There was an error, with repository privacy');
        reject(err);
      });
  });
};


const create = async () => {
  return new Promise((resolve, reject) => {
    const lazyProjectCreation = new Octokit({
      auth: userConfiguration.gitConfig.gitHub.token,
    });

    lazyProjectCreation.repos.createForAuthenticatedUser({
      name: project.projectName,
      description: project.projectDescription,
      private: project.private,
    });

    resolve({ status: true, message: 'Repository successfully created!' });
  })
};

const createGithubRepository = async (projectName, projectPath) => {
  project.localLocation = projectPath;
  project.projectName = projectName;

  try {
    const privateRepo = await isPrivateRepo();
    project.private = privateRepo;

    const repoDescription = await getRepoDescription();
    project.projectDescription = repoDescription.description;

    // create
    const projectCreated = await create();
    console.log(projectCreated.message);

    if (projectCreated.status) {


      console.log('Locally...');
    }


  } catch (err) {
    console.log(err);
  }
};


module.exports = {
  createGithubRepository,
};
