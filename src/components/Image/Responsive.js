import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import StyledResponsiveImage from "./Responsive.styles";
import StyledImageSeo from "./Seo.styles";

class ResponsiveImage extends PureComponent {
  render() {
    const {
      loader,
      src,
      alt,
      height,
      width,
      children,
      imageRef,
      ...rest
    } = this.props;

    return (
      loader || (
        <StyledResponsiveImage
          image={src}
          height={height}
          width={width}
          ref={imageRef}
          {...rest}
        >
          <StyledImageSeo src={src} alt={alt} height={height} width={width} />
          {children}
        </StyledResponsiveImage>
      )
    );
  }
}

ResponsiveImage.propTypes = {
  loader: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  children: PropTypes.node,
  imageRef: PropTypes.shape({
    current: PropTypes.element
  })
};

ResponsiveImage.defaultProps = {
  loader: null,
  src: "",
  alt: "",
  height: 1,
  width: 1,
  children: null,
  imageRef: { current: null }
};

export default ResponsiveImage;
