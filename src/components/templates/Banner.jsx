import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <>
      <Image
        src="/icons/banner.svg"
        style={{ width: "100%", marginTop: "30px" }}
        width={1280}
        height={350}
        alt="banner"
        className="hidden lg:block w-full h-full"
      />

      <Image className="block lg:hidden w-full h-fit" src="/icons/mobileBanner.svg" width={390} height={119} alt="banner"/>
      
    </>
  );
}

export default Banner;
