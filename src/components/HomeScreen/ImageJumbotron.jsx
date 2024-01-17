import React from 'react';

const styles = {
  ImageContainer: {
    top: '141px',
    left: '-6px',
    width: '751px',
    height: '624px',
    borderRadius: '12px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/ea09abfb-efa8-4606-91a7-94e626e90d41.png',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;