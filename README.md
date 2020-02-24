## Dependencies
* inquirer


## Dev Dependencies
* eslint


To publish

    $ now publish


TODO

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
The personal Access Token can be used instead of username and password, as this method will be depreceated Nov 2020.
[Generate personal access token for command line in git!](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

1. Settigns
2. Developer settings
3. Personal access token
4. Generate new token
5. Give token a descriptive name (lazy-project-configuration)
6. Select [scopes](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) you want to grant this token.
   1. repo
7. Generate token.
8. Copy token to Clipboard and use in lpc config