"use client"
import { Suspense } from "react";
import PaymentStatus from "./PaymentStatus";
function PaymentPage() {
  return (
    <Suspense fallback={
      <div className='max-w-[1270px] px-10 m-auto flex justify-center' >
        <p>در حال تایید وضعیت پرداخت</p>

      </div>
    }>
      <PaymentStatus />
    </Suspense>
  )
}

export default PaymentPage