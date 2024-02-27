// InputFieldExpiration.jsx
import React, { useState } from 'react';
import { isValidExpirationDate } from '../../validationUtils';

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

const InputFieldExpiration = ({ onChange }) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange('expiration', newValue); // Pass the identifier and the new value to the parent component
    setErrorMessage('');
  };

  const handleBlur = () => {
    const isValid = isValidExpirationDate(value);
    if (!isValid) {
      setErrorMessage('Invalid expiration date');
    }
  };

  return (
    <div>
      <input
        style={styles.Input}
        placeholder="MM / YY"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errorMessage && <div style={styles.ErrorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default InputFieldExpiration;
