# TypeScript/jQuery Starter App

Very minimalist TypeScript/jQuery starter application.

The purpose of this starter app is to provide a minimal setup to create a small project with 2020 technologies:
 - TypeScript support
 - jQuery support... because why not ¯\\\_(ツ)\_/¯
 - sass/scss support
 - bundling & watching with webpack.
 
## Prerequisites

Install [NodeJS](https://nodejs.org) then [yarn](https://yarnpkg.com)

Start a console and type:
``` 
npm install -g yarn
``` 

## Development server

Run `yarn install && yarn start` for a dev server. 

Navigate to `http://localhost:8080/`. 
The app will automatically reload if you change any of the source files thanks to webpack watcher. Hit [CTRL+C] to stop the watcher.
## Build

Run `yarn install && yarn build` to build the project. 
The build artifacts will be stored in the `dist/` directory.

## Serve

Run `yarn install && yarn serve` to serve the built the project. 
Navigate to `http://localhost:8080/`. 
The served app is bundled, almost ready to be served in production.
