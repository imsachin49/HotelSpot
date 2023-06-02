import React, { useState, useEffect, useRef } from 'react';
import { PropertTypes,Featured_Properties } from './dummyData';
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

SwiperCore.use([Navigation]);

export default function Slider({array,title,body}) {
    const [slidesPerView, setSlidesPerView] = useState(4);
    const swiperRef = useRef(null);
    console.log(array)
  
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
        <div className="flex vlg:w-[1060px] xs:w-full p-2 flex-col items-center justify-center">
            <h1 className="text-[1.6rem] p-3 pl-0 font-extrabold text-start text-[#1a1a1a] w-full">{title}</h1>
            <div className="relative w-full">
            {!hidePrevButton && (
                <button
                onClick={handlePrev}
                style={{ position: 'absolute', top: '25%', left: '-11px', zIndex: '5', padding: '5px', cursor: 'pointer', background: 'none', border: 'none' }}
                >
                <BsFillArrowLeftCircleFill size={26} color="red" />
                </button>
            )}
            <Swiper className="flex flex-wrap w-full rounded-md overflow-hidden items-center justify-center"
                spaceBetween={20}
                slidesPerView={slidesPerView}
                navigation={{
                prevEl: '.prevButton',
                nextEl: '.nextButton',
                }}
                ref={swiperRef}
            >
                {array.map((item,index) => {
                  {/* console.log(item); */}
                return (
                    <SwiperSlide key={index} className="flex flex-col items-center justify-center">
                    <Image
                        height={210}
                        width={250}
                        src={title!=='Homes guests love' ?  PropertTypes[index].image : Featured_Properties[index]?.image}
                        alt={"noimg"}
                        className="w-full vsm:h-[210px] xs:h-[145px] cursor-pointer rounded-md"
                    />
                    {body( {item} )} 
                    {/* Call the body function and pass the item */}
                    </SwiperSlide>
                );
                })}
            </Swiper>
            {!hideNextButton && (
                <button
                onClick={handleNext}
                style={{ position: 'absolute', top: '25%', right: '-10px', zIndex: '5', padding: '5px', cursor: 'pointer', background: 'none', border: 'none' }}
                >
                <BsFillArrowRightCircleFill size={26} className="" color="red" />
                </button>
            )}
            </div>
        </div>
    )
}
