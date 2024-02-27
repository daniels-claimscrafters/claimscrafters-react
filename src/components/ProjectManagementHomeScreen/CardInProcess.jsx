// CardInProcess.jsx

import React from 'react';
import CardInProcessSubcard from './CardInProcessSubcard';
import IconInProcess from './IconInProgress';
import TextInProcessInt from './TextInProcessInt';
import TextInProcess from './TextInProcess';

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
  IconInProcessContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
};

const CardInProcess = ({inProcess}) => {
  console.log('Value of inProcess:', inProcess);
  return (
    <div style={styles.Card}>
      <div style={styles.ChildContainer}>
        <CardInProcessSubcard >
          {/* Apply inline styling to center IconInProcess */}
          <div style={styles.IconInProcessContainer}>
            <IconInProcess />
          </div>
        </CardInProcessSubcard >
        <TextInProcess />
        <TextInProcessInt inProcess={inProcess} />
      </div>
    </div>
  );
};

export default CardInProcess;