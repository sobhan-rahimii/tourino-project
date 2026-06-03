import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <>
  <div className=" w-full    mx-auto overflow-hidden mt-[2px] ">

  
      <Image
        src="/icons/banner.svg"
        
        width={1280}
        height={350}
        alt="banner"
        className="hidden lg:block w-full h-auto"
      />
      
      
      <Image className="block lg:hidden w-full h-auto" src="/icons/mobileBanner.svg" width={390} height={119} alt="banner"/>

      </div>
      
    </>
  );
}

export default Banner;
