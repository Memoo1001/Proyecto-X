import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import './Checkout.css';

// Replace with your Stripe public key
const stripePromise = loadStripe('pk_test_your_public_key');

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Here you would typically send the paymentMethod.id to your server
      // to complete the payment
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="form-row">
        <div className="payment-info">
          <h3>Secure Payment</h3>
          <div className="payment-methods">
            <img src="/visa.png" alt="Visa" />
            <img src="/mastercard.png" alt="Mastercard" />
            <img src="/amex.png" alt="American Express" />
          </div>
        </div>
        <div className="card-element-container">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#ffffff',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
              },
            }}
          />
        </div>
      </div>
      <button type="submit" disabled={!stripe} className="pay-button">
        Pay ${amount}
      </button>
      <div className="secure-badge">
        <span>🔒 Secure Payment</span>
        <p>Your payment information is encrypted and secure</p>
      </div>
    </form>
  );
};

const Checkout = ({ amount }) => {
  return (
    <div className="checkout-container">
      <Elements stripe={stripePromise}>
        <CheckoutForm amount={amount} />
      </Elements>
    </div>
  );
};

export default Checkout;
