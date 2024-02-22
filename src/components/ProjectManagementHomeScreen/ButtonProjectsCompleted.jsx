// ButtonProjectsCompleted.jsx

import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '193px',
    left: '1034px',
    width: '158px',
    height: '36px',
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
  },
};

const defaultProps = {
  label: 'Projects Completed',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;