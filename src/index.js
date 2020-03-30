#!/usr/bin/env node
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable no-console */

const { checkSystemForConfig } = require('./modules/userConfiguration/checkSystemForConfig');

console.log('Welcome to lazy-project-creation! \t Select "Get Help" for more information and Instructions\n');


// functionality
const startLpc = async () => {
  const configurationExists = await checkSystemForConfig();


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
