'use client'

import React from 'react'

interface SubTitlePropsType{
  title : string;
  className : string;
}

export default function SubTitle({title,className} : SubTitlePropsType) {
  return (
    <>
      <h2 className={`${className}`}>{title}</h2>
    </>
  )
}
