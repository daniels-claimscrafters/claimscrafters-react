import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const PreviewData = ({ excelData, onColumnsSelected }) => {
  const [selectedWorksheet, setSelectedWorksheet] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [error, setError] = useState('');
  const [worksheetOptions, setWorksheetOptions] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [columnNames, setColumnNames] = useState([]);

  useEffect(() => {
    const convertExcelDataToWorkbook = () => {
      try {
        const arrayBuffer = excelData;
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        return workbook;
      } catch (err) {
        console.error('Error reading Excel data', err);
        return null;
      }
    };

    const workbook = convertExcelDataToWorkbook(excelData);

    if (workbook) {
      const worksheetNames = workbook.SheetNames;
      setWorksheetOptions(worksheetNames);

      const firstSheetName = workbook.SheetNames[0];
      setSelectedWorksheet(firstSheetName);

      const ws = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });

      const genericColumnHeaders = jsonData[0].map((header, index) => `Column ${String.fromCharCode(65 + index)}`);
      const formattedData = jsonData.map((row, rowIndex) => {
        const formattedRow = {};
        if (rowIndex === 0) {
          // Treat the first row as headers
          row.forEach((header, index) => {
            formattedRow[header] = `Column ${String.fromCharCode(65 + index)}`;
          });
        } else {
          // Treat subsequent rows as data
          genericColumnHeaders.forEach((header, index) => {
            formattedRow[header] = row[index];
          });
        }
        return formattedRow;
      });

      setTableData(formattedData);
    }
  }, [excelData]);

  useEffect(() => {
    if (!selectedWorksheet) return;

    const workbook = XLSX.read(excelData, { type: 'array' });
    const ws = workbook.Sheets[selectedWorksheet];
    const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });

    const genericColumnHeaders = jsonData[0].map((header, index) => `Column ${String.fromCharCode(65 + index)}`);
    const formattedData = jsonData.map((row, rowIndex) => {
      const formattedRow = {};
      if (rowIndex === 0) {
        // Treat the first row as headers
        row.forEach((header, index) => {
          formattedRow[header] = `Column ${String.fromCharCode(65 + index)}`;
        });
      } else {
        // Treat subsequent rows as data
        genericColumnHeaders.forEach((header, index) => {
          formattedRow[header] = row[index];
        });
      }
      return formattedRow;
    });

    setTableData(formattedData);
  }, [selectedWorksheet, excelData]);

  
  
  return (
    <div style={styles.cardContainer}>
      <div style={styles.inputRow}>
      <select value={selectedWorksheet} onChange={(e) => setSelectedWorksheet(e.target.value)}>
        {worksheetOptions.map((worksheet, index) => (
          <option key={index} value={worksheet}>{worksheet}</option>
        ))}
      </select>
    </div>
    <div style={styles.inputRow}>
  <label htmlFor="selectedDescription">Description:</label>
  <select id="selectedDescription" style={styles.inputField} value={selectedDescription} onChange={(e) => setSelectedDescription(e.target.value)}>
    <option value="">Please select</option>
    {columnNames.map((columnName, index) => (
      <option key={index} value={columnName}>{columnName}</option>
    ))}
  </select>
  
  <label htmlFor="selectedQuantity">Quantity:</label>
  <select id="selectedQuantity" style={styles.inputField} value={selectedQuantity} onChange={(e) => setSelectedQuantity(e.target.value)}>
    <option value="">Please select</option>
    {columnNames.map((columnName, index) => (
      <option key={index} value={columnName}>{columnName}</option>
    ))}
  </select>
  
  <label htmlFor="selectedRoom">Room:</label>
  <select id="selectedRoom" style={styles.inputField} value={selectedRoom} onChange={(e) => setSelectedRoom(e.target.value)}>
    <option value="">Please select</option>
    {columnNames.map((columnName, index) => (
      <option key={index} value={columnName}>{columnName}</option>
    ))}
  </select>
  
  <label htmlFor="selectedItem">Item:</label>
  <select id="selectedItem" style={styles.inputField} value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
    <option value="">Please select</option>
    {columnNames.map((columnName, index) => (
      <option key={index} value={columnName}>{columnName}</option>
    ))}
  </select>
</div>


      <div style={styles.tableBody}>
        {tableData.map((row, rowIndex) => (
          <div key={rowIndex} style={styles.tableRow}>
            {Object.values(row).map((cell, cellIndex) => (
              <div key={cellIndex} style={styles.tableCell}>{cell}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
  
  
  
};

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10px',
  },
  inputField: {
    marginRight: '10px',
  },
  tableContainer: {
    width: '90%',
    marginTop: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  headerRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  columnHeader: {
    flex: 1,
    padding: '10px',
    maxWidth: '150px', // Adjust the width as needed
    textAlign: 'left',
    fontWeight: 'bold',
    border: '1px solid #ccc',
  },
  tableBody: {
    overflow: 'auto', // Enable overflow handling
    maxWidth: '90%', // Set the max width to 90%
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  tableCell: {
    padding: '10px',
    textAlign: 'left',
    border: '1px solid #ccc',
    minWidth: '150px', // Fixed width for the table cell
    height: '30px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  
  
};

export default PreviewData;



