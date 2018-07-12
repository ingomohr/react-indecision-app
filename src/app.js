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
    handleClick() {
        alert("Pick was called");
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert("Handle remove All");
    }

    render() {

        const numOptions = this.props.options.length;

        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
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
    handleAddOption(e) {
        e.preventDefault();

        const newOption = e.target.elements.option.value.trim();
        if (newOption) {
            console.log("New option: " + newOption);
            e.target.elements.option.value = "";
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));