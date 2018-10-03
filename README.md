# react-webpack-dev-demo-css
Example of setting up local React, Bootstrap, SASS dev environment with webpack

This will enable us to have a local React evelopment environment with hot reloading with webpack-dev-server with added sppport for ES6, JSX with Babel, Bootstrap and SASS.

Adding CSS component to [react-webpack-dev-demo](https://github.com/mydatahack/react-webpack-dev-demo)

### Dev Server start
```
npm start
```

### Packaging html, css, javascript and image files for production
```
npm run-script build
```

### Workaround for CSS backgroud image

In /tmp/dist/app.css, the slash before image url(/img/...) needs to be removed after build.

```
.header-image {
  background-image: url(img/glass-3691734_1920.jpg);
  color: white; }
```

### Packages

Dev Dependencies
```
"@babel/core": "7.1.0"
"@babel/preset-env": "7.1.0"
"@babel/preset-react": "7.0.0"
"babel-loader": "8.0.4"
"webpack": "4.19.1"
"webpack-cli": "3.1.1"
"webpack-dev-server": "3.1.8"
"bootstrap": "^4.1.3",
"copy-webpack-plugin": "^4.5.2",
"css-loader": "^0.28.11",
"extract-text-webpack-plugin": "^4.0.0-beta.0"
"html-webpack-plugin": "^3.2.0"
"mini-css-extract-plugin": "^0.4.3"
"node-sass": "^4.9.3"
"sass-loader": "^7.1.0"
"style-loader": "^0.20.3"
```

Dependencies
```
"@babel/polyfill": "^7.0.0"
"react-addons-css-transition-group": "^15.6.2"
"react": "^16.5.2"
"react-dom": "^16.5.2"
```