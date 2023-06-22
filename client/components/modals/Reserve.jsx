import React,{useState,useEffect} from 'react'
import Link from "next/link"
import useFetch from '@/hooks/usefetch'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useRouter } from 'next/router'
import Success from './Success'

export default function Reserve({onClose,hotelId}){
    const {data,loading,error}=useFetch(`https://hotelspot-api.vercel.app/api/hotels/room/${hotelId}`)
    console.log(data);  
    const [selectedRooms,setSelectedRooms]=useState([]);  
    const dates=useSelector(state=>state.search.dates)
    const router=useRouter();
    const [openSuccesModal,setSuccessModal]=useState(false);

    const getDatesInRange=(startDate,endDate)=>{
        const start=new Date(startDate);
        const end=new Date(endDate);
        const date=new Date(start.getTime());
        const dates=[];
        while(date<=end){
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate()+1);
        }
        return dates;
    }

    const alldates=getDatesInRange(new Date(dates[0]?.startDate),new Date(dates[0]?.endDate));

    const isAvailable=(roomNumber)=>{
        const isFound=roomNumber.unavailableDates.some(date=>alldates.includes(new Date(date).getTime()));
        return !isFound; //not available
    }

    const handleSelect=(e)=>{
        const checked=e.target.checked;
        const value=e.target.value;
        setSelectedRooms(
            checked ? [...selectedRooms,value] : selectedRooms.filter(item=>item!==value)
        )
    }

    console.log(selectedRooms)

    const hanldeClick=async()=>{
        try {
            await Promise.all(selectedRooms.map(async roomId=>{
                const res=await axios.patch(`https://hotelspot-api.vercel.app/api/rooms/availablity/${roomId}`,{dates:alldates})
                console.log(res.data)
                return res.data;
            }))
            onClose();
            setSuccessModal(true);
            alert('Your reservation has been made successfully!,update more')
            // return <Success />
            // router.push('/profile')
            router.push('/');
        } catch (error) {
            console.log(error)
        }
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
                <p className='text-[1.6rem] font-bold font-candara'>Select your rooms:</p>
                <div className='cursor-pointer z-50' onClick={onClose}>
                    <svg className='fill-current text-black' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
                        <path d='M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5 16.5 18 18 16.5 10.5 9z'/>
                    </svg>
                </div>
            </div>
            <div className='flex flex-col space-y-1 justify-between items-center pb-3'>
                {data?.rooms?.map(room=>{return <div key={room._id} className='w-full border p-2 flex justify-between items-center rounded-md shadow-sm'>
                    <div className='flex flex-col'>
                        <p className='text-[1.2rem] font-bold font-candara'>{room.title}</p>
                        <p className='text-[.9rem] text-gray-600 font-sans '>{room.desc}</p>
                        <p className='text-[.9rem] text-gray-700 font-candara '>Max People :<span className='font-mono text-[1rem]'> {room?.maxPeople} </span> |{"  "} <b className='text-[1rem] text-gray-800 font-mono'> At ${room.price}</b></p>
                    </div>
                    <div className='flex space-x-[3px]'>
                        {room?.roomNumbers?.map((r)=>{return <div key={r._id} className='flex flex-col justify-center items-center'>
                            <label className='font-mono text-gray-700 text-[0.7rem]'>{r.number}</label>
                            <input disabled={!isAvailable(r)} type='checkbox' value={r._id} className='w-5 h-5' onChange={handleSelect}/>
                        </div>})}
                    </div>
                </div>})}
                <div className='w-full p-2 px-0 flex justify-between items-center rounded-md shadow-sm'>
                    <button onClick={hanldeClick} className='w-full bg-rose-500 hover:bg-rose-400 text-white font-bold font-candara px-4 py-2 rounded-md'>Reserve</button>
                </div>
            </div>
        </div>
        {openSuccesModal && <Success onClose={()=>setSuccessModal(false)} />}
    </div>
  )
}
