'use client'

import Button from "../button";
import LocaleSwitcher from "../LocaleSwitcher";
import Logo from "../logo";
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import { usePathname } from "next/navigation";
import NavigationLink from "../NavigationLink";

interface ScrolledNavbarProps {
    showStickyNav: boolean;
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

const ScrolledNavbar: React.FC<ScrolledNavbarProps> = ({ showStickyNav, isMenuOpen, toggleMenu }) => {
    const pathName = usePathname();
    const t = useTranslations('Navigation');
    const btnTextF = useTranslations('Common');
    const locale = useLocale();

    const normalizedPath = pathName.replace(`/${locale}`, '') || '/';
    const isActive = (href: string) => normalizedPath === href;

    const getLinkColor = (href: string) => {
        if (href === '/' && normalizedPath === '/') {
            return 'text-[#1B49DA]';
        }
        return isActive(href) ? '!text-[#1B49DA]' : '!text-[#909cb5]';
    };

    return (
        <div
            className={`fixed top-0 w-full bg-white z-50 border-b-[1px] border-[#F2F4F7] transition-transform duration-300 ${
                showStickyNav ? 'transform translate-y-0' : 'transform -translate-y-full'
            }`}
        >
            <header className="bnrp-container relative w-full">
                <div className="flex items-center justify-between lg:py-[18px] py-[10px]">
                    {/* Logo */}
                    <div className="flex items-center justify-between gap-10">
                        <Logo src={'/Logo.svg'} />
                        <nav
                            className={`absolute left-0 top-[70px] w-full bg-white shadow-lg transition-all duration-200 ease-in lg:static lg:w-auto lg:bg-transparent lg:shadow-none ${
                                isMenuOpen ? 'max-h-[1000px] overflow-auto' : 'max-h-0 overflow-hidden lg:max-h-full'
                            }`}
                        >
                            <ul className="flex flex-col gap-4 p-6 lg:flex-row lg:gap-[32px] lg:p-0">
                                <li className={`font-inter text-[16px] font-semibold not-italic leading-[24px] transition-all duration-150 ${getLinkColor('/')}`}>
                                    <NavigationLink href="/">{t('home')}</NavigationLink>
                                </li>
                                <li className={`font-inter text-[16px] font-semibold not-italic leading-[24px] transition-all duration-150 ${getLinkColor('/about')}`}>
                                    <NavigationLink href="/about">{t('about')}</NavigationLink>
                                </li>
                                <li className={`font-inter text-[16px] font-semibold not-italic leading-[24px] transition-all duration-150 ${getLinkColor('/gallery')}`}>
                                    <NavigationLink href="/gallery">{t('gallery')}</NavigationLink>
                                </li>
                                <li className={`font-inter text-[16px] font-semibold not-italic leading-[24px] transition-all duration-150 ${getLinkColor('/contact')}`}>
                                    <NavigationLink href="/contact">{t('contact')}</NavigationLink>
                                </li>
                                <li className="block w-full border-t-[1px] border-[#EAECF0] pt-6 lg:hidden">
                                    <Button className="!w-full" title={btnTextF('btnText')} type="primary" />
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center gap-[34px] lg:hidden">
                        <LocaleSwitcher />
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

                    {/* Desktop Right Section */}
                    <div className="hidden items-center gap-3 lg:flex">
                        <LocaleSwitcher />
                        <Button title={btnTextF('btnText')} type="primary" />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default ScrolledNavbar;
