import ReservButton from "@/components/atom/reservButton";
import { formatJalaliDate } from "@/core/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DetailstourView({ data, id }) {
  console.log(data);
  return (
    <div className="bg-slate-300">

    
    <div className="max-w-[1270px]  mx-auto px-7  ">
      <div className=" max-w-[1270px] bg-white mt-[36px] border border-solid border-#00000033 ">
        <div className="  flex px-5 py-5">
          <Image src={data?.image} width={397} height={265} alt="photo" />
          <div className=" w-full mr-[24px]">
            <h4 className="mt-[29px] font-YekanBakhBold700 text-[32px] text-black ">{data.title}</h4>
            <p className="mt-[16px] font-VazirFDWOL400 text-[#282828] text-[20px] ">5 روز و 4 شب</p>
            <div className="flex mt-[24px]">
              <Image
                src="/icons/usertick.svg"
                width={24}
                height={24}
                alt="tour"
              />
              <p className="font-YekanBakhBold text-[#7D7D7D] text-[20px] ">تورلیدر از مبدا</p>
              <Image
                src="/icons/map.svg"
                width={24}
                className="mr-[32px]"
                height={24}
                alt="map"
              />
              <p className="mr-[8px] font-YekanBakhBold text-[#7D7D7D] text-[20px] ">برنامه سفر</p>
              <Image
                src="/icons/medal-star.svg"
                className="mr-[32px]"
                width={24}
                height={24}
                alt="medal"
              />
              <p className="mr-[8px] font-YekanBakhBold text-[#7D7D7D] text-[20px] ">تضمین کیفیت</p>
            </div>
            <div className="   flex items-center  justify-between   mt-[32px]  ">
              <div className="flex items-center">
              <p className="text-[#009ECA] font-VazirFDWOL400 text-[28px]">{data.price}  </p>
              <span className="mr-[7px] font-VazirFDWOL400 text-[#000000] text-[14px]">تومان</span> 

              </div>

              <ReservButton id={id} />
            </div>
          </div>
        </div>
        <div className="w-full flex items-start ">
          <div className="flex flex-col   ">
            <div className="flex items-center gap-2 pr-5">
              <Image
                src="/icons/routing-2.svg"
                width={20}
                height={20}
                alt="c"
              />
              <h6 className="font-VazirFDWOL400 text-[18px] text-[#444444]">مبدا</h6>
            </div>
            <h6 className="pr-6 mt-2 font-VazirFDWOL500 text-[16px]">{data.origin.name}</h6>
          </div>
          <div className="w-[1px] h-[84px] mb-[20px] mr-[64px]  bg-[#00000040] "></div>
          <div className="flex flex-col ">
            <div className="flex items-center gap-2 mr-[44px]">
              <Image src="/icons/calendar.svg" width={20} height={20} alt="c" />
              <h6 className="font-VazirFDWOL400 text-[18px] text-[#444444]">تاریخ رفت</h6>
            </div>
            <h6 className="mr-[44px] mt-[12px]  font-VazirFDWOL500 text-[16px]">{formatJalaliDate(data.startDate)}</h6>
          </div>
          <div className="w-[1px] h-[84px] mb-[20px] mr-[64px]  bg-[#00000040] "></div>
          <div className="flex flex-col ">
            <div className="flex items-center gap-2 mr-[44px]">
              <Image src="/icons/calendar.svg" width={20} height={20} alt="c" />
              <h6 className="font-VazirFDWOL400 text-[18px] text-[#444444]">تاریخ برگشت</h6>
            </div>
            <h6 className="mr-[44px] mt-4 font-VazirFDWOL500 text-[16px]">{formatJalaliDate(data.endDate)}</h6>
          </div>
          <div className="w-[1px] h-[84px] mb-[20px] mr-[83px]  bg-[#00000040] "></div>
          <div className="flex flex-col ">
            <div className="flex items-center gap-2 mr-[44px]">
              <Image src="/icons/bus.svg" width={20} height={20} alt="bus" />
              <h6 className="font-VazirFDWOL400 text-[18px] text-[#444444]">حمل و نقل</h6>
            </div>
            <h6 className="mr-[44px] mt-4 font-VazirFDWOL500 text-[16px]">{data.fleetVehicle}</h6>
          </div>
          <div className="w-[1px] h-[84px] mb-[20px] mr-[109px]  bg-[#00000040] "></div>
          <div className="flex flex-col ">
            <div className="flex items-center gap-2 mr-[44px]">
              <Image src="/icons/profile-2user.svg"  width={20} height={20} alt="i" />
              <h6 className="font-VazirFDWOL400 text-[18px] text-[#444444]">ظرفیت</h6>
            </div>
            <h6 className="mr-[44px] mt-4 font-VazirFDWOL500 text-[16px]">حداکثر 30 نفر</h6>
          </div>
          <div className="w-[1px] h-[84px] mb-[20px] mr-[36px]  bg-[#00000040] "></div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mr-[44px]">
              <Image src="/icons/security.svg" width={20} height={20} alt="s" />
              <h6 className="font-VazirFDWOL400 text-[18px] text-[#444444]">بیمه</h6>
            </div>
            <h6 className="mr-[55px] mt-4 font-VazirFDWOL500 text-[16px]">بیمه 50 هزار دیناری</h6>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default DetailstourView;
