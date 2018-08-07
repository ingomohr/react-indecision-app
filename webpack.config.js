// Everytime you change this file, you need to
// restart the webpack build (yarn run build)

// see webpack.js.org for docs & stuff

const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    // path needs to be absolute
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        // loader: we use this to enable transform JSX using Babel
        // first -> yarn install babel-core babel-loader
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  // Maps stacktraces in the dev console (browser) to the source code
  // instead of the line in the bundle.js
  devtool: "cheap-module-eval-source-map",
  devServer: {
    // Configures where webpack-dev-server finds the
    contentBase: path.join(__dirname, "public")
  }
};
