// CardContents.jsx

import React, { useState, useEffect } from 'react';
import Popup from './Popup';

const styles = {
  Card: {
    top: '465px',
    left: '41px',
    width: '100%',
    height: '440px',
    backgroundColor: '#f0f0f0',
    borderRadius: '12px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    overflowY: 'auto',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Center items vertically
    padding: '10px',
    borderBottom: '1px solid #ccc',
    
  },
  titleText: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    //marginLeft: '50px',
    minWidth: '200px', // Define a minimum width for each cell
    maxWidth: '300px',
    marginLeft: '30px'
  },
  headerItem: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    //marginLeft: '50px',
    minWidth: '300px', // Define a minimum width for each cell
    maxWidth: '300px',
  },
  icon: {
    marginRight: '10px', // Add space between icon and button
  },
  spreadsheet: {
    
    //padding: '10px',
    overflow: 'auto', // Add overflow to allow scrolling if content exceeds height
  },
  row: {
    display: 'flex',
    borderBottom: '1px solid #ccc',
    padding: '10px 0',
    boxSizing: 'border-box',
    
},
  bigCell: {
    display: 'flex',
    flex: '1', // Let each cell take up equal space initially
    minWidth: '250px', // Define a minimum width for each cell
    maxWidth: '300px', // Define a maximum width for each cell to prevent excessive expansion
    overflow: 'hidden', // Hide overflow content
    textOverflow: 'ellipsis', // Truncate text that overflows its container
    whiteSpace: 'nowrap', // Prevent text from wrapping to the next line
    justifyContent: 'center',
    color: '#030303',
    fontSize: '12px',
    fontFamily: 'Poppins',
    fontWeight: 600,
  },
  cell: {
    display: 'flex',
    flex: '1', // Let each cell take up equal space initially
    minWidth: '150px', // Define a minimum width for each cell
    maxWidth: '300px', // Define a maximum width for each cell to prevent excessive expansion
    overflow: 'hidden', // Hide overflow content
    textOverflow: 'ellipsis', // Truncate text that overflows its container
    whiteSpace: 'nowrap', // Prevent text from wrapping to the next line
    justifyContent: 'center',
    color: '#030303',
    fontSize: '12px',
    fontFamily: 'Poppins',
    fontWeight: 600,
  },
  bigInput: {
    display: 'flex',
  justifyContent: 'center',
  width: '200px',
  color: '#030303',
    fontSize: '12px',
    fontFamily: 'Poppins',
    fontWeight: 600,
  },
  input: {
    display: 'flex',
  justifyContent: 'center',
  width: '100px',
  color: '#030303',
    fontSize: '12px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    
  },
  Button: {
    cursor: 'pointer',
    borderRadius: '12px',
    backgroundColor: '#2a84ea',
    color: '#ffffff',
    fontSize: '15px',
    fontFamily: 'Poppins',
    fontWeight: 700,
    border: '0',
    width: '155px',
    height: '30px',
    marginRight: '30px'
  },
};

const CardContents = ({ projectDetails, setProjectDetails }) => {
  const [originalProjectDetails, setOriginalProjectDetails] = useState(null);
  const [userData, setUserData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');
  const [popupTextColor, setPopupTextColor] = useState('');
  

  useEffect(() => {
    // Store the original projectDetails when the component mounts
    if (!originalProjectDetails && projectDetails) {
      setOriginalProjectDetails(projectDetails);
      console.log('Original Project Details set:', projectDetails);
    }
  }, [projectDetails]);

  useEffect(() => {
    // Check if the user is authenticated
    const token = getTokenFromCookie();
    if (!token) {
      // User is not authenticated, redirect to login page
      //navigate('/login');
      console.log('cookie error')
    } else {
      // Fetch user data if user is authenticated
      fetchUserData(token);
    }
  }, []);

  // Function to retrieve token from cookie
  const getTokenFromCookie = () => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'token') {
        return value;
      }
    }
    return null;
  };
  
  const handleFieldChange = (index, fieldName, value) => {
    console.log(`Updating field ${fieldName} at index ${index} with value:`, value);
    // Update the projectDetails state with the new value
    const updatedProjectDetails = { ...projectDetails };
    updatedProjectDetails.project.spreadsheetData[index][fieldName] = value;
    setProjectDetails(updatedProjectDetails);
    
  };

  // Function to fetch user data
  const fetchUserData = async (token) => {
    try {
      const response = await fetch('https://f133-2600-1010-b040-a157-f048-6b47-d705-e729.ngrok-free.app/user', {
        method: 'GET',
        headers: {
          'ngrok-skip-browser-warning': '69420',
          Authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setUserData(data.user);
        console.log('Fetched user data:', data.user);
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const createChangelogEntry = async () => {
    try {
      // Assuming you have the necessary attributes available:
      const originalSpreadsheetData = originalProjectDetails.project.spreadsheetData;
console.log('Original Project Details:', originalSpreadsheetData);

const userFirstName = userData.firstName;
console.log('User First Name:', userFirstName);

const userLastName = userData.lastName;
console.log('User Last Name:', userLastName);

const userId = userData.id;
console.log('User ID:', userId);

// Retrieve projectId from props
const projectId = projectDetails.project.id;
console.log('Project ID:', projectId);

const updatedProjectDetails = projectDetails.project.spreadsheetData;;
console.log('Updated Project Details:', updatedProjectDetails);
  
      const response = await fetch('https://f133-2600-1010-b040-a157-f048-6b47-d705-e729.ngrok-free.app/npc/project/changelog', {
        method: 'POST',
        headers: {
          'ngrok-skip-browser-warning': '69420',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          originalSpreadsheetData,
          userFirstName,
          userLastName,
          userId,
          updatedProjectDetails,
          projectId
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        setPopupMessage('Project contents changed successfully');
        setPopupType('success');
        setPopupTextColor('green');
      } else {
        setPopupMessage('Failed to update project contents');
        setPopupType('error');
        setPopupTextColor('red');
      }

      setShowPopup(true);
      setTimeout(() => window.location.reload(), 1500);

    } catch (error) {
      console.error('Error creating changelog entry:', error);
      setPopupMessage('Failed to update project contents');
      setPopupType('error');
      setShowPopup(true);
      setTimeout(() => window.location.reload(), 1500);
    }
  };



  return (
    <div style={styles.Card}>
      <div style={styles.headerRow}>
        <div style={styles.titleText}>Contents Inventory</div>
        <div>
        <button 
            style={styles.Button} 
            onClick={createChangelogEntry} 
          >
            Save
          </button>
          <button style={styles.Button}>Download</button>
        </div>
      </div>
      <div style={styles.spreadsheet}>
        <div style={styles.row}>
          <div style={styles.cell}>Line</div>
          <div style={styles.cell}>Room</div>
<div style={styles.cell}>Item</div>
<div style={styles.bigCell}>Description</div>
<div style={styles.cell}>QTY</div>
<div style={styles.cell}>RCV High</div>
<div style={styles.cell}>RCV Low</div>
<div style={styles.cell}>RCV Avg (ea)</div>
<div style={styles.cell}>RCV (ext)</div>
<div style={styles.cell}>Sales Tax</div>
<div style={styles.cell}>Sales Tax Amount</div>
<div style={styles.cell}>RCV Total</div>
<div style={styles.cell}>Depreciation (%)</div>
<div style={styles.cell}>Dep Years</div>
<div style={styles.cell}>Dep Amount</div>
<div style={styles.cell}>ACV Total</div>
<div style={styles.bigCell}>Subclass</div>
<div style={styles.cell}>Class</div>
        </div>
        {/* Render data rows */}
        {projectDetails.project.spreadsheetData.map((item, index) => (
          <div key={index} style={{ ...styles.row, backgroundColor: index % 2 === 0 ? '#cddef2' : '#f1f1f1' }}>
            <div style={styles.cell}>{(index + 1)}</div>
            <div style={{ ...styles.cell, ...styles.input }}>
              <input
                style={styles.input}
                value={item.Room}
                onChange={(e) => handleFieldChange(index, 'Room', e.target.value)}
              />
            </div>
            <div style={styles.cell}>
              <input
                style={styles.input}
                value={item.Item}
                onChange={(e) => handleFieldChange(index, 'Item', e.target.value)}
              />
            </div>
            <div style={styles.bigCell}>
              <input
                style={styles.bigInput}
                value={item.Description}
                onChange={(e) => handleFieldChange(index, 'Description', e.target.value)}
              />
            </div>
            <div style={styles.cell}>
              <input
                style={styles.input}
                value={item.Quantity}
                onChange={(e) => handleFieldChange(index, 'Quantity', e.target.value)}
              />
            </div>
            <div style={styles.cell}>
              <input
                style={styles.input}
                value={`$${item['RCV High'].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`}
                onChange={(e) => handleFieldChange(index, 'RCV High', e.target.value)}
              />
            </div>
            <div style={styles.cell}>
  <input
    style={styles.input}
    value={`$${item['RCV Low'].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`}
    onChange={(e) => handleFieldChange(index, 'RCV Low', e.target.value)}
  />
</div>
<div style={styles.cell}>
  ${((item['RCV High'] + item['RCV Low']) / 2).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
</div>
<div style={styles.cell}>
  ${((item['RCV High'] + item['RCV Low']) / 2 * item.Quantity).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
</div>
            <div style={styles.cell}>
              {typeof projectDetails.project.salesTax === 'number' ? projectDetails.project.salesTax : projectDetails.project.salesTax}%
            </div>
            <div style={styles.cell}>
              ${(projectDetails.project.salesTax / 100 * ((item['RCV High'] + item['RCV Low']) / 2 * item.Quantity)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
            </div>
            <div style={styles.cell}>
              ${((item['RCV High'] + item['RCV Low']) / 2 * item.Quantity +
                (projectDetails.project.salesTax / 100 * ((item['RCV High'] + item['RCV Low']) / 2 * item.Quantity))).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
            </div>
            <div style={styles.cell}>
  <input
    style={styles.input}
    value={item.Depreciation}
    onChange={(e) => handleFieldChange(index, 'Depreciation', e.target.value)}
  />
</div>
            <div style={styles.cell}>
              {projectDetails.project.depreciationRange}
            </div>
            <div style={styles.cell}>
  ${((item['RCV High'] + item['RCV Low']) / 2 * item.Quantity * (item.Depreciation / 100) * projectDetails.project.depreciationRange).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
</div>
<div style={styles.cell}>
  ${((item['RCV High'] + item['RCV Low']) / 2 * item.Quantity +
    (projectDetails.project.salesTax / 100 * ((item['RCV High'] + item['RCV Low']) / 2 * item.Quantity)) -
    ((item['RCV High'] + item['RCV Low']) / 2 * item.Quantity * (item.Depreciation / 100) * projectDetails.project.depreciationRange)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
</div>
<div style={styles.bigCell}>
  <input
    style={styles.bigInput}
    value={item.Subclass}
    onChange={(e) => handleFieldChange(index, 'Subclass', e.target.value)}
  />
</div>
<div style={styles.cell}>
  <input
    style={styles.input}
    value={item.Class}
    onChange={(e) => handleFieldChange(index, 'Class', e.target.value)}
  />
</div>
          </div>
        ))}
      </div>
      {showPopup && <Popup message={popupMessage} type={popupType} textColor={popupTextColor}/>}
    </div>
  );
};

export default CardContents;