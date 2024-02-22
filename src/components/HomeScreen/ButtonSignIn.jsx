import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '43px',
    left: '1265px',
    width: '120px',
    height: '36px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#2a84ea',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Poppins',
    lineHeight: '16px',
    outline: 'none',
    marginRight: '40px',
    marginLeft: '20px',
    transition: 'transform 0.3s ease', // Adding transition for transform property
  },
};

const defaultProps = {
  label: 'Log in',
};

const Button = (props) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Use the navigate function to redirect to the /login route
    navigate('/login');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button 
      style={{
        ...styles.Button,
        transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Apply scale transform based on hover state
      }} 
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
