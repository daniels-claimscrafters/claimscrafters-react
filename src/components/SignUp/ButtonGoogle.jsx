import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '100px',
    left: '240px',
    width: '211px',
    height: '65px',
    padding: '0px 8px',
    border: '3px solid #2b84ea',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    color: '#040000',
    fontSize: '14px',
    fontFamily: 'Poppins',
    lineHeight: '16px',
    textAlign: 'right',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Sign in with Google',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;