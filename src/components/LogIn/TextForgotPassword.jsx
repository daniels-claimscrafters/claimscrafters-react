import React from 'react';

const styles = {
  Text: {
    color: '#1d1d1f',
    fontSize: '14px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: '18px',
    textAlign: 'right',
  },
};

const defaultProps = {
  text: 'Forgot your password?',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;