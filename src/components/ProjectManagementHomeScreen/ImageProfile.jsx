import React from 'react';

const styles = {
  ImageContainer: {
    top: '25px',
    left: '1323px',
    width: '68px',
    height: '69px',
    borderRadius: '100000px',
    border: '1px solid #c2c2c2',
    boxSizing: 'border-box',
    backgroundImage: 'url(./image.jpeg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: '10px',
  },
};

const defaultProps = {
  image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw2fHxhc2lhbnxlbnwxfHx8fDE2Nzk2NDAwOTQ&ixlib=rb-4.0.3&q=80&w=1080',
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