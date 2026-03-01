"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { OrderApi } from "@/Api/Config/OrderApi";
import { stripePublishableKey } from "@/utils/BaseUrl";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(stripePublishableKey!);

type PaymentData = {
  data: {
    amount: number;
    sessionId: string;
  };
};

export default function PaymentClient() {
  const searchParams = useSearchParams();
  const orderID = searchParams.get("orderId");

  const [paymentData, setPaymentData] =
    useState<PaymentData | null>(null);

  useEffect(() => {
    if (orderID) {
      const fetchData = async () => {
        const response = await OrderApi.payment(orderID);
        setPaymentData(response);
      };
      fetchData();
    }
  }, [orderID]);

  const clientSecret = paymentData?.data?.sessionId;

  if (!clientSecret) return <div>Loading...</div>;

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <PaymentForm />
    </Elements>
  );
}