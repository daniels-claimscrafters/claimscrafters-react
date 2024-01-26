import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Poppins',
    lineHeight: '21px',
    textAlign: 'center',
    marginBottom: '20px',
  },
};

const defaultProps = {
  text: 'Or, enter your details to create an account.',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;