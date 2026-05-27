import React from "react";
import Image from "next/image";
import Link from "next/link";

function TourCard({ tour }) {
    
  return (
    <div className="">
      <div className=" w-[327px] h-[290px] rounded-[10px] lg:w-[278px] lg:h-[277px] border border-solid border-[#0000001F]">
        <Image
          src={tour.image}
          width={278}
          height={159}
          alt="tour"
          className="w-full"
        />
        <div>
          <h4>{tour.title}</h4>
        </div>
        <div className=" w-[327px] mt-[35px] lg:w-[278px] border border-solid border-[#0000001F]"></div>
        <div className="flex items-center  justify-between px-[8px] ">
          <Link
            className=" w-[99px] h-[29px] leading-none px-auto mt-[8px] lg:w-[64px] lg:h-[30px] bg-[#28A745] rounded-[4px]  text-[15px] text-[#FFFFFF]  flex items-center justify-center   font-YekanBakhBold "
            href={`/tourDetails/${tour?.id}`}
          >
            رزرو
          </Link>
          <span className="flex items-center justify-center pl-[8px] mt-[8px]">
            {tour.price}تومان
          </span>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
