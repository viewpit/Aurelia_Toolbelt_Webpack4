# Aurelia_Toolbelt_Webpack4
Aurelia (CLI 0.33.1) .NET Core 2, WebPack 4, Bootstrap 4, Aurelia-Toolbelt 0.9.2-alpha, Sass and Babel

# How to quick start the project
1. ```npm install```
2. ```dotnet restore```
3. ```au build```
4. ```dotnet run```


# How To Setting Up Your Machine for the first time
First, there are a set of prerequisites you will need whether or not you are using Visual Studio. Make sure to install these prerequisites before proceeding.

* Install the .NET Core SDK 2.1 from https://www.microsoft.com/net/download/core
* [NodeJS](http://nodejs.org/) >=8.9.0 This provides the platform on which the build tooling runs. This may be downloaded and installed from the NodeJS website.
* NPM >=5.8.0 This is installed with NodeJS, but if you install a older version of NodeJS, you may have to update this. How to upgrade npm https://www.npmjs.com/package/npm-windows-upgrade


# Running This Project Using Command Line Tools
1. ```npm install``` - This restores the JavaScript packages that comprise Aurelia along with the related frontend build and development tooling, such as Webpack, Babel, Boostrap and Aurelia-Toobelt.
2. ```dotnet restore``` - Restores the dependencies and tools of a project.
3. ```au build``` - Runs WebPack and create destination bundle
4. ```dotnet run``` - To run the application, start browser ```http://localhost:xxxxxx``` (Change xxxxxx with port).


# Configuring Your Environment Using Command Line Tools
Aurelia CLI kommandoer:
* ```au build –-env dev``` (Bundler Debug build)
* ```au build –-env prod``` (Bundler Release build)
* ```au run``` (Debug Run http://localhost:8080)
* ```au run --watch --env dev``` (Debug and auto update browser, is something is changed on the server (.html or .js). http://localhost:8080)
* ```au run –env prod``` (Release run http://localhost:8080)
* ```au run --analyze --env dev``` (Show dependencies in Debug Bundle) 
* ```au run --analyze --env prod``` (Show dependencies in Release Bundle)

Or set dotnet environment:
* If you are using PowerShell on Windows, execute ```$Env:ASPNETCORE_ENVIRONMENT = "Development"```
* If you are using cmd.exe on Windows, execute ```setx ASPNETCORE_ENVIRONMENT "Development"```, and then restart your command prompt to make the change take effect.
* If you’re using Mac/Linux, execute ```export ASPNETCORE_ENVIRONMENT=Development```


# Running This Project Using Visual Studio 2017
If you are on Windows, you have the option to use Visual Studio 2017 for your ASP.NET development. Simply use VS to open the .csproj file provided in this repository. 
When your dependencies have finished restoring, press ```Ctrl+F5``` to launch the application in a browser.


### Third party documentation
* Aurelia CLI 0.33.1 (http://aurelia.io/docs/build-systems/aurelia-cli/)
* Bootstrap 4 (http://getbootstrap.com/)
* Aurelia-Toolbelt 0.9.2-alpha (https://aurelia-toolbelt.github.io/#/get-started)


#### Bug fix 
If Node-sass was build for old node.js version, run this to fix it:
* ```npm rebuild node-sass --force -d``` - This rebuild it for node 6 or 8.


