import React from 'react';

const styles = {
  Card: {
    top: '498px',
    left: '153px',
    width: '1163px',
    height: '559px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.16)',
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