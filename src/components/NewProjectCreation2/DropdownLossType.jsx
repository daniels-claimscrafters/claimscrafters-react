import React from 'react';

const styles = {
  Dropdown: {
    cursor: 'pointer',
    top: '509px',
    left: '719px',
    width: '626px',
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
  label: 'Loss Type',
  values: [
    'Fire',
    'Water',
    'Storm',
    'Mold',
    'Bio',
    'Other',
  ],
};

const Dropdown = (props) => {
  return (
    <select style={styles.Dropdown} defaultValue="">
      <option value="" disabled hidden>{props.label ?? defaultProps.label}</option>
      {(props.values ?? defaultProps.values).map((value) => (
        <option value={value} key={value}>{value}</option>
      ))}
    </select>
  );
};

export default Dropdown;