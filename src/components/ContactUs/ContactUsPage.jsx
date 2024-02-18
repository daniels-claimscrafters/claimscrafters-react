// ContactUsPage.jsx
import React, { useState, useEffect } from 'react';
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
import ReCAPTCHA from "react-google-recaptcha";

// Import other components as needed

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState('');
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  console.log("Initial state of submitEnabled:", submitEnabled);
  console.log("Initial state of name:", name);
  console.log("Initial state of email:", email);
  console.log("Initial state of message:", message);
  console.log("Initial state of recaptchaValue:", recaptchaValue);

  useEffect(() => {
    // Enable submit button if all fields are filled and recaptcha is completed
    setSubmitEnabled(!!name && !!email && !!message && !!recaptchaValue);
  }, [name, email, message, recaptchaValue]);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setSubmitEnabled(!!value); // Enable the submit button if the reCAPTCHA value is truthy
    console.log("reCAPTCHA value:", value);
    console.log("Submit enabled:", submitEnabled);
  };

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

    console.log("Form submitted with reCAPTCHA value:", recaptchaValue);

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
      const response = await axios.post('https://f133-2600-1010-b040-a157-f048-6b47-d705-e729.ngrok-free.app/email/contact', {
      name,
      email,
      message,
      recaptchaToken: recaptchaValue, // Include the reCAPTCHA token in the request
    });

    // Check the response and update state or show messages accordingly
    if (response.status === 200) {
      setFormSubmitted(true);
      setSuccessMessage('Your message was sent successfully!');
      // Optionally, you can reset the form fields here:
      setName('');
      setEmail('');
      setMessage('');
      setRecaptchaValue('');
    } else {
      console.error('Form submission failed');
    }
  } catch (error) {
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

          {formSubmitted && (
            <div style={{ color: 'green', marginBottom: '10px' }}>
              {successMessage}
            </div>
          )}
  
          <form onSubmit={handleSubmit}>
  {/* Name Field */}
  <div>
    <TextNameField />
    <InputFieldName value={name} onChange={handleNameChange} onBlur={handleNameBlur} />
    {validationErrors.name && <div style={{ color: 'red' }}>{validationErrors.name}</div>}
  </div>

  {/* Email Field */}
  <div>
    <TextEmailField />
    <InputFieldEmail value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} />
    {validationErrors.email && <div style={{ color: 'red' }}>{validationErrors.email}</div>}
  </div>

  {/* Message Field */}
  <div>
    <TextMessageField />
    <InputFieldMessage value={message} onChange={handleMessageChange} onBlur={handleMessageBlur} />
    {validationErrors.message && <div style={{ color: 'red' }}>{validationErrors.message}</div>}
  </div>

  {/* reCAPTCHA v3 */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* ReCAPTCHA */}
      <ReCAPTCHA
          sitekey="6LduMHIpAAAAALziGJQsC8-wQg5SOI_8C7b7QneU" // Your reCAPTCHA site key
          onChange={handleRecaptchaChange}
        />
    </div>


  {/* Use ButtonSendMessage as the submit button */}
  <ButtonSendMessage type="submit" disabled={!submitEnabled}>Send Message</ButtonSendMessage>
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