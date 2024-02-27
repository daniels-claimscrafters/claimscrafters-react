import React, { useState, useEffect } from 'react';
import ExcelJS from 'exceljs';

const ExcelGenerator = ({ projectDetails }) => {
    useEffect(() => {
        // Load Excel file when the component mounts
        loadExcelFile();
    }, []);
    console.log('Im here')
    console.log(projectDetails)

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
        
        // Add ACV to total
        suggestedACVTotal += ACV;
    });

    // Calculate total ACV tax by multiplying total ACV by the sales tax rate
    const totalACVTax = suggestedACVTotal * (projectDetails.project.salesTax / 100);

    // Calculate ACV with tax total by adding total ACV and total ACV tax
    const acvWithTaxTotal = suggestedACVTotal + totalACVTax;

    let totalDepreciation = 0; // Initialize total depreciation

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

    const loadExcelFile = async () => {
        // Create a new workbook
        console.log('here?')
        const workbook = new ExcelJS.Workbook();
        console.log('heree')
        
            // Load the existing Excel template
            try {
                await workbook.xlsx.readFile('../../../public/Claims Crafters Summary V1.2.xlsx');
                // Continue with processing the Excel file...
            } catch (error) {
                console.error('Error reading Excel file:', error);
                // Handle the error, such as displaying an error message to the user or logging it.
            }
        console.log('hereee')
            // Get the first worksheet
            const worksheet = workbook.getWorksheet(1);
      
            // Rest of the code...
        
         
      

          // Get the cell E18 and set its value to suggestedRCVTotal
    const cellE18 = worksheet.getCell('E18');
    cellE18.value = suggestedRCVTotal;

    // Get the cell E19 and set its value to totalRCVTax
    const cellE19 = worksheet.getCell('E19');
    cellE19.value = totalRCVTax;

    // Get the cell E20 and set its value to acvWithTaxTotal
    const cellE20 = worksheet.getCell('E20');
    cellE20.value = rcvWithTaxTotal;

    // Get the cell J18 and set its value to suggestedACVTotal
    const cellJ18 = worksheet.getCell('J18');
    cellJ18.value = suggestedACVTotal;

    const cellJ19 = worksheet.getCell('J19');
    cellJ19.value = totalACVTax;

    const cellJ20 = worksheet.getCell('J20');
    cellJ20.value = acvWithTaxTotal;

    const cellJ21 = worksheet.getCell('J21');
    cellJ21.value = totalDepreciation;

    const cellJ22 = worksheet.getCell('J22');
    cellJ22.value = acvWithTaxTotal - totalDepreciation;

    // Get the cell reference for any cell within the merged range, for example D4
const cellD4 = worksheet.getCell('D4');

// Set the value for the cell D4, which will apply to the entire merged range D4:F5
cellD4.value = projectDetails.project.claimNumber;
console.log(projectDetails.project.claimNumber)

// Get the cell reference for any cell within the merged range, for example D6
const cellD6 = worksheet.getCell('D6');

// Set the value for the cell D6, which will apply to the entire merged range D6:F6
cellD6.value = projectDetails.project.carrier;

// Get the cell reference for any cell within the merged range, for example D8
const cellD8 = worksheet.getCell('D8');

// Set the value for the cell D8, which will apply to the entire merged range D8:F8
cellD8.value = projectDetails.project.dateOfLoss;

// Get the cell reference for any cell within the merged range, for example D10
const cellD10 = worksheet.getCell('D10');

// Set the value for the cell D10, which will apply to the entire merged range D10:F10
cellD10.value = projectDetails.project.lossType;

// Concatenate insuredFirstName and insuredLastName
const insuredFullName = projectDetails.project.insuredFirstName + ' ' + projectDetails.project.insuredLastName;

// Get the cell reference for any cell within the merged range, for example D12
const cellD12 = worksheet.getCell('D12');

// Set the value for the cell D12, which will apply to the entire merged range D12:F12
cellD12.value = insuredFullName;

// Get the cell reference for any cell within the merged range, for example D14
const cellD14 = worksheet.getCell('D14');

// Set the value for the cell D14, which will apply to the entire merged range D14:F14
cellD14.value = projectDetails.project.lossAddress;

// Concatenate adjusterFirstName and adjusterLastName
const adjusterFullName = projectDetails.project.adjusterFirstName + ' ' + projectDetails.project.adjusterLastName;

// Get the cell reference for cell H4
const cellH4 = worksheet.getCell('H4');

// Set the value of cell H4 to the concatenated full name
cellH4.value = adjusterFullName;

// Get the cell reference for cell H5
const cellH5 = worksheet.getCell('H5');

// Set the value of cell H5 to the adjuster's phone number
cellH5.value = projectDetails.project.adjusterPhone;

// Get the cell reference for cell H6
const cellH6 = worksheet.getCell('H6');

// Set the value of cell H6 to the adjuster's email address
cellH6.value = projectDetails.project.adjusterEmail;

// Get the cell reference for cell H9
const cellH9 = worksheet.getCell('H9');

// Set the value of cell H9 to the sales tax rate
cellH9.value = projectDetails.project.salesTax;

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

// Get the cell reference for cell H10
const cellH10 = worksheet.getCell('H10');

// Set the value of cell H10 to the depreciation range
cellH10.value = depreciationRange;




const calculateRoomsRCVTotal = (projectDetails) => {
    const { spreadsheetData, salesTax } = projectDetails.project;
    let roomsRCVTotal = {};

    // Iterate through each item in the spreadsheetData
    spreadsheetData.forEach(item => {
        const room = item.Room || 'Unknown Room';
        const RCVHigh = parseFloat(item['RCV High']);
        const RCVLow = parseFloat(item['RCV Low']);
        const quantity = parseFloat(item['Quantity']);

        // Calculate RCV (ext) for the current item using the provided formula
        const RCVExt = (RCVHigh + RCVLow) / 2 * quantity;
        const RCVWithTax = RCVExt + (parseFloat(salesTax) / 100 * RCVExt);

        // Add RCV (ext) to total for the room
        if (!roomsRCVTotal[room]) {
            roomsRCVTotal[room] = RCVWithTax;
        } else {
            roomsRCVTotal[room] += RCVWithTax;
        }
    });

    return roomsRCVTotal;
};




const calculateClassRCVTotal = (projectDetails) => {
    const { spreadsheetData, salesTax } = projectDetails.project;
    let classRCVTotal = {};

    // Iterate through each item in the spreadsheetData
    spreadsheetData.forEach(item => {
        const itemClass = item.Class || 'Unknown Class';
        const RCVHigh = parseFloat(item['RCV High']);
        const RCVLow = parseFloat(item['RCV Low']);
        const quantity = parseFloat(item['Quantity']);

        // Calculate RCV (ext) for the current item using the provided formula
        const RCVExt = (RCVHigh + RCVLow) / 2 * quantity;
        const RCVWithTax = RCVExt + (parseFloat(salesTax) / 100 * RCVExt);

        // Add RCV (ext) to total for the class
        if (!classRCVTotal[itemClass]) {
            classRCVTotal[itemClass] = RCVWithTax;
        } else {
            classRCVTotal[itemClass] += RCVWithTax;
        }
    });

    return classRCVTotal;
};

const calculateACVByRoom = (projectDetails) => {
    const { spreadsheetData, salesTax, depreciationRange } = projectDetails.project;
    let roomACVTotal = {};

    // Iterate through each item in the spreadsheetData
    spreadsheetData.forEach(item => {
        const room = item.Room || 'Unknown Room';
        const RCVHigh = parseFloat(item['RCV High']);
        const RCVLow = parseFloat(item['RCV Low']);
        const quantity = parseFloat(item['Quantity']);
        const depreciation = parseFloat(item['Depreciation']);

        // Calculate ACV for the current item using the provided formula
        const ACV = ((RCVHigh + RCVLow) / 2 * quantity) +
            (parseFloat(salesTax) / 100 * ((RCVHigh + RCVLow) / 2 * quantity)) -
            (((RCVHigh + RCVLow) / 2 * quantity) * (depreciation / 100) * depreciationRange);
        
        // Add ACV to total for the room
        if (!roomACVTotal[room]) {
            roomACVTotal[room] = ACV;
        } else {
            roomACVTotal[room] += ACV;
        }
    });

    return roomACVTotal;
};

const calculateACVByClass = (projectDetails) => {
    const { spreadsheetData, salesTax, depreciationRange } = projectDetails.project;
    let classACVTotal = {};

    // Iterate through each item in the spreadsheetData
    spreadsheetData.forEach(item => {
        const itemClass = item.Class || 'Unknown Class';
        const RCVHigh = parseFloat(item['RCV High']);
        const RCVLow = parseFloat(item['RCV Low']);
        const quantity = parseFloat(item['Quantity']);
        const depreciation = parseFloat(item['Depreciation']);

        // Calculate ACV for the current item using the provided formula
        const ACV = ((RCVHigh + RCVLow) / 2 * quantity) +
            (parseFloat(salesTax) / 100 * ((RCVHigh + RCVLow) / 2 * quantity)) -
            (((RCVHigh + RCVLow) / 2 * quantity) * (depreciation / 100) * depreciationRange);
        
        // Add ACV to total for the class
        if (!classACVTotal[itemClass]) {
            classACVTotal[itemClass] = ACV;
        } else {
            classACVTotal[itemClass] += ACV;
        }
    });

    return classACVTotal;
}

    // Return the JSX markup with the calculated values
    return (
        <div>
            <button>Generate Excel File</button>
        </div>
    );
};
}

export default ExcelGenerator;
    