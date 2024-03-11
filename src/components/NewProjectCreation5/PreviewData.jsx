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
    console.log(excelData);
    const convertExcelDataToWorkbook = () => {
      try {
        const arrayBuffer = excelData; // Assuming excelData is already in arrayBuffer format
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        return workbook;
      } catch (err) {
        setError('Error reading Excel data');
        console.error('Error reading Excel data', err);
        return null;
      }
    };
  
    // Convert excelData to workbook
    const workbook = convertExcelDataToWorkbook(excelData);
  
    if (workbook) {
      // Extract worksheet names
      const worksheetNames = workbook.SheetNames;
      setWorksheetOptions(worksheetNames);
  
      // Set selected worksheet to the first worksheet in the workbook
      const firstSheetName = workbook.SheetNames[0];
      setSelectedWorksheet(firstSheetName);
  
      // Extract data from the first sheet
      const ws = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });

      const genericColumnHeaders = jsonData[0].map((header, index) => `Column ${String.fromCharCode(65 + index)}`);
const formattedData = jsonData.slice(1).map((row) => {
  const formattedRow = {};
  genericColumnHeaders.forEach((header, index) => {
    formattedRow[header] = row[index];
  });
  return formattedRow;
});
      
      // Set the formatted data as tableData
      console.log('Table Data:', formattedData);


      setTableData(formattedData);
    }
  }, [excelData]);
  

  // Example array variable for table data
  useEffect(() => {
    // Adjusted exampleTableData with 6 elements per row
    const exampleTableData = [
      { 
        id: 1, 
        name: 'John', 
        age: 30, 
        city: 'New York', 
        country: 'USA', 
        occupation: 'Engineer', 
        hobby: 'Reading', 
        pet: 'Dog', 
        favoriteFood: 'Pizza', 
        language: 'English', 
        sport: 'Basketball', 
        university: 'Harvard', 
        degree: 'Computer Science', 
        experience: '5 years', 
        skill: 'JavaScript', 
        certification: 'AWS Certified', 
        project: 'React app', 
        team: 'Dev Team' 
      },
      { 
        id: 2, 
        name: 'Jane', 
        age: 25, 
        city: 'Los Angeles', 
        country: 'USA', 
        occupation: 'Teacher', 
        hobby: 'Painting', 
        pet: 'Cat', 
        favoriteFood: 'Sushi', 
        language: 'Spanish', 
        sport: 'Tennis', 
        university: 'Stanford', 
        degree: 'Mathematics', 
        experience: '3 years', 
        skill: 'Python', 
        certification: 'Cisco Certified', 
        project: 'Data Analysis', 
        team: 'Analytics Team' 
      },
      { 
        id: 3, 
        name: 'Doe', 
        age: 40, 
        city: 'Chicago', 
        country: 'USA', 
        occupation: 'Doctor', 
        hobby: 'Cooking', 
        pet: 'Bird', 
        favoriteFood: 'Steak', 
        language: 'French', 
        sport: 'Soccer', 
        university: 'MIT', 
        degree: 'Medicine', 
        experience: '10 years', 
        skill: 'Java', 
        certification: 'MCSE', 
        project: 'Medical Research', 
        team: 'Research Team' 
      }
      // Add more objects for each row here
    ];
    

    
  }, []);

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
  <select style={styles.inputField} value={selectedDescription} onChange={(e) => setSelectedDescription(e.target.value)}>
    <option value="">Please select</option>
    {columnNames.map((columnName, index) => (
      <option key={index} value={columnName}>{columnName}</option>
    ))}
  </select>
  <select style={styles.inputField} value={selectedQuantity} onChange={(e) => setSelectedQuantity(e.target.value)}>
    <option value="">Please select</option>
    {columnNames.map((columnName, index) => (
      <option key={index} value={columnName}>{columnName}</option>
    ))}
  </select>
  <select style={styles.inputField} value={selectedRoom} onChange={(e) => setSelectedRoom(e.target.value)}>
    <option value="">Please select</option>
    {columnNames.map((columnName, index) => (
      <option key={index} value={columnName}>{columnName}</option>
    ))}
  </select>
  <select style={styles.inputField} value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
    <option value="">Please select</option>
    {columnNames.map((columnName, index) => (
      <option key={index} value={columnName}>{columnName}</option>
    ))}
  </select>
</div>

      <div style={{ ...styles.headerRow, width: '90%', justifyContent: 'flex-start' }}>
        <div style={styles.columnHeader}>Description</div>
        <div style={styles.columnHeader}>Quantity</div>
        <div style={styles.columnHeader}>Room</div>
        <div style={styles.columnHeader}>Item</div>
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



