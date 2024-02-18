import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  Icon: {
    color: '#030303',
    fill: '#030303',
    fontSize: '58px',
    top: '32px',
    left: '1315px',
    width: '58px',
    height: '46px',
    marginRight: '20px'
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Clicked!');
    // Use the navigate function to redirect to the /homescreen route
    navigate('/');
  };

  const IconToRender = props.IconComponent ? props.IconComponent : defaultProps.IconComponent;

  return (
    <div style={{ cursor: 'pointer' }} onClick={handleClick}>
      <IconToRender style={styles.Icon} />
    </div>
  );
};

export default Icon;