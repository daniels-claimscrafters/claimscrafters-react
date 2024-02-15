//PasswordResetPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidCreatePassword } from '../../validationUtils'; 
import axios from 'axios';
import ButtonSubmit from './ButtonSubmit';
import ImageMain from './ImageMain';
import InputFieldConfirmPassword from './InputFieldConfirmPassword';
import InputFieldNewPassword from './InputFieldNewPassword';
import TextConfirmPassword from './TextConfirmPassword';
import TextHeader from './TextHeader';
import TextNewPassword from './TextNewPassword';
import TextShow from './TextShow';

const PasswordResetPage = () => {
  // State variables to hold the new password and confirmed password
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const navigate = useNavigate();

  // Function to handle password change submission
  const handlePasswordChange = async () => {
    // Perform client-side validation
    if (!isValidCreatePassword(newPassword)) { // Validate the new password
      setErrorMessage('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Send request to server to change password
    try {
      const response = await axios.post('https://f133-2600-1010-b040-a157-f048-6b47-d705-e729.ngrok-free.app/auth/reset-password', {
        newPassword,
        confirmPassword,
        // Include any additional data needed for password reset, such as reset token
      });
      // Handle success response
      console.log('Password changed successfully');

      setShowSuccessDialog(true);

    } catch (error) {
      // Handle error response
      console.error('Error changing password:', error.response.data.error);
      setErrorMessage('Failed to change password. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ margin: '10px' }}>
        <ImageMain />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <TextHeader />
        <TextNewPassword />
        {/* Input field for new password */}
        <InputFieldNewPassword
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        >
          <TextShow />
        </InputFieldNewPassword>
        <TextConfirmPassword />
        {/* Input field to confirm new password */}
        <InputFieldConfirmPassword
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        >
          <TextShow />
        </InputFieldConfirmPassword>
        {/* Button to submit password change */}
        <ButtonSubmit onClick={handlePasswordChange} />
        {/* Display error message if any */}
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      </div>
      {showSuccessDialog && (
        <div className="dialog">
          <p>Password changed successfully!</p>
          <button onClick={() => {
            setShowSuccessDialog(false);
            navigate('/login'); // Redirect to login page
          }}>Continue to Login</button>
        </div>
      )}
    </div>
  );
};
  
export default PasswordResetPage;