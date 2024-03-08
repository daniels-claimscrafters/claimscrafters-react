import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '12px',
    fontFamily: 'Poppins',
    lineHeight: '16px',
    maxWidth: '50%',
    marginBottom: '10px',
    textAlign: 'center',
  },
};

const Text = () => {
  return (
    <div style={styles.Text}>
      <strong>Uploading Excel Data Instructions:</strong><br />
      <strong>1. Single Worksheet:</strong> Ensure that your Excel file contains only one worksheet (tab). Multiple tabs are not permitted.<br />
      <strong>2. Remove Any Leading Rows:</strong> Remove any rows above your actual data. The first row of your Excel sheet should contain the headers or titles of your data columns. Any rows above this should be deleted prior to uploading.<br />
      <strong>3. Data Format:</strong> Make sure your data is organized neatly in columns, with each column representing a specific data category or attribute (like Room, Item, Description and Qty).<br />
      <strong>4. Save as .xls or .xlsx:</strong> Only Excel files in the .xls or  .xlsx  format are compatible for the upload.<br />
      <strong>5. Upload:</strong> Once you've prepared your Excel file according to the above instructions, proceed to upload it using the provided interface.
    </div>
  );
};

export default Text;
