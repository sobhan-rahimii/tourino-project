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
    <>
      <div className=" lg:hidden block w-full pr-[31px] pl-[32px] ">
        {data?.data?.map((tour) => (
          <div key={tour.id} className="w-[327px] h-fit border border-solid border-[#00000033] rounded-[10px] mt-[23px]">
            <div className="flex justify-end pl-[8px] pt-[8px] text-[6px] text-[#28A745]">
              <p className="bg-[#28A7454D] inline-block rounded-[27px]">
                به اتمام رسیده
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center pr-[20px]  pt-[24px]">
                <Image
                  src="/icons/sun-fog.svg"
                  width={18}
                  height={18}
                  alt="sung"
                />
                <span className="pr-[]">{tour?.title}</span>
              </div>
              <div className="flex items-center pt-[24px] pl-[64px]">
                <Image
                  src="/icons/airplane.svg"
                  width={18}
                  height={18}
                  alt="airplane"
                />
                <span>
                  {tour?.fleetVehicle === "SUV" && <span>سفر با هواپیما</span>}
                </span>
              </div>
            </div>

            <div className="flex items-center pr-[20px] pl-[20px] mt-[21px] justify-between">
              <span>
                {tour?.origin.name} به {tour?.destination.name}
              </span>
              <span>
                <span>{formatJalaliDate(tour?.startDate)}</span>
              </span>
            </div>
            <div className="flex items-center justify-between px-[20px] mt-[29px]">
              <p>تاریخ برگشت</p>
              <span>{formatJalaliDate(tour?.endDate)}</span>
            </div>
            <div className="w-full border border-solid border-[#00000033] mt-[20px]"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5 mt-[16px] mb-[15px]">
                <p className="text-[10px] whitespace-nowrap pr-[8px]">شماره تور</p>
                <span className="text-[12px]">102095404</span>
              </div>
              <div className="w-[30px]  h-0 border border-solid border-[#00000033] rotate-90" ></div>
              <div className="flex items-center gap-2 mt-[16px] mb-[15px]">
                <p className="mr-[12px] whitespace-nowrap text-[10px]">مبلغ پرداخت شده</p>
                <span className="whitespace-nowrap text-[12px] pl-[8px]">18,000,000 تومان</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:block hidden lg:max-w-[1270px] lg:px-10 lg:mx-auto">
        <div className="lg:w-[872px] h-fit lg:rounded-[10px] lg:border lg:border-solid lg:border-[#00000033] lg:mt-[36px] lg:mr-[18px]">
          {data?.data?.map((tour) => (
            <div
              key={tour.id}
              className="lg:w-[832px] lg:h-[168px] lg:rounded-[10px] lg:border lg:border-solid lg:border-[#00000033] lg:mr-[20px] lg:mt-[13px]"
            >
              <div className="lg:flex lg:items-center lg:justify-between lg:pr-[16px] lg:pt-[17px] lg:pl-[20px]">
                <div className="lg:flex lg:items-center">
                  <Image
                    src="/icons/sun-fog.svg"
                    width={24}
                    height={24}
                    alt="tour"
                  />
                  <span>{tour?.title}</span>
                </div>

                <div className="lg:flex lg:items-center">
                  <Image
                    src="/icons/airplane.svg"
                    width={24}
                    height={24}
                    alt="a"
                  />
                  <span>
                    {tour?.fleetVehicle === "SUV" && (
                      <span>سفر با هواپیما</span>
                    )}
                  </span>
                </div>

                <div>
                  <p className="lg:text-[12px] lg:bg-[#28A7454D] lg:inline-block lg:rounded-[27px] lg:text-[#28A745]">
                    به اتمام رسیده
                  </p>
                </div>
              </div>

              <div className="lg:flex lg:items-center lg:justify-between lg:w-[590px]">
                <div className="lg:flex lg:items-center lg:mt-[23px] lg:pr-[18px] lg:gap-5">
                  <h6>
                    {tour?.origin.name} به {tour?.destination.name}
                  </h6>
                  <span>{formatJalaliDate(tour?.startDate)}</span>
                </div>
                <div className="lg:flex lg:items-center lg:mt-[23px] lg:gap-5">
                  <h6>تاریخ برگشت</h6>
                  <span>{formatJalaliDate(tour?.endDate)}</span>
                </div>
              </div>
              <div className="lg:w-full lg:border lg:border-solid lg:border-[#00000033] lg:mt-[20px] "></div>
              <div className="lg:flex items-center">
                <div className="lg:flex pr-[18px] mt-[20px] gap-2 items-center ">
                  <p>شماره تور</p>
                  <span className="">102095404</span>
                </div>
                <div className="lg:w-[30px] lg:rotate-90 lg:border lg:broder-solid lg:border-[#00000033] lg:mt-[16px] "></div>
                <div className="lg:flex lg:items-center lg:mt-[20px] lg:gap-2 lg:mr-[22px]">
                  <p>مبلغ پرداخت شده</p>
                  <p>{tour?.price}</p>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyTours;
