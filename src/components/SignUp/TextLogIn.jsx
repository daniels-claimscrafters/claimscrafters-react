import React from 'react';

const styles = {
  Text: {
    color: '#5d5d5b',
    fontSize: '14px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: '18px',
  },
};

const defaultProps = {
  text: 'Log in',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;