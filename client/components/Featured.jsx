import { FeaturedHotels } from "./dummyData"
import React, { useState,useEffect, useRef } from 'react';
import Image from "next/image"
import FeaturedSlider from "./Featuredslider"
import useFetch from "@/hooks/usefetch";
import { motion } from 'framer-motion';

export default function Featured({isSmall}){  

  const {data,loading,error,reFetch}=useFetch('https://hotelspot-api.vercel.app/api/hotels/countByCity?cities=new york,delhi,london,Singapore,Paris,Tokyo')

  return(
    <div className="w-full my-20 flex items-center justify-center z-10">
      <div className="flex w-[1090px] flex-col md:block xs:hidden">
        <div className="p-3 pl-0 text-start ml-5">
          <h1 className="text-[1.6rem] font-extrabold text-[#1a1a1a">Trending destinations</h1> 
          <p className="text-[1.1rem] text-gray-500">Travelers searching for India also booked these</p>
        </div>
        <motion.div 
        className={`w-full p-5 gap-4 rounded-md overflow-hidden items-center justify-center grid md:grid-cols-3 vsm:grid-cols-2 xs:grid-cols-1`}>
        {data?.list &&
          data?.list?.map((item,index)=>{
            return(
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, 
                  delay: index * 0.17,                  
                 }}
                key={index} className="w-[100%] flex flex-col relative items-center justify-center">
                  <Image height={230} width={300} src={FeaturedHotels[index]?.image} alt={"noImg"} className={`w-[100%] h-[230px] cursor-pointer rounded-md opacity-80`}/>
                  <p className="text-[1.35rem] font-candara">{FeaturedHotels[index]?.name}</p>
                  <p className='text-[2rem] font-extrabold absolute top-0 text-start text-white m-2 mt-0 drop-shadow-lg'>{FeaturedHotels[index]?.location}</p>
                  <div className="flex flex-col w-full p-1 absolute -bottom-5 m-1 bg-none items-center">
                    <p className="text-[1rem] text-gray-700 vsm:font-bold font-mono w-fit bg-opacity-50 shadow-sm bg-white border px-2 backdrop-blur-lg rounded-md border-gray-400 border-opacity-70">{item} Properties</p>
                  </div>
                </motion.div>
                )
              })
            }
          </motion.div> 
      </div>
        <FeaturedSlider />
    </div>
  )
}
