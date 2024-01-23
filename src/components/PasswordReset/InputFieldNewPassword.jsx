import React from 'react';

const styles = {
  Input: {
    top: '391px',
    left: '506px',
    width: '296px',
    height: '47px',
    padding: '0px 8px',
    border: '1px solid #000000',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.16)',
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: '14px',
    fontFamily: 'Roboto',
    lineHeight: '24px',
    outline: 'none',
    marginBottom: '10px',
  },
};

const defaultProps = {
  text: 'New Password',
};

const InputField = (props) => {
  return (
    <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
  );
};

export default InputField;