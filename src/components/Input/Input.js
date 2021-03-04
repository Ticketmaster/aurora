import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import sluggify from "../../utils/text";
import { SIZES, REGULAR, TOP } from "../constants";
import {
  FieldInputWrapper,
  FieldInputBox,
  ErrorBoxWrapper,
  FieldInputText,
  FieldErrorText
} from "./Input.styles";

const Input = forwardRef(
  (
    {
      labelPosition,
      placeholder,
      disabled,
      label,
      name,
      errorMessage,
      size,
      tag,
      labelStyle,
      errorFieldProps,
      id,
      ...rest
    },
    ref
  ) => {
    const sluggified = sluggify(name + label);
    const inputId = sluggified ? `${sluggified}__input` : null;
    const errorId = sluggified ? `${sluggified}__error` : null;
    return (
      <FieldInputWrapper
        className={classNames(
          `text--input-${size}`,
          `text--input-${labelPosition}`,
          {
            "text--input-disabled": disabled,
            text__error: errorMessage
          }
        )}
      >
        {label && (
          <FieldInputText htmlFor={id || inputId} style={labelStyle}>
            {label}
          </FieldInputText>
        )}
        <ErrorBoxWrapper>
          <FieldInputBox
            placeholder={disabled ? "" : placeholder}
            name={name || null}
            id={id || inputId}
            disabled={disabled}
            as={tag}
            aria-invalid={errorMessage ? "true" : "false"}
            aria-describedby={errorMessage ? errorId : null}
            {...rest}
            ref={ref}
          />
          {errorMessage && (
            <FieldErrorText role="alert" id={errorId} {...errorFieldProps}>
              {errorMessage}
            </FieldErrorText>
          )}
        </ErrorBoxWrapper>
      </FieldInputWrapper>
    );
  }
);

Input.propTypes = {
  children: PropTypes.node,
  labelPosition: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  labelStyle: PropTypes.shape(),
  errorMessage: PropTypes.string,
  errorFieldProps: PropTypes.shape(),
  size: PropTypes.oneOf(SIZES),
  tag: PropTypes.oneOf(["textarea", "input"])
};
Input.defaultProps = {
  children: null,
  labelPosition: TOP,
  placeholder: "",
  disabled: false,
  name: "",
  label: "",
  id: "",
  errorMessage: null,
  size: REGULAR,
  tag: "input",
  labelStyle: {},
  errorFieldProps: {}
};

export default Input;
