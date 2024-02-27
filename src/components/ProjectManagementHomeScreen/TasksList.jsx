// TasksList.jsx

import React from 'react';
import TextActivityTracker from './TextActivityTracker';
import CardActivityTracker from './CardActivityTracker';
import CardMyTasks from './CardMyTasks';


const styles = {
  tasksListContainer: {
    
  },
};

const TasksList = ({ showCardTaskParent, toggleCardTaskParent, tasks }) => {
  console.log('tasks2', tasks)
  const convertTasksToEvents = (tasks) => {
    return tasks.map(task => ({
      id: task.id, // Assuming each task has an ID
      title: task.subject, // Use task subject as event title
      start: new Date(task.start_date), // Convert start_date to Date object
      end: new Date(task.due_date), // Convert due_date to Date object
      // You can add more properties here as needed
    }));
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
