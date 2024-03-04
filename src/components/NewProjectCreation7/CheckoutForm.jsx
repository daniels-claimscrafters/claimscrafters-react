import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const CheckoutForm = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeStripe = async () => {
      const stripe = await loadStripe('pk_test_51NiiAZCjhYpSpOvRGjQmKbqADIMOaR1nvbnfy4UNdQ7d39Y9hkuMth2JT7WicwuuxcYDHLfCjBmJ7X5HYDLNMw2B00OpdnRxnO');
      
      const appearance = { /* appearance */ };
      const options = {
        layout: {
          type: 'accordion',
          defaultCollapsed: false,
          radios: false,
          spacedAccordionItems: true
        }
      };

      const elements = stripe.elements({ appearance });
      const paymentElement = elements.create('payment', options);
      paymentElement.mount('#payment-element');
    };

    initializeStripe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Handle form submission (e.g., payment processing)
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Stripe Element Container */}
      <div id="payment-element">
        {/* Display errors */}
        {error && <span>{error}</span>}
      </div>

      {/* Submit Button */}
      <button type="submit">Pay</button>
    </form>
  );
};

export default CheckoutForm;

