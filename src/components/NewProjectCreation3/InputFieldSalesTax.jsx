import React, { useState } from 'react';
import { isValidSalesTax } from '../../validationUtils';

const styles = {
  Input: {
    top: '543px',
    left: '80px',
    width: '188px',
    height: '88px',
    padding: '0px 8px',
    border: '1px solid #ceced3',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: '20px',
    fontFamily: 'Poppins',
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
  text: 'Sales Tax',
};

const InputFieldSalesTax = (props) => {
  const { value, onChange } = props;
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    let newValue = e.target.value;
  
    // Replace non-digit and non-decimal point characters with empty string
    newValue = newValue.replace(/[^\d.]/g, '');
  
    // Limit input to two digits after the decimal point
    const decimalIndex = newValue.indexOf('.');
    if (decimalIndex !== -1) {
      const decimalPart = newValue.substring(decimalIndex + 1);
      if (decimalPart.length > 2) {
        newValue = newValue.slice(0, decimalIndex + 3);
      }
    }
  
    console.log(`InputFieldSalesTax - New value: ${newValue}`);
    onChange('salesTax', newValue);
    setErrorMessage(''); // Clear error message when the user starts typing
  };

  const handleBlur = () => {
    const isValid = isValidSalesTax(value);
    if (!isValid) {
      console.log(`InputFieldSalesTax - Validation error: Invalid sales tax format`);
      setErrorMessage(`Invalid sales tax format. Only enter a number. No % sign`);
    } else {
      console.log('InputFieldSalesTax - Validation successful');
      setErrorMessage('');
    }
  };  

  return (
    <div>
      <input
        style={styles.Input}
        placeholder={props.text ?? defaultProps.text}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errorMessage && (
        <div style={styles.ErrorMessage}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default InputFieldSalesTax;