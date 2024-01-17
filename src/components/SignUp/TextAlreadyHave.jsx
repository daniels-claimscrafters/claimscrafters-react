import React from 'react';

const styles = {
  Text: {
    color: '#5d5d5b',
    fontSize: '14px',
    fontFamily: 'Poppins',
    lineHeight: '18px',
    textAlign: 'right',
  },
};

const defaultProps = {
  text: 'Already have an account?',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;