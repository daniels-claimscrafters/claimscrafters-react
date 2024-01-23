import React from 'react';

const styles = {
  Text: {
    color: '#24201d',
    fontSize: '79px',
    fontFamily: 'Raleway',
    fontWeight: 700,
    lineHeight: '131px',
  },
};

const defaultProps = {
  text: 'Your message has been sent',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;