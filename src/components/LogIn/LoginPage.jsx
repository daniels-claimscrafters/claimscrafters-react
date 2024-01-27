// LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import ButtonLogIn from './ButtonLogIn';
import Checkbox from './Checkbox';
import IconEmail from './IconEmail';
import IconFacebook from './IconFacebook';
import IconGoogle from './IconGoogle';
import IconLinkedin from './IconLinkedin';
import IconPassword from './IconPassword';
import IconWindows from './IconWindows';
import ImageHeader from './ImageHeader';
import ImageJumbotron from './ImageJumbotron';
import InputFieldEmail from './InputFieldEmail';
import InputFieldPassword from './InputFieldPassword';
import TextEmailField from './TextEmailField';
import TextForgotPassword from './TextForgotPassword';
import TextIDHAA from './TextIDHAA';
import TextOr from './TextOr';
import TextPasswordField from './TextPasswordField';
import TextRememberMe from './TextRememberMe';
import TextSignup from './TextSignup';
import TextSubtitle from './TextSubtitle';
import TextTitle from './TextTitle';

// Import other components as needed

const LogInPage = () => {
  // State to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate email and password if needed

    try {
      // Make API call to your authentication endpoint
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        email,
        password,
      });

      // Check the response and handle accordingly
      if (response.status === 200) {
        // Successful login, you can redirect or perform other actions
        console.log('Login successful');
      } else {
        // Handle login failure
        console.error('Login failed');
      }
    } catch (error) {
      // Handle error
      console.error('Error during login', error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Left column with ImageJumbotron */}
      <div>
        <ImageJumbotron />
      </div>

      {/* Right column with form */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginLeft: '20px', textAlign: 'center' }}>
          <ImageHeader />
          <TextTitle />
          <TextSubtitle />

          {/* Form */}
          <form onSubmit={handleLogin}>
            {/* Email Field */}
            <div style={{ marginBottom: '10px' }}>
              <div>
                <TextEmailField />
                <InputFieldEmail value={email} onChange={(e) => setEmail(e.target.value)}>
                  <IconEmail style={{ marginLeft: '10px' }} />
                </InputFieldEmail>
              </div>
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: '10px' }}>
              <div>
                <TextPasswordField />
                <InputFieldPassword value={password} onChange={(e) => setPassword(e.target.value)}>
                  <IconPassword style={{ marginLeft: '10px' }} />
                </InputFieldPassword>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <TextRememberMe />
                <Checkbox />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <TextForgotPassword style={{ marginLeft: 'auto' }} />
              </div>
            </div>

            {/* Login Button */}
            <ButtonLogIn type="submit" />

            {/* Or text and social icons */}
            <TextOr />
            <div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
              <IconGoogle />
              <IconWindows />
              <IconLinkedin />
              <IconFacebook />
            </div>
          </form>
        </div>

        {/* IDHAA and Signup text */}
        <div style={{ marginLeft: '20px', display: 'flex' }}>
          <TextIDHAA />
          <TextSignup />
        </div>
      </div>
    </div>
  );
};

export default LogInPage;