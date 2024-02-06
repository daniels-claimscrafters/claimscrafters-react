// PreviewData.jsx
import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const PreviewData = ({ excelData, onColumnsSelected }) => {
  console.log('PreviewData - Excel Data:', excelData);
  const [allColumnOptions, setAllColumnOptions] = useState([]);
  const [selectedDescription, setSelectedDescription] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [dataToPreview, setDataToPreview] = useState([]);

  useEffect(() => {
    console.log('useEffect in PreviewData triggered!');
  
    if (excelData && typeof excelData === 'object') {
      // Convert ArrayBuffer to Uint8Array
      const arrayBufferContent = new Uint8Array(excelData);
  
      // Parse Excel data
      const workbook = XLSX.read(arrayBufferContent, { type: 'array' });
  
      // Get the first sheet
      const firstSheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[firstSheetName];
  
      // Extract unique column letters
      const columns = new Set(
        Object.keys(sheet)
          .filter(key => key !== '!ref' && /^[A-Z]/.test(key))
          .map(key => key[0])
      );
  
      // Convert unique column letters to options
      const columnOptions = Array.from(columns).map(column => ({
        label: `Column ${column}`,
        value: column,
      }));
  
      console.log('Columns in PreviewData:', columnOptions);
  
      setAllColumnOptions(columnOptions);
    } else {
      console.log('excelData is either undefined or not an object.');
      // Add any additional logging or actions for the else case if needed
    }
  }, [excelData]);

  useEffect(() => {
    // Check if both columns are selected
    console.log('All Column Options:', allColumnOptions);
    if (selectedDescription && selectedQuantity) {
      const arrayBufferContent = new Uint8Array(excelData);
      const workbook = XLSX.read(arrayBufferContent, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[firstSheetName];
  
      const columnDescriptionValues = Object.keys(sheet)
        .filter(key => key.startsWith(selectedDescription) && key !== '!ref')
        .map(key => sheet[key].v);
  
      const columnQuantityValues = Object.keys(sheet)
        .filter(key => key.startsWith(selectedQuantity) && key !== '!ref')
        .map(key => sheet[key].v);
  
      // Use functional update to access the most recent state
      setDataToPreview(prevDataToPreview => {
        const combinedData = columnDescriptionValues.map((desc, index) => ({
          description: desc,
          quantity: columnQuantityValues[index],
        }));
        return combinedData;
      });
    }
  }, [selectedDescription, selectedQuantity, excelData, allColumnOptions]);  

  const handleColumnConfirmation = () => {
    // Check if both columns are selected
    if (selectedDescription && selectedQuantity) {
      const arrayBufferContent = new Uint8Array(excelData);
      const workbook = XLSX.read(arrayBufferContent, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[firstSheetName];
  
      const columnDescriptionValues = Object.keys(sheet)
        .filter(key => key.startsWith(selectedDescription) && key !== '!ref')
        .map(key => sheet[key].v);
  
      const columnQuantityValues = Object.keys(sheet)
        .filter(key => key.startsWith(selectedQuantity) && key !== '!ref')
        .map(key => sheet[key].v);
  
      const combinedData = columnDescriptionValues.map((desc, index) => ({
        description: desc,
        quantity: columnQuantityValues[index],
      }));
  
      // Call the prop function with the selected columns' values
      onColumnsSelected(combinedData);
    }
  };

  return (
    <div>
      {/* Dropdowns to select columns */}
      <div>
        <label>Select Description Column: </label>
        <select onChange={(e) => setSelectedDescription(e.target.value)}>
          <option value="">Select Column</option>
          {allColumnOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Select Quantity Column: </label>
        <select onChange={(e) => setSelectedQuantity(e.target.value)}>
          <option value="">Select Column</option>
          {allColumnOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Display rows from the selected columns */}
      {dataToPreview.length > 0 ? (
        <div>
          <h2>Preview Data</h2>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {dataToPreview.map((row, index) => (
                <tr key={index}>
                  <td>{row.description}</td>
                  <td>{row.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleColumnConfirmation}>
        Confirm Selected Columns
      </button>
        </div>
      ) : (
        <p>No data available for preview.</p>
      )}
    </div>
  );
};

export default PreviewData;