import React from "react";
import { PropTypes } from "prop-types";

const InstagramIcon = ({ size, color, children, ...props }) => (
  <svg {...props} viewBox="0 0 14 14" width={size} height={size} fill={color}>
    {children}
    <g fill={color} fillRule="nonzero">
      <path d="M7.056 3.486c-1.96 0-3.584 1.565-3.584 3.514 0 1.949 1.596 3.514 3.584 3.514S10.64 8.922 10.64 7c0-1.922-1.624-3.514-3.584-3.514zm0 5.765C5.796 9.251 4.76 8.235 4.76 7c0-1.235 1.036-2.251 2.296-2.251 1.26 0 2.296 1.016 2.296 2.251 0 1.235-1.036 2.251-2.296 2.251z" />
      <ellipse cx="10.78" cy="3.404" rx="1" ry="1" />
      <path d="M12.88 1.345C12.152.604 11.116.22 9.94.22H4.172C1.736.22.112 1.812.112 4.2v5.627c0 1.18.392 2.197 1.176 2.938.756.713 1.764 1.07 2.912 1.07h5.712c1.204 0 2.212-.384 2.94-1.07.756-.714 1.148-1.73 1.148-2.91V4.2c0-1.153-.392-2.141-1.12-2.855zm-.168 8.51c0 .85-.252 1.537-.756 2.004-.504.466-1.204.714-2.044.714H4.2c-.84 0-1.54-.248-2.044-.714-.504-.494-.756-1.18-.756-2.032V4.2c0-.824.252-1.51.756-2.004.476-.467 1.204-.714 2.044-.714h5.768c.84 0 1.54.247 2.044.742.476.494.756 1.18.756 1.976v5.655h-.056z" />
    </g>
  </svg>
);

InstagramIcon.displayName = "InstagramIcon";

InstagramIcon.defaultProps = {
  color: "currentcolor",
  children: null
};

InstagramIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

export default InstagramIcon;
