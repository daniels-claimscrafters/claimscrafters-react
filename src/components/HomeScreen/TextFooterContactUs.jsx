import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Poppins',
    lineHeight: '23px',
    cursor: 'pointer', // Add this to indicate it's clickable
  },
};

const defaultProps = {
  text: 'Contact Us',
};

const Text = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to /signup
    navigate('/contactus');
  };

  return (
    <div
      style={{ ...styles.Text, ...props.style }}
      onClick={handleClick}
    >
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;