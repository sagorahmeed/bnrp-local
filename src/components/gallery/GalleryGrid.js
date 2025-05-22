import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import imageData from '@/app/data/galleryImage.json'

export default function GalleryGrid({ gallery }) {
    const [galleryData, setGalleryData] = useState([]);
    const posts = imageData
    const postsPerPage = 9
    const [currentPage, setCurrentPage] = useState(1);
    const [pageItem, setPageItem] = useState({
        start: 0,
        end: postsPerPage,
    });

    const firstImage = galleryData.length > 0 ? galleryData[0].img : null;

    useEffect(() => {
        setGalleryData(gallery);
    }, [gallery]);

    useEffect(() => {
        const start = (currentPage - 1) * postsPerPage;
        const end = currentPage * postsPerPage;
        setPageItem({ start, end });
    }, [currentPage, postsPerPage, galleryData]);

    const numOfPages = Math.ceil(posts.length / postsPerPage);

    const numOfButtons = [];
    for (let i = 1; i <= numOfPages; i++) {
        numOfButtons.push(i);
    }

    const prevPageClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPageClick = () => {
        if (currentPage < numOfPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

    useEffect(() => {
      let tempNumberOfButtons = [];
      const dotsInitial = '...';
      const dotsLeft = '... ';
      const dotsRight = ' ...';

      if (numOfButtons.length < 6) {
          tempNumberOfButtons = numOfButtons;
      } else if (currentPage <= 3) {
          tempNumberOfButtons = [1, 2, 3, 4, dotsInitial, numOfButtons.length];
      } else if (currentPage === 4) {
          tempNumberOfButtons = [1, 2, 3, 4, 5, dotsInitial, numOfButtons.length];
      } else if (currentPage > 4 && currentPage < numOfButtons.length - 2) {
          const sliced1 = numOfButtons.slice(currentPage - 2, currentPage);
          const sliced2 = numOfButtons.slice(currentPage, currentPage + 1);
          tempNumberOfButtons = [1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numOfButtons.length];
      } else {
          const sliced = numOfButtons.slice(numOfButtons.length - 4);
          tempNumberOfButtons = [1, dotsLeft, ...sliced];
      }

      setArrOfCurrButtons(tempNumberOfButtons);
  }, [currentPage, numOfPages]);

    return (
      <div className='bg-white'>
        <div className='bnrp-container'>
            <div className='space-container'>
                <div className='overflow-hidden rounded-[8px]'>
                    {firstImage ? (
                        <Image priority
                            src={firstImage}
                            width={1230}
                            height={800}
                            alt='Gallery'
                            className='rounded-[8px] hover:scale-[1.05] transition-all duration-300 lg:max-w-[1230px]'
                        />
                    ) : null}
                </div>
                <ul className='sm:grid grid-cols-2 gap-[32px] mt-[64px] sm:space-y-0 space-y-[32px]'>
                {galleryData.slice(pageItem.start + 1, pageItem.end).map((img, index) =>
                        img.img ? (
                            <li key={index}>
                                <div className='overflow-hidden rounded-[8px]'>
                                    <Image
                                        className='rounded-[8px] lg:min-w-[592px] object-cover md:min-h-[391px] lg:max-w-[592px] w-full lg:max-h-[370px] h-auto hover:scale-[1.05] transition-all duration-300'
                                        src={img.img}
                                        width={592}
                                        height={391}
                                        alt='Gallery'
                                    />
                                </div>
                            </li>
                        ) : null
                    )}
                </ul>

                {/* Pagination */}
                <ul className="dt-pagination-ul flex items-center justify-between space-x-2 mt-[64px] pt-5 border-t-[1px] border-[#EAECF0]">
                    <li className={`dt-item ${currentPage === 1 ? 'disabled !cursor-not-allowed ' : ''}`}>
                        <button
                            onClick={prevPageClick}
                            disabled={currentPage === 1}
                            className={`dt-item border-[1px] ${currentPage === 1 ? 'disabled !cursor-not-allowed !text-[#98A2B3] !border-[#EAECF0]' : '!text-[#344054] !border-[#D0D5DD]'} dt-item pagination-next-prev-btn flex items-center gap-[6px]`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M15.8333 9.99996H4.16663M4.16663 9.99996L9.99996 15.8333M4.16663 9.99996L9.99996 4.16663" stroke={currentPage === 1 ? '#98A2B3' : '#344054'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
                            </svg>
                             
                            <span className='sm:block hidden'>Previous</span> 

                        </button>
                    </li>
                    <li className='flex items-center justify-between gap-[2px] pagination-list'>
                    {arrOfCurrButtons.map((data, index) => {
                        if (data === '...') {
                            return (
                                <span key={index} className="dt-item disabled !cursor-not-allowed">
                                    <span className="dt-link p-2 text-gray-500">...</span>
                                </span>
                            );
                        }
                        return (
                            <span key={index} className={`dt-item ${currentPage === data ? 'active' : ''} border-none`}>
                                <button
                                    className={`dt-link px-[16.5px] py-[10px] border-none  font-inter text-[14px] font-medium leading-[20px] rounded-[8px] transition-all ${currentPage === data ? 'bg-[#F9FAFB] text-[#182230]' : 'bg-white'}`}
                                    onClick={() => setCurrentPage(data)}
                                >
                                    {data}
                                </button>
                            </span>
                        );
                    })}
                    </li>

                    <li className='flex items-center justify-between gap-[2px] pagination-list-2'>
                      <span className='text-[#344054] font-inter text-[14px] font-medium leading-[20px]'>Page</span>
                    <button
                            onClick={prevPageClick}
                            disabled={currentPage === 1}
                             className='text-[#344054] font-inter text-[14px] font-medium leading-[20px]'
                        >
                                    {currentPage}
                                </button>

                                <span className='text-[#344054] font-inter text-[14px] font-medium leading-[20px]'>of</span>
                                <button
                             className='text-[#344054] font-inter text-[14px] font-medium leading-[20px]'
                            onClick={nextPageClick}
                            disabled={currentPage === numOfButtons.length}
                        >
                                    {numOfPages}
                                </button>
                    </li>

                    <li className={`dt-item ${currentPage === numOfButtons.length ? 'disabled !cursor-not-allowed' : ''}`}>
                        <button
                            className={`dt-item border-[1px] ${currentPage === numOfButtons.length ? 'disabled !cursor-not-allowed !text-[#98A2B3] !border-[#EAECF0]' : '!text-[#344054] !border-[#D0D5DD]'} dt-item pagination-next-prev-btn flex items-center gap-[6px]`}
                            onClick={nextPageClick}
                            disabled={currentPage === numOfButtons.length}
                        >
                            <span className='sm:block hidden'>Next</span> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4.16663 9.99996H15.8333M15.8333 9.99996L10 4.16663M15.8333 9.99996L10 15.8333" stroke={currentPage === numOfButtons.length ? '#98A2B3' : '#344054'} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    )
}
