'use client'

import React from 'react'
import Description from './Description'
import Logo from './logo'
// import footerMenuData from '@/app/data/footerMenuData.json'
import Credit from './creadit'
import {useTranslations} from "next-intl";



export default function Footer() {



  const siteMapT = useTranslations('Home.FooterMenu.siteMap');
  const useFullLinksT = useTranslations('Home.FooterMenu.useFullLinks');
  const importantGovtSitesT = useTranslations('Home.FooterMenu.importantGovtSites');
  const footerTitleF = useTranslations('Home.FooterMenu.FooterTitle');
  const footerInfoT = useTranslations('Home.FooterMenu.FooterInformation');



  const footerMenuData = {
    "sitemap": [
      { "label": siteMapT('home'), "link": "/" },
      { "label": siteMapT('about'), "link": "/about" },
      { "label": siteMapT('gallery'), "link": "/gallery" },
      { "label": siteMapT('contact'), "link": "/contact" },
      { "label": siteMapT('downloadApp'), "link": "/download-app", "hasBadge" : true, "badgeTitle" : "new" }
    ],
    "usefulLinks": [
      { "label": useFullLinksT('bdArmy'), "link": "https://www.army.mil.bd" },
      { "label": useFullLinksT('bdNavy'), "link": "https://www.navy.mil.bd" },
      { "label": useFullLinksT('bdAirForce'), "link": "https://www.baf.mil.bd" },
      { "label": useFullLinksT('bgb'), "link": "https://www.bgb.gov.bd" },
      { "label": useFullLinksT('bcg'), "link": "https://www.coastguard.gov.bd" },
      { "label": siteMapT('contact'), "link": "/contact" }
    ],
    "importantGovtSites": [
      { "label": importantGovtSitesT('govtOfPeoplerb'), "link": "https://www.gov.bd" },
      { "label": importantGovtSitesT('ministryOfEducation'), "link": "https://www.moedu.gov.bd" },
      { "label": importantGovtSitesT('ministryOfFinance'), "link": "https://www.mof.gov.bd" },
      { "label": importantGovtSitesT('ministryOfForeignAffairs'), "link": "https://www.mofa.gov.bd" }
    ]
  }


  return (
    <footer className=" bg-white bnrp-container">
      <div className='!py-[64px]'>
      <ul className="sm:grid grid-cols-12 gap-4 sm:space-y-0 space-y-8">
        <li className='sm:col-span-4'>
          <Logo src={'/Logo.svg'}/>
          <p className='mt-[32px] text-[20px] text-[#101828] font-inter leading-[30px] font-semibold'>{footerInfoT('navyHeadquarters')}</p>
          <Description title={footerInfoT('officeLocation')} className={'mt-2'}/>
          <ul className='mt-5 space-y-2'>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.98356 7.37767C7.56356 8.58569 8.35422 9.71789 9.35553 10.7192C10.3568 11.7205 11.4891 12.5112 12.6971 13.0912C12.801 13.1411 12.8529 13.166 12.9187 13.1852C13.1523 13.2533 13.4392 13.2044 13.637 13.0627C13.6927 13.0228 13.7403 12.9752 13.8356 12.8799C14.1269 12.5886 14.2726 12.4429 14.4191 12.3477C14.9715 11.9885 15.6837 11.9885 16.2361 12.3477C16.3825 12.4429 16.5282 12.5886 16.8196 12.8799L16.9819 13.0423C17.4248 13.4852 17.6462 13.7066 17.7665 13.9444C18.0058 14.4174 18.0058 14.976 17.7665 15.4489C17.6462 15.6867 17.4248 15.9082 16.9819 16.351L16.8506 16.4824C16.4092 16.9238 16.1886 17.1444 15.8885 17.313C15.5556 17.5 15.0385 17.6345 14.6567 17.6333C14.3126 17.6323 14.0774 17.5655 13.607 17.432C11.0792 16.7146 8.69387 15.3608 6.70388 13.3709C4.7139 11.3809 3.36017 8.99557 2.6427 6.46774C2.50919 5.99737 2.44244 5.76218 2.44141 5.41806C2.44028 5.03621 2.57475 4.51913 2.76176 4.18621C2.9303 3.88618 3.15098 3.66551 3.59233 3.22416L3.72369 3.09279C4.16656 2.64992 4.388 2.42849 4.62581 2.3082C5.09878 2.06898 5.65734 2.06898 6.1303 2.3082C6.36812 2.42849 6.58955 2.64992 7.03242 3.09279L7.19481 3.25518C7.48615 3.54652 7.63182 3.69219 7.72706 3.83867C8.08622 4.39108 8.08622 5.10323 7.72706 5.65564C7.63182 5.80212 7.48615 5.94779 7.19481 6.23913C7.09955 6.33439 7.05192 6.38202 7.01206 6.4377C6.87038 6.63556 6.82146 6.92244 6.88957 7.15607C6.90873 7.22181 6.93367 7.27376 6.98356 7.37767Z"
                  stroke="#475467"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-secondary  font-inter text-[16px] font-semibold leading-[24px]">
                +88 02 983 6141-9
              </span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M1.6665 5.83337L8.4706 10.5962C9.02158 10.9819 9.29707 11.1748 9.59672 11.2495C9.86142 11.3154 10.1383 11.3154 10.403 11.2495C10.7026 11.1748 10.9781 10.9819 11.5291 10.5962L18.3332 5.83337M5.6665 16.6667H14.3332C15.7333 16.6667 16.4334 16.6667 16.9681 16.3942C17.4386 16.1545 17.821 15.7721 18.0607 15.3017C18.3332 14.7669 18.3332 14.0668 18.3332 12.6667V7.33337C18.3332 5.93324 18.3332 5.23318 18.0607 4.6984C17.821 4.22799 17.4386 3.84554 16.9681 3.60586C16.4334 3.33337 15.7333 3.33337 14.3332 3.33337H5.6665C4.26637 3.33337 3.56631 3.33337 3.03153 3.60586C2.56112 3.84554 2.17867 4.22799 1.93899 4.6984C1.6665 5.23318 1.6665 5.93324 1.6665 7.33337V12.6667C1.6665 14.0668 1.6665 14.7669 1.93899 15.3017C2.17867 15.7721 2.56112 16.1545 3.03153 16.3942C3.56631 16.6667 4.26637 16.6667 5.6665 16.6667Z"
                  stroke="#475467"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-secondary  font-inter text-[16px] font-semibold leading-[24px]">
                info@navy.mil.bd
              </span>
            </li>
          </ul>
        
        </li>
        <li className='sm:col-span-8 grid lg:grid-cols-3 sm:grid-cols-2 gap-4 sm:space-y-0 space-y-8'>
        <div>
          <p className="footer-menu-label">{footerTitleF('sitemap')}</p>
          <ul className='space-y-3'>
            {footerMenuData.sitemap.map((item, index) => (
              <li key={index}>
                <a href={item.link} className={`footer-link ${item.hasBadge && 'flex gap-2'}`}>{item.label} {item.hasBadge && <span className='bg-[#ECFDF3] border-[1px] border-[#ABEFC6] text-[#067647] font-inter text-[12px] leading-[21px] font-normal rounded-[16px] px-2'>{item.badgeTitle}</span>} </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-menu-label">{footerTitleF('useFullLinks')}</p>
          <ul className='space-y-3'>
            {footerMenuData.usefulLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="footer-link" target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))} 
          </ul>
        </div>
        <div>
          <p className="footer-menu-label">{footerTitleF('importantGovtSites')}</p>
          <ul className='space-y-3'>
            {footerMenuData.importantGovtSites.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="footer-link" target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </li>
      </ul>
      </div>
      <Credit/>
    </footer>
  )
}
