import React, { useState } from 'react';
import { isValidPhoneNPC } from '../../validationUtils'

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
  text: 'Sales Tax (%)',
};

const InputFieldSalesTax = (props) => {
  const { value, onChange } = props;
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    console.log(`InputFieldSalesTax - New value: ${newValue}`);
    onChange('salesTax', newValue);
    setErrorMessage(''); // Clear error message when the user starts typing
  };

  const handleBlur = () => {
    const validationError = isValidPhoneNPC(value);
    if (validationError) {
      console.log(`InputFieldPhone - Validation error: ${validationError}`);
      setErrorMessage(validationError);
    }
    else {
      console.log('ok');
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