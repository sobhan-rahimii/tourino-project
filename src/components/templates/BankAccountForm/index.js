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

    
    <div className="w-[872px] h-fit border border-solid border-[#00000033] rounded-[10px] mt-[19px]">
      <h1 className="pr-[12px] pt-[12px]">اطلاعات حساب بانکی</h1>
      <div className="flex items-center gap-8 pr-[16px] mt-[20px]">
        <input
          {...register("shaba_code")}
          placeholder="شماره شبا"
          className="w-[255px] h-[45px] border border-solid border-[#00000080] rounded-[5px]"
        />
        <input
          {...register("accountIdentifier")}
          placeholder="شماره حساب"
          className="w-[255px] h-[45px] border border-solid border-[#00000080] rounded-[5px]"
        />
        <input
          {...register("debitCard_code")}
          placeholder="شماره کارت"
          className="w-[255px] h-[45px] border border-solid border-[#00000080] rounded-[5px] "
        />
      </div>
      <div className="w-full border border-solid border-[#00000033] mt-[20px]"></div>
      <div className="flex items-center justify-end pl-[31px] mb-[8px] mt-[8px]">
        <button type="submit"  className="w-[144px] h-[41px] bg-[#28A745] rounded-[5px] text-white ml-[12px]">
          تایید
        </button>
        <button type="button"
          onClick={() => status(false)}
          className="w-[144px] h-[41px] bg-white text-[#28A745] rounded-[5px] border-2 border-solid border-[#28A745]  "
        >
          انصراف
        </button>
      </div>
    </div>
    </form>
  );
}

export default BankAccountForm;
