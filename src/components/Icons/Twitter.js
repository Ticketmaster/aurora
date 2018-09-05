import React from "react";
import { PropTypes } from "prop-types";

const TwitterIcon = ({ size, color, children, ...props }) => (
  <svg {...props} viewBox="0 0 14 12" width={size} height={size} fill={color}>
    {children}
    <path d="M14 1.353a5.704 5.704 0 0 1-1.65.454A2.89 2.89 0 0 0 13.613.211c-.555.33-1.17.57-1.824.7A2.862 2.862 0 0 0 9.693 0 2.879 2.879 0 0 0 6.82 2.885c0 .226.025.446.074.657A8.141 8.141 0 0 1 .975.528a2.881 2.881 0 0 0-.39 1.45c0 1.001.508 1.884 1.279 2.402a2.852 2.852 0 0 1-1.301-.361v.037c0 1.397.99 2.563 2.304 2.828a2.87 2.87 0 0 1-1.298.05 2.877 2.877 0 0 0 2.683 2.003A5.746 5.746 0 0 1 0 10.132a8.103 8.103 0 0 0 4.403 1.297c5.283 0 8.172-4.397 8.172-8.21 0-.124-.002-.249-.008-.373A5.846 5.846 0 0 0 14 1.353z" />
  </svg>
);

TwitterIcon.displayName = "TwitterIcon";

TwitterIcon.defaultProps = {
  color: "currentcolor",
  children: null
};

TwitterIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

export default TwitterIcon;
