import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const PreviewData = ({ excelData, onColumnsSelected }) => {
  console.log('PreviewData - Excel Data:', excelData);
  const [allColumnOptions, setAllColumnOptions] = useState([]);
  const [selectedDescription, setSelectedDescription] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [dataToPreview, setDataToPreview] = useState([]);
  const [error, setError] = useState('');
  

  useEffect(() => {
    console.log('useEffect in PreviewData triggered!');
  
    if (excelData && typeof excelData === 'object') {
      const arrayBufferContent = new Uint8Array(excelData);
      const workbook = XLSX.read(arrayBufferContent, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[firstSheetName];
  
      const columns = new Set(
        Object.keys(sheet)
          .filter(key => key !== '!ref' && /^[A-Z]/.test(key))
          .map(key => key[0])
      );
  
      const columnOptions = Array.from(columns).map(column => {
        // Construct the key of the cell directly underneath the current column
        const cellKey = column + '1'; // Assuming the data starts from the second row
        // Extract the value of the cell
        const cellValue = sheet[cellKey] ? sheet[cellKey].v : '';
        
        return {
          label: `Column ${column}`,
          value: column,
          cellValue: cellValue
        };
      });
  
      console.log('Columns in PreviewData:', columnOptions);
  
      setAllColumnOptions(columnOptions);
    } else {
      console.log('excelData is either undefined or not an object.');
    }
  }, [excelData]);

  useEffect(() => {
    if (selectedDescription && selectedQuantity) {
      const arrayBufferContent = new Uint8Array(excelData);
      const workbook = XLSX.read(arrayBufferContent, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[firstSheetName];
  
      const columnDescriptionValues = getColumnValues(sheet, selectedDescription);
      const columnQuantityValues = getColumnValues(sheet, selectedQuantity);
      const columnRoomValues = selectedRoom ? getColumnValues(sheet, selectedRoom) : [];
      const columnItemValues = selectedItem ? getColumnValues(sheet, selectedItem) : [];

      const combinedData = columnDescriptionValues.map((desc, index) => ({
        description: desc,
        quantity: columnQuantityValues[index],
        room: columnRoomValues[index] || '',
        item: columnItemValues[index] || '',
      }));
  
      setDataToPreview(combinedData);
      
    }
  }, [selectedDescription, selectedQuantity, selectedRoom, selectedItem, excelData]);

  const getColumnValues = (sheet, column) => {
    return Object.keys(sheet)
      .filter(key => key.startsWith(column) && key !== '!ref')
      .map(key => sheet[key].v);
  };

  const handleColumnConfirmation = () => {
    setError('');
    // Check if all quantities are integers
    const allIntegers = dataToPreview.every(row => Number.isInteger(row.quantity));
  
    if (allIntegers) {
      // If all quantities are integers, execute onColumnsSelected
      onColumnsSelected(dataToPreview);
    } else {
      // If not, render an error message
      setError("Quantity column must contain only numbers.");
    }
  };

  const deleteFirstRow = () => {
    setDataToPreview(prevDataToPreview => {
      const newData = [...prevDataToPreview];
      newData.shift(); // Remove the first row
      return newData;
    });
  };

  const ErrorMessage = ({ message }) => (
    <div style={styles.errorMessage}>
      {message}
    </div>
  );

  const styles = {
    cardContainer: {
      width: '1500px',
      
      height: '370px',
      margin: '0 auto',
      padding: '15px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      
      display: 'flex', // Activate flexbox
      flexDirection: 'column', // To stack items vertically
      alignItems: 'center', // Align items to the start of the cross axis (left)
    },
    flexContainer: {
      display: 'flex', // Activate flexbox
      flexDirection: 'row', // To lay out items horizontally
      justifyContent: 'space-between', // Distribute items evenly along the main axis
      flexWrap: 'wrap', // Allow items to wrap to the next line if necessary
      width: '90%',
      height: '80px'
    },
    selectContainer: {
      color: '#030303',
      fontSize: '18px',
      fontFamily: 'Poppins',
      maxWidth: '300px',
      alignItems: 'center'
    },
    selectLabel: {
      marginRight: '10px',
      fontWeight: 'bold',
    },
    select: {
      marginRight: '20px',
      padding: '5px',
      borderRadius: '10px',
      border: '1px solid #000000',
      color: '#030303',
      fontSize: '14px',
      fontFamily: 'Poppins',
      maxWidth: '300px'
    },
    previewTableContainer: {
      width: '100%',
      height: '300px', // Adjust the height as needed
      overflow: 'auto', // Enable scrolling
      display: 'flex', // Activate flexbox
      flexDirection: 'column', // To stack items vertically
      alignItems: 'center', // Align items to the center horizontally
    },
  
    previewTable: {
      borderCollapse: 'collapse',
      width: '100%',
      height: '100px',
      overflow: 'auto',
    },
    tableHeader: {
      backgroundColor: '#d9d9d9',
      borderBottom: '1px solid #ccc',
      fontWeight: 'bold',
      color: '#030303',
      fontSize: '18px',
      fontFamily: 'Poppins',
    },
    tableCell: {
      padding: '8px',
      border: '1px solid #000',
      color: '#030303',
      fontSize: '14px',
      fontFamily: 'Poppins',
    },
    previewButtonContainer: {
      display: 'flex',
      justifyContent: 'center', // Center items horizontally
      width: '100%',
    },
    previewButton: {
      marginTop: '10px',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: '#fff',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      marginRight: '10px',
      marginLeft: '10px',
    },
    disabledButton: {
      backgroundColor: '#ccc',
      cursor: 'not-allowed',
    },
    errorMessage: {
      color: 'red',
      margin: '10px 0',
      textAlign: 'center',
    },
    flexContainer2: {
      display: 'flex',
      justifyContent: 'center',
    },
  };
  
  return (
    <div style={styles.cardContainer}>
      <div style={styles.flexContainer}>
        <div style={styles.selectContainer}>
          <label style={styles.selectLabel}>Select Description Column: </label>
          <select style={styles.select} value={selectedDescription} onChange={(e) => setSelectedDescription(e.target.value)}>
            <option value="">Select Column</option>
            {allColumnOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label} ({option.cellValue})
              </option>
            ))}
          </select>
        </div>
  
        <div style={styles.selectContainer}>
          <label style={styles.selectLabel}>Select Quantity Column: </label>
          <select style={styles.select} value={selectedQuantity} onChange={(e) => setSelectedQuantity(e.target.value)}>
            <option value="">Select Column</option>
            {allColumnOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label} ({option.cellValue})
              </option>
            ))}
          </select>
        </div>
  
        <div style={styles.selectContainer}>
          <label style={styles.selectLabel}>Select Room Column (Optional): </label>
          <select style={styles.select} value={selectedRoom} onChange={(e) => setSelectedRoom(e.target.value)}>
            <option value="">None</option>
            {allColumnOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label} ({option.cellValue})
              </option>
            ))}
          </select>
        </div>
  
        <div style={styles.selectContainer}>
          <label style={styles.selectLabel}>Select Item Column (Optional): </label>
          <select style={styles.select} value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
            <option value="">None</option>
            {allColumnOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label} ({option.cellValue})
              </option>
            ))}
          </select>
        </div>
      </div>
  
      {dataToPreview.length > 0 ? (
        <div style={styles.previewTableContainer}>
          <table style={styles.previewTable}>
            <thead>
              <tr style={styles.tableHeader}>
                <th style={styles.tableCell}>Description</th>
                <th style={styles.tableCell}>Quantity</th>
                {selectedRoom && <th style={styles.tableCell}>Room</th>}
                {selectedItem && <th style={styles.tableCell}>Item</th>}
              </tr>
            </thead>
            <tbody>
              {dataToPreview.map((row, index) => (
                <tr key={index}>
                  <td style={styles.tableCell}>{row.description}</td>
                  <td style={styles.tableCell}>{row.quantity}</td>
                  {selectedRoom && <td style={styles.tableCell}>{row.room}</td>}
                  {selectedItem && <td style={styles.tableCell}>{row.item}</td>}
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <p style={{ textAlign: 'center' }}>No data available for preview.</p>
      </div>
      )}
      <div style={styles.previewButtonContainer}>
      <button style={styles.previewButton} onClick={deleteFirstRow}>Delete First Row</button>
    <button style={styles.previewButton} onClick={handleColumnConfirmation}>
      Confirm Columns
    </button>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {error && <ErrorMessage message={error} />}
    </div>
    </div>
    </div>
  );
};

export default PreviewData;
