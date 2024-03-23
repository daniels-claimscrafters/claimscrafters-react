// CardActivityTracker.jsx

import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendarStyles.css'; // Import your custom styles

const localizer = momentLocalizer(moment);



const styles = {
  Card: {
    top: '332px',
    left: '96px',
    width: '100%',
    height: '55%',
    backgroundColor: '#fafafa',
    borderRadius: '16px',
    border: '1px solid #3164f4',
    boxSizing: 'border-box',
    boxShadow: '2px 2px 0px #3164f4',
    marginBottom: '20px'
  },
  calendarContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none', // Remove border for the entire calendar
    padding: '2px',
  },
  calendar: {
    border: 'none' // Remove border for the calendar component
  }
};

const CardActivityTracker = ({ events }) => {
  const [date, setDate] = useState(new Date());

  console.log(events);

  const onChange = (date) => {
    setDate(date);
  };

  useEffect(() => {
    console.log('Events:', events);
  }, [events]);

  return (
    <div style={styles.Card}>
      <div className="rbc-calendar" style={styles.calendarContainer}>
        <Calendar
          localizer={localizer}
          events={events.map(event => {
            console.log('Event:', event); // Log each event before passing it
            return {
              ...event,
              className: 'custom-event' // Add a className to each event
            };
          })}
          startAccessor="start"
          endAccessor="end"
          onChange={onChange}
          style={styles.calendar}
          dayPropGetter={() => ({ className: 'custom-date-cell' })}
        />
        
      </div>
    </div>
  );
};

export default CardActivityTracker;