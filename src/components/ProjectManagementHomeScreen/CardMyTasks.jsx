// CardMyTasks.jsx

import React, { useState } from 'react';
import IconPlus from './IconPlus';
import CardTaskParentEdit from './CardTaskParentEdit';
import { motion } from "framer-motion";

const styles = {
  Card: {
    top: '699px',
    left: '92px',
    width: '650px',
    backgroundColor: '#f0f0f0',
    borderRadius: '12px',
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: '280px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: 700,
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    overflow: 'auto',
  },
  plusIcon: {
    cursor: 'pointer',
    fontSize: '24px',
  },
  row1: {
    backgroundColor: '#f0f0f0',
    height: '35px',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    paddingRight: '17px'
  },
  row2: {
    backgroundColor: '#f0f0f0',
    height: '35px',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    
  },
  column: {
    flex: 1, // Each column takes up equal space
    display: 'flex',
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'center', // Center the content vertically
    maxWidth: '122px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Poppins',
  },
  columnContainer: {
    overflow: 'auto',   
  },
  columnHeader: {
    flex: 1, // Each column takes up equal space
    display: 'flex',
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'center', // Center the content vertically
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Poppins',
    fontWeight: 600,    
  },
  // New style for the icon container
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer', // Add cursor pointer to indicate interactivity
  },
  button: {
    flex: 1, // Each button takes up equal space
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    maxWidth: '122px',
    maxHeight: '25px',
    borderRadius: '12px',
    backgroundColor: '#2a84ea',
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Poppins',
    fontWeight: 500,
  },
  buttonContainer: {
    flex: 1, // Each button container takes up equal space
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const CardMyTasks = ({ showCardTaskParent, toggleCardTaskParent, tasks }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  // Sort tasks by due date in ascending order
  const sortedTasks = tasks ? tasks.sort((a, b) => new Date(a.due_date) - new Date(b.due_date)) : [];
  // Function to format the date from "yyyy-mm-dd" to "mm/dd/yyyy"
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${month}/${day}/${year}`;
  };
  console.log(sortedTasks);
  
  // Format due dates for all tasks
  const upcomingTasks = sortedTasks.map(task => ({
    ...task,
    due_date: formatDate(task.due_date)
  }));
  console.log(upcomingTasks);

  // Function to handle click on the details icon
  const handleDetailsClick = (taskId) => {
    // Find the task by its ID
    const task = tasks.find(task => task.id === taskId);
    // Set the selected task
    setSelectedTask(task);
  };
  

  const onClose = () => {
    // Call whatever logic you need to close the component
    // For example, you might want to reset the selectedTask state to null
    setSelectedTask(null);
  };


  return (
    <div style={styles.Card}>
      <div style={styles.header}>
        <div style={styles.title}>My Tasks</div>
        <motion.div
      whileTap={{ scale: 0.9, transition: { duration: 0.2 } }} // Animation properties for tap/click
      //onClick={handleOnClick} // Handle the click event
    >
      <IconPlus style={styles.plusIcon} onClick={toggleCardTaskParent} />
    </motion.div>
        
        
      </div>
      {/* Render column headers */}
      <div style={styles.row1}>
  <div style={styles.columnHeader}>Subject</div>
  <div style={styles.columnHeader}>Status</div>
  <div style={styles.columnHeader}>Due Date</div>
  <div style={styles.columnHeader}>Priority</div>
  <div style={styles.columnHeader}>Details</div>
</div>
      {/* Map through all tasks and display them */}
      <div style={{ overflowX: 'auto' }}>
      {upcomingTasks.map((task, index) => (
        
        <div key={index} style={styles.row2}>
          <div style={styles.column}>{task.subject}</div>
          <div style={styles.column}>{task.status}</div>
          <div style={styles.column}>{task.due_date}</div>
          <div style={styles.column}>{task.priority}</div>
      <div style={styles.buttonContainer}>
      {/* Button for the details trigger */}
      <button style={styles.button} onClick={() => handleDetailsClick(task.id)}>Details</button>
    </div>
        </div>
      ))}
      </div>
      {selectedTask && <CardTaskParentEdit task={selectedTask} onClose={onClose}/>}
    </div>
  );
};

export default CardMyTasks;