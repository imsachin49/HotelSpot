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
import useFetch from "@/hooks/usefetch";

SwiperCore.use([Navigation]);

export default function FeaturedSlider() {
    const [slidesPerView, setSlidesPerView] = useState(4);
    const swiperRef = useRef(null);
    const {data,loading,error,reFetch}=useFetch('https://hotelspot-api.vercel.app/api/hotels/countByCity?cities=new york,delhi,london,Singapore,Paris,Tokyo')
  
    const handleResize = () => {
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
      if(screenWidth >= 1024) {
        setSlidesPerView(4);
      }else if (screenWidth >= 630) {
        setSlidesPerView(3);
      }else if(screenWidth >= 300) {
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
        <div className="flex vlg:w-[1060px] xs:w-full p-2 flex-col items-center justify-center md:hidden xs:block">
            <div className="p-3 pl-0 text-start ml-1">
                <h1 className="text-[1.6rem] font-extrabold text-[#1a1a1a">Trending destinations</h1> 
                <p className="text-[1.1rem] text-gray-500">Travelers searching for India also booked these</p>
            </div>            
            <div className="relative w-full">
            {!hidePrevButton && (
                <button
                onClick={handlePrev}
                style={{ position: 'absolute', top: '40%', left: '-11px', zIndex: '5', padding: '5px', cursor: 'pointer', background: 'none', border: 'none' }}
                >
                <BsFillArrowLeftCircleFill size={26} color="red" />
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
                {data?.list?.map((item,index)=>{
                return (
                    <SwiperSlide key={index} className="flex flex-col relative items-center justify-center">
                        <Image
                            height={210}
                            width={250}
                            src={FeaturedHotels[index]?.image} alt={"noImg"}
                            className="w-full vsm:h-[210px] xs:h-[165px] cursor-pointer rounded-md"
                        />
                        <p className='text-[2rem] font-extrabold absolute top-0 text-start text-white m-2 mt-0 drop-shadow-lg'>{FeaturedHotels[index]?.location}</p>
                        <div className="flex flex-col w-full p-1 absolute -bottom-2  m-1 bg-none items-center">
                          <p className="text-[1rem] text-gray-700 vsm:font-bold sm:font-mono xs:font-candara w-fit bg-opacity-50 shadow-sm bg-white border px-2 backdrop-blur-lg rounded-md border-gray-400 border-opacity-70">{item} Properties</p>
                        </div>
                    </SwiperSlide>
                );
                })}
            </Swiper>
            {!hideNextButton && (
                <button
                onClick={handleNext}
                style={{ position: 'absolute', top: '40%', right: '-10px', zIndex: '5', padding: '5px', cursor: 'pointer', background: 'none', border: 'none' }}
                >
                <BsFillArrowRightCircleFill size={26} className="" color="red" />
                </button>
            )}
            </div>
        </div>
    )
}
