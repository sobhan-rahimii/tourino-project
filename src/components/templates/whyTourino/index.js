import React from "react";
import Image from "next/image";
import SwiperPhotos from "./swiperPhotos";
function WhyTourino() {
  return (
    <>
      <div className=" w-full  lg:max-w-[1270px] lg:mx-auto lg:grid lg:grid-cols-2 grid grid-cols-1  items-start px-7  ">
        <div className="    ">
          <div className=" w-full pr-[31px] lg:mx-auto relative flex items-center lg:mt-[196px] mt-[90px] ">
            <Image
              src="/icons/whyT.svg"
              width={59}
              height={68}
              alt="why"
              className=" hidden lg:block "
            />
            <Image
              src="/icons/whyTres.svg"
              width={34}
              height={38}
              alt="why"
              className="block lg:hidden"
            />
            <h4 className="text-[40px] font-VazirmatnExtraBold mr-[15px]   ">
              چرا
            </h4>
            <span className="text-[40px] font-VazirmatnExtraBold text-[#28A745] ">
              تورینو؟
            </span>
            <span className=" w-[16px] h-[37px] text-[38px] text-[#FFFFFF] absolute lg:right-5 lg:top-1 right-10  top-1">
              ؟
            </span>
          </div>
          <p className="mt-[32px] hidden lg:block">تور طبیعت گردی و تاریخی </p>
          <p className="lgLw-[500px] mt-[16px] hidden lg:block font-iraniansans leading-10 text-[#282828]">
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
          </p>
        </div>
        <div className=" w-full  lg:mr-[96px] lg:mt-[193px]  mt-[16px] lg:mx-auto pl-[31px] ">
          <SwiperPhotos />
        </div>

        <div className=" w-full lg:max-w-[1270px] px-[31px]  mt-[60px] lg:mt-[79px]   border border-solid border-[#00000033]"></div>
      </div>
      <div className=" w-full px-[31px] lg:max-w-[1270px] lg:mx-auto lg:px-10 mt-[43px]  ">
        <div className="flex flex-col lg:items-center   lg:flex lg:justify-between lg:flex-row lg:gap-3 ">
          <div className="flex lg:items-center gap-1">
            <Image
              src="/icons/Group 16.svg"
              width={121}
              height={109}
              alt="groups"
              className="w-[71px] h-[64px]  lg:w-[121px] lg:h-[109px]"
            />
            <div className="flex flex-col">
              <p>بصرفه ترین قیمت</p>
              <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
            </div>
          </div>
          <div className="flex justify-between gap-3">
            <div className="flex lg:items-center gap-1 mr-0 lg:mr-[66px] mt-[39px]">
              <Image
                src="/icons/Message 37.svg"
                width={121}
                height={109}
                alt="groups"
                className="w-[70px] h-[64px] lg:w-[121px] lg:h-[109px]"
              />
              <div className="flex flex-col">
                <p>پشتیبانی</p>
                <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-3 ">
            <div className=" flex lg:items-center  gap-1 mr-0 mt-[39px]">
              <Image
                src="/icons/Group 18.svg"
                width={121}
                height={109}
                alt="groups"
                className="w-[64px] h-[64px] lg:w-[121px] lg:h-[109px]"
              />
              <div className="flex flex-col">
                <p>رضایت کاربران</p>
                <p>رضایت بیش از 10هزار کاربر از تور های ما. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1200px] border border-solid border-[#00000033] mt-[32px] mx-auto"></div>
    </>
  );
}

export default WhyTourino;
