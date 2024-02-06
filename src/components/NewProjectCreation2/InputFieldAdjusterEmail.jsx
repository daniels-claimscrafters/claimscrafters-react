import React, { useState } from 'react';
import { isValidEmailNPC } from '../../validationUtils';

const styles = {
  Input: {
    top: '838px',
    left: '719px',
    width: '626px',
    height: '88px',
    padding: '0px 8px',
    border: '1px solid #ceced3',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: 'rgba(255,255,255,0.87)',
    color: '#1d1d1f',
    fontSize: '20px',
    fontFamily: 'Poppins',
    lineHeight: '26px',
    outline: 'none',
  },
  ErrorMessage: {
    color: 'red',
    marginTop: '5px',
    fontSize: '14px',
  },
};

const defaultProps = {
  text: 'name@email.com',
};

const InputFieldEmail = (props) => {
  const { value, onChange } = props;
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    console.log(`InputFieldEmail - New value: ${newValue}`);
    onChange('adjusterEmail', newValue);
    setErrorMessage(''); // Clear error message when the user starts typing
  };

  const handleBlur = () => {
    const validationError = isValidEmailNPC(value);
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

export default InputFieldEmail;