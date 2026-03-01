import { Suspense } from "react";
import PaymentClient from "./_components/PaymentClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading payment...</div>}>
      <PaymentClient />
    </Suspense>
  );
}