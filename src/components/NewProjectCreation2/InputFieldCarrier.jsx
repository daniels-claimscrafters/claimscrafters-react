import React from 'react';

const styles = {
  Input: {
    top: '513px',
    left: '83px',
    width: '606px',
    height: '88px',
    padding: '0px 8px',
    border: '1px solid #ceced3',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: '20px',
    fontFamily: 'Poppins',
    lineHeight: '26px',
    textTransform: 'capitalize',
    outline: 'none',
  },
};

const defaultProps = {
  text: 'Carrier',
};

const InputField = (props) => {
  return (
    <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
  );
};

export default InputField;