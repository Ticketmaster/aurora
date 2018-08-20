import React from "react";
import PropTypes from "prop-types";

import { rowDataShape } from "./shape";
import { ItemContainerConsumer } from "./Context";
import ListRowContent from "./RowContent";

const ListRow = ({ children, rowItem, index, onOverflowClick, ...props }) => (
  <ItemContainerConsumer>
    {({ openIndex, renderIntoPortal, rowExpandedHeights }) => (
      <ListRowContent
        rowItem={{
          ...rowItem
        }}
        isOpen={openIndex === index}
        index={index}
        rowExpandedHeights={rowExpandedHeights}
        onOverflowClick={() => {
          renderIntoPortal({ children, contentType: "mobile" });
          onOverflowClick();
        }}
        {...props}
      >
        {children}
      </ListRowContent>
    )}
  </ItemContainerConsumer>
);

ListRow.defaultProps = {
  children: null,
  onExpandShow: "subTitle"
};

ListRow.propTypes = {
  rowItem: PropTypes.shape(rowDataShape).isRequired,
  index: PropTypes.number.isRequired,
  onOverflowClick: PropTypes.func.isRequired,
  onExpandShow: PropTypes.oneOf(["title", "subTitle"]),
  children: PropTypes.node
};

export default ListRow;
