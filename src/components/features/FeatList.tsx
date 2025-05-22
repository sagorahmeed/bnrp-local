'use client'

import React from 'react'

interface FeatListPropsType {
  title: string;
  description: string;
}

export default function FeatList({title, description} : FeatListPropsType) {
  return (
    <div>
        <span className='text-[#101828] font-inter text-[20px] font-semibold leading-[30px]'>{title}</span>
        <p className='mt-[8px] text-[#475467] font-inter text-[16px] font-normal leading-[24px]'>{description}</p>
    </div>
  )
}
