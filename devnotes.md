## Dependencies
* inquirer


## Dev Dependencies
* eslint


To publish
    $ now publish

### Create Shell Command
1. #!/usr/bin/env node
2. Edit package.json
   1. bin: "src/index.js"
   1. npm link


## configuration
  * configure workspaces

## Locally
* [] Ask what kind of project they want (list)
  * [] check if workspaces are configured
    * [] if not prompt to configure workspace for selection (input to config file)
  * [] ask for project name
  * [] check if project exists in workspace
  * [] prompt for other name, or cancell project init
  * [] Ask if they want to create a git repo (require ssh)

## Github API REST CLient [octokit.github.io](https://octokit.github.io/rest.js/v17)
* [] git API
  * [] check if they gave access to git data
  * [] git add and commit init commit



### Requiremenet:
1. Nodejs
2. Configure lpc(workspaces, used shell, ssh for git account) before using...
3. 




TODOS:
Implement Configuration for used Shell, to switch Directory!