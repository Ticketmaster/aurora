import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classNames from "classnames";

import { themes, spacing, constants, typography } from "../../theme";
import { smallAndUp, mediumAndUp, xLargeAndUp } from "../../theme/mediaQueries";

import Links from "./Links";
import Buttons from "./Buttons";
import DrawerMenu from "./DrawerMenu";

const Nav = styled.nav.attrs({
  role: "navigation"
})`
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  width: 100%;
  font-size: ${typography.size.kilo};
  background-color: transparent;
  color: ${themes.global.white.base};
  font-weight: ${typography.weight.semiBold};
  transition: all 300ms ${constants.easing.easeInOutQuad};

  &.nav--relative {
    position: relative;
  }

  &.nav--absolute {
    position: absolute;
  }

  &.nav--fixed {
    position: fixed;
  }

  &.nav--inverted {
    background-color: ${themes.global.white.base};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  }

  &.nav--overlay:after {
    content: "";
    opacity: 0.4;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    height: 60px;
    z-index: 4;
    background-image: linear-gradient(77deg, rgba(0, 0, 0, 0), #000000);
    ${smallAndUp`
        background-image: linear-gradient(82deg, rgba(0, 0, 0, 0), #000000);
      `};

    ${mediumAndUp`
      background-image: linear-gradient(86deg, rgba(0, 0, 0, 0), #000000);
      `};
  }
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  z-index: 5;
  ${mediumAndUp`
    margin: 0 auto;
  `};

  ${xLargeAndUp`
    padding: 0 44px;
  `};
`;

const Right = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
  height: 60px;
`;

const Left = styled.div`
  flex: 0 1 auto;
  width: 310px;
  min-width: 310px;
  max-width: 310px;
  align-items: center;
  height: 60px;
  display: flex;
  padding-left: ${parseInt(spacing.normal, 10) / 2}px;
  ${mediumAndUp`width: 50%;`};
`;

const NavBar = ({
  children,
  position,
  invert,
  className,
  backgroundColor,
  style,
  ...props
}) => (
  <Nav
    {...props}
    className={classNames(
      position && `nav--${position}`,
      invert && "nav--inverted",
      !!backgroundColor && "nav--overlay",
      className
    )}
    invert={invert}
    style={{ ...style, backgroundColor }}
  >
    <Container>{children}</Container>
  </Nav>
);

NavBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(["relative", "absolute", "fixed"]),
  invert: PropTypes.bool,
  backgroundColor: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string)
};

NavBar.defaultProps = {
  className: null,
  children: null,
  position: "relative",
  invert: false,
  backgroundColor: null,
  style: {}
};

NavBar.MenuButton = Buttons.MenuButton;
NavBar.DrawerMenu = DrawerMenu;
NavBar.SearchButton = Buttons.SearchButton;
NavBar.UserButton = Buttons.UserButton;
NavBar.TextButton = Buttons.TextButton;
NavBar.LinkRow = Links.LinkRow;
NavBar.LinkList = Links.LinkList;
NavBar.LinkListItem = Links.LinkListItem;
NavBar.Link = Links.Link;
NavBar.Right = Right;
NavBar.Left = Left;
NavBar.LogoContainer = Buttons.LogoContainer;

export default NavBar;
