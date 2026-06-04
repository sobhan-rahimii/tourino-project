import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/templates/ui/select";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import { checkoutSchema } from "@/core/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { personalInformationSchema } from "@/core/utils/personalInformationSchema";
import { useSendUSerInformation } from "@/core/services/mutations";
import { da } from "zod/v4/locales";
import toast from "react-hot-toast";

function PersonalInformationForm({ status }) {
  const { register, handleSubmit, control, setValue, onChange, reset, watch } =
    useForm({
      resolver: zodResolver(personalInformationSchema),
    });

  const { mutate, data } = useSendUSerInformation();
  console.log(data);

  const submitHandler = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        toast.success(data?.data?.message);
        status(false);
      },
      onError: (error) => {
        console.log(error);
      },
    });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="w-full pr-[30px] pl-[32px]">
        <div className="lg:hidden    w-[328px] h-[355px] lg:max-w-[872px] rounded-[10px] border border-solid border-[#00000033] mt-[20px] lg:rounded-[10px] lg:mt-[24px] ">
          <h1 className="  lg:pr-[12px] lg:pt-[12px] pr-[20px] pt-[16px]">
            ویرایش اطلاعات شخصی
          </h1>
          <div className="flex flex-col lg:flex lg:items-center lg:flex-wrap  lg:pr-[16px] lg:mt-[20px] lg:gap-7     items-center pr-[20px] pl-[19px]">
            <input
              className=" lg:w-[255px] lg:h-[45px] mt-[24px] w-[289px] h-[40px] border border-solid border-[#00000080] rounded-[5px]"
              placeholder="نام و نام خانوادگی"
              {...register("fullName")}
            />
            <input
              className=" lg:w-[255px] lg:h-[45px] w-[289px] h-[40px] border border-solid border-[#00000080] rounded-[5px] mt-[16px]"
              placeholder="کد ملی"
              {...register("nationalCode")}
            />
            <div className="">
              <Controller
                control={control}
                name="gender"
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ""}
                  >
                    <SelectTrigger className="lg:!w-[255px] lg:h-[45px] !w-[289px] text-[#00000080] text-[14px] !h-[40px] flex flex-row-reverse items-center border border-solid border-[#00000080] rounded-[5px] mt-[21px] ">
                      <SelectValue placeholder="جنسیت" />
                    </SelectTrigger>
                    <SelectContent className="">
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

            <Controller
              control={control}
              name="birthDate"
              render={({ field: { onChange, value } }) => (
                <div className="relative   ">
                  {!value && (
                    <span className="absolute top-6 right-2 text-sm text-[#00000080] text-[14px]">
                      تاریخ تولد
                    </span>
                  )}

                  <DatePicker
                    inputClass="lg:!w-[255px] lg:h-[45px]   w-[289px] h-[40px] border border-solid border-[#00000080] rounded-[5px] mt-[16px]"
                    value={value}
                    onChange={(e) => onChange(e.value)}
                  />
                </div>
              )}
            />
          </div>
          <div className="lg:mt-[20px] lg:w-full lg:border lg:border-solid lg:border-[#00000033]"></div>
          <div className=" hidden lg:block lg:flex lg:items-center lg:justify-end lg:pl-[31px] lg:mt-[8px] lg:mb-[8px]">
            <button
              type="submit"
              className="w-[144px] h-[41px] bg-[#28A745] rounded-[5px] text-white ml-[12px]"
            >
              تایید
            </button>
            <button
              type="button"
              onClick={() => status(false)}
              className="w-[144px] h-[41px] bg-white text-[#28A745] rounded-[5px] border-2 border-solid border-[#28A745]  "
            >
              انصراف
            </button>
          </div>
          <div className="flex items-center justify-center mt-[20px] gap-8 pr-[20px] pl-[19px]">
            <button
              type="submit"
              className="w-[138px] h-[41px] bg-[#28A745] text-white rounded-[5px] "
            >
              تایید
            </button>
            <button
              type="button"
              onClick={() => status(false)}
              className="w-[138px] h-[41px] bg-white text-[#28A745] rounded-[5px] border-2 border-solid border-[#28A745] "
            >
              انصراف
            </button>
          </div>
        </div>
      </div>

      {/* <div className=" hidden lg:block w-[872px] h-fit bg-white border border-solid border-[#00000033] rounded-[10px] mt-[24px]">
        <h1 className="pr-[12px] pt-[12px]">اطلاعات شخصی</h1>
        <div className="flex items-center flex-wrap pr-[16px] mt-[20px] gap-7 ">
          <input
            {...register("fullName")}
            placeholder="نام ونام خانوادگی"
            className="w-[255px] h-[45px] border border-solid boredr-[#00000080] rounded-[5px]"
          />

          <input
            {...register("nationalCode")}
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
                <Select
                  onValueChange={field.onChange}
                  value={field.value || ""}
                >
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
        <div className="flex items-center justify-end pl-[31px] mt-[8px] mb-[8px]">
          <button
            type="submit"
            className="w-[144px] h-[41px] bg-[#28A745] rounded-[5px] text-white ml-[12px]"
          >
            تایید
          </button>
          <button
            type="button"
            onClick={() => status(false)}
            className="w-[144px] h-[41px] bg-white text-[#28A745] rounded-[5px] border-2 border-solid border-[#28A745]  "
          >
            انصراف
          </button>
        </div>
      </div> */}
    </form>
  );
}

export default PersonalInformationForm;
