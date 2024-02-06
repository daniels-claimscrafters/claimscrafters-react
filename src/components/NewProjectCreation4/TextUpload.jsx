import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '12px',
    fontFamily: 'Poppins',
    lineHeight: '16px',
  },
};

const defaultProps = {
  text: 'Excel File formats allowed: .xls, .xlsx',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;