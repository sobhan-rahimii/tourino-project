"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import TourCard from './TourCard';


function TourList({tourData}) {
  const [visibleTours,setVisibleTours] = useState(5)

  const toursToShow = tourData.slice(0,visibleTours)
  
  const loadMoreTours = ()=>{

    setVisibleTours(preVisibleTours=> preVisibleTours+5)
  }

   
    if(!tourData?.length) return <p>بدون پاسخ</p>
  return (
    <div className='lg:max-w-[1270px] lg:mx-auto  mt-[145px] px-7 mx-auto  '>

    <div className=' grid grid-cols-1  lg:grid lg:grid-cols-4   sm:grid sm:grid-cols-2   '>
      {toursToShow.map(tour=><TourCard key={tour.id} tour={tour} />)}
    </div>
    {visibleTours <tourData.length &&(
      <div className=' flex items-start  justify-center lg:hidden'>
        <button onClick={loadMoreTours}> نمایش بیشتر</button>
      </div>
    )}
    </div>
  )
}

export default TourList