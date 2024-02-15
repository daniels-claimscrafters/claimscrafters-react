import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '766px',
    left: '765px',
    width: '468px',
    height: '48px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#2a84ea',
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: '22px',
    outline: 'none',
    marginTop: '40px',
    marginBottom: '20px',
  },
};

const defaultProps = {
  label: 'Sign up',
};

const Button = ({ disabled, label }) => {
  const buttonStyles = {
    ...styles.Button,
    backgroundColor: disabled ? '#CCCCCC' : '#2a84ea',
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  return (
    <button style={buttonStyles} disabled={disabled}>
      {label ?? defaultProps.label}
    </button>
  );
};

export default Button;