// ImageLogo.jsx

// ImageLogo.jsx

import React from 'react';

const styles = {
  ImageContainer: {
    width: '90%', // Decreased width
    height: '90%', // Decreased height
    backgroundColor: 'black',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginLeft: '5px',
    marginTop: '5px',
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
