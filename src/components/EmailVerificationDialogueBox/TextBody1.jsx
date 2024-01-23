import React from 'react';

const styles = {
  Text: {
    color: '#24201d',
    fontSize: '39px',
    fontFamily: 'Raleway',
    lineHeight: '69px',
    margin: '10px',
  },
};

const defaultProps = {
  text: 'You\'ll need to confirm you have access to your email before you can start using ContentIQ contents valuation application.',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;