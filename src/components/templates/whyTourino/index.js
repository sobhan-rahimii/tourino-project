import React from "react";
import Image from "next/image";
import SwiperPhotos from "./swiperPhotos";
function WhyTourino() {
  return (
    <>
      <div className=" lg:max-w-[1270px] lg:mx-auto lg:grid lg:grid-cols-2 grid grid-cols-1  items-start px-7  ">
        <div className="    ">
          <div className=" relative flex items-center lg:mt-[196px] mt-[90px] ">
            <Image src="/icons/whyT.svg" width={59} height={68} alt="why" className=" hidden lg:block " />
            <Image  src='/icons/whyTres.svg' width={34} height={38} alt="why" className="block lg:hidden" />
            <h4 className="text-[40px] font-VazirmatnExtraBold mr-[15px]   ">چرا</h4>
            <span className="text-[40px] font-VazirmatnExtraBold text-[#28A745] ">تورینو؟</span>
            <span  className=" w-[16px] h-[37px] text-[38px] text-[#FFFFFF] absolute lg:right-5 lg:top-2 right-2 top-1">؟</span>
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
        <div className="lg:mr-[96px] lg:mt-[193px] w-full mt-[16px] mx-auto px-7">
        <SwiperPhotos/>

        </div>

      </div>
      <div className="w-full lg:mt-[79px]  border border-solid border-[#00000033]">
        .
      </div>
    </>
  );
}

export default WhyTourino;
