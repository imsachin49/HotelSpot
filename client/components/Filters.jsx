import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useState,useEffect } from "react";
import {useRouter} from "next/router";
import useFetch from "@/hooks/usefetch";

export default function Filters({onFiltersChange}){
    const router = useRouter();
    const [destination, setDestination] = useState(router?.query?.destination);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(router.query.options ? JSON.parse(router.query.options) : { adult: 1, children: 0, room: 1 });
    const [date, setDate] = useState(router?.query?.date ? JSON.parse(router?.query?.date) : [{ startDate: new Date(), endDate: new Date(), key: "selection" }]);
    const [price, setPrice] = useState({ min: 0, max: 999 });
    console.log(router.query.destination)

    const handlePrice = (e) => {
        setPrice({ ...price, [e.target.name]: e.target.value });
    }

    const handleOptions = (e) => {
        setOptions({ ...options, [e.target.name]: e.target.value});
    }

    // useEffect(()=>{
    //     onFiltersChange(destination, price, options, date);
    // },[destination,price,options,date])

    const handleSearch = () => {
        onFiltersChange(destination, price, options, date);
    }

    // i wanted to encountrer onFiltersChange when visit the page or change the state variables
    // useEffect(()=>{
    //     onFiltersChange(destination, price, options, date);
    // },[destination,price,options,date])

    onFiltersChange(destination, price, options, date);

    return(
        <div className="h-fit pb-3 my-0 border bg-[#003b95] rounded-lg shadow-sh1">
            <h1 className="text-[1.9rem] font-bold ml-1 font-mono text-white ">Search</h1><hr className="border border-white"/>
            <div className="flex flex-col justify-center items-start ml-2">
                <label className="text-[1rem] font-semibold mt-2 font-mono text-white">Destination</label>
                <input type="text" className="w-[90%] h-10 my-0 border border-gray-500 rounded-[4px] pl-2 outline-none shadow-md placeholder:text-gray-700" placeholder={destination} value={destination} onChange={e=>setDestination(e.target.value)} />
            </div>

            <div className="flex flex-col justify-center items-start ml-2">
                    <label className="text-[1rem] font-semibold mt-2 font-mono text-white">Check-in Date</label>
                    <span onClick={()=>setOpenDate(!openDate)} className='font-bold cursor-pointer bg-white border border-white p-2 w-[90%] rounded-[4px] pl-2 shadow-md'>
                        {`23/05/2023 to 30/05/2023`}
                        {/* {`${format(date[0]?.startDate,"MM/dd/yyyy")} to ${format(date[0]?.endDate, "MM/dd/yyyy")}`} */}
                    </span>
                {/* {openDate && (<DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date} className="text-lg shadow-lg text-red-700 -ml-3 font-mono mt-1"/>)} */}
            </div>
            <div className="flex flex-col justify-center items-center ml-2 space-y-[3px]">
                <label className="text-[1.1rem] font-semibold mt-1 font-mono text-white w-full">Options</label>
                <div className="flex flex-row justify-between items-center w-[90%]">
                    <span className="text-[.9rem] mt-2 font-mono font-bold text-white flex">Min Price<span className="text-[.8rem] md:block xs:hidden ml-1">(per night)</span></span>
                    <input type="text" className="md:w-[32%] xs:w-[45%] h-7 my-0 border border-gray-500 rounded-[4px] pl-2 outline-none shadow-md" name='min' value={price.min} onChange={handlePrice} placeholder="Amount"/> 
                </div>
                <div className="flex flex-row justify-between items-center w-[90%]">
                    <span className="text-[.9rem] mt-2 font-mono font-bold text-white flex">Min Price<span className="text-[.8rem] md:block xs:hidden ml-1">(per night)</span></span>
                    <input type="text" className="md:w-[32%] xs:w-[45%] h-7 my-0 border border-gray-500 rounded-[4px] pl-2 outline-none shadow-md" name='max' value={price.max} onChange={handlePrice} placeholder="Amount"/> 
                </div>
                <div className="flex flex-row justify-between items-center w-[90%]">
                    <span className="text-[.9rem] mt-1 font-mono font-bold text-white">Adult</span>
                    <input type="text" className="md:w-[27%] xs:w-[40%] h-7 my-0 border border-gray-500 rounded-[4px] pl-2 outline-none shadow-md text-lg" name="adult" value={options.adult} onChange={handleOptions} placeholder="City name"/> 
                </div>
                <div className="flex flex-row justify-between items-center w-[90%]">
                    <span className="text-[.9rem] mt-2 font-mono font-bold text-white">Children</span>
                    <input type="text" className="md:w-[27%] xs:w-[40%] h-7 my-0 border border-gray-500 rounded-[4px] pl-2 outline-none shadow-md text-lg" name='children' value={options.children} onChange={handleOptions} placeholder="City name"/> 
                </div>
                <div className="flex flex-row justify-between items-center w-[90%]">
                    <span className="text-[.9rem] mt-2 font-mono font-bold text-white">Room</span>
                    <input type="text" className="md:w-[27%] xs:w-[40%] h-7 my-0 border border-gray-500 rounded-[4px] pl-2 outline-none shadow-md text-lg" name='room' value={options.room} onChange={handleOptions} placeholder="City name"/> 
                </div>
            </div>
            <div className="flex flex-row justify-center items-center w-full mt-4">
                <button onClick={handleSearch} className="w-[90%] my-0 border border-rose-400 rounded-[4px] pl-2 outline-none shadow-md bg-rose-500 hover:bg-rose-400 font-mono text-[1.3rem] text-white">Search</button>
            </div>
        </div>
    )
}
