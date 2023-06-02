import Navbar from "@/components/Navbar";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import {FcGoogle} from 'react-icons/fc'
import { FaGithub } from "react-icons/fa";
import {MdPhoneAndroid} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import Link from "next/link";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { setLogin } from "@/redux/userSlice";

export default function Login() {
    const router = useRouter();
    const [isSmall, setIsSmall] = useState(false)
    const [signInMethod, setSignInMethod] = useState('mail')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch();
    const [err,setErr]=useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsSmall(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            console.log(email,password);
            const res=await axios.post('https://hotelspot.vercel.app/api/auth/login',{
                email,password
            })
            dispatch(setLogin({
                user:res.data.user,
                token:res.data.token
            }))
            console.log(res.data);
            router.push('/');
        } catch (error) {
            console.log(error)
            setErr(true);
        }
    }

    console.log(isSmall)
    return (
    <>
        <Navbar isSmall={isSmall} type='login' />
        <div className={'flex w-[100%] items-center justify-center rounded-lg mb-8'}>
            <div className="w-[1150px] relative rounded-lg p-2 mt-2 flex-col items-center justify-center">
                <h1 className="text-xl font-mono font-bold text-center">Sign in or create an account</h1>
                
                <form className="flex flex-col items-center justify-center space-y-2 w-full mt-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col lg:w-[30vw] md:w-[40vw] sm:w-[50vw] xs:w-[90vw]">
                        <label className="text-md font-mono mb-1">Email Address</label>
                        <input onChange={e=>setEmail(e.target.value)} value={email} className="border border-gray-400 rounded-sm p-2 outline-none focus:border-blue-500" type="email" required placeholder="Youe Email" />
                    </div> 
                    <div className="flex flex-col lg:w-[30vw] md:w-[40vw] sm:w-[50vw] xs:w-[90vw]">
                        <label className="text-md font-mono mb-1">Password</label>
                        <input onChange={e=>setPassword(e.target.value)} value={password} className="border border-gray-400 rounded-sm p-2 outline-none focus:border-blue-500" type="password" required placeholder="Password" />
                    </div> 
                   <div className="flex flex-col lg:w-[30vw] md:w-[40vw] sm:w-[50vw] xs:w-[90vw]">
                        <button type='submit' className="font-bold border border-gray-400 rounded-md p-2 outline-none bg-[#006ce4] hover:bg-blue-600 text-white">Continue</button>
                   </div>
                </form>

                <div className="flex flex-col items-center justify-center space-y-2 w-full mt-5">
                    <div className="text-[1rem] font-candara -mt-1 flex flex-col lg:w-[30vw] md:w-[40vw] sm:w-[50vw] xs:w-[90vw] text-center">
                    <p>Don't have an account?<Link href='/register' className="text-rose-600">Register</Link></p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-2 w-full mt-5">
                    <div className="text-[1rem] font-candara -mt-1 flex flex-col lg:w-[30vw] md:w-[40vw] sm:w-[50vw] xs:w-[90vw] text-center">
                        or use one of these options
                    </div>
                    <div className="flex">
                        <div className="cursor-pointer border border-gray400 hover:border-blue-400 m-1 p-2">
                            <FaGithub className="text-2xl" size={50} />
                        </div>
                        <div className="cursor-pointer border border-gray400 hover:border-blue-400 m-1 p-2">
                            <FcGoogle className="text-2xl" size={50} />
                        </div>
                        // {
                        //     signInMethod==='mail' ? <div className="flex flex-col lg:w-[30vw] md:w-[40vw] sm:w-[50vw] xs:w-[90vw]">
                        //         <label className="text-md font-mono mb-1">Email Address</label>
                        //         <input onChange={e=>setEmail(e.target.value)} value={email} className="border border-gray-400 rounded-sm p-2 outline-none focus:border-blue-500" type="email" required placeholder="Youe Email" />
                        //  </div> :
                        //     <div className="flex flex-col lg:w-[30vw] md:w-[40vw] sm:w-[50vw] xs:w-[90vw]">
                        //         <label className="text-md font-mono mb-1">Phone Number</label>
                        //         <input onChange={e=>setPhone(e.target.value)} value={phone} className="border border-gray-400 rounded-sm p-2 outline-none focus:border-blue-500" type="tel" required placeholder="Your Phone number" minLength={10} maxLength={10} />
                        // </div>
                        // }
                        // {
                        //     signInMethod==='mail' ? <div className="cursor-pointer border border-gray400 hover:border-blue-400 m-1 p-2" onClick={()=>setSignInMethod('phone')}>
                        //     <MdPhoneAndroid className="text-2xl" size={50} />
                        // </div> :
                        // <div className="cursor-pointer border border-gray400 hover:border-blue-400 m-1 p-2" onClick={()=>setSignInMethod('mail')}>
                        //     <MdEmail className="text-2xl" size={50} />
                        // </div>
                        }
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-2 w-full mt-5">
                    <div className="text-[.85rem] flex-col font-candara mb-1 flex lg:w-[30vw] md:w-[40vw] sm:w-[50vw] xs:w-[90vw] text-center border-[1px] py-4 border-y-gray-300 border-x-white">
                        By signing in or creating an account, you agree with our Terms & Conditions and Privacy Statement
                    </div>
                    <div className="text-[.9rem] font-candara mb-1 flex flex-col lg:w-[30vw] md:w-[40vw] sm:w-[50vw] xs:w-[90vw] text-center">
                        All rights reserved.<br/>Copyright (2006-2023) – HotelSpot™
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
