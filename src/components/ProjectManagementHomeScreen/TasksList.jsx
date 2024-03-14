// TasksList.jsx

import React from 'react';
import TextActivityTracker from './TextActivityTracker';
import CardActivityTracker from './CardActivityTracker';
import CardMyTasks from './CardMyTasks';
import moment from 'moment';


const styles = {
  tasksListContainer: {
    
  },
};

const TasksList = ({ showCardTaskParent, toggleCardTaskParent, tasks }) => {
  console.log('tasks2', tasks)
  const convertTasksToEvents = (tasks) => {
    if (!tasks || tasks.length === 0) {
      return []; // Return an empty array if tasks is null or empty
    }
  
    return tasks.map(task => {
      // Parse dates with Moment.js and apply the correct timezone offset
      const startDate = moment.utc(task.start_date).toDate();
      const endDate = moment.utc(task.due_date).toDate();
  
      return {
        id: task.id, // Assuming each task has an ID
        title: task.subject, // Use task subject as event title
        start: startDate,
        end: endDate,
        // You can add more properties here as needed
      };
    });
  };
  
  const events = convertTasksToEvents(tasks);
  console.log('events', events)
  
  return (
    <div style={styles.tasksListContainer}>
      <TextActivityTracker />
      <CardActivityTracker events={events} />
      <CardMyTasks 
        showCardTaskParent={showCardTaskParent}
        toggleCardTaskParent={toggleCardTaskParent}
        tasks={tasks}
      />
    </div>
  );
};

export default TasksList;