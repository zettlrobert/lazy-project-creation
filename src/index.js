const { checkSystemForConfig } = require('./modules/userConfiguration/checkSystemForConfig');

process.stdout.write('Welcome to lazy-project-creation! \t Select "Get Help" for more information and Instructions\n');


// functionality
const startLpc = async () => {
  const configurationExists = checkSystemForConfig();
  if (configurationExists) {
    // eslint-disable-next-line global-require
    const { lpcFunctionality } = require('./modules/default/default');
    lpcFunctionality();
  }
};

startLpc();


module.exports = {
  startLpc,
};
