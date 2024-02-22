// NPCLoadingScreen.jsx
import React from 'react';

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  popup: {
    backgroundColor: '#fff',
    padding: '100px',
    borderRadius: '8px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  image: {
    width: '300px', // Adjust as needed
    height: '300px', // Adjust as needed
    marginBottom: '30px',
    borderRadius: '8px',
    animation: 'scaleUpDown 2s ease-in-out infinite',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  '@keyframes scaleUpDown': {
    '0%': { transform: 'scale(1)' }, // Initial scale
    '50%': { transform: 'scale(1.2)' }, // Scale up to 1.2x size
    '100%': { transform: 'scale(1)' }, // Scale back to original size
  },
};


const NPCLoadingScreen = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <div style={styles.header}>
          <img src="https://assets.api.uizard.io/api/cdn/stream/616c0541-6abe-4fb7-aedb-96cdcde8c0bd.png" alt="Loading..." style={styles.image} />
          <h2 style={styles.title}>Loading...</h2>
        </div>
        {/* You can add additional content or animations here */}
      </div>
    </div>
  );
};

export default NPCLoadingScreen;