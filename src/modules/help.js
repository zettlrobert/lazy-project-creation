exports.getHelp = () => {
  const helpWelcome = `
    You require assistance in using lazy-project-creation.
  `;

  const helpConfig = `
    --supported \t currently supported project types.
    

    --config "workspace" \t set workspace path for passed argument.

  `;

  // eslint-disable-next-line
  console.log(helpWelcome, helpConfig);
};
