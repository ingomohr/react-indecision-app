const appTitle = "Visibility";

let hideDetails = true;
let buttonText = "Show Details";

const onButtonClickToggleShowDetails = () => {
    hideDetails = !hideDetails;

    buttonText = hideDetails ? "Show Details" : "Hide Details";
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{appTitle}</h1>
            <button onClick={onButtonClickToggleShowDetails}>{buttonText}</button>
            <p hidden={hideDetails}><i>These are the details</i></p>
            <p>Click the button. You'll see...</p>
        </div>
    );
    const appRoot = document.getElementById("app");
    ReactDOM.render(template, appRoot);
}

render();