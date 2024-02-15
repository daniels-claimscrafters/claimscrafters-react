// NPCParentComponent.jsx
import React, { useState, useEffect } from 'react';
import NPC1 from './NewProjectCreation1/NPC1';
import NPC2 from './NewProjectCreation2/NPC2';
import NPC3 from './NewProjectCreation3/NPC3';
import NPC4 from './NewProjectCreation4/NPC4';
import NPC5 from './NewProjectCreation5/NPC5';
import NPC6 from './NewProjectCreation6/NPC6';
import NPC7 from './NewProjectCreation7/NPC7'; // Import NPC7

const NPCParentComponent = () => {
  const [step, setStep] = useState(1);
  const [npcData, setNPCData] = useState({
    // Fields being collected
    claimNumber: '',
    dateOfLoss: '',
    insuredFirstName: '',
    insuredLastName: '',
    lossAddress: '',
    lossCity: '',
    lossState: '',
    lossPostalCode: '',
    carrier: '',
    lossType: '',
    adjusterFirstName: '',
    adjusterLastName: '',
    adjusterPhone: '',
    adjusterEmail: '',
    salesTax: '',
    deprecationRange: '',
    spreadsheetUpload: '',
    numberOfLines: '',
    didAcceptLegal: '',
    acceptLegalFullName: '',
    selectedColumnsData: [],
    // New fields for credit card information
    cardholderName: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
    price: '',
  });

  const handleInputChange = (name, value) => {
    setNPCData((prevData) => {
      const newData = { ...prevData, [name]: value };
      console.log(`NPCParentComponent - Updated NPC data: `, newData);
      return newData;
    });
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFileUpload = (file, fileContent) => {
    // Log the current state of npcData
    console.log('NPC data before updating:', npcData);

    // Update spreadsheetUpload with the file content
    setNPCData((prevData) => {
      const newSpreadsheetUploadValue = fileContent;
      console.log(`Updating spreadsheetUpload to:`, newSpreadsheetUploadValue);

      return {
        ...prevData,
        spreadsheetUpload: newSpreadsheetUploadValue,
      };
    }, () => {
      // Log the updated state of npcData after the state has been updated
      console.log('NPC data after updating:', npcData);
    });
  };

  const handleColumnsSelected = (selectedColumns) => {
    setNPCData((prevData) => {
      const newData = {
        ...prevData,
        selectedColumnsData: selectedColumns,
        numberOfLines: selectedColumns.length, // Counting the number of lines
      };
      console.log('NPCParentComponent - Updated NPC data: ', newData);
      return newData;
    });
  };

  useEffect(() => {
    console.log('NPC data after updating:', npcData);
  }, [npcData]); // This useEffect will be triggered after npcData changes

  const handleSubmit = async () => {
    try {
      // Perform submit logic with npcData
      console.log('NPC data submitted:', npcData);
  
      // Send NPC data to the server
      const response = await fetch('https://f133-2600-1010-b040-a157-f048-6b47-d705-e729.ngrok-free.app/npc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(npcData),
      });
  
      // Check if the request was successful
      if (response.ok) {
        console.log('NPC data sent successfully!');
        // Handle success response
      } else {
        // Handle error response
        console.error('Error sending NPC data:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending NPC data:', error.message);
    }
  };  

  return (
    <div>
      {step === 1 && (
        <NPC1
          npcData={npcData}
          onInputChange={handleInputChange}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <NPC2
          npcData={npcData}
          onInputChange={handleInputChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
      {step === 3 && (
        <NPC3
          npcData={npcData}
          onInputChange={handleInputChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
      {step === 4 && (
        <NPC4
          npcData={npcData}
          onInputChange={handleInputChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onFileUpload={handleFileUpload}
        />
      )}
      {step === 5 && (
        <NPC5
          npcData={npcData}
          onInputChange={handleInputChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onColumnsSelected={handleColumnsSelected}
        />
      )}
      {step === 6 && (
        <NPC6
          npcData={npcData}
          onInputChange={handleInputChange}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
      {step === 7 && (
        <NPC7
          npcData={npcData}
          onInputChange={handleInputChange}
          numberOfLines={npcData.numberOfLines}
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default NPCParentComponent;