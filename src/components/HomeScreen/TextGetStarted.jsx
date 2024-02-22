//TextGetStarted.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  Text: {
    color: '#f1f5ec',
    fontSize: '16px',
    fontFamily: 'Work Sans',
    fontWeight: '500',
    lineHeight: '21px',
    cursor: 'pointer', // Add this to indicate it's clickable
    transition: 'transform 0.3s ease', // Add transition for transform property
  },
};

const defaultProps = {
  text: 'Get Started',
};

const TextGetStarted = (props) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Redirect to /signup
    navigate('/signup');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        ...styles.Text,
        transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Apply scale transform based on hover state
        ...props.style,
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default TextGetStarted;