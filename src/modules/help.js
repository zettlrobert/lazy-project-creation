exports.getHelp = () => {
  const helpWelcome = `
    You require assistance in using lazy-project-creation.
  `;

  const helpConfig = `
  \t --supported-workspaces \t currently supported project types.

  \t --config "workspace" \t \t set workspace path for passed argument.

  `;


  console.log(helpWelcome, helpConfig);

};
