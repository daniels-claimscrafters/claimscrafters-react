// ProjectsList/CardProjects.jsx

import React from 'react';
import StatusCard from './statusCard'; // Update 'statuscard' to 'statusCard'


const styles = {
  Card: {
    top: '306px',
    left: '586px',
    width: '1000px',
    height: '600px', // Adjust the height as needed
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

const CardProjects = ({ projects, filter }) => {
  console.log(filter);
  const filteredProjects = projects['projects'].filter(project => {
    return project.status === filter;
  });

  console.log('1 :', filteredProjects);

  const filteredProjectsWithStatus = filteredProjects.filter(project => {
    return project.status === filter;
  });
  
  console.log('2: ', filteredProjectsWithStatus);

  
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
        {filteredProjectsWithStatus.map((project, index) => (
          <tr key={index}>
            <td style={styles.td}>
              <a href={`/projectDetails?projectId=${project.id}`} style={{ fontWeight: 500, fontFamily: 'Red Hat Display', color: '#2a84ea', textDecoration: 'underline', fontSize: '14px' }}>View</a>
            </td>
            <td style={styles.td}>{project.claimNumber}</td>
            <td style={styles.td}>{`${project.insuredFirstName} ${project.insuredLastName}`}</td>
            <td style={styles.td}>{project.lossAddress}</td>
            <td style={styles.td}>{project.lossCity}</td>
            <td style={styles.td}>{project.lossState}</td>
            <td style={{ ...styles.td, padding: 0 }}>
              {/* Render your card component here */}
              <div style={{ width: '100%', height: '100%' }}>
                {/* Replace 'CardComponent' with your actual card component */}
                <StatusCard status={project.status} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default CardProjects;