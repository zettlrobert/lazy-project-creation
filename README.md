# lazy-project-creation

Need to setup location for configuration file if project is installed globally with npm!

1. configure lpc 
   1. setup your custom workspaces (project locations)
2. run lazy-project-creation anywhere on your system.


## System Requirements
1. Nodejs
2. npm


## How to install

        $ npm i -g lazy-project-creation


### How to use?
1. Install ne module globally.
2. execute by calling lazy-project-creation (if that is to long for you set an alias, unfortunately lpc is already in use)
3. On first execution the tool creates it's configuration file on your System, that only happens the first time.
4. CONFIGURE YOUR Workspaces, if no Workspace is set each Project will be created in your home directory.


#### If you have suggestions or something is not working as expected let me know!

### Planned Features
* git integration
  * automatically create a repository named like the project

* create basic files to start coding right away
  * (web: package.json, index.js...)
