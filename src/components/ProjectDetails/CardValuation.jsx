// CardValuation.jsx
import React from 'react';

const styles = {
  Card: {
    top: '280px',
    left: '231px',
    width: '100%',
    height: '170px', // Keeping the original height
    backgroundColor: '#f0f0f0',
    borderRadius: '12px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    flex: '1',
    marginRight: '10px', // Add margin right for space between columns
    marginTop: '10px',
  },
  firstColumn: {
    flex: '1',
    marginRight: '40px', // Add margin right for space between columns
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCard: {
    width: '100%', // Adjust width of the inner card as needed
    height: '100%', // Adjust height of the inner card as needed
    backgroundColor: '#cddef2',
    borderRadius: '12px',
    border: '1px solid #030303',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: 600,
  },
  headerText: {
    fontWeight: 'bold',
    marginBottom: '5px',
    textAlign: 'center',
  },
  text: {
    marginBottom: '5px',
    color: '#030303',
    fontSize: '18px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: '23px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
};

const CardValuation = ({ projectDetails }) => {
  console.log ('card valuation: ', projectDetails)

  // Initialize total
let suggestedRCVTotal = 0;

// Iterate through each item in spreadsheetData
projectDetails.project.spreadsheetData.forEach(item => {
    // Parse RCV High, RCV Low, and Quantity from the current item
    const RCVHigh = parseFloat(item['RCV High']);
    const RCVLow = parseFloat(item['RCV Low']);
    const quantity = parseFloat(item['Quantity']);
    
    // Calculate RCV (ext) for the current item using the provided formula
    const RCVExt = (RCVHigh + RCVLow) / 2 * quantity;
    
    // Add RCV (ext) to total
    suggestedRCVTotal += RCVExt;
});

// Use suggestedRCVTotal for further processing or display
console.log('Suggested RCV Total:', suggestedRCVTotal);

// Calculate total RCV tax
const totalRCVTax = suggestedRCVTotal * (projectDetails.project.salesTax / 100);

// Calculate RCV with tax total
const rcvWithTaxTotal = suggestedRCVTotal + totalRCVTax;

let suggestedACVTotal = 0; // Initialize total ACV

// Iterate over each item in the spreadsheet data
projectDetails.project.spreadsheetData.forEach(item => {
  // Parse RCV High, RCV Low, Quantity, and Depreciation from the current item
  const RCVHigh = parseFloat(item['RCV High']);
  const RCVLow = parseFloat(item['RCV Low']);
  const quantity = parseFloat(item['Quantity']);
  const depreciation = parseFloat(item['Depreciation']);

  

  // Calculate ACV for the current item using the provided formula
  const ACV = ((RCVHigh + RCVLow) / 2 * quantity) +
  (projectDetails.project.salesTax / 100 * ((RCVHigh + RCVLow) / 2 * quantity)) - 
  (((RCVHigh + RCVLow) / 2 * quantity) * (depreciation / 100) * projectDetails.project.depreciationRange);

  // Log the calculated ACV
  console.log('ACV:', ACV);

  // Add ACV to total
  suggestedACVTotal += ACV;
});


// Calculate total ACV tax by multiplying total ACV by the sales tax rate
const totalACVTax = suggestedACVTotal * (projectDetails.project.salesTax / 100);

// Calculate ACV with tax total by adding total ACV and total ACV tax
const acvWithTaxTotal = suggestedACVTotal + totalACVTax;

let totalDepreciation = 0; // Initialize total depreciation

console.log("yo", projectDetails.project.depreciationRange)

// Iterate over each item in the spreadsheet data
projectDetails.project.spreadsheetData.forEach(item => {
    // Parse RCV High, Quantity, and Depreciation from the current item
    const RCVHigh = parseFloat(item['RCV High']);
    const RCVLow = parseFloat(item['RCV Low']);
    const quantity = parseFloat(item['Quantity']);
    const depreciation = parseFloat(item['Depreciation']);
    
    // Calculate depreciation amount for the current item using the provided formula
    const depreciationAmount = ((RCVHigh + RCVLow) / 2 * quantity) * (depreciation / 100) * projectDetails.project.depreciationRange;
    
    // Add depreciation amount to total
    totalDepreciation += depreciationAmount;
});

// Now you have the total depreciation amount
let depreciationRange;
switch (projectDetails.project.depreciationRange) {
  case 2:
    depreciationRange = "0 - 3 years";
    break;
  case 5:
    depreciationRange = '4 - 6 years';
    break;
  case 8:
    depreciationRange = '7 - 9 years';
    break;
  case 10:
    depreciationRange = '10+ years';
    break;
  default:
    depreciationRange = 'N/A';
    break;
}


  return (
    <div style={styles.Card}>
      <div style={styles.firstColumn}>
      <div style={styles.innerCard}>
    Number Of Items:
    <br />
    {projectDetails.project.numberOfLines}
  </div>
      </div>
      <div style={styles.column}>
        <div style={styles.headerText}>RC</div>
        <div style={styles.text}>Suggested RCV Total: ${suggestedRCVTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        <div style={styles.text}>Tax Rate: {projectDetails.project.salesTax}%</div>
        <div style={styles.text}>Total RCV Tax: ${totalRCVTax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        <div style={styles.text}>RCV with Tax Total: ${rcvWithTaxTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
      </div>
      <div style={styles.column}>
        <div style={styles.headerText}>AC</div>
        <div style={styles.text}>Suggested ACV Total: ${suggestedACVTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        <div style={styles.text}>Tax Rate: {projectDetails.project.salesTax}%</div>
        <div style={styles.text}>Total ACV Tax: ${totalACVTax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        <div style={styles.text}>ACV with Tax Total: ${acvWithTaxTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
      </div>
      <div style={styles.column}>
        <div style={styles.headerText}>&nbsp;</div>
        <div style={styles.text}>Depreciating Years: {depreciationRange}</div>
        <div style={styles.text}>Total Depreciation: ${totalDepreciation.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
      </div>
    </div>
  );
};

export default CardValuation;

