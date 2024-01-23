import React from 'react';

const styles = {
  Text: {
    color: '#374151',
    fontSize: '39px',
    fontFamily: 'Raleway',
    lineHeight: '69px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
};

const defaultProps = {
  text: 'Thank you for reaching out to us! Your message has been successfully sent. We value your input and will get back to you as soon as possible. Keep an eye on your inbox for our response',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;