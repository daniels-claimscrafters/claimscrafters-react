import React from 'react';

const styles = {
  cardContainer: {
    width: '500px',
    height: '100%',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f1f1f1',
    borderRadius: '26px',
    border: '1px solid #505050',
    boxSizing: 'border-box',
  },
};

const Card = () => {
  return (
    <div style={styles.cardContainer}>
      {/* Content goes here */}
    </div>
  );
};

export default Card;