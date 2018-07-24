class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Indecision App",
      subTitle: "Let your app decide",
      options: props.options
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  /**
   * Component lifecycle method.
   * Called when component is mounted onto the DOM.
   * Can be used to load data from database into component.
   */
  componentDidMount() {
    // Can be tested using this on the Console in the dev tools of Chrome:
    // ReactDOM.render(React.createElement("p"), document.getElementById("app"));
    // => replaces the component w/ p

    console.log("Component did mount!");
  }

  /**
   * Component lifecycle method.
   * Called shortly before component will go away.
   */
  componentWillUnmount() {
    console.log("Component will unmount.");
  }

  /**
   * Component lifecycle method.
   * Called when component's props or state did change.
   */
  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update!");
    console.log(
      "Had " +
        prevState.options.size +
        "before. Now: " +
        this.state.options.size
    );
  }

  // There are more component lifecycle methods. See web for more.
  // => see facebook.github.io/react

  /**
   * This method is for allowing child components to push
   * data upstream.
   * ... which cannot be done using props, because props can
   * only be passed from parent components to child components.
   */
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(option) {
    console.log("Deleting option: " + option);

    this.setState(prevState => {
      return {
        options: prevState.options.filter(opt => opt !== option)
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
      this.setState(prevState => ({
        options: prevState.options.concat(newOption)
      }));
    }
  }

  render() {
    return (
      <div>
        <Header subTitle={this.state.subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

/**
 * Default props for IndecisionApp component.
 */
IndecisionApp.defaultProps = {
  options: []
};

/**
 * This is a stateless function component.
 *
 * i.e.
 * - no state
 * - just a function
 * - u can still pass props
 * - has no 'this'-access (being an arrow-function)
 * - Can be used with <Option> - i.e. const name is the JSX element name
 *
 * Pros:
 * - faster than class-based components (no overhead)
 * - easier to read and write
 * - much easier to test (still to be checked)
 */
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

const Options = props => {
  const numOptions = props.options.length;

  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      <p>You have got {numOptions} options:</p>
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          onDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = props => {
  return (
    <div key={props.optionText}>
      {props.optionText}
      <button onClick={e => props.onDeleteOption(props.optionText)}>
        Remove
      </button>
    </div>
  );
};

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

    this.setState(() => ({ errMsg: newErrMsg }));

    e.target.elements.option.value = "";
  }

  render() {
    return (
      <div>
        {this.state.errMsg && <p>{this.state.errMsg}</p>}
        <form onSubmit={this.handleAddOpt}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
