import React from 'react'
import { serverFetch } from '@/core/services/http';
import Image from 'next/image';
import DetailstourView from '@/components/templates/detailTour';



export default async function index({params}) {
  const data = await serverFetch(`/tour/${params?.id}`,{},{cache: "no-store"})

 
  

  return (
<DetailstourView data={data} id={params?.id} />
  )
}

