import React from 'react';

const styles = {
  Text: {
    color: '#000000',
    fontSize: '18px',
    fontFamily: 'Roboto',
    lineHeight: '23px',
    marginBottom: '10px',
  },
};

const defaultProps = {
  text: 'You will receive an email with instructions on how to reset your password shortly',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;