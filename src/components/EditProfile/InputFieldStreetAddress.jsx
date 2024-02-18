// InputFieldStreetAddress.jsx

import React from 'react';

const styles = {
  Input: {
    top: '256px',
    left: '580px',
    width: '242px',
    height: '36px',
    padding: '0px 8px',
    border: '1px solid #ededed',
    boxSizing: 'border-box',
    borderRadius: '3px',
    backgroundColor: '#fcfdff',
    color: '#929699',
    fontSize: '14px',
    fontFamily: 'Poppins',
    lineHeight: '18px',
    outline: 'none',
  },
};

const InputFieldStreetAddress = ({ onChange }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    console.log("Street Address:", value); // Added console.log statement
    onChange(value);
  };

  return (
    <input type="text" placeholder="Enter your street address" style={styles.Input} onChange={handleChange} />
  );
};

export default InputFieldStreetAddress;
