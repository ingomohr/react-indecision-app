class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

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
                <Option />
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Some option</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <input type="text" />
                <button>Add Option</button>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));