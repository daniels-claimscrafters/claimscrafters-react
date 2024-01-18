// validationUtils.js

export const isValidFirstName = (firstName) => {
    // First name validation logic
    // Should contain only letters and have a minimum length of 2
    const nameRegex = /^[a-zA-Z]+$/;
  
    return (
      firstName.trim().length >= 2 &&
      nameRegex.test(firstName.trim())
    );
  };

export const isValidLastName = (lastName) => {
  // Last name validation logic
  // Should contain only letters and have a minimum length of 2
  const nameRegex = /^[a-zA-Z]+$/;

  return (
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
    // Check if all fields in the form data are filled
    return Object.values(formData).every((value) => value.trim() !== '');
  };