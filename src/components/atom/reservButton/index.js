"use client"
import { useAddToBasket } from '@/core/services/mutations'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

function ReservButton({id}) {

  const {mutate,isPending,data} = useAddToBasket()
  const router = useRouter()

  const cartHandler =async ()=>{

   mutate(id,{
    onSuccess:(data)=>{
      console.log(data);
      toast.success(data?.data?.message)
      router.push("/checkout")
    }
   })

  }
  return (
    <div>
        <button onClick={cartHandler} className='w-[283px] h-[56px] bg-[#28A745] rounded-[10px] flex items-center  justify-center mt-[29px] px-[12px]'>رزرو و خرید</button>
    </div>
  )
}

export default ReservButton