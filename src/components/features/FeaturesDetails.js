'use client'

import React from 'react'
import FeaturesKey from '@/components/features/FeaturesKey'
// import FeaturesData from '@/app/data/keyFeatures.json'
import Image from 'next/image'
import {useTranslations} from "next-intl";




export default function FeaturesDetails() {

    const t = useTranslations('Home.FeaturesDetails.FeaturesDetailsLists')
    console.log('=====>>', t)

    const FeaturesData = [
        {
            "id": 1,
            "icon" : "/features/file-search.svg",
            "title" : t('title1'),
            "desc" : t('desc1')
        },
        {
            "id": 2,
            "icon" : "/features/certification.svg",
            "title" : t('title2'),
            "desc" : t('desc2')
        },
        {
            "id": 3,
            "icon" : "/features/network.svg",
            "title" :  t('title3'),
            "desc" : t('desc3')
        },
        {
            "id": 4,
            "icon" : "/features/gallery.svg",
            "title" :  t('title4'),
            "desc" : t('desc4')
        }
    ]



    return (
        <div className='sm:grid grid-cols-2 lg:gap-[163px] md:gap-[100px] sm:gap-[50px] gap-[30px] justify-between sm:space-y-0 space-y-[48px]'>
            <ul className='flex gap-[64px]'>
                <li className='space-y-[48px]'>
                    {FeaturesData.map(item => (
                        <FeaturesKey
                            key={item.id}
                            src={item.icon}
                            title={item.title}
                            description={item.desc}
                        />
                    ))}
                </li>
            </ul>
            <Image priority src={'/feat-img.svg'} width={493} height={480} className="md:w-[493px] md:h-[480px]" alt={'One app, all the opportunities'}/>
        </div>
    )
}
