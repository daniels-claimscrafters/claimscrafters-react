import React from 'react';

const styles = {
  ImageContainer: {
    top: '8px',
    left: '13px',
    width: '58px',
    height: '58px',
    borderRadius: '8px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginLeft: '20px',
    marginTop: '5px',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/d661662c-a6d2-4ac0-bb25-6af76fb995bd.png',
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