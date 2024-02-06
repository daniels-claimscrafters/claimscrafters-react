// CardUpload.jsx
import React, { useRef, useState } from 'react';

const styles = {
  Card: {
    top: '498px',
    left: '153px',
    width: '1163px',
    height: '559px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.16)',
    cursor: 'pointer',
  },
  FileInput: {
    display: 'none', // Hide the input visually
  },
};

const CardUpload = (props) => {
  const { onFileUpload, onClick } = props;
  const fileInputRef = useRef(null);

  const handleClick = () => {
    // Programmatically trigger the file input click
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }

    // Call the onClick prop if provided
    if (onClick) {
      onClick();
    }
  };

  const handleFileChange = (event) => {
    console.log('File change event:', event);
    const uploadedFile = event.target.files[0];
  
    // Use FileReader to read the file content
    const reader = new FileReader();
  
    reader.onload = (event) => {
      const fileContent = event.target.result;
  
      // Pass both the file name and content to the parent component
      onFileUpload(uploadedFile.name, fileContent);
  
      // Log the uploaded data in CardUpload
      console.log('Uploaded data in CardUpload:', {
        fileName: uploadedFile.name,
        fileContent,
      });
    };
  
    // Start reading the file as an ArrayBuffer
    reader.readAsArrayBuffer(uploadedFile);
  };
  
  

  return (
    <div style={styles.Card} onClick={handleClick}>
      <input
        type="file"
        accept=".xlsx"
        style={styles.FileInput}
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      {props.children}
    </div>
  );
};

export default CardUpload;