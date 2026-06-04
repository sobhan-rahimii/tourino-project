import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className=" hidden lg:block  w-full max-w-[1270px] mx-auto ">
        <div className="w-full flex justify-end">
          <div className=" w-full lg:max-w-[1270px] lg:px-[10] lg:flex lg:gap-20 lg:mt-[21px] ">
            <div className="  lg:px-[10px] ">
              <h1>تورینو</h1>
              <p className="lg:mt-[24px]">درباره ما</p>
              <p className="lg:mt-[8px]">تماس با ما </p>
              <p className="lg:mt-[8px]">چرا تورینو</p>
              <p className="lg:mt-[8px]">بیمه مسافرتی</p>
            </div>
            <div className="  ">
              <h1>خدمات مشتریان</h1>
              <p className="lg:mt-[24px]">پشتیبانی آنلاین</p>
              <p className="lg:mt-[8px]">راهنمای خرید</p>
              <p className="lg:mt-[8px]">راهنمای استرداد</p>
              <p className="lg:mt-[8px]">پرسش و پاسخ</p>
            </div>
          </div>
          <div className=" lg:flex lg:flex-col lg:mt-[30px] ">
            <Image src="/icons/logo.svg" width={146} height={44} alt="Logo" />

            <p className="lg:mt-[20px]">تلفن پشتیبانی:021-8574</p>

            <div className="lg:flex lg:flex-row lg:pl-[140px] lg:mt-[36px] gap-4">
              <Image
                src="/icons/state-airline-f45c55b2 1.svg"
                width={78}
                height={74}
                alt="a"
              />
              <Image
                src="/icons/samandehi-6e2b448a.svg"
                width={67}
                height={74}
                alt="a"
              />
              <Image
                src="/icons/aira-682b7c43.svg"
                width={68}
                height={74}
                alt="a"
              />
              <Image
                src="/icons/aira-682b7c43.svg"
                width={68}
                height={74}
                alt="a"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden lg:block  w-full  border border-solid border-[#00000033] lg:mt-[28px] "></div>
      <div className="lg:block hidden lg:text-center">
        <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
      </div>
      <div className=" w-full lg:hidden block  ">
        <div className=" w-[328px]   px-[31px] mx-auto  mt-[16px] border border-dashed border-[#00000033] "></div>
        <div className="flex items-center justify-between px-[31px]">
          <div className="  mt-[24px] ">
            <h1>تورینو</h1>
            <p className="mt-[20px]">درباره ما</p>
            <p className="mt-[11px]">تماس با ما</p>
            <p className="mt-[11px]">چرا تورینو</p>
            <p className="mt-[11px]">بیمه مسافرتی</p>
          </div>
          <div className="  mt-[24px] ">
            <h1 >خدمات مشتریان</h1>
            <p className="mt-[20px]">پشتیبانی آنلاین</p>
            <p className="mt-[11px]">راهنمای خرید</p>
            <p className="mt-[11px]">راهنمای استرداد</p>
            <p className="mt-[11px]">پرسش و پاسخ</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex  items-center pr-[31px] flex-wrap gap-6 mt-[48px] ">
            <Image
                src="/icons/state-airline-f45c55b2 1.svg"
                width={35}
                height={38}
                alt="a"
              />
              <Image
                src="/icons/samandehi-6e2b448a.svg"
                width={35}
                height={38}
                alt="a"
              />
              <Image
                src="/icons/aira-682b7c43.svg"
                width={35}
                height={38}
                alt="a"
              />
              <Image
                src="/icons/aira-682b7c43.svg"
                width={35}
                height={38}
                alt="a"
              />
              <Image
                src="/icons/aira-682b7c43.svg"
                width={35}
                height={38}
                alt="a"
              />
          </div>
          <div className="flex items-center flex-col pl-[31px] mt-[48px]  ">
            <Image src="/icons/logo.svg" width={100} height={30} alt="Logo" />
            <p className="mt-[11px] whitespace-nowrap">تلفن پشتیبانی: 021-8574</p>

          </div>
        </div>
        <div className=" w-[328px]   px-[31px] mx-auto   border border-solid border-[#00000033] mt-[18px] "></div>
          <div className=" px-[31px]">
<p className="text-center">کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
          </div>
        </div>
      
    </>
  );
}

export default Footer;
