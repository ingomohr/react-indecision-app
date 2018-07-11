console.log('App.js is up and running.');

const app = {
    title: 'Indecision App',
    subtitle: "Don't just sit there, do something!",
    options: []
};

function getOptionsInfo() {
    var hasOptions = app.options && app.options.length > 0;

    if (hasOptions) {
        return "You have " + app.options.length + " options";
    } else {
        return <i>Add some options</i>;
    }
}

const onFormSubmit = (e) => {
    // Default behavior would add the input text to the URL
    // in the address bar. We don't want that.
    e.preventDefault();

    // e.target is the form.
    // We access the input field w/ id "option"
    // And on that input field, we access the value
    // the user typed in.
    const newOption = e.target.elements.option.value;
    if (newOption) {
        app.options.push(newOption);
        e.target.elements.option.value = "";
    }
    render();
};

const onRemoveAll = () => {
    // app.options.length = 0;
    // ... would work, as well.
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randIndex = Math.floor(Math.random() * app.options.length);
    alert("Go with option: " + app.options[randIndex]);
}


const render = () => {
    // JSX - Javascript XML
    const template = (
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
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <ol>
                {
                    app.options.map((option) => {
                        // Bad key
                        // Keys must be unique within the
                        // array.
                        // They're used by React for
                        // redraw-calculation.
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
            <button onClick={onRemoveAll}>Remove All</button>
        </div>
    );

    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
}

render();
