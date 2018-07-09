'use strict';

console.log('App.js is up and running.');

var app = {
    title: 'Indecision App',
    subtitle: "Don't just sit there, do something!",
    options: []
};

function getOptionsInfo() {
    var hasOptions = app.options && app.options.length > 0;

    if (hasOptions) {
        return "You have " + app.options.length + " options";
    } else {
        return React.createElement(
            'i',
            null,
            'Add some options'
        );
    }
}

var onFormSubmit = function onFormSubmit(e) {
    // Default behavior would add the input text to the URL
    // in the address bar. We don't want that.
    e.preventDefault();

    // e.target is the form.
    // We access the input field w/ id "option"
    // And on that input field, we access the value
    // the user typed in.
    var newOption = e.target.elements.option.value;
    if (newOption) {
        app.options.push(newOption);
        e.target.elements.option.value = "";
    }
    render();
};

var onRemoveAll = function onRemoveAll() {
    // app.options.length = 0;
    // ... would work, as well.
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var randIndex = Math.floor(Math.random() * app.options.length);
    alert("Go with option: " + app.options[randIndex]);
};

var render = function render() {
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
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                // Bad key
                // Keys must be unique within the
                // array.
                // They're used by React for
                // redraw-calculation.
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        )
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

render();
