// NPCLoadingScreen.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const styles = {
  overlay: {
    position: 'fixed',
    top: '50%', // Set to 50% from the top
    left: '50%', // Set to 50% from the left
    transform: 'translate(-50%, -50%)', // Translate -50% of the width and height to center it,
    width: '50%',
    height: '50%',
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
    borderRadius: '200px',
    animation: 'scaleUpDown 2s ease-in-out infinite',
  },
  title: {
    margin: 0,
    color: '#030303',
    fontSize: '24px',
    fontFamily: 'Poppins',
    fontWeight: 600,
  },
};


const NPCLoadingScreen = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update rotation state to create spinning effect
      setRotation(prevRotation => (prevRotation + 1) % 360);
    }, 20); // Adjust the interval as needed for desired spinning speed

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Run effect only once on component mount

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <div style={styles.header}>
          <motion.img
            src="https://assets.api.uizard.io/api/cdn/stream/616c0541-6abe-4fb7-aedb-96cdcde8c0bd.png"
            alt="Loading..."
            style={{ ...styles.image, transform: `rotate(${rotation}deg)` }}
          />
          <h2 style={styles.title}>Thank you for your purchase. We are currently evaluating your contents with ContentIQ. Depending on the size of your claim, this can take anywhere from a few seconds to 5 minutes. You will be automatically redirected once complete. Thank you for your patience.</h2>
        </div>
        {/* You can add additional content or animations here */}
      </div>
    </div>
  );
};

export default NPCLoadingScreen;