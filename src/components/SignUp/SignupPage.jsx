import React, { useState } from 'react';
import {
  isValidFirstName,
  isValidLastName,
  isValidTitle,
  isValidCompany,
  isValidPhone,
  isValidEmail,
  isValidCreatePassword,
  isValidConfirmPassword,
  isFormComplete,
} from './validationUtils';
import ButtonFacebook from './ButtonFacebook';
import ButtonGoogle from './ButtonGoogle';
import ButtonLinkedIn from './ButtonLinkedIn';
import ButtonSignup from './ButtonSignup';
import ButtonWindows from './ButtonWindows';
import Checkbox from './Checkbox';
import IconCAP from './IconCAP';
import IconCompany from './IconCompany';
import IconCP from './IconCP';
import IconEmail from './IconEmail';
import IconFirstName from './IconFirstName';
import IconLastName from './IconLastName';
import IconTitle from './IconTitle';
import IconPhone from './IconPhone';
import ImageLogo from './ImageLogo';
import InputFieldCAP from './InputFieldCAP';
import InputFieldCompany from './InputFieldCompany';
import InputFieldCP from './InputFieldCP';
import InputFieldEmail from './InputFieldEmail';
import InputFieldFirstName from './InputFieldFirstName';
import InputFieldLastName from './InputFieldLastName';
import InputFieldPhone from './InputFieldPhone';
import InputFieldTitle from './InputFieldTitle';
import TextAlreadyHave from './TextAlreadyHave';
import TextAnd from './TextAnd';
import TextBySigning from './TextBySigning';
import TextCompany from './TextCompany';
import TextConfirmPassword from './TextConfirmPassword';
import TextCreateAPassword from './TextCreateAPassword';
import TextEmail from './TextEmail';
import TextFullName from './TextFullName';
import TextHeader from './TextHeader';
import TextLastName from './TextLastName';
import TextLogIn from './TextLogIn';
import TextPhone from './TextPhone';
import TextPrivacy from './TextPrivacy';
import TextSubtitle from './TextSubtitle';
import TextTitle from './TextTitle';
import TextTOU from './TextTOU';

const YourTargetComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    title: '',
    company: '',
    phone: '',
    email: '',
    createPassword: '',
    confirmPassword: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    firstName: '',
    lastName: '',
    title: '',
    company: '',
    phone: '',
    email: '',
    createPassword: '',
    confirmPassword: '',
  });

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });

    // Clear validation error for the current field when user starts typing
    setValidationErrors({
      ...validationErrors,
      [fieldName]: '',
    });
  };

  const handleFirstNameBlur = () => {
    const isValid = isValidFirstName(formData.firstName);
    console.log('First Name Validation Result:', isValid);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      firstName: isValid ? '' : 'Invalid first name.',
    }));
  };

  const handleLastNameBlur = () => {
    const isValid = isValidLastName(formData.lastName);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      lastName: isValid ? '' : 'Invalid last name.',
    }));
  };
  
  const handleTitleBlur = () => {
    const isValid = isValidTitle(formData.title);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      title: isValid ? '' : 'Invalid title.',
    }));
  };
  
  const handleCompanyBlur = () => {
    const isValid = isValidCompany(formData.company);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      company: isValid ? '' : 'Invalid company name.',
    }));
  };
  
  const handlePhoneBlur = () => {
    const isValid = isValidPhone(formData.phone);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      phone: isValid ? '' : 'Invalid phone number.',
    }));
  };
  
  const handleEmailBlur = () => {
    const isValid = isValidEmail(formData.email);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      email: isValid ? '' : 'Invalid email address.',
    }));
  };
  
  const handleCreatePasswordBlur = () => {
    const isValid = isValidCreatePassword(formData.createPassword);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      createPassword: isValid ? '' : 'Invalid create password.',
    }));
  };
  
  const handleConfirmPasswordBlur = () => {
    const isValid = isValidConfirmPassword(
      formData.confirmPassword,
      formData.createPassword
    );
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      confirmPassword: isValid ? '' : 'Confirm password does not match.',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const firstNameValid = isValidFirstName(formData.firstName);
    const lastNameValid = isValidLastName(formData.lastName);
    const titleValid = isValidTitle(formData.title);
    const companyValid = isValidCompany(formData.company);
    const phoneValid = isValidPhone(formData.phone);
    const emailValid = isValidEmail(formData.email);
    const createPasswordValid = isValidCreatePassword(formData.createPassword);
    const confirmPasswordValid = isValidConfirmPassword(
      formData.confirmPassword,
      formData.createPassword
    );

    // Update validation errors
    setValidationErrors({
      firstName: firstNameValid ? '' : 'Invalid first name.',
      lastName: lastNameValid ? '' : 'Invalid last name.',
      title: titleValid ? '' : 'Invalid title.',
      company: companyValid ? '' : 'Invalid company name.',
      phone: phoneValid ? '' : 'Invalid phone number.',
      email: emailValid ? '' : 'Invalid email address.',
      createPassword: createPasswordValid ? '' : 'Invalid create password.',
      confirmPassword: confirmPasswordValid
        ? ''
        : 'Confirm password does not match.',
    });

    // Log validation errors
    console.log('Validation Errors:', validationErrors);

    // Check if the form is complete and valid
    const isFormValid =
      isFormComplete(formData) &&
      firstNameValid &&
      lastNameValid &&
      titleValid &&
      companyValid &&
      phoneValid &&
      emailValid &&
      createPasswordValid &&
      confirmPasswordValid;

      // Log isFormValid
      console.log('Is Form Valid:', isFormValid);

      if (isFormValid) {
        try {
          // Perform form submission to the backend
          const response = await sendFormDataToBackend(formData);
    
          // Handle the backend response
          console.log('Backend Response:', response);
        } catch (error) {
          // Handle errors during backend submission
          console.error('Error submitting form to backend:', error);
        }
      } else {
        // Form is incomplete or invalid, handle accordingly
        console.log('Form is incomplete or invalid. Please check fields.');
      }
    };
    
    const sendFormDataToBackend = async (formData) => {
      // Implement your logic to send the form data to the backend
      // You can use fetch, axios, or any other method suitable for your backend API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    
      // Parse and return the response
      return response.json();
    };

    return (
      <form onSubmit={handleSubmit}>
      <div>
        <div>
        {/* Header */}
        <TextHeader />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {/* Social Media Buttons in a line with reduced gap */}
        <ButtonGoogle />
        <ButtonWindows />
        <ButtonLinkedIn />
        <ButtonFacebook />
      </div>

      <div>
        {/* Subtitle */}
        <TextSubtitle />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  {/* Left Column */}
  <div>
    <div>
      {/* Full Name */}
      <IconFirstName />
      <TextFullName />
      <InputFieldFirstName
        value={formData.firstName}
        onChange={(e) => handleChange('firstName', e.target.value)}
        onBlur={handleFirstNameBlur}
        type="text"
        text="First Name"
      />
      {validationErrors.firstName && (
        <div style={{ color: 'red' }}>{validationErrors.firstName}</div>
      )}
    </div>
    <div>
      {/* Title */}
      <IconTitle />
      <TextTitle />
      <InputFieldTitle
        value={formData.title}
        onChange={(e) => handleChange('title', e.target.value)}
        onBlur={handleTitleBlur}
      />
      {validationErrors.title && (
        <div style={{ color: 'red' }}>{validationErrors.title}</div>
      )}
    </div>
    <div>
      {/* Phone */}
      <IconPhone />
      <TextPhone />
      <InputFieldPhone
        value={formData.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
        onBlur={handlePhoneBlur}
      />
      {validationErrors.phone && (
        <div style={{ color: 'red' }}>{validationErrors.phone}</div>
      )}
    </div>
    <div>
      {/* Image Logo */}
      <ImageLogo />
    </div>
  </div>

  {/* Right Column */}
  <div>
    <div>
      {/* Last Name */}
      <IconLastName />
      <TextLastName />
      <InputFieldLastName
        value={formData.lastName}
        onChange={(e) => handleChange('lastName', e.target.value)}
        onBlur={handleLastNameBlur}
      />
      {validationErrors.lastName && (
        <div style={{ color: 'red' }}>{validationErrors.lastName}</div>
      )}
    </div>
    <div>
      {/* Company */}
      <IconCompany />
      <TextCompany />
      <InputFieldCompany
        value={formData.company}
        onChange={(e) => handleChange('company', e.target.value)}
        onBlur={handleCompanyBlur}
      />
      {validationErrors.company && (
        <div style={{ color: 'red' }}>{validationErrors.company}</div>
      )}
    </div>
    <div>
      {/* Email */}
      <IconEmail />
      <TextEmail />
      <InputFieldEmail
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
        onBlur={handleEmailBlur}
      />
      {validationErrors.email && (
        <div style={{ color: 'red' }}>{validationErrors.email}</div>
      )}
    </div>
    <div>
      {/* Create a Password */}
      <TextCreateAPassword />
      <InputFieldCAP
        type="password"
        value={formData.createPassword}
        onChange={(e) => handleChange('createPassword', e.target.value)}
        onBlur={handleCreatePasswordBlur}
      />
      {validationErrors.createPassword && (
        <div style={{ color: 'red' }}>{validationErrors.createPassword}</div>
      )}
    </div>
    <div>
      {/* Confirm Password */}
      <TextConfirmPassword />
      <InputFieldCP
        type="password"
        value={formData.confirmPassword}
        onChange={(e) => handleChange('confirmPassword', e.target.value)}
        onBlur={handleConfirmPasswordBlur}
      />
      {validationErrors.confirmPassword && (
        <div style={{ color: 'red' }}>{validationErrors.confirmPassword}</div>
      )}
    </div>
          <div>
          {/* Checkbox, Text By Signing, Text TOS, Text And, Text Privacy */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox />
            <TextBySigning />
            <TextTOU />
            <TextAnd />
            <TextPrivacy />
          </div>
        </div>
          <div>
            {/* Button Signup */}
            <ButtonSignup />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Text Already Have */}
            <TextAlreadyHave />
            <TextLogIn />
          </div>
        </div>
 </div>
      {/* Rest of your component code */}
    </div>
    </form>
    );
  };
  
  export default YourTargetComponent;