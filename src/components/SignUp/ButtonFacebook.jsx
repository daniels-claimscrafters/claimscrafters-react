import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '100px',
    left: '1026px',
    width: '211px',
    height: '65px',
    padding: '0px 8px',
    border: '3px solid #2a84ea',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    color: '#1d1d1f',
    fontSize: '14px',
    fontFamily: 'Poppins',
    lineHeight: '16px',
    textAlign: 'right',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Sign in with Facebook',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;