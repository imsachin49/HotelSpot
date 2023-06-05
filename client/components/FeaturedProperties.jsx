import React, { useState, useEffect, useRef } from 'react';
import {Featured_Properties} from './dummyData'
import Slider from './Slider';
import {BsDot} from 'react-icons/bs';
import {HiStar} from 'react-icons/hi';
import useFetch from '@/hooks/usefetch';

const bodyContent=({item})=>{
  // console.log(item)
  return (
    <div>
      <p className='text-[1rem] font-bold text-black mt-0 p-0'>{item?.name}</p>
      <p className="vsm:text-[.9rem] xs:text-[.8rem] font-candara text-gray-600">{item?.address} | {item.city}</p>
      <p className='vsm:text-[.9rem] xs:text-[.8rem] text-gray-600 font-candara'>Starting from <span className='font-mono text-black vsm:text-[.9rem] xs:text-[.8rem] font-bold pl-1'>₹{item?.cheapestPrice}</span></p>
      <div className='text-[1.1rem] text-gray-500 flex items-center space-x-[1px] ml-[3px] mb-[2px]'>
        <span className='text-[0.875rem] p-[3px] rounded- bg-[#003b95] text-white font-sans flex items-center '> {item?.rating} <HiStar className='vsm:block xs:hidden' /> </span>
        <BsDot className='text-[0.825rem] font-candara text-gray-400' />                                            
        <span className='text-[0.8rem] font-candara text-gray-500'> {item?.distance} from city </span>
        <BsDot className='text-[0.825rem] font-candara text-gray-400 vsm:block xs:hidden' />
        <span className='text-[0.825rem] font-candara text-gray-500 vsm:block xs:hidden'> {item?.reviews} reviews</span>
    </div>
    </div>
  )
}

export default function FeaturedProperties(){
  const {data,loading,error,reFetch}=useFetch('https://hotelspot.vercel.app/api/hotels/getHotels?featured=true')
  // console.log(data)
    return (
      <div className="w-full my-20 flex items-center justify-center -mt-10" id='featured'>
        <Slider array={data} title='Homes guests love' body={bodyContent} />
      </div>  
    )
}
