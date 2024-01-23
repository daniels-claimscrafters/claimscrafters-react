import React from 'react';

const styles = {
  Text: {
    color: '#24201d',
    fontSize: '39px',
    fontFamily: 'Raleway',
    lineHeight: '57px',
  },
};

const defaultProps = {
  text: 'This email may take a few minutes to arrive. Check the inbox for verify@claimscrafters.com',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;