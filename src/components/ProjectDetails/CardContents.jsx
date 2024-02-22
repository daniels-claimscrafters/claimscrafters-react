// CardContents.jsx

import React, { useState, useEffect } from 'react';

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
  headerItem: {
    fontWeight: 'bold',
  },
  icon: {
    marginRight: '10px', // Add space between icon and button
  },
  spreadsheet: {
    padding: '10px',
    overflow: 'auto', // Add overflow to allow scrolling if content exceeds height
  },
  row: {
    display: 'flex',
    borderBottom: '1px solid #ccc',
    padding: '10px 0',
  },
  cell: {
    flex: '1', // Let each cell take up equal space initially
    minWidth: '200px', // Define a minimum width for each cell
    maxWidth: '300px', // Define a maximum width for each cell to prevent excessive expansion
    overflow: 'hidden', // Hide overflow content
    textOverflow: 'ellipsis', // Truncate text that overflows its container
    whiteSpace: 'nowrap', // Prevent text from wrapping to the next line
    marginLeft: '50px',
  },
  input: {
    width: '80px', // Adjust width as needed
    marginLeft: '10px',
  },
};

const CardContents = ({ projectDetails, setProjectDetails }) => {
  const [originalProjectDetails, setOriginalProjectDetails] = useState(null);
  const [userData, setUserData] = useState(null);

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
        console.log('Changelog entry created successfully:', data);
      } else {
        console.error('Failed to create changelog entry');
      }
    } catch (error) {
      console.error('Error creating changelog entry:', error);
    }
  };


  return (
    <div style={styles.Card}>
      <div style={styles.headerRow}>
        <div style={styles.headerItem}>Contents Inventory</div>
        <div>
        <button style={styles.saveButton} onClick={createChangelogEntry}>Save</button>
          <button>Download</button>
        </div>
      </div>
      <div style={styles.spreadsheet}>
        <div style={styles.row}>
          <div style={styles.cell}>Line</div>
          <div style={styles.cell}>Room</div>
<div style={styles.cell}>Item</div>
<div style={styles.cell}>Description</div>
<div style={styles.cell}>QTY</div>
<div style={styles.cell}>RCV High</div>
<div style={styles.cell}>RCV Low</div>
<div style={styles.cell}>RCV Avg (ea)</div>
<div style={styles.cell}>RCV (ext)</div>
<div style={styles.cell}>Sales Tax</div>
<div style={styles.cell}>Sales Tax Amount</div>
<div style={styles.cell}>RCV Total</div>
<div style={styles.cell}>Depreciation</div>
<div style={styles.cell}>Dep Years</div>
<div style={styles.cell}>Dep Amount</div>
<div style={styles.cell}>ACV Total</div>
<div style={styles.cell}>Subclass</div>
<div style={styles.cell}>Class</div>
        </div>
        {/* Render data rows */}
        {projectDetails.project.spreadsheetData.map((item, index) => (
    <div key={index} style={styles.row}>
       {/* Line */}
       <div style={styles.cell}>{index + 1}</div>
        {/* Room */}
        <input
              style={{ ...styles.cell, ...styles.input }}
              value={item.Room}
              onChange={(e) => handleFieldChange(index, 'Room', e.target.value)}
            />
        {/* Item */}
        <input
              style={styles.cell}
              value={item.Item}
              onChange={(e) => handleFieldChange(index, 'Item', e.target.value)}
            />
        {/* Description */}
    <input
      style={styles.cell}
      value={item.Description}
      onChange={(e) => handleFieldChange(index, 'Description', e.target.value)}
    />
        {/* Quantity */}
        <input
              style={styles.cell}
              value={item.Quantity}
              onChange={(e) => handleFieldChange(index, 'Quantity', e.target.value)}
            />
        {/* RCV High */}
        <input
              style={styles.cell}
              value={item['RCV High']}
              onChange={(e) => handleFieldChange(index, 'RCV High', e.target.value)}
            />
        {/* RCV Low */}
        <input
              style={styles.cell}
              value={item['RCV Low']}
              onChange={(e) => handleFieldChange(index, 'RCV Low', e.target.value)}
            />
        {/* RCV Avg (ea) */}
        <div style={styles.cell}>{(item['RCV High'] + item['RCV Low']) / 2}</div>
        {/* RCV (ext) */}
        <div style={styles.cell}>{(item['RCV High'] + item['RCV Low']) / 2 * item.Quantity}</div>
        {/* Sales Tax */}
        <div style={styles.cell}>{projectDetails.project.salesTax}</div>
        {console.log('Sales Tax:', projectDetails.project.salesTax)}
        {/* Sales Tax Amount */}
<div style={styles.cell}>
  {projectDetails.project.salesTax / 100 * ((item['RCV High'] + item['RCV Low']) / 2 * item.Quantity)}
</div>
        {/* RCV Total */}
<div style={styles.cell}>
  {(item['RCV High'] + item['RCV Low']) / 2 * item.Quantity +
   (projectDetails.project.salesTax / 100 * ((item['RCV High'] + item['RCV Low']) / 2 * item.Quantity))}
</div>
        {/* Depreciation */}
        <div style={styles.cell}>{item.Depreciation}</div>
        {/* Dep Years */}
        <div style={styles.cell}>{projectDetails.project.depreciationRange}</div>
        {console.log('Dep years: ', projectDetails.project.depreciationRange)}
        {/* Dep Amount */}
{/* Depreciation Amount */}
<div style={styles.cell}>
  {((item['RCV High'] + item['RCV Low']) / 2 * item.Quantity) * (item.Depreciation / 100) * projectDetails.project.depreciationRange}
</div>
        {/* ACV Total */}
<div style={styles.cell}>
  {((item['RCV High'] + item['RCV Low']) / 2 * item.Quantity) +
   (projectDetails.project.salesTax / 100 * ((item['RCV High'] + item['RCV Low']) / 2 * item.Quantity)) - 
   (((item['RCV High'] + item['RCV Low']) / 2 * item.Quantity) * (item.Depreciation / 100) * projectDetails.project.depreciationRange)}
</div>

        {/* Subclass */}
        <div style={styles.cell}>{item.Subclass}</div>
        {/* Class */}
        <div style={styles.cell}>{item.Class}</div>
    </div>
  ))}
      </div>
    </div>
  );
};

export default CardContents;