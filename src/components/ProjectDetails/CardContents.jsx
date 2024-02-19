// CardContents.jsx

import React from 'react';

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
    minWidth: '100px', // Define a minimum width for each cell
    maxWidth: '200px', // Define a maximum width for each cell to prevent excessive expansion
    overflow: 'hidden', // Hide overflow content
    textOverflow: 'ellipsis', // Truncate text that overflows its container
    whiteSpace: 'nowrap', // Prevent text from wrapping to the next line
  },
};

const CardContents = ({ projectDetails }) => {
  
  return (
    <div style={styles.Card}>
      <div style={styles.headerRow}>
        <div style={styles.headerItem}>Contents Inventory</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={styles.icon}
          >
            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/>
          </svg>
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
        <div style={styles.cell}>{item.Room}</div>
        {/* Item */}
        <div style={styles.cell}>{item.Item}</div>
        {/* Description */}
        <div style={styles.cell}>{item.Description}</div>
        {/* Quantity */}
        <div style={styles.cell}>{item.Quantity}</div>
        {/* RCV High */}
        <div style={styles.cell}>{item['RCV High']}</div>
        {/* RCV Low */}
        <div style={styles.cell}>{item['RCV Low']}</div>
        {/* RCV Avg (ea) */}
        <div style={styles.cell}>{(item['RCV High'] + item['RCV Low']) / 2}</div>
        {/* RCV (ext) */}
        <div style={styles.cell}>{(item['RCV High'] + item['RCV Low']) / 2 * item.Quantity}</div>
        {/* Sales Tax */}
        <div style={styles.cell}>{projectDetails.project.salesTax}</div>
        {console.log('Sales Tax:', projectDetails.project.salesTax)}
        {/* Sales Tax Amount */}
        <div style={styles.cell}>{projectDetails.project.salesTax * ((item['RCV High'] + item['RCV Low']) / 2 * item.Quantity)}</div>
        {/* RCV Total */}
        <div style={styles.cell}>{item['RCV High'] * item.Quantity}</div>
        {/* Depreciation */}
        <div style={styles.cell}>{item.Depreciation}</div>
        {/* Dep Years */}
        <div style={styles.cell}>{projectDetails.project.depreciationRange}</div>
        {console.log('Dep years: ', projectDetails.project.depreciationRange)}
        {/* Dep Amount */}
        <div style={styles.cell}>{(item['RCV High'] * item.Quantity) * item.Depreciation * projectDetails.project.depreciationRange}</div>
        {/* ACV Total */}
        <div style={styles.cell}>{item['RCV High'] * item.Quantity - (item['RCV High'] * item.Quantity) * item.Depreciation * projectDetails.project.depreciationRange}</div>
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