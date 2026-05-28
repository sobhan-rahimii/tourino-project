"use client";
import { useGetUserTransactions } from "@/core/services/queries";
import { convertToPersianDate } from "@/core/utils/dateFormatter";
import React from "react";

function Transactions() {
  const { data } = useGetUserTransactions();
  console.log(data);

  return (
    <div className="max-w-[1270px] px-10 mx-auto ">
      <div className="w-[872px] h-fit border border-solid border-[#00000033] rounded-[10px] mt-[36px]">
        <div className="w-full bg-[#F3F3F3] h-[55px]">
          <div className="flex items-center justify-between pr-[16px] pl-[100px] pt-[15px]">
            <p>تاریخ و ساعت</p>
            <p>مبلغ(تومان)</p>
            <p>نوع تراکنش</p>
            <p>شماره سفارش</p>
          </div>
        </div>
        {data?.data?.map((tour) => (
          <div className="w-full">
            <div className="flex items-center justify-between pr-[16px] pl-[80px] mt-[20px] mb-[21px]">
              <p>{convertToPersianDate(tour?.createdAt)}</p>
              <p>{tour?.amount} تومان</p>
              <p>ثبت نام در تور گردشگری</p>
              <p>سفارش 12054902</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;
