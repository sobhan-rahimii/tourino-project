"use client";
import React, { useState } from "react";
import ModalContainer from "@/components/partials/container/ModalContainer";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useGetUserData } from "@/core/services/queries";
import Link from "next/link";
import Image from "next/image";

function AuthForm() {
  const [step, setStep] = useState(1);
  const [isopen, setIsOpen] = useState(false);
  const [mobile, setMobile] = useState("");
  const { data } = useGetUserData();
  const { data: userData } = data || {};
  console.log(data);

  if (userData) return <Link href="/profile">{userData?.mobile}</Link>;
  return (
    <div >
      <div className="">
        <button
          onClick={() => setIsOpen(true)}
          className=" hidden lg:block w-[166px] h-[44px] font-vazirfdwoll text-[#28A745] text-lg border-2 border-solid border-custom-green rounded-lg"
        >
          ورود | ثبت نام
        </button>

        <button onClick={() => setIsOpen(true)} className="block lg:hidden">
          <Image src="/icons/signin.svg" width={40} height={40} alt="login" />
        </button>
      </div>
      {step === 1 && (
        <ModalContainer isopen={isopen} setIsOpen={setIsOpen}>
          <SendOtpForm
            setStep={setStep}
            mobile={mobile}
            setMobile={setMobile}
          />
        </ModalContainer>
      )}

      {step === 2 && (
        <ModalContainer isopen={isopen} setIsOpen={setIsOpen}>
          <CheckOtpForm
            mobile={mobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;
