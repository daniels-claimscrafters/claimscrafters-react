import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '913px',
    left: '848px',
    width: '412px',
    height: '53px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#2a84ea',
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: '21px',
    outline: 'none',
    marginTop: '20px'
  },
  DisabledButton: {
    backgroundColor: '#999999',
    cursor: 'not-allowed',
  }
};

const defaultProps = {
  label: 'Send message',
};

const Button = (props) => {
  const { label, onClick, disabled } = props;

  const buttonStyle = disabled ? { ...styles.Button, ...styles.DisabledButton } : styles.Button;

  return (
    <button style={buttonStyle} onClick={onClick} disabled={disabled}>
      {label ?? defaultProps.label}
    </button>
  );
};

export default Button;