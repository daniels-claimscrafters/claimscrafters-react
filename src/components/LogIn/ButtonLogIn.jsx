import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '560px',
    left: '844px',
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
  },
};

const defaultProps = {
  label: 'Log in',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;