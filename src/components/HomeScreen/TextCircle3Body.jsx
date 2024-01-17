import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '19px',
    fontFamily: 'Noto Sans JP',
    lineHeight: '25px',
    textAlign: 'justify',
    padding: '10px',
  },
};

const defaultProps = {
  text: 'Once the Processing has been completed, a comprehensive assessment of the contens inventory value will be made available for the user to view, make changes if necessary  and download or share via email.',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;