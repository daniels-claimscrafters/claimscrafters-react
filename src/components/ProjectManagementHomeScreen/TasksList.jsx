// TasksList.jsx

import React from 'react';
import TextActivityTracker from './TextActivityTracker';
import CardActivityTracker from './CardActivityTracker';
import CardMyTasks from './CardMyTasks';


const styles = {
  tasksListContainer: {
    
  },
};

const TasksList = ({ showCardTaskParent, toggleCardTaskParent }) => {
  return (
    <div style={styles.tasksListContainer}>
      <TextActivityTracker />
      <CardActivityTracker />
      <CardMyTasks 
        showCardTaskParent={showCardTaskParent}
        toggleCardTaskParent={toggleCardTaskParent}
      />
    </div>
  );
};

export default TasksList;
