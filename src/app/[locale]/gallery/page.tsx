'use client'

import React from 'react'
import SubTitle from '@/components/SubTItle'
import Description from '@/components/Description'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import GalleryGridData from '../../data/galleryImage.json'
import {useTranslations} from 'next-intl';

export default function Page() {
    const t = useTranslations('Home.Gallery')
  return (
    <>
      <div className='bg-[#F9FAFB] space-container lg:pt-[178px] !pt-[120px]'>
          <div className='bnrp-container'>
            <div className='sm:flex justify-between items-start gap-6'>
                <SubTitle title={t('title')}/>
                <Description title={t('desc')} className={'sm:mt-0 mt-[20px] max-w-[768px] w-full'}/>
            </div>
          </div>
        </div>
        <div className='bnrp-container'>
          <GalleryGrid gallery={GalleryGridData}/>
        </div>
    </>
  )
}
