import AuthProvider from "@/components/partials/provider/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProfileLayout({ children }) {
  return (
    <AuthProvider>
      <>
        <div className="block lg:hidden w-full    ">
          <div className="w-full flex justify-center pr-[42px] pl-[44px]    ">
            <div className="w-full flex gap-8  ">
              <Link className="flex " href="/profile">
                <Image
                  src="/icons/profile.svg"
                  width={16}
                  height={16}
                  alt="profile"
                />
                <p>پروفایل</p>
              </Link>
              <Link className="flex mr-[40px]" href="/profile/my-tours">
                <Image
                  src="/icons/sun-fog.svg"
                  width={16}
                  height={16}
                  alt="profile"
                />
                <p>تور های من</p>
              </Link>

              <Link className="flex mr-[40px]" href="/profile/transactions">
                <Image
                  src="/icons/convert-card.svg"
                  width={16}
                  height={16}
                  alt="profile"
                />
                <p>تراکنش ها</p>
              </Link>
            </div>
            

            
          </div>
          <div className="   w-[395px] h-0 border border-solid border-[#00000040] mx-auto   mt-[5px] justify-center flex  "></div>

          
        </div>

        <div className="   max-w-[1270px] px-10 mx-auto lg:flex lg:flex-row   ">
          <div className=" hidden lg:block  w-[282px] px-[12px] pt-[12px] h-[170px] border border-solid border-[#00000033] rounded-[10px] mt-[36px]">
            <ul className="  ">
              <Link href="/profile" className="flex items-center  gap-1 ">
                <Image
                  src="/icons/profile.svg"
                  width={20}
                  height={20}
                  alt="profile"
                />
                پروفایل
              </Link>
              <div className="w-[258px] border border-solid border-[#00000033] mt-[16px]"></div>
              <Link
                href="/profile/my-tours"
                className="flex items-center  gap-1 mt-[16px] "
              >
                <Image
                  src="/icons/profile.svg"
                  width={20}
                  height={20}
                  alt="profile"
                />
                تور های من
              </Link>
              <div className="w-[258px] border border-solid border-[#00000033] mt-[16px]"></div>

              <Link
                href="/profile/transactions"
                className="flex items-center  gap-1 mt-[16px] "
              >
                <Image
                  src="/icons/profile.svg"
                  width={20}
                  height={20}
                  alt="profile"
                />
                تراکنش ها
              </Link>
            </ul>
          </div>
          <main className=" ">{children}</main>

        </div>
      </>
    </AuthProvider>
  );
}
