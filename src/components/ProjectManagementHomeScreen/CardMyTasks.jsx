// CardMyTasks.jsx

import React, { useState } from 'react';
import IconPlus from './IconPlus';
import CardTaskParentEdit from './CardTaskParentEdit';

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
  },
  columnHeader: {
    flex: 1, // Each column takes up equal space
    display: 'flex',
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'center', // Center the content vertically
    fontWeight: 'bold', // Make the column header bold
  },
  // New style for the icon container
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer', // Add cursor pointer to indicate interactivity
  },
};

const CardMyTasks = ({ showCardTaskParent, toggleCardTaskParent, tasks }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  // Define column headers
  const columnHeaders = ['Subject', 'Due Date', 'Status', 'Priority', 'Details'];

  // Sort tasks by due date in ascending order
  const sortedTasks = tasks ? tasks.sort((a, b) => new Date(a.due_date) - new Date(b.due_date)) : [];

  // Get the first three tasks with the closest upcoming due dates
  const upcomingTasks = sortedTasks.slice(0, 3);

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
      <IconPlus style={styles.plusIcon} onClick={toggleCardTaskParent} />
    </div>
    {/* Render column headers */}
    <div style={styles.row}>
      {columnHeaders.map((header, index) => (
        <div key={index} style={styles.columnHeader}>{header}</div>
      ))}
    </div>
    {/* Map through the upcoming tasks and display them */}
    {upcomingTasks.map((task, index) => (
      <div key={index} style={styles.row}>
        <div style={styles.column}>{task.subject}</div>
        <div style={styles.column}>{task.due_date}</div>
        <div style={styles.column}>{task.status}</div>
        <div style={styles.column}>{task.priority}</div>
        {/* Button for the details trigger */}
        <button style={styles.button} onClick={() => handleDetailsClick(task.id)}>Details</button>
      </div>
    ))}
    {selectedTask && <CardTaskParentEdit task={selectedTask} onClose={onClose}/>}
  </div>
);
};

export default CardMyTasks;