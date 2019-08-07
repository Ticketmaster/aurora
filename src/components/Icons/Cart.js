import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const CartIcon = ({ children, color, ...props }) => (
  <svg
    {...props}
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g>
        <rect x="0" y="0" width="24" height="24" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: "1" }}
          fillRule="nonzero"
          d="M17.7643947,19 L9.23560526,19 C9.71088995,19.5308599 10,20.2318383 10,21 C10,22.6561424 8.65614237,24 7,24 C5.34385763,24 4,22.6561424 4,21 C4,19.5425652 5.04072549,18.3269735 6.41914573,18.0562556 L3.57643646,1 L0.5,1 C0.223857625,1 -1.77635684e-14,0.776142375 -1.77635684e-14,0.5 C-1.77635684e-14,0.223857625 0.223857625,0 0.5,0 L4,0 C4.24441958,0 4.45301463,0.176706521 4.49319696,0.417800506 L7.08890435,15.9920448 L20.1202503,15.0267814 L22.8282847,6 L7.5,6 C7.22385763,6 7,5.77614237 7,5.5 C7,5.22385763 7.22385763,5 7.5,5 L23.5003,5 C23.8352313,5 24.0754549,5.32286798 23.9792131,5.64367394 L20.9792131,15.6436739 C20.9196715,15.8421462 20.74388,15.9833272 20.537235,15.9986339 L7.25398957,16.9825562 L7.42356354,18 L20,18 C21.6561424,18 23,19.3438576 23,21 C23,22.6561424 21.6561424,24 20,24 C18.3438576,24 17,22.6561424 17,21 C17,20.2318383 17.2891101,19.5308599 17.7643947,19 Z M18,21 C18,22.1038576 18.8961424,23 20,23 C21.1038576,23 22,22.1038576 22,21 C22,19.8961424 21.1038576,19 20,19 C18.8961424,19 18,19.8961424 18,21 Z M5,21 C5,22.1038576 5.89614237,23 7,23 C8.10385763,23 9,22.1038576 9,21 C9,19.8961424 8.10385763,19 7,19 C5.89614237,19 5,19.8961424 5,21 Z"
        />
      </g>
    </g>
  </svg>
);

CartIcon.displayName = "CartIcon";

CartIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

CartIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default CartIcon;
