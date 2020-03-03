/* eslint-disable react/no-multi-comp */
import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import Tooltip from "../../../src/components/Tooltip";
import { LinkCta } from "../../../src/components/Text";

const Container = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TooltipButton = styled.div`
  display: inline-block;
`;

const bigContent = `Ut lectus arcu bibendum at varius vel. Vitae nunc sed velit dignissim sodales ut eu sem. 
  Velit sed ullamcorper morbi tincidunt ornare massa. Praesent elementum facilisis leo vel 
  fringilla est ullamcorper eget. Mauris commodo quis imperdiet massa tincidunt nunc. Tellus
  in hac habitasse platea dictumst vestibulum rhoncus. Et odio pellentesque diam volutpat. 
  Sed id semper risus in. Ut venenatis tellus in metus vulputate eu. Vitae auctor eu augue ut
  lectus.`;

class AsyncContent extends React.Component {
  state = {
    content: "loading..."
  };

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState(state => ({ ...state, content: bigContent }));
      this.props.onLoad();
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    const { content } = this.state;

    return <div>{content}</div>;
  }
}

AsyncContent.propTypes = {
  onLoad: PropTypes.func
};

AsyncContent.defaultProps = {
  onLoad: () => {}
};

class TooltipRestrictedAsyncDemo extends React.Component {
  state = {
    isOpened: false
  };

  tooltipRef = React.createRef();

  hideTooltip = () => {
    this.setState(state => ({ ...state, isOpened: false }));
  };

  showTooltip = e => {
    const position = Tooltip.getDimensionsFromEvent(e);

    this.setState(state => ({ ...state, isOpened: true, position }));
  };

  render() {
    const { isOpened, position } = this.state;

    return (
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <TooltipButton>
            <LinkCta
              onMouseEnter={this.showTooltip}
              onMouseLeave={this.hideTooltip}
            >
              Hover for Async Tooltip
            </LinkCta>
          </TooltipButton>
        </div>
        <Tooltip
          ref={this.tooltipRef}
          isVisible={isOpened}
          position={{ ...position }}
        >
          {isOpened ? (
            <AsyncContent onLoad={() => this.tooltipRef.current.refresh()} />
          ) : (
            ""
          )}
        </Tooltip>
      </Container>
    );
  }
}

export default TooltipRestrictedAsyncDemo;
