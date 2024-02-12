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
  Popup: {
    position: 'absolute',
    bottom: '10px', // Adjust the distance from the bottom as needed
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.16)',
    zIndex: '9999',
  },
};

const CardUpload = (props) => {
  const { onFileUpload, onClick } = props;
  const fileInputRef = useRef(null);
  const [uploadedFileName, setUploadedFileName] = useState('');

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
    if (onClick) {
      onClick();
    }
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const fileContent = event.target.result;
      onFileUpload(uploadedFile.name, fileContent);
      setUploadedFileName(uploadedFile.name); // Update the uploaded file name state
    };

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
      {uploadedFileName && (
        <div style={styles.Popup}>
          Uploaded File: {uploadedFileName}
        </div>
      )}
    </div>
  );
};

export default CardUpload;