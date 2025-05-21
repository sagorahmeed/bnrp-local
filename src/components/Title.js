'use client'

import React from 'react'

export default function Title({title,className, isTextWhite}) {
  return (
    <>
     <h1 className={`${isTextWhite ? '!text-white' : 'text-[#1C3586]'} ${className}`}>{title}</h1>
    </>
  )
}
