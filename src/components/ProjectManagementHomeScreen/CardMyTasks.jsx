import React from 'react';

const styles = {
  Card: {
    top: '699px',
    left: '92px',
    width: '488px',
    height: '171px',
    backgroundColor: '#f0f0f0',
    borderRadius: '12px',
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