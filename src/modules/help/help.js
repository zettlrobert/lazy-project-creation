/* eslint-disable no-console */
const { reset, green } = require('../../utils/terminalColors');

exports.getHelp = () => {
  const helpWelcome = `
    You require assistance in using lazy-project-creation?
  `;

  const helpConfig = `
    Run lazy-project-creation and select what you want to do. \n
    You have to configure lazy-project-creation before you can start using it. \n
  `;

  process.stdout.write(green, helpWelcome);
  process.stdout.write(reset, helpConfig);
};
