import React from 'react';

const styles = {
  Text: {
    color: '#24201d',
    fontSize: '40px',
    fontFamily: 'Raleway',
    lineHeight: '64px',
  },
};

const defaultProps = {
  text: 'You will have 24 hours to verify your account, after that you will need to request a new verification link .',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;