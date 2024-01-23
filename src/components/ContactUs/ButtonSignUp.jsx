import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '31px',
    left: '1176px',
    width: '120px',
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
    marginRight: '10px',
  },
};

const defaultProps = {
  label: 'Sign up',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;