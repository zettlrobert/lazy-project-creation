#!/usr/bin/env node

/* eslint-disable no-console */
const { lpcFunctionality } = require('./modules/default/default');


console.log('Welcome to lazy-project-creation! \t Select "Get Help" for more information and Instructions\n');


// functionality
const startLpc = () => {
  lpcFunctionality();
};

startLpc();


module.exports = {
  startLpc,
}