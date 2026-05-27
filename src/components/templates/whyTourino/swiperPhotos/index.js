"use client"
import React from 'react'
import  {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css"
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'


const iamges = [
    "/icons/car.svg",
    "/icons/i.svg",
    "/icons/r.svg",
    "/icons/oip.svg",
]

function SwiperPhotos() {
  return (
    <Swiper  className='mySwiper' modules={[Navigation]} navigation slidesPerView={1}  spaceBetween={1} >
        
        {iamges.map((img01,index)=>(
            
            <SwiperSlide key={index}  className=''>
                <Image className=''  src={img01} width={389} height={479} alt='image' />
            </SwiperSlide>
        ))}
        
    </Swiper>
  )
}

export default SwiperPhotos