// entry -> output

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
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};

// loader: we use this to enable transform JSX using Babel
// first -> yarn install babel-core babel-loader
