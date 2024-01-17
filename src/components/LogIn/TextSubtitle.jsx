import React from 'react';

const styles = {
  Text: {
    color: '#5d5d5b',
    fontSize: '14px',
    fontFamily: 'Poppins',
    lineHeight: '18px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Enter your details to start valuing your contens',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;