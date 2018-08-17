import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import colors from "../../theme/colors";
import { Row, Column } from "../Grid";
import { SecondaryText, BoldText, Link } from "../Text";
import OverflowIcon from "../Icons/Overflow";
import ChevronIcon from "../Icons/Chevron";
import { rowDataShape } from "./shape";

import IconButton from "../Button/IconButton";
import {
  DateWrapper,
  DesktopContainer,
  IconWrapper,
  LinkRow,
  LinkWrapper,
  ListContainer,
  ListRowButton,
  MobileContainer,
  MobileOnlyColumn,
  MultilinePrimaryText,
  OverflowDesktopContainer,
  RowWrapper,
  RowWrapperContainer,
  SingleLineSecondaryText,
  SubTitleColumn,
  TitleColumn
} from "./RowContent.styles";

const ListRowContent = ({
  rowItem: {
    title,
    subTitle,
    dateTitle,
    dateSubTitle,
    buttonText,
    variant,
    linkTitle,
    linkUrl,
    linkSubTitle,
    dateColor,
    onClick,
    url
  },
  isOpen,
  index,
  onOverflowClick,
  onExpandShow,
  rowExpandedHeights,
  children
}) => (
  <RowWrapperContainer isOpen={isOpen}>
    <RowWrapper variant={variant} isOpen={isOpen}>
      <ListContainer>
        <IconWrapper
          role="button"
          aria-label={isOpen ? "Collapse Row" : "Expand Row"}
          aria-expanded={isOpen}
          data-index={index}
          isOpen={isOpen}
        >
          <ChevronIcon
            size={15}
            color={colors.blackPearl}
            direction={isOpen ? "up" : "down"}
          />
        </IconWrapper>
        <LinkWrapper
          role="link"
          aria-label={buttonText}
          onClick={onClick}
          href={url}
          rowVariant={variant}
        >
          <DateWrapper>
            <BoldText style={{ textTransform: "uppercase" }} color={dateColor}>
              {dateTitle}
            </BoldText>
            <SingleLineSecondaryText>{dateSubTitle}</SingleLineSecondaryText>
          </DateWrapper>

          <Row style={{ width: "100%" }}>
            <MobileOnlyColumn small={12}>
              <MultilinePrimaryText>{title}</MultilinePrimaryText>
              <SingleLineSecondaryText>{subTitle}</SingleLineSecondaryText>
            </MobileOnlyColumn>

            <TitleColumn
              hideOnExpand={isOpen && onExpandShow === "subTitle"}
              isOpen={isOpen}
              large={isOpen ? 12 : 6}
              xLarge={isOpen ? 12 : 6}
              className={classnames({
                "list-row__title--fade-out": isOpen
              })}
            >
              <MultilinePrimaryText>{title}</MultilinePrimaryText>
            </TitleColumn>
            <SubTitleColumn
              hideOnExpand={isOpen && onExpandShow === "title"}
              isOpen={isOpen}
              large={isOpen ? 12 : 6}
              xLarge={isOpen ? 12 : 6}
              className={classnames({
                "list-row__subtitle--fade-out": isOpen
              })}
            >
              <MultilinePrimaryText>{subTitle}</MultilinePrimaryText>
            </SubTitleColumn>
          </Row>

          <DesktopContainer>
            <ListRowButton
              aria-label={buttonText}
              role="button"
              width="102px"
              variant="standard"
              rowVariant={variant}
              onClick={onClick}
            >
              {buttonText}
            </ListRowButton>
          </DesktopContainer>
        </LinkWrapper>

        <MobileContainer>
          <IconButton
            className="button--more-info"
            size={35}
            data-index={index}
            aria-label="More Info"
            role="button"
            onClick={onOverflowClick}
          >
            <OverflowIcon size={22} color={colors.onyx.light} />
          </IconButton>
        </MobileContainer>
      </ListContainer>
      {variant === "withLink" ? (
        <LinkRow>
          <Column small={9} medium={10} large={10.5} xLarge={10.8}>
            <Link href={linkUrl}>{linkTitle}</Link>
          </Column>
          <Column small={3} medium={2} large={1.5} xLarge={1.2}>
            <SecondaryText>{linkSubTitle}</SecondaryText>
          </Column>
        </LinkRow>
      ) : null}

      <OverflowDesktopContainer
        data-index={index}
        isOpen={isOpen}
        height={rowExpandedHeights[index] || 600}
        className={classnames({
          "list-row--open": isOpen,
          "list-row--close": !isOpen
        })}
      >
        {children}
      </OverflowDesktopContainer>
    </RowWrapper>
  </RowWrapperContainer>
);

// class ListRowContent extends Component {
//
//   render() {
//     const {
//       rowItem: {
//         title,
//         subTitle,
//         dateTitle,
//         dateSubTitle,
//         buttonText,
//         variant,
//         linkTitle,
//         linkUrl,
//         linkSubTitle,
//         dateColor,
//         onClick,
//         url
//       },
//       isOpen,
//       index,
//       onOverflowClick,
//       onExpandShow,
//       children
//     } = this.props;
//
//     return (
//       <RowWrapperContainer isOpen={isOpen}>
//         <RowWrapper variant={variant} isOpen={isOpen}>
//           <ListContainer>
//             <IconWrapper
//               role="button"
//               aria-label={isOpen ? "Collapse Row" : "Expand Row"}
//               aria-expanded={isOpen}
//               data-index={index}
//               isOpen={isOpen}
//             >
//               <ChevronIcon size={15} color={colors.blackPearl} />
//             </IconWrapper>
//             <LinkWrapper
//               role="link"
//               aria-label={buttonText}
//               onClick={onClick}
//               href={url}
//               rowVariant={variant}
//             >
//               <DateWrapper>
//                 <BoldText
//                   style={{ textTransform: "uppercase" }}
//                   color={dateColor}
//                 >
//                   {dateTitle}
//                 </BoldText>
//                 <SingleLineSecondaryText>
//                   {dateSubTitle}
//                 </SingleLineSecondaryText>
//               </DateWrapper>
//
//               <Row style={{ width: "100%" }}>
//                 <MobileOnlyColumn small={12}>
//                   <MultilinePrimaryText>{title}</MultilinePrimaryText>
//                   <SingleLineSecondaryText>{subTitle}</SingleLineSecondaryText>
//                 </MobileOnlyColumn>
//
//                 <TitleColumn
//                   hideOnExpand={isOpen && onExpandShow === "subTitle"}
//                   isOpen={isOpen}
//                   large={isOpen ? 12 : 6}
//                   xLarge={isOpen ? 12 : 6}
//                   className={classnames({
//                     "list-row__title--fade-out": this.props.isOpen
//                   })}
//                 >
//                   <MultilinePrimaryText>{title}</MultilinePrimaryText>
//                 </TitleColumn>
//                 <SubTitleColumn
//                   hideOnExpand={isOpen && onExpandShow === "title"}
//                   isOpen={isOpen}
//                   large={isOpen ? 12 : 6}
//                   xLarge={isOpen ? 12 : 6}
//                   className={classnames({
//                     "list-row__subtitle--fade-out": this.props.isOpen
//                   })}
//                 >
//                   <MultilinePrimaryText>{subTitle}</MultilinePrimaryText>
//                 </SubTitleColumn>
//               </Row>
//
//               <DesktopContainer>
//                 <ListRowButton
//                   aria-label={buttonText}
//                   role="button"
//                   width="102px"
//                   variant="standard"
//                   rowVariant={variant}
//                   onClick={onClick}
//                 >
//                   {buttonText}
//                 </ListRowButton>
//               </DesktopContainer>
//             </LinkWrapper>
//
//             <MobileContainer>
//               <IconButton
//                 className="button--more-info"
//                 size={35}
//                 data-index={index}
//                 aria-label="More Info"
//                 role="button"
//                 onClick={onOverflowClick}
//               >
//                 <OverflowIcon size={22} color={colors.onyx.light} />
//               </IconButton>
//             </MobileContainer>
//           </ListContainer>
//           {variant === "withLink" ? (
//             <LinkRow>
//               <Column small={9} medium={10} large={10.5} xLarge={10.8}>
//                 <Link href={linkUrl}>{linkTitle}</Link>
//               </Column>
//               <Column small={3} medium={2} large={1.5} xLarge={1.2}>
//                 <SecondaryText>{linkSubTitle}</SecondaryText>
//               </Column>
//             </LinkRow>
//           ) : null}
//
//           <OverflowDesktopContainer
//             data-index={index}
//             isOpen={isOpen}
//             height={this.props.rowExpandedHeights[this.props.index] || 600}
//             className={classnames({
//               "list-row--open": isOpen,
//               "list-row--close": !isOpen
//             })}
//             onTransitionEnd={this.onDetailsTransitionEnd}
//           >
//             {children}
//           </OverflowDesktopContainer>
//         </RowWrapper>
//       </RowWrapperContainer>
//     );
//   }
// }

ListRowContent.defaultProps = {
  isOpen: false,
  onExpandShow: "subTitle",
  rowExpandedHeights: {},
  children: null
};

ListRowContent.propTypes = {
  rowItem: PropTypes.shape(rowDataShape).isRequired,
  isOpen: PropTypes.bool,
  index: PropTypes.number.isRequired,
  onOverflowClick: PropTypes.func.isRequired,
  onExpandShow: PropTypes.oneOf(["title", "subTitle"]),
  children: PropTypes.node,
  rowExpandedHeights: PropTypes.objectOf(PropTypes.number)
};

export default ListRowContent;
