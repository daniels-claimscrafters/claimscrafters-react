// ImageLogo.jsx

// ImageLogo.jsx

import React from 'react';

const styles = {
  ImageContainer: {
    top: '546px',
    left: '269px',
    width: '120px', // Decreased width
    height: '100px', // Decreased height
    borderRadius: '8px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/616c0541-6abe-4fb7-aedb-96cdcde8c0bd.png',
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
