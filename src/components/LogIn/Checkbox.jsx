import React from 'react';

const styles = {
  Container: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: '20px',
    height: '20px',
    pointerEvents: 'auto',
    color: 'rgba(42, 132, 234, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '5px',
    boxShadow: '2px 2px 4px rgba(3, 3, 3, 0.1)',
    border: 0,
  },
  Check: {
    display: 'none',
    transition: 'left 0.3s ease',
    zIndex: 1,
  },
  Input: {
    position: 'absolute',
    opacity: 0,
    visibility: 'hidden',
    width: '1px',
    height: '1px',
    pointerEvents: 'none',
  },
};

const Checkbox = ({ checked, onChange }) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <div style={styles.Container} onClick={handleClick}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {}}
      />
      {checked && <div style={styles.Check}>✓</div>}
    </div>
  );
};



export default Checkbox;