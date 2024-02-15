import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '31px',
    left: '1176px',
    width: '120px',
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
    marginRight: '30px',
  },
};

const defaultProps = {
  label: 'Sign up',
};

const Button = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Use the navigate function to redirect to the /login route
    navigate('/signup');
  };

  return (
    <button style={styles.Button} onClick={handleClick}>
      {props.label ?? defaultProps.label}
      
    </button>
  );
};

export default Button;