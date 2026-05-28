"use client";
import React, { useState } from "react";
import ModalContainer from "@/components/partials/container/ModalContainer";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useGetUserData } from "@/core/services/queries";
import Link from "next/link";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/templates/ui/dropdown-menu";
import { Button } from "@/components/templates/ui/button";
import { LogIn, LogOut, User, ChevronDown } from "lucide-react";

function AuthForm() {
  const [step, setStep] = useState(1);
  const [isopen, setIsOpen] = useState(false);
  const [mobile, setMobile] = useState("");
  const { data } = useGetUserData();
  const { data: userData } = data || {};
  console.log(data);

  if (userData)
    return (
      <div dir="rtl">
        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 border-none bg-white hover:bg-gray-50 rounded-lg px-4 h-[44px] cursor-pointer transition-colors outline-none focus:ring-2 focus:ring-gray-200">
              <User className="w-4 h-4 text-[#28A745]" />
              <span className="font-VazirFDWOL500 text-sm text-[#28A745]">
                {userData?.mobile}
              </span>
              <ChevronDown className="w-4 h-4 text-[#28A745] mr-1" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[246px] h-[151px] bg-white"
            align="start"
            style={{overflowY:'hidden',
              maxHeight:"151px"
            }}
          >
            <div className="flex items-center relative bg-[#F4F4F4] h-[44px] pr-[12px]">
              <Image className="absolute right-4 left-1" src="/icons/frame.svg" width={16} height={16} alt="f" />
              <Image src="/icons/Ellipse 2.svg" width={28} height={28} alt="user" />
            <DropdownMenuLabel className="">
              {userData?.mobile}
      </DropdownMenuLabel>
            </div>
            <DropdownMenuSeparator className="bg-gray-100" />
            <DropdownMenuItem>
              <div className="flex flex-col ">
              <Link className="flex items-center   pr-[12px] gap-2" href="/profile">
              <Image src="/icons/profile2.svg" width={20} height={20} alt="profile" />
                <span>اطلاعات حساب کاربری</span>
                
              </Link>

            <div className="w-[222px] border border-solid border-[#0000001F] mt-[8px]"></div>
              </div>


            </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center justify-between text-right px-3 py-2.5 rounded-lg cursor-pointer hover:bg-red-50 text-red-600 focus:bg-red-50">
                <div className="flex pr-[14px] gap-2 ">
                <Image src="/icons/logout.svg" width={20} height={20} alt="logout" />
                <span className="font-medium text-sm">خروج از حساب</span>
                

                </div>
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  return (
    <div>
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
