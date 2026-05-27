import AuthProvider from '@/components/partials/provider/AuthProvider'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProfileLayout({children}) {
  return (
    <AuthProvider>
      <div className='max-w-[1270px] px-10 mx-auto flex '>
        <div className='w-[282px] px-[12px] pt-[12px] h-[170px] border border-solid border-[#00000033] rounded-[10px] mt-[36px]'>

        
        <ul className='  '>
          <Link href="/profile" className='flex items-center  gap-1 '><Image src="/icons/profile.svg" width={20} height={20} alt='profile' />پروفایل</Link>
          <div className='w-[258px] border border-solid border-[#00000033] mt-[16px]'></div>
          <Link href="/profile/my-tours" className='flex items-center  gap-1 mt-[16px] '><Image src="/icons/profile.svg" width={20} height={20} alt='profile' />تور های من</Link>
          <div className='w-[258px] border border-solid border-[#00000033] mt-[16px]'></div>

          <Link href="/profile/transactions" className='flex items-center  gap-1 mt-[16px] '><Image src="/icons/profile.svg" width={20} height={20} alt='profile' />تراکنش ها</Link>

        </ul>
        </div>
      
      <main>

        {children}
      </main>
      </div>
    </AuthProvider>
  )
}
