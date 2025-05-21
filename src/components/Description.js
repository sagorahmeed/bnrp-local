'use client'

import React from 'react'




export default function Description({title,className,isTextWhite}) {
  return (
    <>
        <p className={`text-[#475467] font-inter text-[20px] not-italic font-normal leading-[30px] ${isTextWhite ? '!text-white' : 'text-[#475467]'} ${className}`}>{title}</p>
    </>
  )
}
