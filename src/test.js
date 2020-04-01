const { execFile, exec } = require('child_process');
const { Octokit } = require("@octokit/rest");


const gitHubConfig = {
  username: 'zettlrobert',
  usermail: 'zettl.robert@gmail.com',
  token: 'TOKEN',
};

const project = {
  projectName: 'testerino',
  projectDescription: 'Test Project, gets created over octokit rest api...',
  private: true,
  initCommitMessage: 'init commit'
}

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


const localRepoAndPush = () => {
  // git init
  // generate and add to.gitignore: echo node_modules >> .gitignore
  // git add remote origin
  // git add.
  // git commit - m "init commit"
  // git push - u origin master


  // git init
  execFile('git', ['init'], (error, stdout, stderr) => {
    if (error) {
      console.log(stderr);
      throw error;
    }
    console.log(stdout);
  });


  // create and add node_modules to .gitignore
  exec("echo 'node_modules' >> .gitignore", (error, stdout, stderr) => {
    if (error) {
      console.log(stderr);
      throw error;
    }
    console.log(stdout);
    console.log('Successfully created .gitignore and added node_modules');
  });


  // add remote origin
  exec(`git remote add origin git@github.com:${gitHubConfig.username}/${project.projectName}`, (error, stdout, stderr) => {
    if (error) {
      console.log(stderr);
      throw error;
    }

    console.log(`Successfully added remote: ${stdout}`);
  });


  // add all files
  exec(`git add .`, (error, stdout, stderr) => {
    if (error) {
      console.log(stderr);
      throw error;
    }

    console.log(`Successfully added files: ${stdout}`);
  });


  // init commit
  exec(`git commit -m "${project.initCommitMessage}".`, (error, stdout, stderr) => {
    if (error) {
      console.log(stderr);
      throw error;
    }

    console.log(`Successfully commited files: ${stdout}`);
  });


  // push
  exec(`git push -u origin master`, (error, stdout, stderr) => {
    if (error) {
      console.log(stderr);
      throw error;
    }

    console.log(`Successfully pushed: ${stdout}`);
  });
};


console.log('Testfile running...');

// localRepoAndPush();