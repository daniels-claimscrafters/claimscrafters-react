import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '19px',
    fontFamily: 'Poppins',
    lineHeight: '24px',
    maxWidth: '75%',
    marginBottom: '10px',
    textAlign: 'left',
  },
};

const Text = () => {
  return (
    <div style={styles.Text}>
      <strong>Uploading Excel Data Instructions:</strong><br />
      <strong>1. Remove Any Leading Rows:</strong> Remove any rows above your actual data. The first row of your Excel sheet should contain the headers or titles of your data columns. Any rows above this should be deleted prior to uploading.<br />
      <strong>2. Data Format:</strong> Make sure your data is organized neatly in columns, with each column representing a specific data category or attribute (like Room, Item, Description and Qty).<br />
      <strong>3. Save as .xls or .xlsx:</strong> Only Excel files in the .xls or  .xlsx  format are compatible for the upload.<br />
      <strong>4. Upload:</strong> Once you've prepared your Excel file according to the above instructions, proceed to upload it using the provided interface.
    </div>
  );
};

export default Text;
