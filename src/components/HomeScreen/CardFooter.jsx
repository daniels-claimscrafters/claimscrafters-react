import React from 'react';

const styles = {
  Card: {
    width: '100%',  // Adjust as needed
    height: '118px', // Adjust as needed
    backgroundColor: '#040000',
    padding: '20px', // Add padding as needed
    display: 'flex',
    justifyContent: 'space-between',
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