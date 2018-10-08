import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { themes, constants } from "../../../theme";

const RadioInput = styled.input.attrs({
  type: "radio"
})`
  cursor: pointer;
  margin: 0;
  appearance: none;
  position: relative;
  outline: none;
  transition: transform 0.1s ${constants.easing.easeInOutQuad};
  background: none;
  border: none;

  &:active {
    transform: scale(0.95, 0.95);
  }

  .radio-button--large & {
    width: 24px;
    height: 24px;
  }
  .radio-button--small & {
    width: 16px;
    height: 16px;
  }
  &:before {
    content: "";
    transition: box-shadow 0.3s ${constants.easing.easeInOutQuad};
    position: absolute;
    background-color: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: ${({ theme: { themeName } }) =>
      `1px solid ${themes[themeName].gray02}`};

    .radio-button--large & {
      width: 24px;
      height: 24px;
    }
    .radio-button--small & {
      width: 16px;
      height: 16px;
    }
    .radio-button--disabled & {
      border: ${({ theme: { themeName } }) =>
        `1px solid ${themes[themeName].gray01}`};
    }
  }
  &:after {
    content: "";
    transition: width 0.3s ${constants.easing.elastic},
      height 0.3s ${constants.easing.elastic},
      opacity 0.3s ${constants.easing.elastic};
    position: absolute;
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: ${({ theme: { themeName } }) =>
      themes[themeName].primary.base};

    .radio-button--large & {
      width: 8px;
      height: 8px;
    }
    .radio-button--small & {
      width: 5px;
      height: 5px;
    }

    .radio-button--disabled & {
      background-color: ${({ theme: { themeName } }) =>
        themes[themeName].gray01};
    }
  }
  &:focus:before {
    outline: none;
    border-width: 1px;
    border-color: ${({ theme: { themeName } }) =>
      themes[themeName].primary.base};
    box-shadow: ${({ theme: { themeName } }) =>
      `0 0 5px 0 ${themes[themeName].primary.base}`};
  }
  &:hover:before {
    border-width: 2px;
    border-color: ${({ theme: { themeName } }) =>
      themes[themeName].primary.base};

    .radio-button--large & {
      width: 23px;
      height: 23px;
    }
    .radio-button--small & {
      width: 15px;
      height: 15px;
    }
  }
  &:checked:after {
    position: absolute;
    opacity: 1;

    .radio-button--large & {
      width: 12px;
      height: 12px;
    }
    .radio-button--small & {
      width: 8px;
      height: 8px;
    }
  }
`;

class RadioInputComponent extends React.Component {
  static propTypes = {
    size: PropTypes.oneOf(["large", "small"]),
    isActive: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    isFocused: PropTypes.bool.isRequired
  };

  static defaultProps = {
    size: "small",
    isActive: true,
    onClick: null
  };

  constructor(props) {
    super(props);
    this.SelectedElement = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.isFocused && this.SelectedElement.current) {
      this.SelectedElement.current.focus();
    }
  }

  render() {
    const { name, value, size, isActive, checked, ...props } = this.props;

    return (
      <RadioInput
        value={value}
        name={name}
        size={size}
        id={`${name + value}input`}
        disabled={!isActive}
        checked={checked}
        aria-labelledby={`${name + value}label`}
        aria-checked={checked}
        {...props}
        innerRef={this.SelectedElement}
      />
    );
  }
}
export default RadioInputComponent;
