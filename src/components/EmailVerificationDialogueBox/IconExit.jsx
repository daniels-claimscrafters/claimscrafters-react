import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  Icon: {
    color: '#030303',
    fill: '#030303',
    fontSize: '40px',
    top: '31px',
    left: '1352px',
    width: '40px',
    height: '40px',
  },
};

const IconExit = () => (
  <Link to="/login">
    <svg style={styles.Icon} viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M3 3v18h18V3H3zm14 12.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
    </svg>
  </Link>
);

export default IconExit;