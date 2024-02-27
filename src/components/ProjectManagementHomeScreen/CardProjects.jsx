// ProjectsList/CardProjects.jsx

import React from 'react';

const styles = {
  Card: {
    top: '306px',
    left: '586px',
    width: '1000px',
    height: '674px', // Adjust the height as needed
    backgroundColor: '#1e1f26',
    borderRadius: '20px',
    border: '2px solid #cddef2',
    boxSizing: 'border-box',
    padding: '20px',
    overflowY: 'auto', // Make the container scrollable vertically
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    
  },
  th: {
    color: '#ffffff',
    padding: '12px 8px',
    textAlign: 'left',
    borderBottom: '2px solid #cddef2',
    fontSize: '14px',
    fontFamily: 'Red Hat Display',
    fontWeight: 1000,
  },
  td: {
    paddingTop: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #cddef2',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Red Hat Display',
    fontWeight: 500,
  },
};

const CardProjects = ({ projects }) => {

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Started':
        return { ...styles.td, color: 'black',
        backgroundColor: '#00ff00', // Example background color
        borderRadius: '40px', // Example border radius
        width: '20px',
        
       };
      case 'In Process':
        return { ...styles.td, color: 'blue' }; // Example: Orange color for In Progress status
      case 'Complete':
        return { ...styles.td, color: 'red' }; // Example: Red color for Pending status
        case 'Closed':
          return { ...styles.td, color: 'grey' }; // Example: Red color for Pending status
      default:
        return styles.td; // Default style
    }
  };

  if (!projects || projects === null) {
    return null; // Return null if projects is null or undefined
  }

  console.log('CardProjects: ', projects);
  console.log('Type of projects:', typeof projects);
  return (
    <div style={styles.Card}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>View</th>
            <th style={styles.th}>Claim Number</th>
            <th style={styles.th}>Insured</th>
            <th style={styles.th}>Loss Address</th>
            <th style={styles.th}>City</th>
            <th style={styles.th}>State</th>
            <th style={styles.th}>Status</th> {/* New column for Status */}
          </tr>
        </thead>
        <tbody>
          {Object.keys(projects).map((key) => (
            projects[key].map((project, index) => (
              <tr key={index}>
                <td style={styles.td}>
                  <a href={`/projectDetails?projectId=${project.id}`} style={{ color: '#ffffff', textDecoration: 'underline' }}>View</a>
                </td>
                <td style={styles.td}>{project.claimNumber}</td>
                <td style={styles.td}>{`${project.insuredFirstName} ${project.insuredLastName}`}</td>
                <td style={styles.td}>{project.lossAddress}</td>
                <td style={styles.td}>{project.lossCity}</td>
                <td style={styles.td}>{project.lossState}</td>
                <td style={getStatusStyle(project.status)}>{project.status}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardProjects;