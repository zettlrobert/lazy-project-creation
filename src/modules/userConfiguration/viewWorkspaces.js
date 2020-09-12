/* eslint-disable quotes */
/* eslint-disable no-console */
const { getUserConfiguration } = require('./getUserConfiguration');

const userConfiguration = getUserConfiguration();

const viewWorkspaces = () => {
  process.stdout.write('\n\tYour lpc Configuration');

  // get array of key and values of workspaces
  const workspaceArray = Object.entries(userConfiguration.workspaces);

  // spacer
  process.stdout.write(`\n\tworkspace\t path \n`);

  // log workspace element with path
  // eslint-disable-next-line array-callback-return
  workspaceArray.map((workspace) => {
    process.stdout.write(`\t${workspace[0]}\t \t${workspace[1]}`);
  });

  process.stdout.write('\n\n');
};


module.exports = {
  viewWorkspaces,
};
