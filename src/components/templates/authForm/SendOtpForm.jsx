"use client";
import { useSendOtp } from "@/core/services/mutations";
import { isValidMobile } from "@/core/utils/validation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function SendOtpForm({ setStep,mobile,setMobile }) {
  const [error, setError] = useState("");

  const { isPending, mutate } = useSendOtp();

  const submitHandler = async (event) => {
    event.preventDefault();
    if (isPending) return;
    if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید");
    setError("");
    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          console.log(data);
          toast.success(data?.data?.message);
          toast(data?.data?.code);

          setStep(2);
        },
        onError:(error)=>{
          console.log(error);
        }
      },
    );
  };

  return (
    <div className="">

    <div className=" w-[358px] h-[362px]  rounded-[20px] flex flex-col  lg:w-[561px] lg:h-[362px] lg:rounded-[20px] bg-white pading-top-56-important ">
      <h4 className="font-YekanBakhBold600 text-[28px] text-center font-bold">
        ورود به تورینو
      </h4>
      <form
        onSubmit={submitHandler}
        className=" flex flex-col form-pading-right-important"
        >
        <label className="margin-top-label-important">
          شماره موبایل خود را وارد کنید
        </label>
        <input
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          type="text"
          className=" w-[278px] h-[54px] lg:w-[491px] lg:h-[54px] border border-solid border-black-input margin-top-input-important"
          placeholder="0918999****"
          />
        {!!error && <p className="text-red-500">{error}</p>}
        <button
          disabled={isPending}
          type="submit"
          className="w-[278px] h-[54px] lg:w-[491px] lg:h-[54px] bg-custom-green rounded-[6px] button-margin-top-important font-VazirFDWOL500 text-white text-lg"
          >
          ارسال کد تایید
        </button>
      </form>
    </div>
          </div>
  );
}

export default SendOtpForm;
