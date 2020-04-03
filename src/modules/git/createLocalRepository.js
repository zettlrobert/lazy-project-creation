const { execFile, exec } = require('child_process');


const createInitLocalRepository = new Promise((resolve, reject) => {

});


const createLocalRepository = async () => {

  const initLocalRepository = await createInitLocalRepository();

  console.log(initLocalRepository);
};


module.exports = {
  createLocalRepository,
};
