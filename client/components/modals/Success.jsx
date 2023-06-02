import React,{useState,useEffect} from 'react'
import Link from "next/link"
import {BsFillPatchCheckFill} from 'react-icons/bs'
import { useRouter } from 'next/router'

export default function Success({onClose}){
    const router=useRouter();
    
    const handleClose=()=>{
        onClose();
    }

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
                <p className='text-[1.5rem] font-bold font-mono text-green-500 flex items-center '><BsFillPatchCheckFill className='mr-1'/>Congratulations! 🎉</p>
                <div className='cursor-pointer z-50' onClick={handleClose}>
                    <svg className='fill-current text-black' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
                        <path d='M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5 16.5 18 18 16.5 10.5 9z'/>
                    </svg>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-[1.2rem] text-gray-900'>You have successfully reserved your ticket! 🎟️</p>
                <p className='text-[1.1rem] text-gray-700'>Thank you for choosing our service. </p>
                <p className='text-[1rem] text-gray-500'>Please check your email for a confirmation message containing all the important details about your ticket.</p>
            </div>
        </div>
    </div>
  )
}
