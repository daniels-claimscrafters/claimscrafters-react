import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: '26px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: '3',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;