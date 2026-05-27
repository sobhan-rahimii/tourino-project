"use client";
import React, { useState } from "react";

import { useGetUserData } from "@/core/services/queries";
import { da, fa } from "zod/v4/locales";
import { checkoutSchema } from "@/core/utils/schema";
import { DatePicker } from "zaman";
import { Controller, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/templates/ui/select";
import Image from "next/image";
import PersonalInformationForm from "@/components/templates/Personal informationForm";
import BankAccountForm from "@/components/templates/BankAccountForm";
import UserAccountInformation from "@/components/templates/User account information Form";
import { formatJalaliDate } from "@/core/utils/helpers";

function ProfilePage() {
  const [PersonalInformationStatus, setPersonalInformationStatus] = useState(false);
  const [bankFormStatus,setBankFormStatus] = useState(false)
  const [accountInformation,setAccountInformation] = useState(false)
  const { register, handleSubmit, control, setValue, onChange, reset, watch } =
    useForm({
      defaultValues: {
        gender: "",
      },
    });

  const { data } = useGetUserData();
  console.log(data);
  return (
    <div className="max-w-[1270px] mx-auto px-10">
      {accountInformation ?(
        <UserAccountInformation status={setAccountInformation} />
      ):(<div className="w-[872px] h-[115px] border border-solid border-[#00000033] rounded-[10px] mt-[37px]">
        <h1 className="pr-[12px] pt-[12px]">اطلاعات حساب کاربری</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center pr-[32px] mt-[28px] gap-7">
            <p>شماره موبایل</p>
            <span>09224521125</span>
          </div>
          <div className="flex items-center mt-[28px] gap-7">
            <p>ایمیل</p>
            <span>-</span>
          </div>
          <div className="flex items-center mt-[28px] pl-[57px] ">
            <button onClick={()=>setAccountInformation(true)} className="flex items-center gap-2">
              <Image
                src="/icons/edit-2.svg"
                width={20}
                height={20}
                alt="edit"
              />
              افزودن
            </button>
          </div>
        </div>
      </div>)}
      
      {PersonalInformationStatus ? (
        <PersonalInformationForm status={setPersonalInformationStatus} />
      ) : (
        <div className="w-[872px] h-[171px] border border-solid border-[#00000033] rounded-[10px] mt-[24px]">
          <div className="flex items-center justify-between pt-[16px]">
            <h1 className="pr-[12px]">اطلاعات شخصی</h1>
            <div className="">
              <button onClick={()=>setPersonalInformationStatus(true)} className="flex pl-[16px]">
                <Image
                  src="/icons/edit-2.svg"
                  width={20}
                  height={20}
                  alt="edit"
                />
                ویرایش اطلاعات
              </button>
            </div>
          </div>
          <div className="w-[650px] flex items-center justify-between">
            <div className="flex items-center pr-[12px] mt-[28px] gap-5">
              <p>نام و نام خانوادگی</p>
              <span>{data?.data?.fullName || "-"}</span>
            </div>
            <div className="flex items-center gap-5 mt-[28px]">
              <p>کدملی</p>
              <span>{data?.data?.nationalCode || "-"}</span>
            </div>
          </div>
          <div className="w-[650px] flex items-center justify-between">
            <div className="flex items-center justify-between pr-[12px] mt-[28px] gap-24">
              <h1>جنسیت</h1>
              <span>{data?.data?.gender ||"-"}</span>
            </div>
            <div className="flex items-center mt-[28px] gap-5">
              <h1>تاریخ تولد</h1>
              <span>{formatJalaliDate(data?.data?.birthDate || "-")}</span>
            </div>
          </div>
        </div>
      )}
      {bankFormStatus? (
        <BankAccountForm status={setBankFormStatus} />
      ):(<div className="w-[872px] h-[171px] border border-solid border-[#00000033] rounded-[10px] mt-[24px]">
        <div className="flex items-center justify-between">
          <h1 className="pr-[12px] pt-[12px]">اطلاعات حساب بانکی</h1>
          <button onClick={()=>setBankFormStatus(true)} className="flex items-center pl-[16px] pt-[16px] gap-2">
            <Image src="/icons/edit-2.svg" width={20} height={20} alt="edit" />
            ویرایش اطلاعات
          </button>
        </div>
        <div className="w-[700px] flex items-center justify-between ">
          <div className="flex gap-20 pr-[12px] mt-[28px]">
            <h1>شماره شبا</h1>
            <span>{data?.data?.payment?.shaba_code || "-"}</span>
          </div>
          <div className="flex items-center gap-20 mt-[28px]">
            <h1>شماره کارت</h1>
            <span>{data?.data?.payment?.debitCard_code || "-"}</span>
          </div>
        </div>
        <div className="flex items-center gap-16 pr-[12px] mt-[28px]">
          <h1>شماره حساب</h1>
          <span>{data?.data?.payment?.accountIdentifier || "-"}</span>
        </div>
      </div>)}
      
    </div>
  );
}

export default ProfilePage;
