import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  Text: {
    color: '#2a84ea',
    fontSize: '14px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: '18px',
    cursor: 'pointer',
  },
};

const defaultProps = {
  text: 'Log in',
};

const Text = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Use the navigate function to redirect to the /login route
    navigate('/login');
  };
  return (
    <div style={styles.Text} onClick={handleClick}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;