import React from 'react';

const styles = {
  Text: {
    color: '#222222',
    fontSize: '24px',
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: '31px',
  },
};

const defaultProps = {
  text: 'Insured First Name',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;