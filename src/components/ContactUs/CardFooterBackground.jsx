import React from 'react';

const styles = {
  Card: {
    top: '977px',
    left: '0px',
    width: '1440px',
    height: '118px',
    backgroundColor: '#040000',
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