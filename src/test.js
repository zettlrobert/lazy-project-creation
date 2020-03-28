const fs = require('fs');
const path = require('path');

const pathToUserConfig = path.resolve('./src/modules/userConfiguration/configurationData/userConfig.json');


const workspacepath = '/home/zerodev/developoment';

const userConfiguration = JSON.parse(fs.readFileSync(pathToUserConfig));


userConfiguration.workspaces.web = workspacepath;

let data = JSON.stringify(userConfiguration);


fs.writeFileSync(pathToUserConfig, data);
