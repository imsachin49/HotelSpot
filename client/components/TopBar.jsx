import React, { useState, useEffect } from "react";
import Search from "./Search";

export default function TopBar({type,isSmall}) {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="flex w-full items-center justify-center rounded-lg">
      <div className={`relative w-[1150px]  flex flex-col shadow-sh2 border border-gray-300 rounded-lg ${type!=='detail' ? 'md:h-[55vh] xs:h-[30vh]' : 'bg-[#003b95] h-[10vh]'} `}>
        {
          type!=='detail' ? 
            <div className="relative col-span-3 h-full bg-no-repeat bg-contain bg-center bg-[url('https://img.freepik.com/free-vector/friendly-receptionists-from-hotel-registration-desk-help-clients_74855-4420.jpg?size=626&ext=jpg')]" />:
            <div className="text-2xl text-white text-center mt-5">Filter coming soon..</div>
        }
        <div className={`absolute ${type !== 'detail' ? '-bottom-8' : '-bottom-8'} ${isSmall ? '-bottom-[240px]' : ''} ${(type === 'detail' && isSmall) ? '-bottom-[220px]' : ''} flex w-full items-center justify-center`}>
        {type!=='detail' && <Search isSmall={isSmall} />}
        </div>
      </div>
    </div>
  );
}
