import React from "react";

export default class AddOption extends React.Component {
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

    if (!newErrMsg) {
      e.target.elements.option.value = "";
    }
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
