import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <>
    
    <div className="max-w-[1270px] px-10 mx-auto">
      <div className=" w-full bg-white pt-10 flex items-start justify-between ">
        <div className="flex items-start justify-between gap-9">
          <div className="flex flex-col items-center mb-[37px] ">
            <p className="mt-[21px]">تورینو</p>
            <p className="mt-[24px]">درباره ما</p>
            <p className="mt-[8px]">تماس با ما</p>
            <p className="mt-[3px]">چرا تورینو</p>
            <p className="mt-[8px]">بیمه مسافرتی</p>
          </div>
          <div className="flex flex-col items-start mb-[37px]">
            <p className="mt-[21px]">خدمات مشتریان</p>
            <p className="mt-[24px]">پشتیبانی آنلاین</p>
            <p className="mt-[8px]">راهنمای خرید</p>
            <p className="mt-[8px]">راهنمای استرداد</p>
            <p className="mt-[8px]">پرسش و پاسخ</p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col items-end ">
            <Image
              className="mt-[29px]"
              src="/icons/logo.svg"
              width={146}
              height={44}
              alt="logo"
            />

            <div className="flex gap-1 mt-[20px]">
              <p>تلفن پشتیبانی:</p>
              <span>021-8574</span>
            </div>
            <div className="flex items-center mt-[36px] gap-6">
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
          
    </div>
    <div>
    <div className="w-full border border-solid border-[#00000033] mt-[28px]"></div>
      <div className="text-center mt-[12px] mb-[16px]">
            <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
          </div>

    </div>
    </>
  );
}

export default Footer;
