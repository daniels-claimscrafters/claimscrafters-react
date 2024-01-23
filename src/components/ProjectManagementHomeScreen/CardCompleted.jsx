import React from 'react';

const styles = {
  Card: {
    top: '136px',
    left: '266px',
    width: '154px',
    height: '136px',
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