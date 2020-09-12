const exit = () => {
  process.stdout.write('Hopefully, you enjoyed lazy-project-creation, have a nice day 🖖');
  process.exitCode = 0;
};

module.exports = {
  exit,
}