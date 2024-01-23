import React from 'react';

const styles = {
  Text: {
    color: '#000000',
    fontSize: '18px',
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: '23px',
    marginBottom: '10px',
  },
};

const defaultProps = {
  text: 'Email',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;