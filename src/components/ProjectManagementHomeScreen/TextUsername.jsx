import React from 'react';

const TextUsername = ({ userData }) => {
  return (
    <div style={styles.Text}>
      Hello, {userData && userData.firstName ? userData.firstName : '<User First Name>'}
    </div>
  );
};

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Roboto',
    lineHeight: '16px',
    marginTop: '5px'
  },
};

export default TextUsername;