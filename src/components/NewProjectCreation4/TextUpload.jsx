import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Poppins',
    lineHeight: '16px',
    marginTop: '10px',
    fontWeight: 'bold'
  },
};

const Text = (props) => {
  const { fileName } = props;
  return (
    <div style={styles.Text}>
      File Uploaded: {fileName}
    </div>
  );
};

export default Text;
