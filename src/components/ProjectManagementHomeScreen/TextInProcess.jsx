import React from 'react';

const styles = {
  Text: {
    color: 'rgb(154, 154, 154)',
    fontSize: '14px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: '18px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'In Process',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;