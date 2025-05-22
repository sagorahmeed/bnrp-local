'use client'

import { useState, useEffect } from 'react';
import InitialNavbar from "./InitialNavbar";
import ScrolledNavbar from "./ScrolledNavbar";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showStickyNav, setShowStickyNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    console.log('isScrolled', isScrolled)


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setIsMounted(true);
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (window.innerWidth >= 1024) {
                if (currentScrollY > 0) {
                    setShowStickyNav(true);
                    setIsScrolled(true);
                } else {
                    setShowStickyNav(false);
                    setIsScrolled(false);
                }
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`${
                isMounted ? 'opacity-100 block' : 'opacity-0 hidden'
            }`}>
                <div className={`w-full transition-all z-50 lg:bg-transparent bg-white fixed top-0 ${showStickyNav ? 'hidden' : ''}`}>
                    <InitialNavbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                </div>

                <div className={`lg:block hidden ${showStickyNav ? '' : 'hidden'}`}>
                    <ScrolledNavbar showStickyNav={showStickyNav} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                </div>
            </div>
        </>
    );
}
