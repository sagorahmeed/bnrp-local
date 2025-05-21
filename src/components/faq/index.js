'use client';

import { useState, useRef } from 'react';
import SubTitle from '../SubTItle';
import {useTranslations} from "next-intl";

const FAQ = () => {


    const t = useTranslations('Home.FAQ.faqDetails');
    const ft = useTranslations('Home.FAQ');

    const faqs = [
        {
            question: t('question'),
            answer: t('answer'),
        },
        {
            question: t('question2'),
            answer: t('answer2'),
        },
        {
            question: t('question3'),
            answer: t('answer3'),
        },
        {
            question: t('question4'),
            answer: t('answer4'),
        },
        {
            question: t('question5'),
            answer: t('answer5'),
        },
        {
            question: t('question6'),
            answer: t('answer6'),
        },
    ];

    return (
        <div className="max-w-[768px] mx-auto py-8">
            <SubTitle title={ft('faqTitle')}/>
            <div className=" mt-[64px]">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} isLast={index === faqs.length - 1}/>
                ))}
            </div> 
        </div>
    );
};

const FAQItem = ({ question, answer, isLast }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={`py-6 ${!isLast ? 'border-b' : ''}`}>
            <button
                onClick={toggle}
                className="w-full text-[#101828] font-inter text-[18px] font-medium leading-[28px] flex justify-between items-center"
            >
                {question}
                <span className="ml-2">{isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}</span>
            </button>

            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    height: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
                }}
            >
                <p className="mt-2 text-[#475467] font-inter text-[16px] font-normal leading-[24px]">{answer}</p>
            </div>
        </div>
    );
};

export default FAQ;
