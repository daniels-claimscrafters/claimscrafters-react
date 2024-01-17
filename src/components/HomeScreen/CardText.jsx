// Text.jsx

import React from 'react';

const styles = {
  text: {
    color: '#ffffff',
    fontSize: '45px',
    fontFamily: 'Work Sans',
    fontWeight: '500',
    lineHeight: '59px',
  },
};

const defaultProps = {
  text: 'Crafting Contents Value with Al Intelligence',
};

const Text = (props) => {
  return (
    <div style={styles.text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
