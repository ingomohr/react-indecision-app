"use strict";

var appTitle = "Visibility";

var hideDetails = true;
var buttonText = "Show Details";

var onButtonClickToggleShowDetails = function onButtonClickToggleShowDetails() {
    hideDetails = !hideDetails;

    buttonText = hideDetails ? "Show Details" : "Hide Details";
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            appTitle
        ),
        React.createElement(
            "button",
            { onClick: onButtonClickToggleShowDetails },
            buttonText
        ),
        React.createElement(
            "p",
            { hidden: hideDetails },
            React.createElement(
                "i",
                null,
                "These are the details"
            )
        ),
        React.createElement(
            "p",
            null,
            "Click the button. You'll see..."
        )
    );
    var appRoot = document.getElementById("app");
    ReactDOM.render(template, appRoot);
};

render();
