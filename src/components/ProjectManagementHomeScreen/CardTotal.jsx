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
    width: '154px',
    height: '136px',
    backgroundColor: '#f0f0f0',
    borderRadius: '12px',
  },
  // Additional styles for the child components
  ChildContainer: {
    padding: '12px',
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

