// CardChangelog.jsx

import React, { useState, useEffect } from 'react';

const styles = {
  cardContainer: {
    width: '99%',
    height: '100%',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f1f1f1',
    borderRadius: '26px',
    border: '1px solid #505050',
    padding: '20px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column', // Align children vertically
    alignItems: 'center', // Center children horizontally
  },
  header: {
    marginTop: '0', // Remove default margin
    textAlign: 'center', // Center text horizontally
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: 600,
  },
  entryContainer: {
    flex: '1',
    overflowY: 'auto',
  },
  entryList: {
    padding: '0',
    margin: '0',
    listStyleType: 'none',
  },
  entryItem: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
    color: '#030303',
    fontSize: '12px',
    fontFamily: 'Poppins',
    fontWeight: 600,
  },
};

const CardChangelog = ({ projectDetails }) => {
  const [entries, setEntries] = useState([]);

  const projectId = projectDetails.project.id;
  const API_URL = process.env.REACT_APP_API_URL;
  

  useEffect(() => {
    fetch(`${API_URL}/npc/get-changelog?projectId=${projectId}`, {
      headers: {
        'ngrok-skip-browser-warning': '69420',
        // Add any other headers you need
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch changelog entries');
        }
      })
      .then(data => {
        console.log(data);
        setEntries(data.entries); // Set the entries state with the fetched data
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors
      });
  }, []); 

  return (
    <div style={styles.cardContainer}>
      <h1 style={styles.header}>Changelog Entries</h1>
      <div style={styles.entryContainer}>
        <ul style={styles.entryList}>
          {entries.slice().reverse().map((entry, index) => (
            <li key={entry.id} style={{ ...styles.entryItem, backgroundColor: index % 2 === 0 ? '#cddef2' : '#f1f1f1' }}>
              {/* Split the entry text into different parts */}
              {entry.entry.split(/(User ID: \d+)/).map((part, index) => {
                let textStyle = {}; // Define an empty object to hold the style for this part
                // Apply blue color to the user information part
                if (/User ID: \d+/.test(part)) {
                  textStyle.color = 'blue';
                } else {
                  // Default color for other parts
                  textStyle.color = 'inherit';
                }
                // Render the part with the applied style
                return <span key={index} style={textStyle}>{part}</span>;
              })}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
  
};

export default CardChangelog;