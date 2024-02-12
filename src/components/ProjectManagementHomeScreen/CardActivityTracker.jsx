import React from 'react';

const styles = {
  Card: {
    top: '332px',
    left: '96px',
    width: '478px',
    height: '344px',
    backgroundColor: '#fafafa',
    borderRadius: '16px',
    border: '1px solid #3164f4',
    boxSizing: 'border-box',
    boxShadow: '2px 2px 0px #3164f4',
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