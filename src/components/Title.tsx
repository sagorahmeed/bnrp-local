'use client'

import React from 'react'

interface TitlePropsType {
  title: string;
  className?: string;
  isTextWhite?: boolean;
}

export default function Title({title,className, isTextWhite} : TitlePropsType) {
  return (
    <>
     <h1 className={`${isTextWhite ? '!text-white' : 'text-[#1C3586]'} ${className}`}>{title}</h1>
    </>
  )
}
