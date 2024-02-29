// CardDetails.jsx

import React, { useState, useEffect } from 'react';
import Popup from './Popup';

const styles = {
  cardContainer: {
    top: '82px',
    left: '39px',
    width: '100%',
    height: '160px',
    backgroundColor: '#f1f1f1',
    borderRadius: '26px',
    border: '1px solid #505050',
    boxSizing: 'border-box',
    padding: '5px',
    paddingTop: '6px',
    paddingLeft: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
  },
  fieldContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  secondColumn: {
    borderRight: '2px solid #c2c2c2', // Add a border to create the divider effect
    alignItems: 'center', // Optional: Add padding to visually separate the columns
    marginBottom: '30px',
    marginRight: '30px',
  },
  label: {
    fontWeight: 700,
    fontFamily: 'Poppins, sans-serif',
    color: '#222222',
    width: '80px', // Adjust label width as needed
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flex: '1',
    padding: '5px',
    fontSize: '14px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    border: '1px solid #ceced3',
    color: '#030303',
    textTransform: 'capitalize',
    outline: 'none',
    maxWidth: '50%', // Adjust input width as needed
  },
  firstInput: {
    flex: '1',
    padding: '5px',
    fontSize: '14px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    border: '1px solid #ceced3',
    color: '#ffffff',
    textTransform: 'capitalize',
    outline: 'none',
    maxWidth: '50%', // Adjust input width as needed
    backgroundColor: '#030303',
  },
  dropdownInput: {
    cursor: 'pointer',
    flex: '1',
    padding: '5px',
    fontSize: '14px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    border: '1px solid #ceced3',
    borderRadius: '12px',
    textTransform: 'capitalize',
    outline: 'none',
    maxWidth: '50%', // Adjust input width as needed
    color: '#030303',
  },
};

const CardDetails = ({ projectDetails }) => {
  console.log(projectDetails)
  console.log('projectId?', projectDetails.project.id)
  const [selectedStatus, setSelectedStatus] = useState(projectDetails.project.status);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');
  const [popupTextColor, setPopupTextColor] = useState('');

  useEffect(() => {
    if (projectDetails) {
      setSelectedStatus(projectDetails.project.status);
    }
  }, [projectDetails]);

  if (!projectDetails) {
    return <div>Loading...</div>;
  }

  
  
  // Log projectDetails and its properties
  console.log('projectDetails:', projectDetails);
    console.log('Claim Number:', projectDetails.project.claimNumber);
    console.log('Insured Name:', projectDetails.project.insuredFirstName);
    console.log('Carrier:', projectDetails.project.carrier);
    const projectStatusOptions = ['Started', 'In Process', 'Completed', 'Closed'];
  // Render UI using the project details directly
  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);
    updateProjectStatus(newStatus);
    setTimeout(() => window.location.reload(), 1500);
  };

  const updateProjectStatus = async (newStatus) => {
    try {
      const projectId  = projectDetails.project.id;
      console.log('sent: ', projectDetails.project.id)


      const response = await fetch(`https://f133-2600-1010-b040-a157-f048-6b47-d705-e729.ngrok-free.app/npc/update-status`, {
        method: 'PUT',
        headers: {
          'ngrok-skip-browser-warning': '69420',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ projectId, status: newStatus })
      });

      if (response.ok) {
        setPopupMessage('Project status updated successfully');
        setPopupType('success');
        setPopupTextColor('green');
      } else {
        setPopupMessage('Failed to update project status');
        setPopupType('error');
        setPopupTextColor('red');
      }
      setShowPopup(true);


    } catch (error) {
      console.error('Error updating project status:', error);
      setPopupMessage('Failed to update project status');
      setPopupType('error');
      setPopupTextColor('red');
      setShowPopup(true);
    }
  };
  return (
    <div style={styles.cardContainer}>
      <div style={{ flex: '0 0 100%', marginBottom: '10px', marginTop: '5px' }}>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Claim Number:</label>
          <input style={styles.firstInput} type="text" value={projectDetails.project.claimNumber} readOnly />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Insured Name:</label>
          <input style={styles.input} type="text" value={projectDetails.project.insuredFirstName} readOnly />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Carrier:</label>
          <input style={styles.input} type="text" value={projectDetails.project.carrier} readOnly />
        </div>
      </div>
      <div style={{ flex: '0 0 100%', marginBottom: '10px', marginTop: '20px', ...styles.secondColumn }}>
      <div style={styles.fieldContainer}>
        <label style={styles.label}>Project Status:</label>
        <select style={styles.dropdownInput} value={selectedStatus} onChange={handleStatusChange}>
          {projectStatusOptions.map((status, index) => (
            <option key={index} value={status}>{status}</option>
          ))}
        </select>
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Insured Address:</label>
          <input style={styles.input} type="text" value={projectDetails.project.lossAddress} readOnly />
        </div>
      </div>
      <div style={{ flex: '0 0 100%', marginBottom: '10px' }}>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Adjuster Name:</label>
          <input style={styles.input} type="text" value={projectDetails.project.adjusterFirstName} readOnly />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Adjuster Email:</label>
          <input style={styles.input} type="email" value={projectDetails.project.adjusterEmail} readOnly />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Adjuster Phone:</label>
          <input style={styles.input} type="tel" value={projectDetails.project.adjusterPhone} readOnly />
        </div>
      </div>
      {showPopup && <Popup message={popupMessage} type={popupType} textColor={popupTextColor}/>}
    </div>
  );
};

export default CardDetails;