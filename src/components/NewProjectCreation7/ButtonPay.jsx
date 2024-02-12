import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '796px',
    left: '842px',
    width: '534px',
    height: '56px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#2a84ea',
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: '26px',
    outline: 'none',
  },
};

const ButtonPay = ({ totalPrice, onClick }) => {
  const label = totalPrice ? `Pay $${totalPrice}` : 'Pay $0.00';

  return (
    <button style={styles.Button} onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtonPay;