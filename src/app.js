class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Indecision App",
      subTitle: "Let your app decide",
      options: []
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  /**
   * This method is for allowing child components to push
   * data upstream.
   * ... which cannot be done using props, because props can
   * only be passed from parent components to child components.
   */
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  /**
   * For pushing data upstream, too.
   */
  handlePick() {
    const optsLength = this.state.options.length;
    const randIndex = Math.floor(Math.random() * optsLength);
    alert("Go with option: " + this.state.options[randIndex]);
  }

  /**
   * For pushing data upstream, too.
   */
  handleAddOption(newOption) {
    if (!newOption) {
      return "Enter a valid option.";
    } else if (this.state.options.indexOf(newOption) != -1) {
      return "Duplicate option: <" + newOption + ">";
    } else {
      this.setState(prevState => {
        return {
          options: prevState.options.concat(newOption)
        };
      });
    }
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subTitle={this.state.subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
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
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
          class="myButtonWhite"
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    const numOptions = this.props.options.length;

    return (
      <div>
        <button class="myButtonRed" onClick={this.props.handleDeleteOptions}>
          Remove All
        </button>
        <p>You have got {numOptions} options:</p>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
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
  constructor(props) {
    super(props);

    this.state = {
      errMsg: undefined
    };

    this.handleAddOpt = this.handleAddOpt.bind(this);
  }

  handleAddOpt(e) {
    e.preventDefault();

    const newOption = e.target.elements.option.value.trim();
    const newErrMsg = this.props.handleAddOption(newOption);

    console.log("New option: " + newOption);
    console.log("Err: " + newErrMsg);

    this.setState(() => {
      return {
        errMsg: newErrMsg
      };
    });

    e.target.elements.option.value = "";
  }

  render() {
    return (
      <div>
        {this.state.errMsg && <p>{this.state.errMsg}</p>}
        <form onSubmit={this.handleAddOpt}>
          <input type="text" name="option" />
          <button class="myButton">Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
