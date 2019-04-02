import styled, { css } from "styled-components";

import SPACING from "../../../theme/spacing";
import COLORS from "../../../theme/colorThemes";

import Actions from "./Actions";
import Body from "./Body";
import Date from "./Date";
import Flex from "../../Flex";
import Header from "./Header";
import Label from "./Label";
import Link from "./Link";
import SubTitle from "./SubTitle";
import Text from "./Text";
import Title from "./Title";

const { global } = COLORS;

const Event = styled(Flex)`
  background: ${global.white.base};
  .addon { color: ${global.brand}; }

  ${({ hasImage }) =>
    hasImage
      ? css` .date { margin: 0px ${SPACING.cozy} 0 ${SPACING.moderate};}`
      : css` .date { margin: 0px ${SPACING.cozy} 0px 0px;}`};
`;

Event.Actions = Actions;
Event.Body = Body;
Event.Date = Date;
Event.Header = Header;
Event.Label = Label;
Event.Link = Link;
Event.SubTitle = SubTitle;
Event.Text = Text;
Event.Title = Title;

export default Event;
