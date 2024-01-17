import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '36px',
    fontFamily: 'Poppins',
    fontWeight: 800,
    lineHeight: '50px',
  },
};

const defaultProps = {
  text: 'Project Management',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;