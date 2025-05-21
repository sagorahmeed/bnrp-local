import {Locale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import Link from "next/link";
import React from "react";
// import Description from "@/components/Description";
import ServiceDetails from '@/components/serviceDetails'
import ChiefDetails from "@/components/chiefDetails";
// import GallerySwiper from "@/components/gallery/GallerySwiper";
import FAQ from "@/components/faq";
// import Header from "@/components/gallery/Header";
import Button from "@/components/button";
import {useTranslations} from "next-intl";

type Props = {
  params: Promise<{locale: Locale}>;
};

export default function Page({params}: Props) {
  const {locale} = use(params);

  setRequestLocale(locale);


  const t = useTranslations('About.Hero');
  const overview1 = useTranslations('About.serviceOverView.overview1')
  const overview2 = useTranslations('About.serviceOverView.overview2')
  const overview3 = useTranslations('About.serviceOverView.overview3')
  const gt = useTranslations('Home.Gallery')

  const serviceOverView = [
      {
          "count": overview1('count'),
          "title" : overview1('title'),
          "desc" : overview1('desc')
      },
      {
          "count": overview2('count'),
          "title" : overview2('title'),
          "desc" : overview2('desc')
      },
      {
          "count": overview3('count'),
          "title" : overview3('title'),
          "desc" : overview3('desc')
      },
  ]


  return (
    <section className="lg:pb-[96px] md:pb-[76px] pb-[64px] lg:pt-[64px] pt-[54px]">
            <div className='bnrp-container'>
                <h2 className='mx-auto max-w-[768px] text-center'>{t('title')}</h2>
                {/* <Description className='mx-auto mt-6 max-w-[768px] text-center' title={t("description")}/> */}
                <ul className='sm:grid grid-cols-3 gap-8 py-[96px]'>
                    {serviceOverView.map((item, i) => (
                        <li key={i}>
                            <span className='service-label'>{item.count}</span>
                            <p className='service-title'>{item.title}</p>
                            <p className='service-desc'>{item.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-[#F9FAFB]">
                <div className="bnrp-container">
                    <ServiceDetails/>
                </div>
            </div>
            <div className="bnrp-container">
                <ChiefDetails/>
            </div>
            <div className='space-container'>
                <div className='bnrp-container'>
                    <FAQ/>
                </div>
            </div>
            <div className='space-container'>
                {/* <div className='bnrp-container'>
                    <Header/>
                </div> */}
                <div className='mt-[64px] overflow-hidden'>
                    {/* <GallerySwiper/> */}
                    <div className='bnrp-container'>
                        <Link href={'/gallery'}>
                            <Button title={gt('btnText')}
              className='hover:bg-gray-200 bg-white !text-[#344054] mt-8 border-[1px] !border-[#D0D5DD] hover:border-[#D0D5DD] px-[18px] btn-shadow py-4 min-w-[101px] sm:hidden block'
              type='primary' onClick={undefined} isShowArrow={undefined}/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
  );
}
