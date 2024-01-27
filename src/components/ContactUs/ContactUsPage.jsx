// ContactUsPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import ButtonSendMessage from './ButtonSendMessage';
import ButtonSignUp from './ButtonSignUp';
import CardFooterBackground from './CardFooterBackground';
import Header from './Header';
import ImageCaptcha from './ImageCaptcha';
import ImageFooterLogo from './ImageFooterLogo';
import ImageJumbotron from './ImageJumbotron';
import ImageLogo from './ImageLogo';
import InputFieldEmail from './InputFieldEmail';
import InputFieldMessage from './InputFieldMessage';
import InputFieldName from './InputFieldName';
import TextEmailField from './TextEmailField';
import TextMainBody from './TextMainBody';
import TextMainHeader from './TextMainHeader';
import TextMessageField from './TextMessageField';
import TextNameField from './TextNameField';
import TextPrivacyPolicy from './TextPrivacyPolicy';
import TextSignIn from './TextSignIn';
import TextTermsOfUse from './TextTermsOfUse';
import VerticalDividerFooter from './VerticalDividerFooter';
import { isValidFirstName, isValidEmail } from '../../validationUtils';

// Import other components as needed

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleNameChange = (e) => {
    setName(e.target.value);
    setValidationErrors({ ...validationErrors, name: '' });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidationErrors({ ...validationErrors, email: '' });
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setValidationErrors({ ...validationErrors, message: '' });
  };

  const handleNameBlur = () => {
    const isValid = isValidFirstName(name);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      name: isValid ? '' : 'Invalid name.',
    }));
  };

  const handleEmailBlur = () => {
    const isValid = isValidEmail(email);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      email: isValid ? '' : 'Invalid email.',
    }));
  };

  const handleMessageBlur = () => {
    const isValid = isValidFirstName(message); // Change this if needed
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      message: isValid ? '' : 'Invalid message.',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add your validation checks here before making the API call
      if (!isValidFirstName(name)) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          name: 'Invalid name.',
        }));
        console.error('Invalid name');
        return;
      }

      if (!isValidEmail(email)) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          email: 'Invalid email.',
        }));
        console.error('Invalid email');
        return;
      }

      if (!isValidFirstName(message)) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          message: 'Invalid message.',
        }));
        console.error('Invalid message');
        return;
      }

      // Add other validation checks as needed

      // Make an HTTP POST request to a hypothetical endpoint
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        name,
        email,
        message,
      });

      // Check the response and update state or show messages accordingly
      if (response.status === 201) {
        setFormSubmitted(true);
      } else {
        // Handle error
        console.error('Form submission failed');
      }
    } catch (error) {
      // Handle error
      console.error('Error during form submission', error);
    }
  };

  return (
    <div>
      <Header>
        {/* Header content */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ImageLogo />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextSignIn style={{ marginRight: '10px' }} />
            <ButtonSignUp />
          </div>
        </div>
      </Header>
  
      {/* Two columns under Header */}
      <div style={{ display: 'flex' }}>
        {/* Left column with ImageJumbotron */}
        <div style={{ flex: 1 }}>
          <ImageJumbotron />
        </div>
  
        {/* Right column with other elements */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <TextMainHeader />
          <TextMainBody />
  
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            {/* Name Field */}
        <TextNameField />
        <InputFieldName value={name} onChange={handleNameChange} onBlur={handleNameBlur} />
        {validationErrors.name && <div style={{ color: 'red' }}>{validationErrors.name}</div>}
  
        {/* Email Field */}
        <TextEmailField />
        <InputFieldEmail value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} />
        {validationErrors.email && <div style={{ color: 'red' }}>{validationErrors.email}</div>}
  
        {/* Message Field */}
        <TextMessageField />
        <InputFieldMessage value={message} onChange={handleMessageChange} onBlur={handleMessageBlur} />
        {validationErrors.message && <div style={{ color: 'red' }}>{validationErrors.message}</div>}
  
            {/* Use ButtonSendMessage as the submit button */}
            <ButtonSendMessage type="submit">Send Message</ButtonSendMessage>
          </form>
        </div>
      </div>
  
      {/* Elements under two columns and nested inside CardFooterBackground */}
      <CardFooterBackground>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <ImageFooterLogo />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextTermsOfUse />
            <VerticalDividerFooter />
            <TextPrivacyPolicy />
          </div>
        </div>
      </CardFooterBackground>
    </div>
  );  
};

export default ContactUsPage;