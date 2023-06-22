import React,{useState,useEffect} from 'react'
import Link from "next/link"
import {FiLogIn} from 'react-icons/fi'
import {BiArrowBack} from 'react-icons/bi'

export default function DiscountModal({onClose}){

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
                <p className='text-[1.5rem] font-bold font-candara'>Do you have Coupon Codes?</p>
                <div className='cursor-pointer z-50' onClick={onClose}>
                    <svg className='fill-current text-black' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
                        <path d='M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5 16.5 18 18 16.5 10.5 9z'/>
                    </svg>
                </div>
            </div>
            <p className='text-[.9rem] text-gray-700 pb-2 font-candara'>
                🎁 Get Discount upto 30% on your booking if you got a coupon !!
            </p>
            <div className='flex items-end p-4 px-0 mt-0 justify-end space-x-2'>
                <input max={10} type="text" placeholder="Enter Coupon Code" className="border font-mono border-gray-300 rounded-sm p-2 w-full focus:border-blue-300 outline-none"/>
                <button className='bg-rose-500 font-mono w-[120px] text-white shadow-lg p-2 rounded-md hover:bg-rose-400'>Apply</button>
            </div>
        </div>
    </div>
  )
}
