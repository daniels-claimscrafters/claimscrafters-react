// CardButtonBackground.jsx

import React from 'react';

const styles = {
  Card: {
    top: '191px',
    left: '610px',
    height: '40px',
    backgroundColor: '#f0f0f0',
    borderRadius: '24px',
    display: 'flex', // Added display flex
    justifyContent: 'center', // Center align the buttons
    padding: '10px',
    marginBottom: '20px',
  },
  Button: {
    marginRight: '30px', // Add margin between all buttons
  },
};

const Card = (props) => {
  const childrenWithSpacing = React.Children.map(props.children, (child) => (
    <div style={styles.Button}>
      {child}
    </div>
  ));

  return (
    <div style={styles.Card}>
      {childrenWithSpacing}
    </div>
  );
};

export default Card;

