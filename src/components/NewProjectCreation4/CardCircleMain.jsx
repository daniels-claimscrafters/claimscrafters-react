import React from 'react';

const styles = {
  Card: {
    top: '235px',
    left: '227px',
    width: '56px',
    height: '56px',
    backgroundColor: '#1e90ff',
    borderRadius: '100px',
  },
};

const CardCircleMain = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default CardCircleMain;