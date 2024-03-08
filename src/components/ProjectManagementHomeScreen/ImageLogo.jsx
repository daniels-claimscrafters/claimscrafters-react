// ImageLogo.jsx

// ImageLogo.jsx

import React from 'react';

const styles = {
  ImageContainer: {
    width: '130px', // Decreased width
    height: '130px', // Decreased height
    backgroundColor: 'black',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: '10px',
    marginBottom: '15px',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/ffd9fb9d-25b1-4238-aa81-10979a405a8e.png',
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
