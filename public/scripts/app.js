'use strict';

console.log('App.js is up and running.');

var app = {
    title: 'Indecision App',
    subtitle: "Don't just sit there, do something!",
    options: ["One", "Two"]
};

function getOptionsInfo() {
    var hasOptions = app.options && app.options.length > 0;

    if (hasOptions) {
        return app.options.length + " options found";
    } else {
        return "no options found";
    }
}

// JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        getOptionsInfo()
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        )
    )
);

var count = 0;
var someId = "someId";

var addOne = function addOne() {
    console.log("Adding one");
};

var minusOne = function minusOne() {
    console.log("Removing one");
};

var reset = function reset() {
    console.log("Resetting");
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne, className: 'button' },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne, className: 'button' },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset, className: 'button' },
        'Reset'
    )
);

console.log(templateTwo);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
