import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Work Sans',
    fontWeight: 600,
    lineHeight: '21px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Sign In',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;