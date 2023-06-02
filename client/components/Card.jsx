import { useState } from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {RiLeafFill} from 'react-icons/ri'
import {AiFillStar} from 'react-icons/ai'
import {BiChevronRight} from 'react-icons/bi'
import {TbBeach} from 'react-icons/tb'
import {BiMap} from 'react-icons/bi'
import Link from 'next/link'
import Image from "next/image"
import {PhotosHotel} from './dummyData'

export default function Card({item,index}){
    const [isLiked,setIsLiked]=useState(false);
    const handleLike=()=>{
        setIsLiked(!isLiked)
    }
    console.log(item)
    let msg;
    if(item.rating>=4.5){
        msg='Exceptional'
    }else if(item.rating>=4 && item.rating<5){
        msg='Excellent'
    }else if(item.rating>=3 && item.rating<4){
        msg='Very Good'
    }else if(item.rating>=2 && item.rating<3){
        msg='Good'
    }else if(item.rating>=1 && item.rating<2){
        msg='Fair'
    }else{
        msg='Poor'
    }

    return(
        <div className="h-auto grid grid-cols-12 border border-gray-400 shadow-sm m-1 rounded-lg w-full">
            {/* left part image */}
            <div className="vsm:col-span-3 xs:col-span-4 flex items-start relative">
                <Image width={195} height={200} className="h-[200px] w-[190px] m-1 rounded-lg shadow-lg" src={PhotosHotel[index].image ? PhotosHotel[index].image :"https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm90JTIwYXZhaWxhYmxlJTIwdGV4dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" } alt="noImg" />
                {!isLiked ? <AiOutlineHeart className='absolute top-3 right-[10px] cursor-pointer text-gray-200' size={24} onClick={handleLike} /> :
                <AiFillHeart className='absolute top-3 right-[10px] cursor-pointer shadow-lg' size={24} color='red' onClick={handleLike} />}
            </div>
            {/* middle Part*/}
            <div className="vsm:col-span-6 xs:col-span-8 p-2 py-3 space-y-1">
                <h1 className='vsm:text-[1.3rem] font-extrabold text-blue-500 font-candara cursor-pointer hover:text-blue-400'>{item.title} |<span className='text-blue-800'>{item.city}</span> </h1>
                <div className='flex space-x-1 w-[100%] flex-wrap space-y-[2px]'>
                    <p className='border border-blue-300 p-[3px] rounded-md vsm:text-[.9rem] xs:text-[.75rem] cursor-pointer bg-blue-100 hover:text-blue-800 hover:border-blue-700 font-bold text-gray-700 flex items-center flex-wrap'><BiMap className='mr-1'/>Shop on map</p>
                    <p className='border border-blue-300 p-[1px] rounded-md vsm:text-[.8rem] xs:text-[.75rem] cursor-pointer hover:bg-blue-100 hover:text-blue-800 hover:border-blue-700'>Anjuna</p>
                    <p className='border border-blue-300 p-[1px] rounded-md vsm:text-[.8rem] xs:text-[.75rem] cursor-pointer hover:bg-blue-100 hover:text-blue-800 hover:border-blue-700'>Anjuma Beach</p>
                    <p className='border border-blue-300 p-[1px] rounded-md vsm:text-[.8rem] xs:text-[.75rem] cursor-pointer hover:bg-blue-100 hover:text-blue-800 hover:border-blue-700'>{item.distance} from center</p>
                    <p className='border border-blue-300 p-[1px] rounded-md vsm:text-[.8rem] xs:text-[.75rem] cursor-pointer hover:bg-blue-100 hover:text-blue-800 hover:border-blue-700 flex items-center flex-wrap'><TbBeach className='mr-1'/>Beach Nearby</p>
                    <p className='border border-blue-300 p-[1px] rounded-md vsm:text-[.9rem] xs:text-[.75rem] cursor-pointer hover:bg-blue-100 hover:text-blue-800 hover:border-blue-700 flex items-center flex-wrap'><RiLeafFill className='mr-1'/>Travel Sustainable Property</p>
                </div>
                <div className='flex space-x-1 vsm:space-y-1 xs:space-y-[1px] items-center'>
                    <div className='border-1 border-red-300 flex h-[100px] w-[1px] text-black mt-1 vsm:block xs:hidden'></div>
                    <div className='p-[1px] rounded-md text-[.84rem]'>
                        <p className='vsm:text-[.87rem] xs:text-[.78rem] text-gray-800 font-bold'>Supreior Queen room</p>
                        <p className='vsm:text-[.96rem] xs:text-[.78rem] text-green-800 font-bold'>Free Cancellation</p>
                        <p className='vsm:text-[.89rem] xs:text-[.78rem] text-red-600 font-bold'>Only 4 rooms left at this price</p>
                    </div>
                </div>
                {/* show here in case of small screen */}
                <div className="col-span-3 flex justify-end w-[100%] xs:block vsm:hidden pr-5 -ml-[50px]">
                    <div className='flex justify-between h-[100%] m-1 w-full items-end'>
                        <div className='flex w-fit items-end space-x-3 mt-6 mb-0 -pb-4'>
                            <p className='p-[1px] rounded-md text-[1.45rem] font-bold font-mono'>₹{item.cheapestPrice}</p>
                            <Link className='bg-[#006ce4] py-1 px-4 vsm:w-full xs:w-[100px] font-bold flex items-center justify-center font-mono shadow-lg mt-2 text-white rounded-md hover:bg-[#003b95]' href={`/hotels/${item._id}`}>See <span className='xs:hidden lg:block'>availability</span> <BiChevronRight className='mr-1 xs:hidden lg:block' size={32} /></Link>    
                        </div>
                    </div>
                </div>
            </div>
            {/* rightPart show in case of large screen here */}
            <div className="col-span-3 flex justify-end w-[100%] xs:hidden vsm:block pr-2">
                <div className='flex flex-col justify-between h-[100%] m-1 w-full items-end'>
                    <div className='flex'>
                        <div className='flex flex-col'>
                            <p className='p-[1px] rounded-md text-[.99rem] font-bold'>{msg}</p>
                            <p className='p-[1px] rounded-md text-[.89rem] -mt-2 xs:hidden lg:block'>25 reviews</p>
                        </div>
                        <p className='border border-blue-300 rounded-md text-[.96rem] cursor-pointer bg-[#003b95] text-white flex items-center py-1 px-2 rounded-l-none'>{item.rating}</p>
                    </div>
                    <div className='flex flex-col mb-2 w-full items-end'>
                        <p className='p-[1px] rounded-md text-[1.45rem] font-bold font-mono'>₹{item.cheapestPrice}</p>
                        <p className='p-[1px] rounded-md text-[.8rem] -mt-2 font-candara'>+ ₹315 taxes + charges</p>
                        <Link className='bg-[#006ce4] py-1 px-4 w-full font-bold flex items-center justify-center font-mono shadow-lg mt-2 text-white rounded-md hover:bg-[#003b95]' href={`/hotels/${item._id}`}>See <span className='xs:hidden lg:block'>&nbsp;Availability</span> <BiChevronRight className='mr-1 xs:hidden lg:block' size={32} /></Link>    
                    </div>
                </div>
            </div>
        </div>
    )
}
