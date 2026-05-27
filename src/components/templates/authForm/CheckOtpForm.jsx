"use client";
import { useCheckOtp } from "@/core/services/mutations";
import React, { useState } from "react";
import toast from "react-hot-toast";
import OtpInput from "react18-input-otp";

function CheckOtpForm({ mobile, setStep,setIsOpen }) {
  const [code, setCode] = useState("");

  const {isPending,mutate} = useCheckOtp()

  const handleChange = (otp) => setCode(otp);
  const submitHandler = (event) => {
    event.preventDefault();
    if (isPending) return

    mutate({mobile,code},{
      onSuccess:(data)=>{
        setStep(1)
        setIsOpen(false)
        toast.success("ورود به حساب کاربری")
        console.log(data);
      },
      onError:(error)=>{console.log(error);}

    })
  };

  return (
    <div className="w-[358px] h-[362px]  flex flex-col lg:w-[571px] lg:h-[362px] lg:rounded-[20px] rounded-[20px] bg-white pading-top-56-important">
      <h4 className="text-center font-YekanBakhBold600 lg:text-[28px] text-[22px] ">کدتایید را وارد کنید</h4>
      <form onSubmit={submitHandler} className="text-center">
        <label className="font-YekanBakhBold text-[16px]">کد تایید به شماره {mobile} ارسال شد</label>
        <div style={{ direction: "ltr",display:"flex", justifyContent:"center", marginTop:"18px" }}>
          <div className=" ltr flex justify-cente">
          <OtpInput
            value={code}
            onChange={handleChange}
            numInputs={6}
            
            className="border border-solid border-silver rounded-[5px] lg:w-[58px] lg:h-[53px] lg:m-[12px] w-[50px] h-[45px] m-[4px] rounded-[6px] justify-center mt-[21px]  "
            // inputStyle={{ border: "1px solid silver", borderRadius: "5px",width:"58px", height:"53px",margin:"12px",textAlign:"center" }}
            />
            </div>
        </div>

        <button
          // disabled={isPending}
          type="submit"
          className=" w-[278px] h-[54px] mt-[70px] lg:w-[491px] lg:h-[54px] bg-custom-green rounded-[6px] lg:mt-[62px] font-VazirFDWOL500 text-white text-lg"
        >
          ورود به تورینو
        </button>
      </form>
    </div>
  );
}

export default CheckOtpForm;
