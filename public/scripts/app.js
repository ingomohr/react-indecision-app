'use strict';

console.log('App.js is up and running.');

// JSX - Javascript XML
var template = React.createElement(
  'p',
  null,
  'This is JSX from app!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
