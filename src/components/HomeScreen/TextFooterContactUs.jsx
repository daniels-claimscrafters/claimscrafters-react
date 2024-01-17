import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Poppins',
    lineHeight: '23px',
  },
};

const defaultProps = {
  text: 'Contact Us',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;