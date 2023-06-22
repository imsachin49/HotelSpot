import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"
import Newsletter from "@/components/Newsletter";
import SearchResult from "@/components/SearchResult";
import TopBar from "@/components/TopBar";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import useFetch from "@/hooks/usefetch";

export default function Hotels() {
    const router = useRouter();
    const [isSmall, setIsSmall] = useState(false)
    const [destination, setDestination] = useState(router.query.destination);
    const [price, setPrice] = useState({ min: 0, max: 999 }); 
    const [options, setOptions] = useState([]); 
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
    }); 

    const handleFiltersChange = (newDestination, newPrice, newOptions, newDates) => {
        console.log("bvgfcdgh");
        setDestination(newDestination);
        setPrice(newPrice);
        setOptions(newOptions);
        setDates(newDates);
    };

    useEffect(() => {
        const handleResize = () => {
        setIsSmall(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // console.log(isSmall)
    const {data,loading,error,reFetch}=useFetch(`https://hotelspot-api.vercel.app/api/hotels/getHotels?city=${destination}&min=${price.min || 0}&max=${price.max || 999}`)
    // console.log(data)
    
    return (
        <>
            <Navbar isSmall={isSmall} />
            <TopBar type='detail' isSmall={isSmall} />
            <div className={'flex w-[100%] items-center justify-center rounded-lg mb-8'}>
                <div className="w-[1150px] relative rounded-lg mt-14 p-2">
                    <div className="grid grid-cols-10 w-[100%] relative">
                    {/* Left Filter Bar */}
                     <div className="md:col-span-3 h-fit p-2 md:sticky md:top-20 xs:absolute z-10 xs:-top-[124px] items-center justify-center md:bg-inherit opacity-[0.98] xs:hidden md:block">
                        {/* <Filters /> */}
                            <Filters onFiltersChange={handleFiltersChange} />
                     </div>   
                     {/* right search results */}
                     <div className="md:col-span-7 xs:col-span-10 h-fit w-full">
                        <SearchResult data={data} city={destination} />
                     </div>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    )
}
