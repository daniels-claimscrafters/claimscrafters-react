import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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

const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(''); // State for error message
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated (e.g., by checking the presence of a JWT token in the cookie)
    const isAuthenticated = document.cookie.includes('token='); // Adjust this logic as per your cookie setup
    setAuthenticated(isAuthenticated);
  }, []);

  useEffect(() => {
    // Redirect authenticated users away from the login page
    if (authenticated) {
      navigate('/pmhs'); // Redirect to the home page or another route
    }
  }, [authenticated, navigate]);

  useEffect(() => {
    const storedEmail = localStorage.getItem('rememberedEmail');
    if (storedEmail) {
      setEmail(storedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://ef90-2600-1010-b022-c395-ccde-8ce7-1ab6-6289.ngrok-free.app/auth/login', {
        email,
        password,
      });
      console.log('Login response:', response); // Log the entire response object
      if (response.status === 200) {
        // Extract token from login response
        const { token } = response.data;

        // Store token as HTTP cookie
        document.cookie = `token=${token}; path=/;`;

        console.log('Token stored:', token); // Log the stored token
        // Redirect to PMHS page upon successful login
        navigate('/pmhs');
        console.log('Redirecting to PMHS page...'); // Log the redirection attempt
      } else {
        setError('Login failed. Please check your credentials and try again.'); // Set error message
      }
    } catch (error) {
      console.error('Error during login', error);
      if (error.response && error.response.status === 401) {
        setError('Invalid credentials. Please check your email and password and try again.'); // Set error message for 401 response
      } else {
        setError('An error occurred during login. Please try again later.'); // Set generic error message
      }
    }
  };

  const handleRememberMeChange = (e) => {
    console.log('Checkbox state:', e.target.checked);
    console.log('Email:', email);
    
    setRememberMe(e.target.checked);
    if (e.target.checked) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
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

          {/* Error message */}
          {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

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
                <Checkbox checked={rememberMe} onChange={handleRememberMeChange} />
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