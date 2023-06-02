import {TbArrowsSort} from 'react-icons/tb'
import Card from './Card'
export default function SearchResult({data,city}){
    return(
        <div className="md:ml-8 xs:-ml-2">
            <div className='flex justify-around h-[60px] items-center xs:flex-col md:flex-row'>
                <div className="text-2xl font-bold">{city}: {data?.length} properties found</div>
                <div className="border border-blue-600 text-md font-bold text-blue-600 hover:bg-blue-100 cursor-pointer flex items-center p-3 rounded-full py-1">Sort by : Price(inc) <TbArrowsSort className='ml-2' /></div>
            </div>
            <hr />
            <div className='flex w-full mt-3 flex-col flex-wrap h-auto'> 
                {
                    data.map((item,index)=>{
                       return <Card item={item} key={item._id} index={index} />
                    })
                }
            </div>
        </div>
    )
}
