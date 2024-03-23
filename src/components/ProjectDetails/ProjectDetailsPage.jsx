// ProjectDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextHeader from './TextHeader';
import ImageProfile from './ImageProfile';
import ImageHeader from './ImageHeader';
import CardChangelog from './CardChangelog';
import HeaderBackground from './HeaderBackground';
import CardValuation from './CardValuation';
import CardDetails from './CardDetails';
import CardContents from './CardContents';

const ProjectDetailsPage = () => {
    const navigate = useNavigate();
    const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const projectId = urlParams.get('projectId');
// This will log '59'
    const [projectDetails, setProjectDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const API_URL = process.env.REACT_APP_API_URL;
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
      const response = await fetch(`${API_URL}/auth/get-user`, {
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
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        navigate('/login');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      navigate('/login');
    }
  };

    useEffect(() => {
        // Fetch project details from the server using the extracted project ID
        fetch(`${API_URL}/npc/details?projectId=${projectId}`, {
            headers: {
                'ngrok-skip-browser-warning': '69420'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Received project details:', data);
            setProjectDetails(data);
            setIsLoading(false); // Update loading state when data is fetched

            console.log('userdata: ', userData.id)
            console.log('projectdetails: ', data.project.userId)

            const isUserIdMatch = userData && data.project.userId === userData.id;

            console.log('User ID match:', isUserIdMatch);

            if (!isUserIdMatch) {
                console.log('User ID does not match. Redirecting...');
                navigate('/pmhs');
            }
        })
        .catch(error => {
            console.error('Error fetching project details:', error);
            //navigate('/pmhs');
        });
    }, [projectId]); // Re-run effect whenever projectId changes

    

    const handleUpdateProjectDetails = (updatedDetails) => {
        setProjectDetails(updatedDetails);
    };
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!projectDetails) {
        return <div>Error: Unable to fetch project details</div>;
    }
    

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', minHeight: '720px', minWidth: '1280px' }}>
            <HeaderBackground>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <ImageHeader />
                    <TextHeader />
                    <ImageProfile />
                </div>
            </HeaderBackground>
            
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '50vh' }}>
                <div style={{ flex: 1, padding: '10px', width: '80%' }}>
                    {/* Pass projectDetails as props to CardDetails */}
                    <CardDetails projectDetails={projectDetails} />
                    {/* Pass projectDetails as props to CardValuation */}
                    <CardValuation projectDetails={projectDetails} />
                </div>
                <div style={{ paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px', width: '15%'}}>
                    <CardChangelog projectDetails={projectDetails}/>
                </div>
            </div>
            <div style={{ display: 'flex', padding: '10px', height: '37vh' }}>
                {/* Pass projectDetails as props to CardContents */}
                <CardContents 
                    projectDetails={projectDetails} 
                    setProjectDetails={handleUpdateProjectDetails}
                    userData={userData}
                />
            </div>
        </div>
    );
};
  
  export default ProjectDetailsPage;