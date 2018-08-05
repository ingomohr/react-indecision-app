// entry -> output

// see webpack.js.org for docs & stuff

const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    // path needs to be absolute
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  }
};
