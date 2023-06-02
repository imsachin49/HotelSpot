import Link from "next/link"
import {FiLogIn} from 'react-icons/fi'
import { useState,useEffect } from "react"
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {AiOutlineUser} from 'react-icons/ai' 

const Navbar = ({isSmall,type}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router=useRouter();
  // console.log(router.asPath)
  const path=router.asPath;
  const user=useSelector(state=>state.user);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };  

  return (
    <div className='w-full flex items-center justify-center mb-1 sticky top-0 z-[999]'>
      <div className={`flex w-[1150px] flex-col relative bg-gray-100 ${isSmall ? 'px-0 py-0' : 'px-3 py-2 shadow-md'} rounded-b-lg relative`}>
        <div className="flex justify-between items-center">
          <Link className="text-[2rem] font-bold cursor-pointer px-3 font-mono" href='/'>Hotel<span className="text-rose-500">Spot</span></Link>
          {!isSmall &&<div className="flex items-center align-middle justify-center space-x-3">
            {type!=='login' && <Link href='/' className={`${path==='/' ? 'text-rose-500 text-[1.15rem]' : 'text-gray-600 text-[1rem]' } flex font-bold font-candara cursor-pointer px-2 py-[0.15rem] hover:text-rose-500 rounded-sm`}>Home</Link>}
            {type!=='login' && <Link href='/#featured' className={`${path==='/#featured' ? 'text-rose-500 text-[1.15rem]' : 'text-gray-600 text-[1rem]' } flex text-[1rem] font-bold font-candara text-gray-600 cursor-pointer px-2 py-[0.15rem] hover:text-rose-500 rounded-sm`}>Featured</Link>}
            {type!=='login' && <Link href='/#property' className={`${path==='/#property' ? 'text-rose-500 text-[1.15rem]' : 'text-gray-600 text-[1rem]' } flex text-[1rem] font-bold font-candara text-gray-600 cursor-pointer px-2 py-[0.15rem] hover:text-rose-500 rounded-sm`}>Property</Link>}
            {/* {type!=='login' && <Link href='#' className={`${path==='/#' ? 'text-rose-500 text-[1.15rem]' : 'text-gray-600 text-[1rem]' } flex text-[1rem] font-bold font-candara text-gray-600 cursor-pointer px-2 py-[0.15rem] hover:text-rose-500 rounded-sm`}>Chat</Link>} */}
            {!user?.user ? <Link href='/login' className={`${path==='/login' ? 'text-rose-500 text-[1.15rem]' : 'text-gray-600 text-[1rem]' } flex text-[1rem] font-bold font-candara text-white cursor-pointer px-2 py-[0.2rem] hover:bg-rose-400 border border-rose-200 shadow-lg rounded-[5px] bg-rose-500 items-center`}>Login<FiLogIn className="ml-[1px]"/></Link>
            :<Link href='#' className={`${path==='/login' ? 'text-rose-500 text-[1.15rem]' : 'text-gray-600 text-[1rem]' } flex text-[1rem] font-bold font-candara text-white cursor-pointer px-2 py-[0.2rem] hover:bg-blue-400 border border-blue-200 shadow-lg rounded-[5px] bg-blue-500 items-center`}><AiOutlineUser className="mr-[2px]"/>{user?.user?.username}</Link>}
          </div>}
            {isSmall && <div className='ml-3 cursor-pointer px-3' onClick={toggleSidebar}>
            <svg className='w-8 h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              {sidebarOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </div>}
        </div>
        {sidebarOpen && 
        <div className="flex flex-col items-end bg-white absolute top-12  right-0">
          <div className='flex flex-col bg-gray-100 h-[100vh] p-5 px-8 items-center shadow-sh1'>
            <Link href='/' className={`${path==='/' ? 'text-rose-500 text-[1.15rem]' : 'text-gray-600 text-[1rem]' } flex shadow-md font-extrabold font-candara cursor-pointer border-[1px] border-gray-900 rounded-md px-6 py-[0.2rem] my-1 `}>Home</Link>
            <Link href='/#featured' className={`${path==='/#featured' ? 'text-rose-500 text-[1.15rem]' : 'text-gray-600 text-[1rem]' } flex shadow-md font-extrabold font-candara cursor-pointer border-[1px] border-gray-900 rounded-md px-6 py-[0.2rem] my-1`}>Featured</Link>
            <Link href='#' className={`${path==='/#property' ? 'text-rose-500 text-[1.15rem]' : 'text-gray-600 text-[1rem]' } flex shadow-md font-extrabold font-candara cursor-pointer border-[1px] border-gray-900 rounded-md px-6 py-[0.2rem] my-1`}>Property</Link>
            <Link href='/#property' className={`${path==='/#' ? 'text-rose-500 text-[1.15rem]' : 'text-gray-600 text-[1rem]' } flex shadow-md font-extrabold font-candara cursor-pointer border-[1px] border-gray-900 rounded-md px-6 py-[0.2rem] my-1`}>Chat</Link>
            {!user?.user ? <Link href='/login' className={`${path==='/login' ? 'text-rose-500 text-[1.15rem]' : 'text-gray-600 text-[1rem]' } flex text-[1rem] font-bold font-candara text-white cursor-pointer px-2 py-[0.2rem] hover:bg-rose-400 border border-rose-200 shadow-lg rounded-[5px] bg-rose-500 items-center`}>Login<FiLogIn className="ml-[1px]"/></Link>
            :<Link href='#' className={`${path==='/login' ? 'text-rose-500 text-[1.15rem]' : 'text-gray-600 text-[1rem]' } flex text-[1rem] font-bold font-candara text-white cursor-pointer px-2 py-[0.2rem] hover:bg-blue-400 border border-blue-200 shadow-lg rounded-[5px] bg-blue-500 items-center`}><AiOutlineUser className="mr-[2px]"/>{user?.user?.username}</Link>}          </div>
        </div>}
      </div>
    </div>
  )
}

export default Navbar
