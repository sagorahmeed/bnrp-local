'use client'

import Image from 'next/image'
import React from 'react'

interface BadgePropsType {
  className?: string;
  src: string;
  title: string;
}

export default function Badge({className,src,title} : BadgePropsType) {
  return (
    <div className={`flex items-center md:gap-4 gap-[6.61px] md:py-4 py-[6.61px] md:pl-[36px] pl-[14.87px] md:pr-[44px] pr-[18.2px] ${className}`}>
        <Image priority src={src} width={28} height={28} className="md:w-[28px] md:h-[28px] w-[24px] h-[24px]" alt={title}/>
        <p className='text-white font-inter md:text-[20px] text-[18px] font-medium md:leading-[30px] leading-[12.39px]'>{title}</p>
    </div>
  )
}
