"use client";
import React from "react";
import { useGetUserTours } from "@/core/services/queries";
import { da } from "zod/v4/locales";
import Image from "next/image";
import { formatJalaliDate } from "@/core/utils/helpers";

function MyTours() {
  const { data } = useGetUserTours();
  console.log(data);

  return (
    <div className="max-w-[1270px] px-10 mx-auto">
      <div className="w-[872px] h-fit rounded-[10px] border border-solid border-[#00000033] mt-[36px] mr-[18px]">
        {data?.data?.map((tour) => (
          <div
            key={tour.id}
            className="w-[832px] h-[168px] rounded-[10px] border border-solid border-[#00000033] mr-[20px] mt-[13px]"
          >
            <div className="flex items-center justify-between pr-[16px] pt-[17px] pl-[20px]">
              <div className="flex items-center">
                <Image
                  src="/icons/sun-fog.svg"
                  width={24}
                  height={24}
                  alt="tour"
                />
                <span>{tour?.title}</span>
              </div>

              <div className="flex items-center">
                <Image
                  src="/icons/airplane.svg"
                  width={24}
                  height={24}
                  alt="a"
                />
                <span>{tour?.fleetVehicle}</span>
              </div>

              <div>
                <p className="text-[12px] bg-[#28A7454D] inline-block rounded-[27px] text-[#28A745]">
                  به اتمام رسیده
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between w-[590px]">
              <div className="flex items-center mt-[23px] pr-[18px] gap-5">
                <h6>
                  {tour?.origin.name} به {tour?.destination.name}
                  
                </h6>
                <span>{formatJalaliDate(tour?.startDate)}</span>
              </div>
              <div className="flex items-center mt-[23px] gap-5">
                <h6>تاریخ برگشت</h6>
                <span>{formatJalaliDate(tour?.endDate)}</span>
              </div>
            </div>
            <div className="w-full border border-solid border-[#00000033] mt-[20px] "></div>
            <div className="flex items-center">
              <div className="flex pr-[18px] mt-[20px] gap-2 items-center ">
                <p>شماره تور</p>
                <span className="">102095404</span>
              </div>
              <div className="w-[30px] rotate-90 border broder-solid border-[#00000033] mt-[16px] "></div>
              <div className="flex items-center mt-[20px] gap-2 mr-[22px]">
                <p>مبلغ پرداخت شده</p>
                <p>{tour?.price}</p>
                <span>تومان</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyTours;
