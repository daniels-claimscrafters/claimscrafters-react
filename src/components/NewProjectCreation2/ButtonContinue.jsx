import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '1323px',
    left: '1159px',
    width: '170px',
    height: '58px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#2a84ea',
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: '26px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Continue',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;