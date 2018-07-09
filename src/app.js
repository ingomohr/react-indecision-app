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
var template = (
    <div>
        <h1>{app.title}</h1>

        {
            /*
             * If app.subtitle exists, display it
             * as h1.
             * Otherwise, don't display it.
             */
        }
        {app.subtitle && <p>{app.subtitle}</p>}

        {
            /*
             * If there are options, display their
             * number.
             * Otherwise, display there are no options.
             */
        }
        <p>{getOptionsInfo()}</p>

        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

let count = 0;
const someId = "someId";

const addOne = () => {
    console.log("Adding one");
}

const minusOne = () => {
    console.log("Removing one");
}

const reset = () => {
    console.log("Resetting");
}

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne} className="button">+1</button>
        <button onClick={minusOne} className="button">-1</button>
        <button onClick={reset} className="button">Reset</button>
    </div>
);

console.log(templateTwo);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);


