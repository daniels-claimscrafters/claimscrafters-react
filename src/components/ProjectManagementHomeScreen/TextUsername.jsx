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
    color: '#000000',
    fontSize: '14px',
    fontFamily: 'Roboto',
    lineHeight: '16px',
  },
};

export default TextUsername;