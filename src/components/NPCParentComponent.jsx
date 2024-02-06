// NPCParentComponent.jsx
import React, { useState, useEffect } from 'react';
import NPC1 from './NewProjectCreation1/NPC1';
import NPC2 from './NewProjectCreation2/NPC2';
import NPC3 from './NewProjectCreation3/NPC3';
import NPC4 from './NewProjectCreation4/NPC4';
import NPC5 from './NewProjectCreation5/NPC5';
import NPC6 from './NewProjectCreation6/NPC6';

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
    selectedColumnsData: [],
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
      const newData = { ...prevData, selectedColumnsData: selectedColumns };
      console.log('NPCParentComponent - Updated NPC data: ', newData);
      return newData;
    });
  };

  useEffect(() => {
    console.log('NPC data after updating:', npcData);
  }, [npcData]); // This useEffect will be triggered after npcData changes

  const handleSubmit = () => {
    // Perform submit logic with npcData
    console.log('NPC data submitted:', npcData);
    // You might want to send this data to a server or perform other actions
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
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default NPCParentComponent;