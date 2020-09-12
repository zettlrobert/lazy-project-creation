const inquirer = require('inquirer');

const createGithubRepository = () => {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt({
        type: 'list',
        name: 'wantToCreateGithubRepository',
        message: 'Do you want to create an github repository?',
        choices: ['yes', 'no'],
      })
      .then((answer) => {
        if (answer.wantToCreateGithubRepository === 'no') {
          process.stdout.write('Have fun with your project...');
        }

        resolve({ answer: answer.wantToCreateGithubRepository });
      });
  });
};

const githubRepositoryDescription = (projectName) => {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt({
        type: 'input',
        name: 'githubRepositoryDescription',
        message: `Please enter a description for Repository ${projectName}`,
      })
      .then((answer) => {
        resolve({ answer: answer.githubRepositoryDescription });
      });
  });
};

const githubRepository = async (projectName) => {
  const githubProjectConfiguration = {
    username: '',
    token: '',
    projectName,
    projectDescription: '',
    private: '',
  };

  const shouldCreate = await createGithubRepository();

  if (shouldCreate.answer === 'yes') {
    process.stdout.write('Collecting information to generate github repository...');

    const projectDescription = await githubRepositoryDescription();
    githubProjectConfiguration.projectDescription = projectDescription.answer;
  }


  process.stdout.write(githubProjectConfiguration);
};


module.exports = {
  githubRepository,
}