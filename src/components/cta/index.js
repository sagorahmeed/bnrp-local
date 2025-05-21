'use client'

import React from 'react'
import SubTitle from '../SubTItle'
import Description from '../Description'
import Button from '../button'
import {useTranslations} from "next-intl";

export default function CTA() {
    const t = useTranslations('Home.CTA')
  return (
    <div className='text-center'>
        <SubTitle title={t('title')} className='text-white'/>
        <Description title={t('desc')} className={'text-[#BED9FF] mt-[20px]'}/>
        <Button title={t('btnText')} className={'!hover:bg-gray-200 !bg-white !hover:bg-[#d4d4d4] !text-[#344054] btn-shadow mt-8 ~border-[1px] !border-[#D0D5DD] !hover:border-[#D0D5DD] px-[18px] py-4'} type='primary'/>
    </div>
  )
}
