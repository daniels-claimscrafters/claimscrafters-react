// CardMyTasks.jsx

import React, { useState } from 'react';
import IconPlus from './IconPlus';

const styles = {
  Card: {
    position: 'absolute',
    top: '699px',
    left: '92px',
    width: '488px',
    backgroundColor: '#f0f0f0',
    borderRadius: '12px',
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  plusIcon: {
    cursor: 'pointer',
    fontSize: '24px',
  },
  row: {
    marginBottom: '5px',
    padding: '5px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

const CardMyTasks = ({ showCardTaskParent, toggleCardTaskParent }) => {
  return (
    <div style={styles.Card}>
      <div style={styles.header}>
        <div style={styles.title}>My Tasks</div>
        <IconPlus style={styles.plusIcon} onClick={toggleCardTaskParent} />
      </div>
      <div style={styles.row}>Row 1</div>
      <div style={styles.row}>Row 2</div>
      <div style={styles.row}>Row 3</div>
    </div>
  );
};

export default CardMyTasks;