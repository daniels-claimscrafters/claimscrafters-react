// NPCParentComponent.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NPC1 from './NewProjectCreation1/NPC1';
import NPC2 from './NewProjectCreation2/NPC2';
import NPC3 from './NewProjectCreation3/NPC3';
import NPC4 from './NewProjectCreation4/NPC4';
import NPC5 from './NewProjectCreation5/NPC5';
import NPC6 from './NewProjectCreation6/NPC6';
import NPC7 from './NewProjectCreation7/NPC7'; // Import NPC7
import NPCLoadingScreen from './NPCLoadingScreen'

const NPCParentComponent = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
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
    depreciationRange: '',
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
    token: '' // New field to store token
  });

  const [userData, setUserData] = useState(null);
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

  useEffect(() => {
    // Check if the user is authenticated
    const token = getTokenFromCookie();
    if (!token) {
      // User is not authenticated, redirect to login page
      navigate('/login');
    } else {
      // Fetch user data if user is authenticated
      fetchUserData(token);
    }
  }, [navigate]);

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
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };



  const handleInputChange = (name, value) => {
    let formattedValue = value;
  
    // Formatting logic based on field name
    switch (name) {
      case 'adjusterEmail':
        formattedValue = formattedValue.replace(/\s/g, '').toLowerCase();
        break;
      case 'insuredFirstName':
      case 'insuredLastName':
      case 'adjusterFirstName':
      case 'adjusterLastName':
        formattedValue = formattedValue.trim();
        formattedValue = formattedValue.charAt(0).toUpperCase() + formattedValue.slice(1);
        break;
      case 'adjusterPhone':
        const phoneNumber = value.replace(/\D/g, '');
        if (phoneNumber.length > 3 && phoneNumber.length <= 6) {
          formattedValue = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        } else if (phoneNumber.length > 6) {
          formattedValue = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
        }
        break;
        case 'lossPostalCode':
        // Remove spaces and allow only numbers
        formattedValue = value.replace(/\s/g, '').replace(/\D/g, '');
        break;
        case 'claimNumber':
      
  
        // Trim spaces from the beginning and end
        formattedValue = value.trim();
        break;
      default:
        // No special formatting for other fields
        break;
    }
  
    setNPCData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
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

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Cancel the event
      event.preventDefault();
      // Chrome requires returnValue to be set
      event.returnValue = '';
      // Display a confirmation dialog
      const confirmationMessage = 'Are you sure you want to leave this page? Your unsaved changes may be lost.';
      // eslint-disable-next-line no-alert
      return confirmationMessage;
    };

    // Add event listener for beforeunload
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Remove event listener when component unmounts
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // Only run once on component mount

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
      setIsLoading(true);
      console.log('NPC data submitted:', npcData);
  
      // Send NPC data to the server with token in headers
      const response = await fetch('https://f133-2600-1010-b040-a157-f048-6b47-d705-e729.ngrok-free.app/npc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${npcData.token}` // Include token in the Authorization header
        },
        body: JSON.stringify(npcData),
      });
  
      // Check if the request was successful
      if (response.ok) {
        const responseData = await response.json();
        console.log('NPC data sent successfully!', responseData);
        // Extract project ID from the response
        const { projectId } = responseData;
        navigate(`/projectdetails?projectId=${projectId}`);
        //navigate('/projectdetails');
        // Handle success response
      } else {
        // Handle error response
        console.error('Error sending NPC data:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending NPC data:', error.message);
    } finally {
      setIsLoading(false); // Set loading state to false after request completes
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
      {/* Loading screen */}
      {isLoading && <NPCLoadingScreen />}
    </div>
  );
};

export default NPCParentComponent;