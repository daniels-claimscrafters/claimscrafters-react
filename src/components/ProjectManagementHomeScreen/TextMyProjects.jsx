import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: '32px',
    marginBottom: '20px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'My Projects',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;