import React,{useState,useEffect} from 'react'
import Link from "next/link"
import { useSelector } from 'react-redux'

export default function AddReview({onClose}){
    const user=useSelector(state=>state?.user.user)
    const userName=user?.username ? user?.username : 'Plz Loqin'
    const [review,setReview]=useState('')
    const Review_length=review.length;

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
            rounded shadow-sm py-8 pt-2
            text-left px-6
        '>
            <div className='flex justify-between items-center pb-3'>
                <p className='text-[1.5rem] font-bold font-candara'>Add Your Experience:</p>
                <div className='cursor-pointer z-50' onClick={onClose}>
                    <svg className='fill-current text-black' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
                        <path d='M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5 16.5 18 18 16.5 10.5 9z'/>
                    </svg>
                </div>
            </div>

            <div className='flex flex-col space-y-1 justify-between items-center pb-3'>
                <div className='w-full flex justify-between items-center rounded-md'>    
                    <div className='flex flex-col space-x-[3px] w-full'>
                        <div className='flex flex-col justify-center w-full p-1'>
                            <label className='font-mono text-gray-700 text-[1rem] w-full'>Your Name</label>
                            <input type='text' className='border border-gray-200 outline-none font-mono w-full px-2 py-2 text-gray-500' placeholder='UserName' value={userName} readOnly/>
                        </div>
                        <div className='flex flex-col justify-center w-full p-1 relative'>
                            <label className='font-mono text-gray-700 text-[1rem] w-full'>Add Your Review</label>
                            <textarea cols={10} rows={4} maxLength={180} type='text' className='border border-gray-400 outline-none font-mono w-full px-2 py-2 text-sm' placeholder='add upto 180 words..' onChange={(e)=>setReview(e.target.value)}/>
                            <span className='text-xs text-red-500 absolute bottom-2 right-3'>{Review_length}/180</span>
                        </div>
                    </div>
                </div>

                <div className='w-full p-2 px-1 pl-2 flex justify-between items-center rounded-md shadow-sm'>
                    <button onClick={onClose} className='w-full bg-rose-500 hover:bg-rose-400 text-white font-bold font-candara px-1 py-2 rounded-md'>Add Review</button>
                </div>
            </div>

        </div>
    </div>
  )
}