import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Poppins',
    lineHeight: '23px',
    marginRight: '10px',
  },
};

const defaultProps = {
  text: 'Privacy Policy',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;