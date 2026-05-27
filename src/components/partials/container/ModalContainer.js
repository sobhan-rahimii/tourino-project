import React from 'react'

function modalContainer({children,isopen,setIsOpen}) {
    if(!isopen) return
  return (
    <div className='fixed top-0 right-0 left-0  w-full h-full bg-black/20 z-10 backdrop-blur-sm  '>
        <div className='w-full  h-full flex items-center justify-center '>
            <div className='relative bg-white rounded-lg '>
        {children}
            <button onClick={()=>setIsOpen(false)} className='absolute top-4 left-4'>X</button>
            </div>
            
        </div>
    </div>
  )
}

export default modalContainer