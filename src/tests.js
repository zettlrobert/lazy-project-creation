const path = require('path');
// const fs = require('fs');

exports.testLogs = () => {
  // const existingConfig = fs.existsSync(__dirname);

  // Current Directory Path
  console.log(`process.cwd(): ${process.cwd()}`);

  // lazy-project-createn configuration
  console.log(`configuration path: ${path.join(__dirname, '/config.json')}`);

  // Get Name of current Directory only
  console.log(`current working directory: ${path.basename(process.cwd())}`);

  // Get All Keys from JSON
  // console.log(Object.keys(lpcConfig.workspaces));
};



// // Get all Workspaces from JSON Array of Objects
// const listWorkspaces = () => {
//   const allWorkspaces = [];
//   lpcConfig.workspaces.map(workspace => {
//     allWorkspaces.push(Object.keys(workspace));
//   });
//   const listedWorkspaces = allWorkspaces.flat();
//   return listedWorkspaces;
// };