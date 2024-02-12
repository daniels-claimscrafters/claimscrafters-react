import React from 'react';

const styles = {
  Card: {
    top: '306px',
    left: '586px',
    width: '839px',
    height: '370px',
    backgroundColor: '#1e1f26',
    borderRadius: '20px',
    border: '2px solid #cddef2',
    boxSizing: 'border-box',
  },
};

const Card = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default Card;