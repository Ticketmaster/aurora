import React from "react";
import PropTypes from "prop-types";

import typography from "../../theme/typography";
import { Link, StyledText } from "../Text";

const Text = StyledText.withComponent("span");

const BreadcrumbItem = ({ position, children, ...props }) => {
  const { href } = props;
  const Tag = href ? Link : Text;

  return (
    <li
      itemProp="itemListElement"
      itemScope
      itemType="http://schema.org/ListItem"
    >
      <Tag itemProp="item" {...props} fontSize={typography.size.uno}>
        {children}
      </Tag>
      {children && <meta itemProp="name" content={children} />}
      {position && <meta itemProp="position" content={position} />}
    </li>
  );
};

BreadcrumbItem.propTypes = {
  position: PropTypes.string.isRequired,
  href: PropTypes.string,
  children: PropTypes.node.isRequired
};

BreadcrumbItem.defaultProps = {
  href: ""
};

export default BreadcrumbItem;
