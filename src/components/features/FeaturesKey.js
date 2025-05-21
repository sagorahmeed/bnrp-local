'use client'

import Image from 'next/image'
import React from 'react'
import FeatList from './FeatList'

export default function FeaturesKey({src, title, description}) {
  return (
    <ul className='flex gap-4 sm:items-start items-center'>
        <li className='p-3 rounded-full bg-[#EFF6FF] flex justify-center items-center min-w-12 h-12'>
            <Image priority src={src} width={28} height={28} className="md:w-7 md:h-7 w-[24px] h-[24px]" alt={title}/>
        </li>
        <li>
            <FeatList title={title} description={description}/>  
        </li> 
    </ul>
  )
}
