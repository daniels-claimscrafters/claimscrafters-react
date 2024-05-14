import React, { useState } from "react";
import { BiBorderBottom } from "react-icons/bi";

const styles = {
  Dropdown: {
    cursor: "pointer",
    top: "1007px",
    left: "912px",
    width: "100%",
    height: "45px",
    padding: "0px 8px",
    borderBottom: "2px solid white",
    boxSizing: "border-box",
    backgroundColor: "#04101E",

    fontSize: "20px",
    fontFamily: "Poppins",
    lineHeight: "26px",
    outline: "none",
  },
  ErrorMessage: {
    color: "red",
    marginTop: "5px",
    fontSize: "14px",
  },
};

const defaultProps = {
  values: [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ],
};

const Dropdown = (props) => {
  const { value, onChange } = props;
  const [validationError, setValidationError] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    console.log(`Dropdown - New value: ${newValue}`);
    onChange("lossState", newValue);

    // Clear validation error when user selects an option
    setValidationError("");
  };

  const handleBlur = () => {
    // Check if value is defined before validation
    if (value !== undefined && value.trim() === "") {
      console.log(`Dropdown - Validation error: Please select a state`);
      // Set the validation error
      setValidationError("Please select a state");
    }
  };

  return (
    <div>
      <select
        style={styles.Dropdown}
        defaultValue=""
        value={value || ""}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value="" disabled hidden>
          {/* {props.label ?? defaultProps.label} */}
          select
        </option>
        {(props.values ?? defaultProps.values).map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
      {validationError && (
        <div style={styles.ErrorMessage}>{validationError}</div>
      )}
    </div>
  );
};

export default Dropdown;
