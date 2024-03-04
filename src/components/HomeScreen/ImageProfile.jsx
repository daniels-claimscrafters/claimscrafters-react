import React, { useState, useEffect } from 'react';
import axios from 'axios';

const styles = {
  ImageContainer: {
    top: '25px',
    left: '1323px',
    width: '60px',
    height: '60px',
    borderRadius: '100000px',
    border: '1px solid #c2c2c2',
    boxSizing: 'border-box',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: '5px',
  },
};

const ImageProfile = ({ userData }) => {
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const userId = userData?.id; // Use optional chaining to prevent errors if userData is null or undefined

  useEffect(() => {
    if (userId) { // Check if userId is truthy
      // Define your headers
      const headers = {
        'Content-Type': 'application/json', // Adjust content type if needed
        'ngrok-skip-browser-warning': '69420', // Include your access token
      };
    
      // Fetch the user's profile image URL from the server
      axios.get(`https://f133-2600-1010-b040-a157-f048-6b47-d705-e729.ngrok-free.app/auth/get-profile-picture?userId=${userId}`, {
        headers: headers // Pass the headers object here
      })
        .then(response => {
          console.log(response.data);
          setProfileImageUrl(response.data.profilePictureUrl);
        })
        .catch(error => {
          console.error('Error fetching profile picture:', error);
        });
    }
  }, [userId]); // Include userId in the dependency array

  // If userId is not available or profileImageUrl is null, render null
  if (!userId || !profileImageUrl) {
    return null;
  }

  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${profileImageUrl})`,
    }} />
  );
};

export default ImageProfile;
