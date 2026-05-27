import React from 'react'
import Image from 'next/image'
function PhoneTorino() {
  return (
    <>
    <div className='lg:max-w-[1270px] lg:h-fit mx-auto lg:px-7  hidden lg:block lg:mt-[109px] '>
        <Image src="/icons/phonetorino.svg" width={1188} height={251} alt='phone' />
    </div>
    <div>
      <Image className='w-full h-fit mx-auto block lg:hidden px-7 mt-[92px] ' src="/icons/phonetourinoserponsev.svg" width={327} height={220} alt='phone' />
    </div>
    </>
  )
}

export default PhoneTorino