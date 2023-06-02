import React, { useState, useEffect, useRef } from 'react';
import { PropertTypes } from './dummyData';
import Slider from './Slider';
import useFetch from '@/hooks/usefetch';

const bodyContent=({item})=>{
  console.log(item)
  return (
    <div>
      <p className="text-[1.35rem] font-mono">{item?.type}</p>
      <p className="text-[1rem] font-mono text-gray-600 -mt-2 p-0 pl-[1px]">{item?.count} properties</p>
    </div>
)}

export default function Property() {
  const {data,loading,error,reFetch}=useFetch('https://hotelspot.vercel.app/api/hotels/countByType')
  console.log(data)
  
  return (
    <div className="w-full my-20 flex items-center justify-center -mt-10" id='property'>
      <Slider array={data} title='Browse by property type' body={bodyContent} />
    </div>
  );
}
