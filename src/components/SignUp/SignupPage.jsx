// SignupPage.jsx

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
} from '../../validationUtils';
import ButtonSignup from './ButtonSignup';
import Checkbox from './Checkbox';
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
import { motion } from "framer-motion";
import Popup from './Popup'

const SignupPage = () => {
  const [showEvdbPage, setShowEvdbPage] = useState(false);
  const [isAgreeChecked, setIsAgreeChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
    let formattedValue = value;

    // Check if the field is the email
  if (fieldName === 'email') {
    // Remove spaces
    formattedValue = formattedValue.replace(/\s/g, '');
    // Convert to lowercase
    formattedValue = formattedValue.toLowerCase();
  }

    if (fieldName === 'firstName' || fieldName === 'lastName') {
      // Remove leading and trailing spaces
      formattedValue = formattedValue.trim();
      // Capitalize the first letter
      formattedValue = formattedValue.charAt(0).toUpperCase() + formattedValue.slice(1);
    }
  
    // If the field is the phone number, format it
    if (fieldName === 'phone') {
      // Remove all non-digit characters
      const phoneNumber = value.replace(/\D/g, '');
      
      // Apply phone number format if it matches a specific pattern
      if (phoneNumber.length > 3 && phoneNumber.length <= 6) {
        formattedValue = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
      } else if (phoneNumber.length > 6) {
        formattedValue = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
      }
    }
  
    setFormData({
      ...formData,
      [fieldName]: formattedValue,
    });
  
    // Clear validation error for the current field when user starts typing
    setValidationErrors({
      ...validationErrors,
      [fieldName]: '',
    });
  };

  const isFormComplete = () => {
    // Check if all fields are not empty and validation errors are empty
    return (
      formData.firstName !== '' &&
      formData.lastName !== '' &&
      formData.title !== '' &&
      formData.company !== '' &&
      formData.phone !== '' &&
      formData.email !== '' &&
      formData.createPassword !== '' &&
      formData.confirmPassword !== '' &&
      validationErrors.firstName === '' &&
      validationErrors.lastName === '' &&
      validationErrors.title === '' &&
      validationErrors.company === '' &&
      validationErrors.phone === '' &&
      validationErrors.email === '' &&
      validationErrors.createPassword === '' &&
      validationErrors.confirmPassword === '' &&
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
            Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character
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
            setTimeout(() => {
              setShowEvdbPage(true);
            }, 0);
          } else {
            if (response.status === 400) {
              setErrorMessage('Email is already registered. Please use a different email.');
            } else {
              setErrorMessage('An error occurred. Please try again later.');
            }
          }
        } catch (error) {
          console.error('Error sending form data:', error);
          setErrorMessage('An error occurred while processing your request. Please try again later.');
        }
      } else {
        // Form is incomplete or invalid, handle accordingly
        console.log('Form is incomplete or invalid. Please check fields.');
        setErrorMessage('Form is incomplete or invalid. Please check fields.');
      }
    };

    return (
      <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh' }}>
      
      <div>
        <TextHeader/>
        <TextSubtitle/>
      </div>
      {/* First row */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div style={{ marginRight: '10px' }}>
          <TextFirstName/>
          <InputFieldFirstName
            value={formData.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            onBlur={handleFirstNameBlur}
          />
          {validationErrors.firstName && (
        <div style={{ color: 'red' }}>{validationErrors.firstName}</div>
      )}

        </div>
        <div style={{ marginLeft: '10px' }}>
        <TextLastName/>
          <InputFieldLastName
            value={formData.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            onBlur={handleLastNameBlur}
          />
          {validationErrors.lastName && (
        <div style={{ color: 'red' }}>{validationErrors.lastName}</div>
      )}
        </div>
      </div>

      {/* Second row */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div style={{ marginRight: '10px' }}>
          <TextTitle/>
          <InputFieldTitle
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            onBlur={handleTitleBlur}
          />
          {validationErrors.title && (
        <div style={{ color: 'red' }}>{validationErrors.title}</div>
      )}
        </div>
        <div style={{ marginLeft: '10px' }}>
        <TextCompany/>
          <InputFieldCompany
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            onBlur={handleCompanyBlur}
          />
          {validationErrors.company && (
        <div style={{ color: 'red' }}>{validationErrors.company}</div>
      )}
        </div>
      </div>

      {/* Third row */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
      <div style={{ marginRight: '10px' }}>
      <TextPhone/>
          <InputFieldPhone
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            onBlur={handlePhoneBlur}
          />
          {validationErrors.phone && (
        <div style={{ color: 'red' }}>{validationErrors.phone}</div>
      )}
        </div>
        <div style={{ marginLeft: '10px' }}>
        <TextEmail/>
          <InputFieldEmail
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={handleEmailBlur}
          />
          {validationErrors.email && (
        <div style={{ color: 'red' }}>{validationErrors.email}</div>
      )}
        </div>
      </div>

      {/* Fourth row */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginRight: '10px', width: '468px' }}>
          {/* First column */}
          <motion.div
          initial={{ scale: 0 }} // Initial scale is 0
          animate={{ scale: 1 }} // Animate to scale 1
          transition={{ duration: 1.0 }} // Transition duration
        ><ImageLogo/></motion.div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '10px'  }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', width: '468px' }}>
    <TextCreateAPassword />
  </div>
  <div style={{ marginBottom: '30px' }}>
        <InputFieldCAP
            value={formData.createPassword}
            onChange={(e) => handleChange('createPassword', e.target.value)}
            onBlur={handleCreatePasswordBlur}
            type="password"
          />
          {validationErrors.createPassword && (
        <div style={{ color: 'red', maxWidth: '468px' }}>{validationErrors.createPassword}</div>
      )}
    </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', width: '468px' }}>
    <TextConfirmPassword />
  </div>
  <div>
    <div style={{ marginBottom: '5px' }}>
          <InputFieldCP
            value={formData.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            onBlur={handleConfirmPasswordBlur}
            type="password"
          />
          {validationErrors.confirmPassword && (
        <div style={{ color: 'red', marginBottom: '5px' }}>{validationErrors.confirmPassword}</div>
        
      )}
      </div>
      </div>
          <div style={{ display: 'flex', marginBottom: '30px'}}>
            <Checkbox onChange={handleCheckboxChange} />
            <TextBySigning/>
            <motion.div
  whileHover={{ textDecoration: 'underline' }} // Add underline on hover
>
<TextTOU/>
</motion.div>
            
            <TextAnd/>
            <motion.div
  whileHover={{ textDecoration: 'underline' }} // Add underline on hover
>
<TextPrivacy/>
</motion.div>
            
          </div>
          {errorMessage && <div style={{ color: 'red', marginBottom: '2px' }}>{errorMessage}</div>}

          <motion.div
          initial={{ scale: 0 }} // Initial scale is 0
          animate={{ scale: 1 }} // Animate to scale 1
          whileHover={{ scale: 1.1 }} // Scale up to 1.1 when hovered
          transition={{ duration: 1.0 }} // Transition duration
        ><ButtonSignup disabled={!isFormComplete()} /></motion.div>
           
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
          <div style={{ display: 'flex' }}>
            <TextAlreadyHave/>
            <motion.div
  whileHover={{ textDecoration: 'underline' }} // Add underline on hover
>
<TextLogIn/>
</motion.div>
            
          </div>
        </div>
      </div>
      {showEvdbPage && <Popup />}
    </div>
    </form>
  );
};

export default SignupPage;