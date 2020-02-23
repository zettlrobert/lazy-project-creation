## Dependencies
* inquirer


## Dev Dependencies
* eslint


To publish

    $ now publish


TODO

* [] Ask what kind of project they want (list)
  * [] check if workspaces are configured
    * [] if not prompt to configure workspace for selection (input to config file)
  * [] ask for project name
  * [] check if project exists in workspace
  * [] prompt for other name, or cancell project init
* [] Ask if they want to create a git repo (require ssh)
  * [] git API
  * [] check if they gave access to git data
  * [] git add and commit init commit