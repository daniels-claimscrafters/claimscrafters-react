import React from 'react';

const styles = {
  Card: {
    top: '148px',
    left: '440px',
    width: '134px',
    height: '64px',
    backgroundColor: '#cddef2',
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