import React from 'react';

const styles = {
  Input: {
    top: '513px',
    left: '723px',
    width: '606px',
    height: '88px',
    padding: '0px 8px',
    border: '1px solid #ceced3',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#030303',
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: '26px',
    textTransform: 'capitalize',
    outline: 'none',
  },
};

const defaultProps = {
  text: 'Date of Loss (mm/dd/yyyy)',
};

const InputField = (props) => {
  return (
    <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
  );
};

export default InputField;