// Card.jsx

import React from 'react';

const styles = {
  cardContainer: {
    top: '785px',
    left: '51px',
    width: '100%',
    height: '100px',
    backgroundColor: '#023f81',
    borderRadius: '26px',
    opacity: 0.77,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px', // Add margin as needed
  },
};

const Card = (props) => {
  return (
    <div style={{ ...styles.cardContainer, ...props.style }}>
      {props.children}
    </div>
  );
};

export default Card;