import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextUsername from './TextUsername';
import TextTotalInt from './TextTotalInt';
import TextTotal from './TextTotal';
import TextSubtitle from './TextSubtitle';
import TextMyProjects from './TextMyProjects';
import TextInProcessInt from './TextInProcessInt';
import TextInProcess from './TextInProcess';
import TextHeader from './TextHeader';
import TextCompletedInt from './TextCompletedInt';
import TextCompleted from './TextCompleted';
import InputFieldSearch from './InputFieldSearch';
import ImageProfile from './ImageProfile';
import IconTotal from './IconTotal';
import IconSearch from './IconSearch';
import IconHome from './IconHome';
import IconCompleted from './IconCompleted';
import IconInProcess from './IconInProgress';
import CardTotalSubcard from './CardTotalSubcard';
import CardTotal from './CardTotal';
import CardSideBar from './CardSideBar';
import CardInProcessSubcard from './CardInProcessSubcard';
import CardInProcess from './CardInProcess';
import CardCompletedSubcard from './CardCompletedSubcard';
import CardCompleted from './CardCompleted';
import CardButtonBackground from './CardButtonBackground';
import ButtonCreateNew from './ButtonCreateNew';
import ButtonProjectsClosed from './ButtonProjectsClosed';
import ButtonProjectsCompleted from './ButtonProjectsCompleted';
import ButtonProjectsProgress from './ButtonProjectsProgress';
import CardActivityTracker from './CardActivityTracker';
import CardProjects from './CardProjects';
import TextActivityTracker from './TextActivityTracker';
import IconLogout from './IconLogout';
import CardMyTasks from './CardMyTasks';

const PMHSPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

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
      const response = await fetch('https://ef90-2600-1010-b022-c395-ccde-8ce7-1ab6-6289.ngrok-free.app/user', {
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

  // Log the userData variable
  console.log('User data:', userData);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
      {/* Main Content */}
      <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, width: '100%' }}>
        {/* Top Row */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', width: '100%' }}>
          {/* Left Section: TextHeader and TextSubtitle */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <TextHeader />
              {/* Add any other components you want to place to the right */}
            </div>
            {/* Subtitle Section */}
            <div>
              <TextSubtitle />
            </div>
          </div>
          {/* Middle Section: Search Bar */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <InputFieldSearch />
            {/* Include the search icon within InputFieldSearch component */}
          </div>
          {/* Right Section: ImageProfile, TextUsername, and IconLogout */}
<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
  {/* ImageProfile */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '10px' }}>
    {/* ImageProfile */}
    <ImageProfile />
    {/* TextUsername */}
    <TextUsername userData={userData} />
  </div>
  {/* IconLogout */}
  <IconLogout />
</div>
        </div>
        {/* Cards and Project Buttons Section */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', width: '100%' }}>
          {/* Left Section: Cards */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <CardInProcess>
              <CardInProcessSubcard>
                <IconInProcess />
              </CardInProcessSubcard>
              <TextInProcess />
              <TextInProcessInt />
            </CardInProcess>
            <CardCompleted>
              <CardCompletedSubcard>
                <IconCompleted />
              </CardCompletedSubcard>
              <TextCompleted />
              <TextCompletedInt />
            </CardCompleted>
            <CardTotal>
              <CardTotalSubcard>
                <IconTotal />
              </CardTotalSubcard>
              <TextTotal />
              <TextTotalInt />
            </CardTotal>
          </div>
          {/* Right Section: Project Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextMyProjects />
              <CardButtonBackground>
                <ButtonCreateNew />
                <ButtonProjectsClosed />
                <ButtonProjectsCompleted />
                <ButtonProjectsProgress />
              </CardButtonBackground>
            </div>
          </div>
        </div>
        {/* TextActivityTracker and CardActivityTracker */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%' }}>
            <TextActivityTracker />
            <CardActivityTracker />
          </div>
          <CardProjects />
        </div>
        {/* CardProjects */}
        {/* CardMyTasks */}
        <CardMyTasks />
      </div>
    </div>
  );
};

export default PMHSPage;