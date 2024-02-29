// StripeCheckoutForm.jsx

// StripeCheckoutForm.jsx

// Import necessary libraries/components
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// StripeCheckoutForm component
const StripeCheckoutForm = ({ layoutOptions, onSubmit }) => {
  // Use Stripe and Elements hooks
  const stripe = useStripe();
  const elements = useElements();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded
      return;
    }

    // Use Stripe.js to tokenize card information
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      console.log('PaymentMethod:', paymentMethod);
      // Call onSubmit prop to handle form submission
      onSubmit && onSubmit(paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Customize the appearance of the CardElement */}
      <div style={{ marginBottom: '20px' }}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>
      {/* Customize the submit button */}
      <button
        type="submit"
        disabled={!stripe}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3366ff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Pay Now
      </button>
    </form>
  );
};

export default StripeCheckoutForm;