// EditProfilePage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IconHome from './IconHome';
import ImageProfile from './ImageProfile';
import InputFieldFirstName from './InputFieldFirstName';
import InputFieldEmail from './InputFieldEmail';
import InputFieldLastName from './InputFieldLastName';
import InputFieldOrganization from './InputFieldOrganization';
import InputFieldPhone from './InputFieldPhone';
import InputFieldPostalCode from './InputFieldPostalCode';
import InputFieldState from './InputFieldState';
import InputFieldStreetAddress from './InputFieldStreetAddress';
import InputFieldTitle from './InputFieldTitle';
import TextTitle from './TextTitle';
import TextStreetAddress from './TextStreetAddress';
import TextState from './TextState';
import TextPostalCode from './TextPostalCode';
import TextPhone from './TextPhone';
import TextOrganization from './TextOrganization';
import TextLastName from './TextLastName';
import TextHeader from './TextHeader';
import TextFirstName from './TextFirstName';
import TextEmail from './TextEmail';
import TextCity from './TextCity';
import InputFieldCity from './InputFieldCity';
import TextPhoto from './TextPhoto'


const EditProfilePage = () => {
    const navigate = useNavigate();
    // State variables for user details
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');
    const [organization, setOrganization] = useState('');
    const [phone, setPhone] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [state, setState] = useState('');
    const [title, setTitle] = useState('');

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

    const handleProfilePictureClick = () => {
        // Implement the logic to open a file picker or perform any action to change the profile picture
        console.log('Clicked on profile picture. Implement logic to change profile picture.');
      };
  
    // Function to handle changes in input fields
    const handleFieldChange = (fieldName, value) => {
      console.log(`Updating ${fieldName} to:`, value);
      switch (fieldName) {
        case 'First Name':
          setFirstName(value);
          break;
        case 'Email':
          setEmail(value);
          break;
        case 'Last Name':
          setLastName(value);
          break;
        case 'Organization':
          setOrganization(value);
          break;
        case 'Phone':
          setPhone(value);
          break;
        case 'Postal Code':
          setPostalCode(value);
          break;
        case 'State':
          setState(value);
          break;
        case 'Title':
          setTitle(value);
          break;
        default:
          console.error('Invalid field name:', fieldName);
      }
    };
  
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
          <TextHeader />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ImageProfile onClick={handleProfilePictureClick} />
            <TextPhoto />
          </div>
          <IconHome />
        </div>
  
        {/* Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Row 1 */}
<div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginBottom: '20px' }}>
  <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
    <TextFirstName />
    <InputFieldFirstName onChange={(value) => handleFieldChange('First Name', value)} />
  </div>
  <div style={{ width: '5%' }}></div> {/* Increased width to add space */}
  <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
    <TextEmail />
    <InputFieldEmail onChange={(value) => handleFieldChange('Email', value)} />
  </div>
</div>
  
          {/* Row 2 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginBottom: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
              <TextLastName />
              <InputFieldLastName onChange={(value) => handleFieldChange('Last Name', value)} />
            </div>
            <div style={{ width: '10%' }}></div> {/* Spacer */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
              <TextOrganization />
              <InputFieldOrganization onChange={(value) => handleFieldChange('Organization', value)} />
            </div>
          </div>
  
          {/* Row 3 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginBottom: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
              <TextPhone />
              <InputFieldPhone onChange={(value) => handleFieldChange('Phone', value)} />
            </div>
            <div style={{ width: '10%' }}></div> {/* Spacer */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
              <TextPostalCode />
              <InputFieldPostalCode onChange={(value) => handleFieldChange('Postal Code', value)} />
            </div>
          </div>
  
          {/* Row 4 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginBottom: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
              <TextState />
              <InputFieldState onChange={(value) => handleFieldChange('State', value)} />
            </div>
            <div style={{ width: '10%' }}></div> {/* Spacer */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
              <TextTitle />
              <InputFieldTitle onChange={(value) => handleFieldChange('Title', value)} />
            </div>
          </div>
  
          {/* Add more rows here as needed */}
        </div>
      </div>
    );
  };
  
  export default EditProfilePage;