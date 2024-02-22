// ProjectsList/CardProjects.jsx

import React from 'react';

const styles = {
  Card: {
    top: '306px',
    left: '586px',
    width: '1200px',
    height: '500px', // Adjust the height as needed
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
    backgroundColor: '#2a2c35',
    color: '#ffffff',
    padding: '12px 8px',
    textAlign: 'left',
    borderBottom: '2px solid #cddef2',
  },
  td: {
    padding: '8px',
    borderBottom: '1px solid #cddef2',
    color: '#ffffff',
  },
};

const CardProjects = ({ projects }) => {

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
                <td style={styles.td}>View</td> {/* Assuming "View" is a placeholder */}
                <td style={styles.td}>{project.claimNumber}</td>
                <td style={styles.td}>{`${project.insuredFirstName} ${project.insuredLastName}`}</td>
                <td style={styles.td}>{project.lossAddress}</td>
                <td style={styles.td}>{project.lossCity}</td>
                <td style={styles.td}>{project.lossState}</td>
                <td style={styles.td}>{project.status}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardProjects;