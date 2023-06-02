import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import { Photos } from "@/components/dummyData";
import {MdLocationOn} from 'react-icons/md'
import { useState,useEffect } from "react";
import {BsArrowRightCircleFill} from 'react-icons/bs'
import {BsArrowLeftCircleFill} from 'react-icons/bs'
import {RiDeleteBack2Line} from 'react-icons/ri'
import {GiCrossMark} from 'react-icons/gi'
import Image from "next/image"
import Reviews from "@/components/Reviews";
import { useRouter } from "next/router";
import useFetch from "@/hooks/usefetch";
import { useSelector } from "react-redux";
import Reserve from "@/components/modals/Reserve";
import PopupLogin from '../../components/modals/PopupLogin'
import Success from "@/components/modals/Success";
import AddReview from "@/components/modals/AddReview";

export default function Hotel(){
    const [open, setOpen] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [slideNumber, setSlideNumber] = useState(0);
    const [isSmall, setIsSmall] = useState(false)
    const router=useRouter();
    const {id}=router.query;
    const search=useSelector(state=>state?.search)
    const dates=useSelector(state=>state.search.dates)
    const options=useSelector(state=>state.search.options);
    const [openReserveModal,setReserveModal]=useState(false);
    const [openPopupLogin,setPopupLogin]=useState(false);
    const user=useSelector(state=>state.user);
    const userData=user?.token;
    // console.log(userData)

    const handleClose=()=>{
        setReserveModal(false);
    }
    
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
    }
    
    const startDate = new Date(dates[0]?.startDate);
    const endDate = new Date(dates[0]?.endDate);
    const days = dayDifference(startDate, endDate);
    
    const handleOpen = (id) => {
        setOpen(true)
        setSlideNumber(id)
        const selectedPhoto = Photos?.find(p=>p.id===id)
        setPhoto(selectedPhoto?.src)
    }

    const handleMove = (direction) => {
        let newSlideNumber;
        if (direction === "l") {
          newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
          newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber)
    };


    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const hanldeReserveModal=()=>{
        if(userData){
            setReserveModal(true);
            console.log("reserve modal open")
        }else{
            setPopupLogin(true);
            console.log("popup login open")
        }
    }

    const {data,loading,error}=useFetch(`https://hotelspot.vercel.app/api/hotels/find/${id}`)
    console.log(data)

    return(
        <>
            <Navbar isSmall={isSmall} />
            <div className={'flex w-[100%] items-center justify-center rounded-lg mb-8'}>
                <div className="w-[1150px] relative rounded-lg p-2 mt-2">
                    <div className="flex flex-wrap flex-col gap-2 w-full">
                        {/* to show slider */}
                        {open && 
                        <div className="sticky top-0 left-0 w-full md:h-[90vh] xs:h-[60vh] justify-center bg-neutral-500/70 z-[999] flex items-center">
                            <BsArrowLeftCircleFill color='red' size={40} className="cursor-pointer hover:text-blue-600" onClick={() => handleMove("l")}/>
                            <div className="w-[100%] md:h-[100%] xs:h-[70%] flex items-center justify-center relative">
                                <Image width={1070} height={700} className="w-[100%] md:h-[80vh] xs:h-[50vh] object-cover shadow-sm" src={Photos[slideNumber]?.src} alt="noImg" />
                                <RiDeleteBack2Line size={35} color='black' className="z-90 xs:-top-6 md:top-12 right-1 absolute cursor-pointer hover:text-blue-600" onClick={() => setOpen(false)} />
                            </div>
                            <BsArrowRightCircleFill color='red' size={40} className="cursor-pointer hover:text-blue-600" onClick={() => handleMove("r")}/>
                        </div>
                        }
                        {/* top section to show text and button */}
                        <div className="p-4 pb-1 flex justify-between items-start">
                            <div className="flex flex-col">
                                <h1 className="md:text-[2rem] xs:text-[1rem] font-extrabold font-mono">{data?.hotel?.name}</h1>
                                <div className="flex items-center">
                                   <MdLocationOn size={22} />
                                   <span className="md:text-[1.1rem] xs:text-[1rem] font-mono ">{data?.hotel?.address} | {data?.hotel?.city}</span> 
                                </div>
                                <span className="text-[#0071c2] md:text-[1.3rem] xs:text-[1rem] font-bold">Excellent location – <span className="font-mono">{data?.hotel?.distance}</span> from center</span>
                                <span className="text-[#008009] md:text-[1.15rem] xs:text-[0.95rem] font-bold">Book a stay over <span className="font-mono"> ${data?.hotel?.cheapestPrice} </span> at this property and get a free airport taxi</span>
                            </div>
                            <div className="shadow-lg md:block xs:hidden">
                                <button onClick={hanldeReserveModal} className="bg-[#0071c2] px-[20px] py-[10px]  hover:bg-blue-700 text-white font-bold rounded-md">
                                    Reserve or Book Now!
                                </button>
                            </div>
                        </div>
                        {/* middle section to show images */}
                        <div className="p-3 flex flex-wrap space-y-1 justify-between">
                            {
                                Photos.map((p,index)=>{
                                    return <div className="w-[33%]" key={index}>
                                        <Image width={1070} height={350} className="w-[100%] object-cover cursor-pointer rounded-sm" src={p.src} alt='noImg' onClick={()=>handleOpen(index)} />
                                    </div>
                                })
                            }
                            <div className="w-full xs:items-center xs:justify-center md:hidden xs:block">
                                <button onClick={hanldeReserveModal} className="bg-[#0071c2] px-[20px] py-[14px] hover:bg-blue-700 text-white font-bold rounded-md">
                                    Reserve or Book Now!
                                </button>
                            </div>
                        </div>
                        {/* bottom section to show description and button */}
                        <div className="p-4 xs:w-full">
                            <div className="grid md:grid-cols-9 xs:grid-rows-8 justify-between gap-[20px] mt-[20px] xs:w-full">
                                <div className="md:col-span-6 xs:row-span-5">
                                    <h1 className="text-[2rem] font-extrabold">{data?.hotel?.title}</h1>
                                    <p className="md:text-[1rem] mt-[10px]">
                                        {data?.hotel?.desc}
                                    </p>
                                </div>

                                <div className="md:col-span-3 xs:row-span-3 h-fit bg-[#ebf3ff] p-[20px] flex flex-col gap-[1px] shadow-sh1 rounded-md xs:w-[270px]">
                                    <h1 className='text-[1.3rem] text-black font-candara font-extrabold'>Perfect for a <span className="font-mono">{days}</span>-night stay!</h1>
                                    <span className="text-[.9rem]">
                                        Located in the real heart of City, this property has an
                                        excellent location score of 9.8!
                                    </span>
                                    <h2 className="font-bold font-mono">
                                        <b className="font-extrabold text-2xl font-mono">${days * data?.hotel?.cheapestPrice * options.room}</b> ({days} nights)
                                    </h2>
                                    <button className="bg-[#0071c2] px-[20px] py-[10px]  hover:bg-blue-700 text-white font-bold rounded-md" onClick={hanldeReserveModal} >Reserve or Book Now!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {openReserveModal && <Reserve onClose={handleClose} hotelId={data?.hotel?._id} />}
                {openPopupLogin && <PopupLogin onClose={()=>setPopupLogin(false)} />}

                </div>
            <Reviews />
            <Newsletter />
            <Footer />
        </>
    )
}
