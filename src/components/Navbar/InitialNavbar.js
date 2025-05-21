'use client'

// import Link from "next/link";
import Button from "@/components/button";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Logo from "@/components/logo";
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation'
import NavigationLink from "../NavigationLink";

const InitialNavbar = ({ isMenuOpen, toggleMenu }) => {
    const t = useTranslations('Navigation');
    const btnTextF = useTranslations('Common')
    const pathName= usePathname()

    const normalizedPath = pathName.replace('/de', '');
    const isActive = (href) => normalizedPath === href;

    const getLinkColor = (href) => {
        if (href === '/' && normalizedPath === '') {
            return 'lg:text-white text-[#1B49DA]';
        }
        return isActive(href) ? '!text-[#1B49DA]' : '!text-[#909cb5]';
    };




    return (
        <header className="bnrp-container relative w-full">
            <div className="flex items-center justify-between lg:py-[18px] py-[10px]">
                {/* Logo */}
                <div className="flex items-center justify-between gap-10">
                    {pathName === '/de' || pathName === '/en' ?
                         <div>
                             <Logo src={'/header/logo-white.svg'} className="lg:block hidden" />
                             <Logo src={'/Logo.svg'} className="lg:hidden block"/>
                         </div> : <Logo src={'/Logo.svg'}/>
                    }

                    <nav
                        className={`absolute left-0 top-[60px] w-full bg-white shadow-lg transition-all duration-200 ease-in lg:static lg:w-auto lg:bg-transparent lg:shadow-none ${
                            isMenuOpen ? 'max-h-[1000px] overflow-auto' : 'max-h-0 overflow-hidden lg:max-h-full'
                        }`}
                    >
                        <ul className="flex flex-col gap-4 p-6 lg:flex-row lg:gap-[32px] lg:p-0">
                            <li className={`font-inter text-[16px] font-semibold not-italic leading-[24px] transition-all duration-150 ${getLinkColor('/')}`}>
                                <NavigationLink href="/">{t('home')}</NavigationLink>
                            </li>
                            <li className={`font-inter text-[16px] font-semibold not-italic leading-[24px] transition-all duration-150  ${getLinkColor('/about')}`}>
                                <NavigationLink href="/about">{t('about')}</NavigationLink>
                            </li>
                            <li className={`font-inter text-[16px] font-semibold not-italic leading-[24px] transition-all duration-150  ${getLinkColor('/gallery')}`}>
                                <NavigationLink href="/gallery">{t('gallery')}</NavigationLink>
                            </li>
                            <li className={`font-inter text-[16px] font-semibold not-italic leading-[24px] transition-all duration-150  ${getLinkColor('/contact')}`}>
                                <NavigationLink href="/contact">{t('contact')}</NavigationLink>
                            </li>
                            <li className="block w-full border-t-[1px] border-[#EAECF0] pt-6 lg:hidden">
                                <Button className="!w-full" title={btnTextF('btnText')} type="primary"/>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Menu Toggle Button (Mobile) */}
                <div className="flex items-center gap-[34px] lg:hidden">
                    <LocaleSwitcher/>
                    <button
                        aria-label="Toggle navigation menu"
                        className="relative h-4 w-6 focus:outline-none"
                        onClick={toggleMenu}
                        type="button"
                    >
                                <span
                                    className={`absolute block h-[2px] w-full bg-[#1C3586] transition-all duration-200 ${
                                        isMenuOpen ? 'top-[50%] translate-y-[-50%] rotate-45' : 'top-0'
                                    }`}
                                />
                        <span
                            className={`absolute block h-[2px] w-full bg-[#1C3586] transition-all duration-200 ${
                                isMenuOpen ? 'opacity-0' : 'top-[45%]'
                            }`}
                        />
                        <span
                            className={`absolute block h-[2px] w-full bg-[#1C3586] transition-all duration-200 ${
                                isMenuOpen ? 'bottom-[50%] translate-y-[50%] -rotate-45' : 'bottom-0'
                            }`}
                        />
                    </button>
                </div>

                {/* Right Section (Desktop) */}
                <div className="hidden items-center gap-3 lg:flex">
                    <LocaleSwitcher isNavbarBgWhite={true}/>
                    <Button title={btnTextF('btnText')} type="outline" className={`${pathName === '/de' || pathName === '/en' ? 'border-[1px] !border-white text-white' : ''}`}/>
                </div>
            </div>
        </header>
    )

}
export default InitialNavbar;