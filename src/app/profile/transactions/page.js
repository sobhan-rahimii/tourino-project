"use client";
import { useGetUserTransactions } from "@/core/services/queries";
import { convertToPersianDate } from "@/core/utils/dateFormatter";
import React from "react";

function Transactions() {
  const { data } = useGetUserTransactions();
  console.log(data);

  return (
    <>
      <div className="lg:hidden block w-full pr-[31px] pl-[31px] ">
        <div className="w-full w-[328px] h-fit border border-solid border-[#00000040] rounded-[10px]  mb-[95px] mt-[23px]">
          <div className="h-[41px] h-full rounded-[10px]  bg-[#DBDBDB]">
            <div className="w-full flex items-center justify-between pt-[11px] pb-[11px] pr-[12px] pl-[25px]">
              <p>تاریخ و ساعت</p>
              <p>مبلغ(تومان)</p>
              <p>شماره سفارش</p>
            </div>
          </div>
          {data?.data?.map((tour) => (
            <div key={tour.id} className="w-full  ">
              <div className=" flex items-center bg-white justify-between pr-[12px] pl-[25px] mt-[14px] mb-[12px]">
                <p className="whitespace-nowrap text-[9px]">
                  {convertToPersianDate(tour?.createdAt)}
                </p>
                <p className="text-[13px]">{tour?.amount} تومان</p>
                <p className="text-[13px]">سفارش 12054902</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" lg:block hidden lg:max-w-[1270px] lg:px-10 lg:mx-auto ">
        <div className="lg:w-[872px] lg:h-fit lg:mb-[233px] lg:border lg:border-solid lg:border-[#00000033] lg:rounded-[10px] lg:mt-[36px]">
          <div className="lg:w-full lg:bg-[#F3F3F3] lg:h-[55px]">
            <div className="lg:flex lg:items-center lg:justify-between lg:pr-[16px] lg:pl-[100px] lg:pt-[15px]">
              <p>تاریخ و ساعت</p>
              <p>مبلغ(تومان)</p>
              <p>نوع تراکنش</p>
              <p>شماره سفارش</p>
            </div>
          </div>
          {data?.data?.map((tour) => (
            <div key={tour.id} className="lg:w-full">
              <div className="lg:flex lg:items-center lg:justify-between lg:pr-[16px] lg:pl-[80px] lg:mt-[20px] lg:mb-[21px]">
                <p>{convertToPersianDate(tour?.createdAt)}</p>
                <p>{tour?.amount} تومان</p>
                <p>ثبت نام در تور گردشگری</p>
                <p>سفارش 12054902</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Transactions;
