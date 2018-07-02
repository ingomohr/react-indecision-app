console.log('App.js is up and running.');

// JSX - Javascript XML
// var template = <p>This is JSX from app.js.</p>;

// For now, JSX is not understood by the browser.
// Instead, we "translate" it to some ES5 stuff.
// Later, we'll use Babel to translate to ES5 for us.
var template = React.createElement(
    'h1', { id: 'someId' }, "This is something new"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);