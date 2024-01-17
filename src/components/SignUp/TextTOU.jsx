import React from 'react';

const styles = {
  Text: {
    color: '#2a84ea',
    fontSize: '14px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: '18px',
  },
};

const defaultProps = {
  text: 'Terms of Use',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;