import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendarStyles.css'; // Import your custom styles

const localizer = momentLocalizer(moment);

const styles = {
  Card: {
    top: '332px',
    left: '96px',
    width: '650px',
    height: '344px',
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
    padding: '5px',
  },
  calendar: {
    border: 'none' // Remove border for the calendar component
  }
};

const CardActivityTracker = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div style={styles.Card}>
      <div className="rbc-calendar" style={styles.calendarContainer}> {/* Apply .rbc-calendar class here */}
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          onChange={onChange}
          style={styles.calendar} // Apply styles to the calendar component
          dayPropGetter={() => ({ className: 'custom-date-cell' })} // Apply custom class to date cells
        />
      </div>
    </div>
  );
};

export default CardActivityTracker;

