class IndecisionApp extends React.Component {


    render() {
        const title = "Indecision App";
        const subTitle = "Hey, good-lookin'!";
        const options = ["Thing one", "Thing two", "Thing four"];

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {

    /**
     * render() must be defined by every React Component.
     */
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
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

        const numOptions = this.props.options.length;

        return (
            <div>
                <p>You've got {numOptions} options:</p>
                {
                    this.props.options.map((option) =>
                        <Option key={option} optionText={option} />
                    )
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {

        const option = this.props.optionText;

        return (
            <div>
                <p key={option}>Option: {option}</p>
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