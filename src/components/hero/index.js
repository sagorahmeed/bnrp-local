'use client'
import {useTranslations} from 'next-intl';
import React from 'react'
import Description from '../Description'
import Title from '../Title'
import Button from '../button'

export default function Hero({wrapperClass, isTextWhite}) {
  const t = useTranslations('Home.Hero');
  return (
    <div className={`text-center ${wrapperClass}`}>
        <Title isTextWhite={isTextWhite} className='mx-auto max-w-[1024px]' title={t("title")}/>
        <Description isTextWhite={isTextWhite} className='mx-auto mt-6 max-w-[768px]' title={t("description")}/>
        <span className='mt-[48px] block items-center justify-center gap-3 space-y-3 sm:flex sm:space-y-0 '>
            <Button className={`${isTextWhite ? '!text-white hover:!border-white !border-[#BED9FF]' : 'hover:!border-primary !text-[#344054]'}  !btn-shadow !border-[1px] !border-[#D0D5DD] !px-6 !py-4   `}  title={t('contact-btn')} type='outline' />
            <Button className={`!px-6 !py-4 !border-white !bg-white !text-[#1C3586]`} title={t('download-btn')} type='primary'/>
        </span>
    </div>
  )
}
 