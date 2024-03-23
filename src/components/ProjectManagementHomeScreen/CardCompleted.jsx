// CardCompleted.jsx

import React from 'react';
import CardCompletedSubcard from './CardCompletedSubcard';
import IconCompleted from './IconCompleted';
import TextCompletedInt from './TextCompletedInt';
import TextCompleted from './TextCompleted';

const styles = {
  Card: {
    top: '136px',
    left: '102px',
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: '12px',
  },
  // Additional styles for the child components
  ChildContainer: {
    padding: '7px',
    height: '100%',
    paddingTop: '10px',
  },
  IconCompletedContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Ensure vertical centering
  },
};

const CardCompleted = ({completed}) => {
  return (
    <div style={styles.Card}>
      <div style={styles.ChildContainer}>
        <CardCompletedSubcard>
          {/* Center IconCompleted */}
          <div style={styles.IconCompletedContainer}>
            <IconCompleted />
          </div>
        </CardCompletedSubcard>
        <TextCompleted />
        <TextCompletedInt completed={completed}/>
      </div>
    </div>
  );
};

export default CardCompleted;
