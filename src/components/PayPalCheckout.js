import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React, { useState } from 'react';
import './PayPalCheckout.css';

const PayPalCheckout = ({ amount }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const initialOptions = {
    "client-id": "ATfrnCcJEgNFO-WYbnPxtUQPUZWg-B5cUAJudijoYFbtIusZo3aCU2OzPSoY-Ven9YHEewN5aHwBFhFF",
    currency: "USD",
    intent: "capture",
  };

  return (
    <div className="paypal-container">
      <div className="secure-payment-header">
        <h3>🔒 Pago Seguro</h3>
        <p>Paga de forma segura con PayPal o tarjeta de crédito</p>
      </div>

      {loading && (
        <div className="loading-spinner">
          <p>Cargando opciones de pago...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>Error: {error}</p>
          <button onClick={() => window.location.reload()}>
            Intentar de nuevo
          </button>
        </div>
      )}

      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            layout: "vertical",
            color: "blue",
            shape: "rect",
            label: "pay"
          }}
          onInit={() => setLoading(false)}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount.toString(),
                    currency_code: "USD"
                  },
                  description: "Rick and Morty Shop Purchase"
                },
              ],
            }).catch(err => {
              setError("Error al crear la orden. Por favor, intenta de nuevo.");
              console.error("Error creating order:", err);
            });
          }}
          onApprove={async (data, actions) => {
            try {
              const details = await actions.order.capture();
              alert("¡Pago completado! Gracias por tu compra, " + details.payer.name.given_name);
            } catch (error) {
              setError("Error al procesar el pago. Por favor, intenta de nuevo.");
              console.error('Error al procesar el pago:', error);
            }
          }}
          onError={(err) => {
            setError("Error con PayPal. Por favor, intenta de nuevo más tarde.");
            console.error('Error PayPal:', err);
          }}
        />
      </PayPalScriptProvider>

      <div className="payment-info">
        <div className="payment-methods">
          <img src="/visa.png" alt="Visa" />
          <img src="/mastercard.png" alt="Mastercard" />
          <img src="/paypal.png" alt="PayPal" />
        </div>
        <p className="secure-note">
          🔒 Tu información de pago está segura y encriptada
        </p>
      </div>
    </div>
  );
};

export default PayPalCheckout;
