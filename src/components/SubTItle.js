'use client'

import React from 'react'

export default function SubTitle({title,className}) {
  return (
    <>
    <h2 className={`${className}`}>{title}</h2>
    </>
  )
}
