import ReservButton from "@/components/atom/reservButton";
import { formatJalaliDate } from "@/core/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DetailstourView({ data, id }) {
  console.log(data);
  return (
    <div className="bg-gray-100/35 py-10">
      <div className=" w-full max-w-[1270px]  mx-auto px-7   ">
        <div className=" border-0 px-[31px] lg:max-w-[1270px] bg-white lg:mt-[36px] lg:border border-solid border-[#00000033] mb-[99px] ">
          <div className=" w-full  flex flex-col justify-between lg:flex lg:flex-row lg:px-5 lg:py-5">
            <Image
              className="w-full"
              src={data?.image}
              width={397}
              height={265}
              alt="photo"
            />
            <div className=" w-full  lg:px-0 lg:mr-[24px]  ">
              <div className=" w-full flex items-center   justify-between  mt-[] lg:flex lg:flex-col lg:items-start lg:px-0">
                <h4 className="lg:mt-[29px] font-YekanBakhBold700 text-[32px] text-black ">
                  {data.title}
                </h4>
                <p className="  mt-[16px] font-VazirFDWOL400 text-[#282828] lg:text-[20px] ">
                  5 روز و 4 شب
                </p>
              </div>
              <div className="w-full flex flex-row  justify-between mt-[12px] flex-nowrap   lg:flex lg:mt-[24px] lg:justify-start lg:px-0 ">
                <div className="flex items-center   ">
                  <Image
                    src="/icons/usertick.svg"
                    width={24}
                    height={24}
                    alt="tour"
                    className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]"
                  />
                  <p className=" whitespace-nowrap text-[13px] font-YekanBakhBold text-[#7D7D7D] lg:text-[20px] ">
                    تورلیدر از مبدا
                  </p>
                </div>

                <div className="flex items-center ">
                  <Image
                    src="/icons/map.svg"
                    width={24}
                    className="mr-[32px]"
                    height={24}
                    alt="map"
                  />
                  <p className=" text-[13px] whitespace-nowrap  mr-[8px] font-YekanBakhBold text-[#7D7D7D] lg:text-[20px] ">
                    برنامه سفر
                  </p>
                </div>
                <div className="flex items-center ">
                  <Image
                    src="/icons/medal-star.svg"
                    className="mr-[32px]"
                    width={24}
                    height={24}
                    alt="medal"
                  />
                  <p className=" text-[13px] whitespace-nowrap mr-[8px] font-YekanBakhBold text-[#7D7D7D] lg:text-[20px] ">
                    تضمین کیفیت
                  </p>
                </div>
              </div>
              <div className=" w-full pr-0">
                <div className="lg:hidden grid grid-cols-3 pr-0 -mr-[31px]  w-full">
                  <div className=" flex flex-col items-start ">
                    <div className="flex items-start gap-2 mt-[24px] ">
                      <Image
                        src="/icons/bus.svg"
                        width={20}
                        height={20}
                        alt="bus"
                      />
                      <h6 className=" whitespace-nowrap font-VazirFDWOL400 text-[16px] text-[#444444]">
                        حمل و نقل
                      </h6>
                    </div>

                    <h6 className="lg:mr-[44px] mt-4 font-VazirFDWOL500 text-[16px] pr-[25px]">
                      {data.fleetVehicle}
                    </h6>
                  </div>
                  <div className="flex flex-col items-start ">
                    <div className="flex items-start gap-2 mr-[32px] mt-[24px] ">
                      <Image
                        src="/icons/profile-2user.svg"
                        width={20}
                        height={20}
                        alt="i"
                      />
                      <h6 className="font-VazirFDWOL400 text-[18px] text-[#444444]">
                        ظرفیت
                      </h6>
                    </div>
                    <h6 className=" mt-4 font-VazirFDWOL500 text-[16px] mr-[32px]">
                      حداکثر 30 نفر
                    </h6>
                  </div>

                  <div className="flex flex-col items-start">
                    <div className="flex items-start gap-2 mr-[50px] mt-[24px] ">
                      <Image
                        src="/icons/security.svg"
                        width={20}
                        height={20}
                        alt="s"
                      />
                      <h6 className="font-VazirFDWOL400 text-[18px] text-[#444444]">
                        بیمه
                      </h6>
                    </div>
                    <h6 className=" mr-[32px] whitespace-nowrap mt-4 font-VazirFDWOL500 text-[16px]">
                      بیمه 50 هزار دیناری
                    </h6>
                  </div>
                </div>
              </div>

              <div className="w-full block lg:hidden  ">
                <div className="lg:hidden   grid grid-cols-2  w-full  mt-[34px] items-center ">
                  <ReservButton className="text-right "/>
                  <p className="text-left ">{data.price} تومان</p>
                </div>

              </div>

              <div className=" hidden lg:block  lg:flex lg:items-center  lg:justify-between lg:mt-[32px]  ">
                <div className="flex items-center">
                  <p className="text-[#009ECA] font-VazirFDWOL400 text-[28px]">
                    {data.price}{" "}
                  </p>
                  <span className="mr-[7px] font-VazirFDWOL400 text-[#000000] text-[14px]">
                    تومان
                  </span>
                </div>

                <ReservButton id={id} />
              </div>
            </div>
          </div>
          <div className=" hidden lg:block  lg:w-full lg:flex lg:items-start ">
            <div className="lg:flex lg:flex-col   ">
              <div className="lg:flex lg:items-center lg:gap-2 lg:pr-5">
                <Image
                  src="/icons/routing-2.svg"
                  width={20}
                  height={20}
                  alt="c"
                />
                <h6 className="font-VazirFDWOL400 text-[18px] text-[#444444]">
                  مبدا
                </h6>
              </div>
              <h6 className="pr-6 mt-2 font-VazirFDWOL500 text-[16px]">
                {data.origin.name}
              </h6>
            </div>
            <div className="lg:w-[1px] lg:h-[84px] lg:mb-[20px] lg:mr-[64px]  bg-[#00000040] "></div>
            <div className="flex flex-col ">
              <div className="flex items-center gap-2 lg:mr-[44px]">
                <Image
                  src="/icons/calendar.svg"
                  width={20}
                  height={20}
                  alt="c"
                />
                <h6 className="font-VazirFDWOL400 text-[18px] text-[#444444]">
                  تاریخ رفت
                </h6>
              </div>
              <h6 className="mr-[44px] mt-[12px]  font-VazirFDWOL500 text-[16px]">
                {formatJalaliDate(data.startDate)}
              </h6>
            </div>
            <div className="w-[1px] h-[84px] mb-[20px] lg:mr-[64px]  bg-[#00000040] "></div>
            <div className="flex flex-col ">
              <div className="flex items-center gap-2 lg:mr-[44px]">
                <Image
                  src="/icons/calendar.svg"
                  width={20}
                  height={20}
                  alt="c"
                />
                <h6 className="font-VazirFDWOL400 text-[18px] text-[#444444]">
                  تاریخ برگشت
                </h6>
              </div>
              <h6 className="mr-[44px] mt-4 font-VazirFDWOL500 text-[16px]">
                {formatJalaliDate(data.endDate)}
              </h6>
            </div>
            <div className="w-[1px] h-[84px] mb-[20px] mr-[83px]  bg-[#00000040] "></div>
            <div className="flex flex-col ">
              <div className="flex items-center gap-2 mr-[44px]">
                <Image src="/icons/bus.svg" width={20} height={20} alt="bus" />
                <h6 className="font-VazirFDWOL400 text-[18px] text-[#444444]">
                  حمل و نقل
                </h6>
              </div>
              <h6 className="mr-[44px] mt-4 font-VazirFDWOL500 text-[16px]">
                {data.fleetVehicle}
              </h6>
            </div>
            <div className="w-[1px] h-[84px] mb-[20px] mr-[109px]  bg-[#00000040] "></div>
            <div className="flex flex-col ">
              <div className="flex items-center gap-2 mr-[44px]">
                <Image
                  src="/icons/profile-2user.svg"
                  width={20}
                  height={20}
                  alt="i"
                />
                <h6 className="font-VazirFDWOL400 text-[18px] text-[#444444]">
                  ظرفیت
                </h6>
              </div>
              <h6 className="mr-[44px] mt-4 font-VazirFDWOL500 text-[16px]">
                حداکثر 30 نفر
              </h6>
            </div>
            <div className="w-[1px] h-[84px] mb-[20px] mr-[36px]  bg-[#00000040] "></div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mr-[44px]">
                <Image
                  src="/icons/security.svg"
                  width={20}
                  height={20}
                  alt="s"
                />
                <h6 className="font-VazirFDWOL400 text-[18px] text-[#444444]">
                  بیمه
                </h6>
              </div>
              <h6 className="mr-[55px] mt-4 font-VazirFDWOL500 text-[16px]">
                بیمه 50 هزار دیناری
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailstourView;
