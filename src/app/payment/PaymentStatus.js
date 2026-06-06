
"use client"
import Link from 'next/link';
import React from 'react'
import { useSearchParams } from 'next/navigation';

function PaymentStatus() {
    const searchParams = useSearchParams()
        const status = searchParams.get("status")
       console.log(status);
  
       if(status === "success") return(
    <div className='max-w-[1270px] px-10 m-auto flex justify-center' >

    <div className='border border-green-500 bg-green-50 w-fit rounded-lg p-20 mt-[50px]'>
        <p>پرداخت با موفقیت انجام شد</p>
        <Link href='/profile'>برو به پروفایل کاربری</Link>
    </div>
    </div>


  )
  return (
    <div className='max-w-[1270px] px-10 m-auto flex justify-center'>
        <div className='border border-red-500 bg-red-50 w-fit rounded-lg p-20 mt-[50px]'>
        <p>پرداخ انجام نشد!</p>
        </div>

    </div>
  )

}

export default PaymentStatus