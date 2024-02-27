const ExcelJS = require('exceljs');

// Load the existing Excel template
const workbook = new ExcelJS.Workbook();
workbook.xlsx.readFile('../public/Claims Crafters Summary V1.2.xlsx')
    .then(() => {
        // Get the worksheet containing the chart
        const worksheet = workbook.getWorksheet('Contents Valuation Summary'); // Updated sheet name

        // Check if the worksheet exists
        if (!worksheet) {
            console.log('Worksheet not found.');
            return;
        }

        // Check if the worksheet contains any charts
        if (!worksheet.charts || worksheet.charts.length === 0) {
            console.log('No charts found in the worksheet.');
            return;
        }

        // Access the array of charts in the worksheet
        const charts = worksheet.charts;

        // Iterate through the charts array
        charts.forEach((chart, index) => {
            console.log('Chart Index:', index);
            console.log('Chart Name:', chart.name); // If the chart has a name
            console.log('Chart Type:', chart.type);
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
