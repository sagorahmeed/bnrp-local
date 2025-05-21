
'use client'

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from "@/components/button";
import Description from "@/components/Description";
import Title from "@/components/Title";
import {useTranslations} from "next-intl";

export default function Custom404() {
    const router = useRouter();
    const t = useTranslations('NotFoundPage');
    return (
      <div className="space-container  lg:pt-[178px] pt-[100px]">
        <div className='bnrp-container text-center'>
            <Title title={t('title')}/>
            <Description className='mt-6 text-[#344054] text-[20px] font-normal leading-[30px] max-w-[768px] mx-auto' title={t('description')} />
            <div className="mt-12 sm:flex gap-3 items-center justify-center">
                <Button onClick={() => router.back()} isShowArrow={true} title={t('buttonTitle')} type='outline' className='!px-6 !py-4 !text-[#344054] !border-[1px] !border-[#D0D5DD] !btn-shadow  hover:!border-primary'/>
                <Link href='/'>
                     <Button title={t('buttonTitle2')} type='primary' className='!px-6 !py-4 sm:mt-0 mt-3'/>
                </Link>
            </div>
        </div>
      </div>
    );
  }
  