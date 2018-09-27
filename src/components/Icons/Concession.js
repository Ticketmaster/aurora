import React from "react";
import PropTypes from "prop-types";

const Concession = ({ size, color, children, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 26 27" {...props}>
    {children}
    <g fill="none" fillRule="evenodd">
      <path
        fill="#E0E0E0"
        fillRule="nonzero"
        d="M13 25.85c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm0 1c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"
      />
      <path
        fill={color}
        d="M7.797 20.053a.384.384 0 0 1-.281-.117.393.393 0 0 1-.118-.29v-.796c0-.276.053-.535.157-.777a2.02 2.02 0 0 1 1.066-1.067c.242-.104.501-.156.777-.156.334 0 .618-.117.852-.352a1.16 1.16 0 0 0 .352-.851 1.974 1.974 0 0 1 .586-1.41c.182-.18.394-.323.636-.43.242-.107.502-.16.778-.16.328 0 .609-.117.843-.352a1.15 1.15 0 0 0 .352-.843c0-.276.053-.536.16-.778.107-.242.25-.454.43-.636a1.974 1.974 0 0 1 1.41-.586c.333 0 .617-.118.851-.352A1.16 1.16 0 0 0 17 9.248v-.796c0-.11.04-.204.117-.282a.384.384 0 0 1 .281-.117c.11 0 .204.04.282.117a.384.384 0 0 1 .117.282v.796c0 .276-.052.536-.156.778a2.054 2.054 0 0 1-.426.637 1.974 1.974 0 0 1-1.418.586c-.328 0-.61.117-.844.351a1.16 1.16 0 0 0-.351.852c0 .276-.053.535-.157.777a2.02 2.02 0 0 1-1.066 1.066 1.946 1.946 0 0 1-.777.157 1.16 1.16 0 0 0-.852.351 1.15 1.15 0 0 0-.352.844 1.974 1.974 0 0 1-.585 1.418c-.183.18-.395.321-.637.426a1.946 1.946 0 0 1-.778.156c-.328 0-.609.117-.843.351a1.16 1.16 0 0 0-.352.852v.797c0 .114-.039.21-.117.289a.393.393 0 0 1-.29.117zM20.203 9.248c0 .334-.056.654-.168.961a2.701 2.701 0 0 1-.488.836c.14.188.285.461.433.82.149.36.223.82.223 1.383 0 .188-.02.383-.058.586-.04.204-.097.416-.172.637-.076.221-.17.45-.285.688-.115.237-.248.48-.399.73a11.935 11.935 0 0 1-.953 1.356 16.83 16.83 0 0 1-1.867 1.968c-.224.2-.45.39-.676.57-.227.18-.453.35-.68.512a8.707 8.707 0 0 1-.675.438 7.134 7.134 0 0 1-1.418.687 4.09 4.09 0 0 1-.637.172 3.317 3.317 0 0 1-.586.055c-.563 0-1.024-.073-1.383-.219-.36-.146-.63-.289-.812-.43a2.89 2.89 0 0 1-.844.48 2.785 2.785 0 0 1-.961.169 2.772 2.772 0 0 1-1.977-.82 2.684 2.684 0 0 1-.61-.903c-.14-.34-.21-.699-.21-1.074 0-.333.056-.654.168-.96.112-.308.275-.587.488-.837-.14-.182-.285-.453-.433-.812C5.074 15.88 5 15.418 5 14.85c0-.188.02-.383.059-.586.039-.203.096-.415.171-.637.076-.221.171-.449.286-.683.114-.235.247-.48.398-.735.135-.218.283-.442.441-.671.16-.23.33-.458.512-.684A16.83 16.83 0 0 1 8.73 8.889a14.741 14.741 0 0 1 1.36-1.082c.226-.159.452-.306.676-.441.25-.151.493-.284.73-.399.237-.114.465-.21.684-.285.218-.075.43-.133.633-.172.203-.039.398-.058.585-.058.568 0 1.032.072 1.391.218.36.146.63.29.813.43a2.786 2.786 0 0 1 1.796-.648 2.791 2.791 0 0 1 1.985.82c.26.266.462.568.605.906.144.339.215.695.215 1.07zm-11.57.836c-.432.427-.823.861-1.172 1.301-.349.44-.646.869-.89 1.285A7.251 7.251 0 0 0 6 13.854c-.135.372-.203.704-.203.996 0 .417.047.757.14 1.02.094.263.188.464.282.605l8.804-8.805a2.846 2.846 0 0 0-.605-.28c-.263-.095-.603-.142-1.02-.142-.291 0-.623.068-.996.204a7.122 7.122 0 0 0-1.18.57 11.48 11.48 0 0 0-1.28.89c-.44.35-.877.74-1.31 1.172zM7.797 20.85a1.97 1.97 0 0 0 1.414-.586l9.601-9.601a1.983 1.983 0 0 0 .586-1.415 1.983 1.983 0 0 0-.586-1.414 1.983 1.983 0 0 0-1.414-.586c-.265 0-.52.051-.765.153-.245.101-.461.246-.649.433l-9.601 9.602a1.983 1.983 0 0 0-.586 1.414 1.983 1.983 0 0 0 1.238 1.848c.242.101.496.152.762.152zm8.773-2.836c.427-.427.815-.86 1.164-1.3.35-.44.648-.87.895-1.286.247-.417.437-.81.57-1.18.133-.37.2-.703.2-1 0-.411-.046-.75-.137-1.015a2.537 2.537 0 0 0-.278-.602l-8.804 8.797c.14.094.342.188.605.281.263.094.6.141 1.012.141.297 0 .631-.066 1.004-.2a6.73 6.73 0 0 0 1.18-.57 11.9 11.9 0 0 0 1.28-.894c.44-.349.877-.74 1.31-1.172z"
      />
    </g>
  </svg>
);

Concession.displayName = "ConcessionIcon";

Concession.defaultProps = {
  color: "currentColor",
  children: null
};

Concession.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

export default Concession;
