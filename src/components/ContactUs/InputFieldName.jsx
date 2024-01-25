import React from 'react';

const styles = {
  Input: {
    top: '434px',
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
    marginBottom: '10px'
  },
};

const defaultProps = {
  text: 'Full Name',
};

const InputField = ({ text, value, onChange }) => {
  const handleChange = (e) => {
    console.log('InputField value:', e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      style={styles.Input}
      placeholder={text ?? defaultProps.text}
      value={value}
      onChange={handleChange}
    />
  );
};

export default InputField;