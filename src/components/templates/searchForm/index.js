"use client";

import { flattenObject } from "@/core/utils/helpers";
import React, { useEffect,  useState } from "react";
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
 console.log("query state:", query);
console.log("isPending:", isPending);
console.log("data:", data);
console.log("query object:", query);
console.log("query.date:", query?.date);
console.log("query.startDate:", query?.startDate);
console.log("query.from:", query?.from);
console.log("query.to:", query?.to);
  const didInit = useRef(false);

  useEffect(() => {
    if (didInit.current) return;
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
    if (originId && destinationId) {
      reset({ originId, destinationId })
      setQuery({originId,destinationId})

      didInit.current = true;
    }
  }, [getQuery, reset]);

  const submitHandler = (form) => {
    const query = QueryString.stringify(flattenObject(form));
    
    console.log(query);
    router.push(`/?${query}`);
    
console.log("form:", form);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="w-[874px] h-[71px] mx-auto flex justify-center mt-[30px] border border-solid border-e-red-600">
        <div className=" w-full flex items-center gap-2 ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button type="button" className="  flex gap-2 items-center  mr-[20]  ">
                <Image
                  src="/icons/location.svg"
                  width={20}
                  height={20}
                  alt="location"
                />
                <span>{originLabel}</span>
                <div className="flex ">

                <DropdownMenuSeparator className="w-[56px] mr-[127px] border border-solid border-[#00000033] rotate-90   "></DropdownMenuSeparator>
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
                className="w-[218px] bg-white  translate-x-5 translate-y-5   h-fit  border border-solid border-[#00000033]   rounded-[8px]"
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
                      className=" h-[54px] text-#282828 flex gap-2 items-center"
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
            <DropdownMenuTrigger asChild>
              <button type="button" className="flex items-center select-none ">
                <Image
                  src="icons/destination.svg"
                  width={20}
                  height={20}
                  alt="destination"
                />

                <span>{destinationLabel}</span>
                <div>
                <DropdownMenuSeparator className="w-[57px] mr-[127px] border border-solid border-[#00000033] rotate-90 "></DropdownMenuSeparator>
                </div>
                  
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              style={{ direction: "rtl" }}
              className=" border border-solid border-[#00000033] w-[218px] h-fit  translate-y-4 translate-x-8 bg-white rounded-[8px] "
              side="bottom"
              align="end"
              avoidCollisions={true}
              sideOffset={6}
            >
              {citys.map((city, index) => (
                <React.Fragment key={city.id}>
                  <DropdownMenuItem
                    className="flex items-center h-[54px]"
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
          <div className="flex w-full">
            <div className="flex items-center gap-2">
              <Image src="/icons/calendar.svg" width={20} height={20} alt="c" />
              <h2>تاریخ</h2>
            </div>
             <Controller
            control={control}
            name="date"
            render={({ field: { onChange, value } }) => (
              <div className="">
                <DatePicker
                  containerClassName="w-full"
                  inputClass="w-[100px] h-[71px]"
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
         
          <button className="w-[190px] rounded-[16px] h-[51px] bg-[#28A745] ml-[10px] flex-none" type="submit">جستوجو</button>
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
