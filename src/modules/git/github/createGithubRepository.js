const { Octokit } = require("@octokit/rest");

const lazyProjectCreation = new Octokit({
  auth: gitHubConfig.token,
});


const createGithubRepository = () => {
  lazyProjectCreation.repos.createForAuthenticatedUser({
    name: project.projectName,
    description: project.projectDescription,
    private: project.private,
  });
};


module.exports = {
  createGithubRepository,
}