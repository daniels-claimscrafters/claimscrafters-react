import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '46px',
    left: '1173px',
    width: '160px',
    height: '40px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#2a84ea',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Poppins',
    lineHeight: '16px',
    outline: 'none',
    marginTop: '10px',
    marginRight: '20px',
  },
};

const defaultProps = {
  label: 'Save',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;