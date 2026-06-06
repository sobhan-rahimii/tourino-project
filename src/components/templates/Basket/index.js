"use client";
import Image from "next/image";
import React, { useState } from "react";
// import DatePicker from "react-date-picker";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { checkoutSchema } from "@/core/utils/schema";
import { da } from "zod/v4/locales";
import ReservButton from "@/components/atom/reservButton";
import { useCheckout } from "@/core/services/mutations";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useGetUserTours } from "@/core/services/queries";

function Basket({ data }) {
  const { register, handleSubmit, control, setValue, reset, watch } = useForm({
    defaultValues: {
      gender: "",
    },
  });


  

  const router = useRouter();

  

  const { mutate } = useCheckout();
  

  const submitHandler = (form) => {
    mutate(form, {
      onSuccess: (data) => {
        toast.success(data?.data?.message);
        router.push("/payment?status=success");
      },
      onError: (error) => {
        console.log(error);
      },
    });
    console.log(form);
  };
  return (

    <>
    <form onSubmit={handleSubmit(submitHandler)}>

    
      <div className="px-[32px] w-full flex flex-col items-center justify-center mt-[17px]">
        <div className=" block lg:hidden w-full max-w-[328px] ">
          <div className="flex flex-col w-full">
            <div className=" max-w-[328px] h-[359px] border border-solid border-[#00000033]  rounded-[10px] ">
              <div className=" flex items-center gap-2 pr-[18px] pt-[23px]">
                <Image
                  className=""
                  src="/icons/profile.svg"
                  width={24}
                  height={24}
                  alt="profile"
                />
                <h1>مشخصات مسافر</h1>
              </div>
              <div className="flex flex-col px-[21px] mt-[17px]">
                <input
                  {...register("fullName")}
                  placeholder="نام و نام خانوادگی"
                  className="w-[287px] rounded-[5px] h-[50px] border border-solid border-[#00000080]"
                />
                <div>
                  <Controller
                    control={control}
                    name="gender"
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="!w-[287px] text-[#00000080] text-[14px] !h-[50px] flex flex-row-reverse items-center border border-solid border-[#00000080] rounded-[5px] mt-[24px]">
                          <SelectValue placeholder="جنسیت" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem
                            className="flex flex-row-reverse"
                            value="male"
                          >
                            مرد
                          </SelectItem>
                          <SelectItem
                            className="flex flex-row-reverse"
                            value="female"
                          >
                            زن
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <input
                  placeholder="کد ملی"
                  className="w-[287px] h-[50px] border border-solid border-[#00000080] rounded-[5px] mt-[24px] "
                />
                <Controller
                  control={control}
                  name="birthDate"
                  render={({ field: { onChange, value } }) => (
                    <div className="relative   ">
                      {!value && (
                        <span className="absolute top-9 right-2 text-sm text-[#00000080] text-[14px]">
                          تاریخ تولد
                        </span>
                      )}

                      <DatePicker
                        inputClass="w-[287px]  h-[50px] border border-solid border-[#00000080] mt-[24px] rounded-[5px]"
                        value={value}
                        onChange={(e) => onChange(e.value)}
                      />
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" block lg:hidden   w-[328px]   min-h-[228px] border border-solid border-[#0000001A] rounded-[10px] ">
          <div className="flex items-center justify-between pt-[16px]  ">
            <h1 className="pr-[33px]">{data?.data?.title}</h1>
            <span className="pl-[12px]">5 روز و 4 شب</span>
            
          </div>
          <div className="w-full border border-dashed border-[#00000080] mt-[24px]"></div>
          <div className="flex items-center mt-[19px] justify-between ">
            <h1 className="pr-[33px]">قیمت نهایی</h1>
            <p className="pl-[12px]">{data?.data?.price} تومان</p>
          </div>
          <div className="px-[13px] mt-[25px]">
          <Button type="submit" className="w-[302px] h-[56px] bg-[#28A745] rounded-[10px] text-white ">ثبت و خرید نهایی</Button>

          </div>
        </div>
      </div>
      </form>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div className=" hidden lg:block max-w-[1270px] mx-auto px-10  ">
          <div className="flex">
            <div className="w-[865px] h-[228px] lg:mb-[298px] mt-[36px] rounded-[10px] border border-solid border-[#00000033]">
              <div className="flex items-center pr-7 pt-[20px]">
                <Image
                  src="/icons/frame.svg"
                  width={20}
                  height={20}
                  alt="user"
                />
                <h6>مشخصات مسافر</h6>
              </div>
              <div className="flex  flex-wrap gap-x-4 pr-7 mt-[17px]">
                <input
                  {...register("fullName")}
                  placeholder="نام و نام خانوداگی"
                  className="w-[262px] h-[50px] rounded-[5px]  border border-solid border-[#00000080]"
                />
                <input
                  {...register("nationalCode")}
                  placeholder="کد ملی"
                  className="w-[262px] h-[50px] rounded-[5px] border border-solid border-[#00000080]"
                />

                <Controller
                  control={control}
                  name="birthDate"
                  render={({ field: { onChange, value } }) => (
                    <div className="relative   ">
                      {!value && (
                        <span className="absolute top-3 right-2 text-sm text-[#00000080] text-[14px]">
                          تاریخ تولد
                        </span>
                      )}

                      <DatePicker
                        inputClass="w-[262px] h-[50px] border border-solid border-[#00000080] rounded-[5px]"
                        value={value}
                        onChange={(e) => onChange(e.value)}
                      />
                    </div>
                  )}
                />
                <div>
                  <Controller
                    control={control}
                    name="gender"
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="!w-[265px] text-[#00000080] text-[14px] !h-[50px] flex flex-row-reverse items-center border border-solid border-[#00000080] rounded-[5px] mt-[24px]">
                          <SelectValue placeholder="جنسیت" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem
                            className="flex flex-row-reverse"
                            value="male"
                          >
                            مرد
                          </SelectItem>
                          <SelectItem
                            className="flex flex-row-reverse"
                            value="female"
                          >
                            زن
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="w-[307px] h-[228px] mt-[36px] rounded-[10px] border border-solid border-[#00000033] mr-[16px] ">
              <div className="flex items-center justify-between px-[12px] pt-[16px] ">
                <h1>{data?.data?.title}</h1>
                <p>5 روز و 4 شب</p>
              </div>
              <div className="w-full border border-dashed border-[#00000080] mt-[24px] "></div>
              <div className="flex items-center justify-between px-[12px] mt-[29px]">
                <p>قیمت نهایی</p>
                <p>
                  {data?.data?.price} <span>تومان</span>
                </p>
              </div>
              <div className="px-[12px]">
                {/* <ReservButton id={data?.data?.id} /> */}
                <button
                  type="submit"
                  className=" w-[283px] h-[56px] bg-[#28A745] rounded-[10px] flex items-center  justify-center mt-[29px] px-[12px]  "
                >
                  ثبت و خرید نهایی
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Basket;
