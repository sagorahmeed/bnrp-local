'use client'

import React, { useState } from 'react'
import SubTitle from '../SubTItle'
import Description from '../Description'
import Button from '../button'
import Image from 'next/image'
import {useTranslations} from "next-intl";

export default function ChiefDetails() {


    const [open, setOpen] = useState(false);

    const t = useTranslations('Home.ChiefDetails');

    const openMoreDescriptionHandler = () => {
        console.log('clicked');
        
        setOpen(prevOpen => !prevOpen);
    }


    return (
        <div className='lg:py-[96px] md:py-[76px] py-[64px] sm:flex gap-[64px]  sm:space-y-0 space-y-[48px]'>
                    <Image priority src={'/ADMIRAL-M-NAZMUL-HASSAN.svg'} width={654}
                height={480}
                className="sm:order-2 order-1 lg:max-w-[654px] lg:max-h-[629px] md:max-w-[454px] md:max-h-[429px] sm:max-w-[354px] sm:max-h-[329px] w-full h-full max-h-full sm:sticky top-[1rem]"
                alt="ADMIRAL M NAZMUL HASSAN" />
            <div className='sm:order-1 order-2'>
                <p className='text-[#475467] font-inter text-[16px] font-semibold leading-[24px] mb-3'>{t('chiefBio')}</p>
                <SubTitle title={t('chiefName')} />
             
                <div className={` mt-[48px] space-y-[18px] transition-all duration-150 ease-in ${
                        open ? 'max-h-auto overflow-auto' : 'max-h-[22rem] overflow-hidden'
                    }`}>

                    <Description className={'text-[18px] leading-[28px]'} title={t('chiefBioDataDetails')} />
                </div>

                <Button onClick={openMoreDescriptionHandler} title={`${open ? t('btnText2') : t('btnText')}`} type='outline' className={'!px-6 !py-4 !text-[#344054] !border-[1px] !border-[#D0D5DD] !btn-shadow hover:!border-primary mt-[48px]'} />
            </div>
    
        </div>
    )
}
