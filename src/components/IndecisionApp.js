import React from "react"; // yarn add react
import AddOption from "./AddOption";
import Option from "./Option";
import Action from "./Action";
import Header from "./Header";

export default class IndecisionApp extends React.Component {
  state = {
    title: "Indecision App",
    subTitle: "Let your app decide",
    options: this.props.options
  };

  /**
   * Component lifecycle method.
   * Called when component is mounted onto the DOM.
   * Can be used to load data from database into component.
   */
  componentDidMount = () => {
    const jsonData = localStorage.getItem("options");

    if (jsonData) {
      try {
        const parsedOptions = JSON.parse(jsonData);
        this.setState(() => ({ options: parsedOptions.options }));
      } catch (e) {
        console.log("Bad data. Not gonna parse that thang.");
      }
    }
  };

  /**
   * Component lifecycle method.
   * Called shortly before component will go away.
   */
  componentWillUnmount = () => {
    console.log("Component will unmount.");
  };

  /**
   * Component lifecycle method.
   * Called when component's props or state did change.
   */
  componentDidUpdate = (prevProps, prevState) => {
    const hasChanged = prevState.options.length != this.state.options.length;
    if (hasChanged) {
      const jsonData = JSON.stringify({ options: this.state.options });
      console.log("Saving data: " + jsonData);

      localStorage.setItem("options", jsonData);
    }
  };

  // There are more component lifecycle methods. See web for more.
  // => see facebook.github.io/react

  /**
   * This method is for allowing child components to push
   * data upstream.
   * ... which cannot be done using props, because props can
   * only be passed from parent components to child components.
   */
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = option => {
    console.log("Deleting option: " + option);

    this.setState(prevState => {
      return {
        options: prevState.options.filter(opt => opt !== option)
      };
    });
  };

  /**
   * For pushing data upstream, too.
   */
  handlePick = () => {
    const optsLength = this.state.options.length;
    const randIndex = Math.floor(Math.random() * optsLength);
    alert("Go with option: " + this.state.options[randIndex]);
  };

  /**
   * For pushing data upstream, too.
   */
  handleAddOption = newOption => {
    if (!newOption) {
      return "Enter a valid option.";
    } else if (this.state.options.indexOf(newOption) != -1) {
      return "Duplicate option: <" + newOption + ">";
    } else {
      this.setState(prevState => ({
        options: prevState.options.concat(newOption)
      }));
    }
  };

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

Header.defaultProps = {
  title: "Indecision"
};

const Options = props => {
  const numOptions = props.options.length;

  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && (
        <p>Please enter an option to get started.</p>
      )}
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
