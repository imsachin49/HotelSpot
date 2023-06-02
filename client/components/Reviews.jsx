import React, { useState, useEffect, useRef } from 'react';
import { FeaturedHotels } from './dummyData';
import { FaChevronCircleRight } from 'react-icons/fa';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Navigation } from 'swiper';
import Image from "next/image";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {FcBusinessman} from 'react-icons/fc';
import {MdRateReview} from 'react-icons/md';
import AddReview from './modals/AddReview';

import Slider from './Slider';

SwiperCore.use([Navigation]);

export default function Reviews() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const swiperRef = useRef(null);

  const handleResize = () => {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    if(screenWidth >= 1024) {
      setSlidesPerView(3);
    }else if (screenWidth >= 630) {
      setSlidesPerView(2);
    }else if(screenWidth >= 370) {
      setSlidesPerView(2);
    }else {
      setSlidesPerView(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [hideNextButton, setHideNextButton] = useState();
  const [hidePrevButton, setHidePrevButton] = useState(true);
  const [openAddReviewModal,setOpenReviewModal]=useState(false);


  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      swiper.on('slideChange', () => {
        if (swiper.isBeginning) {
          setHidePrevButton(true);
        } else {
          setHidePrevButton(false);
        }
      });
      swiper.on('slideChange', () => {
        if (swiper.isEnd) {
          setHideNextButton(true);
        } else {
          setHideNextButton(false);
        }
      });
    }
  }, [swiperRef.current]);

    return(
        <div className="w-full my-20 flex items-center justify-center -mt-10 ">
          <div className="flex vlg:w-[1060px] xs:w-full p-2 flex-col items-center justify-center">
            <div className="p-3 pl-0 text-start ml-1 w-full flex items-center justify-between">
                <h1 className="vsm:text-[1.6rem] xs:text-[1.1rem] font-extrabold text-[#1a1a1a] w-full text-start font-mono">Reviews(10)</h1> 
                <button className='flex items-center space-x-1 mt-1 w-fit border border-gray-400 hover:border-blue-500 px-2 border-md rounded-md hover:bg-blue-200' onClick={()=>setOpenReviewModal(true)}>
                  <MdRateReview size={26} className='font-bold text-[2rem] text-gray-700' />
                  <h1 className="vsm:text-[1.1rem] xs:text-[.92rem] font-extrabold text-gray-600 w-full text-start font-mono">Add</h1> 
                </button>
            </div>            
            <div className="relative w-full">
            {!hidePrevButton && (
                <button
                onClick={handlePrev}
                style={{ position: 'absolute', top: '40%', left: '-21px', zIndex: '5', padding: '5px', cursor: 'pointer', background: 'none', border: 'none' }}
                >
                <BsFillArrowLeftCircleFill size={26} color="black" />
                </button>
            )}
            <Swiper className="flex flex-wrap w-full rounded-md overflow-hidden items-center justify-center "
                spaceBetween={20}
                slidesPerView={slidesPerView}
                navigation={{
                prevEl: '.prevButton',
                nextEl: '.nextButton',
                }}
                ref={swiperRef}
            >
                {[1,2,3,4,5,6,7,8,9].map((item) => {
                return (
                    <SwiperSlide key={item.id} className="flex flex-col relative items-center justify-center w-[230px] h-[100%] border border-gray-300 shadow-lg p-5 pt-1 vsm:px-3 xs:px-1 rounded-lg">
                      {/* top name profile */}
                      <div className="flex items-center vsm:space-x-2 xs:space-x-1">
                        <Image height={37} width={37} className='rounded-full xs:ml-0 vsm:ml-1 shadow-md border border-gray-300' src='https://lh4.googleusercontent.com/-m1CPKSC6FZk/AAAAAAAAAAI/AAAAAAAAAF0/D5GjiKP6Fbk/photo.jpg?sz=50' alt='noImage' />
                        <div className='flexitems-center justify-center space-x-0'>
                          <h1 className="vsm:text-[1.1rem] xs:text-[0.9rem] font-mono text-[#1a1a1a]">Sachin Kumar</h1>
                          <p className="text-[0.8rem] text-gray-500 -mt-1 pl-1">New Delhi, India</p>
                        </div>
                      </div>
                      {/* comment */}
                      <div className="flex flex-col items-center justify-center w-full h-full mt-2">
                        <p className="vs:text-[0.9rem] xs:text-[0.74rem] text-gray-700">“The hotel is an excellent hotel in a convenient location, clean rooms and a good dining room with reasonable food - even good compared to other places I have been in India. What is special about this hotel is that relative to the price you get.."</p>
                      </div>
                    </SwiperSlide>
                );
                })}
            </Swiper>
            {!hideNextButton && (
                <button
                onClick={handleNext}
                style={{ position: 'absolute', top: '40%', right: '-18px', zIndex: '5', padding: '5px', cursor: 'pointer', background: 'none', border: 'none' }}
                >
                <BsFillArrowRightCircleFill size={26} className="" color="black" />
                </button>
            )}
            </div>
        </div>
        {openAddReviewModal && <AddReview onClose={()=>setOpenReviewModal(false)} />}
        </div>
    )
}
