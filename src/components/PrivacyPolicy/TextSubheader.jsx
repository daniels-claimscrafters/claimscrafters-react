import React from 'react';

const styles = {
  Text: {
    color: '#000000',
    fontSize: '14px',
    fontFamily: 'Roboto',
    lineHeight: '16px',
    padding: '10px',
  },
};

const defaultProps = {
  text: 'Effective Date:  December 20, 2023',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;