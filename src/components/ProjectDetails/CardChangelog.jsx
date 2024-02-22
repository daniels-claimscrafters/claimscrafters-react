import React, { useState, useEffect } from 'react';

const styles = {
  cardContainer: {
    width: '500px',
    height: '300px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f1f1f1',
    borderRadius: '26px',
    border: '1px solid #505050',
    padding: '20px',
    overflow: 'hidden',
  },
  entryContainer: {
    height: '100%',
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
  },
};

const CardChangelog = ({ projectDetails }) => {
  const [entries, setEntries] = useState([]);

  const projectId = projectDetails.project.id;
  console.log('id', projectId)

  useEffect(() => {
    fetch(`https://f133-2600-1010-b040-a157-f048-6b47-d705-e729.ngrok-free.app/npc/project/getchangelog?projectId=${projectId}`, {
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
      <h1>Changelog Entries</h1>
      <div style={styles.entryContainer}>
        <ul style={styles.entryList}>
          {entries.map(entry => (
            <li key={entry.id} style={styles.entryItem}>
              {entry.entry}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardChangelog;