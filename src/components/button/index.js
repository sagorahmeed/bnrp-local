'use client'

import React from 'react';

export default function Button({ title, type = 'primary',className,onClick, isShowArrow }) {

  const baseStyles = 'px-[18px] py-[10px] rounded-[8px] font-inter text-[16px] leading-[24px] font-semibold transition duration-200 border-[1px] border-[#92C2FE] sm:w-auto w-full';
  const primaryStyles = 'bg-primary text-white hover:opacity-85 border-[1px] border-primary';
  const outlineStyles = 'border-2 border-primary text-primary hover:border-primary hover:border-primary';

  const buttonStyles = type === 'outline' ? outlineStyles : primaryStyles;

  return (
    <button onClick={onClick} className={`${baseStyles} ${buttonStyles} ${className} ${isShowArrow} ${isShowArrow && 'flex gap-3 items-center'}`}>
      {isShowArrow && 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      }
      {title}
    </button>
  );
}
