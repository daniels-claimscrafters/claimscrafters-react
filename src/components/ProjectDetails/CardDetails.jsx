// CardDetails.jsx

import React, { useState } from 'react';

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
    paddingLeft: '40px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
  },
  fieldContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginRight: '10px',
    width: '80px', // Adjust label width as needed
    marginBottom: '10px'
  },
  input: {
    flex: '1',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    maxWidth: '50%', // Adjust input width as needed
  },
};

const CardDetails = ({ projectDetails }) => {
  const [selectedStatus, setSelectedStatus] = useState(projectDetails.project.status);

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
  };

  const updateProjectStatus = async (newStatus) => {
    try {
      const response = await fetch(`https://f133-2600-1010-b040-a157-f048-6b47-d705-e729.ngrok-free.app/npc/project/updatestatus`, {
        method: 'PUT',
        headers: {
          'ngrok-skip-browser-warning': '69420',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) {
        throw new Error('Failed to update project status');
      }

      console.log('Project status updated successfully');
    } catch (error) {
      console.error('Error updating project status:', error);
    }
  };
  return (
    <div style={styles.cardContainer}>
      <div style={{ flex: '0 0 100%', marginBottom: '10px', marginTop: '5px' }}>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Claim Number:</label>
          <input style={styles.input} type="text" value={projectDetails.project.claimNumber} readOnly />
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
      <div style={{ flex: '0 0 100%', marginBottom: '10px', marginTop: '20px' }}>
      <div style={styles.fieldContainer}>
        <label style={styles.label}>Project Status:</label>
        <select style={styles.input} value={selectedStatus} onChange={handleStatusChange}>
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
    </div>
  );
};

export default CardDetails;