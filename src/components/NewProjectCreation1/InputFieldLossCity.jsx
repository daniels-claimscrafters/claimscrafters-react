import React from 'react';

const styles = {
  Input: {
    top: '1007px',
    left: '80px',
    width: '803px',
    height: '88px',
    padding: '0px 8px',
    border: '1px solid #ceced3',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: 'rgba(255,255,255,0.87)',
    color: '#1d1d1f',
    fontSize: '20px',
    fontFamily: 'Poppins',
    lineHeight: '26px',
    outline: 'none',
  },
};

const defaultProps = {
  text: 'Loss City',
};

const InputField = (props) => {
  return (
    <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
  );
};

export default InputField;