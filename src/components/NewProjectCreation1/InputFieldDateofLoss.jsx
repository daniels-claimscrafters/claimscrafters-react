// InputFieldDateOfLoss.jsx
import React, { useState } from 'react';
import { isValidDateFormat } from '../../validationUtils';

const styles = {
  Input: {
    top: '513px',
    left: '723px',
    width: '606px',
    height: '88px',
    padding: '0px 8px',
    border: '1px solid #ceced3',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#030303',
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: '26px',
    textTransform: 'capitalize',
    outline: 'none',
  },
  ErrorMessage: {
    color: 'red',
    marginTop: '5px',
    fontSize: '14px',
  },
};

const defaultProps = {
  text: 'Date of Loss (mm/dd/yyyy)',
};

const InputFieldDateofLoss = (props) => {
  const { value, onChange } = props;
  const [validationError, setValidationError] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    console.log(`InputFieldDateofLoss - New value: ${newValue}`);
    onChange('dateOfLoss', newValue);

    // Clear validation error when user starts typing
    setValidationError('');
  };

  const handleBlur = () => {
    // Check if value is defined before validation
    if (value !== undefined) {
      const isValid = isValidDateFormat(value);
      if (!isValid) {
        console.log(`InputFieldDateofLoss - Validation error: Invalid date format`);
        // Set the validation error
        setValidationError('Invalid date format');
      } else {
        // Clear the validation error if there is no error
        console.log('InputFieldDateofLoss - Validation passed');
        setValidationError('');
      }
    }
  };


  return (
    <div>
      <input
        style={styles.Input}
        placeholder={props.text ?? defaultProps.text}
        value={value || ''}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {validationError && (
        <div style={styles.ErrorMessage}>{validationError}</div>
      )}
    </div>
  );
};

export default InputFieldDateofLoss;
