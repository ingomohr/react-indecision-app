import React from "react";

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

export default Option;
