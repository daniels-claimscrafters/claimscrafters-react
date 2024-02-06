// validationUtils.js

export const isValidFirstName = (firstName) => {
  console.log('Checking first name:', firstName);
  // First name validation logic
  // Should contain only letters and have a minimum length of 2
  const nameRegex = /^[a-zA-Z]+$/;

  return (
    firstName.trim() !== '' &&
    firstName.trim().length >= 2 &&
    nameRegex.test(firstName.trim())
  );
};

export const isValidLastName = (lastName) => {
  // Last name validation logic
  // Should contain only letters and have a minimum length of 2
  const nameRegex = /^[a-zA-Z]+$/;

  return (
    lastName.trim() !== '' &&
    lastName.trim().length >= 2 &&
    nameRegex.test(lastName.trim())
  );
};

export const isValidTitle = (title) => {
  // Title validation logic
  // Add your own criteria (e.g., should not be empty and have a minimum length)
  return title.trim() !== '' && title.trim().length >= 2; // Adjust the minimum length as needed
};

export const isValidCompany = (company) => {
  // Company validation logic
  // Add your own criteria (e.g., should not be empty and have a minimum length)
  return company.trim() !== '' && company.trim().length >= 2; // Adjust the minimum length as needed
};

export const isValidPhone = (phone) => {
  // Phone validation logic
  // Allow numbers, spaces, parentheses, hyphens, and plus sign
  const phoneRegex = /^[\d\s().+-]+$/;

  return (
    phone.trim() !== '' &&
    phoneRegex.test(phone.trim()) &&
    phone.trim().replace(/[\s().+-]/g, '').length >= 10 // Require at least 10 digits
  );
};

export const isValidEmail = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  return emailRegex.test(email);
};

export const isValidPhoneNPC = (phone) => {
  const phoneRegex = /^[\d\s().+-]+$/;
  
  const cleanedPhone = phone.trim().replace(/[\s().+-]/g, '');
  console.log('Cleaned Phone:', cleanedPhone);

  const isValid =
    cleanedPhone !== '' &&
    phoneRegex.test(phone.trim()) &&
    cleanedPhone.length >= 10;

  console.log('Is Valid Phone:', isValid);
  
  return isValid
    ? null // Validation passed
    : 'Invalid phone number'; // Validation failed
};

export const isValidEmailNPC = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  console.log('Email:', email);
  const isValid = emailRegex.test(email);
  console.log('Is Valid Email:', isValid);
  
  return isValid
    ? null // Validation passed
    : 'Invalid email address'; // Validation failed
};

export const isValidCreatePassword = (createPassword) => {
  // Password must be at least 8 characters long and contain at least one uppercase letter,
  // one lowercase letter, one number, and one special character
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

  return passwordRegex.test(createPassword);
};

export const isValidConfirmPassword = (confirmPassword, createPassword) => {
  // Confirm Password validation logic
  // Check if it matches the Create Password
  return confirmPassword === createPassword;
};

export const isFormComplete = (formData) => {
  // Check if all required fields in the form data are filled
  return (
    formData.firstName.trim() !== '' &&
    formData.lastName.trim() !== '' &&
    formData.title.trim() !== '' &&
    formData.company.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.createPassword.trim() !== '' &&
    formData.confirmPassword.trim() !== ''
    // Add other required fields as needed
  );
};

export const isNotEmpty = (value) => {
  // Check if the value is empty or consists only of whitespaces
  if (value.trim() === '') {
    return 'Field cannot be empty.';
  }
  return ''; // No error
};

export const isValidDateFormat = (date) => {
  // Date format validation logic
  const dateFormatRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

  return date.trim() !== '' && dateFormatRegex.test(date.trim());
};