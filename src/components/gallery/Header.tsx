'use client'

import SubTitle from '../SubTItle'
import Description from '../Description'
import Button from '../button'
import Link from 'next/link'
import {useTranslations} from "next-intl";

export default function Header() {
    const t = useTranslations('Home.Gallery')

  return (
    <div className='sm:flex justify-between items-start gap-6'>
      <div>
        <SubTitle title={t('title')} />
        <Description title={t('desc')} className={'mt-[20px] max-w-[768px] w-full'}/>
      </div>
      
        <Link href={'/gallery'}>
          <Button title={t('btnText')} className={' !bg-white !text-[#344054] mt-8 !border-[1px] !border-[#D0D5DD] px-[18px] hover:!border-primary btn-shadow py-4 min-w-[101px] sm:block hidden'} type='primary'/>
        </Link>
    </div>
  )
}
