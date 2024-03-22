import React, { useState } from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '913px',
    left: '848px',
    width: '412px',
    height: '53px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#2a84ea',
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: '21px',
    outline: 'none',
    marginTop: '20px'
  },
  DisabledButton: {
    backgroundColor: '#999999',
    cursor: 'not-allowed',
  }
};

const defaultProps = {
  label: 'Send message',
};

const Button = (props) => {
  const { label, onClick, disabled } = props;
  const [isClicked, setIsClicked] = useState(false);

  const buttonStyle = {
    ...styles.Button,
    ...(isClicked && !disabled && { backgroundColor: '#1a63ff' }), // Change background color when clicked and not disabled
    ...(disabled && styles.DisabledButton), // Apply disabled style if the button is disabled
  };
  
  const handleClick = () => {
    if (!disabled) {
      setIsClicked(true); // Set isClicked to true when the button is clicked
      setTimeout(() => {
        setIsClicked(false); // Reset isClicked after 150ms
        // Call the onClick function if provided
        if (onClick) {
          onClick();
        }
      }, 150); // Delay resetting isClicked by 150 milliseconds
    }
  };

  return (
    <button style={buttonStyle} onClick={onClick} disabled={disabled}>
      {label ?? defaultProps.label}
    </button>
  );
};

export default Button;