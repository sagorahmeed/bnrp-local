'use client'

import React from 'react'
import SubTitle from '../../components/SubTItle'
import Description from '../Description'
import FeatList from '../../components/features/FeatList'
import {useTranslations} from "next-intl";

export default function ServiceDetails() {

    const t = useTranslations('Home.ServiceDetails');

  return (
    <div className='lg:py-[96px] md:py-[76px] py-[64px] sm:grid grid-cols-2  sm:space-y-0 space-y-12 gap-[96px]'>
        <div>
            <SubTitle title={t('title')}/>
            <Description className={'mt-[20px]'} title={t('titleDesc')}/>
        </div>
        <div className='sm:space-y-[48px] space-y-[24px]'>
            <FeatList title={t('subTitle')} description={t('subDesc')}/>
            <FeatList title={t('subTitle2')} description={t('subDesc2')}/>
        </div>
    </div>
  )
}
 