import React from 'react';

const styles = {
  Input: {
    top: '558px',
    left: '759px',
    width: '468px',
    height: '48px',
    padding: '0px 8px',
    border: '1px solid #ceced3',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: 'rgba(255,255,255,0.87)',
    color: '#1d1d1f',
    fontSize: '14px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: '18px',
    outline: 'none',
  },
};

const defaultProps = {
  text: 'Password',
};

const InputField = (props) => {
  const { value, onChange, type, text } = props;

  return (
    <input
      style={styles.Input}
      type={type || 'text'}  // Default to 'text', but can be overridden for password fields
      placeholder={text ?? defaultProps.text}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;