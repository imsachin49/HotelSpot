import React,{useState,useEffect} from 'react'
import Link from "next/link"
import {FiLogIn} from 'react-icons/fi'
import {BiArrowBack} from 'react-icons/bi'


export default function PopupLogin({onClose,hotelId}){

    return(
        <div className='
        fixed
        top-0
        left-0
        w-full
        h-full
        mt-0
        flex
        items-center
        justify-center
        bg-neutral-400/70
        bg-opacity-50
        z-50
        py-5
        scrollbar-hide
        overflow-y-hidden
    '>
        <div className='
            bg-white
            w-11/12
            md:max-w-md
            mx-auto
            rounded shadow-lg py-8 pt-2
            text-left px-6
        '>
            <div className='flex justify-between items-center pb-3'>
                <p className='text-[2rem] font-bold font-candara'>Login/Signup to Continue</p>
                <div className='cursor-pointer z-50' onClick={onClose}>
                    <svg className='fill-current text-black' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
                        <path d='M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5 16.5 18 18 16.5 10.5 9z'/>
                    </svg>
                </div>
            </div>
            <p className='text-[1.3rem] text-gray-700 pb-3'>Hey there! Login or sign up to access exclusive features</p>
            <div className='flex justify-between p-4 px-0 mt-0'>
                <div className={`flex text-[1rem] font-bold font-candara text-white cursor-pointer px-2 py-[0.2rem] hover:bg-blue-400 border border-blue-200 shadow-lg rounded-[5px] bg-blue-500 items-center`}><BiArrowBack className="mr-[1px]"/>Cancel</div>
                <Link href='/login' className={`flex text-[1rem] font-bold font-candara text-white cursor-pointer px-2 py-[0.2rem] hover:bg-rose-400 border border-rose-200 shadow-lg rounded-[5px] bg-rose-500 items-center`}>Login<FiLogIn className="ml-[1px]"/></Link>
            </div>
        </div>
    </div>
  )
}
