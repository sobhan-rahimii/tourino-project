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
        <button onClick={cartHandler} className='hidden lg:block lg:w-[283px] lg:h-[56px] bg-[#28A745] lg:rounded-[10px] lg:flex lg:items-center  lg:justify-center lg:mt-[29px] lg:px-[12px]'>رزرو و خرید</button>
        <button onClick={cartHandler} className='lg:hidden text-white w-[154px] h-[42px] bg-[#28A745] rounded-[10px]  '>رزرو و خرید</button>
    </div>
  )
}

export default ReservButton