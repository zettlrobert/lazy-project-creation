/* eslint-disable quotes */
/* eslint-disable no-console */
const { getUserConfiguration } = require('./getUserConfiguration');

const userConfiguration = getUserConfiguration();

const viewWorkspaces = () => {
  console.log('\n\tYour lpc Configuration');

  // get array of key and values of workspaces
  const workspaceArray = Object.entries(userConfiguration.workspaces);

  // spacer
  console.log(`\n\tworkspace\t path \n`);

  // log workspace element with path
  // eslint-disable-next-line array-callback-return
  workspaceArray.map((workspace) => {
    console.log(`\t${workspace[0]}\t \t${workspace[1]}`);
  });

  console.log('\n\n');
};


module.exports = {
  viewWorkspaces,
};
