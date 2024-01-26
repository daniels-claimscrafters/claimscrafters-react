import React from 'react';

const styles = {
  Text: {
    color: '#080a0b',
    fontSize: '48px',
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: '56px',
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '20px',
  },
};

const defaultProps = {
  text: 'Sign up',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;