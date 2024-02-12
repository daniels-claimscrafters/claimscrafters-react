// InputFieldCVV.jsx
import React, { useState } from 'react';
import { isValidCVV } from '../../validationUtils';

const styles = {
  Input: {
    top: '463px',
    left: '1121px',
    width: '255px',
    height: '48px',
    padding: '0px 8px',
    border: '1px solid #ceced3',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: 'rgba(255,255,255,0.87)',
    color: '#1d1d1f',
    fontSize: '14px',
    fontFamily: 'Poppins',
    lineHeight: '18px',
    outline: 'none',
    marginBottom: '40px'
  },
  ErrorMessage: {
    color: 'red',
    marginTop: '2px',
    fontSize: '14px',
  },
};

const InputFieldCVV = ({ text = '***', onChange }) => {
  const [value, setValue] = useState(text);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue); // Pass the value directly to the parent component
    setErrorMessage('');
  };

  const handleBlur = () => {
    const isValid = isValidCVV(value);
    if (!isValid) {
      setErrorMessage('Invalid CVV');
    }
  };

  return (
    <div>
    <input
      style={styles.Input}
      placeholder={text}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errorMessage && <div style={styles.ErrorMessage}>{errorMessage}</div>}
  </div>
  );
};

export default InputFieldCVV;