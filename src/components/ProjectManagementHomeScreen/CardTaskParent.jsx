// CardTaskParent.jsx

import React, { useState } from 'react';
import TextSubject from './TextSubject';
import IconExit from './IconExit';
import IconSave from './IconSave';
import CardTask from './CardTask';
import axios from 'axios'; // Import Axios
import Popup from './Popup';

const styles = {
  CardTaskParent: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 1.5)', // Add box shadow for elevation
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  contentContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    
    alignItems: 'center', // Optional: Align elements vertically in the center
  },
  columnsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center', // Center elements horizontally
  },
  column: {
    flex: '1',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  fieldContainer: {
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
  },
  label: {
    marginBottom: '5px',
  },
  headerTextField: {
    width: '80%',
    padding: '8px',
    color: '#000000',
    fontSize: '32px',
    fontFamily: 'Poppins',
    fontWeight: 800,
    border: 'none',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
  },
  textField: {
    width: '80%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  bigTextField: {
    width: '90%',
    height: '200px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#cddef2',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end', // Align items to the right
    paddingTop: '10px',
    marginRight: '20px',
  },
};

const CardTaskParent = ({ onClick, onClose, userData }) => {
  const userDataId = userData.id;
  console.log(userDataId);

  const [taskData, setTaskData] = useState({
    subject: '',
    start_date: '',
    due_date: '',
    status: '',
    priority: '',
    description: '',
    userId: userDataId
  });

  const [popup, setPopup] = useState(null);

  const handleFieldChange = (fieldName, value) => {
    setTaskData(prevData => ({
      ...prevData,
      [fieldName]: value
    }));
  };

  const handleSubmit = () => {
    // Perform any validation or data processing before submitting
    console.log('Submitting task:', taskData);

    // Send POST request to your server
    axios.post('https://f133-2600-1010-b040-a157-f048-6b47-d705-e729.ngrok-free.app/tasks/createTask', taskData)
      .then(response => {
        console.log('Task submitted successfully:', response.data);
        // Optionally, clear the form fields after submission
        setTaskData({
          subject: '',
          start_date: '',
          due_date: '',
          status: '',
          priority: '',
          description: '',
        });
        setPopup({ message: 'Task submitted successfully', type: 'success' });
        setTimeout(() => window.location.reload(), 1500);
      })
      .catch(error => {
        console.error('Error submitting task:', error);
        // Handle error
        setPopup({ message: 'Error submitting task', type: 'error' });
        setTimeout(() => window.location.reload(), 1500);
      });
  };

  return (
    <div style={styles.CardTaskParent}>
      <CardTask>
      <div style={styles.iconContainer}>
            <IconSave onClick={handleSubmit} />
            <IconExit onClick={onClose} /> {/* Call onClose function to close the popup */}
          </div>
        <div style={styles.headerContainer}>
          <input
            type="text"
            style={styles.headerTextField}
            placeholder="<Enter Subject>"
            value={taskData.subject}
            onChange={(e) => handleFieldChange('subject', e.target.value)}
          />
        </div>
        
        <div style={styles.contentContainer}>
          
            <div style={styles.column}>
              <div style={styles.fieldContainer}>
                <label style={styles.label}>Start Date:</label>
                <input 
                  type="date" 
                  style={styles.textField} 
                  value={taskData.start_date} 
                  onChange={(e) => handleFieldChange('start_date', e.target.value)} 
                />
              </div>
              <div style={styles.fieldContainer}>
                <label style={styles.label}>Due Date:</label>
                <input 
                  type="date" 
                  style={styles.textField} 
                  value={taskData.due_date} 
                  onChange={(e) => handleFieldChange('due_date', e.target.value)} 
                />
              </div>
              <div style={styles.fieldContainer}>
                <label style={styles.label}>Status:</label>
                <select 
                  style={styles.textField} 
                  value={taskData.status} 
                  onChange={(e) => handleFieldChange('status', e.target.value)} 
                >
                  <option value="">Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div style={styles.fieldContainer}>
                <label style={styles.label}>Priority:</label>
                <select 
                  style={styles.textField} 
                  value={taskData.priority} 
                  onChange={(e) => handleFieldChange('priority', e.target.value)} 
                >
                  <option value="">Select Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          
          <div style={styles.fieldContainer}>
            <label style={styles.label}>Description:</label>
            <textarea 
              style={styles.bigTextField} 
              value={taskData.description} 
              onChange={(e) => handleFieldChange('description', e.target.value)} 
            />
          </div>
        </div>
      </CardTask>
      {popup && (
        <Popup
          message={popup.message}
          type={popup.type}
          onClose={() => setPopup(null)} // Close popup when clicked
          textColor={popup.type === 'error' ? 'red' : 'green'} // Set text color based on popup type
        />
      )}
    </div>
  );
};

export default CardTaskParent;
