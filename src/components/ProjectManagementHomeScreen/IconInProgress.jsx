import React from 'react';

const styles = {
  Icon: {
    color: '#030303',
    fill: '#030303',
    fontSize: '40px',
    top: '160px',
    left: '156px',
    width: '40px',
    height: '40px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z">
    </path>
    <path d="M22 10v8h-2v-8h2zm-2 10v2h2v-2h-2zm-2-2.71A7.99 7.99 0 0 1 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8v9l7.55-7.55A9.965 9.965 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.25 0 4.33-.74 6-2v-2.71z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;