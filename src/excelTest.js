const XLSX = require('xlsx-style');
const fs = require('fs');

function modifyAndExportXLSX(inputFilePath, outputFilePath) {
    // Load the workbook
    const workbook = XLSX.readFile(inputFilePath, { cellStyles: true });

    // Get the first worksheet
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // Modify the value of cell L17
    worksheet['L17'] = {
        v: 7,
        t: 'n' // Specify the value type as number
    };

    // Write the modified workbook to a new file
    XLSX.writeFile(workbook, outputFilePath);

    console.log('File has been modified and exported successfully.');
}


// Usage example:
const inputFilePath = './ClaimsCraftersExcel.xlsx'; // Provide the path to your input .xlsx file
const outputFilePath = './output.xlsx'; // Provide the desired path for the output .xlsx file
modifyAndExportXLSX(inputFilePath, outputFilePath);
