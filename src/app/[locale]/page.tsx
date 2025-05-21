
import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import React from 'react'
import Hero from '@/components/hero'
import Features from '@/components/features'
import ServiceDetails from '@/components/serviceDetails'
import ChiefDetails from '@/components/chiefDetails'
import SubTitle from '@/components/SubTItle'
import FeaturesDetails from '@/components/features/FeaturesDetails'
import FAQ from '@/components/faq/index'
import CTA from '@/components/cta/index'
import Header from '@/components/gallery/Header'
import GallerySwiper from '@/components/gallery/GallerySwiper'
import Link from 'next/link'
import Button from '@/components/button'

type Props = {
  params: Promise<{locale: Locale}>;
};

export default function IndexPage({params}: Props) {

  // const [isMounted, setIsMounted] = React.useState(false);
  const t = useTranslations('Home.FeaturesDetails')
  const gt = useTranslations('Home.Gallery')
  const bannerImg = '/bnrp-hero-banner.webp';


  // useEffect(() => {
  //     setIsMounted(true);
  // })


  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);



  return (
    <main>
    <section>
        <div style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }} className={`pt-[86px]`}>
            <div className="bnrp-container">
                <Hero
                    wrapperClass='lg:pt-[96px] md:pt-[76px] sm:pt-[66px] pt-[50px]'
                    isTextWhite={true}
                />
                <div className='mt-[64px]'>
                    <Features/>
                </div>
            </div>
        </div>


        <div className="bg-[#F9FAFB]">
            <div className="bnrp-container">
                <ServiceDetails/>
            </div>
        </div>
        <div className="bnrp-container">
            <ChiefDetails/>
        </div>
        <div className="bnrp-container space-container ">
            <SubTitle
                className='mb-[64px]'
                title={t('featuresTitle')}
            />
            <FeaturesDetails/>
        </div>
        <div className='space-container'>
            <div className='bnrp-container'>
                <FAQ/>
            </div>
        </div>
        <div className='space-container bg-[#1C3586]'>
            <div className='bnrp-container'>
                <CTA/>
            </div>
        </div>
        <div className='space-container'>
            <div className='bnrp-container'>
                <Header/>
            </div>
            <div className='mt-[64px] overflow-hidden'>
                <GallerySwiper/>
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
</main>
  );
}
