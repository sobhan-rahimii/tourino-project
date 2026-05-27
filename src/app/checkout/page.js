"use client"
import Basket from '@/components/templates/Basket';
import { useGetUserBasket } from '@/core/services/queries'
import React from 'react'

function CheckOutPage() {
    const {data} = useGetUserBasket()
  
  return (
    <div>
        <Basket data={data} />
    </div>
  )
}

export default CheckOutPage