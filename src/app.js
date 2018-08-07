// install react and react-dom via
// -> yarn add react
// -> yarn add react-dom

import React from "react";
import ReactDOM from "react-dom";

const template = React.createElement("p", {}, "testing");

ReactDOM.render(template, document.getElementById("app"));