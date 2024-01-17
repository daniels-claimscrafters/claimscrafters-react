import React from 'react';

const styles = {
  Text: {
    color: '#023f81',
    fontSize: '24px',
    fontFamily: 'Poppins',
    fontWeight: '500',
    lineHeight: '31px',
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