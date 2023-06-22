import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";

export default function Profile(){
    return(
        <>
            <Navbar />
            <div className={'flex w-[100%] items-center justify-center rounded-lg mb-8'}>
                <div className="w-[1150px] relative rounded-lg p-2 mt-2 gap-1 justify-center flex flex-wrap">
                    
                    <div className="flex p-5 py-2 border border-gray-200 w-fit justify-center items-center shadow-sm rounded-md">
                        <Image className="rounded-full shadow-lg" height={120} width={120} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="noImg" />
                        <div className="flex flex-col ml-5 justify-between items-stretch relative">
                            <p className="text-lg font-bold font-mono py-1">Personal Information</p>
                            <div className="flex flex-col px-4">
                                <p className="text-md font-mono p-0 py-[0px]">Sachin Kumar</p>
                                <p className="text-md font-mono p-0 py-[0px]">kumaraditya7125@gmail.com</p>
                                <p className="text-md font-mono p-0 py-[0px]">+91 7352738722</p>
                                <p className="text-md font-mono p-0 py-[0px]">Station Road, Siwan, Bihar</p>
                            </div>
                            <button className="absolute top-2 -right-4 rounded-md m-0 px-2 mx-0 text-blue-600 hover:text-blue-700 hover:bg-gray-100 hover:border hover:border-gray-100">Edit</button>
                        </div>
                    </div>

                    <div className="flex p-5 py-2 border border-gray-200 w-fit justify-center items-center shadow-sm rounded-md">
                        <Image className="rounded-full shadow-lg" height={120} width={120} src="https://www.shutterstock.com/image-vector/final-sale-yellow-banner-offer-600w-1916978303.jpg" alt="noImg" />
                        <div className="flex flex-col ml-5 justify-between items-stretch relative">
                            <p className="text-lg font-bold font-mono py-1">Discounts Received/Wallet</p>
                            <div className="flex flex-col px-4">
                                <p className="text-md font-mono p-0 py-[0px]">Total Discounts: ₹1,020</p>
                                <p className="text-md font-mono p-0 py-[0px]">Wallet Ballance: ₹1,200</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative flex p-5 py-2 border border-gray-200 w-[80%] shadow-sm rounded-md">
                        <div className="flex flex-col ml-2 w-full justify-between items-stretch relative">
                            <div className="flex flex-wrap items-center">
                                <div className="flex flex-col px-0 justify-between w-full">    
                                    <p className="text-2xl font-bold font-mono py-1">Your Recent Bookings.</p>
                                </div>
                            </div>

                            <div className="flex px-0 gap-1">
                                {[1,2,3].map((m)=>{return(<div className="flex flex-col px-1 gap-4 w-[33%] h-full space-x-2 relative">
                                    <div className="w-[100%] h-[120px]">
                                        <Image src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="noImg" className="rounded-md shadow-sm" fill={true} />
                                    </div>
                                    <p className="font-bold text-black">Xyz Hotel</p>
                                </div>)})}
                            </div>
                        </div>
                    </div>

                    <div className="relative flex p-5 py-2 border border-gray-200 w-[80%] shadow-sm rounded-md">
                        <div className="flex flex-col ml-2 w-full justify-between items-stretch relative">
                            <div className="flex flex-wrap items-center">
                                <div className="flex flex-col px-0 justify-between w-full">    
                                    <p className="text-2xl font-bold font-mono py-1">Orders(12)</p>
                                    <span className="absolute top-1 -right-4 rounded-md m-0 px-2 mx-0 text-blue-600 hover:text-blue-700 hover:bg-gray-100 hover:border hover:border-gray-100 mr-3 cursor-pointer py-1">View All</span>
                                </div>
                            </div>

                            <div className="flex px-1">
                                {[1,2,3,4,5].map((m)=>{return(<div className="flex flex-col px-1">
                                    <Image src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="noImg" className="rounded-sm shadow-sm" width={190} height={150} />
                                    <p className="text-sm font-candara p-0 py-[0px] text-gray-500">Order ID: <span className="font-mono">123456789</span></p>
                                    <p className="text-sm font-candara p-0 py-[0px] text-blue-900">Xyz Hotel |<b className="text-rose-500"> New Delhi</b></p>
                                </div>)})}
                            </div>
                        </div>
                    </div>

                    <div className="relative flex p-5 py-2 border border-gray-200 w-[80%] shadow-sm rounded-md">
                        <div className="flex flex-col ml-2 w-full justify-between items-stretch relative">
                            <div className="flex flex-wrap items-center">
                                <div className="flex flex-col px-0 justify-between w-full">    
                                    <p className="text-2xl font-bold font-mono py-1">Favorites(6)</p>
                                    <span className="absolute top-1 -right-4 rounded-md m-0 px-2 mx-0 text-blue-600 hover:text-blue-700 hover:bg-gray-100 hover:border hover:border-gray-100 mr-3 cursor-pointer py-1">View All</span>
                                </div>
                            </div>

                            <div className="flex px-1">
                                {[1,2,3,4,5].map((m)=>{return(<div className="flex flex-col px-1">
                                    <Image src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="noImg" className="rounded-sm shadow-sm" width={190} height={150} />
                                    <p className="text-sm font-candara p-0 py-[0px] text-blue-900">Xyz Hotel |<b className="text-rose-500"> New Delhi</b></p>
                                </div>)})}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    )
}
