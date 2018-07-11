class Header extends React.Component {

    /**
     * render() must be defined by any React Component.
     */
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Don't just sit there - do something!</h2>
            </div>
        );
    }

}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Some options</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <input type="text"/>
                <button>Add Option</button>
            </div>
        );
    }
}

const jsx = (
    <div>
        {
            // First letter of component-JSX-elements must
            // be uppercase. It's how React detects components.
            // So - <header> would not be rendered.
        }
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById("app"));