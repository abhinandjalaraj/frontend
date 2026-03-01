"use client";

import React, { useState, FormEvent } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import type { StripePaymentElementOptions } from "@stripe/stripe-js";

type PaymentFormProps = {
  dpmCheckerLink?: string;
};

export default function PaymentForm({ dpmCheckerLink }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-status",
      },
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message ?? "Payment failed.");
      } else {
        setMessage("An unexpected error occurred.");
      }
    }

    setIsLoading(false);
  };

  // ✅ Correctly typed Stripe options
  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "accordion",
  };

  return (
    <div className="h-[70vh]">
      <form
        id="payment-form"
        className="overflow-hidden"
        onSubmit={handleSubmit}
      >
        <PaymentElement
          id="payment-element"
          options={paymentElementOptions}
        />

        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner" />
            ) : (
              "Pay now"
            )}
          </span>
        </button>

        {message && <div id="payment-message">{message}</div>}
      </form>

      {dpmCheckerLink && (
        <div id="dpm-annotation">
          <p>
            Payment methods are dynamically displayed based on customer
            location, order amount, and currency.{" "}
            <a
              href={dpmCheckerLink}
              target="_blank"
              rel="noopener noreferrer"
              id="dpm-integration-checker"
            >
              Preview payment methods by transaction
            </a>
          </p>
        </div>
      )}
    </div>
  );
}