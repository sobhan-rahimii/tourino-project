"use client";
import React from "react";
import { bankFormSchema } from "@/core/utils/schemaBankForm";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useSendUSerInformation } from "@/core/services/mutations";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function BankAccountForm({ status }) {
  const { register, handleSubmit, control, setValue, onChange, reset, watch } =
    useForm({
      resolver: zodResolver(bankFormSchema),
    });

    const {mutate,data} = useSendUSerInformation()

    const submitHandler = (data)=>{
      mutate({payment:data},{
        onSuccess:(data)=>{
          console.log(data),
          toast.success("اطلاعات با موفقیت وارد شد")
          status(false)
        },
        onError:(error)=>console.log(error),
      })

    }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>

    
    <div className=" w-full w-[328px] h-[294px] rounded-[10px] lg:w-[872px] lg:h-fit border border-solid border-[#00000033] lg:rounded-[10px] lg:mt-[19px]">
      <h1 className=" pr-[20px] pt-[16px] lg:pr-[12px] lg:pt-[12px]">اطلاعات حساب بانکی</h1>
      <div className=" pr-[20px] pl-[19px] flex flex-col lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:gap-8 lg:pr-[16px] lg:mt-[20px]">
        <input
          {...register("shaba_code")}
          placeholder="شماره شبا"
          className=" w-[289px] h-[40px] mt-[24px] lg:w-[255px] lg:mt-0 lg:h-[45px] border border-solid border-[#00000080] lg:rounded-[5px]"
        />
        <input
          {...register("accountIdentifier")}
          placeholder="شماره حساب"
          className=" w-[289px] h-[40px] mt-[16px] lg:w-[255px] lg:mt-0 lg:h-[45px] border border-solid border-[#00000080] lg:rounded-[5px]"
        />
        <input
          {...register("debitCard_code")}
          placeholder="شماره کارت"
          className=" w-[289px] h-[40px] mt-[16px] lg:mt-0 lg:w-[255px] lg:h-[45px] border border-solid border-[#00000080] lg:rounded-[5px] "
        />
      </div>
      <div className=" lg:hidden flex items-center pr-[20px] pl-[19px] gap-3  mt-[20px] ">
        <button type="submit" className="w-[138px] h-[41px] text-white bg-[#28A745] rounded-[5px]">تایید</button>
        <button onClick={()=>status(false)} className="w-[138px] h-[41px] text-[#28A745] border-2 border-solid border-[#28A745] bg-white rounded-[5px]">انصراف</button>
      </div>
      
      <div className=" hidden lg:block lg:w-full border border-solid border-[#00000033] lg:mt-[20px]"></div>
      <div className="hidden lg:block lg:flex lg:items-center lg:justify-end lg:pl-[31px] lg:mb-[8px] lg:mt-[8px]">
        <button type="submit"  className="lg:w-[144px] lg:h-[41px] bg-[#28A745] rounded-[5px] text-white ml-[12px]">
          تایید
        </button>
        <button type="button"
          onClick={() => status(false)}
          className="lg:w-[144px] lg:h-[41px] bg-white text-[#28A745] rounded-[5px] border-2 border-solid border-[#28A745]  "
        >
          انصراف
        </button>
      </div>
    </div>
    </form>
  );
}

export default BankAccountForm;
