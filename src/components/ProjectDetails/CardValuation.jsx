// CardValuation.jsx
import React from 'react';

const styles = {
  Card: {
    top: '280px',
    left: '231px',
    width: '100%',
    height: '170px', // Keeping the original height
    backgroundColor: '#f0f0f0',
    borderRadius: '12px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    flex: '1',
    marginRight: '10px', // Add margin right for space between columns
  },
  firstColumn: {
    flex: '1',
    marginRight: '10px', // Add margin right for space between columns
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCard: {
    width: '90%', // Adjust width of the inner card as needed
    height: '90%', // Adjust height of the inner card as needed
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  text: {
    marginBottom: '5px',
  },
};

const CardValuation = (props) => {
  return (
    <div style={styles.Card}>
      <div style={styles.firstColumn}>
        <div style={styles.innerCard}>Card Content</div>
      </div>
      <div style={styles.column}>
        <div style={styles.headerText}>RCV</div>
        <div style={styles.text}>Suggested RCV Total:</div>
        <div style={styles.text}>Tax Rate:</div>
        <div style={styles.text}>Total RCV Tax:</div>
        <div style={styles.text}>RCV with Tax Total:</div>
      </div>
      <div style={styles.column}>
        <div style={styles.headerText}>ACV</div>
        <div style={styles.text}>Suggested ACV Total:</div>
        <div style={styles.text}>Tax Rate:</div>
        <div style={styles.text}>Total ACV Tax:</div>
        <div style={styles.text}>ACV with Tax Total:</div>
      </div>
      <div style={styles.column}>
        <div style={styles.headerText}>&nbsp;</div>
        <div style={styles.text}>Depreciating Years:</div>
        <div style={styles.text}>Total Depreciation:</div>
      </div>
    </div>
  );
};

export default CardValuation;


