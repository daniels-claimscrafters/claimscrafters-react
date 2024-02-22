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
  const [confirmDisabled, setConfirmDisabled] = useState(true);

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
  
      const columnOptions = Array.from(columns).map(column => ({
        label: `Column ${column}`,
        value: column,
      }));
  
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
      setConfirmDisabled(false); // Enable the confirm button
    }
  }, [selectedDescription, selectedQuantity, selectedRoom, selectedItem, excelData]);

  const getColumnValues = (sheet, column) => {
    return Object.keys(sheet)
      .filter(key => key.startsWith(column) && key !== '!ref')
      .map(key => sheet[key].v);
  };

  const handleColumnConfirmation = () => {
    onColumnsSelected(dataToPreview);
  };

  const deleteFirstRow = () => {
    setDataToPreview(prevDataToPreview => {
      const newData = [...prevDataToPreview];
      newData.shift(); // Remove the first row
      return newData;
    });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <div>
        <label>Select Description Column: </label>
        <select value={selectedDescription} onChange={(e) => setSelectedDescription(e.target.value)}>
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
        <select value={selectedQuantity} onChange={(e) => setSelectedQuantity(e.target.value)}>
          <option value="">Select Column</option>
          {allColumnOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Select Room Column (Optional): </label>
        <select value={selectedRoom} onChange={(e) => setSelectedRoom(e.target.value)}>
          <option value="">None</option>
          {allColumnOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Select Item Column (Optional): </label>
        <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
          <option value="">None</option>
          {allColumnOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {dataToPreview.length > 0 ? (
        <div>
          <h2>Preview Data</h2>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                {selectedRoom && <th>Room</th>}
                {selectedItem && <th>Item</th>}
              </tr>
            </thead>
            <tbody>
              {dataToPreview.map((row, index) => (
                <tr key={index}>
                  <td>{row.description}</td>
                  <td>{row.quantity}</td>
                  {selectedRoom && <td>{row.room}</td>}
                  {selectedItem && <td>{row.item}</td>}
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={deleteFirstRow}>Delete First Row</button>
          <button onClick={handleColumnConfirmation} disabled={confirmDisabled}>
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
