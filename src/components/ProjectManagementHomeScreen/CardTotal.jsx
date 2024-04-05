// CardTotal.jsx

import React from 'react';
import CardTotalSubcard from './CardTotalSubcard';
import IconTotal from './IconTotal';
import TextTotalInt from './TextTotalInt';
import TextTotal from './TextTotal';

const styles = {
  Card: {
    top: '136px',
    left: '102px',
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  // Additional styles for the child components
  ChildContainer: {
    padding: '7px',
    height: '100%',
    paddingTop: '10px',
  },
  IconTotalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Ensure vertical centering
  },
};

const CardTotal = ({total}) => {
  return (
    <div style={styles.Card}>
      <div style={styles.ChildContainer}>
        <CardTotalSubcard>
          {/* Center IconTotal */}
          <div style={styles.IconTotalContainer}>
            <IconTotal />
          </div>
        </CardTotalSubcard>
        <TextTotal />
        <TextTotalInt total={total}/>
      </div>
    </div>
  );
};

export default CardTotal;

