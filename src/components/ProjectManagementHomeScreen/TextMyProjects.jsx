import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: '32px',
    paddingTop: '10px',
    paddingBottom: '10px',
    textAlign: 'center',
    height: '5%',
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