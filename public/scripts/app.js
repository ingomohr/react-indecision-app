"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      title: "Indecision App",
      subTitle: "Let your app decide",
      options: []
    };

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    return _this;
  }

  /**
   * This method is for allowing child components to push
   * data upstream.
   * ... which cannot be done using props, because props can
   * only be passed from parent components to child components.
   */


  _createClass(IndecisionApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }

    /**
     * For pushing data upstream, too.
     */

  }, {
    key: "handlePick",
    value: function handlePick() {
      var optsLength = this.state.options.length;
      var randIndex = Math.floor(Math.random() * optsLength);
      alert("Go with option: " + this.state.options[randIndex]);
    }

    /**
     * For pushing data upstream, too.
     */

  }, {
    key: "handleAddOption",
    value: function handleAddOption(newOption) {
      if (!newOption) {
        return "Enter a valid option.";
      } else if (this.state.options.indexOf(newOption) != -1) {
        return "Duplicate option: <" + newOption + ">";
      } else {
        this.setState(function (prevState) {
          return {
            options: prevState.options.concat(newOption)
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: this.state.title, subTitle: this.state.subTitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",

    /**
     * render() must be defined by every React Component.
     */
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
          null,
          this.props.subTitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          {
            onClick: this.props.handlePick,
            disabled: !this.props.hasOptions,
            "class": "myButtonWhite"
          },
          "What should I do?"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      var numOptions = this.props.options.length;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { "class": "myButtonRed", onClick: this.props.handleDeleteOptions },
          "Remove All"
        ),
        React.createElement(
          "p",
          null,
          "You have got ",
          numOptions,
          " options:"
        ),
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: option, optionText: option });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

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


var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      { key: props.optionText },
      "Option: ",
      props.optionText
    )
  );
};

var AddOption = function (_React$Component5) {
  _inherits(AddOption, _React$Component5);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this5.state = {
      errMsg: undefined
    };

    _this5.handleAddOpt = _this5.handleAddOpt.bind(_this5);
    return _this5;
  }

  _createClass(AddOption, [{
    key: "handleAddOpt",
    value: function handleAddOpt(e) {
      e.preventDefault();

      var newOption = e.target.elements.option.value.trim();
      var newErrMsg = this.props.handleAddOption(newOption);

      console.log("New option: " + newOption);
      console.log("Err: " + newErrMsg);

      this.setState(function () {
        return {
          errMsg: newErrMsg
        };
      });

      e.target.elements.option.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.errMsg && React.createElement(
          "p",
          null,
          this.state.errMsg
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOpt },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            { "class": "myButton" },
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
