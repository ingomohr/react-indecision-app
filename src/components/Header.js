import React from "react";

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

export default Header;
