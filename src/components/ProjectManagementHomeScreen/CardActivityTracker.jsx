// /TasksList/CardActivityTracker.jsx

import React, { useState } from 'react';
import Calendar from 'react-calendar';

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
    marginBottom: '40px'
  },
  calendarContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const CardActivityTracker = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div style={styles.Card}>
      <div style={styles.calendarContainer}>
      <Calendar
  onChange={onChange}
  value={date}
  style={{ width: '300px', height: '300px' }} // Example styles
/>
      </div>
    </div>
  );
};

export default CardActivityTracker;