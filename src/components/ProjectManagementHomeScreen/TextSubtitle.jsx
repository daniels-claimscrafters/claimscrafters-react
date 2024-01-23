import React from 'react';

const styles = {
  Text: {
    color: '#1d1d1f',
    fontSize: '24px',
    fontFamily: 'Poppins',
    lineHeight: '34px',
  },
};

const defaultProps = {
  text: 'Welcome to Claims Crafters!',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;