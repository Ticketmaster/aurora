import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { SliderHandle } from "./RangeSlider.styles";

export default class Handle extends PureComponent {
  render() {
    const {
      offset,
      disabled,
      min,
      max,
      value,
      handleRef,
      ...restProps
    } = this.props;

    const postionStyle = { left: `${offset}%` };

    return (
      <SliderHandle
        ref={handleRef}
        {...restProps}
        style={postionStyle}
        // aria attribute
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-disabled={disabled}
      />
    );
  }
}

Handle.propTypes = {
  offset: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  handleRef: PropTypes.func.isRequired
};

Handle.defaultProps = {
  disabled: false
};
