import React from 'react';

const styles = {
  Text: {
    color: '#222222',
    fontSize: '12px',
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: '23px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Legal Disclaimer',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;