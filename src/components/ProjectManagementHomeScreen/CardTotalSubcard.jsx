import React from 'react';

const styles = {
  Card: {
    top: '148px',
    left: '440px',
    width: '80%',
    height: '45%',
    backgroundColor: 'rgb(51, 88, 244)',
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