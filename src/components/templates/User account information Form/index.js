import { useSendUSerInformation } from '@/core/services/mutations';
import { useGetUserData } from '@/core/services/queries';
import React from 'react'
import { userAccountInformationSchema } from '@/core/utils/shemaUserAccountInformationForm';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


function UserAccountInformation({status}) {

    const {register,handleSubmit,formState:{errors},} = useForm({defaultValues:{
      gender:"",
    }},{
        resolver:zodResolver(userAccountInformationSchema)
    })


    const { data } = useGetUserData();
    const {mutate,data:send} = useSendUSerInformation()

    const submitHandler =  (data)=>{
        mutate(data,{
            onSuccess:(data)=>{
            toast.success(data?.data?.message)
            },
            onError:(error)=>console.log(error)

        })
        console.log(data);

    }

  return (

    <>
    
    <form onSubmit={handleSubmit(submitHandler)} >

    
    <div className="w-[872px] h-[130px] border border-solid border-[#00000033] mt-[37px] rounded-[10px]">
            <h1 className="pr-[12px] pt-[12px]">اطلاعات حساب کاربری</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center mt-[28px] pr-[32px] ">
                <p>شماره موبایل</p>
                <span className="mr-[32px]">{data?.data?.mobile}</span>
              </div>
              <div className="pl-[26px] flex items-center mt-[28px] ">
                <input {...register("email")}
                  placeholder="ادرس ایمیل"
                  className="w-[255px] h-[45px] border border-solid border-[#00000080] rounded-[5px] ml-[12px]"
                />
                <button type='submit' className="w-[122px] h-[45px] bg-[#28A745] text-white rounded-[5px]">
                  تایید
                </button>
              </div>
            </div>
          </div>
          </form>
          </>
  )
}

export default UserAccountInformation