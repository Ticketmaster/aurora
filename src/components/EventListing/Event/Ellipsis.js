import React from "react";
import styled from "styled-components";
import { OverflowIcon } from "../../Icons";

const Button = styled.button`
  background: none;
  border: none;
  position: relative;
  
  .cta-btn-ellipsis {
    min-width: auto;
  }

  .screen-reader-text {
    visibility: hidden;
    height:0;
    margin: 0;
  }

  && :focus {
    outline: none;
  }
`;

const Icon = styled(OverflowIcon)`
  color: #5d5d5d;
  height: 22px;
  min-width: 10px;
`;

const Ellipsis = ({className, id, ref, onClick, buttonRef}) => (
  <React.Fragment>
    <Button
      id={id}
      ref={ref}
      onClick={onClick}
      buttonRef={buttonRef}
      className="cta-btn-ellipsis"
      role="button"
    >
      <Icon
        id={id} onClick={onClick} 
        className={className}
        color="#000"
        direction="right"
        size={15}
      />
    </Button>
  </React.Fragment>
)

export default Ellipsis;
