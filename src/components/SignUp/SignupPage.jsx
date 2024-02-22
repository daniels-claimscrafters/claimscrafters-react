// SignupPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
} from '../../validationUtils';
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
import TextFirstName from './TextFirstName';
import TextHeader from './TextHeader';
import TextLastName from './TextLastName';
import TextLogIn from './TextLogIn';
import TextPhone from './TextPhone';
import TextPrivacy from './TextPrivacy';
import TextSubtitle from './TextSubtitle';
import TextTitle from './TextTitle';
import TextTOU from './TextTOU';
import IconHome from './IconHome';



const YourTargetComponent = () => {

  const navigate = useNavigate();

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

  const [isAgreeChecked, setIsAgreeChecked] = useState(false);

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });

    console.log('Current Form Data:', formData);

    // Clear validation error for the current field when user starts typing
    setValidationErrors({
      ...validationErrors,
      [fieldName]: '',
    });
  };

  const isFormComplete = () => {
    return (
      formData.firstName !== '' &&
      formData.lastName !== '' &&
      formData.title !== '' &&
      formData.company !== '' &&
      formData.phone !== '' &&
      formData.email !== '' &&
      formData.createPassword !== '' &&
      formData.confirmPassword !== '' &&
      isAgreeChecked
    );
};

  const handleFirstNameBlur = () => {
    const isValid = isValidFirstName(formData.firstName);
    console.log('First Name Validation Result:', isValid);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      firstName: isValid ? '' : 'Invalid first name.',
    }), () => {
      console.log('Validation Errors After Update:', validationErrors);
    });
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
      createPassword: isValid
        ? ''
        : (
          <>
            Password must be at least 8 characters long and contain at least one<br />
            uppercase letter, one lowercase letter, one number, and one special character
          </>
        ),
    }));
  };
  
  const handleConfirmPasswordBlur = () => {
    const isValid = isValidConfirmPassword(
      formData.confirmPassword,
      formData.createPassword
    );
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      confirmPassword: isValid ? '' : 'Password does not match.',
    }));
  };

  const handleCheckboxChange = (isChecked) => {
    setIsAgreeChecked(isChecked);
    console.log('Checkbox State (parent):', isChecked);
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
      confirmPassword: confirmPasswordValid ? '': 'Confirm password does not match.',
      isAgreeChecked: isAgreeChecked ? '' : 'Please agree to terms.',
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
      confirmPasswordValid &&
      isAgreeChecked;

      // Check the checkbox state separately
      const isCheckboxChecked = isAgreeChecked;

      // Log isFormValid
      console.log('Is Form Valid:', isFormValid);
      console.log('Is Checkbox Checked:', isCheckboxChecked);

      if (isFormValid) {
        try {
          const response = await fetch('https://f133-2600-1010-b040-a157-f048-6b47-d705-e729.ngrok-free.app/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Redirect to '/evdb' upon successful signup
            navigate('/evdb');
          } else {
            // Handle signup failure (e.g., display error message)
          }
        } catch (error) {
          console.error('Error sending form data:', error);
          // Handle error (e.g., display error message)
        }
      } else {
        // Form is incomplete or invalid, handle accordingly
        console.log('Form is incomplete or invalid. Please check fields.');
      }
    };
    
    const sendFormDataToBackend = async (formData) => {
      // Implement your logic to send the form data to the backend
      // You can use fetch, axios, or any other method suitable for your backend API
      const response = await fetch('https://f133-2600-1010-b040-a157-f048-6b47-d705-e729.ngrok-free.app/auth/register', {
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  {/* TextHeader */}
  <div style={{ flex: '1', textAlign: 'center' }}>
    <TextHeader />
  </div>
  {/* IconHome */}
  <IconHome />
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
      <TextFirstName />
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
            <Checkbox onChange={handleCheckboxChange} />
            <TextBySigning />
            <TextTOU />
            <TextAnd />
            <TextPrivacy />
          </div>
        </div>
          <div>
            {/* Button Signup */}
            <ButtonSignup disabled={!isFormComplete()} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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