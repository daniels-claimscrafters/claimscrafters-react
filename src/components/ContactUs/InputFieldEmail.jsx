import React from 'react';

const styles = {
  Input: {
    top: '565px',
    left: '848px',
    width: '412px',
    height: '69px',
    padding: '0px 8px',
    border: '1px solid #ceced3',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: 'rgba(255,255,255,0.87)',
    color: '#1d1d1f',
    fontSize: '16px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: '21px',
    outline: 'none',
  },
};

const defaultProps = {
  text: 'Email address',
};

const InputField = (props) => {
  return (
    <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
  );
};

export default InputField;