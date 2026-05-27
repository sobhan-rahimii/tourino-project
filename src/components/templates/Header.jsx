"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthForm from "./authForm";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggelMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className=" w-full  hidden lg:block    mt-[24px] md:block   ">
    
          <div className="  lg:max-w-[1270px] mx-auto    flex items-center justify-between px-7   ">
            <div className="flex  items-center  gap-6    ">
              <Image
                className="pr-[10px]"
                src="/icons/logo.svg"
                width={146}
                height={44}
                alt="logo"
                loading="eager"
              />
              <ul className="flex items-center  gap-15 font-YekanBakhBold gap-10">
                <li>
                  <Link href="/">صفحه اصلی</Link>
                </li>
                <li>
                  <Link href="/">خدمات گردشگری</Link>
                </li>
                <li>
                  <Link href="/">درباره ما</Link>
                </li>
                <li>
                  <Link href="/">درباره ما</Link>
                </li>
              </ul>
              <div></div>
            </div>
            <div className="">
              <AuthForm />
            </div>
          </div>
        
      </header>

      <header className="w-full md:hidden lg:hidden block header-mt-24-important ">
        <div className="flex items-center justify-between ">
          <button className="pr-[20px] " onClick={toggelMobileMenu}>
            <Image
              src="/icons/hamber.svg"
              width={26}
              height={15}
              alt="hambermenu"
            />
          </button>
          <div className="md:block ">
            <AuthForm />
          </div>
        </div>
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black opacity-50 transition-opacity duration-300"
              onClick={toggelMobileMenu}
            ></div>

            <div
              className={`fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out rounded-xl ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className=" flex flex-col"></div>
              <nav className=" flex flex-col overflow-y-auto pt-32 nav-pt-32-important font-YekanBakhBold">
                <Link href="/">صفحه اصلی</Link>
                <Link href="/">خدمات گردشگری</Link>
                <Link href="/">درباره ما</Link>
                <Link href="/">تماس با ما </Link>
              </nav>
            </div>
          </>
        )}
      </header>
    </>
  );
}

export default Header;
