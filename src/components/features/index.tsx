'use client'

import Image from 'next/image';
import React from 'react'
import Badge from '../badge';
import {useTranslations} from "next-intl";

export default function Features() {
//   const bannerImg = '/features/feat-banner.svg';
  const t = useTranslations('Home.Service')

  return (
    <div>
      <div className='bnrp-container'>
          <div className='relative'>
              <ul className='flex grid-cols-3 justify-center gap-3'>
                  <li className='flex flex-col justify-between'>
                      <Badge className='mt-[30px] md:mt-[60px]' title={t('label1')} src='/features/file-search-2.svg'/>
                      <Badge className='mb-[74px] md:mb-[174px] md:mr-[24px]' title={t('label2')} src='/features/network-2.svg'/>
                  </li>
                  <li className=' relative h-[208.519px] w-[120.098px] md:h-[500px] md:w-[315px]'>
                  <Image priority className='absolute bottom-0 right-0 left-0' src='/features/phone.png' width={315} height={747} alt="phone"/>
                  </li> 
                 
                  <li className='flex justify-between flex-col'>
                      <Badge className='md:mt-[174px] mt-[74px] md:ml-[24px]' title={t('label3')} src='/features/certification-2.svg'/>
                      <Badge className='md:mb-[60px] mb-[20px]' title={t('label4')} src='/features/gallery-2.svg'/>
                  </li>
              </ul>
          </div>
      </div>
  </div>
  );
}
