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
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
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
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
