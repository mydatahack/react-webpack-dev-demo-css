# react-webpack-dev-demo-css
Example of setting up local React, Bootstrap, SASS dev environment with webpack

This will enable us to have a local React evelopment environment with hot reloading with webpack-dev-server with added sppport for ES6, JSX with Babel, Bootstrap and SASS.

Adding CSS component to [react-webpack-dev-demo](https://github.com/mydatahack/react-webpack-dev-demo)

The package versions used is:

Dev Dependencies
```
"@babel/core": "7.1.0"
"@babel/preset-env": "7.1.0"
"@babel/preset-react": "7.0.0"
"babel-loader": "8.0.4"
"webpack": "4.19.1"
"webpack-cli": "3.1.1"
"webpack-dev-server": "3.1.8"
```

Dependencies
```
"@babel/polyfill": "^7.0.0"
"react": "^16.5.2"
"react-dom": "^16.5.2"
```

## How to set up dev environment for React, Bootstrap, SASS with Webpack 4 and Babel 7

Prerequisit
- nodejs & npm installation

### (1) Project setup

To use bootstrap as css, add bootstrap.min.css to the css folder.

```
Project
    - public
        - css
            - bootstrap.min.css
        - img
            - imagefile.png
        - index.html
    - source
        - client.js
    - package.json
    - webpack.config.js
```

### (2) Package Installation

- Need to install dev dependency
- Polyfill runs before the source code, it needs to be a dependency not a devDependency.

installation for all packages
```
# Webpack
npm i --save-dev webpack@4.19.1 webpack-dev-server@3.1.8 webpack-cli@3.1.1

# React
npm i --save-dev babel-loader@8.0.4 @babel/core@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0
npm i --save @babel/polyfill@7.0.0
npm i --save react@16.5.2 react-dom@16.5.2

# CSS
npm i --save-dev css-loader style-loader extract-text-webpack-plugin bootstrap
npm i --save react-addons-css-transition-group
```

Installing from package.json
```
npm install
```

### (3) configure webpack-dev-server

webpack.config.js

Add mode: 'development'
Add entry for polyfill and the main javascript file. Polyfill gives greater support for browser that doesn't support ES5
Add output with absolute path for the project folder and filename as index.js.
Add module to include all javascript file and exclude node_modules folder.

```
module.exports = {
    mode: 'development',
    entry:['@babel/polyfill','./source/client.js'],
    output: {
        path: '<full path>/ReactNode/webpack-dev-test',
        filename: 'index.js'
    },
    devServer:{
        inline:true,
        contentBase:'./public',
        port:3000
    },
    module: {
        rules: [
            {test:/\.js$/,
             exclude:/node_modules/,
             loader:'babel-loader'
            }
        ]
    }
}
```

### (4) configure package.json

Add index.js to main
Add babel presets. @babel/preset-env compiles ES6 code down to ES5.
Add scripts to start web-dev-server with npm start.
```
{
  "name": "webpack-dev-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "babel": {
    "presets": [
      "@babel/preset-react",
      "@babel/preset-env"
    ]
  },
  "scripts": {
    "start": "webpack-dev-server"
  },
  ...
```

### (5) Add html code to index.html

You can import css in the link tag in the head. The source javascript will be index.js.


### (6) Import React and ReactDom into client.js

