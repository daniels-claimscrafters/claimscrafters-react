// InputFieldPostalCode.jsx

import React, { useState } from "react";
import { isValidPostalCode } from "../../validationUtils";

const styles = {
  Input: {
    width: "100%",
  },
  ErrorMessage: {
    color: "red",
    marginTop: "5px",
    fontSize: "14px",
  },
};

const defaultProps = {
  text: "Postal Code",
};

const InputField = (props) => {
  const { value, onChange, text, updateValidationErrors, userData } = props;
  const [error, setError] = useState("");
  const postalCode = userData.postalCode;

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // Limit the input length to 5 digits
    if (inputValue.length > 5) {
      e.target.value = inputValue.slice(0, 5);
    }

    if (inputValue.length <= 5) {
      if (!isValidPostalCode(inputValue)) {
        setError("Invalid postal code");
        updateValidationErrors(true);
      } else {
        setError("");
        updateValidationErrors(false);
      }
    }

    onChange(e);
  };

  return (
    <div className="inputFill">
      <input
        style={styles.Input}
        placeholder={postalCode ?? defaultProps.text}
        value={value}
        onChange={handleInputChange}
      />
      {error && <div style={styles.ErrorMessage}>{error}</div>}
    </div>
  );
};

export default InputField;
