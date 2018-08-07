import React from "react"; // yarn add react
import ReactDOM from "react-dom"; // yarn add react-dom
import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

class OldSyntax {
  constructor() {
    this.name = "Mike";
  }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax);

// ----
// This new syntax is possible due to babel module
// babel-plugin-transform-class-properties
class NewSyntax {
  name = "Jen";
}
const newSyntax = new NewSyntax();
console.log(newSyntax);
