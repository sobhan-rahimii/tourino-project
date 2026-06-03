"use client";

import { flattenObject } from "@/core/utils/helpers";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

import { useForm, Controller, get } from "react-hook-form";

import { DatePicker } from "zaman";

import QueryString from "qs";
import { useGetTours } from "@/core/services/queries";
import { useRouter } from "next/navigation";
import useQuery from "@/core/hooks/query";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";

import Image from "next/image";

const citys = [
  { id: 1, lable: "تهران" },
  { id: 2, lable: "سنندج" },
  { id: 3, lable: "مادرید" },
  { id: 4, lable: "اصفهان" },
  { id: 5, lable: "سلیمانیه" },
  { id: 6, lable: "هولر" },
  { id: 7, lable: "مازندران" },
  { id: 9, lable: "ایتالیا" },
];

function SearchForm() {
  const router = useRouter();
  const [query, setQuery] = useState({});
  const { register, handleSubmit, control, setValue, reset, watch } =
    useForm("");

  const originId = watch("originId");
  const destinationId = watch("destinationId");

  const originLabel = citys.find((c) => c.id === originId)?.lable ?? "مبدا";
  const destinationLabel =
    citys.find((c) => c.id === destinationId)?.lable ?? "مقصد";

  const { data, isPending, refetch } = useGetTours(query);
  const { getQuery } = useQuery();

  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
    if (originId && destinationId) {
      reset({ originId, destinationId });
      setQuery({ originId, destinationId });
    }
  }, [getQuery, reset]);

  const submitHandler = (form) => {
    const query = QueryString.stringify(flattenObject(form));

    console.log(query);
    router.push(`/?${query}`);

    console.log("form:", form);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(submitHandler)}>
      <div className=" w-full border-0 px-[31px]  lg:px-0 lg:w-[874px] lg:h-[71px] lg:mx-auto lg:flex lg:justify-center lg:mt-[30px] lg:border lg:border-solid lg:border-e-red-600">
        <div className=" w-full flex flex-wrap px-[31px] gap-x-10    lg:w-full lg:flex-nowrap lg:flex lg:flex-row lg:items-center lg:px-0 lg:gap-2 ">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="  w-[160px] border border-solid border-[#00000026] rounded-[12px]  lg:border-0 lg:w-[160px] lg:px-0 "
              asChild
            >
              <button
                type="button"
                className=" flex items-center justify-center gap-2 px-auto    lg:flex  lg:gap-2 lg:justify-start  lg:mr-[20px]  "
              >
                <Image
                  src="/icons/location.svg"
                  width={20}
                  height={20}
                  alt="location"
                  className=" "
                />
                <span className="text-[#00000080]">{originLabel}</span>
                <div className="lg:flex ">
                  <DropdownMenuSeparator className="   lg:w-[60px]   lg:mr-[30px] lg:border border-solid border-[#00000033]  lg:rotate-90   "></DropdownMenuSeparator>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent
                side="bottom"
                align="end"
                avoidCollisions={true}
                sideOffset={6}
                style={{ direction: "rtl" }}
                className=" w-[160px] h-auto rounded-[8px] lg:w-[218px] bg-white  lg:translate-x-5 lg:translate-y-5   lg:h-fit  border border-solid border-[#00000033]   lg:rounded-[8px]"
              >
                {citys.map((city, index) => (
                  <React.Fragment key={city.id}>
                    <DropdownMenuItem
                      onClick={() =>
                        setValue("originId", city.id, {
                          shouldDirty: true,
                          shouldValidate: true,
                        })
                      }
                      className=" h-[54px] pr-[15px] text-#282828 flex gap-2 items-center"
                    >
                      <Image
                        src="/icons/location.svg"
                        width={20}
                        height={20}
                        alt="location"
                      />
                      {city.lable}
                    </DropdownMenuItem>
                    {index !== citys.length - 1 && (
                      <div className="mx-3 h-px bg-[#0000001F]" />
                    )}
                  </React.Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="w-[160px]  h-[47px] border border-solid border-[#00000026] rounded-[12px] lg:border-none"
              asChild
            >
              <button
                type="button"
                className="flex items-center justify-center select-none "
              >
                <Image
                  src="icons/destination.svg"
                  width={20}
                  height={20}
                  alt="destination"
                />

                <span>{destinationLabel}</span>
                <div>
                  <DropdownMenuSeparator className="   lg:w-[57px] lg:mr-[90px] lg:border lg:border-solid lg:border-[#00000033] lg:rotate-90 "></DropdownMenuSeparator>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              style={{ direction: "rtl" }}
              className=" w-[160px] px-[15px] z-50 h-auto border border-solid border-[#00000033] lg:w-[218px] lg:h-auto  lg:translate-y-4 lg:translate-x-8 bg-white rounded-[8px] "
              side="bottom"
              align="end"
              avoidCollisions={true}
              sideOffset={6}
            >
              {citys.map((city, index) => (
                <React.Fragment key={city.id}>
                  <DropdownMenuItem
                    className="flex items-center h-[54px] gap-2"
                    onClick={() => setValue("destinationId", city.id)}
                  >
                    <Image
                      src="/icons/location.svg"
                      width={20}
                      height={20}
                      alt="location"
                    />
                    {city.lable}
                  </DropdownMenuItem>
                  {index !== citys.length - 1 && (
                    <div className="mx-3 h-px bg-[#0000001F]" />
                  )}
                </React.Fragment>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex flex-wrap w-full justify-center lg:justify-start  lg:px-0">
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange, value } }) => (
                <div className=" relative w-full lg:w-[180px]  ">
                  {!value && (
                    <div className="  flex items-center absolute right-40 top-6  lg:flex lg:absolute lg:items-center lg:right-5 lg:top-3.5 lg:gap-2">
                      <Image
                        className="   "
                        src="/icons/calendar.svg"
                        width={20}
                        height={20}
                        alt="calendar"
                      />
                      <span className=" lg:text-sm text-[#00000080] text-[14px]">
                        تاریخ
                      </span>
                    </div>
                  )}
                  
                    <DatePicker
                      containerClassName="w-full"
                      inputClass=" w-full h-[47px] mt-[12px] rounded-[12px] border border-solid border-[#00000026] lg:w-[180px] lg:border-none lg:mr-[80px]"
                      // inputClass="hidden"
                      range
                      value={value}
                      onChange={(e) =>
                        onChange({ startDate: e.from, endDate: e.to })
                      }
                    />
                  
                </div>
              )}
            />
          </div>

          <button
            className=" w-full h-[47px] rounded-[16px] mt-[24px] text-white lg:w-[190px] lg:rounded-[16px] lg:h-[51px] bg-[#28A745] lg:ml-[10px] lg:mt-0 lg:flex-none"
            type="submit"
          >
            جستوجو
          </button>
        </div>
      </div>
    </form>

    // <form
    //   className="bg-green-100 flex gap-5 p-5 w-fit mx-auto"
    //   onSubmit={handleSubmit(submitHandler)}
    // >
    //   <select {...register("originId")}>
    //     <option value="1">تهران</option>
    //     <option value="2">سنندج</option>
    //     <option value="3">مادرید</option>
    //   </select>

    //   <select {...register("destinationId")}>
    //     <option value="1">تهران</option>
    //     <option value="2">سنندج</option>
    //     <option value="3">مادرید</option>
    //   </select>
    //   <Controller
    //     control={control}
    //     name="date"
    //     render={({ field: { onChange } }) => (
    //       <DatePicker
    //         onChange={(e) => onChange({ startDate: e.from, endDate: e.to })}
    //         range
    //       />
    //     )}
    //   />
    //   <button type="submit" className="bg-green-500 text-sm p-2 text-white">
    //     جستوجو
    //   </button>
    // </form>
  );
}

export default SearchForm;
