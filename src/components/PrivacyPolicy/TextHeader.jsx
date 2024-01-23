import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '24px',
    fontFamily: 'Poppins',
    lineHeight: '31px',
    padding: '10px',
  },
};

const defaultProps = {
  text: 'PRIVACY POLICY',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;