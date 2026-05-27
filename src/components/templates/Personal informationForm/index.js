import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/templates/ui/select'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { DatePicker } from 'zaman'
import { checkoutSchema } from '@/core/utils/schema'
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import { personalInformationSchema } from '@/core/utils/personalInformationSchema'
import { useSendUSerInformation } from '@/core/services/mutations'
import { da } from 'zod/v4/locales'
import toast from 'react-hot-toast'

function PersonalInformationForm({status}) {
    const { register, handleSubmit, control, setValue, onChange, reset, watch } =
        useForm({
            resolver:zodResolver(personalInformationSchema)
        })

        const {mutate,data} = useSendUSerInformation()
        console.log(data);

        const submitHandler = (data)=>{
            mutate(data,{
                onSuccess:(data)=>{
                    toast.success(data?.data?.message)
                    status(false)
                },
                onError:(error)=>{
                    console.log(error);
                }
            })
            console.log(data);


        }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>

    
     <div className="w-[872px] h-fit bg-white border border-solid border-[#00000033] rounded-[10px] mt-[24px]">
        <h1 className="pr-[12px] pt-[12px]">اطلاعات شخصی</h1>
        <div className="flex items-center flex-wrap pr-[16px] mt-[20px] gap-7 ">
          <input {...register("fullName")}
            placeholder="نام ونام خانوادگی"
            className="w-[255px] h-[45px] border border-solid boredr-[#00000080] rounded-[5px]"
          />

          <input {...register("nationalCode")}
            placeholder="کد ملی"
            className="w-[255px] h-[45px] border border-solid border-[#00000080] rounded-[5px]"
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
                  inputClass="w-[264px] h-[45px] border border-solid border-[#00000080] rounded-[5px]"
                  value={value}
                  onChange={(e) => onChange(e.value)}
                />
              </div>
            )}
          />
          <div className="">
            <Controller
            
              control={control}
              name="gender"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value||""}>
                  <SelectTrigger className="!w-[255px] text-[#00000080] text-[14px] !h-[45px] flex flex-row-reverse items-center border border-solid border-[#00000080] rounded-[5px] ">
                    <SelectValue placeholder="جنسیت" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem className="flex flex-row-reverse" value="male">
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
        <div className="mt-[20px] w-full border border-solid border-[#00000033]"></div>
        <div className="flex items-center justify-end pl-[31px] mt-[8px] mb-[8px]">
          <button type='submit' className="w-[144px] h-[41px] bg-[#28A745] rounded-[5px] text-white ml-[12px]">تایید</button>
          <button type='button' onClick={()=>status(false)} className="w-[144px] h-[41px] bg-white text-[#28A745] rounded-[5px] border-2 border-solid border-[#28A745]  ">انصراف</button>

        </div>
      </div>
      </form>
  )
}

export default PersonalInformationForm